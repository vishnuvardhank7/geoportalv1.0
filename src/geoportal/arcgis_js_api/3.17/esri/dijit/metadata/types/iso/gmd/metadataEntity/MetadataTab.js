// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({
	cache: {
		"url:esri/dijit/metadata/types/iso/gmd/metadataEntity/templates/MetadataTab.html": '\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/metadataEntity/MetadataChecklist"\r\n     data-dojo-props\x3d"label:\'${i18nIso.classificationSection.metadataTab.info}\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/metadataEntity/MetadataBusinessChecklist"\r\n     data-dojo-props\x3d"label:\'${i18nIso.classificationSection.metadataTab.business}\'"\x3e\x3c/div\x3e\r\n\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/metadataEntity/MetadataPurposeChecklist"\r\n     data-dojo-props\x3d"label:\'${i18nIso.classificationSection.metadataTab.purpose}\'"\x3e\x3c/div\x3e\r\n\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/metadataEntity/Classifi_HierarchyLevel"\r\n     data-dojo-props\x3d"label:\'${i18nIso.classificationSection.metadataTab.hierarchy}\'"\x3e\x3c/div\x3e\r\n      \r\n                        \r\n  \x3c/div\x3e\r\n  \r\n\x3c/div\x3e'
	}
});
define("esri/dijit/metadata/types/iso/gmd/metadataEntity/MetadataTab", "dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Tabs ./MetadataChecklist ./MetadataBusinessChecklist ./MetadataPurposeChecklist ./Classifi_HierarchyLevel dojo/text!./templates/MetadataTab.html ../../../../../../kernel".split(" "), function(a, b, c, d, g, h, k, l, m, e, f) {
	a = a(d, {
		templateString: e
	});
	c("extend-esri") && b.setObject("dijit.metadata.types.iso.gmd.metadataEntity.MetadataTab", a, f);
	return a
});