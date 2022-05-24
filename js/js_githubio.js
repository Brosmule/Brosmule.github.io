// JavaScript Document

var clicks = 0;
function onClick() {
  if (clicks === 30) {
    document.getElementById("counter").innerHTML = "Gongratulations you won";
  }

  clicks += 1;
  document.getElementById("counter").innerHTML =
    "You have clicked me " + clicks + " times!";
}
