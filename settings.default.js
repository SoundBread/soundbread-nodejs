/* global window, location */

var clientSettings = {
	wsuri: 'ws://localhost/'
};

var loc = window.location.href+'';
if (loc.indexOf('http://') === 0) {
	window.location.href = loc.replace('http://','https://');
}

if(location.protocol === 'https:') {
	clientSettings.wsuri = 'wss://' + location.host;
} else {
	clientSettings.wsuri = 'ws://' + location.host;
}
