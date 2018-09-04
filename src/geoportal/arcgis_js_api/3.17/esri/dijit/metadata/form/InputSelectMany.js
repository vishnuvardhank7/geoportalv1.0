// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
require({
	cache: {
		"url:esri/dijit/metadata/form/templates/InputSelectMany.html": '\x3cdiv class\x3d"gxeInput gxeInputSelectMany"\x3e\r\n  \x3cdiv class\x3d"gxeEditOnly" data-dojo-attach-point\x3d"optionsNode"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"gxeViewOnlyText gxeViewOnly" data-dojo-attach-point\x3d"viewOnlyNode"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"containerNode" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'
	}
});
define("esri/dijit/metadata/form/InputSelectMany", "dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/has ../base/InputBase ../base/OptionsMixin dojo/text!./templates/InputSelectMany.html ../../../kernel".split(" "), function(f, d, c, h, k, l, m, n, p) {
	f = f([l, m], {
		_supportsMultipleValues: !0,
		checkBoxes: null,
		templateString: n,
		subTarget: null,
		postCreate: function() {
			this.inherited(arguments);
			this.checkBoxes = []
		},
		startup: function() {
			this._started || (this.inherited(arguments), this.initializeOptions())
		},
		addOption: function(a, b) {
			var q = this,
				e = this.id + "_chk" + b,
				c = h.create("div", {
					"class": "gxeOption"
				}, this.optionsNode),
				d = a.label,
				g = {
					id: e,
					type: "checkbox",
					value: a.value
				};
			a.selected && (g.checked = "checked");
			g.onclick = function() {
				q._onClick(this)
			};
			g = h.create("input", g, c);
			g.xtnLabel = d;
			this.checkBoxes.push(g);
			e = h.create("label", {
				"for": e
			}, c);
			this.setNodeText(e, d)
		},
		filterOptions: function(a) {
			if (!this.parentXNode || !this.parentXNode.optionsFilter) return a;
			var b = this.parentXNode.optionsFilter.split(",");
			return c.filter(a,
				function(a) {
					return c.some(b, function(b) {
						return a.value === b
					})
				})
		},
		getDisplayValue: function() {
			var a = [];
			c.forEach(this.checkBoxes, function(b) {
				b.checked && a.push(b.xtnLabel)
			});
			return 1 === a.length ? a[0] : 1 < a.length ? a : null
		},
		getInputValue: function() {
			var a = [];
			c.forEach(this.checkBoxes, function(b) {
				b.checked && a.push(b.value)
			});
			return 1 === a.length ? a[0] : 1 < a.length ? a : null
		},
		importValues: function(a, b) {
			c.forEach(this.checkBoxes, function(a) {
				var e, f = c.some(b, function(b) {
					if (null != b) return e = d.trim(b), e === a.value
				});
				a.checked =
					f
			});
			this.applyViewOnly()
		},
		initializeOptions: function() {
			this.fetchOptionWidgets().then(d.hitch(this, function(a) {
				a = this.filterOptions(a);
				this.populateOptions(a)
			}), d.hitch(this, function(a) {
				console.error(a)
			}), d.hitch(this, function(a) {}))
		},
		_onClick: function(a) {
			this.emitInteractionOccurred()
		},
		populateOptions: function(a) {
			c.forEach(a, function(a, b) {
				this.addOption(a, b)
			}, this);
			var b = this.containerNode;
			this.destroyDescendants(!1);
			setTimeout(function() {
				h.destroy(b)
			}, 5E3)
		}
	});
	k("extend-esri") && d.setObject("dijit.metadata.form.InputSelectMany",
		f, p);
	return f
});