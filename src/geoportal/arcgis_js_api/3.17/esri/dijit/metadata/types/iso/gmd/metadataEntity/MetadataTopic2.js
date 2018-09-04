// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({
	cache: {
		"url:esri/dijit/metadata/types/iso/gmd/metadataEntity/templates/MetadataTopic2.html": '\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference"\r\n  data-dojo-props\x3d"target:\'gmd:classify_language\',\r\n  label:\'${i18nIso.classifi_language.caption}\',minOccurs:1"\x3e\r\n     \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/metadataEntity/Classifi_Language"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference"\r\n  data-dojo-props\x3d"target:\'gmd:classifi_production\',\r\n  label:\'${i18nIso.classifi_productionphase.caption}\',minOccurs:1"\x3e\r\n     \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/metadataEntity/Classifi_ProductionPhase"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListReference"\r\n  data-dojo-props\x3d"target:\'gmd:classify_dataset\',\r\n  label:\'${i18nIso.classifi_datareptype.caption}\',minOccurs:1"\x3e\r\n     \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/metadataEntity/Classifi_DataType"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n\r\n          \x3c/div\x3e'
	}
});
define(
	"esri/dijit/metadata/types/iso/gmd/metadataEntity/MetadataTopic2",
	"dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ./Classifi_Language ./Classifi_ProductionPhase ./Classifi_DataType dojo/text!./templates/MetadataTopic2.html ../../../../../../kernel"
	.split(" "),
	function(a, b, c, d, g, h, k, e, f) {
		a = a(d, {
			templateString: e
		});
		c("extend-esri") &&
			b
			.setObject(
				"dijit.metadata.types.iso.gmd.metadataEntity.MetadataTopic2",
				a, f);
		return a
	});