document.addEventListener("DOMContentLoaded", function () {
  const selectsBig1 = document.querySelectorAll(".selects-1 .select__input");
  const selectItems = document.querySelectorAll(
    ".selects-1 .multiselect__item"
  );
  const selectsBig2 = document.querySelectorAll(
    ".selects-1 .multiselect__input"
  );
  const list1 = document.querySelectorAll("#result .filtered");

  const selectsChild1 = document.querySelectorAll(".selects-2 .select__input");
  const selectsChild2 = document.querySelectorAll(".selects-3 .select__input");
  const selectsChild5 = document.querySelectorAll(".selects-3 .select__label");
  const selectsChild3 = document.querySelectorAll(
    ".selects-2 .multiselect__input"
  );
  const selectsChild4 = document.querySelectorAll(
    ".selects-2 .multiselect__item"
  );
  const list2 = document.querySelectorAll("#result-2 .filtered");
  let btnMore1 = document.querySelector(".more__btn");
  let btnMore2 = document.querySelector(".more__btn-child");
  let cardsNewList = [];

  let program = document.querySelector(".program-1");
  let programChild = document.querySelector(".program-2");
  let resetBtn = document.querySelector(".reset");
  let resetBtn2 = document.querySelector(".reset-2");
  const selectChild = document.querySelector("#singleSelect18");
  const items = document.querySelectorAll(".multiselect__item");

  let firstDownld = Array.from(
    document.querySelectorAll("#result .programs__card")
  );

  showMore(firstDownld, btnMore1);

  let firstDownldChild = Array.from(
    document.querySelectorAll("#result-2 .programs__card")
  );

  showMore(firstDownldChild, btnMore2);

  let result = 0;
  //selects
  const selectSingle = document.querySelectorAll(".select");
  const selectContent = document.querySelectorAll(".select__content");
  let select0;

  selectSingle.forEach(function (e) {
    select0 = e.querySelector(".select0");
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

              select0.removeAttribute("checked");
              let arr = [];
              resetFunc(arr, multiselect);
            });
          }
        });
      }

      if (program.classList.contains("programs--active")) {
        if (select0.hasAttribute("checked") === false && result > 0) {
          resetBtn.classList.add("reset--active");

          resetBtn.addEventListener("click", function (e) {
            e.preventDefault();
            resetFunc(selectSingle, multiselect);
            resetBtn.classList.remove("reset--active");
          });
        }
      } else {
        result = 0;
      }

      if (programChild.classList.contains("programs--active")) {
        if (selectChild.hasAttribute("checked") === false && result > 0) {
          resetBtn2.classList.add("reset--active");

          resetBtn2.addEventListener("click", function (e) {
            e.preventDefault();
            resetFunc(selectSingle, multiselect);
            resetBtn2.classList.remove("reset--active");
          });
        }
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
      let title = e.querySelector(".multiselect__title");

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
              }
            });
          }
        });
      }
      if (program.classList.contains("programs--active")) {
        if (select0.hasAttribute("checked") === false && result > 0) {
          resetBtn.classList.add("reset--active");
          resetBtn.addEventListener("click", function (e) {
            e.preventDefault();
            resetFunc(multiselect, selectSingle);
            resetBtn.classList.remove("reset--active");
          });
        }
      }

      if (programChild.classList.contains("programs--active")) {
        if (selectChild.hasAttribute("checked") === false && result > 0) {
          resetBtn2.classList.add("reset--active");
          resetBtn2.addEventListener("click", function (e) {
            e.preventDefault();
            resetFunc(multiselect, selectSingle);
            resetBtn2.classList.remove("reset--active");
          });
        }
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

      for (let i = 0; i < selectsChild5.length; i++) {
        selectsChild5[0].style.display = "none";
        selectsChild5[i].classList.remove("none");
      }

      for (let i = 0; i < selectsChild4.length; i++) {
        selectsChild4[i].classList.remove("none");
      }
    }
  }

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
      return cardsNewList;
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
      return cardsNewList;
    });
  };
  let arr = [];
  let clss;
  let cls;

  selectsBig1.forEach(function (element) {
    element.addEventListener("click", function () {
      cardsNewList = [];
      clss = element.getAttribute("data-filter");
      filtersSelect(selectItems, clss);
      filtersSelect(list1, clss);
      showMore(cardsNewList, btnMore1);
      return clss;
    });
  });

  selectsChild1.forEach(function (e) {
    e.addEventListener("click", function () {
      cardsNewList = [];
      clss = e.getAttribute("data-filter");
      let years = document.querySelector(".select-years");
      let titleSelect = document.querySelector(".title-child");
      years.addEventListener("click", function () {
        titleSelect.textContent = titleSelect.getAttribute("data-default");
        titleSelect.style.color = "#7C90A0";
      });
      filtersSelect(selectsChild5, clss);
      showMore(cardsNewList, btnMore2);
      filtersSelect(selectsChild4, clss);
      showMore(cardsNewList, btnMore2);
      filtersSelect(list2, clss);
      showMore(cardsNewList, btnMore2);
      selectsChild2.forEach(function (elem) {
        elem.addEventListener("click", function () {
          cls = elem.getAttribute("data-filter");
          filtersSelectChild(selectsChild4, clss, cls);
          showMore(cardsNewList, btnMore2);
          filtersSelectChild(list2, clss, cls);
          showMore(cardsNewList, btnMore2);
        });
      });
      return clss;
    });
  });

  selectsChild2.forEach(function (e) {
    e.addEventListener("click", function () {
      cardsNewList = [];
      cls = e.getAttribute("data-filter");
      filtersSelect(selectsChild4, cls);
      filtersSelect(list2, cls);
      showMore(cardsNewList, btnMore2);
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
        if (clss === undefined) {
          resetFunc(selectSingle, multiselect);
        } else {
          cardsNewList = [];
          Array.from(list1).forEach(function (e) {
            e.classList.remove("none");
            resetBtn.classList.add("none");
          });
          filtersSelect(list1, clss);
          showMore(cardsNewList, btnMore1);
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
            console.log(arr.length);
          }
        }
      }
      showCards(selectsChild3);
      btnMore2.style.display = "none";

      if (arr.length === 0) {
        btnMore2.style.display = "none";
        if (clss === undefined && cls === undefined) {
          resetFunc(selectSingle, multiselect);
        }

        if (clss !== undefined && cls === undefined) {
          console.log(clss, "+");
          Array.from(list2).forEach(function (e) {
            e.classList.remove("none");
            resetBtn.classList.add("none");
          });
          filtersSelect(list2, clss);
          showMore(cardsNewList, btnMore2);
        }
        if (clss === undefined && cls !== undefined) {
          console.log("-");
          Array.from(list2).forEach(function (e) {
            e.classList.remove("none");
            resetBtn.classList.add("none");
          });
          filtersSelect(list2, cls);
          showMore(cardsNewList, btnMore2);
        }
        if (clss !== undefined && cls !== undefined) {
          console.log("~");
          Array.from(list2).forEach(function (e) {
            e.classList.remove("none");
            resetBtn.classList.add("none");
          });
          filtersSelectChild(list2, clss, cls);
          showMore(cardsNewList, btnMore2);
        }
      } else {
        resetBtn2.classList.remove("none");
      }
    });
  });

  //more

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
});
