// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({
  cache: {
    "url:esri/dijit/metadata/types/iso/gmd/metadataEntity/templates/Classifi_ProductionPhase.html":
      '\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListElement"\r\n    data-dojo-props\x3d"target:\'gmd:classify_production\'"\x3e\r\n\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeSpaceAttribute"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListAttribute"\r\n      data-dojo-props\x3d"value:\'${codeListPrefix}classify_production\'"\x3e\x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/CodeListValueAttribute"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectOne"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Options"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'\',value:\'\',selected:true"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nIso.classifi_productionphase.datasrc}\',value:\'datasrc\'"\x3e\x3c/div\x3e      \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nIso.classifi_productionphase.masterdata}\',value:\'masterdata\'"\x3e\x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nIso.classifi_productionphase.warehousedata}\',value:\'warehousedata\'"\x3e\x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nIso.classifi_productionphase.prodasset}\',value:\'prodasset\'"\x3e\x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nIso.classifi_productionphase.productextract}\',value:\'productextract\'"\x3e\x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nIso.classifi_productionphase.tailored}\',value:\'tailored\'"\x3e\x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nIso.classifi_productionphase.featuredata}\',value:\'featuredata\'"\x3e\x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nIso.classifi_productionphase.appdata}\',value:\'appdata\'"\x3e\x3c/div\x3e                \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nIso.classifi_productionphase.map}\',value:\'map\'"\x3e\x3c/div\x3e  \r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nIso.classifi_productionphase.analytics}\',value:\'analytics\'"\x3e\x3c/div\x3e  \r\n               \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'
  }
});
define(
  "esri/dijit/metadata/types/iso/gmd/metadataEntity/Classifi_ProductionPhase",
  "dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/InputSelectOne ../../../../form/Options ../../../../form/Option ../../../../form/iso/CodeListAttribute ../../../../form/iso/CodeListValueAttribute ../../../../form/iso/CodeListElement ../../../../form/iso/CodeSpaceAttribute dojo/text!./templates/Classifi_ProductionPhase.html ../../../../../../kernel".split(
    " "
  ),
  function(a, b, c, d, g, h, k, l, m, n, p, e, f) {
    a = a(d, { templateString: e });
    c("extend-esri") &&
      b.setObject(
        "dijit.metadata.types.iso.gmd.metadataEntity.Classifi_ProductionPhase",
        a,
        f
      );
    return a;
  }
);
