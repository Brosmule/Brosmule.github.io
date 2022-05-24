// JavaScript Document

var clicks = 0;
function onClick() {
  if (clicks === 29) {
    document.getElementById("counter").innerHTML = "Gongratulations you won";
  } else {
    clicks += 1;
    document.getElementById("counter").innerHTML =
      "You have clicked me " + clicks + " times!";
  }
}
