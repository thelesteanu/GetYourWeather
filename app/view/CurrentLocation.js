Ext.define('GetYourWeather.view.CurrentLocation', {
    extend: 'Ext.Panel',
    alias: 'widget.currentLocation',
    config: {
        title: 'Location',
        iconCls: 'home',
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'searchfield',
                    placeHolder: 'Search other location',
                    width: '70%'
                },
                {
                    xtype: 'button',
                    text: 'Get Weather',
                    width: '30%',
                    handler: function (btn) {
                        var tabs = btn.up('tabpanel');
                        tabs.setActiveItem(tabs.getInnerAt(1));
                    },
                    ui: 'confirm'
                }
            ]
        },
            {
                xtype: 'toolbar',
                itemId: 'currentLocationToolbar',
                width: '100%',
                title: 'Current Location'
            },
            {
                xtype: 'map',
                title: 'Map',
                width: '100%',
                useCurrentLocation: true,
                mapOptions: {
                    zoom: 14,
                    marker: true,
                    navigationControl: false
                },
                listeners: {
                    maprender: function (comp, map) {
                        var geo = comp.getGeo();
                        var self = this;
                        comp.up().currentGeo = geo;
                        if (Ext.browser.is.PhoneGap) {
                            var lat, lng;
                            navigator.geolocation.getCurrentPosition(geoLocationSuccess, geoLocationError);

                            function geoLocationSuccess(position) {
                                lat = position.coords.latitude;
                                lng = position.coords.longitude;
                                Ext.Msg.alert("Geolocation", "Latitude:" + lat + ", Longitude:" + lng);
                                var position = new google.maps.LatLng(lat, lng);
                                self.getMap().center = position;
                                new google.maps.Marker({
                                    id: 'geoLocMarker',
                                    position: position,
                                    map: self.getMap(),
                                    visible: true,
                                    animation: google.maps.Animation.DROP,
                                    draggable: true
                                });
                            }

                            function geoLocationError(error) {
                                alert('code: ' + error.code + '\n' +
                                'message: ' + error.message + '\n');
                            }
                        }
                        else {
                            new google.maps.Marker({
                                map: this.getMap(),
                                position: new google.maps.LatLng(geo.getLatitude(), geo.getLongitude()),
                                title: 'Drag Marker To New Position',
                                animation: google.maps.Animation.DROP,
                                draggable: true
                            });

                            /** Get Current Location
                             *
                             * @type {google.maps.Geocoder}
                             */
                            var geocoder = new google.maps.Geocoder(),
                                latlng = new google.maps.LatLng(geo._latitude, geo._longitude);

                            geocoder.geocode({'latLng': latlng}, function (results, status) {
                                if (status == google.maps.GeocoderStatus.OK) {
                                    if (results[0]) {
                                        console.log(results[0]);
                                        comp.up().down('#currentLocationToolbar').setTitle(results[0].address_components[2].long_name);
                                        comp.up().locationName = results[0].address_components[2].long_name;
                                    } else {
                                        console.info("No results found");
                                    }
                                } else {
                                    console.info("Geocoder failed due to: " + status);
                                }
                            });
                        }
                    }
                },
                height: window.innerHeight
            }]
    }

});
