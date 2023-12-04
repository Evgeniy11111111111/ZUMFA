"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var cookie = document.querySelector(".cookie");

if (!localStorage.getItem("cookie__zumfa")) {
  cookie.classList.add("active");
}

var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

var tooltipList = _toConsumableArray(tooltipTriggerList).map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

document.querySelector('.cookie__btn').addEventListener("click", function () {
  localStorage.setItem('cookie__zumfa', true);
  cookie.classList.remove("active");
});

if (document.getElementById("index")) {
  var items = Array.from(document.querySelectorAll(".hero__item"));
  var imgBlocks = Array.from(document.querySelectorAll(".hero__right-div"));
  items.forEach(function (item, index) {
    item.addEventListener("mouseover", function () {
      items.forEach(function (el) {
        el.classList.remove("active");
      });
      imgBlocks.forEach(function (el) {
        el.classList.remove("active");
      });
      item.classList.add("active");
      imgBlocks[index].classList.add("active");
    });
  });
  var swiperAfterHero = new Swiper(".after-hero__content", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".after-hero__pagination"
    },
    breakpoints: {
      700: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
  var feedbackInputs = document.querySelectorAll(".input-form");
  feedbackInputs.forEach(function (input) {
    input.addEventListener("blur", function () {
      checkForCompletion(input);
    });
    input.addEventListener("focus", function () {
      input.parentElement.classList.add("active");
    });
    checkForCompletion(input);
  });
}

if (document.getElementById("blog")) {
  var elems = document.querySelectorAll(".blog__head-item");
  activeElem(elems);
}

if (document.getElementById("about")) {
  var swiperYear = new Swiper(".about-history__tab-swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        spaceBetween: 20
      },
      768: {
        spaceBetween: 100
      }
    }
  });
  var swiperHistory = new Swiper(".about-history__bottom-swiper", {
    spaceBetween: 10,
    allowTouchMove: false,
    thumbs: {
      swiper: swiperYear
    },
    navigation: {
      nextEl: ".about-history__btn-next",
      prevEl: ".about-history__btn-prev"
    }
  });
  ymaps.ready(initMap);

  var _feedbackInputs = document.querySelectorAll(".input-form");

  _feedbackInputs.forEach(function (input) {
    input.addEventListener("blur", function () {
      checkForCompletion(input);
    });
    input.addEventListener("focus", function () {
      input.parentElement.classList.add("active");
    });
    checkForCompletion(input);
  });
}

if (document.getElementById("details-product")) {
  var swiper = new Swiper(".details-top__swiper2", {
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
        freeMode: true,
        watchSlidesProgress: true
      }
    }
  });
  var swiper2 = new Swiper(".details-top__swiper", {
    spaceBetween: 10,
    breakpoints: {
      768: {
        thumbs: {
          swiper: swiper
        },
        navigation: {
          prevEl: ".details-top__swiper-btn-prev",
          nextEl: ".details-top__swiper-btn-next"
        }
      },
      320: {
        pagination: {
          el: ".details-top__pagination"
        }
      }
    }
  });
  var btnHide = document.querySelector('.details-top__block-btn');
  var div = document.querySelector('.details-top__block-desc');
  btnHide.addEventListener('click', function () {
    btnMaxHeight(div, btnHide);
  });

  var _elems = document.querySelectorAll(".details-bottom__head-item");

  var divs = document.querySelectorAll(".details-bottom__body-item");
  activeTab(_elems, divs);

  _elems[0].classList.add("active");

  divs[0].classList.add("active");
  heightTab(divs[0]);
  document.addEventListener("DOMContentLoaded", function () {
    btnsHide(div, btnHide);
  });
  window.addEventListener("resize", function () {
    btnsHide(div, btnHide);
  });
}

if (document.getElementById("contacts")) {
  ymaps.ready(initMap);
}

