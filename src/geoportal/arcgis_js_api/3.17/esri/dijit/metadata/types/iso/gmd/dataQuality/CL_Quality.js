// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({
	cache : {
		"url:esri/dijit/metadata/types/iso/gmd/dataQuality/templates/CL_Quality.html" : '\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/ObjectReference"\r\n    data-dojo-props\x3d"target:\'gmd:dataQualityInfo\',minOccurs:0,\r\n      label:\'${i18nIso.MD_Metadata.dataQualityInfo}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/AbstractObject"\r\n      data-dojo-props\x3d"target:\'gmd:DQ_DataQuality\',minOccurs:0"\x3e\r\n      \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n      \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/dataQuality/Scope"\r\n          data-dojo-props\x3d"label:\'${i18nIso.qualitySection.scope}\'"\x3e\x3c/div\x3e\r\n          \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/dataQuality/ConformanceReport"\r\n          data-dojo-props\x3d"label:\'${i18nIso.qualitySection.conformance}\'"\x3e\x3c/div\x3e\r\n          \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/dataQuality/Lineage"\r\n          data-dojo-props\x3d"label:\'${i18nIso.qualitySection.lineage}\'"\x3e\x3c/div\x3e  \r\n                  \r\n      \x3c/div\x3e  \r\n      \r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n\x3c/div\x3e'
	}
});
define(
		"esri/dijit/metadata/types/iso/gmd/dataQuality/CL_Quality",
		"dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Tabs ../../../../form/iso/AbstractObject ../../../../form/iso/ObjectReference ./ConformanceReport ./Lineage ./Scope dojo/text!./templates/CL_Quality.html ../../../../../../kernel"
				.split(" "), function(a, b, c, d, g, h, k, l, m, n, e, f) {
			a = a(d, {
				templateString : e
			});
			c("extend-esri")
					&& b.setObject(
							"dijit.metadata.types.iso.gmd.dataQuality.CL_Quality",
							a, f);
			return a
		});