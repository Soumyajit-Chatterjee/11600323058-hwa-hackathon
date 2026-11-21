/* ChronoScent — Landing page */
import { products, brandConfig, siteImages } from '../data/products.js';
import { faqs } from '../data/faq.js';
import { PlaceholderImg } from '../components/PlaceholderImg.js';
import { Button } from '../components/Button.js';

export function Landing({ onRoute }) {
  const section = document.createElement('div');
  section.className = 'page landing';

  const starter = products.find((p) => p.id === 'starter');

  // --- 1. Hero: badge + headline + one-sentence promise + buttons + visual ---
  const hero = document.createElement('section');
  hero.className = 'hero';
  hero.innerHTML = `
    <div class="container hero-inner">
      <div class="hero-content">
        <span class="badge">Concept · No batteries · No Wi-Fi</span>
        <h1 class="hero-headline">ChronoScent</h1>
        <p class="hero-subtitle">"a dual-chamber chew pod concept for dogs left at home"</p>
        <p class="hero-body">Designed to engage your dog through chew, scent, warmth, and delayed reward — no Wi-Fi, batteries, cameras, or owner interaction needed after setup. Concept product — real-world timing, durability, and safety require physical testing and veterinary review.</p>
        <div class="hero-actions"></div>
      </div>
      <div class="hero-visual"></div>
    </div>
  `;

  const actions = hero.querySelector('.hero-actions');
  const shopBtn = Button({ text: 'View starter kit', variant: 'primary', onClick: () => onRoute('#/shop') });
  const howBtn = Button({ text: 'How it works', variant: 'outline', onClick: () => {
    onRoute('#/');
    setTimeout(() => {
      const el = document.getElementById('how-it-works');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }});
  actions.appendChild(shopBtn);
  actions.appendChild(howBtn);

  const visual = hero.querySelector('.hero-visual');
  const heroImg = document.createElement('div');
  heroImg.className = 'product-card hero-card';
  heroImg.appendChild(
    PlaceholderImg({
      w: siteImages.hero.w,
      h: siteImages.hero.h,
      desc: siteImages.hero.desc,
      src: siteImages.hero.src,
      srcSet: `${siteImages.hero.src} ${siteImages.hero.w}w`,
      sizes: '(max-width: 768px) 100vw, 380px',
      loading: 'eager',
      decoding: 'sync',
      fetchPriority: 'high',
      fit: 'contain',
    })
  );
  visual.appendChild(heroImg);

  // --- 2. Subheading strip (tagline) ---
  const subheadingStrip = document.createElement('section');
  subheadingStrip.className = 'subheading-strip';
  subheadingStrip.innerHTML = `
    <div class="container subheading-container">
      <p class="hero-subheading">${brandConfig.tagline}</p>
    </div>
  `;

  // --- 3. Why ordinary single stage toys lose attention ---
  const whyStrip = document.createElement('section');
  whyStrip.className = 'why-strip';
  whyStrip.innerHTML = `
    <div class="container">
      <div class="why-inner">
        <header class="why-header">
          <h2 class="section-title">Why ordinary single stage toys lose attention</h2>
        </header>
        <p class="hero-body">Concept: single stage chew toys offer one experience — a dog chews, the treat is gone, and the toy is done. Once solved, there is nothing left to return to, so interest fades quickly.</p>
      </div>
    </div>
  `;

  // --- 4. How ChronoScent works ---
  const how = document.createElement('section');
  how.id = 'how-it-works';
  how.className = 'how-it-works';
  how.innerHTML = `
    <div class="container">
      <header class="section-header page-header">
        <h2 class="section-title">How ChronoScent works</h2>
        <p class="section-intro">A concept sequence of chew, scent, warmth, and delayed reward intended to keep your dog engaged over time.</p>
      </header>
      <div class="steps-grid"></div>
    </div>
  `;

  const steps = [
    {
      num: 1,
      title: 'Load',
      text: 'Concept: load the timed treat chamber. The staged release mechanism is intended to dispense food over time without batteries or app control.'
    },
    {
      num: 2,
      title: 'Scent',
      text: 'Concept: insert a cotton scent strip with your worn clothing into the separate warmth chamber. Familiar scent intended to be there between chew sessions.'
    },
    {
      num: 3,
      title: 'Chew',
      text: 'Concept: heavy duty capsule shaped chew pod with two isolated chambers. Modular chambers rearrange as your dog improves.'
    },
    {
      num: 4,
      title: 'Settle',
      text: 'Concept: between cycles, your dog returns to the removable PCM warming disc and cotton scent strip. A familiar resting point without electronics.'
    }
  ];

  const grid = how.querySelector('.steps-grid');
  steps.forEach((s) => {
    const step = document.createElement('article');
    step.className = 'step card';
    step.innerHTML = `
      <div class="step-number">${s.num}</div>
      <h3 class="step-title">${s.title}</h3>
      <p>${s.text}</p>
    `;
    grid.appendChild(step);
  });

  // --- 5. The two isolated chambers ---
  const chambersStrip = document.createElement('section');
  chambersStrip.className = 'chambers-strip';
  chambersStrip.innerHTML = `
    <div class="container">
      <header class="section-header page-header">
        <h2 class="section-title">Two isolated chambers</h2>
      </header>
      <div class="chambers-overview">
        <div class="chamber-feature-image">
          ${PlaceholderImg({
            w: siteImages.dualChamberCutaway.w,
            h: siteImages.dualChamberCutaway.h,
            desc: siteImages.dualChamberCutaway.desc,
            src: siteImages.dualChamberCutaway.src,
            loading: 'lazy',
            decoding: 'async',
            fit: 'contain'
          }).outerHTML}
        </div>
      </div>
      <div class="chambers-grid">
        <div class="chamber-card card">
          <div class="chamber-image">
            ${PlaceholderImg({
              w: siteImages.chronoTreatChamber.w,
              h: siteImages.chronoTreatChamber.h,
              desc: siteImages.chronoTreatChamber.desc,
              src: siteImages.chronoTreatChamber.src,
              loading: 'lazy',
              decoding: 'async',
              fit: 'contain'
            }).outerHTML}
          </div>
          <h3 class="card-title">Timed treat chamber</h3>
          <p class="card-desc">Concept: staged food release intended to keep your dog working for rewards over time. Edible treat cartridges are replaceable.</p>
        </div>
        <div class="chamber-card card">
          <div class="chamber-image">
            ${PlaceholderImg({
              w: siteImages.thermoScentCore.w,
              h: siteImages.thermoScentCore.h,
              desc: siteImages.thermoScentCore.desc,
              src: siteImages.thermoScentCore.src,
              loading: 'lazy',
              decoding: 'async',
              fit: 'contain'
            }).outerHTML}
          </div>
          <h3 class="card-title">Warmth & scent chamber</h3>
          <p class="card-desc">Concept: removable PCM warming disc and cotton scent strip hold your scent. Your dog returns to warmth and familiarity between chews.</p>
        </div>
      </div>
    </div>
  `;

  // --- 6. Timeline: early, middle, later engagement ---
  const timelineStrip = document.createElement('section');
  timelineStrip.className = 'timeline-strip';
  timelineStrip.innerHTML = `
    <div class="container">
      <header class="section-header page-header">
        <h2 class="section-title">Engagement over time</h2>
      </header>
      <div class="timeline-grid">
        <div class="timeline-item card">
          <div class="timeline-image">
            ${PlaceholderImg({
              w: siteImages.timedTreatCartridges.w,
              h: siteImages.timedTreatCartridges.h,
              desc: siteImages.timedTreatCartridges.desc,
              src: siteImages.timedTreatCartridges.src,
              loading: 'lazy',
              decoding: 'async',
              fit: 'contain'
            }).outerHTML}
          </div>
          <h3 class="card-title">Early</h3>
          <p class="card-desc">Concept: your dog discovers the chew base and first treat release.</p>
        </div>
        <div class="timeline-item card">
          <div class="timeline-image">
            ${PlaceholderImg({
              w: siteImages.chronoTreatChamber.w,
              h: siteImages.chronoTreatChamber.h,
              desc: siteImages.chronoTreatChamber.desc,
              src: siteImages.chronoTreatChamber.src,
              loading: 'lazy',
              decoding: 'async',
              fit: 'contain'
            }).outerHTML}
          </div>
          <h3 class="card-title">Middle</h3>
          <p class="card-desc">Concept: scent strip and warming disc provide a familiar resting point between chew sessions.</p>
        </div>
        <div class="timeline-item card">
          <div class="timeline-image">
            ${PlaceholderImg({
              w: siteImages.dualChamberCutaway.w,
              h: siteImages.dualChamberCutaway.h,
              desc: siteImages.dualChamberCutaway.desc,
              src: siteImages.dualChamberCutaway.src,
              loading: 'lazy',
              decoding: 'async',
              fit: 'contain'
            }).outerHTML}
          </div>
          <h3 class="card-title">Later</h3>
          <p class="card-desc">Concept: staged treat release and rearrangeable chambers intended to keep the experience fresh as your dog improves.</p>
        </div>
      </div>
    </div>
  `;

  // --- 7. Materials and safety overview ---
  const materialsStrip = document.createElement('section');
  materialsStrip.className = 'materials-strip';
  materialsStrip.innerHTML = `
    <div class="container">
      <header class="section-header page-header">
        <h2 class="section-title">Materials & safety</h2>
      </header>
      <div class="materials-safety-grid">
        <div class="materials-list card">
          <h3 class="card-title">Materials</h3>
          <ul class="includes-list"></ul>
        </div>
        <div class="safety-note card">
          <h3 class="card-title">Safety & care</h3>
          <p class="card-desc">${starter.safetyNotes}</p>
        </div>
      </div>
    </div>
  `;

  const materialsList = materialsStrip.querySelector('.includes-list');
  starter.materials.forEach((mat) => {
    const li = document.createElement('li');
    li.textContent = mat;
    materialsList.appendChild(li);
  });

  // --- 8. FAQ (accordion, 5 questions) ---
  const faqStrip = document.createElement('section');
  faqStrip.id = 'faq';
  faqStrip.className = 'faq-strip';
  faqStrip.innerHTML = `
    <div class="container">
      <header class="section-header page-header">
        <h2 class="section-title">Frequently asked questions</h2>
      </header>
      <div class="faq-accordion" aria-label="FAQs"></div>
    </div>
  `;

  const faqAccordion = faqStrip.querySelector('.faq-accordion');
  faqs.slice(0, 5).forEach((item, index) => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';
    faqItem.setAttribute('data-open', 'false');

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'faq-question';
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', `faq-answer-${index}`);
    trigger.innerHTML = `
      <span class="faq-q">${item.q}</span>
      <span class="faq-toggle" aria-hidden="true">+</span>
    `;

    const answer = document.createElement('div');
    answer.className = 'faq-answer';
    answer.id = `faq-answer-${index}`;
    answer.setAttribute('hidden', 'true');
    answer.innerHTML = `<p class="faq-a">${item.a}</p>`;

    trigger.addEventListener('click', () => {
      const isOpen = faqItem.getAttribute('data-open') === 'true';
      const toggle = trigger.querySelector('.faq-toggle');
      faqItem.setAttribute('data-open', String(!isOpen));
      trigger.setAttribute('aria-expanded', String(!isOpen));
      toggle.textContent = !isOpen ? '−' : '+';
      if (!isOpen) {
        answer.removeAttribute('hidden');
      } else {
        answer.setAttribute('hidden', 'true');
      }
    });

    faqItem.appendChild(trigger);
    faqItem.appendChild(answer);
    faqAccordion.appendChild(faqItem);
  });

  // --- 9. Call to action ---
  const ctaStrip = document.createElement('section');
  ctaStrip.className = 'cta-strip';
  ctaStrip.innerHTML = `
    <div class="container">
      <div class="cta-content card">
        <h2 class="section-title">Ready to try ChronoScent?</h2>
        <p class="hero-body">Choose the Starter Kit or subscribe to the Refill Pack. No batteries, Wi-Fi, or app required. Concept product — real-world timing, durability, and safety require physical testing and veterinary review.</p>
        <div class="cta-actions"></div>
      </div>
    </div>
  `;

  const ctaActions = ctaStrip.querySelector('.cta-actions');
  const viewShopBtn = Button({ text: 'View starter kit', variant: 'primary', onClick: () => onRoute('#/shop') });
  const viewRefillBtn = Button({ text: 'View refill pack', variant: 'outline', onClick: () => onRoute('#/product/refill') });
  ctaActions.appendChild(viewShopBtn);
  ctaActions.appendChild(viewRefillBtn);

  section.appendChild(hero);
  section.appendChild(subheadingStrip);
  section.appendChild(whyStrip);
  section.appendChild(how);
  section.appendChild(chambersStrip);
  section.appendChild(timelineStrip);
  section.appendChild(materialsStrip);
  section.appendChild(faqStrip);
  section.appendChild(ctaStrip);

  return { el: section };
}
