(function() {
	/*

    Copyright The Closure Library Authors.
    SPDX-License-Identifier: Apache-2.0
   */
	var a = "' of type ",
		aa = "CFInstall.js",
		ba = "CFInstall.min.js",
		l = "SCRIPT",
		ca = "Uneven number of arguments",
		da = "annotatedtimeline",
		ea = "annotationchart",
		p = "array",
		q = "browserchart",
		r = "build/yuiloader/yuiloader-min.js",
		t = "build/yuiloader/yuiloader.js",
		fa = "corechart",
		ha = "dojo/dojo.js",
		ia = "dojo/dojo.js.uncompressed.js",
		u = "dojo/dojo.xd.js",
		w = "dojo/dojo.xd.js.uncompressed.js",
		ja = "dygraph",
		ka = "ext-core-debug.js",
		x = "function",
		la = "hasOwnProperty",
		ma =
			"https://www.gstatic.cn/charts/%{version}/third_party/%{subdir}/%{filename}",
		na =
			"https://www.gstatic.com/charts/%{version}/third_party/%{subdir}/%{filename}",
		y = "imagechart",
		z = "jquery-ui.js",
		A = "jquery-ui.min.js",
		B = "jquery.js",
		C = "jquery.min.js",
		D = "mootools-yui-compressed.js",
		E = "mootools.js",
		F = "number",
		G = "object",
		oa = "orgchart",
		pa = "pre-45",
		qa = "propertyIsEnumerable",
		H = "prototype.js",
		ra = "script",
		I = "scriptaculous.js",
		K = "string",
		sa = "swfobject_src.js",
		ta = "text/javascript",
		ua = "toLocaleString",
		L = "ui",
		va = "ui_base",
		N = "webfont.js",
		O = "webfont_debug.js",
		wa = "webfontloader";
	function Aa() {
		return function(b) {
			return b;
		};
	}
	function P() {
		return function() {};
	}
	function Q(b) {
		return function() {
			return this[b];
		};
	}
	function Ba(b) {
		return function() {
			return b;
		};
	}
	var S,
		T = T || {};
	T.scope = {};
	T.Yk = function(b) {
		var c = 0;
		return function() {
			return c < b.length ? { done: !1, value: b[c++] } : { done: !0 };
		};
	};
	T.Xk = function(b) {
		return { next: T.Yk(b) };
	};
	T.Dd = function(b) {
		var c =
			"undefined" != typeof Symbol &&
			Symbol.iterator &&
			b[Symbol.iterator];
		return c ? c.call(b) : T.Xk(b);
	};
	T.Wk = function(b) {
		for (var c, d = []; !(c = b.next()).done; ) d.push(c.value);
		return d;
	};
	T.cd = function(b) {
		return b instanceof Array ? b : T.Wk(T.Dd(b));
	};
	T.du = function(b, c, d) {
		b instanceof String && (b = String(b));
		for (var e = b.length, f = 0; f < e; f++) {
			var g = b[f];
			if (c.call(d, g, f, b)) return { Em: f, Qo: g };
		}
		return { Em: -1, Qo: void 0 };
	};
	T.Ej = !1;
	T.jp = !1;
	T.kp = !1;
	T.Nr = !1;
	T.defineProperty =
		T.Ej || typeof Object.defineProperties == x
			? Object.defineProperty
			: function(b, c, d) {
					b != Array.prototype &&
						b != Object.prototype &&
						(b[c] = d.value);
			  };
	T.im = function(b) {
		b = [
			G == typeof window && window,
			G == typeof self && self,
			G == typeof global && global,
			b
		];
		for (var c = 0; c < b.length; ++c) {
			var d = b[c];
			if (d && d.Math == Math) return d;
		}
		return globalThis;
	};
	T.global = T.im(this);
	T.Pc = function(b, c) {
		if (c) {
			var d = T.global;
			b = b.split(".");
			for (var e = 0; e < b.length - 1; e++) {
				var f = b[e];
				f in d || (d[f] = {});
				d = d[f];
			}
			b = b[b.length - 1];
			e = d[b];
			c = c(e);
			c != e &&
				null != c &&
				T.defineProperty(d, b, {
					configurable: !0,
					writable: !0,
					value: c
				});
		}
	};
	T.Pg = function(b, c, d) {
		if (null == b)
			throw new TypeError(
				"The 'this' value for String.prototype." +
					d +
					" must not be null or undefined"
			);
		if (c instanceof RegExp)
			throw new TypeError(
				"First argument to String.prototype." +
					d +
					" must not be a regular expression"
			);
		return b + "";
	};
	T.Pc("String.prototype.repeat", function(b) {
		return b
			? b
			: function(c) {
					var d = T.Pg(this, null, "repeat");
					if (0 > c || 1342177279 < c)
						throw new RangeError("Invalid count value");
					c |= 0;
					for (var e = ""; c; )
						if ((c & 1 && (e += d), (c >>>= 1))) d += d;
					return e;
			  };
	});
	T.ek = !1;
	T.Pc("Promise", function(b) {
		function c(h) {
			this.oa = g.Wa;
			this.Ga = void 0;
			this.hc = [];
			var m = this.Ae();
			try {
				h(m.resolve, m.reject);
			} catch (n) {
				m.reject(n);
			}
		}
		function d() {
			this.ob = null;
		}
		function e(h) {
			return h instanceof c
				? h
				: new c(function(m) {
						m(h);
				  });
		}
		if (b && !T.ek) return b;
		d.prototype.Gg = function(h) {
			if (null == this.ob) {
				this.ob = [];
				var m = this;
				this.Hg(function() {
					m.Rl();
				});
			}
			this.ob.push(h);
		};
		var f = T.global.setTimeout;
		d.prototype.Hg = function(h) {
			f(h, 0);
		};
		d.prototype.Rl = function() {
			for (; this.ob && this.ob.length; ) {
				var h = this.ob;
				this.ob = [];
				for (var m = 0; m < h.length; ++m) {
					var n = h[m];
					h[m] = null;
					try {
						n();
					} catch (v) {
						this.jl(v);
					}
				}
			}
			this.ob = null;
		};
		d.prototype.jl = function(h) {
			this.Hg(function() {
				throw h;
			});
		};
		var g = { Wa: 0, lb: 1, Ia: 2 };
		c.prototype.Ae = function() {
			function h(v) {
				return function(J) {
					n || ((n = !0), v.call(m, J));
				};
			}
			var m = this,
				n = !1;
			return { resolve: h(this.Sn), reject: h(this.pf) };
		};
		c.prototype.Sn = function(h) {
			if (h === this)
				this.pf(new TypeError("A Promise cannot resolve to itself"));
			else if (h instanceof c) this.po(h);
			else {
				a: switch (typeof h) {
					case G:
						var m = null != h;
						break a;
					case x:
						m = !0;
						break a;
					default:
						m = !1;
				}
				m ? this.Rn(h) : this.ph(h);
			}
		};
		c.prototype.Rn = function(h) {
			var m = void 0;
			try {
				m = h.then;
			} catch (n) {
				this.pf(n);
				return;
			}
			typeof m == x ? this.qo(m, h) : this.ph(h);
		};
		c.prototype.pf = function(h) {
			this.ej(g.Ia, h);
		};
		c.prototype.ph = function(h) {
			this.ej(g.lb, h);
		};
		c.prototype.ej = function(h, m) {
			if (this.oa != g.Wa)
				throw Error(
					"Cannot settle(" +
						h +
						", " +
						m +
						"): Promise already settled in state" +
						this.oa
				);
			this.oa = h;
			this.Ga = m;
			this.Tl();
		};
		c.prototype.Tl = function() {
			if (null != this.hc) {
				for (var h = 0; h < this.hc.length; ++h) k.Gg(this.hc[h]);
				this.hc = null;
			}
		};
		var k = new d();
		c.prototype.po = function(h) {
			var m = this.Ae();
			h.ed(m.resolve, m.reject);
		};
		c.prototype.qo = function(h, m) {
			var n = this.Ae();
			try {
				h.call(m, n.resolve, n.reject);
			} catch (v) {
				n.reject(v);
			}
		};
		c.prototype.then = function(h, m) {
			function n(M, R) {
				return typeof M == x
					? function(xa) {
							try {
								v(M(xa));
							} catch (ya) {
								J(ya);
							}
					  }
					: R;
			}
			var v,
				J,
				za = new c(function(M, R) {
					v = M;
					J = R;
				});
			this.ed(n(h, v), n(m, J));
			return za;
		};
		c.prototype.catch = function(h) {
			return this.then(void 0, h);
		};
		c.prototype.ed = function(h, m) {
			function n() {
				switch (v.oa) {
					case g.lb:
						h(v.Ga);
						break;
					case g.Ia:
						m(v.Ga);
						break;
					default:
						throw Error("Unexpected state: " + v.oa);
				}
			}
			var v = this;
			null == this.hc ? k.Gg(n) : this.hc.push(n);
		};
		c.resolve = e;
		c.reject = function(h) {
			return new c(function(m, n) {
				n(h);
			});
		};
		c.race = function(h) {
			return new c(function(m, n) {
				for (var v = T.Dd(h), J = v.next(); !J.done; J = v.next())
					e(J.value).ed(m, n);
			});
		};
		c.all = function(h) {
			var m = T.Dd(h),
				n = m.next();
			return n.done
				? e([])
				: new c(function(v, J) {
						function za(xa) {
							return function(ya) {
								M[xa] = ya;
								R--;
								0 == R && v(M);
							};
						}
						var M = [],
							R = 0;
						do
							M.push(void 0),
								R++,
								e(n.value).ed(za(M.length - 1), J),
								(n = m.next());
						while (!n.done);
				  });
		};
		return c;
	});
	T.Pc("Object.is", function(b) {
		return b
			? b
			: function(c, d) {
					return c === d
						? 0 !== c || 1 / c === 1 / d
						: c !== c && d !== d;
			  };
	});
	T.Pc("Array.prototype.includes", function(b) {
		return b
			? b
			: function(c, d) {
					var e = this;
					e instanceof String && (e = String(e));
					var f = e.length;
					d = d || 0;
					for (0 > d && (d = Math.max(d + f, 0)); d < f; d++) {
						var g = e[d];
						if (g === c || Object.is(g, c)) return !0;
					}
					return !1;
			  };
	});
	T.Pc("String.prototype.includes", function(b) {
		return b
			? b
			: function(c, d) {
					return -1 !== T.Pg(this, c, "includes").indexOf(c, d || 0);
			  };
	});
	var U = U || {};
	U.global = this || self;
	U.hh = function(b, c, d) {
		b = b.split(".");
		d = d || U.global;
		b[0] in d ||
			"undefined" == typeof d.execScript ||
			d.execScript("var " + b[0]);
		for (var e; b.length && (e = b.shift()); )
			b.length || void 0 === c
				? (d =
						d[e] && d[e] !== Object.prototype[e]
							? d[e]
							: (d[e] = {}))
				: (d[e] = c);
	};
	U.define = function(b, c) {
		return c;
	};
	U.ck = 2012;
	U.la = !0;
	U.R = "en";
	U.ne = !0;
	U.Rr = !1;
	U.Zj = !U.la;
	U.$p = !1;
	U.ow = function(b) {
		if (U.ni()) throw Error("goog.provide cannot be used within a module.");
		U.Ug(b);
	};
	U.Ug = function(b, c) {
		U.hh(b, c);
	};
	U.Sh = function() {
		null === U.Be && (U.Be = U.nm());
		return U.Be;
	};
	U.rk = /^[\w+/_-]+[=]{0,2}$/;
	U.Be = null;
	U.nm = function() {
		var b = U.global.document;
		return (b = b.querySelector && b.querySelector("script[nonce]")) &&
			(b = b.nonce || b.getAttribute("nonce")) &&
			U.rk.test(b)
			? b
			: "";
	};
	U.Pk = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
	U.jf = function(b) {
		if (typeof b !== K || !b || -1 == b.search(U.Pk))
			throw Error("Invalid module identifier");
		if (!U.mi())
			throw Error(
				"Module " +
					b +
					" has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide."
			);
		if (U.Da.Mc)
			throw Error("goog.module may only be called once per module.");
		U.Da.Mc = b;
	};
	U.jf.get = Ba(null);
	U.jf.Fu = Ba(null);
	U.rc = { Yf: "es6", he: "goog" };
	U.Da = null;
	U.ni = function() {
		return U.mi() || U.Mm();
	};
	U.mi = function() {
		return !!U.Da && U.Da.type == U.rc.he;
	};
	U.Mm = function() {
		if (U.Da && U.Da.type == U.rc.Yf) return !0;
		var b = U.global.$jscomp;
		return b ? (typeof b.Ke != x ? !1 : !!b.Ke()) : !1;
	};
	U.jf.Ce = function() {
		U.Da.Ce = !0;
	};
	U.Lt = function(b) {
		if (U.Da) U.Da.Mc = b;
		else {
			var c = U.global.$jscomp;
			if (!c || typeof c.Ke != x)
				throw Error(
					'Module with namespace "' +
						b +
						'" has been loaded incorrectly.'
				);
			c = c.Pn(c.Ke());
			U.Hi[b] = { Vl: c, type: U.rc.Yf, vn: b };
		}
	};
	U.hx = function(b) {
		if (U.Zj)
			throw ((b = b || ""),
			Error(
				"Importing test-only code into non-debug environment" +
					(b ? ": " + b : ".")
			));
	};
	U.ju = P();
	U.Jb = function(b) {
		b = b.split(".");
		for (var c = U.global, d = 0; d < b.length; d++)
			if (((c = c[b[d]]), null == c)) return null;
		return c;
	};
	U.Vu = function(b, c) {
		c = c || U.global;
		for (var d in b) c[d] = b[d];
	};
	U.Bs = P();
	U.Mx = !1;
	U.aq = !0;
	U.Ii = function(b) {
		U.global.console && U.global.console.error(b);
	};
	U.Pn = P();
	U.zw = function() {
		return {};
	};
	U.ll = "";
	U.Mb = P();
	U.zs = function() {
		throw Error("unimplemented abstract method");
	};
	U.Cs = P();
	U.gv = [];
	U.Wq = !0;
	U.Ek = U.la;
	U.Hi = {};
	U.Mp = !1;
	U.ms = "detect";
	U.ip = !1;
	U.ns = "";
	U.Kk = "transpile.js";
	U.Xe = null;
	U.Oo = function() {
		if (null == U.Xe) {
			try {
				var b = !eval(
					'"use strict";let x = 1; function f() { return typeof x; };f() == "number";'
				);
			} catch (c) {
				b = !1;
			}
			U.Xe = b;
		}
		return U.Xe;
	};
	U.To = function(b) {
		return "(function(){" + b + "\n;})();\n";
	};
	U.Gi = function(b) {
		var c = U.Da;
		try {
			U.Da = { Mc: "", Ce: !1, type: U.rc.he };
			if (U.Sa(b)) var d = b.call(void 0, {});
			else if (typeof b === K)
				U.Oo() && (b = U.To(b)), (d = U.hn.call(void 0, b));
			else throw Error("Invalid module definition");
			var e = U.Da.Mc;
			if (typeof e === K && e)
				U.Da.Ce
					? U.Ug(e, d)
					: U.Ek &&
					  Object.seal &&
					  typeof d == G &&
					  null != d &&
					  Object.seal(d),
					(U.Hi[e] = { Vl: d, type: U.rc.he, vn: U.Da.Mc });
			else throw Error('Invalid module name "' + e + '"');
		} finally {
			U.Da = c;
		}
	};
	U.hn = function(b) {
		eval(b);
		return {};
	};
	U.cw = function(b) {
		b = b.split("/");
		for (var c = 0; c < b.length; )
			"." == b[c]
				? b.splice(c, 1)
				: c && ".." == b[c] && b[c - 1] && ".." != b[c - 1]
				? b.splice(--c, 2)
				: c++;
		return b.join("/");
	};
	U.dn = function(b) {
		if (U.global.Rj) return U.global.Rj(b);
		try {
			var c = new U.global.XMLHttpRequest();
			c.open("get", b, !1);
			c.send();
			return 0 == c.status || 200 == c.status ? c.responseText : null;
		} catch (d) {
			return null;
		}
	};
	U.Gx = function(b, c, d) {
		var e = U.global.$jscomp;
		e || (U.global.$jscomp = e = {});
		var f = e.Df;
		if (!f) {
			var g = U.ll + U.Kk,
				k = U.dn(g);
			if (k) {
				(function() {
					(0, eval)(k + "\n//# sourceURL=" + g);
				}.call(U.global));
				if (
					U.global.$gwtExport &&
					U.global.$gwtExport.$jscomp &&
					!U.global.$gwtExport.$jscomp.transpile
				)
					throw Error(
						'The transpiler did not properly export the "transpile" method. $gwtExport: ' +
							JSON.stringify(U.global.$gwtExport)
					);
				U.global.$jscomp.Df = U.global.$gwtExport.$jscomp.transpile;
				e = U.global.$jscomp;
				f = e.Df;
			}
		}
		if (!f) {
			var h = " requires transpilation but no transpiler was found.";
			h +=
				' Please add "//javascript/closure:transpiler" as a data dependency to ensure it is included.';
			f = e.Df = function(m, n) {
				U.Ii(n + h);
				return m;
			};
		}
		return f(b, c, d);
	};
	U.pa = function(b) {
		var c = typeof b;
		if (c == G)
			if (b) {
				if (b instanceof Array) return p;
				if (b instanceof Object) return c;
				var d = Object.prototype.toString.call(b);
				if ("[object Window]" == d) return G;
				if (
					"[object Array]" == d ||
					(typeof b.length == F &&
						"undefined" != typeof b.splice &&
						"undefined" != typeof b.propertyIsEnumerable &&
						!b.propertyIsEnumerable("splice"))
				)
					return p;
				if (
					"[object Function]" == d ||
					("undefined" != typeof b.call &&
						"undefined" != typeof b.propertyIsEnumerable &&
						!b.propertyIsEnumerable("call"))
				)
					return x;
			} else return "null";
		else if (c == x && "undefined" == typeof b.call) return G;
		return c;
	};
	U.isArray = function(b) {
		return U.pa(b) == p;
	};
	U.ka = function(b) {
		var c = U.pa(b);
		return c == p || (c == G && typeof b.length == F);
	};
	U.pv = function(b) {
		return U.Ba(b) && typeof b.getFullYear == x;
	};
	U.Sa = function(b) {
		return U.pa(b) == x;
	};
	U.Ba = function(b) {
		var c = typeof b;
		return (c == G && null != b) || c == x;
	};
	U.Vh = function(b) {
		return (
			(Object.prototype.hasOwnProperty.call(b, U.nb) && b[U.nb]) ||
			(b[U.nb] = ++U.Go)
		);
	};
	U.$u = function(b) {
		return !!b[U.nb];
	};
	U.Nn = function(b) {
		null !== b && "removeAttribute" in b && b.removeAttribute(U.nb);
		try {
			delete b[U.nb];
		} catch (c) {}
	};
	U.nb = "closure_uid_" + ((1e9 * Math.random()) >>> 0);
	U.Go = 0;
	U.Du = U.Vh;
	U.uw = U.Nn;
	U.yl = function(b) {
		var c = U.pa(b);
		if (c == G || c == p) {
			if (typeof b.clone === x) return b.clone();
			c = c == p ? [] : {};
			for (var d in b) c[d] = U.yl(b[d]);
			return c;
		}
		return b;
	};
	U.nl = function(b, c, d) {
		return b.call.apply(b.bind, arguments);
	};
	U.ml = function(b, c, d) {
		if (!b) throw Error();
		if (2 < arguments.length) {
			var e = Array.prototype.slice.call(arguments, 2);
			return function() {
				var f = Array.prototype.slice.call(arguments);
				Array.prototype.unshift.apply(f, e);
				return b.apply(c, f);
			};
		}
		return function() {
			return b.apply(c, arguments);
		};
	};
	U.bind = function(b, c, d) {
		U.bind =
			Function.prototype.bind &&
			-1 != Function.prototype.bind.toString().indexOf("native code")
				? U.nl
				: U.ml;
		return U.bind.apply(null, arguments);
	};
	U.Nb = function(b, c) {
		var d = Array.prototype.slice.call(arguments, 1);
		return function() {
			var e = d.slice();
			e.push.apply(e, arguments);
			return b.apply(this, e);
		};
	};
	U.Yv = function(b, c) {
		for (var d in c) b[d] = c[d];
	};
	U.now =
		(U.ne && Date.now) ||
		function() {
			return +new Date();
		};
	U.Uu = function(b) {
		if (U.global.execScript) U.global.execScript(b, "JavaScript");
		else if (U.global.eval) {
			if (null == U.nd) {
				try {
					U.global.eval("var _evalTest_ = 1;");
				} catch (e) {}
				if ("undefined" != typeof U.global._evalTest_) {
					try {
						delete U.global._evalTest_;
					} catch (e) {}
					U.nd = !0;
				} else U.nd = !1;
			}
			if (U.nd) U.global.eval(b);
			else {
				var c = U.global.document,
					d = c.createElement(ra);
				d.type = ta;
				d.defer = !1;
				d.appendChild(c.createTextNode(b));
				c.head.appendChild(d);
				c.head.removeChild(d);
			}
		} else throw Error("goog.globalEval not available");
	};
	U.nd = null;
	U.Au = function(b, c) {
		function d(g) {
			g = g.split("-");
			for (var k = [], h = 0; h < g.length; h++) k.push(e(g[h]));
			return k.join("-");
		}
		function e(g) {
			return U.$g[g] || g;
		}
		if ("." == String(b).charAt(0))
			throw Error(
				'className passed in goog.getCssName must not start with ".". You passed: ' +
					b
			);
		var f = U.$g ? ("BY_WHOLE" == U.El ? e : d) : Aa();
		b = c ? b + "-" + f(c) : f(b);
		return U.global.Qj ? U.global.Qj(b) : b;
	};
	U.Pw = function(b, c) {
		U.$g = b;
		U.El = c;
	};
	U.Gu = function(b, c, d) {
		d && d.b && (b = b.replace(/</g, "&lt;"));
		c &&
			(b = b.replace(/\{\$([^}]+)}/g, function(e, f) {
				return null != c && f in c ? c[f] : e;
			}));
		return b;
	};
	U.Hu = Aa();
	U.Cc = function(b, c) {
		U.hh(b, c, void 0);
	};
	U.$t = function(b, c, d) {
		b[c] = d;
	};
	U.vb = function(b, c) {
		function d() {}
		d.prototype = c.prototype;
		b.prototype = new d();
		b.prototype.constructor = b;
		b.Zs = function(e, f, g) {
			for (
				var k = Array(arguments.length - 2), h = 2;
				h < arguments.length;
				h++
			)
				k[h - 2] = arguments[h];
			return c.prototype[f].apply(e, k);
		};
	};
	U.scope = function(b) {
		if (U.ni()) throw Error("goog.scope is not supported within a module.");
		b.call(U.global);
	};
	U.Ka = function(b, c) {
		var d = c.constructor,
			e = c.vo;
		(d && d != Object.prototype.constructor) ||
			(d = function() {
				throw Error(
					"cannot instantiate an interface (no constructor defined)."
				);
			});
		d = U.Ka.Al(d, b);
		b && U.vb(d, b);
		delete c.constructor;
		delete c.vo;
		U.Ka.Cg(d.prototype, c);
		null != e && (e instanceof Function ? e(d) : U.Ka.Cg(d, e));
		return d;
	};
	U.Ka.Dk = U.la;
	U.Ka.Al = function(b, c) {
		function d() {
			var f = b.apply(this, arguments) || this;
			f[U.nb] = f[U.nb];
			this.constructor === d &&
				e &&
				Object.seal instanceof Function &&
				Object.seal(f);
			return f;
		}
		if (!U.Ka.Dk) return b;
		var e = !U.Ka.Xm(c);
		return d;
	};
	U.Ka.Xm = function(b) {
		return b && b.prototype && b.prototype[U.Mk];
	};
	U.Ka.kg = [
		"constructor",
		la,
		"isPrototypeOf",
		qa,
		ua,
		"toString",
		"valueOf"
	];
	U.Ka.Cg = function(b, c) {
		for (var d in c)
			Object.prototype.hasOwnProperty.call(c, d) && (b[d] = c[d]);
		for (var e = 0; e < U.Ka.kg.length; e++)
			(d = U.Ka.kg[e]),
				Object.prototype.hasOwnProperty.call(c, d) && (b[d] = c[d]);
	};
	U.xx = P();
	U.Mk = "goog_defineClass_legacy_unsealable";
	U.ad = "";
	U.zd = Aa();
	U.Zg = function(b) {
		var c = null,
			d = U.global.trustedTypes || U.global.TrustedTypes;
		if (!d || !d.createPolicy) return c;
		try {
			c = d.createPolicy(b, {
				createHTML: U.zd,
				createScript: U.zd,
				createScriptURL: U.zd,
				createURL: U.zd
			});
		} catch (e) {
			U.Ii(e.message);
		}
		return c;
	};
	U.ps = U.ad ? U.Zg(U.ad + "#base") : null;
	U.a = {};
	U.a.ra = {
		kb: 1,
		lp: 2,
		$c: 3,
		Ap: 4,
		cq: 5,
		bq: 6,
		zr: 7,
		Hp: 8,
		Uc: 9,
		Up: 10,
		$j: 11,
		lr: 12
	};
	U.debug = {};
	U.debug.Error = function(b) {
		if (Error.captureStackTrace)
			Error.captureStackTrace(this, U.debug.Error);
		else {
			var c = Error().stack;
			c && (this.stack = c);
		}
		b && (this.message = String(b));
	};
	U.vb(U.debug.Error, Error);
	U.debug.Error.prototype.name = "CustomError";
	U.m = {};
	U.m.xa = U.la;
	U.m.nc = function(b, c) {
		U.debug.Error.call(this, U.m.xo(b, c));
	};
	U.vb(U.m.nc, U.debug.Error);
	U.m.nc.prototype.name = "AssertionError";
	U.m.Wj = function(b) {
		throw b;
	};
	U.m.De = U.m.Wj;
	U.m.xo = function(b, c) {
		b = b.split("%s");
		for (var d = "", e = b.length - 1, f = 0; f < e; f++)
			d += b[f] + (f < c.length ? c[f] : "%s");
		return d + b[e];
	};
	U.m.Qa = function(b, c, d, e) {
		var f = "Assertion failed";
		if (d) {
			f += ": " + d;
			var g = e;
		} else b && ((f += ": " + b), (g = c));
		b = new U.m.nc("" + f, g || []);
		U.m.De(b);
	};
	U.m.Tw = function(b) {
		U.m.xa && (U.m.De = b);
	};
	U.m.assert = function(b, c, d) {
		U.m.xa &&
			!b &&
			U.m.Qa("", null, c, Array.prototype.slice.call(arguments, 2));
		return b;
	};
	U.m.Ms = function(b, c, d) {
		U.m.xa &&
			null == b &&
			U.m.Qa(
				"Expected to exist: %s.",
				[b],
				c,
				Array.prototype.slice.call(arguments, 2)
			);
		return b;
	};
	U.m.ua = function(b, c) {
		U.m.xa &&
			U.m.De(
				new U.m.nc(
					"Failure" + (b ? ": " + b : ""),
					Array.prototype.slice.call(arguments, 1)
				)
			);
	};
	U.m.Us = function(b, c, d) {
		U.m.xa &&
			typeof b !== F &&
			U.m.Qa(
				"Expected number but got %s: %s.",
				[U.pa(b), b],
				c,
				Array.prototype.slice.call(arguments, 2)
			);
		return b;
	};
	U.m.Xs = function(b, c, d) {
		U.m.xa &&
			typeof b !== K &&
			U.m.Qa(
				"Expected string but got %s: %s.",
				[U.pa(b), b],
				c,
				Array.prototype.slice.call(arguments, 2)
			);
		return b;
	};
	U.m.Os = function(b, c, d) {
		U.m.xa &&
			!U.Sa(b) &&
			U.m.Qa(
				"Expected function but got %s: %s.",
				[U.pa(b), b],
				c,
				Array.prototype.slice.call(arguments, 2)
			);
		return b;
	};
	U.m.Vs = function(b, c, d) {
		U.m.xa &&
			!U.Ba(b) &&
			U.m.Qa(
				"Expected object but got %s: %s.",
				[U.pa(b), b],
				c,
				Array.prototype.slice.call(arguments, 2)
			);
		return b;
	};
	U.m.Js = function(b, c, d) {
		U.m.xa &&
			!U.isArray(b) &&
			U.m.Qa(
				"Expected array but got %s: %s.",
				[U.pa(b), b],
				c,
				Array.prototype.slice.call(arguments, 2)
			);
		return b;
	};
	U.m.Ks = function(b, c, d) {
		U.m.xa &&
			"boolean" !== typeof b &&
			U.m.Qa(
				"Expected boolean but got %s: %s.",
				[U.pa(b), b],
				c,
				Array.prototype.slice.call(arguments, 2)
			);
		return b;
	};
	U.m.Ls = function(b, c, d) {
		!U.m.xa ||
			(U.Ba(b) && b.nodeType == U.a.ra.kb) ||
			U.m.Qa(
				"Expected Element but got %s: %s.",
				[U.pa(b), b],
				c,
				Array.prototype.slice.call(arguments, 2)
			);
		return b;
	};
	U.m.Ps = function(b, c, d, e) {
		!U.m.xa ||
			b instanceof c ||
			U.m.Qa(
				"Expected instanceof %s but got %s.",
				[U.m.Uh(c), U.m.Uh(b)],
				d,
				Array.prototype.slice.call(arguments, 3)
			);
		return b;
	};
	U.m.Ns = function(b, c, d) {
		!U.m.xa ||
			(typeof b == F && isFinite(b)) ||
			U.m.Qa(
				"Expected %s to be a finite number but it is not.",
				[b],
				c,
				Array.prototype.slice.call(arguments, 2)
			);
		return b;
	};
	U.m.Ws = function() {
		for (var b in Object.prototype)
			U.m.ua(b + " should not be enumerable in Object.prototype.");
	};
	U.m.Uh = function(b) {
		return b instanceof Function
			? b.displayName || b.name || "unknown type name"
			: b instanceof Object
			? b.constructor.displayName ||
			  b.constructor.name ||
			  Object.prototype.toString.call(b)
			: null === b
			? "null"
			: typeof b;
	};
	U.g = {};
	U.bb = U.ne;
	U.g.$a = 2012 < U.ck;
	U.g.An = function(b) {
		return b[b.length - 1];
	};
	U.g.Pv = U.g.An;
	U.g.indexOf =
		U.bb && (U.g.$a || Array.prototype.indexOf)
			? function(b, c, d) {
					return Array.prototype.indexOf.call(b, c, d);
			  }
			: function(b, c, d) {
					d = null == d ? 0 : 0 > d ? Math.max(0, b.length + d) : d;
					if (typeof b === K)
						return typeof c !== K || 1 != c.length
							? -1
							: b.indexOf(c, d);
					for (; d < b.length; d++)
						if (d in b && b[d] === c) return d;
					return -1;
			  };
	U.g.lastIndexOf =
		U.bb && (U.g.$a || Array.prototype.lastIndexOf)
			? function(b, c, d) {
					return Array.prototype.lastIndexOf.call(
						b,
						c,
						null == d ? b.length - 1 : d
					);
			  }
			: function(b, c, d) {
					d = null == d ? b.length - 1 : d;
					0 > d && (d = Math.max(0, b.length + d));
					if (typeof b === K)
						return typeof c !== K || 1 != c.length
							? -1
							: b.lastIndexOf(c, d);
					for (; 0 <= d; d--) if (d in b && b[d] === c) return d;
					return -1;
			  };
	U.g.forEach =
		U.bb && (U.g.$a || Array.prototype.forEach)
			? function(b, c, d) {
					Array.prototype.forEach.call(b, c, d);
			  }
			: function(b, c, d) {
					for (
						var e = b.length,
							f = typeof b === K ? b.split("") : b,
							g = 0;
						g < e;
						g++
					)
						g in f && c.call(d, f[g], g, b);
			  };
	U.g.oh = function(b, c) {
		var d = b.length,
			e = typeof b === K ? b.split("") : b;
		for (--d; 0 <= d; --d) d in e && c.call(void 0, e[d], d, b);
	};
	U.g.filter =
		U.bb && (U.g.$a || Array.prototype.filter)
			? function(b, c, d) {
					return Array.prototype.filter.call(b, c, d);
			  }
			: function(b, c, d) {
					for (
						var e = b.length,
							f = [],
							g = 0,
							k = typeof b === K ? b.split("") : b,
							h = 0;
						h < e;
						h++
					)
						if (h in k) {
							var m = k[h];
							c.call(d, m, h, b) && (f[g++] = m);
						}
					return f;
			  };
	U.g.map =
		U.bb && (U.g.$a || Array.prototype.map)
			? function(b, c, d) {
					return Array.prototype.map.call(b, c, d);
			  }
			: function(b, c, d) {
					for (
						var e = b.length,
							f = Array(e),
							g = typeof b === K ? b.split("") : b,
							k = 0;
						k < e;
						k++
					)
						k in g && (f[k] = c.call(d, g[k], k, b));
					return f;
			  };
	U.g.reduce =
		U.bb && (U.g.$a || Array.prototype.reduce)
			? function(b, c, d, e) {
					e && (c = U.bind(c, e));
					return Array.prototype.reduce.call(b, c, d);
			  }
			: function(b, c, d, e) {
					var f = d;
					U.g.forEach(b, function(g, k) {
						f = c.call(e, f, g, k, b);
					});
					return f;
			  };
	U.g.reduceRight =
		U.bb && (U.g.$a || Array.prototype.reduceRight)
			? function(b, c, d, e) {
					e && (c = U.bind(c, e));
					return Array.prototype.reduceRight.call(b, c, d);
			  }
			: function(b, c, d, e) {
					var f = d;
					U.g.oh(b, function(g, k) {
						f = c.call(e, f, g, k, b);
					});
					return f;
			  };
	U.g.some =
		U.bb && (U.g.$a || Array.prototype.some)
			? function(b, c, d) {
					return Array.prototype.some.call(b, c, d);
			  }
			: function(b, c, d) {
					for (
						var e = b.length,
							f = typeof b === K ? b.split("") : b,
							g = 0;
						g < e;
						g++
					)
						if (g in f && c.call(d, f[g], g, b)) return !0;
					return !1;
			  };
	U.g.every =
		U.bb && (U.g.$a || Array.prototype.every)
			? function(b, c, d) {
					return Array.prototype.every.call(b, c, d);
			  }
			: function(b, c, d) {
					for (
						var e = b.length,
							f = typeof b === K ? b.split("") : b,
							g = 0;
						g < e;
						g++
					)
						if (g in f && !c.call(d, f[g], g, b)) return !1;
					return !0;
			  };
	U.g.count = function(b, c, d) {
		var e = 0;
		U.g.forEach(
			b,
			function(f, g, k) {
				c.call(d, f, g, k) && ++e;
			},
			d
		);
		return e;
	};
	U.g.find = function(b, c, d) {
		c = U.g.findIndex(b, c, d);
		return 0 > c ? null : typeof b === K ? b.charAt(c) : b[c];
	};
	U.g.findIndex = function(b, c, d) {
		for (
			var e = b.length, f = typeof b === K ? b.split("") : b, g = 0;
			g < e;
			g++
		)
			if (g in f && c.call(d, f[g], g, b)) return g;
		return -1;
	};
	U.g.eu = function(b, c, d) {
		c = U.g.Wl(b, c, d);
		return 0 > c ? null : typeof b === K ? b.charAt(c) : b[c];
	};
	U.g.Wl = function(b, c, d) {
		var e = b.length,
			f = typeof b === K ? b.split("") : b;
		for (--e; 0 <= e; e--) if (e in f && c.call(d, f[e], e, b)) return e;
		return -1;
	};
	U.g.contains = function(b, c) {
		return 0 <= U.g.indexOf(b, c);
	};
	U.g.Aa = function(b) {
		return 0 == b.length;
	};
	U.g.clear = function(b) {
		if (!U.isArray(b)) for (var c = b.length - 1; 0 <= c; c--) delete b[c];
		b.length = 0;
	};
	U.g.dv = function(b, c) {
		U.g.contains(b, c) || b.push(c);
	};
	U.g.ci = function(b, c, d) {
		U.g.splice(b, d, 0, c);
	};
	U.g.fv = function(b, c, d) {
		U.Nb(U.g.splice, b, d, 0).apply(null, c);
	};
	U.g.insertBefore = function(b, c, d) {
		var e;
		2 == arguments.length || 0 > (e = U.g.indexOf(b, d))
			? b.push(c)
			: U.g.ci(b, c, e);
	};
	U.g.remove = function(b, c) {
		c = U.g.indexOf(b, c);
		var d;
		(d = 0 <= c) && U.g.jc(b, c);
		return d;
	};
	U.g.ww = function(b, c) {
		c = U.g.lastIndexOf(b, c);
		return 0 <= c ? (U.g.jc(b, c), !0) : !1;
	};
	U.g.jc = function(b, c) {
		return 1 == Array.prototype.splice.call(b, c, 1).length;
	};
	U.g.vw = function(b, c, d) {
		c = U.g.findIndex(b, c, d);
		return 0 <= c ? (U.g.jc(b, c), !0) : !1;
	};
	U.g.tw = function(b, c, d) {
		var e = 0;
		U.g.oh(b, function(f, g) {
			c.call(d, f, g, b) && U.g.jc(b, g) && e++;
		});
		return e;
	};
	U.g.concat = function(b) {
		return Array.prototype.concat.apply([], arguments);
	};
	U.g.join = function(b) {
		return Array.prototype.concat.apply([], arguments);
	};
	U.g.Za = function(b) {
		var c = b.length;
		if (0 < c) {
			for (var d = Array(c), e = 0; e < c; e++) d[e] = b[e];
			return d;
		}
		return [];
	};
	U.g.clone = U.g.Za;
	U.g.extend = function(b, c) {
		for (var d = 1; d < arguments.length; d++) {
			var e = arguments[d];
			if (U.ka(e)) {
				var f = b.length || 0,
					g = e.length || 0;
				b.length = f + g;
				for (var k = 0; k < g; k++) b[f + k] = e[k];
			} else b.push(e);
		}
	};
	U.g.splice = function(b, c, d, e) {
		return Array.prototype.splice.apply(b, U.g.slice(arguments, 1));
	};
	U.g.slice = function(b, c, d) {
		return 2 >= arguments.length
			? Array.prototype.slice.call(b, c)
			: Array.prototype.slice.call(b, c, d);
	};
	U.g.Kn = function(b, c) {
		c = c || b;
		for (var d = {}, e = 0, f = 0; f < b.length; ) {
			var g = b[f++];
			var k = g;
			k = U.Ba(k) ? "o" + U.Vh(k) : (typeof k).charAt(0) + k;
			Object.prototype.hasOwnProperty.call(d, k) ||
				((d[k] = !0), (c[e++] = g));
		}
		c.length = e;
	};
	U.g.Ig = function(b, c, d) {
		return U.g.Jg(b, d || U.g.qb, !1, c);
	};
	U.g.bt = function(b, c, d) {
		return U.g.Jg(b, c, !0, void 0, d);
	};
	U.g.Jg = function(b, c, d, e, f) {
		for (var g = 0, k = b.length, h; g < k; ) {
			var m = g + ((k - g) >>> 1);
			var n = d ? c.call(f, b[m], m, b) : c(e, b[m]);
			0 < n ? (g = m + 1) : ((k = m), (h = !n));
		}
		return h ? g : -g - 1;
	};
	U.g.sort = function(b, c) {
		b.sort(c || U.g.qb);
	};
	U.g.qx = function(b, c) {
		for (var d = Array(b.length), e = 0; e < b.length; e++)
			d[e] = { index: e, value: b[e] };
		var f = c || U.g.qb;
		U.g.sort(d, function(g, k) {
			return f(g.value, k.value) || g.index - k.index;
		});
		for (e = 0; e < b.length; e++) b[e] = d[e].value;
	};
	U.g.so = function(b, c, d) {
		var e = d || U.g.qb;
		U.g.sort(b, function(f, g) {
			return e(c(f), c(g));
		});
	};
	U.g.nx = function(b, c, d) {
		U.g.so(
			b,
			function(e) {
				return e[c];
			},
			d
		);
	};
	U.g.yi = function(b) {
		for (var c = U.g.qb, d = 1; d < b.length; d++)
			if (0 < c(b[d - 1], b[d])) return !1;
		return !0;
	};
	U.g.Ib = function(b, c) {
		if (!U.ka(b) || !U.ka(c) || b.length != c.length) return !1;
		for (var d = b.length, e = U.g.dh, f = 0; f < d; f++)
			if (!e(b[f], c[f])) return !1;
		return !0;
	};
	U.g.ot = function(b, c, d) {
		d = d || U.g.qb;
		for (var e = Math.min(b.length, c.length), f = 0; f < e; f++) {
			var g = d(b[f], c[f]);
			if (0 != g) return g;
		}
		return U.g.qb(b.length, c.length);
	};
	U.g.qb = function(b, c) {
		return b > c ? 1 : b < c ? -1 : 0;
	};
	U.g.iv = function(b, c) {
		return -U.g.qb(b, c);
	};
	U.g.dh = function(b, c) {
		return b === c;
	};
	U.g.$s = function(b, c, d) {
		d = U.g.Ig(b, c, d);
		return 0 > d ? (U.g.ci(b, c, -(d + 1)), !0) : !1;
	};
	U.g.at = function(b, c, d) {
		c = U.g.Ig(b, c, d);
		return 0 <= c ? U.g.jc(b, c) : !1;
	};
	U.g.dt = function(b, c, d) {
		for (var e = {}, f = 0; f < b.length; f++) {
			var g = b[f],
				k = c.call(d, g, f, b);
			void 0 !== k && (e[k] || (e[k] = [])).push(g);
		}
		return e;
	};
	U.g.Co = function(b, c, d) {
		var e = {};
		U.g.forEach(b, function(f, g) {
			e[c.call(d, f, g, b)] = f;
		});
		return e;
	};
	U.g.Od = function(b, c, d) {
		var e = [],
			f = 0,
			g = b;
		d = d || 1;
		void 0 !== c && ((f = b), (g = c));
		if (0 > d * (g - f)) return [];
		if (0 < d) for (b = f; b < g; b += d) e.push(b);
		else for (b = f; b > g; b += d) e.push(b);
		return e;
	};
	U.g.repeat = function(b, c) {
		for (var d = [], e = 0; e < c; e++) d[e] = b;
		return d;
	};
	U.g.flatten = function(b) {
		for (var c = [], d = 0; d < arguments.length; d++) {
			var e = arguments[d];
			if (U.isArray(e))
				for (var f = 0; f < e.length; f += 8192) {
					var g = U.g.slice(e, f, f + 8192);
					g = U.g.flatten.apply(null, g);
					for (var k = 0; k < g.length; k++) c.push(g[k]);
				}
			else c.push(e);
		}
		return c;
	};
	U.g.rotate = function(b, c) {
		b.length &&
			((c %= b.length),
			0 < c
				? Array.prototype.unshift.apply(b, b.splice(-c, c))
				: 0 > c && Array.prototype.push.apply(b, b.splice(0, -c)));
		return b;
	};
	U.g.$v = function(b, c, d) {
		c = Array.prototype.splice.call(b, c, 1);
		Array.prototype.splice.call(b, d, 0, c[0]);
	};
	U.g.xj = function(b) {
		if (!arguments.length) return [];
		for (
			var c = [], d = arguments[0].length, e = 1;
			e < arguments.length;
			e++
		)
			arguments[e].length < d && (d = arguments[e].length);
		for (e = 0; e < d; e++) {
			for (var f = [], g = 0; g < arguments.length; g++)
				f.push(arguments[g][e]);
			c.push(f);
		}
		return c;
	};
	U.g.mx = function(b, c) {
		c = c || Math.random;
		for (var d = b.length - 1; 0 < d; d--) {
			var e = Math.floor(c() * (d + 1)),
				f = b[d];
			b[d] = b[e];
			b[e] = f;
		}
	};
	U.g.ut = function(b, c) {
		var d = [];
		U.g.forEach(c, function(e) {
			d.push(b[e]);
		});
		return d;
	};
	U.g.rt = function(b, c, d) {
		return U.g.concat.apply([], U.g.map(b, c, d));
	};
	U.a.m = {};
	U.a.m.te = function(b) {
		if (U.m.xa) {
			var c = U.a.m.cc(b);
			c &&
				(!b ||
					(!(b instanceof c.Location) && b instanceof c.Element)) &&
				U.m.ua(
					"Argument is not a Location (or a non-Element mock); got: %s",
					U.a.m.bh(b)
				);
		}
	};
	U.a.m.ya = function(b, c) {
		if (U.m.xa) {
			var d = U.a.m.cc(b);
			d &&
				"undefined" != typeof d[c] &&
				((b &&
					(b instanceof d[c] ||
						!(
							b instanceof d.Location || b instanceof d.Element
						))) ||
					U.m.ua(
						"Argument is not a %s (or a non-Element, non-Location mock); got: %s",
						c,
						U.a.m.bh(b)
					));
		}
		return b;
	};
	U.a.m.Zk = function(b) {
		U.a.m.ya(b, "HTMLAnchorElement");
	};
	U.a.m.al = function(b) {
		return U.a.m.ya(b, "HTMLButtonElement");
	};
	U.a.m.gl = function(b) {
		U.a.m.ya(b, "HTMLLinkElement");
	};
	U.a.m.el = function(b) {
		U.a.m.ya(b, "HTMLImageElement");
	};
	U.a.m.$k = function(b) {
		U.a.m.ya(b, "HTMLAudioElement");
	};
	U.a.m.il = function(b) {
		U.a.m.ya(b, "HTMLVideoElement");
	};
	U.a.m.fl = function(b) {
		return U.a.m.ya(b, "HTMLInputElement");
	};
	U.a.m.Rs = function(b) {
		return U.a.m.ya(b, "HTMLTextAreaElement");
	};
	U.a.m.Qs = function(b) {
		return U.a.m.ya(b, "HTMLCanvasElement");
	};
	U.a.m.bl = function(b) {
		U.a.m.ya(b, "HTMLEmbedElement");
	};
	U.a.m.cl = function(b) {
		return U.a.m.ya(b, "HTMLFormElement");
	};
	U.a.m.dl = function(b) {
		U.a.m.ya(b, "HTMLFrameElement");
	};
	U.a.m.Eg = function(b) {
		U.a.m.ya(b, "HTMLIFrameElement");
	};
	U.a.m.hl = function(b) {
		U.a.m.ya(b, "HTMLObjectElement");
	};
	U.a.m.Fg = function(b) {
		U.a.m.ya(b, "HTMLScriptElement");
	};
	U.a.m.bh = function(b) {
		if (U.Ba(b))
			try {
				return (
					b.constructor.displayName ||
					b.constructor.name ||
					Object.prototype.toString.call(b)
				);
			} catch (c) {
				return "<object could not be stringified>";
			}
		else return void 0 === b ? "undefined" : null === b ? "null" : typeof b;
	};
	U.a.m.cc = function(b) {
		try {
			var c = b && b.ownerDocument,
				d = c && (c.defaultView || c.parentWindow);
			d = d || U.global;
			if (d.Element && d.Location) return d;
		} catch (e) {}
		return null;
	};
	U.c = {};
	U.c.A = {};
	U.c.A.startsWith = function(b, c) {
		return 0 == b.lastIndexOf(c, 0);
	};
	U.c.A.endsWith = function(b, c) {
		var d = b.length - c.length;
		return 0 <= d && b.indexOf(c, d) == d;
	};
	U.c.A.Cb = function(b, c) {
		return 0 == U.c.A.fd(c, b.substr(0, c.length));
	};
	U.c.A.Mg = function(b, c) {
		return 0 == U.c.A.fd(c, b.substr(b.length - c.length, c.length));
	};
	U.c.A.Ng = function(b, c) {
		return b.toLowerCase() == c.toLowerCase();
	};
	U.c.A.Lc = function(b) {
		return /^[\s\xa0]*$/.test(b);
	};
	U.c.A.trim =
		U.ne && String.prototype.trim
			? function(b) {
					return b.trim();
			  }
			: function(b) {
					return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(b)[1];
			  };
	U.c.A.fd = function(b, c) {
		b = String(b).toLowerCase();
		c = String(c).toLowerCase();
		return b < c ? -1 : b == c ? 0 : 1;
	};
	U.c.A.Nc = function(b, c) {
		return b.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>");
	};
	U.c.A.Fa = function(b, c) {
		if (c)
			b = b
				.replace(U.c.A.Hf, "&amp;")
				.replace(U.c.A.hg, "&lt;")
				.replace(U.c.A.cg, "&gt;")
				.replace(U.c.A.og, "&quot;")
				.replace(U.c.A.qg, "&#39;")
				.replace(U.c.A.jg, "&#0;");
		else {
			if (!U.c.A.Cj.test(b)) return b;
			-1 != b.indexOf("&") && (b = b.replace(U.c.A.Hf, "&amp;"));
			-1 != b.indexOf("<") && (b = b.replace(U.c.A.hg, "&lt;"));
			-1 != b.indexOf(">") && (b = b.replace(U.c.A.cg, "&gt;"));
			-1 != b.indexOf('"') && (b = b.replace(U.c.A.og, "&quot;"));
			-1 != b.indexOf("'") && (b = b.replace(U.c.A.qg, "&#39;"));
			-1 != b.indexOf("\x00") && (b = b.replace(U.c.A.jg, "&#0;"));
		}
		return b;
	};
	U.c.A.Hf = /&/g;
	U.c.A.hg = /</g;
	U.c.A.cg = />/g;
	U.c.A.og = /"/g;
	U.c.A.qg = /'/g;
	U.c.A.jg = /\x00/g;
	U.c.A.Cj = /[\x00&<>"']/;
	U.c.A.vj = function(b) {
		return U.c.A.Nc(b.replace(/  /g, " &#160;"), void 0);
	};
	U.c.A.contains = function(b, c) {
		return -1 != b.indexOf(c);
	};
	U.c.A.gd = function(b, c) {
		return U.c.A.contains(b.toLowerCase(), c.toLowerCase());
	};
	U.c.A.Eb = function(b, c) {
		var d = 0;
		b = U.c.A.trim(String(b)).split(".");
		c = U.c.A.trim(String(c)).split(".");
		for (
			var e = Math.max(b.length, c.length), f = 0;
			0 == d && f < e;
			f++
		) {
			var g = b[f] || "",
				k = c[f] || "";
			do {
				g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
				k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
				if (0 == g[0].length && 0 == k[0].length) break;
				d =
					U.c.A.xe(
						0 == g[1].length ? 0 : parseInt(g[1], 10),
						0 == k[1].length ? 0 : parseInt(k[1], 10)
					) ||
					U.c.A.xe(0 == g[2].length, 0 == k[2].length) ||
					U.c.A.xe(g[2], k[2]);
				g = g[3];
				k = k[3];
			} while (0 == d);
		}
		return d;
	};
	U.c.A.xe = function(b, c) {
		return b < c ? -1 : b > c ? 1 : 0;
	};
	U.h = {};
	U.h.userAgent = {};
	U.h.userAgent.K = {};
	U.h.userAgent.K.Fh = function() {
		var b = U.h.userAgent.K.km();
		return b && (b = b.userAgent) ? b : "";
	};
	U.h.userAgent.K.km = function() {
		return U.global.navigator;
	};
	U.h.userAgent.K.tj = U.h.userAgent.K.Fh();
	U.h.userAgent.K.jx = function(b) {
		U.h.userAgent.K.tj = b || U.h.userAgent.K.Fh();
	};
	U.h.userAgent.K.ac = function() {
		return U.h.userAgent.K.tj;
	};
	U.h.userAgent.K.S = function(b) {
		return U.c.A.contains(U.h.userAgent.K.ac(), b);
	};
	U.h.userAgent.K.Ni = function(b) {
		return U.c.A.gd(U.h.userAgent.K.ac(), b);
	};
	U.h.userAgent.K.ih = function(b) {
		for (
			var c = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, d = [], e;
			(e = c.exec(b));

		)
			d.push([e[1], e[2], e[3] || void 0]);
		return d;
	};
	U.object = {};
	U.object.is = function(b, c) {
		return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
	};
	U.object.forEach = function(b, c, d) {
		for (var e in b) c.call(d, b[e], e, b);
	};
	U.object.filter = function(b, c, d) {
		var e = {},
			f;
		for (f in b) c.call(d, b[f], f, b) && (e[f] = b[f]);
		return e;
	};
	U.object.map = function(b, c, d) {
		var e = {},
			f;
		for (f in b) e[f] = c.call(d, b[f], f, b);
		return e;
	};
	U.object.some = function(b, c, d) {
		for (var e in b) if (c.call(d, b[e], e, b)) return !0;
		return !1;
	};
	U.object.every = function(b, c, d) {
		for (var e in b) if (!c.call(d, b[e], e, b)) return !1;
		return !0;
	};
	U.object.sb = function(b) {
		var c = 0,
			d;
		for (d in b) c++;
		return c;
	};
	U.object.yu = function(b) {
		for (var c in b) return c;
	};
	U.object.zu = function(b) {
		for (var c in b) return b[c];
	};
	U.object.contains = function(b, c) {
		return U.object.Gb(b, c);
	};
	U.object.ea = function(b) {
		var c = [],
			d = 0,
			e;
		for (e in b) c[d++] = b[e];
		return c;
	};
	U.object.ja = function(b) {
		var c = [],
			d = 0,
			e;
		for (e in b) c[d++] = e;
		return c;
	};
	U.object.Tu = function(b, c) {
		var d = U.ka(c),
			e = d ? c : arguments;
		for (d = d ? 0 : 1; d < e.length; d++) {
			if (null == b) return;
			b = b[e[d]];
		}
		return b;
	};
	U.object.Fb = function(b, c) {
		return null !== b && c in b;
	};
	U.object.Gb = function(b, c) {
		for (var d in b) if (b[d] == c) return !0;
		return !1;
	};
	U.object.Xl = function(b, c, d) {
		for (var e in b) if (c.call(d, b[e], e, b)) return e;
	};
	U.object.fu = function(b, c, d) {
		return (c = U.object.Xl(b, c, d)) && b[c];
	};
	U.object.Aa = function(b) {
		for (var c in b) return !1;
		return !0;
	};
	U.object.clear = function(b) {
		for (var c in b) delete b[c];
	};
	U.object.remove = function(b, c) {
		var d;
		(d = c in b) && delete b[c];
		return d;
	};
	U.object.add = function(b, c, d) {
		if (null !== b && c in b)
			throw Error('The object already contains the key "' + c + '"');
		U.object.set(b, c, d);
	};
	U.object.get = function(b, c, d) {
		return null !== b && c in b ? b[c] : d;
	};
	U.object.set = function(b, c, d) {
		b[c] = d;
	};
	U.object.Xw = function(b, c, d) {
		return c in b ? b[c] : (b[c] = d);
	};
	U.object.lx = function(b, c, d) {
		if (c in b) return b[c];
		d = d();
		return (b[c] = d);
	};
	U.object.Ib = function(b, c) {
		for (var d in b) if (!(d in c) || b[d] !== c[d]) return !1;
		for (var e in c) if (!(e in b)) return !1;
		return !0;
	};
	U.object.clone = function(b) {
		var c = {},
			d;
		for (d in b) c[d] = b[d];
		return c;
	};
	U.object.Lo = function(b) {
		var c = U.pa(b);
		if (c == G || c == p) {
			if (U.Sa(b.clone)) return b.clone();
			c = c == p ? [] : {};
			for (var d in b) c[d] = U.object.Lo(b[d]);
			return c;
		}
		return b;
	};
	U.object.Eo = function(b) {
		var c = {},
			d;
		for (d in b) c[b[d]] = d;
		return c;
	};
	U.object.ng = [
		"constructor",
		la,
		"isPrototypeOf",
		qa,
		ua,
		"toString",
		"valueOf"
	];
	U.object.extend = function(b, c) {
		for (var d, e, f = 1; f < arguments.length; f++) {
			e = arguments[f];
			for (d in e) b[d] = e[d];
			for (var g = 0; g < U.object.ng.length; g++)
				(d = U.object.ng[g]),
					Object.prototype.hasOwnProperty.call(e, d) && (b[d] = e[d]);
		}
	};
	U.object.create = function(b) {
		var c = arguments.length;
		if (1 == c && U.isArray(arguments[0]))
			return U.object.create.apply(null, arguments[0]);
		if (c % 2) throw Error(ca);
		for (var d = {}, e = 0; e < c; e += 2)
			d[arguments[e]] = arguments[e + 1];
		return d;
	};
	U.object.Bl = function(b) {
		var c = arguments.length;
		if (1 == c && U.isArray(arguments[0]))
			return U.object.Bl.apply(null, arguments[0]);
		for (var d = {}, e = 0; e < c; e++) d[arguments[e]] = !0;
		return d;
	};
	U.object.At = function(b) {
		var c = b;
		Object.isFrozen &&
			!Object.isFrozen(b) &&
			((c = Object.create(b)), Object.freeze(c));
		return c;
	};
	U.object.uv = function(b) {
		return !!Object.isFrozen && Object.isFrozen(b);
	};
	U.object.xu = function(b, c, d) {
		if (!b) return [];
		if (!Object.getOwnPropertyNames || !Object.getPrototypeOf)
			return U.object.ja(b);
		for (
			var e = {};
			b &&
			(b !== Object.prototype || c) &&
			(b !== Function.prototype || d);

		) {
			for (
				var f = Object.getOwnPropertyNames(b), g = 0;
				g < f.length;
				g++
			)
				e[f[g]] = !0;
			b = Object.getPrototypeOf(b);
		}
		return U.object.ja(e);
	};
	U.object.Su = function(b) {
		return (b = Object.getPrototypeOf(b.prototype)) && b.constructor;
	};
	U.h.userAgent.B = {};
	U.h.userAgent.B.Li = function() {
		return U.h.userAgent.K.S("Opera");
	};
	U.h.userAgent.B.tn = function() {
		return U.h.userAgent.K.S("Trident") || U.h.userAgent.K.S("MSIE");
	};
	U.h.userAgent.B.gf = function() {
		return U.h.userAgent.K.S("Edge");
	};
	U.h.userAgent.B.Ji = function() {
		return U.h.userAgent.K.S("Edg/");
	};
	U.h.userAgent.B.Ki = function() {
		return U.h.userAgent.K.S("OPR");
	};
	U.h.userAgent.B.hf = function() {
		return U.h.userAgent.K.S("Firefox") || U.h.userAgent.K.S("FxiOS");
	};
	U.h.userAgent.B.Mi = function() {
		return (
			U.h.userAgent.K.S("Safari") &&
			!(
				U.h.userAgent.B.ef() ||
				U.h.userAgent.B.ff() ||
				U.h.userAgent.B.Li() ||
				U.h.userAgent.B.gf() ||
				U.h.userAgent.B.Ji() ||
				U.h.userAgent.B.Ki() ||
				U.h.userAgent.B.hf() ||
				U.h.userAgent.B.xi() ||
				U.h.userAgent.K.S("Android")
			)
		);
	};
	U.h.userAgent.B.ff = function() {
		return U.h.userAgent.K.S("Coast");
	};
	U.h.userAgent.B.un = function() {
		return (
			(U.h.userAgent.K.S("iPad") || U.h.userAgent.K.S("iPhone")) &&
			!U.h.userAgent.B.Mi() &&
			!U.h.userAgent.B.ef() &&
			!U.h.userAgent.B.ff() &&
			!U.h.userAgent.B.hf() &&
			U.h.userAgent.K.S("AppleWebKit")
		);
	};
	U.h.userAgent.B.ef = function() {
		return (
			(U.h.userAgent.K.S("Chrome") || U.h.userAgent.K.S("CriOS")) &&
			!U.h.userAgent.B.gf()
		);
	};
	U.h.userAgent.B.sn = function() {
		return (
			U.h.userAgent.K.S("Android") &&
			!(
				U.h.userAgent.B.ii() ||
				U.h.userAgent.B.Km() ||
				U.h.userAgent.B.cf() ||
				U.h.userAgent.B.xi()
			)
		);
	};
	U.h.userAgent.B.cf = U.h.userAgent.B.Li;
	U.h.userAgent.B.Ad = U.h.userAgent.B.tn;
	U.h.userAgent.B.wb = U.h.userAgent.B.gf;
	U.h.userAgent.B.Im = U.h.userAgent.B.Ji;
	U.h.userAgent.B.Fv = U.h.userAgent.B.Ki;
	U.h.userAgent.B.Km = U.h.userAgent.B.hf;
	U.h.userAgent.B.Jv = U.h.userAgent.B.Mi;
	U.h.userAgent.B.ov = U.h.userAgent.B.ff;
	U.h.userAgent.B.xv = U.h.userAgent.B.un;
	U.h.userAgent.B.ii = U.h.userAgent.B.ef;
	U.h.userAgent.B.lv = U.h.userAgent.B.sn;
	U.h.userAgent.B.xi = function() {
		return U.h.userAgent.K.S("Silk");
	};
	U.h.userAgent.B.Hc = function() {
		function b(f) {
			f = U.g.find(f, e);
			return d[f] || "";
		}
		var c = U.h.userAgent.K.ac();
		if (U.h.userAgent.B.Ad()) return U.h.userAgent.B.jm(c);
		c = U.h.userAgent.K.ih(c);
		var d = {};
		U.g.forEach(c, function(f) {
			d[f[0]] = f[1];
		});
		var e = U.Nb(U.object.Fb, d);
		return U.h.userAgent.B.cf()
			? b(["Version", "Opera"])
			: U.h.userAgent.B.wb()
			? b(["Edge"])
			: U.h.userAgent.B.Im()
			? b(["Edg"])
			: U.h.userAgent.B.ii()
			? b(["Chrome", "CriOS", "HeadlessChrome"])
			: ((c = c[2]) && c[1]) || "";
	};
	U.h.userAgent.B.Ta = function(b) {
		return 0 <= U.c.A.Eb(U.h.userAgent.B.Hc(), b);
	};
	U.h.userAgent.B.jm = function(b) {
		var c = /rv: *([\d\.]*)/.exec(b);
		if (c && c[1]) return c[1];
		c = "";
		var d = /MSIE +([\d\.]+)/.exec(b);
		if (d && d[1])
			if (((b = /Trident\/(\d.\d)/.exec(b)), "7.0" == d[1]))
				if (b && b[1])
					switch (b[1]) {
						case "4.0":
							c = "8.0";
							break;
						case "5.0":
							c = "9.0";
							break;
						case "6.0":
							c = "10.0";
							break;
						case "7.0":
							c = "11.0";
					}
				else c = "7.0";
			else c = d[1];
		return c;
	};
	U.U = {};
	U.U.Tg = function(b) {
		return function() {
			return b;
		};
	};
	U.U.fq = Ba(!1);
	U.U.os = Ba(!0);
	U.U.mr = Ba(null);
	U.U.bi = Aa();
	U.U.error = function(b) {
		return function() {
			throw Error(b);
		};
	};
	U.U.ua = function(b) {
		return function() {
			throw b;
		};
	};
	U.U.lock = function(b, c) {
		c = c || 0;
		return function() {
			return b.apply(this, Array.prototype.slice.call(arguments, 0, c));
		};
	};
	U.U.gw = function(b) {
		return function() {
			return arguments[b];
		};
	};
	U.U.mw = function(b, c) {
		var d = Array.prototype.slice.call(arguments, 1);
		return function() {
			var e = Array.prototype.slice.call(arguments);
			e.push.apply(e, d);
			return b.apply(this, e);
		};
	};
	U.U.Px = function(b, c) {
		return U.U.io(b, U.U.Tg(c));
	};
	U.U.Yt = function(b, c) {
		return function(d) {
			return c ? b == d : b === d;
		};
	};
	U.U.pt = function(b, c) {
		var d = arguments,
			e = d.length;
		return function() {
			var f;
			e && (f = d[e - 1].apply(this, arguments));
			for (var g = e - 2; 0 <= g; g--) f = d[g].call(this, f);
			return f;
		};
	};
	U.U.io = function(b) {
		var c = arguments,
			d = c.length;
		return function() {
			for (var e, f = 0; f < d; f++) e = c[f].apply(this, arguments);
			return e;
		};
	};
	U.U.and = function(b) {
		var c = arguments,
			d = c.length;
		return function() {
			for (var e = 0; e < d; e++)
				if (!c[e].apply(this, arguments)) return !1;
			return !0;
		};
	};
	U.U.or = function(b) {
		var c = arguments,
			d = c.length;
		return function() {
			for (var e = 0; e < d; e++)
				if (c[e].apply(this, arguments)) return !0;
			return !1;
		};
	};
	U.U.yn = function(b) {
		return function() {
			return !b.apply(this, arguments);
		};
	};
	U.U.create = function(b, c) {
		function d() {}
		d.prototype = b.prototype;
		var e = new d();
		b.apply(e, Array.prototype.slice.call(arguments, 1));
		return e;
	};
	U.U.Mj = !0;
	U.U.sl = function(b) {
		var c = !1,
			d;
		return function() {
			if (!U.U.Mj) return b();
			c || ((d = b()), (c = !0));
			return d;
		};
	};
	U.U.once = function(b) {
		var c = b;
		return function() {
			if (c) {
				var d = c;
				c = null;
				d();
			}
		};
	};
	U.U.Kt = function(b, c, d) {
		var e = 0;
		return function(f) {
			U.global.clearTimeout(e);
			var g = arguments;
			e = U.global.setTimeout(function() {
				b.apply(d, g);
			}, c);
		};
	};
	U.U.Bx = function(b, c, d) {
		function e() {
			g = U.global.setTimeout(f, c);
			b.apply(d, h);
		}
		function f() {
			g = 0;
			k && ((k = !1), e());
		}
		var g = 0,
			k = !1,
			h = [];
		return function(m) {
			h = arguments;
			g ? (k = !0) : e();
		};
	};
	U.U.qw = function(b, c, d) {
		function e() {
			f = 0;
		}
		var f = 0;
		return function(g) {
			f || ((f = U.global.setTimeout(e, c)), b.apply(d, arguments));
		};
	};
	U.a.zq = P();
	U.a.f = function(b) {
		this.yo = b;
	};
	U.a.f.prototype.toString = Q("yo");
	U.a.f.Wo = new U.a.f("A");
	U.a.f.Xo = new U.a.f("ABBR");
	U.a.f.Zo = new U.a.f("ACRONYM");
	U.a.f.$o = new U.a.f("ADDRESS");
	U.a.f.ep = new U.a.f("APPLET");
	U.a.f.fp = new U.a.f("AREA");
	U.a.f.gp = new U.a.f("ARTICLE");
	U.a.f.hp = new U.a.f("ASIDE");
	U.a.f.mp = new U.a.f("AUDIO");
	U.a.f.np = new U.a.f("B");
	U.a.f.op = new U.a.f("BASE");
	U.a.f.pp = new U.a.f("BASEFONT");
	U.a.f.qp = new U.a.f("BDI");
	U.a.f.rp = new U.a.f("BDO");
	U.a.f.up = new U.a.f("BIG");
	U.a.f.vp = new U.a.f("BLOCKQUOTE");
	U.a.f.wp = new U.a.f("BODY");
	U.a.f.Tf = new U.a.f("BR");
	U.a.f.xp = new U.a.f("BUTTON");
	U.a.f.yp = new U.a.f("CANVAS");
	U.a.f.zp = new U.a.f("CAPTION");
	U.a.f.Bp = new U.a.f("CENTER");
	U.a.f.Cp = new U.a.f("CITE");
	U.a.f.Dp = new U.a.f("CODE");
	U.a.f.Ep = new U.a.f("COL");
	U.a.f.Fp = new U.a.f("COLGROUP");
	U.a.f.Gp = new U.a.f("COMMAND");
	U.a.f.Ip = new U.a.f("DATA");
	U.a.f.Jp = new U.a.f("DATALIST");
	U.a.f.Kp = new U.a.f("DD");
	U.a.f.Lp = new U.a.f("DEL");
	U.a.f.Np = new U.a.f("DETAILS");
	U.a.f.Op = new U.a.f("DFN");
	U.a.f.Pp = new U.a.f("DIALOG");
	U.a.f.Qp = new U.a.f("DIR");
	U.a.f.Rp = new U.a.f("DIV");
	U.a.f.Sp = new U.a.f("DL");
	U.a.f.Vp = new U.a.f("DT");
	U.a.f.Yp = new U.a.f("EM");
	U.a.f.Zp = new U.a.f("EMBED");
	U.a.f.gq = new U.a.f("FIELDSET");
	U.a.f.hq = new U.a.f("FIGCAPTION");
	U.a.f.iq = new U.a.f("FIGURE");
	U.a.f.jq = new U.a.f("FONT");
	U.a.f.kq = new U.a.f("FOOTER");
	U.a.f.lq = new U.a.f("FORM");
	U.a.f.mq = new U.a.f("FRAME");
	U.a.f.nq = new U.a.f("FRAMESET");
	U.a.f.oq = new U.a.f("H1");
	U.a.f.pq = new U.a.f("H2");
	U.a.f.qq = new U.a.f("H3");
	U.a.f.rq = new U.a.f("H4");
	U.a.f.sq = new U.a.f("H5");
	U.a.f.tq = new U.a.f("H6");
	U.a.f.uq = new U.a.f("HEAD");
	U.a.f.vq = new U.a.f("HEADER");
	U.a.f.wq = new U.a.f("HGROUP");
	U.a.f.xq = new U.a.f("HR");
	U.a.f.yq = new U.a.f("HTML");
	U.a.f.Aq = new U.a.f("I");
	U.a.f.Dq = new U.a.f("IFRAME");
	U.a.f.Eq = new U.a.f("IMG");
	U.a.f.Fq = new U.a.f("INPUT");
	U.a.f.Gq = new U.a.f("INS");
	U.a.f.Lq = new U.a.f("ISINDEX");
	U.a.f.Oq = new U.a.f("KBD");
	U.a.f.Pq = new U.a.f("KEYGEN");
	U.a.f.Qq = new U.a.f("LABEL");
	U.a.f.Sq = new U.a.f("LEGEND");
	U.a.f.Tq = new U.a.f("LI");
	U.a.f.Uq = new U.a.f("LINK");
	U.a.f.Yq = new U.a.f("MAIN");
	U.a.f.Zq = new U.a.f("MAP");
	U.a.f.$q = new U.a.f("MARK");
	U.a.f.ar = new U.a.f("MATH");
	U.a.f.cr = new U.a.f("MENU");
	U.a.f.dr = new U.a.f("MENUITEM");
	U.a.f.er = new U.a.f("META");
	U.a.f.fr = new U.a.f("METER");
	U.a.f.ir = new U.a.f("NAV");
	U.a.f.jr = new U.a.f("NOFRAMES");
	U.a.f.kr = new U.a.f("NOSCRIPT");
	U.a.f.nr = new U.a.f("OBJECT");
	U.a.f.qr = new U.a.f("OL");
	U.a.f.rr = new U.a.f("OPTGROUP");
	U.a.f.sr = new U.a.f("OPTION");
	U.a.f.tr = new U.a.f("OUTPUT");
	U.a.f.ur = new U.a.f("P");
	U.a.f.vr = new U.a.f("PARAM");
	U.a.f.wr = new U.a.f("PICTURE");
	U.a.f.yr = new U.a.f("PRE");
	U.a.f.Ar = new U.a.f("PROGRESS");
	U.a.f.Q = new U.a.f("Q");
	U.a.f.Br = new U.a.f("RP");
	U.a.f.Cr = new U.a.f("RT");
	U.a.f.Dr = new U.a.f("RTC");
	U.a.f.Er = new U.a.f("RUBY");
	U.a.f.Gr = new U.a.f("S");
	U.a.f.Jr = new U.a.f("SAMP");
	U.a.f.Kr = new U.a.f(l);
	U.a.f.Lr = new U.a.f("SECTION");
	U.a.f.Mr = new U.a.f("SELECT");
	U.a.f.Or = new U.a.f("SMALL");
	U.a.f.Pr = new U.a.f("SOURCE");
	U.a.f.Qr = new U.a.f("SPAN");
	U.a.f.Sr = new U.a.f("STRIKE");
	U.a.f.Tr = new U.a.f("STRONG");
	U.a.f.Ur = new U.a.f("STYLE");
	U.a.f.Vr = new U.a.f("SUB");
	U.a.f.Wr = new U.a.f("SUMMARY");
	U.a.f.Xr = new U.a.f("SUP");
	U.a.f.Yr = new U.a.f("SVG");
	U.a.f.Zr = new U.a.f("TABLE");
	U.a.f.$r = new U.a.f("TBODY");
	U.a.f.bs = new U.a.f("TD");
	U.a.f.cs = new U.a.f("TEMPLATE");
	U.a.f.ds = new U.a.f("TEXTAREA");
	U.a.f.es = new U.a.f("TFOOT");
	U.a.f.fs = new U.a.f("TH");
	U.a.f.gs = new U.a.f("THEAD");
	U.a.f.hs = new U.a.f("TIME");
	U.a.f.js = new U.a.f("TITLE");
	U.a.f.ks = new U.a.f("TR");
	U.a.f.ls = new U.a.f("TRACK");
	U.a.f.qs = new U.a.f("TT");
	U.a.f.ss = new U.a.f("U");
	U.a.f.ts = new U.a.f("UL");
	U.a.f.us = new U.a.f("VAR");
	U.a.f.vs = new U.a.f("VIDEO");
	U.a.f.ws = new U.a.f("WBR");
	U.a.tags = {};
	U.a.tags.Tk = {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		command: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	};
	U.a.tags.Zm = function(b) {
		return !0 === U.a.tags.Tk[b];
	};
	U.i = {};
	U.i.j = {};
	U.i.j.fk = !1;
	U.i.j.fg =
		U.i.j.fk ||
		(("ar" == U.R.substring(0, 2).toLowerCase() ||
			"fa" == U.R.substring(0, 2).toLowerCase() ||
			"he" == U.R.substring(0, 2).toLowerCase() ||
			"iw" == U.R.substring(0, 2).toLowerCase() ||
			"ps" == U.R.substring(0, 2).toLowerCase() ||
			"sd" == U.R.substring(0, 2).toLowerCase() ||
			"ug" == U.R.substring(0, 2).toLowerCase() ||
			"ur" == U.R.substring(0, 2).toLowerCase() ||
			"yi" == U.R.substring(0, 2).toLowerCase()) &&
			(2 == U.R.length ||
				"-" == U.R.substring(2, 3) ||
				"_" == U.R.substring(2, 3))) ||
		(3 <= U.R.length &&
			"ckb" == U.R.substring(0, 3).toLowerCase() &&
			(3 == U.R.length ||
				"-" == U.R.substring(3, 4) ||
				"_" == U.R.substring(3, 4))) ||
		(7 <= U.R.length &&
			("-" == U.R.substring(2, 3) || "_" == U.R.substring(2, 3)) &&
			("adlm" == U.R.substring(3, 7).toLowerCase() ||
				"arab" == U.R.substring(3, 7).toLowerCase() ||
				"hebr" == U.R.substring(3, 7).toLowerCase() ||
				"nkoo" == U.R.substring(3, 7).toLowerCase() ||
				"rohg" == U.R.substring(3, 7).toLowerCase() ||
				"thaa" == U.R.substring(3, 7).toLowerCase())) ||
		(8 <= U.R.length &&
			("-" == U.R.substring(3, 4) || "_" == U.R.substring(3, 4)) &&
			("adlm" == U.R.substring(4, 8).toLowerCase() ||
				"arab" == U.R.substring(4, 8).toLowerCase() ||
				"hebr" == U.R.substring(4, 8).toLowerCase() ||
				"nkoo" == U.R.substring(4, 8).toLowerCase() ||
				"rohg" == U.R.substring(4, 8).toLowerCase() ||
				"thaa" == U.R.substring(4, 8).toLowerCase()));
	U.i.j.Sb = {
		mk: "\u202a",
		vk: "\u202b",
		mg: "\u202c",
		nk: "\u200e",
		wk: "\u200f"
	};
	U.i.j.$ = { zb: 1, Ab: -1, Va: 0 };
	U.i.j.Zc = "right";
	U.i.j.Xc = "left";
	U.i.j.Cq = U.i.j.fg ? U.i.j.Xc : U.i.j.Zc;
	U.i.j.Bq = U.i.j.fg ? U.i.j.Zc : U.i.j.Xc;
	U.i.j.Bo = function(b) {
		return typeof b == F
			? 0 < b
				? U.i.j.$.zb
				: 0 > b
				? U.i.j.$.Ab
				: U.i.j.$.Va
			: null == b
			? null
			: b
			? U.i.j.$.Ab
			: U.i.j.$.zb;
	};
	U.i.j.ec =
		"A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
	U.i.j.kc =
		"\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc";
	U.i.j.Dm = /<[^>]*>|&[^;]+;/g;
	U.i.j.xb = function(b, c) {
		return c ? b.replace(U.i.j.Dm, "") : b;
	};
	U.i.j.Vn = new RegExp("[" + U.i.j.kc + "]");
	U.i.j.ln = new RegExp("[" + U.i.j.ec + "]");
	U.i.j.We = function(b, c) {
		return U.i.j.Vn.test(U.i.j.xb(b, c));
	};
	U.i.j.Zu = U.i.j.We;
	U.i.j.$h = function(b) {
		return U.i.j.ln.test(U.i.j.xb(b, void 0));
	};
	U.i.j.on = new RegExp("^[" + U.i.j.ec + "]");
	U.i.j.$n = new RegExp("^[" + U.i.j.kc + "]");
	U.i.j.Um = function(b) {
		return U.i.j.$n.test(b);
	};
	U.i.j.Qm = function(b) {
		return U.i.j.on.test(b);
	};
	U.i.j.Cv = function(b) {
		return !U.i.j.Qm(b) && !U.i.j.Um(b);
	};
	U.i.j.mn = new RegExp("^[^" + U.i.j.kc + "]*[" + U.i.j.ec + "]");
	U.i.j.Xn = new RegExp("^[^" + U.i.j.ec + "]*[" + U.i.j.kc + "]");
	U.i.j.gj = function(b, c) {
		return U.i.j.Xn.test(U.i.j.xb(b, c));
	};
	U.i.j.Iv = U.i.j.gj;
	U.i.j.uo = function(b, c) {
		return U.i.j.mn.test(U.i.j.xb(b, c));
	};
	U.i.j.Av = U.i.j.uo;
	U.i.j.wi = /^http:\/\/.*/;
	U.i.j.Dv = function(b, c) {
		b = U.i.j.xb(b, c);
		return U.i.j.wi.test(b) || (!U.i.j.$h(b) && !U.i.j.We(b));
	};
	U.i.j.nn = new RegExp("[" + U.i.j.ec + "][^" + U.i.j.kc + "]*$");
	U.i.j.Yn = new RegExp("[" + U.i.j.kc + "][^" + U.i.j.ec + "]*$");
	U.i.j.Ol = function(b, c) {
		return U.i.j.nn.test(U.i.j.xb(b, c));
	};
	U.i.j.zv = U.i.j.Ol;
	U.i.j.Pl = function(b, c) {
		return U.i.j.Yn.test(U.i.j.xb(b, c));
	};
	U.i.j.Gv = U.i.j.Pl;
	U.i.j.Zn = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
	U.i.j.Hv = function(b) {
		return U.i.j.Zn.test(b);
	};
	U.i.j.pl = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
	U.i.j.Xu = function(b, c) {
		c = (void 0 === c ? U.i.j.We(b) : c) ? U.i.j.Sb.wk : U.i.j.Sb.nk;
		return b.replace(U.i.j.pl, c + "$&" + c);
	};
	U.i.j.Vt = function(b) {
		return "<" == b.charAt(0)
			? b.replace(/<\w+/, "$& dir=rtl")
			: "\n<span dir=rtl>" + b + "</span>";
	};
	U.i.j.Wt = function(b) {
		return U.i.j.Sb.vk + b + U.i.j.Sb.mg;
	};
	U.i.j.Tt = function(b) {
		return "<" == b.charAt(0)
			? b.replace(/<\w+/, "$& dir=ltr")
			: "\n<span dir=ltr>" + b + "</span>";
	};
	U.i.j.Ut = function(b) {
		return U.i.j.Sb.mk + b + U.i.j.Sb.mg;
	};
	U.i.j.Kl = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
	U.i.j.an = /left/gi;
	U.i.j.Un = /right/gi;
	U.i.j.zo = /%%%%/g;
	U.i.j.Xv = function(b) {
		return b
			.replace(U.i.j.Kl, ":$1 $4 $3 $2")
			.replace(U.i.j.an, "%%%%")
			.replace(U.i.j.Un, U.i.j.Xc)
			.replace(U.i.j.zo, U.i.j.Zc);
	};
	U.i.j.Ml = /([\u0591-\u05f2])"/g;
	U.i.j.ro = /([\u0591-\u05f2])'/g;
	U.i.j.bw = function(b) {
		return b.replace(U.i.j.Ml, "$1\u05f4").replace(U.i.j.ro, "$1\u05f3");
	};
	U.i.j.So = /\s+/;
	U.i.j.Bm = /[\d\u06f0-\u06f9]/;
	U.i.j.Wn = 0.4;
	U.i.j.gh = function(b, c) {
		var d = 0,
			e = 0,
			f = !1;
		b = U.i.j.xb(b, c).split(U.i.j.So);
		for (c = 0; c < b.length; c++) {
			var g = b[c];
			U.i.j.gj(g)
				? (d++, e++)
				: U.i.j.wi.test(g)
				? (f = !0)
				: U.i.j.$h(g)
				? e++
				: U.i.j.Bm.test(g) && (f = !0);
		}
		return 0 == e
			? f
				? U.i.j.$.zb
				: U.i.j.$.Va
			: d / e > U.i.j.Wn
			? U.i.j.$.Ab
			: U.i.j.$.zb;
	};
	U.i.j.Ot = function(b, c) {
		return U.i.j.gh(b, c) == U.i.j.$.Ab;
	};
	U.i.j.Qw = function(b, c) {
		b &&
			(c = U.i.j.Bo(c)) &&
			((b.style.textAlign = c == U.i.j.$.Ab ? U.i.j.Zc : U.i.j.Xc),
			(b.dir = c == U.i.j.$.Ab ? "rtl" : "ltr"));
	};
	U.i.j.Rw = function(b, c) {
		switch (U.i.j.gh(c)) {
			case U.i.j.$.zb:
				b.dir = "ltr";
				break;
			case U.i.j.$.Ab:
				b.dir = "rtl";
				break;
			default:
				b.removeAttribute("dir");
		}
	};
	U.i.j.Wp = P();
	U.b = {};
	U.b.Ob = {};
	U.b.Ob.Tb = U.ad ? U.Zg(U.ad + "#html") : null;
	U.c.rs = P();
	U.c.F = function(b, c) {
		this.Bf = (b === U.c.F.bg && c) || "";
		this.Ik = U.c.F.tg;
	};
	U.c.F.prototype.Ra = !0;
	U.c.F.prototype.Ea = Q("Bf");
	U.la &&
		(U.c.F.prototype.toString = function() {
			return "Const{" + this.Bf + "}";
		});
	U.c.F.D = function(b) {
		if (b instanceof U.c.F && b.constructor === U.c.F && b.Ik === U.c.F.tg)
			return b.Bf;
		U.m.ua("expected object of type Const, got '" + b + "'");
		return "type_error:Const";
	};
	U.c.F.from = function(b) {
		return new U.c.F(U.c.F.bg, b);
	};
	U.c.F.tg = {};
	U.c.F.bg = {};
	U.c.F.EMPTY = U.c.F.from("");
	U.b.V = function() {
		this.Jd = "";
		this.zk = U.b.V.ta;
	};
	U.b.V.prototype.Ra = !0;
	U.b.V.ta = {};
	U.b.V.Ec = function(b) {
		b = U.c.F.D(b);
		return 0 === b.length ? U.b.V.EMPTY : U.b.V.uc(b);
	};
	U.b.V.lu = function(b, c) {
		for (var d = [], e = 1; e < arguments.length; e++)
			d.push(U.b.V.ij(arguments[e]));
		return U.b.V.uc("(" + U.c.F.D(b) + ")(" + d.join(", ") + ");");
	};
	U.b.V.ou = function(b) {
		return U.b.V.uc(U.b.V.ij(b));
	};
	U.b.V.prototype.Ea = function() {
		return this.Jd.toString();
	};
	U.la &&
		(U.b.V.prototype.toString = function() {
			return "SafeScript{" + this.Jd + "}";
		});
	U.b.V.D = function(b) {
		return U.b.V.sj(b).toString();
	};
	U.b.V.sj = function(b) {
		if (b instanceof U.b.V && b.constructor === U.b.V && b.zk === U.b.V.ta)
			return b.Jd;
		U.m.ua("expected object of type SafeScript, got '" + b + a + U.pa(b));
		return "type_error:SafeScript";
	};
	U.b.V.ij = function(b) {
		return JSON.stringify(b).replace(/</g, "\\x3c");
	};
	U.b.V.uc = function(b) {
		return new U.b.V().Lb(b);
	};
	U.b.V.prototype.Lb = function(b) {
		this.Jd = U.b.Ob.Tb ? U.b.Ob.Tb.createScript(b) : b;
		return this;
	};
	U.b.V.EMPTY = U.b.V.uc("");
	U.va = {};
	U.va.url = {};
	U.va.url.Xg = function(b) {
		return U.va.url.Wh().createObjectURL(b);
	};
	U.va.url.Cw = function(b) {
		U.va.url.Wh().revokeObjectURL(b);
	};
	U.va.url.Wh = function() {
		var b = U.va.url.mh();
		if (null != b) return b;
		throw Error("This browser doesn't seem to support blob URLs");
	};
	U.va.url.mh = function() {
		return void 0 !== U.global.URL &&
			void 0 !== U.global.URL.createObjectURL
			? U.global.URL
			: void 0 !== U.global.webkitURL &&
			  void 0 !== U.global.webkitURL.createObjectURL
			? U.global.webkitURL
			: void 0 !== U.global.createObjectURL
			? U.global
			: null;
	};
	U.va.url.ct = function() {
		return null != U.va.url.mh();
	};
	U.va.blob = {};
	U.va.blob.getBlob = function(b) {
		var c = U.global.BlobBuilder || U.global.WebKitBlobBuilder;
		if (void 0 !== c) {
			c = new c();
			for (var d = 0; d < arguments.length; d++) c.append(arguments[d]);
			return c.getBlob();
		}
		return U.va.blob.sh(U.g.Za(arguments));
	};
	U.va.blob.sh = function(b, c) {
		var d = U.global.BlobBuilder || U.global.WebKitBlobBuilder;
		if (void 0 !== d) {
			d = new d();
			for (var e = 0; e < b.length; e++) d.append(b[e], void 0);
			return d.getBlob(c);
		}
		if (void 0 !== U.global.Blob)
			return (d = {}), c && (d.type = c), new Blob(b, d);
		throw Error("This browser doesn't seem to support creating Blobs");
	};
	U.b.I = function(b, c) {
		this.mf = (b === U.b.I.pc && c) || "";
		this.Lk = U.b.I.ta;
	};
	U.b.I.prototype.Ra = !0;
	U.b.I.prototype.Ea = function() {
		return this.mf.toString();
	};
	U.b.I.prototype.Ye = !0;
	U.b.I.prototype.tb = function() {
		return U.i.j.$.zb;
	};
	U.la &&
		(U.b.I.prototype.toString = function() {
			return "TrustedResourceUrl{" + this.mf + "}";
		});
	U.b.I.D = function(b) {
		return U.b.I.Xd(b).toString();
	};
	U.b.I.Xd = function(b) {
		if (b instanceof U.b.I && b.constructor === U.b.I && b.Lk === U.b.I.ta)
			return b.mf;
		U.m.ua(
			"expected object of type TrustedResourceUrl, got '" +
				b +
				a +
				U.pa(b)
		);
		return "type_error:TrustedResourceUrl";
	};
	U.b.I.format = function(b, c) {
		var d = U.c.F.D(b);
		if (!U.b.I.Kj.test(d))
			throw Error("Invalid TrustedResourceUrl format: " + d);
		b = d.replace(U.b.I.gk, function(e, f) {
			if (!Object.prototype.hasOwnProperty.call(c, f))
				throw Error(
					'Found marker, "' +
						f +
						'", in format string, "' +
						d +
						'", but no valid label mapping found in args: ' +
						JSON.stringify(c)
				);
			e = c[f];
			return e instanceof U.c.F
				? U.c.F.D(e)
				: encodeURIComponent(String(e));
		});
		return U.b.I.Xb(b);
	};
	U.b.I.gk = /%{(\w+)}/g;
	U.b.I.Kj = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i;
	U.b.I.Ok = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
	U.b.I.iu = function(b, c, d, e) {
		b = U.b.I.format(b, c);
		b = U.b.I.D(b);
		b = U.b.I.Ok.exec(b);
		c = b[3] || "";
		return U.b.I.Xb(
			b[1] + U.b.I.hj("?", b[2] || "", d) + U.b.I.hj("#", c, e)
		);
	};
	U.b.I.Ec = function(b) {
		return U.b.I.Xb(U.c.F.D(b));
	};
	U.b.I.mu = function(b) {
		for (var c = "", d = 0; d < b.length; d++) c += U.c.F.D(b[d]);
		return U.b.I.Xb(c);
	};
	U.b.I.qu = function(b) {
		b = U.va.blob.sh([U.b.V.D(b)], ta);
		b = U.va.url.Xg(b);
		return U.b.I.Xb(b);
	};
	U.b.I.ta = {};
	U.b.I.Xb = function(b) {
		b = U.b.Ob.Tb ? U.b.Ob.Tb.createScriptURL(b) : b;
		return new U.b.I(U.b.I.pc, b);
	};
	U.b.I.hj = function(b, c, d) {
		if (null == d) return c;
		if (typeof d === K) return d ? b + encodeURIComponent(d) : "";
		for (var e in d) {
			var f = d[e];
			f = U.isArray(f) ? f : [f];
			for (var g = 0; g < f.length; g++) {
				var k = f[g];
				null != k &&
					(c || (c = b),
					(c +=
						(c.length > b.length ? "&" : "") +
						encodeURIComponent(e) +
						"=" +
						encodeURIComponent(String(k))));
			}
		}
		return c;
	};
	U.b.I.pc = {};
	U.b.u = function(b, c) {
		this.lf = (b === U.b.u.pc && c) || "";
		this.Ck = U.b.u.ta;
	};
	U.b.u.qa = "about:invalid#zClosurez";
	U.b.u.prototype.Ra = !0;
	U.b.u.prototype.Ea = function() {
		return this.lf.toString();
	};
	U.b.u.prototype.Ye = !0;
	U.b.u.prototype.tb = function() {
		return U.i.j.$.zb;
	};
	U.la &&
		(U.b.u.prototype.toString = function() {
			return "SafeUrl{" + this.lf + "}";
		});
	U.b.u.D = function(b) {
		if (b instanceof U.b.u && b.constructor === U.b.u && b.Ck === U.b.u.ta)
			return b.lf;
		U.m.ua("expected object of type SafeUrl, got '" + b + a + U.pa(b));
		return "type_error:SafeUrl";
	};
	U.b.u.Ec = function(b) {
		return U.b.u.za(U.c.F.D(b));
	};
	U.b.le = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i;
	U.b.u.Kv = function(b) {
		return U.b.le.test(b);
	};
	U.b.u.ku = function(b) {
		b = U.b.le.test(b.type) ? U.va.url.Xg(b) : U.b.u.qa;
		return U.b.u.za(b);
	};
	U.b.Vj = /^data:([^,]*);base64,[a-z0-9+\/]+=*$/i;
	U.b.u.Zl = function(b) {
		b = b.replace(/(%0A|%0D)/g, "");
		var c = b.match(U.b.Vj);
		c = c && U.b.le.test(c[1]);
		return U.b.u.za(c ? b : U.b.u.qa);
	};
	U.b.u.uu = function(b) {
		U.c.A.Cb(b, "tel:") || (b = U.b.u.qa);
		return U.b.u.za(b);
	};
	U.b.Gk = /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i;
	U.b.u.ru = function(b) {
		U.b.Gk.test(decodeURIComponent(b)) || (b = U.b.u.qa);
		return U.b.u.za(b);
	};
	U.b.u.nu = function(b) {
		U.c.A.Cb(b, "fb-messenger://share") || (b = U.b.u.qa);
		return U.b.u.za(b);
	};
	U.b.u.wu = function(b) {
		U.c.A.Cb(b, "whatsapp://send") || (b = U.b.u.qa);
		return U.b.u.za(b);
	};
	U.b.u.su = function(b) {
		(U.c.A.Cb(b, "sms:") && U.b.u.Vm(b)) || (b = U.b.u.qa);
		return U.b.u.za(b);
	};
	U.b.u.Vm = function(b) {
		var c = b.indexOf("#");
		0 < c && (b = b.substring(0, c));
		c = b.match(/[?&]body=/gi);
		if (!c) return !0;
		if (1 < c.length) return !1;
		b = b.match(/[?&]body=([^&]*)/)[1];
		if (!b) return !0;
		try {
			decodeURIComponent(b);
		} catch (d) {
			return !1;
		}
		return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(b);
	};
	U.b.u.tu = function(b) {
		U.c.A.Cb(b, "ssh://") || (b = U.b.u.qa);
		return U.b.u.za(b);
	};
	U.b.u.Jw = function(b, c) {
		return U.b.u.rf(/^chrome-extension:\/\/([^\/]+)\//, b, c);
	};
	U.b.u.Lw = function(b, c) {
		return U.b.u.rf(/^moz-extension:\/\/([^\/]+)\//, b, c);
	};
	U.b.u.Kw = function(b, c) {
		return U.b.u.rf(/^ms-browser-extension:\/\/([^\/]+)\//, b, c);
	};
	U.b.u.rf = function(b, c, d) {
		(b = b.exec(c))
			? ((b = b[1]),
			  -1 ==
					(d instanceof U.c.F
						? [U.c.F.D(d)]
						: d.map(function(e) {
								return U.c.F.D(e);
						  })
					).indexOf(b) && (c = U.b.u.qa))
			: (c = U.b.u.qa);
		return U.b.u.za(c);
	};
	U.b.u.vu = function(b) {
		return U.b.u.za(U.b.I.D(b));
	};
	U.b.me = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
	U.b.u.Ir = U.b.me;
	U.b.u.Rd = function(b) {
		if (b instanceof U.b.u) return b;
		b = typeof b == G && b.Ra ? b.Ea() : String(b);
		U.b.me.test(b) || (b = U.b.u.qa);
		return U.b.u.za(b);
	};
	U.b.u.Oa = function(b, c) {
		if (b instanceof U.b.u) return b;
		b = typeof b == G && b.Ra ? b.Ea() : String(b);
		if (c && /^data:/i.test(b) && ((c = U.b.u.Zl(b)), c.Ea() == b))
			return c;
		U.b.me.test(b) || (b = U.b.u.qa);
		return U.b.u.za(b);
	};
	U.b.u.ta = {};
	U.b.u.za = function(b) {
		return new U.b.u(U.b.u.pc, b);
	};
	U.b.u.Yo = U.b.u.za("about:blank");
	U.b.u.pc = {};
	U.b.G = function() {
		this.Ld = "";
		this.Bk = U.b.G.ta;
	};
	U.b.G.prototype.Ra = !0;
	U.b.G.ta = {};
	U.b.G.Ec = function(b) {
		b = U.c.F.D(b);
		return 0 === b.length ? U.b.G.EMPTY : U.b.G.vc(b);
	};
	U.b.G.prototype.Ea = Q("Ld");
	U.la &&
		(U.b.G.prototype.toString = function() {
			return "SafeStyle{" + this.Ld + "}";
		});
	U.b.G.D = function(b) {
		if (b instanceof U.b.G && b.constructor === U.b.G && b.Bk === U.b.G.ta)
			return b.Ld;
		U.m.ua("expected object of type SafeStyle, got '" + b + a + U.pa(b));
		return "type_error:SafeStyle";
	};
	U.b.G.vc = function(b) {
		return new U.b.G().Lb(b);
	};
	U.b.G.prototype.Lb = function(b) {
		this.Ld = b;
		return this;
	};
	U.b.G.EMPTY = U.b.G.vc("");
	U.b.G.qa = "zClosurez";
	U.b.G.create = function(b) {
		var c = "",
			d;
		for (d in b) {
			if (!/^[-_a-zA-Z0-9]+$/.test(d))
				throw Error("Name allows only [-_a-zA-Z0-9], got: " + d);
			var e = b[d];
			null != e &&
				((e = U.isArray(e)
					? U.g.map(e, U.b.G.Zi).join(" ")
					: U.b.G.Zi(e)),
				(c += d + ":" + e + ";"));
		}
		return c ? U.b.G.vc(c) : U.b.G.EMPTY;
	};
	U.b.G.Zi = function(b) {
		if (b instanceof U.b.u)
			return (
				'url("' +
				U.b.u
					.D(b)
					.replace(/</g, "%3c")
					.replace(/[\\"]/g, "\\$&") +
				'")'
			);
		b = b instanceof U.c.F ? U.c.F.D(b) : U.b.G.eo(String(b));
		if (/[{;}]/.test(b))
			throw new U.m.nc("Value does not allow [{;}], got: %s.", [b]);
		return b;
	};
	U.b.G.eo = function(b) {
		var c = b
			.replace(U.b.G.ag, "$1")
			.replace(U.b.G.ag, "$1")
			.replace(U.b.G.ug, "url");
		if (U.b.G.Qk.test(c)) {
			if (U.b.G.Sj.test(b))
				return (
					U.m.ua("String value disallows comments, got: " + b),
					U.b.G.qa
				);
			if (!U.b.G.xm(b))
				return (
					U.m.ua("String value requires balanced quotes, got: " + b),
					U.b.G.qa
				);
			if (!U.b.G.ym(b))
				return (
					U.m.ua(
						"String value requires balanced square brackets and one identifier per pair of brackets, got: " +
							b
					),
					U.b.G.qa
				);
		} else
			return (
				U.m.ua(
					"String value allows only " +
						U.b.G.xg +
						" and simple functions, got: " +
						b
				),
				U.b.G.qa
			);
		return U.b.G.fo(b);
	};
	U.b.G.xm = function(b) {
		for (var c = !0, d = !0, e = 0; e < b.length; e++) {
			var f = b.charAt(e);
			"'" == f && d ? (c = !c) : '"' == f && c && (d = !d);
		}
		return c && d;
	};
	U.b.G.ym = function(b) {
		for (var c = !0, d = /^[-_a-zA-Z0-9]$/, e = 0; e < b.length; e++) {
			var f = b.charAt(e);
			if ("]" == f) {
				if (c) return !1;
				c = !0;
			} else if ("[" == f) {
				if (!c) return !1;
				c = !1;
			} else if (!c && !d.test(f)) return !1;
		}
		return c;
	};
	U.b.G.xg = "[-,.\"'%_!# a-zA-Z0-9\\[\\]]";
	U.b.G.Qk = new RegExp("^" + U.b.G.xg + "+$");
	U.b.G.ug = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;
	U.b.G.Bj = "calc cubic-bezier fit-content hsl hsla linear-gradient matrix minmax repeat rgb rgba (rotate|scale|translate)(X|Y|Z|3d)?".split(
		" "
	);
	U.b.G.ag = new RegExp(
		"\\b(" + U.b.G.Bj.join("|") + ")\\([-+*/0-9a-z.%\\[\\], ]+\\)",
		"g"
	);
	U.b.G.Sj = /\/\*/;
	U.b.G.fo = function(b) {
		return b.replace(U.b.G.ug, function(c, d, e, f) {
			var g = "";
			e = e.replace(/^(['"])(.*)\1$/, function(k, h, m) {
				g = h;
				return m;
			});
			c = U.b.u.Rd(e).Ea();
			return d + g + c + g + f;
		});
	};
	U.b.G.concat = function(b) {
		function c(e) {
			U.isArray(e) ? U.g.forEach(e, c) : (d += U.b.G.D(e));
		}
		var d = "";
		U.g.forEach(arguments, c);
		return d ? U.b.G.vc(d) : U.b.G.EMPTY;
	};
	U.b.X = function() {
		this.Kd = "";
		this.Ak = U.b.X.ta;
	};
	U.b.X.prototype.Ra = !0;
	U.b.X.ta = {};
	U.b.X.Ct = function(b, c) {
		if (U.c.A.contains(b, "<"))
			throw Error("Selector does not allow '<', got: " + b);
		var d = b.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
		if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(d))
			throw Error(
				"Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " +
					b
			);
		if (!U.b.X.wm(d))
			throw Error("() and [] in selector must be balanced, got: " + b);
		c instanceof U.b.G || (c = U.b.G.create(c));
		b = b + "{" + U.b.G.D(c).replace(/</g, "\\3C ") + "}";
		return U.b.X.wc(b);
	};
	U.b.X.wm = function(b) {
		for (var c = { "(": ")", "[": "]" }, d = [], e = 0; e < b.length; e++) {
			var f = b[e];
			if (c[f]) d.push(c[f]);
			else if (U.object.contains(c, f) && d.pop() != f) return !1;
		}
		return 0 == d.length;
	};
	U.b.X.concat = function(b) {
		function c(e) {
			U.isArray(e) ? U.g.forEach(e, c) : (d += U.b.X.D(e));
		}
		var d = "";
		U.g.forEach(arguments, c);
		return U.b.X.wc(d);
	};
	U.b.X.Ec = function(b) {
		b = U.c.F.D(b);
		return 0 === b.length ? U.b.X.EMPTY : U.b.X.wc(b);
	};
	U.b.X.prototype.Ea = Q("Kd");
	U.la &&
		(U.b.X.prototype.toString = function() {
			return "SafeStyleSheet{" + this.Kd + "}";
		});
	U.b.X.D = function(b) {
		if (b instanceof U.b.X && b.constructor === U.b.X && b.Ak === U.b.X.ta)
			return b.Kd;
		U.m.ua(
			"expected object of type SafeStyleSheet, got '" + b + a + U.pa(b)
		);
		return "type_error:SafeStyleSheet";
	};
	U.b.X.wc = function(b) {
		return new U.b.X().Lb(b);
	};
	U.b.X.prototype.Lb = function(b) {
		this.Kd = b;
		return this;
	};
	U.b.X.EMPTY = U.b.X.wc("");
	U.b.s = function() {
		this.Id = "";
		this.yk = U.b.s.ta;
		this.md = null;
	};
	U.b.s.Ua = U.la;
	U.b.s.Jk = !0;
	U.b.s.prototype.Ye = !0;
	U.b.s.prototype.tb = Q("md");
	U.b.s.prototype.Ra = !0;
	U.b.s.prototype.Ea = function() {
		return this.Id.toString();
	};
	U.la &&
		(U.b.s.prototype.toString = function() {
			return "SafeHtml{" + this.Id + "}";
		});
	U.b.s.D = function(b) {
		return U.b.s.yb(b).toString();
	};
	U.b.s.yb = function(b) {
		if (b instanceof U.b.s && b.constructor === U.b.s && b.yk === U.b.s.ta)
			return b.Id;
		U.m.ua("expected object of type SafeHtml, got '" + b + a + U.pa(b));
		return "type_error:SafeHtml";
	};
	U.b.s.Fa = function(b) {
		if (b instanceof U.b.s) return b;
		var c = typeof b == G,
			d = null;
		c && b.Ye && (d = b.tb());
		return U.b.s.Pa(U.c.A.Fa(c && b.Ra ? b.Ea() : String(b)), d);
	};
	U.b.s.bv = function(b) {
		if (b instanceof U.b.s) return b;
		b = U.b.s.Fa(b);
		return U.b.s.Pa(U.c.A.Nc(U.b.s.D(b)), b.tb());
	};
	U.b.s.cv = function(b) {
		if (b instanceof U.b.s) return b;
		b = U.b.s.Fa(b);
		return U.b.s.Pa(U.c.A.vj(U.b.s.D(b)), b.tb());
	};
	U.b.s.from = U.b.s.Fa;
	U.b.s.wg = /^[a-zA-Z0-9-]+$/;
	U.b.s.Nk = {
		action: !0,
		cite: !0,
		data: !0,
		formaction: !0,
		href: !0,
		manifest: !0,
		poster: !0,
		src: !0
	};
	U.b.s.sk = {
		APPLET: !0,
		BASE: !0,
		EMBED: !0,
		IFRAME: !0,
		LINK: !0,
		MATH: !0,
		META: !0,
		OBJECT: !0,
		SCRIPT: !0,
		STYLE: !0,
		SVG: !0,
		TEMPLATE: !0
	};
	U.b.s.create = function(b, c, d) {
		U.b.s.Ro(String(b));
		return U.b.s.Hb(String(b), c, d);
	};
	U.b.s.Ro = function(b) {
		if (!U.b.s.wg.test(b))
			throw Error(U.b.s.Ua ? "Invalid tag name <" + b + ">." : "");
		if (b.toUpperCase() in U.b.s.sk)
			throw Error(
				U.b.s.Ua
					? "Tag name <" + b + "> is not allowed for SafeHtml."
					: ""
			);
	};
	U.b.s.yt = function(b, c, d, e) {
		b && U.b.I.D(b);
		var f = {};
		f.src = b || null;
		f.srcdoc = c && U.b.s.D(c);
		b = U.b.s.jd(f, { sandbox: "" }, d);
		return U.b.s.Hb("iframe", b, e);
	};
	U.b.s.Dt = function(b, c, d, e) {
		if (!U.b.s.tl())
			throw Error(
				U.b.s.Ua
					? "The browser does not support sandboxed iframes."
					: ""
			);
		var f = {};
		f.src = b ? U.b.u.D(U.b.u.Rd(b)) : null;
		f.srcdoc = c || null;
		f.sandbox = "";
		b = U.b.s.jd(f, {}, d);
		return U.b.s.Hb("iframe", b, e);
	};
	U.b.s.tl = function() {
		return (
			U.global.HTMLIFrameElement &&
			"sandbox" in U.global.HTMLIFrameElement.prototype
		);
	};
	U.b.s.Et = function(b, c) {
		U.b.I.D(b);
		b = U.b.s.jd({ src: b }, {}, c);
		return U.b.s.Hb(ra, b);
	};
	U.b.s.createScript = function(b, c) {
		for (var d in c) {
			var e = d.toLowerCase();
			if ("language" == e || "src" == e || "text" == e || "type" == e)
				throw Error(U.b.s.Ua ? 'Cannot set "' + e + '" attribute' : "");
		}
		d = "";
		b = U.g.concat(b);
		for (e = 0; e < b.length; e++) d += U.b.V.D(b[e]);
		b = U.b.s.Pa(d, U.i.j.$.Va);
		return U.b.s.Hb(ra, c, b);
	};
	U.b.s.Ft = function(b, c) {
		c = U.b.s.jd({ type: "text/css" }, {}, c);
		var d = "";
		b = U.g.concat(b);
		for (var e = 0; e < b.length; e++) d += U.b.X.D(b[e]);
		b = U.b.s.Pa(d, U.i.j.$.Va);
		return U.b.s.Hb("style", c, b);
	};
	U.b.s.Bt = function(b, c) {
		b = U.b.u.D(U.b.u.Rd(b));
		(U.h.userAgent.B.Ad() || U.h.userAgent.B.wb()) &&
			U.c.A.contains(b, ";") &&
			(b = "'" + b.replace(/'/g, "%27") + "'");
		return U.b.s.Hb("meta", {
			"http-equiv": "refresh",
			content: (c || 0) + "; url=" + b
		});
	};
	U.b.s.am = function(b, c, d) {
		if (d instanceof U.c.F) d = U.c.F.D(d);
		else if ("style" == c.toLowerCase())
			if (U.b.s.Jk) d = U.b.s.qm(d);
			else
				throw Error(U.b.s.Ua ? 'Attribute "style" not supported.' : "");
		else {
			if (/^on/i.test(c))
				throw Error(
					U.b.s.Ua
						? 'Attribute "' +
								c +
								'" requires goog.string.Const value, "' +
								d +
								'" given.'
						: ""
				);
			if (c.toLowerCase() in U.b.s.Nk)
				if (d instanceof U.b.I) d = U.b.I.D(d);
				else if (d instanceof U.b.u) d = U.b.u.D(d);
				else if (typeof d === K) d = U.b.u.Rd(d).Ea();
				else
					throw Error(
						U.b.s.Ua
							? 'Attribute "' +
									c +
									'" on tag "' +
									b +
									'" requires goog.html.SafeUrl, goog.string.Const, or string, value "' +
									d +
									'" given.'
							: ""
					);
		}
		d.Ra && (d = d.Ea());
		return c + '="' + U.c.A.Fa(String(d)) + '"';
	};
	U.b.s.qm = function(b) {
		if (!U.Ba(b))
			throw Error(
				U.b.s.Ua
					? 'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
							typeof b +
							" given: " +
							b
					: ""
			);
		b instanceof U.b.G || (b = U.b.G.create(b));
		return U.b.G.D(b);
	};
	U.b.s.Ht = function(b, c, d, e) {
		c = U.b.s.create(c, d, e);
		c.md = b;
		return c;
	};
	U.b.s.join = function(b, c) {
		function d(g) {
			U.isArray(g)
				? U.g.forEach(g, d)
				: ((g = U.b.s.Fa(g)),
				  f.push(U.b.s.D(g)),
				  (g = g.tb()),
				  e == U.i.j.$.Va
						? (e = g)
						: g != U.i.j.$.Va && e != g && (e = null));
		}
		b = U.b.s.Fa(b);
		var e = b.tb(),
			f = [];
		U.g.forEach(c, d);
		return U.b.s.Pa(f.join(U.b.s.D(b)), e);
	};
	U.b.s.concat = function(b) {
		return U.b.s.join(U.b.s.EMPTY, Array.prototype.slice.call(arguments));
	};
	U.b.s.st = function(b, c) {
		var d = U.b.s.concat(U.g.slice(arguments, 1));
		d.md = b;
		return d;
	};
	U.b.s.ta = {};
	U.b.s.Pa = function(b, c) {
		return new U.b.s().Lb(b, c);
	};
	U.b.s.prototype.Lb = function(b, c) {
		this.Id = U.b.Ob.Tb ? U.b.Ob.Tb.createHTML(b) : b;
		this.md = c;
		return this;
	};
	U.b.s.Hb = function(b, c, d) {
		var e = null;
		var f = "<" + b + U.b.s.wo(b, c);
		null == d ? (d = []) : U.isArray(d) || (d = [d]);
		U.a.tags.Zm(b.toLowerCase())
			? (f += ">")
			: ((e = U.b.s.concat(d)),
			  (f += ">" + U.b.s.D(e) + "</" + b + ">"),
			  (e = e.tb()));
		(b = c && c.dir) &&
			(e = /^(ltr|rtl|auto)$/i.test(b) ? U.i.j.$.Va : null);
		return U.b.s.Pa(f, e);
	};
	U.b.s.wo = function(b, c) {
		var d = "";
		if (c)
			for (var e in c) {
				if (!U.b.s.wg.test(e))
					throw Error(
						U.b.s.Ua ? 'Invalid attribute name "' + e + '".' : ""
					);
				var f = c[e];
				null != f && (d += " " + U.b.s.am(b, e, f));
			}
		return d;
	};
	U.b.s.jd = function(b, c, d) {
		var e = {},
			f;
		for (f in b) e[f] = b[f];
		for (f in c) e[f] = c[f];
		if (d)
			for (f in d) {
				var g = f.toLowerCase();
				if (g in b)
					throw Error(
						U.b.s.Ua
							? 'Cannot override "' +
									g +
									'" attribute, got "' +
									f +
									'" with value "' +
									d[f] +
									'"'
							: ""
					);
				g in c && delete e[g];
				e[f] = d[f];
			}
		return e;
	};
	U.b.s.Tp = U.b.s.Pa("<!DOCTYPE html>", U.i.j.$.Va);
	U.b.s.EMPTY = U.b.s.Pa("", U.i.j.$.Va);
	U.b.s.Tf = U.b.s.Pa("<br>", U.i.j.$.Va);
	U.b.ib = {};
	U.b.ib.Wi = function(b, c) {
		return U.b.s.Pa(c, null);
	};
	U.b.ib.Gw = function(b, c) {
		return U.b.V.uc(c);
	};
	U.b.ib.Hw = function(b, c) {
		return U.b.G.vc(c);
	};
	U.b.ib.Iw = function(b, c) {
		return U.b.X.wc(c);
	};
	U.b.ib.bo = function(b, c) {
		return U.b.u.za(c);
	};
	U.b.ib.Ix = function(b, c) {
		return U.b.I.Xb(c);
	};
	U.a.N = {};
	U.a.N.Mq = {
		ap: "afterbegin",
		bp: "afterend",
		sp: "beforebegin",
		tp: "beforeend"
	};
	U.a.N.ev = function(b, c, d) {
		b.insertAdjacentHTML(c, U.b.s.yb(d));
	};
	U.a.N.Fk = { MATH: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0 };
	U.a.N.Nm = U.U.sl(function() {
		if (U.la && "undefined" === typeof document) return !1;
		var b = document.createElement("div"),
			c = document.createElement("div");
		c.appendChild(document.createElement("div"));
		b.appendChild(c);
		if (U.la && !b.firstChild) return !1;
		c = b.firstChild.firstChild;
		b.innerHTML = U.b.s.yb(U.b.s.EMPTY);
		return !c.parentElement;
	});
	U.a.N.Mo = function(b, c) {
		if (U.a.N.Nm()) for (; b.lastChild; ) b.removeChild(b.lastChild);
		b.innerHTML = U.b.s.yb(c);
	};
	U.a.N.uf = function(b, c) {
		if (U.m.xa && U.a.N.Fk[b.tagName.toUpperCase()])
			throw Error(
				"goog.dom.safe.setInnerHtml cannot be used to set content of " +
					b.tagName +
					"."
			);
		U.a.N.Mo(b, c);
	};
	U.a.N.cx = function(b, c) {
		b.outerHTML = U.b.s.yb(c);
	};
	U.a.N.Uw = function(b, c) {
		c = c instanceof U.b.u ? c : U.b.u.Oa(c);
		U.a.m.cl(b).action = U.b.u.D(c);
	};
	U.a.N.Ow = function(b, c) {
		c = c instanceof U.b.u ? c : U.b.u.Oa(c);
		U.a.m.al(b).formAction = U.b.u.D(c);
	};
	U.a.N.Zw = function(b, c) {
		c = c instanceof U.b.u ? c : U.b.u.Oa(c);
		U.a.m.fl(b).formAction = U.b.u.D(c);
	};
	U.a.N.gx = function(b, c) {
		b.style.cssText = U.b.G.D(c);
	};
	U.a.N.Ll = function(b) {
		b.write(U.b.s.yb(U.b.s.EMPTY));
	};
	U.a.N.Mw = function(b, c) {
		U.a.m.Zk(b);
		c = c instanceof U.b.u ? c : U.b.u.Oa(c);
		b.href = U.b.u.D(c);
	};
	U.a.N.ko = function(b, c) {
		U.a.m.el(b);
		c = c instanceof U.b.u ? c : U.b.u.Oa(c, /^data:image\//i.test(c));
		b.src = U.b.u.D(c);
	};
	U.a.N.Nw = function(b, c) {
		U.a.m.$k(b);
		c = c instanceof U.b.u ? c : U.b.u.Oa(c, /^data:audio\//i.test(c));
		b.src = U.b.u.D(c);
	};
	U.a.N.kx = function(b, c) {
		U.a.m.il(b);
		c = c instanceof U.b.u ? c : U.b.u.Oa(c, /^data:video\//i.test(c));
		b.src = U.b.u.D(c);
	};
	U.a.N.Sw = function(b, c) {
		U.a.m.bl(b);
		b.src = U.b.I.Xd(c);
	};
	U.a.N.Ww = function(b, c) {
		U.a.m.dl(b);
		b.src = U.b.I.D(c);
	};
	U.a.N.jo = function(b) {
		var c = U.b.I.Ec(U.c.F.EMPTY);
		U.a.m.Eg(b);
		b.src = U.b.I.D(c);
	};
	U.a.N.Yw = function(b, c) {
		U.a.m.Eg(b);
		b.srcdoc = U.b.s.yb(c);
	};
	U.a.N.$w = function(b, c, d) {
		U.a.m.gl(b);
		b.rel = d;
		U.c.A.gd(d, "stylesheet")
			? (b.href = U.b.I.D(c))
			: (b.href =
					c instanceof U.b.I
						? U.b.I.D(c)
						: c instanceof U.b.u
						? U.b.u.D(c)
						: U.b.u.D(U.b.u.Oa(c)));
	};
	U.a.N.bx = function(b, c) {
		U.a.m.hl(b);
		b.data = U.b.I.Xd(c);
	};
	U.a.N.oo = function(b, c) {
		U.a.m.Fg(b);
		b.src = U.b.I.Xd(c);
		(c = U.Sh()) && b.setAttribute("nonce", c);
	};
	U.a.N.fx = function(b, c) {
		U.a.m.Fg(b);
		b.text = U.b.V.sj(c);
		(c = U.Sh()) && b.setAttribute("nonce", c);
	};
	U.a.N.ax = function(b, c) {
		U.a.m.te(b);
		c = c instanceof U.b.u ? c : U.b.u.Oa(c);
		b.href = U.b.u.D(c);
	};
	U.a.N.Ys = function(b, c) {
		U.a.m.te(b);
		c = c instanceof U.b.u ? c : U.b.u.Oa(c);
		b.assign(U.b.u.D(c));
	};
	U.a.N.yw = function(b, c) {
		U.a.m.te(b);
		c = c instanceof U.b.u ? c : U.b.u.Oa(c);
		b.replace(U.b.u.D(c));
	};
	U.a.N.jw = function(b, c, d, e, f) {
		b = b instanceof U.b.u ? b : U.b.u.Oa(b);
		return (c || U.global).open(U.b.u.D(b), d ? U.c.F.D(d) : "", e, f);
	};
	U.a.N.lw = function(b, c) {
		return U.a.N.parseFromString(b, c, "text/html");
	};
	U.a.N.parseFromString = function(b, c, d) {
		return b.parseFromString(U.b.s.yb(c), d);
	};
	U.a.N.zt = function(b) {
		if (!/^image\/.*/g.test(b.type))
			throw Error(
				"goog.dom.safe.createImageFromBlob only accepts MIME type image/.*."
			);
		var c = U.global.URL.createObjectURL(b);
		b = new U.global.Image();
		b.onload = function() {
			U.global.URL.revokeObjectURL(c);
		};
		U.a.N.ko(b, U.b.ib.bo(U.c.F.from("Image blob URL."), c));
		return b;
	};
	U.c.Yj = !1;
	U.c.dk = !1;
	U.c.vg = { ig: "\u00a0" };
	U.c.startsWith = U.c.A.startsWith;
	U.c.endsWith = U.c.A.endsWith;
	U.c.Cb = U.c.A.Cb;
	U.c.Mg = U.c.A.Mg;
	U.c.Ng = U.c.A.Ng;
	U.c.wx = function(b, c) {
		for (
			var d = b.split("%s"),
				e = "",
				f = Array.prototype.slice.call(arguments, 1);
			f.length && 1 < d.length;

		)
			e += d.shift() + f.shift();
		return e + d.join("%s");
	};
	U.c.lt = function(b) {
		return b.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
	};
	U.c.Lc = U.c.A.Lc;
	U.c.sv = function(b) {
		return 0 == b.length;
	};
	U.c.Aa = U.c.Lc;
	U.c.Jm = function(b) {
		return U.c.Lc(U.c.pn(b));
	};
	U.c.rv = U.c.Jm;
	U.c.mv = function(b) {
		return !/[^\t\n\r ]/.test(b);
	};
	U.c.jv = function(b) {
		return !/[^a-zA-Z]/.test(b);
	};
	U.c.Ev = function(b) {
		return !/[^0-9]/.test(b);
	};
	U.c.kv = function(b) {
		return !/[^a-zA-Z0-9]/.test(b);
	};
	U.c.Lv = function(b) {
		return " " == b;
	};
	U.c.Mv = function(b) {
		return (
			(1 == b.length && " " <= b && "~" >= b) ||
			("\u0080" <= b && "\ufffd" >= b)
		);
	};
	U.c.ux = function(b) {
		return b.replace(/(\r\n|\r|\n)+/g, " ");
	};
	U.c.vl = function(b) {
		return b.replace(/(\r\n|\r|\n)/g, "\n");
	};
	U.c.ew = function(b) {
		return b.replace(/\xa0|\s/g, " ");
	};
	U.c.dw = function(b) {
		return b.replace(/\xa0|[ \t]+/g, " ");
	};
	U.c.kt = function(b) {
		return b
			.replace(/[\t\r\n ]+/g, " ")
			.replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
	};
	U.c.trim = U.c.A.trim;
	U.c.trimLeft = function(b) {
		return b.replace(/^[\s\xa0]+/, "");
	};
	U.c.trimRight = function(b) {
		return b.replace(/[\s\xa0]+$/, "");
	};
	U.c.fd = U.c.A.fd;
	U.c.Ri = function(b, c, d) {
		if (b == c) return 0;
		if (!b) return -1;
		if (!c) return 1;
		for (
			var e = b.toLowerCase().match(d),
				f = c.toLowerCase().match(d),
				g = Math.min(e.length, f.length),
				k = 0;
			k < g;
			k++
		) {
			d = e[k];
			var h = f[k];
			if (d != h)
				return (
					(b = parseInt(d, 10)),
					!isNaN(b) && ((c = parseInt(h, 10)), !isNaN(c) && b - c)
						? b - c
						: d < h
						? -1
						: 1
				);
		}
		return e.length != f.length ? e.length - f.length : b < c ? -1 : 1;
	};
	U.c.hv = function(b, c) {
		return U.c.Ri(b, c, /\d+|\D+/g);
	};
	U.c.Yl = function(b, c) {
		return U.c.Ri(b, c, /\d+|\.\d+|\D+/g);
	};
	U.c.hw = U.c.Yl;
	U.c.Rc = function(b) {
		return encodeURIComponent(String(b));
	};
	U.c.Yd = function(b) {
		return decodeURIComponent(b.replace(/\+/g, " "));
	};
	U.c.Nc = U.c.A.Nc;
	U.c.Fa = function(b, c) {
		b = U.c.A.Fa(b, c);
		U.c.Yj && (b = b.replace(U.c.bk, "&#101;"));
		return b;
	};
	U.c.bk = /e/g;
	U.c.qj = function(b) {
		return U.c.contains(b, "&")
			? !U.c.dk && "document" in U.global
				? U.c.rj(b)
				: U.c.Jo(b)
			: b;
	};
	U.c.Jx = function(b, c) {
		return U.c.contains(b, "&") ? U.c.rj(b, c) : b;
	};
	U.c.rj = function(b, c) {
		var d = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
		var e = c
			? c.createElement("div")
			: U.global.document.createElement("div");
		return b.replace(U.c.jk, function(f, g) {
			var k = d[f];
			if (k) return k;
			"#" == g.charAt(0) &&
				((g = Number("0" + g.substr(1))),
				isNaN(g) || (k = String.fromCharCode(g)));
			k ||
				(U.a.N.uf(
					e,
					U.b.ib.Wi(U.c.F.from("Single HTML entity."), f + " ")
				),
				(k = e.firstChild.nodeValue.slice(0, -1)));
			return (d[f] = k);
		});
	};
	U.c.Jo = function(b) {
		return b.replace(/&([^;]+);/g, function(c, d) {
			switch (d) {
				case "amp":
					return "&";
				case "lt":
					return "<";
				case "gt":
					return ">";
				case "quot":
					return '"';
				default:
					return "#" != d.charAt(0) ||
						((d = Number("0" + d.substr(1))), isNaN(d))
						? c
						: String.fromCharCode(d);
			}
		});
	};
	U.c.jk = /&([^;\s<&]+);?/g;
	U.c.vj = function(b) {
		return U.c.Nc(b.replace(/  /g, " &#160;"), void 0);
	};
	U.c.nw = function(b) {
		return b.replace(/(^|[\n ]) /g, "$1" + U.c.vg.ig);
	};
	U.c.vx = function(b, c) {
		for (var d = c.length, e = 0; e < d; e++) {
			var f = 1 == d ? c : c.charAt(e);
			if (b.charAt(0) == f && b.charAt(b.length - 1) == f)
				return b.substring(1, b.length - 1);
		}
		return b;
	};
	U.c.truncate = function(b, c, d) {
		d && (b = U.c.qj(b));
		b.length > c && (b = b.substring(0, c - 3) + "...");
		d && (b = U.c.Fa(b));
		return b;
	};
	U.c.Hx = function(b, c, d, e) {
		d && (b = U.c.qj(b));
		e && b.length > c
			? (e > c && (e = c),
			  (b = b.substring(0, c - e) + "..." + b.substring(b.length - e)))
			: b.length > c &&
			  ((e = Math.floor(c / 2)),
			  (b =
					b.substring(0, e + (c % 2)) +
					"..." +
					b.substring(b.length - e)));
		d && (b = U.c.Fa(b));
		return b;
	};
	U.c.yf = {
		"\x00": "\\0",
		"\b": "\\b",
		"\f": "\\f",
		"\n": "\\n",
		"\r": "\\r",
		"\t": "\\t",
		"\x0B": "\\x0B",
		'"': '\\"',
		"\\": "\\\\",
		"<": "\\u003C"
	};
	U.c.Bd = { "'": "\\'" };
	U.c.quote = function(b) {
		b = String(b);
		for (var c = ['"'], d = 0; d < b.length; d++) {
			var e = b.charAt(d),
				f = e.charCodeAt(0);
			c[d + 1] = U.c.yf[e] || (31 < f && 127 > f ? e : U.c.fh(e));
		}
		c.push('"');
		return c.join("");
	};
	U.c.Zt = function(b) {
		for (var c = [], d = 0; d < b.length; d++) c[d] = U.c.fh(b.charAt(d));
		return c.join("");
	};
	U.c.fh = function(b) {
		if (b in U.c.Bd) return U.c.Bd[b];
		if (b in U.c.yf) return (U.c.Bd[b] = U.c.yf[b]);
		var c = b.charCodeAt(0);
		if (31 < c && 127 > c) var d = b;
		else {
			if (256 > c) {
				if (((d = "\\x"), 16 > c || 256 < c)) d += "0";
			} else (d = "\\u"), 4096 > c && (d += "0");
			d += c.toString(16).toUpperCase();
		}
		return (U.c.Bd[b] = d);
	};
	U.c.contains = U.c.A.contains;
	U.c.gd = U.c.A.gd;
	U.c.vt = function(b, c) {
		return b && c ? b.split(c).length - 1 : 0;
	};
	U.c.jc = Aa();
	U.c.remove = function(b, c) {
		return b.replace(c, "");
	};
	U.c.sw = function(b, c) {
		c = new RegExp(U.c.nf(c), "g");
		return b.replace(c, "");
	};
	U.c.xw = function(b, c, d) {
		c = new RegExp(U.c.nf(c), "g");
		return b.replace(c, d.replace(/\$/g, "$$$$"));
	};
	U.c.nf = function(b) {
		return String(b)
			.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
			.replace(/\x08/g, "\\x08");
	};
	U.c.repeat = String.prototype.repeat
		? function(b, c) {
				return b.repeat(c);
		  }
		: function(b, c) {
				return Array(c + 1).join(b);
		  };
	U.c.kw = function(b, c, d) {
		b = void 0 !== d ? b.toFixed(d) : String(b);
		d = b.indexOf(".");
		-1 == d && (d = b.length);
		return U.c.repeat("0", Math.max(0, c - d)) + b;
	};
	U.c.pn = function(b) {
		return null == b ? "" : String(b);
	};
	U.c.rl = function(b) {
		return Array.prototype.join.call(arguments, "");
	};
	U.c.Ph = function() {
		return (
			Math.floor(2147483648 * Math.random()).toString(36) +
			Math.abs(Math.floor(2147483648 * Math.random()) ^ U.now()).toString(
				36
			)
		);
	};
	U.c.Eb = U.c.A.Eb;
	U.c.av = function(b) {
		for (var c = 0, d = 0; d < b.length; ++d)
			c = (31 * c + b.charCodeAt(d)) >>> 0;
		return c;
	};
	U.c.Ko = (2147483648 * Math.random()) | 0;
	U.c.Gt = function() {
		return "goog_" + U.c.Ko++;
	};
	U.c.Dx = function(b) {
		var c = Number(b);
		return 0 == c && U.c.Lc(b) ? NaN : c;
	};
	U.c.yv = function(b) {
		return /^[a-z]+([A-Z][a-z]*)*$/.test(b);
	};
	U.c.Nv = function(b) {
		return /^([A-Z][a-z]*)+$/.test(b);
	};
	U.c.Cx = function(b) {
		return String(b).replace(/\-([a-z])/g, function(c, d) {
			return d.toUpperCase();
		});
	};
	U.c.Ex = function(b) {
		return String(b)
			.replace(/([A-Z])/g, "-$1")
			.toLowerCase();
	};
	U.c.Fx = function(b, c) {
		c = typeof c === K ? U.c.nf(c) : "\\s";
		return b.replace(
			new RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])", "g"),
			function(d, e, f) {
				return e + f.toUpperCase();
			}
		);
	};
	U.c.gt = function(b) {
		return (
			String(b.charAt(0)).toUpperCase() +
			String(b.substr(1)).toLowerCase()
		);
	};
	U.c.parseInt = function(b) {
		isFinite(b) && (b = String(b));
		return typeof b === K
			? /^\s*-?0x/i.test(b)
				? parseInt(b, 16)
				: parseInt(b, 10)
			: NaN;
	};
	U.c.ox = function(b, c, d) {
		b = b.split(c);
		for (var e = []; 0 < d && b.length; ) e.push(b.shift()), d--;
		b.length && e.push(b.join(c));
		return e;
	};
	U.c.Qv = function(b, c) {
		if (c) typeof c == K && (c = [c]);
		else return b;
		for (var d = -1, e = 0; e < c.length; e++)
			if ("" != c[e]) {
				var f = b.lastIndexOf(c[e]);
				f > d && (d = f);
			}
		return -1 == d ? b : b.slice(d + 1);
	};
	U.c.St = function(b, c) {
		var d = [],
			e = [];
		if (b == c) return 0;
		if (!b.length || !c.length) return Math.max(b.length, c.length);
		for (var f = 0; f < c.length + 1; f++) d[f] = f;
		for (f = 0; f < b.length; f++) {
			e[0] = f + 1;
			for (var g = 0; g < c.length; g++)
				e[g + 1] = Math.min(
					e[g] + 1,
					d[g + 1] + 1,
					d[g] + Number(b[f] != c[g])
				);
			for (g = 0; g < d.length; g++) d[g] = e[g];
		}
		return e[c.length];
	};
	U.h.userAgent.ca = {};
	U.h.userAgent.ca.Sm = function() {
		return U.h.userAgent.K.S("Presto");
	};
	U.h.userAgent.ca.Wm = function() {
		return U.h.userAgent.K.S("Trident") || U.h.userAgent.K.S("MSIE");
	};
	U.h.userAgent.ca.wb = function() {
		return U.h.userAgent.K.S("Edge");
	};
	U.h.userAgent.ca.Ai = function() {
		return U.h.userAgent.K.Ni("WebKit") && !U.h.userAgent.ca.wb();
	};
	U.h.userAgent.ca.Lm = function() {
		return (
			U.h.userAgent.K.S("Gecko") &&
			!U.h.userAgent.ca.Ai() &&
			!U.h.userAgent.ca.Wm() &&
			!U.h.userAgent.ca.wb()
		);
	};
	U.h.userAgent.ca.Hc = function() {
		var b = U.h.userAgent.K.ac();
		if (b) {
			b = U.h.userAgent.K.ih(b);
			var c = U.h.userAgent.ca.gm(b);
			if (c) return "Gecko" == c[0] ? U.h.userAgent.ca.tm(b) : c[1];
			b = b[0];
			var d;
			if (b && (d = b[2]) && (d = /Trident\/([^\s;]+)/.exec(d)))
				return d[1];
		}
		return "";
	};
	U.h.userAgent.ca.gm = function(b) {
		if (!U.h.userAgent.ca.wb()) return b[1];
		for (var c = 0; c < b.length; c++) {
			var d = b[c];
			if ("Edge" == d[0]) return d;
		}
	};
	U.h.userAgent.ca.Ta = function(b) {
		return 0 <= U.c.Eb(U.h.userAgent.ca.Hc(), b);
	};
	U.h.userAgent.ca.tm = function(b) {
		return (
			((b = U.g.find(b, function(c) {
				return "Firefox" == c[0];
			})) &&
				b[1]) ||
			""
		);
	};
	U.h.userAgent.platform = {};
	U.h.userAgent.platform.hi = function() {
		return U.h.userAgent.K.S("Android");
	};
	U.h.userAgent.platform.si = function() {
		return U.h.userAgent.K.S("iPod");
	};
	U.h.userAgent.platform.ri = function() {
		return (
			U.h.userAgent.K.S("iPhone") &&
			!U.h.userAgent.K.S("iPod") &&
			!U.h.userAgent.K.S("iPad")
		);
	};
	U.h.userAgent.platform.pi = function() {
		return U.h.userAgent.K.S("iPad");
	};
	U.h.userAgent.platform.oi = function() {
		return (
			U.h.userAgent.platform.ri() ||
			U.h.userAgent.platform.pi() ||
			U.h.userAgent.platform.si()
		);
	};
	U.h.userAgent.platform.vi = function() {
		return U.h.userAgent.K.S("Macintosh");
	};
	U.h.userAgent.platform.Pm = function() {
		return U.h.userAgent.K.S("Linux");
	};
	U.h.userAgent.platform.Di = function() {
		return U.h.userAgent.K.S("Windows");
	};
	U.h.userAgent.platform.ji = function() {
		return U.h.userAgent.K.S("CrOS");
	};
	U.h.userAgent.platform.nv = function() {
		return U.h.userAgent.K.S("CrKey");
	};
	U.h.userAgent.platform.ti = function() {
		return U.h.userAgent.K.Ni("KaiOS");
	};
	U.h.userAgent.platform.Hc = function() {
		var b = U.h.userAgent.K.ac(),
			c = "";
		U.h.userAgent.platform.Di()
			? ((c = /Windows (?:NT|Phone) ([0-9.]+)/),
			  (c = (b = c.exec(b)) ? b[1] : "0.0"))
			: U.h.userAgent.platform.oi()
			? ((c = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/),
			  (c = (b = c.exec(b)) && b[1].replace(/_/g, ".")))
			: U.h.userAgent.platform.vi()
			? ((c = /Mac OS X ([0-9_.]+)/),
			  (c = (b = c.exec(b)) ? b[1].replace(/_/g, ".") : "10"))
			: U.h.userAgent.platform.ti()
			? ((c = /(?:KaiOS)\/(\S+)/i), (c = (b = c.exec(b)) && b[1]))
			: U.h.userAgent.platform.hi()
			? ((c = /Android\s+([^\);]+)(\)|;)/), (c = (b = c.exec(b)) && b[1]))
			: U.h.userAgent.platform.ji() &&
			  ((c = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/),
			  (c = (b = c.exec(b)) && b[1]));
		return c || "";
	};
	U.h.userAgent.platform.Ta = function(b) {
		return 0 <= U.c.Eb(U.h.userAgent.platform.Hc(), b);
	};
	U.hb = {};
	U.hb.object = function(b, c) {
		return c;
	};
	U.hb.xf = function(b) {
		U.hb.xf[" "](b);
		return b;
	};
	U.hb.xf[" "] = U.Mb;
	U.hb.et = function(b, c) {
		try {
			return U.hb.xf(b[c]), !0;
		} catch (d) {}
		return !1;
	};
	U.hb.cache = function(b, c, d, e) {
		e = e ? e(c) : c;
		return Object.prototype.hasOwnProperty.call(b, e)
			? b[e]
			: (b[e] = d(c));
	};
	U.userAgent = {};
	U.userAgent.Lf = !1;
	U.userAgent.Jf = !1;
	U.userAgent.Kf = !1;
	U.userAgent.Qf = !1;
	U.userAgent.de = !1;
	U.userAgent.Of = !1;
	U.userAgent.Dj = !1;
	U.userAgent.oc =
		U.userAgent.Lf ||
		U.userAgent.Jf ||
		U.userAgent.Kf ||
		U.userAgent.de ||
		U.userAgent.Qf ||
		U.userAgent.Of;
	U.userAgent.rm = function() {
		return U.h.userAgent.K.ac();
	};
	U.userAgent.Te = function() {
		return U.global.navigator || null;
	};
	U.userAgent.Iu = function() {
		return U.userAgent.Te();
	};
	U.userAgent.lg = U.userAgent.oc ? U.userAgent.Of : U.h.userAgent.B.cf();
	U.userAgent.ma = U.userAgent.oc ? U.userAgent.Lf : U.h.userAgent.B.Ad();
	U.userAgent.Xf = U.userAgent.oc ? U.userAgent.Jf : U.h.userAgent.ca.wb();
	U.userAgent.Xp = U.userAgent.Xf || U.userAgent.ma;
	U.userAgent.fe = U.userAgent.oc ? U.userAgent.Kf : U.h.userAgent.ca.Lm();
	U.userAgent.sc = U.userAgent.oc
		? U.userAgent.Qf || U.userAgent.de
		: U.h.userAgent.ca.Ai();
	U.userAgent.Rm = function() {
		return U.userAgent.sc && U.h.userAgent.K.S("Mobile");
	};
	U.userAgent.gr = U.userAgent.de || U.userAgent.Rm();
	U.userAgent.Hr = U.userAgent.sc;
	U.userAgent.Il = function() {
		var b = U.userAgent.Te();
		return (b && b.platform) || "";
	};
	U.userAgent.xr = U.userAgent.Il();
	U.userAgent.Nf = !1;
	U.userAgent.Rf = !1;
	U.userAgent.Mf = !1;
	U.userAgent.Sf = !1;
	U.userAgent.If = !1;
	U.userAgent.be = !1;
	U.userAgent.ae = !1;
	U.userAgent.ce = !1;
	U.userAgent.Fj = !1;
	U.userAgent.Xa =
		U.userAgent.Nf ||
		U.userAgent.Rf ||
		U.userAgent.Mf ||
		U.userAgent.Sf ||
		U.userAgent.If ||
		U.userAgent.be ||
		U.userAgent.ae ||
		U.userAgent.ce;
	U.userAgent.Xq = U.userAgent.Xa
		? U.userAgent.Nf
		: U.h.userAgent.platform.vi();
	U.userAgent.xs = U.userAgent.Xa
		? U.userAgent.Rf
		: U.h.userAgent.platform.Di();
	U.userAgent.Om = function() {
		return U.h.userAgent.platform.Pm() || U.h.userAgent.platform.ji();
	};
	U.userAgent.Vq = U.userAgent.Xa ? U.userAgent.Mf : U.userAgent.Om();
	U.userAgent.$m = function() {
		var b = U.userAgent.Te();
		return !!b && U.c.contains(b.appVersion || "", "X11");
	};
	U.userAgent.ys = U.userAgent.Xa ? U.userAgent.Sf : U.userAgent.$m();
	U.userAgent.cp = U.userAgent.Xa
		? U.userAgent.If
		: U.h.userAgent.platform.hi();
	U.userAgent.Jq = U.userAgent.Xa
		? U.userAgent.be
		: U.h.userAgent.platform.ri();
	U.userAgent.Iq = U.userAgent.Xa
		? U.userAgent.ae
		: U.h.userAgent.platform.pi();
	U.userAgent.Kq = U.userAgent.Xa
		? U.userAgent.ce
		: U.h.userAgent.platform.si();
	U.userAgent.Hq = U.userAgent.Xa
		? U.userAgent.be || U.userAgent.ae || U.userAgent.ce
		: U.h.userAgent.platform.oi();
	U.userAgent.Nq = U.userAgent.Xa
		? U.userAgent.Fj
		: U.h.userAgent.platform.ti();
	U.userAgent.Jl = function() {
		var b = "",
			c = U.userAgent.um();
		c && (b = c ? c[1] : "");
		return U.userAgent.ma &&
			((c = U.userAgent.xh()), null != c && c > parseFloat(b))
			? String(c)
			: b;
	};
	U.userAgent.um = function() {
		var b = U.userAgent.rm();
		if (U.userAgent.fe) return /rv:([^\);]+)(\)|;)/.exec(b);
		if (U.userAgent.Xf) return /Edge\/([\d\.]+)/.exec(b);
		if (U.userAgent.ma) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(b);
		if (U.userAgent.sc) return /WebKit\/(\S+)/.exec(b);
		if (U.userAgent.lg) return /(?:Version)[ \/]?(\S+)/.exec(b);
	};
	U.userAgent.xh = function() {
		var b = U.global.document;
		return b ? b.documentMode : void 0;
	};
	U.userAgent.VERSION = U.userAgent.Jl();
	U.userAgent.compare = function(b, c) {
		return U.c.Eb(b, c);
	};
	U.userAgent.Ym = {};
	U.userAgent.Ta = function(b) {
		return (
			U.userAgent.Dj ||
			U.hb.cache(U.userAgent.Ym, b, function() {
				return 0 <= U.c.Eb(U.userAgent.VERSION, b);
			})
		);
	};
	U.userAgent.Ov = U.userAgent.Ta;
	U.userAgent.Kc = function(b) {
		return Number(U.userAgent.ak) >= b;
	};
	U.userAgent.qv = U.userAgent.Kc;
	var Ca;
	Ca = U.global.document && U.userAgent.ma ? U.userAgent.xh() : void 0;
	U.userAgent.ak = Ca;
	U.a.fa = {};
	U.a.fa.Hj = !1;
	U.a.fa.Ij = !1;
	U.a.fa.Hl = function() {
		try {
			return !!new self.OffscreenCanvas(0, 0).getContext("2d");
		} catch (b) {}
		return !1;
	};
	U.a.fa.pr = !U.a.fa.Hj && (U.a.fa.Ij || U.a.fa.Hl());
	U.a.fa.Nj = !U.userAgent.ma || U.userAgent.Kc(9);
	U.a.fa.Oj =
		(!U.userAgent.fe && !U.userAgent.ma) ||
		(U.userAgent.ma && U.userAgent.Kc(9)) ||
		(U.userAgent.fe && U.userAgent.Ta("1.9.1"));
	U.a.fa.Uf = U.userAgent.ma && !U.userAgent.Ta("9");
	U.a.fa.Pj = U.userAgent.ma || U.userAgent.lg || U.userAgent.sc;
	U.a.fa.kk = U.userAgent.ma;
	U.a.fa.Rq = U.userAgent.ma && !U.userAgent.Kc(9);
	U.C = {};
	U.C.pw = function(b) {
		return Math.floor(Math.random() * b);
	};
	U.C.Kx = function(b, c) {
		return b + Math.random() * (c - b);
	};
	U.C.it = function(b, c, d) {
		return Math.min(Math.max(b, c), d);
	};
	U.C.Pi = function(b, c) {
		b %= c;
		return 0 > b * c ? b + c : b;
	};
	U.C.Rv = function(b, c, d) {
		return b + d * (c - b);
	};
	U.C.aw = function(b, c, d) {
		return Math.abs(b - c) <= (d || 1e-6);
	};
	U.C.Af = function(b) {
		return U.C.Pi(b, 360);
	};
	U.C.rx = function(b) {
		return U.C.Pi(b, 2 * Math.PI);
	};
	U.C.pj = function(b) {
		return (b * Math.PI) / 180;
	};
	U.C.Ao = function(b) {
		return (180 * b) / Math.PI;
	};
	U.C.Es = function(b, c) {
		return c * Math.cos(U.C.pj(b));
	};
	U.C.Fs = function(b, c) {
		return c * Math.sin(U.C.pj(b));
	};
	U.C.angle = function(b, c, d, e) {
		return U.C.Af(U.C.Ao(Math.atan2(e - c, d - b)));
	};
	U.C.Ds = function(b, c) {
		b = U.C.Af(c) - U.C.Af(b);
		180 < b ? (b -= 360) : -180 >= b && (b = 360 + b);
		return b;
	};
	U.C.sign = function(b) {
		return 0 < b ? 1 : 0 > b ? -1 : b;
	};
	U.C.Uv = function(b, c, d, e) {
		d =
			d ||
			function(v, J) {
				return v == J;
			};
		e =
			e ||
			function(v) {
				return b[v];
			};
		for (var f = b.length, g = c.length, k = [], h = 0; h < f + 1; h++)
			(k[h] = []), (k[h][0] = 0);
		for (var m = 0; m < g + 1; m++) k[0][m] = 0;
		for (h = 1; h <= f; h++)
			for (m = 1; m <= g; m++)
				d(b[h - 1], c[m - 1])
					? (k[h][m] = k[h - 1][m - 1] + 1)
					: (k[h][m] = Math.max(k[h - 1][m], k[h][m - 1]));
		var n = [];
		h = f;
		for (m = g; 0 < h && 0 < m; )
			d(b[h - 1], c[m - 1])
				? (n.unshift(e(h - 1, m - 1)), h--, m--)
				: k[h - 1][m] > k[h][m - 1]
				? h--
				: m--;
		return n;
	};
	U.C.Cf = function(b) {
		return U.g.reduce(
			arguments,
			function(c, d) {
				return c + d;
			},
			0
		);
	};
	U.C.kl = function(b) {
		return U.C.Cf.apply(null, arguments) / arguments.length;
	};
	U.C.co = function(b) {
		var c = arguments.length;
		if (2 > c) return 0;
		var d = U.C.kl.apply(null, arguments);
		return (
			U.C.Cf.apply(
				null,
				U.g.map(arguments, function(e) {
					return Math.pow(e - d, 2);
				})
			) /
			(c - 1)
		);
	};
	U.C.sx = function(b) {
		return Math.sqrt(U.C.co.apply(null, arguments));
	};
	U.C.wv = function(b) {
		return isFinite(b) && 0 == b % 1;
	};
	U.C.tv = function(b) {
		return isFinite(b);
	};
	U.C.Bv = function(b) {
		return 0 == b && 0 > 1 / b;
	};
	U.C.Tv = function(b) {
		if (0 < b) {
			var c = Math.round(Math.log(b) * Math.LOG10E);
			return c - (parseFloat("1e" + c) > b ? 1 : 0);
		}
		return 0 == b ? -Infinity : NaN;
	};
	U.C.Ew = function(b, c) {
		return Math.floor(b + (c || 2e-15));
	};
	U.C.Dw = function(b, c) {
		return Math.ceil(b - (c || 2e-15));
	};
	U.C.ga = function(b, c) {
		this.x = void 0 !== b ? b : 0;
		this.y = void 0 !== c ? c : 0;
	};
	U.C.ga.prototype.clone = function() {
		return new U.C.ga(this.x, this.y);
	};
	U.la &&
		(U.C.ga.prototype.toString = function() {
			return "(" + this.x + ", " + this.y + ")";
		});
	U.C.ga.prototype.Ib = function(b) {
		return b instanceof U.C.ga && U.C.ga.Ib(this, b);
	};
	U.C.ga.Ib = function(b, c) {
		return b == c ? !0 : b && c ? b.x == c.x && b.y == c.y : !1;
	};
	U.C.ga.Qt = function(b, c) {
		var d = b.x - c.x;
		b = b.y - c.y;
		return Math.sqrt(d * d + b * b);
	};
	U.C.ga.Vv = function(b) {
		return Math.sqrt(b.x * b.x + b.y * b.y);
	};
	U.C.ga.azimuth = function(b) {
		return U.C.angle(0, 0, b.x, b.y);
	};
	U.C.ga.px = function(b, c) {
		var d = b.x - c.x;
		b = b.y - c.y;
		return d * d + b * b;
	};
	U.C.ga.Pt = function(b, c) {
		return new U.C.ga(b.x - c.x, b.y - c.y);
	};
	U.C.ga.Cf = function(b, c) {
		return new U.C.ga(b.x + c.x, b.y + c.y);
	};
	S = U.C.ga.prototype;
	S.ceil = function() {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		return this;
	};
	S.floor = function() {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this;
	};
	S.round = function() {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this;
	};
	S.translate = function(b, c) {
		b instanceof U.C.ga
			? ((this.x += b.x), (this.y += b.y))
			: ((this.x += Number(b)), typeof c === F && (this.y += c));
		return this;
	};
	S.scale = function(b, c) {
		this.x *= b;
		this.y *= typeof c === F ? c : b;
		return this;
	};
	U.C.Vb = function(b, c) {
		this.width = b;
		this.height = c;
	};
	U.C.Vb.Ib = function(b, c) {
		return b == c
			? !0
			: b && c
			? b.width == c.width && b.height == c.height
			: !1;
	};
	U.C.Vb.prototype.clone = function() {
		return new U.C.Vb(this.width, this.height);
	};
	U.la &&
		(U.C.Vb.prototype.toString = function() {
			return "(" + this.width + " x " + this.height + ")";
		});
	S = U.C.Vb.prototype;
	S.aspectRatio = function() {
		return this.width / this.height;
	};
	S.Aa = function() {
		return !(this.width * this.height);
	};
	S.ceil = function() {
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this;
	};
	S.floor = function() {
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this;
	};
	S.round = function() {
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this;
	};
	S.scale = function(b, c) {
		this.width *= b;
		this.height *= typeof c === F ? c : b;
		return this;
	};
	U.a.Jj = !1;
	U.a.Pf = !1;
	U.a.Tj = U.a.Jj || U.a.Pf;
	U.a.Ne = function(b) {
		return b ? new U.a.Rb(U.a.ub(b)) : U.a.Fl || (U.a.Fl = new U.a.Rb());
	};
	U.a.bm = function() {
		return document;
	};
	U.a.Oe = function(b) {
		return U.a.Re(document, b);
	};
	U.a.Re = function(b, c) {
		return typeof c === K ? b.getElementById(c) : c;
	};
	U.a.mm = function(b) {
		return U.a.Rh(document, b);
	};
	U.a.Rh = function(b, c) {
		return U.a.Re(b, c);
	};
	U.a.yj = U.a.Oe;
	U.a.getElementsByTagName = function(b, c) {
		return (c || document).getElementsByTagName(String(b));
	};
	U.a.Se = function(b, c, d) {
		return U.a.pd(document, b, c, d);
	};
	U.a.fm = function(b, c, d) {
		return U.a.Qe(document, b, c, d);
	};
	U.a.Ah = function(b, c) {
		var d = c || document;
		return U.a.we(d)
			? d.querySelectorAll("." + b)
			: U.a.pd(document, "*", b, c);
	};
	U.a.Pe = function(b, c) {
		var d = c || document;
		return (
			(d.getElementsByClassName
				? d.getElementsByClassName(b)[0]
				: U.a.Qe(document, "*", b, c)) || null
		);
	};
	U.a.Qh = function(b, c) {
		return U.a.Pe(b, c);
	};
	U.a.we = function(b) {
		return !(!b.querySelectorAll || !b.querySelector);
	};
	U.a.pd = function(b, c, d, e) {
		b = e || b;
		c = c && "*" != c ? String(c).toUpperCase() : "";
		if (U.a.we(b) && (c || d))
			return b.querySelectorAll(c + (d ? "." + d : ""));
		if (d && b.getElementsByClassName) {
			b = b.getElementsByClassName(d);
			if (c) {
				e = {};
				for (var f = 0, g = 0, k; (k = b[g]); g++)
					c == k.nodeName && (e[f++] = k);
				e.length = f;
				return e;
			}
			return b;
		}
		b = b.getElementsByTagName(c || "*");
		if (d) {
			e = {};
			for (g = f = 0; (k = b[g]); g++)
				(c = k.className),
					typeof c.split == x &&
						U.g.contains(c.split(/\s+/), d) &&
						(e[f++] = k);
			e.length = f;
			return e;
		}
		return b;
	};
	U.a.Qe = function(b, c, d, e) {
		var f = e || b,
			g = c && "*" != c ? String(c).toUpperCase() : "";
		return U.a.we(f) && (g || d)
			? f.querySelector(g + (d ? "." + d : ""))
			: U.a.pd(b, c, d, e)[0] || null;
	};
	U.a.zj = U.a.Se;
	U.a.Ud = function(b, c) {
		U.object.forEach(c, function(d, e) {
			d && typeof d == G && d.Ra && (d = d.Ea());
			"style" == e
				? (b.style.cssText = d)
				: "class" == e
				? (b.className = d)
				: "for" == e
				? (b.htmlFor = d)
				: U.a.Wf.hasOwnProperty(e)
				? b.setAttribute(U.a.Wf[e], d)
				: U.c.startsWith(e, "aria-") || U.c.startsWith(e, "data-")
				? b.setAttribute(e, d)
				: (b[e] = d);
		});
	};
	U.a.Wf = {
		cellpadding: "cellPadding",
		cellspacing: "cellSpacing",
		colspan: "colSpan",
		frameborder: "frameBorder",
		height: "height",
		maxlength: "maxLength",
		nonce: "nonce",
		role: "role",
		rowspan: "rowSpan",
		type: "type",
		usemap: "useMap",
		valign: "vAlign",
		width: "width"
	};
	U.a.Xh = function(b) {
		return U.a.Yh(b || window);
	};
	U.a.Yh = function(b) {
		b = b.document;
		b = U.a.Jc(b) ? b.documentElement : b.body;
		return new U.C.Vb(b.clientWidth, b.clientHeight);
	};
	U.a.cm = function() {
		return U.a.Le(window);
	};
	U.a.Bu = function(b) {
		return U.a.Le(b);
	};
	U.a.Le = function(b) {
		var c = b.document,
			d = 0;
		if (c) {
			d = c.body;
			var e = c.documentElement;
			if (!e || !d) return 0;
			b = U.a.Yh(b).height;
			if (U.a.Jc(c) && e.scrollHeight)
				d = e.scrollHeight != b ? e.scrollHeight : e.offsetHeight;
			else {
				c = e.scrollHeight;
				var f = e.offsetHeight;
				e.clientHeight != f &&
					((c = d.scrollHeight), (f = d.offsetHeight));
				d = c > b ? (c > f ? c : f) : c < f ? c : f;
			}
		}
		return d;
	};
	U.a.Ku = function(b) {
		return U.a.Ne((b || U.global || window).document).yh();
	};
	U.a.yh = function() {
		return U.a.zh(document);
	};
	U.a.zh = function(b) {
		var c = U.a.Me(b);
		b = U.a.cc(b);
		return U.userAgent.ma &&
			U.userAgent.Ta("10") &&
			b.pageYOffset != c.scrollTop
			? new U.C.ga(c.scrollLeft, c.scrollTop)
			: new U.C.ga(
					b.pageXOffset || c.scrollLeft,
					b.pageYOffset || c.scrollTop
			  );
	};
	U.a.dm = function() {
		return U.a.Me(document);
	};
	U.a.Me = function(b) {
		return b.scrollingElement
			? b.scrollingElement
			: !U.userAgent.sc && U.a.Jc(b)
			? b.documentElement
			: b.body || b.documentElement;
	};
	U.a.bc = function(b) {
		return b ? U.a.cc(b) : window;
	};
	U.a.cc = function(b) {
		return b.parentWindow || b.defaultView;
	};
	U.a.ze = function(b, c, d) {
		return U.a.Wg(document, arguments);
	};
	U.a.Wg = function(b, c) {
		var d = String(c[0]),
			e = c[1];
		if (!U.a.fa.Nj && e && (e.name || e.type)) {
			d = ["<", d];
			e.name && d.push(' name="', U.c.Fa(e.name), '"');
			if (e.type) {
				d.push(' type="', U.c.Fa(e.type), '"');
				var f = {};
				U.object.extend(f, e);
				delete f.type;
				e = f;
			}
			d.push(">");
			d = d.join("");
		}
		d = U.a.eb(b, d);
		e &&
			(typeof e === K
				? (d.className = e)
				: U.isArray(e)
				? (d.className = e.join(" "))
				: U.a.Ud(d, e));
		2 < c.length && U.a.Bg(b, d, c, 2);
		return d;
	};
	U.a.Bg = function(b, c, d, e) {
		function f(k) {
			k && c.appendChild(typeof k === K ? b.createTextNode(k) : k);
		}
		for (; e < d.length; e++) {
			var g = d[e];
			U.ka(g) && !U.a.af(g)
				? U.g.forEach(U.a.bf(g) ? U.g.Za(g) : g, f)
				: f(g);
		}
	};
	U.a.Aj = U.a.ze;
	U.a.createElement = function(b) {
		return U.a.eb(document, b);
	};
	U.a.eb = function(b, c) {
		c = String(c);
		"application/xhtml+xml" === b.contentType && (c = c.toLowerCase());
		return b.createElement(c);
	};
	U.a.createTextNode = function(b) {
		return document.createTextNode(String(b));
	};
	U.a.Cl = function(b, c, d) {
		return U.a.Yg(document, b, c, !!d);
	};
	U.a.Yg = function(b, c, d, e) {
		for (
			var f = U.a.eb(b, "TABLE"),
				g = f.appendChild(U.a.eb(b, "TBODY")),
				k = 0;
			k < c;
			k++
		) {
			for (var h = U.a.eb(b, "TR"), m = 0; m < d; m++) {
				var n = U.a.eb(b, "TD");
				e && U.a.vf(n, U.c.vg.ig);
				h.appendChild(n);
			}
			g.appendChild(h);
		}
		return f;
	};
	U.a.tt = function(b) {
		var c = U.g.map(arguments, U.c.F.D);
		c = U.b.ib.Wi(
			U.c.F.from(
				"Constant HTML string, that gets turned into a Node later, so it will be automatically balanced."
			),
			c.join("")
		);
		return U.a.Xi(c);
	};
	U.a.Xi = function(b) {
		return U.a.Yi(document, b);
	};
	U.a.Yi = function(b, c) {
		var d = U.a.eb(b, "DIV");
		U.a.fa.kk
			? (U.a.N.uf(d, U.b.s.concat(U.b.s.Tf, c)),
			  d.removeChild(d.firstChild))
			: U.a.N.uf(d, c);
		return U.a.xl(b, d);
	};
	U.a.xl = function(b, c) {
		if (1 == c.childNodes.length) return c.removeChild(c.firstChild);
		for (b = b.createDocumentFragment(); c.firstChild; )
			b.appendChild(c.firstChild);
		return b;
	};
	U.a.Hm = function() {
		return U.a.Jc(document);
	};
	U.a.Jc = function(b) {
		return U.a.Tj ? U.a.Pf : "CSS1Compat" == b.compatMode;
	};
	U.a.canHaveChildren = function(b) {
		if (b.nodeType != U.a.ra.kb) return !1;
		switch (b.tagName) {
			case "APPLET":
			case "AREA":
			case "BASE":
			case "BR":
			case "COL":
			case "COMMAND":
			case "EMBED":
			case "FRAME":
			case "HR":
			case "IMG":
			case "INPUT":
			case "IFRAME":
			case "ISINDEX":
			case "KEYGEN":
			case "LINK":
			case "NOFRAMES":
			case "NOSCRIPT":
			case "META":
			case "OBJECT":
			case "PARAM":
			case l:
			case "SOURCE":
			case "STYLE":
			case "TRACK":
			case "WBR":
				return !1;
		}
		return !0;
	};
	U.a.appendChild = function(b, c) {
		b.appendChild(c);
	};
	U.a.append = function(b, c) {
		U.a.Bg(U.a.ub(b), b, arguments, 1);
	};
	U.a.qf = function(b) {
		for (var c; (c = b.firstChild); ) b.removeChild(c);
	};
	U.a.fi = function(b, c) {
		c.parentNode && c.parentNode.insertBefore(b, c);
	};
	U.a.ei = function(b, c) {
		c.parentNode && c.parentNode.insertBefore(b, c.nextSibling);
	};
	U.a.di = function(b, c, d) {
		b.insertBefore(c, b.childNodes[d] || null);
	};
	U.a.removeNode = function(b) {
		return b && b.parentNode ? b.parentNode.removeChild(b) : null;
	};
	U.a.Vi = function(b, c) {
		var d = c.parentNode;
		d && d.replaceChild(b, c);
	};
	U.a.nh = function(b) {
		var c,
			d = b.parentNode;
		if (d && d.nodeType != U.a.ra.$j) {
			if (b.removeNode) return b.removeNode(!1);
			for (; (c = b.firstChild); ) d.insertBefore(c, b);
			return U.a.removeNode(b);
		}
	};
	U.a.vh = function(b) {
		return U.a.fa.Oj && void 0 != b.children
			? b.children
			: U.g.filter(b.childNodes, function(c) {
					return c.nodeType == U.a.ra.kb;
			  });
	};
	U.a.Bh = function(b) {
		return void 0 !== b.firstElementChild
			? b.firstElementChild
			: U.a.rd(b.firstChild, !0);
	};
	U.a.Eh = function(b) {
		return void 0 !== b.lastElementChild
			? b.lastElementChild
			: U.a.rd(b.lastChild, !1);
	};
	U.a.Gh = function(b) {
		return void 0 !== b.nextElementSibling
			? b.nextElementSibling
			: U.a.rd(b.nextSibling, !0);
	};
	U.a.Nh = function(b) {
		return void 0 !== b.previousElementSibling
			? b.previousElementSibling
			: U.a.rd(b.previousSibling, !1);
	};
	U.a.rd = function(b, c) {
		for (; b && b.nodeType != U.a.ra.kb; )
			b = c ? b.nextSibling : b.previousSibling;
		return b;
	};
	U.a.Hh = function(b) {
		if (!b) return null;
		if (b.firstChild) return b.firstChild;
		for (; b && !b.nextSibling; ) b = b.parentNode;
		return b ? b.nextSibling : null;
	};
	U.a.Oh = function(b) {
		if (!b) return null;
		if (!b.previousSibling) return b.parentNode;
		for (b = b.previousSibling; b && b.lastChild; ) b = b.lastChild;
		return b;
	};
	U.a.af = function(b) {
		return U.Ba(b) && 0 < b.nodeType;
	};
	U.a.Ze = function(b) {
		return U.Ba(b) && b.nodeType == U.a.ra.kb;
	};
	U.a.Bi = function(b) {
		return U.Ba(b) && b.window == b;
	};
	U.a.Mh = function(b) {
		var c;
		if (
			U.a.fa.Pj &&
			!(
				U.userAgent.ma &&
				U.userAgent.Ta("9") &&
				!U.userAgent.Ta("10") &&
				U.global.SVGElement &&
				b instanceof U.global.SVGElement
			) &&
			(c = b.parentElement)
		)
			return c;
		c = b.parentNode;
		return U.a.Ze(c) ? c : null;
	};
	U.a.contains = function(b, c) {
		if (!b || !c) return !1;
		if (b.contains && c.nodeType == U.a.ra.kb)
			return b == c || b.contains(c);
		if ("undefined" != typeof b.compareDocumentPosition)
			return b == c || !!(b.compareDocumentPosition(c) & 16);
		for (; c && b != c; ) c = c.parentNode;
		return c == b;
	};
	U.a.Qg = function(b, c) {
		if (b == c) return 0;
		if (b.compareDocumentPosition)
			return b.compareDocumentPosition(c) & 2 ? 1 : -1;
		if (U.userAgent.ma && !U.userAgent.Kc(9)) {
			if (b.nodeType == U.a.ra.Uc) return -1;
			if (c.nodeType == U.a.ra.Uc) return 1;
		}
		if (
			"sourceIndex" in b ||
			(b.parentNode && "sourceIndex" in b.parentNode)
		) {
			var d = b.nodeType == U.a.ra.kb,
				e = c.nodeType == U.a.ra.kb;
			if (d && e) return b.sourceIndex - c.sourceIndex;
			var f = b.parentNode,
				g = c.parentNode;
			return f == g
				? U.a.Sg(b, c)
				: !d && U.a.contains(f, c)
				? -1 * U.a.Rg(b, c)
				: !e && U.a.contains(g, b)
				? U.a.Rg(c, b)
				: (d ? b.sourceIndex : f.sourceIndex) -
				  (e ? c.sourceIndex : g.sourceIndex);
		}
		e = U.a.ub(b);
		d = e.createRange();
		d.selectNode(b);
		d.collapse(!0);
		b = e.createRange();
		b.selectNode(c);
		b.collapse(!0);
		return d.compareBoundaryPoints(U.global.Range.START_TO_END, b);
	};
	U.a.Rg = function(b, c) {
		var d = b.parentNode;
		if (d == c) return -1;
		for (; c.parentNode != d; ) c = c.parentNode;
		return U.a.Sg(c, b);
	};
	U.a.Sg = function(b, c) {
		for (; (c = c.previousSibling); ) if (c == b) return -1;
		return 1;
	};
	U.a.jh = function(b) {
		var c,
			d = arguments.length;
		if (!d) return null;
		if (1 == d) return arguments[0];
		var e = [],
			f = Infinity;
		for (c = 0; c < d; c++) {
			for (var g = [], k = arguments[c]; k; )
				g.unshift(k), (k = k.parentNode);
			e.push(g);
			f = Math.min(f, g.length);
		}
		g = null;
		for (c = 0; c < f; c++) {
			k = e[0][c];
			for (var h = 1; h < d; h++) if (k != e[h][c]) return g;
			g = k;
		}
		return g;
	};
	U.a.vv = function(b) {
		return 16 == (b.ownerDocument.compareDocumentPosition(b) & 16);
	};
	U.a.ub = function(b) {
		return b.nodeType == U.a.ra.Uc ? b : b.ownerDocument || b.document;
	};
	U.a.Ch = function(b) {
		return b.contentDocument || b.contentWindow.document;
	};
	U.a.Dh = function(b) {
		try {
			return (
				b.contentWindow ||
				(b.contentDocument ? U.a.bc(b.contentDocument) : null)
			);
		} catch (c) {}
		return null;
	};
	U.a.vf = function(b, c) {
		if ("textContent" in b) b.textContent = c;
		else if (b.nodeType == U.a.ra.$c) b.data = String(c);
		else if (b.firstChild && b.firstChild.nodeType == U.a.ra.$c) {
			for (; b.lastChild != b.firstChild; ) b.removeChild(b.lastChild);
			b.firstChild.data = String(c);
		} else U.a.qf(b), b.appendChild(U.a.ub(b).createTextNode(String(c)));
	};
	U.a.Lh = function(b) {
		if ("outerHTML" in b) return b.outerHTML;
		var c = U.a.eb(U.a.ub(b), "DIV");
		c.appendChild(b.cloneNode(!0));
		return c.innerHTML;
	};
	U.a.kh = function(b, c) {
		var d = [];
		return U.a.Fe(b, c, d, !0) ? d[0] : void 0;
	};
	U.a.lh = function(b, c) {
		var d = [];
		U.a.Fe(b, c, d, !1);
		return d;
	};
	U.a.Fe = function(b, c, d, e) {
		if (null != b)
			for (b = b.firstChild; b; ) {
				if ((c(b) && (d.push(b), e)) || U.a.Fe(b, c, d, e)) return !0;
				b = b.nextSibling;
			}
		return !1;
	};
	U.a.bu = function(b, c) {
		for (b = U.a.wh(b); 0 < b.length; ) {
			var d = b.pop();
			if (c(d)) return d;
			for (d = d.lastElementChild; d; d = d.previousElementSibling)
				b.push(d);
		}
		return null;
	};
	U.a.cu = function(b, c) {
		var d = [];
		for (b = U.a.wh(b); 0 < b.length; ) {
			var e = b.pop();
			c(e) && d.push(e);
			for (e = e.lastElementChild; e; e = e.previousElementSibling)
				b.push(e);
		}
		return d;
	};
	U.a.wh = function(b) {
		if (b.nodeType == U.a.ra.Uc) return [b.documentElement];
		var c = [];
		for (b = b.lastElementChild; b; b = b.previousElementSibling) c.push(b);
		return c;
	};
	U.a.sg = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 };
	U.a.Yc = { IMG: " ", BR: "\n" };
	U.a.$e = function(b) {
		return U.a.ai(b) && U.a.zi(b);
	};
	U.a.bj = function(b, c) {
		c
			? (b.tabIndex = 0)
			: ((b.tabIndex = -1), b.removeAttribute("tabIndex"));
	};
	U.a.ki = function(b) {
		var c;
		return (c = U.a.wn(b)
			? !b.disabled && (!U.a.ai(b) || U.a.zi(b))
			: U.a.$e(b)) && U.userAgent.ma
			? U.a.Am(b)
			: c;
	};
	U.a.ai = function(b) {
		return U.userAgent.ma && !U.userAgent.Ta("9")
			? ((b = b.getAttributeNode("tabindex")), null != b && b.specified)
			: b.hasAttribute("tabindex");
	};
	U.a.zi = function(b) {
		b = b.tabIndex;
		return typeof b === F && 0 <= b && 32768 > b;
	};
	U.a.wn = function(b) {
		return (
			("A" == b.tagName && b.hasAttribute("href")) ||
			"INPUT" == b.tagName ||
			"TEXTAREA" == b.tagName ||
			"SELECT" == b.tagName ||
			"BUTTON" == b.tagName
		);
	};
	U.a.Am = function(b) {
		b =
			!U.Sa(b.getBoundingClientRect) ||
			(U.userAgent.ma && null == b.parentElement)
				? { height: b.offsetHeight, width: b.offsetWidth }
				: b.getBoundingClientRect();
		return null != b && 0 < b.height && 0 < b.width;
	};
	U.a.td = function(b) {
		if (U.a.fa.Uf && null !== b && "innerText" in b)
			b = U.c.vl(b.innerText);
		else {
			var c = [];
			U.a.Ve(b, c, !0);
			b = c.join("");
		}
		b = b.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
		b = b.replace(/\u200B/g, "");
		U.a.fa.Uf || (b = b.replace(/ +/g, " "));
		" " != b && (b = b.replace(/^\s*/, ""));
		return b;
	};
	U.a.Pu = function(b) {
		var c = [];
		U.a.Ve(b, c, !1);
		return c.join("");
	};
	U.a.Ve = function(b, c, d) {
		if (!(b.nodeName in U.a.sg))
			if (b.nodeType == U.a.ra.$c)
				d
					? c.push(String(b.nodeValue).replace(/(\r\n|\r|\n)/g, ""))
					: c.push(b.nodeValue);
			else if (b.nodeName in U.a.Yc) c.push(U.a.Yc[b.nodeName]);
			else
				for (b = b.firstChild; b; )
					U.a.Ve(b, c, d), (b = b.nextSibling);
	};
	U.a.Jh = function(b) {
		return U.a.td(b).length;
	};
	U.a.Kh = function(b, c) {
		c = c || U.a.ub(b).body;
		for (var d = []; b && b != c; ) {
			for (var e = b; (e = e.previousSibling); ) d.unshift(U.a.td(e));
			b = b.parentNode;
		}
		return U.c.trimLeft(d.join("")).replace(/ +/g, " ").length;
	};
	U.a.Ih = function(b, c, d) {
		b = [b];
		for (var e = 0, f = null; 0 < b.length && e < c; )
			if (((f = b.pop()), !(f.nodeName in U.a.sg)))
				if (f.nodeType == U.a.ra.$c) {
					var g = f.nodeValue
						.replace(/(\r\n|\r|\n)/g, "")
						.replace(/ +/g, " ");
					e += g.length;
				} else if (f.nodeName in U.a.Yc) e += U.a.Yc[f.nodeName].length;
				else
					for (g = f.childNodes.length - 1; 0 <= g; g--)
						b.push(f.childNodes[g]);
		U.Ba(d) &&
			((d.rw = f ? f.nodeValue.length + c - e - 1 : 0), (d.node = f));
		return f;
	};
	U.a.bf = function(b) {
		if (b && typeof b.length == F) {
			if (U.Ba(b)) return typeof b.item == x || typeof b.item == K;
			if (U.Sa(b)) return typeof b.item == x;
		}
		return !1;
	};
	U.a.Je = function(b, c, d, e) {
		if (!c && !d) return null;
		var f = c ? String(c).toUpperCase() : null;
		return U.a.Ie(
			b,
			function(g) {
				return (
					(!f || g.nodeName == f) &&
					(!d ||
						(typeof g.className === K &&
							U.g.contains(g.className.split(/\s+/), d)))
				);
			},
			!0,
			e
		);
	};
	U.a.rh = function(b, c, d) {
		return U.a.Je(b, null, c, d);
	};
	U.a.Ie = function(b, c, d, e) {
		b && !d && (b = b.parentNode);
		for (d = 0; b && (null == e || d <= e); ) {
			if (c(b)) return b;
			b = b.parentNode;
			d++;
		}
		return null;
	};
	U.a.qh = function(b) {
		try {
			var c = b && b.activeElement;
			return c && c.nodeName ? c : null;
		} catch (d) {
			return null;
		}
	};
	U.a.Ou = function() {
		var b = U.a.bc();
		return void 0 !== b.devicePixelRatio
			? b.devicePixelRatio
			: b.matchMedia
			? U.a.Ed(3) || U.a.Ed(2) || U.a.Ed(1.5) || U.a.Ed(1) || 0.75
			: 1;
	};
	U.a.Ed = function(b) {
		return U.a
			.bc()
			.matchMedia(
				"(min-resolution: " +
					b +
					"dppx),(min--moz-device-pixel-ratio: " +
					b +
					"),(min-resolution: " +
					96 * b +
					"dpi)"
			).matches
			? b
			: 0;
	};
	U.a.uh = function(b) {
		return b.getContext("2d");
	};
	U.a.Rb = function(b) {
		this.ia = b || U.global.document || document;
	};
	S = U.a.Rb.prototype;
	S.Ne = U.a.Ne;
	S.bm = Q("ia");
	S.Oe = function(b) {
		return U.a.Re(this.ia, b);
	};
	S.mm = function(b) {
		return U.a.Rh(this.ia, b);
	};
	S.yj = U.a.Rb.prototype.Oe;
	S.getElementsByTagName = function(b, c) {
		return (c || this.ia).getElementsByTagName(String(b));
	};
	S.Se = function(b, c, d) {
		return U.a.pd(this.ia, b, c, d);
	};
	S.fm = function(b, c, d) {
		return U.a.Qe(this.ia, b, c, d);
	};
	S.Ah = function(b, c) {
		return U.a.Ah(b, c || this.ia);
	};
	S.Pe = function(b, c) {
		return U.a.Pe(b, c || this.ia);
	};
	S.Qh = function(b, c) {
		return U.a.Qh(b, c || this.ia);
	};
	S.zj = U.a.Rb.prototype.Se;
	S.Ud = U.a.Ud;
	S.Xh = function(b) {
		return U.a.Xh(b || this.bc());
	};
	S.cm = function() {
		return U.a.Le(this.bc());
	};
	S.ze = function(b, c, d) {
		return U.a.Wg(this.ia, arguments);
	};
	S.Aj = U.a.Rb.prototype.ze;
	S.createElement = function(b) {
		return U.a.eb(this.ia, b);
	};
	S.createTextNode = function(b) {
		return this.ia.createTextNode(String(b));
	};
	S.Cl = function(b, c, d) {
		return U.a.Yg(this.ia, b, c, !!d);
	};
	S.Xi = function(b) {
		return U.a.Yi(this.ia, b);
	};
	S.Hm = function() {
		return U.a.Jc(this.ia);
	};
	S.bc = function() {
		return U.a.cc(this.ia);
	};
	S.dm = function() {
		return U.a.Me(this.ia);
	};
	S.yh = function() {
		return U.a.zh(this.ia);
	};
	S.qh = function(b) {
		return U.a.qh(b || this.ia);
	};
	S.appendChild = U.a.appendChild;
	S.append = U.a.append;
	S.canHaveChildren = U.a.canHaveChildren;
	S.qf = U.a.qf;
	S.fi = U.a.fi;
	S.ei = U.a.ei;
	S.di = U.a.di;
	S.removeNode = U.a.removeNode;
	S.Vi = U.a.Vi;
	S.nh = U.a.nh;
	S.vh = U.a.vh;
	S.Bh = U.a.Bh;
	S.Eh = U.a.Eh;
	S.Gh = U.a.Gh;
	S.Nh = U.a.Nh;
	S.Hh = U.a.Hh;
	S.Oh = U.a.Oh;
	S.af = U.a.af;
	S.Ze = U.a.Ze;
	S.Bi = U.a.Bi;
	S.Mh = U.a.Mh;
	S.contains = U.a.contains;
	S.Qg = U.a.Qg;
	S.jh = U.a.jh;
	S.ub = U.a.ub;
	S.Ch = U.a.Ch;
	S.Dh = U.a.Dh;
	S.vf = U.a.vf;
	S.Lh = U.a.Lh;
	S.kh = U.a.kh;
	S.lh = U.a.lh;
	S.$e = U.a.$e;
	S.bj = U.a.bj;
	S.ki = U.a.ki;
	S.td = U.a.td;
	S.Jh = U.a.Jh;
	S.Kh = U.a.Kh;
	S.Ih = U.a.Ih;
	S.bf = U.a.bf;
	S.Je = U.a.Je;
	S.rh = U.a.rh;
	S.Ie = U.a.Ie;
	S.uh = U.a.uh;
	U.Nd = {};
	U.Nd.Fr = P();
	U.Thenable = P();
	U.Thenable.prototype.then = P();
	U.Thenable.dg = "$goog_Thenable";
	U.Thenable.zg = function(b) {
		b.prototype[U.Thenable.dg] = !0;
	};
	U.Thenable.li = function(b) {
		if (!b) return !1;
		try {
			return !!b[U.Thenable.dg];
		} catch (c) {
			return !1;
		}
	};
	U.async = {};
	U.async.Wc = function(b, c, d) {
		this.cn = d;
		this.Dl = b;
		this.Qn = c;
		this.Fd = 0;
		this.yd = null;
	};
	U.async.Wc.prototype.get = function() {
		if (0 < this.Fd) {
			this.Fd--;
			var b = this.yd;
			this.yd = b.next;
			b.next = null;
		} else b = this.Dl();
		return b;
	};
	U.async.Wc.prototype.put = function(b) {
		this.Qn(b);
		this.Fd < this.cn && (this.Fd++, (b.next = this.yd), (this.yd = b));
	};
	U.debug.na = {};
	U.debug.eq = P();
	U.debug.na.ic = [];
	U.debug.na.kf = [];
	U.debug.na.Qi = !1;
	U.debug.na.register = function(b) {
		U.debug.na.ic[U.debug.na.ic.length] = b;
		if (U.debug.na.Qi)
			for (var c = U.debug.na.kf, d = 0; d < c.length; d++)
				b(U.bind(c[d].Uo, c[d]));
	};
	U.debug.na.Zv = function(b) {
		U.debug.na.Qi = !0;
		for (var c = U.bind(b.Uo, b), d = 0; d < U.debug.na.ic.length; d++)
			U.debug.na.ic[d](c);
		U.debug.na.kf.push(b);
	};
	U.debug.na.Lx = function(b) {
		var c = U.debug.na.kf;
		b = U.bind(b.D, b);
		for (var d = 0; d < U.debug.na.ic.length; d++) U.debug.na.ic[d](b);
		c.length--;
	};
	U.async.mj = function(b) {
		U.global.setTimeout(function() {
			throw b;
		}, 0);
	};
	U.async.Ma = function(b, c, d) {
		var e = b;
		c && (e = U.bind(b, c));
		e = U.async.Ma.wj(e);
		U.Sa(U.global.setImmediate) && (d || U.async.Ma.Po())
			? U.global.setImmediate(e)
			: (U.async.Ma.cj || (U.async.Ma.cj = U.async.Ma.pm()),
			  U.async.Ma.cj(e));
	};
	U.async.Ma.Po = function() {
		return U.global.Window &&
			U.global.Window.prototype &&
			!U.h.userAgent.B.wb() &&
			U.global.Window.prototype.setImmediate == U.global.setImmediate
			? !1
			: !0;
	};
	U.async.Ma.pm = function() {
		var b = U.global.MessageChannel;
		"undefined" === typeof b &&
			"undefined" !== typeof window &&
			window.postMessage &&
			window.addEventListener &&
			!U.h.userAgent.ca.Sm() &&
			(b = function() {
				var f = U.a.createElement("IFRAME");
				f.style.display = "none";
				U.a.N.jo(f);
				document.documentElement.appendChild(f);
				var g = f.contentWindow;
				f = g.document;
				f.open();
				U.a.N.Ll(f);
				f.close();
				var k = "callImmediate" + Math.random(),
					h =
						"file:" == g.location.protocol
							? "*"
							: g.location.protocol + "//" + g.location.host;
				f = U.bind(function(m) {
					if (("*" == h || m.origin == h) && m.data == k)
						this.port1.onmessage();
				}, this);
				g.addEventListener("message", f, !1);
				this.port1 = {};
				this.port2 = {
					postMessage: function() {
						g.postMessage(k, h);
					}
				};
			});
		if ("undefined" !== typeof b && !U.h.userAgent.B.Ad()) {
			var c = new b(),
				d = {},
				e = d;
			c.port1.onmessage = function() {
				if (void 0 !== d.next) {
					d = d.next;
					var f = d.Og;
					d.Og = null;
					f();
				}
			};
			return function(f) {
				e.next = { Og: f };
				e = e.next;
				c.port2.postMessage(0);
			};
		}
		return "undefined" !== typeof document &&
			"onreadystatechange" in U.a.createElement(l)
			? function(f) {
					var g = U.a.createElement(l);
					g.onreadystatechange = function() {
						g.onreadystatechange = null;
						g.parentNode.removeChild(g);
						g = null;
						f();
						f = null;
					};
					document.documentElement.appendChild(g);
			  }
			: function(f) {
					U.global.setTimeout(f, 0);
			  };
	};
	U.async.Ma.wj = U.U.bi;
	U.debug.na.register(function(b) {
		U.async.Ma.wj = b;
	});
	U.async.cb = function() {
		this.$d = this.mc = null;
	};
	U.async.cb.ee = 100;
	U.async.cb.Dc = new U.async.Wc(
		function() {
			return new U.async.pe();
		},
		function(b) {
			b.reset();
		},
		U.async.cb.ee
	);
	U.async.cb.prototype.add = function(b, c) {
		var d = U.async.cb.Dc.get();
		d.set(b, c);
		this.$d ? (this.$d.next = d) : (this.mc = d);
		this.$d = d;
	};
	U.async.cb.prototype.remove = function() {
		var b = null;
		this.mc &&
			((b = this.mc),
			(this.mc = this.mc.next),
			this.mc || (this.$d = null),
			(b.next = null));
		return b;
	};
	U.async.pe = function() {
		this.next = this.scope = this.Ge = null;
	};
	U.async.pe.prototype.set = function(b, c) {
		this.Ge = b;
		this.scope = c;
		this.next = null;
	};
	U.async.pe.prototype.reset = function() {
		this.next = this.scope = this.Ge = null;
	};
	U.Gj = !1;
	U.async.W = function(b, c) {
		U.async.W.Sd || U.async.W.Gm();
		U.async.W.Zd || (U.async.W.Sd(), (U.async.W.Zd = !0));
		U.async.W.Ff.add(b, c);
	};
	U.async.W.Gm = function() {
		if (U.Gj || (U.global.Promise && U.global.Promise.resolve)) {
			var b = U.global.Promise.resolve(void 0);
			U.async.W.Sd = function() {
				b.then(U.async.W.Md);
			};
		} else
			U.async.W.Sd = function() {
				U.async.Ma(U.async.W.Md);
			};
	};
	U.async.W.hu = function(b) {
		U.async.W.Sd = function() {
			U.async.Ma(U.async.W.Md);
			b && b(U.async.W.Md);
		};
	};
	U.async.W.Zd = !1;
	U.async.W.Ff = new U.async.cb();
	U.la &&
		(U.async.W.Bw = function() {
			U.async.W.Zd = !1;
			U.async.W.Ff = new U.async.cb();
		});
	U.async.W.Md = function() {
		for (var b; (b = U.async.W.Ff.remove()); ) {
			try {
				b.Ge.call(b.scope);
			} catch (c) {
				U.async.mj(c);
			}
			U.async.cb.Dc.put(b);
		}
		U.async.W.Zd = !1;
	};
	U.Promise = function(b, c) {
		this.oa = U.Promise.aa.Wa;
		this.Ga = void 0;
		this.Wb = this.pb = this.wa = null;
		this.Ee = !1;
		0 < U.Promise.Bb ? (this.Wd = 0) : 0 == U.Promise.Bb && (this.vd = !1);
		U.Promise.ab &&
			((this.zf = []), Da(this, Error("created")), (this.ah = 0));
		if (b != U.Mb)
			try {
				var d = this;
				b.call(
					c,
					function(e) {
						V(d, U.Promise.aa.lb, e);
					},
					function(e) {
						if (U.la && !(e instanceof U.Promise.Qb))
							try {
								if (e instanceof Error) throw e;
								throw Error("Promise rejected.");
							} catch (f) {}
						V(d, U.Promise.aa.Ia, e);
					}
				);
			} catch (e) {
				V(this, U.Promise.aa.Ia, e);
			}
	};
	U.Promise.ab = !1;
	U.Promise.Bb = 0;
	U.Promise.aa = { Wa: 0, Lj: 1, lb: 2, Ia: 3 };
	U.Promise.Vf = function() {
		this.next = this.context = this.fc = this.Oc = this.Db = null;
		this.bd = !1;
	};
	U.Promise.Vf.prototype.reset = function() {
		this.context = this.fc = this.Oc = this.Db = null;
		this.bd = !1;
	};
	U.Promise.ee = 100;
	U.Promise.Dc = new U.async.Wc(
		function() {
			return new U.Promise.Vf();
		},
		function(b) {
			b.reset();
		},
		U.Promise.ee
	);
	U.Promise.th = function(b, c, d) {
		var e = U.Promise.Dc.get();
		e.Oc = b;
		e.fc = c;
		e.context = d;
		return e;
	};
	U.Promise.Tn = function(b) {
		U.Promise.Dc.put(b);
	};
	U.Promise.resolve = function(b) {
		if (b instanceof U.Promise) return b;
		var c = new U.Promise(U.Mb);
		V(c, U.Promise.aa.lb, b);
		return c;
	};
	U.Promise.reject = function(b) {
		return new U.Promise(function(c, d) {
			d(b);
		});
	};
	U.Promise.Pd = function(b, c, d) {
		U.Promise.Oi(b, c, d, null) || U.async.W(U.Nb(c, b));
	};
	U.Promise.race = function(b) {
		return new U.Promise(function(c, d) {
			b.length || c(void 0);
			for (var e = 0, f; e < b.length; e++)
				(f = b[e]), U.Promise.Pd(f, c, d);
		});
	};
	U.Promise.all = function(b) {
		return new U.Promise(function(c, d) {
			var e = b.length,
				f = [];
			if (e)
				for (
					var g = function(n, v) {
							e--;
							f[n] = v;
							0 == e && c(f);
						},
						k = function(n) {
							d(n);
						},
						h = 0,
						m;
					h < b.length;
					h++
				)
					(m = b[h]), U.Promise.Pd(m, U.Nb(g, h), k);
			else c(f);
		});
	};
	U.Promise.allSettled = function(b) {
		return new U.Promise(function(c) {
			var d = b.length,
				e = [];
			if (d)
				for (
					var f = function(h, m, n) {
							d--;
							e[h] = m
								? { $l: !0, value: n }
								: { $l: !1, reason: n };
							0 == d && c(e);
						},
						g = 0,
						k;
					g < b.length;
					g++
				)
					(k = b[g]), U.Promise.Pd(k, U.Nb(f, g, !0), U.Nb(f, g, !1));
			else c(e);
		});
	};
	U.Promise.gu = function(b) {
		return new U.Promise(function(c, d) {
			var e = b.length,
				f = [];
			if (e)
				for (
					var g = function(n) {
							c(n);
						},
						k = function(n, v) {
							e--;
							f[n] = v;
							0 == e && d(f);
						},
						h = 0,
						m;
					h < b.length;
					h++
				)
					(m = b[h]), U.Promise.Pd(m, g, U.Nb(k, h));
			else c(void 0);
		});
	};
	U.Promise.Ox = function() {
		var b,
			c,
			d = new U.Promise(function(e, f) {
				b = e;
				c = f;
			});
		return new U.Promise.xk(d, b, c);
	};
	U.Promise.prototype.then = function(b, c, d) {
		U.Promise.ab && Da(this, Error("then"));
		return Ea(this, U.Sa(b) ? b : null, U.Sa(c) ? c : null, d);
	};
	U.Thenable.zg(U.Promise);
	U.Promise.prototype.cancel = function(b) {
		if (this.oa == U.Promise.aa.Wa) {
			var c = new U.Promise.Qb(b);
			U.async.W(function() {
				Fa(this, c);
			}, this);
		}
	};
	function Fa(b, c) {
		if (b.oa == U.Promise.aa.Wa)
			if (b.wa) {
				var d = b.wa;
				if (d.pb) {
					for (
						var e = 0, f = null, g = null, k = d.pb;
						k &&
						(k.bd || (e++, k.Db == b && (f = k), !(f && 1 < e)));
						k = k.next
					)
						f || (g = k);
					f &&
						(d.oa == U.Promise.aa.Wa && 1 == e
							? Fa(d, c)
							: (g
									? ((e = g),
									  e.next == d.Wb && (d.Wb = e),
									  (e.next = e.next.next))
									: Ga(d),
							  Ha(d, f, U.Promise.aa.Ia, c)));
				}
				b.wa = null;
			} else V(b, U.Promise.aa.Ia, c);
	}
	function Ia(b, c) {
		b.pb || (b.oa != U.Promise.aa.lb && b.oa != U.Promise.aa.Ia) || Ja(b);
		b.Wb ? (b.Wb.next = c) : (b.pb = c);
		b.Wb = c;
	}
	function Ea(b, c, d, e) {
		var f = U.Promise.th(null, null, null);
		f.Db = new U.Promise(function(g, k) {
			f.Oc = c
				? function(h) {
						try {
							var m = c.call(e, h);
							g(m);
						} catch (n) {
							k(n);
						}
				  }
				: g;
			f.fc = d
				? function(h) {
						try {
							var m = d.call(e, h);
							void 0 === m && h instanceof U.Promise.Qb
								? k(h)
								: g(m);
						} catch (n) {
							k(n);
						}
				  }
				: k;
		});
		f.Db.wa = b;
		Ia(b, f);
		return f.Db;
	}
	U.Promise.prototype.Ho = function(b) {
		this.oa = U.Promise.aa.Wa;
		V(this, U.Promise.aa.lb, b);
	};
	U.Promise.prototype.Io = function(b) {
		this.oa = U.Promise.aa.Wa;
		V(this, U.Promise.aa.Ia, b);
	};
	function V(b, c, d) {
		b.oa == U.Promise.aa.Wa &&
			(b === d &&
				((c = U.Promise.aa.Ia),
				(d = new TypeError("Promise cannot resolve to itself"))),
			(b.oa = U.Promise.aa.Lj),
			U.Promise.Oi(d, b.Ho, b.Io, b) ||
				((b.Ga = d),
				(b.oa = c),
				(b.wa = null),
				Ja(b),
				c != U.Promise.aa.Ia ||
					d instanceof U.Promise.Qb ||
					U.Promise.Uk(b, d)));
	}
	U.Promise.Oi = function(b, c, d, e) {
		if (b instanceof U.Promise)
			return (
				U.Promise.ab && Da(b, Error("then")),
				Ia(b, U.Promise.th(c || U.Mb, d || null, e)),
				!0
			);
		if (U.Thenable.li(b)) return b.then(c, d, e), !0;
		if (U.Ba(b))
			try {
				var f = b.then;
				if (U.Sa(f)) return U.Promise.Fo(b, f, c, d, e), !0;
			} catch (g) {
				return d.call(e, g), !0;
			}
		return !1;
	};
	U.Promise.Fo = function(b, c, d, e, f) {
		function g(m) {
			h || ((h = !0), e.call(f, m));
		}
		function k(m) {
			h || ((h = !0), d.call(f, m));
		}
		var h = !1;
		try {
			c.call(b, k, g);
		} catch (m) {
			g(m);
		}
	};
	function Ja(b) {
		b.Ee || ((b.Ee = !0), U.async.W(b.Sl, b));
	}
	function Ga(b) {
		var c = null;
		b.pb && ((c = b.pb), (b.pb = c.next), (c.next = null));
		b.pb || (b.Wb = null);
		return c;
	}
	U.Promise.prototype.Sl = function() {
		for (var b; (b = Ga(this)); )
			U.Promise.ab && this.ah++, Ha(this, b, this.oa, this.Ga);
		this.Ee = !1;
	};
	function Ha(b, c, d, e) {
		if (d == U.Promise.aa.Ia && c.fc && !c.bd)
			if (0 < U.Promise.Bb)
				for (; b && b.Wd; b = b.wa)
					U.global.clearTimeout(b.Wd), (b.Wd = 0);
			else if (0 == U.Promise.Bb) for (; b && b.vd; b = b.wa) b.vd = !1;
		if (c.Db) (c.Db.wa = null), U.Promise.gi(c, d, e);
		else
			try {
				c.bd ? c.Oc.call(c.context) : U.Promise.gi(c, d, e);
			} catch (f) {
				U.Promise.wd.call(null, f);
			}
		U.Promise.Tn(c);
	}
	U.Promise.gi = function(b, c, d) {
		c == U.Promise.aa.lb
			? b.Oc.call(b.context, d)
			: b.fc && b.fc.call(b.context, d);
	};
	function Da(b, c) {
		if (U.Promise.ab && typeof c.stack === K) {
			var d = c.stack.split("\n", 4)[3];
			c = c.message;
			c += Array(11 - c.length).join(" ");
			b.zf.push(c + d);
		}
	}
	function Ka(b, c) {
		if (U.Promise.ab && c && typeof c.stack === K && b.zf.length) {
			for (var d = ["Promise trace:"], e = b; e; e = e.wa) {
				for (var f = b.ah; 0 <= f; f--) d.push(e.zf[f]);
				d.push(
					"Value: [" +
						(e.oa == U.Promise.aa.Ia ? "REJECTED" : "FULFILLED") +
						"] <" +
						String(e.Ga) +
						">"
				);
			}
			c.stack += "\n\n" + d.join("\n");
		}
	}
	U.Promise.Uk = function(b, c) {
		0 < U.Promise.Bb
			? (b.Wd = U.global.setTimeout(function() {
					Ka(b, c);
					U.Promise.wd.call(null, c);
			  }, U.Promise.Bb))
			: 0 == U.Promise.Bb &&
			  ((b.vd = !0),
			  U.async.W(function() {
					b.vd && (Ka(b, c), U.Promise.wd.call(null, c));
			  }));
	};
	U.Promise.wd = U.async.mj;
	U.Promise.ix = function(b) {
		U.Promise.wd = b;
	};
	U.Promise.Qb = function(b) {
		U.debug.Error.call(this, b);
	};
	U.vb(U.Promise.Qb, U.debug.Error);
	U.Promise.Qb.prototype.name = "cancel";
	U.Promise.xk = function(b, c, d) {
		this.Nd = b;
		this.resolve = c;
		this.reject = d;
	}; /*
    Portions of this code are from MochiKit, received by
    The Closure Authors under the MIT license. All other code is Copyright
    2005-2009 The Closure Authors. All Rights Reserved.
   */
	U.async.L = function(b, c) {
		this.Td = [];
		this.Si = b;
		this.eh = c || null;
		this.dc = this.Yb = !1;
		this.Ga = void 0;
		this.wf = this.ol = this.ue = !1;
		this.Vd = 0;
		this.wa = null;
		this.dd = 0;
		U.async.L.ab &&
			((this.ye = null),
			Error.captureStackTrace &&
				((b = { stack: "" }),
				Error.captureStackTrace(b, U.async.L),
				typeof b.stack == K &&
					(this.ye = b.stack.replace(/^[^\n]*\n/, ""))));
	};
	U.async.L.Hk = !1;
	U.async.L.ab = !1;
	S = U.async.L.prototype;
	S.cancel = function(b) {
		if (this.Yb) this.Ga instanceof U.async.L && this.Ga.cancel();
		else {
			if (this.wa) {
				var c = this.wa;
				delete this.wa;
				b ? c.cancel(b) : (c.dd--, 0 >= c.dd && c.cancel());
			}
			this.Si ? this.Si.call(this.eh, this) : (this.wf = !0);
			this.Yb || this.rb(new U.async.L.Pb(this));
		}
	};
	S.Vg = function(b, c) {
		this.ue = !1;
		La(this, b, c);
	};
	function La(b, c, d) {
		b.Yb = !0;
		b.Ga = d;
		b.dc = !c;
		Ma(b);
	}
	function Na(b) {
		if (b.Yb) {
			if (!b.wf) throw new U.async.L.Tc(b);
			b.wf = !1;
		}
	}
	S.tc = function(b) {
		Na(this);
		La(this, !0, b);
	};
	S.rb = function(b) {
		Na(this);
		Oa(this, b);
		La(this, !1, b);
	};
	function Oa(b, c) {
		U.async.L.ab &&
			b.ye &&
			U.Ba(c) &&
			c.stack &&
			/^[^\n]+(\n   [^\n]+)+/.test(c.stack) &&
			(c.stack = c.stack + "\nDEFERRED OPERATION:\n" + b.ye);
	}
	function Pa(b, c, d) {
		return W(b, c, null, d);
	}
	function Qa(b, c) {
		W(b, null, c, void 0);
	}
	function W(b, c, d, e) {
		b.Td.push([c, d, e]);
		b.Yb && Ma(b);
		return b;
	}
	S.then = function(b, c, d) {
		var e,
			f,
			g = new U.Promise(function(k, h) {
				e = k;
				f = h;
			});
		W(this, e, function(k) {
			k instanceof U.async.L.Pb ? g.cancel() : f(k);
		});
		return g.then(b, c, d);
	};
	U.Thenable.zg(U.async.L);
	U.async.L.prototype.ql = function() {
		var b = new U.async.L();
		W(this, b.tc, b.rb, b);
		b.wa = this;
		this.dd++;
		return b;
	};
	function Ra(b) {
		return U.g.some(b.Td, function(c) {
			return U.Sa(c[1]);
		});
	}
	function Ma(b) {
		b.Vd && b.Yb && Ra(b) && (U.async.L.No(b.Vd), (b.Vd = 0));
		b.wa && (b.wa.dd--, delete b.wa);
		for (var c = b.Ga, d = !1, e = !1; b.Td.length && !b.ue; ) {
			var f = b.Td.shift(),
				g = f[0],
				k = f[1];
			f = f[2];
			if ((g = b.dc ? k : g))
				try {
					var h = g.call(f || b.eh, c);
					void 0 !== h &&
						((b.dc = b.dc && (h == c || h instanceof Error)),
						(b.Ga = c = h));
					if (
						U.Thenable.li(c) ||
						(typeof U.global.Promise === x &&
							c instanceof U.global.Promise)
					)
						(e = !0), (b.ue = !0);
				} catch (m) {
					(c = m), (b.dc = !0), Oa(b, c), Ra(b) || (d = !0);
				}
		}
		b.Ga = c;
		e
			? ((e = U.bind(b.Vg, b, !0)),
			  (h = U.bind(b.Vg, b, !1)),
			  c instanceof U.async.L ? (W(c, e, h), (c.ol = !0)) : c.then(e, h))
			: U.async.L.Hk &&
			  c instanceof Error &&
			  !(c instanceof U.async.L.Pb) &&
			  (d = b.dc = !0);
		d && (b.Vd = U.async.L.ho(c));
	}
	U.async.L.jj = function(b) {
		var c = new U.async.L();
		c.tc(b);
		return c;
	};
	U.async.L.pu = function(b) {
		var c = new U.async.L();
		b.then(
			function(d) {
				c.tc(d);
			},
			function(d) {
				c.rb(d);
			}
		);
		return c;
	};
	U.async.L.ua = function(b) {
		var c = new U.async.L();
		c.rb(b);
		return c;
	};
	U.async.L.ft = function() {
		var b = new U.async.L();
		b.cancel();
		return b;
	};
	U.async.L.Nx = function(b, c, d) {
		return b instanceof U.async.L
			? Pa(b.ql(), c, d)
			: Pa(U.async.L.jj(b), c, d);
	};
	U.async.L.Tc = function() {
		U.debug.Error.call(this);
	};
	U.vb(U.async.L.Tc, U.debug.Error);
	U.async.L.Tc.prototype.message = "Deferred has already fired";
	U.async.L.Tc.prototype.name = "AlreadyCalledError";
	U.async.L.Pb = function() {
		U.debug.Error.call(this);
	};
	U.vb(U.async.L.Pb, U.debug.Error);
	U.async.L.Pb.prototype.message = "Deferred was canceled";
	U.async.L.Pb.prototype.name = "CanceledError";
	U.async.L.Zf = function(b) {
		this.Ic = U.global.setTimeout(U.bind(this.lj, this), 0);
		this.Ql = b;
	};
	U.async.L.Zf.prototype.lj = function() {
		delete U.async.L.Bc[this.Ic];
		throw this.Ql;
	};
	U.async.L.Bc = {};
	U.async.L.ho = function(b) {
		b = new U.async.L.Zf(b);
		U.async.L.Bc[b.Ic] = b;
		return b.Ic;
	};
	U.async.L.No = function(b) {
		var c = U.async.L.Bc[b];
		c && (U.global.clearTimeout(c.Ic), delete U.async.L.Bc[b]);
	};
	U.async.L.Ss = function() {
		var b = U.async.L.Bc,
			c;
		for (c in b) {
			var d = b[c];
			U.global.clearTimeout(d.Ic);
			d.lj();
		}
	};
	U.M = {};
	U.M.O = {};
	U.M.O.ge = "closure_verification";
	U.M.O.Xj = 5e3;
	U.M.O.sf = [];
	U.M.O.ao = function(b, c) {
		function d() {
			var f = b.shift();
			f = U.M.O.Qd(f, c);
			b.length && W(f, d, d, void 0);
			return f;
		}
		if (!b.length) return U.async.L.jj(null);
		var e = U.M.O.sf.length;
		U.g.extend(U.M.O.sf, b);
		if (e) return U.M.O.$i;
		b = U.M.O.sf;
		U.M.O.$i = d();
		return U.M.O.$i;
	};
	U.M.O.Qd = function(b, c) {
		var d = c || {};
		c = d.document || document;
		var e = U.b.I.D(b),
			f = U.a.createElement(l),
			g = { aj: f, oj: void 0 },
			k = new U.async.L(U.M.O.ul, g),
			h = null,
			m = null != d.timeout ? d.timeout : U.M.O.Xj;
		0 < m &&
			((h = window.setTimeout(function() {
				U.M.O.hd(f, !0);
				k.rb(
					new U.M.O.Error(
						U.M.O.Vc.TIMEOUT,
						"Timeout reached for loading script " + e
					)
				);
			}, m)),
			(g.oj = h));
		f.onload = f.onreadystatechange = function() {
			(f.readyState &&
				"loaded" != f.readyState &&
				"complete" != f.readyState) ||
				(U.M.O.hd(f, d.jt || !1, h), k.tc(null));
		};
		f.onerror = function() {
			U.M.O.hd(f, !0, h);
			k.rb(
				new U.M.O.Error(U.M.O.Vc.lk, "Error while loading script " + e)
			);
		};
		g = d.attributes || {};
		U.object.extend(g, { type: ta, charset: "UTF-8" });
		U.a.Ud(f, g);
		U.a.N.oo(f, b);
		U.M.O.om(c).appendChild(f);
		return k;
	};
	U.M.O.Fw = function(b, c, d) {
		U.global[U.M.O.ge] || (U.global[U.M.O.ge] = {});
		var e = U.global[U.M.O.ge],
			f = U.b.I.D(b);
		if (void 0 !== e[c])
			return U.async.L.ua(
				new U.M.O.Error(
					U.M.O.Vc.Sk,
					"Verification object " + c + " already defined."
				)
			);
		b = U.M.O.Qd(b, d);
		var g = new U.async.L(U.bind(b.cancel, b));
		Pa(b, function() {
			var k = e[c];
			void 0 !== k
				? (g.tc(k), delete e[c])
				: g.rb(
						new U.M.O.Error(
							U.M.O.Vc.Rk,
							"Script " +
								f +
								" loaded, but verification object " +
								c +
								" was not defined."
						)
				  );
		});
		Qa(b, function(k) {
			void 0 !== e[c] && delete e[c];
			g.rb(k);
		});
		return g;
	};
	U.M.O.om = function(b) {
		var c = U.a.getElementsByTagName("HEAD", b);
		return !c || U.g.Aa(c) ? b.documentElement : c[0];
	};
	U.M.O.ul = function() {
		if (this && this.aj) {
			var b = this.aj;
			b && b.tagName == l && U.M.O.hd(b, !0, this.oj);
		}
	};
	U.M.O.hd = function(b, c, d) {
		null != d && U.global.clearTimeout(d);
		b.onload = U.Mb;
		b.onerror = U.Mb;
		b.onreadystatechange = U.Mb;
		c &&
			window.setTimeout(function() {
				U.a.removeNode(b);
			}, 0);
	};
	U.M.O.Vc = { lk: 0, TIMEOUT: 1, Rk: 2, Sk: 3 };
	U.M.O.Error = function(b, c) {
		var d = "Jsloader error (code #" + b + ")";
		c && (d += ": " + c);
		U.debug.Error.call(this, d);
		this.code = b;
	};
	U.vb(U.M.O.Error, U.debug.Error);
	var google = { v: {} };
	google.v.w = {};
	google.v.w.Uj = {
		On: {
			"gstatic.com": {
				loader: U.c.F.from(
					"https://www.gstatic.com/charts/%{version}/loader.js"
				),
				debug: U.c.F.from(
					"https://www.gstatic.com/charts/debug/%{version}/js/jsapi_debug_%{package}_module.js"
				),
				debug_i18n: U.c.F.from(
					"https://www.gstatic.com/charts/debug/%{version}/i18n/jsapi_debug_i18n_%{package}_module__%{language}.js"
				),
				compiled: U.c.F.from(
					"https://www.gstatic.com/charts/%{version}/js/jsapi_compiled_%{package}_module.js"
				),
				compiled_i18n: U.c.F.from(
					"https://www.gstatic.com/charts/%{version}/i18n/jsapi_compiled_i18n_%{package}_module__%{language}.js"
				),
				css: U.c.F.from(
					"https://www.gstatic.com/charts/%{version}/css/%{subdir}/%{filename}"
				),
				css2: U.c.F.from(
					"https://www.gstatic.com/charts/%{version}/css/%{subdir1}/%{subdir2}/%{filename}"
				),
				third_party: U.c.F.from(na),
				third_party2: U.c.F.from(
					"https://www.gstatic.com/charts/%{version}/third_party/%{subdir1}/%{subdir2}/%{filename}"
				),
				third_party_gen: U.c.F.from(na)
			},
			"gstatic.cn": {
				loader: U.c.F.from(
					"https://www.gstatic.cn/charts/%{version}/loader.js"
				),
				debug: U.c.F.from(
					"https://www.gstatic.cn/charts/debug/%{version}/js/jsapi_debug_%{package}_module.js"
				),
				debug_i18n: U.c.F.from(
					"https://www.gstatic.cn/charts/debug/%{version}/i18n/jsapi_debug_i18n_%{package}_module__%{language}.js"
				),
				compiled: U.c.F.from(
					"https://www.gstatic.cn/charts/%{version}/js/jsapi_compiled_%{package}_module.js"
				),
				compiled_i18n: U.c.F.from(
					"https://www.gstatic.cn/charts/%{version}/i18n/jsapi_compiled_i18n_%{package}_module__%{language}.js"
				),
				css: U.c.F.from(
					"https://www.gstatic.cn/charts/%{version}/css/%{subdir}/%{filename}"
				),
				css2: U.c.F.from(
					"https://www.gstatic.cn/charts/%{version}/css/%{subdir1}/%{subdir2}/%{filename}"
				),
				third_party: U.c.F.from(ma),
				third_party2: U.c.F.from(
					"https://www.gstatic.cn/charts/%{version}/third_party/%{subdir1}/%{subdir2}/%{filename}"
				),
				third_party_gen: U.c.F.from(ma)
			}
		},
		Mt: ["default"],
		Nt: {
			format: [],
			default: ["format"],
			ui: ["default"],
			ui_base: ["default"],
			flashui: [L],
			fw: [L],
			annotatedtimeline: [ea],
			annotationchart: [L, "controls", fa, "table"],
			areachart: q,
			bar: ["fw", ja, wa],
			barchart: q,
			browserchart: [L],
			bubbles: ["fw", "d3"],
			calendar: ["fw"],
			charteditor: [L, fa, y, da, "gauge", "motionchart", oa, "table"],
			charteditor_base: [
				va,
				fa,
				y,
				da,
				"gauge",
				"motionchart",
				oa,
				"table_base"
			],
			circles: ["fw", "d3"],
			clusterchart: [fa, "d3"],
			columnchart: q,
			controls: [L],
			controls_base: [va],
			corechart: [L],
			gantt: ["fw", ja],
			gauge: [L],
			geochart: [L],
			geomap: ["flashui"],
			geomap_base: [va],
			heatmap: ["vegachart"],
			helloworld: ["fw"],
			imagechart: [L],
			imageareachart: y,
			imagebarchart: y,
			imagelinechart: y,
			imagepiechart: y,
			imagesparkline: y,
			line: ["fw", ja, wa],
			linechart: q,
			map: [L],
			motionchart: ["flashui"],
			orgchart: [L],
			overtimecharts: [L, fa],
			piechart: q,
			sankey: ["fw", "d3", "d3.sankey"],
			scatter: ["fw", ja, wa],
			scatterchart: q,
			sunburst: ["fw", "d3"],
			streamgraph: ["fw", "d3"],
			table: [L],
			table_base: [va],
			timeline: ["fw", L, ja],
			treemap: [L],
			vegachart: [L, "vegaLib"],
			wordtree: [L]
		},
		Ax: {
			d3: { subdir1: "d3", subdir2: "v5", filename: "d3.js" },
			"d3.sankey": {
				subdir1: "d3_sankey",
				subdir2: "v4",
				filename: "d3.sankey.js"
			},
			webfontloader: { subdir: wa, filename: N }
		},
		zx: {
			dygraph: {
				subdir: "dygraphs",
				filename: "dygraph-tickers-combined.js"
			},
			vegaLib: { subdir: "vega", filename: "vega-bundle.js" }
		},
		It: {
			default: [{ subdir: "core", filename: "tooltip.css" }],
			annotationchart: [{ subdir: ea, filename: "annotationchart.css" }],
			charteditor: [
				{ subdir: "charteditor", filename: "charteditor.css" }
			],
			charteditor_base: [
				{ subdir: "charteditor_base", filename: "charteditor_base.css" }
			],
			controls: [{ subdir: "controls", filename: "controls.css" }],
			imagesparkline: [{ subdir: y, filename: "imagesparkline.css" }],
			orgchart: [{ subdir: oa, filename: "orgchart.css" }],
			table: [
				{ subdir: "table", filename: "table.css" },
				{ subdir: "util", filename: "format.css" }
			],
			table_base: [
				{ subdir: "util", filename: "format.css" },
				{ subdir: "table", filename: "table_base.css" }
			],
			ui: [{ subdir: "util", filename: "util.css" }],
			ui_base: [{ subdir: "util", filename: "util_base.css" }]
		}
	};
	google.v.w.gg = {};
	google.v.w.gg.vm = {
		"chrome-frame": {
			versions: {
				"1.0.0": { uncompressed: aa, compressed: ba },
				"1.0.1": { uncompressed: aa, compressed: ba },
				"1.0.2": { uncompressed: aa, compressed: ba }
			},
			aliases: { 1: "1.0.2", "1.0": "1.0.2" }
		},
		swfobject: {
			versions: {
				"2.1": { uncompressed: sa, compressed: "swfobject.js" },
				"2.2": { uncompressed: sa, compressed: "swfobject.js" }
			},
			aliases: { 2: "2.2" }
		},
		"ext-core": {
			versions: {
				"3.1.0": { uncompressed: ka, compressed: "ext-core.js" },
				"3.0.0": { uncompressed: ka, compressed: "ext-core.js" }
			},
			aliases: { 3: "3.1.0", "3.0": "3.0.0", "3.1": "3.1.0" }
		},
		scriptaculous: {
			versions: {
				"1.8.3": { uncompressed: I, compressed: I },
				"1.9.0": { uncompressed: I, compressed: I },
				"1.8.1": { uncompressed: I, compressed: I },
				"1.8.2": { uncompressed: I, compressed: I }
			},
			aliases: { 1: "1.9.0", "1.8": "1.8.3", "1.9": "1.9.0" }
		},
		webfont: {
			versions: {
				"1.0.12": { uncompressed: O, compressed: N },
				"1.0.13": { uncompressed: O, compressed: N },
				"1.0.14": { uncompressed: O, compressed: N },
				"1.0.15": { uncompressed: O, compressed: N },
				"1.0.10": { uncompressed: O, compressed: N },
				"1.0.11": { uncompressed: O, compressed: N },
				"1.0.27": { uncompressed: O, compressed: N },
				"1.0.28": { uncompressed: O, compressed: N },
				"1.0.29": { uncompressed: O, compressed: N },
				"1.0.23": { uncompressed: O, compressed: N },
				"1.0.24": { uncompressed: O, compressed: N },
				"1.0.25": { uncompressed: O, compressed: N },
				"1.0.26": { uncompressed: O, compressed: N },
				"1.0.21": { uncompressed: O, compressed: N },
				"1.0.22": { uncompressed: O, compressed: N },
				"1.0.3": { uncompressed: O, compressed: N },
				"1.0.4": { uncompressed: O, compressed: N },
				"1.0.5": { uncompressed: O, compressed: N },
				"1.0.6": { uncompressed: O, compressed: N },
				"1.0.9": { uncompressed: O, compressed: N },
				"1.0.16": { uncompressed: O, compressed: N },
				"1.0.17": { uncompressed: O, compressed: N },
				"1.0.0": { uncompressed: O, compressed: N },
				"1.0.18": { uncompressed: O, compressed: N },
				"1.0.1": { uncompressed: O, compressed: N },
				"1.0.19": { uncompressed: O, compressed: N },
				"1.0.2": { uncompressed: O, compressed: N }
			},
			aliases: { 1: "1.0.29", "1.0": "1.0.29" }
		},
		jqueryui: {
			versions: {
				"1.8.17": { uncompressed: z, compressed: A },
				"1.8.16": { uncompressed: z, compressed: A },
				"1.8.15": { uncompressed: z, compressed: A },
				"1.8.14": { uncompressed: z, compressed: A },
				"1.8.4": { uncompressed: z, compressed: A },
				"1.8.13": { uncompressed: z, compressed: A },
				"1.8.5": { uncompressed: z, compressed: A },
				"1.8.12": { uncompressed: z, compressed: A },
				"1.8.6": { uncompressed: z, compressed: A },
				"1.8.11": { uncompressed: z, compressed: A },
				"1.8.7": { uncompressed: z, compressed: A },
				"1.8.10": { uncompressed: z, compressed: A },
				"1.8.8": { uncompressed: z, compressed: A },
				"1.8.9": { uncompressed: z, compressed: A },
				"1.6.0": { uncompressed: z, compressed: A },
				"1.7.0": { uncompressed: z, compressed: A },
				"1.5.2": { uncompressed: z, compressed: A },
				"1.8.0": { uncompressed: z, compressed: A },
				"1.7.1": { uncompressed: z, compressed: A },
				"1.5.3": { uncompressed: z, compressed: A },
				"1.8.1": { uncompressed: z, compressed: A },
				"1.7.2": { uncompressed: z, compressed: A },
				"1.8.2": { uncompressed: z, compressed: A },
				"1.7.3": { uncompressed: z, compressed: A }
			},
			aliases: {
				1: "1.8.17",
				"1.8.3": "1.8.4",
				"1.5": "1.5.3",
				"1.6": "1.6.0",
				"1.7": "1.7.3",
				"1.8": "1.8.17"
			}
		},
		mootools: {
			versions: {
				"1.3.0": { uncompressed: E, compressed: D },
				"1.2.1": { uncompressed: E, compressed: D },
				"1.1.2": { uncompressed: E, compressed: D },
				"1.4.0": { uncompressed: E, compressed: D },
				"1.3.1": { uncompressed: E, compressed: D },
				"1.2.2": { uncompressed: E, compressed: D },
				"1.4.1": { uncompressed: E, compressed: D },
				"1.3.2": { uncompressed: E, compressed: D },
				"1.2.3": { uncompressed: E, compressed: D },
				"1.4.2": { uncompressed: E, compressed: D },
				"1.2.4": { uncompressed: E, compressed: D },
				"1.2.5": { uncompressed: E, compressed: D },
				"1.1.1": { uncompressed: E, compressed: D }
			},
			aliases: {
				1: "1.1.2",
				"1.1": "1.1.2",
				"1.2": "1.2.5",
				"1.3": "1.3.2",
				"1.4": "1.4.2",
				"1.11": "1.1.1"
			}
		},
		yui: {
			versions: {
				"2.8.0r4": { uncompressed: t, compressed: r },
				"2.9.0": { uncompressed: t, compressed: r },
				"2.8.1": { uncompressed: t, compressed: r },
				"2.6.0": { uncompressed: t, compressed: r },
				"2.7.0": { uncompressed: t, compressed: r },
				"3.3.0": {
					uncompressed: "build/yui/yui.js",
					compressed: "build/yui/yui-min.js"
				},
				"2.8.2r1": { uncompressed: t, compressed: r }
			},
			aliases: {
				2: "2.9.0",
				3: "3.3.0",
				"2.8.2": "2.8.2r1",
				"2.8.0": "2.8.0r4",
				"3.3": "3.3.0",
				"2.6": "2.6.0",
				"2.7": "2.7.0",
				"2.8": "2.8.2r1",
				"2.9": "2.9.0"
			}
		},
		prototype: {
			versions: {
				"1.6.1.0": { uncompressed: H, compressed: H },
				"1.6.0.2": { uncompressed: H, compressed: H },
				"1.7.0.0": { uncompressed: H, compressed: H },
				"1.6.0.3": { uncompressed: H, compressed: H }
			},
			aliases: {
				1: "1.7.0.0",
				"1.6.0": "1.6.0.3",
				"1.6.1": "1.6.1.0",
				"1.7.0": "1.7.0.0",
				"1.6": "1.6.1.0",
				"1.7": "1.7.0.0"
			}
		},
		jquery: {
			versions: {
				"1.3.0": { uncompressed: B, compressed: C },
				"1.4.0": { uncompressed: B, compressed: C },
				"1.3.1": { uncompressed: B, compressed: C },
				"1.5.0": { uncompressed: B, compressed: C },
				"1.4.1": { uncompressed: B, compressed: C },
				"1.3.2": { uncompressed: B, compressed: C },
				"1.2.3": { uncompressed: B, compressed: C },
				"1.6.0": { uncompressed: B, compressed: C },
				"1.5.1": { uncompressed: B, compressed: C },
				"1.4.2": { uncompressed: B, compressed: C },
				"1.7.0": { uncompressed: B, compressed: C },
				"1.6.1": { uncompressed: B, compressed: C },
				"1.5.2": { uncompressed: B, compressed: C },
				"1.4.3": { uncompressed: B, compressed: C },
				"1.7.1": { uncompressed: B, compressed: C },
				"1.6.2": { uncompressed: B, compressed: C },
				"1.4.4": { uncompressed: B, compressed: C },
				"1.2.6": { uncompressed: B, compressed: C },
				"1.6.3": { uncompressed: B, compressed: C },
				"1.6.4": { uncompressed: B, compressed: C }
			},
			aliases: {
				1: "1.7.1",
				"1.2": "1.2.6",
				"1.3": "1.3.2",
				"1.4": "1.4.4",
				"1.5": "1.5.2",
				"1.6": "1.6.4",
				"1.7": "1.7.1"
			}
		},
		dojo: {
			versions: {
				"1.3.0": { uncompressed: w, compressed: u },
				"1.4.0": { uncompressed: w, compressed: u },
				"1.3.1": { uncompressed: w, compressed: u },
				"1.5.0": { uncompressed: w, compressed: u },
				"1.4.1": { uncompressed: w, compressed: u },
				"1.3.2": { uncompressed: w, compressed: u },
				"1.2.3": { uncompressed: w, compressed: u },
				"1.6.0": { uncompressed: w, compressed: u },
				"1.5.1": { uncompressed: w, compressed: u },
				"1.7.0": { uncompressed: ia, compressed: ha },
				"1.6.1": { uncompressed: w, compressed: u },
				"1.4.3": { uncompressed: w, compressed: u },
				"1.7.1": { uncompressed: ia, compressed: ha },
				"1.7.2": { uncompressed: ia, compressed: ha },
				"1.2.0": { uncompressed: w, compressed: u },
				"1.1.1": { uncompressed: w, compressed: u }
			},
			aliases: {
				1: "1.6.1",
				"1.1": "1.1.1",
				"1.2": "1.2.3",
				"1.3": "1.3.2",
				"1.4": "1.4.3",
				"1.5": "1.5.1",
				"1.6": "1.6.1",
				"1.7": "1.7.2"
			}
		}
	};
	google.v.w.ha = {};
	google.v.w.ha.Ci = function() {
		return new Promise(function(b) {
			if (
				"undefined" == typeof window ||
				"complete" === document.readyState
			)
				b();
			else if (window.addEventListener)
				document.addEventListener("DOMContentLoaded", b, !0),
					window.addEventListener("load", b, !0);
			else if (window.attachEvent) window.attachEvent("onload", b);
			else {
				var c = window.onload;
				U.Sa(c)
					? (window.onload = function(d) {
							c(d);
							b();
					  })
					: (window.onload = b);
			}
		});
	};
	U.Cc("google.charts.loader.Utils.isWindowLoaded", google.v.w.ha.Ci);
	google.v.w.ha.gb = {};
	google.v.w.ha.Aw = function() {
		google.v.w.ha.gb = {};
	};
	google.v.w.ha.Ru = function(b) {
		return google.v.w.ha.gb[b] && google.v.w.ha.gb[b].Nd;
	};
	google.v.w.ha.Qu = function(b) {
		return google.v.w.ha.gb[b] && google.v.w.ha.gb[b].loaded;
	};
	google.v.w.ha.ex = function(b, c) {
		google.v.w.ha.gb[b] = { Nd: c, loaded: !1 };
	};
	google.v.w.ha.no = function(b) {
		google.v.w.ha.gb[b] || (google.v.w.ha.gb[b] = { loaded: !1 });
		google.v.w.ha.gb[b].loaded = !0;
	};
	google.v.w.Ha = {};
	google.v.w.Ha.nj = 3e4;
	google.v.w.Ha.Wv = function(b, c) {
		return { format: b, Dg: c };
	};
	google.v.w.Ha.Th = function(b) {
		return U.b.I.format(b.format, b.Dg);
	};
	google.v.w.Ha.load = function(b, c) {
		var d = U.b.I.format(b, c),
			e = U.M.O.Qd(d, {
				timeout: google.v.w.Ha.nj,
				attributes: { async: !1, defer: !1 }
			});
		return new Promise(function(f) {
			google.v.w.ha.no(d.toString());
			Pa(e, f);
		});
	};
	google.v.w.Ha.Sv = function(b) {
		b = U.g.map(b, google.v.w.Ha.Th);
		if (U.g.Aa(b)) return Promise.resolve();
		var c = {
				timeout: google.v.w.Ha.nj,
				attributes: { async: !1, defer: !1 }
			},
			d = [];
		!U.userAgent.ma || U.userAgent.Ta(11)
			? U.g.forEach(b, function(e) {
					d.push(U.M.O.Qd(e, c));
			  })
			: d.push(U.M.O.ao(b, c));
		return Promise.all(
			U.g.map(d, function(e) {
				return new Promise(function(f) {
					return Pa(e, f);
				});
			})
		);
	};
	google.v.w.yg = {
		1: "1.0",
		"1.0": "current",
		"1.1": "upcoming",
		41: pa,
		42: pa,
		43: pa,
		44: pa,
		46: "46.1",
		"46.1": "46.2",
		previous: "45.2",
		current: "47",
		upcoming: "47"
	};
	U.o = {};
	U.o.sa =
		"StopIteration" in U.global
			? U.global.StopIteration
			: { message: "StopIteration", stack: "" };
	U.o.Iterator = P();
	U.o.Iterator.prototype.next = function() {
		throw U.o.sa;
	};
	U.o.Iterator.prototype.qe = function() {
		return this;
	};
	U.o.da = function(b) {
		if (b instanceof U.o.Iterator) return b;
		if (typeof b.qe == x) return b.qe(!1);
		if (U.ka(b)) {
			var c = 0,
				d = new U.o.Iterator();
			d.next = function() {
				for (;;) {
					if (c >= b.length) throw U.o.sa;
					if (c in b) return b[c++];
					c++;
				}
			};
			return d;
		}
		throw Error("Not implemented");
	};
	U.o.forEach = function(b, c, d) {
		if (U.ka(b))
			try {
				U.g.forEach(b, c, d);
			} catch (e) {
				if (e !== U.o.sa) throw e;
			}
		else {
			b = U.o.da(b);
			try {
				for (;;) c.call(d, b.next(), void 0, b);
			} catch (e) {
				if (e !== U.o.sa) throw e;
			}
		}
	};
	U.o.filter = function(b, c, d) {
		var e = U.o.da(b);
		b = new U.o.Iterator();
		b.next = function() {
			for (;;) {
				var f = e.next();
				if (c.call(d, f, void 0, e)) return f;
			}
		};
		return b;
	};
	U.o.au = function(b, c, d) {
		return U.o.filter(b, U.U.yn(c), d);
	};
	U.o.Od = function(b, c, d) {
		var e = 0,
			f = b,
			g = d || 1;
		1 < arguments.length && ((e = b), (f = +c));
		if (0 == g) throw Error("Range step argument must not be zero");
		var k = new U.o.Iterator();
		k.next = function() {
			if ((0 < g && e >= f) || (0 > g && e <= f)) throw U.o.sa;
			var h = e;
			e += g;
			return h;
		};
		return k;
	};
	U.o.join = function(b, c) {
		return U.o.Za(b).join(c);
	};
	U.o.map = function(b, c, d) {
		var e = U.o.da(b);
		b = new U.o.Iterator();
		b.next = function() {
			var f = e.next();
			return c.call(d, f, void 0, e);
		};
		return b;
	};
	U.o.reduce = function(b, c, d, e) {
		var f = d;
		U.o.forEach(b, function(g) {
			f = c.call(e, f, g);
		});
		return f;
	};
	U.o.some = function(b, c, d) {
		b = U.o.da(b);
		try {
			for (;;) if (c.call(d, b.next(), void 0, b)) return !0;
		} catch (e) {
			if (e !== U.o.sa) throw e;
		}
		return !1;
	};
	U.o.every = function(b, c, d) {
		b = U.o.da(b);
		try {
			for (;;) if (!c.call(d, b.next(), void 0, b)) return !1;
		} catch (e) {
			if (e !== U.o.sa) throw e;
		}
		return !0;
	};
	U.o.ht = function(b) {
		return U.o.wl(arguments);
	};
	U.o.wl = function(b) {
		var c = U.o.da(b);
		b = new U.o.Iterator();
		var d = null;
		b.next = function() {
			for (;;) {
				if (null == d) {
					var e = c.next();
					d = U.o.da(e);
				}
				try {
					return d.next();
				} catch (f) {
					if (f !== U.o.sa) throw f;
					d = null;
				}
			}
		};
		return b;
	};
	U.o.Rt = function(b, c, d) {
		var e = U.o.da(b);
		b = new U.o.Iterator();
		var f = !0;
		b.next = function() {
			for (;;) {
				var g = e.next();
				if (!f || !c.call(d, g, void 0, e)) return (f = !1), g;
			}
		};
		return b;
	};
	U.o.yx = function(b, c, d) {
		var e = U.o.da(b);
		b = new U.o.Iterator();
		b.next = function() {
			var f = e.next();
			if (c.call(d, f, void 0, e)) return f;
			throw U.o.sa;
		};
		return b;
	};
	U.o.Za = function(b) {
		if (U.ka(b)) return U.g.Za(b);
		b = U.o.da(b);
		var c = [];
		U.o.forEach(b, function(d) {
			c.push(d);
		});
		return c;
	};
	U.o.Ib = function(b, c) {
		b = U.o.Vo({}, b, c);
		var d = U.g.dh;
		return U.o.every(b, function(e) {
			return d(e[0], e[1]);
		});
	};
	U.o.xn = function(b) {
		try {
			U.o.da(b).next();
		} catch (c) {
			if (c != U.o.sa) throw c;
		}
	};
	U.o.product = function(b) {
		if (
			U.g.some(arguments, function(f) {
				return !f.length;
			}) ||
			!arguments.length
		)
			return new U.o.Iterator();
		var c = new U.o.Iterator(),
			d = arguments,
			e = U.g.repeat(0, d.length);
		c.next = function() {
			if (e) {
				for (
					var f = U.g.map(e, function(k, h) {
							return d[h][k];
						}),
						g = e.length - 1;
					0 <= g;
					g--
				) {
					if (e[g] < d[g].length - 1) {
						e[g]++;
						break;
					}
					if (0 == g) {
						e = null;
						break;
					}
					e[g] = 0;
				}
				return f;
			}
			throw U.o.sa;
		};
		return c;
	};
	U.o.Jt = function(b) {
		var c = U.o.da(b),
			d = [],
			e = 0;
		b = new U.o.Iterator();
		var f = !1;
		b.next = function() {
			var g = null;
			if (!f)
				try {
					return (g = c.next()), d.push(g), g;
				} catch (k) {
					if (k != U.o.sa || U.g.Aa(d)) throw k;
					f = !0;
				}
			g = d[e];
			e = (e + 1) % d.length;
			return g;
		};
		return b;
	};
	U.o.count = function(b, c) {
		var d = b || 0,
			e = void 0 !== c ? c : 1;
		b = new U.o.Iterator();
		b.next = function() {
			var f = d;
			d += e;
			return f;
		};
		return b;
	};
	U.o.repeat = function(b) {
		var c = new U.o.Iterator();
		c.next = U.U.Tg(b);
		return c;
	};
	U.o.As = function(b) {
		var c = U.o.da(b),
			d = 0;
		b = new U.o.Iterator();
		b.next = function() {
			return (d += c.next());
		};
		return b;
	};
	U.o.xj = function(b) {
		var c = arguments,
			d = new U.o.Iterator();
		if (0 < c.length) {
			var e = U.g.map(c, U.o.da);
			d.next = function() {
				return U.g.map(e, function(f) {
					return f.next();
				});
			};
		}
		return d;
	};
	U.o.Vo = function(b, c) {
		var d = U.g.slice(arguments, 1),
			e = new U.o.Iterator();
		if (0 < d.length) {
			var f = U.g.map(d, U.o.da);
			e.next = function() {
				var g = !1,
					k = U.g.map(f, function(h) {
						try {
							var m = h.next();
							g = !0;
						} catch (n) {
							if (n !== U.o.sa) throw n;
							m = b;
						}
						return m;
					});
				if (!g) throw U.o.sa;
				return k;
			};
		}
		return e;
	};
	U.o.qt = function(b, c) {
		var d = U.o.da(c);
		return U.o.filter(b, function() {
			return !!d.next();
		});
	};
	U.o.ie = function(b, c) {
		this.iterator = U.o.da(b);
		this.Fi = c || U.U.bi;
	};
	U.vb(U.o.ie, U.o.Iterator);
	U.o.ie.prototype.next = function() {
		for (; this.xc == this.kj; )
			(this.kd = this.iterator.next()), (this.xc = this.Fi(this.kd));
		for (var b = (this.kj = this.xc), c = this.kj, d = []; this.xc == c; ) {
			d.push(this.kd);
			try {
				this.kd = this.iterator.next();
			} catch (e) {
				if (e !== U.o.sa) throw e;
				break;
			}
			this.xc = this.Fi(this.kd);
		}
		return [b, d];
	};
	U.o.Wu = function(b, c) {
		return new U.o.ie(b, c);
	};
	U.o.tx = function(b, c, d) {
		var e = U.o.da(b);
		b = new U.o.Iterator();
		b.next = function() {
			var f = U.o.Za(e.next());
			return c.apply(d, U.g.concat(f, void 0, e));
		};
		return b;
	};
	U.o.tee = function(b, c) {
		function d() {
			var g = e.next();
			U.g.forEach(f, function(k) {
				k.push(g);
			});
		}
		var e = U.o.da(b),
			f = U.g.map(U.g.Od(typeof c === F ? c : 2), function() {
				return [];
			});
		return U.g.map(f, function(g) {
			var k = new U.o.Iterator();
			k.next = function() {
				U.g.Aa(g) && d();
				return g.shift();
			};
			return k;
		});
	};
	U.o.Xt = function(b, c) {
		return U.o.xj(U.o.count(c), b);
	};
	U.o.bn = function(b, c) {
		var d = U.o.da(b);
		b = new U.o.Iterator();
		var e = c;
		b.next = function() {
			if (0 < e--) return d.next();
			throw U.o.sa;
		};
		return b;
	};
	U.o.zl = function(b, c) {
		for (b = U.o.da(b); 0 < c--; ) U.o.xn(b);
		return b;
	};
	U.o.slice = function(b, c, d) {
		b = U.o.zl(b, c);
		typeof d === F && (b = U.o.bn(b, d - c));
		return b;
	};
	U.o.zm = function(b) {
		var c = [];
		U.g.Kn(b, c);
		return b.length != c.length;
	};
	U.o.Bn = function(b, c) {
		b = U.o.Za(b);
		c = U.g.repeat(b, typeof c === F ? c : b.length);
		c = U.o.product.apply(void 0, c);
		return U.o.filter(c, function(d) {
			return !U.o.zm(d);
		});
	};
	U.o.mt = function(b, c) {
		function d(g) {
			return e[g];
		}
		var e = U.o.Za(b);
		b = U.o.Od(e.length);
		c = U.o.Bn(b, c);
		var f = U.o.filter(c, function(g) {
			return U.g.yi(g);
		});
		c = new U.o.Iterator();
		c.next = function() {
			return U.g.map(f.next(), d);
		};
		return c;
	};
	U.o.nt = function(b, c) {
		function d(g) {
			return e[g];
		}
		var e = U.o.Za(b);
		b = U.g.Od(e.length);
		c = U.g.repeat(b, c);
		c = U.o.product.apply(void 0, c);
		var f = U.o.filter(c, function(g) {
			return U.g.yi(g);
		});
		c = new U.o.Iterator();
		c.next = function() {
			return U.g.map(f.next(), d);
		};
		return c;
	};
	U.P = {};
	U.P.Map = function(b, c) {
		this.Ca = {};
		this.Z = [];
		this.Sc = this.Y = 0;
		var d = arguments.length;
		if (1 < d) {
			if (d % 2) throw Error(ca);
			for (var e = 0; e < d; e += 2)
				this.set(arguments[e], arguments[e + 1]);
		} else b && this.addAll(b);
	};
	S = U.P.Map.prototype;
	S.sb = Q("Y");
	S.ea = function() {
		X(this);
		for (var b = [], c = 0; c < this.Z.length; c++)
			b.push(this.Ca[this.Z[c]]);
		return b;
	};
	S.ja = function() {
		X(this);
		return this.Z.concat();
	};
	S.Fb = function(b) {
		return U.P.Map.Kb(this.Ca, b);
	};
	S.Gb = function(b) {
		for (var c = 0; c < this.Z.length; c++) {
			var d = this.Z[c];
			if (U.P.Map.Kb(this.Ca, d) && this.Ca[d] == b) return !0;
		}
		return !1;
	};
	S.Ib = function(b, c) {
		if (this === b) return !0;
		if (this.Y != b.sb()) return !1;
		c = c || U.P.Map.Gl;
		X(this);
		for (var d, e = 0; (d = this.Z[e]); e++)
			if (!c(this.get(d), b.get(d))) return !1;
		return !0;
	};
	U.P.Map.Gl = function(b, c) {
		return b === c;
	};
	S = U.P.Map.prototype;
	S.Aa = function() {
		return 0 == this.Y;
	};
	S.clear = function() {
		this.Ca = {};
		this.Sc = this.Y = this.Z.length = 0;
	};
	S.remove = function(b) {
		return U.P.Map.Kb(this.Ca, b)
			? (delete this.Ca[b],
			  this.Y--,
			  this.Sc++,
			  this.Z.length > 2 * this.Y && X(this),
			  !0)
			: !1;
	};
	function X(b) {
		if (b.Y != b.Z.length) {
			for (var c = 0, d = 0; c < b.Z.length; ) {
				var e = b.Z[c];
				U.P.Map.Kb(b.Ca, e) && (b.Z[d++] = e);
				c++;
			}
			b.Z.length = d;
		}
		if (b.Y != b.Z.length) {
			var f = {};
			for (d = c = 0; c < b.Z.length; )
				(e = b.Z[c]),
					U.P.Map.Kb(f, e) || ((b.Z[d++] = e), (f[e] = 1)),
					c++;
			b.Z.length = d;
		}
	}
	S.get = function(b, c) {
		return U.P.Map.Kb(this.Ca, b) ? this.Ca[b] : c;
	};
	S.set = function(b, c) {
		U.P.Map.Kb(this.Ca, b) || (this.Y++, this.Z.push(b), this.Sc++);
		this.Ca[b] = c;
	};
	S.addAll = function(b) {
		if (b instanceof U.P.Map)
			for (var c = b.ja(), d = 0; d < c.length; d++)
				this.set(c[d], b.get(c[d]));
		else for (c in b) this.set(c, b[c]);
	};
	S.forEach = function(b, c) {
		for (var d = this.ja(), e = 0; e < d.length; e++) {
			var f = d[e],
				g = this.get(f);
			b.call(c, g, f, this);
		}
	};
	S.clone = function() {
		return new U.P.Map(this);
	};
	S.Eo = function() {
		for (var b = new U.P.Map(), c = 0; c < this.Z.length; c++) {
			var d = this.Z[c];
			b.set(this.Ca[d], d);
		}
		return b;
	};
	S.Co = function() {
		X(this);
		for (var b = {}, c = 0; c < this.Z.length; c++) {
			var d = this.Z[c];
			b[d] = this.Ca[d];
		}
		return b;
	};
	S.qe = function(b) {
		X(this);
		var c = 0,
			d = this.Sc,
			e = this,
			f = new U.o.Iterator();
		f.next = function() {
			if (d != e.Sc)
				throw Error(
					"The map has changed since the iterator was created"
				);
			if (c >= e.Z.length) throw U.o.sa;
			var g = e.Z[c++];
			return b ? g : e.Ca[g];
		};
		return f;
	};
	U.P.Map.Kb = function(b, c) {
		return Object.prototype.hasOwnProperty.call(b, c);
	};
	U.P.sb = function(b) {
		return b.sb && typeof b.sb == x
			? b.sb()
			: U.ka(b) || typeof b === K
			? b.length
			: U.object.sb(b);
	};
	U.P.ea = function(b) {
		if (b.ea && typeof b.ea == x) return b.ea();
		if (typeof b === K) return b.split("");
		if (U.ka(b)) {
			for (var c = [], d = b.length, e = 0; e < d; e++) c.push(b[e]);
			return c;
		}
		return U.object.ea(b);
	};
	U.P.ja = function(b) {
		if (b.ja && typeof b.ja == x) return b.ja();
		if (!b.ea || typeof b.ea != x) {
			if (U.ka(b) || typeof b === K) {
				var c = [];
				b = b.length;
				for (var d = 0; d < b; d++) c.push(d);
				return c;
			}
			return U.object.ja(b);
		}
	};
	U.P.contains = function(b, c) {
		return b.contains && typeof b.contains == x
			? b.contains(c)
			: b.Gb && typeof b.Gb == x
			? b.Gb(c)
			: U.ka(b) || typeof b === K
			? U.g.contains(b, c)
			: U.object.Gb(b, c);
	};
	U.P.Aa = function(b) {
		return b.Aa && typeof b.Aa == x
			? b.Aa()
			: U.ka(b) || typeof b === K
			? U.g.Aa(b)
			: U.object.Aa(b);
	};
	U.P.clear = function(b) {
		b.clear && typeof b.clear == x
			? b.clear()
			: U.ka(b)
			? U.g.clear(b)
			: U.object.clear(b);
	};
	U.P.forEach = function(b, c, d) {
		if (b.forEach && typeof b.forEach == x) b.forEach(c, d);
		else if (U.ka(b) || typeof b === K) U.g.forEach(b, c, d);
		else
			for (
				var e = U.P.ja(b), f = U.P.ea(b), g = f.length, k = 0;
				k < g;
				k++
			)
				c.call(d, f[k], e && e[k], b);
	};
	U.P.filter = function(b, c, d) {
		if (typeof b.filter == x) return b.filter(c, d);
		if (U.ka(b) || typeof b === K) return U.g.filter(b, c, d);
		var e = U.P.ja(b),
			f = U.P.ea(b),
			g = f.length;
		if (e) {
			var k = {};
			for (var h = 0; h < g; h++)
				c.call(d, f[h], e[h], b) && (k[e[h]] = f[h]);
		} else
			for (k = [], h = 0; h < g; h++)
				c.call(d, f[h], void 0, b) && k.push(f[h]);
		return k;
	};
	U.P.map = function(b, c, d) {
		if (typeof b.map == x) return b.map(c, d);
		if (U.ka(b) || typeof b === K) return U.g.map(b, c, d);
		var e = U.P.ja(b),
			f = U.P.ea(b),
			g = f.length;
		if (e) {
			var k = {};
			for (var h = 0; h < g; h++) k[e[h]] = c.call(d, f[h], e[h], b);
		} else
			for (k = [], h = 0; h < g; h++) k[h] = c.call(d, f[h], void 0, b);
		return k;
	};
	U.P.some = function(b, c, d) {
		if (typeof b.some == x) return b.some(c, d);
		if (U.ka(b) || typeof b === K) return U.g.some(b, c, d);
		for (var e = U.P.ja(b), f = U.P.ea(b), g = f.length, k = 0; k < g; k++)
			if (c.call(d, f[k], e && e[k], b)) return !0;
		return !1;
	};
	U.P.every = function(b, c, d) {
		if (typeof b.every == x) return b.every(c, d);
		if (U.ka(b) || typeof b === K) return U.g.every(b, c, d);
		for (var e = U.P.ja(b), f = U.P.ea(b), g = f.length, k = 0; k < g; k++)
			if (!c.call(d, f[k], e && e[k], b)) return !1;
		return !0;
	};
	U.uri = {};
	U.uri.l = {};
	U.uri.l.qc = { Gf: 38, EQUAL: 61, ik: 35, tk: 63 };
	U.uri.l.ve = function(b, c, d, e, f, g, k) {
		var h = "";
		b && (h += b + ":");
		d && ((h += "//"), c && (h += c + "@"), (h += d), e && (h += ":" + e));
		f && (h += f);
		g && (h += "?" + g);
		k && (h += "#" + k);
		return h;
	};
	U.uri.l.to = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
	U.uri.l.T = { Ub: 1, oe: 2, jb: 3, mb: 4, je: 5, ke: 6, $f: 7 };
	U.uri.l.split = function(b) {
		return b.match(U.uri.l.to);
	};
	U.uri.l.ld = function(b, c) {
		return b ? (c ? decodeURI(b) : decodeURIComponent(b)) : b;
	};
	U.uri.l.Zb = function(b, c) {
		return U.uri.l.split(c)[b] || null;
	};
	U.uri.l.Gc = function(b) {
		return U.uri.l.Zb(U.uri.l.T.Ub, b);
	};
	U.uri.l.Cu = function(b) {
		b = U.uri.l.Gc(b);
		!b &&
			U.global.self &&
			U.global.self.location &&
			((b = U.global.self.location.protocol),
			(b = b.substr(0, b.length - 1)));
		return b ? b.toLowerCase() : "";
	};
	U.uri.l.sm = function() {
		return U.uri.l.Zb(U.uri.l.T.oe, void 0);
	};
	U.uri.l.ud = function() {
		return U.uri.l.ld(U.uri.l.sm());
	};
	U.uri.l.em = function() {
		return U.uri.l.Zb(U.uri.l.T.jb, void 0);
	};
	U.uri.l.Fc = function() {
		return U.uri.l.ld(U.uri.l.em(), !0);
	};
	U.uri.l.sd = function() {
		return Number(U.uri.l.Zb(U.uri.l.T.mb, void 0)) || null;
	};
	U.uri.l.lm = function() {
		return U.uri.l.Zb(U.uri.l.T.je, void 0);
	};
	U.uri.l.$b = function() {
		return U.uri.l.ld(U.uri.l.lm(), !0);
	};
	U.uri.l.Ue = function() {
		return U.uri.l.Zb(U.uri.l.T.ke, void 0);
	};
	U.uri.l.hm = function() {
		var b = (void 0).indexOf("#");
		return 0 > b ? null : (void 0).substr(b + 1);
	};
	U.uri.l.Vw = function(b, c) {
		return U.uri.l.Ln(b) + (c ? "#" + c : "");
	};
	U.uri.l.qd = function() {
		return U.uri.l.ld(U.uri.l.hm());
	};
	U.uri.l.Eu = function(b) {
		b = U.uri.l.split(b);
		return U.uri.l.ve(
			b[U.uri.l.T.Ub],
			b[U.uri.l.T.oe],
			b[U.uri.l.T.jb],
			b[U.uri.l.T.mb]
		);
	};
	U.uri.l.Ju = function(b) {
		b = U.uri.l.split(b);
		return U.uri.l.ve(
			b[U.uri.l.T.Ub],
			null,
			b[U.uri.l.T.jb],
			b[U.uri.l.T.mb]
		);
	};
	U.uri.l.Nu = function(b) {
		b = U.uri.l.split(b);
		return U.uri.l.ve(
			null,
			null,
			null,
			null,
			b[U.uri.l.T.je],
			b[U.uri.l.T.ke],
			b[U.uri.l.T.$f]
		);
	};
	U.uri.l.Ln = function(b) {
		var c = b.indexOf("#");
		return 0 > c ? b : b.substr(0, c);
	};
	U.uri.l.Cm = function(b, c) {
		b = U.uri.l.split(b);
		c = U.uri.l.split(c);
		return (
			b[U.uri.l.T.jb] == c[U.uri.l.T.jb] &&
			b[U.uri.l.T.Ub] == c[U.uri.l.T.Ub] &&
			b[U.uri.l.T.mb] == c[U.uri.l.T.mb]
		);
	};
	U.uri.l.Ts = P();
	U.uri.l.zn = function(b, c) {
		if (b) {
			b = b.split("&");
			for (var d = 0; d < b.length; d++) {
				var e = b[d].indexOf("="),
					f = null;
				if (0 <= e) {
					var g = b[d].substring(0, e);
					f = b[d].substring(e + 1);
				} else g = b[d];
				c(g, f ? U.c.Yd(f) : "");
			}
		}
	};
	U.uri.l.fj = function(b) {
		var c = b.indexOf("#");
		0 > c && (c = b.length);
		var d = b.indexOf("?");
		if (0 > d || d > c) {
			d = c;
			var e = "";
		} else e = b.substring(d + 1, c);
		return [b.substr(0, d), e, b.substr(c)];
	};
	U.uri.l.Ei = function(b) {
		return b[0] + (b[1] ? "?" + b[1] : "") + b[2];
	};
	U.uri.l.Ag = function(b, c) {
		return c ? (b ? b + "&" + c : c) : b;
	};
	U.uri.l.se = function(b, c) {
		if (!c) return b;
		b = U.uri.l.fj(b);
		b[1] = U.uri.l.Ag(b[1], c);
		return U.uri.l.Ei(b);
	};
	U.uri.l.re = function(b, c, d) {
		if (U.isArray(c))
			for (var e = 0; e < c.length; e++) U.uri.l.re(b, String(c[e]), d);
		else null != c && d.push(b + ("" === c ? "" : "=" + U.c.Rc(c)));
	};
	U.uri.l.Kg = function(b, c) {
		var d = [];
		for (c = c || 0; c < b.length; c += 2) U.uri.l.re(b[c], b[c + 1], d);
		return d.join("&");
	};
	U.uri.l.Lg = function(b) {
		var c = [],
			d;
		for (d in b) U.uri.l.re(d, b[d], c);
		return c.join("&");
	};
	U.uri.l.Gs = function(b, c) {
		var d =
			2 == arguments.length
				? U.uri.l.Kg(arguments[1], 0)
				: U.uri.l.Kg(arguments, 1);
		return U.uri.l.se(b, d);
	};
	U.uri.l.Hs = function(b, c) {
		c = U.uri.l.Lg(c);
		return U.uri.l.se(b, c);
	};
	U.uri.l.Vk = function(b, c, d) {
		d = null != d ? "=" + U.c.Rc(d) : "";
		return U.uri.l.se(b, c + d);
	};
	U.uri.l.od = function(b, c, d, e) {
		for (var f = d.length; 0 <= (c = b.indexOf(d, c)) && c < e; ) {
			var g = b.charCodeAt(c - 1);
			if (g == U.uri.l.qc.Gf || g == U.uri.l.qc.tk)
				if (
					((g = b.charCodeAt(c + f)),
					!g ||
						g == U.uri.l.qc.EQUAL ||
						g == U.uri.l.qc.Gf ||
						g == U.uri.l.qc.ik)
				)
					return c;
			c += f + 1;
		}
		return -1;
	};
	U.uri.l.xd = /#|$/;
	U.uri.l.Yu = function(b, c) {
		return 0 <= U.uri.l.od(b, 0, c, b.search(U.uri.l.xd));
	};
	U.uri.l.Lu = function(b, c) {
		var d = b.search(U.uri.l.xd),
			e = U.uri.l.od(b, 0, c, d);
		if (0 > e) return null;
		var f = b.indexOf("&", e);
		if (0 > f || f > d) f = d;
		e += c.length + 1;
		return U.c.Yd(b.substr(e, f - e));
	};
	U.uri.l.Mu = function(b, c) {
		for (
			var d = b.search(U.uri.l.xd), e = 0, f, g = [];
			0 <= (f = U.uri.l.od(b, e, c, d));

		) {
			e = b.indexOf("&", f);
			if (0 > e || e > d) e = d;
			f += c.length + 1;
			g.push(U.c.Yd(b.substr(f, e - f)));
		}
		return g;
	};
	U.uri.l.Do = /[?&]($|#)/;
	U.uri.l.Mn = function(b, c) {
		for (
			var d = b.search(U.uri.l.xd), e = 0, f, g = [];
			0 <= (f = U.uri.l.od(b, e, c, d));

		)
			g.push(b.substring(e, f)),
				(e = Math.min(b.indexOf("&", f) + 1 || d, d));
		g.push(b.substr(e));
		return g.join("").replace(U.uri.l.Do, "$1");
	};
	U.uri.l.mo = function(b) {
		var c = U.uri.l.rg.pg,
			d = U.c.Ph();
		return U.uri.l.Vk(U.uri.l.Mn(b, c), c, d);
	};
	U.uri.l.dx = function(b, c) {
		b = U.uri.l.fj(b);
		var d = b[1],
			e = [];
		d &&
			U.g.forEach(d.split("&"), function(f) {
				var g = f.indexOf("=");
				c.hasOwnProperty(0 <= g ? f.substr(0, g) : f) || e.push(f);
			});
		b[1] = U.uri.l.Ag(e.join("&"), U.uri.l.Lg(c));
		return U.uri.l.Ei(b);
	};
	U.uri.l.Is = function(b, c) {
		U.c.endsWith(b, "/") && (b = b.substr(0, b.length - 1));
		U.c.startsWith(c, "/") && (c = c.substr(1));
		return U.c.rl(b, "/", c);
	};
	U.uri.l.Qc = function(b) {
		U.uri.l.split(b);
	};
	U.uri.l.rg = { pg: "zx" };
	U.uri.l.qn = function(b) {
		return U.uri.l.mo(b);
	};
	U.J = function(b, c) {
		this.fb = this.Ef = this.lc = "";
		this.Hd = null;
		this.He = this.Gd = "";
		this.La = this.Tm = !1;
		var d;
		b instanceof U.J
			? ((this.La = void 0 !== c ? c : b.La),
			  Sa(this, b.Gc()),
			  Ta(this, b.ud()),
			  Ua(this, b.Fc()),
			  Va(this, b.sd()),
			  this.Qc(b.$b()),
			  Wa(this, b.Ue().clone()),
			  Xa(this, b.qd()))
			: b && (d = U.uri.l.split(String(b)))
			? ((this.La = !!c),
			  Sa(this, d[U.uri.l.T.Ub] || "", !0),
			  Ta(this, d[U.uri.l.T.oe] || "", !0),
			  Ua(this, d[U.uri.l.T.jb] || "", !0),
			  Va(this, d[U.uri.l.T.mb]),
			  this.Qc(d[U.uri.l.T.je] || "", !0),
			  Wa(this, d[U.uri.l.T.ke] || "", !0),
			  Xa(this, d[U.uri.l.T.$f] || "", !0))
			: ((this.La = !!c), (this.Na = new U.J.Ya(null, this.La)));
	};
	U.J.uk = U.uri.l.rg.pg;
	S = U.J.prototype;
	S.toString = function() {
		var b = [],
			c = this.Gc();
		c && b.push(U.J.Ac(c, U.J.Ti, !0), ":");
		var d = this.Fc();
		if (d || "file" == c)
			b.push("//"),
				(c = this.ud()) && b.push(U.J.Ac(c, U.J.Ti, !0), "@"),
				b.push(U.J.Ui(U.c.Rc(d))),
				(d = this.sd()),
				null != d && b.push(":", String(d));
		if ((d = this.$b()))
			this.fb && "/" != d.charAt(0) && b.push("/"),
				b.push(U.J.Ac(d, "/" == d.charAt(0) ? U.J.Fn : U.J.In, !0));
		(d = this.Na.toString()) && b.push("?", d);
		(d = this.qd()) && b.push("#", U.J.Ac(d, U.J.Gn));
		return b.join("");
	};
	S.resolve = function(b) {
		var c = this.clone(),
			d = !!b.lc;
		d ? Sa(c, b.Gc()) : (d = !!b.Ef);
		d ? Ta(c, b.ud()) : (d = !!b.fb);
		d ? Ua(c, b.Fc()) : (d = null != b.Hd);
		var e = b.$b();
		if (d) Va(c, b.sd());
		else if ((d = !!b.Gd)) {
			if ("/" != e.charAt(0))
				if (this.fb && !this.Gd) e = "/" + e;
				else {
					var f = c.$b().lastIndexOf("/");
					-1 != f && (e = c.$b().substr(0, f + 1) + e);
				}
			e = U.J.Jn(e);
		}
		d ? c.Qc(e) : (d = "" !== b.Na.toString());
		d ? Wa(c, b.Ue().clone()) : (d = !!b.He);
		d && Xa(c, b.qd());
		return c;
	};
	S.clone = function() {
		return new U.J(this);
	};
	S.Gc = Q("lc");
	function Sa(b, c, d) {
		Y(b);
		b.lc = d ? U.J.zc(c, !0) : c;
		b.lc && (b.lc = b.lc.replace(/:$/, ""));
	}
	S.ud = Q("Ef");
	function Ta(b, c, d) {
		Y(b);
		b.Ef = d ? U.J.zc(c) : c;
	}
	S.Fc = Q("fb");
	function Ua(b, c, d) {
		Y(b);
		b.fb = d ? U.J.zc(c, !0) : c;
	}
	S.sd = Q("Hd");
	function Va(b, c) {
		Y(b);
		if (c) {
			c = Number(c);
			if (isNaN(c) || 0 > c) throw Error("Bad port number " + c);
			b.Hd = c;
		} else b.Hd = null;
	}
	S.$b = Q("Gd");
	S.Qc = function(b, c) {
		Y(this);
		this.Gd = c ? U.J.zc(b, !0) : b;
	};
	function Wa(b, c, d) {
		Y(b);
		c instanceof U.J.Ya
			? ((b.Na = c), b.Na.tf(b.La))
			: (d || (c = U.J.Ac(c, U.J.Hn)), (b.Na = new U.J.Ya(c, b.La)));
	}
	S.Ue = Q("Na");
	S.getQuery = function() {
		return this.Na.toString();
	};
	S.qd = Q("He");
	function Xa(b, c, d) {
		Y(b);
		b.He = d ? U.J.zc(c) : c;
	}
	S.qn = function() {
		Y(this);
		var b = U.J.uk,
			c = U.c.Ph();
		Y(this);
		this.Na.set(b, c);
		return this;
	};
	S.removeParameter = function(b) {
		Y(this);
		this.Na.remove(b);
		return this;
	};
	function Y(b) {
		if (b.Tm) throw Error("Tried to modify a read-only Uri");
	}
	S.tf = function(b) {
		this.La = b;
		this.Na && this.Na.tf(b);
	};
	U.J.parse = function(b, c) {
		return b instanceof U.J ? b.clone() : new U.J(b, c);
	};
	U.J.create = function(b, c, d, e, f, g, k, h) {
		h = new U.J(null, h);
		b && Sa(h, b);
		c && Ta(h, c);
		d && Ua(h, d);
		e && Va(h, e);
		f && h.Qc(f);
		g && Wa(h, g);
		k && Xa(h, k);
		return h;
	};
	U.J.resolve = function(b, c) {
		b instanceof U.J || (b = U.J.parse(b));
		c instanceof U.J || (c = U.J.parse(c));
		return b.resolve(c);
	};
	U.J.Jn = function(b) {
		if (".." == b || "." == b) return "";
		if (U.c.contains(b, "./") || U.c.contains(b, "/.")) {
			var c = U.c.startsWith(b, "/");
			b = b.split("/");
			for (var d = [], e = 0; e < b.length; ) {
				var f = b[e++];
				"." == f
					? c && e == b.length && d.push("")
					: ".." == f
					? ((1 < d.length || (1 == d.length && "" != d[0])) &&
							d.pop(),
					  c && e == b.length && d.push(""))
					: (d.push(f), (c = !0));
			}
			return d.join("/");
		}
		return b;
	};
	U.J.zc = function(b, c) {
		return b
			? c
				? decodeURI(b.replace(/%25/g, "%2525"))
				: decodeURIComponent(b)
			: "";
	};
	U.J.Ac = function(b, c, d) {
		return typeof b === K
			? ((b = encodeURI(b).replace(c, U.J.Nl)), d && (b = U.J.Ui(b)), b)
			: null;
	};
	U.J.Nl = function(b) {
		b = b.charCodeAt(0);
		return "%" + ((b >> 4) & 15).toString(16) + (b & 15).toString(16);
	};
	U.J.Ui = function(b) {
		return b.replace(/%25([0-9a-fA-F]{2})/g, "%$1");
	};
	U.J.Ti = /[#\/\?@]/g;
	U.J.In = /[#\?:]/g;
	U.J.Fn = /[#\?]/g;
	U.J.Hn = /[#\?@]/g;
	U.J.Gn = /#/g;
	U.J.Cm = function(b, c) {
		b = U.uri.l.split(b);
		c = U.uri.l.split(c);
		return (
			b[U.uri.l.T.jb] == c[U.uri.l.T.jb] &&
			b[U.uri.l.T.mb] == c[U.uri.l.T.mb]
		);
	};
	U.J.Ya = function(b, c) {
		this.Y = this.ba = null;
		this.Ja = b || null;
		this.La = !!c;
	};
	function Z(b) {
		b.ba ||
			((b.ba = new U.P.Map()),
			(b.Y = 0),
			b.Ja &&
				U.uri.l.zn(b.Ja, function(c, d) {
					b.add(U.c.Yd(c), d);
				}));
	}
	U.J.Ya.xt = function(b, c, d) {
		c = U.P.ja(b);
		if ("undefined" == typeof c) throw Error("Keys are undefined");
		d = new U.J.Ya(null, d);
		b = U.P.ea(b);
		for (var e = 0; e < c.length; e++) {
			var f = c[e],
				g = b[e];
			U.isArray(g) ? Ya(d, f, g) : d.add(f, g);
		}
		return d;
	};
	U.J.Ya.wt = function(b, c, d, e) {
		if (b.length != c.length)
			throw Error("Mismatched lengths for keys/values");
		d = new U.J.Ya(null, e);
		for (e = 0; e < b.length; e++) d.add(b[e], c[e]);
		return d;
	};
	S = U.J.Ya.prototype;
	S.sb = function() {
		Z(this);
		return this.Y;
	};
	S.add = function(b, c) {
		Z(this);
		this.Ja = null;
		b = Za(this, b);
		var d = this.ba.get(b);
		d || this.ba.set(b, (d = []));
		d.push(c);
		this.Y += 1;
		return this;
	};
	S.remove = function(b) {
		Z(this);
		b = Za(this, b);
		return this.ba.Fb(b)
			? ((this.Ja = null),
			  (this.Y -= this.ba.get(b).length),
			  this.ba.remove(b))
			: !1;
	};
	S.clear = function() {
		this.ba = this.Ja = null;
		this.Y = 0;
	};
	S.Aa = function() {
		Z(this);
		return 0 == this.Y;
	};
	S.Fb = function(b) {
		Z(this);
		b = Za(this, b);
		return this.ba.Fb(b);
	};
	S.Gb = function(b) {
		var c = this.ea();
		return U.g.contains(c, b);
	};
	S.forEach = function(b, c) {
		Z(this);
		this.ba.forEach(function(d, e) {
			U.g.forEach(
				d,
				function(f) {
					b.call(c, f, e, this);
				},
				this
			);
		}, this);
	};
	S.ja = function() {
		Z(this);
		for (
			var b = this.ba.ea(), c = this.ba.ja(), d = [], e = 0;
			e < c.length;
			e++
		)
			for (var f = b[e], g = 0; g < f.length; g++) d.push(c[e]);
		return d;
	};
	S.ea = function(b) {
		Z(this);
		var c = [];
		if (typeof b === K)
			this.Fb(b) && (c = U.g.concat(c, this.ba.get(Za(this, b))));
		else {
			b = this.ba.ea();
			for (var d = 0; d < b.length; d++) c = U.g.concat(c, b[d]);
		}
		return c;
	};
	S.set = function(b, c) {
		Z(this);
		this.Ja = null;
		b = Za(this, b);
		this.Fb(b) && (this.Y -= this.ba.get(b).length);
		this.ba.set(b, [c]);
		this.Y += 1;
		return this;
	};
	S.get = function(b, c) {
		if (!b) return c;
		b = this.ea(b);
		return 0 < b.length ? String(b[0]) : c;
	};
	function Ya(b, c, d) {
		b.remove(c);
		0 < d.length &&
			((b.Ja = null),
			b.ba.set(Za(b, c), U.g.clone(d)),
			(b.Y += d.length));
	}
	S.toString = function() {
		if (this.Ja) return this.Ja;
		if (!this.ba) return "";
		for (var b = [], c = this.ba.ja(), d = 0; d < c.length; d++) {
			var e = c[d],
				f = U.c.Rc(e);
			e = this.ea(e);
			for (var g = 0; g < e.length; g++) {
				var k = f;
				"" !== e[g] && (k += "=" + U.c.Rc(e[g]));
				b.push(k);
			}
		}
		return (this.Ja = b.join("&"));
	};
	S.clone = function() {
		var b = new U.J.Ya();
		b.Ja = this.Ja;
		this.ba && ((b.ba = this.ba.clone()), (b.Y = this.Y));
		return b;
	};
	function Za(b, c) {
		c = String(c);
		b.La && (c = c.toLowerCase());
		return c;
	}
	S.tf = function(b) {
		b &&
			!this.La &&
			(Z(this),
			(this.Ja = null),
			this.ba.forEach(function(c, d) {
				var e = d.toLowerCase();
				d != e && (this.remove(d), Ya(this, e, c));
			}, this));
		this.La = b;
	};
	S.extend = function(b) {
		for (var c = 0; c < arguments.length; c++)
			U.P.forEach(
				arguments[c],
				function(d, e) {
					this.add(e, d);
				},
				this
			);
	};
	google.v.w.H = {};
	google.v.w.H.Fm = function() {
		google.v.w.H.df = null;
		google.v.w.H.yc = null;
		google.v.w.H.uj = null;
		google.v.w.H.Ul();
		var b = document.getElementsByTagName(ra);
		b = b[b.length - 1].getAttribute("src");
		b = new U.J(b);
		var c = b.Fc();
		c = c.match(/^www\.gstatic\.cn/) ? "gstatic.cn" : "gstatic.com";
		google.v.w.H.fb = c;
		b = new U.J.Ya(b.Na.toString());
		google.v.w.H.Dn(b.get("callback"));
		google.v.w.H.Cn(b.get("autoload"));
	};
	google.v.w.H.En = function() {
		google.v.w.H.fb
			? console.warn(
					"Google Charts loader.js should only be loaded once."
			  )
			: google.v.w.H.Fm();
	};
	google.v.w.H.rn = function(b) {
		var c = b,
			d = b.match(/^testing-/);
		d && (c = c.replace(/^testing-/, ""));
		b = c;
		do {
			if (c === google.v.w.yg[c])
				throw Error("Infinite loop in version mapping: " + c);
			var e = google.v.w.yg[c];
			e && (c = e);
		} while (e);
		d = (d ? "testing-" : "") + c;
		return { version: c == pa ? b : d, kn: d };
	};
	google.v.w.H.jn = function(b) {
		var c = google.v.w.Uj.On[google.v.w.H.fb].loader,
			d = google.v.w.H.rn(b);
		return google.v.w.Ha.load(c, { version: d.kn }).then(function() {
			var e =
				U.Jb("google.charts.loader.VersionSpecific.load") ||
				U.Jb("google.charts.loader.publicLoad") ||
				U.Jb("google.charts.versionSpecific.load");
			if (!e) throw Error("Bad version: " + b);
			google.v.w.H.uj = function(f) {
				f = e(d.version, f);
				if (null == f || null == f.then) {
					var g =
						U.Jb("google.charts.loader.publicSetOnLoadCallback") ||
						U.Jb("google.charts.versionSpecific.setOnLoadCallback");
					f = new Promise(function(k) {
						g(k);
					});
					f.then = g;
				}
				return f;
			};
		});
	};
	google.v.w.H.fn = function(b, c) {
		c.domain = google.v.w.H.fb;
		if (!google.v.w.H.df) {
			if (c.enableUrlSettings && window.URLSearchParams)
				try {
					b =
						new URLSearchParams(top.location.search).get(
							"charts-version"
						) || b;
				} catch (d) {
					console.info(
						"Failed to get charts-version from top URL",
						d
					);
				}
			google.v.w.H.df = google.v.w.H.jn(b);
		}
		return (google.v.w.H.yc = google.v.w.H.df.then(function() {
			return google.v.w.H.uj(c);
		}));
	};
	google.v.w.H.lo = function(b) {
		if (!google.v.w.H.yc)
			throw Error(
				"Must call google.charts.load before google.charts.setOnLoadCallback"
			);
		return b ? google.v.w.H.yc.then(b) : google.v.w.H.yc;
	};
	google.v.load = function(b) {
		for (var c = [], d = 0; d < arguments.length; ++d)
			c[d - 0] = arguments[d];
		d = 0;
		"visualization" === c[d] && d++;
		var e = "current";
		typeof c[d] === K && ((e = c[d]), d++);
		var f = {};
		U.Ba(c[d]) && (f = c[d]);
		return google.v.w.H.fn(e, f);
	};
	U.Cc("google.charts.load", google.v.load);
	google.v.dj = google.v.w.H.lo;
	U.Cc("google.charts.setOnLoadCallback", google.v.dj);
	google.v.w.H.pk = U.c.F.from(
		"https://maps.googleapis.com/maps/api/js?jsapiRedirect=true&key=%{key}&v=%{version}&libraries=%{libraries}"
	);
	google.v.w.H.qk = U.c.F.from(
		"https://maps-api-ssl.google.com/maps?jsapiRedirect=true&file=googleapi&key=%{key}&v=%{version}&libraries=%{libraries}"
	);
	google.v.w.H.gn = function(b, c, d) {
		console.warn("Loading Maps API with the jsapi loader is deprecated.");
		d = d || {};
		b = google.v.w.H.Cd(d.callback);
		google.v.w.Ha.load("2" === c ? google.v.w.H.qk : google.v.w.H.pk, {
			key: d.key || d.client || "",
			version: c || "",
			libraries: d.libraries || ""
		}).then(b);
	};
	google.v.w.H.eg = U.c.F.from(
		"https://www.gstatic.com/inputtools/js/ita/inputtools_3.js"
	);
	google.v.w.H.en = function(b, c, d) {
		U.Ba(d) && d.packages
			? (U.isArray(d.packages) ? d.packages : [d.packages]).includes(
					"inputtools"
			  )
				? (console.warn(
						"Loading Input Tools with the jsapi loader is deprecated.\nPlease load " +
							(google.v.w.H.eg + " directly.")
				  ),
				  (b = google.v.w.H.Cd(d.callback)),
				  google.v.w.Ha.load(google.v.w.H.eg, {}).then(b))
				: console.error(
						"Loading elements other than inputtools with the jsapi loader is unsupported."
				  )
			: console.error(
					"google.load of elements was invoked without specifying packages"
			  );
	};
	google.v.w.H.hk = U.c.F.from(
		"https://ajax.googleapis.com/ajax/libs/%{module}/%{version}/%{file}"
	);
	google.v.w.H.Gi = function(b, c, d) {
		var e = google.v.w.gg.vm[b];
		if (!e) throw Error('Module "' + b + '" is not supported.');
		var f = e.aliases;
		c = (function(h) {
			var m;
			do {
				if (h === f[h])
					throw Error(
						"Infinite loop in version mapping for version " + h
					);
				(m = f[h]) && (h = m);
			} while (m);
			return h;
		})(c);
		if (!e.versions[c])
			throw Error("Unknown version, " + c + ", of " + b + ".");
		var g = google.v.w.H.hk,
			k = { module: b, version: c || "", file: e.versions[c].compressed };
		c = U.b.I.D(google.v.w.Ha.Th({ format: g, Dg: k }));
		console.warn(
			"Loading modules with the jsapi loader is deprecated.\nPlease load " +
				(b + " directly from " + c + ".")
		);
		google.v.w.H.yc = new Promise(function(h) {
			var m = google.v.w.H.Cd(d && d.callback);
			google.v.w.Ha.load(g, k)
				.then(m)
				.then(h);
		});
	};
	google.v.w.H.Cd = function(b) {
		return function() {
			if (typeof b === K && "" !== b)
				try {
					U.Jb(b)();
				} catch (c) {
					throw Error("Callback failed with: " + c);
				}
		};
	};
	google.v.w.H.Zh = function(b) {
		for (var c = [], d = 0; d < arguments.length; ++d)
			c[d - 0] = arguments[d];
		switch (c[0]) {
			case "maps":
				google.v.w.H.gn.apply(google.v.w.H, T.cd(c));
				break;
			case "elements":
				google.v.w.H.en.apply(google.v.w.H, T.cd(c));
				break;
			case "visualization":
				google.v.load.apply(google.v, T.cd(c));
				break;
			default:
				google.v.w.H.Gi.apply(google.v.w.H, T.cd(c));
		}
	};
	google.v.w.H.Dn = function(b) {
		typeof b === K &&
			((b = google.v.w.H.Cd(b)), google.v.w.ha.Ci().then(b));
	};
	google.v.w.H.Cn = function(b) {
		if (typeof b === K)
			try {
				if ("" !== b)
					for (
						var c = JSON.parse(b).modules,
							d = T.Dd(c),
							e = d.next();
						!e.done;
						e = d.next()
					) {
						var f = e.value;
						google.v.w.H.Zh(f.name, f.version, f);
					}
			} catch (g) {
				throw Error("Autoload failed with: " + g);
			}
	};
	google.v.w.H.Ul = function() {
		U.Jb("google.load") ||
			(U.Cc("google.load", google.v.w.H.Zh),
			U.Cc("google.setOnLoadCallback", google.v.dj));
	};
	google.v.w.H.En();
}.call(this));
