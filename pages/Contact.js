/* ChronoScent — Contact Us page */
export function Contact({ onRoute }) {
  const section = document.createElement('div');
  section.className = 'page contact page--pad';

  section.innerHTML = `
    <div class="container">
      <header class="page-head" data-reveal>
        <p class="eyebrow">Get in touch</p>
        <h1 class="section-title">Contact Us</h1>
        <p class="section-intro">Questions about ChronoScent? Send a note below.</p>
      </header>

      <div class="contact-wrap">
        <div class="contact-info">
          <div class="contact-card" data-reveal>
            <h3>Demo storefront</h3>
            <p>This storefront is a demonstration, not a live shop.</p>
          </div>
          <div class="contact-card" data-reveal style="--reveal-delay: 70ms">
            <h3>Orders &amp; support</h3>
            <p>Order confirmations are generated on this device. No real payment or delivery is processed.</p>
          </div>
          <div class="contact-card" data-reveal style="--reveal-delay: 140ms">
            <h3>Safety questions</h3>
            <p>Speak to your veterinarian about your dog’s chewing habits before introducing any new chew product.</p>
          </div>
        </div>

        <form class="contact-form" id="contact-form" novalidate data-reveal style="--reveal-delay: 90ms">
          <div class="form-group">
            <label for="contact-name">Your name <span class="req" aria-hidden="true">*</span></label>
            <input type="text" id="contact-name" name="name" autocomplete="name" required aria-required="true" />
          </div>
          <div class="form-group">
            <label for="contact-email">Email <span class="req" aria-hidden="true">*</span></label>
            <input type="email" id="contact-email" name="email" autocomplete="email" required aria-required="true" />
          </div>
          <div class="form-group">
            <label for="contact-message">Message <span class="req" aria-hidden="true">*</span></label>
            <textarea id="contact-message" name="message" rows="5" required aria-required="true"></textarea>
          </div>
          <p id="contact-error" class="error-msg" role="alert" aria-live="assertive"></p>
          <button type="submit" class="btn btn--primary btn--block">Send message</button>
          <p id="contact-status" class="contact-status" role="status" aria-live="polite"></p>
        </form>
      </div>

      <p class="btn-container">
        <a href="#/" class="btn btn--outline" data-link>Back to Home</a>
      </p>
    </div>
  `;

  const form = section.querySelector('#contact-form');
  const errorEl = section.querySelector('#contact-error');
  const statusEl = section.querySelector('#contact-status');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorEl.textContent = '';
    statusEl.textContent = '';

    const name = form.querySelector('#contact-name').value.trim();
    const email = form.querySelector('#contact-email').value.trim();
    const message = form.querySelector('#contact-message').value.trim();

    if (name.length < 2) {
      errorEl.textContent = 'Please enter your name.';
      form.querySelector('#contact-name').focus();
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorEl.textContent = 'Please enter a valid email address.';
      form.querySelector('#contact-email').focus();
      return;
    }

    if (message.length < 10) {
      errorEl.textContent = 'Please add a little more detail to your message.';
      form.querySelector('#contact-message').focus();
      return;
    }

    try {
      localStorage.setItem(
        'chronoscent_contact',
        JSON.stringify({ name, email, message, sentAt: new Date().toISOString() })
      );
    } catch (err) {
      // ignore storage failures
    }

    form.reset();
    statusEl.textContent = 'Thanks — your message was saved on this device. This demo storefront has no live support desk yet.';
  });

  section.addEventListener('click', (e) => {
    const link = e.target.closest('a[data-link]');
    if (!link) return;
    e.preventDefault();
    onRoute(link.getAttribute('href') || '#/');
  });

  return { el: section };
}
