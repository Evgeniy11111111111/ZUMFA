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

if (document.getElementById("calculate")) {
  var btns = document.querySelectorAll('.calculate__item-btn');
  var modal = document.querySelectorAll('.calculate__modal');
  var close = document.querySelectorAll('.calculate__modal-close');
  var literInCube = document.getElementById('literInCube');
  var paInMeter = document.getElementById('PaInMeter');
  var atmInPa = document.getElementById('PaInAtm');
  var formTranslation = document.getElementById('calculateFormTranslation');
  var inputs = document.querySelectorAll('.calculate__input');
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
  var inputLiter = literInCube.firstElementChild.nextElementSibling.querySelector('input');
  var inputCube = literInCube.lastElementChild.querySelector('input');
  var inputPa = paInMeter.firstElementChild.nextElementSibling.querySelector('input');
  var inputMeter = paInMeter.lastElementChild.querySelector('input');
  var inputAtm = atmInPa.firstElementChild.nextElementSibling.querySelector('input');
  var paInput = atmInPa.lastElementChild.querySelector('input');
  inputs.forEach(function (input) {
    return input.addEventListener('input', validInput);
  });
  inputLiter.addEventListener('change', function () {
    var value = Number(this.value);
    inputCube.value = value * 60 / 1000;
  });
  inputCube.addEventListener('change', function () {
    var value = Number(this.value);
    inputLiter.value = value * 1000 / 60;
  });
  inputPa.addEventListener('change', function () {
    var value = Number(this.value);
    inputMeter.value = value / (9.81 * 1000);
  });
  inputMeter.addEventListener('change', function () {
    var value = Number(this.value);
    inputPa.value = value * 9.81 * 1000;
  });
  inputAtm.addEventListener('change', function () {
    var value = Number(this.value);
    paInput.value = value * Math.pow(10, 5);
  });
  paInput.addEventListener('change', function () {
    var value = Number(this.value);
    inputAtm.value = value / Math.pow(10, 5);
  });
  formTranslation.addEventListener('submit', function (e) {
    e.preventDefault();
  });
  var selects = document.querySelectorAll('.calculate__select');
  selects.forEach(function (select) {
    if (select.multiple) {
      new Choices(select, {
        searchEnabled: false,
        allowHTML: true,
        removeItemButton: true
      });
    } else {
      new Choices(select, {
        searchEnabled: false
      });
    }
  });
}

