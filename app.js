Ext.application({
    name: 'GetYourWeather',

    requires: [
        'Ext.MessageBox',
        'Ext.data.JsonP'
    ],

    views: [
        'Main', 'CurrentLocation', 'WeatherView', 'SettingsView'
    ],
    controllers: ['WeatherController'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function () {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('GetYourWeather.view.Main'));
        if (Ext.browser.is.PhoneGap && Ext.os.is('Android')) {
            document.addEventListener("offline", this.deviceOffline, false);

        }
        if (Ext.browser.is.PhoneGap) {
            document.addEventListener("deviceready", this.onDeviceReady, false);
        }
    },
    onDeviceReady: function () {
        window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {
            window.rootFS = fileSystem.root;
        }, function () {
        });
        navigator.notification.vibrate(800);
    },
    deviceOffline: function () {
        Ext.device.Notification.show({
            title: "Connection Unavailable",
            message: "Please connect to Internet!",
            buttons: "Ok"
        });
        navigator.notification.vibrate(800);
    },
    onUpdated: function () {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function (buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
