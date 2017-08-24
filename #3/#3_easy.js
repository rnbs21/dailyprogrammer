var encryptOffset = 1;

function encrypt(message){

  var encryptedMessage = '';

  for(var i = 0; i < message.length; i++){

    if(!message[i].trim()){ //blank space
      encryptedMessage += ' ';
    }else{
      var pos = message[i].charCodeAt(0) - 97; //Letter position 1 - 23
      if(pos >= 25) pos = pos - 26;
      var charEnc = String.fromCharCode(97 + pos + encryptOffset);

      encryptedMessage += charEnc;
    }

  }


  return encryptedMessage;

}

function decrypt(message){

  var decryptedMessage = '';

  for(var i = 0; i < message.length; i++){

    if(!message[i].trim()){ //blank space
      decryptedMessage += ' ';
    }else{
      var pos = message[i].charCodeAt(0) - 97; //Letter position 0 - 25
      if(pos <= 0) pos = pos + 26;
      var charEnc = String.fromCharCode(97 + pos - encryptOffset);

      decryptedMessage += charEnc;
    }



  }


    return decryptedMessage;

}

var message = prompt("Enter message to encrypt:");
alert( encrypt(message) );