if (document.getElementById("calculate")) {
  var btns = document.querySelectorAll('.calculate__item-btn');
  var modal = document.querySelectorAll('.calculate__modal');
  var close = document.querySelectorAll('.calculate__modal-close');
  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      modal.forEach(function (elem) {
        if (btn.dataset.target === elem.dataset.path) {
          elem.classList.add("active");
          document.body.classList.add("lock");
        }
      });
    });
  });
  close.forEach(function (elem) {
    elem.addEventListener('click', function () {
      elem.parentElement.parentElement.parentElement.parentElement.classList.remove('active');
      document.body.classList.remove("lock");
    });
  });
  modal.forEach(function (elem) {
    var content = elem.querySelector('.calculate__modal-content');
    elem.addEventListener("click", function (e) {
      if (!content.contains(e.target)) {
        console.log(e.target);
        elem.classList.remove("active");
        document.body.classList.remove("lock");
      }
    });
  });
}

function checkForCompletion(input) {
  if (input.value.length > 0) {
    input.parentElement.classList.add("active");
  } else {
    input.parentElement.classList.remove("active");
  }
}

function activeElem(elems) {
  elems.forEach(function (elem) {
    elem.addEventListener("click", function () {
      elems.forEach(function (el) {
        return el.classList.remove("active");
      });
      elem.classList.add("active");
    });
  });
}

var burger = document.querySelector(".header__burger");
var menu = document.querySelector(".header__menu-mobile");
var headerTabBtn = document.querySelectorAll('.header__select-list-item-btn');
var headerTabList = document.querySelectorAll(".header__select-right-wrap");
var select = document.querySelectorAll(".header__select");
select.forEach(function (elem) {
  elem.addEventListener("mouseover", function () {
    elem.classList.add("active");
  });
  elem.addEventListener("mouseleave", function (e) {
    if (!elem.contains(e.relatedTarget)) {
      elem.classList.remove("active");
      headerTabBtn.forEach(function (btn) {
        btn.classList.remove("active");
      });
      headerTabList.forEach(function (item) {
        item.classList.remove("active");
      });
    }
  });
});
headerTabBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    headerTabBtn.forEach(function (btn) {
      btn.classList.remove("active");
    });
    headerTabList.forEach(function (item) {
      item.classList.remove("active");
    });
    headerTabList.forEach(function (item) {
      if (btn.dataset.target === item.dataset.path) {
        item.classList.add("active");
        btn.classList.add("active");
      }
    });
  });
});
var bgHeader = document.querySelector(".header__menu-mobile-bg");
burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  bgHeader.classList.toggle('active');

  if (burger.classList.contains("active")) {
    document.body.classList.add('lock');
  } else {
    document.body.classList.remove('lock');
  }
});
new Accordion('.accordion-container');
new Accordion('.accordion-second');

function activeTab(btns, divs) {
  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      divs.forEach(function (div) {
        div.classList.remove("active");
      });
      btns.forEach(function (elem) {
        return elem.classList.remove('active');
      });
      btn.classList.add('active');
      divs.forEach(function (div) {
        if (div.dataset.target === btn.dataset.path) {
          div.classList.add('active');
          heightTab(div);
        }
      });
    });
  });
}

function heightTab(div) {
  div.parentElement.style.height = div.scrollHeight + 'px';
}

function btnsHide(div, btn) {
  if (div.scrollHeight >= 225) {
    btn.classList.remove("hide");
    div.classList.add("hide");
  } else {
    btn.classList.add("hide");
    div.classList.remove("hide");
  }
}

function btnMaxHeight(div, btn) {
  if (div.clientHeight > 225) {
    btn.classList.remove('active');
    div.style.maxHeight = 225 + 'px';
    div.classList.add("hide");
  } else {
    btn.classList.add('active');
    div.style.maxHeight = div.scrollHeight + 'px';
    div.classList.remove("hide");
  }
}

