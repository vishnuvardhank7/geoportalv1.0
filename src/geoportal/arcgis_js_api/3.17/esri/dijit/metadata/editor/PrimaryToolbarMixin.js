// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/editor/PrimaryToolbarMixin", "dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-class dojo/dom-style dojo/has dojo/i18n!../nls/i18nBase ../base/ValidationTracker ../base/xml/XmlInterrogator ../base/xml/xmlUtil ./util/DownloadXmlDialog ./util/LoadDocumentDialog ./util/MessageDialog ./util/SaveDocumentDialog ./util/TransformDialog ../base/transform/Iso2IsoTransformer ../../../kernel".split(" "), function(m, c, s, p, t, v, d, n, w, q, x, y, h, z, A, B, C) {
	m = m(null, {
		constructor: function(a) {
			c.mixin(this,
				a)
		},
		_compareXmls: function(a, b) {
			var f = function(a) {
					if ("undefined" === typeof a || null === a) return a;
					var b = a.indexOf("\x3cModTime\x3e"),
						c;
					return -1 !== b && (c = a.indexOf("\x3c/ModTime\x3e"), c > b) ? (b = a.substring(0, b), a = a.substring(c + 10), b + a) : a
				},
				c = f(a),
				f = f(b);
			return c === f ? !0 : !1
		},
		_confirmAndDelete: function() {
			if (this.editor.gxeAdaptor.getAllowEditMetadata() && this.editor.gxeAdaptor.getAllowDeleteMetadata()) {
				var a = this.editor && this.editor.dialogBroker;
				(new h({
					title: d.editor.del.dialogTitle,
					okLabel: d.editor.del.caption,
					onOkClick: c.hitch(this, function() {
						var b = new h({
							title: d.editor.del.dialogTitle,
							showOkCancelBar: !1
						});
						b.show(d.editor.del.working).then(c.hitch(this, function() {
							this.editor.gxeAdaptor.deleteMetadata({}).then(c.hitch(this, function() {
								this.lastSavedXml = null;
								setTimeout(c.hitch(this, function() {
									b.hide();
									a && this._close()
								}), 1500)
							}), c.hitch(this, function(a) {
								b.hide();
								this._handleError(d.editor.del.errorDeleting, a, !0)
							}))
						}))
					})
				})).show(d.editor.del.prompt)
			}
		},
		_executeSave: function(a, b, f, e) {
			if (this.editor.gxeAdaptor.getAllowEditMetadata()) {
				var g =
					new h({
						title: d.editor.save.dialogTitle,
						showOkCancelBar: !1
					});
				g.show(d.editor.save.working).then(c.hitch(this, function() {
					this.editor.gxeAdaptor.saveXml(a, b, e).then(c.hitch(this, function() {
						this.lastSavedXml = b;
						setTimeout(c.hitch(this, function() {
							g.hide();
							f && this._close()
						}), 1500)
					}), c.hitch(this, function(a) {
						g.hide();
						this._handleError(d.editor.save.errorSaving, a, !0)
					}))
				}))
			}
		},
		_download: function(a, b, c) {
			null === b && (b = "metadata");
			var e;
			e = b + ".xml";
			window.navigator && window.navigator.msSaveOrOpenBlob ? window.navigator.msSaveOrOpenBlob(new Blob([a], {
				type: "text/xml"
			}), e) : (e = d.editor.download.dialogTitle, c && (e = d.editor.saveDraft.dialogTitle), c = new x({
				dialogTitle: e
			}), c.show(a, b))
		},
		_getTransformationTypes: function(a) {
			var b = [];
			a = this.editor.getEditDocument();
			if (!a || !a.documentType.isIso) return b;
			s.forEach(this.editor.gxeContext.filterDocumentTypes(), function(c) {
				c.key !== a.documentType.key && c.isIso && a.documentType.isIso && b.push(c)
			});
			return b
		},
		_handleError: function(a, b, c) {
			if (b) try {
				console.error(b)
			} catch (e) {}
			c && (new h({
				title: d.editor.errorDialog.dialogTitle,
				showOk: !1,
				cancelLabel: d.general.close
			})).show(a, "gxeIconError", b)
		},
		_initializeView: function() {
			var a = this.editor.gxeAdaptor.getAllowEditMetadata(),
				b = this.editor.gxeContext.allowView,
				f = this.editor.gxeContext.allowViewXml,
				e = this.editor.gxeContext.startupTypeKey,
				g = null;
			"string" === typeof e && 0 < e.length && -1 !== this.editor.gxeContext.allowedTypeKeys.indexOf(e) && s.some(this.editor.gxeContext.documentTypes.list, function(a) {
				if (a.key === e) return g = a, !0
			});
			var l = c.hitch(this, function(e, l) {
					t.set(this.commonToolset,
						"display", "");
					l && a ? (this._setMode("edit"), g ? this._fadeOut(d.editor.primaryToolbar.loadingDocument, c.hitch(this, function() {
						this.editor.loadEditor(g, null, !0, !1).then(c.hitch(this, function() {
							this._fadeIn()
						}), c.hitch(this, function(a) {
							this._fadeIn();
							this._handleError(d.editor.primaryToolbar.errors.errorLoadingDocument, a, !0)
						}))
					})) : this._fadeIn(c.hitch(this, function() {
						setTimeout(c.hitch(this, function() {
							this._showLoadDialog(d.editor.load.noMetadata)
						}), 500)
					}))) : (!b && (!f && a) && (e = "edit"), this._setMode(e), this._fadeIn())
				}),
				r = this.editor.viewDocumentPane,
				u, h = null,
				m, k = this._parseXml(this.editor.gxeAdaptor.getOriginalXml());
			k.documentType ? (u = k.documentType, h = k.xmlString, m = k.xmlDocument, a && !b ? (t.set(this.commonToolset, "display", ""), this._setMode("edit"), this._loadEditor()) : this._fadeOut(d.editor.primaryToolbar.initializing, c.hitch(this, function() {
				this.editor.loadView(u, m, !0).then(c.hitch(this, function(a) {
					r.xmlString = h;
					this.editor.xmlPane.setXml(h, a.originalTitle);
					l("view")
				}), c.hitch(this, function(a) {
					l("view");
					this._handleError(d.editor.primaryToolbar.errors.errorGeneratingView,
						a, !0)
				}))
			}))) : k.xmlDocument ? (k = d.editor.xmlViewOnly, "string" === typeof this.editor.gxeContext.xmlViewOnlyText && (k = this.editor.gxeContext.xmlViewOnlyText), !b && a ? this.editor.editDocumentPane.showMessage(k) : r.showMessage(k), l("viewXml")) : (r.showMessage(d.editor.noMetadata), l("view", !0))
		},
		_loadEditor: function() {
			if (this.editor.gxeAdaptor.getAllowEditMetadata()) {
				var a, b = this._parseXml(this.editor.gxeAdaptor.getOriginalXml());
				b.documentType ? this._fadeOut(d.editor.primaryToolbar.startingEditor, c.hitch(this,
					function() {
						this.editor.loadEditor(b.documentType, b.xmlDocument, !1, !0).then(c.hitch(this, function() {
							this._fadeIn()
						}), c.hitch(this, function(a) {
							this._fadeIn();
							this._handleError(d.editor.primaryToolbar.errors.errorLoadingDocument, a, !0)
						}))
					})) : (a = d.editor.load.noMetadata, b.xmlDocument && (a = d.editor.load.unrecognizedMetadata), this._showLoadDialog(a))
			}
		},
		_loadView: function() {
			var a = this.editor.getEditDocument();
			if (a) {
				var b = this.editor.viewDocumentPane,
					f = new n({
						ignoreErrors: !0
					}),
					e = a.generateXml(f);
				this._compareXmls(e,
					b.xmlString) ? this._setMode("view") : (p.add(this.viewButton.domNode, "current"), p.remove(this.viewXmlButton.domNode, "current"), p.remove(this.editButton.domNode, "current"), this._fadeOut(d.editor.primaryToolbar.generatingView, c.hitch(this, function() {
					this._setMode("view");
					var f = a.documentType,
						l = q.parseFromString(e);
					this.editor.loadView(f, l, !1).then(c.hitch(this, function(a) {
						b.xmlString = e;
						b.hideMessage();
						this.editor.xmlPane.setXml(e, a.originalTitle);
						this._fadeIn()
					}), c.hitch(this, function(a) {
						b.hideMessage();
						this._fadeIn();
						this._handleError(d.editor.primaryToolbar.errors.errorGeneratingView, a, !0)
					}))
				})))
			} else this._setMode("view")
		},
		_parseXml: function(a) {
			var b = {
				documentType: null,
				xmlString: a,
				xmlDocument: null
			};
			if (!a) return b;
			var c = null;
			try {
				c = q.parseFromString(a)
			} catch (d) {
				return b
			}
			b.xmlDocument = c;
			a = this.editor.gxeContext.filterDocumentTypes();
			var g = new w;
			b.documentType = g.interrogate(c, a);
			return b
		},
		_save: function(a) {
			if (this.editor.gxeAdaptor.getAllowEditMetadata()) {
				var b = this.editor.getEditDocument();
				if (b) {
					this.editor.validationPane.clearMessages();
					var d = new n({
						isSaveAsDraft: !0,
						validationPane: this.editor.validationPane
					});
					this.editor.gxeContext.validateOnSave && !a.isSaveAsDraft && (d.isSaveAsDraft = !1);
					var e = b.generateXml(d),
						g = d.documentTitle;
					if (!d.hadValidationErrors && !(null === g || 0 === g.length)) a.isSaveAsDraft ? this._download(e, g, !0) : a.showDialog ? (a = new z({
						editor: this.editor,
						gxeDocument: b,
						onSave: c.hitch(this, function(a, c, d) {
							a.hide();
							this._executeSave(b, e, c, d)
						})
					}), a.show()) : this._executeSave(b, e, a.isSaveAndClose, a.bPushToItem)
				}
			}
		},
		_showLoadDialog: function(a) {
			(new y({
				editor: this.editor,
				prompt: a,
				onSelect: c.hitch(this, function(a, f, e, g) {
					a.hide();
					this._fadeOut(d.editor.primaryToolbar.loadingDocument, c.hitch(this, function() {
						this.editor.loadEditor(f, e, g, !1).then(c.hitch(this, function() {
							this._fadeIn()
						}), c.hitch(this, function(a) {
							this._fadeIn();
							this._handleError(d.editor.primaryToolbar.errors.errorLoadingDocument, a, !0)
						}))
					}))
				}),
				onSelectPullItem: c.hitch(this, function(a) {
					a.hide();
					this.editor.gxeAdaptor.pullItem(this.editor.getEditDocument())
				})
			})).show()
		},
		_showTransformDialog: function(a, b) {
			(new A({
				editor: this.editor,
				documentTypes: b,
				prompt: null,
				onSelect: c.hitch(this, function(b, e) {
					b.hide();
					this._fadeOut(d.editor.transform.working, c.hitch(this, function() {
						var b = new B({
								gxeDocument: a,
								toDocumentType: e
							}),
							f = new n({
								ignoreErrors: !0
							}),
							b = a.generateXml(f, b),
							f = null;
						if (b) try {
							f = q.parseFromString(b)
						} catch (h) {
							f = null, console.error(h)
						}
						this.editor.loadEditor(e, f, !1, !1).then(c.hitch(this, function(b) {
							b.documentType.afterTransform(b, a);
							this._fadeIn()
						}), c.hitch(this, function(a) {
							this._fadeIn();
							this._handleError(d.editor.transform.errorTransforming,
								a, !0)
						}))
					}))
				})
			})).show()
		},
		_validate: function(a) {
			var b = this.editor.getEditDocument();
			b && (this.editor.validationPane.clearMessages(), a = new n({
				isSaveAsDraft: a,
				validationPane: this.editor.validationPane
			}), b.generateXml(a), a.hadValidationErrors || (new h({
				title: d.editor.validate.dialogTitle,
				showCancel: !1
			})).show(d.editor.validate.docIsValid, null, null))
		}
	});
	v("extend-esri") && c.setObject("dijit.metadata.editor.PrimaryToolbarMixin", m, C);
	return m
});