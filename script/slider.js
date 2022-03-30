new Swiper('.swiper', {

	navigation: {
		nextEl: '.words-about-us__arrow_type-next',
		prevEl: '.words-about-us__arrow_type-prev',
	},

	pagination: {
		el: '.words-about-us__pagination',
		clickable: true,
		dynamicBullets: true,
		dynamicMainBullets: 4,
	},
	slidesPerView: 3,
	spaceBetween: 8,
	observer: true,
	observeParents: true,
	speed: 800,
	loop: true,
	setWrapperSize: true,
	//autoHeight: true,
	breakpoints: {

		320: {
			slidesPerView: 1,
			spaceBetween: -40,
		},
		767.98: {
			slidesPerView: 2.2,
			spaceBetween: 0,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 0,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 8,
		},
	},
})