export type Locale = "ar" | "en";

export function Logo({ locale }: { locale: Locale }) {
  return (
    <a className="logo" href={locale === "ar" ? "/ar" : "/en"} aria-label="Giftly">
      <img className="brand-logo-image" src="/giftly-logo-purple.png" alt="" />
    </a>
  );
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const base = ar ? "/ar" : "/en";

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Logo locale={locale} />
        <nav aria-label={ar ? "التنقل الرئيسي" : "Main navigation"}>
          <a href={`${base}#how-it-works`}>{ar ? "كيف تعمل" : "How it works"}</a>
          <a href={`${base}#safety`}>{ar ? "الأمان" : "Safety"}</a>
          <a href={`${base}/about`}>{ar ? "من نحن" : "About"}</a>
          <a href={`${base}/contact`}>{ar ? "تواصل معنا" : "Contact"}</a>
        </nav>
        <div className="header-actions">
          <a
            className="language-switch"
            href={ar ? "/en" : "/ar"}
            lang={ar ? "en" : "ar"}
            hrefLang={ar ? "en" : "ar"}
          >
            {ar ? "EN" : "العربية"}
          </a>
          <a className="nav-cta" href={`${base}#download`}>
            {ar ? "حمّل التطبيق" : "Get the app"} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const base = ar ? "/ar" : "/en";

  return (
    <footer>
      <div className="section-shell footer-grid">
        <div>
          <Logo locale={locale} />
          <p>{ar ? "من قلبك إلى بابهم." : "From your heart to their door."}</p>
        </div>
        <div className="footer-links">
          <a href={`${base}#how-it-works`}>{ar ? "كيف تعمل" : "How it works"}</a>
          <a href={`${base}/about`}>{ar ? "من نحن" : "About us"}</a>
          <a href={`${base}/couriers`}>{ar ? "انضم كمندوب" : "For couriers"}</a>
          <a href={`${base}/contact`}>{ar ? "تواصل معنا" : "Contact us"}</a>
          <a href="/privacy">{ar ? "سياسة الخصوصية" : "Privacy policy"}</a>
          <a href="/terms">{ar ? "الشروط والأحكام" : "Terms & conditions"}</a>
        </div>
        <div className="footer-meta">
          <span>{ar ? "صُنع بعناية في المملكة العربية السعودية" : "Made with care in Saudi Arabia"}</span>
          <span>{ar ? "شركة الأثر المبتكر · السجل التجاري: 7054298489" : "شركة الأثر المبتكر · Commercial Registration: 7054298489"}</span>
          <a href="mailto:bsm.am2025@outlook.com" dir="ltr">bsm.am2025@outlook.com</a>
          <span>
            {ar ? "الدعم: " : "Support: "}
            <a href="tel:0553111551" dir="ltr">0553111551</a>
          </span>
          <span>
            {ar ? "الأعمال: " : "Business: "}
            <a href="tel:0555025551" dir="ltr">0555025551</a>
          </span>
          <span>© 2026 Giftly</span>
        </div>
      </div>
    </footer>
  );
}
