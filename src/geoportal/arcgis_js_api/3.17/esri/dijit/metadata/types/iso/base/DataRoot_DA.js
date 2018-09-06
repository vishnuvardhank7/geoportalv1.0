// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({
	cache: {
		"url:esri/dijit/metadata/types/iso/base/templates/DataRoot.html": '\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'gmd:MD_Metadata\',label:\'${i18nIso.documentTypes.classification.caption}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/metadataEntity/MetadataSection_DA"\r\n        data-dojo-props\x3d"label:\'${i18nIso.sections.metadata}\'"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/identification/CL_DataIdentification"\r\n        data-dojo-props\x3d"label:\'${i18nIso.sections.identification}\'"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/distribution/CL_Distribution"\r\n        data-dojo-props\x3d"label:\'${i18nIso.sections.distribution}\'"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/dataQuality/CL_Quality"\r\n        data-dojo-props\x3d"label:\'${i18nIso.sections.quality}\'"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'
	}
});
define(
	"esri/dijit/metadata/types/iso/base/DataRoot_DA",
	"dojo/_base/declare dojo/_base/lang dojo/has ../../../base/Descriptor ../../../form/Element ../../../form/Tabs ../gmd/dataQuality/CL_Quality ../gmd/distribution/CL_Distribution ../gmd/identification/CL_DataIdentification ../gmd/metadataEntity/MetadataSection_DA dojo/text!./templates/DataRoot.html ../../../../../kernel"
	.split(" "),
	function(a, b, c, d, g, h, k, l, m, n, e, f) {
		a = a(d, {
			templateString: e
		});
		c("extend-esri") &&
			b.setObject("dijit.metadata.types.iso.base.DataRoot_DA", a,
				f);
		return a
	});