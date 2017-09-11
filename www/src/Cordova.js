
export default {
    // Application Constructor
    initialize: function() {
        localStorage.IsCordovaReady=false
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        localStorage.IsCordovaReady=true;
        
        QRScanner.prepare((err,status)=>{
            if (err) {
                // here we can handle errors and clean up any loose ends.
                console.error(err);
              }
              if (status.authorized) {
                console.log('扫描授权');
                // W00t, you have camera access and the scanner is initialized.
              } else if (status.denied) {
                console.log('扫描拒绝');
                // The video preview will remain black, and scanning is disabled. We can
                // try to ask the user to change their mind, but we'll have to send them
                // to their device settings with `QRScanner.openSettings()`.
              } else {
                // we didn't get permission, but we didn't get permanently denied. (On
                // Android, a denial isn't permanent unless the user checks the "Don't
                // ask again" box.) We can ask again at the next relevant opportunity.
              }
        }); // show the prompt
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        // console.log('Received Event: ' + id);
    }
}