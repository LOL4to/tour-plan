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
var myMap;
ymaps.ready(function () {
    myMap = new ymaps.Map("YMapsID", {
        center: [37.777339, -122.414567],
        zoom: 13
     });
		myMap.setType('yandex#map');
		myMap.hint.show([],
    '<em>ГЛО академия</em> лучшая?');
});
