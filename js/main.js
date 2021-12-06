$(document).ready(function() {
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
    $(".newsletter-parallax").parallax({
        imageSrc: "img/newsletter/newsletter-bg.jpeg",
        speed: 0.2,
    });
    var menuButton = document.querySelector(".header-top__menu-button");
    menuButton.addEventListener("click", function() {
        console.log("Клик по кнопке меню");
        document
            .querySelector(".header__navbar")
            .classList.toggle("header__navbar--visible");
        document.body.classList.toggle("body--visible");
    });
    document
        .querySelector(".navbar")
        .addEventListener("click", ({ target, currentTarget }) => {
            if (innerWidth > 767) return;
            if (target.classList.contains("navbar__link")) {
                currentTarget.classList.remove("header__navbar--visible");
                document.body.classList.remove("body--visible");
            }
        });
    var modalButton = $("[data-toggle=modal]");
    var closeModalButton = $(".modal__close");
    modalButton.on("click", openModal);
    closeModalButton.on("click", closeModal);

    function openModal() {
        console.log($(this).attr("data-href"));
        var targetModal = $(this).attr("data-href");
        $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
        $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
    }

    function closeModal(event) {
        event.preventDefault();
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
    }
    $(document).on("keydown", function(e) {
        let key = e.which;
        document.getElementById("booking-modal");
        if (key === 27) {
            console.log("key");
            var modalDialog = $(".modal__dialog");
            var modalOverlay = $(".modal__overlay");
            modalOverlay.removeClass("modal__overlay--visible");
            modalDialog.removeClass("modal__dialog--visible");
            document.getElementById("booking-modal");
        }
    });
});
// var navbarVisible = document.getElementsByClassName(".header__navbar--visible");

// if ('navbarVisible') {
//     document.body.style.overflow = 'hidden';
// else
//     document.body.style.overflow = 'visible';
// };
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