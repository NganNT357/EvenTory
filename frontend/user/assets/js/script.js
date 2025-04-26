// ===== banner section =====
document.addEventListener("DOMContentLoaded", () => {
  const bannerVideo = document.getElementById("bannerVideo");
  const videoSource = bannerVideo.querySelector("source");
  const volumeToggle = document.getElementById("volumeToggle");
  const volumeIcon = volumeToggle.querySelector("span");
  const detailButton = document.getElementById("detailButton");
  const dots = document.querySelectorAll(".banner-dots .dot");

  let allEventData = [];
  let currentIndex = 0;

  const selectedIds = ["babymonster", "soobin-concert", "exid-live", "blackpink-encore"];

  fetch("assets/data/event-detail-data.txt")
    .then((response) => response.text())
    .then((text) => {
      allEventData = JSON.parse(text);
      loadBanner(0);

      dots.forEach((dot) => {
        dot.addEventListener("click", () => {
          const index = parseInt(dot.dataset.index, 10);
          if (index !== currentIndex) {
            loadBanner(index);
          }
        });
      });
    })
    .catch((error) => {
      console.error("Lỗi khi tải file event data:", error);
    });

  function loadBanner(index) {
    const targetId = selectedIds[index];
    const eventItem = allEventData.find((event) => event.id === targetId);

    if (!eventItem) {
      console.error(`Không tìm thấy event với id: ${targetId}`);
      return;
    }

    if (videoSource) {
      videoSource.src = eventItem.video;
      bannerVideo.load();
    }

    bannerVideo.poster = eventItem.poster;
    bannerVideo.muted = true;
    volumeIcon.textContent = "volume_off";

    detailButton.href = `event-detail.html?eventId=${eventItem.id}`;

    dots.forEach((dot) => dot.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");

    currentIndex = index;
  }

  volumeToggle.addEventListener("click", () => {
    bannerVideo.muted = !bannerVideo.muted;
    volumeIcon.textContent = bannerVideo.muted ? "volume_off" : "volume_up";
  });

  bannerVideo.addEventListener("mouseenter", () => {
    bannerVideo.play();
  });

  bannerVideo.addEventListener("mouseleave", () => {
    bannerVideo.pause();
  });
});

// ===== event upcoming section =====
document.addEventListener("DOMContentLoaded", () => {
  fetch("assets/data/event-upcoming.txt")
    .then((response) => response.json())
    .then((events) => {
      const container = document.getElementById("eventGrid");
      const maxEvents = 6;
      const eventsToShow = events.slice(0, maxEvents);

      eventsToShow.forEach((event) => {
        const card = document.createElement("div");
        card.className = "event-card";
        card.innerHTML = `
          <img src="${event.img}" alt="${event.title}">
          <div class="event-info">
            <div class="event-date">
              <span class="month">${event.month}</span>
              <span class="day">${event.day}</span>
            </div>
            <div class="event-text">
              <h3 class="event-title">${event.title}</h3>
              <p class="event-desc">${event.desc}</p>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Lỗi tải dữ liệu sự kiện:", error);
    });
});

// ===== event trend section =====
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrack");
  const nextBtn = document.querySelector(".carousel-nav.next");
  const prevBtn = document.querySelector(".carousel-nav.prev");
  let scrollPosition = 0;
  const scrollAmount = 240 * 3 + 16 * 3; // width * 3 + gap * 3

  fetch("assets/data/event-detail-data.txt")
    .then((res) => res.json())
    .then((events) => {
      events.forEach((event, i) => {
        const card = document.createElement("div");
        card.className = "trend-card-wrapper";
        card.innerHTML = `
          <img src="${event.poster}" alt="${event.title}" />
          <div class="trend-caption">
            <div class="trend-rank">${i + 1}</div>
            <div class="trend-title">${event.title}</div>
            <div class="trend-date">${event.event_info.date
              .split("-")
              .reverse()
              .join(" / ")}</div>
          </div>
        `;
        card.addEventListener("click", () => {
          window.location.href = `event-detail.html?eventId=${event.id}`;
        });
        track.appendChild(card);
      });
    });

  nextBtn.addEventListener("click", () => {
    scrollPosition += scrollAmount;
    track.scrollTo({ left: scrollPosition, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    scrollPosition -= scrollAmount;
    if (scrollPosition < 0) scrollPosition = 0;
    track.scrollTo({ left: scrollPosition, behavior: "smooth" });
  });
});

// ===== =====
