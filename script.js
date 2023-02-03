document.querySelector("#barlow-font").addEventListener("click", function () {
  document.querySelector("#font-change").style.fontFamily = "Barlow";
});

document.querySelector("#jost-font").addEventListener("click", function () {
  document.querySelector("#font-change").style.fontFamily = "Jost";
});

document.querySelector("#Baskerville-font").addEventListener("click", function () {
  document.querySelector("#font-change").style.fontFamily = "Libre Baskerville";
});

document.querySelector("#lobster-font").addEventListener("click", function () {
  document.querySelector("#font-change").style.fontFamily = "lobster";
});

document.querySelector("#Rajdhani-font").addEventListener("click", function () {
  document.querySelector("#font-change").style.fontFamily = "Rajdhani";
});

document.querySelector("#Rubik-font").addEventListener("click", function () {
  document.querySelector("#font-change").style.fontFamily = "Rubik";
});

document.querySelector("#blue-font").addEventListener("click", function () {
  document.querySelector("#font-change").style.color = "blue";
});

document.querySelector("#red-font").addEventListener("click", function () {
  document.querySelector("#font-change").style.color = "red";
});

document.querySelector("#blue-back").addEventListener("click", function () {
  document.querySelector("#font-change").style.backgroundColor = "blue";
});

document.querySelector("#red-back").addEventListener("click", function () {
  document.querySelector("#font-change").style.backgroundColor = "red";
});

function othername() {
  var houseno = document.getElementById("homenumber").value;
  document.getElementById("font-change").innerHTML = houseno;
}