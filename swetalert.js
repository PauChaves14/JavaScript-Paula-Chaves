!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t = t || self).Sweetalert2 = e());
})(this, function (){
    "use strict";
    function r(t) {
    return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
            }
        : function (t) {
            return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function a(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
    for (var n = 0; n < e.length; n++) {
        var o = e[n];
        (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        "value" in o && (o.writable = !0),
        Object.defineProperty(t, o.key, o);
    }
    }
    function c(t, e, n) {
    return e && o(t.prototype, e), n && o(t, n), t;
    }
    function s() {
    return (s =
        Object.assign ||
        function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
        }).apply(this, arguments);
    }
    function u(t) {
    return (u = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
    }
    function l(t, e) {
    return (l =
        Object.setPrototypeOf ||
        function (t, e) {
        return (t.__proto__ = e), t;
        })(t, e);
    }
    function d() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return (
        Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
        ),
        !0
        );
    } catch (t) {
        return !1;
    }
    }
    function i(t, e, n) {
    return (i = d()
        ? Reflect.construct
        : function (t, e, n) {
            var o = [null];
            o.push.apply(o, e);
            var i = new (Function.bind.apply(t, o))();
            return n && l(i, n.prototype), i;
        }).apply(null, arguments);
    }
    function p(t, e) {
    return !e || ("object" != typeof e && "function" != typeof e)
        ? (function (t) {
            if (void 0 === t)
            throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
            );
            return t;
        })(t)
        : e;
    }
    function f(t, e, n) {
    return (f =
        "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (t, e, n) {
            var o = (function (t, e) {
                for (
                ;
                !Object.prototype.hasOwnProperty.call(t, e) &&
                null !== (t = u(t));
                );
                return t;
            })(t, e);
            if (o) {
                var i = Object.getOwnPropertyDescriptor(o, e);
                return i.get ? i.get.call(n) : i.value;
            }
            })(t, e, n || t);
    }
    function m(e) {
    return Object.keys(e).map(function (t) {
        return e[t];
    });
    }
    function h(t) {
    return Array.prototype.slice.call(t);
    }
    function g(t, e) {
    var n;
    (n = '"'
        .concat(
        t,
        '" is deprecated and will be removed in the next major release. Please use "'
        )
        .concat(e, '" instead.')),
        -1 === z.indexOf(n) && (z.push(n), _(n));
    }
    function v(t) {
    return t && "function" == typeof t.toPromise;
    }
    function b(t) {
    return v(t) ? t.toPromise() : Promise.resolve(t);
    }
    function y(t) {
    return t && Promise.resolve(t) === t;
    }
    function w(t) {
    return t instanceof Element || ("object" === r((e = t)) && e.jquery);
    var e;
    }
    function t(t) {
    var e = {};
    for (var n in t) e[t[n]] = "swal2-" + t[n];
    return e;
    }
    function C(t) {
    var e = Q();
    return e ? e.querySelector(t) : null;
    }
    function e(t) {
    return C(".".concat(t));
    }
    function n() {
    var t = $();
    return h(t.querySelectorAll(".".concat(Y.icon)));
    }
    function k() {
    var t = n().filter(function (t) {
        return vt(t);
    });
    return t.length ? t[0] : null;
    }
    function x() {
    return e(Y.title);
    }
    function P() {
    return e(Y.content);
    }
    function A() {
    return e(Y.image);
    }
    function B() {
    return e(Y["progress-steps"]);
    }
    function S() {
    return e(Y["validation-message"]);
    }
    function E() {
    return C(".".concat(Y.actions, " .").concat(Y.confirm));
    }
    function O() {
    return C(".".concat(Y.actions, " .").concat(Y.cancel));
    }







