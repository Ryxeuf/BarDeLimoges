Ext.define('BarDeLimoges.view.Home', {
    extend: 'Ext.tab.Panel',
    xtype: 'home',
    requires: [
        'Ext.TitleBar',
        'Ext.Map'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'News',
                iconCls: 'podcast',

                styleHtmlContent: true,
                scrollable: true,

                html: [
                    "Les dernières news concernant les bars de Limoges",
                ].join("")
            },
            {
                xtype: 'recherche',
                title: 'Recherche',
                iconCls: 'maps'
            },
            {
                xtype: 'newbar',
                title: 'Proposition',
                iconCls: 'compass2'
            },
            {
                xtype: 'about',
                title: 'A propos',
                iconCls: 'info'
            }
        ]
    }
});
