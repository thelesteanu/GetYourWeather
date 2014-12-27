Ext.define('GetYourWeather.view.WeatherView', {
    extend: 'Ext.Panel',
    alias: 'widget.weatherView',
    config: {
        title: 'Weather',
        style:'background: url(/resources/loading/snow2.jpg) no-repeat center center fixed; background-size: cover;',
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
                tpl: Ext.XTemplate.from('template-today-weather', {})
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
                height: '30%',
                scrollable:false,
                itemTpl: Ext.XTemplate.from('template-days-weather', {})
            }
        ]
    },
    initialize: function () {
        /*  this.setMasked({
         xtype: 'loadmask',
         message: 'Loading...'
         });*/
    }
});


