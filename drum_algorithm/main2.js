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
  
var bass_count = 1;
function basscount() {
  bass_count++;
  if (bass_count > 4) {
    bass_count = 1;
  }
}
  
function play_drums() {
  console.log(drumsplaying);
  drumsplaying = true;
  

  function drum_loop() {
    io.emit('play kick', d.getMilliseconds()+200);

    setInterval(function () {drum_loop();clearInterval(this);}, d.getMilliseconds()+1 + 2750);
  };
  drum_loop();
}


});
  };