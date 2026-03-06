async function loadHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;

  const res = await fetch("/HeaderPart/header.html", { cache: "no-store" });
  el.innerHTML = await res.text();
}

loadHeader();

document.addEventListener("click", (e) => {
  const mobileMenu = document.querySelector(".mobile-menu");

  if (e.target.closest(".mobile-menu-btn")) {
    mobileMenu.style.display = "flex";
  }

  if (e.target.closest(".close-btn")) {
    mobileMenu.style.display = "none";
  }

  if (e.target.closest(".mobile-menu a")) {
    mobileMenu.style.display = "none";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  const mobileMenu = document.querySelector(".mobile-menu");
  if (mobileMenu) mobileMenu.style.display = "none";
});
