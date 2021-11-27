// ------------------------------- Карта Яндекс  -------------------------------
// ymaps.ready(init);

// function init() {
//     // Создание карты.
//     var myMap = new ymaps.Map("YMapsID", {
//         // Координаты центра карты.
//         // Порядок по умолчнию: «широта, долгота».
//         center: [37.777339, -122.414567],
//         // Уровень масштабирования. Допустимые значения:
//         // от 0 (весь мир) до 19.
//         zoom: 12,
//         // Элементы управления
//         behaviors: ["default", "scrollZoom"],
//         controls: [

//             'zoomControl', // Ползунок масштаба
//             'rulerControl', // Линейка
//             'routeButtonControl', // Панель маршрутизации
//             'trafficControl', // Пробки
//             'typeSelector', // Переключатель слоев карты
//             'fullscreenControl', // Полноэкранный режим
//             // Поисковая строка
//         ]
//     });
//     new ymaps.control.SearchControl({
//         options: {
//             // вид - поисковая строка
//             size: 'large',
//             // Включим возможность искать не только топонимы, но и организации.
//             provider: 'yandex#search'
//         }
//     });
//     var myPlacemark = new ymaps.Placemark([37.777339, -122.414567], {
//         hintContent: 'Специально для ГЛО-академии',
//         balloonContent: 'Я тут'
//     });
//     myMap.geoObjects.add(myPlacemark);

// }

////S
/**/
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
});
/**/
// ------------------------------- Параллакс на jquery
$('.newsletter-parallax').parallax({
    imageSrc: 'img/newsletter/newsletter-bg.jpeg',
    speed: 0.3,
});

/**/
// ------------------------------- Тут пытался параллакс с JS, сначала движение мышкой  -------------------------------
// window.onload = function() {
//     const newsletter = document.querySelector('.newsletter');

//     if (newsletter) {
//         const content = document.querySelector('.newsletter-row');
//         const bckgrnd = document.querySelector('.newsletter__parallax-img');

//         //Коэффициенты
//         const forbckgrnd = 40;

//         //Скорость анимации
//         const speed = 0.05

//         //Объявление переменных
//         let positionX = 0,
//             positionY = 0;
//         let coordXprocent = 0,
//             coordYprocent = 0;

//         function setMouseParallaxStyle() {
//             const distX = coordXprocent - positionX;
//             const distY = coordYprocent - positionY;

//             positionX = positionX + (distX * speed);
//             positionY = positionY + (distY * speed);

//             //Передаём стили
//             bckgrnd.style.cssText = 'transform: translate(${positionX / forbBkgrnd}%,${positionY / forbckgrnd}%);';
//             requestAnimationFrame(setMouseParallaxStyle);

//         }
//         setMouseParallaxStyle();

//         newsletter.addEventListener("mousemove", function(e) {
//             const newsletterWidth = newsletter.offsetWidth;
//             const newsletterHeight = newsletter.offsetHeight;

//             coordXprocent = coordX / newsletterWidth * 100;
//             coordYprocent = coordY / newsletterHeight * 100;
//         });
//     }
// }

/**/