import { Locale, SiteFooter, SiteHeader } from "./SiteChrome";

const copy = {
  ar: {
    eyebrow: "هدايا شخصية تصل لكل مدينة سعودية",
    title: "اطلب أي هدية.",
    titleAccent: "وثق بأنها ستصل.",
    lede:
      "صِف الهدية التي تتخيلها، وسيجهزها مندوب محلي موثّق. نحمي دفعتك حتى تصل الهدية إلى الباب.",
    primary: "أرسل هدية من القلب",
    secondary: "شاهد كيف تعمل",
    trust: ["مندوبون موثّقون", "دفع محمي", "إثبات توصيل بالموقع"],
    requestLabel: "طلب هديتك",
    requestTitle: "اجعل مساء الجمعة أحلى لأمي",
    madeFor: "صُنعت خصيصاً لها",
    deliverTo: "التوصيل إلى",
    location: "جدة · حي الروضة",
    when: "الموعد",
    date: "الجمعة · ٨:٠٠ مساءً",
    courier: "مندوبتك",
    chat: "محادثة",
    invoice: "تمت الموافقة على الفاتورة",
    proof: "تم التحقق عند الباب",
    delivered: "وصلت الهدية!",
    ticker: ["كيكة عيد ميلاد", "ورد للاطمئنان", "مفاجأة ذكرى سنوية", "هدية مفضلة ونادرة", "سلة ترحيب"],
    processKicker: "من الفكرة إلى باب من تحب",
    processTitle: "أربع لحظات بسيطة. مفاجأة واحدة لا تُنسى.",
    processIntro: "لا قوائم جامدة، ولا رسوم مفاجئة.",
    steps: [
      ["٠١", "صِف الهدية", "اكتب ما تتخيله، اختر المدينة وحدد موعد التوصيل.", "كيكة شوكولاتة لأمي"],
      ["٠٢", "وافق على الخطة", "يبحث مندوب موثّق عن الهدية ويرسل لك فاتورة واضحة.", "الكيكة ١٢٠ ر.س · الورد ٤٥ ر.س"],
      ["٠٣", "ادفع بأمان", "تبقى دفعتك محمية داخل التطبيق بينما يجهز المندوب الهدية.", "١٦٥ ر.س محفوظة بأمان"],
      ["٠٤", "شاهدها تصل", "صورة عند الباب وتحقق بالموقع قبل تحويل المبلغ للمندوب.", "تم التوصيل في حي الروضة ✓"],
    ],
    safetyKicker: "لطيفة في فكرتها. آمنة في كل خطوة.",
    safetyTitle: "من تحب ينتظر.",
    safetyAccent: "هديتك ما لها انتظار.",
    safetyText:
      "لن تدفع لشخص مجهول بلا ضمان. تحتفظ Giftly بالمبلغ أثناء التسوق والتجهيز والتوصيل، ولا تحوّله إلا بعد إثبات الوصول.",
    protected: "محمي حتى تأكيد التوصيل",
    noProof: "لا إثبات، لا تحويل.",
    boardTitle: "حماية Giftly",
    active: "نشطة",
    giftPayment: "قيمة الهدية",
    held: "محفوظة بأمان",
    approved: "تم اعتماد الفاتورة",
    arrived: "وصل المندوب",
    gps: "تطابق الموقع · حي الروضة",
    photo: "تمت إضافة صورة الباب",
    ready: "جاهزة لتأكيدك",
    confirm: "تأكيد الاستلام",
    release: "يُحوّل المبلغ إلى نورة بعد التأكيد",
    trustKicker: "كل تفصيل يبني الثقة",
    trustTitle: "العناية أجمل عندما تكون مطمئناً.",
    trustIntro: "تواصل إنساني دافئ، مع إثبات واضح في كل لحظة مهمة.",
    trustCards: [
      ["✓", "أشخاص موثّقون فقط", "نتحقق من هوية كل مندوب قبل أن يتمكن من قبول الطلبات."],
      ["◉", "إثبات عند الباب", "صورة حديثة وتحقق بالموقع يوضحان أين وصلت الهدية."],
      ["↔", "محادثة مستمرة", "عدّل التفاصيل وراجع الفاتورة وتابع طلبك من البداية للنهاية."],
      ["★", "ثقة تكبر مع الوقت", "تقييم متبادل يساعد العملاء والمندوبين المميزين على الظهور."],
    ],
    courierKicker: "دخل مرن يناسب وقتك",
    courierTitle: "تعرف مدينتك؟ اصنع يوم شخص ما.",
    courierText:
      "اختر الطلبات القريبة التي تناسب وقتك، جهز هدايا جميلة، وحقق دخلاً مع كل توصيل موثّق.",
    courierList: ["اختر الطلبات التي تناسبك", "نظم الفواتير والمحادثات داخل التطبيق", "ابنِ سمعتك مع كل توصيل"],
    courierCta: "انضم كمندوب",
    nearby: "طلبات قريبة",
    flowerRequest: "ورد لذكرى سنوية",
    basketRequest: "سلة ترحيب بالمنزل",
    week: "هذا الأسبوع",
    verifiedCourier: "مندوب موثّق",
    faqKicker: "معلومات مهمة",
    faqTitle: "أسئلة سريعة، وإجابات واضحة.",
    faqs: [
      ["هل يمكنني طلب أي هدية؟", "نعم، اكتب وصف الهدية اللي تتخيلها بلغتك العادية. يؤكد المندوب ما يمكن توفيره ويرسل فاتورة مفصلة قبل الدفع."],
      ["متى يستلم المندوب المبلغ؟", "بعد وصول الهدية وتأكيدها بصورة عند الباب وتحقق بالموقع. حتى ذلك الحين تبقى دفعتك محمية."],
      ["ماذا لو أردت تعديل تفصيل؟", "تواصل مع المندوب داخل التطبيق قبل الشراء. ستراجع دائماً الفاتورة النهائية وتوافق عليها."],
      ["أين تتوفر Giftly؟", "نبدأ في الرياض وجدة، وسنضيف مدناً سعودية أخرى مع نمو مجتمع المندوبين."],
    ],
    downloadKicker: "صُمم لأصحاب القلوب",
    downloadTitle: "من تحب يستحق المفاجأة.",
    downloadText: "حمّل Giftly واصنع يومهم الجميل أينما كنت.",
    appleLabel: "حمّل من",
    apple: "App Store",
    android: "نسخة Android — الإطلاق المتوقع خلال شهر",
  },
  en: {
    eyebrow: "Thoughtful gifting across Saudi Arabia",
    title: "Ask for anything.",
    titleAccent: "Trust that it’ll show up.",
    lede:
      "Describe the gift you imagine. A verified local courier makes it happen, while Giftly protects your payment until it reaches the door.",
    primary: "Send a thoughtful gift",
    secondary: "See how it works",
    trust: ["ID-verified couriers", "Protected payment", "GPS delivery proof"],
    requestLabel: "Your gift request",
    requestTitle: "Make Mom’s Friday sweeter",
    madeFor: "Made just for her",
    deliverTo: "Deliver to",
    location: "Jeddah · Al Rawdah",
    when: "When",
    date: "Friday · 8:00 PM",
    courier: "Your courier",
    chat: "Chat",
    invoice: "Invoice approved",
    proof: "Doorstep verified",
    delivered: "Gift delivered!",
    ticker: ["Birthday cake", "Thinking-of-you flowers", "Anniversary surprise", "A hard-to-find favorite", "Welcome-home basket"],
    processKicker: "A gift, from idea to doorstep",
    processTitle: "Four simple moments. One thoughtful surprise.",
    processIntro: "No rigid catalog. No stranger to pay blindly. You stay in control at every step.",
    steps: [
      ["01", "Describe the gift", "Say what you have in mind, choose the city, and set the delivery date.", "A chocolate birthday cake for Mom"],
      ["02", "Approve the plan", "A verified courier sources it and sends an itemized price for approval.", "Cake 120 · Flowers 45 SAR"],
      ["03", "Pay, safely", "Your payment stays protected while your courier gets everything ready.", "165 SAR held securely"],
      ["04", "See it arrive", "A doorstep photo and GPS check confirm delivery before payout.", "Delivered in Al Rawdah ✓"],
    ],
    safetyKicker: "Kind by design. Safe by default.",
    safetyTitle: "Your money waits.",
    safetyAccent: "Your gift doesn’t.",
    safetyText:
      "You never send money into the unknown. Giftly holds it safely while your courier shops, prepares, and delivers—then releases it only after the doorstep is verified.",
    protected: "Protected until “delivered”",
    noProof: "No proof, no payout.",
    boardTitle: "Giftly protection",
    active: "Active",
    giftPayment: "Gift payment",
    held: "Held safely",
    approved: "Invoice approved",
    arrived: "Courier arrived",
    gps: "GPS matched · Al Rawdah",
    photo: "Doorstep photo added",
    ready: "Ready for your confirmation",
    confirm: "Confirm delivery",
    release: "Payment releases to Noura after confirmation",
    trustKicker: "Every detail earns trust",
    trustTitle: "Care feels better when it feels certain.",
    trustIntro: "Warm human help, backed by clear proof at every important moment.",
    trustCards: [
      ["✓", "Verified people only", "Every courier is ID-checked before they can accept a request."],
      ["◉", "Proof at the door", "A fresh delivery photo and location check show exactly where it arrived."],
      ["↔", "Chat all the way", "Fine-tune details, review the invoice, and stay close throughout."],
      ["★", "Trust that grows", "Two-way ratings help thoughtful customers and reliable couriers stand out."],
    ],
    courierKicker: "A flexible way to earn",
    courierTitle: "Know your city? Make someone’s day.",
    courierText:
      "Accept nearby requests that fit your time. Source thoughtful gifts and earn with every verified delivery.",
    courierList: ["Choose the requests you want", "Keep invoices and chats organized in-app", "Build your reputation with every delivery"],
    courierCta: "Become a courier",
    nearby: "Nearby requests",
    flowerRequest: "Anniversary flowers",
    basketRequest: "Welcome-home basket",
    week: "This week",
    verifiedCourier: "Verified courier",
    faqKicker: "Good to know",
    faqTitle: "A few questions, already answered.",
    faqs: [
      ["Can I really ask for any kind of gift?", "Yes—describe the thoughtful, legal item you want in plain language. Your courier confirms what they can source and sends an itemized invoice before you pay."],
      ["When does the courier receive my money?", "Only after the gift is delivered and confirmed with doorstep photo and GPS proof. Until then, your payment stays protected."],
      ["What if I need to change a detail?", "Use in-app chat before the courier purchases the items. You will always see and approve the final invoice."],
      ["Where is Giftly available?", "We’re beginning with Riyadh and Jeddah, with more Saudi cities joining as the courier community grows."],
    ],
    downloadKicker: "Made for thoughtful people",
    downloadTitle: "Someone you love is worth the surprise.",
    downloadText: "Download Giftly and make their day—from wherever you are.",
    appleLabel: "Download on the",
    apple: "App Store",
    android: "Android and Google Play are coming later",
  },
};

