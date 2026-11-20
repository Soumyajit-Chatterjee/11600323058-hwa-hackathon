/* Nuzzora — product page interactivity */

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".choose-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const kit = event.currentTarget.dataset.kit;
      const kitNames = {
        starter: "Starter Kit — ₹3,599",
        full: "Full Kit — ₹5,399",
        refill: "Trail Refill Pack — ₹1,499",
      };

      // Remember size preference if previously chosen
      const size = localStorage.getItem("nuzzora_size") || "small/medium";

      const order = {
        kit: kitNames[kit] || kit,
        size,
        source: "product page",
      };

      localStorage.setItem("nuzzora_last_order", JSON.stringify(order));

      const originalText = event.currentTarget.textContent;
      event.currentTarget.textContent = "Added · choose size above";
      event.currentTarget.classList.add("btn-outline");
      event.currentTarget.classList.remove("btn-primary");

      setTimeout(() => {
        event.currentTarget.textContent = originalText;
        event.currentTarget.classList.remove("btn-outline");
        event.currentTarget.classList.add("btn-primary");
      }, 1600);
    });
  });

  // Small FAQ toggle structure ready for 5–10 questions
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const trigger = item.querySelector(".faq-question");
    if (!trigger) return;
    trigger.addEventListener("click", () => {
      const open = item.getAttribute("data-open") === "true";
      item.setAttribute("data-open", String(!open));
    });
  });
});
