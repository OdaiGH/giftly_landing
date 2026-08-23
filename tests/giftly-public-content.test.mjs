import assert from "node:assert/strict";
import test from "node:test";

async function render(path) {
  return fetch(`http://localhost:3001${path}`, {
    headers: { accept: "text/html" },
  });
}

async function renderedStyles(path) {
  const response = await render(path);
  assert.equal(response.status, 200);

  const html = await response.text();
  const stylesheet = html.match(/<link[^>]+href="([^"]+\.css[^"]*)"[^>]*>/)?.[1];
  assert.ok(stylesheet, "expected the rendered page to load a stylesheet");

  const css = await fetch(`http://localhost:3001${stylesheet}`).then((asset) => asset.text());
  return css;
}

test("localized pages deliver Tajwal and Coiny as their site-wide fonts", async () => {
  const css = await renderedStyles("/ar");

  assert.match(css, /family=Tajawal:wght@200/);
  assert.match(css, /family=Coiny/);
  assert.match(css, /\.locale-shell\[lang=\\?"ar\\?"\][^{]*\{[^}]*--body:\s*\\?"Tajawal/);
  assert.match(css, /\.locale-shell\[lang=\\?"en\\?"\][^{]*\{[^}]*--body:\s*\\?"Coiny/);
});

test("download section omits the heart decoration", async () => {
  const response = await render("/ar");
  assert.equal(response.status, 200);

  assert.doesNotMatch(await response.text(), /class="download-burst burst-two"/);
});

test("site styles expose the sage accent color", async () => {
  const css = await renderedStyles("/ar");

  assert.match(css, /--coral:\s*#4d9a73/i);
});

test("Arabic landing page presents the revised trust and Android copy", async () => {
  const response = await render("/ar");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /اكتب وصف الهدية اللي تتخيلها بلغتك العادية/);
  assert.match(html, /لا قوائم جامدة، ولا رسوم مفاجئة/);
  assert.match(html, /من تحب ينتظر/);
  assert.match(html, /هديتك ما لها انتظار/);
  assert.match(html, /لطيفة في فكرتها. آمنة في كل خطوة/);
  assert.match(html, /الكيكة ١٢٠ ر.س · الورد ٤٥ ر.س/);
  assert.match(html, /تم التوصيل في حي الروضة/);
  assert.match(html, /٩٥ ر.س/);
  assert.match(html, /نسخة Android — الإطلاق المتوقع خلال شهر/);
});

test("Arabic landing page renders the official supplied logo image", async () => {
  const response = await render("/ar");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<img[^>]+src="\/giftly-logo-purple\.png"[^>]*alt=""/);
});

test("contact page exposes the official email and mobile numbers", async () => {
  const response = await render("/ar/contact");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /bsm\.am2025@outlook\.com/);
  assert.match(html, /0553111551/);
  assert.match(html, /0555025551/);
});

test("privacy and terms pages render the supplied legal terms", async () => {
  const privacy = await render("/privacy");
  assert.equal(privacy.status, 200);
  assert.match(await privacy.text(), /تجمع Giftly البيانات الضرورية فقط لتنفيذ الطلب/);

  const terms = await render("/terms");
  assert.equal(terms.status, 200);
  assert.match(await terms.text(), /إثبات توصيل \(صورة \+ تحقق موقع\)/);
});
