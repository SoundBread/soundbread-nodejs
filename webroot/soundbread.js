function init()
{
  var preload;

  var websocket = initWebsocket();

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

    var msg = {command: 'play', id: id};
    websocket.send(JSON.stringify(msg));
  });

  // Simple keybinding
  $(document).keydown(function(e){
    keyCode = '' + e.which;
    $('.soundItem[data-keycode="' + keyCode + '"]').click();
  });
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

function initWebsocket() {
  if(!("WebSocket" in window)) {
    alert("WebSocket not supported!");
    return;
  }

  var ws = new WebSocket(clientSettings.wsuri);

  ws.onopen = function() {
    console.log("WebSocket connected");
  }

  ws.onmessage = function(evt) {
    console.log("> " + evt.data);
    var msg = JSON.parse(evt.data);
    if(msg.command == 'play') {
      play(msg.id);
    } else if(msg.command == 'clients') {
      console.log(msg.count);
    }
  }

  ws.onclose = function() {
    console.log("WebSocket closed");
  }

  return ws;
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
