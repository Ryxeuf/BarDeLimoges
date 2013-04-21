Ext.define('BarDeLimoges.view.About', {
    extend: 'Ext.Panel',
    xtype: 'about',
    alias: 'alias_about',
    config: {
    	title: '',
    	styleHtmlContent: true,
    	html: 	["L'application Bar de Limoges ne fait pas de publicité pour les établissements contenu dans l'application.<br>",
    			"<br>",
    			"<i>Petit rappel</i>: l'abus d'alcool est dangeureux pour la santé, à consommer avec modération.",
    			].join("")
    }
});
