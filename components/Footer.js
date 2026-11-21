/* Nuzzora — footer component */
export function Footer() {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="container footer-inner">
      <div class="footer-brand">
        <span class="brand">Nuzzora</span>
        <p class="footer-line">Scent + warmth. No batteries. No WiFi. No app.</p>
      </div>
      <p class="footer-notes">
        Nuzzora is a purely mechanical dog play system. Not a treat cam. Not a puzzle your dog solves once.
        It turns your whole house into the game.
      </p>
    </div>
  `;
  return { el: footer };
}
