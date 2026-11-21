/* ChronoScent — footer component */
export function Footer() {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="container footer-inner">
      <div class="footer-brand">
        <span class="brand">ChronoScent</span>
        <p class="footer-line">Scent + timing. No batteries. No Wi-Fi. No app.</p>
      </div>
      <p class="footer-notes">
        ChronoScent is a purely mechanical timed scent system. Not a treat cam. Not a puzzle your pet solves once.
        It turns your space into a timed scent cycle.
      </p>
    </div>
  `;
  return { el: footer };
}
