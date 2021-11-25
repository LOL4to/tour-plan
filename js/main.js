// ------------------------------- Карта Яндекс  -------------------------------
ymaps.ready(init);

function init() {
    // Создание карты.
    var myMap = new ymaps.Map("YMapsID", {
        // Координаты центра карты.
        // Порядок по умолчнию: «широта, долгота».
        center: [37.777339, -122.414567],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 12,
        // Элементы управления
        behaviors: ["default", "scrollZoom"],
        controls: [

            'zoomControl', // Ползунок масштаба
            'rulerControl', // Линейка
            'routeButtonControl', // Панель маршрутизации
            'trafficControl', // Пробки
            'typeSelector', // Переключатель слоев карты
            'fullscreenControl', // Полноэкранный режим

            // Поисковая строка


        ]
    });
    new ymaps.control.SearchControl({
        options: {
            // вид - поисковая строка
            size: 'large',
            // Включим возможность искать не только топонимы, но и организации.
            provider: 'yandex#search'
        }
    });
    var myPlacemark = new ymaps.Placemark([37.777339, -122.414567], {
        hintContent: 'Специально для ГЛО-академии',
        balloonContent: 'Я тут'
    });
    myMap.geoObjects.add(myPlacemark);

}
// ------------------------------- Слайдеры  -------------------------------
var hotelSlider = new Swiper(".hotel-slider", {
    loop: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    // Navigation arrows
    navigation: {
        nextEl: ".hotel-slider__button--next",
        prevEl: ".hotel-slider__button--prev",
    },
    effect: "coverflow",
});
var reviewsSlider = new Swiper(".reviews-slider", {
    loop: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    // Navigation arrows
    navigation: {
        nextEl: ".reviews-slider__button--next",
        prevEl: ".reviews-slider__button--prev",
    },
    effect: "coverflow",
});