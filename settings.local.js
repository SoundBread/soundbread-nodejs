/* global location */

var clientSettings = {
	wsuri: 'ws://localhost/'
};

if(location.protocol === 'https:') {
	clientSettings.wsuri = 'wss://' + location.host;
} else {
	clientSettings.wsuri = 'ws://' + location.host;
}
