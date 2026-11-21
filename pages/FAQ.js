/* Nuzzora — FAQ page */
import { faqs } from '../data/faq.js';
import { Button } from '../components/Button.js';

export function FAQ({ onRoute }) {
  const section = document.createElement('div');
  section.className = 'page faq';
  section.style.padding = '72px 0 64px';

  section.innerHTML = `
    <div class="container">
      <header class="section-header page-header">
        <h1 class="section-title">Frequently asked questions</h1>
        <p class="section-intro">Quick answers about Nuzzora.</p>
      </header>
      <div class="faq-accordion" aria-label="FAQs"></div>
      <p class="btn-container" style="margin-top: 32px;">
        <button type="button" class="btn btn--outline" data-link href="#/">Back to Home</button>
      </p>
    </div>
  `;

  const accordion = section.querySelector('.faq-accordion');

  faqs.forEach((item, index) => {
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
      faqItem.setAttribute('data-open', String(!isOpen));
      trigger.setAttribute('aria-expanded', String(!isOpen));
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
    const link = e.target.closest('[data-link]');
    if (link) {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href && href.startsWith('#/')) {
        onRoute(href);
      } else {
        onRoute('#/');
      }
    }
  });

  return { el: section };
}
