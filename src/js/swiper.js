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

if (document.querySelector('.slider-offer__body')) {
    new Swiper('.slider-offer__body', {
        modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 32,
        breakpoints: {
            // when window width is >= 767.98px
            767.98: {
              slidesPerView: 2
            },
            // when window width is >= 1150px
            1150: {
              slidesPerView: 3
            },
        },
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		// Arrows
		navigation: {
			nextEl: '.slider-offer .slider-arrow_next',
			prevEl: '.slider-offer .slider-arrow_prev',
		}
	});
}

if (document.querySelector('.slider-reviews__body')) {
    new Swiper('.slider-reviews__body', {
        modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 'auto',
		spaceBetween: 32,
		watchOverflow: true,
		speed: 800,
		loop: false,
		preloadImages: false,
		// Arrows
		navigation: {
			nextEl: '.slider-reviews .slider-arrow_next',
			prevEl: '.slider-reviews .slider-arrow_prev',
		}
	});
}

if (document.querySelector('.slider-gallery__body')) {
    new Swiper('.slider-gallery__body', {
        modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
        breakpoints: {
            // when window width is >= 767.98px
            767.98: {
              slidesPerView: 4
            },
        },
		spaceBetween: 32,
		watchOverflow: true,
		speed: 800,
        loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		// Arrows
		navigation: {
			nextEl: '.slider-gallery .slider-arrow_next',
			prevEl: '.slider-gallery .slider-arrow_prev',
		}
	});
}

if (document.querySelector('.slider-planner__body')) {
    new Swiper('.slider-planner__body', {
        modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 'auto',
		spaceBetween: 0,
        direction: 'vertical',
		cssMode: true,
        breakpoints: {
            // when window width is >= 767.98px
            767.98: {
                direction: 'horizontal',
                spaceBetween: 32,
				cssMode: false,
            },
        },
		watchOverflow: true,
		speed: 800,
        loop: false,
		preloadImages: false,
		// Arrows
		navigation: {
			nextEl: '.slider-planner__arrows .slider-arrow_next',
			prevEl: '.slider-planner__arrows .slider-arrow_prev',
		}
	});
}