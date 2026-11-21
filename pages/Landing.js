/* ChronoScent — Landing page (hero + how it works + strips) */
import { products, brandConfig } from '../data/products.js';
import { PlaceholderImg } from '../components/PlaceholderImg.js';
import { Button } from '../components/Button.js';

export function Landing({ onRoute }) {
  const section = document.createElement('div');
  section.className = 'page landing';

  const starter = products.find((p) => p.id === 'starter');

  // --- Hero: badge + headline + buttons + visual ---
  const hero = document.createElement('section');
  hero.className = 'hero';
  hero.innerHTML = `
    <div class="container hero-inner">
      <div class="hero-content">
        <span class="badge">Purely mechanical · No batteries · No Wi-Fi</span>
        <h1 class="hero-headline">A dual-chamber chew pod for dogs left at home</h1>
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
      desc: 'ChronoScent dual-chamber chew base, scent cartridges, and timed-release wicks arranged together',
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
      <p class="hero-subheading">${brandConfig.tagline}</p>
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
      title: 'Load',
      text: 'Load the timed treat chamber. The staged release mechanism keeps food dispensing over time, so your dog stays engaged without batteries or app control.'
    },
    {
      num: 2,
      title: 'Scent',
      text: 'Insert a cotton scent strip with your worn clothing and the removable PCM warming disc into the separate warmth chamber. Your dog returns to familiar scent and gentle warmth between chew sessions.'
    },
    {
      num: 3,
      title: 'Chew',
      text: 'Heavy duty, capsule shaped chew pod with two isolated systems. Modular chambers rearrange as your dog improves.'
    },
    {
      num: 4,
      title: 'Settle',
      text: 'Between cycles, your dog settles into the removable PCM warming disc and cotton scent strip. A familiar resting point without electronics.'
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

  // --- Body text strip ---
  const bodyStrip = document.createElement('section');
  bodyStrip.className = 'body-strip';
  bodyStrip.innerHTML = `
    <div class="container body-strip-container">
      <p class="hero-body">Load the treat chamber. Insert the scent strip. Set the cycle. No batteries, Wi-Fi or live check-ins required.</p>
    </div>
  `;

  section.appendChild(hero);
  section.appendChild(subheadingStrip);
  section.appendChild(how);
  section.appendChild(bodyStrip);

  return { el: section };
}
