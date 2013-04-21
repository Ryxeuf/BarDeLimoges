Ext.define('BarsDeLimoges.store.Bars', {
    extend: 'Ext.data.Store',

    config: {
        model: 'BarsDeLimoges.model.Bar',

        proxy: {
            type: 'ajax'
            // id  : 'terramobile-users'
        }
    }
    
});