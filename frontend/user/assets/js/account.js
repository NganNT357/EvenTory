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

// ===== ACOUNT-TICKET =====
document.addEventListener("DOMContentLoaded", () => {
  fetch("../assets/data/event-detail-data.txt")
    .then((res) =>
      res.ok ? res.json() : Promise.reject("Không load được data")
    )
    .then((events) => {
      const grid = document.querySelector(".tickets-grid");
      events.forEach((ev) => {
        const card = document.createElement("div");
        const raw = ev.poster_sub || ev.poster;
        const imgPath = "../" + raw;
        card.className = "ticket-card";
        card.innerHTML = `
          <div class="card-image">
            <img src="${imgPath}" alt="${ev.title || ""}" />
          </div>
          <div class="card-details">
            <h3>${ev.title || ""}</h3>
            <ul class="ticket-info">
              <li>
                <span class="material-symbols-rounded">event</span>
                ${ev.event_info?.date || ""}${
          ev.event_info?.time ? ", " + ev.event_info.time : ""
        }
              </li>
              <li>
                <span class="material-symbols-rounded">location_on</span>
                ${ev.event_info?.location || ""}
              </li>
              <li>
                <span class="material-symbols-rounded">qr_code</span>
                ${ev["ticket-id"] || ""}
              </li>
              <li>
                <span class="material-symbols-rounded">confirmation_number</span>
                ${ev.type || ""}
              </li>
              <li>
                <span class="material-symbols-rounded">paid</span>
                ${ev.price ? ev.price + " VNĐ" : ""}
              </li>
            </ul>
            <button class="btn-details">Xem chi tiết</button>
          </div>
        `;
        grid.appendChild(card);
      });
    })
    .catch((err) => console.error(err));
});
