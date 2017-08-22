//TODO: Save to a file

const hInCentsec = 360000,
      mInCentsec = 6000,
      sInCentsec = 100;

var stopWatch = {

  centSec     : 0,
  lapTime         : 0,
  interval    : null,
  mainDiv     : document.createElement('div'),
  display     : document.createElement('p'),
  startButton : document.createElement('button'),
  stopButton  : document.createElement('button'),
  resetButton : document.createElement('button'),
  lapButton   : document.createElement('button'),

  init: function(){

    this.display.innerHTML = '00:00:00';

    this.setStartButton();
    this.setStopButton();
    this.setResetButton();
    this.setLapButton();

    this.mainDiv.appendChild(this.display);
    this.mainDiv.appendChild(this.startButton);
    this.mainDiv.appendChild(this.stopButton);
    this.mainDiv.appendChild(this.resetButton);
    this.mainDiv.appendChild(this.lapButton);

    document.body.appendChild(this.mainDiv);

  },

  setStartButton: function(){

    var self = this;

    this.startButton.textContent = 'Start';
    this.startButton.onclick = function(){
      if(!self.interval){
        self.start();
      }

    }

  },

  setStopButton: function(){

    var self = this;

    this.stopButton.textContent = 'Stop';
    this.stopButton.onclick = function(){
      self.stop();
    }

  },

  setResetButton: function(){

    var self = this;

    this.resetButton.textContent = 'Reset';
    this.resetButton.onclick = function(){
      self.reset();
    }
  },

  lap: function(){

    var seconds = Math.floor(this.lapTime / sInCentsec);
    var centSec = this.lapTime % sInCentsec;

    if(seconds < 10){
      seconds = '0'+seconds;
    }

    if(centSec < 10){
      centSec = '0'+centSec;

    }

    var lapEl = document.createElement('p');
    this.lapTime = 0;
    lapEl.innerHTML = seconds+':'+centSec;
    this.mainDiv.appendChild(lapEl);

  },

  setLapButton: function(){
    var self = this;

    this.lapButton.textContent = 'Lap';
    this.lapButton.onclick = function(){
      self.lap();
    }
  },

  start: function(){

    var self = this;

    this.interval = setInterval(function(){
      self.centSec += 1;
      self.lapTime += 1;
      self.updateDisplay();

    }, 10);

  },

  stop: function(){

    clearInterval(this.interval);
    this.interval = null;

  },

  reset: function(){
    this.centSec = 0;
    this.display.innerHTML = '00:00:00';
  },



  updateDisplay: function(){

    var seconds = Math.floor(this.centSec / sInCentsec);
    var centSec = this.centSec % sInCentsec;

    if(seconds < 10){
      seconds = '0'+seconds;
    }

    if(centSec < 10){
      centSec = '0'+centSec;

    }


    this.display.innerHTML = seconds+':'+centSec;
  }

}



stopWatch.init();
