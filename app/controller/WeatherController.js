Ext.define('GetYourWeather.controller.WeatherController', {
    extend: 'Ext.app.Controller',
    requires: [],
    config: {
        views: [
            'WeatherView',
            'CurrentLocation',
            'Main',
            'SettingsView'
        ],
        refs: {
            weatherView: 'weatherView',
            currentLocation: 'currentLocation',
            main: 'main'
        },
        control: {
            main: {
                'loadWeather': 'loadWeather'
            }
        }
    },
    loadWeather: function (mainView, currentLocation) {
        var self = this;
        if (currentLocation) {
            var locationName = self.getCurrentLocation().locationName;
        }
        else {
            var searchValue = self.getCurrentLocation().down('searchfield').getValue();
        }
        Ext.data.JsonP.request({
            url: 'http://api.worldweatheronline.com/free/v2/weather.ashx',
            callbackKey: 'callback',
            params: {
                key: '2a2fe0badf89fd29df673453197fa',
                q: currentLocation ? locationName : searchValue,
                format: 'json',
                num_of_days: 5,
                tp: 24
            },
            callback: function (success, response) {
                console.log(response);
                self.getWeatherView().down('titlebar').setTitle(response.data.request[0].query);
                var weather = response.data.weather;
                if (weather) {
                    var weatherView = self.getWeatherView();
                    weatherView.down('#currentDay').setData(response.data);
                    weather.forEach(function (entry) {
                        var d = new Date(entry.date);
                        var n = d.getDay();
                        var day = '';
                        switch (n) {
                            case 0:
                                day = "Sunday";
                                break;
                            case 1:
                                day = "Monday";
                                break;
                            case 2:
                                day = "Tuesday";
                                break;
                            case 3:
                                day = "Wednesday";
                                break;
                            case 4:
                                day = "Thursday";
                                break;
                            case 5:
                                day = "Friday";
                                break;
                            case 6:
                                day = "Saturday";
                                break;
                        }
                        console.log(day);
                        entry.dayName = day;
                    });

                    weatherView.down('#daysPanel').setData(weather);
                }
                else {
                    alert('There was an error retrieving the weather.');
                }
            }
        })
    }
});
