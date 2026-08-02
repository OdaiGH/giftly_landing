# Admin Dashboard Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a password-protected admin dashboard that lets an administrator create, read, update, and delete every Giftly data record.

**Architecture:** A small metadata registry describes each Drizzle table, its editable fields, and any future relations. Server-side admin routes use the registry for CRUD, while admin pages use it to render independent, alphabetically ordered table views. Authentication is a signed, HTTP-only cookie established by a password form.

**Tech Stack:** Next.js/Vinext, React 19, TypeScript, Drizzle ORM, Cloudflare D1, Node built-in test runner.

## Global Constraints

- The admin sign-in password comes from the `ADMIN_PASSWORD` environment variable.
- Every registered database table is a separate admin section, ordered alphabetically by display name.
- Administrators can create, edit, and delete all records without status or workflow constraints.
- Relationship fields use related-record dropdowns, never manually entered IDs.
- One-to-one dropdowns exclude related records already in use, except the record currently being edited.
- The initial registry covers Contact messages and Courier applications.

---

### Task 1: Define server-side admin authentication

**Files:**
- Create: `app/admin/auth.ts`
- Create: `app/admin/login/page.tsx`
- Create: `app/api/admin/session/route.ts`
- Test: `tests/admin-auth.test.mjs`

**Interfaces:**
- Produces `isAdmin(request: Request): Promise<boolean>` for pages and API routes.
- Produces `requireAdmin(request: Request): Promise<Response | null>`; a non-null response is a `401` JSON response.
- Produces `POST /api/admin/session` and `DELETE /api/admin/session`.

- [ ] **Step 1: Write the failing authentication tests**

```js
test('rejects admin API requests without a valid session', async () => {
  const response = await adminApi.fetch(new Request('http://localhost/api/admin/tables'));
  assert.equal(response.status, 401);
});

test('creates and clears an admin session only for the configured password', async () => {
  const invalid = await login('incorrect');
  assert.equal(invalid.status, 401);
  const valid = await login('test-admin-password');
  assert.equal(valid.status, 204);
  assert.match(valid.headers.get('set-cookie'), /giftly_admin_session=/);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tests/admin-auth.test.mjs`

Expected: FAIL because `/api/admin/session` and the admin route do not exist.

- [ ] **Step 3: Implement `app/admin/auth.ts`**

```ts
import { createHmac, timingSafeEqual } from 'node:crypto';

const cookieName = 'giftly_admin_session';

function secret() {
  const value = process.env.ADMIN_PASSWORD;
  if (!value) throw new Error('ADMIN_PASSWORD is required');
  return value;
}

function token() {
  return createHmac('sha256', secret()).update('giftly-admin-v1').digest('base64url');
}

export async function isAdmin(request: Request) {
  const value = request.headers.get('cookie')?.match(/(?:^|; )giftly_admin_session=([^;]+)/)?.[1] ?? '';
  const expected = token();
  return value.length === expected.length && timingSafeEqual(Buffer.from(value), Buffer.from(expected));
}

export async function requireAdmin(request: Request) {
  return (await isAdmin(request)) ? null : Response.json({ error: 'unauthorized' }, { status: 401 });
}

export function adminSessionCookie() {
  return `${cookieName}=${token()}; Path=/; HttpOnly; SameSite=Strict; Secure; Max-Age=28800`;
}

export function clearAdminSessionCookie() {
  return `${cookieName}=; Path=/; HttpOnly; SameSite=Strict; Secure; Max-Age=0`;
}
```

- [ ] **Step 4: Implement the session route and login page**

```ts
// app/api/admin/session/route.ts
import { adminSessionCookie, clearAdminSessionCookie } from '@/app/admin/auth';

export async function POST(request: Request) {
  const { password } = await request.json() as { password?: string };
  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return Response.json({ error: 'invalid_password' }, { status: 401 });
  }
  return new Response(null, { status: 204, headers: { 'Set-Cookie': adminSessionCookie() } });
}
export async function DELETE() {
  return new Response(null, { status: 204, headers: { 'Set-Cookie': clearAdminSessionCookie() } });
}
```

Make `app/admin/login/page.tsx` a client form that POSTs `{ password }`, displays “Incorrect password.” for a `401`, and redirects to `/admin` after `204`.

- [ ] **Step 5: Run the authentication tests**

