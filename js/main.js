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
    thumbs: {
      swiper: swiper
    },
    breakpoints: {
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

if (document.getElementById("projects")) {
  var _elems2 = document.querySelectorAll('.projects__head-item');

  activeElem(_elems2);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY29va2llIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNsYXNzTGlzdCIsImFkZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImlucHV0IiwiY2hlY2tGb3JDb21wbGV0aW9uIiwidG9vbHRpcFRyaWdnZXJMaXN0IiwidG9vbHRpcExpc3QiLCJtYXAiLCJ0b29sdGlwVHJpZ2dlckVsIiwiYm9vdHN0cmFwIiwiVG9vbHRpcCIsInNldEl0ZW0iLCJyZW1vdmUiLCJmZWVkYmFja0lucHV0cyIsInR5cGUiLCJlIiwiaW5wdXRQaG9uZSIsIm9uZVBob25lS2V5RG93biIsInBhcmVudEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwiaW1nQmxvY2tzIiwiaXRlbSIsImluZGV4IiwiZWwiLCJzd2lwZXJBZnRlckhlcm8iLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwicGFnaW5hdGlvbiIsImJyZWFrcG9pbnRzIiwiZWxlbXMiLCJhY3RpdmVFbGVtIiwic3dpcGVyWWVhciIsImZyZWVNb2RlIiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsInN3aXBlckhpc3RvcnkiLCJhbGxvd1RvdWNoTW92ZSIsImVmZmVjdCIsInRodW1icyIsInN3aXBlciIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJ5bWFwcyIsInJlYWR5IiwiaW5pdE1hcCIsInN3aXBlcjIiLCJidG5IaWRlIiwiZGl2IiwiYnRuTWF4SGVpZ2h0IiwiZGl2cyIsImFjdGl2ZVRhYiIsImhlaWdodFRhYiIsImJ0bnNIaWRlIiwiYnRucyIsIm1vZGFsIiwiY2xvc2UiLCJidG4iLCJlbGVtIiwiZGF0YXNldCIsInRhcmdldCIsInBhdGgiLCJib2R5IiwiY29udGVudCIsImNvbnRhaW5zIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwibGVuZ3RoIiwiYnVyZ2VyIiwibWVudSIsImhlYWRlclRhYkJ0biIsImhlYWRlclRhYkxpc3QiLCJzZWxlY3QiLCJyZWxhdGVkVGFyZ2V0IiwiYmdIZWFkZXIiLCJ0b2dnbGUiLCJBY2NvcmRpb24iLCJzdHlsZSIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsIm1heEhlaWdodCIsIm15TWFwIiwiTWFwIiwiY2VudGVyIiwiem9vbSIsIm1pblpvb20iLCJjb250cm9scyIsImNpcmNsZUxheW91dCIsInRlbXBsYXRlTGF5b3V0RmFjdG9yeSIsImNyZWF0ZUNsYXNzIiwiQmFsbG9vbkNvbnRlbnRMYXlvdXQiLCJjaXJjbGVQbGFjZW1hcmsiLCJQbGFjZW1hcmsiLCJuYW1lIiwiY2l0eSIsImFkZHJlc3MiLCJwaG9uZSIsImJhbGxvb25Db250ZW50TGF5b3V0IiwiaGlkZUljb25PbkJhbGxvb25PcGVuIiwiaWNvbkxheW91dCIsImljb25TaGFwZSIsImNvb3JkaW5hdGVzIiwicmFkaXVzIiwiZ2VvT2JqZWN0cyIsInJlZ1Bob25lIiwicmVwbGFjZSIsImlucHV0TnVtYmVyVmFsdWUiLCJmb3JtYXR0ZWRJbnB1dFZhbHVlIiwic2VsZWN0aW9uU3RhcnQiLCJkYXRhIiwidGVzdCIsImluY2x1ZGVzIiwiZmlyc3RTeW1ib2wiLCJzdWJzdHJpbmciLCJrZXlDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLENBQWY7O0FBQ0EsSUFBSSxDQUFDQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsZUFBckIsQ0FBTCxFQUE0QztFQUN4Q0osTUFBTSxDQUFDSyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixRQUFyQjtBQUNIOztBQUVEQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLFVBQXhCLEVBQW9DLFlBQU07RUFDdEMsSUFBTUMsTUFBTSxHQUFH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LE9BQUYsS0FBYyxDQUFqRCxFQUFvRDtJQUNoRHBILEtBQUssQ0FBQ21FLEtBQU4sR0FBYyxFQUFkO0VBQ0g7QUFDSiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29va2llID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb29raWVcIilcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb29raWVfX3p1bWZhXCIpKSB7XG4gICAgY29va2llLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwYWdlc2hvd1wiLCAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnB1dC1mb3JtXCIpXG4gICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4gY2hlY2tGb3JDb21wbGV0aW9uKGlucHV0KSlcbn0pXG5cbmNvbnN0IHRvb2x0aXBUcmlnZ2VyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIl0nKVxuY29uc3QgdG9vbHRpcExpc3QgPSBbLi4udG9vbHRpcFRyaWdnZXJMaXN0XS5tYXAodG9vbHRpcFRyaWdnZXJFbCA9PiBuZXcgYm9vdHN0cmFwLlRvb2x0aXAodG9vbHRpcFRyaWdnZXJFbCkpXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb29raWVfX2J0bicpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb29raWVfX3p1bWZhJywgdHJ1ZSlcbiAgICAgICAgY29va2llLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9KVxuXG5jb25zdCBmZWVkYmFja0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5wdXQtZm9ybVwiKVxuZmVlZGJhY2tJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG5cbiAgICBpZiAoaW5wdXQudHlwZSA9PT0gXCJ0ZWxcIikge1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtpbnB1dFBob25lKGUpfSlcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtvbmVQaG9uZUtleURvd24oZSl9KVxuICAgIH1cblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICAgICAgY2hlY2tGb3JDb21wbGV0aW9uKGlucHV0KVxuICAgIH0pXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbn0pXG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZGV4XCIpKSB7XG4gICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVyb19faXRlbVwiKSlcbiAgICBjb25zdCBpbWdCbG9ja3MgPUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZXJvX19yaWdodC1kaXZcIikpXG5cbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGltZ0Jsb2Nrcy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICBpbWdCbG9ja3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgY29uc3Qgc3dpcGVyQWZ0ZXJIZXJvID0gbmV3IFN3aXBlcihcIi5hZnRlci1oZXJvX19jb250ZW50XCIsIHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgZWw6IFwiLmFmdGVyLWhlcm9fX3BhZ2luYXRpb25cIlxuICAgICAgICB9LFxuICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgICAgNzAwOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDEyMDA6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJibG9nXCIpKSB7XG4gICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2dfX2hlYWQtaXRlbVwiKVxuXG4gICAgYWN0aXZlRWxlbShlbGVtcylcblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dFwiKSkge1xuICAgIGNvbnN0IHN3aXBlclllYXIgPSBuZXcgU3dpcGVyKFwiLmFib3V0LWhpc3RvcnlfX3RhYi1zd2lwZXJcIiwge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgZnJlZU1vZGU6IHRydWUsXG4gICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgICAgICAzMjA6IHtcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNzY4OiB7XG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSlcbiAgICBjb25zdCBzd2lwZXJIaXN0b3J5ID0gbmV3IFN3aXBlcihcIi5hYm91dC1oaXN0b3J5X19ib3R0b20tc3dpcGVyXCIsIHtcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgICAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxuICAgICAgICBlZmZlY3Q6IFwiZmFkZVwiLFxuICAgICAgICB0aHVtYnM6IHtcbiAgICAgICAgICAgIHN3aXBlcjogc3dpcGVyWWVhclxuICAgICAgICB9LFxuICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICBuZXh0RWw6IFwiLmFib3V0LWhpc3RvcnlfX2J0bi1uZXh0XCIsXG4gICAgICAgICAgICBwcmV2RWw6IFwiLmFib3V0LWhpc3RvcnlfX2J0bi1wcmV2XCIsXG4gICAgICAgIH0sXG4gICAgfSlcblxuICAgIHltYXBzLnJlYWR5KGluaXRNYXApXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldGFpbHMtcHJvZHVjdFwiKSkge1xuICAgIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoXCIuZGV0YWlscy10b3BfX3N3aXBlcjJcIiwge1xuICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgICAgNzY4OiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46MTAsXG4gICAgICAgICAgICAgICAgZnJlZU1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHN3aXBlcjIgPSBuZXcgU3dpcGVyKFwiLmRldGFpbHMtdG9wX19zd2lwZXJcIiwge1xuICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgICB0aHVtYnM6IHtcbiAgICAgICAgICAgIHN3aXBlcjogc3dpcGVyXG4gICAgICAgIH0sXG4gICAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgICAgICAzMjA6IHtcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGVsOiBcIi5kZXRhaWxzLXRvcF9fcGFnaW5hdGlvblwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfSlcbiAgICBjb25zdCBidG5IaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHMtdG9wX19ibG9jay1idG4nKVxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLXRvcF9fYmxvY2stZGVzYycpXG5cbiAgICBidG5IaWRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2J0bk1heEhlaWdodChkaXYsIGJ0bkhpZGUpfSlcblxuICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZXRhaWxzLWJvdHRvbV9faGVhZC1pdGVtXCIpXG4gICAgY29uc3QgZGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGV0YWlscy1ib3R0b21fX2JvZHktaXRlbVwiKVxuXG4gICAgYWN0aXZlVGFiKGVsZW1zLCBkaXZzKVxuXG4gICAgZWxlbXNbMF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIGRpdnNbMF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIGhlaWdodFRhYihkaXZzWzBdKVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgICBidG5zSGlkZShkaXYsIGJ0bkhpZGUpXG4gICAgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ0bnNIaWRlKGRpdiwgYnRuSGlkZSlcbiAgICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKSkge1xuICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RzX19oZWFkLWl0ZW0nKVxuICAgIGFjdGl2ZUVsZW0oZWxlbXMpXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RzXCIpKSB7XG4gICAgeW1hcHMucmVhZHkoaW5pdE1hcClcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsY3VsYXRlXCIpKSB7XG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxjdWxhdGVfX2l0ZW0tYnRuJylcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxjdWxhdGVfX21vZGFsJylcbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxjdWxhdGVfX21vZGFsLWNsb3NlJylcblxuICAgIGJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGJ0bi5kYXRhc2V0LnRhcmdldCA9PT0gZWxlbS5kYXRhc2V0LnBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxvY2tcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBjbG9zZS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZWxlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIG1vZGFsLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdGVfX21vZGFsLWNvbnRlbnQnKVxuXG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjb250ZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfSlcblxufVxuXG5mdW5jdGlvbiBjaGVja0ZvckNvbXBsZXRpb24oaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICBpbnB1dC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9XG59XG5mdW5jdGlvbiBhY3RpdmVFbGVtKGVsZW1zKSB7XG4gICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKVxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2J1cmdlclwiKVxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51LW1vYmlsZVwiKVxuY29uc3QgaGVhZGVyVGFiQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fc2VsZWN0LWxpc3QtaXRlbS1idG4nKVxuY29uc3QgaGVhZGVyVGFiTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyX19zZWxlY3QtcmlnaHQtd3JhcFwiKVxuY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXJfX3NlbGVjdFwiKVxuXG5zZWxlY3QuZm9yRWFjaChlbGVtID0+IHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB9KVxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKCFlbGVtLmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICAgICAgaGVhZGVyVGFiQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGhlYWRlclRhYkxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxufSlcbmhlYWRlclRhYkJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICBoZWFkZXJUYWJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaGVhZGVyVGFiTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhlYWRlclRhYkJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBoZWFkZXJUYWJMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaGVhZGVyVGFiTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChidG4uZGF0YXNldC50YXJnZXQgPT09IGl0ZW0uZGF0YXNldC5wYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxufSlcblxuY29uc3QgYmdIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudS1tb2JpbGUtYmdcIilcblxuYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICBiZ0hlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuXG4gICAgaWYgKGJ1cmdlci5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2NrJylcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKVxuICAgIH1cbn0pXG5cblxubmV3IEFjY29yZGlvbignLmFjY29yZGlvbi1jb250YWluZXInKVxubmV3IEFjY29yZGlvbignLmFjY29yZGlvbi1zZWNvbmQnKVxuXG5mdW5jdGlvbiBhY3RpdmVUYWIoYnRucywgZGl2cykge1xuICAgIGJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGRpdnMuZm9yRWFjaChkaXYgPT4ge1xuICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYnRucy5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgZGl2cy5mb3JFYWNoKGRpdiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRpdi5kYXRhc2V0LnRhcmdldCA9PT0gYnRuLmRhdGFzZXQucGF0aCkge1xuICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0VGFiKGRpdilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGhlaWdodFRhYihkaXYpIHtcbiAgICBkaXYucGFyZW50RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBkaXYuc2Nyb2xsSGVpZ2h0ICsgJ3B4J1xufVxuXG5mdW5jdGlvbiBidG5zSGlkZShkaXYsIGJ0bikge1xuICAgIGlmIChkaXYuc2Nyb2xsSGVpZ2h0ID49IDIyNSkge1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYnRuTWF4SGVpZ2h0KGRpdiwgYnRuKSB7XG4gICAgaWYgKGRpdi5jbGllbnRIZWlnaHQgPiAyMjUpIHtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgIGRpdi5zdHlsZS5tYXhIZWlnaHQgPSAyMjUgKyAncHgnXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICBkaXYuc3R5bGUubWF4SGVpZ2h0ID0gZGl2LnNjcm9sbEhlaWdodCArICdweCdcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbml0TWFwKCkge1xuICAgIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJhYm91dF9fbWFwXCIsIHtcbiAgICAgICAgY2VudGVyOiBbNjMuOTA5NzUyNjY3MzkzMTUsODcuMzA3OTc3ODk4NzQzODFdLFxuICAgICAgICB6b29tOiA0LFxuICAgICAgICBtaW5ab29tOiA0LFxuICAgICAgICBjb250cm9sczogW11cbiAgICB9LCB7XG4gICAgICAgIG1pblpvb206IDQsXG4gICAgfSlcblxuICAgIC8vINCh0L7Qt9C00LDQvdC40LUg0LzQtdGC0LrQuCDRgSDQutGA0YPQs9C70L7QuSDQsNC60YLQuNCy0L3QvtC5INC+0LHQu9Cw0YHRgtGM0Y4uXG4gICAgdmFyIGNpcmNsZUxheW91dCA9IHltYXBzLnRlbXBsYXRlTGF5b3V0RmFjdG9yeS5jcmVhdGVDbGFzcyhgPGRpdiBjbGFzcz1cInBsYWNlbWFya19sYXlvdXRfY29udGFpbmVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2lyY2xlX2xheW91dFwiPlxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjMzXCIgdmlld0JveD1cIjAgMCAyNSAzM1wiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjMzXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEpXCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjMuNzkgMTEuMDk0OEMyMy43OSAxNC4wMTA1IDIyLjA4ODYgMTcuOTYxIDE5LjcwNjcgMjEuOTU1NUMxNy40NiAyNS43MjM1IDE0LjY1OTEgMjkuNDQ3OSAxMi4yODc4IDMyLjIzNDhDOS43ODA5NCAyOS4zMjM5IDYuOTc0IDI1LjU5MjYgNC43NTg3NyAyMS44NTAyQzIuNDE3NzEgMTcuODk1MiAwLjc5MDAzOSAxNC4wMTM1IDAuNzkwMDM5IDExLjA5NDhDMC43OTAwMzkgNS4yNzk2NyA1LjkwMTEyIDAuNSAxMi4yOSAwLjVDMTguNjc5IDAuNSAyMy43OSA1LjI3OTY3IDIzLjc5IDExLjA5NDhaXCIgZmlsbD1cIiNGRkQzNDFcIiBzdHJva2U9XCIjRkZDRTAwXCIvPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMi4yOVwiIGN5PVwiMTJcIiByPVwiNS41XCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiI0ZGQ0UwMFwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9kaXY+YCk7XG4gICAgdmFyIEJhbGxvb25Db250ZW50TGF5b3V0ID0geW1hcHMudGVtcGxhdGVMYXlvdXRGYWN0b3J5LmNyZWF0ZUNsYXNzKGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImhpbnRfbGF5b3V0X2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhpbnRfbGF5b3V0X2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGludF9sYXlvdXRfaGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBwcm9wZXJ0aWVzLm5hbWUgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGludF9sYXlvdXRfYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGludF9sYXlvdXRfY2l0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaW50X2xheW91dF9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjExXCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDExIDE0XCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk05LjkxNjQxIDQuNTM4MDNDOS45MTY0MSA2Ljk4OTAzIDcuMDg1NjQgMTEuMDI0MiA1LjExNjQxIDEzLjMwMDFDMy4wMjQxIDEwLjkxMDQgMC4zMTY0MDYgNi45ODkwMyAwLjMxNjQwNiA0LjUzODAzQzAuMzE2NDA2IDIuMDg3MDMgMi40NjU0NCAwLjEwMDA5OCA1LjExNjQxIDAuMTAwMDk4QzcuNzY3MzcgMC4xMDAwOTggOS45MTY0MSAyLjA4NzAzIDkuOTE2NDEgNC41MzgwM1pcIiBmaWxsPVwiIzIxMjAxQ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjUuMTE4NzVcIiBjeT1cIjQuOVwiIHI9XCIyLjRcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpbnRfbGF5b3V0X3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9wZXJ0aWVzLmNpdHkgfX0gICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoaW50X2xheW91dF9hZGRyZXNzIGhpbnRfbGF5b3V0X3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb3BlcnRpZXMuYWRkcmVzcyB9fSAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoaW50X2xheW91dF9waG9uZSBoaW50X2xheW91dF90ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHByb3BlcnRpZXMucGhvbmUgfX0gICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgYFxuICAgIClcblxuXG4gICAgdmFyIGNpcmNsZVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXG4gICAgICAgIFs1NS43OTQwMjY1Njg5MjYwMiwzNy40ODI2NDU0OTk5OTk5NV0sIHtcbiAgICAgICAgICAgIG5hbWU6IFwi0KbQtdC90YLRgNCw0LvRjNC90YvQuSDQvtGE0LjRgVwiLFxuICAgICAgICAgICAgY2l0eTogXCLQnNC+0YHQutCy0LBcIixcbiAgICAgICAgICAgIGFkZHJlc3M6IFwi0KDQpCwgMTIzMDYwLCDQnNC+0YHQutCy0LAg0YPQuy4g0KDQsNGB0L/Qu9C10YLQuNC90LAsINC00L7QvCA1LCDRgdGC0YAuOVwiLFxuICAgICAgICAgICAgcGhvbmU6IFwiKzcgKDQ5NSkgNzYwLTkxLTk2IFwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGJhbGxvb25Db250ZW50TGF5b3V0OiBCYWxsb29uQ29udGVudExheW91dCxcbiAgICAgICAgICAgIGhpZGVJY29uT25CYWxsb29uT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBpY29uTGF5b3V0OiBjaXJjbGVMYXlvdXQsXG4gICAgICAgICAgICBpY29uU2hhcGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnQ2lyY2xlJyxcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogWzAsIDBdLFxuICAgICAgICAgICAgICAgIHJhZGl1czogMjVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBteU1hcC5nZW9PYmplY3RzLmFkZChjaXJjbGVQbGFjZW1hcmspO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnc2VhcmNoQ29udHJvbCcpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHJhZmZpY0NvbnRyb2wnKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3R5cGVTZWxlY3RvcicpO1xuICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnZnVsbHNjcmVlbkNvbnRyb2wnKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpO1xufVxuXG5mdW5jdGlvbiByZWdQaG9uZShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC52YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpO1xufVxuXG5mdW5jdGlvbiBpbnB1dFBob25lKGUpIHtcbiAgICBsZXQgaW5wdXQgPSBlLnRhcmdldDtcbiAgICBsZXQgaW5wdXROdW1iZXJWYWx1ZSA9IHJlZ1Bob25lKGlucHV0KTtcbiAgICBsZXQgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9ICcnO1xuICAgIGxldCBzZWxlY3Rpb25TdGFydCA9IGlucHV0LnNlbGVjdGlvblN0YXJ0XG4gICAgLy8g0JXRgdC70Lgg0LIg0LjQvdC/0YPRgiDQstCy0LXQtNC10L3RiyDRgdC40LzQvtCy0LvRiyDQvdC1INGB0L7QvtGC0LLQtdGC0YHQstGD0Y7RidC40LUg0YDQtdCz0YPQu9GP0YDQutC4LCDRgtC+INC30L3QsNGH0LXQvdC40LUg0LjQvdC/0YPRgtCwINGB0YLQsNC90L7QstC40YLRgdGPINC/0YPRgdGC0YvQvFxuICAgIGlmICghaW5wdXROdW1iZXJWYWx1ZSkgcmV0dXJuIGlucHV0LnZhbHVlID0gJydcbiAgICAvLyDQkiDRjdGC0L7QuSDRh9Cw0YHRgtC4INGPINC90LUg0YHQvtCy0YHQtdC8INC/0L7QvdC40LzQsNGOINGH0YLQviDQv9GA0L7QuNGB0YXQvtC00LjRglxuICAgIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggIT0gc2VsZWN0aW9uU3RhcnQpIHtcbiAgICAgICAgaWYgKGUuZGF0YSAmJiAvXFxEL2cudGVzdChlLmRhdGEpKSB7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGlucHV0TnVtYmVyVmFsdWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoWyc3JywgJzgnLCAnOSddLmluY2x1ZGVzKGlucHV0TnVtYmVyVmFsdWVbMF0pKSB7XG4gICAgICAgIC8vINCV0YHQu9C4INC/0LXRgNCy0LDRjyDRhtC40YTRgNCwINC00LXQstGP0YLRjCwg0YLQvtCz0LTQsCDQvNGLINC30LDQvNC10L3Rj9C10Lwg0L/QtdGA0LLRg9GOINGG0LjRhNGA0YMg0L3QsCA3INC4INC00LXQstGP0YLQutGDINC00LXQu9Cw0LXQvCDQstGC0L7RgNC+0Lkg0YbQuNGE0YDQvtC5XG4gICAgICAgIGlmIChpbnB1dE51bWJlclZhbHVlWzBdID09ICc5JykgaW5wdXROdW1iZXJWYWx1ZSA9ICc3JyArIGlucHV0TnVtYmVyVmFsdWU7XG4gICAgICAgIGlmIChpbnB1dE51bWJlclZhbHVlWzBdID09ICc4JykgaW5wdXROdW1iZXJWYWx1ZSA9ICc3J1xuICAgICAgICAvLyDQldGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCA3LCDRgtC+0LPQtNCwINC30L3QsNGH0LXQvdC40LUg0LjQvdC/0YPRgtCwINC90LDRh9C40L3QsNC10YLRgdGPINGBICs3LCDQtdGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCA4LCDRgtC+0LPQtNCwINC30L3QsNGH0LXQvdC40LUg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0YEgOFxuICAgICAgICBsZXQgZmlyc3RTeW1ib2wgPSAnKzcnO1xuICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gZmlyc3RTeW1ib2wgKyAnICc7XG4gICAgICAgIC8vINCV0YHQu9C4INCyINC40L3Qv9GD0YLQtSDQsdC+0LvRjNGI0LUg0L7QtNC90L7QuSDRhtC40YTRgNGLINC00L7QsdCw0LLQu9GP0LXQvCDRgdC60L7QsdC60YMg0L7RgtC60YDRi9GC0LjRjyDQuCDRgtCw0Log0LTQsNC70LXQtVxuICAgICAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcoJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDEsIDQpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0TnVtYmVyVmFsdWUubGVuZ3RoID49IDUpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJykgJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDQsIDcpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0TnVtYmVyVmFsdWUubGVuZ3RoID49IDgpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJy0nICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoNywgOSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gMTApIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJy0nICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoOSwgMTEpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHsgLy/QldGB0LvQuCDQstCy0L7QtNC40LzQvtC1INGH0LjRgdC70L4g0L3QtSA3LCA4INC40LvQuCA5INGC0L7Qs9C00LAg0LTQvtCx0LDQstC70Y/QtdC8ICvQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0LLQstC10LTQtdC90L7QtSDRh9C40YHQu9C+XG4gICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSAnKzcgKDknICsgaW5wdXROdW1iZXJWYWx1ZTtcbiAgICB9XG4gICAgaW5wdXQudmFsdWUgPSBmb3JtYXR0ZWRJbnB1dFZhbHVlXG59XG5cbmZ1bmN0aW9uIG9uZVBob25lS2V5RG93biAoZSkge1xuICAgIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xuICAgIGlmIChyZWdQaG9uZShpbnB1dCkubGVuZ3RoID09IDEgJiYgZS5rZXlDb2RlID09PSA4KSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgfVxufSJdfQ==
