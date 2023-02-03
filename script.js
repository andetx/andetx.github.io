$("#barlow-font").click(function () {
  $("#font-change").css("font-family", "Barlow");
});

$("#jost-font").click(function () {
  $("#font-change").css("font-family", "Jost");
});

$("#Baskerville-font").click(function () {
  $("#font-change").css("font-family", "Libre Baskerville");
});

$("#lobster-font").click(function () {
  $("#font-change").css("font-family", "lobster");
});

$("#Rajdhani-font").click(function () {
  $("#font-change").css("font-family", "Rajdhani");
});

$("#Rubik-font").click(function () {
  $("#font-change").css("font-family", "Rubik");
});

$("#blue-font").click(function () {
  $("#font-change").css("color", "blue");
});

$("#red-font").click(function () {
  $("#font-change").css("color", "red");
});

$("#blue-back").click(function () {
  $("#font-change").css("background-color", "blue");
});

$("#red-back").click(function () {
  $("#font-change").css("background-color", "red");
});

function othername() {
  var houseno = document.getElementById("homenumber").value;
  // var check = document.getElementById("font-change").style.backgroundColor;
  // var check2 = document.getElementById("font-change").style.color;
  //  if (check="red") {
  //  var houseno = "Good morning";
  document.getElementById("font-change").innerHTML = houseno;
}
