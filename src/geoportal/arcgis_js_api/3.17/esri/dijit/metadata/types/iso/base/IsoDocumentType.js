// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
define(
		"esri/dijit/metadata/types/iso/base/IsoDocumentType",
		"dojo/_base/declare dojo/_base/lang dojo/has ../../../base/DocumentType ./PortalItemTransformer dojo/i18n!../../../nls/i18nIso"
				.split(" "),
		function(e, f, g, h, k, m, l) {
			e = e(
					h,
					{
						caption : null,
						key : null,
						isIso : !0,
						isService : !1,
						isGmi : !1,
						metadataStandardName : null,
						metadataStandardVersion : null,
						afterInitializeAttribute : function(d, a) {
							this.inherited(arguments)
						},
						afterInitializeElement : function(d, a) {
							this.inherited(arguments)
						},
						beforeInitializeAttribute : function(d, a) {
							var b = a.gxePath, c = d.rootElement.gxePath;
							this.isService
									&& b === c
											+ "/gmd:hierarchyLevel/gmd:MD_ScopeCode/@codeListValue" ? a.optionsFilter = "service"
									: this.isService
											&& b === c
													+ "/gmd:dataQualityInfo/gmd:DQ_DataQuality/gmd:scope/gmd:DQ_Scope/gmd:level/gmd:MD_ScopeCode/@codeListValue" ? a.optionsFilter = "service"
											: this.inherited(arguments)
						},
						beforeInitializeElement : function(d, a) {
							var b = a.gxePath, c = d.rootElement.gxePath;
							this.isService && b === c + "/gmd:hierarchyLevel" ? a.maxOccurs = 1
									: this.isService
											&& b === c
													+ "/gmd:hierarchyLevelName" ? a.maxOccurs = 1
											: b === c
													+ "/gmd:metadataStandardName/gco:CharacterString" ? this.metadataStandardName
													&& (a.value = this.metadataStandardName)
													: b === c
															+ "/gmd:metadataStandardVersion/gco:CharacterString" ? this.metadataStandardVersion
															&& (a.value = this.metadataStandardVersion)
															: b === c
																	+ "/gmd:identificationInfo/srv:SV_ServiceIdentification/srv:extent/gmd:EX_Extent/gmd:geographicElement" ? a.minOccurs = 0
																	: this
																			.inherited(arguments)
						},
						initializeNamespaces : function() {
							this.addNamespace("gmd",
									"http://www.isotc211.org/2005/gmd");
							this.addNamespace("gco",
									"http://www.isotc211.org/2005/gco");
							this.addNamespace("srv",
									"http://www.isotc211.org/2005/srv");
							this.addNamespace("gml",
									"http://www.opengis.net/gml");
							this.addNamespace("xlink",
									"http://www.w3.org/1999/xlink")
						},
						newPortalItemTransformer : function(d) {
							return new k
						}
					});
			g("extend-esri")
					&& f.setObject(
							"dijit.metadata.types.iso.base.IsoDocumentType", e,
							l);
			return e
		});