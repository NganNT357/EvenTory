document.addEventListener('DOMContentLoaded', () => {
  // Dữ liệu chi tiết sự kiện
  const eventDetails = {
      'babymonster': {
          title: 'BABYMONSTER - HELLO MONSTERS',
          image: './assets/poster1.jpg',
          promotion: 'Giảm 20% cho 50 vé đầu tiên! Miễn phí nước uống cho vé VIP.',
          guests: 'Ca sĩ BABYMONSTER, DJ Alan Walker',
          experience: 'Check-in tại photo booth, khu vực trò chơi âm nhạc, quà tặng độc quyền.',
          date: '30/04/2025',
          location: 'Nhà thi đấu Phú Thọ',
          organizer: 'Eventory Team',
          organizerLogo: 'https://placehold.co/50x50'
      },
      'con-ho-soi': {
          title: 'CON HỔ SÓI',
          image: 'https://placehold.co/300x400',
          promotion: 'Mua 2 vé tặng 1 nước uống miễn phí.',
          guests: 'Ca sĩ nổi tiếng trong nước',
          experience: 'Khu vực chụp ảnh, quà tặng đặc biệt.',
          date: '24/04/2025',
          location: 'Nhà hát Hòa Bình',
          organizer: 'Music VN',
          organizerLogo: 'https://placehold.co/50x50'
      },
      'santnokster': {
          title: 'SANTNOKSTER',
          image: 'https://placehold.co/300x400',
          promotion: 'Giảm 10% cho vé mua trước 01/04/2025.',
          guests: 'Ban nhạc Santnokster',
          experience: 'Trải nghiệm âm nhạc đỉnh cao.',
          date: '25/04/2025',
          location: 'Nhà hát Hòa Bình',
          organizer: 'SoundWave',
          organizerLogo: 'https://placehold.co/50x50'
      },
      'quand-linug-tabter': {
          title: 'QUAND LINUG TABTER',
          image: 'https://placehold.co/300x400',
          promotion: 'Vé sớm giảm 15%.',
          guests: 'Các nghệ sĩ đường phố',
          experience: 'Lễ hội ngoài trời với nhiều hoạt động.',
          date: '26/04/2025',
          location: 'Sân vận động Phú Thọ',
          organizer: 'Festival VN',
          organizerLogo: 'https://placehold.co/50x50'
      },
      'fan-meeting-starlight': {
          title: 'FAN MEETING - STARLIGHT',
          image: 'https://placehold.co/300x400',
          promotion: 'Tặng ảnh ký tên cho 100 vé đầu tiên.',
          guests: 'Nhóm nhạc Starlight',
          experience: 'Gặp gỡ thần tượng, giao lưu trực tiếp.',
          date: '01/05/2025',
          location: 'Nhà văn hóa Thanh Niên',
          organizer: 'Starlight VN',
          organizerLogo: 'https://placehold.co/50x50'
      },
      'next-gen-showcase': {
          title: 'NEXT GEN SHOWCASE',
          image: 'https://placehold.co/300x400',
          promotion: 'Miễn phí vé cho sinh viên.',
          guests: 'Các nghệ sĩ trẻ',
          experience: 'Trưng bày sản phẩm công nghệ mới.',
          date: '05/05/2025',
          location: 'Trung tâm Hội nghị Quốc gia',
          organizer: 'Tech VN',
          organizerLogo: 'https://placehold.co/50x50'
      },
      'end-of-summer-concert': {
          title: 'END OF SUMMER CONCERT',
          image: 'https://placehold.co/300x400',
          promotion: 'Giảm 25% cho nhóm 5 người.',
          guests: 'Nhiều ca sĩ nổi tiếng',
          experience: 'Bữa tiệc âm nhạc ngoài trời.',
          date: '10/07/2025',
          location: 'Sân vận động Hàng Đẫy',
          organizer: 'Summer Vibes',
          organizerLogo: 'https://placehold.co/50x50'
      },
      'food-festival-2025': {
          title: 'FOOD FESTIVAL 2025',
          image: 'https://placehold.co/300x400',
          promotion: 'Tặng voucher 50.000đ cho vé mua sớm.',
          guests: 'Các đầu bếp nổi tiếng',
          experience: 'Thưởng thức ẩm thực đa dạng.',
          date: '20/06/2025',
          location: 'Công viên Thống Nhất',
          organizer: 'Foodie VN',
          organizerLogo: 'https://placehold.co/50x50'
      },
      'fan-meeting-3rd': {
          title: 'FAN MEETING 3rd',
          image: 'https://placehold.co/300x400',
          promotion: 'Tặng quà lưu niệm cho tất cả vé.',
          guests: 'Nhóm nhạc nổi tiếng',
          experience: 'Giao lưu và chụp ảnh cùng thần tượng.',
          date: '14/05 - 09/05/2025',
          location: 'Nhà văn hóa Thanh Niên',
          organizer: 'FanClub VN',
          organizerLogo: 'https://placehold.co/50x50'
      },
      'debut-showcase': {
          title: 'DEBUT SHOWCASE',
          image: 'https://placehold.co/300x400',
          promotion: 'Vé VIP được gặp nghệ sĩ sau show.',
          guests: 'Nhóm nhạc mới',
          experience: 'Trải nghiệm ra mắt ấn tượng.',
          date: '20/04/2025',
          location: 'Nhà hát Lớn',
          organizer: 'NewGen Music',
          organizerLogo: 'https://placehold.co/50x50'
      },
      'ky-niem-son-nam': {
          title: 'KỶ NIỆM SƠN NAM',
          image: 'https://placehold.co/300x400',
          promotion: 'Miễn phí vé cho người cao tuổi.',
          guests: 'Các nghệ sĩ gạo cội',
          experience: 'Ôn lại kỷ niệm 50 năm.',
          date: '01/05 - 05/05/2025',
          location: 'Nhà hát Lớn',
          organizer: 'Sơn Nam Org',
          organizerLogo: 'https://placehold.co/50x50'
      },
      'summer-music-fest': {
          title: 'SUMMER MUSIC FEST',
          image: 'https://placehold.co/300x400',
          promotion: 'Giảm 20% cho vé nhóm.',
          guests: 'Nhiều ca sĩ trẻ',
          experience: 'Lễ hội âm nhạc mùa hè.',
          date: '15/06/2025',
          location: 'Sân vận động Hàng Đẫy',
          organizer: 'Summer Beats',
          organizerLogo: 'https://placehold.co/50x50'
      },
      'rock-night-2025': {
          title: 'ROCK NIGHT 2025',
          image: 'https://placehold.co/300x400',
          promotion: 'Tặng áo phông cho vé VIP.',
          guests: 'Các ban nhạc rock',
          experience: 'Đêm nhạc rock bùng nổ.',
          date: '25/06/2025',
          location: 'Nhà thi đấu Phú Thọ',
          organizer: 'Rock VN',
          organizerLogo: 'https://placehold.co/50x50'
      },
      'mat-doi-mat': {
          title: 'Sân Khấu SB - Vở Kịch: Mật Đồi Mật',
          image: 'https://placehold.co/300x400',
          promotion: 'Miễn phí vé cho học sinh.',
          guests: 'Diễn viên sân khấu SB',
          experience: 'Vở kịch cảm động.',
          date: '30/04/2025',
          location: 'Nhà hát SB',
          organizer: 'Sân Khấu SB',
          organizerLogo: 'https://placehold.co/50x50'
      },
      'bong-canh-co': {
          title: 'Sân Khấu Hồng Vân: Vở Kịch Bông Cánh Cò',
          image: 'https://placehold.co/300x400',
          promotion: 'Giảm 10% cho vé mua sớm.',
          guests: 'Diễn viên Hồng Vân',
          experience: 'Vở kịch ý nghĩa.',
          date: '03/05/2025',
          location: 'Nhà hát Hồng Vân',
          organizer: 'Hồng Vân Theater',
          organizerLogo: 'https://placehold.co/50x50'
      },
      'candle-workshop': {
          title: '[FLOWER 1969\'s] WORKSHOP CANDLE - HỌC LÀM NẾN THƠM',
          image: 'https://placehold.co/300x400',
          promotion: 'Tặng bộ dụng cụ làm nến.',
          guests: 'Chuyên gia làm nến',
          experience: 'Học làm nến thơm thủ công.',
          date: '26/04/2025',
          location: 'Flower 1969 Studio',
          organizer: 'Flower 1969',
          organizerLogo: 'https://placehold.co/50x50'
      },
      'perfume-workshop': {
          title: '[FLOWER 1969\'s] ROLLERBALL PERFUME WORKSHOP - NƯỚC HOA LĂN',
          image: 'https://placehold.co/300x400',
          promotion: 'Tặng chai nước hoa mini.',
          guests: 'Chuyên gia nước hoa',
          experience: 'Tự tạo nước hoa cá nhân.',
          date: '26/04/2025',
          location: 'Flower 1969 Studio',
          organizer: 'Flower 1969',
          organizerLogo: 'https://placehold.co/50x50'
      },
      'summer-music-festival': {
          title: 'SUMMER MUSIC FESTIVAL',
          image: 'https://placehold.co/300x400',
          promotion: 'Giảm 20% cho vé nhóm.',
          guests: 'Nhiều ca sĩ trẻ',
          experience: 'Lễ hội âm nhạc mùa hè.',
          date: '15/06/2025',
          location: 'Sân vận động Hàng Đẫy',
          organizer: 'Summer Beats',
          organizerLogo: 'https://placehold.co/50x50'
      }
  };

  // Hàm xử lý hiển thị chi tiết sự kiện
  const setupEventDetails = () => {
      document.querySelectorAll('.view-details').forEach(button => {
          button.removeEventListener('click', handleViewDetails); // Bỏ sự kiện cũ để tránh trùng lặp
          button.addEventListener('click', handleViewDetails);
      });
  };

  const handleViewDetails = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Nút Xem chi tiết được nhấn');

      const eventId = e.currentTarget.getAttribute('data-event-id');
      console.log('Event ID:', eventId);

      if (!eventDetails[eventId]) {
          console.error('Không tìm thấy dữ liệu sự kiện với ID:', eventId);
          return;
      }

      // Mở trang chi tiết trong tab mới
      window.open(`event-detail.html?eventId=${eventId}`, '_blank');
  };

  // Khởi tạo sự kiện lần đầu
  setupEventDetails();

  // Ripple Effect for Buttons
  const buttons = document.querySelectorAll('button, .create-event, .view-tickets, .login-signup');
  buttons.forEach(button => {
      button.addEventListener('click', function(e) {
          const ripple = document.createElement('span');
          ripple.classList.add('ripple');
          this.appendChild(ripple);

          const rect = this.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height);
          ripple.style.width = ripple.style.height = `${size}px`;

          const x = e.clientX - rect.left - size / 2;
          const y = e.clientY - rect.top - size / 2;
          ripple.style.left = `${x}px`;
          ripple.style.top = `${y}px`;

          ripple.addEventListener('animationend', () => ripple.remove());
      });
  });

  // Banner Video Controls
  const video = document.getElementById('bannerVideo');
  const muteControl = document.getElementById('muteControl');
  let isMuted = true;

  if (video && muteControl) {
      muteControl.addEventListener('click', () => {
          isMuted = !isMuted;
          video.muted = isMuted;
          muteControl.textContent = isMuted ? '🔇' : '🔊';
      });

      video.addEventListener('mouseover', () => video.play());
      video.addEventListener('mouseout', () => video.pause());
  }

  // Carousel Setup
  const carousels = [
      { wrapper: document.getElementById('carouselWrapper'), prev: '.carousel-prev', next: '.carousel-next', cardWidth: 316, visibleCards: 4 },
      { wrapper: document.getElementById('trendingCarouselWrapper'), prev: '#trendingPrev', next: '#trendingNext', cardWidth: 382, visibleCards: 3 },
      { wrapper: document.getElementById('recommendedCarouselWrapper'), prev: '#recommendedPrev', next: '#recommendedNext', cardWidth: 346, visibleCards: 4 }
  ];

  carousels.forEach(carousel => {
      const wrapper = carousel.wrapper;
      const prevBtn = document.querySelector(carousel.prev);
      const nextBtn = document.querySelector(carousel.next);
      carousel.currentIndex = 0;
      const cardWidth = carousel.cardWidth;
      const visibleCards = carousel.visibleCards;
      const totalCards = wrapper ? wrapper.children.length : 0;

      if (wrapper && prevBtn && nextBtn) {
          carousel.updateCarousel = () => {
              wrapper.style.transform = `translateX(-${carousel.currentIndex * cardWidth}px)`;
              prevBtn.disabled = carousel.currentIndex === 0;
              nextBtn.disabled = carousel.currentIndex >= totalCards - visibleCards;
          };

          prevBtn.addEventListener('click', () => {
              if (carousel.currentIndex > 0) {
                  carousel.currentIndex--;
                  carousel.updateCarousel();
              }
          });

          nextBtn.addEventListener('click', () => {
              if (carousel.currentIndex < totalCards - visibleCards) {
                  carousel.currentIndex++;
                  carousel.updateCarousel();
              }
          });

          carousel.updateCarousel();
      }
  });

  // Intersection Observer for Fade-In Animation
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });

  document.querySelectorAll('.event-card, .trending-card, .recommended-card').forEach(card => {
      observer.observe(card);
  });

  // Search Functionality
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
      searchInput.addEventListener('input', () => {
          const query = searchInput.value.toLowerCase();
          const events = document.querySelectorAll('.event-card, .trending-card, .recommended-card');

          events.forEach(event => {
              const title = event.querySelector('h4').textContent.toLowerCase();
              const category = event.dataset.category.toLowerCase();
              const location = event.dataset.location ? event.dataset.location.toLowerCase() : '';

              if (title.includes(query) || category.includes(query) || location.includes(query)) {
                  event.style.display = 'block';
              } else {
                  event.style.display = 'none';
              }
          });
      });
  }

  // Login State Management
  let isLoggedIn = false;

  // Login Modal
  const loginModal = document.getElementById('loginModal');
  const loginForm = document.getElementById('loginForm');
  const closeModal = document.querySelector('#loginModal .close-btn');
  const createEventBtn = document.querySelector('.create-event');
  const viewTicketsBtn = document.querySelector('.view-tickets');
  const loginSignupBtn = document.querySelector('.login-signup');

  const openLoginModal = () => {
      if (loginModal) {
          loginModal.style.display = 'flex';
      }
  };

  const closeLoginModal = () => {
      if (loginModal) {
          loginModal.style.display = 'none';
      }
  };

  if (createEventBtn) {
      createEventBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (!isLoggedIn) {
              openLoginModal();
          } else {
              showSection('createEventPage');
          }
      });
  }

  if (viewTicketsBtn) {
      viewTicketsBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (!isLoggedIn) {
              openLoginModal();
          } else {
              showSection('ticketsPage');
          }
      });
  }

  if (loginSignupBtn) {
      loginSignupBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (isLoggedIn) {
              showSection('accountPage');
          } else {
              openLoginModal();
          }
      });
  }

  if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
          e.preventDefault();
          e.stopPropagation();
          isLoggedIn = true;
          closeLoginModal();
          if (loginSignupBtn) {
              loginSignupBtn.textContent = 'Tài khoản';
          }
          showSection('accountPage');
      });
  }

  if (closeModal) {
      closeModal.addEventListener('click', closeLoginModal);
  }

  window.addEventListener('click', (e) => {
      if (e.target === loginModal) {
          closeLoginModal();
      }
  });

  document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && loginModal && loginModal.style.display === 'flex') {
          closeLoginModal();
      }
  });

  // Section Navigation
  const sections = document.querySelectorAll('main, section');
  window.showSection = (sectionId) => {
      console.log('Đang hiển thị section:', sectionId);

      // Ẩn tất cả các section
      sections.forEach(section => {
          section.style.display = 'none';
      });

      // Hiển thị section được yêu cầu
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
          targetSection.style.display = 'block';
          console.log(`Section ${sectionId} đã được hiển thị`);
      } else {
          console.error(`Không tìm thấy section với ID: ${sectionId}. Vui lòng kiểm tra file HTML.`);
          return;
      }

      // Reset carousel và hiệu ứng fade-in khi quay lại main-content
      if (sectionId === 'main-content') {
          carousels.forEach(carousel => {
              if (carousel.wrapper) {
                  carousel.currentIndex = 0;
                  carousel.updateCarousel();
                  const cards = carousel.wrapper.querySelectorAll('.event-card, .trending-card, .recommended-card');
                  cards.forEach(card => {
                      card.classList.remove('visible');
                      observer.observe(card);
                  });
              }
          });

          if (video) {
              video.pause();
              video.currentTime = 0;
              video.play();
          }
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Hiển thị main-content ngay khi trang tải
  showSection('main-content');

  // Create Event Form Steps
  let currentStep = 1;
  window.nextStep = (step) => {
      currentStep = step;
      document.querySelectorAll('.step-content').forEach(content => {
          content.style.display = 'none';
      });
      const stepContent = document.getElementById(`step${step}`);
      if (stepContent) {
          stepContent.style.display = 'block';
      }
      document.querySelectorAll('.step').forEach(step => {
          step.classList.remove('active');
      });
      const activeStep = document.querySelector(`.step:nth-child(${step})`);
      if (activeStep) {
          activeStep.classList.add('active');
      }
  };

  window.submitEvent = () => {
      alert('Sự kiện đã được gửi để admin duyệt!');
      showSection('myEventsPage');
  };

  // Logout Function
  window.logout = () => {
      isLoggedIn = false;
      if (loginSignupBtn) {
          loginSignupBtn.textContent = 'Đăng nhập | Đăng ký';
      }
      showSection('main-content');
  };

  // Xử lý click vào logo "EVENTORY" để quay về trang chủ
  const logo = document.querySelector('.logo');
  if (logo) {
      logo.removeEventListener('click', handleLogoClick); // Bỏ sự kiện cũ để tránh trùng lặp
      logo.addEventListener('click', handleLogoClick);
  }

  function handleLogoClick(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Logo EVENTORY được nhấn, quay về trang chủ');
      window.location.href = 'index.html'; // Thay 'index.html' bằng tên file HTML của trang chủ
  }

  // Debug toàn cục để phát hiện các click không mong muốn
  document.addEventListener('click', (e) => {
      console.log('Sự kiện click tại:', e.target);
  });
});