var expression = prompt("Calculator\n\nYou can add, subtract, multiply or divide. Insert the first member of the expression followed by a space, then the second member and so on, and the desired operation on the last position.\nExample: 5 + 5 + 3 becomes 5 5 3 +");

var members   = expression.split(" ");
var operation = members[members.length - 1];

members.splice(-1, 1);

var result = parseInt(members[0]);

switch(operation){

  case '+':
    members.splice(0, 1);
    add(members);
    alert("Result = " + result);
    break;
  case '-':
    members.splice(0, 1);
    subtract(members);
    alert("Result = " + result);
    break;
  case '*':
    members.splice(0, 1);
    multiply(members);
    alert("Result = " + result);
    break;
  case '/':
    members.splice(0, 1);
    divide(members);
    alert("Result = " + result);
    break;
  default:
    alert("Wrong input");
    break;
}

function add(members){

  members.forEach(function(member, index){
    result += parseInt(member);
  });

}

function subtract(members){

  members.forEach(function(member, index){
    result -= parseInt(member);
  });

}

function multiply(members){

  members.forEach(function(member, index){
    result *= parseInt(member);
  });

}

function divide(members){

  members.forEach(function(member, index){
    result /= parseInt(member);
  });

}
