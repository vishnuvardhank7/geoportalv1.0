// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({
	cache: {
		"url:esri/dijit/metadata/types/iso/gmd/metadataEntity/templates/MetadataReference.html": '\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n    data-dojo-props\x3d"target:\'gmd:referenceSystemInfo\',minOccurs:0,maxOccurs:\'unbounded\',\r\n      label:\'${i18nIso.MD_Metadata.referenceSystemInfo}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\r\n      data-dojo-props\x3d"target:\'gmd:MD_ReferenceSystem\',minOccurs:0"\x3e\r\n      \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n        data-dojo-props\x3d"target:\'gmd:referenceSystemIdentifier\',minOccurs:0,showHeader:false"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\r\n          data-dojo-props\x3d"target:\'gmd:RS_Identifier\',minOccurs:0"\x3e\r\n          \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n            data-dojo-props\x3d"target:\'gmd:code\',\r\n              label:\'${i18nIso.RS_Identifier.code}\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n              data-dojo-props\x3d"target:\'gco:CharacterString\',value:\'4326\',"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n            data-dojo-props\x3d"target:\'gmd:codeSpace\',minOccurs:0,\r\n              label:\'${i18nIso.RS_Identifier.codeSpace}\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n              data-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \r\n        \x3c/div\x3e\r\n      \x3c/div\x3e  \r\n      \r\n    \x3c/div\x3e\r\n  \x3c/div\x3e  \r\n          \r\n\x3c/div\x3e'
	}
});
define("esri/dijit/metadata/types/iso/gmd/metadataEntity/MetadataReference", "dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Element ../../../../form/iso/AbstractObject ../../../../form/iso/GcoElement ../../../../form/iso/ObjectReference dojo/text!./templates/MetadataReference.html ../../../../../../kernel".split(" "), function(a, b, c, d, g, h, k, l, e, f) {
	a = a(d, {
		templateString: e
	});
	c("extend-esri") && b.setObject("dijit.metadata.types.iso.gmd.metadataEntity.MetadataReference",
		a, f);
	return a
});