function initMap() {
  var myMap = new ymaps.Map("about__map", {
    center: [55.79402656892602, 37.48264549999995],
    zoom: 18,
    controls: []
  }); // Создание метки с круглой активной областью.

  var circleLayout = ymaps.templateLayoutFactory.createClass("<div class=\"placemark_layout_container\">\n        <span class=\"circle_layout\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"33\" viewBox=\"0 0 25 33\" fill=\"none\">\n                <rect width=\"24\" height=\"33\" transform=\"translate(1)\" fill=\"white\"/>\n                <path d=\"M23.79 11.0948C23.79 14.0105 22.0886 17.961 19.7067 21.9555C17.46 25.7235 14.6591 29.4479 12.2878 32.2348C9.78094 29.3239 6.974 25.5926 4.75877 21.8502C2.41771 17.8952 0.790039 14.0135 0.790039 11.0948C0.790039 5.27967 5.90112 0.5 12.29 0.5C18.679 0.5 23.79 5.27967 23.79 11.0948Z\" fill=\"#FFD341\" stroke=\"#FFCE00\"/>\n                <circle cx=\"12.29\" cy=\"12\" r=\"5.5\" fill=\"white\" stroke=\"#FFCE00\"/>\n            </svg>\n        </span>\n    </div>");
  var BalloonContentLayout = ymaps.templateLayoutFactory.createClass("\n        <div class=\"hint_layout_container\">\n            <div class=\"hint_layout_content\">\n                <div class=\"hint_layout_head\">\n                    {{ properties.name }}\n                </div>\n                <div class=\"hint_layout_body\">\n                    <div class=\"hint_layout_city\">\n                        <span class=\"hint_layout_svg\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"14\" viewBox=\"0 0 11 14\" fill=\"none\">\n                                <path d=\"M9.91641 4.53803C9.91641 6.98903 7.08564 11.0242 5.11641 13.3001C3.0241 10.9104 0.316406 6.98903 0.316406 4.53803C0.316406 2.08703 2.46544 0.100098 5.11641 0.100098C7.76737 0.100098 9.91641 2.08703 9.91641 4.53803Z\" fill=\"#21201C\"/>\n                                <circle cx=\"5.11875\" cy=\"4.9\" r=\"2.4\" fill=\"white\"/>\n                            </svg>\n                        </span>\n                        <span class=\"hint_layout_text\">\n                            {{ properties.city }}   \n                        </span>\n                    </div>\n                    <div class=\"hint_layout_address hint_layout_text\">\n                        {{ properties.address }}    \n                    </div>\n                    <div class=\"hint_layout_phone hint_layout_text\">\n                    {{ properties.phone }}    \n                    </div>\n                </div>\n            </div>\n        </div>\n        \n     ");
  var circlePlacemark = new ymaps.Placemark([55.79402656892602, 37.48264549999995], {
    name: "Центральный офис",
    city: "Москва",
    address: "РФ, 123060, Москва ул. Расплетина, дом 5, стр.9",
    phone: "+7 (495) 760-91-96 "
  }, {
    balloonContentLayout: BalloonContentLayout,
    hideIconOnBalloonOpen: false,
    iconLayout: circleLayout,
    iconShape: {
      type: 'Circle',
      coordinates: [0, 0],
      radius: 25
    }
  });
  myMap.geoObjects.add(circlePlacemark);
  myMap.behaviors.disable('drag');
  myMap.behaviors.disable('scrollZoom');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('rulerControl');
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY29va2llIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNsYXNzTGlzdCIsImFkZCIsInRvb2x0aXBUcmlnZ2VyTGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b29sdGlwTGlzdCIsIm1hcCIsInRvb2x0aXBUcmlnZ2VyRWwiLCJib290c3RyYXAiLCJUb29sdGlwIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldEl0ZW0iLCJyZW1vdmUiLCJnZXRFbGVtZW50QnlJZCIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwiaW1nQmxvY2tzIiwiZm9yRWFjaCIsIml0ZW0iLCJpbmRleCIsImVsIiwic3dpcGVyQWZ0ZXJIZXJvIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsInBhZ2luYXRpb24iLCJicmVha3BvaW50cyIsImZlZWRiYWNrSW5wdXRzIiwiaW5wdXQiLCJjaGVja0ZvckNvbXBsZXRpb24iLCJwYXJlbnRFbGVtZW50IiwiZWxlbXMiLCJhY3RpdmVFbGVtIiwic3dpcGVyWWVhciIsImZyZWVNb2RlIiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsInN3aXBlckhpc3RvcnkiLCJhbGxvd1RvdWNoTW92ZSIsInRodW1icyIsInN3aXBlciIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJ5bWFwcyIsInJlYWR5IiwiaW5pdE1hcCIsInN3aXBlcjIiLCJidG5IaWRlIiwiZGl2IiwiYnRuTWF4SGVpZ2h0IiwiZGl2cyIsImFjdGl2ZVRhYiIsImhlaWdodFRhYiIsImJ0bnNIaWRlIiwid2luZG93IiwiYnRucyIsIm1vZGFsIiwiY2xvc2UiLCJidG4iLCJlbGVtIiwiZGF0YXNldCIsInRhcmdldCIsInBhdGgiLCJib2R5IiwiY29udGVudCIsImUiLCJjb250YWlucyIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsImxlbmd0aCIsImJ1cmdlciIsIm1lbnUiLCJoZWFkZXJUYWJCdG4iLCJoZWFkZXJUYWJMaXN0Iiwic2VsZWN0IiwicmVsYXRlZFRhcmdldCIsImJnSGVhZGVyIiwidG9nZ2xlIiwiQWNjb3JkaW9uIiwic3R5bGUiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJtYXhIZWlnaHQiLCJteU1hcCIsIk1hcCIsImNlbnRlciIsInpvb20iLCJjb250cm9scyIsImNpcmNsZUxheW91dCIsInRlbXBsYXRlTGF5b3V0RmFjdG9yeSIsImNyZWF0ZUNsYXNzIiwiQmFsbG9vbkNvbnRlbnRMYXlvdXQiLCJjaXJjbGVQbGFjZW1hcmsiLCJQbGFjZW1hcmsiLCJuYW1lIiwiY2l0eSIsImFkZHJlc3MiLCJwaG9uZSIsImJhbGxvb25Db250ZW50TGF5b3V0IiwiaGlkZUljb25PbkJhbGxvb25PcGVuIiwiaWNvbkxheW91dCIsImljb25TaGFwZSIsInR5cGUiLCJjb29yZGluYXRlcyIsInJhZGl1cyIsImdlb09iamVjdHMiLCJiZWhhdmlvcnMiLCJkaXNhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLENBQWY7O0FBQ0EsSUFBSSxDQUFDQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsZUFBckIsQ0FBTCxFQUE0QztFQUN4Q0osTUFBTSxDQUFDSyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixRQUFyQjtBQUNIOztBQUVELElBQU1DLGtCQUFrQixHQUFHTixRQUFRLENBQUNPLGdCQUFULENBQTBCLDRCQUExQixDQUEzQjs7QUFDQSxJQUFNQyxXQUFXLEdBQUcsbUJBQUlGLGtCQUFKLEVBQXdCRyxHQUF4QixDQUE0QixVQUFBQyxnQkFBZ0I7RUFBQSxPQUFJLElBQUlDLFNBQVMsQ0FBQ0MsT0FBZCxDQUFzQkYsZ0JBQXRCLENBQUo7QUFBQSxDQUE1QyxDQUFwQjs7QUFFQVYsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLEVBQ0tZLGdCQURMLENB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Q3NCLFVBQU4sQ0FBaUIxRyxHQUFqQixDQUFxQjZGLGVBQXJCO0VBQ0FULEtBQUssQ0FBQ3VCLFNBQU4sQ0FBZ0JDLE9BQWhCLENBQXdCLE1BQXhCO0VBQ0F4QixLQUFLLENBQUN1QixTQUFOLENBQWdCQyxPQUFoQixDQUF3QixZQUF4QjtFQUNBeEIsS0FBSyxDQUFDSSxRQUFOLENBQWU5RSxNQUFmLENBQXNCLGVBQXRCO0VBQ0EwRSxLQUFLLENBQUNJLFFBQU4sQ0FBZTlFLE1BQWYsQ0FBc0IsZ0JBQXRCO0VBQ0EwRSxLQUFLLENBQUNJLFFBQU4sQ0FBZTlFLE1BQWYsQ0FBc0IsY0FBdEI7RUFDQTBFLEtBQUssQ0FBQ0ksUUFBTixDQUFlOUUsTUFBZixDQUFzQixtQkFBdEI7RUFDQTBFLEtBQUssQ0FBQ0ksUUFBTixDQUFlOUUsTUFBZixDQUFzQixjQUF0QjtBQUNIIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGNvb2tpZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29va2llXCIpXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29va2llX196dW1mYVwiKSkge1xuICAgIGNvb2tpZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG59XG5cbmNvbnN0IHRvb2x0aXBUcmlnZ2VyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIl0nKVxuY29uc3QgdG9vbHRpcExpc3QgPSBbLi4udG9vbHRpcFRyaWdnZXJMaXN0XS5tYXAodG9vbHRpcFRyaWdnZXJFbCA9PiBuZXcgYm9vdHN0cmFwLlRvb2x0aXAodG9vbHRpcFRyaWdnZXJFbCkpXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb29raWVfX2J0bicpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb29raWVfX3p1bWZhJywgdHJ1ZSlcbiAgICAgICAgY29va2llLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9KVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmRleFwiKSkge1xuICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlcm9fX2l0ZW1cIikpXG4gICAgY29uc3QgaW1nQmxvY2tzID1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVyb19fcmlnaHQtZGl2XCIpKVxuXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpbWdCbG9ja3MuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICAgICAgaW1nQmxvY2tzW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGNvbnN0IHN3aXBlckFmdGVySGVybyA9IG5ldyBTd2lwZXIoXCIuYWZ0ZXItaGVyb19fY29udGVudFwiLCB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIGVsOiBcIi5hZnRlci1oZXJvX19wYWdpbmF0aW9uXCJcbiAgICAgICAgfSxcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIDcwMDoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxMjAwOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGZlZWRiYWNrSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnB1dC1mb3JtXCIpXG4gICAgZmVlZGJhY2tJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNoZWNrRm9yQ29tcGxldGlvbihpbnB1dClcbiAgICAgICAgfSlcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlucHV0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICB9KVxuICAgICAgICBjaGVja0ZvckNvbXBsZXRpb24oaW5wdXQpXG4gICAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmxvZ1wiKSkge1xuICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9nX19oZWFkLWl0ZW1cIilcblxuICAgIGFjdGl2ZUVsZW0oZWxlbXMpXG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIikpIHtcbiAgICBjb25zdCBzd2lwZXJZZWFyID0gbmV3IFN3aXBlcihcIi5hYm91dC1oaXN0b3J5X190YWItc3dpcGVyXCIsIHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgICAgMzIwOiB7XG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pXG4gICAgY29uc3Qgc3dpcGVySGlzdG9yeSA9IG5ldyBTd2lwZXIoXCIuYWJvdXQtaGlzdG9yeV9fYm90dG9tLXN3aXBlclwiLCB7XG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgICAgICAgdGh1bWJzOiB7XG4gICAgICAgICAgICBzd2lwZXI6IHN3aXBlclllYXJcbiAgICAgICAgfSxcbiAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgbmV4dEVsOiBcIi5hYm91dC1oaXN0b3J5X19idG4tbmV4dFwiLFxuICAgICAgICAgICAgcHJldkVsOiBcIi5hYm91dC1oaXN0b3J5X19idG4tcHJldlwiLFxuICAgICAgICB9LFxuICAgIH0pXG5cbiAgICB5bWFwcy5yZWFkeShpbml0TWFwKVxuXG4gICAgY29uc3QgZmVlZGJhY2tJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlucHV0LWZvcm1cIilcbiAgICBmZWVkYmFja0lucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY2hlY2tGb3JDb21wbGV0aW9uKGlucHV0KVxuICAgICAgICB9KVxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgIH0pXG4gICAgICAgIGNoZWNrRm9yQ29tcGxldGlvbihpbnB1dClcbiAgICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxzLXByb2R1Y3RcIikpIHtcbiAgICBjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmRldGFpbHMtdG9wX19zd2lwZXIyXCIsIHtcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOjEwLFxuICAgICAgICAgICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBzd2lwZXIyID0gbmV3IFN3aXBlcihcIi5kZXRhaWxzLXRvcF9fc3dpcGVyXCIsIHtcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgICAgIHRodW1iczoge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZXI6IHN3aXBlclxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBwcmV2RWw6IFwiLmRldGFpbHMtdG9wX19zd2lwZXItYnRuLXByZXZcIixcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVsOiBcIi5kZXRhaWxzLXRvcF9fc3dpcGVyLWJ0bi1uZXh0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMzIwOiB7XG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBlbDogXCIuZGV0YWlscy10b3BfX3BhZ2luYXRpb25cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgYnRuSGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLXRvcF9fYmxvY2stYnRuJylcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscy10b3BfX2Jsb2NrLWRlc2MnKVxuXG4gICAgYnRuSGlkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtidG5NYXhIZWlnaHQoZGl2LCBidG5IaWRlKX0pXG5cbiAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGV0YWlscy1ib3R0b21fX2hlYWQtaXRlbVwiKVxuICAgIGNvbnN0IGRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRldGFpbHMtYm90dG9tX19ib2R5LWl0ZW1cIilcblxuICAgIGFjdGl2ZVRhYihlbGVtcywgZGl2cylcblxuICAgIGVsZW1zWzBdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICBkaXZzWzBdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICBoZWlnaHRUYWIoZGl2c1swXSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgYnRuc0hpZGUoZGl2LCBidG5IaWRlKVxuICAgIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBidG5zSGlkZShkaXYsIGJ0bkhpZGUpXG4gICAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdHNcIikpIHtcbiAgICB5bWFwcy5yZWFkeShpbml0TWFwKVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxjdWxhdGVcIikpIHtcbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGN1bGF0ZV9faXRlbS1idG4nKVxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGN1bGF0ZV9fbW9kYWwnKVxuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGN1bGF0ZV9fbW9kYWwtY2xvc2UnKVxuXG4gICAgYnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYnRuLmRhdGFzZXQudGFyZ2V0ID09PSBlbGVtLmRhdGFzZXQucGF0aCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGNsb3NlLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBlbGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgbW9kYWwuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGVsZW0ucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0ZV9fbW9kYWwtY29udGVudCcpXG5cbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRlbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxuICAgICAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICB9KVxuXG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yQ29tcGxldGlvbihpbnB1dCkge1xuICAgIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlucHV0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIH1cbn1cbmZ1bmN0aW9uIGFjdGl2ZUVsZW0oZWxlbXMpIHtcbiAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5jb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYnVyZ2VyXCIpXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX21lbnUtbW9iaWxlXCIpXG5jb25zdCBoZWFkZXJUYWJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19zZWxlY3QtbGlzdC1pdGVtLWJ0bicpXG5jb25zdCBoZWFkZXJUYWJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXJfX3NlbGVjdC1yaWdodC13cmFwXCIpXG5jb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlYWRlcl9fc2VsZWN0XCIpXG5cbnNlbGVjdC5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoIWVsZW0uY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICBoZWFkZXJUYWJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaGVhZGVyVGFiTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG59KVxuaGVhZGVyVGFiQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaGVhZGVyVGFiQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgIH0pXG4gICAgICAgIGhlYWRlclRhYkxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICB9KVxuICAgICAgICBoZWFkZXJUYWJMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoYnRuLmRhdGFzZXQudGFyZ2V0ID09PSBpdGVtLmRhdGFzZXQucGF0aCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn0pXG5cbmNvbnN0IGJnSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX21lbnUtbW9iaWxlLWJnXCIpXG5cbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpXG4gICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpXG4gICAgYmdIZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcblxuICAgIGlmIChidXJnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9jaycpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJylcbiAgICB9XG59KVxuXG5cbm5ldyBBY2NvcmRpb24oJy5hY2NvcmRpb24tY29udGFpbmVyJylcbm5ldyBBY2NvcmRpb24oJy5hY2NvcmRpb24tc2Vjb25kJylcblxuZnVuY3Rpb24gYWN0aXZlVGFiKGJ0bnMsIGRpdnMpIHtcbiAgICBidG5zLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgICAgICBkaXZzLmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJ0bnMuZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIGRpdnMuZm9yRWFjaChkaXYgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkaXYuZGF0YXNldC50YXJnZXQgPT09IGJ0bi5kYXRhc2V0LnBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodFRhYihkaXYpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBoZWlnaHRUYWIoZGl2KSB7XG4gICAgZGl2LnBhcmVudEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gZGl2LnNjcm9sbEhlaWdodCArICdweCdcbn1cblxuZnVuY3Rpb24gYnRuc0hpZGUoZGl2LCBidG4pIHtcbiAgICBpZiAoZGl2LnNjcm9sbEhlaWdodCA+PSAyMjUpIHtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGJ0bk1heEhlaWdodChkaXYsIGJ0bikge1xuICAgIGlmIChkaXYuY2xpZW50SGVpZ2h0ID4gMjI1KSB7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICBkaXYuc3R5bGUubWF4SGVpZ2h0ID0gMjI1ICsgJ3B4J1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICB9IGVsc2Uge1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgZGl2LnN0eWxlLm1heEhlaWdodCA9IGRpdi5zY3JvbGxIZWlnaHQgKyAncHgnXG4gICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcbiAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwiYWJvdXRfX21hcFwiLCB7XG4gICAgICAgIGNlbnRlcjogWzU1Ljc5NDAyNjU2ODkyNjAyLDM3LjQ4MjY0NTQ5OTk5OTk1XSxcbiAgICAgICAgem9vbTogMTgsXG4gICAgICAgIGNvbnRyb2xzOiBbXVxuICAgIH0pXG5cbiAgICAvLyDQodC+0LfQtNCw0L3QuNC1INC80LXRgtC60Lgg0YEg0LrRgNGD0LPQu9C+0Lkg0LDQutGC0LjQstC90L7QuSDQvtCx0LvQsNGB0YLRjNGOLlxuICAgIHZhciBjaXJjbGVMYXlvdXQgPSB5bWFwcy50ZW1wbGF0ZUxheW91dEZhY3RvcnkuY3JlYXRlQ2xhc3MoYDxkaXYgY2xhc3M9XCJwbGFjZW1hcmtfbGF5b3V0X2NvbnRhaW5lclwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNpcmNsZV9sYXlvdXRcIj5cbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIzM1wiIHZpZXdCb3g9XCIwIDAgMjUgMzNcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIzM1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxKVwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIzLjc5IDExLjA5NDhDMjMuNzkgMTQuMDEwNSAyMi4wODg2IDE3Ljk2MSAxOS43MDY3IDIxLjk1NTVDMTcuNDYgMjUuNzIzNSAxNC42NTkxIDI5LjQ0NzkgMTIuMjg3OCAzMi4yMzQ4QzkuNzgwOTQgMjkuMzIzOSA2Ljk3NCAyNS41OTI2IDQuNzU4NzcgMjEuODUwMkMyLjQxNzcxIDE3Ljg5NTIgMC43OTAwMzkgMTQuMDEzNSAwLjc5MDAzOSAxMS4wOTQ4QzAuNzkwMDM5IDUuMjc5NjcgNS45MDExMiAwLjUgMTIuMjkgMC41QzE4LjY3OSAwLjUgMjMuNzkgNS4yNzk2NyAyMy43OSAxMS4wOTQ4WlwiIGZpbGw9XCIjRkZEMzQxXCIgc3Ryb2tlPVwiI0ZGQ0UwMFwiLz5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTIuMjlcIiBjeT1cIjEyXCIgcj1cIjUuNVwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIiNGRkNFMDBcIi8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PmApO1xuICAgIHZhciBCYWxsb29uQ29udGVudExheW91dCA9IHltYXBzLnRlbXBsYXRlTGF5b3V0RmFjdG9yeS5jcmVhdGVDbGFzcyhgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoaW50X2xheW91dF9jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoaW50X2xheW91dF9jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhpbnRfbGF5b3V0X2hlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgcHJvcGVydGllcy5uYW1lIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhpbnRfbGF5b3V0X2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhpbnRfbGF5b3V0X2NpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGludF9sYXlvdXRfc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMVwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCAxMSAxNFwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOS45MTY0MSA0LjUzODAzQzkuOTE2NDEgNi45ODkwMyA3LjA4NTY0IDExLjAyNDIgNS4xMTY0MSAxMy4zMDAxQzMuMDI0MSAxMC45MTA0IDAuMzE2NDA2IDYuOTg5MDMgMC4zMTY0MDYgNC41MzgwM0MwLjMxNjQwNiAyLjA4NzAzIDIuNDY1NDQgMC4xMDAwOTggNS4xMTY0MSAwLjEwMDA5OEM3Ljc2NzM3IDAuMTAwMDk4IDkuOTE2NDEgMi4wODcwMyA5LjkxNjQxIDQuNTM4MDNaXCIgZmlsbD1cIiMyMTIwMUNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI1LjExODc1XCIgY3k9XCI0LjlcIiByPVwiMi40XCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaW50X2xheW91dF90ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvcGVydGllcy5jaXR5IH19ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGludF9sYXlvdXRfYWRkcmVzcyBoaW50X2xheW91dF90ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9wZXJ0aWVzLmFkZHJlc3MgfX0gICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGludF9sYXlvdXRfcGhvbmUgaGludF9sYXlvdXRfdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBwcm9wZXJ0aWVzLnBob25lIH19ICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgIGBcbiAgICApXG5cblxuICAgIHZhciBjaXJjbGVQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgICAgICBbNTUuNzk0MDI2NTY4OTI2MDIsMzcuNDgyNjQ1NDk5OTk5OTVdLCB7XG4gICAgICAgICAgICBuYW1lOiBcItCm0LXQvdGC0YDQsNC70YzQvdGL0Lkg0L7RhNC40YFcIixcbiAgICAgICAgICAgIGNpdHk6IFwi0JzQvtGB0LrQstCwXCIsXG4gICAgICAgICAgICBhZGRyZXNzOiBcItCg0KQsIDEyMzA2MCwg0JzQvtGB0LrQstCwINGD0LsuINCg0LDRgdC/0LvQtdGC0LjQvdCwLCDQtNC+0LwgNSwg0YHRgtGALjlcIixcbiAgICAgICAgICAgIHBob25lOiBcIis3ICg0OTUpIDc2MC05MS05NiBcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBiYWxsb29uQ29udGVudExheW91dDogQmFsbG9vbkNvbnRlbnRMYXlvdXQsXG4gICAgICAgICAgICBoaWRlSWNvbk9uQmFsbG9vbk9wZW46IGZhbHNlLFxuICAgICAgICAgICAgaWNvbkxheW91dDogY2lyY2xlTGF5b3V0LFxuICAgICAgICAgICAgaWNvblNoYXBlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ0NpcmNsZScsXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFswLCAwXSxcbiAgICAgICAgICAgICAgICByYWRpdXM6IDI1XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQoY2lyY2xlUGxhY2VtYXJrKTtcbiAgICBteU1hcC5iZWhhdmlvcnMuZGlzYWJsZSgnZHJhZycpO1xuICAgIG15TWFwLmJlaGF2aW9ycy5kaXNhYmxlKCdzY3JvbGxab29tJyk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdzZWFyY2hDb250cm9sJyk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0cmFmZmljQ29udHJvbCcpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHlwZVNlbGVjdG9yJyk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdmdWxsc2NyZWVuQ29udHJvbCcpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgncnVsZXJDb250cm9sJyk7XG59Il19
