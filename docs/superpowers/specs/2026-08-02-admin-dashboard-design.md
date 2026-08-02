# Admin dashboard design

## Goal

Add a simple, protected admin area for managing every application data table without workflow constraints.

## Access

- `/admin` is protected by a simple password sign-in.
- The password is configured with an `ADMIN_PASSWORD` environment variable.
- A signed-in session is stored in a secure, HTTP-only cookie.

## Dashboard

- The dashboard lists every registered database table as its own navigation entry.
- Table navigation is ordered alphabetically by display name.
- Each table has a dedicated list page and a create/edit form.
- Admins can create, view, update, and delete any record without status-based restrictions.

## Relationships

- Relation fields are rendered as populated dropdowns instead of raw IDs.
- For one-to-one relations, records already selected by another record are omitted from the selector.
- The initial schema has no relationships; the admin metadata layer will support them as future tables are added.

## Initial tables

- Contact messages
- Courier applications

## Error handling

- Sign-in rejects an invalid password with an inline error.
- Admin write operations return validation errors and do not change data on failure.
- Missing records show a clear not-found response.

## Verification

- Add focused tests for sign-in protection and the admin data routes.
- Run the project test suite before delivery.
