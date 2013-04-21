Ext.define('BarDeLimoges.view.Recherche', {
    extend: 'Ext.Panel',
    xtype: 'recherche',
    alias: 'alias_recherche',
    requires:[
        'Ext.field.Select'
    ],
    config: {
    	title: 'Recherche',
    	styleHtmlContent: true,

    	items:[
    		{
    			xtype: 'button',
    			html: "Tous les bars",
				listeners:[
					{
						event: "tap",
						fn: function(){
							console.log("fire--showAllBars");
							this.parent.fireEvent("showAllBars");
						}
					}
				]
    		},
    		{
    			xtype: 'spacer',
    			height: 20
    		},
    		{
    			xtype: 'panel',
    			html: "<h3>Par prix</h3>"
    		},
    		{
    			xtype: 'container',
    			layout: 'hbox',
    			// html: "Par prix",
    			items:[
    				{
    					xtype: "button",
    					flex: 1,
    					html: 'Petits prix'
    				},
    				{
    					xtype: "button",
    					flex: 1,
    					html: 'Prix moyens'
    				},
    				{
    					xtype: "button",
    					flex: 1,
    					html: 'Gros prix'
    				}
    			]
    		},
    		{
    			xtype: 'spacer',
    			height: 20
    		},
    		// {
    		// 	xtype: 'panel',
    		// 	html: "Par prix"
    		// },
    		// {
    		// 	xtype: 'button',
    		// 	html: "Par musique"
    		// },
    		{
    			xtype: 'panel',
    			html: "<h3>Par genre</h3>"
    		},
    		{
    			xtype: 'selectfield',
    			options:[
    				{ text : '', value: ''},
    				{ text : 'Troquet', value: 'troquets'},
    				{ text : 'Bar de nuit', value: 'bars de nuit'},
    				{ text : 'Bar à ambiance', value: 'bars a ambiance'},
    				{ text : 'Pub / Taverne', value: 'tavernes'}
    			],
    			listeners:[
    				{
    					event: "change",
    					fn: function(view, newValue, oldValue){
    						if(newValue != ""){
    							console.log(newValue);
    							this.parent.fireEvent("showByGenre", newValue);
    						}
    					}
    				}
    			]
    		}
    	]
    }
});
