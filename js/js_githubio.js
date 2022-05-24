// JavaScript Document

let randomNumber = Math.floor(Math.random() * 10 + 1);
var clicks = 0;
function onClick() {
  if (clicks === randomNumber) {
    document.getElementById("counter").innerHTML = "Gongratulations you won";
  } else {
    clicks += 1;
    document.getElementById("counter").innerHTML =
      "You have clicked me " + clicks + " times!";
  }
}
