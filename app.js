Ext.application({
    name: 'GetYourWeather',
    requires: [
        'Ext.MessageBox',
        'Ext.data.JsonP'
    ],
    controllers: ['WeatherController'],
    launch: function () {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view

        if (Ext.browser.is.PhoneGap && Ext.os.is('Android')) {
            document.addEventListener("offline", this.deviceOffline, false);

        }
        if (Ext.browser.is.PhoneGap) {
            document.addEventListener("deviceready", this.onDeviceReady, false);
        }
        else {
            Ext.Viewport.add(Ext.create('GetYourWeather.view.Main'));
        }
    },
    onDeviceReady: function () {
        Ext.Viewport.add(Ext.create('GetYourWeather.view.Main'));
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
