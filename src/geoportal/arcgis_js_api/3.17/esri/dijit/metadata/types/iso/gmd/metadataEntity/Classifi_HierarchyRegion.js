// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({
	cache: {
		"url:esri/dijit/metadata/types/iso/gmd/metadataEntity/templates/Classifi_HierarchyRegion.html": '\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n                    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n     data-dojo-props\x3d"target:\'gmd:classify_HierarchyRegion\',minOccurs:1,\r\nlabel:\'${i18nIso.classificationSection.hierarchylevel}\'"\x3e\r\n     \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n     data-dojo-props\x3d"target:\'gmd:classify_hierarchylevelname\'"\x3e \x3c/div \x3e\r\n \x3c/div\x3e \r\n\r\n                                        \x3c/div\x3e'
	}
});
define("esri/dijit/metadata/types/iso/gmd/metadataEntity/Classifi_HierarchyRegion", "dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Element ../../../../form/iso/AbstractObject ../../../../form/iso/GcoElement dojo/text!./templates/Classifi_HierarchyRegion.html ../../../../../../kernel".split(" "), function(a, b, c, d, g, h, k, e, f) {
	a = a(d, {
		templateString: e
	});
	c("extend-esri") && b.setObject("dijit.metadata.types.iso.gmd.metadataEntity.Classifi_HierarchyRegion",
		a, f);
	return a
});








