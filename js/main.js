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
  checkForCompletion(input);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY29va2llIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNsYXNzTGlzdCIsImFkZCIsInRvb2x0aXBUcmlnZ2VyTGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b29sdGlwTGlzdCIsIm1hcCIsInRvb2x0aXBUcmlnZ2VyRWwiLCJib290c3RyYXAiLCJUb29sdGlwIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldEl0ZW0iLCJyZW1vdmUiLCJmZWVkYmFja0lucHV0cyIsImZvckVhY2giLCJpbnB1dCIsInR5cGUiLCJlIiwiaW5wdXRQaG9uZSIsIm9uZVBob25lS2V5RG93biIsImNoZWNrRm9yQ29tcGxldGlvbiIsInBhcmVudEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwiaW1nQmxvY2tzIiwiaXRlbSIsImluZGV4IiwiZWwiLCJzd2lwZXJBZnRlckhlcm8iLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwicGFnaW5hdGlvbiIsImJyZWFrcG9pbnRzIiwiZWxlbXMiLCJhY3RpdmVFbGVtIiwic3dpcGVyWWVhciIsImZyZWVNb2RlIiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsInN3aXBlckhpc3RvcnkiLCJhbGxvd1RvdWNoTW92ZSIsImVmZmVjdCIsInRodW1icyIsInN3aXBlciIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJ5bWFwcyIsInJlYWR5IiwiaW5pdE1hcCIsInN3aXBlcjIiLCJidG5IaWRlIiwiZGl2IiwiYnRuTWF4SGVpZ2h0IiwiZGl2cyIsImFjdGl2ZVRhYiIsImhlaWdodFRhYiIsImJ0bnNIaWRlIiwid2luZG93IiwiYnRucyIsIm1vZGFsIiwiY2xvc2UiLCJidG4iLCJlbGVtIiwiZGF0YXNldCIsInRhcmdldCIsInBhdGgiLCJib2R5IiwiY29udGVudCIsImNvbnRhaW5zIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwibGVuZ3RoIiwiYnVyZ2VyIiwibWVudSIsImhlYWRlclRhYkJ0biIsImhlYWRlclRhYkxpc3QiLCJzZWxlY3QiLCJyZWxhdGVkVGFyZ2V0IiwiYmdIZWFkZXIiLCJ0b2dnbGUiLCJBY2NvcmRpb24iLCJzdHlsZSIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsIm1heEhlaWdodCIsIm15TWFwIiwiTWFwIiwiY2VudGVyIiwiem9vbSIsImNvbnRyb2xzIiwiY2lyY2xlTGF5b3V0IiwidGVtcGxhdGVMYXlvdXRGYWN0b3J5IiwiY3JlYXRlQ2xhc3MiLCJCYWxsb29uQ29udGVudExheW91dCIsImNpcmNsZVBsYWNlbWFyayIsIlBsYWNlbWFyayIsIm5hbWUiLCJjaXR5IiwiYWRkcmVzcyIsInBob25lIiwiYmFsbG9vbkNvbnRlbnRMYXlvdXQiLCJoaWRlSWNvbk9uQmFsbG9vbk9wZW4iLCJpY29uTGF5b3V0IiwiaWNvblNoYXBlIiwiY29vcmRpbmF0ZXMiLCJyYWRpdXMiLCJnZW9PYmplY3RzIiwiYmVoYXZpb3JzIiwiZGlzYWJsZSIsInJlZ1Bob25lIiwicmVwbGFjZSIsImlucHV0TnVtYmVyVmFsdWUiLCJmb3JtYXR0ZWRJbnB1dFZhbHVlIiwic2VsZWN0aW9uU3RhcnQiLCJkYXRhIiwidGVzdCIsImluY2x1ZGVzIiwiZmlyc3RTeW1ib2wiLCJzdWJzdHJpbmciLCJrZXlDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLENBQWY7O0FBQ0EsSUFBSSxDQUFDQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsZUFBckIsQ0FBTCxFQUE0QztFQUN4Q0osTUFBTSxDQUFDSyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixRQUFyQjtBQUNIOztBQUVELElBQU1DLGtCQUFrQixHQUFHTixRQUFRLENBQUNPLGdCQUFULENBQTBCLDRCQUExQixDQUEzQjs7QUFD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QUE4QixDQUE5QixDQUE3QjtJQUNIOztJQUNELElBQUlQLGdCQUFnQixDQUFDekMsTUFBakIsSUFBMkIsQ0FBL0IsRUFBa0M7TUFDOUIwQyxtQkFBbUIsSUFBSSxPQUFPRCxnQkFBZ0IsQ0FBQ08sU0FBakIsQ0FBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsQ0FBOUI7SUFDSDs7SUFDRCxJQUFJUCxnQkFBZ0IsQ0FBQ3pDLE1BQWpCLElBQTJCLENBQS9CLEVBQWtDO01BQzlCMEMsbUJBQW1CLElBQUksTUFBTUQsZ0JBQWdCLENBQUNPLFNBQWpCLENBQTJCLENBQTNCLEVBQThCLENBQTlCLENBQTdCO0lBQ0g7O0lBQ0QsSUFBSVAsZ0JBQWdCLENBQUN6QyxNQUFqQixJQUEyQixFQUEvQixFQUFtQztNQUMvQjBDLG1CQUFtQixJQUFJLE1BQU1ELGdCQUFnQixDQUFDTyxTQUFqQixDQUEyQixDQUEzQixFQUE4QixFQUE5QixDQUE3QjtJQUNIO0VBQ0osQ0FwQkQsTUFvQk87SUFBRTtJQUNMTixtQkFBbUIsR0FBRyxVQUFVRCxnQkFBaEM7RUFDSDs7RUFDRHJHLEtBQUssQ0FBQzJELEtBQU4sR0FBYzJDLG1CQUFkO0FBQ0g7O0FBRUQsU0FBU2xHLGVBQVQsQ0FBMEJGLENBQTFCLEVBQTZCO0VBQ3pCLElBQUlGLEtBQUssR0FBR0UsQ0FBQyxDQUFDa0QsTUFBZDs7RUFDQSxJQUFJK0MsUUFBUSxDQUFDbkcsS0FBRCxDQUFSLENBQWdCNEQsTUFBaEIsSUFBMEIsQ0FBMUIsSUFBK0IxRCxDQUFDLENBQUMyRyxPQUFGLEtBQWMsQ0FBakQsRUFBb0Q7SUFDaEQ3RyxLQUFLLENBQUMyRCxLQUFOLEdBQWMsRUFBZDtFQUNIO0FBQ0oiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgY29va2llID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb29raWVcIilcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb29raWVfX3p1bWZhXCIpKSB7XG4gICAgY29va2llLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbn1cblxuY29uc3QgdG9vbHRpcFRyaWdnZXJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYnMtdG9nZ2xlPVwidG9vbHRpcFwiXScpXG5jb25zdCB0b29sdGlwTGlzdCA9IFsuLi50b29sdGlwVHJpZ2dlckxpc3RdLm1hcCh0b29sdGlwVHJpZ2dlckVsID0+IG5ldyBib290c3RyYXAuVG9vbHRpcCh0b29sdGlwVHJpZ2dlckVsKSlcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvb2tpZV9fYnRuJylcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Nvb2tpZV9fenVtZmEnLCB0cnVlKVxuICAgICAgICBjb29raWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIH0pXG5cbmNvbnN0IGZlZWRiYWNrSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnB1dC1mb3JtXCIpXG5mZWVkYmFja0lucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICBpZiAoaW5wdXQudHlwZSA9PT0gXCJ0ZWxcIikge1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtpbnB1dFBob25lKGUpfSlcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtvbmVQaG9uZUtleURvd24oZSl9KVxuICAgIH1cblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICAgICAgY2hlY2tGb3JDb21wbGV0aW9uKGlucHV0KVxuICAgIH0pXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgICBjaGVja0ZvckNvbXBsZXRpb24oaW5wdXQpXG59KVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmRleFwiKSkge1xuICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlcm9fX2l0ZW1cIikpXG4gICAgY29uc3QgaW1nQmxvY2tzID1BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVyb19fcmlnaHQtZGl2XCIpKVxuXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpbWdCbG9ja3MuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICAgICAgaW1nQmxvY2tzW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGNvbnN0IHN3aXBlckFmdGVySGVybyA9IG5ldyBTd2lwZXIoXCIuYWZ0ZXItaGVyb19fY29udGVudFwiLCB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIGVsOiBcIi5hZnRlci1oZXJvX19wYWdpbmF0aW9uXCJcbiAgICAgICAgfSxcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIDcwMDoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxMjAwOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmxvZ1wiKSkge1xuICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9nX19oZWFkLWl0ZW1cIilcblxuICAgIGFjdGl2ZUVsZW0oZWxlbXMpXG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIikpIHtcbiAgICBjb25zdCBzd2lwZXJZZWFyID0gbmV3IFN3aXBlcihcIi5hYm91dC1oaXN0b3J5X190YWItc3dpcGVyXCIsIHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgICAgMzIwOiB7XG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pXG4gICAgY29uc3Qgc3dpcGVySGlzdG9yeSA9IG5ldyBTd2lwZXIoXCIuYWJvdXQtaGlzdG9yeV9fYm90dG9tLXN3aXBlclwiLCB7XG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgICAgICAgZWZmZWN0OiBcImZhZGVcIixcbiAgICAgICAgdGh1bWJzOiB7XG4gICAgICAgICAgICBzd2lwZXI6IHN3aXBlclllYXJcbiAgICAgICAgfSxcbiAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgbmV4dEVsOiBcIi5hYm91dC1oaXN0b3J5X19idG4tbmV4dFwiLFxuICAgICAgICAgICAgcHJldkVsOiBcIi5hYm91dC1oaXN0b3J5X19idG4tcHJldlwiLFxuICAgICAgICB9LFxuICAgIH0pXG5cbiAgICB5bWFwcy5yZWFkeShpbml0TWFwKVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxzLXByb2R1Y3RcIikpIHtcbiAgICBjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmRldGFpbHMtdG9wX19zd2lwZXIyXCIsIHtcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOjEwLFxuICAgICAgICAgICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBzd2lwZXIyID0gbmV3IFN3aXBlcihcIi5kZXRhaWxzLXRvcF9fc3dpcGVyXCIsIHtcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgICAgIHRodW1iczoge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZXI6IHN3aXBlclxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBwcmV2RWw6IFwiLmRldGFpbHMtdG9wX19zd2lwZXItYnRuLXByZXZcIixcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVsOiBcIi5kZXRhaWxzLXRvcF9fc3dpcGVyLWJ0bi1uZXh0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMzIwOiB7XG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBlbDogXCIuZGV0YWlscy10b3BfX3BhZ2luYXRpb25cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgYnRuSGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLXRvcF9fYmxvY2stYnRuJylcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscy10b3BfX2Jsb2NrLWRlc2MnKVxuXG4gICAgYnRuSGlkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtidG5NYXhIZWlnaHQoZGl2LCBidG5IaWRlKX0pXG5cbiAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGV0YWlscy1ib3R0b21fX2hlYWQtaXRlbVwiKVxuICAgIGNvbnN0IGRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRldGFpbHMtYm90dG9tX19ib2R5LWl0ZW1cIilcblxuICAgIGFjdGl2ZVRhYihlbGVtcywgZGl2cylcblxuICAgIGVsZW1zWzBdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICBkaXZzWzBdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICBoZWlnaHRUYWIoZGl2c1swXSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgYnRuc0hpZGUoZGl2LCBidG5IaWRlKVxuICAgIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBidG5zSGlkZShkaXYsIGJ0bkhpZGUpXG4gICAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdHNcIikpIHtcbiAgICB5bWFwcy5yZWFkeShpbml0TWFwKVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxjdWxhdGVcIikpIHtcbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGN1bGF0ZV9faXRlbS1idG4nKVxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGN1bGF0ZV9fbW9kYWwnKVxuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGN1bGF0ZV9fbW9kYWwtY2xvc2UnKVxuXG4gICAgYnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYnRuLmRhdGFzZXQudGFyZ2V0ID09PSBlbGVtLmRhdGFzZXQucGF0aCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGNsb3NlLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBlbGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgbW9kYWwuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGVsZW0ucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0ZV9fbW9kYWwtY29udGVudCcpXG5cbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRlbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxuICAgICAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICB9KVxuXG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yQ29tcGxldGlvbihpbnB1dCkge1xuICAgIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlucHV0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIH1cbn1cbmZ1bmN0aW9uIGFjdGl2ZUVsZW0oZWxlbXMpIHtcbiAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5jb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYnVyZ2VyXCIpXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX21lbnUtbW9iaWxlXCIpXG5jb25zdCBoZWFkZXJUYWJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19zZWxlY3QtbGlzdC1pdGVtLWJ0bicpXG5jb25zdCBoZWFkZXJUYWJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXJfX3NlbGVjdC1yaWdodC13cmFwXCIpXG5jb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlYWRlcl9fc2VsZWN0XCIpXG5cbnNlbGVjdC5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoIWVsZW0uY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICBoZWFkZXJUYWJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaGVhZGVyVGFiTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG59KVxuaGVhZGVyVGFiQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgICAgIGhlYWRlclRhYkJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBoZWFkZXJUYWJMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGVhZGVyVGFiQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGhlYWRlclRhYkxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBoZWFkZXJUYWJMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGJ0bi5kYXRhc2V0LnRhcmdldCA9PT0gaXRlbS5kYXRhc2V0LnBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG59KVxuXG5jb25zdCBiZ0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51LW1vYmlsZS1iZ1wiKVxuXG5idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICAgIGJnSGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG5cbiAgICBpZiAoYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpXG4gICAgfVxufSlcblxuXG5uZXcgQWNjb3JkaW9uKCcuYWNjb3JkaW9uLWNvbnRhaW5lcicpXG5uZXcgQWNjb3JkaW9uKCcuYWNjb3JkaW9uLXNlY29uZCcpXG5cbmZ1bmN0aW9uIGFjdGl2ZVRhYihidG5zLCBkaXZzKSB7XG4gICAgYnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICAgICAgZGl2cy5mb3JFYWNoKGRpdiA9PiB7XG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBidG5zLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICBkaXZzLmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGl2LmRhdGFzZXQudGFyZ2V0ID09PSBidG4uZGF0YXNldC5wYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRUYWIoZGl2KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gaGVpZ2h0VGFiKGRpdikge1xuICAgIGRpdi5wYXJlbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9IGRpdi5zY3JvbGxIZWlnaHQgKyAncHgnXG59XG5cbmZ1bmN0aW9uIGJ0bnNIaWRlKGRpdiwgYnRuKSB7XG4gICAgaWYgKGRpdi5zY3JvbGxIZWlnaHQgPj0gMjI1KSB7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICB9IGVsc2Uge1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBidG5NYXhIZWlnaHQoZGl2LCBidG4pIHtcbiAgICBpZiAoZGl2LmNsaWVudEhlaWdodCA+IDIyNSkge1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgZGl2LnN0eWxlLm1heEhlaWdodCA9IDIyNSArICdweCdcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIGRpdi5zdHlsZS5tYXhIZWlnaHQgPSBkaXYuc2Nyb2xsSGVpZ2h0ICsgJ3B4J1xuICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluaXRNYXAoKSB7XG4gICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcImFib3V0X19tYXBcIiwge1xuICAgICAgICBjZW50ZXI6IFs2My45MDk3NTI2NjczOTMxNSw4Ny4zMDc5Nzc4OTg3NDM4MV0sXG4gICAgICAgIHpvb206IDQsXG4gICAgICAgIGNvbnRyb2xzOiBbXVxuICAgIH0pXG5cbiAgICAvLyDQodC+0LfQtNCw0L3QuNC1INC80LXRgtC60Lgg0YEg0LrRgNGD0LPQu9C+0Lkg0LDQutGC0LjQstC90L7QuSDQvtCx0LvQsNGB0YLRjNGOLlxuICAgIHZhciBjaXJjbGVMYXlvdXQgPSB5bWFwcy50ZW1wbGF0ZUxheW91dEZhY3RvcnkuY3JlYXRlQ2xhc3MoYDxkaXYgY2xhc3M9XCJwbGFjZW1hcmtfbGF5b3V0X2NvbnRhaW5lclwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNpcmNsZV9sYXlvdXRcIj5cbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIzM1wiIHZpZXdCb3g9XCIwIDAgMjUgMzNcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIzM1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxKVwiIGZpbGw9XCJ3aGl0ZVwiLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIzLjc5IDExLjA5NDhDMjMuNzkgMTQuMDEwNSAyMi4wODg2IDE3Ljk2MSAxOS43MDY3IDIxLjk1NTVDMTcuNDYgMjUuNzIzNSAxNC42NTkxIDI5LjQ0NzkgMTIuMjg3OCAzMi4yMzQ4QzkuNzgwOTQgMjkuMzIzOSA2Ljk3NCAyNS41OTI2IDQuNzU4NzcgMjEuODUwMkMyLjQxNzcxIDE3Ljg5NTIgMC43OTAwMzkgMTQuMDEzNSAwLjc5MDAzOSAxMS4wOTQ4QzAuNzkwMDM5IDUuMjc5NjcgNS45MDExMiAwLjUgMTIuMjkgMC41QzE4LjY3OSAwLjUgMjMuNzkgNS4yNzk2NyAyMy43OSAxMS4wOTQ4WlwiIGZpbGw9XCIjRkZEMzQxXCIgc3Ryb2tlPVwiI0ZGQ0UwMFwiLz5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTIuMjlcIiBjeT1cIjEyXCIgcj1cIjUuNVwiIGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIiNGRkNFMDBcIi8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PmApO1xuICAgIHZhciBCYWxsb29uQ29udGVudExheW91dCA9IHltYXBzLnRlbXBsYXRlTGF5b3V0RmFjdG9yeS5jcmVhdGVDbGFzcyhgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoaW50X2xheW91dF9jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoaW50X2xheW91dF9jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhpbnRfbGF5b3V0X2hlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgcHJvcGVydGllcy5uYW1lIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhpbnRfbGF5b3V0X2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhpbnRfbGF5b3V0X2NpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGludF9sYXlvdXRfc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMVwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCAxMSAxNFwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOS45MTY0MSA0LjUzODAzQzkuOTE2NDEgNi45ODkwMyA3LjA4NTY0IDExLjAyNDIgNS4xMTY0MSAxMy4zMDAxQzMuMDI0MSAxMC45MTA0IDAuMzE2NDA2IDYuOTg5MDMgMC4zMTY0MDYgNC41MzgwM0MwLjMxNjQwNiAyLjA4NzAzIDIuNDY1NDQgMC4xMDAwOTggNS4xMTY0MSAwLjEwMDA5OEM3Ljc2NzM3IDAuMTAwMDk4IDkuOTE2NDEgMi4wODcwMyA5LjkxNjQxIDQuNTM4MDNaXCIgZmlsbD1cIiMyMTIwMUNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI1LjExODc1XCIgY3k9XCI0LjlcIiByPVwiMi40XCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaW50X2xheW91dF90ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvcGVydGllcy5jaXR5IH19ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGludF9sYXlvdXRfYWRkcmVzcyBoaW50X2xheW91dF90ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9wZXJ0aWVzLmFkZHJlc3MgfX0gICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGludF9sYXlvdXRfcGhvbmUgaGludF9sYXlvdXRfdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBwcm9wZXJ0aWVzLnBob25lIH19ICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgIGBcbiAgICApXG5cblxuICAgIHZhciBjaXJjbGVQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFxuICAgICAgICBbNTUuNzk0MDI2NTY4OTI2MDIsMzcuNDgyNjQ1NDk5OTk5OTVdLCB7XG4gICAgICAgICAgICBuYW1lOiBcItCm0LXQvdGC0YDQsNC70YzQvdGL0Lkg0L7RhNC40YFcIixcbiAgICAgICAgICAgIGNpdHk6IFwi0JzQvtGB0LrQstCwXCIsXG4gICAgICAgICAgICBhZGRyZXNzOiBcItCg0KQsIDEyMzA2MCwg0JzQvtGB0LrQstCwINGD0LsuINCg0LDRgdC/0LvQtdGC0LjQvdCwLCDQtNC+0LwgNSwg0YHRgtGALjlcIixcbiAgICAgICAgICAgIHBob25lOiBcIis3ICg0OTUpIDc2MC05MS05NiBcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBiYWxsb29uQ29udGVudExheW91dDogQmFsbG9vbkNvbnRlbnRMYXlvdXQsXG4gICAgICAgICAgICBoaWRlSWNvbk9uQmFsbG9vbk9wZW46IGZhbHNlLFxuICAgICAgICAgICAgaWNvbkxheW91dDogY2lyY2xlTGF5b3V0LFxuICAgICAgICAgICAgaWNvblNoYXBlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ0NpcmNsZScsXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IFswLCAwXSxcbiAgICAgICAgICAgICAgICByYWRpdXM6IDI1XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQoY2lyY2xlUGxhY2VtYXJrKTtcbiAgICBteU1hcC5iZWhhdmlvcnMuZGlzYWJsZSgnZHJhZycpO1xuICAgIG15TWFwLmJlaGF2aW9ycy5kaXNhYmxlKCdzY3JvbGxab29tJyk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdzZWFyY2hDb250cm9sJyk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0cmFmZmljQ29udHJvbCcpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHlwZVNlbGVjdG9yJyk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdmdWxsc2NyZWVuQ29udHJvbCcpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgncnVsZXJDb250cm9sJyk7XG59XG5cbmZ1bmN0aW9uIHJlZ1Bob25lKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0LnZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG59XG5cbmZ1bmN0aW9uIGlucHV0UGhvbmUoZSkge1xuICAgIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xuICAgIGxldCBpbnB1dE51bWJlclZhbHVlID0gcmVnUGhvbmUoaW5wdXQpO1xuICAgIGxldCBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gJyc7XG4gICAgbGV0IHNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnRcbiAgICAvLyDQldGB0LvQuCDQsiDQuNC90L/Rg9GCINCy0LLQtdC00LXQvdGLINGB0LjQvNC+0LLQu9GLINC90LUg0YHQvtC+0YLQstC10YLRgdCy0YPRjtGJ0LjQtSDRgNC10LPRg9C70Y/RgNC60LgsINGC0L4g0LfQvdCw0YfQtdC90LjQtSDQuNC90L/Rg9GC0LAg0YHRgtCw0L3QvtCy0LjRgtGB0Y8g0L/Rg9GB0YLRi9C8XG4gICAgaWYgKCFpbnB1dE51bWJlclZhbHVlKSByZXR1cm4gaW5wdXQudmFsdWUgPSAnJ1xuICAgIC8vINCSINGN0YLQvtC5INGH0LDRgdGC0Lgg0Y8g0L3QtSDRgdC+0LLRgdC10Lwg0L/QvtC90LjQvNCw0Y4g0YfRgtC+INC/0YDQvtC40YHRhdC+0LTQuNGCXG4gICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCAhPSBzZWxlY3Rpb25TdGFydCkge1xuICAgICAgICBpZiAoZS5kYXRhICYmIC9cXEQvZy50ZXN0KGUuZGF0YSkpIHtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXROdW1iZXJWYWx1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChbJzcnLCAnOCcsICc5J10uaW5jbHVkZXMoaW5wdXROdW1iZXJWYWx1ZVswXSkpIHtcbiAgICAgICAgLy8g0JXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAg0LTQtdCy0Y/RgtGMLCDRgtC+0LPQtNCwINC80Ysg0LfQsNC80LXQvdGP0LXQvCDQv9C10YDQstGD0Y4g0YbQuNGE0YDRgyDQvdCwIDcg0Lgg0LTQtdCy0Y/RgtC60YMg0LTQtdC70LDQtdC8INCy0YLQvtGA0L7QuSDRhtC40YTRgNC+0LlcbiAgICAgICAgaWYgKGlucHV0TnVtYmVyVmFsdWVbMF0gPT0gJzknKSBpbnB1dE51bWJlclZhbHVlID0gJzcnICsgaW5wdXROdW1iZXJWYWx1ZTtcbiAgICAgICAgaWYgKGlucHV0TnVtYmVyVmFsdWVbMF0gPT0gJzgnKSBpbnB1dE51bWJlclZhbHVlID0gJzcnXG4gICAgICAgIC8vINCV0YHQu9C4INC/0LXRgNCy0LDRjyDRhtC40YTRgNCwIDcsINGC0L7Qs9C00LAg0LfQvdCw0YfQtdC90LjQtSDQuNC90L/Rg9GC0LAg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0YEgKzcsINC10YHQu9C4INC/0LXRgNCy0LDRjyDRhtC40YTRgNCwIDgsINGC0L7Qs9C00LAg0LfQvdCw0YfQtdC90LjQtSDQvdCw0YfQuNC90LDQtdGC0YHRjyDRgSA4XG4gICAgICAgIGxldCBmaXJzdFN5bWJvbCA9ICcrNyc7XG4gICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBmaXJzdFN5bWJvbCArICcgJztcbiAgICAgICAgLy8g0JXRgdC70Lgg0LIg0LjQvdC/0YPRgtC1INCx0L7Qu9GM0YjQtSDQvtC00L3QvtC5INGG0LjRhNGA0Ysg0LTQvtCx0LDQstC70Y/QtdC8INGB0LrQvtCx0LrRgyDQvtGC0LrRgNGL0YLQuNGPINC4INGC0LDQuiDQtNCw0LvQtdC1XG4gICAgICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJygnICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoMSwgNClcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gNSkge1xuICAgICAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnKSAnICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoNCwgNylcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gOCkge1xuICAgICAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg3LCA5KVxuICAgICAgICB9XG4gICAgICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+PSAxMCkge1xuICAgICAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg5LCAxMSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgeyAvL9CV0YHQu9C4INCy0LLQvtC00LjQvNC+0LUg0YfQuNGB0LvQviDQvdC1IDcsIDgg0LjQu9C4IDkg0YLQvtCz0LTQsCDQtNC+0LHQsNCy0LvRj9C10LwgK9C4INC00L7QsdCw0LLQu9GP0LXQvCDQstCy0LXQtNC10L3QvtC1INGH0LjRgdC70L5cbiAgICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9ICcrNyAoOScgKyBpbnB1dE51bWJlclZhbHVlO1xuICAgIH1cbiAgICBpbnB1dC52YWx1ZSA9IGZvcm1hdHRlZElucHV0VmFsdWVcbn1cblxuZnVuY3Rpb24gb25lUGhvbmVLZXlEb3duIChlKSB7XG4gICAgbGV0IGlucHV0ID0gZS50YXJnZXQ7XG4gICAgaWYgKHJlZ1Bob25lKGlucHV0KS5sZW5ndGggPT0gMSAmJiBlLmtleUNvZGUgPT09IDgpIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICB9XG59Il19
