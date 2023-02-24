import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

if (document.querySelector('.slider-dest__body')) {
    new Swiper('.slider-dest__body', {
        modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 'auto',
		spaceBetween: 32,
		watchOverflow: true,
		speed: 800,
		loop: false,
		preloadImages: true,
		// Arrows
		navigation: {
			nextEl: '.slider-dest .slider-arrow_next',
			prevEl: '.slider-dest .slider-arrow_prev',
		}
	});
}