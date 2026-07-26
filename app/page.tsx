const steps = [
  {
    number: "01",
    title: "Describe the gift",
    text: "Say what you have in mind, choose the city, and set the delivery date.",
    sample: "A chocolate birthday cake for Mom",
  },
  {
    number: "02",
    title: "Approve the plan",
    text: "A verified courier sources it and sends an itemized price for your approval.",
    sample: "Cake 120 SAR · Flowers 45 SAR",
  },
  {
    number: "03",
    title: "Pay, safely",
    text: "Your payment stays protected in-app while your courier gets everything ready.",
    sample: "165 SAR held securely",
  },
  {
    number: "04",
    title: "See it arrive",
    text: "A doorstep photo and GPS check confirm delivery before the courier is paid.",
    sample: "Delivered in Al Rawdah ✓",
  },
];

const trustPoints = [
  {
    icon: "✓",
    title: "Verified people only",
    text: "Every courier is ID-checked before they can accept a request.",
  },
  {
    icon: "◉",
    title: "Proof at the door",
    text: "A fresh delivery photo and location check show exactly where it arrived.",
  },
  {
    icon: "↔",
    title: "Chat all the way",
    text: "Fine-tune details, review the invoice, and stay close from request to handoff.",
  },
  {
    icon: "★",
    title: "Trust that grows",
    text: "Two-way ratings help thoughtful customers and reliable couriers stand out.",
  },
];

const faqs = [
  {
    question: "Can I really ask for any kind of gift?",
    answer:
      "Yes—describe the thoughtful, legal item you want in plain language. Your courier will confirm what they can source and send an itemized invoice before you pay.",
  },
  {
    question: "When does the courier receive my money?",
    answer:
      "Only after the gift is delivered and confirmed with doorstep photo and GPS proof. Until then, your payment stays protected in SAFE-GIFT.",
  },
  {
    question: "What if I need to change a detail?",
    answer:
      "Use in-app chat to coordinate with your courier before they purchase the items. You will always see and approve the final invoice.",
  },
  {
    question: "Where is SAFE-GIFT available?",
    answer:
      "SAFE-GIFT is made for Saudi cities, beginning with Riyadh and Jeddah, with more cities joining as the courier community grows.",
  },
];

