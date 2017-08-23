var username = prompt("What's your name?");

var options = "L - Go left \nR- Go Right";

var chosenOption = prompt("Hello, "+username+". Which way do you want to go?\n\n"+options);

switch(chosenOption){

  case 'L':
    alert("Unfortunately, you died.");
    break;
  case 'R':
    alert("You found everything you ever wanted! Hurray!");
    break;
  default:
    alert("I didn't said you could do that, did i? You died ;).");
    break;

}
