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

window.addEventListener("pageshow", function () {
  var inputs = document.querySelectorAll(".input-form");
  inputs.forEach(function (input) {
    return checkForCompletion(input);
  });
});
var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

var tooltipList = _toConsumableArray(tooltipTriggerList).map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

document.querySelector('.cookie__btn').addEventListener("click", function () {
  localStorage.setItem('cookie__zumfa', true);
  cookie.classList.remove("active");
});
var feedbackInputs = document.querySelectorAll(".input-form");
feedbackInputs.forEach(function (input) {
  if (input.type === "tel") {
    input.addEventListener("input", function (e) {
      inputPhone(e);
    });
    input.addEventListener("keydown", function (e) {
      onePhoneKeyDown(e);
    });
  }

  input.addEventListener("blur", function () {
    checkForCompletion(input);
  });
  input.addEventListener("focus", function () {
    input.parentElement.classList.add("active");
  });
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
    effect: "fade",
    thumbs: {
      swiper: swiperYear
    },
    navigation: {
      nextEl: ".about-history__btn-next",
      prevEl: ".about-history__btn-prev"
    }
  });
  ymaps.ready(initMap);
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
    if (btn.classList.contains("active")) {
      headerTabBtn.forEach(function (btn) {
        btn.classList.remove("active");
      });
      headerTabList.forEach(function (item) {
        item.classList.remove("active");
      });
    } else {
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
    }
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
    center: [63.90975266739315, 87.30797789874381],
    zoom: 4,
    minZoom: 4,
    controls: []
  }, {
    minZoom: 4
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
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('rulerControl');
}

function regPhone(input) {
  return input.value.replace(/\D/g, '');
}

function inputPhone(e) {
  var input = e.target;
  var inputNumberValue = regPhone(input);
  var formattedInputValue = '';
  var selectionStart = input.selectionStart; // Если в инпут введены симовлы не соответсвующие регулярки, то значение инпута становится пустым

  if (!inputNumberValue) return input.value = ''; // В этой части я не совсем понимаю что происходит

  if (input.value.length != selectionStart) {
    if (e.data && /\D/g.test(e.data)) {
      input.value = inputNumberValue;
    }

    return;
  }

  if (['7', '8', '9'].includes(inputNumberValue[0])) {
    // Если первая цифра девять, тогда мы заменяем первую цифру на 7 и девятку делаем второй цифрой
    if (inputNumberValue[0] == '9') inputNumberValue = '7' + inputNumberValue;
    if (inputNumberValue[0] == '8') inputNumberValue = '7'; // Если первая цифра 7, тогда значение инпута начинается с +7, если первая цифра 8, тогда значение начинается с 8

    var firstSymbol = '+7';
    formattedInputValue = firstSymbol + ' '; // Если в инпуте больше одной цифры добавляем скобку открытия и так далее

    if (inputNumberValue.length > 1) {
      formattedInputValue += '(' + inputNumberValue.substring(1, 4);
    }

    if (inputNumberValue.length >= 5) {
      formattedInputValue += ') ' + inputNumberValue.substring(4, 7);
    }

    if (inputNumberValue.length >= 8) {
      formattedInputValue += '-' + inputNumberValue.substring(7, 9);
    }

    if (inputNumberValue.length >= 10) {
      formattedInputValue += '-' + inputNumberValue.substring(9, 11);
    }
  } else {
    //Если вводимое число не 7, 8 или 9 тогда добавляем +и добавляем введеное число
    formattedInputValue = '+7 (9' + inputNumberValue;
  }

  input.value = formattedInputValue;
}

