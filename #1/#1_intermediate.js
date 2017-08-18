var events = [];

var promptMainMenu = function(){

  var mText = 'Welcome!\n\n';
  mText    += 'What do you want to do?\n';
  mText    += '1 - List events\n';
  mText    += '2 - Add event\n';
  mText    += '3 - Edit event\n';
  mText    += '4 - Delete event';

  handleMenu( prompt(mText) );

}

var handleMenu = function(option){

  switch(option){

    case '1':
      listEvents();
    break;

    case '2':
      addEvent();
    break;

    case '3':
      editEvent();
    break;

    case '4':
      deleteEvent();
    break;

    default:
      promptMainMenu();
    break;

  }

}

var listEvents = function(){

  if(events.length === 0){

    handleMenu( prompt("No events available! \n\n 9 - Back") );

  }else{

    var promptText = 'Events:\n\n';
    events.forEach(function(ev, index){
      promptText += '-'+ev.name+' ('+ev.date+')\n';
    });

    promptText += '\n\n9 - voltar';

    handleMenu( prompt(promptText) );

  }

}

var addEvent = function(){

  var event = {};

  event.name = prompt("Insert the event name");
  event.date = prompt("Insert the event date");

  events.push(event);
  handleMenu ( prompt("Event successfully added \n\n 9 - Back"));

}

var editEvent = function(){

  if(events.length === 0){

    handleMenu( prompt("No events available! \n\n 9 - Back") );

  }else{

    var promptText = 'Choose event to edit:\n\n';
    events.forEach(function(ev, index){
      promptText += index+' - '+ev.name+' ('+ev.date+')\n';
    });

    promptText += '\n\n9 - voltar';

    var eventId = prompt(promptText);

    if(eventId == '9'){
        handleMenu(eventId);
    }else{
      events[eventId].name = prompt("Insert the event name");
      events[eventId].date = prompt("Inser the event date");

      handleMenu( prompt("Event successfully edited!\n\n 9 - Back"));
    }


  }

}

var deleteEvent = function(){

  if(events.length === 0){

    handleMenu( prompt("No events available! \n\n 9 - Back") );

  }else{

    var promptText = 'Choose event to delete:\n\n';
    events.forEach(function(ev, index){
      promptText += index+' - '+ev.name+' ('+ev.date+')\n';
    });

    promptText += '\n\n9 - voltar';

    var eventId = prompt(promptText);

    if(eventId == '9'){
        handleMenu(eventId);
    }else{
      events.splice(eventId, 1);
      handleMenu( prompt("Event successfully deleted!\n\n 9 - Back"));
    }


  }

}


promptMainMenu();
