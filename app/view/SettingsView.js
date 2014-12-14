Ext.define('GetYourWeather.view.SettingsView', {
    extend: 'Ext.Panel',
    alias: 'widget.settingsView',
    requires: ['Ext.form.FieldSet', 'Ext.field.Radio', 'Ext.dataview.List'],
    config: {
        title: 'Settings',
        iconCls: 'settings',
        itemId: 'settingsView',
        layout: 'vbox',
        items: [
            {
                xtype: 'fieldset',
                title: 'Temperature type',
                items: [
                    {
                        xtype: 'radiofield',
                        name: 'degreesType',
                        value: 'c',
                        label: 'Celsius',
                        checked: true
                    },
                    {
                        xtype: 'radiofield',
                        name: 'degreesType',
                        value: 'f',
                        label: 'Fahrenheit'
                    }
                ]
            },
            {
                xtype: 'list',
                height: '100%',
                items: [{
                    xtype: 'titlebar',
                    docked: 'top',
                    title: 'Search history'
                }],
                itemTpl: '{title}',
                data: [
                    {title: 'Berlin'},
                    {title: 'Cluj'},
                    {title: 'Bucharest'},
                    {title: 'Viena'}
                ]

            }
        ]
    },
    initialize: function () {
        //this.down("#showLanguagesButton").setText(FoodPanda.Translations.find('NEXTGEN_PREFERRED_LANGUAGE'));
        //  this.down("#showCountriesButton").setText(FoodPanda.Translations.find('NEXTGEN_YOUR_LOCATION'));
    }
});
