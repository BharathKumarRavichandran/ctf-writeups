!function t(e, n, r) {
    function i(a, u) {
        if (!n[a]) {
            if (!e[a]) {
                var l = "function" == typeof require && require;
                if (!u && l)
                    return l(a, !0);
                if (o)
                    return o(a, !0);
                var f = new Error("Cannot find module '" + a + "'");
                throw f.code = "MODULE_NOT_FOUND",
                f
            }
            var c = n[a] = {
                exports: {}
            };
            e[a][0].call(c.exports, (function(t) {
                return i(e[a][1][t] || t)
            }
            ), c, c.exports, t, e, n, r)
        }
        return n[a].exports
    }
    for (var o = "function" == typeof require && require, a = 0; a < r.length; a++)
        i(r[a]);
    return i
}({
    1: [function(t, e, n) {
        "use strict";
        if (!String.prototype.padStart)
            String.prototype.padStart = function(t, e) {
                if (t >>= 0,
                e = String(void 0 !== e ? e : " "),
                this.length > t)
                    return String(this);
                else {
                    if ((t -= this.length) > e.length)
                        e += e.repeat(t / e.length);
                    return e.slice(0, t) + String(this)
                }
            }
    }
    , {}],
    2: [function(t, e, n) {
        "use strict";
        !function(t) {
            var n = Object.prototype
              , r = n.hasOwnProperty
              , i = "function" == typeof Symbol ? Symbol : {}
              , o = i.iterator || "@@iterator"
              , a = i.asyncIterator || "@@asyncIterator"
              , u = i.toStringTag || "@@toStringTag"
              , l = "object" == typeof e
              , f = t.regeneratorRuntime;
            if (!f) {
                (f = t.regeneratorRuntime = l ? e.exports : {}).wrap = g;
                var c = {}
                  , s = {};
                s[o] = function() {
                    return this
                }
                ;
                var h = Object.getPrototypeOf
                  , d = h && h(h(L([])));
                if (d && d !== n && r.call(d, o))
                    s = d;
                var p = w.prototype = v.prototype = Object.create(s);
                m.prototype = p.constructor = w,
                w.constructor = m,
                w[u] = m.displayName = "GeneratorFunction",
                f.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return e ? e === m || "GeneratorFunction" === (e.displayName || e.name) : !1
                }
                ,
                f.mark = function(t) {
                    if (Object.setPrototypeOf)
                        Object.setPrototypeOf(t, w);
                    else if (t.__proto__ = w,
                    !(u in t))
                        t[u] = "GeneratorFunction";
                    return t.prototype = Object.create(p),
                    t
                }
                ,
                f.awrap = function(t) {
                    return {
                        __await: t
                    }
                }
                ,
                b(S.prototype),
                S.prototype[a] = function() {
                    return this
                }
                ,
                f.AsyncIterator = S,
                f.async = function(t, e, n, r) {
                    var i = new S(g(t, e, n, r));
                    return f.isGeneratorFunction(e) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }
                    ))
                }
                ,
                b(p),
                p[u] = "Generator",
                p[o] = function() {
                    return this
                }
                ,
                p.toString = function() {
                    return "[object Generator]"
                }
                ,
                f.keys = function(t) {
                    var e = [];
                    for (var n in t)
                        e.push(n);
                    return e.reverse(),
                    function n() {
                        for (; e.length; ) {
                            var r = e.pop();
                            if (r in t)
                                return n.value = r,
                                n.done = !1,
                                n
                        }
                        return n.done = !0,
                        n
                    }
                }
                ,
                f.values = L,
                E.prototype = {
                    constructor: E,
                    reset: function(t) {
                        if (this.prev = 0,
                        this.next = 0,
                        this.sent = this._sent = void 0,
                        this.done = !1,
                        this.delegate = null,
                        this.method = "next",
                        this.arg = void 0,
                        this.tryEntries.forEach(M),
                        !t)
                            for (var e in this)
                                if ("t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)))
                                    this[e] = void 0
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type)
                            throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done)
                            throw t;
                        var e = this;
                        function n(n, r) {
                            if (a.type = "throw",
                            a.arg = t,
                            e.next = n,
                            r)
                                e.method = "next",
                                e.arg = void 0;
                            return !!r
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i]
                              , a = o.completion;
                            if ("root" === o.tryLoc)
                                return n("end");
                            if (o.tryLoc <= this.prev) {
                                var u = r.call(o, "catchLoc")
                                  , l = r.call(o, "finallyLoc");
                                if (u && l) {
                                    if (this.prev < o.catchLoc)
                                        return n(o.catchLoc, !0);
                                    else if (this.prev < o.finallyLoc)
                                        return n(o.finallyLoc)
                                } else if (u) {
                                    if (this.prev < o.catchLoc)
                                        return n(o.catchLoc, !0)
                                } else if (l) {
                                    if (this.prev < o.finallyLoc)
                                        return n(o.finallyLoc)
                                } else
                                    throw new Error("try statement without catch or finally")
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        if (o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc)
                            o = null;
                        var a = o ? o.completion : {};
                        if (a.type = t,
                        a.arg = e,
                        o)
                            return this.method = "next",
                            this.next = o.finallyLoc,
                            c;
                        else
                            return this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type)
                            throw t.arg;
                        if ("break" === t.type || "continue" === t.type)
                            this.next = t.arg;
                        else if ("return" === t.type)
                            this.rval = this.arg = t.arg,
                            this.method = "return",
                            this.next = "end";
                        else if ("normal" === t.type && e)
                            this.next = e;
                        return c
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t)
                                return this.complete(n.completion, n.afterLoc),
                                M(n),
                                c
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    M(n)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, n) {
                        if (this.delegate = {
                            iterator: L(t),
                            resultName: e,
                            nextLoc: n
                        },
                        "next" === this.method)
                            this.arg = void 0;
                        return c
                    }
                }
            } else if (l)
                e.exports = f;
            function g(t, e, n, r) {
                var i = e && e.prototype instanceof v ? e : v
                  , o = Object.create(i.prototype)
                  , a = new E(r || []);
                return o._invoke = function(t, e, n) {
                    var r = "suspendedStart";
                    return function(i, o) {
                        if ("executing" === r)
                            throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === i)
                                throw o;
                            return O()
                        }
                        for (n.method = i,
                        n.arg = o; ; ) {
                            var a = n.delegate;
                            if (a) {
                                var u = D(a, n);
                                if (u) {
                                    if (u === c)
                                        continue;
                                    return u
                                }
                            }
                            if ("next" === n.method)
                                n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === r)
                                    throw r = "completed",
                                    n.arg;
                                n.dispatchException(n.arg)
                            } else if ("return" === n.method)
                                n.abrupt("return", n.arg);
                            r = "executing";
                            var l = y(t, e, n);
                            if ("normal" === l.type) {
                                if (r = n.done ? "completed" : "suspendedYield",
                                l.arg === c)
                                    continue;
                                return {
                                    value: l.arg,
                                    done: n.done
                                }
                            } else if ("throw" === l.type)
                                r = "completed",
                                n.method = "throw",
                                n.arg = l.arg
                        }
                    }
                }(t, n, a),
                o
            }
            function y(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            function v() {}
            function m() {}
            function w() {}
            function b(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    t[e] = function(t) {
                        return this._invoke(e, t)
                    }
                }
                ))
            }
            function S(t) {
                var e;
                this._invoke = function(n, i) {
                    function o() {
                        return new Promise((function(e, o) {
                            !function e(n, i, o, a) {
                                var u = y(t[n], t, i);
                                if ("throw" === u.type)
                                    a(u.arg);
                                else {
                                    var l = u.arg
                                      , f = l.value;
                                    if (f && "object" == typeof f && r.call(f, "__await"))
                                        return Promise.resolve(f.__await).then((function(t) {
                                            e("next", t, o, a)
                                        }
                                        ), (function(t) {
                                            e("throw", t, o, a)
                                        }
                                        ));
                                    else
                                        return Promise.resolve(f).then((function(t) {
                                            l.value = t,
                                            o(l)
                                        }
                                        ), a)
                                }
                            }(n, i, e, o)
                        }
                        ))
                    }
                    return e = e ? e.then(o, o) : o()
                }
            }
            function D(t, e) {
                var n = t.iterator[e.method];
                if (void 0 === n) {
                    if (e.delegate = null,
                    "throw" === e.method) {
                        if (t.iterator.return)
                            if (e.method = "return",
                            e.arg = void 0,
                            D(t, e),
                            "throw" === e.method)
                                return c;
                        e.method = "throw",
                        e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return c
                }
                var r = y(n, t.iterator, e.arg);
                if ("throw" === r.type)
                    return e.method = "throw",
                    e.arg = r.arg,
                    e.delegate = null,
                    c;
                var i = r.arg;
                if (!i)
                    return e.method = "throw",
                    e.arg = new TypeError("iterator result is not an object"),
                    e.delegate = null,
                    c;
                if (i.done) {
                    if (e[t.resultName] = i.value,
                    e.next = t.nextLoc,
                    "return" !== e.method)
                        e.method = "next",
                        e.arg = void 0
                } else
                    return i;
                return e.delegate = null,
                c
            }
            function x(t) {
                var e = {
                    tryLoc: t[0]
                };
                if (1 in t)
                    e.catchLoc = t[1];
                if (2 in t)
                    e.finallyLoc = t[2],
                    e.afterLoc = t[3];
                this.tryEntries.push(e)
            }
            function M(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function E(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(x, this),
                this.reset(!0)
            }
            function L(t) {
                if (t) {
                    var e = t[o];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var n = -1
                          , i = function e() {
                            for (; ++n < t.length; )
                                if (r.call(t, n))
                                    return e.value = t[n],
                                    e.done = !1,
                                    e;
                            return e.value = void 0,
                            e.done = !0,
                            e
                        };
                        return i.next = i
                    }
                }
                return {
                    next: O
                }
            }
            function O() {
                return {
                    value: void 0,
                    done: !0
                }
            }
        }(function() {
            return this ? this : "undefined" != typeof self ? self : void 0
        }() || Function("return this")())
    }
    , {}],
    3: [function(t, e, n) {
        "use strict";
        function r(t, e, n, r, i, o, a) {
            try {
                var u = t[o](a)
                  , l = u.value
            } catch (t) {
                return void n(t)
            }
            if (u.done)
                e(l);
            else
                Promise.resolve(l).then(r, i)
        }
        t("polyfills/regeneratorRuntime"),
        t("polyfills/String.prototype.padStart");
        let i = t=>String(t).padStart(2, "0");
        var o;
        (o = function*() {
            let t = yield(t=>{
                if ("undefined" != typeof browser)
                    return browser.runtime.sendMessage(t);
                else
                    return new Promise(e=>{
                        chrome.runtime.sendMessage(t, e)
                    }
                    )
            }
            )({
                type: "date",
                url: location.href
            });
            if (!t)
                return;
            let {original: e, proxy: n} = t;
            if (null === n)
                return;
            let r = n - e;
            const o = `\n  var bind = Function.bind;\n  var unbind = bind.bind( bind );\n\n  function instantiate( constructor, args ){\n    return new ( unbind( constructor, null ).apply( null, args ) );\n  }\n\n  var modifyDateString = function( original ){\n    var newString = original.split( '(' )[ 0 ].trim();\n\n    return newString.replace( /GMT[\\+\\-][0-9]{4}/, 'GMT${(n >= 0 ? "+" : "-") + i(Math.floor(Math.abs(n) / 60)) + i(Math.abs(n) % 60)}' )\n  };\n\n  Date = ( function( Date ){\n    if( Date.isModified ) return Date;\n\n    var originalMethods = {};\n    originalMethods.toString = Date.prototype.toString;\n    originalMethods.toGMTString = Date.prototype.toGMTString;\n    originalMethods.toUTCString = Date.prototype.toUTCString;\n    originalMethods.toISOString = Date.prototype.toISOString;\n    originalMethods.toTimeString = Date.prototype.toTimeString;\n    originalMethods.toJSON = Date.prototype.toJSON;\n\n    var ModifiedDate = function() {\n      var date = instantiate( Date, arguments );\n      date = new Date( date.getTime() + ${r} * 60 * 1000 );\n\n      if( !( this instanceof Date ) ) return modifyDateString( date.toString() );\n      return date;\n    };\n\n    ModifiedDate.prototype = Date.prototype;\n    Object.getOwnPropertyNames( Date )\n      .filter( function( name ){ return !( name in ModifiedDate ); })\n      .forEach( function( name ){\n        Object.defineProperty(\n          ModifiedDate,\n          name,\n          Object.getOwnPropertyDescriptor( Date, name )\n        );\n      });\n\n    Object.defineProperties( Date.prototype, {\n      'getTimezoneOffset': {\n        'configurable': true,\n        'enumerable': false,\n        'writable': true,\n        'value': function(){ return ${-n}; }\n      },\n      'toISOString': {\n        'configurable': true,\n        'enumerable': false,\n        'writable': true,\n        'value': function(){\n          var date = new Date( this.getTime() - ${r} * 60 * 1000 );\n          return originalMethods.toISOString.call( date );\n        }\n      },\n      'toString': {\n        'configurable': true,\n        'enumerable': false,\n        'writable': true,\n        'value': function(){\n          var date = new Date( this.getTime() );\n          return modifyDateString( originalMethods.toString.call( date ) );\n        }\n      },\n      'toTimeString': {\n        'configurable': true,\n        'enumerable': false,\n        'writable': true,\n        'value': function(){\n          var date = new Date( this.getTime() );\n          return modifyDateString( originalMethods.toTimeString.call( date ) );\n        }\n      },\n      'toUTCString': {\n        'configurable': true,\n        'enumerable': false,\n        'writable': true,\n        'value': function(){\n          var date = new Date( this.getTime() - ${r} * 60 * 1000 );\n          return originalMethods.toUTCString.call( date );\n        }\n      }\n    });\n\n    if( Date.prototype.toGMTString ){\n      Object.defineProperty( Date.prototype, 'toGMTString', {\n        'configurable': true,\n        'enumerable': false,\n        'writable': true,\n        'value': function(){\n          var date = new Date( this.getTime() - ${r} * 60 * 1000 );\n          return originalMethods.toGMTString.call( date );\n        }\n      });\n    }\n\n    ModifiedDate.now = function(){ return Date.now(); };\n\n    Object.defineProperties( ModifiedDate, {\n      'length': {\n        enumerable: false,\n        configurable: true,\n        writable: false,\n        value: 7\n      },\n      'name': {\n        enumerable: false,\n        configurable: true,\n        writable: false,\n        value: 'Date'\n      },\n      'isModified': {\n        enumerable: false,\n        configurable: true,\n        writable: false,\n        value: true\n      }\n    });\n\n    return ModifiedDate;\n  })( Date );\n  `;
            let a = document.createElement("script");
            if (a.innerText = o.replace(/\n/gm, ""),
            document.documentElement)
                document.documentElement.insertBefore(a, document.documentElement.firstChild)
        }
        ,
        function() {
            var t = this
              , e = arguments;
            return new Promise((function(n, i) {
                var a = o.apply(t, e);
                function u(t) {
                    r(a, n, i, u, l, "next", t)
                }
                function l(t) {
                    r(a, n, i, u, l, "throw", t)
                }
                u(void 0)
            }
            ))
        }
        )()
    }
    , {
        "polyfills/String.prototype.padStart": 1,
        "polyfills/regeneratorRuntime": 2
    }]
}, {}, [3]);
