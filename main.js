// Create Add Active Function
let addActive = function (liArr, liAdd) {
  liArr.forEach((el) => {
    el.classList.remove("active");
  });
  liAdd.classList.add("active");
};
// Create The submitButton Chick Function
let chickForSubmitButton = function (submitButton) {
  submitButton.addEventListener("click", function () {
    let card = document.querySelector(".flip-card-inner");
    card.style.transform = "rotateY(180deg)";
  });
}

let ul = document.querySelector(".rating > ul");
let li = [...ul.children];
let sumbit = document.querySelector(".rating > button");
let span = document.querySelector(".thank > .rate > p > span");
// [1] Get The Value of The Clicked button And Add active Class To It
li.forEach((el) => {
  el.addEventListener("click", function () {
    span.innerHTML = el.innerHTML;
    addActive(li, el);
    chickForSubmitButton(sumbit);
  });
});

// [2] Check If The Sumbit Botton Is Clicked Or Not
