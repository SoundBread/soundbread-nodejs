function init()
{
  var preload;

  var socket = io(clientSettings.wsuri);

  if (!createjs.Sound.initializeDefaultPlugins()) {
    document.getElementById("error").style.display = "block";
    document.getElementById("content").style.display = "none";
    return;
  }

  var assetsPath = "./audio/";

  var sounds = [
    {src: "crickets.mp3", id: 'crickets'},
    {src: "downer.mp3", id: 'downer'},
    {src: "rimshot.mp3", id: 'rimshot'},
    {src: "gaaay.mp3", id: 'gaaay'},
    {src: "shame.mp3", id: 'shame'}
  ];

  createjs.Sound.addEventListener("fileload", createjs.proxy(soundLoaded, this));
  createjs.Sound.registerSounds(sounds, assetsPath);

  $(".soundItem").click(function() {
    var self = this;
    var id = $(self).attr('id');
    console.log("< " + id);

    socket.emit('play',id);
  });

  // Simple keybinding
  $(document).keydown(function(e){
    keyCode = '' + e.which;
    $('.soundItem[data-keycode="' + keyCode + '"]').click();
  });

  socket.on("clients", function(data){
    console.log("> " + data);
    $('#clients').text(data);
  });

  socket.on("play", function(data){
    console.log("> " + data);
    play(data);
  })

}

function soundLoaded(event) {
  // Sound is loaded, show button
  var div = document.getElementById(event.id);
  // do stuff when loaded
}

function stop() {
  if (preload != null) {
    preload.close();
  }
  createjs.Sound.stop();
}

function play(id) {
  //Play the sound: play (src, interrupt, delay, offset, loop, volume, pan)
  console.log('play: ' + id);
  var instance = createjs.Sound.play(id);
  if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
    console.log('Play failed');
    return;
  }

  $('#' + id).addClass('active');
  instance.addEventListener("complete", function (instance) {
    $('#' + id).removeClass("active");
  });
}
