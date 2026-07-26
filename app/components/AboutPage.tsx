import { Locale, SiteFooter, SiteHeader } from "./SiteChrome";

export function AboutPage({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const base = ar ? "/ar" : "/en";
  return (
    <div className="locale-shell" lang={locale} dir={ar ? "rtl" : "ltr"}>
      <main>
        <SiteHeader locale={locale} />
        <section className="about-hero">
          <div className="section-shell">
            <span className="kicker">{ar ? "عن SAFE-GIFT" : "About SAFE-GIFT"}</span>
            <h1>{ar ? "نحن نبني الثقة حول الهدية." : "We build trust around the gift."}</h1>
            <p>
              {ar
                ? "SAFE-GIFT ليست تطبيق توصيل ولا متجر هدايا جاهز. إنها مساحة آمنة تحول فكرتك الشخصية إلى هدية حقيقية تصل لمن تحب."
                : "SAFE-GIFT isn’t a delivery app or a fixed gift catalog. It’s a safe layer that turns your personal idea into a real gift that reaches someone you care about."}
            </p>
          </div>
        </section>
        <section className="about-story section-shell">
          <div className="about-statement">
            <span aria-hidden="true">♥</span>
            <h2>{ar ? "بدأنا من سؤال بسيط:" : "We started with one simple question:"}</h2>
            <p>{ar ? "لماذا يصعب إرسال هدية شخصية لشخص بعيد، من دون القلق من الاحتيال أو عدم وصولها؟" : "Why is it so hard to send something personal from afar without worrying about scams or whether it will arrive?"}</p>
          </div>
          <div className="about-values">
            <article><span>01</span><h3>{ar ? "الهدية تبدأ بك" : "The gift starts with you"}</h3><p>{ar ? "لا نفرض عليك كتالوجاً. أنت تصف الفكرة ونحن نساعدها على الوصول." : "We don’t force a catalog. You describe the idea; we help it arrive."}</p></article>
            <article><span>02</span><h3>{ar ? "الثقة واضحة" : "Trust stays visible"}</h3><p>{ar ? "فاتورة مفصلة ودفع محمي وصورة موثقة عند الباب." : "An itemized invoice, protected payment, and verified doorstep photo."}</p></article>
            <article><span>03</span><h3>{ar ? "المحلي يصنع الفرق" : "Local makes it personal"}</h3><p>{ar ? "مندوب يعرف المدينة ويستطيع إيجاد التفاصيل التي تجعل الهدية مميزة." : "A courier who knows the city can find the details that make the gift special."}</p></article>
          </div>
        </section>
        <section className="visit-section">
          <div className="section-shell visit-grid">
            <div>
              <span className="kicker light">{ar ? "تواصل معنا" : "Visit or contact us"}</span>
              <h2>{ar ? "فريق قريب، حتى لو كانت الهدية بعيدة." : "A nearby team, even when the gift is far away."}</h2>
            </div>
            <div className="visit-cards">
              <article><span>⌖</span><div><small>{ar ? "موقع الفرع" : "Branch location"}</small><strong>{ar ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}</strong><p>{ar ? "الزيارات بالموعد المسبق" : "Visits by prior appointment"}</p></div></article>
              <article><span>◷</span><div><small>{ar ? "ساعات العمل" : "Working hours"}</small><strong>{ar ? "الأحد إلى الخميس" : "Sunday to Thursday"}</strong><p>{ar ? "٩:٠٠ ص – ٦:٠٠ م" : "9:00 AM – 6:00 PM"}</p></div></article>
              <article><span>＠</span><div><small>{ar ? "البريد الإلكتروني" : "Email address"}</small><strong>hello@safe-gift.sa</strong><p>{ar ? "نرد خلال يوم عمل" : "Replies within one business day"}</p></div></article>
            </div>
            <a className="button button-secondary" href={`${base}/contact`}>{ar ? "أرسل لنا رسالة" : "Send us a message"} <span>→</span></a>
          </div>
        </section>
        <SiteFooter locale={locale} />
      </main>
    </div>
  );
}
