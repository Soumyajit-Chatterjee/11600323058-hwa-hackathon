/* ChronoScent — Contact Us page (work under progress) */
export function Contact({ onRoute }) {
  const section = document.createElement('div');
  section.className = 'page contact';
  section.style.padding = '80px 20px';
  section.style.textAlign = 'center';
  section.innerHTML = `
    <div class="container" style="max-width: 600px; margin: 0 auto;">
      <h1 class="section-title" style="color: var(--color-dark);">Contact Us</h1>
      <p class="section-intro" style="color: #333; font-size: 1.25rem;">Work Under Progress</p>
      <p class="btn-container" style="margin-top: 32px;">
        <button type="button" class="btn btn--outline" data-link>Back to Home</button>
      </p>
    </div>
  `;

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
