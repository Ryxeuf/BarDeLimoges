Ext.define('BarDeLimoges.controller.ApplicationController', {
    extend: 'Ext.app.Controller',
    requires:[
        "Ext.Ajax"
    ],

    config: {
        refs: {
            mainView: 'main',
            barMap: 'barmap',
            rechercheView: 'recherche',
        },

        control: {
            barMap: {
                maprender: 'onMapRender',
                centerchange: 'onCenterChanged',
                // initialize: 'onMapInitialize'
            },
            rechercheView:{
                showAllBars: "showAllBars",
                showByGenre: "showByGenre"
            }
        }
    },

    onMapRender: function(view, map, eOpts){
        console.log("map render");
        console.log(view);
        console.log(map);
        console.log(eOpts);
        var controller = this;
        // var options = view.getMapOptions();
        // options.zoom = 15;
        // view.setMapOptions(options);
        // map.setCenter(new google.maps.LatLng(45.832878, 1.255765) );
        view.setMapCenter(new google.maps.LatLng(45.832878, 1.255765) );
        Ext.Ajax.request({
            url : "http://poissard.ardteam.fr/bardelimoges/api/actions.php",
            params: {
                action: view.renderOptions.action,
                critereType: view.renderOptions.critereType,
                critereValue: view.renderOptions.critereValue
            },
            success: function(response){
                console.log(response.responseText);
                json = Ext.JSON.decode(response.responseText);
                console.log("jsonResponse");
                console.log(json.bars);
                json.bars.forEach(function(bar){
                    console.log("bar");
                    console.log(bar);
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(bar.latitude, bar.longitude),
                        title : bar.label,
                        barId : bar.id,
                        map: map
                    });
                    google.maps.event.addListener(marker, 'click', function() {
                        console.log(marker);
                        controller.displayBar(marker.barId);
                    });
                });
            }
        });
    },
    onCenterChanged: function(view, map, center, eOpts){
        console.log("centre map change");
        console.log(view);
        console.log(map);
        console.log(center);
        console.log(eOpts);

    },



    showAllBars: function(){
        var options = {
            renderOptions:{
                action: 'liste',
                critereType: 'genre',
                critereValue: 'all'
            }
        };
        var map = Ext.create('alias_barmap', options);
        map.setTitle("Tous les bars");
        this.getMainView().push(map);
    },
    showByGenre: function(genre){
        var options = {
            renderOptions:{
                action: 'liste',
                critereType: 'genre',
                critereValue: genre
            }
        };
        var map = Ext.create('alias_barmap', options);
        map.setTitle("Les "+genre);
        this.getMainView().push(map);
    },




    displayBar: function(barId){
        var controller = this;
        Ext.Ajax.request({
            url : "http://poissard.ardteam.fr/bardelimoges/api/actions.php",
            params: {
                action: 'bar',
                id: barId
            },
            success: function(response){
                console.log(response.responseText);
                json = Ext.JSON.decode(response.responseText);
                console.log("jsonResponse");
                console.log(json);
                var barView = Ext.create('alias_bar');
                barView.setTitle(json.label);
                barView.setHtml([
                    "Description: ", json.description, "</br>",
                    "Musique: ", json.musique, "</br>",
                    "Ambiance: ", json.ambiance, "</br>",
                    "Prix: ", json.prix, "</br>",
                    "Note: ", json.note, "</br>",
                ].join(''));
                controller.getMainView().push(barView);
            }
        });
    }

});