let box = document.querySelector(".box").style;
let topLeft = document.querySelector(".top-left");
let topRight = document.querySelector(".top-right");
let bottomLeft = document.querySelector(".bottom-left");
let bottomRight = document.querySelector(".bottom-right");
let btnGenerator = document.querySelector(".btn-generator");
let btnClear = document
  .querySelector(".btn-clear")
  .addEventListener("click", (e) => {
    e.preventDefault();
  });

topLeft.addEventListener("change", function (e) {
  borderLeft();
  e.target.value == "" && clearField();
});

topRight.addEventListener("change", function (e) {
  borderRight();
  e.target.value == "" && clearField();
});

bottomRight.addEventListener("change", function (e) {
  borderBottomRight();
  e.target.value == "" && clearField();
});

bottomLeft.addEventListener("change", function (e) {
  borderBottomLeft();
  e.target.value == "" && clearField();
});

//function to change the border-radius Top-left
function borderLeft() {
  box.borderTopLeftRadius = topLeft.value + "px";
}

//function to change the border-radius Top-Right
function borderRight() {
  box.borderTopRightRadius = topRight.value + "px";
}

//function to change the border-radius Bottom-Right
function borderBottomRight() {
  box.borderBottomRightRadius = bottomRight.value + "px";
}

//function to change the border-radius Bottom-left
function borderBottomLeft() {
  box.borderBottomLeftRadius = bottomLeft.value + "px";
}

//function to clear the form
function clearField() {
  topLeft.value = "";
  topRight.value = "";
  bottomLeft.value = "";
  bottomRight.value = "";
  box.borderTopLeftRadius = "0px";
  box.borderTopRightRadius = "0px";
  box.borderBottomRightRadius = "0px";
  box.borderBottomLeftRadius = "0px";
}
