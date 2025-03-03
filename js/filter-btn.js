let filterBtnOld = document.querySelector(".filter__check");
let cardsBlockOld = document.querySelector("#result");
let formOld = document.querySelector(".form");
let heightOld = formOld.offsetHeight + 5;

let filterBtnChild = document.querySelector(".filter__check-2");
let cardsBlockChild = document.querySelector("#result-2");
let formChild = document.querySelector(".form-child");
let heightChild

let section = document.querySelector('.programs');
let sectionCall = document.querySelector('.call');

if (window.innerWidth < 827) {
  sectionCall.style.transform = "translateY(-70px)";
  sowFilters(heightOld, cardsBlockOld, formOld, filterBtnOld);
  sowFilters(heightChild, cardsBlockChild, formChild, filterBtnChild);
}

function sowFilters(h, b, f, bt) {
  b.style.transform = "translateY(" + -h + "px)";
  section.style.paddingBottom = '0px'
  b.style.backgroundColor = "var(--white)";
  bt.addEventListener("change", function () {
    if (bt.checked) {
      console.log(bt.checked)
      b.style.transform = "translateY(" + 0 + "px)";
      section.style.paddingBottom = '60px'
      sectionCall.style.transform = "translateY(0px)";
    } else {
      console.log(bt.checked)
      h = f.offsetHeight + 5;
      b.style.transform = "translateY(" + -h + "px)";
      b.style.backgroundColor = "var(--white)";
      section.style.paddingBottom = '0px'
      sectionCall.style.transform = "translateY(-70px)";
    }
  });
}
