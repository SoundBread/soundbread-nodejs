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

var userid;
var hiddenid;

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

  var sounds = $.parseJSON($.ajax({
    type: 'GET',
    url: '/api/sounds',
    dataType: 'json',
    success: function(){},
    data: {},
    async: false
  }).responseText);

  createjs.Sound.addEventListener("fileload", createjs.proxy(soundLoaded, this));
  createjs.Sound.registerSounds(sounds, assetsPath);

  $(sounds).each(function(i, sound) {
    var keycode = keycodes[i];

    var labeldiv = $('<div>');
    labeldiv.attr('class', 'label');
    labeldiv.text(sound.title);

    var costdiv = $('<div>');
    costdiv.attr('class', 'cost');
    costdiv.text(sound.cost === undefined ? 1 : sound.cost);

    var sounddiv = $('<div>');
    sounddiv.attr('id', sound.id);
    sounddiv.attr('style', 'background-image:url(img/' + sound.img + ')');
    if(sound.hidden) {
      sounddiv.attr('style', sounddiv.attr('style') + '; display: none');
    }
    sounddiv.attr('class', 'soundItem gridBox');
    sounddiv.attr('data-keycode', keycode);
    sounddiv.append(labeldiv);
    sounddiv.append(costdiv);
    $('#content').append(sounddiv);

    var hintkey = String.fromCharCode(keycode);
    var hintdiv = $('<div class="keyhint">' + hintkey + '</div>');
    hintdiv.hide();
    sounddiv.append(hintdiv);

    sounddiv.click(function() {
      var self = this;
      var id = $(self).attr('id');

      var playData = {soundId: id, hiddenid: hiddenid};
      console.log(playData);
      console.log("< play " + playData.soundId);
      socket.emit('play', playData);
    });

  });

  // Simple keybinding
  $(document).keydown(function(e){
    var keyCode = e.which;

    if(["INPUT"].indexOf(document.activeElement.tagName) !== -1) {
      // Skip if typing in input element
      return;
    }

    if(e.altKey || e.ctrlKey) {
      // Skip if a modifier is active, to prevent capturing browser shortkeys
      return;
    }

    if(keyCode === 191) { // '/' or '?'
      $('.keyhint').show();
      $('.label').show();
      $('.cost').show();
    } else if(keyCode === 27) { // ESC
      $('.keyhint').hide();
      $('.label').hide();
      $('.cost').hide();
    } else {
      $('.soundItem[data-keycode="' + keyCode + '"]').click();
    }
  });

  socket.on("reconnect", function() {
    socket.emit('hiddenid', hiddenid);

    var userid = localStorage.getItem('userid');
    socket.emit('name', userid);
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
    console.log("> play: " + data.audio + " (" + data.user + ")");

    var sound = sounds.filter(function(x) { return x.id === data.audio; })[0];
    play(sound.id);
    document.toast(sound.title + ' - ' + data.user);
  });

  socket.on("credits", function(data){
    console.log("> credits: "+ data);
    $('#credits').attr('aria-valuenow', data).css('width', 100/maxcredits*data+'%');
  });

  socket.on("errormsg", function(data){
    console.log("Error: " + data);
    document.toast(data);
  });

  document.toast = function(text) {
    var toast = $('<div class="toast" style="display:none">').text(text);
    $("#toastcontainer").prepend(toast);
    toast.fadeIn(400).delay(2000).fadeOut(400);
  }

  document.updateName = function(name) {
    localStorage.setItem('userid', name);
    console.log("> name: " + name);
    socket.emit('name', name);
  }

  hiddenid = localStorage.getItem('hiddenid');
  if(hiddenid === null) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    hiddenid = "";
    for(var i=0; i<32; ++i) {
      hiddenid += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    localStorage.setItem('hiddenid', hiddenid);
  }
  socket.emit('hiddenid', hiddenid);

  userid = localStorage.getItem('userid');
  if(userid === null) {
    userid = "Gebruiker "+Math.floor(Math.random()*10000+9999);
  }
  $('#userid').val(userid);
  document.updateName(userid);
}
