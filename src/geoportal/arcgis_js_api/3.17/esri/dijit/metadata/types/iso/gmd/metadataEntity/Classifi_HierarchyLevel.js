// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({
	cache: {
		"url:esri/dijit/metadata/types/iso/gmd/metadataEntity/templates/Classifi_HierarchyLevel.html": '\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n     \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n     data-dojo-props\x3d"target:\'gmd:classify_hierarchy\',minOccurs:1,\r\n     label:\'\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/metadataEntity/Classifi_HierarchySeries"\r\n     data-dojo-props\x3d"label:\'${i18nIso.MD_ScopeCode.series}\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/metadataEntity/Classifi_HierarchyRegion"\r\n     data-dojo-props\x3d"label:\'${i18nIso.MD_ScopeCode.region}\'"\x3e\x3c/div\x3e\r\n\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/metadataEntity/Classifi_HierarchyDataset"\r\n     data-dojo-props\x3d"label:\'${i18nIso.MD_ScopeCode.dataset}\'"\x3e\x3c/div\x3e\r\n\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/metadataEntity/Classifi_HierarchyAttribute"\r\n     data-dojo-props\x3d"label:\'${i18nIso.MD_ScopeCode.attribute}\'"\x3e\x3c/div\x3e\r\n\r\n                        \r\n  \x3c/div\x3e\r\n     \x3c/div\x3e\r\n  \r\n\x3c/div\x3e'
	}
});
define("esri/dijit/metadata/types/iso/gmd/metadataEntity/Classifi_HierarchyLevel", "dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Tabs ./Classifi_HierarchySeries ./Classifi_HierarchyRegion ./Classifi_HierarchyDataset ./Classifi_HierarchyAttribute dojo/text!./templates/Classifi_HierarchyLevel.html ../../../../../../kernel".split(" "), function(a, b, c, d, g, h, k, l, m, e, f) {
	a = a(d, {
		templateString: e
	});
	c("extend-esri") && b.setObject("dijit.metadata.types.iso.gmd.metadataEntity.Classifi_HierarchyLevel", a, f);
	return a
});