if (document.getElementById("areas")) {
  var _btns = Array.from(document.querySelectorAll(".areas-areas__head-item"));

  var _items = Array.from(document.querySelectorAll(".areas-areas__body-item"));

  _btns.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      _items.forEach(function (item) {
        return item.classList.remove('active');
      });

      _btns.forEach(function (elem) {
        return elem.classList.remove('active');
      });

      btn.classList.add('active');

      _items[index].classList.add('active');

      heightTab(_items[index]);
    });
  });

  _btns[0].classList.add('active');

  _items[0].classList.add('active');

  heightTab(_items[0]);
  var btnsTooltip = document.querySelectorAll(".areas-areas__circle");

  if (window.innerWidth < 992) {
    btnsTooltip.forEach(function (btn) {
      btn.addEventListener('click', function () {
        btnsTooltip.forEach(function (elem) {
          return elem.classList.remove('active');
        });
        btn.classList.add("active");
      });
    });
  }

  document.addEventListener('click', function (e) {
    var isClickInsideButton = Array.from(btnsTooltip).some(function (button) {
      return button.contains(e.target);
    });

    if (!isClickInsideButton) {
      btnsTooltip.forEach(function (btn) {
        return btn.classList.remove('active');
      });
    }
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
var headerRightBlock = document.querySelectorAll('.header__select-right-block');
select.forEach(function (elem) {
  elem.addEventListener("mouseover", function () {
    elem.classList.add("active");
  });
  elem.addEventListener("mouseleave", function (e) {
    if (!elem.contains(e.relatedTarget)) {
      elem.classList.remove("active");
      headerTabBtn.forEach(function (btn) {
        btn.parentElement.classList.remove("active");
      });
      headerRightBlock.forEach(function (elem) {
        elem.innerHTML = "";
      });
    }
  });
});
headerTabBtn.forEach(function (btn) {
  btn.addEventListener("mouseover", function () {
    headerRightBlock.forEach(function (elem) {
      elem.innerHTML = "";
    });
    var elementToCopy = btn.nextElementSibling.cloneNode(true);
    btn.parentElement.parentElement.nextElementSibling.append(elementToCopy);
    btn.parentElement.parentElement.nextElementSibling.firstElementChild.classList.add("active");
    btn.parentElement.classList.add('active');
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

function validInput(event) {
  var input = event.target;
  var value = input.value; // Удаление всех символов, кроме цифр и точек

  value = value.replace(/[^0-9.]/g, ''); // Проверка на наличие более одной точки

  if ((value.match(/\./g) || []).length > 1) {
    // Оставляем только часть строки до второй точки
    value = value.substring(0, value.indexOf('.', value.indexOf('.') + 1));
  } // Обновление значения поля ввода


  input.value = value;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY29va2llIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNsYXNzTGlzdCIsImFkZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImlucHV0IiwiY2hlY2tGb3JDb21wbGV0aW9uIiwidG9vbHRpcFRyaWdnZXJMaXN0IiwidG9vbHRpcExpc3QiLCJtYXAiLCJ0b29sdGlwVHJpZ2dlckVsIiwiYm9vdHN0cmFwIiwiVG9vbHRpcCIsInNldEl0ZW0iLCJyZW1vdmUiLCJmZWVkYmFja0lucHV0cyIsInR5cGUiLCJlIiwiaW5wdXRQaG9uZSIsIm9uZVBob25lS2V5RG93biIsInBhcmVudEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIml0ZW1zIiwiQXJyYXkiLCJmcm9tIiwiaW1nQmxvY2tzIiwiaXRlbSIsImluZGV4IiwiZWwiLCJzd2lwZXJBZnRlckhlcm8iLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwicGFnaW5hdGlvbiIsImJyZWFrcG9pbnRzIiwiZWxlbXMiLCJhY3RpdmVFbGVtIiwic3dpcGVyWWVhciIsImZyZWVNb2RlIiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsInN3aXBlckhpc3RvcnkiLCJhbGxvd1RvdWNoTW92ZSIsImVmZmVjdCIsInRodW1icyIsInN3aXBlciIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJzd2lwZXIyIiwiYnRuSGlkZSIsImRpdiIsImJ0bk1heEhlaWdodCIsImRpdnMiLCJhY3RpdmVUYWIiLCJoZWlnaHRUYWIiLCJidG5zSGlkZSIsImJ0bnMiLCJtb2RhbCIsImNsb3NlIiwibGl0ZXJJbkN1YmUiLCJwYUluTWV0ZXIiLCJhdG1JblBhIiwiZm9ybVRyYW5zbGF0aW9uIiwiYnRuIiwiZWxlbSIsImRhdGFzZXQiLCJ0YXJnZXQiLCJwYXRoIiwiYm9keSIsImNvbnRlbnQiLCJjb250YWlucyIsImNvbnNvbGUiLCJsb2ciLCJpbnB1dExpdGVyIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJpbnB1dEN1YmUiLCJsYXN0RWxlbWVudENoaWxkIiwiaW5wdXRQYSIsImlucHV0TWV0ZXIiLCJpbnB1dEF0bSIsInBhSW5wdXQiLCJ2YWxpZElucHV0IiwidmFsdWUiLCJOdW1iZXIiLCJNYXRoIiwicG93IiwicHJldmVudERlZmF1bHQiLCJzZWxlY3RzIiwic2VsZWN0IiwibXVsdGlwbGUiLCJDaG9pY2VzIiwic2VhcmNoRW5hYmxlZCIsImFsbG93SFRNTCIsInJlbW92ZUl0ZW1CdXR0b24iLCJidG5zVG9vbHRpcCIsImlubmVyV2lkdGgiLCJpc0NsaWNrSW5zaWRlQnV0dG9uIiwic29tZSIsImJ1dHRvbiIsImxlbmd0aCIsImJ1cmdlciIsIm1lbnUiLCJoZWFkZXJUYWJCdG4iLCJoZWFkZXJUYWJMaXN0IiwiaGVhZGVyUmlnaHRCbG9jayIsInJlbGF0ZWRUYXJnZXQiLCJpbm5lckhUTUwiLCJlbGVtZW50VG9Db3B5IiwiY2xvbmVOb2RlIiwiYXBwZW5kIiwiYmdIZWFkZXIiLCJ0b2dnbGUiLCJBY2NvcmRpb24iLCJzdHlsZSIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsIm1heEhlaWdodCIsInJlZ1Bob25lIiwicmVwbGFjZSIsImlucHV0TnVtYmVyVmFsdWUiLCJmb3JtYXR0ZWRJbnB1dFZhbHVlIiwic2VsZWN0aW9uU3RhcnQiLCJkYXRhIiwidGVzdCIsImluY2x1ZGVzIiwiZmlyc3RTeW1ib2wiLCJzdWJzdHJpbmciLCJrZXlDb2RlIiwiZXZlbnQiLCJtYXRjaCIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZjs7QUFDQSxJQUFJLENBQUNDLFlBQVksQ0FBQ0Ms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LElBQTBCLENBQTFCLElBQStCbkYsQ0FBQyxDQUFDZ0gsT0FBRixLQUFjLENBQWpELEVBQW9EO0lBQ2hENUgsS0FBSyxDQUFDOEUsS0FBTixHQUFjLEVBQWQ7RUFDSDtBQUNKOztBQUVELFNBQVNELFVBQVQsQ0FBb0JnRCxLQUFwQixFQUEyQjtFQUN2QixJQUFNN0gsS0FBSyxHQUFHNkgsS0FBSyxDQUFDaEUsTUFBcEI7RUFDQSxJQUFJaUIsS0FBSyxHQUFHOUUsS0FBSyxDQUFDOEUsS0FBbEIsQ0FGdUIsQ0FJdkI7O0VBQ0FBLEtBQUssR0FBR0EsS0FBSyxDQUFDcUMsT0FBTixDQUFjLFVBQWQsRUFBMEIsRUFBMUIsQ0FBUixDQUx1QixDQU92Qjs7RUFDQSxJQUFJLENBQUNyQyxLQUFLLENBQUNnRCxLQUFOLENBQVksS0FBWixLQUFzQixFQUF2QixFQUEyQi9CLE1BQTNCLEdBQW9DLENBQXhDLEVBQTJDO0lBQ3ZDO0lBQ0FqQixLQUFLLEdBQUdBLEtBQUssQ0FBQzZDLFNBQU4sQ0FBZ0IsQ0FBaEIsRUFBbUI3QyxLQUFLLENBQUNpRCxPQUFOLENBQWMsR0FBZCxFQUFtQmpELEtBQUssQ0FBQ2lELE9BQU4sQ0FBYyxHQUFkLElBQXFCLENBQXhDLENBQW5CLENBQVI7RUFDSCxDQVhzQixDQWF2Qjs7O0VBQ0EvSCxLQUFLLENBQUM4RSxLQUFOLEdBQWNBLEtBQWQ7QUFDSCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29va2llID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb29raWVcIilcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb29raWVfX3p1bWZhXCIpKSB7XG4gICAgY29va2llLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwYWdlc2hvd1wiLCAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnB1dC1mb3JtXCIpXG4gICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4gY2hlY2tGb3JDb21wbGV0aW9uKGlucHV0KSlcbn0pXG5cbmNvbnN0IHRvb2x0aXBUcmlnZ2VyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIl0nKVxuY29uc3QgdG9vbHRpcExpc3QgPSBbLi4udG9vbHRpcFRyaWdnZXJMaXN0XS5tYXAodG9vbHRpcFRyaWdnZXJFbCA9PiBuZXcgYm9vdHN0cmFwLlRvb2x0aXAodG9vbHRpcFRyaWdnZXJFbCkpXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb29raWVfX2J0bicpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb29raWVfX3p1bWZhJywgdHJ1ZSlcbiAgICAgICAgY29va2llLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9KVxuXG5jb25zdCBmZWVkYmFja0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5wdXQtZm9ybVwiKVxuZmVlZGJhY2tJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG5cbiAgICBpZiAoaW5wdXQudHlwZSA9PT0gXCJ0ZWxcIikge1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtpbnB1dFBob25lKGUpfSlcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtvbmVQaG9uZUtleURvd24oZSl9KVxuICAgIH1cblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICAgICAgY2hlY2tGb3JDb21wbGV0aW9uKGlucHV0KVxuICAgIH0pXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbn0pXG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZGV4XCIpKSB7XG4gICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVyb19faXRlbVwiKSlcbiAgICBjb25zdCBpbWdCbG9ja3MgPUFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZXJvX19yaWdodC1kaXZcIikpXG5cbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGltZ0Jsb2Nrcy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICBpbWdCbG9ja3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgY29uc3Qgc3dpcGVyQWZ0ZXJIZXJvID0gbmV3IFN3aXBlcihcIi5hZnRlci1oZXJvX19jb250ZW50XCIsIHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgZWw6IFwiLmFmdGVyLWhlcm9fX3BhZ2luYXRpb25cIlxuICAgICAgICB9LFxuICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgICAgNzAwOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDEyMDA6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJibG9nXCIpKSB7XG4gICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2dfX2hlYWQtaXRlbVwiKVxuXG4gICAgYWN0aXZlRWxlbShlbGVtcylcblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dFwiKSkge1xuICAgIGNvbnN0IHN3aXBlclllYXIgPSBuZXcgU3dpcGVyKFwiLmFib3V0LWhpc3RvcnlfX3RhYi1zd2lwZXJcIiwge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgZnJlZU1vZGU6IHRydWUsXG4gICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgICAgICAzMjA6IHtcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNzY4OiB7XG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSlcbiAgICBjb25zdCBzd2lwZXJIaXN0b3J5ID0gbmV3IFN3aXBlcihcIi5hYm91dC1oaXN0b3J5X19ib3R0b20tc3dpcGVyXCIsIHtcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgICAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxuICAgICAgICBlZmZlY3Q6IFwiZmFkZVwiLFxuICAgICAgICB0aHVtYnM6IHtcbiAgICAgICAgICAgIHN3aXBlcjogc3dpcGVyWWVhclxuICAgICAgICB9LFxuICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICBuZXh0RWw6IFwiLmFib3V0LWhpc3RvcnlfX2J0bi1uZXh0XCIsXG4gICAgICAgICAgICBwcmV2RWw6IFwiLmFib3V0LWhpc3RvcnlfX2J0bi1wcmV2XCIsXG4gICAgICAgIH0sXG4gICAgfSlcblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxzLXByb2R1Y3RcIikpIHtcbiAgICBjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmRldGFpbHMtdG9wX19zd2lwZXIyXCIsIHtcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOjEwLFxuICAgICAgICAgICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBzd2lwZXIyID0gbmV3IFN3aXBlcihcIi5kZXRhaWxzLXRvcF9fc3dpcGVyXCIsIHtcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgICAgdGh1bWJzOiB7XG4gICAgICAgICAgICBzd2lwZXI6IHN3aXBlclxuICAgICAgICB9LFxuICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgICAgMzIwOiB7XG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBlbDogXCIuZGV0YWlscy10b3BfX3BhZ2luYXRpb25cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBidG5IaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHMtdG9wX19ibG9jay1idG4nKVxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLXRvcF9fYmxvY2stZGVzYycpXG5cbiAgICBidG5IaWRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2J0bk1heEhlaWdodChkaXYsIGJ0bkhpZGUpfSlcblxuICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZXRhaWxzLWJvdHRvbV9faGVhZC1pdGVtXCIpXG4gICAgY29uc3QgZGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGV0YWlscy1ib3R0b21fX2JvZHktaXRlbVwiKVxuXG4gICAgYWN0aXZlVGFiKGVsZW1zLCBkaXZzKVxuXG4gICAgZWxlbXNbMF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIGRpdnNbMF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIGhlaWdodFRhYihkaXZzWzBdKVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgICBidG5zSGlkZShkaXYsIGJ0bkhpZGUpXG4gICAgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGJ0bnNIaWRlKGRpdiwgYnRuSGlkZSlcbiAgICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKSkge1xuICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RzX19oZWFkLWl0ZW0nKVxuICAgIGFjdGl2ZUVsZW0oZWxlbXMpXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGN1bGF0ZVwiKSkge1xuICAgIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsY3VsYXRlX19pdGVtLWJ0bicpXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsY3VsYXRlX19tb2RhbCcpXG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsY3VsYXRlX19tb2RhbC1jbG9zZScpXG4gICAgY29uc3QgbGl0ZXJJbkN1YmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGl0ZXJJbkN1YmUnKVxuICAgIGNvbnN0IHBhSW5NZXRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdQYUluTWV0ZXInKVxuICAgIGNvbnN0IGF0bUluUGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUGFJbkF0bScpXG4gICAgY29uc3QgZm9ybVRyYW5zbGF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbGN1bGF0ZUZvcm1UcmFuc2xhdGlvbicpXG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGN1bGF0ZV9faW5wdXQnKVxuXG4gICAgYnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYnRuLmRhdGFzZXQudGFyZ2V0ID09PSBlbGVtLmRhdGFzZXQucGF0aCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGNsb3NlLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBlbGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgbW9kYWwuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGVsZW0ucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0ZV9fbW9kYWwtY29udGVudCcpXG5cbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRlbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxuICAgICAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgY29uc3QgaW5wdXRMaXRlciA9IGxpdGVySW5DdWJlLmZpcnN0RWxlbWVudENoaWxkLm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgY29uc3QgaW5wdXRDdWJlID0gbGl0ZXJJbkN1YmUubGFzdEVsZW1lbnRDaGlsZC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgY29uc3QgaW5wdXRQYSA9IHBhSW5NZXRlci5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICAgIGNvbnN0IGlucHV0TWV0ZXIgPSBwYUluTWV0ZXIubGFzdEVsZW1lbnRDaGlsZC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgY29uc3QgaW5wdXRBdG0gPSBhdG1JblBhLmZpcnN0RWxlbWVudENoaWxkLm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgY29uc3QgcGFJbnB1dCA9IGF0bUluUGEubGFzdEVsZW1lbnRDaGlsZC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG5cbiAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHZhbGlkSW5wdXQpKVxuXG4gICAgaW5wdXRMaXRlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKHRoaXMudmFsdWUpXG4gICAgICAgIGlucHV0Q3ViZS52YWx1ZSA9IHZhbHVlICogNjAgLyAxMDAwXG4gICAgfSlcbiAgICBpbnB1dEN1YmUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlcih0aGlzLnZhbHVlKVxuICAgICAgICBpbnB1dExpdGVyLnZhbHVlID0gdmFsdWUqIDEwMDAgLyA2MFxuICAgIH0pXG4gICAgaW5wdXRQYS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKHRoaXMudmFsdWUpXG4gICAgICAgIGlucHV0TWV0ZXIudmFsdWUgPSB2YWx1ZSAvICg5LjgxICogMTAwMClcbiAgICB9KVxuICAgIGlucHV0TWV0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlcih0aGlzLnZhbHVlKVxuICAgICAgICBpbnB1dFBhLnZhbHVlID0gdmFsdWUgKiA5LjgxICogMTAwMFxuICAgIH0pXG4gICAgaW5wdXRBdG0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlcih0aGlzLnZhbHVlKVxuICAgICAgICBwYUlucHV0LnZhbHVlID0gdmFsdWUgKiBNYXRoLnBvdygxMCwgNSlcbiAgICB9KVxuICAgIHBhSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlcih0aGlzLnZhbHVlKVxuICAgICAgICBpbnB1dEF0bS52YWx1ZSA9IHZhbHVlIC8gTWF0aC5wb3coMTAsIDUpXG4gICAgfSlcblxuICAgIGZvcm1UcmFuc2xhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB9KVxuXG4gICAgY29uc3Qgc2VsZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxjdWxhdGVfX3NlbGVjdCcpXG5cbiAgICBzZWxlY3RzLmZvckVhY2goc2VsZWN0ID0+IHtcbiAgICAgICAgaWYgKHNlbGVjdC5tdWx0aXBsZSkge1xuICAgICAgICAgICAgbmV3IENob2ljZXMoc2VsZWN0LCB7XG4gICAgICAgICAgICAgICAgc2VhcmNoRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWxsb3dIVE1MOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW1CdXR0b246IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXcgQ2hvaWNlcyhzZWxlY3QsIHtcbiAgICAgICAgICAgICAgICBzZWFyY2hFbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXJlYXNcIikpIHtcbiAgICBjb25zdCBidG5zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFyZWFzLWFyZWFzX19oZWFkLWl0ZW1cIikpXG4gICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXJlYXMtYXJlYXNfX2JvZHktaXRlbVwiKSlcblxuICAgIGJ0bnMuZm9yRWFjaCgoYnRuLCBpbmRleCkgPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxuICAgICAgICAgICAgYnRucy5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGl0ZW1zW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgaGVpZ2h0VGFiKGl0ZW1zW2luZGV4XSlcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgYnRuc1swXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIGl0ZW1zWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgaGVpZ2h0VGFiKGl0ZW1zWzBdKVxuXG4gICAgY29uc3QgYnRuc1Rvb2x0aXAgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hcmVhcy1hcmVhc19fY2lyY2xlXCIpXG5cbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA5OTIpIHtcbiAgICAgICAgYnRuc1Rvb2x0aXAuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGJ0bnNUb29sdGlwLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG5cbiAgICB9XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NsaWNrSW5zaWRlQnV0dG9uID0gQXJyYXkuZnJvbShidG5zVG9vbHRpcCkuc29tZShidXR0b24gPT4gYnV0dG9uLmNvbnRhaW5zKGUudGFyZ2V0KSlcbiAgICAgICAgaWYgKCFpc0NsaWNrSW5zaWRlQnV0dG9uKSB7XG4gICAgICAgICAgICBidG5zVG9vbHRpcC5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXG4gICAgICAgIH1cbiAgICB9KVxufVxuZnVuY3Rpb24gY2hlY2tGb3JDb21wbGV0aW9uKGlucHV0KSB7XG4gICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgfVxufVxuZnVuY3Rpb24gYWN0aXZlRWxlbShlbGVtcykge1xuICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19idXJnZXJcIilcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbWVudS1tb2JpbGVcIilcbmNvbnN0IGhlYWRlclRhYkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX3NlbGVjdC1saXN0LWl0ZW0tYnRuJylcbmNvbnN0IGhlYWRlclRhYkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlYWRlcl9fc2VsZWN0LXJpZ2h0LXdyYXBcIilcbmNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyX19zZWxlY3RcIilcbmNvbnN0IGhlYWRlclJpZ2h0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19zZWxlY3QtcmlnaHQtYmxvY2snKVxuc2VsZWN0LmZvckVhY2goZWxlbSA9PiB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIChlKSA9PiB7XG4gICAgICAgIGlmICghZWxlbS5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIGhlYWRlclRhYkJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGhlYWRlclJpZ2h0QmxvY2suZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IFwiXCJcblxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9XG4gICAgfSlcbn0pXG5cbmhlYWRlclRhYkJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgICBoZWFkZXJSaWdodEJsb2NrLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IFwiXCJcblxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBlbGVtZW50VG9Db3B5ID0gYnRuLm5leHRFbGVtZW50U2libGluZy5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgYnRuLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuYXBwZW5kKGVsZW1lbnRUb0NvcHkpXG4gICAgICAgIGJ0bi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcblxuICAgICAgICBidG4ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9KVxufSlcbmNvbnN0IGJnSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX21lbnUtbW9iaWxlLWJnXCIpXG5cblxuYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICBiZ0hlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuXG4gICAgaWYgKGJ1cmdlci5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2NrJylcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKVxuICAgIH1cbn0pXG5cblxubmV3IEFjY29yZGlvbignLmFjY29yZGlvbi1jb250YWluZXInKVxubmV3IEFjY29yZGlvbignLmFjY29yZGlvbi1zZWNvbmQnKVxuXG5mdW5jdGlvbiBhY3RpdmVUYWIoYnRucywgZGl2cykge1xuICAgIGJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGRpdnMuZm9yRWFjaChkaXYgPT4ge1xuICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYnRucy5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgZGl2cy5mb3JFYWNoKGRpdiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRpdi5kYXRhc2V0LnRhcmdldCA9PT0gYnRuLmRhdGFzZXQucGF0aCkge1xuICAgICAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0VGFiKGRpdilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGhlaWdodFRhYihkaXYpIHtcbiAgICBkaXYucGFyZW50RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBkaXYuc2Nyb2xsSGVpZ2h0ICsgJ3B4J1xufVxuXG5mdW5jdGlvbiBidG5zSGlkZShkaXYsIGJ0bikge1xuICAgIGlmIChkaXYuc2Nyb2xsSGVpZ2h0ID49IDIyNSkge1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYnRuTWF4SGVpZ2h0KGRpdiwgYnRuKSB7XG4gICAgaWYgKGRpdi5jbGllbnRIZWlnaHQgPiAyMjUpIHtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgIGRpdi5zdHlsZS5tYXhIZWlnaHQgPSAyMjUgKyAncHgnXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICBkaXYuc3R5bGUubWF4SGVpZ2h0ID0gZGl2LnNjcm9sbEhlaWdodCArICdweCdcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZWdQaG9uZShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC52YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpO1xufVxuXG5mdW5jdGlvbiBpbnB1dFBob25lKGUpIHtcbiAgICBsZXQgaW5wdXQgPSBlLnRhcmdldDtcbiAgICBsZXQgaW5wdXROdW1iZXJWYWx1ZSA9IHJlZ1Bob25lKGlucHV0KTtcbiAgICBsZXQgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9ICcnO1xuICAgIGxldCBzZWxlY3Rpb25TdGFydCA9IGlucHV0LnNlbGVjdGlvblN0YXJ0XG4gICAgLy8g0JXRgdC70Lgg0LIg0LjQvdC/0YPRgiDQstCy0LXQtNC10L3RiyDRgdC40LzQvtCy0LvRiyDQvdC1INGB0L7QvtGC0LLQtdGC0YHQstGD0Y7RidC40LUg0YDQtdCz0YPQu9GP0YDQutC4LCDRgtC+INC30L3QsNGH0LXQvdC40LUg0LjQvdC/0YPRgtCwINGB0YLQsNC90L7QstC40YLRgdGPINC/0YPRgdGC0YvQvFxuICAgIGlmICghaW5wdXROdW1iZXJWYWx1ZSkgcmV0dXJuIGlucHV0LnZhbHVlID0gJydcbiAgICAvLyDQkiDRjdGC0L7QuSDRh9Cw0YHRgtC4INGPINC90LUg0YHQvtCy0YHQtdC8INC/0L7QvdC40LzQsNGOINGH0YLQviDQv9GA0L7QuNGB0YXQvtC00LjRglxuICAgIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggIT0gc2VsZWN0aW9uU3RhcnQpIHtcbiAgICAgICAgaWYgKGUuZGF0YSAmJiAvXFxEL2cudGVzdChlLmRhdGEpKSB7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGlucHV0TnVtYmVyVmFsdWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoWyc3JywgJzgnLCAnOSddLmluY2x1ZGVzKGlucHV0TnVtYmVyVmFsdWVbMF0pKSB7XG4gICAgICAgIC8vINCV0YHQu9C4INC/0LXRgNCy0LDRjyDRhtC40YTRgNCwINC00LXQstGP0YLRjCwg0YLQvtCz0LTQsCDQvNGLINC30LDQvNC10L3Rj9C10Lwg0L/QtdGA0LLRg9GOINGG0LjRhNGA0YMg0L3QsCA3INC4INC00LXQstGP0YLQutGDINC00LXQu9Cw0LXQvCDQstGC0L7RgNC+0Lkg0YbQuNGE0YDQvtC5XG4gICAgICAgIGlmIChpbnB1dE51bWJlclZhbHVlWzBdID09ICc5JykgaW5wdXROdW1iZXJWYWx1ZSA9ICc3JyArIGlucHV0TnVtYmVyVmFsdWU7XG4gICAgICAgIGlmIChpbnB1dE51bWJlclZhbHVlWzBdID09ICc4JykgaW5wdXROdW1iZXJWYWx1ZSA9ICc3J1xuICAgICAgICAvLyDQldGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCA3LCDRgtC+0LPQtNCwINC30L3QsNGH0LXQvdC40LUg0LjQvdC/0YPRgtCwINC90LDRh9C40L3QsNC10YLRgdGPINGBICs3LCDQtdGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCA4LCDRgtC+0LPQtNCwINC30L3QsNGH0LXQvdC40LUg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0YEgOFxuICAgICAgICBsZXQgZmlyc3RTeW1ib2wgPSAnKzcnO1xuICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gZmlyc3RTeW1ib2wgKyAnICc7XG4gICAgICAgIC8vINCV0YHQu9C4INCyINC40L3Qv9GD0YLQtSDQsdC+0LvRjNGI0LUg0L7QtNC90L7QuSDRhtC40YTRgNGLINC00L7QsdCw0LLQu9GP0LXQvCDRgdC60L7QsdC60YMg0L7RgtC60YDRi9GC0LjRjyDQuCDRgtCw0Log0LTQsNC70LXQtVxuICAgICAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcoJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDEsIDQpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0TnVtYmVyVmFsdWUubGVuZ3RoID49IDUpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJykgJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDQsIDcpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0TnVtYmVyVmFsdWUubGVuZ3RoID49IDgpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJy0nICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoNywgOSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gMTApIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJy0nICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoOSwgMTEpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHsgLy/QldGB0LvQuCDQstCy0L7QtNC40LzQvtC1INGH0LjRgdC70L4g0L3QtSA3LCA4INC40LvQuCA5INGC0L7Qs9C00LAg0LTQvtCx0LDQstC70Y/QtdC8ICvQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0LLQstC10LTQtdC90L7QtSDRh9C40YHQu9C+XG4gICAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSAnKzcgKDknICsgaW5wdXROdW1iZXJWYWx1ZTtcbiAgICB9XG4gICAgaW5wdXQudmFsdWUgPSBmb3JtYXR0ZWRJbnB1dFZhbHVlXG59XG5cbmZ1bmN0aW9uIG9uZVBob25lS2V5RG93biAoZSkge1xuICAgIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xuICAgIGlmIChyZWdQaG9uZShpbnB1dCkubGVuZ3RoID09IDEgJiYgZS5rZXlDb2RlID09PSA4KSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZElucHV0KGV2ZW50KSB7XG4gICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQ7XG4gICAgbGV0IHZhbHVlID0gaW5wdXQudmFsdWU7XG5cbiAgICAvLyDQo9C00LDQu9C10L3QuNC1INCy0YHQtdGFINGB0LjQvNCy0L7Qu9C+0LIsINC60YDQvtC80LUg0YbQuNGE0YAg0Lgg0YLQvtGH0LXQulxuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW14wLTkuXS9nLCAnJyk7XG5cbiAgICAvLyDQn9GA0L7QstC10YDQutCwINC90LAg0L3QsNC70LjRh9C40LUg0LHQvtC70LXQtSDQvtC00L3QvtC5INGC0L7Rh9C60LhcbiAgICBpZiAoKHZhbHVlLm1hdGNoKC9cXC4vZykgfHwgW10pLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8g0J7RgdGC0LDQstC70Y/QtdC8INGC0L7Qu9GM0LrQviDRh9Cw0YHRgtGMINGB0YLRgNC+0LrQuCDQtNC+INCy0YLQvtGA0L7QuSDRgtC+0YfQutC4XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDAsIHZhbHVlLmluZGV4T2YoJy4nLCB2YWx1ZS5pbmRleE9mKCcuJykgKyAxKSk7XG4gICAgfVxuXG4gICAgLy8g0J7QsdC90L7QstC70LXQvdC40LUg0LfQvdCw0YfQtdC90LjRjyDQv9C+0LvRjyDQstCy0L7QtNCwXG4gICAgaW5wdXQudmFsdWUgPSB2YWx1ZTtcbn0iXX0=
