// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({
	cache: {
		"url:esri/dijit/metadata/form/templates/MetadataClassificationTopic.html": '\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n      \r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n    data-dojo-props\x3d"label:\'${i18nBase.metadataClassificationTopic.personalIdentifiableInformation}\',\r\n      value:\'personalIdentifiableInformation\'"\x3e\x3c/div\x3e  \r\n    \r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n    data-dojo-props\x3d"label:\'${i18nBase.metadataClassificationTopic.military}\',\r\n      value:\'military\'"\x3e\x3c/div\x3e\r\n    \r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n    data-dojo-props\x3d"label:\'${i18nBase.metadataClassificationTopic.itar}\',\r\n      value:\'itar\'"\x3e\x3c/div\x3e\r\n    \r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n    data-dojo-props\x3d"label:\'${i18nBase.metadataClassificationTopic.ear}\',\r\n      value:\'ear\'"\x3e\x3c/div\x3e\r\n    \r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n    data-dojo-props\x3d"label:\'${i18nBase.metadataClassificationTopic.customerinfo}\',\r\n      value:\'customerinfo\'"\x3e\x3c/div\x3e  \r\n    \r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n    data-dojo-props\x3d"label:\'${i18nBase.metadataClassificationTopic.proprietary}\',\r\n      value:\'proprietary\'"\x3e\x3c/div\x3e  \r\n\r\n\x3c/div\x3e'
	}
});
define("esri/dijit/metadata/form/MetadataClassificationTopic", "dojo/_base/declare dojo/_base/lang dojo/has ./Options dojo/text!./templates/MetadataClassificationTopic.html dojo/i18n!../nls/i18nIso ../../../kernel".split(" "), function(a, b, c, d, e, f, g) {
	a = a([d], {
		i18nIso: f,
		templateString: e,
		_escapeSingleQuotes: !0,
		postCreate: function() {
			this.inherited(arguments)
		}
	});
	c("extend-esri") && b.setObject("dijit.metadata.form.MetadataClassificationTopic", a, g);
	return a
});