// xử lí header
document.addEventListener("DOMContentLoaded", () => {
  let lastScrollY = window.pageYOffset;
  const header = document.querySelector(".site-header");

  window.addEventListener("scroll", () => {
    const currentScrollY = window.pageYOffset;

    if (currentScrollY <= 0) {
      header.style.transform = "translateY(0)";
    } else if (currentScrollY > lastScrollY) {
      header.style.transform = "translateY(-100%)";
    } else {
      header.style.transform = "translateY(0)";
    }

    lastScrollY = currentScrollY;
  });
});

// xử lí dropdown của avatar
document.addEventListener("DOMContentLoaded", () => {
  const avatarWrap = document.querySelector(".avatar-dropdown");
  if (!avatarWrap) return;
  const menu = avatarWrap.querySelector(".dropdown-menu");

  avatarWrap.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!avatarWrap.contains(e.target)) {
      menu.classList.remove("show");
    }
  });
});

document.querySelectorAll(".btn-save").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = e.clientX - rect.left - size / 2 + "px";
    ripple.style.top = e.clientY - rect.top - size / 2 + "px";
    this.appendChild(ripple);
    // remove sau khi animation hoàn tất
    setTimeout(() => ripple.remove(), 600);
  });
});
