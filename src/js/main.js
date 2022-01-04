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
  border("borderTopLeftRadius", topLeft.value);
  e.target.value == "" && clearField();
});

topRight.addEventListener("change", function (e) {
  border("borderTopRightRadius", topRight.value);
  e.target.value == "" && clearField();
});

bottomRight.addEventListener("change", function (e) {
  border("borderBottomRightRadius", bottomRight.value);
  e.target.value == "" && clearField();
});

bottomLeft.addEventListener("change", function (e) {
  border("borderBottomLeftRadius", bottomLeft.value);
  e.target.value == "" && clearField();
});

btnGenerator.addEventListener("click", (e) => {
  e.preventDefault();
});

function border(side, size) {
  box[side] = size + "px";
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
