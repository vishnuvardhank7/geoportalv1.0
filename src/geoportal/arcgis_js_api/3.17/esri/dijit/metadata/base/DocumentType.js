// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/base/DocumentType", "dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has dijit/_WidgetBase ../../../kernel".split(" "), function(c, d, h, e, f, g) {
	c = c([f], {
		caption: null,
		description: null,
		key: null,
		metadataStandardName: null,
		metadataStandardVersion: null,
		namespaces: null,
		postCreate: function() {
			this.inherited(arguments);
			this.namespaces = [];
			this.initialize();
			this.initializeNamespaces()
		},
		addNamespace: function(a, b) {
			this.namespaces.push({
				prefix: a,
				uri: b
			})
		},
		afterInitializeAttribute: function(a,
			b) {},
		afterInitializeElement: function(a, b) {},
		afterTransform: function(a, b) {},
		beforeInitializeAttribute: function(a, b) {},
		beforeInitializeElement: function(a, b) {},
		getCaption: function() {
			return null
		},
		getKey: function() {
			return this.key
		},
		getNamespaces: function() {
			return this.namespaces
		},
		initialize: function() {},
		initializeNamespaces: function() {},
		newPortalItemTransformer: function(a) {
			return null
		},
		newRootDescriptor: function() {
			return null
		}
	});
	e("extend-esri") && d.setObject("dijit.metadata.base.DocumentType", c, g);
	return c
});