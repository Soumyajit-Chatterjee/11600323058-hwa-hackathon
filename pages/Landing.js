/* ChronoScent — Landing page (hero + how it works + strips) */
import { PlaceholderImg } from '../components/PlaceholderImg.js';
import { Button } from '../components/Button.js';

export function Landing({ onRoute }) {
  const section = document.createElement('div');
  section.className = 'page landing';

  // --- Hero: badge + headline + buttons + visual ---
  const hero = document.createElement('section');
  hero.className = 'hero';
  hero.innerHTML = `
    <div class="container hero-inner">
      <div class="hero-content">
        <span class="badge">Purely mechanical · No batteries · No Wi-Fi</span>
        <h1 class="hero-headline">A whole home cycle with a trace of you at the center</h1>
        <div class="hero-actions"></div>
      </div>
      <div class="hero-visual"></div>
    </div>
  `;

  const actions = hero.querySelector('.hero-actions');
  const shopBtn = Button({ text: 'Choose a kit', variant: 'primary', onClick: () => onRoute('#/shop') });
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
      w: 500,
      h: 520,
      desc: 'ChronoScent base unit, scent cartridges, and timed-release wicks arranged together',
      src: 'assets/Home_Page_Main_Image_500x520.webp',
      fallbackSrc: 'assets/Home_Page_Main_Image_500x520.png',
      srcSet: 'assets/Home_Page_Main_Image_380x396.webp 380w, assets/Home_Page_Main_Image_500x520.webp 500w',
      sizes: '(max-width: 768px) 100vw, 380px',
      loading: 'eager',
      decoding: 'sync',
    })
  );
  visual.appendChild(heroImg);

  // --- Subheading strip ---
  const subheadingStrip = document.createElement('section');
  subheadingStrip.className = 'subheading-strip';
  subheadingStrip.innerHTML = `
    <div class="container subheading-container">
      <p class="hero-subheading">ChronoScent keeps pets searching, solving and settling while their people are away.</p>
    </div>
  `;

  // --- How it works: title + steps grid ---
  const how = document.createElement('section');
  how.id = 'how-it-works';
  how.className = 'how-it-works';
  how.innerHTML = `
    <div class="container">
      <header class="section-header">
        <h2 class="section-title">How it works</h2>
      </header>
      <div class="steps-grid"></div>
    </div>
  `;

  const steps = [
    {
      num: 1,
      title: 'Set',
      text: 'A chew-resistant base with scent chambers you can rearrange as your pet improves. Its timed release makes scent unpredictable, so every attempt feels different.',
    },
    {
      num: 2,
      title: 'Hide',
      text: 'Hide five or six washable cartridges around the home. Each holds a timed-release core and a scent, turning your space into a timed search cycle.',
    },
    {
      num: 3,
      title: 'Cycle',
      text: 'Lay a path between cartridges with reusable timed-release wicks. It\'s an optional add-on for pets who enjoy a longer route and more searching.',
    },
    {
      num: 4,
      title: 'Settle',
      text: 'Between cycles, your pet can come back to the base\'s warmth insert and mechanical pulse disc. A familiar resting point without electronics.',
    },
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

  // --- Body text strip ---
  const bodyStrip = document.createElement('section');
  bodyStrip.className = 'body-strip';
  bodyStrip.innerHTML = `
    <div class="container body-strip-container">
      <p class="hero-body">Hide the cartridges. Set the cycle. Leave a scent behind and a warm place to return to. No batteries, Wi-Fi or live check-ins required.</p>
    </div>
  `;

  section.appendChild(hero);
  section.appendChild(subheadingStrip);
  section.appendChild(how);
  section.appendChild(bodyStrip);

  return { el: section };
}
