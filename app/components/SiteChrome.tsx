export type Locale = "ar" | "en";

export function Logo({ locale }: { locale: Locale }) {
  return (
    <a className="logo" href={locale === "ar" ? "/ar" : "/en"} aria-label="Giftly">
      <span className="logo-mark" aria-hidden="true">
        <i />
        <b />
      </span>
      <span className="wordmark">Giftl<span>y</span></span>
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
        </div>
        <div className="footer-meta">
          <span>{ar ? "صُنع بعناية في المملكة العربية السعودية" : "Made with care in Saudi Arabia"}</span>
          <span>© 2026 Giftly</span>
        </div>
      </div>
    </footer>
  );
}
