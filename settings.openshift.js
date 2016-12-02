/* global location */

var clientSettings = {
	wsuri: 'ws://localhost/'
};

if(location.protocol === 'https:') {
	clientSettings.wsuri = 'wss://' + location.hostname + ':8443';
} else {
	clientSettings.wsuri = 'ws://' + location.hostname + ':8000';
}
