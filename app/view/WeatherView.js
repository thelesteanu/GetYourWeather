Ext.define('GetYourWeather.view.WeatherView', {
    extend: 'Ext.Panel',
    alias: 'widget.weatherView',
    config: {
        title: 'Weather',
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
                itemId: 'currentDay',
                tpl: Ext.XTemplate.from('template-today-weather', {})
            },
            {
                xtype: 'panel',
                itemId: 'astrologyPanel',
                tpl: Ext.XTemplate.from('template-astronomy', {})
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
                height: '20%',
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