function StoreButton({
  store,
  mark,
}: {
  store: string;
  mark: React.ReactNode;
}) {
  return (
    <a className="store-button" href="#download" aria-label={`Get SAFE-GIFT on ${store}`}>
      <span className="store-mark" aria-hidden="true">
        {mark}
      </span>
      <span>
        <small>Download on the</small>
        <strong>{store}</strong>
      </span>
    </a>
  );
}

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="SAFE-GIFT home">
      <span className="logo-mark" aria-hidden="true">
        <i />
        <b />
      </span>
      <span>SAFE-GIFT</span>
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <div className="nav-shell">
          <Logo />
          <nav aria-label="Main navigation">
            <a href="#how-it-works">How it works</a>
            <a href="#safety">Why it&apos;s safe</a>
            <a href="#couriers">For couriers</a>
          </nav>
          <a className="nav-cta" href="#download">
            Get the app <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow">
            <span aria-hidden="true">✦</span> Thoughtful gifting across Saudi Arabia
          </div>
          <h1 id="hero-title">
            Ask for anything.
            <span>Trust that it&apos;ll show up.</span>
          </h1>
          <p className="hero-lede">
            Describe the gift you imagine. A verified local courier makes it happen,
            while SAFE-GIFT protects your payment until it reaches the door.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#download">
              Send a thoughtful gift <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#how-it-works">
              See how it works <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-trust" aria-label="SAFE-GIFT trust benefits">
            <span><i>✓</i> ID-verified couriers</span>
            <span><i>✓</i> Protected payment</span>
            <span><i>✓</i> GPS delivery proof</span>
          </div>
        </div>

        <div className="hero-stage" aria-label="Example SAFE-GIFT request">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="phone">
            <div className="phone-top">
              <div className="mini-logo">
                <span className="logo-mark tiny" aria-hidden="true"><i /><b /></span>
                SAFE-GIFT
              </div>
              <span className="avatar">SA</span>
            </div>
            <div className="request-label">Your gift request</div>
            <h2>Make Mom&apos;s Friday sweeter</h2>
            <div className="gift-photo" aria-hidden="true">
              <div className="cake">
                <span className="candle" />
                <span className="icing" />
              </div>
              <span className="photo-note">Made just for her</span>
            </div>
            <div className="request-details">
              <div><span className="detail-icon">⌖</span><span><small>Deliver to</small>Jeddah · Al Rawdah</span></div>
              <div><span className="detail-icon">◷</span><span><small>When</small>Friday · 8:00 PM</span></div>
            </div>
            <div className="courier-strip">
              <span className="courier-avatar">N</span>
              <span><small>Your courier</small><strong>Noura · 4.9 ★</strong></span>
              <span className="chat-pill">Chat</span>
            </div>
          </div>

          <div className="floating-card invoice-card">
            <span className="float-icon invoice-icon">≡</span>
            <span><small>Invoice approved</small><strong>165 SAR</strong></span>
            <i>✓</i>
          </div>

          <div className="floating-card proof-card">
            <span className="float-icon proof-icon">⌖</span>
            <span><small>Doorstep verified</small><strong>Gift delivered!</strong></span>
          </div>

          <div className="heart-stamp" aria-hidden="true">
            <span>♥</span>
            <small>from you</small>
          </div>
        </div>
      </section>

      <div className="occasion-ticker" aria-label="Gift occasion ideas">
        <div>
          <span>Birthday cake</span><i>✦</i>
          <span>Thinking-of-you flowers</span><i>✦</i>
          <span>Anniversary surprise</span><i>✦</i>
          <span>A hard-to-find favorite</span><i>✦</i>
          <span>Welcome-home basket</span>
        </div>
      </div>

      <section className="process section-shell" id="how-it-works" aria-labelledby="process-title">
        <div className="section-heading">
          <div>
            <span className="kicker">A gift, from idea to doorstep</span>
            <h2 id="process-title">Four simple moments.<br />One thoughtful surprise.</h2>
          </div>
          <p>
            No catalog to scroll. No stranger to pay blindly. You stay in control at
            every step.
          </p>
        </div>
        <div className="process-grid">
          <div className="ribbon-path" aria-hidden="true">
            <span /><i /><span /><i /><span /><i /><span />
          </div>
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <span className="step-number">{step.number}</span>
              <div className="step-dot" aria-hidden="true"><i /></div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <div className="step-sample">{step.sample}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="safety" id="safety" aria-labelledby="safety-title">
        <div className="section-shell safety-shell">
          <div className="safety-copy">
            <span className="kicker light">Kind by design. Safe by default.</span>
            <h2 id="safety-title">Your money waits.<br /><em>Your gift doesn&apos;t.</em></h2>
            <p>
              You never send money into the unknown. SAFE-GIFT holds it safely while
              your courier shops, prepares, and delivers—then releases it only after
              the doorstep is verified.
            </p>
            <div className="escrow-note">
              <span className="lock-shape" aria-hidden="true"><i /></span>
              <span><strong>Protected until “delivered”</strong><small>No proof, no payout.</small></span>
            </div>
          </div>

          <div className="trust-board">
            <div className="trust-board-top">
              <span>SAFE-GIFT protection</span>
              <span className="live-pill"><i /> Active</span>
            </div>
            <div className="money-state">
              <small>Gift payment</small>
              <strong>165.00 <span>SAR</span></strong>
              <div className="held-pill"><span className="lock-mini">•</span> Held safely</div>
            </div>
            <div className="proof-rail">
              <div className="rail-row complete">
                <span>✓</span><div><strong>Invoice approved</strong><small>Today · 2:14 PM</small></div>
              </div>
              <div className="rail-row complete">
                <span>✓</span><div><strong>Courier arrived</strong><small>GPS matched · Al Rawdah</small></div>
              </div>
              <div className="rail-row current">
                <span>⌁</span><div><strong>Doorstep photo added</strong><small>Ready for your confirmation</small></div>
              </div>
            </div>
            <button className="confirm-button" type="button">Confirm delivery <span>→</span></button>
            <small className="release-copy">Payment releases to Noura after confirmation</small>
          </div>
        </div>
      </section>

      <section className="trust section-shell" aria-labelledby="trust-title">
        <div className="section-heading compact">
          <div>
            <span className="kicker">Every detail earns trust</span>
            <h2 id="trust-title">Care feels better<br />when it feels certain.</h2>
          </div>
          <p>Warm human help, backed by clear proof at every important moment.</p>
        </div>
        <div className="trust-grid">
          {trustPoints.map((point) => (
            <article className="trust-card" key={point.title}>
              <span className="trust-icon" aria-hidden="true">{point.icon}</span>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </article>
          ))}
          <article className="trust-card wallet-card">
            <div>
              <span className="trust-icon" aria-hidden="true">＋</span>
              <h3>Ready for the next occasion</h3>
              <p>Top up your wallet once, then send future gifts in a few taps.</p>
            </div>
            <div className="wallet-chip">
              <span>SAFE-GIFT wallet</span>
              <strong>320 <small>SAR</small></strong>
            </div>
          </article>
        </div>
      </section>

      <section className="courier-section section-shell" id="couriers" aria-labelledby="courier-title">
        <div className="courier-visual" aria-hidden="true">
          <div className="courier-blob" />
          <div className="courier-card-main">
            <div className="courier-head">
              <span className="courier-avatar big">M</span>
              <span><small>Verified courier</small><strong>Majed A.</strong></span>
              <i>✓</i>
            </div>
            <div className="nearby-label">Nearby requests</div>
            <div className="nearby-request">
              <span className="nearby-icon">♥</span>
              <span><strong>Anniversary flowers</strong><small>2.4 km away · Riyadh</small></span>
              <b>85 SAR</b>
            </div>
            <div className="nearby-request faded">
              <span className="nearby-icon">✦</span>
              <span><strong>Welcome-home basket</strong><small>4.1 km away · Riyadh</small></span>
            </div>
          </div>
          <div className="earnings-pill"><small>This week</small><strong>+ 680 SAR</strong></div>
        </div>
        <div className="courier-copy">
          <span className="kicker">A flexible way to earn</span>
          <h2 id="courier-title">Know your city?<br />Make someone&apos;s day.</h2>
          <p>
            Accept nearby requests that fit your time. Source thoughtful gifts, share
            clear invoices, and earn with every verified delivery.
          </p>
          <ul>
            <li><span>✓</span> Choose the requests you want</li>
            <li><span>✓</span> Keep everything organized in-app</li>
            <li><span>✓</span> Build your reputation with every delivery</li>
          </ul>
          <a className="button button-secondary" href="#download">Become a courier <span>→</span></a>
        </div>
      </section>

      <section className="faq section-shell" aria-labelledby="faq-title">
        <div className="faq-heading">
          <span className="kicker">Good to know</span>
          <h2 id="faq-title">A few questions,<br />already answered.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>
                {faq.question}
                <span aria-hidden="true">＋</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="download section-shell" id="download" aria-labelledby="download-title">
        <div className="download-inner">
          <div className="download-burst burst-one" aria-hidden="true">✦</div>
          <div className="download-burst burst-two" aria-hidden="true">♥</div>
          <div className="download-copy">
            <span className="kicker light">Made for thoughtful people</span>
            <h2 id="download-title">Someone you love<br />is worth the surprise.</h2>
            <p>Download SAFE-GIFT and make their day—from wherever you are.</p>
          </div>
          <div className="download-actions">
            <StoreButton store="App Store" mark="●" />
            <StoreButton store="Google Play" mark={<i className="play-mark" />} />
            <small>Coming soon to iOS and Android in Saudi Arabia</small>
          </div>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-grid">
          <div>
            <Logo />
            <p>From your heart to their door.</p>
          </div>
          <div className="footer-links">
            <a href="#how-it-works">How it works</a>
            <a href="#safety">Safety</a>
            <a href="#couriers">For couriers</a>
            <a href="mailto:hello@safe-gift.sa">Contact</a>
          </div>
          <div className="footer-meta">
            <span>Made with care in Saudi Arabia</span>
            <span>© 2026 SAFE-GIFT</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
