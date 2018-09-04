// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({
	cache : {
		"url:esri/dijit/metadata/types/iso/gmd/metadataEntity/templates/MetadataPurposeChecklist.html" : '\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'gmd:classify_purpose\',minOccurs:1,maxOccurs:\'unbounded\',\r\n      label:\'${i18nBase.metadataPurposeclassificationTopic.caption}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectMany"\r\n      data-dojo-props\x3d"subTarget:\'gmd:classify_metadatapurposechecklist\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/MetadataPurposeclassificationTopic"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n      \r\n\x3c/div\x3e'
	}
});
define(
		"esri/dijit/metadata/types/iso/gmd/metadataEntity/MetadataPurposeChecklist",
		"dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Element ../../../../form/InputSelectMany ../../../../form/MetadataPurposeclassificationTopic dojo/text!./templates/MetadataPurposeChecklist.html ../../../../../../kernel"
				.split(" "),
		function(a, b, c, d, g, h, k, e, f) {
			a = a(d, {
				templateString : e
			});
			c("extend-esri")
					&& b
							.setObject(
									"dijit.metadata.types.iso.gmd.metadataEntity.MetadataPurposeChecklist",
									a, f);
			return a
		});