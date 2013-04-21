Ext.define('BarsDeLimoges.model.Bar', {
    extend: 'Ext.data.Model',

    config: {
        identifier: 'uuid', 
        
        fields: [
            { name: 'id', type: 'string' },
            { name: 'label', type: 'string' },
            { name: 'update', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'latitude', type: 'string' },
            { name: 'longitude', type: 'string' },
            { name: 'note', type: 'string' },
            { name: 'genre', type: 'string' },
            { name: 'actif', type: 'string' },
            { name: 'prix', type: 'string' },
            { name: 'musique', type: 'string' },
            // { name: 'actif', type: 'string' },
            // { name: 'actif', type: 'string' },
        ],
        
        hasMany: [
            { model: 'BarsDeLimoges.model.Commentaire', name: 'commentaires' }
        ],
    }
});