import { SiteFooter, SiteHeader } from "./SiteChrome";

type LegalPageType = "privacy" | "terms";

const copy = {
  privacy: {
    title: "سياسة الخصوصية",
    paragraphs: [
      "تجمع Giftly البيانات الضرورية فقط لتنفيذ الطلب: الاسم، رقم الجوال، عنوان التوصيل، وتفاصيل الدفع عبر مزوّد دفع مرخّص.",
      "لا تُشارك بيانات المستخدم مع أطراف ثالثة إلا بالقدر اللازم لإتمام التوصيل (مثل المندوب المكلّف بالطلب).",
      "تُخزَّن بيانات الدفع لدى مزوّد الدفع المعتمد ولا تحتفظ Giftly ببيانات البطاقة البنكية مباشرة.",
      "يحق للمستخدم طلب حذف بياناته أو الاستفسار عنها عبر البريد الرسمي للشركة.",
      "تلتزم Giftly بأنظمة حماية البيانات الشخصية المعمول بها في المملكة العربية السعودية.",
    ],
  },
  terms: {
    title: "الشروط والأحكام",
    paragraphs: [
      "استخدام تطبيق Giftly يعني موافقة المستخدم على هذه الشروط.",
      "يلتزم المندوب بتقديم إثبات توصيل (صورة + تحقق موقع) قبل تحويل المبلغ إليه.",
      "يبقى مبلغ الطلب محجوزاً داخل النظام حتى تأكيد الاستلام من قِبل العميل.",
      "في حال وجود نزاع على الطلب، تتدخل Giftly كوسيط لحل الإشكال خلال مدة أقصاها ٤٨ ساعة.",
      "تحتفظ Giftly بحق تعليق أي حساب يخالف الشروط أو يُستخدم بشكل احتيالي.",
    ],
  },
} as const;

export function LegalPage({ type }: { type: LegalPageType }) {
  const content = copy[type];

  return (
    <div className="locale-shell" lang="ar" dir="rtl">
      <main>
        <SiteHeader locale="ar" />
        <section className="legal-page">
          <div className="section-shell legal-page-inner">
            <span className="kicker">Giftly</span>
            <h1>{content.title}</h1>
            <div className="legal-copy">
              {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>
        <SiteFooter locale="ar" />
      </main>
    </div>
  );
}
