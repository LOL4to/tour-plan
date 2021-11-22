var mySwiper = new Swiper(".swiper", {
	loop: true,
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
	// Navigation arrows
	navigation: {
		nextEl: ".slider-button--next",
		prevEl: ".slider-button--prev",
	},
	effect: "coverflow",
});
