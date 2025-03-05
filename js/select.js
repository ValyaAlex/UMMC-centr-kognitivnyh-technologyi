document.addEventListener("DOMContentLoaded", function () {
  const selectsBig1 = document.querySelectorAll(".selects-1 .select__input");
  const selectItems = document.querySelectorAll(".selects-1 .multiselect__item");
  const selectsBig2 = document.querySelectorAll(".selects-1 .multiselect__input");
  const list1 = document.querySelectorAll("#result .filtered");

  const selectsChild1 = document.querySelectorAll(".selects-2 .select__input");
  const selectsChild6 = document.querySelectorAll(".selects-2 .select__label");
  const selectsChild2 = document.querySelectorAll(".selects-3 .select__input");
  const selectsChild3 = document.querySelectorAll(".selects-2 .multiselect__input");
  const selectsChild4 = document.querySelectorAll(".selects-2 .multiselect__item");
  const selectsChild5 = document.querySelectorAll(".selects-3 .select__label");


  const list2 = document.querySelectorAll("#result-2 .filtered");
  let btnMore1 = document.querySelector(".more__btn");
  let btnMore2 = document.querySelector(".more__btn-child");
  let cardsNewList = [];

  let program = document.querySelector(".program-1");
  let programChild = document.querySelector(".program-2");
  let resetBtn = document.querySelector(".reset");
  let resetBtn2 = document.querySelector(".reset-2");
  const items = document.querySelectorAll(".multiselect__item");

  let firstDownld = Array.from(document.querySelectorAll("#result .programs__card"));
  showMore(firstDownld, btnMore1);
  let firstDownldChild = Array.from(document.querySelectorAll("#result-2 .programs__card"));
  showMore(firstDownldChild, btnMore2);
  let result = 0;
  //selects
  const selectSingle = document.querySelectorAll(".select");
  const selectContent = document.querySelectorAll(".select__content");
  let arr = [];
  let class1;
  let class2;
  let cls;
  let titleYears = document.querySelector(".title-year")
  let titleDirection = document.querySelector(".title-child");
  let titleMethodsOld = document.querySelectorAll(".title-methods-old");
  let titleMethodsChild = document.querySelectorAll(".title-methods-child");

  selectSingle.forEach(function (e) {
    e.addEventListener("click", (elem) => {
      const pth = elem.currentTarget.dataset.path;
      let content = document.querySelector(`[data-target="${pth}"]`);
      let labels = content.getElementsByClassName("select__label");
      let title = e.querySelector(".select__title");

      if ("active" === e.getAttribute("data-state")) {
        e.setAttribute("data-state", "");
        selectContent.forEach(function () {
          content.classList.add("select--disabled");
        });
      } else {
        e.setAttribute("data-state", "active");
        selectContent.forEach(function () {
          content.classList.remove("select--disabled");
          for (let i = 0; i < labels.length; i++) {
            labels[i].addEventListener("click", (evt) => {
              title.textContent = evt.target.textContent;
              title.style.color = "var(--black)";
              e.setAttribute("data-state", "");

              selectContent.forEach(function () {
                content.classList.add("select--disabled");
              });
            });
          }
          document.addEventListener("click", (el) => {
            const withinBoundaries = el.composedPath().includes(e);
            if (!withinBoundaries) {
              if (!content.classList.contains("select--disabled")) {
                content.classList.add("select--disabled")
                e.setAttribute("data-state", "");
              }
            }
          })
        });
      }
    });
  });

  //methods
  const multiselect = document.querySelectorAll(".multiselect");
  const multiselectContent = document.querySelectorAll(".multiselect__content");
  let checkedBoxes;

  multiselect.forEach(function (e) {
    e.addEventListener("click", (elem) => {
      const pth = elem.currentTarget.dataset.path;
      let content = document.querySelector(`[data-target="${pth}"]`);
      let labels = content.getElementsByClassName("multiselect__input");
      let title = e.querySelector('.multiselect__title')

      if ("active" === e.getAttribute("data-state")) {
        e.setAttribute("data-state", "");
        multiselectContent.forEach(function () {
          content.classList.add("select--disabled");
        });
      } else {
        e.setAttribute("data-state", "active");
        multiselectContent.forEach(function () {
          content.classList.remove("select--disabled");

          for (let i = 0; i < labels.length; i++) {
            labels[i].addEventListener("click", (evt) => {
              function getCheckedBoxes() {
                let checkboxes = labels;
                let checkboxesChecked = [];
                for (let i = 0; i < checkboxes.length; i++) {
                  if (checkboxes[i].checked) {
                    checkboxesChecked.push(checkboxes[i]);
                  }
                }
                return checkboxesChecked.length >= 0 ? checkboxesChecked : null;
              }

              checkedBoxes = getCheckedBoxes();
              result = checkedBoxes.length;

              title.textContent = "Методики";

              if (result === 0) {
                title.textContent = "Методики";
              } else {
                title.textContent = "Методики" + " " + "(" + result + ")";
                title.style.color = "var(--black)";
                if (program.classList.contains('programs--active')) {
                  resetBtnActive(resetBtn, resetBtn2)
                }
                if (programChild.classList.contains('programs--active')) {
                  resetBtnActive(resetBtn2, resetBtn)
                }
              }
            });
          }
          document.addEventListener("click", (el) => {
            const withinBoundaries = el.composedPath().includes(e);
            if (!withinBoundaries) {
              if (!content.classList.contains("select--disabled")) {
                content.classList.add("select--disabled")
                e.setAttribute("data-state", "");
              }
            }
          })
        });
      }
    });
  });

  //filters
  let filtersSelect = (checkSelect, className) => {
    cardsNewList = [];
    checkSelect.forEach(function (elem) {
      if (!elem.classList.contains(className)) {
        elem.classList.add("none");
      } else {
        elem.classList.remove("none");
        elem.classList.remove("btn--none");
        if (elem.classList.contains("programs__card")) {
          cardsNewList.push(elem);
        }
      }
    });
  };

  let filtersSelectChild = (checkSelect, className1, className2) => {
    cardsNewList = [];
    checkSelect.forEach(function (elem) {
      if (
        elem.classList.contains(className1) &&
        elem.classList.contains(className2)
      ) {
        elem.classList.remove("none");
        elem.classList.remove("btn--none");
        if (elem.classList.contains("programs__card")) {
          cardsNewList.push(elem);
        }
      } else {
        elem.classList.add("none");
      }
    });
  };

  selectsBig1.forEach(function (element) {
    element.addEventListener("click", function () {
      resetMultiselect(titleMethodsOld);
      resetBtnActive(resetBtn, resetBtn2);
      cls = element.getAttribute("data-filter");
      filtersSelect(selectItems, cls);
      filtersSelect(list1, cls);
      showMore(cardsNewList, btnMore1);
    });
  });

  selectsChild2.forEach(function (e) {
    e.addEventListener("click", function () {
      resetMultiselect(titleMethodsChild);
      resetBtnActive(resetBtn2, resetBtn)
      if (titleYears.textContent === titleYears.getAttribute("data-default") || class1 === undefined) {
        class2 = e.getAttribute("data-filter");
        filtersSelect(selectsChild6, class2);
        filtersSelect(selectsChild4, class2);
        filtersSelect(list2, class2);
        showMore(cardsNewList, btnMore2);
      }
      else {
        class2 = e.getAttribute("data-filter");
        filtersSelect(selectsChild6, class2)
        filtersSelectChild(selectsChild4, class1, class2);
        filtersSelectChild(list2, class1, class2);
        console.log(class1, class2)
        showMore(cardsNewList, btnMore2);
      }
    });
  });

  selectsChild1.forEach(function (e) {
    e.addEventListener("click", function () {
      resetMultiselect(titleMethodsChild);
      resetBtnActive(resetBtn2, resetBtn);
      if (titleDirection.textContent === titleDirection.getAttribute("data-default") || class2 === undefined) {
        class1 = e.getAttribute("data-filter");
        filtersSelect(selectsChild5, class1);
        filtersSelect(selectsChild4, class1);
        filtersSelect(list2, class1);
        console.log(class1, class2)
        showMore(cardsNewList, btnMore2);
      }
      else {
        class1 = e.getAttribute("data-filter");
        filtersSelect(selectsChild5, class1);
        filtersSelectChild(selectsChild4, class1, class2);
        filtersSelectChild(list2, class1, class2);
        showMore(cardsNewList, btnMore2);
      }
    });
  });

  let showCards = (arr) => {
    Array.from(arr).forEach(function (checkBox) {
      let div = document.querySelector(
        "." + checkBox.getAttribute("data-filter")
      );
      if (!checkBox.checked) {
        div.classList.add("none");
      } else {
        div.classList.remove("none");
        div.classList.remove("btn--none");
      }
    });
  };

  Array.from(selectsBig2).forEach(function (checkBox) {
    checkBox.addEventListener("change", function () {
      showCards(selectsBig2);
      btnMore1.style.display = "none";

      if (checkBox.checked) {
        arr.push(checkBox);
      } else {
        for (let i = 0; i < arr.length; i++) {
          if (!arr[i].checked) {
            arr.splice(i, 1);
          }
        }
      }

      if (arr.length === 0) {
        if (cls === undefined) {
          resetFunc(selectSingle, multiselect);
          resetBtn.classList.remove("reset--active");
        } else {
          Array.from(list1).forEach(function (e) {
            e.classList.remove("none");
            filtersSelect(list1, cls);
            resetMultiselect(titleMethodsOld);
          });
        }
      } else {
        resetBtn.classList.remove("none");
      }
    });
  });

  Array.from(selectsChild3).forEach(function (checkBox) {
    checkBox.addEventListener("change", function () {
      if (checkBox.checked) {
        arr.push(checkBox);
      } else {
        for (let i = 0; i < arr.length; i++) {
          if (!arr[i].checked) {
            arr.splice(i, 1);
          }
        }
      }
      showCards(selectsChild3);
      btnMore2.style.display = "none";

      if (arr.length === 0) {
        btnMore2.style.display = "none";
        if (class1 === undefined && class2 === undefined) {
          resetFunc(selectSingle, multiselect);
          resetBtn2.classList.remove("reset--active");
        }

        if (class1 !== undefined && class2 === undefined) {
          Array.from(list2).forEach(function (e) {
            e.classList.remove("none");
          });
          resetMultiselect(titleMethodsChild);
          filtersSelect(list2, class1);
          showMore(cardsNewList, btnMore2);
        }
        if (class1 === undefined && class2 !== undefined) {
          Array.from(list2).forEach(function (e) {
            e.classList.remove("none");
          });
          resetMultiselect(titleMethodsChild);
          filtersSelect(list2, class2);
          showMore(cardsNewList, btnMore2);
        }
        if (class1 !== undefined && class2 !== undefined) {
          Array.from(list2).forEach(function (e) {
            e.classList.remove("none");
          });
          resetMultiselect(titleMethodsChild);
          filtersSelectChild(list2, class1, class2);
          showMore(cardsNewList, btnMore2);
        }
      } else {
        resetBtn2.classList.remove("none");
      }
    });
  });

  function resetFunc(select1, select2) {
    let selects = [];
    selects.push(select1);
    selects.push(select2);
    let cards = document.querySelectorAll(".programs__card");

    for (let i = 0; i < selects.length; i++) {
      for (let j = 0; j < selects[i].length; j++) {
        selects[i][j].setAttribute("data-state", "");
        let titles = selects[i][j].querySelectorAll(".titles");
        let contents = selects[i][j].querySelectorAll(".contents");
        for (let h = 0; h < titles.length; h++) {
          titles[h].style.color = "#7C90A0";
          titles[h].textContent = titles[h].getAttribute("data-default");
          let checkboxes = document.getElementsByName("singleCheck");
          for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
              checkboxes[i].checked = false;
              result = 0;
            }
          }
        }
        for (let i = 0; i < contents.length; i++) {
          contents[i].classList.add("select--disabled");
        }
      }
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("none");
      }

      cards.forEach((e) => {
        e.classList.remove("btn--none");
        e.classList.remove("none");
      });
      showMore(firstDownld, btnMore1);
      showMore(firstDownldChild, btnMore2);

      class2 = undefined;
      class1 = undefined;
      cls = undefined;

      for (let i = 0; i < selectsChild5.length; i++) {
        selectsChild5[0].style.display = "none";
        selectsChild5[i].classList.remove("none");
      }

      for (let i = 0; i < selectsChild4.length; i++) {
        selectsChild4[i].classList.remove("none");
      }

      for (let i = 0; i < selectsChild6.length; i++) {
        selectsChild6[i].classList.remove("none");
      }
    }
  }

  function showMore(arr, btn) {
    let step,
      item = 0;
    if (arr.length > 6) {
      if (window.innerWidth < 661) {
        step = 3;
      } else {
        step = 6;
      }

      arr.slice(step).forEach((e) => e.classList.add("btn--none"));
      item += step;

      btn.style.display = "block";

      btn.addEventListener("click", function (e) {
        let tmp = arr.slice(item, item + step);
        tmp.forEach((e) => e.classList.remove("btn--none"));
        item += step;
        if (item >= arr.length) {
          btn.style.display = "none";
        }
      });

      resetBtn.addEventListener("click", () => {
        arr.slice(step).forEach((e) => e.classList.add("btn--none"));
        item = 0;
      });

      resetBtn2.addEventListener("click", () => {
        arr.slice(step).forEach((e) => e.classList.add("btn--none"));
        item = -step;
      });
    } else {
      btn.style.display = "none";
    }
  }

  function resetMultiselect(title) {
    title.forEach((elem) => {
      elem.textContent = elem.getAttribute("data-default");
      elem.style.color = "rgb(124, 144, 160)"

      let checkboxes = document.getElementsByName("singleCheck");
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          checkboxes[i].checked = false;
          result = 0;
        }
      }
    })
  }

  function resetBtnActive(btn, btn2) {
    btn.classList.add("reset--active");
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      resetFunc(multiselect, selectSingle);
      btn.classList.remove("reset--active");
      if (btn2.classList.contains('reset--active')) {
        btn2.classList.remove("reset--active");
      } else {
        return
      }
      if (btn2 === undefined || btn === undefined) {
        return
      }
    });
  }
});
