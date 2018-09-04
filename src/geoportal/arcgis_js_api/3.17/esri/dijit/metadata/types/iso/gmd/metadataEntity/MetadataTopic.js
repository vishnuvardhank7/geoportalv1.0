// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({
	cache: {
		"url:esri/dijit/metadata/types/iso/gmd/metadataEntity/templates/MetadataTopic.html": '\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference"\r\n  data-dojo-props\x3d"target:\'gmd:classify_organisation\',\r\n  label:\'${i18nIso.classificationSection.organisation}\',minOccurs:1"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/metadataEntity/Classifi_Organisation"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n         \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference"\r\n  data-dojo-props\x3d"target:\'gmd:classify_topic\',\r\n  label:\'${i18nIso.classifi_topic.caption}\',minOccurs:1"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/metadataEntity/Classifi_Topic"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference"\r\n  data-dojo-props\x3d"target:\'gmd:classify_subtopic\',\r\n  label:\'${i18nIso.classifi_subtopic.caption}\',minOccurs:1"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/metadataEntity/Classifi_Subtopic"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n            \r\n\x3c/div\x3e'
	}
});
define(
	"esri/dijit/metadata/types/iso/gmd/metadataEntity/MetadataTopic",
	"dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ./Classifi_Organisation ./Classifi_Topic ./Classifi_Subtopic dojo/text!./templates/MetadataTopic.html ../../../../../../kernel"
	.split(" "),
	function(a, b, c, d, g, h, k, e, f) {
		a = a(d, {
			templateString: e
		});
		c("extend-esri") &&
			b
			.setObject(
				"dijit.metadata.types.iso.gmd.metadataEntity.MetadataTopic",
				a, f);
		return a
	});