Ext.define('BarDeLimoges.view.BarMap', {
    extend: 'Ext.Map',
    xtype: 'barmap',
    alias: 'alias_barmap',
    config: {
    	title: '',
    	useCurrentLocation: false,
        mapOptions:{
            center: new google.maps.LatLng(45.832878, 1.255765),
        	zoom: 15,
        	panControl: false,
        	mapTypeControl: false,
        	streetViewControl: false
        }
    },
    // initialize: function(){
    // 	this.callParent(arguments);
    // 	// var options = this.getMapOptions();
    // 	// options.center = new google.maps.LatLng(45.832878, 1.255765);
    // 	// this.setMapOptions(options);
    // 	// this.map.setCenter(new google.maps.LatLng(45.832878, 1.255765) );
    // 	console.log("init map center on initialize");
    // }
});
