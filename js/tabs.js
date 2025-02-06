
let tabsBtn = document.querySelectorAll(".programs__btn");
let tabsItem = document.querySelectorAll(".programs__container");


tabsBtn.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove("programs__btn--active");
    });

    e.currentTarget.classList.add("programs__btn--active");

    tabsItem.forEach(function (element) {
      element.classList.remove("programs--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("programs--active");
  });
});



let tabsBtn2 = document.querySelectorAll(".specialists__btn");
let tabsItem2 = document.querySelectorAll(".specialists__container");

tabsBtn2.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn2.forEach(function (btn) {
      btn.classList.remove("specialists__btn--active");
    });

    e.currentTarget.classList.add("specialists__btn--active");

    tabsItem2.forEach(function (element) {
      element.classList.remove("specialists--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("specialists--active");
  });
});

let tabsBtn3 = document.querySelectorAll(".science__btn");
let tabsItem3 = document.querySelectorAll(".science__container");

tabsBtn3.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn3.forEach(function (btn) {
      btn.classList.remove("science__btn--active");
    });

    e.currentTarget.classList.add("science__btn--active");

    tabsItem3.forEach(function (element) {
      element.classList.remove("science--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("science--active");
  });
});

