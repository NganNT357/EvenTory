document.addEventListener('DOMContentLoaded', () => {
    console.log('event-detail.js đã được tải thành công');

    // Đảm bảo section event-detail-page hiển thị
    const eventDetailPage = document.querySelector('.event-detail-page');
    if (eventDetailPage) {
        eventDetailPage.style.display = 'block';
        console.log('Đã hiển thị section event-detail-page');
    } else {
        console.error('Không tìm thấy section event-detail-page');
    }

    // Dữ liệu chi tiết sự kiện (giống với script.js, thêm thông tin hạng vé)
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
            organizerLogo: 'https://placehold.co/50x50',
            tickets: [
                { time: '19:30 - 21:30, 30 Tháng 04, 2025', category: 'VVIP', price: '2.500.000đ', available: true },
                { time: '19:30 - 21:30, 30 Tháng 04, 2025', category: 'VIP', price: '1.800.000đ', available: true },
                { time: '19:30 - 21:30, 30 Tháng 04, 2025', category: 'Premium', price: '1.200.000đ', available: false }
            ]
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
            organizerLogo: 'https://placehold.co/50x50',
            tickets: [
                { time: '19:30 - 21:30, 24 Tháng 04, 2025', category: 'VIP', price: '1.500.000đ', available: true },
                { time: '19:30 - 21:30, 24 Tháng 04, 2025', category: 'Standard', price: '800.000đ', available: false }
            ]
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
            organizerLogo: 'https://placehold.co/50x50',
            tickets: [
                { time: '19:30 - 21:30, 25 Tháng 04, 2025', category: 'VVIP', price: '2.190.000đ', available: true },
                { time: '19:30 - 21:30, 25 Tháng 04, 2025', category: 'VIP', price: '1.790.000đ', available: true },
                { time: '19:30 - 21:30, 25 Tháng 04, 2025', category: 'Premium', price: '1.390.000đ', available: false },
                { time: '19:30 - 21:30, 26 Tháng 04, 2025', category: 'VVIP', price: '2.190.000đ', available: true }
            ]
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
            organizerLogo: 'https://placehold.co/50x50',
            tickets: [
                { time: '10:00 - 18:00, 26 Tháng 04, 2025', category: 'Standard', price: '500.000đ', available: true }
            ]
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
            organizerLogo: 'https://placehold.co/50x50',
            tickets: [
                { time: '14:00 - 16:00, 01 Tháng 05, 2025', category: 'VIP', price: '1.200.000đ', available: true },
                { time: '14:00 - 16:00, 01 Tháng 05, 2025', category: 'Standard', price: '700.000đ', available: false }
            ]
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
            organizerLogo: 'https://placehold.co/50x50',
            tickets: [
                { time: '09:00 - 17:00, 05 Tháng 05, 2025', category: 'Standard', price: 'Miễn phí (Sinh viên)', available: true },
                { time: '09:00 - 17:00, 05 Tháng 05, 2025', category: 'Premium', price: '300.000đ', available: true }
            ]
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
            organizerLogo: 'https://placehold.co/50x50',
            tickets: [
                { time: '18:00 - 22:00, 10 Tháng 07, 2025', category: 'VIP', price: '2.000.000đ', available: true },
                { time: '18:00 - 22:00, 10 Tháng 07, 2025', category: 'Standard', price: '1.000.000đ', available: true }
            ]
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
            organizerLogo: 'https://placehold.co/50x50',
            tickets: [
                { time: '10:00 - 20:00, 20 Tháng 06, 2025', category: 'Standard', price: '100.000đ', available: true }
            ]
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
            organizerLogo: 'https://placehold.co/50x50',
            tickets: [
                { time: '14:00 - 16:00, 14 Tháng 05, 2025', category: 'VIP', price: '1.500.000đ', available: true },
                { time: '14:00 - 16:00, 14 Tháng 05, 2025', category: 'Standard', price: '800.000đ', available: false }
            ]
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
            organizerLogo: 'https://placehold.co/50x50',
            tickets: [
                { time: '19:00 - 21:00, 20 Tháng 04, 2025', category: 'VIP', price: '1.800.000đ', available: true },
                { time: '19:00 - 21:00, 20 Tháng 04, 2025', category: 'Standard', price: '1.000.000đ', available: false }
            ]
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
            organizerLogo: 'https://placehold.co/50x50',
            tickets: [
                { time: '19:00 - 21:00, 01 Tháng 05, 2025', category: 'Standard', price: '500.000đ', available: true },
                { time: '19:00 - 21:00, 01 Tháng 05, 2025', category: 'Premium', price: '1.000.000đ', available: false }
            ]
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
            organizerLogo: 'https://placehold.co/50x50',
            tickets: [
                { time: '18:00 - 22:00, 15 Tháng 06, 2025', category: 'VIP', price: '1.500.000đ', available: true },
                { time: '18:00 - 22:00, 15 Tháng 06, 2025', category: 'Standard', price: '800.000đ', available: true }
            ]
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
            organizerLogo: 'https://placehold.co/50x50',
            tickets: [
                { time: '19:00 - 23:00, 25 Tháng 06, 2025', category: 'VIP', price: '2.000.000đ', available: true },
                { time: '19:00 - 23:00, 25 Tháng 06, 2025', category: 'Standard', price: '1.200.000đ', available: false }
            ]
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
            organizerLogo: 'https://placehold.co/50x50',
            tickets: [
                { time: '19:00 - 21:00, 30 Tháng 04, 2025', category: 'Standard', price: '300.000đ', available: true }
            ]
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
            organizerLogo: 'https://placehold.co/50x50',
            tickets: [
                { time: '19:00 - 21:00, 03 Tháng 05, 2025', category: 'Standard', price: '400.000đ', available: true }
            ]
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
            organizerLogo: 'https://placehold.co/50x50',
            tickets: [
                { time: '14:00 - 16:00, 26 Tháng 04, 2025', category: 'Standard', price: '500.000đ', available: true }
            ]
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
            organizerLogo: 'https://placehold.co/50x50',
            tickets: [
                { time: '16:30 - 18:30, 26 Tháng 04, 2025', category: 'Standard', price: '600.000đ', available: true }
            ]
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
            organizerLogo: 'https://placehold.co/50x50',
            tickets: [
                { time: '18:00 - 22:00, 15 Tháng 06, 2025', category: 'VIP', price: '1.500.000đ', available: true },
                { time: '18:00 - 22:00, 15 Tháng 06, 2025', category: 'Standard', price: '800.000đ', available: true }
            ]
        }
    };

    // Lấy eventId từ query string
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('eventId');
    console.log('Event ID từ URL:', eventId);

    // Kiểm tra các phần tử HTML trước khi sử dụng
    const eventContent = document.getElementById('event-content');
    const eventTitle = document.getElementById('event-title');
    const eventImage = document.getElementById('event-image');
    const eventPromotion = document.getElementById('event-promotion');
    const eventGuests = document.getElementById('event-guests');
    const eventExperience = document.getElementById('event-experience');
    const eventDate = document.getElementById('event-date');
    const eventLocation = document.getElementById('event-location');
    const ticketList = document.getElementById('ticket-list');
    const organizerName = document.getElementById('organizer-name');
    const organizerLogo = document.getElementById('organizer-logo');

    // Debug: Kiểm tra xem các phần tử có tồn tại không
    console.log('Kiểm tra phần tử HTML:');
    console.log('eventContent:', eventContent);
    console.log('eventTitle:', eventTitle);
    console.log('eventImage:', eventImage);
    console.log('eventPromotion:', eventPromotion);
    console.log('eventGuests:', eventGuests);
    console.log('eventExperience:', eventExperience);
    console.log('eventDate:', eventDate);
    console.log('eventLocation:', eventLocation);
    console.log('ticketList:', ticketList);
    console.log('organizerName:', organizerName);
    console.log('organizerLogo:', organizerLogo);

    // Kiểm tra nếu không có eventId hoặc không tìm thấy sự kiện
    if (!eventId || !eventDetails[eventId]) {
        console.error('Không tìm thấy sự kiện với eventId:', eventId);
        if (eventContent) {
            eventContent.innerHTML = `
                <h2 style="color: #fff;">Không tìm thấy sự kiện</h2>
                <p style="color: #fff;">Xin lỗi, chúng tôi không tìm thấy thông tin sự kiện. Vui lòng quay lại trang chủ.</p>
            `;
        } else {
            console.error('Không tìm thấy phần tử event-content để hiển thị thông báo lỗi');
        }
        return;
    }

    // Lấy dữ liệu sự kiện
    const event = eventDetails[eventId];
    console.log('Dữ liệu sự kiện:', event);

    // Điền dữ liệu vào các phần tử HTML
    try {
        if (!eventTitle || !eventImage || !eventPromotion || !eventGuests || !eventExperience || !eventDate || !eventLocation || !ticketList || !organizerName || !organizerLogo) {
            throw new Error('Một hoặc nhiều phần tử HTML không được tìm thấy');
        }

        eventTitle.textContent = event.title || 'Không có tiêu đề';
        console.log('Đã điền tiêu đề:', eventTitle.textContent);

        eventImage.src = event.image || 'https://placehold.co/300x400';
        eventImage.alt = event.title || 'Event Image';
        eventImage.style.display = 'block';
        console.log('Đã điền hình ảnh:', eventImage.src);

        eventPromotion.textContent = event.promotion || 'Không có thông tin';
        console.log('Đã điền khuyến mãi:', eventPromotion.textContent);

        eventGuests.textContent = event.guests || 'Không có thông tin';
        console.log('Đã điền khách mời:', eventGuests.textContent);

        eventExperience.textContent = event.experience || 'Không có thông tin';
        console.log('Đã điền trải nghiệm:', eventExperience.textContent);

        eventDate.textContent = event.date || 'Không có thông tin';
        console.log('Đã điền ngày diễn ra:', eventDate.textContent);

        eventLocation.textContent = event.location || 'Không có thông tin';
        console.log('Đã điền địa điểm:', eventLocation.textContent);

        // Điền danh sách hạng vé
        if (event.tickets && event.tickets.length > 0) {
            event.tickets.forEach(ticket => {
                const ticketItem = document.createElement('div');
                ticketItem.classList.add('ticket-item');
                ticketItem.innerHTML = `
                    <p class="ticket-time">${ticket.time}</p>
                    <div class="ticket-details">
                        <span class="ticket-category">${ticket.category}</span>
                        <span class="ticket-price">${ticket.price}</span>
                    </div>
                    ${ticket.available ? '<button class="buy-ticket">Mua vé ngay</button>' : '<span class="sold-out">Hết vé</span>'}
                `;
                ticketList.appendChild(ticketItem);
            });
            console.log('Đã điền danh sách hạng vé:', event.tickets);
        } else {
            ticketList.innerHTML = '<p>Không có thông tin hạng vé.</p>';
            console.log('Không có thông tin hạng vé cho sự kiện này');
        }

        organizerName.textContent = `Ban tổ chức: ${event.organizer || 'Không có thông tin'}`;
        console.log('Đã điền tên ban tổ chức:', organizerName.textContent);

        organizerLogo.src = event.organizerLogo || 'https://placehold.co/50x50';
        organizerLogo.alt = event.organizer || 'Organizer Logo';
        organizerLogo.style.display = 'block';
        console.log('Đã điền logo ban tổ chức:', organizerLogo.src);
    } catch (error) {
        console.error('Lỗi khi điền dữ liệu vào HTML:', error);
        if (eventContent) {
            eventContent.innerHTML = `
                <h2 style="color: #fff;">Có lỗi xảy ra</h2>
                <p style="color: #fff;">Không thể hiển thị thông tin sự kiện. Vui lòng thử lại sau.</p>
            `;
        }
    }

    // Xử lý logo EVENTORY để quay về trang chủ
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Logo EVENTORY được nhấn, quay về trang chủ');
            window.location.href = 'index.html';
        });
    } else {
        console.error('Không tìm thấy phần tử logo');
    }

    // Xử lý nút "Xem chi tiết" trong phần "Có thể bạn cũng thích"
    const setupEventDetails = () => {
        const viewDetailsButtons = document.querySelectorAll('.view-details');
        console.log('Số lượng nút Xem chi tiết:', viewDetailsButtons.length);
        viewDetailsButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const newEventId = e.currentTarget.getAttribute('data-event-id');
                console.log('Xem chi tiết sự kiện khác:', newEventId);
                window.open(`event-detail.html?eventId=${newEventId}`, '_blank');
            });
        });
    };
    setupEventDetails();

    // Carousel cho phần "Có thể bạn cũng thích"
    const carousel = {
        wrapper: document.querySelector('.recommended-carousel .carousel-wrapper'),
        prev: document.querySelector('.recommended-carousel .carousel-prev'),
        next: document.querySelector('.recommended-carousel .carousel-next'),
        currentIndex: 0,
        cardWidth: 346,
        visibleCards: 2,
        totalCards: document.querySelectorAll('.recommended-carousel .recommended-card').length
    };

    console.log('Kiểm tra carousel:', {
        wrapper: carousel.wrapper,
        prev: carousel.prev,
        next: carousel.next,
        totalCards: carousel.totalCards
    });

    if (carousel.wrapper && carousel.prev && carousel.next) {
        carousel.updateCarousel = () => {
            carousel.wrapper.style.transform = `translateX(-${carousel.currentIndex * carousel.cardWidth}px)`;
            carousel.prev.disabled = carousel.currentIndex === 0;
            carousel.next.disabled = carousel.currentIndex >= carousel.totalCards - carousel.visibleCards;
        };

        carousel.prev.addEventListener('click', () => {
            if (carousel.currentIndex > 0) {
                carousel.currentIndex--;
                carousel.updateCarousel();
            }
        });

        carousel.next.addEventListener('click', () => {
            if (carousel.currentIndex < carousel.totalCards - carousel.visibleCards) {
                carousel.currentIndex++;
                carousel.updateCarousel();
            }
        });

        carousel.updateCarousel();
    } else {
        console.error('Không thể khởi tạo carousel do thiếu phần tử');
    }

    // Ripple Effect cho các nút (bao gồm nút Mua vé ngay)
    const buttons = document.querySelectorAll('button, .create-event, .view-tickets, .login-signup, .buy-ticket');
    console.log('Số lượng nút có ripple effect:', buttons.length);
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

    // Intersection Observer cho hiệu ứng fade-in
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const recommendedCards = document.querySelectorAll('.recommended-card');
    console.log('Số lượng recommended-card:', recommendedCards.length);
    recommendedCards.forEach(card => {
        observer.observe(card);
    });

    // Debug toàn cục để phát hiện các click
    document.addEventListener('click', (e) => {
        console.log('Sự kiện click tại:', e.target);
    });
});