// ===== header =====
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

// ===== event detail content =====
document.addEventListener("DOMContentLoaded", async () => {
  // 1. Lấy eventId từ URL
  const params = new URLSearchParams(location.search);
  const eventId = params.get("eventId");
  if (!eventId) {
    console.error("Không tìm thấy eventId");
    return;
  }

  let events;
  try {
    const res = await fetch("../assets/data/event-detail-data.txt");
    console.log("Fetch status:", res.status, res.statusText);

    const text = await res.text();
    console.log("Raw payload:", text);

    events = JSON.parse(text);
    console.log("Parsed JSON:", events);
  } catch (err) {
    console.error("Lỗi khi tải hoặc parse JSON:", err);
    return;
  }

  const ev = events.find((e) => e.id === eventId);
  if (!ev) {
    console.error("Không tìm thấy sự kiện:", eventId);
    return;
  }

  document.getElementById("event-poster").src = `../${ev.poster}`;

  // 1. Tên
  document.getElementById("event-info-title").textContent = ev.title;

  // 2. Giới thiệu
  document.getElementById("event-intro").textContent = ev.intro;

  // 3. Thông tin sự kiện (date, time, location, city)
  const infoList = document.getElementById("event-info-list");
  infoList.innerHTML = "";
  [
    `Thời gian: ${ev.event_info.time}, ${ev.event_info.date} `,
    `Địa điểm: ${ev.event_info.location}`,
    `Thành phố: ${ev.city}`,
  ].forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    infoList.appendChild(li);
  });

  // 4. Trải nghiệm đặc biệt
  const expUl = document.getElementById("special-experience-list");
  expUl.innerHTML = "";
  ev.special_experience.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    expUl.appendChild(li);
  });

  // 5. Khuyến mãi (nếu có)
  const promoSec = document.getElementById("promotion-section");
  if (ev.promotion && ev.promotion.description) {
    document.getElementById("promotion-desc").textContent =
      ev.promotion.description;
    document.getElementById(
      "promotion-cond"
    ).textContent = `(${ev.promotion.condition})`;
  } else {
    promoSec.style.display = "none";
  }

  // 6. Ban tổ chức
  document.getElementById("organizer-logo").src = `../${ev.organizer.logo}`;
  document.getElementById("organizer-name").textContent = ev.organizer.name;

  // 7. Hình quảng cáo bên phải (hard-coded link)
  const adEl = document.getElementById("event-ad");
  adEl.src = "../assets/img/qcao.jpg";
  // Hiển thị quảng cáo
  document.querySelector(".event-info-right").style.display = "flex";

  // === KẾT THÚC PHẦN ===

  // 9. Tickets table
  const saleTimeEl = document.getElementById("ticket-sale-time");
  saleTimeEl.textContent = `${ev.ticket_sale.start_date} đến ${ev.ticket_sale.end_date}`;

  const tbody = document.getElementById("tickets-body");
  tbody.innerHTML = "";
  ev.tickets.forEach((t) => {
    const tr = document.createElement("tr");
    if (t.quantity > 0) {
      tr.classList.add("ticket-available");
    } else {
      tr.classList.add("ticket-soldout");
    }

    const soldOutBadge =
      t.quantity > 0 ? "" : '<span class="sold-out">Hết vé</span>';
    tr.innerHTML = `
      <td>${t.type}</td>
      <td class="ticket-price">${t.price.toLocaleString()}đ ${soldOutBadge}</td>
    `;
    tbody.appendChild(tr);
  });

  // 10. Nút mua vé
  document.getElementById(
    "buy-ticket-btn"
  ).href = `/buy-ticket.html?eventId=${ev.id}`;

  // 11. Tab switcher
  document.querySelectorAll(".event-tabs .tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelector(".event-tabs .tab.active")
        .classList.remove("active");
      tab.classList.add("active");
      document.querySelector(".tab-content.active").classList.remove("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });

  // 12. (Tuỳ chọn) Load slider “Dành cho bạn” nếu có data
});

// #buy-ticket-btn
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("buy-ticket-btn");
  if (!btn) return;

  btn.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    this.appendChild(ripple);

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = e.clientX - rect.left - size / 2 + "px";
    ripple.style.top = e.clientY - rect.top - size / 2 + "px";

    ripple.addEventListener("animationend", () => ripple.remove());
  });
});
