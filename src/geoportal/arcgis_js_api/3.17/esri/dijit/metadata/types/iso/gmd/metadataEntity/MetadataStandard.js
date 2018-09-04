// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({
	cache: {
		"url:esri/dijit/metadata/types/iso/gmd/metadataEntity/templates/MetadataStandard.html": '\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'gmd:metadataStandardName\',\r\n      label:\'${i18nIso.MD_Metadata.metadataStandardName}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n      data-dojo-props\x3d"target:\'gco:CharacterString\',fixed:true,value:\'ISO 19139/19115 Metadata for Datasets\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputText" data-dojo-props\x3d"size:90,readOnly:true"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'gmd:metadataStandardVersion\',\r\n      label:\'${i18nIso.MD_Metadata.metadataStandardVersion}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n      data-dojo-props\x3d"target:\'gco:CharacterString\',fixed:true,value:\'2003\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputText" data-dojo-props\x3d"size:90,readOnly:true"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n    \r\n\x3c/div\x3e'
	}
});
define("esri/dijit/metadata/types/iso/gmd/metadataEntity/MetadataStandard", "dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Element ../../../../form/InputText ../../../../form/iso/GcoElement dojo/text!./templates/MetadataStandard.html ../../../../../../kernel".split(" "), function(a, b, c, d, g, h, k, e, f) {
	a = a(d, {
		templateString: e
	});
	c("extend-esri") && b.setObject("dijit.metadata.types.iso.gmd.metadataEntity.MetadataStandard", a, f);
	return a
});