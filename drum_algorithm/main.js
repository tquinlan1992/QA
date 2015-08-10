 var drumsplaying = false;
var socket_count = 0;
var socket_ids = [];
var d = new Date();

  module.exports = function(io){
  
   io.on('connection', function(socket){
   

   
   socket_ids["socket" + socket_count] = socket.id;
   if (!drumsplaying) {
    play_drums();
   }
   socket_count++;
   
   
  socket.on('chat message', function(msg){
    console.log(socket.id);
    io.emit('chat message', msg);
  });
  
  
// loop count only up to 4 to track bass, piano, and horns  
var loop_count = 1;
var horns_count = 1;
function loopcount() {
  loop_count++;
  if (loop_count > 4) {
    loop_count = 1;
  }
}

var device_instrum
  
function play_drums() {
  console.log(drumsplaying);
  drumsplaying = true;
  

  function drum_loop() {
    
    io.emit('play bass'+loop_count, d.getTime()+1);
    io.emit('play first_piano', d.getTime()+1);
    io.emit('play second_piano', d.getTime()+1);
    if (loop_count == 1 || loop_count == 3) {
      io.emit('play horns1', d.getTime()+1);
    }
    if (loop_count == 2 || loop_count == 4) {
      io.emit('play horns2', d.getTime()+1);
    }
    io.emit('play kick', d.getTime()+1);
    io.emit('play hi_hat', d.getTime()+1);
    loopcount();
    
    setInterval(function () {io.emit('play hi_hat', "");clearInterval(this);}, 339);
    setInterval(function () {io.emit('play snare', "");clearInterval(this);}, 687);
    setInterval(function () {io.emit('play hi_hat', "");clearInterval(this);}, 687);
    setInterval(function () {io.emit('play hi_hat', "");clearInterval(this);}, 1028);
    setInterval(function () {io.emit('play kick', "");clearInterval(this);}, 1205);
    setInterval(function () {io.emit('play kick', "");clearInterval(this);}, 1375);
    setInterval(function () {io.emit('play hi_hat', "");clearInterval(this);}, 1375);
    setInterval(function () {io.emit('play kick', "");clearInterval(this);}, 1723);
    setInterval(function () {io.emit('play hi_hat', "");clearInterval(this);}, 1723);
    setInterval(function () {io.emit('play open_hat', "");clearInterval(this);}, 1723);
    setInterval(function () {io.emit('play snare', "");clearInterval(this);}, 2062);
    setInterval(function () {io.emit('play hi_hat', "");clearInterval(this);}, 2062);
    setInterval(function () {io.emit('play hi_hat', "");clearInterval(this);}, 2410);
    setInterval(function () {drum_loop();clearInterval(this);}, 2750);
  };
  drum_loop();
}


});
  };