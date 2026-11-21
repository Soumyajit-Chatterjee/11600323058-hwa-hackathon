/* ChronoScent — FAQ page */
import { faqs } from '../data/faq.js';

export function FAQ({ onRoute }) {
  const section = document.createElement('div');
  section.className = 'page faq page--pad';

  section.innerHTML = `
    <div class="container">
      <header class="page-head" data-reveal>
        <p class="eyebrow">Good to know</p>
        <h1 class="section-title">Frequently asked questions</h1>
        <p class="section-intro">Quick answers about ChronoScent.</p>
      </header>
      <div class="faq-accordion" aria-label="FAQs"></div>
      <p class="btn-container">
        <a href="#/" class="btn btn--outline" data-link>Back to Home</a>
      </p>
    </div>
  `;

  const accordion = section.querySelector('.faq-accordion');

  faqs.forEach((item, index) => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';
    faqItem.setAttribute('data-open', 'false');
    faqItem.setAttribute('data-reveal', '');
    faqItem.style.setProperty('--reveal-delay', `${Math.min(index, 6) * 50}ms`);

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'faq-question';
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', `page-faq-answer-${index}`);
    trigger.innerHTML = `
      <span class="faq-q">${item.q}</span>
      <span class="faq-toggle" aria-hidden="true">+</span>
    `;

    const answer = document.createElement('div');
    answer.className = 'faq-answer';
    answer.id = `page-faq-answer-${index}`;
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
    accordion.appendChild(faqItem);
  });

  section.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-link]');
    if (!link) return;
    e.preventDefault();
    onRoute(link.getAttribute('href') || '#/');
  });

  return { el: section };
}
