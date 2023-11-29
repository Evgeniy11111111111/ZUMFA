"use strict";

if (document.getElementById("index")) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN3aXBlckFmdGVySGVybyIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJwYWdpbmF0aW9uIiwiZWwiLCJicmVha3BvaW50cyIsImZlZWRiYWNrSW5wdXRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVja0ZvckNvbXBsZXRpb24iLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZWxlbXMiLCJhY3RpdmVFbGVtIiwic3dpcGVyWWVhciIsImZyZWVNb2RlIiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsInN3aXBlckhpc3RvcnkiLCJhbGxvd1RvdWNoTW92ZSIsInRodW1icyIsInN3aXBlciIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJ5bWFwcyIsInJlYWR5IiwiaW5pdE1hcCIsInN3aXBlcjIiLCJidG5IaWRlIiwicXVlcnlTZWxlY3RvciIsImRpdiIsImJ0bk1heEhlaWdodCIsImRpdnMiLCJhY3RpdmVUYWIiLCJoZWlnaHRUYWIiLCJidG5zSGlkZSIsIndpbmRvdyIsInZhbHVlIiwibGVuZ3RoIiwicmVtb3ZlIiwiZWxlbSIsIm15TWFwIiwiTWFwIiwiY2VudGVyIiwiem9vbSIsImNvbnRyb2xzIiwiY2lyY2xlTGF5b3V0IiwidGVtcGxhdGVMYXlvdXRGYWN0b3J5IiwiY3JlYXRlQ2xhc3MiLCJCYWxsb29uQ29udGVudExheW91dCIsImNpcmNsZVBsYWNlbWFyayIsIlBsYWNlbWFyayIsIm5hbWUiLCJjaXR5IiwiYWRkcmVzcyIsInBob25lIiwiYmFsbG9vbkNvbnRlbnRMYXlvdXQiLCJoaWRlSWNvbk9uQmFsbG9vbk9wZW4iLCJpY29uTGF5b3V0IiwiaWNvblNoYXBlIiwidHlwZSIsImNvb3JkaW5hdGVzIiwicmFkaXVzIiwiZ2VvT2JqZWN0cyIsImJlaGF2aW9ycyIsImRpc2FibGUiLCJidXJnZXIiLCJtZW51IiwiaGVhZGVyVGFiQnRuIiwiaGVhZGVyVGFiTGlzdCIsInNlbGVjdCIsImUiLCJjb250YWlucyIsInJlbGF0ZWRUYXJnZXQiLCJidG4iLCJpdGVtIiwiZGF0YXNldCIsInRhcmdldCIsInBhdGgiLCJiZ0hlYWRlciIsInRvZ2dsZSIsImJvZHkiLCJBY2NvcmRpb24iLCJidG5zIiwic3R5bGUiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJtYXhIZWlnaHQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQUosRUFBc0M7RUFDbEMsSUFBTUMsZUFBZSxHQUFHLElBQUlDLE1BQUosQ0FBVyxzQkFBWCxFQUFtQztJQUN2REMsYUFBYSxFQUFFLENBRHdDO0lBRXZEQyxZQUFZLEVBQUUsRUFGeUM7SUFHdkRDLFVBQVUsRUFBRTtNQUNSQyxFQUFFLEVBQUU7SUFESSxDQUgyQztJQU12REMsV0FBVyxFQUFFO01BQ1QsS0FBSztRQUNESixhQUFhLEVBQUUsQ0FEZDtRQUVEQyxZQUFZLEVBQUU7TUFGYixDQURJO01BS1QsTUFBTTtRQUNGRCxhQUFhLEVBQUUsQ0FEYjtRQUVGQyxZQUFZLEVBQUU7TUFGWjtJQUxHO0VBTjBDLENBQW5DLENBQXhCO0VBa0JBLElBQU1JLGNBQWMsR0FBR1QsUUFBUSxDQUFDVSxnQkFBVCxDQUEwQixhQUExQixDQUF2QjtFQUNBRCxjQUFjLENBQUNFLE9BQWYsQ0FBdUIsVUFBQUMsS0FBSyxFQUFJO0lBQzVCQSxLQUFLLENBQUNDLGdCQUFOLENBQXVCLE1BQXZCLEVBQStCLFlBQU07TUFDakNDLGtCQUFrQixDQUFDRixLQUFELENBQWxCO0lBQ0gsQ0FGRDtJQUdBQSxLQUFLLENBQUNDLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFlBQU07TUFDbENELEtBQUssQ0FBQ0csYUFBTixDQUFvQkMsU0FBcEIsQ0FBOEJDLEdBQTlCLENBQWtDLFFB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aEUsU0FBSixDQUFjNkIsTUFBZCxDQUFxQixRQUFyQjtJQUNBVCxHQUFHLENBQUNzRCxLQUFKLENBQVVJLFNBQVYsR0FBc0IsTUFBTSxJQUE1QjtJQUNBMUQsR0FBRyxDQUFDcEIsU0FBSixDQUFjQyxHQUFkLENBQWtCLE1BQWxCO0VBQ0gsQ0FKRCxNQUlPO0lBQ0grRCxHQUFHLENBQUNoRSxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsUUFBbEI7SUFDQW1CLEdBQUcsQ0FBQ3NELEtBQUosQ0FBVUksU0FBVixHQUFzQjFELEdBQUcsQ0FBQ3dELFlBQUosR0FBbUIsSUFBekM7SUFDQXhELEdBQUcsQ0FBQ3BCLFNBQUosQ0FBYzZCLE1BQWQsQ0FBcUIsTUFBckI7RUFDSDtBQUNKIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmRleFwiKSkge1xuICAgIGNvbnN0IHN3aXBlckFmdGVySGVybyA9IG5ldyBTd2lwZXIoXCIuYWZ0ZXItaGVyb19fY29udGVudFwiLCB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIGVsOiBcIi5hZnRlci1oZXJvX19wYWdpbmF0aW9uXCJcbiAgICAgICAgfSxcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIDcwMDoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxMjAwOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGZlZWRiYWNrSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnB1dC1mb3JtXCIpXG4gICAgZmVlZGJhY2tJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNoZWNrRm9yQ29tcGxldGlvbihpbnB1dClcbiAgICAgICAgfSlcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlucHV0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICB9KVxuICAgICAgICBjaGVja0ZvckNvbXBsZXRpb24oaW5wdXQpXG4gICAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmxvZ1wiKSkge1xuICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9nX19oZWFkLWl0ZW1cIilcblxuICAgIGFjdGl2ZUVsZW0oZWxlbXMpXG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIikpIHtcbiAgICBjb25zdCBzd2lwZXJZZWFyID0gbmV3IFN3aXBlcihcIi5hYm91dC1oaXN0b3J5X190YWItc3dpcGVyXCIsIHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgICAgMzIwOiB7XG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pXG4gICAgY29uc3Qgc3dpcGVySGlzdG9yeSA9IG5ldyBTd2lwZXIoXCIuYWJvdXQtaGlzdG9yeV9fYm90dG9tLXN3aXBlclwiLCB7XG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgICAgICAgdGh1bWJzOiB7XG4gICAgICAgICAgICBzd2lwZXI6IHN3aXBlclllYXJcbiAgICAgICAgfSxcbiAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgbmV4dEVsOiBcIi5hYm91dC1oaXN0b3J5X19idG4tbmV4dFwiLFxuICAgICAgICAgICAgcHJldkVsOiBcIi5hYm91dC1oaXN0b3J5X19idG4tcHJldlwiLFxuICAgICAgICB9LFxuICAgIH0pXG5cbiAgICB5bWFwcy5yZWFkeShpbml0TWFwKVxuXG4gICAgY29uc3QgZmVlZGJhY2tJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlucHV0LWZvcm1cIilcbiAgICBmZWVkYmFja0lucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY2hlY2tGb3JDb21wbGV0aW9uKGlucHV0KVxuICAgICAgICB9KVxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgICAgIH0pXG4gICAgICAgIGNoZWNrRm9yQ29tcGxldGlvbihpbnB1dClcbiAgICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxzLXByb2R1Y3RcIikpIHtcbiAgICBjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmRldGFpbHMtdG9wX19zd2lwZXIyXCIsIHtcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOjEwLFxuICAgICAgICAgICAgICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBzd2lwZXIyID0gbmV3IFN3aXBlcihcIi5kZXRhaWxzLXRvcF9fc3dpcGVyXCIsIHtcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgICAgIHRodW1iczoge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZXI6IHN3aXBlclxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBwcmV2RWw6IFwiLmRldGFpbHMtdG9wX19zd2lwZXItYnRuLXByZXZcIixcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVsOiBcIi5kZXRhaWxzLXRvcF9fc3dpcGVyLWJ0bi1uZXh0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMzIwOiB7XG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBlbDogXCIuZGV0YWlscy10b3BfX3BhZ2luYXRpb25cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgYnRuSGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLXRvcF9fYmxvY2stYnRuJylcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscy10b3BfX2Jsb2NrLWRlc2MnKVxuXG4gICAgYnRuSGlkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtidG5NYXhIZWlnaHQoZGl2LCBidG5IaWRlKX0pXG5cbiAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGV0YWlscy1ib3R0b21fX2hlYWQtaXRlbVwiKVxuICAgIGNvbnN0IGRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRldGFpbHMtYm90dG9tX19ib2R5LWl0ZW1cIilcblxuICAgIGFjdGl2ZVRhYihlbGVtcywgZGl2cylcblxuICAgIGVsZW1zWzBdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICBkaXZzWzBdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICBoZWlnaHRUYWIoZGl2c1swXSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgYnRuc0hpZGUoZGl2LCBidG5IaWRlKVxuICAgIH0pXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBidG5zSGlkZShkaXYsIGJ0bkhpZGUpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JDb21wbGV0aW9uKGlucHV0KSB7XG4gICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgfVxufVxuZnVuY3Rpb24gYWN0aXZlRWxlbShlbGVtcykge1xuICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICB9KVxuICAgIH0pXG59XG5mdW5jdGlvbiBpbml0TWFwKCkge1xuICAgIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJhYm91dF9fbWFwXCIsIHtcbiAgICAgICAgY2VudGVyOiBbNTUuNzk0MDI2NTY4OTI2MDIsMzcuNDgyNjQ1NDk5OTk5OTVdLFxuICAgICAgICB6b29tOiAxOCxcbiAgICAgICAgY29udHJvbHM6IFtdXG4gICAgfSlcblxuICAgIC8vINCh0L7Qt9C00LDQvdC40LUg0LzQtdGC0LrQuCDRgSDQutGA0YPQs9C70L7QuSDQsNC60YLQuNCy0L3QvtC5INC+0LHQu9Cw0YHRgtGM0Y4uXG4gICAgdmFyIGNpcmNsZUxheW91dCA9IHltYXBzLnRlbXBsYXRlTGF5b3V0RmFjdG9yeS5jcmVhdGVDbGFzcyhgPGRpdiBjbGFzcz1cInBsYWNlbWFya19sYXlvdXRfY29udGFpbmVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2lyY2xlX2xheW91dFwiPlxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjMzXCIgdmlld0JveD1cIjAgMCAyNSAzM1wiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjMzXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEpXCIgZmlsbD1cIndoaXRlXCIvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjMuNzkgMTEuMDk0OEMyMy43OSAxNC4wMTA1IDIyLjA4ODYgMTcuOTYxIDE5LjcwNjcgMjEuOTU1NUMxNy40NiAyNS43MjM1IDE0LjY1OTEgMjkuNDQ3OSAxMi4yODc4IDMyLjIzNDhDOS43ODA5NCAyOS4zMjM5IDYuOTc0IDI1LjU5MjYgNC43NTg3NyAyMS44NTAyQzIuNDE3NzEgMTcuODk1MiAwLjc5MDAzOSAxNC4wMTM1IDAuNzkwMDM5IDExLjA5NDhDMC43OTAwMzkgNS4yNzk2NyA1LjkwMTEyIDAuNSAxMi4yOSAwLjVDMTguNjc5IDAuNSAyMy43OSA1LjI3OTY3IDIzLjc5IDExLjA5NDhaXCIgZmlsbD1cIiNGRkQzNDFcIiBzdHJva2U9XCIjRkZDRTAwXCIvPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMi4yOVwiIGN5PVwiMTJcIiByPVwiNS41XCIgZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiI0ZGQ0UwMFwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9kaXY+YCk7XG4gICAgdmFyIEJhbGxvb25Db250ZW50TGF5b3V0ID0geW1hcHMudGVtcGxhdGVMYXlvdXRGYWN0b3J5LmNyZWF0ZUNsYXNzKGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImhpbnRfbGF5b3V0X2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhpbnRfbGF5b3V0X2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGludF9sYXlvdXRfaGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBwcm9wZXJ0aWVzLm5hbWUgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGludF9sYXlvdXRfYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGludF9sYXlvdXRfY2l0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaW50X2xheW91dF9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjExXCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDExIDE0XCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk05LjkxNjQxIDQuNTM4MDNDOS45MTY0MSA2Ljk4OTAzIDcuMDg1NjQgMTEuMDI0MiA1LjExNjQxIDEzLjMwMDFDMy4wMjQxIDEwLjkxMDQgMC4zMTY0MDYgNi45ODkwMyAwLjMxNjQwNiA0LjUzODAzQzAuMzE2NDA2IDIuMDg3MDMgMi40NjU0NCAwLjEwMDA5OCA1LjExNjQxIDAuMTAwMDk4QzcuNzY3MzcgMC4xMDAwOTggOS45MTY0MSAyLjA4NzAzIDkuOTE2NDEgNC41MzgwM1pcIiBmaWxsPVwiIzIxMjAxQ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjUuMTE4NzVcIiBjeT1cIjQuOVwiIHI9XCIyLjRcIiBmaWxsPVwid2hpdGVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpbnRfbGF5b3V0X3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9wZXJ0aWVzLmNpdHkgfX0gICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoaW50X2xheW91dF9hZGRyZXNzIGhpbnRfbGF5b3V0X3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb3BlcnRpZXMuYWRkcmVzcyB9fSAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoaW50X2xheW91dF9waG9uZSBoaW50X2xheW91dF90ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHByb3BlcnRpZXMucGhvbmUgfX0gICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgYFxuICAgIClcblxuXG4gICAgdmFyIGNpcmNsZVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoXG4gICAgICAgIFs1NS43OTQwMjY1Njg5MjYwMiwzNy40ODI2NDU0OTk5OTk5NV0sIHtcbiAgICAgICAgICAgIG5hbWU6IFwi0KbQtdC90YLRgNCw0LvRjNC90YvQuSDQvtGE0LjRgVwiLFxuICAgICAgICAgICAgY2l0eTogXCLQnNC+0YHQutCy0LBcIixcbiAgICAgICAgICAgIGFkZHJlc3M6IFwi0KDQpCwgMTIzMDYwLCDQnNC+0YHQutCy0LAg0YPQuy4g0KDQsNGB0L/Qu9C10YLQuNC90LAsINC00L7QvCA1LCDRgdGC0YAuOVwiLFxuICAgICAgICAgICAgcGhvbmU6IFwiKzcgKDQ5NSkgNzYwLTkxLTk2IFwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGJhbGxvb25Db250ZW50TGF5b3V0OiBCYWxsb29uQ29udGVudExheW91dCxcbiAgICAgICAgICAgIGhpZGVJY29uT25CYWxsb29uT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBpY29uTGF5b3V0OiBjaXJjbGVMYXlvdXQsXG4gICAgICAgICAgICBpY29uU2hhcGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnQ2lyY2xlJyxcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogWzAsIDBdLFxuICAgICAgICAgICAgICAgIHJhZGl1czogMjVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBteU1hcC5nZW9PYmplY3RzLmFkZChjaXJjbGVQbGFjZW1hcmspO1xuICAgIG15TWFwLmJlaGF2aW9ycy5kaXNhYmxlKCdkcmFnJyk7XG4gICAgbXlNYXAuYmVoYXZpb3JzLmRpc2FibGUoJ3Njcm9sbFpvb20nKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3NlYXJjaENvbnRyb2wnKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3RyYWZmaWNDb250cm9sJyk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0eXBlU2VsZWN0b3InKTtcbiAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ2Z1bGxzY3JlZW5Db250cm9sJyk7XG4gICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdydWxlckNvbnRyb2wnKTtcbn1cblxuY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2J1cmdlclwiKVxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51LW1vYmlsZVwiKVxuY29uc3QgaGVhZGVyVGFiQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fc2VsZWN0LWxpc3QtaXRlbS1idG4nKVxuY29uc3QgaGVhZGVyVGFiTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyX19zZWxlY3QtcmlnaHQtd3JhcFwiKVxuY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXJfX3NlbGVjdFwiKVxuXG5zZWxlY3QuZm9yRWFjaChlbGVtID0+IHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB9KVxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKCFlbGVtLmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICAgICAgaGVhZGVyVGFiQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGhlYWRlclRhYkxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxufSlcbmhlYWRlclRhYkJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGhlYWRlclRhYkJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICB9KVxuICAgICAgICBoZWFkZXJUYWJMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICAgICAgaGVhZGVyVGFiTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGJ0bi5kYXRhc2V0LnRhcmdldCA9PT0gaXRlbS5kYXRhc2V0LnBhdGgpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59KVxuXG5jb25zdCBiZ0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51LW1vYmlsZS1iZ1wiKVxuXG5idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICAgIGJnSGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG5cbiAgICBpZiAoYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpXG4gICAgfVxufSlcblxuXG5uZXcgQWNjb3JkaW9uKCcuYWNjb3JkaW9uLWNvbnRhaW5lcicpXG5uZXcgQWNjb3JkaW9uKCcuYWNjb3JkaW9uLXNlY29uZCcpXG5cbmZ1bmN0aW9uIGFjdGl2ZVRhYihidG5zLCBkaXZzKSB7XG4gICAgYnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICAgICAgZGl2cy5mb3JFYWNoKGRpdiA9PiB7XG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBidG5zLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICBkaXZzLmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGl2LmRhdGFzZXQudGFyZ2V0ID09PSBidG4uZGF0YXNldC5wYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHRUYWIoZGl2KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gaGVpZ2h0VGFiKGRpdikge1xuICAgIGRpdi5wYXJlbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9IGRpdi5zY3JvbGxIZWlnaHQgKyAncHgnXG59XG5cbmZ1bmN0aW9uIGJ0bnNIaWRlKGRpdiwgYnRuKSB7XG4gICAgaWYgKGRpdi5zY3JvbGxIZWlnaHQgPj0gMjI1KSB7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKVxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICB9IGVsc2Uge1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBidG5NYXhIZWlnaHQoZGl2LCBidG4pIHtcbiAgICBpZiAoZGl2LmNsaWVudEhlaWdodCA+IDIyNSkge1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgZGl2LnN0eWxlLm1heEhlaWdodCA9IDIyNSArICdweCdcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgIGRpdi5zdHlsZS5tYXhIZWlnaHQgPSBkaXYuc2Nyb2xsSGVpZ2h0ICsgJ3B4J1xuICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIilcbiAgICB9XG59Il19
