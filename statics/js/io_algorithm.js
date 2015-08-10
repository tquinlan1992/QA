      var socket = io();
      var kick_play = false;
      var snare_play = false;
      var hi_hat_play = false;
      var open_hat_play = false;
      var bass_play = false;
      var first_piano_play = false;
      var second_piano_play = false;
      var horns_play = false;
      
      $('form').submit(function(){
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
      });
      socket.on('chat message', function(msg){
        $('#messages').append($('<li>').text(msg));
      });
      socket.on('play kick', function(msg){
        if (kick_play) {

          var kick = document.getElementById("kick");
          kick.pause();
          kick.currentTime = 0;
          kick.play();
          var button = document.getElementById("kick_button");
          
          
        };
        
      });
      socket.on('play snare', function(msg){
        
        if (snare_play) {

          var snare = document.getElementById("snare");
          snare.pause();
          snare.currentTime = 0;
          snare.play();
        }
      });
      socket.on('play hi_hat', function(msg){
        if (hi_hat_play) {
            
          
          var hi_hat = document.getElementById("hi_hat");
          hi_hat.pause();
          hi_hat.currentTime = 0;
          hi_hat.play();
        }
      });
      socket.on('play open_hat', function(msg){
        if (open_hat_play) {
          
        
        var open_hat = document.getElementById("open_hat");
        open_hat.pause();
        open_hat.currentTime = 0;
        open_hat.play();
        }
      });
      
      socket.on('play bass1', function(msg){
        if (bass_play) {
          
        
          var bass1 = document.getElementById("bass1");
          bass1.pause();
          bass1.currentTime = 0;
          bass1.play();
        }
      });
      socket.on('play bass2', function(msg){
        if (bass_play) {
          var bass2 = document.getElementById("bass2");
          bass2.pause();
          bass2.currentTime = 0;
          bass2.play();
        }
      });
      
      socket.on('play bass3', function(msg){
        if (bass_play) {
          var bass3 = document.getElementById("bass3");
          bass3.pause();
          bass3.currentTime = 0;
          bass3.play();
        }
      });
      
      socket.on('play bass4', function(msg){
        if (bass_play) {
          var bass4 = document.getElementById("bass4");
          bass4.pause();
          bass4.currentTime = 0;
          bass4.play();
        }
      });
      
      
      socket.on('play first_piano', function(msg){
        if (first_piano_play) {
          
        
          var first_piano = document.getElementById("first_piano");
          first_piano.pause();
          first_piano.currentTime = 0;
          first_piano.play();
        }
      });
     
      socket.on('play second_piano', function(msg){
        if (second_piano_play) {
          
        
          var second_piano = document.getElementById("second_piano");
          second_piano.pause();
          second_piano.currentTime = 0;
          second_piano.play();
        }
      });
      
      socket.on('play horns1', function(msg){
        if (horns_play) {

          var horns = document.getElementById("horns1");
          horns1.pause();
          horns1.currentTime = 0;
          horns1.play();
        }
      });
      
      socket.on('play horns2', function(msg){
        if (horns_play) {

          var horns2 = document.getElementById("horns2");
          horns2.pause();
          horns2.currentTime = 0;
          horns2.play();
        }
      });
      

      
     
     
     
     
     
     
  // Click Functions    
  document.getElementById("kick_button").addEventListener("click", function () {
    
    if (kick_play) {
      
      kick_play = false;
      
    } else {
      var kick = document.getElementById("kick");
          kick.muted = true;
          kick.play();
          kick.pause();
          kick.muted = false;
          kick.currentTime = 0;
          
    kick_play = true;
    }
    });
  
  document.getElementById("snare_button").addEventListener("click", function () {
    if (snare_play) {
      snare_play = false;
    }
    else {
      var snare = document.getElementById("snare");
      snare.muted = true;
      snare.play();
      snare.pause();
      snare.muted = false;
      snare.currentTime = 0;
    snare_play = true;
    }
    });
  
  document.getElementById("hi_hat_button").addEventListener("click", function () {
    if (hi_hat_play) {
      hi_hat.muted = true;
      hi_hat.play();
      hi_hat.pause();
      hi_hat.muted = false;
      hi_hat.currentTime = 0;
      hi_hat_play = false;
    }
    else {
    hi_hat_play = true;
  }
    });
  
  document.getElementById("open_hat_button").addEventListener("click", function () {
    if (open_hat_play) {
      open_hat.muted = true;
      open_hat.play();
      open_hat.pause();
      open_hat.muted = false;
      open_hat.currentTime = 0;
      open_hat_play = false;
    } else {
    
    open_hat_play = true;
    }
    });
  
  document.getElementById("bass_button").addEventListener("click", function () {
    if (bass_play) {
      bass.muted = true;
      bass.play();
      bass.pause();
      bass.muted = false;
      bass.currentTime = 0;
      bass_play = false;
    } else {
    bass_play = true;
    }
    });
  
  document.getElementById("first_piano_button").addEventListener("click", function () {
    if (first_piano_play) {
      first_piano_play = false;
    } else {
      first_piano.muted = true;
      first_piano.play();
      first_piano.pause();
      first_piano.muted = false;
      first_piano.currentTime = 0;
    first_piano_play = true;
    }
    });
  
  document.getElementById("second_piano_button").addEventListener("click", function () {
    if (second_piano_play) {
      second_piano.muted = true;
      second_piano.play();
      second_piano.pause();
      second_piano.muted = false;
      second_piano.currentTime = 0;
      second_piano_play = false;
    } else {
    second_piano_play = true;
    }
    });
  
  document.getElementById("horns_button").addEventListener("click", function () {
    if (horns_play) {
      horns.muted = true;
      horns.play();
      horns.pause();
      horns.muted = false;
      horns.currentTime = 0;
      horns_play = false;
    } else {
    horns_play = true;
    }
    });
      
      
    