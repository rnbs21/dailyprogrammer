var currentNumber = 50;
var range = [1, 100];

var pickNumber = function(){
  var result = prompt("Is your number (h)igher, (l)ower or (e)qual "+ currentNumber + ' ?');
  console.log(result);

  if(result != 'e'){

    switch(result){
      case 'h':
        range[0] = currentNumber + 1;
        currentNumber = Math.floor(Math.random() * ( range[1] - range[0] ) )  + range[0];
      break;
      case 'l':
        range[1] = currentNumber - 1;
        currentNumber = Math.floor(Math.random() * ( range[1] - range[0] ) ) + range[0];
      break;

    }

    pickNumber();

  }else{
    alert(currentNumber + " was a nice pick! =D");
  }

}

var init = function(){
  alert("Think of a number between 1 and 100 and i will guess it. Ready? \n\n ");
  pickNumber();
}

init();
