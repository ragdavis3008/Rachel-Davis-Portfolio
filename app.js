document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");

    // Expand the target section if it's collapsed. This runs before the browser
    // follows the anchor, so the smooth scroll lands on the expanded layout.
    const section = document.querySelector(link.getAttribute("href"));
    const toggle = section && section.querySelector(".section-toggle");
    if (toggle && toggle.getAttribute("aria-expanded") === "false") {
      toggle.click();
    }
  });
});

document.querySelectorAll(".section-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isExpanded));
    const body = document.getElementById(toggle.getAttribute("aria-controls"));
    body.classList.toggle("is-collapsed", isExpanded);
  });
});
