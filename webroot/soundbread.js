function soundLoaded(event) {
  // Sound is loaded, show button
  var div = document.getElementById(event.id);
  // do stuff when loaded
}

function stop() {
  if (preload !== null) {
    preload.close();
  }
  createjs.Sound.stop();
}

function play(id) {
  //Play the sound: play (src, interrupt, delay, offset, loop, volume, pan)
  console.log('play: ' + id);
  var instance = createjs.Sound.play(id);
  if (instance === null || instance.playState === createjs.Sound.PLAY_FAILED) {
    console.log('Play failed');
    return;
  }

  $('#' + id).addClass('active');
  instance.addEventListener("complete", function (instance) {
    $('#' + id).removeClass("active");
  });
}

function init()
{
  var preload;
  var client_version;

  var keycodes = $("1234567890QWERTYUIOPASDFGHJKLZXCVBNM".split('')).map(function(i, c) { return c.charCodeAt(0); }).get();

  var maxcredits = 5;
  $('#credits').attr('aria-valuemax', maxcredits);

  var socket = io(clientSettings.wsuri);

  if (!createjs.Sound.initializeDefaultPlugins()) {
    document.getElementById("error").style.display = "block";
    document.getElementById("content").style.display = "none";
    return;
  }

  var assetsPath = "./audio/";

  var sounds = [
    {src: "crickets.mp3", img: "cricket.jpg", id: 'crickets', title: 'Crickets'},
    {src: "downer.mp3", img: "sadtrombone.jpg", id: 'downer', title: 'Downer'},
    {src: "rimshot.mp3", img: "rimshot.jpg", id: 'rimshot', title: 'Rimshot'},
    //{src: "gaaay.mp3", img: "gaaay.jpg", id: 'gaaay', title: 'Gaaay'},
    {src: "shame.mp3", img: "shame.jpg", id: 'shame', title: 'Shame'},
    {src: "hodor.mp3", img: "hodor.jpg", id: 'hodor', title: 'Hodor'},
    {src: "youlose.mp3", img: "badluckbrian.jpg", id: 'brian', title: 'Youlose'},
    {src: "tim.mp3", img: "tim.jpg", id: 'tim', title: 'Tim'},
    {src: "whip.mp3", img: "whip.jpg", id: 'whip', title: 'Whip'},
    {src: "tripod.mp3", img: "tripod.jpg", id: 'tripod', title: 'Tripod'},
    {src: "nein.mp3", img: "nein.jpg", id: 'nein', title: 'Nein'},
    {src: "scream.mp3", img: "scream.jpg", id: 'scream', title: 'Scream'},
    {src: "intel.mp3", img: "intel.jpg", id: 'intel', title: 'Intel'},
    {src: "winxp.mp3", img: "winxp.jpg", id: 'winxp', title: 'Windows XP'}
  ];

  createjs.Sound.addEventListener("fileload", createjs.proxy(soundLoaded, this));
  createjs.Sound.registerSounds(sounds, assetsPath);

  $(sounds).each(function(i, sound) {
    var keycode = keycodes[i];

    var labeldiv = $('<div>');
    labeldiv.attr('class', 'label');
    labeldiv.append(sound.title);

    var sounddiv = $('<div>');
    sounddiv.attr('id', sound.id);
    sounddiv.attr('style', 'background-image:url(img/' + sound.img + ')');
    sounddiv.attr('class', 'soundItem gridBox');
    sounddiv.attr('data-keycode', keycode);
    sounddiv.append(labeldiv);
    $('#content').append(sounddiv);

    var hintkey = String.fromCharCode(keycode);
    var hintdiv = $('<div class="keyhint">' + hintkey + '</div>');
    hintdiv.hide();
    sounddiv.append(hintdiv);

    sounddiv.click(function() {
      var self = this;
      var id = $(self).attr('id');
      console.log("< " + id);

      socket.emit('play',id);
    });

  });

  // Simple keybinding
  $(document).keydown(function(e){
    var keyCode = e.which;

    if(keyCode === 191) { // '/' or '?'
      $('.keyhint').show();
    } else if(keyCode === 27) { // ESC
      $('.keyhint').hide();
    } else {
      $('.soundItem[data-keycode="' + keyCode + '"]').click();
    }
  });

  socket.on("version", function(version) {
    console.log("> version: " + version);
    console.log("client version: " + client_version);
    if(client_version !== undefined && version !== client_version) {
      location.reload();
    }
    client_version = version;
  });

  socket.on("clients", function(data){
    console.log("> clients: " + data);
    $('#clients').text(data);
  });

  socket.on("play", function(data){
    console.log("> play: " + data);
    play(data);
  });

  socket.on("credits", function(data){
    console.log("> credits: "+ data);
    $('#credits').attr('aria-valuenow', data).css('width', 100/maxcredits*data+'%');
  });

  socket.on("errormsg", function(data){
    console.log("Error: " + data);
  });

}
