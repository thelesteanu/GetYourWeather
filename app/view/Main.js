Ext.define('GetYourWeather.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.field.Search',
        'Ext.Map'
    ],
    config: {
        tabBarPosition: 'bottom',
        tabBar: {
            layout: {
                pack: 'center'
            },
            defaults: {
                width: '30%'
            }
        },
        items: [
            {xtype: 'currentLocation'},
            {xtype: 'weatherView'}/*,
             {xtype: 'settingsView'}*/
        ],
        listeners: {
            activeitemchange: function (container, value, oldValue, eOpts) {
                if (value.getItemId() == 'weatherView' && oldValue.down('searchfield')) {
                    if (oldValue.down('searchfield').isDirty()) {
                        container.fireEvent('loadWeather', this, false);
                    }
                    else {
                        container.fireEvent('loadWeather', this, true);
                    }
                }
            }
        }
    }
});