Run: `node --test tests/admin-auth.test.mjs`

Expected: PASS.

- [ ] **Step 6: Commit the authentication feature**

```bash
git add app/admin/auth.ts app/admin/login/page.tsx app/api/admin/session/route.ts tests/admin-auth.test.mjs
git commit -m "feat: add admin sign-in"
```

### Task 2: Create the admin table registry and CRUD API

**Files:**
- Create: `app/admin/registry.ts`
- Create: `app/api/admin/tables/route.ts`
- Create: `app/api/admin/tables/[table]/route.ts`
- Create: `app/api/admin/tables/[table]/[id]/route.ts`
- Test: `tests/admin-crud.test.mjs`

**Interfaces:**
- Produces `adminTables`, an alphabetically ordered array of `AdminTableDefinition`.
- `GET /api/admin/tables` returns table definitions.
- `GET|POST /api/admin/tables/:table` lists or creates records.
- `GET|PATCH|DELETE /api/admin/tables/:table/:id` reads, updates, or deletes a record.

- [ ] **Step 1: Write failing CRUD tests**

```js
test('lists all tables alphabetically', async () => {
  const response = await authedFetch('/api/admin/tables');
  assert.deepEqual((await response.json()).map((table) => table.label), [
    'Contact messages', 'Courier applications'
  ]);
});

test('allows an administrator to create, edit, and delete a contact message', async () => {
  const created = await authedFetch('/api/admin/tables/contact-messages', {
    method: 'POST', body: JSON.stringify(contactPayload)
  });
  assert.equal(created.status, 201);
  const { id } = await created.json();
  assert.equal((await authedFetch(`/api/admin/tables/contact-messages/${id}`, {
    method: 'PATCH', body: JSON.stringify({ status: 'handled' })
  })).status, 200);
  assert.equal((await authedFetch(`/api/admin/tables/contact-messages/${id}`, { method: 'DELETE' })).status, 204);
});
```

- [ ] **Step 2: Run the CRUD tests to verify they fail**

Run: `node --test tests/admin-crud.test.mjs`

Expected: FAIL because no registry or admin table routes exist.

- [ ] **Step 3: Implement `app/admin/registry.ts`**

Define a discriminated field schema and the two initial tables:

```ts
export type AdminField = {
  key: string; label: string; type: 'text' | 'textarea' | 'select' | 'readonly'; required?: boolean;
  options?: readonly { value: string; label: string }[];
  relation?: { table: string; cardinality: 'many-to-one' | 'one-to-one' };
};
export type AdminTableDefinition = {
  slug: string; label: string; fields: readonly AdminField[];
  list: () => Promise<Record<string, unknown>[]>;
  create: (values: Record<string, unknown>) => Promise<number>;
  get: (id: number) => Promise<Record<string, unknown> | undefined>;
  update: (id: number, values: Record<string, unknown>) => Promise<boolean>;
  remove: (id: number) => Promise<boolean>;
};

export const adminTables = [contactMessagesDefinition, courierApplicationsDefinition]
  .sort((a, b) => a.label.localeCompare(b.label));
export const getAdminTable = (slug: string) => adminTables.find((table) => table.slug === slug);
```

Use the existing Drizzle schema tables. Mark `id` and `createdAt` as `readonly`. Give status a select with `new` and `handled`; preserve editable text status entries if they exist. The courier identity type selector provides `saudi-id` and `passport`; locale selector provides `ar` and `en`.

- [ ] **Step 4: Implement authenticated generic CRUD routes**

Each handler begins with `const denied = await requireAdmin(request); if (denied) return denied;`. Return `404` for unknown table slugs and missing IDs. Parse and pass editable field values only; do not apply public-form validation rules or status restrictions. Use `201` for create, `200` for get/update, and `204` for successful delete.

- [ ] **Step 5: Run the CRUD tests**

Run: `node --test tests/admin-crud.test.mjs`

Expected: PASS.

- [ ] **Step 6: Commit the registry and CRUD API**

```bash
git add app/admin/registry.ts app/api/admin/tables tests/admin-crud.test.mjs
git commit -m "feat: add unrestricted admin record management"
```

### Task 3: Build independent admin table pages and relation selectors

