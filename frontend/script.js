document.addEventListener('DOMContentLoaded', () => {
    // Ripple Effect for Buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
  
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
  
        this.appendChild(ripple);
  
        setTimeout(() => ripple.remove(), 600);
      });
    });
  
    // Video Control with Mouse Hover and Mute/Unmute
    const video = document.getElementById('bannerVideo');
    const muteControl = document.getElementById('muteControl');
    const bannerContent = document.querySelector('.banner-content');
  
    // Play video on hover
    bannerContent.addEventListener('mouseenter', () => {
      video.play();
    });
  
    // Pause video when mouse leaves
    bannerContent.addEventListener('mouseleave', () => {
      video.pause();
    });
  
    // Toggle mute/unmute
    muteControl.addEventListener('click', () => {
      if (video.muted) {
        video.muted = false;
        muteControl.textContent = '🎵'; // Unmuted icon
        muteControl.setAttribute('aria-label', 'Tắt âm thanh');
      } else {
        video.muted = true;
        muteControl.textContent = '🔇'; // Muted icon
        muteControl.setAttribute('aria-label', 'Bật âm thanh');
      }
    });
  
    // Carousel for Events (Sự kiện đặc biệt)
    const carouselWrapper = document.getElementById('carouselWrapper');
    const eventsCarousel = document.querySelector('.events-carousel');
    const prevButton = document.querySelector('.events-carousel .carousel-prev');
    const nextButton = document.querySelector('.events-carousel .carousel-next');
    let currentIndex = 0;
    const cards = carouselWrapper.children;
    const cardWidth = cards.length > 0 ? cards[0].offsetWidth : 0;
    const gap = parseFloat(getComputedStyle(carouselWrapper).gap) || 16;
    const totalCardWidth = cardWidth + gap;
    
    const visibleCards = Math.floor(eventsCarousel.offsetWidth / totalCardWidth) || 3;
  
    function updateCarousel() {
      carouselWrapper.style.transform = `translateX(-${currentIndex * totalCardWidth}px)`;
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex >= cards.length - visibleCards;
    }
  
    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  
    nextButton.addEventListener('click', () => {
      if (currentIndex < cards.length - visibleCards) {
        currentIndex++;
        updateCarousel();
      }
    });
  
    window.addEventListener('resize', () => {
      currentIndex = 0;
      updateCarousel();
    });
  
    // Carousel for Trending Events (Sự kiện xu hướng)
    const trendingCarouselWrapper = document.getElementById('trendingCarouselWrapper');
    const trendingCarousel = document.querySelector('.trending-carousel');
    const trendingPrevButton = document.getElementById('trendingPrev');
    const trendingNextButton = document.getElementById('trendingNext');
    let trendingIndex = 0;
    const trendingCards = document.querySelectorAll('.trending-card');
    
    function updateTrendingCarousel() {
      let totalWidth = 0;
      for (let i = 0; i < trendingIndex; i++) {
        totalWidth += trendingCards[i].offsetWidth + parseFloat(getComputedStyle(trendingCarouselWrapper).gap);
      }
      trendingCarouselWrapper.style.transform = `translateX(-${totalWidth}px)`;
      trendingPrevButton.disabled = trendingIndex === 0;
      trendingNextButton.disabled = trendingIndex >= trendingCards.length - 3; // Hiển thị 3 card cuối
    }
  
    trendingPrevButton.addEventListener('click', () => {
      if (trendingIndex > 0) {
        trendingIndex--;
        updateTrendingCarousel();
      }
    });
  
    trendingNextButton.addEventListener('click', () => {
      if (trendingIndex < trendingCards.length - 3) {
        trendingIndex++;
        updateTrendingCarousel();
      }
    });
  
    window.addEventListener('resize', () => {
      trendingIndex = 0;
      updateTrendingCarousel();
    });
  
    // Carousel for Recommended Events (Dành cho bạn)
    const recommendedCarouselWrapper = document.getElementById('recommendedCarouselWrapper');
    const recommendedCarousel = document.querySelector('.recommended-carousel');
    const recommendedPrevButton = document.getElementById('recommendedPrev');
    const recommendedNextButton = document.getElementById('recommendedNext');
    let recommendedIndex = 0;
    const recommendedCards = document.querySelectorAll('.recommended-card');
    const recommendedCardWidth = recommendedCards.length > 0 ? recommendedCards[0].offsetWidth : 0;
    const recommendedGap = parseFloat(getComputedStyle(recommendedCarouselWrapper).gap) || 16;
    const totalRecommendedCardWidth = recommendedCardWidth + recommendedGap;
    
    const recommendedVisibleCards = Math.floor(recommendedCarousel.offsetWidth / totalRecommendedCardWidth) || 3;
  
    function updateRecommendedCarousel() {
      recommendedCarouselWrapper.style.transform = `translateX(-${recommendedIndex * totalRecommendedCardWidth}px)`;
      recommendedPrevButton.disabled = recommendedIndex === 0;
      recommendedNextButton.disabled = recommendedIndex >= recommendedCards.length - recommendedVisibleCards;
    }
  
    recommendedPrevButton.addEventListener('click', () => {
      if (recommendedIndex > 0) {
        recommendedIndex--;
        updateRecommendedCarousel();
      }
    });
  
    recommendedNextButton.addEventListener('click', () => {
      if (recommendedIndex < recommendedCards.length - recommendedVisibleCards) {
        recommendedIndex++;
        updateRecommendedCarousel();
      }
    });
  
    window.addEventListener('resize', () => {
      recommendedIndex = 0;
      updateRecommendedCarousel();
    });
  
    // Intersection Observer for Fade-In Animation
    const observerOptions = {
      root: null,
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    document.querySelectorAll('.event-card, .trending-card, .recommended-card').forEach(card => {
      observer.observe(card);
    });
  
    // Search Functionality
    const searchInput = document.getElementById('searchInput');
    const eventCards = document.querySelectorAll('.event-card');
  
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
  
      eventCards.forEach(card => {
        const titleElement = card.querySelector('h4');
        const title = titleElement ? titleElement.textContent.toLowerCase() : '';
        const category = card.dataset.category ? card.dataset.category.toLowerCase() : '';
        const location = card.dataset.location ? card.dataset.location.toLowerCase() : '';
        if (title.includes(query) || category.includes(query) || location.includes(query)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
  
      if (trendingCards.length > 0) {
        trendingCards.forEach(card => {
          const titleElement = card.querySelector('h4');
          const title = titleElement ? titleElement.textContent.toLowerCase() : '';
          const category = card.dataset.category ? card.dataset.category.toLowerCase() : '';
          if (title.includes(query) || category.includes(query)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      }
  
      if (recommendedCards.length > 0) {
        recommendedCards.forEach(card => {
          const titleElement = card.querySelector('h4');
          const title = titleElement ? titleElement.textContent.toLowerCase() : '';
          const category = card.dataset.category ? card.dataset.category.toLowerCase() : '';
          if (title.includes(query) || category.includes(query)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      }
    });
  
    // Modal Functionality
    window.openModal = (title, date, location, imageSrc) => {
      const modal = document.getElementById('eventModal');
      const modalTitle = document.getElementById('modalTitle');
      const modalDate = document.getElementById('modalDate');
      const modalLocation = document.getElementById('modalLocation');
      const modalImage = document.getElementById('modalImage');
  
      modalTitle.textContent = title;
      modalDate.textContent = `Ngày: ${date}`;
      modalLocation.textContent = `Địa điểm: ${location}`;
      modalImage.src = imageSrc;
      modalImage.alt = title;
  
      modal.style.display = 'block';
      setTimeout(() => modal.classList.add('active'), 10);
    };
  
    const closeModal = document.getElementById('closeModal');
    closeModal.addEventListener('click', () => {
      const modal = document.getElementById('eventModal');
      modal.classList.remove('active');
      setTimeout(() => modal.style.display = 'none', 300);
    });
  
    window.addEventListener('click', (e) => {
      const modal = document.getElementById('eventModal');
      if (e.target === modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.style.display = 'none', 300);
      }
    });
  
    // Create Event Modal
    const createEventButton = document.querySelector('.create-event');
    const createEventModal = document.getElementById('createEventModal');
    const closeCreateModal = document.getElementById('closeCreateModal');
    const createEventForm = document.getElementById('createEventForm');
  
    createEventButton.addEventListener('click', () => {
      createEventModal.style.display = 'block';
      setTimeout(() => createEventModal.classList.add('active'), 10);
    });
  
    closeCreateModal.addEventListener('click', () => {
      createEventModal.classList.remove('active');
      setTimeout(() => createEventModal.style.display = 'none', 300);
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === createEventModal) {
        createEventModal.classList.remove('active');
        setTimeout(() => createEventModal.style.display = 'none', 300);
      }
    });
  
    createEventForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('eventTitle').value;
      const date = document.getElementById('eventDate').value;
      const location = document.getElementById('eventLocation').value;
  
      alert(`Sự kiện "${title}" đã được tạo!\nNgày: ${date}\nĐịa điểm: ${location}`);
      createEventModal.classList.remove('active');
      setTimeout(() => createEventModal.style.display = 'none', 300);
      createEventForm.reset();
    });
  
    // Keyboard Accessibility
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const modal = document.getElementById('eventModal');
        const createModal = document.getElementById('createEventModal');
        if (modal.style.display === 'block') {
          modal.classList.remove('active');
          setTimeout(() => modal.style.display = 'none', 300);
        }
        if (createModal.style.display === 'block') {
          createModal.classList.remove('active');
          setTimeout(() => createModal.style.display = 'none', 300);
        }
      }
    });
});