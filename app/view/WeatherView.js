Ext.define('GetYourWeather.view.WeatherView', {
    extend: 'Ext.Panel',
    alias: 'widget.weatherView',
    config: {
        title: 'Weather',
        style: 'background: url(resources/loading/snow2.jpg) no-repeat center center fixed; background-size: cover;',
        iconCls: 'action',
        itemId: 'weatherView',
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Your Location'
            },
            {
                xtype: 'panel',
                height: '60%',
                itemId: 'currentDay',
                tpl: new Ext.XTemplate('<div style="margin: 10px;height: 30%">' +
                    '<div style="display: inline-block;width: 48%;max-width: 300px;">' +
                    '<img src="{[values.current_condition[0].weatherIconUrl[0].value]}" width="100%">' +
                    '</div>' +
                    '<div style="display: inline-block;vertical-align: top;width:50%;height: inherit">' +
                    '<div style="color:red;font-size:50px;text-align: right;width: 100%">' +
                    '{[values.current_condition[0].temp_C]}&#176;' +
                    '</div>' +
                    '<div style="font-size:25px;text-align: right;width: 100%;">' +
                    'Feels Like' +
                    '{[values.current_condition[0].FeelsLikeC]}&#176;' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div style="height: 40%;font-size: 20px;padding: 10px">' +
                    '<div style="display: inline-block;width: 48%;">' +
                    '<div>' +
                    'Humidity  <br> {[values.current_condition[0].humidity]}%' +
                    '</div>' +
                    '<div>' +
                    'Wind <br> {[values.current_condition[0].windspeedKmph]} KM/h' +
                    '</div>' +
                    '</div>' +
                    '<div style="display: inline-block;width: 48%;text-align: right;">' +
                    '<div>' +
                    'Sunrise <br> {[values.weather[0].astronomy[0].sunrise]}' +
                    '</div>' +
                    '<div>' +
                    'Sunset <br> {[values.weather[0].astronomy[0].sunset]}' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                )
            },
            {
                xtype: 'dataview',
                cls: 'dataview-horizontal',
                itemCls: 'day-weather',
                inline: {
                    wrap: false
                },
                docked: 'bottom',
                itemId: 'daysPanel',
                id: 'JSONP',
                height: '15%',
                scrollable: false,
                itemTpl: new Ext.XTemplate('<div style="width: 19%;">' +
                '<div style="text-align: center;font-size: 12px;font-weight: bold;color:white">' +
                '{dayName}' +
                '</div>' +
                '<div>' +
                '<img src="{[values.hourly[0].weatherIconUrl[0].value]}" width="50px">' +
                '</div>' +
                '</div>')
            }
        ]
    }
});


