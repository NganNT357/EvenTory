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
  const container = document.getElementById("eventGrid");
  const moreButtonWrapper = document.querySelector(".event-more-btn");
  const moreButton = document.querySelector(".event-more-btn .more-button");
  let allEvents = [];
  let displayedEvents = 6; // Initially display 6 events
  const eventsPerLoad = 6; // Number of events to show initially

  // Check if the more button exists
  if (!moreButton || !moreButtonWrapper) {
    console.error("Không tìm thấy nút 'Xem thêm'. Vui lòng kiểm tra HTML: .event-more-btn và .more-button.");
    return;
  }

  // Initially show the "Xem thêm" button
  moreButtonWrapper.style.display = "block";
  console.log("Nút 'Xem thêm' được hiển thị ban đầu (theo JS).");

  fetch("assets/data/event-upcoming.txt")
    .then((response) => response.json())
    .then((events) => {
      allEvents = events;
      console.log(`Đã tải ${allEvents.length} sự kiện từ event-upcoming.txt`);

      // Function to render events
      const renderEvents = (eventList) => {
        eventList.forEach((event) => {
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
      };

      // Initially render the first 6 events (or fewer if less than 6)
      const initialEvents = allEvents.slice(0, displayedEvents);
      renderEvents(initialEvents);
      console.log(`Đã hiển thị ${initialEvents.length} sự kiện ban đầu.`);

      // Show or hide the "Xem thêm" button based on the number of events
      if (allEvents.length <= eventsPerLoad) {
        console.log("Số lượng sự kiện <= 6, ẩn nút 'Xem thêm'.");
        moreButtonWrapper.style.display = "none";
      } else {
        console.log("Số lượng sự kiện > 6, hiển thị nút 'Xem thêm'.");
        moreButtonWrapper.style.display = "block";
      }

      // Add click event for "Xem thêm" button
      moreButton.addEventListener("click", () => {
        console.log("Nút 'Xem thêm' được nhấn, hiển thị các sự kiện còn lại.");
        // Render the remaining events
        const remainingEvents = allEvents.slice(displayedEvents);
        renderEvents(remainingEvents);
        console.log(`Đã hiển thị thêm ${remainingEvents.length} sự kiện.`);

        // Update displayed events count
        displayedEvents = allEvents.length;

        // Hide the "Xem thêm" button wrapper since all events are now displayed
        moreButtonWrapper.style.display = "none";
        console.log("Đã hiển thị hết sự kiện, ẩn nút 'Xem thêm'.");
      });
    })
    .catch((error) => {
      console.error("Lỗi tải dữ liệu sự kiện sắp diễn ra:", error);
      console.log("Dữ liệu không tải được, kiểm tra file event-upcoming.txt.");
      // Keep the button visible to help debug
      moreButtonWrapper.style.display = "block";
    });
});

// ===== event trend section =====
document.addEventListener("DOMContentLoaded", async () => {
  const track = document.getElementById("carouselTrack");
  const nextBtn = document.querySelector(".event-trend-section .carousel-nav.next");
  const prevBtn = document.querySelector(".event-trend-section .carousel-nav.prev");
  let scrollPosition = 0;
  const cardWidth = 270; // Width of each card
  const gap = 16; // Gap between cards
  const cardsToScroll = 3; // Number of cards to scroll at a time
  const scrollAmount = (cardWidth + gap) * cardsToScroll;

  try {
    // Fetch event-trend.txt
    const response = await fetch("assets/data/event-trend.txt");
    const trendEvents = await response.json();

    // Render all trend events without filtering
    trendEvents.forEach((event, i) => {
      const card = document.createElement("div");
      card.className = "trend-card-wrapper";
      card.innerHTML = `
        <img src="${event.img}" alt="${event.title}" />
        <div class="trend-caption">
          <div class="trend-rank">${i + 1}</div>
          <div class="trend-title">${event.title}</div>
          <div class="trend-date">${event.date}</div>
        </div>
      `;
      card.addEventListener("click", () => {
        window.location.href = `event-detail.html?eventId=${event.id}`;
      });
      track.appendChild(card);
    });

    // Update scroll position limits after cards are added
    const maxScroll = track.scrollWidth - track.clientWidth;
    nextBtn.addEventListener("click", () => {
      scrollPosition += scrollAmount;
      if (scrollPosition > maxScroll) scrollPosition = maxScroll;
      track.scrollTo({ left: scrollPosition, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
      scrollPosition -= scrollAmount;
      if (scrollPosition < 0) scrollPosition = 0;
      track.scrollTo({ left: scrollPosition, behavior: "smooth" });
    });
  } catch (error) {
    console.error("Lỗi tải dữ liệu sự kiện xu hướng:", error);
  }
});


// ===== event special section =====
document.addEventListener("DOMContentLoaded", async () => {
  const track = document.getElementById("specialTrack");
  const nextBtn = document.querySelector(".event-special-section .carousel-nav.next");
  const prevBtn = document.querySelector(".event-special-section .carousel-nav.prev");
  let scrollPosition = 0;
  const cardWidth = 270; // Width of each card
  const gap = 16; // Gap between cards
  const cardsToScroll = 3; // Number of cards to scroll at a time
  const scrollAmount = (cardWidth + gap) * cardsToScroll;

  try {
    const response = await fetch("assets/data/event-special.txt");
    const events = await response.json();

    events.forEach((event, i) => {
      const card = document.createElement("div");
      card.className = "trend-card-wrapper";
      card.innerHTML = `
        <img src="${event.img}" alt="${event.title}" />
        <div class="trend-caption">
          <div class="trend-title">${event.title}</div>
          <div class="trend-date">${event.date}</div>
        </div>
      `;
      card.addEventListener("click", () => {
        window.location.href = `event-detail.html?eventId=${event.id}`;
      });
      track.appendChild(card);
    });

    // Update scroll position limits after cards are added
    const maxScroll = track.scrollWidth - track.clientWidth;
    nextBtn.addEventListener("click", () => {
      scrollPosition += scrollAmount;
      if (scrollPosition > maxScroll) scrollPosition = maxScroll;
      track.scrollTo({ left: scrollPosition, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
      scrollPosition -= scrollAmount;
      if (scrollPosition < 0) scrollPosition = 0;
      track.scrollTo({ left: scrollPosition, behavior: "smooth" });
    });
  } catch (error) {
    console.error("Lỗi tải dữ liệu sự kiện đặc biệt:", error);
  }
});