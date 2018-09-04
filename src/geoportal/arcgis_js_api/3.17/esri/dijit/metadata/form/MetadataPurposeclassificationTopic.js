// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({
	cache: {
		"url:esri/dijit/metadata/form/templates/MetadataPurposeclassificationTopic.html": '\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n     \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n    data-dojo-props\x3d"label:\'${i18nBase.metadataPurposeclassificationTopic.flight}\',\r\n value:\'flight\'"\x3e\x3c/div\x3e\r\n\r\n     \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n    data-dojo-props\x3d"label:\'${i18nBase.metadataPurposeclassificationTopic.fpd}\',\r\n value:\'fpd\'"\x3e\x3c/div\x3e\r\n\r\n     \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n    data-dojo-props\x3d"label:\'${i18nBase.metadataPurposeclassificationTopic.base}\',\r\n value:\'base\'"\x3e\x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n    data-dojo-props\x3d"label:\'${i18nBase.metadataPurposeclassificationTopic.data}\',\r\n value:\'data\'"\x3e\x3c/div\x3e\r\n\r\n   \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n    data-dojo-props\x3d"label:\'${i18nBase.metadataPurposeclassificationTopic.sales}\',\r\n value:\'sales\'"\x3e\x3c/div\x3e\r\n\r\n   \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n    data-dojo-props\x3d"label:\'${i18nBase.metadataPurposeclassificationTopic.program}\',\r\n value:\'program\'"\x3e\x3c/div\x3e\r\n\r\n   \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n    data-dojo-props\x3d"label:\'${i18nBase.metadataPurposeclassificationTopic.nav}\',\r\n value:\'nav\'"\x3e\x3c/div\x3e\r\n\r\n  \x3c/div\x3e'
	}
});
define("esri/dijit/metadata/form/MetadataPurposeclassificationTopic", "dojo/_base/declare dojo/_base/lang dojo/has ./Options dojo/text!./templates/MetadataPurposeclassificationTopic.html dojo/i18n!../nls/i18nIso ../../../kernel".split(" "), function(a, b, c, d, e, f, g) {
	a = a([d], {
		i18nIso: f,
		templateString: e,
		_escapeSingleQuotes: !0,
		postCreate: function() {
			this.inherited(arguments)
		}
	});
	c("extend-esri") && b.setObject("dijit.metadata.form.MetadataPurposeclassificationTopic", a, g);
	return a
});