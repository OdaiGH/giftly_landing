"use client";

import { FormEvent, useState } from "react";
import { Locale, SiteFooter, SiteHeader } from "./SiteChrome";

function SuccessMessage({
  locale,
  courier = false,
}: {
  locale: Locale;
  courier?: boolean;
}) {
  const ar = locale === "ar";
  return (
    <div className="form-success" role="status">
      <span aria-hidden="true">✓</span>
      <h2>{ar ? "وصلنا طلبك" : "We received your form"}</h2>
      <p>
        {courier
          ? ar
            ? "شكراً لانضمامك. سيراجع فريق SAFE-GIFT بياناتك ويتواصل معك قريباً لاستكمال التحقق."
            : "Thanks for joining. The SAFE-GIFT team will review your details and contact you soon to complete verification."
          : ar
            ? "شكراً لتواصلك معنا. سيرد عليك فريقنا خلال يوم عمل."
            : "Thanks for reaching out. Our team will reply within one business day."}
      </p>
      <a className="button button-secondary" href={ar ? "/ar" : "/en"}>
        {ar ? "العودة للرئيسية" : "Back to home"}
      </a>
    </div>
  );
}

export function CourierFormPage({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="locale-shell" lang={locale} dir={ar ? "rtl" : "ltr"}>
      <main>
        <SiteHeader locale={locale} />
        <section className="subpage-hero">
          <div className="section-shell form-page-grid">
            <div className="form-intro">
              <span className="kicker">{ar ? "انضم إلى مجتمع SAFE-GIFT" : "Join the SAFE-GIFT community"}</span>
              <h1>{ar ? "اصنع لحظة جميلة. واكسب بطريقتك." : "Make a beautiful moment. Earn your way."}</h1>
              <p>
                {ar
                  ? "املأ بياناتك وسيتواصل معك فريقنا للتحقق من هويتك وشرح الخطوات التالية."
                  : "Share your details and our team will contact you to verify your identity and explain the next steps."}
              </p>
              <div className="form-side-note">
                <span aria-hidden="true">✓</span>
                <div>
                  <strong>{ar ? "بياناتك تُستخدم للتحقق فقط" : "Your details are used for verification only"}</strong>
                  <small>{ar ? "لن تظهر بيانات هويتك للعملاء." : "Your identity details are never shown to customers."}</small>
                </div>
              </div>
            </div>
            <div className="form-card">
              {submitted ? (
                <SuccessMessage locale={locale} courier />
              ) : (
                <form onSubmit={submit}>
                  <div className="form-card-heading">
                    <span>{ar ? "طلب انضمام مندوب" : "Courier application"}</span>
                    <small>{ar ? "جميع الحقول مطلوبة" : "All fields are required"}</small>
                  </div>
                  <label>
                    <span>{ar ? "الاسم الكامل" : "Full name"}</span>
                    <input name="fullName" autoComplete="name" required placeholder={ar ? "اكتب اسمك كما يظهر في الهوية" : "As shown on your identity document"} />
                  </label>
                  <div className="field-row">
                    <label>
                      <span>{ar ? "نوع الهوية" : "Identity type"}</span>
                      <select name="identityType" required defaultValue="">
                        <option value="" disabled>{ar ? "اختر نوع الهوية" : "Choose identity type"}</option>
                        <option value="saudi-id">{ar ? "الهوية الوطنية السعودية" : "Saudi national ID"}</option>
                        <option value="passport">{ar ? "جواز سفر" : "Passport"}</option>
                      </select>
                    </label>
                    <label>
                      <span>{ar ? "رقم الهوية أو الجواز" : "ID or passport number"}</span>
                      <input name="identityNumber" required inputMode="text" placeholder={ar ? "أدخل الرقم" : "Enter the number"} />
                    </label>
                  </div>
                  <div className="field-row">
                    <label>
                      <span>{ar ? "رقم الجوال" : "Mobile number"}</span>
                      <input name="phone" type="tel" autoComplete="tel" required inputMode="tel" placeholder="+966 5X XXX XXXX" />
                    </label>
                    <label>
                      <span>{ar ? "المدينة" : "City"}</span>
                      <select name="city" required defaultValue="">
                        <option value="" disabled>{ar ? "اختر مدينتك" : "Choose your city"}</option>
                        <option value="riyadh">{ar ? "الرياض" : "Riyadh"}</option>
                        <option value="jeddah">{ar ? "جدة" : "Jeddah"}</option>
                        <option value="other">{ar ? "مدينة أخرى" : "Another city"}</option>
                      </select>
                    </label>
                  </div>
                  <label>
                    <span>{ar ? "البريد الإلكتروني" : "Email address"}</span>
                    <input name="email" type="email" autoComplete="email" required placeholder="name@example.com" />
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" required />
                    <span>{ar ? "أوافق على استخدام بياناتي للتحقق والتواصل بشأن طلب الانضمام." : "I agree that my details may be used for verification and application updates."}</span>
                  </label>
                  <button className="button button-primary form-submit" type="submit">
                    {ar ? "إرسال طلب الانضمام" : "Send application"} <span aria-hidden="true">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
        <SiteFooter locale={locale} />
      </main>
    </div>
  );
}

export function ContactFormPage({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="locale-shell" lang={locale} dir={ar ? "rtl" : "ltr"}>
      <main>
        <SiteHeader locale={locale} />
        <section className="subpage-hero contact-page">
          <div className="section-shell form-page-grid">
            <div className="form-intro">
              <span className="kicker">{ar ? "نحن هنا للمساعدة" : "We’re here to help"}</span>
              <h1>{ar ? "أرسل لنا رسالة." : "Send us a message."}</h1>
              <p>
                {ar
                  ? "لديك سؤال عن هدية أو دفعة أو طلب مندوب؟ اكتب لنا وسنوجهك للشخص المناسب."
                  : "Have a question about a gift, payment, or courier application? Write to us and we’ll route it to the right person."}
              </p>
              <div className="contact-mini-list">
                <div><span>⌖</span><p><strong>{ar ? "الفرع" : "Branch"}</strong><small>{ar ? "الرياض، المملكة العربية السعودية — بالموعد" : "Riyadh, Saudi Arabia — visits by appointment"}</small></p></div>
                <div><span>◷</span><p><strong>{ar ? "ساعات العمل" : "Working hours"}</strong><small>{ar ? "الأحد–الخميس · ٩ ص–٦ م" : "Sunday–Thursday · 9 AM–6 PM"}</small></p></div>
                <div><span>＠</span><p><strong>{ar ? "البريد" : "Email"}</strong><small>hello@safe-gift.sa</small></p></div>
              </div>
            </div>
            <div className="form-card">
              {submitted ? (
                <SuccessMessage locale={locale} />
              ) : (
                <form onSubmit={submit}>
                  <div className="form-card-heading">
                    <span>{ar ? "تواصل مع الفريق" : "Contact the team"}</span>
                    <small>{ar ? "نرد خلال يوم عمل" : "We reply within one business day"}</small>
                  </div>
                  <label>
                    <span>{ar ? "الاسم الكامل" : "Full name"}</span>
                    <input name="fullName" autoComplete="name" required placeholder={ar ? "اكتب اسمك" : "Enter your name"} />
                  </label>
                  <div className="field-row">
                    <label>
                      <span>{ar ? "البريد الإلكتروني" : "Email address"}</span>
                      <input name="email" type="email" autoComplete="email" required placeholder="name@example.com" />
                    </label>
                    <label>
                      <span>{ar ? "رقم الجوال" : "Mobile number"}</span>
                      <input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+966 5X XXX XXXX" />
                    </label>
                  </div>
                  <label>
                    <span>{ar ? "موضوع الرسالة" : "What can we help with?"}</span>
                    <select name="topic" required defaultValue="">
                      <option value="" disabled>{ar ? "اختر الموضوع" : "Choose a topic"}</option>
                      <option value="gift">{ar ? "طلب هدية" : "Gift request"}</option>
                      <option value="payment">{ar ? "الدفع والاسترداد" : "Payment or refund"}</option>
                      <option value="courier">{ar ? "الانضمام كمندوب" : "Courier application"}</option>
                      <option value="partnership">{ar ? "شراكة" : "Partnership"}</option>
                      <option value="other">{ar ? "موضوع آخر" : "Something else"}</option>
                    </select>
                  </label>
                  <label>
                    <span>{ar ? "رسالتك" : "Your message"}</span>
                    <textarea name="message" required rows={6} placeholder={ar ? "أخبرنا كيف يمكننا مساعدتك..." : "Tell us how we can help..."} />
                  </label>
                  <button className="button button-primary form-submit" type="submit">
                    {ar ? "إرسال الرسالة" : "Send message"} <span aria-hidden="true">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
        <SiteFooter locale={locale} />
      </main>
    </div>
  );
}