export function LandingPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const ar = locale === "ar";
  const base = ar ? "/ar" : "/en";

  return (
    <div className="locale-shell" lang={locale} dir={ar ? "rtl" : "ltr"}>
      <main id="top">
        <SiteHeader locale={locale} />
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span aria-hidden="true">✦</span>{c.eyebrow}</div>
            <h1 id="hero-title">{c.title}<span>{c.titleAccent}</span></h1>
            <p className="hero-lede">{c.lede}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#download">{c.primary}<span aria-hidden="true">→</span></a>
              <a className="text-link" href="#how-it-works">{c.secondary}<span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-trust" aria-label={ar ? "مزايا الأمان" : "Trust benefits"}>
              {c.trust.map((item) => <span key={item}><i>✓</i>{item}</span>)}
            </div>
          </div>

          <div className="hero-stage" aria-label={ar ? "مثال لطلب هدية" : "Example gift request"}>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="phone">
              <div className="phone-top">
                <div className="mini-logo"><img className="brand-logo-image brand-logo-image-mini" src="/giftly-logo-purple.png" alt="" /></div>
                <span className="avatar">SA</span>
              </div>
              <div className="request-label">{c.requestLabel}</div>
              <h2>{c.requestTitle}</h2>
              <div className="gift-photo" aria-hidden="true">
                <div className="cake"><span className="candle" /><span className="icing" /></div>
                <span className="photo-note">{c.madeFor}</span>
              </div>
              <div className="request-details">
                <div><span className="detail-icon">⌖</span><span><small>{c.deliverTo}</small>{c.location}</span></div>
                <div><span className="detail-icon">◷</span><span><small>{c.when}</small>{c.date}</span></div>
              </div>
              <div className="courier-strip">
                <span className="courier-avatar">N</span>
                <span><small>{c.courier}</small><strong>{ar ? "نورة · ٤٫٩ ★" : "Noura · 4.9 ★"}</strong></span>
                <span className="chat-pill">{c.chat}</span>
              </div>
            </div>
            <div className="floating-card invoice-card">
              <span className="float-icon invoice-icon">≡</span><span><small>{c.invoice}</small><strong>{ar ? "١٦٥ ر.س" : "165 SAR"}</strong></span><i>✓</i>
            </div>
            <div className="floating-card proof-card">
              <span className="float-icon proof-icon">⌖</span><span><small>{c.proof}</small><strong>{c.delivered}</strong></span>
            </div>
            <div className="heart-stamp" aria-hidden="true"><span>♥</span><small>{ar ? "منك" : "from you"}</small></div>
          </div>
        </section>

        <div className="occasion-ticker"><div>
          {c.ticker.map((item, index) => <span className="ticker-item" key={item}>{item}{index < c.ticker.length - 1 && <i>✦</i>}</span>)}
        </div></div>

        <section className="process section-shell" id="how-it-works" aria-labelledby="process-title">
          <div className="section-heading">
            <div><span className="kicker">{c.processKicker}</span><h2 id="process-title">{c.processTitle}</h2></div>
            <p>{c.processIntro}</p>
          </div>
          <div className="process-grid">
            <div className="ribbon-path" aria-hidden="true"><span /><i /><span /><i /><span /><i /><span /></div>
            {c.steps.map(([number, title, text, sample]) => (
              <article className="step-card" key={number}>
                <span className="step-number">{number}</span><div className="step-dot" aria-hidden="true"><i /></div>
                <h3>{title}</h3><p>{text}</p><div className="step-sample">{sample}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="safety" id="safety" aria-labelledby="safety-title">
          <div className="section-shell safety-shell">
            <div className="safety-copy">
              <span className="kicker light">{c.safetyKicker}</span>
              <h2 id="safety-title">{c.safetyTitle}<br /><em>{c.safetyAccent}</em></h2>
              <p>{c.safetyText}</p>
              <div className="escrow-note"><span className="lock-shape" aria-hidden="true"><i /></span><span><strong>{c.protected}</strong><small>{c.noProof}</small></span></div>
            </div>
            <div className="trust-board">
              <div className="trust-board-top"><span>{c.boardTitle}</span><span className="live-pill"><i />{c.active}</span></div>
              <div className="money-state"><small>{c.giftPayment}</small><strong>{ar ? "١٦٥٫٠٠" : "165.00"} <span>{ar ? "ر.س" : "SAR"}</span></strong><div className="held-pill"><span className="lock-mini">•</span>{c.held}</div></div>
              <div className="proof-rail">
                <div className="rail-row complete"><span>✓</span><div><strong>{c.approved}</strong><small>{ar ? "اليوم · ٢:١٤ م" : "Today · 2:14 PM"}</small></div></div>
                <div className="rail-row complete"><span>✓</span><div><strong>{c.arrived}</strong><small>{c.gps}</small></div></div>
                <div className="rail-row current"><span>⌁</span><div><strong>{c.photo}</strong><small>{c.ready}</small></div></div>
              </div>
              <button className="confirm-button" type="button">{c.confirm}<span>→</span></button>
              <small className="release-copy">{c.release}</small>
            </div>
          </div>
        </section>

        <section className="trust section-shell" aria-labelledby="trust-title">
          <div className="section-heading compact">
            <div><span className="kicker">{c.trustKicker}</span><h2 id="trust-title">{c.trustTitle}</h2></div>
            <p>{c.trustIntro}</p>
          </div>
          <div className="trust-grid trust-grid-four">
            {c.trustCards.map(([icon, title, text]) => <article className="trust-card" key={title}><span className="trust-icon" aria-hidden="true">{icon}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="courier-section section-shell" id="couriers" aria-labelledby="courier-title">
          <div className="courier-visual" aria-hidden="true">
            <div className="courier-blob" />
            <div className="courier-card-main">
              <div className="courier-head"><span className="courier-avatar big">M</span><span><small>{c.verifiedCourier}</small><strong>{ar ? "ماجد أ." : "Majed A."}</strong></span><i>✓</i></div>
              <div className="nearby-label">{c.nearby}</div>
              <div className="nearby-request"><span className="nearby-icon">♥</span><span><strong>{c.flowerRequest}</strong><small>{ar ? "٢٫٤ كم · الرياض" : "2.4 km · Riyadh"}</small></span><b>{ar ? "٨٥ ر.س" : "85 SAR"}</b></div>
              <div className="nearby-request faded"><span className="nearby-icon">✦</span><span><strong>{c.basketRequest}</strong><small>{ar ? "٤٫١ كم · الرياض" : "4.1 km · Riyadh"}</small></span><b>{ar ? "٩٥ ر.س" : "95 SAR"}</b></div>
            </div>
            <div className="earnings-pill"><small>{c.week}</small><strong>{ar ? "+ ٦٨٠ ر.س" : "+ 680 SAR"}</strong></div>
          </div>
          <div className="courier-copy">
            <span className="kicker">{c.courierKicker}</span><h2 id="courier-title">{c.courierTitle}</h2><p>{c.courierText}</p>
            <ul>{c.courierList.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul>
            <a className="button button-secondary" href={`${base}/couriers`}>{c.courierCta}<span>→</span></a>
          </div>
        </section>

        <section className="faq section-shell" aria-labelledby="faq-title">
          <div className="faq-heading"><span className="kicker">{c.faqKicker}</span><h2 id="faq-title">{c.faqTitle}</h2></div>
          <div className="faq-list">{c.faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span aria-hidden="true">＋</span></summary><p>{answer}</p></details>)}</div>
        </section>

        <section className="download section-shell" id="download" aria-labelledby="download-title">
          <div className="download-inner">
            <div className="download-burst burst-one" aria-hidden="true">✦</div><div className="download-burst burst-two" aria-hidden="true">♥</div>
            <div className="download-copy"><span className="kicker light">{c.downloadKicker}</span><h2 id="download-title">{c.downloadTitle}</h2><p>{c.downloadText}</p></div>
            <div className="download-actions apple-only">
              <a className="store-button" href="#" aria-label={c.apple}><span className="store-mark" aria-hidden="true">●</span><span><small>{c.appleLabel}</small><strong>{c.apple}</strong></span></a>
              <div className="android-later"><span className="play-mark" aria-hidden="true" /><span>{c.android}</span></div>
            </div>
          </div>
        </section>
        <SiteFooter locale={locale} />
      </main>
    </div>
  );
}
