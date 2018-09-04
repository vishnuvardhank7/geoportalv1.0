// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({
	cache: {
		"url:esri/dijit/metadata/types/iso/gmd/metadataEntity/templates/Classifi_Language.html": '\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListElement"\r\n  data-dojo-props\x3d"target:\'gmd:classify_language\'"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeSpaceAttribute"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListAttribute"\r\n    data-dojo-props\x3d"value:\'${codeListPrefix}classify_language\'"\x3e\x3c/div\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListValueAttribute"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectOne"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Options"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n  data-dojo-props\x3d"label:\'\',value:\'\'"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n  data-dojo-props\x3d"label:\'${i18nIso.classifi_language.english}\',value:\'english\',selected:true"\x3e\x3c/div\x3e    \r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n  data-dojo-props\x3d"label:\'${i18nIso.classifi_language.german}\',value:\'german\'"\x3e\x3c/div\x3e  \r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n  data-dojo-props\x3d"label:\'${i18nIso.classifi_language.hindi}\',value:\'hindi\'"\x3e\x3c/div\x3e  \r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n  data-dojo-props\x3d"label:\'${i18nIso.classifi_language.polish}\',value:\'polish\'"\x3e\x3c/div\x3e  \r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n  data-dojo-props\x3d"label:\'${i18nIso.classifi_language.swedish}\',value:\'swedish\'"\x3e\x3c/div\x3e\r\n                          \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'
	}
});
define("esri/dijit/metadata/types/iso/gmd/metadataEntity/Classifi_Language", "dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/InputSelectOne ../../../../form/Options ../../../../form/Option ../../../../form/iso/CodeListAttribute ../../../../form/iso/CodeListValueAttribute ../../../../form/iso/CodeListElement ../../../../form/iso/CodeSpaceAttribute dojo/text!./templates/Classifi_Language.html ../../../../../../kernel".split(" "), function(a, b, c, d, g, h, k, l, m, n, p, e, f) {
	a = a(d, {
		templateString: e
	});
	c("extend-esri") && b.setObject("dijit.metadata.types.iso.gmd.metadataEntity.Classifi_Language", a, f);
	return a
});