**Files:**
- Create: `app/admin/page.tsx`
- Create: `app/admin/[table]/page.tsx`
- Create: `app/admin/components/AdminShell.tsx`
- Create: `app/admin/components/AdminRecordForm.tsx`
- Modify: `app/globals.css`
- Test: `tests/admin-pages.test.mjs`

**Interfaces:**
- `AdminShell({ children, currentTable })` renders alphabetically sorted navigation for every `adminTables` member.
- `AdminRecordForm({ table, record, relations })` renders editable fields and relationship dropdowns from registry metadata.
- `/admin` redirects to the first alphabetical table page.
- `/admin/:table` supports list, create, and edit interactions for that table.

- [ ] **Step 1: Write failing page-render tests**

```js
test('admin root redirects to the alphabetically first table', async () => {
  const response = await renderAdmin('/admin', adminCookie);
  assert.equal(response.status, 307);
  assert.equal(response.headers.get('location'), '/admin/contact-messages');
});

test('each admin table page shows its own navigation item and CRUD controls', async () => {
  const html = await (await renderAdmin('/admin/courier-applications', adminCookie)).text();
  assert.match(html, /Contact messages/);
  assert.match(html, /Courier applications/);
  assert.match(html, /Add record/);
  assert.match(html, /Edit/);
  assert.match(html, /Delete/);
});
```

- [ ] **Step 2: Run the page tests to verify they fail**

Run: `node --test tests/admin-pages.test.mjs`

Expected: FAIL because `/admin` pages do not exist.

- [ ] **Step 3: Implement protected pages and the table shell**

Use server page guards that inspect request cookies through `headers()` and redirect unauthenticated visitors to `/admin/login`. Use `adminTables` directly to render sidebar links in alphabetical order and redirect `/admin` to `/admin/contact-messages`.

```tsx
export function AdminShell({ children, currentTable }: Props) {
  return <main className="admin-shell">
    <nav>{adminTables.map((table) => <Link key={table.slug} href={`/admin/${table.slug}`}>{table.label}</Link>)}</nav>
    <section>{children}</section>
  </main>;
}
```

- [ ] **Step 4: Implement the form and relationship dropdown behavior**

Render all normal fields from metadata. For `relation` fields, fetch related rows and render labels in `<option value={String(row.id)}>` elements. For `cardinality: 'one-to-one'`, omit rows whose IDs are already used by records other than the record being edited. Never render a raw ID text input for a relation.

```tsx
const options = field.relation?.cardinality === 'one-to-one'
  ? relatedRows.filter((row) => !usedIds.has(row.id) || row.id === record?.[field.key])
  : relatedRows;
```

Submit creates with `POST /api/admin/tables/:table` and updates with `PATCH /api/admin/tables/:table/:id`; make the Delete button require a browser `confirm()` and call `DELETE`.

- [ ] **Step 5: Add responsive, accessible admin styles**

Add focused `admin-` styles in `app/globals.css`: a collapsible/wrapping navigation layout below 768px, visible focus indicators, high-contrast form controls, and a horizontally scrollable record table for narrow viewports.

- [ ] **Step 6: Run page tests**

Run: `node --test tests/admin-pages.test.mjs`

Expected: PASS.

- [ ] **Step 7: Commit the admin interface**

```bash
git add app/admin app/globals.css tests/admin-pages.test.mjs
git commit -m "feat: add responsive admin dashboard"
```

### Task 4: Document configuration and verify the completed feature

**Files:**
- Modify: `README.md`
- Modify: `.env.example`

**Interfaces:**
- Documents `ADMIN_PASSWORD` and `/admin/login` for local and deployed environments.

- [ ] **Step 1: Add the configuration example**

Create `.env.example` with exactly:

```dotenv
ADMIN_PASSWORD=replace-with-a-long-random-password
```

Add an “Admin dashboard” README section explaining that the password must be set in the deployment environment, then visit `/admin/login` to manage Contact messages and Courier applications.

- [ ] **Step 2: Run the complete verification suite**

Run: `npm run lint && npm run build && node --test tests/admin-auth.test.mjs tests/admin-crud.test.mjs tests/admin-pages.test.mjs`

Expected: all commands exit with code `0`.

- [ ] **Step 3: Commit documentation and final verification state**

```bash
git add README.md .env.example
git commit -m "docs: document admin dashboard configuration"
git status --short --branch
```
