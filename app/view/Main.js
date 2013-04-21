Ext.define('BarDeLimoges.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main',
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype: 'home',
                // itemId: 'barMap',
                title: 'Bars de Limoges',
                // iconCls: 'maps'

                // items: [
                //     {
                //         docked: 'top',
                //         xtype: 'titlebar',
                //         title: 'Getting Started'
                //     },
                //     {
                //         xtype: 'map'
                //     }
                // ]
            }
        ]
    }
});
