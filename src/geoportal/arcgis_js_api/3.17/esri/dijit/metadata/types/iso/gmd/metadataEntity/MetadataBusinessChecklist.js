// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({
	cache : {
		"url:esri/dijit/metadata/types/iso/gmd/metadataEntity/templates/MetadataBusinessChecklist.html" : '\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'gmd:classify_business\',minOccurs:1,maxOccurs:\'unbounded\',\r\n      label:\'${i18nIso.classifi_businessobjest.caption}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectMany"\r\n      data-dojo-props\x3d"subTarget:\'gmd:classify_metadatabusinesschecklist\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/MetadataBusinessclassificationTopic"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n      \r\n\x3c/div\x3e'
	}
});
define(
		"esri/dijit/metadata/types/iso/gmd/metadataEntity/MetadataBusinessChecklist",
		"dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Element ../../../../form/InputSelectMany ../../../../form/MetadataBusinessclassificationTopic dojo/text!./templates/MetadataBusinessChecklist.html ../../../../../../kernel"
				.split(" "),
		function(a, b, c, d, g, h, k, e, f) {
			a = a(d, {
				templateString : e
			});
			c("extend-esri")
					&& b
							.setObject(
									"dijit.metadata.types.iso.gmd.metadataEntity.MetadataBusinessChecklist",
									a, f);
			return a
		});