function onePhoneKeyDown(e) {
  var input = e.target;

  if (regPhone(input).length == 1 && e.keyCode === 8) {
    input.value = '';
  }
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY29va2llIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNsYXNzTGlzdCIsImFkZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImlucHV0IiwiY2hlY2tGb3JDb21wbGV0aW9uIiwidG9vbHRpcFRyaWdnZXJMaXN0IiwidG9vbHRpcExpc3QiLCJtYXAiLCJ0b29sdGlwVHJpZ2dlckVsIiwiYm9vdHN0cmFwIiwiVG9vbHRpcCIsInNldEl0ZW0iLCJyZW1vdmUiLCJmZWVkYmFja0lucHV0cyIsInR5cGUiLCJlIiwiaW5wdXRQaG9uZSIsIm9uZVBob25lS2V5RG93biIsInBhcmVudEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwiaW1nQmxvY2tzIiwiaXRlbSIsImluZGV4IiwiZWwiLCJzd2lwZXJBZnRlckhlcm8iLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwicGFnaW5hdGlvbiIsImJyZWFrcG9pbnRzIiwiZWxlbXMiLCJhY3RpdmVFbGVtIiwic3dpcGVyWWVhciIsImZyZWVNb2RlIiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsInN3aXBlckhpc3RvcnkiLCJhbGxvd1RvdWNoTW92ZSIsImVmZmVjdCIsInRodW1icyIsInN3aXBlciIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJ5bWFwcyIsInJlYWR5IiwiaW5pdE1hcCIsInN3aXBlcjIiLCJidG5IaWRlIiwiZGl2IiwiYnRuTWF4SGVpZ2h0IiwiZGl2cyIsImFjdGl2ZVRhYiIsImhlaWdodFRhYiIsImJ0bnNIaWRlIiwiYnRucyIsIm1vZGFsIiwiY2xvc2UiLCJidG4iLCJlbGVtIiwiZGF0YXNldCIsInRhcmdldCIsInBhdGgiLCJib2R5IiwiY29udGVudCIsImNvbnRhaW5zIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwibGVuZ3RoIiwiYnVyZ2VyIiwibWVudSIsImhlYWRlclRhYkJ0biIsImhlYWRlclRhYkxpc3QiLCJzZWxlY3QiLCJyZWxhdGVkVGFyZ2V0IiwiYmdIZWFkZXIiLCJ0b2dnbGUiLCJBY2NvcmRpb24iLCJzdHlsZSIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsIm1heEhlaWdodCIsIm15TWFwIiwiTWFwIiwiY2VudGVyIiwiem9vbSIsIm1pblpvb20iLCJjb250cm9scyIsImNpcmNsZUxheW91dCIsInRlbXBsYXRlTGF5b3V0RmFjdG9yeSIsImNyZWF0ZUNsYXNzIiwiQmFsbG9vbkNvbnRlbnRMYXlvdXQiLCJjaXJjbGVQbGFjZW1hcmsiLCJQbGFjZW1hcmsiLCJuYW1lIiwiY2l0eSIsImFkZHJlc3MiLCJwaG9uZSIsImJhbGxvb25Db250ZW50TGF5b3V0IiwiaGlkZUljb25PbkJhbGxvb25PcGVuIiwiaWNvbkxheW91dCIsImljb25TaGFwZSIsImNvb3JkaW5hdGVzIiwicmFkaXVzIiwiZ2VvT2JqZWN0cyIsInJlZ1Bob25lIiwicmVwbGFjZSIsImlucHV0TnVtYmVyVmFsdWUiLCJmb3JtYXR0ZWRJbnB1dFZhbHVlIiwic2VsZWN0aW9uU3RhcnQiLCJkYXRhIiwidGVzdCIsImluY2x1ZGVzIiwiZmlyc3RTeW1ib2wiLCJzdWJzdHJpbmciLCJrZXlDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLENBQWY7O0FBQ0EsSUFBSSxDQUFDQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsZUFBckIsQ0FBTCxFQUE0QztFQUN4Q0osTUFBTSxDQUFDSyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixRQUFyQjtBQUNIOztBQUVEQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLFVBQXhCLEVBQW9DLFlBQU07RUFDdEMsSUFBTUMsTUFBTSxHQUFH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LCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvb2tpZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29va2llXCIpXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29va2llX196dW1mYVwiKSkge1xuICAgIGNvb2tpZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGFnZXNob3dcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5wdXQtZm9ybVwiKVxuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IGNoZWNrRm9yQ29tcGxldGlvbihpbnB1dCkpXG59KVxuXG5jb25zdCB0b29sdGlwVHJpZ2dlckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1icy10b2dnbGU9XCJ0b29sdGlwXCJdJylcbmNvbnN0IHRvb2x0aXBMaXN0ID0gWy4uLnRvb2x0aXBUcmlnZ2VyTGlzdF0ubWFwKHRvb2x0aXBUcmlnZ2VyRWwgPT4gbmV3IGJvb3RzdHJhcC5Ub29sdGlwKHRvb2x0aXBUcmlnZ2VyRWwpKVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29va2llX19idG4nKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29va2llX196dW1mYScsIHRydWUpXG4gICAgICAgIGNvb2tpZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgfSlcblxuY29uc3QgZmVlZGJhY2tJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlucHV0LWZvcm1cIilcbmZlZWRiYWNrSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuXG4gICAgaWYgKGlucHV0LnR5cGUgPT09IFwidGVsXCIpIHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7aW5wdXRQaG9uZShlKX0pXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7b25lUGhvbmVLZXlEb3duKGUpfSlcbiAgICB9XG5cbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICAgIGNoZWNrRm9yQ29tcGxldGlvbihpbnB1dClcbiAgICB9KVxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XG4gICAgICAgIGlucHV0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG59KVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmRleFwiKSkge1xuICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlcm9fX2l0ZW1cIikpXG4gICAgY29uc3QgaW1nQmxvY2tzID1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVyb19fcmlnaHQtZGl2XCIpKVxuXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpbWdCbG9ja3MuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICAgICAgaW1nQmxvY2tzW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGNvbnN0IHN3aXBlckFmdGVySGVybyA9IG5ldyBTd2lwZXIoXCIuYWZ0ZXItaGVyb19fY29udGVudFwiLCB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIGVsOiBcIi5hZnRlci1oZXJvX19wYWdpbmF0aW9uXCJcbiAgICAgICAgfSxcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIDcwMDoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxMjAwOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmxvZ1wiKSkge1xuICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9nX19oZWFkLWl0ZW1cIilcblxuICAgIGFjdGl2ZUVsZW0oZWxlbXMpXG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIikpIHtcbiAgICBjb25zdCBzd2lwZXJZZWFyID0gbmV3IFN3aXBlcihcIi5hYm91dC1oaXN0b3J5X190YWItc3dpcGVyXCIsIHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgICAgMzIwOiB7XG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pXG4gICAgY29uc3Qgc3dpcGVySGlzdG9yeSA9IG5ldyBTd2lwZXIoXCIuYWJvdXQtaGlzdG9yeV9fYm90dG9tLXN3aXBlclwiLCB7XG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgICAgICAgZWZmZWN0OiBcImZhZGVcIixcbiAgICAgICAgdGh1bWJzOiB7XG4gICAgICAgICAgICBzd2lwZXI6IHN3aXBlclllYXJcbiAgICAgICAgfSxcbiAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgbmV4dEVsOiBcIi5hYm91dC1oaXN0b3J5X19idG4tbmV4dFwiLFxuICAgICAgICAgICAgcHJldkVsOiBcIi5hYm91dC1oaXN0b3J5X19idG4tcHJldlwiLFxuICAgICAgICB9LFxuICAgIH0pXG5cbiAgICB5bWFwcy5yZWFkeShpbml0TWFwKVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxzLXByb2R1Y3RcIikpIHtcbiAgICBjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmRldGFpbHMtdG9wX19zd2lwZXIyXCIsIHtcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOjEwLFxuICAgICAgICAgICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBzd2lwZXIyID0gbmV3IFN3aXBlcihcIi5kZXRhaWxzLXRvcF9fc3dpcGVyXCIsIHtcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgICAgIHRodW1iczoge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZXI6IHN3aXBlclxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBwcmV2RWw6IFwiLmRldGFpbHMtdG9wX19zd2lwZXItYnRuLXByZXZcIixcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVsOiBcIi5kZXRhaWxzLXRvcF9fc3dpcGVyLWJ0bi1uZXh0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMzIwOiB7XG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBlbDogXCIuZGV0YWlscy10b3BfX3BhZ2luYXRpb25cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgYnRuSGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLXRvcF9fYmxvY2stYnRuJylcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscy10b3BfX2Jsb2NrLWRlc2MnKVxuXG4gICAgYnRuSGlkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtidG5NYXhIZWlnaHQoZGl2LCBidG5IaWRlKX0pXG5cbiAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGV0YWlscy1ib3R0b21fX2hlYWQtaXRlbVwiKVxuICAgIGNvbnN0IGRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRldGFpbHMtYm90dG9tX19ib2R5LWl0ZW1cIilcblxuICAgIGFjdGl2ZVRhYihlbGVtcywgZGl2cylcblxuICAgIGVsZW1zWzBdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICBkaXZzWzBdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICBoZWlnaHRUYWIoZGl2c1swXSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgYnRuc0hpZGUoZGl2LCBidG5IaWRlKVxuICAgIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBidG5zSGlkZShkaXYsIGJ0bkhpZGUpXG4gICAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdHNcIikpIHtcbiAgICB5bWFwcy5yZWFkeShpbml0TWFwKVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxjdWxhdGVcIikpIHtcbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGN1bGF0ZV9faXRlbS1idG4nKVxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGN1bGF0ZV9fbW9kYWwnKVxuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGN1bGF0ZV9fbW9kYWwtY2xvc2UnKVxuXG4gICAgYnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYnRuLmRhdGFzZXQudGFyZ2V0ID09PSBlbGVtLmRhdGFzZXQucGF0aCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGNsb3NlLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBlbGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgbW9kYWwuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGVsZW0ucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0ZV9fbW9kYWwtY29udGVudCcpXG5cbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRlbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxuICAgICAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICB9KVxuXG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yQ29tcGxldGlvbihpbnB1dCkge1xuICAgIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlucHV0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIH1cbn1cbmZ1bmN0aW9uIGFjdGl2ZUVsZW0oZWxlbXMpIHtcbiAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5jb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYnVyZ2VyXCIpXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX21lbnUtbW9iaWxlXCIpXG5jb25zdCBoZWFkZXJUYWJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19zZWxlY3QtbGlzdC1pdGVtLWJ0bicpXG5jb25zdCBoZWFkZXJUYWJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXJfX3NlbGVjdC1yaWdodC13cmFwXCIpXG5jb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlYWRlcl9fc2VsZWN0XCIpXG5cbnNlbGVjdC5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoIWVsZW0uY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICBoZWFkZXJUYWJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaGVhZGVyVGFiTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG59KVxuaGVhZGVyVGFiQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgIGhlYWRlclRhYkJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBoZWFkZXJUYWJMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGVhZGVyVGFiQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGhlYWRlclRhYkxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBoZWFkZXJUYWJMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGJ0bi5kYXRhc2V0LnRhcmdldCA9PT0gaXRlbS5kYXRhc2V0LnBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG59KVxuXG5jb25zdCBiZ0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51LW1vYmlsZS1iZ1wiKVxuXG5idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICAgIGJnSGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG5cbiAgICBpZiAoYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpXG4gICAgfVxufSlcblxuXG5uZXcgQWNjb3JkaW9uKCcuYWNjb3JkaW9uLWNvbnRhaW5lcicpXG5uZXcgQWNjb3JkaW9uKCcuYWNjb3JkaW9uLXNlY29uZCcpXG5cbmZ1bmN0aW9uIGFjdGl2ZVRhYihidG5zLCBkaXZzKSB7XG4gICAgYnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICAgICAgZGl2cy5mb3JFYWNoKGRpdiA9PiB7XG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBidG5zLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICBkaXZzLmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGl2LmRhdGFzZXQudGFyZ2V0ID09PSBidG4uZGF0YXNldC5wYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRUYWIoZGl2KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gaGVpZ2h0VGFiKGRpdikge1xuICAgIGRpdi5wYXJlbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9IGRpdi5zY3JvbGxIZWlnaHQgKyAncHgnXG59XG5cbmZ1bmN0aW9uIGJ0bnNIaWRlKGRpdiwgYnRuKSB7XG4gICAgaWYgKGRpdi5zY3JvbGxIZWlnaHQgPj0gMjI1KSB7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICB9IGVsc2Uge1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBidG5NYXhIZWlnaHQoZGl2LCBidG4pIHtcbiAgICBpZiAoZGl2LmNsaWVudEhlaWdodCA+IDIyNSkge1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgZGl2LnN0eWxlLm1heEhlaWdodCA9IDIyNSArICdweCdcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIGRpdi5zdHlsZS5tYXhIZWlnaHQgPSBkaXYuc2Nyb2xsSGVpZ2h0ICsgJ3B4J1xuICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluaXRNYXAoKSB7XG4gICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcImFib3V0X19tYXBcIiwge1xuICAgICAgICBjZW50ZXI6IFs2My45MDk3NTI2NjczOTMxNSw4Ny4zMDc5Nzc4OTg3NDM4MV0sXG4gICAgICAgIHpvb206IDQsXG4gICAgICAgIG1pblpvb206IDQsXG4gICAgICAgIGNvbnRyb2xzOiBbXVxuICAgIH0sIHtcbiAgICAgICAgbWluWm9vbTogNCxcbiAgICB9KVxuXG4gICAgLy8g0KHQvtC30LTQsNC90LjQtSDQvNC10YLQutC4INGBINC60YDRg9Cz0LvQvtC5INCw0LrRgtC40LLQvdC+0Lkg0L7QsdC70LDRgdGC0YzRji5cbiAgICB2YXIgY2lyY2xlTGF5b3V0ID0geW1hcHMudGVtcGxhdGVMYXlvdXRGYWN0b3J5LmNyZWF0ZUNsYXNzKGA8ZGl2IGNsYXNzPVwicGxhY2VtYXJrX2xheW91dF9jb250YWluZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjaXJjbGVfbGF5b3V0XCI+XG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMzNcIiB2aWV3Qm94PVwiMCAwIDI1IDMzXCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMzNcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMSlcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMy43OSAxMS4wOTQ4QzIzLjc5IDE0LjAxMDUgMjIuMDg4NiAxNy45NjEgMTkuNzA2NyAyMS45NTU1QzE3LjQ2IDI1LjcyMzUgMTQuNjU5MSAyOS40NDc5IDEyLjI4NzggMzIuMjM0OEM5Ljc4MDk0IDI5LjMyMzkgNi45NzQgMjUuNTkyNiA0Ljc1ODc3IDIxLjg1MDJDMi40MTc3MSAxNy44OTUyIDAuNzkwMDM5IDE0LjAxMzUgMC43OTAwMzkgMTEuMDk0OEMwLjc5MDAzOSA1LjI3OTY3IDUuOTAxMTIgMC41IDEyLjI5IDAuNUMxOC42NzkgMC41IDIzLjc5IDUuMjc5NjcgMjMuNzkgMTEuMDk0OFpcIiBmaWxsPVwiI0ZGRDM0MVwiIHN0cm9rZT1cIiNGRkNFMDBcIi8+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjEyLjI5XCIgY3k9XCIxMlwiIHI9XCI1LjVcIiBmaWxsPVwid2hpdGVcIiBzdHJva2U9XCIjRkZDRTAwXCIvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5gKTtcbiAgICB2YXIgQmFsbG9vbkNvbnRlbnRMYXlvdXQgPSB5bWFwcy50ZW1wbGF0ZUxheW91dEZhY3RvcnkuY3JlYXRlQ2xhc3MoYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGludF9sYXlvdXRfY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGludF9sYXlvdXRfY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoaW50X2xheW91dF9oZWFkXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHByb3BlcnRpZXMubmFtZSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoaW50X2xheW91dF9ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoaW50X2xheW91dF9jaXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpbnRfbGF5b3V0X3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTFcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMTEgMTRcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTkuOTE2NDEgNC41MzgwM0M5LjkxNjQxIDYuOTg5MDMgNy4wODU2NCAxMS4wMjQyIDUuMTE2NDEgMTMuMzAwMUMzLjAyNDEgMTAuOTEwNCAwLjMxNjQwNiA2Ljk4OTAzIDAuMzE2NDA2IDQuNTM4MDNDMC4zMTY0MDYgMi4wODcwMyAyLjQ2NTQ0IDAuMTAwMDk4IDUuMTE2NDEgMC4xMDAwOThDNy43NjczNyAwLjEwMDA5OCA5LjkxNjQxIDIuMDg3MDMgOS45MTY0MSA0LjUzODAzWlwiIGZpbGw9XCIjMjEyMDFDXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNS4xMTg3NVwiIGN5PVwiNC45XCIgcj1cIjIuNFwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGludF9sYXlvdXRfdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb3BlcnRpZXMuY2l0eSB9fSAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhpbnRfbGF5b3V0X2FkZHJlc3MgaGludF9sYXlvdXRfdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvcGVydGllcy5hZGRyZXNzIH19ICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhpbnRfbGF5b3V0X3Bob25lIGhpbnRfbGF5b3V0X3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgcHJvcGVydGllcy5waG9uZSB9fSAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICBgXG4gICAgKVxuXG5cbiAgICB2YXIgY2lyY2xlUGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhcbiAgICAgICAgWzU1Ljc5NDAyNjU2ODkyNjAyLDM3LjQ4MjY0NTQ5OTk5OTk1XSwge1xuICAgICAgICAgICAgbmFtZTogXCLQptC10L3RgtGA0LDQu9GM0L3Ri9C5INC+0YTQuNGBXCIsXG4gICAgICAgICAgICBjaXR5OiBcItCc0L7RgdC60LLQsFwiLFxuICAgICAgICAgICAgYWRkcmVzczogXCLQoNCkLCAxMjMwNjAsINCc0L7RgdC60LLQsCDRg9C7LiDQoNCw0YHQv9C70LXRgtC40L3QsCwg0LTQvtC8IDUsINGB0YLRgC45XCIsXG4gICAgICAgICAgICBwaG9uZTogXCIrNyAoNDk1KSA3NjAtOTEtOTYgXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnRMYXlvdXQ6IEJhbGxvb25Db250ZW50TGF5b3V0LFxuICAgICAgICAgICAgaGlkZUljb25PbkJhbGxvb25PcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIGljb25MYXlvdXQ6IGNpcmNsZUxheW91dCxcbiAgICAgICAgICAgIGljb25TaGFwZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdDaXJjbGUnLFxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbMCwgMF0sXG4gICAgICAgICAgICAgICAgcmFkaXVzOiAyNVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcblxuICAgIG15TWFwLmdlb09iamVjdHMuYWRkKGNpcmNsZVBsYWNlbWFyayk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdzZWFyY2hDb250cm9sJyk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0cmFmZmljQ29udHJvbCcpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHlwZVNlbGVjdG9yJyk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdmdWxsc2NyZWVuQ29udHJvbCcpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgncnVsZXJDb250cm9sJyk7XG59XG5cbmZ1bmN0aW9uIHJlZ1Bob25lKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0LnZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG59XG5cbmZ1bmN0aW9uIGlucHV0UGhvbmUoZSkge1xuICAgIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xuICAgIGxldCBpbnB1dE51bWJlclZhbHVlID0gcmVnUGhvbmUoaW5wdXQpO1xuICAgIGxldCBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gJyc7XG4gICAgbGV0IHNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnRcbiAgICAvLyDQldGB0LvQuCDQsiDQuNC90L/Rg9GCINCy0LLQtdC00LXQvdGLINGB0LjQvNC+0LLQu9GLINC90LUg0YHQvtC+0YLQstC10YLRgdCy0YPRjtGJ0LjQtSDRgNC10LPRg9C70Y/RgNC60LgsINGC0L4g0LfQvdCw0YfQtdC90LjQtSDQuNC90L/Rg9GC0LAg0YHRgtCw0L3QvtCy0LjRgtGB0Y8g0L/Rg9GB0YLRi9C8XG4gICAgaWYgKCFpbnB1dE51bWJlclZhbHVlKSByZXR1cm4gaW5wdXQudmFsdWUgPSAnJ1xuICAgIC8vINCSINGN0YLQvtC5INGH0LDRgdGC0Lgg0Y8g0L3QtSDRgdC+0LLRgdC10Lwg0L/QvtC90LjQvNCw0Y4g0YfRgtC+INC/0YDQvtC40YHRhdC+0LTQuNGCXG4gICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCAhPSBzZWxlY3Rpb25TdGFydCkge1xuICAgICAgICBpZiAoZS5kYXRhICYmIC9cXEQvZy50ZXN0KGUuZGF0YSkpIHtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXROdW1iZXJWYWx1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChbJzcnLCAnOCcsICc5J10uaW5jbHVkZXMoaW5wdXROdW1iZXJWYWx1ZVswXSkpIHtcbiAgICAgICAgLy8g0JXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAg0LTQtdCy0Y/RgtGMLCDRgtC+0LPQtNCwINC80Ysg0LfQsNC80LXQvdGP0LXQvCDQv9C10YDQstGD0Y4g0YbQuNGE0YDRgyDQvdCwIDcg0Lgg0LTQtdCy0Y/RgtC60YMg0LTQtdC70LDQtdC8INCy0YLQvtGA0L7QuSDRhtC40YTRgNC+0LlcbiAgICAgICAgaWYgKGlucHV0TnVtYmVyVmFsdWVbMF0gPT0gJzknKSBpbnB1dE51bWJlclZhbHVlID0gJzcnICsgaW5wdXROdW1iZXJWYWx1ZTtcbiAgICAgICAgaWYgKGlucHV0TnVtYmVyVmFsdWVbMF0gPT0gJzgnKSBpbnB1dE51bWJlclZhbHVlID0gJzcnXG4gICAgICAgIC8vINCV0YHQu9C4INC/0LXRgNCy0LDRjyDRhtC40YTRgNCwIDcsINGC0L7Qs9C00LAg0LfQvdCw0YfQtdC90LjQtSDQuNC90L/Rg9GC0LAg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0YEgKzcsINC10YHQu9C4INC/0LXRgNCy0LDRjyDRhtC40YTRgNCwIDgsINGC0L7Qs9C00LAg0LfQvdCw0YfQtdC90LjQtSDQvdCw0YfQuNC90LDQtdGC0YHRjyDRgSA4XG4gICAgICAgIGxldCBmaXJzdFN5bWJvbCA9ICcrNyc7XG4gICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBmaXJzdFN5bWJvbCArICcgJztcbiAgICAgICAgLy8g0JXRgdC70Lgg0LIg0LjQvdC/0YPRgtC1INCx0L7Qu9GM0YjQtSDQvtC00L3QvtC5INGG0LjRhNGA0Ysg0LTQvtCx0LDQstC70Y/QtdC8INGB0LrQvtCx0LrRgyDQvtGC0LrRgNGL0YLQuNGPINC4INGC0LDQuiDQtNCw0LvQtdC1XG4gICAgICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJygnICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoMSwgNClcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gNSkge1xuICAgICAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnKSAnICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoNCwgNylcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gOCkge1xuICAgICAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg3LCA5KVxuICAgICAgICB9XG4gICAgICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+PSAxMCkge1xuICAgICAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg5LCAxMSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgeyAvL9CV0YHQu9C4INCy0LLQvtC00LjQvNC+0LUg0YfQuNGB0LvQviDQvdC1IDcsIDgg0LjQu9C4IDkg0YLQvtCz0LTQsCDQtNC+0LHQsNCy0LvRj9C10LwgK9C4INC00L7QsdCw0LLQu9GP0LXQvCDQstCy0LXQtNC10L3QvtC1INGH0LjRgdC70L5cbiAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9ICcrNyAoOScgKyBpbnB1dE51bWJlclZhbHVlO1xuICAgIH1cbiAgICBpbnB1dC52YWx1ZSA9IGZvcm1hdHRlZElucHV0VmFsdWVcbn1cblxuZnVuY3Rpb24gb25lUGhvbmVLZXlEb3duIChlKSB7XG4gICAgbGV0IGlucHV0ID0gZS50YXJnZXQ7XG4gICAgaWYgKHJlZ1Bob25lKGlucHV0KS5sZW5ndGggPT0gMSAmJiBlLmtleUNvZGUgPT09IDgpIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICB9XG59Il19
