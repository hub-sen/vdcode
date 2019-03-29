webpackJsonp([83], {
    "07k+": function (t, e, n) {
        for (var r, o = n("OzIq"), a = n("2p1q"), i = n("ulTY"), c = i("typed_array"), l = i("view"), u = !(!o.ArrayBuffer || !o.DataView), s = u, f = 0, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;)(r = o[d[f++]]) ? (a(r.prototype, c, !0), a(r.prototype, l, !0)) : s = !1;
        t.exports = {
            ABV: u,
            CONSTR: s,
            TYPED: c,
            VIEW: l
        }
    },
    "0j8E": function (t, e, n) {
        n("UOfM")
    },
    181: function (t, e, n) {
        n("KgxC"), t.exports = n("4sWz")
    },
    "4sWz": function (t, e, n) {
        n("oa7v"), n("0j8E"), n("bIYr");
        var r = (n("v/me"), n("fNiO")),
            o = (n("Y0of"), n("7t+N")),
            a = n("8K14");
        r.windowLoaded(function () {
            a.runIfPossible({
                target: o("#js-animation"),
                backgroundImage: o(".home-page-header__image"),
                width: 1300,
                height: 800
            })
        })
    },
    "7+TS": function (t, e) {},
    "77Ug": function (t, e, n) {
        "use strict";
        if (n("bUqO")) {
            var r = n("V3l/"),
                o = n("OzIq"),
                a = n("zgIt"),
                i = n("Ds5P"),
                c = n("07k+"),
                l = n("LrcN"),
                u = n("rFzY"),
                s = n("9GpA"),
                f = n("fU25"),
                d = n("2p1q"),
                p = n("A16L"),
                h = n("oeih"),
                g = n("BbyF"),
                m = n("8D8H"),
                y = n("zo/l"),
                v = n("s4j0"),
                x = n("WBcL"),
                M = n("wC1N"),
                w = n("UKM+"),
                I = n("FryR"),
                b = n("9vb1"),
                A = n("7ylX"),
                E = n("KOrd"),
                R = n("WcO1").f,
                _ = n("SHe9"),
                T = n("ulTY"),
                S = n("kkCw"),
                C = n("LhTa"),
                L = n("ot5s"),
                U = n("7O1s"),
                F = n("WgSQ"),
                P = n("bN1p"),
                D = n("qkyc"),
                B = n("CEne"),
                W = n("zCYm"),
                O = n("DPsE"),
                z = n("lDLk"),
                V = n("x9zv"),
                N = z.f,
                G = V.f,
                k = o.RangeError,
                X = o.TypeError,
                Y = o.Uint8Array,
                H = Array.prototype,
                q = l.ArrayBuffer,
                j = l.DataView,
                K = C(0),
                Z = C(2),
                J = C(3),
                Q = C(4),
                $ = C(5),
                tt = C(6),
                et = L(!0),
                nt = L(!1),
                rt = F.values,
                ot = F.keys,
                at = F.entries,
                it = H.lastIndexOf,
                ct = H.reduce,
                lt = H.reduceRight,
                ut = H.join,
                st = H.sort,
                ft = H.slice,
                dt = H.toString,
                pt = H.toLocaleString,
                ht = S("iterator"),
                gt = S("toStringTag"),
                mt = T("typed_constructor"),
                yt = T("def_constructor"),
                vt = c.CONSTR,
                xt = c.TYPED,
                Mt = c.VIEW,
                wt = C(1, function (t, e) {
                    return Rt(U(t, t[yt]), e)
                }),
                It = a(function () {
                    return 1 === new Y(new Uint16Array([1]).buffer)[0]
                }),
                bt = !!Y && !!Y.prototype.set && a(function () {
                    new Y(1).set({})
                }),
                At = function (t, e) {
                    var n = h(t);
                    if (n < 0 || n % e) throw k("Wrong offset!");
                    return n
                },
                Et = function (t) {
                    if (w(t) && xt in t) return t;
                    throw X(t + " is not a typed array!")
                },
                Rt = function (t, e) {
                    if (!(w(t) && mt in t)) throw X("It is not a typed array constructor!");
                    return new t(e)
                },
                _t = function (t, e) {
                    return Tt(U(t, t[yt]), e)
                },
                Tt = function (t, e) {
                    for (var n = 0, r = e.length, o = Rt(t, r); r > n;) o[n] = e[n++];
                    return o
                },
                St = function (t, e, n) {
                    N(t, e, {
                        get: function () {
                            return this._d[n]
                        }
                    })
                },
                Ct = function (t) {
                    var e, n, r, o, a, i, c = I(t),
                        l = arguments.length,
                        s = l > 1 ? arguments[1] : void 0,
                        f = void 0 !== s,
                        d = _(c);
                    if (void 0 != d && !b(d)) {
                        for (i = d.call(c), r = [], e = 0; !(a = i.next()).done; e++) r.push(a.value);
                        c = r
                    }
                    for (f && l > 2 && (s = u(s, arguments[2], 2)), e = 0, n = g(c.length), o = Rt(this, n); n > e; e++) o[e] = f ? s(c[e], e) : c[e];
                    return o
                },
                Lt = function () {
                    for (var t = 0, e = arguments.length, n = Rt(this, e); e > t;) n[t] = arguments[t++];
                    return n
                },
                Ut = !!Y && a(function () {
                    pt.call(new Y(1))
                }),
                Ft = function () {
                    return pt.apply(Ut ? ft.call(Et(this)) : Et(this), arguments)
                },
                Pt = {
                    copyWithin: function (t, e) {
                        return O.call(Et(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
                    },
                    every: function (t) {
                        return Q(Et(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    fill: function (t) {
                        return W.apply(Et(this), arguments)
                    },
                    filter: function (t) {
                        return _t(this, Z(Et(this), t, arguments.length > 1 ? arguments[1] : void 0))
                    },
                    find: function (t) {
                        return $(Et(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    findIndex: function (t) {
                        return tt(Et(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    forEach: function (t) {
                        K(Et(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    indexOf: function (t) {
                        return nt(Et(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    includes: function (t) {
                        return et(Et(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    join: function (t) {
                        return ut.apply(Et(this), arguments)
                    },
                    lastIndexOf: function (t) {
                        return it.apply(Et(this), arguments)
                    },
                    map: function (t) {
                        return wt(Et(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    reduce: function (t) {
                        return ct.apply(Et(this), arguments)
                    },
                    reduceRight: function (t) {
                        return lt.apply(Et(this), arguments)
                    },
                    reverse: function () {
                        for (var t, e = this, n = Et(e).length, r = Math.floor(n / 2), o = 0; o < r;) t = e[o], e[o++] = e[--n], e[n] = t;
                        return e
                    },
                    some: function (t) {
                        return J(Et(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    sort: function (t) {
                        return st.call(Et(this), t)
                    },
                    subarray: function (t, e) {
                        var n = Et(this),
                            r = n.length,
                            o = y(t, r);
                        return new(U(n, n[yt]))(n.buffer, n.byteOffset + o * n.BYTES_PER_ELEMENT, g((void 0 === e ? r : y(e, r)) - o))
                    }
                },
                Dt = function (t, e) {
                    return _t(this, ft.call(Et(this), t, e))
                },
                Bt = function (t) {
                    Et(this);
                    var e = At(arguments[1], 1),
                        n = this.length,
                        r = I(t),
                        o = g(r.length),
                        a = 0;
                    if (o + e > n) throw k("Wrong length!");
                    for (; a < o;) this[e + a] = r[a++]
                },
                Wt = {
                    entries: function () {
                        return at.call(Et(this))
                    },
                    keys: function () {
                        return ot.call(Et(this))
                    },
                    values: function () {
                        return rt.call(Et(this))
                    }
                },
                Ot = function (t, e) {
                    return w(t) && t[xt] && "symbol" != typeof e && e in t && String(+e) == String(e)
                },
                zt = function (t, e) {
                    return Ot(t, e = v(e, !0)) ? f(2, t[e]) : G(t, e)
                },
                Vt = function (t, e, n) {
                    return !(Ot(t, e = v(e, !0)) && w(n) && x(n, "value")) || x(n, "get") || x(n, "set") || n.configurable || x(n, "writable") && !n.writable || x(n, "enumerable") && !n.enumerable ? N(t, e, n) : (t[e] = n.value, t)
                };
            vt || (V.f = zt, z.f = Vt), i(i.S + i.F * !vt, "Object", {
                getOwnPropertyDescriptor: zt,
                defineProperty: Vt
            }), a(function () {
                dt.call({})
            }) && (dt = pt = function () {
                return ut.call(this)
            });
            var Nt = p({}, Pt);
            p(Nt, Wt), d(Nt, ht, Wt.values), p(Nt, {
                slice: Dt,
                set: Bt,
                constructor: function () {},
                toString: dt,
                toLocaleString: Ft
            }), St(Nt, "buffer", "b"), St(Nt, "byteOffset", "o"), St(Nt, "byteLength", "l"), St(Nt, "length", "e"), N(Nt, gt, {
                get: function () {
                    return this[xt]
                }
            }), t.exports = function (t, e, n, l) {
                l = !!l;
                var u = t + (l ? "Clamped" : "") + "Array",
                    f = "get" + t,
                    p = "set" + t,
                    h = o[u],
                    y = h || {},
                    v = h && E(h),
                    x = !h || !c.ABV,
                    I = {},
                    b = h && h.prototype,
                    _ = function (t, n) {
                        var r = t._d;
                        return r.v[f](n * e + r.o, It)
                    },
                    T = function (t, n, r) {
                        var o = t._d;
                        l && (r = (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), o.v[p](n * e + o.o, r, It)
                    },
                    S = function (t, e) {
                        N(t, e, {
                            get: function () {
                                return _(this, e)
                            },
                            set: function (t) {
                                return T(this, e, t)
                            },
                            enumerable: !0
                        })
                    };
                x ? (h = n(function (t, n, r, o) {
                    s(t, h, u, "_d");
                    var a, i, c, l, f = 0,
                        p = 0;
                    if (w(n)) {
                        if (!(n instanceof q || "ArrayBuffer" == (l = M(n)) || "SharedArrayBuffer" == l)) return xt in n ? Tt(h, n) : Ct.call(h, n);
                        a = n, p = At(r, e);
                        var y = n.byteLength;
                        if (void 0 === o) {
                            if (y % e) throw k("Wrong length!");
                            if ((i = y - p) < 0) throw k("Wrong length!")
                        } else if ((i = g(o) * e) + p > y) throw k("Wrong length!");
                        c = i / e
                    } else c = m(n), i = c * e, a = new q(i);
                    for (d(t, "_d", {
                            b: a,
                            o: p,
                            l: i,
                            e: c,
                            v: new j(a)
                        }); f < c;) S(t, f++)
                }), b = h.prototype = A(Nt), d(b, "constructor", h)) : a(function () {
                    h(1)
                }) && a(function () {
                    new h(-1)
                }) && D(function (t) {
                    new h, new h(null), new h(1.5), new h(t)
                }, !0) || (h = n(function (t, n, r, o) {
                    s(t, h, u);
                    var a;
                    return w(n) ? n instanceof q || "ArrayBuffer" == (a = M(n)) || "SharedArrayBuffer" == a ? void 0 !== o ? new y(n, At(r, e), o) : void 0 !== r ? new y(n, At(r, e)) : new y(n) : xt in n ? Tt(h, n) : Ct.call(h, n) : new y(m(n))
                }), K(v !== Function.prototype ? R(y).concat(R(v)) : R(y), function (t) {
                    t in h || d(h, t, y[t])
                }), h.prototype = b, r || (b.constructor = h));
                var C = b[ht],
                    L = !!C && ("values" == C.name || void 0 == C.name),
                    U = Wt.values;
                d(h, mt, !0), d(b, xt, u), d(b, Mt, !0), d(b, yt, h), (l ? new h(1)[gt] == u : gt in b) || N(b, gt, {
                    get: function () {
                        return u
                    }
                }), I[u] = h, i(i.G + i.W + i.F * (h != y), I), i(i.S, u, {
                    BYTES_PER_ELEMENT: e
                }), i(i.S + i.F * a(function () {
                    y.of.call(h, 1)
                }), u, {
                    from: Ct,
                    of: Lt
                }), "BYTES_PER_ELEMENT" in b || d(b, "BYTES_PER_ELEMENT", e), i(i.P, u, Pt), B(u), i(i.P + i.F * bt, u, {
                    set: Bt
                }), i(i.P + i.F * !L, u, Wt), r || b.toString == dt || (b.toString = dt), i(i.P + i.F * a(function () {
                    new h(1).slice()
                }), u, {
                    slice: Dt
                }), i(i.P + i.F * (a(function () {
                    return [1, 2].toLocaleString() != new h([1, 2]).toLocaleString()
                }) || !a(function () {
                    b.toLocaleString.call([1, 2])
                })), u, {
                    toLocaleString: Ft
                }), P[u] = L ? C : U, r || L || d(b, ht, U)
            }
        } else t.exports = function () {}
    },
    "8D8H": function (t, e, n) {
        var r = n("oeih"),
            o = n("BbyF");
        t.exports = function (t) {
            if (void 0 === t) return 0;
            var e = r(t),
                n = o(e);
            if (e !== n) throw RangeError("Wrong length!");
            return n
        }
    },
    "8K14": function (t, e, n) {
        function r(t) {
            function e() {
                r.css("opacity", "1"), a.css("opacity", "0"), n("aFbl")(r.get(0), i, c)
            }
            var r = t.target,
                a = t.backgroundImage,
                i = t.width,
                c = t.height;
            o({
                onPass: function () {
                    e()
                },
                onFailure: function () {
                    a.css("opacity", "1")
                }
            })
        }
        var o = n("PMcw");
        t.exports = {
            runIfPossible: r
        }
    },
    DPsE: function (t, e, n) {
        "use strict";
        var r = n("FryR"),
            o = n("zo/l"),
            a = n("BbyF");
        t.exports = [].copyWithin || function (t, e) {
            var n = r(this),
                i = a(n.length),
                c = o(t, i),
                l = o(e, i),
                u = arguments.length > 2 ? arguments[2] : void 0,
                s = Math.min((void 0 === u ? i : o(u, i)) - l, i - c),
                f = 1;
            for (l < c && c < l + s && (f = -1, l += s - 1, c += s - 1); s-- > 0;) l in n ? n[c] = n[l] : delete n[c], c += f, l += f;
            return n
        }
    },
    LrcN: function (t, e, n) {
        "use strict";

        function r(t, e, n) {
            var r, o, a, i = new Array(n),
                c = 8 * n - e - 1,
                l = (1 << c) - 1,
                u = l >> 1,
                s = 23 === e ? O(2, -24) - O(2, -77) : 0,
                f = 0,
                d = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = W(t), t != t || t === D ? (o = t != t ? 1 : 0, r = l) : (r = z(V(t) / N), t * (a = O(2, -r)) < 1 && (r--, a *= 2), t += r + u >= 1 ? s / a : s * O(2, 1 - u), t * a >= 2 && (r++, a /= 2), r + u >= l ? (o = 0, r = l) : r + u >= 1 ? (o = (t * a - 1) * O(2, e), r += u) : (o = t * O(2, u - 1) * O(2, e), r = 0)); e >= 8; i[f++] = 255 & o, o /= 256, e -= 8);
            for (r = r << e | o, c += e; c > 0; i[f++] = 255 & r, r /= 256, c -= 8);
            return i[--f] |= 128 * d, i
        }

        function o(t, e, n) {
            var r, o = 8 * n - e - 1,
                a = (1 << o) - 1,
                i = a >> 1,
                c = o - 7,
                l = n - 1,
                u = t[l--],
                s = 127 & u;
            for (u >>= 7; c > 0; s = 256 * s + t[l], l--, c -= 8);
            for (r = s & (1 << -c) - 1, s >>= -c, c += e; c > 0; r = 256 * r + t[l], l--, c -= 8);
            if (0 === s) s = 1 - i;
            else {
                if (s === a) return r ? NaN : u ? -D : D;
                r += O(2, e), s -= i
            }
            return (u ? -1 : 1) * r * O(2, s - e)
        }

        function a(t) {
            return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
        }

        function i(t) {
            return [255 & t]
        }

        function c(t) {
            return [255 & t, t >> 8 & 255]
        }

        function l(t) {
            return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
        }

        function u(t) {
            return r(t, 52, 8)
        }

        function s(t) {
            return r(t, 23, 4)
        }

        function f(t, e, n) {
            R(t[S], e, {
                get: function () {
                    return this[n]
                }
            })
        }

        function d(t, e, n, r) {
            var o = +n,
                a = A(o);
            if (a + e > t[k]) throw P(C);
            var i = t[G]._b,
                c = a + t[X],
                l = i.slice(c, c + e);
            return r ? l : l.reverse()
        }

        function p(t, e, n, r, o, a) {
            var i = +n,
                c = A(i);
            if (c + e > t[k]) throw P(C);
            for (var l = t[G]._b, u = c + t[X], s = r(+o), f = 0; f < e; f++) l[u + f] = s[a ? f : e - f - 1]
        }
        var h = n("OzIq"),
            g = n("bUqO"),
            m = n("V3l/"),
            y = n("07k+"),
            v = n("2p1q"),
            x = n("A16L"),
            M = n("zgIt"),
            w = n("9GpA"),
            I = n("oeih"),
            b = n("BbyF"),
            A = n("8D8H"),
            E = n("WcO1").f,
            R = n("lDLk").f,
            _ = n("zCYm"),
            T = n("yYvK"),
            S = "prototype",
            C = "Wrong index!",
            L = h.ArrayBuffer,
            U = h.DataView,
            F = h.Math,
            P = h.RangeError,
            D = h.Infinity,
            B = L,
            W = F.abs,
            O = F.pow,
            z = F.floor,
            V = F.log,
            N = F.LN2,
            G = g ? "_b" : "buffer",
            k = g ? "_l" : "byteLength",
            X = g ? "_o" : "byteOffset";
        if (y.ABV) {
            if (!M(function () {
                    L(1)
                }) || !M(function () {
                    new L(-1)
                }) || M(function () {
                    return new L, new L(1.5), new L(NaN), "ArrayBuffer" != L.name
                })) {
                L = function (t) {
                    return w(this, L), new B(A(t))
                };
                for (var Y, H = L[S] = B[S], q = E(B), j = 0; q.length > j;)(Y = q[j++]) in L || v(L, Y, B[Y]);
                m || (H.constructor = L)
            }
            var K = new U(new L(2)),
                Z = U[S].setInt8;
            K.setInt8(0, 2147483648), K.setInt8(1, 2147483649), !K.getInt8(0) && K.getInt8(1) || x(U[S], {
                setInt8: function (t, e) {
                    Z.call(this, t, e << 24 >> 24)
                },
                setUint8: function (t, e) {
                    Z.call(this, t, e << 24 >> 24)
                }
            }, !0)
        } else L = function (t) {
            w(this, L, "ArrayBuffer");
            var e = A(t);
            this._b = _.call(new Array(e), 0), this[k] = e
        }, U = function (t, e, n) {
            w(this, U, "DataView"), w(t, L, "DataView");
            var r = t[k],
                o = I(e);
            if (o < 0 || o > r) throw P("Wrong offset!");
            if (n = void 0 === n ? r - o : b(n), o + n > r) throw P("Wrong length!");
            this[G] = t, this[X] = o, this[k] = n
        }, g && (f(L, "byteLength", "_l"), f(U, "buffer", "_b"), f(U, "byteLength", "_l"), f(U, "byteOffset", "_o")), x(U[S], {
            getInt8: function (t) {
                return d(this, 1, t)[0] << 24 >> 24
            },
            getUint8: function (t) {
                return d(this, 1, t)[0]
            },
            getInt16: function (t) {
                var e = d(this, 2, t, arguments[1]);
                return (e[1] << 8 | e[0]) << 16 >> 16
            },
            getUint16: function (t) {
                var e = d(this, 2, t, arguments[1]);
                return e[1] << 8 | e[0]
            },
            getInt32: function (t) {
                return a(d(this, 4, t, arguments[1]))
            },
            getUint32: function (t) {
                return a(d(this, 4, t, arguments[1])) >>> 0
            },
            getFloat32: function (t) {
                return o(d(this, 4, t, arguments[1]), 23, 4)
            },
            getFloat64: function (t) {
                return o(d(this, 8, t, arguments[1]), 52, 8)
            },
            setInt8: function (t, e) {
                p(this, 1, t, i, e)
            },
            setUint8: function (t, e) {
                p(this, 1, t, i, e)
            },
            setInt16: function (t, e) {
                p(this, 2, t, c, e, arguments[2])
            },
            setUint16: function (t, e) {
                p(this, 2, t, c, e, arguments[2])
            },
            setInt32: function (t, e) {
                p(this, 4, t, l, e, arguments[2])
            },
            setUint32: function (t, e) {
                p(this, 4, t, l, e, arguments[2])
            },
            setFloat32: function (t, e) {
                p(this, 4, t, s, e, arguments[2])
            },
            setFloat64: function (t, e) {
                p(this, 8, t, u, e, arguments[2])
            }
        });
        T(L, "ArrayBuffer"), T(U, "DataView"), v(U[S], y.VIEW, !0), e.ArrayBuffer = L, e.DataView = U
    },
    MgvE: function (t, e, n) {
        var r = n("Wc9H"),
            o = n("IaZV"),
            a = new r({
                id: "android-outline",
                use: "android-outline-usage",
                viewBox: "0 0 27.1 34.2",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 27.1 34.2" id="android-outline">\n<g>\n\t<path d="M24.603,10.253c-0.591,0-1.128,0.214-1.558,0.556c-0.193-3.203-1.967-5.978-4.556-7.561l1.609-2.722\n\t\tl-0.861-0.508l-1.627,2.754c-1.237-0.588-2.615-0.926-4.073-0.926c-1.508,0-2.929,0.361-4.198,0.987L7.846,0.037L6.964,0.508\n\t\tL8.465,3.32c-2.52,1.59-4.241,4.322-4.437,7.467c-0.425-0.33-0.952-0.534-1.531-0.534c-1.387,0-2.515,1.128-2.515,2.515v10.296\n\t\tc0,1.387,1.128,2.515,2.515,2.515c0.565,0,1.081-0.194,1.501-0.509v0.009c0,1.403,1.142,2.545,2.544,2.545H7.29v4.044\n\t\tc0,1.387,1.128,2.515,2.515,2.515s2.515-1.128,2.515-2.515v-4.044h2.433v4.044c0,1.387,1.128,2.515,2.515,2.515\n\t\ts2.515-1.128,2.515-2.515v-4.044h0.748c1.403,0,2.544-1.142,2.544-2.545v-0.032c0.425,0.329,0.951,0.532,1.529,0.532\n\t\tc1.387,0,2.515-1.128,2.515-2.515V12.767C27.118,11.381,25.99,10.253,24.603,10.253z M13.536,2.846\n\t\tc4.539,0,8.252,3.564,8.513,8.039H5.023C5.284,6.41,8.997,2.846,13.536,2.846z M2.497,24.578c-0.835,0-1.515-0.68-1.515-1.515\n\t\tV12.767c0-0.835,0.68-1.515,1.515-1.515c0.789,0,1.431,0.609,1.501,1.379v10.566C3.928,23.969,3.285,24.578,2.497,24.578z\n\t\t M20.53,26.623h-1.748v5.044c0,0.835-0.68,1.515-1.515,1.515s-1.515-0.68-1.515-1.515v-5.044H11.32v5.044\n\t\tc0,0.835-0.68,1.515-1.515,1.515s-1.515-0.68-1.515-1.515v-5.044H6.542c-0.852,0-1.544-0.693-1.544-1.545v-1.879\n\t\tC5,23.153,5.011,23.11,5.011,23.063V12.767c0-0.046-0.011-0.09-0.014-0.135v-0.747h17.077v13.193\n\t\tC22.074,25.93,21.382,26.623,20.53,26.623z M26.118,23.063c0,0.835-0.68,1.515-1.515,1.515s-1.515-0.68-1.515-1.515V12.767\n\t\tc0-0.835,0.68-1.515,1.515-1.515s1.515,0.68,1.515,1.515V23.063z" />\n\t<path d="M8.69,9.498c0.89,0,1.614-0.724,1.614-1.613S9.58,6.27,8.69,6.27c-0.89,0-1.614,0.725-1.614,1.614\n\t\tS7.8,9.498,8.69,9.498z M8.69,7.27c0.339,0,0.614,0.275,0.614,0.614c0,0.338-0.275,0.613-0.614,0.613\n\t\tc-0.338,0-0.614-0.275-0.614-0.613C8.076,7.546,8.351,7.27,8.69,7.27z" />\n\t<path d="M18.237,9.498c0.89,0,1.614-0.724,1.614-1.613S19.127,6.27,18.237,6.27\n\t\tc-0.89,0-1.614,0.725-1.614,1.614S17.347,9.498,18.237,9.498z M18.237,7.27c0.339,0,0.614,0.275,0.614,0.614\n\t\tc0,0.338-0.275,0.613-0.614,0.613c-0.338,0-0.614-0.275-0.614-0.613C17.623,7.546,17.899,7.27,18.237,7.27z" />\n</g>\n</symbol>'
            });
        o.add(a);
        t.exports = a
    },
    PMcw: function (t, e, n) {
        function r(t) {
            var e = window.WebGL2RenderingContext ? s : window.WebGLRenderingContext ? u : l;
            if (e < 0) return void t.onFailure();
            var n = o();
            if (!a(n)) return void t.onFailure();
            var r, i, c = $("<canvas />", {
                    width: "1",
                    height: "1"
                }).appendTo("body"),
                f = [
                    ["experimental-webgl", "webgl"],
                    ["experimental-webgl2", "webgl2"]
                ],
                d = {
                    stencil: !0,
                    failIfMajorPerformanceCaveat: !0,
                    powerPreference: "low-power"
                };
            return e === s && (f[s].forEach(function (t) {
                (r = c[0].getContext(t, d)) && (i = t)
            }), r && i) ? (t.onPass(n), void c.remove()) : (f[u].forEach(function (t) {
                (r = c[0].getContext(t, d)) && (i = t)
            }), c.remove(), r && i ? void t.onPass(n) : void t.onFailure())
        }

        function o() {
            return c.getSearchParams()
        }

        function a(t) {
            return "Android" != i.getOSName() && !i.isMobile() && !i.isTablet()
        }
        n("fx22");
        var i = n("HufO"),
            c = n("0oQT"),
            l = -1,
            u = 0,
            s = 1;
        t.exports = r
    },
    UOfM: function (t, e, n) {
        n("s5OW"), n("oTwc"), n("nEhe"), n("h/LW"), n("fvc9"), n("g2mi"), n("JJ3q"), n("4VPz"), n("+x9t"), n("S0cJ")
    },
    aFbl: function (t, e, n) {
        function r(t, e, n) {
            function r(t, e, n) {
                t = t || [{
                    color: "#000000",
                    stop: 0
                }, {
                    color: "#FFF000",
                    stop: .5
                }, {
                    color: "#642054",
                    stop: 1
                }], e = void 0 !== e && e;
                var r = document.createElement("canvas");
                r.width = 512, r.height = 512, 1 == n && (r.style.position = "absolute", r.style.top = "0px", r.style.left = "0px", document.body.appendChild(r));
                var o = r.getContext("2d");
                o.rect(0, 0, 512, 512);
                for (var a = e ? o.createLinearGradient(0, 512, 0, 0) : o.createLinearGradient(0, 0, 512, 0), i = 0; i < t.length; i++) a.addColorStop(t[i].stop, t[i].color);
                return o.fillStyle = a, o.fillRect(0, 0, 512, 512), r
            }

            function o(t) {
                return Math.random() * (t.max - t.min) + t.min
            }

            function a(t) {
                return {
                    x: o(t.x),
                    y: o(t.y)
                }
            }

            function i(t) {
                h.forEach(function (e) {
                    e.handleMouseMove(t.clientX, t.clientY)
                })
            }

            function c(t) {
                d = Math.floor(t.canvas.clientWidth), p = Math.floor(t.canvas.clientHeight), t.viewport(0, 0, d, p), h.forEach(function (t) {
                    t.handleResize(d, p)
                })
            }

            function l() {
                h.forEach(function (t) {
                    t.updateMetaballs()
                }), requestAnimationFrame(l)
            }

            function u(t, n, r) {
                function o(e, n) {
                    var r = t.createShader(n);
                    if (t.shaderSource(r, e), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS)) throw "Shader compile failed with: " + t.getShaderInfoLog(r);
                    return r
                }

                function a(e, n) {
                    var r = t.getAttribLocation(e, n);
                    if (-1 === r) throw "Can not find attribute " + n + ".";
                    return r
                }

                function i(e, n) {
                    var r = t.getUniformLocation(e, n);
                    if (-1 === r) throw "Can not find uniform " + n + ".";
                    return r
                }
                var c, l, u, s, f, h, m = [],
                    y = 0,
                    v = {
                        radiusMultiplier: 1,
                        positionMultiplier: 1
                    },
                    x = {
                        x: 0,
                        y: 0
                    };
                this.handleResize = function (e, n) {
                    t.useProgram(c), t.uniform2f(s, e, n)
                }, this.handleMouseMove = function (t, n) {
                    x.x = t - (window.innerWidth - e) / 2, x.y = n
                }, this.updateMetaballs = function () {
                    y += .01;
                    for (var e, o, a, i, s, M = n.metaballs.length, w = d * g.originOffset.x, I = p * g.originOffset.y, b = 0; b < M; b++) s = m[b], e = w + (s.center.x * r + 30 * Math.sin((s.t + y) * s.speed) * s.arcMult.x + 30 * Math.sin((s.t + y) * s.speed) * s.arcMult.x) * v.positionMultiplier, o = I + (s.center.y * r + 30 * Math.cos((s.t + y) * s.speed) * s.arcMult.y + 30 * Math.cos((s.t + y) * s.speed) * s.arcMult.y) * v.positionMultiplier, a = Math.atan2(s.x - x.x, s.y - x.y), i = 500 / Math.sqrt(Math.pow(x.x - s.x, 2) + Math.pow(x.y - s.y, 2)), s.x += i * Math.sin(a) + .1 * (e - s.x), s.y += i * Math.cos(a) + .1 * (o - s.y);
                    for (var b = 0; b < M; b++) {
                        var A = 3 * b,
                            s = m[b];
                        h[A + 0] = s.x, h[A + 1] = s.y, h[A + 2] = s.radius * r * v.radiusMultiplier
                    }
                    t.useProgram(c), t.uniform1f(u, y), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, f), t.enable(t.BLEND), t.blendFunc(t.ONE, t.ONE_MINUS_SRC_ALPHA), t.uniform3fv(l, h), t.drawArrays(t.TRIANGLE_STRIP, 0, 4)
                };
                var M = "\n        attribute vec2 position;\n         void main() {\n        gl_Position = vec4(position, 0.0, 1.0);\n        }\n",
                    w = "\n          precision highp float;\n          const int NUM_METABALLS = 15;\n        \n          uniform vec3 metaballs[15];\n          uniform vec2 uResolution;\n          uniform sampler2D uColorSampler;\n          uniform float uTime;\n     \n            float noise(vec2 seed, float time) {\n                float x = (seed.x / 3.14159 + 4.0) * (seed.y / 13.0 + 4.0) * ((fract(time) + 1.0) * 10.0);\n                return mod((mod(x, 13.0) + 1.0) * (mod(x, 123.0) + 1.0), 0.01) - 0.005;\n            }  \n            \n            float brightness(vec3 color) {\n                return (0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b);\n            }\n \n            void main(){\n            float x = gl_FragCoord.x;\n            float y = gl_FragCoord.y;\n            float v = 0.0;\n            float radius = 2.0;\n            float speed = 1.5;\n            for (int i = 0; i < NUM_METABALLS; i++) {\n                vec3 mb = metaballs[i];\n                    float dx = mb.x - x;\n                    float dy = mb.y - y;\n        \n              float r = mb.z;\n              v += r*r/(dx*dx + dy*dy);\n                }\n        \n            vec4 color;\n \n\n            if (v > 1.0) {\n            \n              vec4 textureColor = texture2D(uColorSampler, vec2(gl_FragCoord.x / uResolution.x, gl_FragCoord.y / uResolution.y));             \n         \n              float l = length(textureColor);\n              \n              if(l > 1.05)\n                    {\n                      color = textureColor * 0.7;}\n                      else { color = textureColor * 0.5;}\n                    } else { discard; }\n            \n                \n\n            \n            vec2 st = gl_FragCoord.xy / uResolution.xy;\n\n            color.rgb = mix(color.rgb, vec3(noise(st * 1000.0, 1.0) * 100.0), 0.02 / pow(brightness(color.rgb), 0.3));\n            gl_FragColor = vec4(color.rgb, 0.8); \n            \n            }\n\n";
                ! function () {
                    var e = o(M, t.VERTEX_SHADER),
                        r = o(w, t.FRAGMENT_SHADER);
                    c = t.createProgram(), t.attachShader(c, e), t.attachShader(c, r), t.linkProgram(c), t.useProgram(c);
                    var d = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]),
                        p = t.createBuffer();
                    t.bindBuffer(t.ARRAY_BUFFER, p), t.bufferData(t.ARRAY_BUFFER, d, t.STATIC_DRAW);
                    var h = a(c, "position");
                    t.enableVertexAttribArray(h), t.vertexAttribPointer(h, 2, t.FLOAT, t.FALSE, 8, 0), l = i(c, "metaballs"), u = i(c, "uTime"), t.uniform1f(u, 0), f = t.createTexture(), t.bindTexture(t.TEXTURE_2D, f), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.REPEAT), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, n.texture), t.generateMipmap(t.TEXTURE_2D), t.bindTexture(t.TEXTURE_2D, null), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, f), t.uniform1i(t.getUniformLocation(c, "uColorSampler"), 0), s = i(c, "uResolution"), t.uniform2f(s, t.canvas.width, t.canvas.height)
                }(),
                function () {
                    m = n.metaballs;
                    for (var t, e = d * g.originOffset.x, o = p * g.originOffset.y, a = 0, i = m.length; a < i; a++) t = m[a], t.ox = t.x = e + t.center.x * r, t.oy = t.y = o + t.center.y * r
                }(),
                function () {
                    y += .01;
                    for (var e = n.metaballs.length, o = d * g.originOffset.x, a = p * g.originOffset.y, i = 0; i < e; i++) {
                        var c = n.metaballs[i];
                        c.x = o + c.center.x * r, c.y = a + c.center.y * r, c.targRadius = c.radius * r + (5 * Math.cos((c.t + y) * c.speed) + 5 * Math.sin((c.t + y) * c.speed))
                    }
                    h = new Float32Array(3 * e);
                    for (var i = 0; i < e; i++) {
                        var u = 3 * i,
                            s = m[i];
                        h[u + 0] = s.x, h[u + 1] = s.y, h[u + 2] = s.radius
                    }
                    t.uniform3fv(l, h)
                }()
            }
            var s, f, d, p, h = (window.devicePixelRatio, []),
                g = {
                    speedRange: {
                        min: .2,
                        max: 2
                    },
                    multArc: {
                        x: {
                            min: -.25,
                            max: .75
                        },
                        y: {
                            min: -.25,
                            max: .25
                        }
                    },
                    originOffset: {
                        x: .65,
                        y: .45
                    },
                    scale: .65,
                    colorI: "#f38038",
                    colorII: "#ed3d7d",
                    colorIII: "#341f49"
                };
            ! function (t, e, n) {
                s = t, s.width = e, s.height = n;
                var m = {
                    premultipliedAlpha: !0,
                    antialias: !0,
                    depth: !0,
                    alpha: !0
                };
                if (!(f = s.getContext("webgl", m) || s.getContext("experimental-webgl", m))) return void console.error("cannot find gl", f);
                d = Math.floor(f.canvas.clientWidth), p = Math.floor(f.canvas.clientHeight), [{
                    metaballs: [{
                        center: {
                            x: -50,
                            y: 220
                        },
                        radius: 50,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: -20,
                            y: 85
                        },
                        radius: 90,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: -30,
                            y: 50
                        },
                        radius: 60,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: 170,
                            y: 170
                        },
                        radius: 100,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: 370,
                            y: 30
                        },
                        radius: 40,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: 450,
                            y: 150
                        },
                        radius: 50,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: 270,
                            y: -240
                        },
                        radius: 70,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: 370,
                            y: -130
                        },
                        radius: 60,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: 170,
                            y: -70
                        },
                        radius: 70,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }],
                    texture: r([{
                        color: g.colorIII,
                        stop: .2
                    }, {
                        color: g.colorI,
                        stop: .3
                    }, {
                        color: g.colorII,
                        stop: .5
                    }, {
                        color: g.colorIII,
                        stop: .8
                    }], !0, !1)
                }, {
                    metaballs: [{
                        center: {
                            x: 150,
                            y: 350
                        },
                        radius: 30,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: 250,
                            y: 250
                        },
                        radius: 70,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: 380,
                            y: 280
                        },
                        radius: 30,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: 200,
                            y: 100
                        },
                        radius: 25,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }],
                    texture: r([{
                        color: g.colorII,
                        stop: .2
                    }, {
                        color: g.colorIII,
                        stop: .3
                    }, {
                        color: g.colorII,
                        stop: .5
                    }, {
                        color: g.colorIII,
                        stop: .7
                    }], !0, !1)
                }, {
                    metaballs: [{
                        center: {
                            x: 410,
                            y: -80
                        },
                        radius: 28,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: 340,
                            y: -100
                        },
                        radius: 70,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: 200,
                            y: -150
                        },
                        radius: 40,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: 250,
                            y: -200
                        },
                        radius: 36,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }],
                    texture: r([{
                        color: g.colorI,
                        stop: .5
                    }, {
                        color: g.colorII,
                        stop: .6
                    }, {
                        color: g.colorIII,
                        stop: .7
                    }], !0, !1)
                }, {
                    metaballs: [{
                        center: {
                            x: -410,
                            y: -270
                        },
                        radius: 48,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: -490,
                            y: -230
                        },
                        radius: 34,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: -470,
                            y: -320
                        },
                        radius: 40,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: -700,
                            y: 250
                        },
                        radius: 30,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: -740,
                            y: 310
                        },
                        radius: 20,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }],
                    texture: r([{
                        color: g.colorIII,
                        stop: .3
                    }, {
                        color: g.colorII,
                        stop: .4
                    }, {
                        color: g.colorII,
                        stop: .68
                    }, {
                        color: g.colorIII,
                        stop: .77
                    }, {
                        color: g.colorIII,
                        stop: .83
                    }], !0, !1)
                }, {
                    metaballs: [{
                        center: {
                            x: -830,
                            y: 40
                        },
                        radius: 30,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: -700,
                            y: 90
                        },
                        radius: 60,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: -540,
                            y: 270
                        },
                        radius: 50,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: -490,
                            y: 150
                        },
                        radius: 90,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: -300,
                            y: 240
                        },
                        radius: 40,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: -200,
                            y: 120
                        },
                        radius: 35,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: -350,
                            y: 50
                        },
                        radius: 70,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: -490,
                            y: -40
                        },
                        radius: 60,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: -270,
                            y: -70
                        },
                        radius: 50,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }],
                    texture: r([{
                        color: g.colorIII,
                        stop: .3
                    }, {
                        color: g.colorII,
                        stop: .5
                    }, {
                        color: g.colorI,
                        stop: .6
                    }], !0, !1)
                }, {
                    metaballs: [{
                        center: {
                            x: 26,
                            y: 55
                        },
                        radius: 120,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: -110,
                            y: -90
                        },
                        radius: 60,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: 12,
                            y: -214
                        },
                        radius: 80,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: -300,
                            y: -80
                        },
                        radius: 120,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }, {
                        center: {
                            x: -570,
                            y: -120
                        },
                        radius: 50,
                        speed: o(g.speedRange),
                        t: 200 * Math.random(),
                        arcMult: a(g.multArc)
                    }],
                    texture: r([{
                        color: g.colorI,
                        stop: .2
                    }, {
                        color: g.colorII,
                        stop: .35
                    }, {
                        color: g.colorIII,
                        stop: .55
                    }, {
                        color: g.colorII,
                        stop: .75
                    }, {
                        color: g.colorI,
                        stop: 1
                    }], !0, !1)
                }].map(function (t) {
                    h.push(new u(f, t, g.scale))
                }), t.addEventListener("mousemove", i), c(f), l()
            }(t, e, n)
        }
        n("dTzs"), t.exports = r
    },
    bIYr: function (t, e, n) {
        var r = n("Wc9H"),
            o = n("IaZV"),
            a = new r({
                id: "appreciated_beam",
                use: "appreciated_beam-usage",
                viewBox: "363 45.8 1338 702.2",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="363 45.8 1338 702.2" id="appreciated_beam">\n<g>\n\t\n\t\t<linearGradient id="appreciated_beam_SVGID_1_" gradientUnits="userSpaceOnUse" x1="1659.562" y1="691.6986" x2="1328.407" y2="953.1368" gradientTransform="matrix(0.9703 0.2417 -0.2417 0.9703 214.8049 -556.5635)">\n\t\t<stop offset="0" style="stop-color:#FB2046" />\n\t\t<stop offset="1" style="stop-color:#FB5502" />\n\t</linearGradient>\n\t<path style="fill:url(#appreciated_beam_SVGID_1_);" d="M1258.7,683.6l373.2-219.1c22.1-12.9,50.6-5.2,63.1,17.1l0,0c13.1,23.2,3.9,52.6-20.1,64.1\n\t\tL1291,744.6c-16.1,7.7-35.5,1.9-44.6-13.5l0,0C1236.6,714.6,1242.2,693.3,1258.7,683.6z" />\n\t\n\t\t<linearGradient id="appreciated_beam_SVGID_2_" gradientUnits="userSpaceOnUse" x1="1671.0411" y1="586.631" x2="1013.7209" y2="768.7549" gradientTransform="matrix(1 0 0 1 0 -112.258)">\n\t\t<stop offset="0" style="stop-color:#FB2046" />\n\t\t<stop offset="1" style="stop-color:#E32581" />\n\t</linearGradient>\n\t<path style="fill:url(#appreciated_beam_SVGID_2_);" d="M1044.7,563.5l600.2-114c23.4-4.4,46.5,9.2,53.8,31.9l0,0c8.1,25-5.9,51.9-31,59.6\n\t\tl-583.6,180.7c-45.8,14.2-105.9-14-116-60.9l0,0C958.5,616,999.7,572,1044.7,563.5z" />\n\t\n\t\t<linearGradient id="appreciated_beam_SVGID_3_" gradientUnits="userSpaceOnUse" x1="1977.1027" y1="-422.9911" x2="1007.8366" y2="789.6312" gradientTransform="matrix(1 0 0 1 0 -112.258)">\n\t\t<stop offset="0" style="stop-color:#5E2495" />\n\t\t<stop offset="1" style="stop-color:#E32581" />\n\t</linearGradient>\n\t<path style="fill:url(#appreciated_beam_SVGID_3_);" d="M986,571.3l255.6-414.7c37-48.5,243.2-123.9,291.4-86.5l0,0c51,39.6,57.1,114.4,13.1,161.7\n\t\tl-433.4,466c-28.5,30.7-88.1,33.7-120.3,6.9l0,0C960,677.7,951.3,619.9,986,571.3z" />\n\t\n\t\t<linearGradient id="appreciated_beam_SVGID_4_" gradientUnits="userSpaceOnUse" x1="377.7802" y1="577.4408" x2="2655.489" y2="-94.5349" gradientTransform="matrix(1 0 0 1 0 -112.258)">\n\t\t<stop offset="0" style="stop-color:#5E2495" />\n\t\t<stop offset="1" style="stop-color:#E32581" />\n\t</linearGradient>\n\t<path style="fill:url(#appreciated_beam_SVGID_4_);" d="M373.4,477.2L373.4,477.2c32.5,90,131.6,136.9,221.8,105l907.2-321.6\n\t\tc57.6-20.4,87.5-84,66.5-141.4l-0.5-1.3c-18.8-51.4-72.5-81.1-126-69.7L500.9,248C397.7,269.9,337.6,377.9,373.4,477.2z" />\n</g>\n</symbol>'
            });
        o.add(a);
        t.exports = a
    },
    d5WZ: function (t, e) {},
    dTzs: function (t, e, n) {
        n("77Ug")("Float32", 4, function (t) {
            return function (e, n, r) {
                return t(this, e, n, r)
            }
        })
    },
    fvc9: function (t, e, n) {
        n("d5WZ"), n("kWXn")
    },
    kWXn: function (t, e, n) {
        var r = n("Wc9H"),
            o = n("IaZV"),
            a = new r({
                id: "dotnet-outline",
                use: "dotnet-outline-usage",
                viewBox: "0 0 37.1 13.8",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 37.1 13.8" id="dotnet-outline">\n<g>\n\t<path d="M3.1,13.8c-0.9,0-1.8-0.2-2.6-0.5L0,13.1l3.9-9c1.5-3.4,5.4-5,8.8-3.5l0.5,0.2l-3.9,9\n\t\tC8.2,12.3,5.7,13.8,3.1,13.8z M1.3,12.5c2.8,0.9,5.8-0.4,7-3.2l3.5-8.1C9,0.4,6,1.7,4.8,4.4L1.3,12.5z" />\n\t<path d="M27,13.8c-0.9,0-1.8-0.2-2.6-0.5l-0.5-0.2l3.9-9c1.5-3.4,5.4-5,8.8-3.5l0.5,0.2l-3.9,9\n\t\tC32.1,12.3,29.6,13.8,27,13.8z M25.3,12.5c2.8,0.9,5.8-0.4,7-3.2l3.5-8.1c-2.8-0.9-5.8,0.4-7,3.2L25.3,12.5z" />\n\t<path d="M22.1,13.8c-2.6,0-5.1-1.5-6.2-4l-3.9-9l0.5-0.2C16-0.9,19.9,0.7,21.4,4l3.9,9l-0.5,0.2\n\t\tC23.9,13.6,23,13.8,22.1,13.8z M13.4,1.3l3.5,8.1c1.2,2.7,4.2,4.1,7,3.2l-3.5-8.1C19.3,1.7,16.2,0.4,13.4,1.3z" />\n</g>\n</symbol>'
            });
        o.add(a);
        t.exports = a
    },
    nEhe: function (t, e, n) {
        n("7+TS"), n("uThW")
    },
    oTwc: function (t, e, n) {
        n("qIxW"), n("MgvE")
    },
    oa7v: function (t, e) {},
    qIxW: function (t, e) {},
    s5OW: function (t, e) {},
    uThW: function (t, e, n) {
        var r = n("Wc9H"),
            o = n("IaZV"),
            a = new r({
                id: "apple-outline",
                use: "apple-outline-usage",
                viewBox: "0 0 25.3 28.7",
                content: '<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 25.3 28.7" id="apple-outline">\n<desc>NDA</desc>\n<g>\n\t<path d="M8.3,28.7C8.3,28.7,8.3,28.7,8.3,28.7c-2.3,0-4-2.1-5.3-4.1C-0.3,19.7-0.9,13.5,1.4,10\n\t\tc1.5-2.3,3.9-3.8,6.3-3.8c1.2,0,2.2,0.4,3.1,0.7c0.5,0.2,0.9,0.3,1.4,0.4c0-1.5,0.6-3.2,1.7-4.6C15.1,1.3,17.2,0.2,19,0l0.5,0\n\t\tl0.1,0.5c0.3,1.8-0.3,3.7-1.6,5.4l0,0c-0.1,0.1-0.2,0.3-0.3,0.4c0.3,0,0.6,0,0.9,0c2.1,0,4.3,1.1,5.8,3l0.4,0.5L24.1,10\n\t\tc-2,1.1-3.1,3.1-2.9,5.3c0.2,2.3,1.6,4.2,3.7,5l0.5,0.2L25.1,21c-0.7,1.5-1,2.2-1.9,3.5c-1.4,2.1-3.1,4.3-5.3,4.3\n\t\tc-1,0-1.6-0.3-2.2-0.6c-0.7-0.3-1.4-0.6-2.6-0.6c-1.2,0-1.9,0.3-2.6,0.6C9.9,28.4,9.2,28.7,8.3,28.7z M7.7,7.2\n\t\tc-2.1,0-4.2,1.3-5.5,3.3c-1.8,2.7-1.8,8.4,1.6,13.6c1.1,1.7,2.6,3.6,4.4,3.6c0.7,0,1.3-0.2,1.8-0.5c0.7-0.3,1.6-0.7,3-0.7\n\t\tc1.4-0.1,2.3,0.4,3,0.7c0.6,0.3,1.1,0.4,1.8,0.5c1.8,0,3.3-2.1,4.5-3.8c0.7-1.1,1.1-1.7,1.6-2.9c-2.2-1-3.7-3.2-3.8-5.6\n\t\tc-0.2-2.4,0.9-4.6,2.9-5.9c-1.3-1.4-3-2.2-4.6-2.2c-1.3,0-2.2,0.3-3,0.7c-0.1,0-0.2,0.1-0.3,0.1c-0.8,0.3-1.6,0.5-2.4,0.4h-0.4h0\n\t\tc-0.7-0.1-1.3-0.4-1.9-0.6C9.6,7.5,8.8,7.2,7.7,7.2z M18.6,1.1c-1.4,0.2-2.9,1.1-3.9,2.3c-1,1.3-1.6,2.7-1.5,4\n\t\tc0.6,0,1.1-0.2,1.7-0.4c0.9-0.4,1.7-1,2.3-1.8C17.6,4.6,18.7,3,18.6,1.1z" />\n</g>\n</symbol>'
            });
        o.add(a);
        t.exports = a
    }
}, [181]);