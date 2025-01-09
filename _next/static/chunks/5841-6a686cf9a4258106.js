(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5841],
  {
    55975: function (e, t, n) {
      "use strict";
      var r = n(28405);
      e.exports = Object.keys(r.emoji);
    },
    43790: function (e, t, n) {
      "use strict";
      var r = n(28405),
        i = n(98375),
        o = n(82824),
        a = n(55975),
        l = (e.exports = {});
      (l.getName = function (e) {
        return r.get(e);
      }),
        (l.getUnicode = function (e) {
          return i.get(e);
        }),
        (l.names = o),
        (l.unicode = a);
    },
    98375: function (e, t, n) {
      "use strict";
      var r = n(17078),
        i = n(36604),
        o = n(16614),
        a = (e.exports = {});
      (a.emoji = r(
        o.lib,
        function (e) {
          return e.char;
        },
        !0
      )),
        i(a.emoji, function (e, t, n) {
          return (!e && delete n[t]) || !0;
        }),
        (a.get = function (e) {
          return ":" === e.charAt(0) && (e = e.slice(1, -1)), this.emoji[e];
        });
    },
    82824: function (e, t, n) {
      "use strict";
      var r = n(98375);
      e.exports = Object.keys(r.emoji);
    },
    28405: function (e, t, n) {
      "use strict";
      var r = n(98375),
        i = n(36604),
        o = (e.exports = {});
      (o.emoji = {}),
        i(r.emoji, function (e, t) {
          return (o.emoji[e] = t);
        }),
        (o.get = function (e) {
          return o.emoji[e];
        });
    },
    16614: function (e, t, n) {
      e.exports = {
        lib: n(82304),
        ordered: n(10611),
        fitzpatrick_scale_modifiers: [
          "\uD83C\uDFFB",
          "\uD83C\uDFFC",
          "\uD83C\uDFFD",
          "\uD83C\uDFFE",
          "\uD83C\uDFFF",
        ],
      };
    },
    94470: function (e) {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        n = Object.prototype.toString,
        r = Object.defineProperty,
        i = Object.getOwnPropertyDescriptor,
        isArray = function (e) {
          return "function" == typeof Array.isArray
            ? Array.isArray(e)
            : "[object Array]" === n.call(e);
        },
        isPlainObject = function (e) {
          if (!e || "[object Object]" !== n.call(e)) return !1;
          var r,
            i = t.call(e, "constructor"),
            o =
              e.constructor &&
              e.constructor.prototype &&
              t.call(e.constructor.prototype, "isPrototypeOf");
          if (e.constructor && !i && !o) return !1;
          for (r in e);
          return void 0 === r || t.call(e, r);
        },
        setProperty = function (e, t) {
          r && "__proto__" === t.name
            ? r(e, t.name, {
                enumerable: !0,
                configurable: !0,
                value: t.newValue,
                writable: !0,
              })
            : (e[t.name] = t.newValue);
        },
        getProperty = function (e, n) {
          if ("__proto__" === n) {
            if (!t.call(e, n)) return;
            if (i) return i(e, n).value;
          }
          return e[n];
        };
      e.exports = function extend() {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0],
          l = 1,
          s = arguments.length,
          u = !1;
        for (
          "boolean" == typeof a && ((u = a), (a = arguments[1] || {}), (l = 2)),
            (null == a || ("object" != typeof a && "function" != typeof a)) &&
              (a = {});
          l < s;
          ++l
        )
          if (((e = arguments[l]), null != e))
            for (t in e)
              (n = getProperty(a, t)),
                a !== (r = getProperty(e, t)) &&
                  (u && r && (isPlainObject(r) || (i = isArray(r)))
                    ? (i
                        ? ((i = !1), (o = n && isArray(n) ? n : []))
                        : (o = n && isPlainObject(n) ? n : {}),
                      setProperty(a, { name: t, newValue: extend(u, o, r) }))
                    : void 0 !== r && setProperty(a, { name: t, newValue: r }));
        return a;
      };
    },
    18139: function (e) {
      var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
        n = /\n/g,
        r = /^\s*/,
        i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
        o = /^:\s*/,
        a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
        l = /^[;\s]*/,
        s = /^\s+|\s+$/g;
      function trim(e) {
        return e ? e.replace(s, "") : "";
      }
      e.exports = function (e, s) {
        if ("string" != typeof e)
          throw TypeError("First argument must be a string");
        if (!e) return [];
        s = s || {};
        var u = 1,
          c = 1;
        function updatePosition(e) {
          var t = e.match(n);
          t && (u += t.length);
          var r = e.lastIndexOf("\n");
          c = ~r ? e.length - r : c + e.length;
        }
        function position() {
          var e = { line: u, column: c };
          return function (t) {
            return (t.position = new Position(e)), match(r), t;
          };
        }
        function Position(e) {
          (this.start = e),
            (this.end = { line: u, column: c }),
            (this.source = s.source);
        }
        Position.prototype.content = e;
        var f = [];
        function error(t) {
          var n = Error(s.source + ":" + u + ":" + c + ": " + t);
          if (
            ((n.reason = t),
            (n.filename = s.source),
            (n.line = u),
            (n.column = c),
            (n.source = e),
            s.silent)
          )
            f.push(n);
          else throw n;
        }
        function match(t) {
          var n = t.exec(e);
          if (n) {
            var r = n[0];
            return updatePosition(r), (e = e.slice(r.length)), n;
          }
        }
        function comments(e) {
          var t;
          for (e = e || []; (t = comment()); ) !1 !== t && e.push(t);
          return e;
        }
        function comment() {
          var t = position();
          if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
            for (
              var n = 2;
              "" != e.charAt(n) &&
              ("*" != e.charAt(n) || "/" != e.charAt(n + 1));

            )
              ++n;
            if (((n += 2), "" === e.charAt(n - 1)))
              return error("End of comment missing");
            var r = e.slice(2, n - 2);
            return (
              (c += 2),
              updatePosition(r),
              (e = e.slice(n)),
              (c += 2),
              t({ type: "comment", comment: r })
            );
          }
        }
        return (
          match(r),
          (function () {
            var e,
              n = [];
            for (
              comments(n);
              (e = (function () {
                var e = position(),
                  n = match(i);
                if (n) {
                  if ((comment(), !match(o)))
                    return error("property missing ':'");
                  var r = match(a),
                    s = e({
                      type: "declaration",
                      property: trim(n[0].replace(t, "")),
                      value: r ? trim(r[0].replace(t, "")) : "",
                    });
                  return match(l), s;
                }
              })());

            )
              !1 !== e && (n.push(e), comments(n));
            return n;
          })()
        );
      };
    },
    36604: function (e) {
      "use strict";
      var t =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      e.exports = function (e, n) {
        var r = 0,
          i = [];
        if (Array.isArray(e)) for (; r < e.length && !1 !== n(e[r], r, e); ++r);
        else if ((void 0 === e ? "undefined" : t(e)) === "object" && null !== e)
          for (
            i = Object.keys(e);
            r < i.length && !1 !== n(e[i[r]], i[r], e);
            ++r
          );
      };
    },
    93096: function (e, t, n) {
      var r = "Expected a function",
        i = 0 / 0,
        o = /^\s+|\s+$/g,
        a = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        u = parseInt,
        c = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
        f = "object" == typeof self && self && self.Object === Object && self,
        p = c || f || Function("return this")(),
        d = Object.prototype.toString,
        h = Math.max,
        m = Math.min,
        now = function () {
          return p.Date.now();
        };
      function isObject(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function toNumber(e) {
        if ("number" == typeof e) return e;
        if (
          "symbol" == typeof (t = e) ||
          (t && "object" == typeof t && "[object Symbol]" == d.call(t))
        )
          return i;
        if (isObject(e)) {
          var t,
            n = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = isObject(n) ? n + "" : n;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(o, "");
        var r = l.test(e);
        return r || s.test(e) ? u(e.slice(2), r ? 2 : 8) : a.test(e) ? i : +e;
      }
      e.exports = function (e, t, n) {
        var i = !0,
          o = !0;
        if ("function" != typeof e) throw TypeError(r);
        return (
          isObject(n) &&
            ((i = "leading" in n ? !!n.leading : i),
            (o = "trailing" in n ? !!n.trailing : o)),
          (function (e, t, n) {
            var i,
              o,
              a,
              l,
              s,
              u,
              c = 0,
              f = !1,
              p = !1,
              d = !0;
            if ("function" != typeof e) throw TypeError(r);
            function invokeFunc(t) {
              var n = i,
                r = o;
              return (i = o = void 0), (c = t), (l = e.apply(r, n));
            }
            function shouldInvoke(e) {
              var n = e - u,
                r = e - c;
              return void 0 === u || n >= t || n < 0 || (p && r >= a);
            }
            function timerExpired() {
              var e,
                n,
                r,
                i = now();
              if (shouldInvoke(i)) return trailingEdge(i);
              s = setTimeout(
                timerExpired,
                ((e = i - u), (n = i - c), (r = t - e), p ? m(r, a - n) : r)
              );
            }
            function trailingEdge(e) {
              return ((s = void 0), d && i)
                ? invokeFunc(e)
                : ((i = o = void 0), l);
            }
            function debounced() {
              var e,
                n = now(),
                r = shouldInvoke(n);
              if (((i = arguments), (o = this), (u = n), r)) {
                if (void 0 === s)
                  return (
                    (c = e = u),
                    (s = setTimeout(timerExpired, t)),
                    f ? invokeFunc(e) : l
                  );
                if (p) return (s = setTimeout(timerExpired, t)), invokeFunc(u);
              }
              return void 0 === s && (s = setTimeout(timerExpired, t)), l;
            }
            return (
              (t = toNumber(t) || 0),
              isObject(n) &&
                ((f = !!n.leading),
                (a = (p = "maxWait" in n) ? h(toNumber(n.maxWait) || 0, t) : a),
                (d = "trailing" in n ? !!n.trailing : d)),
              (debounced.cancel = function () {
                void 0 !== s && clearTimeout(s),
                  (c = 0),
                  (i = u = o = s = void 0);
              }),
              (debounced.flush = function () {
                return void 0 === s ? l : trailingEdge(now());
              }),
              debounced
            );
          })(e, t, { leading: i, maxWait: t, trailing: o })
        );
      };
    },
    17078: function (e, t, n) {
      "use strict";
      var r = n(36604);
      e.exports = function (e, t, n) {
        var i = !0 === n ? {} : n || e;
        return (
          r(e, function (e, n, r) {
            i[n] = t(e, n, r);
          }),
          i
        );
      };
    },
    92703: function (e, t, n) {
      "use strict";
      var r = n(50414);
      function emptyFunction() {}
      function emptyFunctionWithReset() {}
      (emptyFunctionWithReset.resetWarningCache = emptyFunction),
        (e.exports = function () {
          function shim(e, t, n, i, o, a) {
            if (a !== r) {
              var l = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((l.name = "Invariant Violation"), l);
            }
          }
          function getShim() {
            return shim;
          }
          shim.isRequired = shim;
          var e = {
            array: shim,
            bigint: shim,
            bool: shim,
            func: shim,
            number: shim,
            object: shim,
            string: shim,
            symbol: shim,
            any: shim,
            arrayOf: getShim,
            element: shim,
            elementType: shim,
            instanceOf: getShim,
            node: shim,
            objectOf: getShim,
            oneOf: getShim,
            oneOfType: getShim,
            shape: getShim,
            exact: getShim,
            checkPropTypes: emptyFunctionWithReset,
            resetWarningCache: emptyFunction,
          };
          return (e.PropTypes = e), e;
        });
    },
    45697: function (e, t, n) {
      e.exports = n(92703)();
    },
    50414: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    48477: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = (function () {
          function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (e, t, n) {
            return (
              t && defineProperties(e.prototype, t),
              n && defineProperties(e, n),
              e
            );
          };
        })(),
        i = _interopRequireDefault(n(67294)),
        o = _interopRequireDefault(n(31093));
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var a = (function (e) {
        function ButtonElement() {
          return (
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, ButtonElement),
            (function (e, t) {
              if (!e)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t && ("object" == typeof t || "function" == typeof t)
                ? t
                : e;
            })(
              this,
              (
                ButtonElement.__proto__ || Object.getPrototypeOf(ButtonElement)
              ).apply(this, arguments)
            )
          );
        }
        return (
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(ButtonElement, e),
          r(ButtonElement, [
            {
              key: "render",
              value: function () {
                return i.default.createElement(
                  "button",
                  this.props,
                  this.props.children
                );
              },
            },
          ]),
          ButtonElement
        );
      })(i.default.Component);
      t.default = (0, o.default)(a);
    },
    35343: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = (function () {
          function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (e, t, n) {
            return (
              t && defineProperties(e.prototype, t),
              n && defineProperties(e, n),
              e
            );
          };
        })(),
        o = _interopRequireDefault(n(67294)),
        a = _interopRequireDefault(n(18e3)),
        l = _interopRequireDefault(n(45697));
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = (function (e) {
        function ElementWrapper() {
          return (
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, ElementWrapper),
            (function (e, t) {
              if (!e)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t && ("object" == typeof t || "function" == typeof t)
                ? t
                : e;
            })(
              this,
              (
                ElementWrapper.__proto__ ||
                Object.getPrototypeOf(ElementWrapper)
              ).apply(this, arguments)
            )
          );
        }
        return (
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(ElementWrapper, e),
          i(ElementWrapper, [
            {
              key: "render",
              value: function () {
                var e = this,
                  t = r({}, this.props);
                return (
                  delete t.name,
                  t.parentBindings && delete t.parentBindings,
                  o.default.createElement(
                    "div",
                    r({}, t, {
                      ref: function (t) {
                        e.props.parentBindings.domNode = t;
                      },
                    }),
                    this.props.children
                  )
                );
              },
            },
          ]),
          ElementWrapper
        );
      })(o.default.Component);
      (s.propTypes = { name: l.default.string, id: l.default.string }),
        (t.default = (0, a.default)(s));
    },
    68939: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = _interopRequireDefault(n(67294)),
        i = _interopRequireDefault(n(31093));
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function _possibleConstructorReturn(e, t) {
        if (!e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t && ("object" == typeof t || "function" == typeof t) ? t : e;
      }
      var o = (function (e) {
        function LinkElement() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, LinkElement);
          for (
            var e, t, n, i = arguments.length, o = Array(i), a = 0;
            a < i;
            a++
          )
            o[a] = arguments[a];
          return (
            (t = n =
              _possibleConstructorReturn(
                this,
                (e =
                  LinkElement.__proto__ ||
                  Object.getPrototypeOf(LinkElement)).call.apply(
                  e,
                  [this].concat(o)
                )
              )),
            (n.render = function () {
              return r.default.createElement("a", n.props, n.props.children);
            }),
            _possibleConstructorReturn(n, t)
          );
        }
        return (
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(LinkElement, e),
          LinkElement
        );
      })(r.default.Component);
      t.default = (0, i.default)(o);
    },
    66261: function (e, t, n) {
      "use strict";
      t.NY = void 0;
      var r = _interopRequireDefault(n(68939)),
        i = _interopRequireDefault(n(48477)),
        o = _interopRequireDefault(n(35343)),
        a = _interopRequireDefault(n(82628)),
        l = _interopRequireDefault(n(64592)),
        s = _interopRequireDefault(n(87606)),
        u = _interopRequireDefault(n(53200)),
        c = _interopRequireDefault(n(31093)),
        f = _interopRequireDefault(n(18e3)),
        p = _interopRequireDefault(n(98482));
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      r.default,
        i.default,
        o.default,
        a.default,
        l.default,
        s.default,
        (t.NY = u.default),
        c.default,
        f.default,
        p.default,
        r.default,
        i.default,
        o.default,
        a.default,
        l.default,
        s.default,
        u.default,
        c.default,
        f.default,
        p.default;
    },
    98482: function (e, t, n) {
      "use strict";
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = (function () {
          function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (e, t, n) {
            return (
              t && defineProperties(e.prototype, t),
              n && defineProperties(e, n),
              e
            );
          };
        })();
      function _classCallCheck(e, t) {
        if (!(e instanceof t))
          throw TypeError("Cannot call a class as a function");
      }
      function _possibleConstructorReturn(e, t) {
        if (!e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t && ("object" == typeof t || "function" == typeof t) ? t : e;
      }
      function _inherits(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      var o = n(67294);
      n(73935), n(54259);
      var a = n(87606),
        l = n(82628),
        s = n(45697),
        u = n(29678),
        c = {
          to: s.string.isRequired,
          containerId: s.string,
          container: s.object,
          activeClass: s.string,
          spy: s.bool,
          smooth: s.oneOfType([s.bool, s.string]),
          offset: s.number,
          delay: s.number,
          isDynamic: s.bool,
          onClick: s.func,
          duration: s.oneOfType([s.number, s.func]),
          absolute: s.bool,
          onSetActive: s.func,
          onSetInactive: s.func,
          ignoreCancelEvents: s.bool,
          hashSpy: s.bool,
          spyThrottle: s.number,
        };
      e.exports = {
        Scroll: function (e, t) {
          console.warn("Helpers.Scroll is deprecated since v1.7.0");
          var n = t || l,
            s = (function (t) {
              function Scroll(e) {
                _classCallCheck(this, Scroll);
                var t = _possibleConstructorReturn(
                  this,
                  (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(
                    this,
                    e
                  )
                );
                return _initialiseProps.call(t), (t.state = { active: !1 }), t;
              }
              return (
                _inherits(Scroll, t),
                i(Scroll, [
                  {
                    key: "getScrollSpyContainer",
                    value: function () {
                      var e = this.props.containerId,
                        t = this.props.container;
                      return e
                        ? document.getElementById(e)
                        : t && t.nodeType
                        ? t
                        : document;
                    },
                  },
                  {
                    key: "componentDidMount",
                    value: function () {
                      if (this.props.spy || this.props.hashSpy) {
                        var e = this.getScrollSpyContainer();
                        a.isMounted(e) || a.mount(e, this.props.spyThrottle),
                          this.props.hashSpy &&
                            (u.isMounted() || u.mount(n),
                            u.mapContainer(this.props.to, e)),
                          this.props.spy &&
                            a.addStateHandler(this.stateHandler),
                          a.addSpyHandler(this.spyHandler, e),
                          this.setState({ container: e });
                      }
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      a.unmount(this.stateHandler, this.spyHandler);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var t = "";
                      t =
                        this.state && this.state.active
                          ? (
                              (this.props.className || "") +
                              " " +
                              (this.props.activeClass || "active")
                            ).trim()
                          : this.props.className;
                      var n = r({}, this.props);
                      for (var i in c) n.hasOwnProperty(i) && delete n[i];
                      return (
                        (n.className = t),
                        (n.onClick = this.handleClick),
                        o.createElement(e, n)
                      );
                    },
                  },
                ]),
                Scroll
              );
            })(o.Component),
            _initialiseProps = function () {
              var e = this;
              (this.scrollTo = function (t, i) {
                n.scrollTo(t, r({}, e.state, i));
              }),
                (this.handleClick = function (t) {
                  e.props.onClick && e.props.onClick(t),
                    t.stopPropagation && t.stopPropagation(),
                    t.preventDefault && t.preventDefault(),
                    e.scrollTo(e.props.to, e.props);
                }),
                (this.stateHandler = function () {
                  n.getActiveLink() !== e.props.to &&
                    (null !== e.state &&
                      e.state.active &&
                      e.props.onSetInactive &&
                      e.props.onSetInactive(),
                    e.setState({ active: !1 }));
                }),
                (this.spyHandler = function (t) {
                  var r = e.getScrollSpyContainer();
                  if (!u.isMounted() || u.isInitialized()) {
                    var i = e.props.to,
                      o = null,
                      l = 0,
                      s = 0,
                      c = 0;
                    if (
                      (r.getBoundingClientRect &&
                        (c = r.getBoundingClientRect().top),
                      !o || e.props.isDynamic)
                    ) {
                      if (!(o = n.get(i))) return;
                      var f = o.getBoundingClientRect();
                      s = (l = f.top - c + t) + f.height;
                    }
                    var p = t - e.props.offset,
                      d = p >= Math.floor(l) && p < Math.floor(s),
                      h = p < Math.floor(l) || p >= Math.floor(s),
                      m = n.getActiveLink();
                    return h
                      ? (i === m && n.setActiveLink(void 0),
                        e.props.hashSpy && u.getHash() === i && u.changeHash(),
                        e.props.spy &&
                          e.state.active &&
                          (e.setState({ active: !1 }),
                          e.props.onSetInactive && e.props.onSetInactive()),
                        a.updateStates())
                      : d && m !== i
                      ? (n.setActiveLink(i),
                        e.props.hashSpy && u.changeHash(i),
                        e.props.spy &&
                          (e.setState({ active: !0 }),
                          e.props.onSetActive && e.props.onSetActive(i)),
                        a.updateStates())
                      : void 0;
                  }
                });
            };
          return (s.propTypes = c), (s.defaultProps = { offset: 0 }), s;
        },
        Element: function (e) {
          console.warn("Helpers.Element is deprecated since v1.7.0");
          var t = (function (t) {
            function Element(e) {
              _classCallCheck(this, Element);
              var t = _possibleConstructorReturn(
                this,
                (Element.__proto__ || Object.getPrototypeOf(Element)).call(
                  this,
                  e
                )
              );
              return (t.childBindings = { domNode: null }), t;
            }
            return (
              _inherits(Element, t),
              i(Element, [
                {
                  key: "componentDidMount",
                  value: function () {
                    if ("undefined" == typeof window) return !1;
                    this.registerElems(this.props.name);
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (e) {
                    this.props.name !== e.name &&
                      this.registerElems(this.props.name);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    if ("undefined" == typeof window) return !1;
                    l.unregister(this.props.name);
                  },
                },
                {
                  key: "registerElems",
                  value: function (e) {
                    l.register(e, this.childBindings.domNode);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return o.createElement(
                      e,
                      r({}, this.props, { parentBindings: this.childBindings })
                    );
                  },
                },
              ]),
              Element
            );
          })(o.Component);
          return (t.propTypes = { name: s.string, id: s.string }), t;
        },
      };
    },
    53200: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        };
      _interopRequireDefault(n(54259));
      var i = _interopRequireDefault(n(89765)),
        o = _interopRequireDefault(n(50140)),
        a = _interopRequireDefault(n(64592));
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var getAnimationType = function (e) {
          return i.default[e.smooth] || i.default.defaultEasing;
        },
        l =
          (function () {
            if ("undefined" != typeof window)
              return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame
              );
          })() ||
          function (e, t, n) {
            window.setTimeout(e, n || 1e3 / 60, new Date().getTime());
          },
        makeData = function () {
          return {
            currentPosition: 0,
            startPosition: 0,
            targetPosition: 0,
            progress: 0,
            duration: 0,
            cancel: !1,
            target: null,
            containerElement: null,
            to: null,
            start: null,
            delta: null,
            percent: null,
            delayTimeout: null,
          };
        },
        currentPositionX = function (e) {
          var t = e.data.containerElement;
          if (t && t !== document && t !== document.body) return t.scrollLeft;
          var n = void 0 !== window.pageXOffset,
            r = "CSS1Compat" === (document.compatMode || "");
          return n
            ? window.pageXOffset
            : r
            ? document.documentElement.scrollLeft
            : document.body.scrollLeft;
        },
        currentPositionY = function (e) {
          var t = e.data.containerElement;
          if (t && t !== document && t !== document.body) return t.scrollTop;
          var n = void 0 !== window.pageXOffset,
            r = "CSS1Compat" === (document.compatMode || "");
          return n
            ? window.pageYOffset
            : r
            ? document.documentElement.scrollTop
            : document.body.scrollTop;
        },
        scrollContainerWidth = function (e) {
          var t = e.data.containerElement;
          if (t && t !== document && t !== document.body)
            return t.scrollWidth - t.offsetWidth;
          var n = document.body,
            r = document.documentElement;
          return Math.max(
            n.scrollWidth,
            n.offsetWidth,
            r.clientWidth,
            r.scrollWidth,
            r.offsetWidth
          );
        },
        scrollContainerHeight = function (e) {
          var t = e.data.containerElement;
          if (t && t !== document && t !== document.body)
            return t.scrollHeight - t.offsetHeight;
          var n = document.body,
            r = document.documentElement;
          return Math.max(
            n.scrollHeight,
            n.offsetHeight,
            r.clientHeight,
            r.scrollHeight,
            r.offsetHeight
          );
        },
        animateScroll = function animateScroll(e, t, n) {
          var r = t.data;
          if (!t.ignoreCancelEvents && r.cancel) {
            a.default.registered.end &&
              a.default.registered.end(r.to, r.target, r.currentPositionY);
            return;
          }
          if (
            ((r.delta = Math.round(r.targetPosition - r.startPosition)),
            null === r.start && (r.start = n),
            (r.progress = n - r.start),
            (r.percent =
              r.progress >= r.duration ? 1 : e(r.progress / r.duration)),
            (r.currentPosition =
              r.startPosition + Math.ceil(r.delta * r.percent)),
            r.containerElement &&
            r.containerElement !== document &&
            r.containerElement !== document.body
              ? t.horizontal
                ? (r.containerElement.scrollLeft = r.currentPosition)
                : (r.containerElement.scrollTop = r.currentPosition)
              : t.horizontal
              ? window.scrollTo(r.currentPosition, 0)
              : window.scrollTo(0, r.currentPosition),
            r.percent < 1)
          ) {
            var i = animateScroll.bind(null, e, t);
            l.call(window, i);
            return;
          }
          a.default.registered.end &&
            a.default.registered.end(r.to, r.target, r.currentPosition);
        },
        setContainer = function (e) {
          e.data.containerElement = e
            ? e.containerId
              ? document.getElementById(e.containerId)
              : e.container && e.container.nodeType
              ? e.container
              : document
            : null;
        },
        animateTopScroll = function (e, t, n, r) {
          if (
            ((t.data = t.data || makeData()),
            window.clearTimeout(t.data.delayTimeout),
            o.default.subscribe(function () {
              t.data.cancel = !0;
            }),
            setContainer(t),
            (t.data.start = null),
            (t.data.cancel = !1),
            (t.data.startPosition = t.horizontal
              ? currentPositionX(t)
              : currentPositionY(t)),
            (t.data.targetPosition = t.absolute ? e : e + t.data.startPosition),
            t.data.startPosition === t.data.targetPosition)
          ) {
            a.default.registered.end &&
              a.default.registered.end(
                t.data.to,
                t.data.target,
                t.data.currentPosition
              );
            return;
          }
          (t.data.delta = Math.round(
            t.data.targetPosition - t.data.startPosition
          )),
            (t.data.duration = (
              "function" == typeof (i = t.duration)
                ? i
                : function () {
                    return i;
                  }
            )(t.data.delta)),
            (t.data.duration = isNaN(parseFloat(t.data.duration))
              ? 1e3
              : parseFloat(t.data.duration)),
            (t.data.to = n),
            (t.data.target = r);
          var i,
            s = getAnimationType(t),
            u = animateScroll.bind(null, s, t);
          if (t && t.delay > 0) {
            t.data.delayTimeout = window.setTimeout(function () {
              a.default.registered.begin &&
                a.default.registered.begin(t.data.to, t.data.target),
                l.call(window, u);
            }, t.delay);
            return;
          }
          a.default.registered.begin &&
            a.default.registered.begin(t.data.to, t.data.target),
            l.call(window, u);
        },
        proceedOptions = function (e) {
          return (
            ((e = r({}, e)).data = e.data || makeData()), (e.absolute = !0), e
          );
        };
      t.default = {
        animateTopScroll: animateTopScroll,
        getAnimationType: getAnimationType,
        scrollToTop: function (e) {
          animateTopScroll(0, proceedOptions(e));
        },
        scrollToBottom: function (e) {
          setContainer((e = proceedOptions(e))),
            animateTopScroll(
              e.horizontal ? scrollContainerWidth(e) : scrollContainerHeight(e),
              e
            );
        },
        scrollTo: function (e, t) {
          animateTopScroll(e, proceedOptions(t));
        },
        scrollMore: function (e, t) {
          setContainer((t = proceedOptions(t))),
            animateTopScroll(
              e + (t.horizontal ? currentPositionX(t) : currentPositionY(t)),
              t
            );
        },
      };
    },
    50140: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(55236),
        i = ["mousedown", "mousewheel", "touchmove", "keydown"];
      t.default = {
        subscribe: function (e) {
          return (
            "undefined" != typeof document &&
            i.forEach(function (t) {
              return (0, r.addPassiveEventListener)(document, t, e);
            })
          );
        },
      };
    },
    55236: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.addPassiveEventListener = function (e, t, r) {
          var i = r.name;
          i || ((i = t), console.warn("Listener must be a named function.")),
            n.has(t) || n.set(t, new Set());
          var o = n.get(t);
          if (!o.has(i)) {
            var a = (function () {
              var e = !1;
              try {
                var t = Object.defineProperty({}, "passive", {
                  get: function () {
                    e = !0;
                  },
                });
                window.addEventListener("test", null, t);
              } catch (e) {}
              return e;
            })();
            e.addEventListener(t, r, !!a && { passive: !0 }), o.add(i);
          }
        }),
        (t.removePassiveEventListener = function (e, t, r) {
          e.removeEventListener(t, r), n.get(t).delete(r.name || t);
        });
      var n = new Map();
    },
    18e3: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = (function () {
          function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (e, t, n) {
            return (
              t && defineProperties(e.prototype, t),
              n && defineProperties(e, n),
              e
            );
          };
        })(),
        o = _interopRequireDefault(n(67294));
      _interopRequireDefault(n(73935));
      var a = _interopRequireDefault(n(82628)),
        l = _interopRequireDefault(n(45697));
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default = function (e) {
        var t = (function (t) {
          function Element(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, Element);
            var t = (function (e, t) {
              if (!e)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t && ("object" == typeof t || "function" == typeof t)
                ? t
                : e;
            })(
              this,
              (Element.__proto__ || Object.getPrototypeOf(Element)).call(
                this,
                e
              )
            );
            return (t.childBindings = { domNode: null }), t;
          }
          return (
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(Element, t),
            i(Element, [
              {
                key: "componentDidMount",
                value: function () {
                  if ("undefined" == typeof window) return !1;
                  this.registerElems(this.props.name);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.props.name !== e.name &&
                    this.registerElems(this.props.name);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  if ("undefined" == typeof window) return !1;
                  a.default.unregister(this.props.name);
                },
              },
              {
                key: "registerElems",
                value: function (e) {
                  a.default.register(e, this.childBindings.domNode);
                },
              },
              {
                key: "render",
                value: function () {
                  return o.default.createElement(
                    e,
                    r({}, this.props, { parentBindings: this.childBindings })
                  );
                },
              },
            ]),
            Element
          );
        })(o.default.Component);
        return (
          (t.propTypes = { name: l.default.string, id: l.default.string }), t
        );
      };
    },
    64592: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        registered: {},
        scrollEvent: {
          register: function (e, t) {
            n.registered[e] = t;
          },
          remove: function (e) {
            n.registered[e] = null;
          },
        },
      };
      t.default = n;
    },
    29678: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), n(55236);
      var r,
        i = (r = n(54259)) && r.__esModule ? r : { default: r };
      t.default = {
        mountFlag: !1,
        initialized: !1,
        scroller: null,
        containers: {},
        mount: function (e) {
          (this.scroller = e),
            (this.handleHashChange = this.handleHashChange.bind(this)),
            window.addEventListener("hashchange", this.handleHashChange),
            this.initStateFromHash(),
            (this.mountFlag = !0);
        },
        mapContainer: function (e, t) {
          this.containers[e] = t;
        },
        isMounted: function () {
          return this.mountFlag;
        },
        isInitialized: function () {
          return this.initialized;
        },
        initStateFromHash: function () {
          var e = this,
            t = this.getHash();
          t
            ? window.setTimeout(function () {
                e.scrollTo(t, !0), (e.initialized = !0);
              }, 10)
            : (this.initialized = !0);
        },
        scrollTo: function (e, t) {
          var n = this.scroller;
          if (n.get(e) && (t || e !== n.getActiveLink())) {
            var r = this.containers[e] || document;
            n.scrollTo(e, { container: r });
          }
        },
        getHash: function () {
          return i.default.getHash();
        },
        changeHash: function (e, t) {
          this.isInitialized() &&
            i.default.getHash() !== e &&
            i.default.updateHash(e, t);
        },
        handleHashChange: function () {
          this.scrollTo(this.getHash());
        },
        unmount: function () {
          (this.scroller = null),
            (this.containers = null),
            window.removeEventListener("hashchange", this.handleHashChange);
        },
      };
    },
    31093: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = (function () {
          function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (e, t, n) {
            return (
              t && defineProperties(e.prototype, t),
              n && defineProperties(e, n),
              e
            );
          };
        })(),
        o = _interopRequireDefault(n(67294)),
        a = _interopRequireDefault(n(87606)),
        l = _interopRequireDefault(n(82628)),
        s = _interopRequireDefault(n(45697)),
        u = _interopRequireDefault(n(29678));
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = {
        to: s.default.string.isRequired,
        containerId: s.default.string,
        container: s.default.object,
        activeClass: s.default.string,
        activeStyle: s.default.object,
        spy: s.default.bool,
        horizontal: s.default.bool,
        smooth: s.default.oneOfType([s.default.bool, s.default.string]),
        offset: s.default.number,
        delay: s.default.number,
        isDynamic: s.default.bool,
        onClick: s.default.func,
        duration: s.default.oneOfType([s.default.number, s.default.func]),
        absolute: s.default.bool,
        onSetActive: s.default.func,
        onSetInactive: s.default.func,
        ignoreCancelEvents: s.default.bool,
        hashSpy: s.default.bool,
        saveHashHistory: s.default.bool,
        spyThrottle: s.default.number,
      };
      t.default = function (e, t) {
        var n = t || l.default,
          s = (function (t) {
            function Link(e) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw TypeError("Cannot call a class as a function");
              })(this, Link);
              var t = (function (e, t) {
                if (!e)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return t && ("object" == typeof t || "function" == typeof t)
                  ? t
                  : e;
              })(
                this,
                (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, e)
              );
              return _initialiseProps.call(t), (t.state = { active: !1 }), t;
            }
            return (
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(Link, t),
              i(Link, [
                {
                  key: "getScrollSpyContainer",
                  value: function () {
                    var e = this.props.containerId,
                      t = this.props.container;
                    return e && !t
                      ? document.getElementById(e)
                      : t && t.nodeType
                      ? t
                      : document;
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    if (this.props.spy || this.props.hashSpy) {
                      var e = this.getScrollSpyContainer();
                      a.default.isMounted(e) ||
                        a.default.mount(e, this.props.spyThrottle),
                        this.props.hashSpy &&
                          (u.default.isMounted() || u.default.mount(n),
                          u.default.mapContainer(this.props.to, e)),
                        a.default.addSpyHandler(this.spyHandler, e),
                        this.setState({ container: e });
                    }
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    a.default.unmount(this.stateHandler, this.spyHandler);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = "";
                    t =
                      this.state && this.state.active
                        ? (
                            (this.props.className || "") +
                            " " +
                            (this.props.activeClass || "active")
                          ).trim()
                        : this.props.className;
                    var n = {};
                    n =
                      this.state && this.state.active
                        ? r({}, this.props.style, this.props.activeStyle)
                        : r({}, this.props.style);
                    var i = r({}, this.props);
                    for (var a in c) i.hasOwnProperty(a) && delete i[a];
                    return (
                      (i.className = t),
                      (i.style = n),
                      (i.onClick = this.handleClick),
                      o.default.createElement(e, i)
                    );
                  },
                },
              ]),
              Link
            );
          })(o.default.PureComponent),
          _initialiseProps = function () {
            var e = this;
            (this.scrollTo = function (t, i) {
              n.scrollTo(t, r({}, e.state, i));
            }),
              (this.handleClick = function (t) {
                e.props.onClick && e.props.onClick(t),
                  t.stopPropagation && t.stopPropagation(),
                  t.preventDefault && t.preventDefault(),
                  e.scrollTo(e.props.to, e.props);
              }),
              (this.spyHandler = function (t, r) {
                var i = e.getScrollSpyContainer();
                if (!u.default.isMounted() || u.default.isInitialized()) {
                  var o = e.props.horizontal,
                    a = e.props.to,
                    l = null,
                    s = void 0,
                    c = void 0;
                  if (o) {
                    var f = 0,
                      p = 0,
                      d = 0;
                    if (
                      (i.getBoundingClientRect &&
                        (d = i.getBoundingClientRect().left),
                      !l || e.props.isDynamic)
                    ) {
                      if (!(l = n.get(a))) return;
                      var h = l.getBoundingClientRect();
                      p = (f = h.left - d + t) + h.width;
                    }
                    var m = t - e.props.offset;
                    (s = m >= Math.floor(f) && m < Math.floor(p)),
                      (c = m < Math.floor(f) || m >= Math.floor(p));
                  } else {
                    var g = 0,
                      y = 0,
                      b = 0;
                    if (
                      (i.getBoundingClientRect &&
                        (b = i.getBoundingClientRect().top),
                      !l || e.props.isDynamic)
                    ) {
                      if (!(l = n.get(a))) return;
                      var k = l.getBoundingClientRect();
                      y = (g = k.top - b + r) + k.height;
                    }
                    var _ = r - e.props.offset;
                    (s = _ >= Math.floor(g) && _ < Math.floor(y)),
                      (c = _ < Math.floor(g) || _ >= Math.floor(y));
                  }
                  var v = n.getActiveLink();
                  if (c) {
                    if (
                      (a === v && n.setActiveLink(void 0),
                      e.props.hashSpy && u.default.getHash() === a)
                    ) {
                      var x = e.props.saveHashHistory,
                        w = void 0 !== x && x;
                      u.default.changeHash("", w);
                    }
                    e.props.spy &&
                      e.state.active &&
                      (e.setState({ active: !1 }),
                      e.props.onSetInactive && e.props.onSetInactive(a, l));
                  }
                  if (s && (v !== a || !1 === e.state.active)) {
                    n.setActiveLink(a);
                    var C = e.props.saveHashHistory,
                      S = void 0 !== C && C;
                    e.props.hashSpy && u.default.changeHash(a, S),
                      e.props.spy &&
                        (e.setState({ active: !0 }),
                        e.props.onSetActive && e.props.onSetActive(a, l));
                  }
                }
              });
          };
        return (s.propTypes = c), (s.defaultProps = { offset: 0 }), s;
      };
    },
    87606: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        i = (r = n(93096)) && r.__esModule ? r : { default: r },
        o = n(55236),
        eventThrottler = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 66;
          return (0, i.default)(e, t);
        },
        a = {
          spyCallbacks: [],
          spySetState: [],
          scrollSpyContainers: [],
          mount: function (e, t) {
            if (e) {
              var n = eventThrottler(function (t) {
                a.scrollHandler(e);
              }, t);
              a.scrollSpyContainers.push(e),
                (0, o.addPassiveEventListener)(e, "scroll", n);
            }
          },
          isMounted: function (e) {
            return -1 !== a.scrollSpyContainers.indexOf(e);
          },
          currentPositionX: function (e) {
            if (e !== document) return e.scrollLeft;
            var t = void 0 !== window.pageYOffset,
              n = "CSS1Compat" === (document.compatMode || "");
            return t
              ? window.pageXOffset
              : n
              ? document.documentElement.scrollLeft
              : document.body.scrollLeft;
          },
          currentPositionY: function (e) {
            if (e !== document) return e.scrollTop;
            var t = void 0 !== window.pageXOffset,
              n = "CSS1Compat" === (document.compatMode || "");
            return t
              ? window.pageYOffset
              : n
              ? document.documentElement.scrollTop
              : document.body.scrollTop;
          },
          scrollHandler: function (e) {
            (
              a.scrollSpyContainers[a.scrollSpyContainers.indexOf(e)]
                .spyCallbacks || []
            ).forEach(function (t) {
              return t(a.currentPositionX(e), a.currentPositionY(e));
            });
          },
          addStateHandler: function (e) {
            a.spySetState.push(e);
          },
          addSpyHandler: function (e, t) {
            var n = a.scrollSpyContainers[a.scrollSpyContainers.indexOf(t)];
            n.spyCallbacks || (n.spyCallbacks = []),
              n.spyCallbacks.push(e),
              e(a.currentPositionX(t), a.currentPositionY(t));
          },
          updateStates: function () {
            a.spySetState.forEach(function (e) {
              return e();
            });
          },
          unmount: function (e, t) {
            a.scrollSpyContainers.forEach(function (e) {
              return (
                e.spyCallbacks &&
                e.spyCallbacks.length &&
                e.spyCallbacks.indexOf(t) > -1 &&
                e.spyCallbacks.splice(e.spyCallbacks.indexOf(t), 1)
              );
            }),
              a.spySetState &&
                a.spySetState.length &&
                a.spySetState.indexOf(e) > -1 &&
                a.spySetState.splice(a.spySetState.indexOf(e), 1),
              document.removeEventListener("scroll", a.scrollHandler);
          },
          update: function () {
            return a.scrollSpyContainers.forEach(function (e) {
              return a.scrollHandler(e);
            });
          },
        };
      t.default = a;
    },
    82628: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        i = _interopRequireDefault(n(54259)),
        o = _interopRequireDefault(n(53200)),
        a = _interopRequireDefault(n(64592));
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = {},
        s = void 0;
      t.default = {
        unmount: function () {
          l = {};
        },
        register: function (e, t) {
          l[e] = t;
        },
        unregister: function (e) {
          delete l[e];
        },
        get: function (e) {
          return (
            l[e] ||
            document.getElementById(e) ||
            document.getElementsByName(e)[0] ||
            document.getElementsByClassName(e)[0]
          );
        },
        setActiveLink: function (e) {
          return (s = e);
        },
        getActiveLink: function () {
          return s;
        },
        scrollTo: function (e, t) {
          var n = this.get(e);
          if (!n) {
            console.warn("target Element not found");
            return;
          }
          var l = (t = r({}, t, { absolute: !1 })).containerId,
            s = t.container,
            u = void 0;
          (u = l ? document.getElementById(l) : s && s.nodeType ? s : document),
            (t.absolute = !0);
          var c = t.horizontal,
            f = i.default.scrollOffset(u, n, c) + (t.offset || 0);
          if (!t.smooth) {
            a.default.registered.begin && a.default.registered.begin(e, n),
              u === document
                ? t.horizontal
                  ? window.scrollTo(f, 0)
                  : window.scrollTo(0, f)
                : (u.scrollTop = f),
              a.default.registered.end && a.default.registered.end(e, n);
            return;
          }
          o.default.animateTopScroll(f, t, e, n);
        },
      };
    },
    89765: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          defaultEasing: function (e) {
            return e < 0.5
              ? Math.pow(2 * e, 2) / 2
              : 1 - Math.pow((1 - e) * 2, 2) / 2;
          },
          linear: function (e) {
            return e;
          },
          easeInQuad: function (e) {
            return e * e;
          },
          easeOutQuad: function (e) {
            return e * (2 - e);
          },
          easeInOutQuad: function (e) {
            return e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e;
          },
          easeInCubic: function (e) {
            return e * e * e;
          },
          easeOutCubic: function (e) {
            return --e * e * e + 1;
          },
          easeInOutCubic: function (e) {
            return e < 0.5
              ? 4 * e * e * e
              : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
          },
          easeInQuart: function (e) {
            return e * e * e * e;
          },
          easeOutQuart: function (e) {
            return 1 - --e * e * e * e;
          },
          easeInOutQuart: function (e) {
            return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
          },
          easeInQuint: function (e) {
            return e * e * e * e * e;
          },
          easeOutQuint: function (e) {
            return 1 + --e * e * e * e * e;
          },
          easeInOutQuint: function (e) {
            return e < 0.5
              ? 16 * e * e * e * e * e
              : 1 + 16 * --e * e * e * e * e;
          },
        });
    },
    54259: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var getElementOffsetInfoUntil = function (e, t) {
        for (var n = e.offsetTop, r = e.offsetParent; r && !t(r); )
          (n += r.offsetTop), (r = r.offsetParent);
        return { offsetTop: n, offsetParent: r };
      };
      t.default = {
        updateHash: function (e, t) {
          var n = 0 === e.indexOf("#") ? e.substring(1) : e,
            r = n ? "#" + n : "",
            i = window && window.location,
            o = r ? i.pathname + i.search + r : i.pathname + i.search;
          t
            ? history.pushState(history.state, "", o)
            : history.replaceState(history.state, "", o);
        },
        getHash: function () {
          return window.location.hash.replace(/^#/, "");
        },
        filterElementInContainer: function (e) {
          return function (t) {
            return e.contains
              ? e != t && e.contains(t)
              : !!(16 & e.compareDocumentPosition(t));
          };
        },
        scrollOffset: function (e, t, n) {
          if (n)
            return e === document
              ? t.getBoundingClientRect().left +
                  (window.scrollX || window.pageXOffset)
              : "static" !== getComputedStyle(e).position
              ? t.offsetLeft
              : t.offsetLeft - e.offsetLeft;
          if (e === document)
            return (
              t.getBoundingClientRect().top +
              (window.scrollY || window.pageYOffset)
            );
          if ("static" !== getComputedStyle(e).position) {
            if (t.offsetParent !== e) {
              var r = getElementOffsetInfoUntil(t, function (t) {
                  return t === e || t === document;
                }),
                i = r.offsetTop;
              if (r.offsetParent !== e)
                throw Error(
                  "Seems containerElement is not an ancestor of the Element"
                );
              return i;
            }
            return t.offsetTop;
          }
          if (t.offsetParent === e.offsetParent)
            return t.offsetTop - e.offsetTop;
          var isDocument = function (e) {
            return e === document;
          };
          return (
            getElementOffsetInfoUntil(t, isDocument).offsetTop -
            getElementOffsetInfoUntil(e, isDocument).offsetTop
          );
        },
      };
    },
    5174: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(n(18139));
      t.default = function (e, t) {
        var n = null;
        if (!e || "string" != typeof e) return n;
        var r = (0, i.default)(e),
          o = "function" == typeof t;
        return (
          r.forEach(function (e) {
            if ("declaration" === e.type) {
              var r = e.property,
                i = e.value;
              o ? t(r, i, e) : i && ((n = n || {})[r] = i);
            }
          }),
          n
        );
      };
    },
    85997: function (e, t, n) {
      "use strict";
      var r, i;
      n.d(t, {
        M2: function () {
          return Marked;
        },
        Th: function () {
          return Renderer;
        },
      });
      /*
       * @license
       *
       * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
       * https://github.com/chjj/marked
       *
       * Copyright (c) 2018-2021, Костя Третяк. (MIT Licensed)
       * https://github.com/ts-stack/markdown
       */ let ExtendRegexp = class ExtendRegexp {
        source;
        flags;
        constructor(e, t = "") {
          (this.source = e.source), (this.flags = t);
        }
        setGroup(e, t) {
          let n = "string" == typeof t ? t : t.source;
          return (
            (n = n.replace(/(^|[^\[])\^/g, "$1")),
            (this.source = this.source.replace(e, n)),
            this
          );
        }
        getRegexp() {
          return new RegExp(this.source, this.flags);
        }
      };
      /**
       * @license
       *
       * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
       * https://github.com/chjj/marked
       *
       * Copyright (c) 2018-2021, Костя Третяк. (MIT Licensed)
       * https://github.com/ts-stack/markdown
       */ let o = /[&<>"']/,
        a = /[&<>"']/g,
        l = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        },
        s = /[<>"']|&(?!#?\w+;)/,
        u = /[<>"']|&(?!#?\w+;)/g;
      function escape(e, t) {
        if (t) {
          if (o.test(e)) return e.replace(a, (e) => l[e]);
        } else if (s.test(e)) return e.replace(u, (e) => l[e]);
        return e;
      }
      function unescape(e) {
        return e.replace(
          /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
          function (e, t) {
            return "colon" === (t = t.toLowerCase())
              ? ":"
              : "#" === t.charAt(0)
              ? "x" === t.charAt(1)
                ? String.fromCharCode(parseInt(t.substring(2), 16))
                : String.fromCharCode(+t.substring(1))
              : "";
          }
        );
      }
      ((i = r || (r = {}))[(i.space = 1)] = "space"),
        (i[(i.text = 2)] = "text"),
        (i[(i.paragraph = 3)] = "paragraph"),
        (i[(i.heading = 4)] = "heading"),
        (i[(i.listStart = 5)] = "listStart"),
        (i[(i.listEnd = 6)] = "listEnd"),
        (i[(i.looseItemStart = 7)] = "looseItemStart"),
        (i[(i.looseItemEnd = 8)] = "looseItemEnd"),
        (i[(i.listItemStart = 9)] = "listItemStart"),
        (i[(i.listItemEnd = 10)] = "listItemEnd"),
        (i[(i.blockquoteStart = 11)] = "blockquoteStart"),
        (i[(i.blockquoteEnd = 12)] = "blockquoteEnd"),
        (i[(i.code = 13)] = "code"),
        (i[(i.table = 14)] = "table"),
        (i[(i.html = 15)] = "html"),
        (i[(i.hr = 16)] = "hr");
      let MarkedOptions = class MarkedOptions {
        gfm = !0;
        tables = !0;
        breaks = !1;
        pedantic = !1;
        sanitize = !1;
        sanitizer;
        mangle = !0;
        smartLists = !1;
        silent = !1;
        highlight;
        langPrefix = "lang-";
        smartypants = !1;
        headerPrefix = "";
        renderer;
        xhtml = !1;
        escape = escape;
        unescape = unescape;
        isNoP;
      };
      /**
       * @license
       *
       * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
       * https://github.com/chjj/marked
       *
       * Copyright (c) 2018-2021, Костя Третяк. (MIT Licensed)
       * https://github.com/ts-stack/markdown
       */ let Renderer = class Renderer {
        options;
        constructor(e) {
          this.options = e || Marked.options;
        }
        code(e, t, n, r) {
          if (this.options.highlight) {
            let r = this.options.highlight(e, t);
            null != r && r !== e && ((n = !0), (e = r));
          }
          let i = n ? e : this.options.escape(e, !0);
          if (!t)
            return `
<pre><code>${i}
</code></pre>
`;
          let o = this.options.langPrefix + this.options.escape(t, !0);
          return `
<pre><code class="${o}">${i}
</code></pre>
`;
        }
        blockquote(e) {
          return `<blockquote>
${e}</blockquote>
`;
        }
        html(e) {
          return e;
        }
        heading(e, t, n) {
          let r =
            this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-");
          return `<h${t} id="${r}">${e}</h${t}>
`;
        }
        hr() {
          return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
        }
        list(e, t) {
          let n = t ? "ol" : "ul";
          return `
<${n}>
${e}</${n}>
`;
        }
        listitem(e) {
          return "<li>" + e + "</li>\n";
        }
        paragraph(e) {
          return "<p>" + e + "</p>\n";
        }
        table(e, t) {
          return `
<table>
<thead>
${e}</thead>
<tbody>
${t}</tbody>
</table>
`;
        }
        tablerow(e) {
          return "<tr>\n" + e + "</tr>\n";
        }
        tablecell(e, t) {
          let n = t.header ? "th" : "td",
            r = t.align
              ? "<" + n + ' style="text-align:' + t.align + '">'
              : "<" + n + ">";
          return r + e + "</" + n + ">\n";
        }
        strong(e) {
          return "<strong>" + e + "</strong>";
        }
        em(e) {
          return "<em>" + e + "</em>";
        }
        codespan(e) {
          return "<code>" + e + "</code>";
        }
        br() {
          return this.options.xhtml ? "<br/>" : "<br>";
        }
        del(e) {
          return "<del>" + e + "</del>";
        }
        link(e, t, n) {
          if (this.options.sanitize) {
            let t;
            try {
              t = decodeURIComponent(this.options.unescape(e))
                .replace(/[^\w:]/g, "")
                .toLowerCase();
            } catch (e) {
              return n;
            }
            if (
              0 === t.indexOf("javascript:") ||
              0 === t.indexOf("vbscript:") ||
              0 === t.indexOf("data:")
            )
              return n;
          }
          let r = '<a href="' + e + '"';
          return t && (r += ' title="' + t + '"'), (r += ">" + n + "</a>");
        }
        image(e, t, n) {
          let r = '<img src="' + e + '" alt="' + n + '"';
          return (
            t && (r += ' title="' + t + '"'),
            (r += this.options.xhtml ? "/>" : ">")
          );
        }
        text(e) {
          return e;
        }
      };
      /**
       * @license
       *
       * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
       * https://github.com/chjj/marked
       *
       * Copyright (c) 2018-2021, Костя Третяк. (MIT Licensed)
       * https://github.com/ts-stack/markdown
       */ let InlineLexer = class InlineLexer {
        staticThis;
        links;
        options;
        static rulesBase = null;
        static rulesPedantic = null;
        static rulesGfm = null;
        static rulesBreaks = null;
        rules;
        renderer;
        inLink;
        hasRulesGfm;
        ruleCallbacks;
        constructor(e, t, n = Marked.options, r) {
          if (
            ((this.staticThis = e),
            (this.links = t),
            (this.options = n),
            (this.renderer =
              r || this.options.renderer || new Renderer(this.options)),
            !this.links)
          )
            throw Error("InlineLexer requires 'links' parameter.");
          this.setRules();
        }
        static output(e, t, n) {
          let r = new this(this, t, n);
          return r.output(e);
        }
        static getRulesBase() {
          if (this.rulesBase) return this.rulesBase;
          let e = {
            escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
            autolink: /^<([^ <>]+(@|:\/)[^ <>]+)>/,
            tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^<'">])*?>/,
            link: /^!?\[(inside)\]\(href\)/,
            reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
            nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
            strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
            em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
            code: /^(`+)([\s\S]*?[^`])\1(?!`)/,
            br: /^ {2,}\n(?!\s*$)/,
            text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/,
            _inside: /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,
            _href: /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,
          };
          return (
            (e.link = new ExtendRegexp(e.link)
              .setGroup("inside", e._inside)
              .setGroup("href", e._href)
              .getRegexp()),
            (e.reflink = new ExtendRegexp(e.reflink)
              .setGroup("inside", e._inside)
              .getRegexp()),
            (this.rulesBase = e)
          );
        }
        static getRulesPedantic() {
          return this.rulesPedantic
            ? this.rulesPedantic
            : (this.rulesPedantic = {
                ...this.getRulesBase(),
                strong:
                  /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
              });
        }
        static getRulesGfm() {
          if (this.rulesGfm) return this.rulesGfm;
          let e = this.getRulesBase(),
            t = new ExtendRegexp(e.escape).setGroup("])", "~|])").getRegexp(),
            n = new ExtendRegexp(e.text)
              .setGroup("]|", "~]|")
              .setGroup("|", "|https?://|")
              .getRegexp();
          return (this.rulesGfm = {
            ...e,
            escape: t,
            url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
            del: /^~~(?=\S)([\s\S]*?\S)~~/,
            text: n,
          });
        }
        static getRulesBreaks() {
          if (this.rulesBreaks) return this.rulesBreaks;
          let e = this.getRulesGfm(),
            t = this.getRulesGfm();
          return (this.rulesBreaks = {
            ...t,
            br: new ExtendRegexp(e.br).setGroup("{2,}", "*").getRegexp(),
            text: new ExtendRegexp(t.text).setGroup("{2,}", "*").getRegexp(),
          });
        }
        setRules() {
          this.options.gfm
            ? this.options.breaks
              ? (this.rules = this.staticThis.getRulesBreaks())
              : (this.rules = this.staticThis.getRulesGfm())
            : this.options.pedantic
            ? (this.rules = this.staticThis.getRulesPedantic())
            : (this.rules = this.staticThis.getRulesBase()),
            (this.hasRulesGfm = void 0 !== this.rules.url);
        }
        output(e) {
          let t;
          let n = "";
          for (; e; ) {
            if ((t = this.rules.escape.exec(e))) {
              (e = e.substring(t[0].length)), (n += t[1]);
              continue;
            }
            if ((t = this.rules.autolink.exec(e))) {
              let r, i;
              (e = e.substring(t[0].length)),
                "@" === t[2]
                  ? ((r = this.options.escape(
                      ":" === t[1].charAt(6)
                        ? this.mangle(t[1].substring(7))
                        : this.mangle(t[1])
                    )),
                    (i = this.mangle("mailto:") + r))
                  : (i = r = this.options.escape(t[1])),
                (n += this.renderer.link(i, null, r));
              continue;
            }
            if (
              !this.inLink &&
              this.hasRulesGfm &&
              (t = this.rules.url.exec(e))
            ) {
              e = e.substring(t[0].length);
              let r = this.options.escape(t[1]);
              n += this.renderer.link(r, null, r);
              continue;
            }
            if ((t = this.rules.tag.exec(e))) {
              !this.inLink && /^<a /i.test(t[0])
                ? (this.inLink = !0)
                : this.inLink && /^<\/a>/i.test(t[0]) && (this.inLink = !1),
                (e = e.substring(t[0].length)),
                (n += this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(t[0])
                    : this.options.escape(t[0])
                  : t[0]);
              continue;
            }
            if ((t = this.rules.link.exec(e))) {
              (e = e.substring(t[0].length)),
                (this.inLink = !0),
                (n += this.outputLink(t, { href: t[2], title: t[3] })),
                (this.inLink = !1);
              continue;
            }
            if (
              (t = this.rules.reflink.exec(e)) ||
              (t = this.rules.nolink.exec(e))
            ) {
              e = e.substring(t[0].length);
              let r = (t[2] || t[1]).replace(/\s+/g, " "),
                i = this.links[r.toLowerCase()];
              if (!i || !i.href) {
                (n += t[0].charAt(0)), (e = t[0].substring(1) + e);
                continue;
              }
              (this.inLink = !0),
                (n += this.outputLink(t, i)),
                (this.inLink = !1);
              continue;
            }
            if ((t = this.rules.strong.exec(e))) {
              (e = e.substring(t[0].length)),
                (n += this.renderer.strong(this.output(t[2] || t[1])));
              continue;
            }
            if ((t = this.rules.em.exec(e))) {
              (e = e.substring(t[0].length)),
                (n += this.renderer.em(this.output(t[2] || t[1])));
              continue;
            }
            if ((t = this.rules.code.exec(e))) {
              (e = e.substring(t[0].length)),
                (n += this.renderer.codespan(
                  this.options.escape(t[2].trim(), !0)
                ));
              continue;
            }
            if ((t = this.rules.br.exec(e))) {
              (e = e.substring(t[0].length)), (n += this.renderer.br());
              continue;
            }
            if (this.hasRulesGfm && (t = this.rules.del.exec(e))) {
              (e = e.substring(t[0].length)),
                (n += this.renderer.del(this.output(t[1])));
              continue;
            }
            if ((t = this.rules.text.exec(e))) {
              (e = e.substring(t[0].length)),
                (n += this.renderer.text(
                  this.options.escape(this.smartypants(t[0]))
                ));
              continue;
            }
            if (e) throw Error("Infinite loop on byte: " + e.charCodeAt(0));
          }
          return n;
        }
        outputLink(e, t) {
          let n = this.options.escape(t.href),
            r = t.title ? this.options.escape(t.title) : null;
          return "!" !== e[0].charAt(0)
            ? this.renderer.link(n, r, this.output(e[1]))
            : this.renderer.image(n, r, this.options.escape(e[1]));
        }
        smartypants(e) {
          return this.options.smartypants
            ? e
                .replace(/---/g, "—")
                .replace(/--/g, "–")
                .replace(/(^|[-\u2014/([{"\s])'/g, "$1‘")
                .replace(/'/g, "’")
                .replace(/(^|[-\u2014/([{\u2018\s])"/g, "$1“")
                .replace(/"/g, "”")
                .replace(/\.{3}/g, "…")
            : e;
        }
        mangle(e) {
          if (!this.options.mangle) return e;
          let t = "",
            n = e.length;
          for (let r = 0; r < n; r++) {
            let n;
            Math.random() > 0.5 && (n = "x" + e.charCodeAt(r).toString(16)),
              (t += "&#" + n + ";");
          }
          return t;
        }
      };
      /**
       * @license
       *
       * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
       * https://github.com/chjj/marked
       *
       * Copyright (c) 2018-2021, Костя Третяк. (MIT Licensed)
       * https://github.com/ts-stack/markdown
       */ let Parser = class Parser {
        simpleRenderers = [];
        tokens;
        token;
        inlineLexer;
        options;
        renderer;
        line = 0;
        constructor(e) {
          (this.tokens = []),
            (this.token = null),
            (this.options = e || Marked.options),
            (this.renderer =
              this.options.renderer || new Renderer(this.options));
        }
        static parse(e, t, n) {
          let r = new this(n);
          return r.parse(t, e);
        }
        parse(e, t) {
          (this.inlineLexer = new InlineLexer(
            InlineLexer,
            e,
            this.options,
            this.renderer
          )),
            (this.tokens = t.reverse());
          let n = "";
          for (; this.next(); ) n += this.tok();
          return n;
        }
        debug(e, t) {
          (this.inlineLexer = new InlineLexer(
            InlineLexer,
            e,
            this.options,
            this.renderer
          )),
            (this.tokens = t.reverse());
          let n = "";
          for (; this.next(); ) {
            let e = this.tok();
            (this.token.line = this.line += e.split("\n").length - 1), (n += e);
          }
          return n;
        }
        next() {
          return (this.token = this.tokens.pop());
        }
        getNextElement() {
          return this.tokens[this.tokens.length - 1];
        }
        parseText() {
          let e,
            t = this.token.text;
          for (; (e = this.getNextElement()) && e.type == r.text; )
            t += "\n" + this.next().text;
          return this.inlineLexer.output(t);
        }
        tok() {
          switch (this.token.type) {
            case r.space:
              return "";
            case r.paragraph:
              return this.renderer.paragraph(
                this.inlineLexer.output(this.token.text)
              );
            case r.text:
              if (this.options.isNoP) return this.parseText();
              return this.renderer.paragraph(this.parseText());
            case r.heading:
              return this.renderer.heading(
                this.inlineLexer.output(this.token.text),
                this.token.depth,
                this.token.text
              );
            case r.listStart: {
              let e = "",
                t = this.token.ordered;
              for (; this.next().type != r.listEnd; ) e += this.tok();
              return this.renderer.list(e, t);
            }
            case r.listItemStart: {
              let e = "";
              for (; this.next().type != r.listItemEnd; )
                e += this.token.type == r.text ? this.parseText() : this.tok();
              return this.renderer.listitem(e);
            }
            case r.looseItemStart: {
              let e = "";
              for (; this.next().type != r.listItemEnd; ) e += this.tok();
              return this.renderer.listitem(e);
            }
            case r.code:
              return this.renderer.code(
                this.token.text,
                this.token.lang,
                this.token.escaped,
                this.token.meta
              );
            case r.table: {
              let e,
                t = "",
                n = "";
              e = "";
              for (let t = 0; t < this.token.header.length; t++) {
                let n = { header: !0, align: this.token.align[t] },
                  r = this.inlineLexer.output(this.token.header[t]);
                e += this.renderer.tablecell(r, n);
              }
              for (let r of ((t += this.renderer.tablerow(e)),
              this.token.cells)) {
                e = "";
                for (let t = 0; t < r.length; t++)
                  e += this.renderer.tablecell(this.inlineLexer.output(r[t]), {
                    header: !1,
                    align: this.token.align[t],
                  });
                n += this.renderer.tablerow(e);
              }
              return this.renderer.table(t, n);
            }
            case r.blockquoteStart: {
              let e = "";
              for (; this.next().type != r.blockquoteEnd; ) e += this.tok();
              return this.renderer.blockquote(e);
            }
            case r.hr:
              return this.renderer.hr();
            case r.html: {
              let e =
                this.token.pre || this.options.pedantic
                  ? this.token.text
                  : this.inlineLexer.output(this.token.text);
              return this.renderer.html(e);
            }
            default: {
              if (this.simpleRenderers.length) {
                for (let e = 0; e < this.simpleRenderers.length; e++)
                  if (this.token.type == "simpleRule" + (e + 1))
                    return this.simpleRenderers[e].call(
                      this.renderer,
                      this.token.execArr
                    );
              }
              let e = `Token with "${this.token.type}" type was not found.`;
              if (this.options.silent) console.log(e);
              else throw Error(e);
            }
          }
        }
      };
      /**
       * @license
       *
       * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
       * https://github.com/chjj/marked
       *
       * Copyright (c) 2018-2021, Костя Третяк. (MIT Licensed)
       * https://github.com/ts-stack/markdown
       */ let Marked = class Marked {
        static options = new MarkedOptions();
        static simpleRenderers = [];
        static setOptions(e) {
          return Object.assign(this.options, e), this;
        }
        static setBlockRule(e, t = () => "") {
          return (
            BlockLexer.simpleRules.push(e), this.simpleRenderers.push(t), this
          );
        }
        static parse(e, t) {
          try {
            t = { ...this.options, ...t };
            let { tokens: n, links: r } = this.callBlockLexer(e, t);
            return this.callParser(n, r, t);
          } catch (e) {
            return this.callMe(e);
          }
        }
        static debug(e, t = this.options) {
          let { tokens: n, links: i } = this.callBlockLexer(e, t),
            o = n.slice(),
            a = new Parser(t);
          a.simpleRenderers = this.simpleRenderers;
          let l = a.debug(i, n);
          return {
            tokens: (o = o.map((e) => {
              e.type = r[e.type] || e.type;
              let t = e.line;
              return (delete e.line, t) ? { line: t, ...e } : e;
            })),
            links: i,
            result: l,
          };
        }
        static callBlockLexer(e = "", t) {
          if ("string" != typeof e)
            throw Error(
              `Expected that the 'src' parameter would have a 'string' type, got '${typeof e}'`
            );
          return (
            (e = e
              .replace(/\r\n|\r/g, "\n")
              .replace(/\t/g, "    ")
              .replace(/\u00a0/g, " ")
              .replace(/\u2424/g, "\n")
              .replace(/^ +$/gm, "")),
            BlockLexer.lex(e, t, !0)
          );
        }
        static callParser(e, t, n) {
          if (!this.simpleRenderers.length) return Parser.parse(e, t, n);
          {
            let r = new Parser(n);
            return (r.simpleRenderers = this.simpleRenderers), r.parse(t, e);
          }
        }
        static callMe(e) {
          if (
            ((e.message +=
              "\nPlease report this to https://github.com/ts-stack/markdown"),
            this.options.silent)
          )
            return (
              "<p>An error occured:</p><pre>" +
              this.options.escape(e.message + "", !0) +
              "</pre>"
            );
          throw e;
        }
      };
      /**
       * @license
       *
       * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
       * https://github.com/chjj/marked
       *
       * Copyright (c) 2018-2021, Костя Третяк. (MIT Licensed)
       * https://github.com/ts-stack/markdown
       */ let BlockLexer = class BlockLexer {
        staticThis;
        static simpleRules = [];
        static rulesBase = null;
        static rulesGfm = null;
        static rulesTables = null;
        rules;
        options;
        links = {};
        tokens = [];
        hasRulesGfm;
        hasRulesTables;
        constructor(e, t) {
          (this.staticThis = e),
            (this.options = t || Marked.options),
            this.setRules();
        }
        static lex(e, t, n, r) {
          let i = new this(this, t);
          return i.getTokens(e, n, r);
        }
        static getRulesBase() {
          if (this.rulesBase) return this.rulesBase;
          let e = {
            newline: /^\n+/,
            code: /^( {4}[^\n]+\n*)+/,
            hr: /^( *[-*_]){3,} *(?:\n+|$)/,
            heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
            lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
            blockquote: /^( *>[^\n]+(\n[^\n]+)*\n*)+/,
            list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
            html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
            def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
            paragraph:
              /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
            text: /^[^\n]+/,
            bullet: /(?:[*+-]|\d+\.)/,
            item: /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,
          };
          (e.item = new ExtendRegexp(e.item, "gm")
            .setGroup(/bull/g, e.bullet)
            .getRegexp()),
            (e.list = new ExtendRegexp(e.list)
              .setGroup(/bull/g, e.bullet)
              .setGroup("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")
              .setGroup("def", "\\n+(?=" + e.def.source + ")")
              .getRegexp());
          let t =
            "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";
          return (
            (e.html = new ExtendRegexp(e.html)
              .setGroup("comment", /<!--[\s\S]*?-->/)
              .setGroup("closed", /<(tag)[\s\S]+?<\/\1>/)
              .setGroup("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
              .setGroup(/tag/g, t)
              .getRegexp()),
            (e.paragraph = new ExtendRegexp(e.paragraph)
              .setGroup("hr", e.hr)
              .setGroup("heading", e.heading)
              .setGroup("lheading", e.lheading)
              .setGroup("blockquote", e.blockquote)
              .setGroup("tag", "<" + t)
              .setGroup("def", e.def)
              .getRegexp()),
            (this.rulesBase = e)
          );
        }
        static getRulesGfm() {
          if (this.rulesGfm) return this.rulesGfm;
          let e = this.getRulesBase(),
            t = {
              ...e,
              fences:
                /^ *(`{3,}|~{3,})[ \.]*((\S+)? *[^\n]*)\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
              paragraph: /^/,
              heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/,
            },
            n = t.fences.source.replace("\\1", "\\2"),
            r = e.list.source.replace("\\1", "\\3");
          return (
            (t.paragraph = new ExtendRegexp(e.paragraph)
              .setGroup("(?!", `(?!${n}|${r}|`)
              .getRegexp()),
            (this.rulesGfm = t)
          );
        }
        static getRulesTable() {
          return this.rulesTables
            ? this.rulesTables
            : (this.rulesTables = {
                ...this.getRulesGfm(),
                nptable:
                  /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
                table:
                  /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,
              });
        }
        setRules() {
          this.options.gfm
            ? this.options.tables
              ? (this.rules = this.staticThis.getRulesTable())
              : (this.rules = this.staticThis.getRulesGfm())
            : (this.rules = this.staticThis.getRulesBase()),
            (this.hasRulesGfm = void 0 !== this.rules.fences),
            (this.hasRulesTables = void 0 !== this.rules.table);
        }
        getTokens(e, t, n) {
          let i,
            o = e;
          e: for (; o; ) {
            if (
              ((i = this.rules.newline.exec(o)) &&
                ((o = o.substring(i[0].length)),
                i[0].length > 1 && this.tokens.push({ type: r.space })),
              (i = this.rules.code.exec(o)))
            ) {
              o = o.substring(i[0].length);
              let e = i[0].replace(/^ {4}/gm, "");
              this.tokens.push({
                type: r.code,
                text: this.options.pedantic ? e : e.replace(/\n+$/, ""),
              });
              continue;
            }
            if (this.hasRulesGfm && (i = this.rules.fences.exec(o))) {
              (o = o.substring(i[0].length)),
                this.tokens.push({
                  type: r.code,
                  meta: i[2],
                  lang: i[3],
                  text: i[4] || "",
                });
              continue;
            }
            if ((i = this.rules.heading.exec(o))) {
              (o = o.substring(i[0].length)),
                this.tokens.push({
                  type: r.heading,
                  depth: i[1].length,
                  text: i[2],
                });
              continue;
            }
            if (t && this.hasRulesTables && (i = this.rules.nptable.exec(o))) {
              o = o.substring(i[0].length);
              let e = {
                type: r.table,
                header: i[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                cells: [],
              };
              for (let t = 0; t < e.align.length; t++)
                /^ *-+: *$/.test(e.align[t])
                  ? (e.align[t] = "right")
                  : /^ *:-+: *$/.test(e.align[t])
                  ? (e.align[t] = "center")
                  : /^ *:-+ *$/.test(e.align[t])
                  ? (e.align[t] = "left")
                  : (e.align[t] = null);
              let t = i[3].replace(/\n$/, "").split("\n");
              for (let n = 0; n < t.length; n++)
                e.cells[n] = t[n].split(/ *\| */);
              this.tokens.push(e);
              continue;
            }
            if ((i = this.rules.lheading.exec(o))) {
              (o = o.substring(i[0].length)),
                this.tokens.push({
                  type: r.heading,
                  depth: "=" === i[2] ? 1 : 2,
                  text: i[1],
                });
              continue;
            }
            if ((i = this.rules.hr.exec(o))) {
              (o = o.substring(i[0].length)), this.tokens.push({ type: r.hr });
              continue;
            }
            if ((i = this.rules.blockquote.exec(o))) {
              (o = o.substring(i[0].length)),
                this.tokens.push({ type: r.blockquoteStart });
              let e = i[0].replace(/^ *> ?/gm, "");
              this.getTokens(e), this.tokens.push({ type: r.blockquoteEnd });
              continue;
            }
            if ((i = this.rules.list.exec(o))) {
              let e, t, a;
              o = o.substring(i[0].length);
              let l = i[2];
              this.tokens.push({ type: r.listStart, ordered: l.length > 1 });
              let s = i[0].match(this.rules.item),
                u = s.length,
                c = !1;
              for (let i = 0; i < u; i++) {
                let f = s[i];
                (e = f.length),
                  -1 !==
                    (f = f.replace(/^ *([*+-]|\d+\.) +/, "")).indexOf("\n ") &&
                    ((e -= f.length),
                    (f = this.options.pedantic
                      ? f.replace(/^ {1,4}/gm, "")
                      : f.replace(RegExp("^ {1," + e + "}", "gm"), ""))),
                  this.options.smartLists &&
                    i !== u - 1 &&
                    l !==
                      (t = this.staticThis
                        .getRulesBase()
                        .bullet.exec(s[i + 1])[0]) &&
                    !(l.length > 1 && t.length > 1) &&
                    ((o = s.slice(i + 1).join("\n") + o), (i = u - 1)),
                  (a = c || /\n\n(?!\s*$)/.test(f)),
                  i === u - 1 ||
                    ((c = "\n" === f.charAt(f.length - 1)), a || (a = c)),
                  this.tokens.push({
                    type: a ? r.looseItemStart : r.listItemStart,
                  }),
                  this.getTokens(f, !1, n),
                  this.tokens.push({ type: r.listItemEnd });
              }
              this.tokens.push({ type: r.listEnd });
              continue;
            }
            if ((i = this.rules.html.exec(o))) {
              o = o.substring(i[0].length);
              let e = i[1],
                t = "pre" === e || "script" === e || "style" === e;
              this.tokens.push({
                type: this.options.sanitize ? r.paragraph : r.html,
                pre: !this.options.sanitizer && t,
                text: i[0],
              });
              continue;
            }
            if (t && (i = this.rules.def.exec(o))) {
              (o = o.substring(i[0].length)),
                (this.links[i[1].toLowerCase()] = { href: i[2], title: i[3] });
              continue;
            }
            if (t && this.hasRulesTables && (i = this.rules.table.exec(o))) {
              o = o.substring(i[0].length);
              let e = {
                type: r.table,
                header: i[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                cells: [],
              };
              for (let t = 0; t < e.align.length; t++)
                /^ *-+: *$/.test(e.align[t])
                  ? (e.align[t] = "right")
                  : /^ *:-+: *$/.test(e.align[t])
                  ? (e.align[t] = "center")
                  : /^ *:-+ *$/.test(e.align[t])
                  ? (e.align[t] = "left")
                  : (e.align[t] = null);
              let t = i[3].replace(/(?: *\| *)?\n$/, "").split("\n");
              for (let n = 0; n < t.length; n++)
                e.cells[n] = t[n]
                  .replace(/^ *\| *| *\| *$/g, "")
                  .split(/ *\| */);
              this.tokens.push(e);
              continue;
            }
            if (this.staticThis.simpleRules.length) {
              let e = this.staticThis.simpleRules;
              for (let t = 0; t < e.length; t++)
                if ((i = e[t].exec(o))) {
                  o = o.substring(i[0].length);
                  let e = "simpleRule" + (t + 1);
                  this.tokens.push({ type: e, execArr: i });
                  continue e;
                }
            }
            if (t && (i = this.rules.paragraph.exec(o))) {
              (o = o.substring(i[0].length)),
                "\n" === i[1].slice(-1)
                  ? this.tokens.push({
                      type: r.paragraph,
                      text: i[1].slice(0, -1),
                    })
                  : this.tokens.push({
                      type: this.tokens.length > 0 ? r.paragraph : r.text,
                      text: i[1],
                    });
              continue;
            }
            if ((i = this.rules.text.exec(o))) {
              (o = o.substring(i[0].length)),
                this.tokens.push({ type: r.text, text: i[0] });
              continue;
            }
            if (o)
              throw Error(
                "Infinite loop on byte: " +
                  o.charCodeAt(0) +
                  `, near text '${o.slice(0, 30)}...'`
              );
          }
          return { tokens: this.tokens, links: this.links };
        }
      };
    },
    52835: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZP: function () {
          return a;
        },
      });
      let r = "object" == typeof self ? self : globalThis,
        deserializer = (e, t) => {
          let as = (t, n) => (e.set(n, t), t),
            unpair = (n) => {
              if (e.has(n)) return e.get(n);
              let [i, o] = t[n];
              switch (i) {
                case 0:
                case -1:
                  return as(o, n);
                case 1: {
                  let e = as([], n);
                  for (let t of o) e.push(unpair(t));
                  return e;
                }
                case 2: {
                  let e = as({}, n);
                  for (let [t, n] of o) e[unpair(t)] = unpair(n);
                  return e;
                }
                case 3:
                  return as(new Date(o), n);
                case 4: {
                  let { source: e, flags: t } = o;
                  return as(new RegExp(e, t), n);
                }
                case 5: {
                  let e = as(new Map(), n);
                  for (let [t, n] of o) e.set(unpair(t), unpair(n));
                  return e;
                }
                case 6: {
                  let e = as(new Set(), n);
                  for (let t of o) e.add(unpair(t));
                  return e;
                }
                case 7: {
                  let { name: e, message: t } = o;
                  return as(new r[e](t), n);
                }
                case 8:
                  return as(BigInt(o), n);
                case "BigInt":
                  return as(Object(BigInt(o)), n);
              }
              return as(new r[i](o), n);
            };
          return unpair;
        },
        deserialize = (e) => deserializer(new Map(), e)(0),
        { toString: i } = {},
        { keys: o } = Object,
        typeOf = (e) => {
          let t = typeof e;
          if ("object" !== t || !e) return [0, t];
          let n = i.call(e).slice(8, -1);
          switch (n) {
            case "Array":
              return [1, ""];
            case "Object":
              return [2, ""];
            case "Date":
              return [3, ""];
            case "RegExp":
              return [4, ""];
            case "Map":
              return [5, ""];
            case "Set":
              return [6, ""];
          }
          return n.includes("Array")
            ? [1, n]
            : n.includes("Error")
            ? [7, n]
            : [2, n];
        },
        shouldSkip = ([e, t]) =>
          0 === e && ("function" === t || "symbol" === t),
        serializer = (e, t, n, r) => {
          let as = (e, t) => {
              let i = r.push(e) - 1;
              return n.set(t, i), i;
            },
            pair = (r) => {
              if (n.has(r)) return n.get(r);
              let [i, a] = typeOf(r);
              switch (i) {
                case 0: {
                  let t = r;
                  switch (a) {
                    case "bigint":
                      (i = 8), (t = r.toString());
                      break;
                    case "function":
                    case "symbol":
                      if (e) throw TypeError("unable to serialize " + a);
                      t = null;
                      break;
                    case "undefined":
                      return as([-1], r);
                  }
                  return as([i, t], r);
                }
                case 1: {
                  if (a) return as([a, [...r]], r);
                  let e = [],
                    t = as([i, e], r);
                  for (let t of r) e.push(pair(t));
                  return t;
                }
                case 2: {
                  if (a)
                    switch (a) {
                      case "BigInt":
                        return as([a, r.toString()], r);
                      case "Boolean":
                      case "Number":
                      case "String":
                        return as([a, r.valueOf()], r);
                    }
                  if (t && "toJSON" in r) return pair(r.toJSON());
                  let n = [],
                    l = as([i, n], r);
                  for (let t of o(r))
                    (e || !shouldSkip(typeOf(r[t]))) &&
                      n.push([pair(t), pair(r[t])]);
                  return l;
                }
                case 3:
                  return as([i, r.toISOString()], r);
                case 4: {
                  let { source: e, flags: t } = r;
                  return as([i, { source: e, flags: t }], r);
                }
                case 5: {
                  let t = [],
                    n = as([i, t], r);
                  for (let [n, i] of r)
                    (e || !(shouldSkip(typeOf(n)) || shouldSkip(typeOf(i)))) &&
                      t.push([pair(n), pair(i)]);
                  return n;
                }
                case 6: {
                  let t = [],
                    n = as([i, t], r);
                  for (let n of r)
                    (e || !shouldSkip(typeOf(n))) && t.push(pair(n));
                  return n;
                }
              }
              let { message: l } = r;
              return as([i, { name: a, message: l }], r);
            };
          return pair;
        },
        serialize = (e, { json: t, lossy: n } = {}) => {
          let r = [];
          return serializer(!(t || n), !!t, new Map(), r)(e), r;
        };
      var a =
        "function" == typeof structuredClone
          ? (e, t) =>
              t && ("json" in t || "lossy" in t)
                ? deserialize(serialize(e, t))
                : structuredClone(e)
          : (e, t) => deserialize(serialize(e, t));
    },
    44301: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return decodeNamedCharacterReference;
        },
      });
      let r = document.createElement("i");
      function decodeNamedCharacterReference(e) {
        let t = "&" + e + ";";
        r.innerHTML = t;
        let n = r.textContent;
        return (
          (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n
        );
      }
    },
    24345: function (e, t, n) {
      "use strict";
      function ok() {}
      function unreachable() {}
      n.d(t, {
        ok: function () {
          return ok;
        },
        t1: function () {
          return unreachable;
        },
      });
    },
    16064: function (e, t, n) {
      "use strict";
      n.d(t, {
        C: function () {
          return toMdast;
        },
      });
      var r = n(52835);
      let isElement = function (e, t, n, r, i) {
          let o = convertElement(t);
          if (
            null != n &&
            ("number" != typeof n || n < 0 || n === Number.POSITIVE_INFINITY)
          )
            throw Error("Expected positive finite `index`");
          if (null != r && (!r.type || !r.children))
            throw Error("Expected valid `parent`");
          if ((null == n) != (null == r))
            throw Error("Expected both `index` and `parent`");
          return !!looksLikeAnElement(e) && o.call(i, e, n, r);
        },
        convertElement = function (e) {
          if (null == e) return lib_element;
          if ("string" == typeof e)
            return castFactory(function (t) {
              return t.tagName === e;
            });
          if ("object" == typeof e)
            return (function (e) {
              let t = [],
                n = -1;
              for (; ++n < e.length; ) t[n] = convertElement(e[n]);
              return castFactory(function (...e) {
                let n = -1;
                for (; ++n < t.length; ) if (t[n].apply(this, e)) return !0;
                return !1;
              });
            })(e);
          if ("function" == typeof e) return castFactory(e);
          throw Error("Expected function, string, or array as `test`");
        };
      function castFactory(e) {
        return function (t, n, r) {
          return !!(
            looksLikeAnElement(t) &&
            e.call(this, t, "number" == typeof n ? n : void 0, r || void 0)
          );
        };
      }
      function lib_element(e) {
        return !!(
          e &&
          "object" == typeof e &&
          "type" in e &&
          "element" === e.type &&
          "tagName" in e &&
          "string" == typeof e.tagName
        );
      }
      function looksLikeAnElement(e) {
        return (
          null !== e && "object" == typeof e && "type" in e && "tagName" in e
        );
      }
      let i = convertElement(function (e) {
        return (
          "audio" === e.tagName ||
          "canvas" === e.tagName ||
          "embed" === e.tagName ||
          "iframe" === e.tagName ||
          "img" === e.tagName ||
          "math" === e.tagName ||
          "object" === e.tagName ||
          "picture" === e.tagName ||
          "svg" === e.tagName ||
          "video" === e.tagName
        );
      });
      var o = n(98367),
        a = n(96093);
      let l = [
          "address",
          "article",
          "aside",
          "blockquote",
          "body",
          "br",
          "caption",
          "center",
          "col",
          "colgroup",
          "dd",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "legend",
          "li",
          "li",
          "listing",
          "main",
          "menu",
          "nav",
          "ol",
          "optgroup",
          "option",
          "p",
          "plaintext",
          "pre",
          "section",
          "summary",
          "table",
          "tbody",
          "td",
          "td",
          "tfoot",
          "th",
          "th",
          "thead",
          "tr",
          "ul",
          "wbr",
          "xmp",
        ],
        s = ["button", "input", "select", "textarea"],
        u = [
          "area",
          "base",
          "basefont",
          "dialog",
          "datalist",
          "head",
          "link",
          "meta",
          "noembed",
          "noframes",
          "param",
          "rp",
          "script",
          "source",
          "style",
          "template",
          "track",
          "title",
        ],
        c = {},
        f = (0, a.O)(["doctype", "comment"]);
      function lib_content(e) {
        return i(e) || isElement(e, s);
      }
      function removable(e) {
        return " " === e || "\n" === e;
      }
      function replaceNewlines(e) {
        let t = /\r?\n|\r/.exec(e);
        return t ? t[0] : " ";
      }
      function replaceWhitespace() {
        return " ";
      }
      var p = n(21623),
        d = n(3980);
      let findAfter = function (e, t, n) {
          let r = (0, a.O)(n);
          if (!e || !e.type || !e.children) throw Error("Expected parent node");
          if ("number" == typeof t) {
            if (t < 0 || t === Number.POSITIVE_INFINITY)
              throw Error("Expected positive finite number as index");
          } else if ((t = e.children.indexOf(t)) < 0)
            throw Error("Expected child node or index");
          for (; ++t < e.children.length; )
            if (r(e.children[t], t, e)) return e.children[t];
        },
        h = /\n/g,
        m = /[\t ]+/g,
        g = convertElement("br"),
        y = convertElement(function (e) {
          return "td" === e.tagName || "th" === e.tagName;
        }),
        b = convertElement("p"),
        k = convertElement("tr"),
        _ = convertElement([
          "datalist",
          "head",
          "noembed",
          "noframes",
          "noscript",
          "rp",
          "script",
          "style",
          "template",
          "title",
          function (e) {
            return !!(e.properties || {}).hidden;
          },
          function (e) {
            return "dialog" === e.tagName && !(e.properties || {}).open;
          },
        ]),
        v = convertElement([
          "address",
          "article",
          "aside",
          "blockquote",
          "body",
          "caption",
          "center",
          "dd",
          "dialog",
          "dir",
          "dl",
          "dt",
          "div",
          "figure",
          "figcaption",
          "footer",
          "form,",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "header",
          "hgroup",
          "hr",
          "html",
          "legend",
          "li",
          "listing",
          "main",
          "menu",
          "nav",
          "ol",
          "p",
          "plaintext",
          "pre",
          "section",
          "ul",
          "xmp",
        ]);
      function toText(e, t) {
        let n;
        let r = "children" in e ? e.children : [],
          i = v(e),
          o = inferWhitespace(e, {
            whitespace: (t || {}).whitespace || "normal",
            breakBefore: !1,
            breakAfter: !1,
          }),
          a = [];
        ("text" === e.type || "comment" === e.type) &&
          a.push(
            ...collectText(e, {
              whitespace: o,
              breakBefore: !0,
              breakAfter: !0,
            })
          );
        let l = -1;
        for (; ++l < r.length; )
          a.push(
            ...(function renderedTextCollection(e, t, n) {
              return "element" === e.type
                ? (function (e, t, n) {
                    let r, i;
                    let o = inferWhitespace(e, n),
                      a = e.children || [],
                      l = -1,
                      s = [];
                    if (_(e)) return s;
                    for (
                      g(e)
                        ? (i = "\n")
                        : k(e) && findAfter(t, e, k)
                        ? (i = "\n")
                        : b(e)
                        ? ((r = 2), (i = 2))
                        : v(e) && ((r = 1), (i = 1));
                      ++l < a.length;

                    )
                      s = s.concat(
                        renderedTextCollection(a[l], e, {
                          whitespace: o,
                          breakBefore: l ? void 0 : r,
                          breakAfter: l < a.length - 1 ? g(a[l + 1]) : i,
                        })
                      );
                    return (
                      y(e) && findAfter(t, e, y) && s.push("	"),
                      r && s.unshift(r),
                      i && s.push(i),
                      s
                    );
                  })(e, t, n)
                : "text" === e.type
                ? "normal" === n.whitespace
                  ? collectText(e, n)
                  : [String(e.value)]
                : [];
            })(r[l], e, {
              whitespace: o,
              breakBefore: l ? void 0 : i,
              breakAfter: l < r.length - 1 ? g(r[l + 1]) : i,
            })
          );
        let s = [];
        for (l = -1; ++l < a.length; ) {
          let e = a[l];
          "number" == typeof e
            ? void 0 !== n && e > n && (n = e)
            : e &&
              (void 0 !== n && n > -1 && s.push("\n".repeat(n) || " "),
              (n = -1),
              s.push(e));
        }
        return s.join("");
      }
      function collectText(e, t) {
        let n;
        let r = String(e.value),
          i = [],
          o = [],
          a = 0;
        for (; a <= r.length; ) {
          h.lastIndex = a;
          let e = h.exec(r),
            n = e && "index" in e ? e.index : r.length;
          i.push(
            (function (e, t, n) {
              let r;
              let i = [],
                o = 0;
              for (; o < e.length; ) {
                m.lastIndex = o;
                let n = m.exec(e);
                (r = n ? n.index : e.length),
                  o || r || !n || t || i.push(""),
                  o !== r && i.push(e.slice(o, r)),
                  (o = n ? r + n[0].length : r);
              }
              return o === r || n || i.push(""), i.join(" ");
            })(
              r
                .slice(a, n)
                .replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, ""),
              0 !== a || t.breakBefore,
              n !== r.length || t.breakAfter
            )
          ),
            (a = n + 1);
        }
        let l = -1;
        for (; ++l < i.length; )
          8203 === i[l].charCodeAt(i[l].length - 1) ||
          (l < i.length - 1 && 8203 === i[l + 1].charCodeAt(0))
            ? (o.push(i[l]), (n = void 0))
            : i[l]
            ? ("number" == typeof n && o.push(n), o.push(i[l]), (n = 0))
            : (0 === l || l === i.length - 1) && o.push(0);
        return o;
      }
      function inferWhitespace(e, t) {
        if ("element" === e.type) {
          let n = e.properties || {};
          switch (e.tagName) {
            case "listing":
            case "plaintext":
            case "xmp":
              return "pre";
            case "nobr":
              return "nowrap";
            case "pre":
              return n.wrap ? "pre-wrap" : "pre";
            case "td":
            case "th":
              return n.noWrap ? "nowrap" : t.whitespace;
            case "textarea":
              return "pre-wrap";
          }
        }
        return t.whitespace;
      }
      let x = "language-";
      function code(e, t) {
        let n, r;
        let i = t.children,
          o = -1;
        if ("pre" === t.tagName)
          for (; ++o < i.length; ) {
            let e = i[o];
            if (
              "element" === e.type &&
              "code" === e.tagName &&
              e.properties &&
              e.properties.className &&
              Array.isArray(e.properties.className)
            ) {
              n = e.properties.className;
              break;
            }
          }
        if (n) {
          for (o = -1; ++o < n.length; )
            if (String(n[o]).slice(0, x.length) === x) {
              r = String(n[o]).slice(x.length);
              break;
            }
        }
        let a = {
          type: "code",
          lang: r || null,
          meta: null,
          value: (function (e) {
            let t = String(e),
              n = t.length;
            for (; n > 0; ) {
              let e = t.codePointAt(n - 1);
              if (void 0 !== e && (10 === e || 13 === e)) n--;
              else break;
            }
            return t.slice(0, n);
          })(toText(t)),
        };
        return e.patch(t, a), a;
      }
      function del(e, t) {
        let n = e.all(t),
          r = { type: "delete", children: n };
        return e.patch(t, r), r;
      }
      function listItemsSpread(e) {
        let t = -1;
        if (e.length > 1) {
          for (; ++t < e.length; ) if (e[t].spread) return !0;
        }
        return !1;
      }
      function handle(e, t) {
        let n = e.all({ type: "root", children: t }),
          r = e.toSpecificContent(n, create);
        return 0 === r.length
          ? []
          : 1 === r.length
          ? r[0].children
          : [
              {
                type: "list",
                ordered: !1,
                start: null,
                spread: listItemsSpread(r),
                children: r,
              },
            ];
      }
      function create() {
        return { type: "listItem", spread: !1, checked: null, children: [] };
      }
      function em(e, t) {
        let n = e.all(t),
          r = { type: "emphasis", children: n };
        return e.patch(t, r), r;
      }
      function heading(e, t) {
        let n = Number(t.tagName.charAt(1)) || 1,
          r = e.all(t),
          i = { type: "heading", depth: n, children: r };
        return e.patch(t, i), i;
      }
      function img(e, t) {
        let n = t.properties || {},
          r = {
            type: "image",
            url: e.resolve(String(n.src || "") || null),
            title: n.title ? String(n.title) : null,
            alt: n.alt ? String(n.alt) : "",
          };
        return e.patch(t, r), r;
      }
      function inlineCode(e, t) {
        let n = { type: "inlineCode", value: toText(t) };
        return e.patch(t, n), n;
      }
      function findSelectedOptions(e, t) {
        let n = [],
          r = [],
          i = t || e.properties || {},
          o = (function findOptions(e) {
            let t = [],
              n = -1;
            for (; ++n < e.children.length; ) {
              let r = e.children[n];
              "children" in r &&
                Array.isArray(r.children) &&
                t.push(...findOptions(r)),
                "element" !== r.type ||
                  "option" !== r.tagName ||
                  (r.properties && r.properties.disabled) ||
                  t.push(r);
            }
            return t;
          })(e),
          a =
            Math.min(Number.parseInt(String(i.size), 10), 0) ||
            (i.multiple ? 4 : 1),
          l = -1;
        for (; ++l < o.length; ) {
          let e = o[l];
          e && e.properties && e.properties.selected && n.push(e);
        }
        let s = n.length > 0 ? n : o,
          u = s.length > a ? a : s.length;
        for (l = -1; ++l < u; ) {
          let e = s[l],
            t = e.properties || {},
            n = toText(e),
            i = n || String(t.label || ""),
            o = String(t.value || "") || n;
          r.push([o, i === o ? void 0 : i]);
        }
        return r;
      }
      let w = {}.hasOwnProperty,
        C = new Set(["pingback", "prefetch", "stylesheet"]),
        S = convertElement([
          "a",
          "abbr",
          "area",
          "b",
          "bdi",
          "bdo",
          "br",
          "button",
          "cite",
          "code",
          "data",
          "datalist",
          "del",
          "dfn",
          "em",
          "i",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "map",
          "mark",
          "meter",
          "noscript",
          "output",
          "progress",
          "q",
          "ruby",
          "s",
          "samp",
          "script",
          "select",
          "small",
          "span",
          "strong",
          "sub",
          "sup",
          "template",
          "textarea",
          "time",
          "u",
          "var",
          "wbr",
        ]),
        E = convertElement("meta");
      function phrasing(e) {
        return !!(
          "text" === e.type ||
          S(e) ||
          i(e) ||
          (function (e) {
            if ("element" !== e.type || "link" !== e.tagName) return !1;
            if (e.properties.itemProp) return !0;
            let t = e.properties.rel,
              n = -1;
            if (!Array.isArray(t) || 0 === t.length) return !1;
            for (; ++n < t.length; ) if (!C.has(String(t[n]))) return !1;
            return !0;
          })(e) ||
          (E(e) &&
            (function (e, t) {
              let n =
                "element" === e.type &&
                w.call(e.properties, t) &&
                e.properties[t];
              return null != n && !1 !== n;
            })(e, "itemProp"))
        );
      }
      function li(e, t) {
        let { rest: n, checkbox: r } = (function extractLeadingCheckbox(e) {
            let t = e.children[0];
            if (
              t &&
              "element" === t.type &&
              "input" === t.tagName &&
              t.properties &&
              ("checkbox" === t.properties.type ||
                "radio" === t.properties.type)
            ) {
              let n = { ...e, children: e.children.slice(1) };
              return { checkbox: t, rest: n };
            }
            if (t && "element" === t.type && "p" === t.tagName) {
              let { checkbox: n, rest: r } = extractLeadingCheckbox(t);
              if (n) {
                let t = { ...e, children: [r, ...e.children.slice(1)] };
                return { checkbox: n, rest: t };
              }
            }
            return { checkbox: void 0, rest: e };
          })(t),
          i = r ? !!r.properties.checked : null,
          o = (function spreadout(e) {
            let t = -1,
              n = !1;
            for (; ++t < e.children.length; ) {
              let r = e.children[t];
              if ("element" === r.type) {
                if (phrasing(r)) continue;
                if ("p" === r.tagName || n || spreadout(r)) return !0;
                n = !0;
              }
            }
            return !1;
          })(n),
          a = e.toFlow(e.all(n)),
          l = { type: "listItem", spread: o, checked: i, children: a };
        return e.patch(t, l), l;
      }
      function list_list(e, t) {
        let n = "ol" === t.tagName,
          r = e.toSpecificContent(e.all(t), list_create),
          i = null;
        n &&
          (i =
            t.properties && t.properties.start
              ? Number.parseInt(String(t.properties.start), 10)
              : 1);
        let o = {
          type: "list",
          ordered: n,
          start: i,
          spread: listItemsSpread(r),
          children: r,
        };
        return e.patch(t, o), o;
      }
      function list_create() {
        return { type: "listItem", spread: !1, checked: null, children: [] };
      }
      var P = n(27962),
        A = n(88718),
        O = n(22804);
      function wrapNeeded(e) {
        let t = -1;
        for (; ++t < e.length; ) {
          let n = e[t];
          if (!wrap_phrasing(n) || ("children" in n && wrapNeeded(n.children)))
            return !0;
        }
        return !1;
      }
      function wrap(e) {
        return (function runs(e, t, n) {
          let r = (function (e) {
              let t = [],
                n = -1;
              for (; ++n < e.length; ) {
                let r = e[n];
                ("delete" === r.type || "link" === r.type) &&
                wrapNeeded(r.children)
                  ? t.push(
                      ...(function (e) {
                        return runs(
                          e.children,
                          function (t) {
                            let n = cloneWithoutChildren(e);
                            return (n.children = t), [n];
                          },
                          function (t) {
                            if ("children" in t && "children" in e) {
                              let n = cloneWithoutChildren(e),
                                r = cloneWithoutChildren(t);
                              return (
                                (n.children = t.children), r.children.push(n), r
                              );
                            }
                            return { ...t };
                          }
                        );
                      })(r)
                    )
                  : t.push(r);
              }
              return t;
            })(e),
            i = [],
            o = [],
            a = -1;
          for (; ++a < r.length; ) {
            let e = r[a];
            wrap_phrasing(e)
              ? o.push(e)
              : (o.length > 0 && (i.push(...t(o)), (o = [])), i.push(n(e)));
          }
          return o.length > 0 && (i.push(...t(o)), (o = [])), i;
        })(
          e,
          function (e) {
            return e.every(function (e) {
              return "text" === e.type && (0, o.Q)(e.value);
            })
              ? []
              : [{ type: "paragraph", children: e }];
          },
          function (e) {
            return e;
          }
        );
      }
      function wrap_phrasing(e) {
        let t = e.data && e.data.hName;
        return t
          ? phrasing({
              type: "element",
              tagName: t,
              properties: {},
              children: [],
            })
          : (0, O.w)(e);
      }
      function cloneWithoutChildren(e) {
        return (0, r.ZP)({ ...e, children: [] });
      }
      function media(e, t) {
        let n = t.properties || {},
          r = "video" === t.tagName ? String(n.poster || "") : "",
          i = String(n.src || ""),
          o = -1,
          a = !1,
          l = e.all(t),
          s = { type: "root", children: l };
        if (
          ((0, p.Vn)(s, function (e) {
            if ("link" === e.type) return (a = !0), A.BK;
          }),
          a || wrapNeeded(l))
        )
          return l;
        for (; !i && ++o < t.children.length; ) {
          let e = t.children[o];
          "element" === e.type &&
            "source" === e.tagName &&
            e.properties &&
            (i = String(e.properties.src || ""));
        }
        if (r) {
          let n = {
            type: "image",
            title: null,
            url: e.resolve(r),
            alt: (0, P.B)(l),
          };
          e.patch(t, n), (l = [n]);
        }
        let u = l,
          c = {
            type: "link",
            title: n.title ? String(n.title) : null,
            url: e.resolve(i),
            children: u,
          };
        return e.patch(t, c), c;
      }
      function p_p(e, t) {
        let n = e.all(t);
        if (n.length > 0) {
          let r = { type: "paragraph", children: n };
          return e.patch(t, r), r;
        }
      }
      let T = ['"'];
      function strong(e, t) {
        let n = e.all(t),
          r = { type: "strong", children: n };
        return e.patch(t, r), r;
      }
      function tableCell(e, t) {
        let n = e.all(t),
          r = { type: "tableCell", children: n };
        if ((e.patch(t, r), t.properties)) {
          let e = t.properties.rowSpan,
            n = t.properties.colSpan;
          if (e || n) {
            let t = r.data || (r.data = {});
            e && (t.hastUtilToMdastTemporaryRowSpan = e),
              n && (t.hastUtilToMdastTemporaryColSpan = n);
          }
        }
        return r;
      }
      function table_row_create() {
        return { type: "tableCell", children: [] };
      }
      function createCell() {
        return { type: "tableCell", children: [] };
      }
      function createRow() {
        return { type: "tableRow", children: [] };
      }
      let I = {
          comment: function (e, t) {
            let n = { type: "html", value: "<!--" + t.value + "-->" };
            return e.patch(t, n), n;
          },
          doctype: ignore,
          root: function (e, t) {
            let n = e.all(t);
            (e.options.document || wrapNeeded(n)) && (n = wrap(n));
            let r = { type: "root", children: n };
            return e.patch(t, r), r;
          },
          text: function (e, t) {
            let n = { type: "text", value: t.value };
            return e.patch(t, n), n;
          },
        },
        R = {
          applet: ignore,
          area: ignore,
          basefont: ignore,
          bgsound: ignore,
          caption: ignore,
          col: ignore,
          colgroup: ignore,
          command: ignore,
          content: ignore,
          datalist: ignore,
          dialog: ignore,
          element: ignore,
          embed: ignore,
          frame: ignore,
          frameset: ignore,
          isindex: ignore,
          keygen: ignore,
          link: ignore,
          math: ignore,
          menu: ignore,
          menuitem: ignore,
          meta: ignore,
          nextid: ignore,
          noembed: ignore,
          noframes: ignore,
          optgroup: ignore,
          option: ignore,
          param: ignore,
          script: ignore,
          shadow: ignore,
          source: ignore,
          spacer: ignore,
          style: ignore,
          svg: ignore,
          template: ignore,
          title: ignore,
          track: ignore,
          abbr: handlers_all,
          acronym: handlers_all,
          bdi: handlers_all,
          bdo: handlers_all,
          big: handlers_all,
          blink: handlers_all,
          button: handlers_all,
          canvas: handlers_all,
          cite: handlers_all,
          data: handlers_all,
          details: handlers_all,
          dfn: handlers_all,
          font: handlers_all,
          ins: handlers_all,
          label: handlers_all,
          map: handlers_all,
          marquee: handlers_all,
          meter: handlers_all,
          nobr: handlers_all,
          noscript: handlers_all,
          object: handlers_all,
          output: handlers_all,
          progress: handlers_all,
          rb: handlers_all,
          rbc: handlers_all,
          rp: handlers_all,
          rt: handlers_all,
          rtc: handlers_all,
          ruby: handlers_all,
          slot: handlers_all,
          small: handlers_all,
          span: handlers_all,
          sup: handlers_all,
          sub: handlers_all,
          tbody: handlers_all,
          tfoot: handlers_all,
          thead: handlers_all,
          time: handlers_all,
          address: flow,
          article: flow,
          aside: flow,
          body: flow,
          center: flow,
          div: flow,
          fieldset: flow,
          figcaption: flow,
          figure: flow,
          form: flow,
          footer: flow,
          header: flow,
          hgroup: flow,
          html: flow,
          legend: flow,
          main: flow,
          multicol: flow,
          nav: flow,
          picture: flow,
          section: flow,
          a: function (e, t) {
            let n = t.properties || {},
              r = e.all(t),
              i = {
                type: "link",
                url: e.resolve(String(n.href || "") || null),
                title: n.title ? String(n.title) : null,
                children: r,
              };
            return e.patch(t, i), i;
          },
          audio: media,
          b: strong,
          base: function (e, t) {
            e.baseFound ||
              ((e.frozenBaseUrl =
                String((t.properties && t.properties.href) || "") || void 0),
              (e.baseFound = !0));
          },
          blockquote: function (e, t) {
            let n = { type: "blockquote", children: e.toFlow(e.all(t)) };
            return e.patch(t, n), n;
          },
          br: function (e, t) {
            let n = { type: "break" };
            return e.patch(t, n), n;
          },
          code: inlineCode,
          dir: list_list,
          dl: function (e, t) {
            let n = [],
              r = [],
              i = -1;
            for (; ++i < t.children.length; ) {
              let e = t.children[i];
              "element" === e.type && "div" === e.tagName
                ? n.push(...e.children)
                : n.push(e);
            }
            let o = { definitions: [], titles: [] };
            for (i = -1; ++i < n.length; ) {
              let e = n[i];
              if ("element" === e.type && "dt" === e.tagName) {
                let t = n[i - 1];
                t &&
                  "element" === t.type &&
                  "dd" === t.tagName &&
                  (r.push(o), (o = { definitions: [], titles: [] })),
                  o.titles.push(e);
              } else o.definitions.push(e);
            }
            r.push(o), (i = -1);
            let a = [];
            for (; ++i < r.length; ) {
              let t = [
                ...handle(e, r[i].titles),
                ...handle(e, r[i].definitions),
              ];
              t.length > 0 &&
                a.push({
                  type: "listItem",
                  spread: t.length > 1,
                  checked: null,
                  children: t,
                });
            }
            if (a.length > 0) {
              let n = {
                type: "list",
                ordered: !1,
                start: null,
                spread: listItemsSpread(a),
                children: a,
              };
              return e.patch(t, n), n;
            }
          },
          dt: li,
          dd: li,
          del: del,
          em: em,
          h1: heading,
          h2: heading,
          h3: heading,
          h4: heading,
          h5: heading,
          h6: heading,
          hr: function (e, t) {
            let n = { type: "thematicBreak" };
            return e.patch(t, n), n;
          },
          i: em,
          iframe: function (e, t) {
            let n = t.properties || {},
              r = String(n.src || ""),
              i = String(n.title || "");
            if (r && i) {
              let n = {
                type: "link",
                title: null,
                url: e.resolve(r),
                children: [{ type: "text", value: i }],
              };
              return e.patch(t, n), n;
            }
          },
          img: img,
          image: img,
          input: function (e, t) {
            let n = t.properties || {},
              r = String(n.value || n.placeholder || "");
            if (n.disabled || "hidden" === n.type || "file" === n.type) return;
            if ("checkbox" === n.type || "radio" === n.type) {
              let r = {
                type: "text",
                value: n.checked
                  ? e.options.checked || "[x]"
                  : e.options.unchecked || "[ ]",
              };
              return e.patch(t, r), r;
            }
            if ("image" === n.type) {
              let i = n.alt || r;
              if (i) {
                let r = {
                  type: "image",
                  url: e.resolve(String(n.src || "") || null),
                  title: String(n.title || "") || null,
                  alt: String(i),
                };
                return e.patch(t, r), r;
              }
              return;
            }
            let i = [];
            if (r) i = [[r, void 0]];
            else if (
              "button" !== n.type &&
              "file" !== n.type &&
              "password" !== n.type &&
              "reset" !== n.type &&
              "submit" !== n.type &&
              n.list
            ) {
              let t = String(n.list),
                r = e.elementById.get(t);
              r && "datalist" === r.tagName && (i = findSelectedOptions(r, n));
            }
            if (0 === i.length) return;
            if (
              ("password" === n.type &&
                (i[0] = ["•".repeat(i[0][0].length), void 0]),
              "email" === n.type || "url" === n.type)
            ) {
              let t = [],
                r = -1;
              for (; ++r < i.length; ) {
                let o = e.resolve(i[r][0]),
                  a = {
                    type: "link",
                    title: null,
                    url: "email" === n.type ? "mailto:" + o : o,
                    children: [{ type: "text", value: i[r][1] || o }],
                  };
                t.push(a),
                  r !== i.length - 1 && t.push({ type: "text", value: ", " });
              }
              return t;
            }
            let o = [],
              a = -1;
            for (; ++a < i.length; )
              o.push(i[a][1] ? i[a][1] + " (" + i[a][0] + ")" : i[a][0]);
            let l = { type: "text", value: o.join(", ") };
            return e.patch(t, l), l;
          },
          kbd: inlineCode,
          li: li,
          listing: code,
          mark: em,
          ol: list_list,
          p: p_p,
          plaintext: code,
          pre: code,
          q: function (e, t) {
            let n = e.options.quotes || T;
            e.qNesting++;
            let r = e.all(t);
            e.qNesting--;
            let i = n[e.qNesting % n.length],
              o = r[0],
              a = r[r.length - 1],
              l = i.charAt(0),
              s = i.length > 1 ? i.charAt(1) : i;
            return (
              o && "text" === o.type
                ? (o.value = l + o.value)
                : r.unshift({ type: "text", value: l }),
              a && "text" === a.type
                ? (a.value += s)
                : r.push({ type: "text", value: s }),
              r
            );
          },
          s: del,
          samp: inlineCode,
          select: function (e, t) {
            let n = findSelectedOptions(t),
              r = -1,
              i = [];
            for (; ++r < n.length; ) {
              let e = n[r];
              i.push(e[1] ? e[1] + " (" + e[0] + ")" : e[0]);
            }
            if (i.length > 0) {
              let n = { type: "text", value: i.join(", ") };
              return e.patch(t, n), n;
            }
          },
          strike: del,
          strong: strong,
          summary: p_p,
          table: function (e, t) {
            if (e.inTable) {
              let n = { type: "text", value: toText(t) };
              return e.patch(t, n), n;
            }
            e.inTable = !0;
            let { align: n, headless: r } = (function (e) {
                let t = { align: [null], headless: !0 },
                  n = 0,
                  r = 0;
                return (
                  (0, p.Vn)(e, function (i) {
                    if ("element" === i.type) {
                      if ("table" === i.tagName && e !== i) return A.AM;
                      if (
                        ("th" === i.tagName || "td" === i.tagName) &&
                        i.properties
                      ) {
                        if (!t.align[r]) {
                          let e = String(i.properties.align || "") || null;
                          ("center" === e ||
                            "left" === e ||
                            "right" === e ||
                            null === e) &&
                            (t.align[r] = e);
                        }
                        t.headless &&
                          n < 2 &&
                          "th" === i.tagName &&
                          (t.headless = !1),
                          r++;
                      } else
                        "thead" === i.tagName
                          ? (t.headless = !1)
                          : "tr" === i.tagName && (n++, (r = 0));
                    }
                  }),
                  t
                );
              })(t),
              i = e.toSpecificContent(e.all(t), createRow);
            r && i.unshift(createRow());
            let o = -1;
            for (; ++o < i.length; ) {
              let t = i[o],
                n = e.toSpecificContent(t.children, createCell);
              t.children = n;
            }
            let a = 1;
            for (o = -1; ++o < i.length; ) {
              let e = i[o].children,
                t = -1;
              for (; ++t < e.length; ) {
                let n = e[t];
                if (n.data) {
                  let e = n.data,
                    r =
                      Number.parseInt(
                        String(e.hastUtilToMdastTemporaryColSpan),
                        10
                      ) || 1,
                    a =
                      Number.parseInt(
                        String(e.hastUtilToMdastTemporaryRowSpan),
                        10
                      ) || 1;
                  if (r > 1 || a > 1) {
                    let e = o - 1;
                    for (; ++e < o + a; ) {
                      let n = t - 1;
                      for (; ++n < t + r && i[e]; ) {
                        let r = [];
                        (e !== o || n !== t) &&
                          r.push({ type: "tableCell", children: [] }),
                          i[e].children.splice(n, 0, ...r);
                      }
                    }
                  }
                  "hastUtilToMdastTemporaryColSpan" in n.data &&
                    delete n.data.hastUtilToMdastTemporaryColSpan,
                    "hastUtilToMdastTemporaryRowSpan" in n.data &&
                      delete n.data.hastUtilToMdastTemporaryRowSpan,
                    0 === Object.keys(n.data).length && delete n.data;
                }
              }
              e.length > a && (a = e.length);
            }
            for (o = -1; ++o < i.length; ) {
              let e = i[o].children,
                t = e.length - 1;
              for (; ++t < a; ) e.push({ type: "tableCell", children: [] });
            }
            let l = n.length - 1;
            for (; ++l < a; ) n.push(null);
            e.inTable = !1;
            let s = { type: "table", align: n, children: i };
            return e.patch(t, s), s;
          },
          td: tableCell,
          textarea: function (e, t) {
            let n = { type: "text", value: toText(t) };
            return e.patch(t, n), n;
          },
          th: tableCell,
          tr: function (e, t) {
            let n = e.toSpecificContent(e.all(t), table_row_create),
              r = { type: "tableRow", children: n };
            return e.patch(t, r), r;
          },
          tt: inlineCode,
          u: em,
          ul: list_list,
          var: inlineCode,
          video: media,
          wbr: function (e, t) {
            let n = { type: "text", value: "​" };
            return e.patch(t, n), n;
          },
          xmp: code,
        };
      function handlers_all(e, t) {
        return e.all(t);
      }
      function flow(e, t) {
        return e.toFlow(e.all(t));
      }
      function ignore() {}
      let D = {}.hasOwnProperty;
      function state_all(e) {
        let t = e.children || [],
          n = [],
          r = -1;
        for (; ++r < t.length; ) {
          let i = t[r],
            o = this.one(i, e);
          Array.isArray(o) ? n.push(...o) : o && n.push(o);
        }
        let i = 0,
          o = n.length;
        for (; i < o && "break" === n[i].type; ) i++;
        for (; o > i && "break" === n[o - 1].type; ) o--;
        return 0 === i && o === n.length ? n : n.slice(i, o);
      }
      function one(e, t) {
        if ("element" === e.type) {
          if (e.properties && "ignore" === e.properties.dataMdast) return;
          if (D.call(this.handlers, e.tagName))
            return this.handlers[e.tagName](this, e, t) || void 0;
        } else if (D.call(this.nodeHandlers, e.type))
          return this.nodeHandlers[e.type](this, e, t) || void 0;
        if ("value" in e && "string" == typeof e.value) {
          let t = { type: "text", value: e.value };
          return this.patch(e, t), t;
        }
        if ("children" in e) return this.all(e);
      }
      function patch(e, t) {
        e.position && (t.position = (0, d.FK)(e));
      }
      function resolve(e) {
        let t = this.frozenBaseUrl;
        return null == e ? "" : t ? String(new URL(e, t)) : e;
      }
      function toFlow(e) {
        return wrap(e);
      }
      function toSpecificContent(e, t) {
        let n = t(),
          r = [],
          i = [],
          o = -1;
        for (; ++o < e.length; ) {
          let t = e[o];
          t.type === n.type
            ? (i.length > 0 && (t.children.unshift(...i), (i = [])), r.push(t))
            : i.push(t);
        }
        if (i.length > 0) {
          let e = r[r.length - 1];
          e || ((e = t()), r.push(e)), e.children.push(...i), (i = []);
        }
        return r;
      }
      let L = {};
      function toMdast(e, t) {
        let n;
        let i = (0, r.ZP)(e),
          a = t || L,
          s = (function (e) {
            var t;
            let n =
              ((t = (e || c).newlines ? replaceNewlines : replaceWhitespace),
              function (e) {
                return String(e).replace(/[\t\n\v\f\r ]+/g, t);
              });
            return function (e) {
              !(function minify(e, t) {
                if ("children" in e) {
                  let n = { ...t };
                  return (
                    ("root" === e.type || isElement(e, l)) &&
                      ((n.before = !0), (n.after = !0)),
                    (n.whitespace = (function (e, t) {
                      if ("tagName" in e && e.properties)
                        switch (e.tagName) {
                          case "listing":
                          case "plaintext":
                          case "script":
                          case "style":
                          case "xmp":
                            return "pre";
                          case "nobr":
                            return "nowrap";
                          case "pre":
                            return e.properties.wrap ? "pre-wrap" : "pre";
                          case "td":
                          case "th":
                            return e.properties.noWrap
                              ? "nowrap"
                              : t.whitespace;
                          case "textarea":
                            return "pre-wrap";
                        }
                      return t.whitespace;
                    })(e, t)),
                    (function (e, t) {
                      let n = t.before,
                        r = t.after,
                        i = e.children,
                        a = i.length,
                        s = -1;
                      for (; ++s < a; ) {
                        let e = minify(i[s], {
                          ...t,
                          after: (function collapsableAfter(e, t, n) {
                            for (; ++t < e.length; ) {
                              let n = e[t],
                                r = (function (e) {
                                  if ("element" === e.type) {
                                    if (lib_content(e)) return !1;
                                    if (isElement(e, l)) return !0;
                                  } else if ("text" === e.type) {
                                    if (!(0, o.Q)(e)) return !1;
                                  } else if (!f(e)) return !1;
                                })(n);
                              if (
                                (void 0 === r &&
                                  "children" in n &&
                                  !(
                                    ("element" === n.type &&
                                      n.properties.hidden) ||
                                    f(n) ||
                                    isElement(n, u)
                                  ) &&
                                  (r = collapsableAfter(n.children, -1)),
                                "boolean" == typeof r)
                              )
                                return r;
                            }
                            return n;
                          })(i, s, r),
                          before: n,
                        });
                        e.remove
                          ? (i.splice(s, 1), s--, a--)
                          : e.ignore || (n = e.stripAtStart),
                          lib_content(i[s]) && (n = !1);
                      }
                      return {
                        ignore: !1,
                        stripAtStart: !!(n || r),
                        remove: !1,
                      };
                    })(e, n)
                  );
                }
                if ("text" === e.type) {
                  if ("normal" === t.whitespace)
                    return (function (e, t) {
                      let n = t.collapse(e.value),
                        r = { ignore: !1, stripAtStart: !1, remove: !1 },
                        i = 0,
                        o = n.length;
                      return (
                        t.before && removable(n.charAt(0)) && i++,
                        i !== o &&
                          removable(n.charAt(o - 1)) &&
                          (t.after ? o-- : (r.stripAtStart = !0)),
                        i === o ? (r.remove = !0) : (e.value = n.slice(i, o)),
                        r
                      );
                    })(e, t);
                  "nowrap" === t.whitespace && (e.value = t.collapse(e.value));
                }
                return { ignore: f(e), stripAtStart: !1, remove: !1 };
              })(e, { collapse: n, whitespace: "normal" });
            };
          })({ newlines: !0 === a.newlines }),
          d = {
            all: state_all,
            baseFound: !1,
            elementById: new Map(),
            frozenBaseUrl: void 0,
            handlers: { ...R, ...a.handlers },
            inTable: !1,
            nodeHandlers: { ...I, ...a.nodeHandlers },
            one,
            options: a,
            patch,
            qNesting: 0,
            resolve,
            toFlow,
            toSpecificContent,
          };
        s(i),
          (0, p.Vn)(i, function (e) {
            if (e && "element" === e.type && e.properties) {
              let t = String(e.properties.id || "") || void 0;
              t && !d.elementById.has(t) && d.elementById.set(t, e);
            }
          });
        let h = d.one(i, void 0);
        return (
          (n = h
            ? Array.isArray(h)
              ? { type: "root", children: h }
              : h
            : { type: "root", children: [] }),
          (0, p.Vn)(n, function (e, t, n) {
            if ("text" === e.type && void 0 !== t && n) {
              let r = n.children[t - 1];
              if (r && r.type === e.type)
                return (
                  (r.value += e.value),
                  n.children.splice(t, 1),
                  r.position && e.position && (r.position.end = e.position.end),
                  t - 1
                );
              if (
                ((e.value = e.value.replace(/[\t ]*(\r?\n|\r)[\t ]*/, "$1")),
                n &&
                  ("heading" === n.type ||
                    "paragraph" === n.type ||
                    "root" === n.type) &&
                  (t || (e.value = e.value.replace(/^[\t ]+/, "")),
                  t === n.children.length - 1 &&
                    (e.value = e.value.replace(/[\t ]+$/, ""))),
                !e.value)
              )
                return n.children.splice(t, 1), t;
            }
          }),
          n
        );
      }
    },
    98367: function (e, t, n) {
      "use strict";
      n.d(t, {
        Q: function () {
          return whitespace;
        },
      });
      let r = /[ \t\n\f\r]/g;
      function whitespace(e) {
        return "object" == typeof e
          ? "text" === e.type && empty(e.value)
          : empty(e);
      }
      function empty(e) {
        return "" === e.replace(r, "");
      }
    },
    80235: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return gfmTableFromMarkdown;
        },
        x: function () {
          return gfmTableToMarkdown;
        },
      });
      var r = n(24345);
      function defaultStringLength(e) {
        return e.length;
      }
      function toAlignment(e) {
        let t = "string" == typeof e ? e.codePointAt(0) : 0;
        return 67 === t || 99 === t
          ? 99
          : 76 === t || 108 === t
          ? 108
          : 82 === t || 114 === t
          ? 114
          : 0;
      }
      var i = n(34598);
      function gfmTableFromMarkdown() {
        return {
          enter: {
            table: enterTable,
            tableData: enterCell,
            tableHeader: enterCell,
            tableRow: enterRow,
          },
          exit: {
            codeText: exitCodeText,
            table: exitTable,
            tableData: exit,
            tableHeader: exit,
            tableRow: exit,
          },
        };
      }
      function enterTable(e) {
        let t = e._align;
        (0, r.ok)(t, "expected `_align` on table"),
          this.enter(
            {
              type: "table",
              align: t.map(function (e) {
                return "none" === e ? null : e;
              }),
              children: [],
            },
            e
          ),
          (this.data.inTable = !0);
      }
      function exitTable(e) {
        this.exit(e), (this.data.inTable = void 0);
      }
      function enterRow(e) {
        this.enter({ type: "tableRow", children: [] }, e);
      }
      function exit(e) {
        this.exit(e);
      }
      function enterCell(e) {
        this.enter({ type: "tableCell", children: [] }, e);
      }
      function exitCodeText(e) {
        let t = this.resume();
        this.data.inTable && (t = t.replace(/\\([\\|])/g, replace));
        let n = this.stack[this.stack.length - 1];
        (0, r.ok)("inlineCode" === n.type), (n.value = t), this.exit(e);
      }
      function replace(e, t) {
        return "|" === t ? t : e;
      }
      function gfmTableToMarkdown(e) {
        let t = e || {},
          n = t.tableCellPadding,
          r = t.tablePipeAlign,
          o = t.stringLength,
          a = n ? " " : "|";
        return {
          unsafe: [
            { character: "\r", inConstruct: "tableCell" },
            { character: "\n", inConstruct: "tableCell" },
            { atBreak: !0, character: "|", after: "[	 :-]" },
            { character: "|", inConstruct: "tableCell" },
            { atBreak: !0, character: ":", after: "-" },
            { atBreak: !0, character: "-", after: "[:|-]" },
          ],
          handlers: {
            inlineCode: function (e, t, n) {
              let r = i.p.inlineCode(e, t, n);
              return (
                n.stack.includes("tableCell") && (r = r.replace(/\|/g, "\\$&")),
                r
              );
            },
            table: function (e, t, n, r) {
              return serializeData(
                (function (e, t, n) {
                  let r = e.children,
                    i = -1,
                    o = [],
                    a = t.enter("table");
                  for (; ++i < r.length; )
                    o[i] = handleTableRowAsData(r[i], t, n);
                  return a(), o;
                })(e, n, r),
                e.align
              );
            },
            tableCell: handleTableCell,
            tableRow: function (e, t, n, r) {
              let i = handleTableRowAsData(e, n, r),
                o = serializeData([i]);
              return o.slice(0, o.indexOf("\n"));
            },
          },
        };
        function handleTableCell(e, t, n, r) {
          let i = n.enter("tableCell"),
            o = n.enter("phrasing"),
            l = n.containerPhrasing(e, { ...r, before: a, after: a });
          return o(), i(), l;
        }
        function serializeData(e, t) {
          return (function (e, t = {}) {
            let n = (t.align || []).concat(),
              r = t.stringLength || defaultStringLength,
              i = [],
              o = [],
              a = [],
              l = [],
              s = 0,
              u = -1;
            for (; ++u < e.length; ) {
              let n = [],
                i = [],
                f = -1;
              for (e[u].length > s && (s = e[u].length); ++f < e[u].length; ) {
                var c;
                let o = null == (c = e[u][f]) ? "" : String(c);
                if (!1 !== t.alignDelimiters) {
                  let e = r(o);
                  (i[f] = e), (void 0 === l[f] || e > l[f]) && (l[f] = e);
                }
                n.push(o);
              }
              (o[u] = n), (a[u] = i);
            }
            let f = -1;
            if ("object" == typeof n && "length" in n)
              for (; ++f < s; ) i[f] = toAlignment(n[f]);
            else {
              let e = toAlignment(n);
              for (; ++f < s; ) i[f] = e;
            }
            f = -1;
            let p = [],
              d = [];
            for (; ++f < s; ) {
              let e = i[f],
                n = "",
                r = "";
              99 === e
                ? ((n = ":"), (r = ":"))
                : 108 === e
                ? (n = ":")
                : 114 === e && (r = ":");
              let o =
                  !1 === t.alignDelimiters
                    ? 1
                    : Math.max(1, l[f] - n.length - r.length),
                a = n + "-".repeat(o) + r;
              !1 !== t.alignDelimiters &&
                ((o = n.length + o + r.length) > l[f] && (l[f] = o),
                (d[f] = o)),
                (p[f] = a);
            }
            o.splice(1, 0, p), a.splice(1, 0, d), (u = -1);
            let h = [];
            for (; ++u < o.length; ) {
              let e = o[u],
                n = a[u];
              f = -1;
              let r = [];
              for (; ++f < s; ) {
                let o = e[f] || "",
                  a = "",
                  u = "";
                if (!1 !== t.alignDelimiters) {
                  let e = l[f] - (n[f] || 0),
                    t = i[f];
                  114 === t
                    ? (a = " ".repeat(e))
                    : 99 === t
                    ? e % 2
                      ? ((a = " ".repeat(e / 2 + 0.5)),
                        (u = " ".repeat(e / 2 - 0.5)))
                      : (u = a = " ".repeat(e / 2))
                    : (u = " ".repeat(e));
                }
                !1 === t.delimiterStart || f || r.push("|"),
                  !1 !== t.padding &&
                    !(!1 === t.alignDelimiters && "" === o) &&
                    (!1 !== t.delimiterStart || f) &&
                    r.push(" "),
                  !1 !== t.alignDelimiters && r.push(a),
                  r.push(o),
                  !1 !== t.alignDelimiters && r.push(u),
                  !1 !== t.padding && r.push(" "),
                  (!1 !== t.delimiterEnd || f !== s - 1) && r.push("|");
              }
              h.push(
                !1 === t.delimiterEnd
                  ? r.join("").replace(/ +$/, "")
                  : r.join("")
              );
            }
            return h.join("\n");
          })(e, { align: t, alignDelimiters: r, padding: n, stringLength: o });
        }
        function handleTableRowAsData(e, t, n) {
          let r = e.children,
            i = -1,
            o = [],
            a = t.enter("tableRow");
          for (; ++i < r.length; ) o[i] = handleTableCell(r[i], e, t, n);
          return a(), o;
        }
      }
    },
    22804: function (e, t, n) {
      "use strict";
      n.d(t, {
        w: function () {
          return i;
        },
      });
      var r = n(96093);
      let i = (0, r.O)([
        "break",
        "delete",
        "emphasis",
        "footnote",
        "footnoteReference",
        "image",
        "imageReference",
        "inlineCode",
        "inlineMath",
        "link",
        "linkReference",
        "mdxJsxTextElement",
        "mdxTextExpression",
        "strong",
        "text",
        "textDirective",
      ]);
    },
    34598: function (e, t, n) {
      "use strict";
      function map(e, t, n) {
        return ">" + (n ? "" : " ") + e;
      }
      n.d(t, {
        p: function () {
          return s;
        },
      });
      var r = n(40585);
      function hardBreak(e, t, n, i) {
        let o = -1;
        for (; ++o < n.unsafe.length; )
          if ("\n" === n.unsafe[o].character && (0, r.P)(n.stack, n.unsafe[o]))
            return /[ \t]/.test(i.before) ? "" : " ";
        return "\\\n";
      }
      var i = n(89375);
      function code_map(e, t, n) {
        return (n ? "" : "    ") + e;
      }
      function checkQuote(e) {
        let t = e.options.quote || '"';
        if ('"' !== t && "'" !== t)
          throw Error(
            "Cannot serialize title with `" +
              t +
              "` for `options.quote`, expected `\"`, or `'`"
          );
        return t;
      }
      function emphasis(e, t, n, r) {
        let i = (function (e) {
            let t = e.options.emphasis || "*";
            if ("*" !== t && "_" !== t)
              throw Error(
                "Cannot serialize emphasis with `" +
                  t +
                  "` for `options.emphasis`, expected `*`, or `_`"
              );
            return t;
          })(n),
          o = n.enter("emphasis"),
          a = n.createTracker(r),
          l = a.move(i);
        return (
          (l +=
            a.move(
              n.containerPhrasing(e, { before: l, after: i, ...a.current() })
            ) + a.move(i)),
          o(),
          l
        );
      }
      emphasis.peek = function (e, t, n) {
        return n.options.emphasis || "*";
      };
      var o = n(65315);
      function html(e) {
        return e.value || "";
      }
      function image_image(e, t, n, r) {
        let i = checkQuote(n),
          o = '"' === i ? "Quote" : "Apostrophe",
          a = n.enter("image"),
          l = n.enter("label"),
          s = n.createTracker(r),
          u = s.move("![");
        return (
          (u +=
            s.move(n.safe(e.alt, { before: u, after: "]", ...s.current() })) +
            s.move("](")),
          l(),
          (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
            ? ((l = n.enter("destinationLiteral")),
              (u += s.move("<")),
              (u +=
                s.move(
                  n.safe(e.url, { before: u, after: ">", ...s.current() })
                ) + s.move(">")))
            : ((l = n.enter("destinationRaw")),
              (u += s.move(
                n.safe(e.url, {
                  before: u,
                  after: e.title ? " " : ")",
                  ...s.current(),
                })
              ))),
          l(),
          e.title &&
            ((l = n.enter(`title${o}`)),
            (u += s.move(" " + i)),
            (u +=
              s.move(n.safe(e.title, { before: u, after: i, ...s.current() })) +
              s.move(i)),
            l()),
          (u += s.move(")")),
          a(),
          u
        );
      }
      function imageReference(e, t, n, r) {
        let i = e.referenceType,
          o = n.enter("imageReference"),
          a = n.enter("label"),
          l = n.createTracker(r),
          s = l.move("!["),
          u = n.safe(e.alt, { before: s, after: "]", ...l.current() });
        (s += l.move(u + "][")), a();
        let c = n.stack;
        (n.stack = []), (a = n.enter("reference"));
        let f = n.safe(n.associationId(e), {
          before: s,
          after: "]",
          ...l.current(),
        });
        return (
          a(),
          (n.stack = c),
          o(),
          "full" !== i && u && u === f
            ? "shortcut" === i
              ? (s = s.slice(0, -1))
              : (s += l.move("]"))
            : (s += l.move(f + "]")),
          s
        );
      }
      function inlineCode(e, t, n) {
        let r = e.value || "",
          i = "`",
          o = -1;
        for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r); ) i += "`";
        for (
          /[^ \r\n]/.test(r) &&
          ((/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r)) || /^`|`$/.test(r)) &&
          (r = " " + r + " ");
          ++o < n.unsafe.length;

        ) {
          let e;
          let t = n.unsafe[o],
            i = n.compilePattern(t);
          if (t.atBreak)
            for (; (e = i.exec(r)); ) {
              let t = e.index;
              10 === r.charCodeAt(t) && 13 === r.charCodeAt(t - 1) && t--,
                (r = r.slice(0, t) + " " + r.slice(e.index + 1));
            }
        }
        return i + r + i;
      }
      (html.peek = function () {
        return "<";
      }),
        (image_image.peek = function () {
          return "!";
        }),
        (imageReference.peek = function () {
          return "!";
        }),
        (inlineCode.peek = function () {
          return "`";
        });
      var a = n(27962);
      function formatLinkAsAutolink(e, t) {
        let n = (0, a.B)(e);
        return !!(
          !t.options.resourceLink &&
          e.url &&
          !e.title &&
          e.children &&
          1 === e.children.length &&
          "text" === e.children[0].type &&
          (n === e.url || "mailto:" + n === e.url) &&
          /^[a-z][a-z+.-]+:/i.test(e.url) &&
          !/[\0- <>\u007F]/.test(e.url)
        );
      }
      function link_link(e, t, n, r) {
        let i, o;
        let a = checkQuote(n),
          l = '"' === a ? "Quote" : "Apostrophe",
          s = n.createTracker(r);
        if (formatLinkAsAutolink(e, n)) {
          let t = n.stack;
          (n.stack = []), (i = n.enter("autolink"));
          let r = s.move("<");
          return (
            (r +=
              s.move(
                n.containerPhrasing(e, {
                  before: r,
                  after: ">",
                  ...s.current(),
                })
              ) + s.move(">")),
            i(),
            (n.stack = t),
            r
          );
        }
        (i = n.enter("link")), (o = n.enter("label"));
        let u = s.move("[");
        return (
          (u +=
            s.move(
              n.containerPhrasing(e, { before: u, after: "](", ...s.current() })
            ) + s.move("](")),
          o(),
          (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
            ? ((o = n.enter("destinationLiteral")),
              (u += s.move("<")),
              (u +=
                s.move(
                  n.safe(e.url, { before: u, after: ">", ...s.current() })
                ) + s.move(">")))
            : ((o = n.enter("destinationRaw")),
              (u += s.move(
                n.safe(e.url, {
                  before: u,
                  after: e.title ? " " : ")",
                  ...s.current(),
                })
              ))),
          o(),
          e.title &&
            ((o = n.enter(`title${l}`)),
            (u += s.move(" " + a)),
            (u +=
              s.move(n.safe(e.title, { before: u, after: a, ...s.current() })) +
              s.move(a)),
            o()),
          (u += s.move(")")),
          i(),
          u
        );
      }
      function linkReference(e, t, n, r) {
        let i = e.referenceType,
          o = n.enter("linkReference"),
          a = n.enter("label"),
          l = n.createTracker(r),
          s = l.move("["),
          u = n.containerPhrasing(e, { before: s, after: "]", ...l.current() });
        (s += l.move(u + "][")), a();
        let c = n.stack;
        (n.stack = []), (a = n.enter("reference"));
        let f = n.safe(n.associationId(e), {
          before: s,
          after: "]",
          ...l.current(),
        });
        return (
          a(),
          (n.stack = c),
          o(),
          "full" !== i && u && u === f
            ? "shortcut" === i
              ? (s = s.slice(0, -1))
              : (s += l.move("]"))
            : (s += l.move(f + "]")),
          s
        );
      }
      function checkBullet(e) {
        let t = e.options.bullet || "*";
        if ("*" !== t && "+" !== t && "-" !== t)
          throw Error(
            "Cannot serialize items with `" +
              t +
              "` for `options.bullet`, expected `*`, `+`, or `-`"
          );
        return t;
      }
      function checkRule(e) {
        let t = e.options.rule || "*";
        if ("*" !== t && "-" !== t && "_" !== t)
          throw Error(
            "Cannot serialize rules with `" +
              t +
              "` for `options.rule`, expected `*`, `-`, or `_`"
          );
        return t;
      }
      (link_link.peek = function (e, t, n) {
        return formatLinkAsAutolink(e, n) ? "<" : "[";
      }),
        (linkReference.peek = function () {
          return "[";
        });
      var l = n(22804);
      function strong(e, t, n, r) {
        let i = (function (e) {
            let t = e.options.strong || "*";
            if ("*" !== t && "_" !== t)
              throw Error(
                "Cannot serialize strong with `" +
                  t +
                  "` for `options.strong`, expected `*`, or `_`"
              );
            return t;
          })(n),
          o = n.enter("strong"),
          a = n.createTracker(r),
          l = a.move(i + i);
        return (
          (l +=
            a.move(
              n.containerPhrasing(e, { before: l, after: i, ...a.current() })
            ) + a.move(i + i)),
          o(),
          l
        );
      }
      strong.peek = function (e, t, n) {
        return n.options.strong || "*";
      };
      let s = {
        blockquote: function (e, t, n, r) {
          let i = n.enter("blockquote"),
            o = n.createTracker(r);
          o.move("> "), o.shift(2);
          let a = n.indentLines(n.containerFlow(e, o.current()), map);
          return i(), a;
        },
        break: hardBreak,
        code: function (e, t, n, r) {
          let o = (function (e) {
              let t = e.options.fence || "`";
              if ("`" !== t && "~" !== t)
                throw Error(
                  "Cannot serialize code with `" +
                    t +
                    "` for `options.fence`, expected `` ` `` or `~`"
                );
              return t;
            })(n),
            a = e.value || "",
            l = "`" === o ? "GraveAccent" : "Tilde";
          if ((0, i.A)(e, n)) {
            let e = n.enter("codeIndented"),
              t = n.indentLines(a, code_map);
            return e(), t;
          }
          let s = n.createTracker(r),
            u = o.repeat(
              Math.max(
                (function (e, t) {
                  let n = String(e),
                    r = n.indexOf(t),
                    i = r,
                    o = 0,
                    a = 0;
                  if ("string" != typeof t)
                    throw TypeError("Expected substring");
                  for (; -1 !== r; )
                    r === i ? ++o > a && (a = o) : (o = 1),
                      (i = r + t.length),
                      (r = n.indexOf(t, i));
                  return a;
                })(a, o) + 1,
                3
              )
            ),
            c = n.enter("codeFenced"),
            f = s.move(u);
          if (e.lang) {
            let t = n.enter(`codeFencedLang${l}`);
            (f += s.move(
              n.safe(e.lang, {
                before: f,
                after: " ",
                encode: ["`"],
                ...s.current(),
              })
            )),
              t();
          }
          if (e.lang && e.meta) {
            let t = n.enter(`codeFencedMeta${l}`);
            (f += s.move(" ")),
              (f += s.move(
                n.safe(e.meta, {
                  before: f,
                  after: "\n",
                  encode: ["`"],
                  ...s.current(),
                })
              )),
              t();
          }
          return (
            (f += s.move("\n")),
            a && (f += s.move(a + "\n")),
            (f += s.move(u)),
            c(),
            f
          );
        },
        definition: function (e, t, n, r) {
          let i = checkQuote(n),
            o = '"' === i ? "Quote" : "Apostrophe",
            a = n.enter("definition"),
            l = n.enter("label"),
            s = n.createTracker(r),
            u = s.move("[");
          return (
            (u +=
              s.move(
                n.safe(n.associationId(e), {
                  before: u,
                  after: "]",
                  ...s.current(),
                })
              ) + s.move("]: ")),
            l(),
            !e.url || /[\0- \u007F]/.test(e.url)
              ? ((l = n.enter("destinationLiteral")),
                (u += s.move("<")),
                (u +=
                  s.move(
                    n.safe(e.url, { before: u, after: ">", ...s.current() })
                  ) + s.move(">")))
              : ((l = n.enter("destinationRaw")),
                (u += s.move(
                  n.safe(e.url, {
                    before: u,
                    after: e.title ? " " : "\n",
                    ...s.current(),
                  })
                ))),
            l(),
            e.title &&
              ((l = n.enter(`title${o}`)),
              (u += s.move(" " + i)),
              (u +=
                s.move(
                  n.safe(e.title, { before: u, after: i, ...s.current() })
                ) + s.move(i)),
              l()),
            a(),
            u
          );
        },
        emphasis: emphasis,
        hardBreak: hardBreak,
        heading: function (e, t, n, r) {
          let i = Math.max(Math.min(6, e.depth || 1), 1),
            a = n.createTracker(r);
          if ((0, o.T)(e, n)) {
            let t = n.enter("headingSetext"),
              r = n.enter("phrasing"),
              o = n.containerPhrasing(e, {
                ...a.current(),
                before: "\n",
                after: "\n",
              });
            return (
              r(),
              t(),
              o +
                "\n" +
                (1 === i ? "=" : "-").repeat(
                  o.length -
                    (Math.max(o.lastIndexOf("\r"), o.lastIndexOf("\n")) + 1)
                )
            );
          }
          let l = "#".repeat(i),
            s = n.enter("headingAtx"),
            u = n.enter("phrasing");
          a.move(l + " ");
          let c = n.containerPhrasing(e, {
            before: "# ",
            after: "\n",
            ...a.current(),
          });
          return (
            /^[\t ]/.test(c) &&
              (c =
                "&#x" +
                c.charCodeAt(0).toString(16).toUpperCase() +
                ";" +
                c.slice(1)),
            (c = c ? l + " " + c : l),
            n.options.closeAtx && (c += " " + l),
            u(),
            s(),
            c
          );
        },
        html: html,
        image: image_image,
        imageReference: imageReference,
        inlineCode: inlineCode,
        link: link_link,
        linkReference: linkReference,
        list: function (e, t, n, r) {
          let i = n.enter("list"),
            o = n.bulletCurrent,
            a = e.ordered
              ? (function (e) {
                  let t = e.options.bulletOrdered || ".";
                  if ("." !== t && ")" !== t)
                    throw Error(
                      "Cannot serialize items with `" +
                        t +
                        "` for `options.bulletOrdered`, expected `.` or `)`"
                    );
                  return t;
                })(n)
              : checkBullet(n),
            l = e.ordered
              ? "." === a
                ? ")"
                : "."
              : (function (e) {
                  let t = checkBullet(e),
                    n = e.options.bulletOther;
                  if (!n) return "*" === t ? "-" : "*";
                  if ("*" !== n && "+" !== n && "-" !== n)
                    throw Error(
                      "Cannot serialize items with `" +
                        n +
                        "` for `options.bulletOther`, expected `*`, `+`, or `-`"
                    );
                  if (n === t)
                    throw Error(
                      "Expected `bullet` (`" +
                        t +
                        "`) and `bulletOther` (`" +
                        n +
                        "`) to be different"
                    );
                  return n;
                })(n),
            s = !!t && !!n.bulletLastUsed && a === n.bulletLastUsed;
          if (!e.ordered) {
            let t = e.children ? e.children[0] : void 0;
            if (
              (("*" !== a && "-" !== a) ||
                !t ||
                (t.children && t.children[0]) ||
                "list" !== n.stack[n.stack.length - 1] ||
                "listItem" !== n.stack[n.stack.length - 2] ||
                "list" !== n.stack[n.stack.length - 3] ||
                "listItem" !== n.stack[n.stack.length - 4] ||
                0 !== n.indexStack[n.indexStack.length - 1] ||
                0 !== n.indexStack[n.indexStack.length - 2] ||
                0 !== n.indexStack[n.indexStack.length - 3] ||
                (s = !0),
              checkRule(n) === a && t)
            ) {
              let t = -1;
              for (; ++t < e.children.length; ) {
                let n = e.children[t];
                if (
                  n &&
                  "listItem" === n.type &&
                  n.children &&
                  n.children[0] &&
                  "thematicBreak" === n.children[0].type
                ) {
                  s = !0;
                  break;
                }
              }
            }
          }
          s && (a = l), (n.bulletCurrent = a);
          let u = n.containerFlow(e, r);
          return (n.bulletLastUsed = a), (n.bulletCurrent = o), i(), u;
        },
        listItem: function (e, t, n, r) {
          let i = (function (e) {
              let t = e.options.listItemIndent || "one";
              if ("tab" !== t && "one" !== t && "mixed" !== t)
                throw Error(
                  "Cannot serialize items with `" +
                    t +
                    "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
                );
              return t;
            })(n),
            o = n.bulletCurrent || checkBullet(n);
          t &&
            "list" === t.type &&
            t.ordered &&
            (o =
              ("number" == typeof t.start && t.start > -1 ? t.start : 1) +
              (!1 === n.options.incrementListMarker
                ? 0
                : t.children.indexOf(e)) +
              o);
          let a = o.length + 1;
          ("tab" === i ||
            ("mixed" === i &&
              ((t && "list" === t.type && t.spread) || e.spread))) &&
            (a = 4 * Math.ceil(a / 4));
          let l = n.createTracker(r);
          l.move(o + " ".repeat(a - o.length)), l.shift(a);
          let s = n.enter("listItem"),
            u = n.indentLines(
              n.containerFlow(e, l.current()),
              function (e, t, n) {
                return t
                  ? (n ? "" : " ".repeat(a)) + e
                  : (n ? o : o + " ".repeat(a - o.length)) + e;
              }
            );
          return s(), u;
        },
        paragraph: function (e, t, n, r) {
          let i = n.enter("paragraph"),
            o = n.enter("phrasing"),
            a = n.containerPhrasing(e, r);
          return o(), i(), a;
        },
        root: function (e, t, n, r) {
          let i = e.children.some(function (e) {
              return (0, l.w)(e);
            }),
            o = i ? n.containerPhrasing : n.containerFlow;
          return o.call(n, e, r);
        },
        strong: strong,
        text: function (e, t, n, r) {
          return n.safe(e.value, r);
        },
        thematicBreak: function (e, t, n) {
          let r = (checkRule(n) + (n.options.ruleSpaces ? " " : "")).repeat(
            (function (e) {
              let t = e.options.ruleRepetition || 3;
              if (t < 3)
                throw Error(
                  "Cannot serialize rules with repetition `" +
                    t +
                    "` for `options.ruleRepetition`, expected `3` or more"
                );
              return t;
            })(n)
          );
          return n.options.ruleSpaces ? r.slice(0, -1) : r;
        },
      };
    },
    85922: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return toMarkdown;
        },
      });
      let r = {}.hasOwnProperty,
        i = {}.hasOwnProperty;
      var o = n(34598),
        a = n(89375),
        l = n(65315);
      let s = [
          function (e, t, n, r) {
            if (
              "code" === t.type &&
              (0, a.A)(t, r) &&
              ("list" === e.type || (e.type === t.type && (0, a.A)(e, r)))
            )
              return !1;
            if ("spread" in n && "boolean" == typeof n.spread) {
              if (
                "paragraph" === e.type &&
                (e.type === t.type ||
                  "definition" === t.type ||
                  ("heading" === t.type && (0, l.T)(t, r)))
              )
                return;
              return n.spread ? 1 : 0;
            }
          },
        ],
        u = [
          "autolink",
          "destinationLiteral",
          "destinationRaw",
          "reference",
          "titleQuote",
          "titleApostrophe",
        ],
        c = [
          { character: "	", after: "[\\r\\n]", inConstruct: "phrasing" },
          { character: "	", before: "[\\r\\n]", inConstruct: "phrasing" },
          {
            character: "	",
            inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"],
          },
          {
            character: "\r",
            inConstruct: [
              "codeFencedLangGraveAccent",
              "codeFencedLangTilde",
              "codeFencedMetaGraveAccent",
              "codeFencedMetaTilde",
              "destinationLiteral",
              "headingAtx",
            ],
          },
          {
            character: "\n",
            inConstruct: [
              "codeFencedLangGraveAccent",
              "codeFencedLangTilde",
              "codeFencedMetaGraveAccent",
              "codeFencedMetaTilde",
              "destinationLiteral",
              "headingAtx",
            ],
          },
          { character: " ", after: "[\\r\\n]", inConstruct: "phrasing" },
          { character: " ", before: "[\\r\\n]", inConstruct: "phrasing" },
          {
            character: " ",
            inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"],
          },
          {
            character: "!",
            after: "\\[",
            inConstruct: "phrasing",
            notInConstruct: u,
          },
          { character: '"', inConstruct: "titleQuote" },
          { atBreak: !0, character: "#" },
          { character: "#", inConstruct: "headingAtx", after: "(?:[\r\n]|$)" },
          { character: "&", after: "[#A-Za-z]", inConstruct: "phrasing" },
          { character: "'", inConstruct: "titleApostrophe" },
          { character: "(", inConstruct: "destinationRaw" },
          {
            before: "\\]",
            character: "(",
            inConstruct: "phrasing",
            notInConstruct: u,
          },
          { atBreak: !0, before: "\\d+", character: ")" },
          { character: ")", inConstruct: "destinationRaw" },
          { atBreak: !0, character: "*", after: "(?:[ 	\r\n*])" },
          { character: "*", inConstruct: "phrasing", notInConstruct: u },
          { atBreak: !0, character: "+", after: "(?:[ 	\r\n])" },
          { atBreak: !0, character: "-", after: "(?:[ 	\r\n-])" },
          {
            atBreak: !0,
            before: "\\d+",
            character: ".",
            after: "(?:[ 	\r\n]|$)",
          },
          { atBreak: !0, character: "<", after: "[!/?A-Za-z]" },
          {
            character: "<",
            after: "[!/?A-Za-z]",
            inConstruct: "phrasing",
            notInConstruct: u,
          },
          { character: "<", inConstruct: "destinationLiteral" },
          { atBreak: !0, character: "=" },
          { atBreak: !0, character: ">" },
          { character: ">", inConstruct: "destinationLiteral" },
          { atBreak: !0, character: "[" },
          { character: "[", inConstruct: "phrasing", notInConstruct: u },
          { character: "[", inConstruct: ["label", "reference"] },
          { character: "\\", after: "[\\r\\n]", inConstruct: "phrasing" },
          { character: "]", inConstruct: ["label", "reference"] },
          { atBreak: !0, character: "_" },
          { character: "_", inConstruct: "phrasing", notInConstruct: u },
          { atBreak: !0, character: "`" },
          {
            character: "`",
            inConstruct: [
              "codeFencedLangGraveAccent",
              "codeFencedMetaGraveAccent",
            ],
          },
          { character: "`", inConstruct: "phrasing", notInConstruct: u },
          { atBreak: !0, character: "~" },
        ];
      var f = n(47881);
      function association(e) {
        return e.label || !e.identifier
          ? e.label || ""
          : (0, f.v)(e.identifier);
      }
      function compilePattern(e) {
        if (!e._compiled) {
          let t =
            (e.atBreak ? "[\\r\\n][\\t ]*" : "") +
            (e.before ? "(?:" + e.before + ")" : "");
          e._compiled = RegExp(
            (t ? "(" + t + ")" : "") +
              (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") +
              e.character +
              (e.after ? "(?:" + e.after + ")" : ""),
            "g"
          );
        }
        return e._compiled;
      }
      let p = /\r?\n|\r/g;
      function indentLines(e, t) {
        let n;
        let r = [],
          i = 0,
          o = 0;
        for (; (n = p.exec(e)); )
          one(e.slice(i, n.index)),
            r.push(n[0]),
            (i = n.index + n[0].length),
            o++;
        return one(e.slice(i)), r.join("");
        function one(e) {
          r.push(t(e, o, !e));
        }
      }
      var d = n(40585);
      function numerical(e, t) {
        return e - t;
      }
      function escapeBackslashes(e, t) {
        let n;
        let r = /\\(?=[!-/:-@[-`{-~])/g,
          i = [],
          o = [],
          a = e + t,
          l = -1,
          s = 0;
        for (; (n = r.exec(a)); ) i.push(n.index);
        for (; ++l < i.length; )
          s !== i[l] && o.push(e.slice(s, i[l])), o.push("\\"), (s = i[l]);
        return o.push(e.slice(s)), o.join("");
      }
      function track(e) {
        let t = e || {},
          n = t.now || {},
          r = t.lineShift || 0,
          i = n.line || 1,
          o = n.column || 1;
        return {
          move: function (e) {
            let t = e || "",
              n = t.split(/\r?\n|\r/g),
              a = n[n.length - 1];
            return (
              (i += n.length - 1),
              (o = 1 === n.length ? o + a.length : 1 + a.length + r),
              t
            );
          },
          current: function () {
            return { now: { line: i, column: o }, lineShift: r };
          },
          shift: function (e) {
            r += e;
          },
        };
      }
      function toMarkdown(e, t = {}) {
        let n = {
          enter: function (e) {
            return (
              n.stack.push(e),
              function () {
                n.stack.pop();
              }
            );
          },
          indentLines: indentLines,
          associationId: association,
          containerPhrasing: containerPhrasingBound,
          containerFlow: containerFlowBound,
          createTracker: track,
          compilePattern: compilePattern,
          safe: safeBound,
          stack: [],
          unsafe: [...c],
          join: [...s],
          handlers: { ...o.p },
          options: {},
          indexStack: [],
          handle: void 0,
        };
        !(function configure(e, t) {
          var n, r, o, a;
          let l,
            s = -1;
          if (t.extensions)
            for (; ++s < t.extensions.length; ) configure(e, t.extensions[s]);
          for (l in t)
            if (i.call(t, l))
              switch (l) {
                case "extensions":
                  break;
                case "unsafe":
                case "join":
                  (n = e[l]), (r = t[l]) && n.push(...r);
                  break;
                case "handlers":
                  (o = e[l]), (a = t[l]) && Object.assign(o, a);
                  break;
                default:
                  e.options[l] = t[l];
              }
          return e;
        })(n, t),
          n.options.tightDefinitions && n.join.push(joinDefinition),
          (n.handle = (function (e, t) {
            let n = t || {};
            function one(t, ...n) {
              let i = one.invalid,
                o = one.handlers;
              if (t && r.call(t, e)) {
                let n = String(t[e]);
                i = r.call(o, n) ? o[n] : one.unknown;
              }
              if (i) return i.call(this, t, ...n);
            }
            return (
              (one.handlers = n.handlers || {}),
              (one.invalid = n.invalid),
              (one.unknown = n.unknown),
              one
            );
          })("type", { invalid, unknown, handlers: n.handlers }));
        let a = n.handle(e, void 0, n, {
          before: "\n",
          after: "\n",
          now: { line: 1, column: 1 },
          lineShift: 0,
        });
        return (
          a &&
            10 !== a.charCodeAt(a.length - 1) &&
            13 !== a.charCodeAt(a.length - 1) &&
            (a += "\n"),
          a
        );
      }
      function invalid(e) {
        throw Error("Cannot handle value `" + e + "`, expected node");
      }
      function unknown(e) {
        throw Error("Cannot handle unknown node `" + e.type + "`");
      }
      function joinDefinition(e, t) {
        if ("definition" === e.type && e.type === t.type) return 0;
      }
      function containerPhrasingBound(e, t) {
        return (function (e, t, n) {
          let r = t.indexStack,
            i = e.children || [],
            o = [],
            a = -1,
            l = n.before;
          r.push(-1);
          let s = t.createTracker(n);
          for (; ++a < i.length; ) {
            let u;
            let c = i[a];
            if (((r[r.length - 1] = a), a + 1 < i.length)) {
              let n = t.handle.handlers[i[a + 1].type];
              n && n.peek && (n = n.peek),
                (u = n
                  ? n(i[a + 1], e, t, {
                      before: "",
                      after: "",
                      ...s.current(),
                    }).charAt(0)
                  : "");
            } else u = n.after;
            o.length > 0 &&
              ("\r" === l || "\n" === l) &&
              "html" === c.type &&
              ((o[o.length - 1] = o[o.length - 1].replace(/(\r?\n|\r)$/, " ")),
              (l = " "),
              (s = t.createTracker(n)).move(o.join(""))),
              o.push(
                s.move(
                  t.handle(c, e, t, { ...s.current(), before: l, after: u })
                )
              ),
              (l = o[o.length - 1].slice(-1));
          }
          return r.pop(), o.join("");
        })(e, this, t);
      }
      function containerFlowBound(e, t) {
        return (function (e, t, n) {
          let r = t.indexStack,
            i = e.children || [],
            o = t.createTracker(n),
            a = [],
            l = -1;
          for (r.push(-1); ++l < i.length; ) {
            let n = i[l];
            (r[r.length - 1] = l),
              a.push(
                o.move(
                  t.handle(n, e, t, {
                    before: "\n",
                    after: "\n",
                    ...o.current(),
                  })
                )
              ),
              "list" !== n.type && (t.bulletLastUsed = void 0),
              l < i.length - 1 &&
                a.push(
                  o.move(
                    (function (e, t, n, r) {
                      let i = r.join.length;
                      for (; i--; ) {
                        let o = r.join[i](e, t, n, r);
                        if (!0 === o || 1 === o) break;
                        if ("number" == typeof o) return "\n".repeat(1 + o);
                        if (!1 === o) return "\n\n<!---->\n\n";
                      }
                      return "\n\n";
                    })(n, i[l + 1], e, t)
                  )
                );
          }
          return r.pop(), a.join("");
        })(e, this, t);
      }
      function safeBound(e, t) {
        return (function (e, t, n) {
          let r = (n.before || "") + (t || "") + (n.after || ""),
            i = [],
            o = [],
            a = {},
            l = -1;
          for (; ++l < e.unsafe.length; ) {
            let t;
            let n = e.unsafe[l];
            if (!(0, d.P)(e.stack, n)) continue;
            let o = e.compilePattern(n);
            for (; (t = o.exec(r)); ) {
              let e = "before" in n || !!n.atBreak,
                r = "after" in n,
                o = t.index + (e ? t[1].length : 0);
              i.includes(o)
                ? (a[o].before && !e && (a[o].before = !1),
                  a[o].after && !r && (a[o].after = !1))
                : (i.push(o), (a[o] = { before: e, after: r }));
            }
          }
          i.sort(numerical);
          let s = n.before ? n.before.length : 0,
            u = r.length - (n.after ? n.after.length : 0);
          for (l = -1; ++l < i.length; ) {
            let e = i[l];
            !(e < s) &&
              !(e >= u) &&
              (!(e + 1 < u) ||
                i[l + 1] !== e + 1 ||
                !a[e].after ||
                a[e + 1].before ||
                a[e + 1].after) &&
              (i[l - 1] !== e - 1 ||
                !a[e].before ||
                a[e - 1].before ||
                a[e - 1].after) &&
              (s !== e && o.push(escapeBackslashes(r.slice(s, e), "\\")),
              (s = e),
              !/[!-/:-@[-`{-~]/.test(r.charAt(e)) ||
              (n.encode && n.encode.includes(r.charAt(e)))
                ? (o.push(
                    "&#x" + r.charCodeAt(e).toString(16).toUpperCase() + ";"
                  ),
                  s++)
                : o.push("\\"));
          }
          return o.push(escapeBackslashes(r.slice(s, u), n.after)), o.join("");
        })(this, e, t);
      }
    },
    89375: function (e, t, n) {
      "use strict";
      function formatCodeAsIndented(e, t) {
        return !!(
          !1 === t.options.fences &&
          e.value &&
          !e.lang &&
          /[^ \r\n]/.test(e.value) &&
          !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value)
        );
      }
      n.d(t, {
        A: function () {
          return formatCodeAsIndented;
        },
      });
    },
    65315: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return formatHeadingAsSetext;
        },
      });
      var r = n(21623),
        i = n(88718),
        o = n(27962);
      function formatHeadingAsSetext(e, t) {
        let n = !1;
        return (
          (0, r.Vn)(e, function (e) {
            if (
              ("value" in e && /\r?\n|\r/.test(e.value)) ||
              "break" === e.type
            )
              return (n = !0), i.BK;
          }),
          !!(
            (!e.depth || e.depth < 3) &&
            (0, o.B)(e) &&
            (t.options.setext || n)
          )
        );
      }
    },
    40585: function (e, t, n) {
      "use strict";
      function patternInScope(e, t) {
        return (
          listInScope(e, t.inConstruct, !0) &&
          !listInScope(e, t.notInConstruct, !1)
        );
      }
      function listInScope(e, t, n) {
        if (("string" == typeof t && (t = [t]), !t || 0 === t.length)) return n;
        let r = -1;
        for (; ++r < t.length; ) if (e.includes(t[r])) return !0;
        return !1;
      }
      n.d(t, {
        P: function () {
          return patternInScope;
        },
      });
    },
    27962: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return toString;
        },
      });
      let r = {};
      function toString(e, t) {
        let n = t || r,
          i = "boolean" != typeof n.includeImageAlt || n.includeImageAlt,
          o = "boolean" != typeof n.includeHtml || n.includeHtml;
        return one(e, i, o);
      }
      function one(e, t, n) {
        if (e && "object" == typeof e) {
          if ("value" in e) return "html" !== e.type || n ? e.value : "";
          if (t && "alt" in e && e.alt) return e.alt;
          if ("children" in e) return all(e.children, t, n);
        }
        return Array.isArray(e) ? all(e, t, n) : "";
      }
      function all(e, t, n) {
        let r = [],
          i = -1;
        for (; ++i < e.length; ) r[i] = one(e[i], t, n);
        return r.join("");
      }
    },
    23402: function (e, t, n) {
      "use strict";
      n.d(t, {
        w: function () {
          return o;
        },
      });
      var r = n(42761),
        i = n(15459);
      let o = {
        tokenize: function (e, t, n) {
          return function (t) {
            return (0, i.xz)(t)
              ? (0, r.f)(e, after, "linePrefix")(t)
              : after(t);
          };
          function after(e) {
            return null === e || (0, i.Ch)(e) ? t(e) : n(e);
          }
        },
        partial: !0,
      };
    },
    42761: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return factorySpace;
        },
      });
      var r = n(15459);
      function factorySpace(e, t, n, i) {
        let o = i ? i - 1 : Number.POSITIVE_INFINITY,
          a = 0;
        return function (i) {
          return (0, r.xz)(i)
            ? (e.enter(n),
              (function prefix(i) {
                return (0, r.xz)(i) && a++ < o
                  ? (e.consume(i), prefix)
                  : (e.exit(n), t(i));
              })(i))
            : t(i);
        };
      }
    },
    15459: function (e, t, n) {
      "use strict";
      n.d(t, {
        AF: function () {
          return l;
        },
        Av: function () {
          return asciiControl;
        },
        B8: function () {
          return c;
        },
        Ch: function () {
          return markdownLineEnding;
        },
        H$: function () {
          return i;
        },
        Xh: function () {
          return u;
        },
        jv: function () {
          return r;
        },
        n9: function () {
          return o;
        },
        pY: function () {
          return a;
        },
        sR: function () {
          return s;
        },
        xz: function () {
          return markdownSpace;
        },
        z3: function () {
          return markdownLineEndingOrSpace;
        },
      });
      let r = regexCheck(/[A-Za-z]/),
        i = regexCheck(/[\dA-Za-z]/),
        o = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
      function asciiControl(e) {
        return null !== e && (e < 32 || 127 === e);
      }
      let a = regexCheck(/\d/),
        l = regexCheck(/[\dA-Fa-f]/),
        s = regexCheck(/[!-/:-@[-`{-~]/);
      function markdownLineEnding(e) {
        return null !== e && e < -2;
      }
      function markdownLineEndingOrSpace(e) {
        return null !== e && (e < 0 || 32 === e);
      }
      function markdownSpace(e) {
        return -2 === e || -1 === e || 32 === e;
      }
      let u = regexCheck(/\p{P}|\p{S}/u),
        c = regexCheck(/\s/);
      function regexCheck(e) {
        return function (t) {
          return null !== t && t > -1 && e.test(String.fromCharCode(t));
        };
      }
    },
    21905: function (e, t, n) {
      "use strict";
      function splice(e, t, n, r) {
        let i;
        let o = e.length,
          a = 0;
        if (
          ((t = t < 0 ? (-t > o ? 0 : o + t) : t > o ? o : t),
          (n = n > 0 ? n : 0),
          r.length < 1e4)
        )
          (i = Array.from(r)).unshift(t, n), e.splice(...i);
        else
          for (n && e.splice(t, n); a < r.length; )
            (i = r.slice(a, a + 1e4)).unshift(t, 0),
              e.splice(...i),
              (a += 1e4),
              (t += 1e4);
      }
      function push(e, t) {
        return e.length > 0 ? (splice(e, e.length, 0, t), e) : t;
      }
      n.d(t, {
        V: function () {
          return push;
        },
        d: function () {
          return splice;
        },
      });
    },
    62987: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return classifyCharacter;
        },
      });
      var r = n(15459);
      function classifyCharacter(e) {
        return null === e || (0, r.z3)(e) || (0, r.B8)(e)
          ? 1
          : (0, r.Xh)(e)
          ? 2
          : void 0;
      }
    },
    4663: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return combineExtensions;
        },
      });
      var r = n(21905);
      let i = {}.hasOwnProperty;
      function combineExtensions(e) {
        let t = {},
          n = -1;
        for (; ++n < e.length; )
          !(function (e, t) {
            let n;
            for (n in t) {
              let o;
              let a = i.call(e, n) ? e[n] : void 0,
                l = a || (e[n] = {}),
                s = t[n];
              if (s)
                for (o in s) {
                  i.call(l, o) || (l[o] = []);
                  let e = s[o];
                  !(function (e, t) {
                    let n = -1,
                      i = [];
                    for (; ++n < t.length; )
                      ("after" === t[n].add ? e : i).push(t[n]);
                    (0, r.d)(e, 0, 0, i);
                  })(l[o], Array.isArray(e) ? e : e ? [e] : []);
                }
            }
          })(t, e[n]);
        return t;
      }
    },
    80889: function (e, t, n) {
      "use strict";
      function decodeNumericCharacterReference(e, t) {
        let n = Number.parseInt(e, t);
        return n < 9 ||
          11 === n ||
          (n > 13 && n < 32) ||
          (n > 126 && n < 160) ||
          (n > 55295 && n < 57344) ||
          (n > 64975 && n < 65008) ||
          (65535 & n) == 65535 ||
          (65535 & n) == 65534 ||
          n > 1114111
          ? "�"
          : String.fromCodePoint(n);
      }
      n.d(t, {
        o: function () {
          return decodeNumericCharacterReference;
        },
      });
    },
    47881: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return decodeString;
        },
      });
      var r = n(44301),
        i = n(80889);
      let o =
        /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
      function decodeString(e) {
        return e.replace(o, decode);
      }
      function decode(e, t, n) {
        if (t) return t;
        let o = n.charCodeAt(0);
        if (35 === o) {
          let e = n.charCodeAt(1),
            t = 120 === e || 88 === e;
          return (0, i.o)(n.slice(t ? 2 : 1), t ? 16 : 10);
        }
        return (0, r.T)(n) || e;
      }
    },
    11098: function (e, t, n) {
      "use strict";
      function normalizeIdentifier(e) {
        return e
          .replace(/[\t\n\r ]+/g, " ")
          .replace(/^ | $/g, "")
          .toLowerCase()
          .toUpperCase();
      }
      n.d(t, {
        d: function () {
          return normalizeIdentifier;
        },
      });
    },
    63233: function (e, t, n) {
      "use strict";
      function resolveAll(e, t, n) {
        let r = [],
          i = -1;
        for (; ++i < e.length; ) {
          let o = e[i].resolveAll;
          o && !r.includes(o) && ((t = o(t, n)), r.push(o));
        }
        return t;
      }
      n.d(t, {
        C: function () {
          return resolveAll;
        },
      });
    },
    63361: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return Markdown;
        },
      });
      var r = {};
      n.r(r),
        n.d(r, {
          boolean: function () {
            return f;
          },
          booleanish: function () {
            return p;
          },
          commaOrSpaceSeparated: function () {
            return y;
          },
          commaSeparated: function () {
            return g;
          },
          number: function () {
            return h;
          },
          overloadedBoolean: function () {
            return d;
          },
          spaceSeparated: function () {
            return m;
          },
        });
      var i = {};
      n.r(i),
        n.d(i, {
          attentionMarkers: function () {
            return eH;
          },
          contentInitial: function () {
            return eF;
          },
          disable: function () {
            return eV;
          },
          document: function () {
            return ez;
          },
          flow: function () {
            return ej;
          },
          flowInitial: function () {
            return eB;
          },
          insideSpan: function () {
            return eq;
          },
          string: function () {
            return eM;
          },
          text: function () {
            return eN;
          },
        });
      var o = n(24345);
      let a = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
        l = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
        s = {};
      function lib_name(e, t) {
        let n = (t || s).jsx ? l : a;
        return n.test(e);
      }
      var u = n(98367);
      let Schema = class Schema {
        constructor(e, t, n) {
          (this.property = e), (this.normal = t), n && (this.space = n);
        }
      };
      function merge(e, t) {
        let n = {},
          r = {},
          i = -1;
        for (; ++i < e.length; )
          Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
        return new Schema(n, r, t);
      }
      function normalize(e) {
        return e.toLowerCase();
      }
      (Schema.prototype.property = {}),
        (Schema.prototype.normal = {}),
        (Schema.prototype.space = null);
      let Info = class Info {
        constructor(e, t) {
          (this.property = e), (this.attribute = t);
        }
      };
      (Info.prototype.space = null),
        (Info.prototype.boolean = !1),
        (Info.prototype.booleanish = !1),
        (Info.prototype.overloadedBoolean = !1),
        (Info.prototype.number = !1),
        (Info.prototype.commaSeparated = !1),
        (Info.prototype.spaceSeparated = !1),
        (Info.prototype.commaOrSpaceSeparated = !1),
        (Info.prototype.mustUseProperty = !1),
        (Info.prototype.defined = !1);
      let c = 0,
        f = increment(),
        p = increment(),
        d = increment(),
        h = increment(),
        m = increment(),
        g = increment(),
        y = increment();
      function increment() {
        return 2 ** ++c;
      }
      let b = Object.keys(r);
      let DefinedInfo = class DefinedInfo extends Info {
        constructor(e, t, n, i) {
          var o, a;
          let l = -1;
          if ((super(e, t), i && (this.space = i), "number" == typeof n))
            for (; ++l < b.length; ) {
              let e = b[l];
              (o = b[l]), (a = (n & r[e]) === r[e]) && (this[o] = a);
            }
        }
      };
      DefinedInfo.prototype.defined = !0;
      let k = {}.hasOwnProperty;
      function create(e) {
        let t;
        let n = {},
          r = {};
        for (t in e.properties)
          if (k.call(e.properties, t)) {
            let i = e.properties[t],
              o = new DefinedInfo(
                t,
                e.transform(e.attributes || {}, t),
                i,
                e.space
              );
            e.mustUseProperty &&
              e.mustUseProperty.includes(t) &&
              (o.mustUseProperty = !0),
              (n[t] = o),
              (r[normalize(t)] = t),
              (r[normalize(o.attribute)] = t);
          }
        return new Schema(n, r, e.space);
      }
      let _ = create({
          space: "xlink",
          transform: (e, t) => "xlink:" + t.slice(5).toLowerCase(),
          properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null,
          },
        }),
        v = create({
          space: "xml",
          transform: (e, t) => "xml:" + t.slice(3).toLowerCase(),
          properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
        });
      function caseSensitiveTransform(e, t) {
        return t in e ? e[t] : t;
      }
      function caseInsensitiveTransform(e, t) {
        return caseSensitiveTransform(e, t.toLowerCase());
      }
      let x = create({
          space: "xmlns",
          attributes: { xmlnsxlink: "xmlns:xlink" },
          transform: caseInsensitiveTransform,
          properties: { xmlns: null, xmlnsXLink: null },
        }),
        w = create({
          transform: (e, t) =>
            "role" === t ? t : "aria-" + t.slice(4).toLowerCase(),
          properties: {
            ariaActiveDescendant: null,
            ariaAtomic: p,
            ariaAutoComplete: null,
            ariaBusy: p,
            ariaChecked: p,
            ariaColCount: h,
            ariaColIndex: h,
            ariaColSpan: h,
            ariaControls: m,
            ariaCurrent: null,
            ariaDescribedBy: m,
            ariaDetails: null,
            ariaDisabled: p,
            ariaDropEffect: m,
            ariaErrorMessage: null,
            ariaExpanded: p,
            ariaFlowTo: m,
            ariaGrabbed: p,
            ariaHasPopup: null,
            ariaHidden: p,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLabelledBy: m,
            ariaLevel: h,
            ariaLive: null,
            ariaModal: p,
            ariaMultiLine: p,
            ariaMultiSelectable: p,
            ariaOrientation: null,
            ariaOwns: m,
            ariaPlaceholder: null,
            ariaPosInSet: h,
            ariaPressed: p,
            ariaReadOnly: p,
            ariaRelevant: null,
            ariaRequired: p,
            ariaRoleDescription: m,
            ariaRowCount: h,
            ariaRowIndex: h,
            ariaRowSpan: h,
            ariaSelected: p,
            ariaSetSize: h,
            ariaSort: null,
            ariaValueMax: h,
            ariaValueMin: h,
            ariaValueNow: h,
            ariaValueText: null,
            role: null,
          },
        }),
        C = create({
          space: "html",
          attributes: {
            acceptcharset: "accept-charset",
            classname: "class",
            htmlfor: "for",
            httpequiv: "http-equiv",
          },
          transform: caseInsensitiveTransform,
          mustUseProperty: ["checked", "multiple", "muted", "selected"],
          properties: {
            abbr: null,
            accept: g,
            acceptCharset: m,
            accessKey: m,
            action: null,
            allow: null,
            allowFullScreen: f,
            allowPaymentRequest: f,
            allowUserMedia: f,
            alt: null,
            as: null,
            async: f,
            autoCapitalize: null,
            autoComplete: m,
            autoFocus: f,
            autoPlay: f,
            blocking: m,
            capture: null,
            charSet: null,
            checked: f,
            cite: null,
            className: m,
            cols: h,
            colSpan: null,
            content: null,
            contentEditable: p,
            controls: f,
            controlsList: m,
            coords: h | g,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: f,
            defer: f,
            dir: null,
            dirName: null,
            disabled: f,
            download: d,
            draggable: p,
            encType: null,
            enterKeyHint: null,
            fetchPriority: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: f,
            formTarget: null,
            headers: m,
            height: h,
            hidden: f,
            high: h,
            href: null,
            hrefLang: null,
            htmlFor: m,
            httpEquiv: m,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inert: f,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: f,
            itemId: null,
            itemProp: m,
            itemRef: m,
            itemScope: f,
            itemType: m,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: f,
            low: h,
            manifest: null,
            max: null,
            maxLength: h,
            media: null,
            method: null,
            min: null,
            minLength: h,
            multiple: f,
            muted: f,
            name: null,
            nonce: null,
            noModule: f,
            noValidate: f,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeToggle: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: f,
            optimum: h,
            pattern: null,
            ping: m,
            placeholder: null,
            playsInline: f,
            popover: null,
            popoverTarget: null,
            popoverTargetAction: null,
            poster: null,
            preload: null,
            readOnly: f,
            referrerPolicy: null,
            rel: m,
            required: f,
            reversed: f,
            rows: h,
            rowSpan: h,
            sandbox: m,
            scope: null,
            scoped: f,
            seamless: f,
            selected: f,
            shadowRootClonable: f,
            shadowRootDelegatesFocus: f,
            shadowRootMode: null,
            shape: null,
            size: h,
            sizes: null,
            slot: null,
            span: h,
            spellCheck: p,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: h,
            step: null,
            style: null,
            tabIndex: h,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: f,
            useMap: null,
            value: p,
            width: h,
            wrap: null,
            writingSuggestions: null,
            align: null,
            aLink: null,
            archive: m,
            axis: null,
            background: null,
            bgColor: null,
            border: h,
            borderColor: null,
            bottomMargin: h,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: f,
            declare: f,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: h,
            leftMargin: h,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: h,
            marginWidth: h,
            noResize: f,
            noHref: f,
            noShade: f,
            noWrap: f,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: h,
            rules: null,
            scheme: null,
            scrolling: p,
            standby: null,
            summary: null,
            text: null,
            topMargin: h,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: h,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: f,
            disableRemotePlayback: f,
            prefix: null,
            property: null,
            results: h,
            security: null,
            unselectable: null,
          },
        }),
        S = create({
          space: "svg",
          attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            transformOrigin: "transform-origin",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin",
          },
          transform: caseSensitiveTransform,
          properties: {
            about: y,
            accentHeight: h,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: h,
            amplitude: h,
            arabicForm: null,
            ascent: h,
            attributeName: null,
            attributeType: null,
            azimuth: h,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: h,
            by: null,
            calcMode: null,
            capHeight: h,
            className: m,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: h,
            diffuseConstant: h,
            direction: null,
            display: null,
            dur: null,
            divisor: h,
            dominantBaseline: null,
            download: f,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: h,
            enableBackground: null,
            end: null,
            event: null,
            exponent: h,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: h,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: g,
            g2: g,
            glyphName: g,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: h,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: h,
            horizOriginX: h,
            horizOriginY: h,
            id: null,
            ideographic: h,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: h,
            k: h,
            k1: h,
            k2: h,
            k3: h,
            k4: h,
            kernelMatrix: y,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: h,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: h,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: h,
            overlineThickness: h,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: h,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: m,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: h,
            pointsAtY: h,
            pointsAtZ: h,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: y,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: y,
            rev: y,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: y,
            requiredFeatures: y,
            requiredFonts: y,
            requiredFormats: y,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: h,
            specularExponent: h,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: h,
            strikethroughThickness: h,
            string: null,
            stroke: null,
            strokeDashArray: y,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: h,
            strokeOpacity: h,
            strokeWidth: null,
            style: null,
            surfaceScale: h,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: y,
            tabIndex: h,
            tableValues: null,
            target: null,
            targetX: h,
            targetY: h,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: y,
            to: null,
            transform: null,
            transformOrigin: null,
            u1: null,
            u2: null,
            underlinePosition: h,
            underlineThickness: h,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: h,
            values: null,
            vAlphabetic: h,
            vMathematical: h,
            vectorEffect: null,
            vHanging: h,
            vIdeographic: h,
            version: null,
            vertAdvY: h,
            vertOriginX: h,
            vertOriginY: h,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: h,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null,
          },
        }),
        E = merge([v, _, x, w, C], "html"),
        P = merge([v, _, x, w, S], "svg"),
        A = /^data[-\w.:]+$/i,
        O = /-[a-z]/g,
        T = /[A-Z]/g;
      function kebab(e) {
        return "-" + e.toLowerCase();
      }
      function camelcase(e) {
        return e.charAt(1).toUpperCase();
      }
      let I = {
        classId: "classID",
        dataType: "datatype",
        itemId: "itemID",
        strokeDashArray: "strokeDasharray",
        strokeDashOffset: "strokeDashoffset",
        strokeLineCap: "strokeLinecap",
        strokeLineJoin: "strokeLinejoin",
        strokeMiterLimit: "strokeMiterlimit",
        typeOf: "typeof",
        xLinkActuate: "xlinkActuate",
        xLinkArcRole: "xlinkArcrole",
        xLinkHref: "xlinkHref",
        xLinkRole: "xlinkRole",
        xLinkShow: "xlinkShow",
        xLinkTitle: "xlinkTitle",
        xLinkType: "xlinkType",
        xmlnsXLink: "xmlnsXlink",
      };
      var R = n(5174),
        D = R.default || R,
        L = n(3980);
      function stringifyPosition(e) {
        return e && "object" == typeof e
          ? "position" in e || "type" in e
            ? position(e.position)
            : "start" in e || "end" in e
            ? position(e)
            : "line" in e || "column" in e
            ? point(e)
            : ""
          : "";
      }
      function point(e) {
        return index(e && e.line) + ":" + index(e && e.column);
      }
      function position(e) {
        return point(e && e.start) + "-" + point(e && e.end);
      }
      function index(e) {
        return e && "number" == typeof e ? e : 1;
      }
      let VFileMessage = class VFileMessage extends Error {
        constructor(e, t, n) {
          super(), "string" == typeof t && ((n = t), (t = void 0));
          let r = "",
            i = {},
            o = !1;
          if (
            (t &&
              (i =
                "line" in t && "column" in t
                  ? { place: t }
                  : "start" in t && "end" in t
                  ? { place: t }
                  : "type" in t
                  ? { ancestors: [t], place: t.position }
                  : { ...t }),
            "string" == typeof e
              ? (r = e)
              : !i.cause && e && ((o = !0), (r = e.message), (i.cause = e)),
            !i.ruleId && !i.source && "string" == typeof n)
          ) {
            let e = n.indexOf(":");
            -1 === e
              ? (i.ruleId = n)
              : ((i.source = n.slice(0, e)), (i.ruleId = n.slice(e + 1)));
          }
          if (!i.place && i.ancestors && i.ancestors) {
            let e = i.ancestors[i.ancestors.length - 1];
            e && (i.place = e.position);
          }
          let a = i.place && "start" in i.place ? i.place.start : i.place;
          (this.ancestors = i.ancestors || void 0),
            (this.cause = i.cause || void 0),
            (this.column = a ? a.column : void 0),
            (this.fatal = void 0),
            this.file,
            (this.message = r),
            (this.line = a ? a.line : void 0),
            (this.name = stringifyPosition(i.place) || "1:1"),
            (this.place = i.place || void 0),
            (this.reason = this.message),
            (this.ruleId = i.ruleId || void 0),
            (this.source = i.source || void 0),
            (this.stack =
              o && i.cause && "string" == typeof i.cause.stack
                ? i.cause.stack
                : ""),
            this.actual,
            this.expected,
            this.note,
            this.url;
        }
      };
      (VFileMessage.prototype.file = ""),
        (VFileMessage.prototype.name = ""),
        (VFileMessage.prototype.reason = ""),
        (VFileMessage.prototype.message = ""),
        (VFileMessage.prototype.stack = ""),
        (VFileMessage.prototype.column = void 0),
        (VFileMessage.prototype.line = void 0),
        (VFileMessage.prototype.ancestors = void 0),
        (VFileMessage.prototype.cause = void 0),
        (VFileMessage.prototype.fatal = void 0),
        (VFileMessage.prototype.place = void 0),
        (VFileMessage.prototype.ruleId = void 0),
        (VFileMessage.prototype.source = void 0);
      let z = {}.hasOwnProperty,
        F = new Map(),
        B = /[A-Z]/g,
        j = /-([a-z])/g,
        M = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
        N = new Set(["td", "th"]),
        q = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
      function one(e, t, n) {
        return "element" === t.type
          ? (function (e, t, n) {
              let r = e.schema,
                i = r;
              "svg" === t.tagName.toLowerCase() &&
                "html" === r.space &&
                ((i = P), (e.schema = i)),
                e.ancestors.push(t);
              let o = findComponentFromName(e, t.tagName, !1),
                a = (function (e, t) {
                  let n, r;
                  let i = {};
                  for (r in t.properties)
                    if ("children" !== r && z.call(t.properties, r)) {
                      let o = (function (e, t, n) {
                        let r = (function (e, t) {
                          let n = normalize(t),
                            r = t,
                            i = Info;
                          if (n in e.normal) return e.property[e.normal[n]];
                          if (
                            n.length > 4 &&
                            "data" === n.slice(0, 4) &&
                            A.test(t)
                          ) {
                            if ("-" === t.charAt(4)) {
                              let e = t.slice(5).replace(O, camelcase);
                              r =
                                "data" + e.charAt(0).toUpperCase() + e.slice(1);
                            } else {
                              let e = t.slice(4);
                              if (!O.test(e)) {
                                let n = e.replace(T, kebab);
                                "-" !== n.charAt(0) && (n = "-" + n),
                                  (t = "data" + n);
                              }
                            }
                            i = DefinedInfo;
                          }
                          return new i(r, t);
                        })(e.schema, t);
                        if (
                          !(
                            null == n ||
                            ("number" == typeof n && Number.isNaN(n))
                          )
                        ) {
                          if (
                            (Array.isArray(n) &&
                              (n = r.commaSeparated
                                ? (function (e, t) {
                                    let n = {},
                                      r =
                                        "" === e[e.length - 1] ? [...e, ""] : e;
                                    return r
                                      .join(
                                        (n.padRight ? " " : "") +
                                          "," +
                                          (!1 === n.padLeft ? "" : " ")
                                      )
                                      .trim();
                                  })(n)
                                : n.join(" ").trim()),
                            "style" === r.property)
                          ) {
                            let t =
                              "object" == typeof n
                                ? n
                                : (function (e, t) {
                                    let n = {};
                                    try {
                                      D(t, function (e, t) {
                                        let r = e;
                                        "--" !== r.slice(0, 2) &&
                                          ("-ms-" === r.slice(0, 4) &&
                                            (r = "ms-" + r.slice(4)),
                                          (r = r.replace(j, toCamel))),
                                          (n[r] = t);
                                      });
                                    } catch (t) {
                                      if (!e.ignoreInvalidStyle) {
                                        let n = new VFileMessage(
                                          "Cannot parse `style` attribute",
                                          {
                                            ancestors: e.ancestors,
                                            cause: t,
                                            ruleId: "style",
                                            source: "hast-util-to-jsx-runtime",
                                          }
                                        );
                                        throw (
                                          ((n.file = e.filePath || void 0),
                                          (n.url =
                                            q +
                                            "#cannot-parse-style-attribute"),
                                          n)
                                        );
                                      }
                                    }
                                    return n;
                                  })(e, String(n));
                            return (
                              "css" === e.stylePropertyNameCase &&
                                (t = (function (e) {
                                  let t;
                                  let n = {};
                                  for (t in e)
                                    z.call(e, t) &&
                                      (n[
                                        (function (e) {
                                          let t = e.replace(B, toDash);
                                          return (
                                            "ms-" === t.slice(0, 3) &&
                                              (t = "-" + t),
                                            t
                                          );
                                        })(t)
                                      ] = e[t]);
                                  return n;
                                })(t)),
                              ["style", t]
                            );
                          }
                          return [
                            "react" === e.elementAttributeNameCase && r.space
                              ? I[r.property] || r.property
                              : r.attribute,
                            n,
                          ];
                        }
                      })(e, r, t.properties[r]);
                      if (o) {
                        let [r, a] = o;
                        e.tableCellAlignToStyle &&
                        "align" === r &&
                        "string" == typeof a &&
                        N.has(t.tagName)
                          ? (n = a)
                          : (i[r] = a);
                      }
                    }
                  if (n) {
                    let t = i.style || (i.style = {});
                    t[
                      "css" === e.stylePropertyNameCase
                        ? "text-align"
                        : "textAlign"
                    ] = n;
                  }
                  return i;
                })(e, t),
                l = createChildren(e, t);
              return (
                M.has(t.tagName) &&
                  (l = l.filter(function (e) {
                    return "string" != typeof e || !(0, u.Q)(e);
                  })),
                addNode(e, a, o, t),
                addChildren(a, l),
                e.ancestors.pop(),
                (e.schema = r),
                e.create(t, o, a, n)
              );
            })(e, t, n)
          : "mdxFlowExpression" === t.type || "mdxTextExpression" === t.type
          ? (function (e, t) {
              if (t.data && t.data.estree && e.evaluater) {
                let n = t.data.estree,
                  r = n.body[0];
                return (
                  (0, o.ok)("ExpressionStatement" === r.type),
                  e.evaluater.evaluateExpression(r.expression)
                );
              }
              crashEstree(e, t.position);
            })(e, t)
          : "mdxJsxFlowElement" === t.type || "mdxJsxTextElement" === t.type
          ? (function (e, t, n) {
              let r = e.schema,
                i = r;
              "svg" === t.name &&
                "html" === r.space &&
                ((i = P), (e.schema = i)),
                e.ancestors.push(t);
              let a =
                  null === t.name
                    ? e.Fragment
                    : findComponentFromName(e, t.name, !0),
                l = (function (e, t) {
                  let n = {};
                  for (let r of t.attributes)
                    if ("mdxJsxExpressionAttribute" === r.type) {
                      if (r.data && r.data.estree && e.evaluater) {
                        let t = r.data.estree,
                          i = t.body[0];
                        (0, o.ok)("ExpressionStatement" === i.type);
                        let a = i.expression;
                        (0, o.ok)("ObjectExpression" === a.type);
                        let l = a.properties[0];
                        (0, o.ok)("SpreadElement" === l.type),
                          Object.assign(
                            n,
                            e.evaluater.evaluateExpression(l.argument)
                          );
                      } else crashEstree(e, t.position);
                    } else {
                      let i;
                      let a = r.name;
                      if (r.value && "object" == typeof r.value) {
                        if (
                          r.value.data &&
                          r.value.data.estree &&
                          e.evaluater
                        ) {
                          let t = r.value.data.estree,
                            n = t.body[0];
                          (0, o.ok)("ExpressionStatement" === n.type),
                            (i = e.evaluater.evaluateExpression(n.expression));
                        } else crashEstree(e, t.position);
                      } else i = null === r.value || r.value;
                      n[a] = i;
                    }
                  return n;
                })(e, t),
                s = createChildren(e, t);
              return (
                addNode(e, l, a, t),
                addChildren(l, s),
                e.ancestors.pop(),
                (e.schema = r),
                e.create(t, a, l, n)
              );
            })(e, t, n)
          : "mdxjsEsm" === t.type
          ? (function (e, t) {
              if (t.data && t.data.estree && e.evaluater)
                return e.evaluater.evaluateProgram(t.data.estree);
              crashEstree(e, t.position);
            })(e, t)
          : "root" === t.type
          ? (function (e, t, n) {
              let r = {};
              return (
                addChildren(r, createChildren(e, t)),
                e.create(t, e.Fragment, r, n)
              );
            })(e, t, n)
          : "text" === t.type
          ? t.value
          : void 0;
      }
      function addNode(e, t, n, r) {
        "string" != typeof n && n !== e.Fragment && e.passNode && (t.node = r);
      }
      function addChildren(e, t) {
        if (t.length > 0) {
          let n = t.length > 1 ? t : t[0];
          n && (e.children = n);
        }
      }
      function createChildren(e, t) {
        let n = [],
          r = -1,
          i = e.passKeys ? new Map() : F;
        for (; ++r < t.children.length; ) {
          let o;
          let a = t.children[r];
          if (e.passKeys) {
            let e =
              "element" === a.type
                ? a.tagName
                : "mdxJsxFlowElement" === a.type ||
                  "mdxJsxTextElement" === a.type
                ? a.name
                : void 0;
            if (e) {
              let t = i.get(e) || 0;
              (o = e + "-" + t), i.set(e, t + 1);
            }
          }
          let l = one(e, a, o);
          void 0 !== l && n.push(l);
        }
        return n;
      }
      function findComponentFromName(e, t, n) {
        let r;
        if (n) {
          if (t.includes(".")) {
            let e;
            let n = t.split("."),
              i = -1;
            for (; ++i < n.length; ) {
              let t = lib_name(n[i])
                ? { type: "Identifier", name: n[i] }
                : { type: "Literal", value: n[i] };
              e = e
                ? {
                    type: "MemberExpression",
                    object: e,
                    property: t,
                    computed: !!(i && "Literal" === t.type),
                    optional: !1,
                  }
                : t;
            }
            (0, o.ok)(e, "always a result"), (r = e);
          } else
            r =
              lib_name(t) && !/^[a-z]/.test(t)
                ? { type: "Identifier", name: t }
                : { type: "Literal", value: t };
        } else r = { type: "Literal", value: t };
        if ("Literal" === r.type) {
          let t = r.value;
          return z.call(e.components, t) ? e.components[t] : t;
        }
        if (e.evaluater) return e.evaluater.evaluateExpression(r);
        crashEstree(e);
      }
      function crashEstree(e, t) {
        let n = new VFileMessage(
          "Cannot handle MDX estrees without `createEvaluater`",
          {
            ancestors: e.ancestors,
            place: t,
            ruleId: "mdx-estree",
            source: "hast-util-to-jsx-runtime",
          }
        );
        throw (
          ((n.file = e.filePath || void 0),
          (n.url = q + "#cannot-handle-mdx-estrees-without-createevaluater"),
          n)
        );
      }
      function toCamel(e, t) {
        return t.toUpperCase();
      }
      function toDash(e) {
        return "-" + e.toLowerCase();
      }
      let H = {
        action: ["form"],
        cite: ["blockquote", "del", "ins", "q"],
        data: ["object"],
        formAction: ["button", "input"],
        href: ["a", "area", "base", "link"],
        icon: ["menuitem"],
        itemId: null,
        manifest: ["html"],
        ping: ["a", "area"],
        poster: ["video"],
        src: [
          "audio",
          "embed",
          "iframe",
          "img",
          "input",
          "script",
          "source",
          "track",
          "video",
        ],
      };
      var V = n(85893),
        U = n(27962),
        $ = n(21905);
      let SpliceBuffer = class SpliceBuffer {
        constructor(e) {
          (this.left = e ? [...e] : []), (this.right = []);
        }
        get(e) {
          if (e < 0 || e >= this.left.length + this.right.length)
            throw RangeError(
              "Cannot access index `" +
                e +
                "` in a splice buffer of size `" +
                (this.left.length + this.right.length) +
                "`"
            );
          return e < this.left.length
            ? this.left[e]
            : this.right[this.right.length - e + this.left.length - 1];
        }
        get length() {
          return this.left.length + this.right.length;
        }
        shift() {
          return this.setCursor(0), this.right.pop();
        }
        slice(e, t) {
          let n = null == t ? Number.POSITIVE_INFINITY : t;
          return n < this.left.length
            ? this.left.slice(e, n)
            : e > this.left.length
            ? this.right
                .slice(
                  this.right.length - n + this.left.length,
                  this.right.length - e + this.left.length
                )
                .reverse()
            : this.left
                .slice(e)
                .concat(
                  this.right
                    .slice(this.right.length - n + this.left.length)
                    .reverse()
                );
        }
        splice(e, t, n) {
          let r = t || 0;
          this.setCursor(Math.trunc(e));
          let i = this.right.splice(
            this.right.length - r,
            Number.POSITIVE_INFINITY
          );
          return n && chunkedPush(this.left, n), i.reverse();
        }
        pop() {
          return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
        }
        push(e) {
          this.setCursor(Number.POSITIVE_INFINITY), this.left.push(e);
        }
        pushMany(e) {
          this.setCursor(Number.POSITIVE_INFINITY), chunkedPush(this.left, e);
        }
        unshift(e) {
          this.setCursor(0), this.right.push(e);
        }
        unshiftMany(e) {
          this.setCursor(0), chunkedPush(this.right, e.reverse());
        }
        setCursor(e) {
          if (
            e !== this.left.length &&
            (!(e > this.left.length) || 0 !== this.right.length) &&
            (!(e < 0) || 0 !== this.left.length)
          ) {
            if (e < this.left.length) {
              let t = this.left.splice(e, Number.POSITIVE_INFINITY);
              chunkedPush(this.right, t.reverse());
            } else {
              let t = this.right.splice(
                this.left.length + this.right.length - e,
                Number.POSITIVE_INFINITY
              );
              chunkedPush(this.left, t.reverse());
            }
          }
        }
      };
      function chunkedPush(e, t) {
        let n = 0;
        if (t.length < 1e4) e.push(...t);
        else for (; n < t.length; ) e.push(...t.slice(n, n + 1e4)), (n += 1e4);
      }
      function subtokenize(e) {
        let t, n, r, i, o, a, l;
        let s = {},
          u = -1,
          c = new SpliceBuffer(e);
        for (; ++u < c.length; ) {
          for (; u in s; ) u = s[u];
          if (
            ((t = c.get(u)),
            u &&
              "chunkFlow" === t[1].type &&
              "listItemPrefix" === c.get(u - 1)[1].type &&
              ((r = 0) < (a = t[1]._tokenizer.events).length &&
                "lineEndingBlank" === a[r][1].type &&
                (r += 2),
              r < a.length && "content" === a[r][1].type))
          )
            for (; ++r < a.length && "content" !== a[r][1].type; )
              "chunkText" === a[r][1].type &&
                ((a[r][1]._isInFirstContentOfListItem = !0), r++);
          if ("enter" === t[0])
            t[1].contentType &&
              (Object.assign(
                s,
                (function (e, t) {
                  let n, r;
                  let i = e.get(t)[1],
                    o = e.get(t)[2],
                    a = t - 1,
                    l = [],
                    s = i._tokenizer || o.parser[i.contentType](i.start),
                    u = s.events,
                    c = [],
                    f = {},
                    p = -1,
                    d = i,
                    h = 0,
                    m = 0,
                    g = [m];
                  for (; d; ) {
                    for (; e.get(++a)[1] !== d; );
                    l.push(a),
                      !d._tokenizer &&
                        ((n = o.sliceStream(d)),
                        d.next || n.push(null),
                        r && s.defineSkip(d.start),
                        d._isInFirstContentOfListItem &&
                          (s._gfmTasklistFirstContentOfListItem = !0),
                        s.write(n),
                        d._isInFirstContentOfListItem &&
                          (s._gfmTasklistFirstContentOfListItem = void 0)),
                      (r = d),
                      (d = d.next);
                  }
                  for (d = i; ++p < u.length; )
                    "exit" === u[p][0] &&
                      "enter" === u[p - 1][0] &&
                      u[p][1].type === u[p - 1][1].type &&
                      u[p][1].start.line !== u[p][1].end.line &&
                      ((m = p + 1),
                      g.push(m),
                      (d._tokenizer = void 0),
                      (d.previous = void 0),
                      (d = d.next));
                  for (
                    s.events = [],
                      d
                        ? ((d._tokenizer = void 0), (d.previous = void 0))
                        : g.pop(),
                      p = g.length;
                    p--;

                  ) {
                    let t = u.slice(g[p], g[p + 1]),
                      n = l.pop();
                    c.push([n, n + t.length - 1]), e.splice(n, 2, t);
                  }
                  for (c.reverse(), p = -1; ++p < c.length; )
                    (f[h + c[p][0]] = h + c[p][1]),
                      (h += c[p][1] - c[p][0] - 1);
                  return f;
                })(c, u)
              ),
              (u = s[u]),
              (l = !0));
          else if (t[1]._container) {
            for (r = u, n = void 0; r--; )
              if (
                "lineEnding" === (i = c.get(r))[1].type ||
                "lineEndingBlank" === i[1].type
              )
                "enter" === i[0] &&
                  (n && (c.get(n)[1].type = "lineEndingBlank"),
                  (i[1].type = "lineEnding"),
                  (n = r));
              else break;
            n &&
              ((t[1].end = Object.assign({}, c.get(n)[1].start)),
              (o = c.slice(n, u)).unshift(t),
              c.splice(n, u - n + 1, o));
          }
        }
        return (0, $.d)(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !l;
      }
      var W = n(4663),
        G = n(42761),
        Q = n(15459);
      let Y = {
          tokenize: function (e) {
            let t;
            let n = e.attempt(
              this.parser.constructs.contentInitial,
              function (t) {
                if (null === t) {
                  e.consume(t);
                  return;
                }
                return (
                  e.enter("lineEnding"),
                  e.consume(t),
                  e.exit("lineEnding"),
                  (0, G.f)(e, n, "linePrefix")
                );
              },
              function (n) {
                return (
                  e.enter("paragraph"),
                  (function lineStart(n) {
                    let r = e.enter("chunkText", {
                      contentType: "text",
                      previous: t,
                    });
                    return (
                      t && (t.next = r),
                      (t = r),
                      (function data(t) {
                        if (null === t) {
                          e.exit("chunkText"),
                            e.exit("paragraph"),
                            e.consume(t);
                          return;
                        }
                        return (0, Q.Ch)(t)
                          ? (e.consume(t), e.exit("chunkText"), lineStart)
                          : (e.consume(t), data);
                      })(n)
                    );
                  })(n)
                );
              }
            );
            return n;
          },
        },
        X = {
          tokenize: function (e) {
            let t, n, r;
            let i = this,
              o = [],
              a = 0;
            return start;
            function start(t) {
              if (a < o.length) {
                let n = o[a];
                return (
                  (i.containerState = n[1]),
                  e.attempt(
                    n[0].continuation,
                    documentContinue,
                    checkNewContainers
                  )(t)
                );
              }
              return checkNewContainers(t);
            }
            function documentContinue(e) {
              if ((a++, i.containerState._closeFlow)) {
                let n;
                (i.containerState._closeFlow = void 0), t && closeFlow();
                let r = i.events.length,
                  o = r;
                for (; o--; )
                  if (
                    "exit" === i.events[o][0] &&
                    "chunkFlow" === i.events[o][1].type
                  ) {
                    n = i.events[o][1].end;
                    break;
                  }
                exitContainers(a);
                let l = r;
                for (; l < i.events.length; )
                  (i.events[l][1].end = Object.assign({}, n)), l++;
                return (
                  (0, $.d)(i.events, o + 1, 0, i.events.slice(r)),
                  (i.events.length = l),
                  checkNewContainers(e)
                );
              }
              return start(e);
            }
            function checkNewContainers(n) {
              if (a === o.length) {
                if (!t) return documentContinued(n);
                if (t.currentConstruct && t.currentConstruct.concrete)
                  return flowStart(n);
                i.interrupt = !!(
                  t.currentConstruct && !t._gfmTableDynamicInterruptHack
                );
              }
              return (
                (i.containerState = {}),
                e.check(Z, thereIsANewContainer, thereIsNoNewContainer)(n)
              );
            }
            function thereIsANewContainer(e) {
              return t && closeFlow(), exitContainers(a), documentContinued(e);
            }
            function thereIsNoNewContainer(e) {
              return (
                (i.parser.lazy[i.now().line] = a !== o.length),
                (r = i.now().offset),
                flowStart(e)
              );
            }
            function documentContinued(t) {
              return (
                (i.containerState = {}),
                e.attempt(Z, containerContinue, flowStart)(t)
              );
            }
            function containerContinue(e) {
              return (
                a++,
                o.push([i.currentConstruct, i.containerState]),
                documentContinued(e)
              );
            }
            function flowStart(r) {
              if (null === r) {
                t && closeFlow(), exitContainers(0), e.consume(r);
                return;
              }
              return (
                (t = t || i.parser.flow(i.now())),
                e.enter("chunkFlow", {
                  contentType: "flow",
                  previous: n,
                  _tokenizer: t,
                }),
                (function flowContinue(t) {
                  if (null === t) {
                    writeToChild(e.exit("chunkFlow"), !0),
                      exitContainers(0),
                      e.consume(t);
                    return;
                  }
                  return (0, Q.Ch)(t)
                    ? (e.consume(t),
                      writeToChild(e.exit("chunkFlow")),
                      (a = 0),
                      (i.interrupt = void 0),
                      start)
                    : (e.consume(t), flowContinue);
                })(r)
              );
            }
            function writeToChild(e, o) {
              let l = i.sliceStream(e);
              if (
                (o && l.push(null),
                (e.previous = n),
                n && (n.next = e),
                (n = e),
                t.defineSkip(e.start),
                t.write(l),
                i.parser.lazy[e.start.line])
              ) {
                let e,
                  n,
                  o = t.events.length;
                for (; o--; )
                  if (
                    t.events[o][1].start.offset < r &&
                    (!t.events[o][1].end || t.events[o][1].end.offset > r)
                  )
                    return;
                let l = i.events.length,
                  s = l;
                for (; s--; )
                  if (
                    "exit" === i.events[s][0] &&
                    "chunkFlow" === i.events[s][1].type
                  ) {
                    if (e) {
                      n = i.events[s][1].end;
                      break;
                    }
                    e = !0;
                  }
                for (exitContainers(a), o = l; o < i.events.length; )
                  (i.events[o][1].end = Object.assign({}, n)), o++;
                (0, $.d)(i.events, s + 1, 0, i.events.slice(l)),
                  (i.events.length = o);
              }
            }
            function exitContainers(t) {
              let n = o.length;
              for (; n-- > t; ) {
                let t = o[n];
                (i.containerState = t[1]), t[0].exit.call(i, e);
              }
              o.length = t;
            }
            function closeFlow() {
              t.write([null]),
                (n = void 0),
                (t = void 0),
                (i.containerState._closeFlow = void 0);
            }
          },
        },
        Z = {
          tokenize: function (e, t, n) {
            return (0, G.f)(
              e,
              e.attempt(this.parser.constructs.document, t, n),
              "linePrefix",
              this.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            );
          },
        };
      var K = n(23402);
      let J = {
          tokenize: function (e, t) {
            let n;
            return function (t) {
              return (
                e.enter("content"),
                (n = e.enter("chunkContent", { contentType: "content" })),
                chunkInside(t)
              );
            };
            function chunkInside(t) {
              return null === t
                ? contentEnd(t)
                : (0, Q.Ch)(t)
                ? e.check(ee, contentContinue, contentEnd)(t)
                : (e.consume(t), chunkInside);
            }
            function contentEnd(n) {
              return e.exit("chunkContent"), e.exit("content"), t(n);
            }
            function contentContinue(t) {
              return (
                e.consume(t),
                e.exit("chunkContent"),
                (n.next = e.enter("chunkContent", {
                  contentType: "content",
                  previous: n,
                })),
                (n = n.next),
                chunkInside
              );
            }
          },
          resolve: function (e) {
            return subtokenize(e), e;
          },
        },
        ee = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.exit("chunkContent"),
                e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                (0, G.f)(e, prefixed, "linePrefix")
              );
            };
            function prefixed(i) {
              if (null === i || (0, Q.Ch)(i)) return n(i);
              let o = r.events[r.events.length - 1];
              return !r.parser.constructs.disable.null.includes(
                "codeIndented"
              ) &&
                o &&
                "linePrefix" === o[1].type &&
                o[2].sliceSerialize(o[1], !0).length >= 4
                ? t(i)
                : e.interrupt(r.parser.constructs.flow, n, t)(i);
            }
          },
          partial: !0,
        },
        et = {
          tokenize: function (e) {
            let t = this,
              n = e.attempt(
                K.w,
                function (r) {
                  if (null === r) {
                    e.consume(r);
                    return;
                  }
                  return (
                    e.enter("lineEndingBlank"),
                    e.consume(r),
                    e.exit("lineEndingBlank"),
                    (t.currentConstruct = void 0),
                    n
                  );
                },
                e.attempt(
                  this.parser.constructs.flowInitial,
                  afterConstruct,
                  (0, G.f)(
                    e,
                    e.attempt(
                      this.parser.constructs.flow,
                      afterConstruct,
                      e.attempt(J, afterConstruct)
                    ),
                    "linePrefix"
                  )
                )
              );
            return n;
            function afterConstruct(r) {
              if (null === r) {
                e.consume(r);
                return;
              }
              return (
                e.enter("lineEnding"),
                e.consume(r),
                e.exit("lineEnding"),
                (t.currentConstruct = void 0),
                n
              );
            }
          },
        },
        en = { resolveAll: createResolver() },
        er = initializeFactory("string"),
        ei = initializeFactory("text");
      function initializeFactory(e) {
        return {
          tokenize: function (t) {
            let n = this,
              r = this.parser.constructs[e],
              i = t.attempt(r, start, notText);
            return start;
            function start(e) {
              return atBreak(e) ? i(e) : notText(e);
            }
            function notText(e) {
              if (null === e) {
                t.consume(e);
                return;
              }
              return t.enter("data"), t.consume(e), data;
            }
            function data(e) {
              return atBreak(e) ? (t.exit("data"), i(e)) : (t.consume(e), data);
            }
            function atBreak(e) {
              if (null === e) return !0;
              let t = r[e],
                i = -1;
              if (t)
                for (; ++i < t.length; ) {
                  let e = t[i];
                  if (!e.previous || e.previous.call(n, n.previous)) return !0;
                }
              return !1;
            }
          },
          resolveAll: createResolver(
            "text" === e ? resolveAllLineSuffixes : void 0
          ),
        };
      }
      function createResolver(e) {
        return function (t, n) {
          let r,
            i = -1;
          for (; ++i <= t.length; )
            void 0 === r
              ? t[i] && "data" === t[i][1].type && ((r = i), i++)
              : (t[i] && "data" === t[i][1].type) ||
                (i !== r + 2 &&
                  ((t[r][1].end = t[i - 1][1].end),
                  t.splice(r + 2, i - r - 2),
                  (i = r + 2)),
                (r = void 0));
          return e ? e(t, n) : t;
        };
      }
      function resolveAllLineSuffixes(e, t) {
        let n = 0;
        for (; ++n <= e.length; )
          if (
            (n === e.length || "lineEnding" === e[n][1].type) &&
            "data" === e[n - 1][1].type
          ) {
            let r;
            let i = e[n - 1][1],
              o = t.sliceStream(i),
              a = o.length,
              l = -1,
              s = 0;
            for (; a--; ) {
              let e = o[a];
              if ("string" == typeof e) {
                for (l = e.length; 32 === e.charCodeAt(l - 1); ) s++, l--;
                if (l) break;
                l = -1;
              } else if (-2 === e) (r = !0), s++;
              else if (-1 === e);
              else {
                a++;
                break;
              }
            }
            if (s) {
              let o = {
                type:
                  n === e.length || r || s < 2
                    ? "lineSuffix"
                    : "hardBreakTrailing",
                start: {
                  line: i.end.line,
                  column: i.end.column - s,
                  offset: i.end.offset - s,
                  _index: i.start._index + a,
                  _bufferIndex: a ? l : i.start._bufferIndex + l,
                },
                end: Object.assign({}, i.end),
              };
              (i.end = Object.assign({}, o.start)),
                i.start.offset === i.end.offset
                  ? Object.assign(i, o)
                  : (e.splice(n, 0, ["enter", o, t], ["exit", o, t]), (n += 2));
            }
            n++;
          }
        return e;
      }
      var eo = n(63233);
      let ea = {
          name: "thematicBreak",
          tokenize: function (e, t, n) {
            let r,
              i = 0;
            return function (o) {
              return (
                e.enter("thematicBreak"),
                (r = o),
                (function atBreak(o) {
                  return o === r
                    ? (e.enter("thematicBreakSequence"),
                      (function sequence(t) {
                        return t === r
                          ? (e.consume(t), i++, sequence)
                          : (e.exit("thematicBreakSequence"),
                            (0, Q.xz)(t)
                              ? (0, G.f)(e, atBreak, "whitespace")(t)
                              : atBreak(t));
                      })(o))
                    : i >= 3 && (null === o || (0, Q.Ch)(o))
                    ? (e.exit("thematicBreak"), t(o))
                    : n(o);
                })(o)
              );
            };
          },
        },
        el = {
          name: "list",
          tokenize: function (e, t, n) {
            let r = this,
              i = r.events[r.events.length - 1],
              o =
                i && "linePrefix" === i[1].type
                  ? i[2].sliceSerialize(i[1], !0).length
                  : 0,
              a = 0;
            return function (t) {
              let i =
                r.containerState.type ||
                (42 === t || 43 === t || 45 === t
                  ? "listUnordered"
                  : "listOrdered");
              if (
                "listUnordered" === i
                  ? !r.containerState.marker || t === r.containerState.marker
                  : (0, Q.pY)(t)
              ) {
                if (
                  (r.containerState.type ||
                    ((r.containerState.type = i),
                    e.enter(i, { _container: !0 })),
                  "listUnordered" === i)
                )
                  return (
                    e.enter("listItemPrefix"),
                    42 === t || 45 === t
                      ? e.check(ea, n, atMarker)(t)
                      : atMarker(t)
                  );
                if (!r.interrupt || 49 === t)
                  return (
                    e.enter("listItemPrefix"),
                    e.enter("listItemValue"),
                    (function inside(t) {
                      return (0, Q.pY)(t) && ++a < 10
                        ? (e.consume(t), inside)
                        : (!r.interrupt || a < 2) &&
                          (r.containerState.marker
                            ? t === r.containerState.marker
                            : 41 === t || 46 === t)
                        ? (e.exit("listItemValue"), atMarker(t))
                        : n(t);
                    })(t)
                  );
              }
              return n(t);
            };
            function atMarker(t) {
              return (
                e.enter("listItemMarker"),
                e.consume(t),
                e.exit("listItemMarker"),
                (r.containerState.marker = r.containerState.marker || t),
                e.check(
                  K.w,
                  r.interrupt ? n : onBlank,
                  e.attempt(es, endOfPrefix, otherPrefix)
                )
              );
            }
            function onBlank(e) {
              return (
                (r.containerState.initialBlankLine = !0), o++, endOfPrefix(e)
              );
            }
            function otherPrefix(t) {
              return (0, Q.xz)(t)
                ? (e.enter("listItemPrefixWhitespace"),
                  e.consume(t),
                  e.exit("listItemPrefixWhitespace"),
                  endOfPrefix)
                : n(t);
            }
            function endOfPrefix(n) {
              return (
                (r.containerState.size =
                  o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
                t(n)
              );
            }
          },
          continuation: {
            tokenize: function (e, t, n) {
              let r = this;
              return (
                (r.containerState._closeFlow = void 0),
                e.check(
                  K.w,
                  function (n) {
                    return (
                      (r.containerState.furtherBlankLines =
                        r.containerState.furtherBlankLines ||
                        r.containerState.initialBlankLine),
                      (0, G.f)(
                        e,
                        t,
                        "listItemIndent",
                        r.containerState.size + 1
                      )(n)
                    );
                  },
                  function (n) {
                    return r.containerState.furtherBlankLines || !(0, Q.xz)(n)
                      ? ((r.containerState.furtherBlankLines = void 0),
                        (r.containerState.initialBlankLine = void 0),
                        notInCurrentItem(n))
                      : ((r.containerState.furtherBlankLines = void 0),
                        (r.containerState.initialBlankLine = void 0),
                        e.attempt(eu, t, notInCurrentItem)(n));
                  }
                )
              );
              function notInCurrentItem(i) {
                return (
                  (r.containerState._closeFlow = !0),
                  (r.interrupt = void 0),
                  (0, G.f)(
                    e,
                    e.attempt(el, t, n),
                    "linePrefix",
                    r.parser.constructs.disable.null.includes("codeIndented")
                      ? void 0
                      : 4
                  )(i)
                );
              }
            },
          },
          exit: function (e) {
            e.exit(this.containerState.type);
          },
        },
        es = {
          tokenize: function (e, t, n) {
            let r = this;
            return (0, G.f)(
              e,
              function (e) {
                let i = r.events[r.events.length - 1];
                return !(0, Q.xz)(e) &&
                  i &&
                  "listItemPrefixWhitespace" === i[1].type
                  ? t(e)
                  : n(e);
              },
              "listItemPrefixWhitespace",
              r.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 5
            );
          },
          partial: !0,
        },
        eu = {
          tokenize: function (e, t, n) {
            let r = this;
            return (0, G.f)(
              e,
              function (e) {
                let i = r.events[r.events.length - 1];
                return i &&
                  "listItemIndent" === i[1].type &&
                  i[2].sliceSerialize(i[1], !0).length === r.containerState.size
                  ? t(e)
                  : n(e);
              },
              "listItemIndent",
              r.containerState.size + 1
            );
          },
          partial: !0,
        },
        ec = {
          name: "blockQuote",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              if (62 === t) {
                let n = r.containerState;
                return (
                  n.open ||
                    (e.enter("blockQuote", { _container: !0 }), (n.open = !0)),
                  e.enter("blockQuotePrefix"),
                  e.enter("blockQuoteMarker"),
                  e.consume(t),
                  e.exit("blockQuoteMarker"),
                  after
                );
              }
              return n(t);
            };
            function after(n) {
              return (0, Q.xz)(n)
                ? (e.enter("blockQuotePrefixWhitespace"),
                  e.consume(n),
                  e.exit("blockQuotePrefixWhitespace"),
                  e.exit("blockQuotePrefix"),
                  t)
                : (e.exit("blockQuotePrefix"), t(n));
            }
          },
          continuation: {
            tokenize: function (e, t, n) {
              let r = this;
              return function (t) {
                return (0, Q.xz)(t)
                  ? (0, G.f)(
                      e,
                      contBefore,
                      "linePrefix",
                      r.parser.constructs.disable.null.includes("codeIndented")
                        ? void 0
                        : 4
                    )(t)
                  : contBefore(t);
              };
              function contBefore(r) {
                return e.attempt(ec, t, n)(r);
              }
            },
          },
          exit: function (e) {
            e.exit("blockQuote");
          },
        };
      function factoryDestination(e, t, n, r, i, o, a, l, s) {
        let u = s || Number.POSITIVE_INFINITY,
          c = 0;
        return function (t) {
          return 60 === t
            ? (e.enter(r),
              e.enter(i),
              e.enter(o),
              e.consume(t),
              e.exit(o),
              enclosedBefore)
            : null === t || 32 === t || 41 === t || (0, Q.Av)(t)
            ? n(t)
            : (e.enter(r),
              e.enter(a),
              e.enter(l),
              e.enter("chunkString", { contentType: "string" }),
              raw(t));
        };
        function enclosedBefore(n) {
          return 62 === n
            ? (e.enter(o), e.consume(n), e.exit(o), e.exit(i), e.exit(r), t)
            : (e.enter(l),
              e.enter("chunkString", { contentType: "string" }),
              enclosed(n));
        }
        function enclosed(t) {
          return 62 === t
            ? (e.exit("chunkString"), e.exit(l), enclosedBefore(t))
            : null === t || 60 === t || (0, Q.Ch)(t)
            ? n(t)
            : (e.consume(t), 92 === t ? enclosedEscape : enclosed);
        }
        function enclosedEscape(t) {
          return 60 === t || 62 === t || 92 === t
            ? (e.consume(t), enclosed)
            : enclosed(t);
        }
        function raw(i) {
          return !c && (null === i || 41 === i || (0, Q.z3)(i))
            ? (e.exit("chunkString"), e.exit(l), e.exit(a), e.exit(r), t(i))
            : c < u && 40 === i
            ? (e.consume(i), c++, raw)
            : 41 === i
            ? (e.consume(i), c--, raw)
            : null === i || 32 === i || 40 === i || (0, Q.Av)(i)
            ? n(i)
            : (e.consume(i), 92 === i ? rawEscape : raw);
        }
        function rawEscape(t) {
          return 40 === t || 41 === t || 92 === t
            ? (e.consume(t), raw)
            : raw(t);
        }
      }
      function factoryLabel(e, t, n, r, i, o) {
        let a;
        let l = this,
          s = 0;
        return function (t) {
          return (
            e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(o), atBreak
          );
        };
        function atBreak(u) {
          return s > 999 ||
            null === u ||
            91 === u ||
            (93 === u && !a) ||
            (94 === u && !s && "_hiddenFootnoteSupport" in l.parser.constructs)
            ? n(u)
            : 93 === u
            ? (e.exit(o), e.enter(i), e.consume(u), e.exit(i), e.exit(r), t)
            : (0, Q.Ch)(u)
            ? (e.enter("lineEnding"),
              e.consume(u),
              e.exit("lineEnding"),
              atBreak)
            : (e.enter("chunkString", { contentType: "string" }),
              labelInside(u));
        }
        function labelInside(t) {
          return null === t || 91 === t || 93 === t || (0, Q.Ch)(t) || s++ > 999
            ? (e.exit("chunkString"), atBreak(t))
            : (e.consume(t),
              a || (a = !(0, Q.xz)(t)),
              92 === t ? labelEscape : labelInside);
        }
        function labelEscape(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), s++, labelInside)
            : labelInside(t);
        }
      }
      function factoryTitle(e, t, n, r, i, o) {
        let a;
        return function (t) {
          return 34 === t || 39 === t || 40 === t
            ? (e.enter(r),
              e.enter(i),
              e.consume(t),
              e.exit(i),
              (a = 40 === t ? 41 : t),
              begin)
            : n(t);
        };
        function begin(n) {
          return n === a
            ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t)
            : (e.enter(o), atBreak(n));
        }
        function atBreak(t) {
          return t === a
            ? (e.exit(o), begin(a))
            : null === t
            ? n(t)
            : (0, Q.Ch)(t)
            ? (e.enter("lineEnding"),
              e.consume(t),
              e.exit("lineEnding"),
              (0, G.f)(e, atBreak, "linePrefix"))
            : (e.enter("chunkString", { contentType: "string" }), inside(t));
        }
        function inside(t) {
          return t === a || null === t || (0, Q.Ch)(t)
            ? (e.exit("chunkString"), atBreak(t))
            : (e.consume(t), 92 === t ? escape : inside);
        }
        function escape(t) {
          return t === a || 92 === t ? (e.consume(t), inside) : inside(t);
        }
      }
      function factoryWhitespace(e, t) {
        let n;
        return function start(r) {
          return (0, Q.Ch)(r)
            ? (e.enter("lineEnding"),
              e.consume(r),
              e.exit("lineEnding"),
              (n = !0),
              start)
            : (0, Q.xz)(r)
            ? (0, G.f)(e, start, n ? "linePrefix" : "lineSuffix")(r)
            : t(r);
        };
      }
      var ef = n(11098);
      let ep = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (0, Q.z3)(t)
                ? factoryWhitespace(e, beforeMarker)(t)
                : n(t);
            };
            function beforeMarker(t) {
              return factoryTitle(
                e,
                titleAfter,
                n,
                "definitionTitle",
                "definitionTitleMarker",
                "definitionTitleString"
              )(t);
            }
            function titleAfter(t) {
              return (0, Q.xz)(t)
                ? (0, G.f)(e, titleAfterOptionalWhitespace, "whitespace")(t)
                : titleAfterOptionalWhitespace(t);
            }
            function titleAfterOptionalWhitespace(e) {
              return null === e || (0, Q.Ch)(e) ? t(e) : n(e);
            }
          },
          partial: !0,
        },
        ed = {
          name: "codeIndented",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter("codeIndented"),
                (0, G.f)(e, afterPrefix, "linePrefix", 5)(t)
              );
            };
            function afterPrefix(t) {
              let i = r.events[r.events.length - 1];
              return i &&
                "linePrefix" === i[1].type &&
                i[2].sliceSerialize(i[1], !0).length >= 4
                ? (function atBreak(t) {
                    return null === t
                      ? after(t)
                      : (0, Q.Ch)(t)
                      ? e.attempt(eh, atBreak, after)(t)
                      : (e.enter("codeFlowValue"),
                        (function inside(t) {
                          return null === t || (0, Q.Ch)(t)
                            ? (e.exit("codeFlowValue"), atBreak(t))
                            : (e.consume(t), inside);
                        })(t));
                  })(t)
                : n(t);
            }
            function after(n) {
              return e.exit("codeIndented"), t(n);
            }
          },
        },
        eh = {
          tokenize: function (e, t, n) {
            let r = this;
            return furtherStart;
            function furtherStart(t) {
              return r.parser.lazy[r.now().line]
                ? n(t)
                : (0, Q.Ch)(t)
                ? (e.enter("lineEnding"),
                  e.consume(t),
                  e.exit("lineEnding"),
                  furtherStart)
                : (0, G.f)(e, afterPrefix, "linePrefix", 5)(t);
            }
            function afterPrefix(e) {
              let i = r.events[r.events.length - 1];
              return i &&
                "linePrefix" === i[1].type &&
                i[2].sliceSerialize(i[1], !0).length >= 4
                ? t(e)
                : (0, Q.Ch)(e)
                ? furtherStart(e)
                : n(e);
            }
          },
          partial: !0,
        },
        eg = {
          name: "setextUnderline",
          tokenize: function (e, t, n) {
            let r;
            let i = this;
            return function (t) {
              let o,
                a = i.events.length;
              for (; a--; )
                if (
                  "lineEnding" !== i.events[a][1].type &&
                  "linePrefix" !== i.events[a][1].type &&
                  "content" !== i.events[a][1].type
                ) {
                  o = "paragraph" === i.events[a][1].type;
                  break;
                }
              return !i.parser.lazy[i.now().line] && (i.interrupt || o)
                ? (e.enter("setextHeadingLine"),
                  (r = t),
                  e.enter("setextHeadingLineSequence"),
                  (function inside(t) {
                    return t === r
                      ? (e.consume(t), inside)
                      : (e.exit("setextHeadingLineSequence"),
                        (0, Q.xz)(t)
                          ? (0, G.f)(e, after, "lineSuffix")(t)
                          : after(t));
                  })(t))
                : n(t);
            };
            function after(r) {
              return null === r || (0, Q.Ch)(r)
                ? (e.exit("setextHeadingLine"), t(r))
                : n(r);
            }
          },
          resolveTo: function (e, t) {
            let n,
              r,
              i,
              o = e.length;
            for (; o--; )
              if ("enter" === e[o][0]) {
                if ("content" === e[o][1].type) {
                  n = o;
                  break;
                }
                "paragraph" === e[o][1].type && (r = o);
              } else
                "content" === e[o][1].type && e.splice(o, 1),
                  i || "definition" !== e[o][1].type || (i = o);
            let a = {
              type: "setextHeading",
              start: Object.assign({}, e[r][1].start),
              end: Object.assign({}, e[e.length - 1][1].end),
            };
            return (
              (e[r][1].type = "setextHeadingText"),
              i
                ? (e.splice(r, 0, ["enter", a, t]),
                  e.splice(i + 1, 0, ["exit", e[n][1], t]),
                  (e[n][1].end = Object.assign({}, e[i][1].end)))
                : (e[n][1] = a),
              e.push(["exit", a, t]),
              e
            );
          },
        },
        ey = [
          "address",
          "article",
          "aside",
          "base",
          "basefont",
          "blockquote",
          "body",
          "caption",
          "center",
          "col",
          "colgroup",
          "dd",
          "details",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "frame",
          "frameset",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hr",
          "html",
          "iframe",
          "legend",
          "li",
          "link",
          "main",
          "menu",
          "menuitem",
          "nav",
          "noframes",
          "ol",
          "optgroup",
          "option",
          "p",
          "param",
          "search",
          "section",
          "summary",
          "table",
          "tbody",
          "td",
          "tfoot",
          "th",
          "thead",
          "title",
          "tr",
          "track",
          "ul",
        ],
        eb = ["pre", "script", "style", "textarea"],
        ek = {
          tokenize: function (e, t, n) {
            return function (r) {
              return (
                e.enter("lineEnding"),
                e.consume(r),
                e.exit("lineEnding"),
                e.attempt(K.w, t, n)
              );
            };
          },
          partial: !0,
        },
        e_ = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (0, Q.Ch)(t)
                ? (e.enter("lineEnding"),
                  e.consume(t),
                  e.exit("lineEnding"),
                  after)
                : n(t);
            };
            function after(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        ev = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return null === t
                ? n(t)
                : (e.enter("lineEnding"),
                  e.consume(t),
                  e.exit("lineEnding"),
                  lineStart);
            };
            function lineStart(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        ex = {
          name: "codeFenced",
          tokenize: function (e, t, n) {
            let r;
            let i = this,
              o = {
                tokenize: function (e, t, n) {
                  let o = 0;
                  return function (t) {
                    return (
                      e.enter("lineEnding"),
                      e.consume(t),
                      e.exit("lineEnding"),
                      start
                    );
                  };
                  function start(t) {
                    return (
                      e.enter("codeFencedFence"),
                      (0, Q.xz)(t)
                        ? (0, G.f)(
                            e,
                            beforeSequenceClose,
                            "linePrefix",
                            i.parser.constructs.disable.null.includes(
                              "codeIndented"
                            )
                              ? void 0
                              : 4
                          )(t)
                        : beforeSequenceClose(t)
                    );
                  }
                  function beforeSequenceClose(t) {
                    return t === r
                      ? (e.enter("codeFencedFenceSequence"),
                        (function sequenceClose(t) {
                          return t === r
                            ? (o++, e.consume(t), sequenceClose)
                            : o >= l
                            ? (e.exit("codeFencedFenceSequence"),
                              (0, Q.xz)(t)
                                ? (0, G.f)(
                                    e,
                                    sequenceCloseAfter,
                                    "whitespace"
                                  )(t)
                                : sequenceCloseAfter(t))
                            : n(t);
                        })(t))
                      : n(t);
                  }
                  function sequenceCloseAfter(r) {
                    return null === r || (0, Q.Ch)(r)
                      ? (e.exit("codeFencedFence"), t(r))
                      : n(r);
                  }
                },
                partial: !0,
              },
              a = 0,
              l = 0;
            return function (t) {
              return (function (t) {
                let o = i.events[i.events.length - 1];
                return (
                  (a =
                    o && "linePrefix" === o[1].type
                      ? o[2].sliceSerialize(o[1], !0).length
                      : 0),
                  (r = t),
                  e.enter("codeFenced"),
                  e.enter("codeFencedFence"),
                  e.enter("codeFencedFenceSequence"),
                  (function sequenceOpen(t) {
                    return t === r
                      ? (l++, e.consume(t), sequenceOpen)
                      : l < 3
                      ? n(t)
                      : (e.exit("codeFencedFenceSequence"),
                        (0, Q.xz)(t)
                          ? (0, G.f)(e, infoBefore, "whitespace")(t)
                          : infoBefore(t));
                  })(t)
                );
              })(t);
            };
            function infoBefore(o) {
              return null === o || (0, Q.Ch)(o)
                ? (e.exit("codeFencedFence"),
                  i.interrupt ? t(o) : e.check(ev, atNonLazyBreak, after)(o))
                : (e.enter("codeFencedFenceInfo"),
                  e.enter("chunkString", { contentType: "string" }),
                  (function info(t) {
                    return null === t || (0, Q.Ch)(t)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceInfo"),
                        infoBefore(t))
                      : (0, Q.xz)(t)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceInfo"),
                        (0, G.f)(e, metaBefore, "whitespace")(t))
                      : 96 === t && t === r
                      ? n(t)
                      : (e.consume(t), info);
                  })(o));
            }
            function metaBefore(t) {
              return null === t || (0, Q.Ch)(t)
                ? infoBefore(t)
                : (e.enter("codeFencedFenceMeta"),
                  e.enter("chunkString", { contentType: "string" }),
                  (function meta(t) {
                    return null === t || (0, Q.Ch)(t)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceMeta"),
                        infoBefore(t))
                      : 96 === t && t === r
                      ? n(t)
                      : (e.consume(t), meta);
                  })(t));
            }
            function atNonLazyBreak(t) {
              return e.attempt(o, after, contentBefore)(t);
            }
            function contentBefore(t) {
              return (
                e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                contentStart
              );
            }
            function contentStart(t) {
              return a > 0 && (0, Q.xz)(t)
                ? (0, G.f)(e, beforeContentChunk, "linePrefix", a + 1)(t)
                : beforeContentChunk(t);
            }
            function beforeContentChunk(t) {
              return null === t || (0, Q.Ch)(t)
                ? e.check(ev, atNonLazyBreak, after)(t)
                : (e.enter("codeFlowValue"),
                  (function contentChunk(t) {
                    return null === t || (0, Q.Ch)(t)
                      ? (e.exit("codeFlowValue"), beforeContentChunk(t))
                      : (e.consume(t), contentChunk);
                  })(t));
            }
            function after(n) {
              return e.exit("codeFenced"), t(n);
            }
          },
          concrete: !0,
        };
      var ew = n(44301);
      let eC = {
          name: "characterReference",
          tokenize: function (e, t, n) {
            let r, i;
            let o = this,
              a = 0;
            return function (t) {
              return (
                e.enter("characterReference"),
                e.enter("characterReferenceMarker"),
                e.consume(t),
                e.exit("characterReferenceMarker"),
                open
              );
            };
            function open(t) {
              return 35 === t
                ? (e.enter("characterReferenceMarkerNumeric"),
                  e.consume(t),
                  e.exit("characterReferenceMarkerNumeric"),
                  numeric)
                : (e.enter("characterReferenceValue"),
                  (r = 31),
                  (i = Q.H$),
                  value(t));
            }
            function numeric(t) {
              return 88 === t || 120 === t
                ? (e.enter("characterReferenceMarkerHexadecimal"),
                  e.consume(t),
                  e.exit("characterReferenceMarkerHexadecimal"),
                  e.enter("characterReferenceValue"),
                  (r = 6),
                  (i = Q.AF),
                  value)
                : (e.enter("characterReferenceValue"),
                  (r = 7),
                  (i = Q.pY),
                  value(t));
            }
            function value(l) {
              if (59 === l && a) {
                let r = e.exit("characterReferenceValue");
                return i !== Q.H$ || (0, ew.T)(o.sliceSerialize(r))
                  ? (e.enter("characterReferenceMarker"),
                    e.consume(l),
                    e.exit("characterReferenceMarker"),
                    e.exit("characterReference"),
                    t)
                  : n(l);
              }
              return i(l) && a++ < r ? (e.consume(l), value) : n(l);
            }
          },
        },
        eS = {
          name: "characterEscape",
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("characterEscape"),
                e.enter("escapeMarker"),
                e.consume(t),
                e.exit("escapeMarker"),
                inside
              );
            };
            function inside(r) {
              return (0, Q.sR)(r)
                ? (e.enter("characterEscapeValue"),
                  e.consume(r),
                  e.exit("characterEscapeValue"),
                  e.exit("characterEscape"),
                  t)
                : n(r);
            }
          },
        },
        eE = {
          name: "lineEnding",
          tokenize: function (e, t) {
            return function (n) {
              return (
                e.enter("lineEnding"),
                e.consume(n),
                e.exit("lineEnding"),
                (0, G.f)(e, t, "linePrefix")
              );
            };
          },
        },
        eP = {
          name: "labelEnd",
          tokenize: function (e, t, n) {
            let r, i;
            let o = this,
              a = o.events.length;
            for (; a--; )
              if (
                ("labelImage" === o.events[a][1].type ||
                  "labelLink" === o.events[a][1].type) &&
                !o.events[a][1]._balanced
              ) {
                r = o.events[a][1];
                break;
              }
            return function (t) {
              return r
                ? r._inactive
                  ? labelEndNok(t)
                  : ((i = o.parser.defined.includes(
                      (0, ef.d)(
                        o.sliceSerialize({ start: r.end, end: o.now() })
                      )
                    )),
                    e.enter("labelEnd"),
                    e.enter("labelMarker"),
                    e.consume(t),
                    e.exit("labelMarker"),
                    e.exit("labelEnd"),
                    after)
                : n(t);
            };
            function after(t) {
              return 40 === t
                ? e.attempt(eA, labelEndOk, i ? labelEndOk : labelEndNok)(t)
                : 91 === t
                ? e.attempt(
                    eO,
                    labelEndOk,
                    i ? referenceNotFull : labelEndNok
                  )(t)
                : i
                ? labelEndOk(t)
                : labelEndNok(t);
            }
            function referenceNotFull(t) {
              return e.attempt(eT, labelEndOk, labelEndNok)(t);
            }
            function labelEndOk(e) {
              return t(e);
            }
            function labelEndNok(e) {
              return (r._balanced = !0), n(e);
            }
          },
          resolveTo: function (e, t) {
            let n,
              r,
              i,
              o,
              a = e.length,
              l = 0;
            for (; a--; )
              if (((n = e[a][1]), r)) {
                if (
                  "link" === n.type ||
                  ("labelLink" === n.type && n._inactive)
                )
                  break;
                "enter" === e[a][0] &&
                  "labelLink" === n.type &&
                  (n._inactive = !0);
              } else if (i) {
                if (
                  "enter" === e[a][0] &&
                  ("labelImage" === n.type || "labelLink" === n.type) &&
                  !n._balanced &&
                  ((r = a), "labelLink" !== n.type)
                ) {
                  l = 2;
                  break;
                }
              } else "labelEnd" === n.type && (i = a);
            let s = {
                type: "labelLink" === e[r][1].type ? "link" : "image",
                start: Object.assign({}, e[r][1].start),
                end: Object.assign({}, e[e.length - 1][1].end),
              },
              u = {
                type: "label",
                start: Object.assign({}, e[r][1].start),
                end: Object.assign({}, e[i][1].end),
              },
              c = {
                type: "labelText",
                start: Object.assign({}, e[r + l + 2][1].end),
                end: Object.assign({}, e[i - 2][1].start),
              };
            return (
              (o = [
                ["enter", s, t],
                ["enter", u, t],
              ]),
              (o = (0, $.V)(o, e.slice(r + 1, r + l + 3))),
              (o = (0, $.V)(o, [["enter", c, t]])),
              (o = (0, $.V)(
                o,
                (0, eo.C)(
                  t.parser.constructs.insideSpan.null,
                  e.slice(r + l + 4, i - 3),
                  t
                )
              )),
              (o = (0, $.V)(o, [
                ["exit", c, t],
                e[i - 2],
                e[i - 1],
                ["exit", u, t],
              ])),
              (o = (0, $.V)(o, e.slice(i + 1))),
              (o = (0, $.V)(o, [["exit", s, t]])),
              (0, $.d)(e, r, e.length, o),
              e
            );
          },
          resolveAll: function (e) {
            let t = -1;
            for (; ++t < e.length; ) {
              let n = e[t][1];
              ("labelImage" === n.type ||
                "labelLink" === n.type ||
                "labelEnd" === n.type) &&
                (e.splice(t + 1, "labelImage" === n.type ? 4 : 2),
                (n.type = "data"),
                t++);
            }
            return e;
          },
        },
        eA = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("resource"),
                e.enter("resourceMarker"),
                e.consume(t),
                e.exit("resourceMarker"),
                resourceBefore
              );
            };
            function resourceBefore(t) {
              return (0, Q.z3)(t)
                ? factoryWhitespace(e, resourceOpen)(t)
                : resourceOpen(t);
            }
            function resourceOpen(t) {
              return 41 === t
                ? resourceEnd(t)
                : factoryDestination(
                    e,
                    resourceDestinationAfter,
                    resourceDestinationMissing,
                    "resourceDestination",
                    "resourceDestinationLiteral",
                    "resourceDestinationLiteralMarker",
                    "resourceDestinationRaw",
                    "resourceDestinationString",
                    32
                  )(t);
            }
            function resourceDestinationAfter(t) {
              return (0, Q.z3)(t)
                ? factoryWhitespace(e, resourceBetween)(t)
                : resourceEnd(t);
            }
            function resourceDestinationMissing(e) {
              return n(e);
            }
            function resourceBetween(t) {
              return 34 === t || 39 === t || 40 === t
                ? factoryTitle(
                    e,
                    resourceTitleAfter,
                    n,
                    "resourceTitle",
                    "resourceTitleMarker",
                    "resourceTitleString"
                  )(t)
                : resourceEnd(t);
            }
            function resourceTitleAfter(t) {
              return (0, Q.z3)(t)
                ? factoryWhitespace(e, resourceEnd)(t)
                : resourceEnd(t);
            }
            function resourceEnd(r) {
              return 41 === r
                ? (e.enter("resourceMarker"),
                  e.consume(r),
                  e.exit("resourceMarker"),
                  e.exit("resource"),
                  t)
                : n(r);
            }
          },
        },
        eO = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return factoryLabel.call(
                r,
                e,
                referenceFullAfter,
                referenceFullMissing,
                "reference",
                "referenceMarker",
                "referenceString"
              )(t);
            };
            function referenceFullAfter(e) {
              return r.parser.defined.includes(
                (0, ef.d)(
                  r
                    .sliceSerialize(r.events[r.events.length - 1][1])
                    .slice(1, -1)
                )
              )
                ? t(e)
                : n(e);
            }
            function referenceFullMissing(e) {
              return n(e);
            }
          },
        },
        eT = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("reference"),
                e.enter("referenceMarker"),
                e.consume(t),
                e.exit("referenceMarker"),
                referenceCollapsedOpen
              );
            };
            function referenceCollapsedOpen(r) {
              return 93 === r
                ? (e.enter("referenceMarker"),
                  e.consume(r),
                  e.exit("referenceMarker"),
                  e.exit("reference"),
                  t)
                : n(r);
            }
          },
        },
        eI = {
          name: "labelStartImage",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter("labelImage"),
                e.enter("labelImageMarker"),
                e.consume(t),
                e.exit("labelImageMarker"),
                open
              );
            };
            function open(t) {
              return 91 === t
                ? (e.enter("labelMarker"),
                  e.consume(t),
                  e.exit("labelMarker"),
                  e.exit("labelImage"),
                  after)
                : n(t);
            }
            function after(e) {
              return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
                ? n(e)
                : t(e);
            }
          },
          resolveAll: eP.resolveAll,
        };
      var eR = n(62987);
      let eD = {
        name: "attention",
        tokenize: function (e, t) {
          let n;
          let r = this.parser.constructs.attentionMarkers.null,
            i = this.previous,
            o = (0, eR.r)(i);
          return function (a) {
            return (
              (n = a),
              e.enter("attentionSequence"),
              (function inside(a) {
                if (a === n) return e.consume(a), inside;
                let l = e.exit("attentionSequence"),
                  s = (0, eR.r)(a),
                  u = !s || (2 === s && o) || r.includes(a),
                  c = !o || (2 === o && s) || r.includes(i);
                return (
                  (l._open = !!(42 === n ? u : u && (o || !c))),
                  (l._close = !!(42 === n ? c : c && (s || !u))),
                  t(a)
                );
              })(a)
            );
          };
        },
        resolveAll: function (e, t) {
          let n,
            r,
            i,
            o,
            a,
            l,
            s,
            u,
            c = -1;
          for (; ++c < e.length; )
            if (
              "enter" === e[c][0] &&
              "attentionSequence" === e[c][1].type &&
              e[c][1]._close
            ) {
              for (n = c; n--; )
                if (
                  "exit" === e[n][0] &&
                  "attentionSequence" === e[n][1].type &&
                  e[n][1]._open &&
                  t.sliceSerialize(e[n][1]).charCodeAt(0) ===
                    t.sliceSerialize(e[c][1]).charCodeAt(0)
                ) {
                  if (
                    (e[n][1]._close || e[c][1]._open) &&
                    (e[c][1].end.offset - e[c][1].start.offset) % 3 &&
                    !(
                      (e[n][1].end.offset -
                        e[n][1].start.offset +
                        e[c][1].end.offset -
                        e[c][1].start.offset) %
                      3
                    )
                  )
                    continue;
                  l =
                    e[n][1].end.offset - e[n][1].start.offset > 1 &&
                    e[c][1].end.offset - e[c][1].start.offset > 1
                      ? 2
                      : 1;
                  let f = Object.assign({}, e[n][1].end),
                    p = Object.assign({}, e[c][1].start);
                  movePoint(f, -l),
                    movePoint(p, l),
                    (o = {
                      type: l > 1 ? "strongSequence" : "emphasisSequence",
                      start: f,
                      end: Object.assign({}, e[n][1].end),
                    }),
                    (a = {
                      type: l > 1 ? "strongSequence" : "emphasisSequence",
                      start: Object.assign({}, e[c][1].start),
                      end: p,
                    }),
                    (i = {
                      type: l > 1 ? "strongText" : "emphasisText",
                      start: Object.assign({}, e[n][1].end),
                      end: Object.assign({}, e[c][1].start),
                    }),
                    (r = {
                      type: l > 1 ? "strong" : "emphasis",
                      start: Object.assign({}, o.start),
                      end: Object.assign({}, a.end),
                    }),
                    (e[n][1].end = Object.assign({}, o.start)),
                    (e[c][1].start = Object.assign({}, a.end)),
                    (s = []),
                    e[n][1].end.offset - e[n][1].start.offset &&
                      (s = (0, $.V)(s, [
                        ["enter", e[n][1], t],
                        ["exit", e[n][1], t],
                      ])),
                    (s = (0, $.V)(s, [
                      ["enter", r, t],
                      ["enter", o, t],
                      ["exit", o, t],
                      ["enter", i, t],
                    ])),
                    (s = (0, $.V)(
                      s,
                      (0, eo.C)(
                        t.parser.constructs.insideSpan.null,
                        e.slice(n + 1, c),
                        t
                      )
                    )),
                    (s = (0, $.V)(s, [
                      ["exit", i, t],
                      ["enter", a, t],
                      ["exit", a, t],
                      ["exit", r, t],
                    ])),
                    e[c][1].end.offset - e[c][1].start.offset
                      ? ((u = 2),
                        (s = (0, $.V)(s, [
                          ["enter", e[c][1], t],
                          ["exit", e[c][1], t],
                        ])))
                      : (u = 0),
                    (0, $.d)(e, n - 1, c - n + 3, s),
                    (c = n + s.length - u - 2);
                  break;
                }
            }
          for (c = -1; ++c < e.length; )
            "attentionSequence" === e[c][1].type && (e[c][1].type = "data");
          return e;
        },
      };
      function movePoint(e, t) {
        (e.column += t), (e.offset += t), (e._bufferIndex += t);
      }
      let eL = {
          name: "labelStartLink",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter("labelLink"),
                e.enter("labelMarker"),
                e.consume(t),
                e.exit("labelMarker"),
                e.exit("labelLink"),
                after
              );
            };
            function after(e) {
              return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
                ? n(e)
                : t(e);
            }
          },
          resolveAll: eP.resolveAll,
        },
        ez = {
          42: el,
          43: el,
          45: el,
          48: el,
          49: el,
          50: el,
          51: el,
          52: el,
          53: el,
          54: el,
          55: el,
          56: el,
          57: el,
          62: ec,
        },
        eF = {
          91: {
            name: "definition",
            tokenize: function (e, t, n) {
              let r;
              let i = this;
              return function (t) {
                return (
                  e.enter("definition"),
                  factoryLabel.call(
                    i,
                    e,
                    labelAfter,
                    n,
                    "definitionLabel",
                    "definitionLabelMarker",
                    "definitionLabelString"
                  )(t)
                );
              };
              function labelAfter(t) {
                return ((r = (0, ef.d)(
                  i
                    .sliceSerialize(i.events[i.events.length - 1][1])
                    .slice(1, -1)
                )),
                58 === t)
                  ? (e.enter("definitionMarker"),
                    e.consume(t),
                    e.exit("definitionMarker"),
                    markerAfter)
                  : n(t);
              }
              function markerAfter(t) {
                return (0, Q.z3)(t)
                  ? factoryWhitespace(e, destinationBefore)(t)
                  : destinationBefore(t);
              }
              function destinationBefore(t) {
                return factoryDestination(
                  e,
                  destinationAfter,
                  n,
                  "definitionDestination",
                  "definitionDestinationLiteral",
                  "definitionDestinationLiteralMarker",
                  "definitionDestinationRaw",
                  "definitionDestinationString"
                )(t);
              }
              function destinationAfter(t) {
                return e.attempt(ep, after, after)(t);
              }
              function after(t) {
                return (0, Q.xz)(t)
                  ? (0, G.f)(e, afterWhitespace, "whitespace")(t)
                  : afterWhitespace(t);
              }
              function afterWhitespace(o) {
                return null === o || (0, Q.Ch)(o)
                  ? (e.exit("definition"), i.parser.defined.push(r), t(o))
                  : n(o);
              }
            },
          },
        },
        eB = { [-2]: ed, [-1]: ed, 32: ed },
        ej = {
          35: {
            name: "headingAtx",
            tokenize: function (e, t, n) {
              let r = 0;
              return function (i) {
                return (
                  e.enter("atxHeading"),
                  e.enter("atxHeadingSequence"),
                  (function sequenceOpen(i) {
                    return 35 === i && r++ < 6
                      ? (e.consume(i), sequenceOpen)
                      : null === i || (0, Q.z3)(i)
                      ? (e.exit("atxHeadingSequence"),
                        (function atBreak(n) {
                          return 35 === n
                            ? (e.enter("atxHeadingSequence"),
                              (function sequenceFurther(t) {
                                return 35 === t
                                  ? (e.consume(t), sequenceFurther)
                                  : (e.exit("atxHeadingSequence"), atBreak(t));
                              })(n))
                            : null === n || (0, Q.Ch)(n)
                            ? (e.exit("atxHeading"), t(n))
                            : (0, Q.xz)(n)
                            ? (0, G.f)(e, atBreak, "whitespace")(n)
                            : (e.enter("atxHeadingText"),
                              (function data(t) {
                                return null === t || 35 === t || (0, Q.z3)(t)
                                  ? (e.exit("atxHeadingText"), atBreak(t))
                                  : (e.consume(t), data);
                              })(n));
                        })(i))
                      : n(i);
                  })(i)
                );
              };
            },
            resolve: function (e, t) {
              let n,
                r,
                i = e.length - 2,
                o = 3;
              return (
                "whitespace" === e[3][1].type && (o += 2),
                i - 2 > o && "whitespace" === e[i][1].type && (i -= 2),
                "atxHeadingSequence" === e[i][1].type &&
                  (o === i - 1 ||
                    (i - 4 > o && "whitespace" === e[i - 2][1].type)) &&
                  (i -= o + 1 === i ? 2 : 4),
                i > o &&
                  ((n = {
                    type: "atxHeadingText",
                    start: e[o][1].start,
                    end: e[i][1].end,
                  }),
                  (r = {
                    type: "chunkText",
                    start: e[o][1].start,
                    end: e[i][1].end,
                    contentType: "text",
                  }),
                  (0, $.d)(e, o, i - o + 1, [
                    ["enter", n, t],
                    ["enter", r, t],
                    ["exit", r, t],
                    ["exit", n, t],
                  ])),
                e
              );
            },
          },
          42: ea,
          45: [eg, ea],
          60: {
            name: "htmlFlow",
            tokenize: function (e, t, n) {
              let r, i, o, a, l;
              let s = this;
              return function (t) {
                return (
                  e.enter("htmlFlow"),
                  e.enter("htmlFlowData"),
                  e.consume(t),
                  open
                );
              };
              function open(a) {
                return 33 === a
                  ? (e.consume(a), declarationOpen)
                  : 47 === a
                  ? (e.consume(a), (i = !0), tagCloseStart)
                  : 63 === a
                  ? (e.consume(a),
                    (r = 3),
                    s.interrupt ? t : continuationDeclarationInside)
                  : (0, Q.jv)(a)
                  ? (e.consume(a), (o = String.fromCharCode(a)), tagName)
                  : n(a);
              }
              function declarationOpen(i) {
                return 45 === i
                  ? (e.consume(i), (r = 2), commentOpenInside)
                  : 91 === i
                  ? (e.consume(i), (r = 5), (a = 0), cdataOpenInside)
                  : (0, Q.jv)(i)
                  ? (e.consume(i),
                    (r = 4),
                    s.interrupt ? t : continuationDeclarationInside)
                  : n(i);
              }
              function commentOpenInside(r) {
                return 45 === r
                  ? (e.consume(r),
                    s.interrupt ? t : continuationDeclarationInside)
                  : n(r);
              }
              function cdataOpenInside(r) {
                let i = "CDATA[";
                return r === i.charCodeAt(a++)
                  ? (e.consume(r), a === i.length)
                    ? s.interrupt
                      ? t
                      : continuation
                    : cdataOpenInside
                  : n(r);
              }
              function tagCloseStart(t) {
                return (0, Q.jv)(t)
                  ? (e.consume(t), (o = String.fromCharCode(t)), tagName)
                  : n(t);
              }
              function tagName(a) {
                if (null === a || 47 === a || 62 === a || (0, Q.z3)(a)) {
                  let l = 47 === a,
                    u = o.toLowerCase();
                  return !l && !i && eb.includes(u)
                    ? ((r = 1), s.interrupt ? t(a) : continuation(a))
                    : ey.includes(o.toLowerCase())
                    ? ((r = 6), l)
                      ? (e.consume(a), basicSelfClosing)
                      : s.interrupt
                      ? t(a)
                      : continuation(a)
                    : ((r = 7),
                      s.interrupt && !s.parser.lazy[s.now().line]
                        ? n(a)
                        : i
                        ? (function completeClosingTagAfter(t) {
                            return (0, Q.xz)(t)
                              ? (e.consume(t), completeClosingTagAfter)
                              : completeEnd(t);
                          })(a)
                        : completeAttributeNameBefore(a));
                }
                return 45 === a || (0, Q.H$)(a)
                  ? (e.consume(a), (o += String.fromCharCode(a)), tagName)
                  : n(a);
              }
              function basicSelfClosing(r) {
                return 62 === r
                  ? (e.consume(r), s.interrupt ? t : continuation)
                  : n(r);
              }
              function completeAttributeNameBefore(t) {
                return 47 === t
                  ? (e.consume(t), completeEnd)
                  : 58 === t || 95 === t || (0, Q.jv)(t)
                  ? (e.consume(t), completeAttributeName)
                  : (0, Q.xz)(t)
                  ? (e.consume(t), completeAttributeNameBefore)
                  : completeEnd(t);
              }
              function completeAttributeName(t) {
                return 45 === t ||
                  46 === t ||
                  58 === t ||
                  95 === t ||
                  (0, Q.H$)(t)
                  ? (e.consume(t), completeAttributeName)
                  : completeAttributeNameAfter(t);
              }
              function completeAttributeNameAfter(t) {
                return 61 === t
                  ? (e.consume(t), completeAttributeValueBefore)
                  : (0, Q.xz)(t)
                  ? (e.consume(t), completeAttributeNameAfter)
                  : completeAttributeNameBefore(t);
              }
              function completeAttributeValueBefore(t) {
                return null === t ||
                  60 === t ||
                  61 === t ||
                  62 === t ||
                  96 === t
                  ? n(t)
                  : 34 === t || 39 === t
                  ? (e.consume(t), (l = t), completeAttributeValueQuoted)
                  : (0, Q.xz)(t)
                  ? (e.consume(t), completeAttributeValueBefore)
                  : (function completeAttributeValueUnquoted(t) {
                      return null === t ||
                        34 === t ||
                        39 === t ||
                        47 === t ||
                        60 === t ||
                        61 === t ||
                        62 === t ||
                        96 === t ||
                        (0, Q.z3)(t)
                        ? completeAttributeNameAfter(t)
                        : (e.consume(t), completeAttributeValueUnquoted);
                    })(t);
              }
              function completeAttributeValueQuoted(t) {
                return t === l
                  ? (e.consume(t),
                    (l = null),
                    completeAttributeValueQuotedAfter)
                  : null === t || (0, Q.Ch)(t)
                  ? n(t)
                  : (e.consume(t), completeAttributeValueQuoted);
              }
              function completeAttributeValueQuotedAfter(e) {
                return 47 === e || 62 === e || (0, Q.xz)(e)
                  ? completeAttributeNameBefore(e)
                  : n(e);
              }
              function completeEnd(t) {
                return 62 === t ? (e.consume(t), completeAfter) : n(t);
              }
              function completeAfter(t) {
                return null === t || (0, Q.Ch)(t)
                  ? continuation(t)
                  : (0, Q.xz)(t)
                  ? (e.consume(t), completeAfter)
                  : n(t);
              }
              function continuation(t) {
                return 45 === t && 2 === r
                  ? (e.consume(t), continuationCommentInside)
                  : 60 === t && 1 === r
                  ? (e.consume(t), continuationRawTagOpen)
                  : 62 === t && 4 === r
                  ? (e.consume(t), continuationClose)
                  : 63 === t && 3 === r
                  ? (e.consume(t), continuationDeclarationInside)
                  : 93 === t && 5 === r
                  ? (e.consume(t), continuationCdataInside)
                  : (0, Q.Ch)(t) && (6 === r || 7 === r)
                  ? (e.exit("htmlFlowData"),
                    e.check(ek, continuationAfter, continuationStart)(t))
                  : null === t || (0, Q.Ch)(t)
                  ? (e.exit("htmlFlowData"), continuationStart(t))
                  : (e.consume(t), continuation);
              }
              function continuationStart(t) {
                return e.check(
                  e_,
                  continuationStartNonLazy,
                  continuationAfter
                )(t);
              }
              function continuationStartNonLazy(t) {
                return (
                  e.enter("lineEnding"),
                  e.consume(t),
                  e.exit("lineEnding"),
                  continuationBefore
                );
              }
              function continuationBefore(t) {
                return null === t || (0, Q.Ch)(t)
                  ? continuationStart(t)
                  : (e.enter("htmlFlowData"), continuation(t));
              }
              function continuationCommentInside(t) {
                return 45 === t
                  ? (e.consume(t), continuationDeclarationInside)
                  : continuation(t);
              }
              function continuationRawTagOpen(t) {
                return 47 === t
                  ? (e.consume(t), (o = ""), continuationRawEndTag)
                  : continuation(t);
              }
              function continuationRawEndTag(t) {
                if (62 === t) {
                  let n = o.toLowerCase();
                  return eb.includes(n)
                    ? (e.consume(t), continuationClose)
                    : continuation(t);
                }
                return (0, Q.jv)(t) && o.length < 8
                  ? (e.consume(t),
                    (o += String.fromCharCode(t)),
                    continuationRawEndTag)
                  : continuation(t);
              }
              function continuationCdataInside(t) {
                return 93 === t
                  ? (e.consume(t), continuationDeclarationInside)
                  : continuation(t);
              }
              function continuationDeclarationInside(t) {
                return 62 === t
                  ? (e.consume(t), continuationClose)
                  : 45 === t && 2 === r
                  ? (e.consume(t), continuationDeclarationInside)
                  : continuation(t);
              }
              function continuationClose(t) {
                return null === t || (0, Q.Ch)(t)
                  ? (e.exit("htmlFlowData"), continuationAfter(t))
                  : (e.consume(t), continuationClose);
              }
              function continuationAfter(n) {
                return e.exit("htmlFlow"), t(n);
              }
            },
            resolveTo: function (e) {
              let t = e.length;
              for (
                ;
                t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type);

              );
              return (
                t > 1 &&
                  "linePrefix" === e[t - 2][1].type &&
                  ((e[t][1].start = e[t - 2][1].start),
                  (e[t + 1][1].start = e[t - 2][1].start),
                  e.splice(t - 2, 2)),
                e
              );
            },
            concrete: !0,
          },
          61: eg,
          95: ea,
          96: ex,
          126: ex,
        },
        eM = { 38: eC, 92: eS },
        eN = {
          [-5]: eE,
          [-4]: eE,
          [-3]: eE,
          33: eI,
          38: eC,
          42: eD,
          60: [
            {
              name: "autolink",
              tokenize: function (e, t, n) {
                let r = 0;
                return function (t) {
                  return (
                    e.enter("autolink"),
                    e.enter("autolinkMarker"),
                    e.consume(t),
                    e.exit("autolinkMarker"),
                    e.enter("autolinkProtocol"),
                    open
                  );
                };
                function open(t) {
                  return (0, Q.jv)(t)
                    ? (e.consume(t), schemeOrEmailAtext)
                    : 64 === t
                    ? n(t)
                    : emailAtext(t);
                }
                function schemeOrEmailAtext(t) {
                  return 43 === t || 45 === t || 46 === t || (0, Q.H$)(t)
                    ? ((r = 1),
                      (function schemeInsideOrEmailAtext(t) {
                        return 58 === t
                          ? (e.consume(t), (r = 0), urlInside)
                          : (43 === t ||
                              45 === t ||
                              46 === t ||
                              (0, Q.H$)(t)) &&
                            r++ < 32
                          ? (e.consume(t), schemeInsideOrEmailAtext)
                          : ((r = 0), emailAtext(t));
                      })(t))
                    : emailAtext(t);
                }
                function urlInside(r) {
                  return 62 === r
                    ? (e.exit("autolinkProtocol"),
                      e.enter("autolinkMarker"),
                      e.consume(r),
                      e.exit("autolinkMarker"),
                      e.exit("autolink"),
                      t)
                    : null === r || 32 === r || 60 === r || (0, Q.Av)(r)
                    ? n(r)
                    : (e.consume(r), urlInside);
                }
                function emailAtext(t) {
                  return 64 === t
                    ? (e.consume(t), emailAtSignOrDot)
                    : (0, Q.n9)(t)
                    ? (e.consume(t), emailAtext)
                    : n(t);
                }
                function emailAtSignOrDot(i) {
                  return (0, Q.H$)(i)
                    ? (function emailLabel(i) {
                        return 46 === i
                          ? (e.consume(i), (r = 0), emailAtSignOrDot)
                          : 62 === i
                          ? ((e.exit("autolinkProtocol").type =
                              "autolinkEmail"),
                            e.enter("autolinkMarker"),
                            e.consume(i),
                            e.exit("autolinkMarker"),
                            e.exit("autolink"),
                            t)
                          : (function emailValue(t) {
                              if ((45 === t || (0, Q.H$)(t)) && r++ < 63) {
                                let n = 45 === t ? emailValue : emailLabel;
                                return e.consume(t), n;
                              }
                              return n(t);
                            })(i);
                      })(i)
                    : n(i);
                }
              },
            },
            {
              name: "htmlText",
              tokenize: function (e, t, n) {
                let r, i, o;
                let a = this;
                return function (t) {
                  return (
                    e.enter("htmlText"),
                    e.enter("htmlTextData"),
                    e.consume(t),
                    open
                  );
                };
                function open(t) {
                  return 33 === t
                    ? (e.consume(t), declarationOpen)
                    : 47 === t
                    ? (e.consume(t), tagCloseStart)
                    : 63 === t
                    ? (e.consume(t), instruction)
                    : (0, Q.jv)(t)
                    ? (e.consume(t), tagOpen)
                    : n(t);
                }
                function declarationOpen(t) {
                  return 45 === t
                    ? (e.consume(t), commentOpenInside)
                    : 91 === t
                    ? (e.consume(t), (i = 0), cdataOpenInside)
                    : (0, Q.jv)(t)
                    ? (e.consume(t), declaration)
                    : n(t);
                }
                function commentOpenInside(t) {
                  return 45 === t ? (e.consume(t), commentEnd) : n(t);
                }
                function comment(t) {
                  return null === t
                    ? n(t)
                    : 45 === t
                    ? (e.consume(t), commentClose)
                    : (0, Q.Ch)(t)
                    ? ((o = comment), lineEndingBefore(t))
                    : (e.consume(t), comment);
                }
                function commentClose(t) {
                  return 45 === t ? (e.consume(t), commentEnd) : comment(t);
                }
                function commentEnd(e) {
                  return 62 === e
                    ? end(e)
                    : 45 === e
                    ? commentClose(e)
                    : comment(e);
                }
                function cdataOpenInside(t) {
                  let r = "CDATA[";
                  return t === r.charCodeAt(i++)
                    ? (e.consume(t), i === r.length ? cdata : cdataOpenInside)
                    : n(t);
                }
                function cdata(t) {
                  return null === t
                    ? n(t)
                    : 93 === t
                    ? (e.consume(t), cdataClose)
                    : (0, Q.Ch)(t)
                    ? ((o = cdata), lineEndingBefore(t))
                    : (e.consume(t), cdata);
                }
                function cdataClose(t) {
                  return 93 === t ? (e.consume(t), cdataEnd) : cdata(t);
                }
                function cdataEnd(t) {
                  return 62 === t
                    ? end(t)
                    : 93 === t
                    ? (e.consume(t), cdataEnd)
                    : cdata(t);
                }
                function declaration(t) {
                  return null === t || 62 === t
                    ? end(t)
                    : (0, Q.Ch)(t)
                    ? ((o = declaration), lineEndingBefore(t))
                    : (e.consume(t), declaration);
                }
                function instruction(t) {
                  return null === t
                    ? n(t)
                    : 63 === t
                    ? (e.consume(t), instructionClose)
                    : (0, Q.Ch)(t)
                    ? ((o = instruction), lineEndingBefore(t))
                    : (e.consume(t), instruction);
                }
                function instructionClose(e) {
                  return 62 === e ? end(e) : instruction(e);
                }
                function tagCloseStart(t) {
                  return (0, Q.jv)(t) ? (e.consume(t), tagClose) : n(t);
                }
                function tagClose(t) {
                  return 45 === t || (0, Q.H$)(t)
                    ? (e.consume(t), tagClose)
                    : (function tagCloseBetween(t) {
                        return (0, Q.Ch)(t)
                          ? ((o = tagCloseBetween), lineEndingBefore(t))
                          : (0, Q.xz)(t)
                          ? (e.consume(t), tagCloseBetween)
                          : end(t);
                      })(t);
                }
                function tagOpen(t) {
                  return 45 === t || (0, Q.H$)(t)
                    ? (e.consume(t), tagOpen)
                    : 47 === t || 62 === t || (0, Q.z3)(t)
                    ? tagOpenBetween(t)
                    : n(t);
                }
                function tagOpenBetween(t) {
                  return 47 === t
                    ? (e.consume(t), end)
                    : 58 === t || 95 === t || (0, Q.jv)(t)
                    ? (e.consume(t), tagOpenAttributeName)
                    : (0, Q.Ch)(t)
                    ? ((o = tagOpenBetween), lineEndingBefore(t))
                    : (0, Q.xz)(t)
                    ? (e.consume(t), tagOpenBetween)
                    : end(t);
                }
                function tagOpenAttributeName(t) {
                  return 45 === t ||
                    46 === t ||
                    58 === t ||
                    95 === t ||
                    (0, Q.H$)(t)
                    ? (e.consume(t), tagOpenAttributeName)
                    : (function tagOpenAttributeNameAfter(t) {
                        return 61 === t
                          ? (e.consume(t), tagOpenAttributeValueBefore)
                          : (0, Q.Ch)(t)
                          ? ((o = tagOpenAttributeNameAfter),
                            lineEndingBefore(t))
                          : (0, Q.xz)(t)
                          ? (e.consume(t), tagOpenAttributeNameAfter)
                          : tagOpenBetween(t);
                      })(t);
                }
                function tagOpenAttributeValueBefore(t) {
                  return null === t ||
                    60 === t ||
                    61 === t ||
                    62 === t ||
                    96 === t
                    ? n(t)
                    : 34 === t || 39 === t
                    ? (e.consume(t), (r = t), tagOpenAttributeValueQuoted)
                    : (0, Q.Ch)(t)
                    ? ((o = tagOpenAttributeValueBefore), lineEndingBefore(t))
                    : (0, Q.xz)(t)
                    ? (e.consume(t), tagOpenAttributeValueBefore)
                    : (e.consume(t), tagOpenAttributeValueUnquoted);
                }
                function tagOpenAttributeValueQuoted(t) {
                  return t === r
                    ? (e.consume(t),
                      (r = void 0),
                      tagOpenAttributeValueQuotedAfter)
                    : null === t
                    ? n(t)
                    : (0, Q.Ch)(t)
                    ? ((o = tagOpenAttributeValueQuoted), lineEndingBefore(t))
                    : (e.consume(t), tagOpenAttributeValueQuoted);
                }
                function tagOpenAttributeValueUnquoted(t) {
                  return null === t ||
                    34 === t ||
                    39 === t ||
                    60 === t ||
                    61 === t ||
                    96 === t
                    ? n(t)
                    : 47 === t || 62 === t || (0, Q.z3)(t)
                    ? tagOpenBetween(t)
                    : (e.consume(t), tagOpenAttributeValueUnquoted);
                }
                function tagOpenAttributeValueQuotedAfter(e) {
                  return 47 === e || 62 === e || (0, Q.z3)(e)
                    ? tagOpenBetween(e)
                    : n(e);
                }
                function end(r) {
                  return 62 === r
                    ? (e.consume(r),
                      e.exit("htmlTextData"),
                      e.exit("htmlText"),
                      t)
                    : n(r);
                }
                function lineEndingBefore(t) {
                  return (
                    e.exit("htmlTextData"),
                    e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    lineEndingAfter
                  );
                }
                function lineEndingAfter(t) {
                  return (0, Q.xz)(t)
                    ? (0, G.f)(
                        e,
                        lineEndingAfterPrefix,
                        "linePrefix",
                        a.parser.constructs.disable.null.includes(
                          "codeIndented"
                        )
                          ? void 0
                          : 4
                      )(t)
                    : lineEndingAfterPrefix(t);
                }
                function lineEndingAfterPrefix(t) {
                  return e.enter("htmlTextData"), o(t);
                }
              },
            },
          ],
          91: eL,
          92: [
            {
              name: "hardBreakEscape",
              tokenize: function (e, t, n) {
                return function (t) {
                  return e.enter("hardBreakEscape"), e.consume(t), after;
                };
                function after(r) {
                  return (0, Q.Ch)(r)
                    ? (e.exit("hardBreakEscape"), t(r))
                    : n(r);
                }
              },
            },
            eS,
          ],
          93: eP,
          95: eD,
          96: {
            name: "codeText",
            tokenize: function (e, t, n) {
              let r,
                i,
                o = 0;
              return function (t) {
                return (
                  e.enter("codeText"),
                  e.enter("codeTextSequence"),
                  (function sequenceOpen(t) {
                    return 96 === t
                      ? (e.consume(t), o++, sequenceOpen)
                      : (e.exit("codeTextSequence"), between(t));
                  })(t)
                );
              };
              function between(a) {
                return null === a
                  ? n(a)
                  : 32 === a
                  ? (e.enter("space"), e.consume(a), e.exit("space"), between)
                  : 96 === a
                  ? ((i = e.enter("codeTextSequence")),
                    (r = 0),
                    (function sequenceClose(n) {
                      return 96 === n
                        ? (e.consume(n), r++, sequenceClose)
                        : r === o
                        ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n))
                        : ((i.type = "codeTextData"), data(n));
                    })(a))
                  : (0, Q.Ch)(a)
                  ? (e.enter("lineEnding"),
                    e.consume(a),
                    e.exit("lineEnding"),
                    between)
                  : (e.enter("codeTextData"), data(a));
              }
              function data(t) {
                return null === t || 32 === t || 96 === t || (0, Q.Ch)(t)
                  ? (e.exit("codeTextData"), between(t))
                  : (e.consume(t), data);
              }
            },
            resolve: function (e) {
              let t,
                n,
                r = e.length - 4,
                i = 3;
              if (
                ("lineEnding" === e[3][1].type || "space" === e[i][1].type) &&
                ("lineEnding" === e[r][1].type || "space" === e[r][1].type)
              ) {
                for (t = i; ++t < r; )
                  if ("codeTextData" === e[t][1].type) {
                    (e[i][1].type = "codeTextPadding"),
                      (e[r][1].type = "codeTextPadding"),
                      (i += 2),
                      (r -= 2);
                    break;
                  }
              }
              for (t = i - 1, r++; ++t <= r; )
                void 0 === n
                  ? t !== r && "lineEnding" !== e[t][1].type && (n = t)
                  : (t === r || "lineEnding" === e[t][1].type) &&
                    ((e[n][1].type = "codeTextData"),
                    t !== n + 2 &&
                      ((e[n][1].end = e[t - 1][1].end),
                      e.splice(n + 2, t - n - 2),
                      (r -= t - n - 2),
                      (t = n + 2)),
                    (n = void 0));
              return e;
            },
            previous: function (e) {
              return (
                96 !== e ||
                "characterEscape" ===
                  this.events[this.events.length - 1][1].type
              );
            },
          },
        },
        eq = { null: [eD, en] },
        eH = { null: [42, 95] },
        eV = { null: [] },
        eU = /[\0\t\n\r]/g;
      var e$ = n(80889),
        eW = n(47881);
      let eG = {}.hasOwnProperty;
      function lib_point(e) {
        return { line: e.line, column: e.column, offset: e.offset };
      }
      function defaultOnError(e, t) {
        if (e)
          throw Error(
            "Cannot close `" +
              e.type +
              "` (" +
              stringifyPosition({ start: e.start, end: e.end }) +
              "): a different token (`" +
              t.type +
              "`, " +
              stringifyPosition({ start: t.start, end: t.end }) +
              ") is open"
          );
        throw Error(
          "Cannot close document, a token (`" +
            t.type +
            "`, " +
            stringifyPosition({ start: t.start, end: t.end }) +
            ") is still open"
        );
      }
      function remarkParse(e) {
        let t = this;
        t.parser = function (n) {
          var r, o;
          let a, l, s, u;
          return (
            "string" !=
              typeof (r = {
                ...t.data("settings"),
                ...e,
                extensions: t.data("micromarkExtensions") || [],
                mdastExtensions: t.data("fromMarkdownExtensions") || [],
              }) && ((o = r), (r = void 0)),
            (function (e) {
              let t = {
                transforms: [],
                canContainEols: [
                  "emphasis",
                  "fragment",
                  "heading",
                  "paragraph",
                  "strong",
                ],
                enter: {
                  autolink: opener(link),
                  autolinkProtocol: onenterdata,
                  autolinkEmail: onenterdata,
                  atxHeading: opener(heading),
                  blockQuote: opener(function () {
                    return { type: "blockquote", children: [] };
                  }),
                  characterEscape: onenterdata,
                  characterReference: onenterdata,
                  codeFenced: opener(codeFlow),
                  codeFencedFenceInfo: buffer,
                  codeFencedFenceMeta: buffer,
                  codeIndented: opener(codeFlow, buffer),
                  codeText: opener(function () {
                    return { type: "inlineCode", value: "" };
                  }, buffer),
                  codeTextData: onenterdata,
                  data: onenterdata,
                  codeFlowValue: onenterdata,
                  definition: opener(function () {
                    return {
                      type: "definition",
                      identifier: "",
                      label: null,
                      title: null,
                      url: "",
                    };
                  }),
                  definitionDestinationString: buffer,
                  definitionLabelString: buffer,
                  definitionTitleString: buffer,
                  emphasis: opener(function () {
                    return { type: "emphasis", children: [] };
                  }),
                  hardBreakEscape: opener(hardBreak),
                  hardBreakTrailing: opener(hardBreak),
                  htmlFlow: opener(html, buffer),
                  htmlFlowData: onenterdata,
                  htmlText: opener(html, buffer),
                  htmlTextData: onenterdata,
                  image: opener(function () {
                    return { type: "image", title: null, url: "", alt: null };
                  }),
                  label: buffer,
                  link: opener(link),
                  listItem: opener(function (e) {
                    return {
                      type: "listItem",
                      spread: e._spread,
                      checked: null,
                      children: [],
                    };
                  }),
                  listItemValue: function (e) {
                    if (this.data.expectingFirstListItemValue) {
                      let t = this.stack[this.stack.length - 2];
                      (t.start = Number.parseInt(this.sliceSerialize(e), 10)),
                        (this.data.expectingFirstListItemValue = void 0);
                    }
                  },
                  listOrdered: opener(list, function () {
                    this.data.expectingFirstListItemValue = !0;
                  }),
                  listUnordered: opener(list),
                  paragraph: opener(function () {
                    return { type: "paragraph", children: [] };
                  }),
                  reference: function () {
                    this.data.referenceType = "collapsed";
                  },
                  referenceString: buffer,
                  resourceDestinationString: buffer,
                  resourceTitleString: buffer,
                  setextHeading: opener(heading),
                  strong: opener(function () {
                    return { type: "strong", children: [] };
                  }),
                  thematicBreak: opener(function () {
                    return { type: "thematicBreak" };
                  }),
                },
                exit: {
                  atxHeading: closer(),
                  atxHeadingSequence: function (e) {
                    let t = this.stack[this.stack.length - 1];
                    if (!t.depth) {
                      let n = this.sliceSerialize(e).length;
                      t.depth = n;
                    }
                  },
                  autolink: closer(),
                  autolinkEmail: function (e) {
                    onexitdata.call(this, e);
                    let t = this.stack[this.stack.length - 1];
                    t.url = "mailto:" + this.sliceSerialize(e);
                  },
                  autolinkProtocol: function (e) {
                    onexitdata.call(this, e);
                    let t = this.stack[this.stack.length - 1];
                    t.url = this.sliceSerialize(e);
                  },
                  blockQuote: closer(),
                  characterEscapeValue: onexitdata,
                  characterReferenceMarkerHexadecimal:
                    onexitcharacterreferencemarker,
                  characterReferenceMarkerNumeric:
                    onexitcharacterreferencemarker,
                  characterReferenceValue: function (e) {
                    let t;
                    let n = this.sliceSerialize(e),
                      r = this.data.characterReferenceType;
                    if (r)
                      (t = (0, e$.o)(
                        n,
                        "characterReferenceMarkerNumeric" === r ? 10 : 16
                      )),
                        (this.data.characterReferenceType = void 0);
                    else {
                      let e = (0, ew.T)(n);
                      t = e;
                    }
                    let i = this.stack.pop();
                    (i.value += t), (i.position.end = lib_point(e.end));
                  },
                  codeFenced: closer(function () {
                    let e = this.resume(),
                      t = this.stack[this.stack.length - 1];
                    (t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "")),
                      (this.data.flowCodeInside = void 0);
                  }),
                  codeFencedFence: function () {
                    this.data.flowCodeInside ||
                      (this.buffer(), (this.data.flowCodeInside = !0));
                  },
                  codeFencedFenceInfo: function () {
                    let e = this.resume(),
                      t = this.stack[this.stack.length - 1];
                    t.lang = e;
                  },
                  codeFencedFenceMeta: function () {
                    let e = this.resume(),
                      t = this.stack[this.stack.length - 1];
                    t.meta = e;
                  },
                  codeFlowValue: onexitdata,
                  codeIndented: closer(function () {
                    let e = this.resume(),
                      t = this.stack[this.stack.length - 1];
                    t.value = e.replace(/(\r?\n|\r)$/g, "");
                  }),
                  codeText: closer(function () {
                    let e = this.resume(),
                      t = this.stack[this.stack.length - 1];
                    t.value = e;
                  }),
                  codeTextData: onexitdata,
                  data: onexitdata,
                  definition: closer(),
                  definitionDestinationString: function () {
                    let e = this.resume(),
                      t = this.stack[this.stack.length - 1];
                    t.url = e;
                  },
                  definitionLabelString: function (e) {
                    let t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    (n.label = t),
                      (n.identifier = (0, ef.d)(
                        this.sliceSerialize(e)
                      ).toLowerCase());
                  },
                  definitionTitleString: function () {
                    let e = this.resume(),
                      t = this.stack[this.stack.length - 1];
                    t.title = e;
                  },
                  emphasis: closer(),
                  hardBreakEscape: closer(onexithardbreak),
                  hardBreakTrailing: closer(onexithardbreak),
                  htmlFlow: closer(function () {
                    let e = this.resume(),
                      t = this.stack[this.stack.length - 1];
                    t.value = e;
                  }),
                  htmlFlowData: onexitdata,
                  htmlText: closer(function () {
                    let e = this.resume(),
                      t = this.stack[this.stack.length - 1];
                    t.value = e;
                  }),
                  htmlTextData: onexitdata,
                  image: closer(function () {
                    let e = this.stack[this.stack.length - 1];
                    if (this.data.inReference) {
                      let t = this.data.referenceType || "shortcut";
                      (e.type += "Reference"),
                        (e.referenceType = t),
                        delete e.url,
                        delete e.title;
                    } else delete e.identifier, delete e.label;
                    this.data.referenceType = void 0;
                  }),
                  label: function () {
                    let e = this.stack[this.stack.length - 1],
                      t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    if (((this.data.inReference = !0), "link" === n.type)) {
                      let t = e.children;
                      n.children = t;
                    } else n.alt = t;
                  },
                  labelText: function (e) {
                    let t = this.sliceSerialize(e),
                      n = this.stack[this.stack.length - 2];
                    (n.label = (0, eW.v)(t)),
                      (n.identifier = (0, ef.d)(t).toLowerCase());
                  },
                  lineEnding: function (e) {
                    let n = this.stack[this.stack.length - 1];
                    if (this.data.atHardBreak) {
                      let t = n.children[n.children.length - 1];
                      (t.position.end = lib_point(e.end)),
                        (this.data.atHardBreak = void 0);
                      return;
                    }
                    !this.data.setextHeadingSlurpLineEnding &&
                      t.canContainEols.includes(n.type) &&
                      (onenterdata.call(this, e), onexitdata.call(this, e));
                  },
                  link: closer(function () {
                    let e = this.stack[this.stack.length - 1];
                    if (this.data.inReference) {
                      let t = this.data.referenceType || "shortcut";
                      (e.type += "Reference"),
                        (e.referenceType = t),
                        delete e.url,
                        delete e.title;
                    } else delete e.identifier, delete e.label;
                    this.data.referenceType = void 0;
                  }),
                  listItem: closer(),
                  listOrdered: closer(),
                  listUnordered: closer(),
                  paragraph: closer(),
                  referenceString: function (e) {
                    let t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    (n.label = t),
                      (n.identifier = (0, ef.d)(
                        this.sliceSerialize(e)
                      ).toLowerCase()),
                      (this.data.referenceType = "full");
                  },
                  resourceDestinationString: function () {
                    let e = this.resume(),
                      t = this.stack[this.stack.length - 1];
                    t.url = e;
                  },
                  resourceTitleString: function () {
                    let e = this.resume(),
                      t = this.stack[this.stack.length - 1];
                    t.title = e;
                  },
                  resource: function () {
                    this.data.inReference = void 0;
                  },
                  setextHeading: closer(function () {
                    this.data.setextHeadingSlurpLineEnding = void 0;
                  }),
                  setextHeadingLineSequence: function (e) {
                    let t = this.stack[this.stack.length - 1];
                    t.depth =
                      61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2;
                  },
                  setextHeadingText: function () {
                    this.data.setextHeadingSlurpLineEnding = !0;
                  },
                  strong: closer(),
                  thematicBreak: closer(),
                },
              };
              (function configure(e, t) {
                let n = -1;
                for (; ++n < t.length; ) {
                  let r = t[n];
                  Array.isArray(r)
                    ? configure(e, r)
                    : (function (e, t) {
                        let n;
                        for (n in t)
                          if (eG.call(t, n))
                            switch (n) {
                              case "canContainEols": {
                                let r = t[n];
                                r && e[n].push(...r);
                                break;
                              }
                              case "transforms": {
                                let r = t[n];
                                r && e[n].push(...r);
                                break;
                              }
                              case "enter":
                              case "exit": {
                                let r = t[n];
                                r && Object.assign(e[n], r);
                              }
                            }
                      })(e, r);
                }
              })(t, (e || {}).mdastExtensions || []);
              let n = {};
              return function (e) {
                let r = { type: "root", children: [] },
                  i = {
                    stack: [r],
                    tokenStack: [],
                    config: t,
                    enter,
                    exit,
                    buffer,
                    resume,
                    data: n,
                  },
                  o = [],
                  a = -1;
                for (; ++a < e.length; )
                  if (
                    "listOrdered" === e[a][1].type ||
                    "listUnordered" === e[a][1].type
                  ) {
                    if ("enter" === e[a][0]) o.push(a);
                    else {
                      let t = o.pop();
                      a = (function (e, t, n) {
                        let r,
                          i,
                          o,
                          a,
                          l = t - 1,
                          s = -1,
                          u = !1;
                        for (; ++l <= n; ) {
                          let t = e[l];
                          switch (t[1].type) {
                            case "listUnordered":
                            case "listOrdered":
                            case "blockQuote":
                              "enter" === t[0] ? s++ : s--, (a = void 0);
                              break;
                            case "lineEndingBlank":
                              "enter" === t[0] &&
                                (!r || a || s || o || (o = l), (a = void 0));
                              break;
                            case "linePrefix":
                            case "listItemValue":
                            case "listItemMarker":
                            case "listItemPrefix":
                            case "listItemPrefixWhitespace":
                              break;
                            default:
                              a = void 0;
                          }
                          if (
                            (!s &&
                              "enter" === t[0] &&
                              "listItemPrefix" === t[1].type) ||
                            (-1 === s &&
                              "exit" === t[0] &&
                              ("listUnordered" === t[1].type ||
                                "listOrdered" === t[1].type))
                          ) {
                            if (r) {
                              let a = l;
                              for (i = void 0; a--; ) {
                                let t = e[a];
                                if (
                                  "lineEnding" === t[1].type ||
                                  "lineEndingBlank" === t[1].type
                                ) {
                                  if ("exit" === t[0]) continue;
                                  i &&
                                    ((e[i][1].type = "lineEndingBlank"),
                                    (u = !0)),
                                    (t[1].type = "lineEnding"),
                                    (i = a);
                                } else if (
                                  "linePrefix" === t[1].type ||
                                  "blockQuotePrefix" === t[1].type ||
                                  "blockQuotePrefixWhitespace" === t[1].type ||
                                  "blockQuoteMarker" === t[1].type ||
                                  "listItemIndent" === t[1].type
                                );
                                else break;
                              }
                              o && (!i || o < i) && (r._spread = !0),
                                (r.end = Object.assign(
                                  {},
                                  i ? e[i][1].start : t[1].end
                                )),
                                e.splice(i || l, 0, ["exit", r, t[2]]),
                                l++,
                                n++;
                            }
                            if ("listItemPrefix" === t[1].type) {
                              let i = {
                                type: "listItem",
                                _spread: !1,
                                start: Object.assign({}, t[1].start),
                                end: void 0,
                              };
                              (r = i),
                                e.splice(l, 0, ["enter", i, t[2]]),
                                l++,
                                n++,
                                (o = void 0),
                                (a = !0);
                            }
                          }
                        }
                        return (e[t][1]._spread = u), n;
                      })(e, t, a);
                    }
                  }
                for (a = -1; ++a < e.length; ) {
                  let n = t[e[a][0]];
                  eG.call(n, e[a][1].type) &&
                    n[e[a][1].type].call(
                      Object.assign(
                        { sliceSerialize: e[a][2].sliceSerialize },
                        i
                      ),
                      e[a][1]
                    );
                }
                if (i.tokenStack.length > 0) {
                  let e = i.tokenStack[i.tokenStack.length - 1],
                    t = e[1] || defaultOnError;
                  t.call(i, void 0, e[0]);
                }
                for (
                  r.position = {
                    start: lib_point(
                      e.length > 0
                        ? e[0][1].start
                        : { line: 1, column: 1, offset: 0 }
                    ),
                    end: lib_point(
                      e.length > 0
                        ? e[e.length - 2][1].end
                        : { line: 1, column: 1, offset: 0 }
                    ),
                  },
                    a = -1;
                  ++a < t.transforms.length;

                )
                  r = t.transforms[a](r) || r;
                return r;
              };
              function opener(e, t) {
                return function (n) {
                  enter.call(this, e(n), n), t && t.call(this, n);
                };
              }
              function buffer() {
                this.stack.push({ type: "fragment", children: [] });
              }
              function enter(e, t, n) {
                let r = this.stack[this.stack.length - 1],
                  i = r.children;
                i.push(e),
                  this.stack.push(e),
                  this.tokenStack.push([t, n]),
                  (e.position = { start: lib_point(t.start), end: void 0 });
              }
              function closer(e) {
                return function (t) {
                  e && e.call(this, t), exit.call(this, t);
                };
              }
              function exit(e, t) {
                let n = this.stack.pop(),
                  r = this.tokenStack.pop();
                if (r) {
                  if (r[0].type !== e.type) {
                    if (t) t.call(this, e, r[0]);
                    else {
                      let t = r[1] || defaultOnError;
                      t.call(this, e, r[0]);
                    }
                  }
                } else
                  throw Error(
                    "Cannot close `" +
                      e.type +
                      "` (" +
                      stringifyPosition({ start: e.start, end: e.end }) +
                      "): it’s not open"
                  );
                n.position.end = lib_point(e.end);
              }
              function resume() {
                return (0, U.B)(this.stack.pop());
              }
              function onenterdata(e) {
                let t = this.stack[this.stack.length - 1],
                  n = t.children,
                  r = n[n.length - 1];
                (r && "text" === r.type) ||
                  (((r = { type: "text", value: "" }).position = {
                    start: lib_point(e.start),
                    end: void 0,
                  }),
                  n.push(r)),
                  this.stack.push(r);
              }
              function onexitdata(e) {
                let t = this.stack.pop();
                (t.value += this.sliceSerialize(e)),
                  (t.position.end = lib_point(e.end));
              }
              function onexithardbreak() {
                this.data.atHardBreak = !0;
              }
              function onexitcharacterreferencemarker(e) {
                this.data.characterReferenceType = e.type;
              }
              function codeFlow() {
                return { type: "code", lang: null, meta: null, value: "" };
              }
              function heading() {
                return { type: "heading", depth: 0, children: [] };
              }
              function hardBreak() {
                return { type: "break" };
              }
              function html() {
                return { type: "html", value: "" };
              }
              function link() {
                return { type: "link", title: null, url: "", children: [] };
              }
              function list(e) {
                return {
                  type: "list",
                  ordered: "listOrdered" === e.type,
                  start: null,
                  spread: e._spread,
                  children: [],
                };
              }
            })(o)(
              (function (e) {
                for (; !subtokenize(e); );
                return e;
              })(
                (function (e) {
                  let t = (0, W.W)([i, ...((e || {}).extensions || [])]),
                    n = {
                      defined: [],
                      lazy: {},
                      constructs: t,
                      content: create(Y),
                      document: create(X),
                      flow: create(et),
                      string: create(er),
                      text: create(ei),
                    };
                  return n;
                  function create(e) {
                    return function (t) {
                      return (function (e, t, n) {
                        let r = Object.assign(
                            n
                              ? Object.assign({}, n)
                              : { line: 1, column: 1, offset: 0 },
                            { _index: 0, _bufferIndex: -1 }
                          ),
                          i = {},
                          o = [],
                          a = [],
                          l = [],
                          s = {
                            consume: function (e) {
                              (0, Q.Ch)(e)
                                ? (r.line++,
                                  (r.column = 1),
                                  (r.offset += -3 === e ? 2 : 1),
                                  accountForPotentialSkip())
                                : -1 !== e && (r.column++, r.offset++),
                                r._bufferIndex < 0
                                  ? r._index++
                                  : (r._bufferIndex++,
                                    r._bufferIndex === a[r._index].length &&
                                      ((r._bufferIndex = -1), r._index++)),
                                (u.previous = e);
                            },
                            enter: function (e, t) {
                              let n = t || {};
                              return (
                                (n.type = e),
                                (n.start = now()),
                                u.events.push(["enter", n, u]),
                                l.push(n),
                                n
                              );
                            },
                            exit: function (e) {
                              let t = l.pop();
                              return (
                                (t.end = now()),
                                u.events.push(["exit", t, u]),
                                t
                              );
                            },
                            attempt: constructFactory(function (e, t) {
                              addResult(e, t.from);
                            }),
                            check: constructFactory(onsuccessfulcheck),
                            interrupt: constructFactory(onsuccessfulcheck, {
                              interrupt: !0,
                            }),
                          },
                          u = {
                            previous: null,
                            code: null,
                            containerState: {},
                            events: [],
                            parser: e,
                            sliceStream,
                            sliceSerialize: function (e, t) {
                              return (function (e, t) {
                                let n,
                                  r = -1,
                                  i = [];
                                for (; ++r < e.length; ) {
                                  let o;
                                  let a = e[r];
                                  if ("string" == typeof a) o = a;
                                  else
                                    switch (a) {
                                      case -5:
                                        o = "\r";
                                        break;
                                      case -4:
                                        o = "\n";
                                        break;
                                      case -3:
                                        o = "\r\n";
                                        break;
                                      case -2:
                                        o = t ? " " : "	";
                                        break;
                                      case -1:
                                        if (!t && n) continue;
                                        o = " ";
                                        break;
                                      default:
                                        o = String.fromCharCode(a);
                                    }
                                  (n = -2 === a), i.push(o);
                                }
                                return i.join("");
                              })(sliceStream(e), t);
                            },
                            now,
                            defineSkip: function (e) {
                              (i[e.line] = e.column), accountForPotentialSkip();
                            },
                            write: function (e) {
                              return ((a = (0, $.V)(a, e)),
                              (function () {
                                let e;
                                for (; r._index < a.length; ) {
                                  var t;
                                  let n = a[r._index];
                                  if ("string" == typeof n)
                                    for (
                                      e = r._index,
                                        r._bufferIndex < 0 &&
                                          (r._bufferIndex = 0);
                                      r._index === e &&
                                      r._bufferIndex < n.length;

                                    )
                                      (t = n.charCodeAt(r._bufferIndex)),
                                        (c = c(t));
                                  else c = c(n);
                                }
                              })(),
                              null !== a[a.length - 1])
                                ? []
                                : (addResult(t, 0),
                                  (u.events = (0, eo.C)(o, u.events, u)),
                                  u.events);
                            },
                          },
                          c = t.tokenize.call(u, s);
                        return t.resolveAll && o.push(t), u;
                        function sliceStream(e) {
                          return (function (e, t) {
                            let n;
                            let r = t.start._index,
                              i = t.start._bufferIndex,
                              o = t.end._index,
                              a = t.end._bufferIndex;
                            if (r === o) n = [e[r].slice(i, a)];
                            else {
                              if (((n = e.slice(r, o)), i > -1)) {
                                let e = n[0];
                                "string" == typeof e
                                  ? (n[0] = e.slice(i))
                                  : n.shift();
                              }
                              a > 0 && n.push(e[o].slice(0, a));
                            }
                            return n;
                          })(a, e);
                        }
                        function now() {
                          let {
                            line: e,
                            column: t,
                            offset: n,
                            _index: i,
                            _bufferIndex: o,
                          } = r;
                          return {
                            line: e,
                            column: t,
                            offset: n,
                            _index: i,
                            _bufferIndex: o,
                          };
                        }
                        function onsuccessfulcheck(e, t) {
                          t.restore();
                        }
                        function constructFactory(e, t) {
                          return function (n, i, o) {
                            let a, c, f, p;
                            return Array.isArray(n)
                              ? handleListOfConstructs(n)
                              : "tokenize" in n
                              ? handleListOfConstructs([n])
                              : function (e) {
                                  let t = null !== e && n[e],
                                    r = null !== e && n.null,
                                    i = [
                                      ...(Array.isArray(t) ? t : t ? [t] : []),
                                      ...(Array.isArray(r) ? r : r ? [r] : []),
                                    ];
                                  return handleListOfConstructs(i)(e);
                                };
                            function handleListOfConstructs(e) {
                              return ((a = e), (c = 0), 0 === e.length)
                                ? o
                                : handleConstruct(e[c]);
                            }
                            function handleConstruct(e) {
                              return function (n) {
                                return ((p = (function () {
                                  let e = now(),
                                    t = u.previous,
                                    n = u.currentConstruct,
                                    i = u.events.length,
                                    o = Array.from(l);
                                  return {
                                    restore: function () {
                                      (r = e),
                                        (u.previous = t),
                                        (u.currentConstruct = n),
                                        (u.events.length = i),
                                        (l = o),
                                        accountForPotentialSkip();
                                    },
                                    from: i,
                                  };
                                })()),
                                (f = e),
                                e.partial || (u.currentConstruct = e),
                                e.name &&
                                  u.parser.constructs.disable.null.includes(
                                    e.name
                                  ))
                                  ? nok(n)
                                  : e.tokenize.call(
                                      t
                                        ? Object.assign(Object.create(u), t)
                                        : u,
                                      s,
                                      ok,
                                      nok
                                    )(n);
                              };
                            }
                            function ok(t) {
                              return e(f, p), i;
                            }
                            function nok(e) {
                              return (p.restore(), ++c < a.length)
                                ? handleConstruct(a[c])
                                : o;
                            }
                          };
                        }
                        function addResult(e, t) {
                          e.resolveAll && !o.includes(e) && o.push(e),
                            e.resolve &&
                              (0, $.d)(
                                u.events,
                                t,
                                u.events.length - t,
                                e.resolve(u.events.slice(t), u)
                              ),
                            e.resolveTo &&
                              (u.events = e.resolveTo(u.events, u));
                        }
                        function accountForPotentialSkip() {
                          r.line in i &&
                            r.column < 2 &&
                            ((r.column = i[r.line]),
                            (r.offset += i[r.line] - 1));
                        }
                      })(n, e, t);
                    };
                  }
                })(o)
                  .document()
                  .write(
                    ((l = 1),
                    (s = ""),
                    (u = !0),
                    function (e, t, n) {
                      let r, i, o, c, f;
                      let p = [];
                      for (
                        e =
                          s +
                          ("string" == typeof e
                            ? e.toString()
                            : new TextDecoder(t || void 0).decode(e)),
                          o = 0,
                          s = "",
                          u && (65279 === e.charCodeAt(0) && o++, (u = void 0));
                        o < e.length;

                      ) {
                        if (
                          ((eU.lastIndex = o),
                          (c =
                            (r = eU.exec(e)) && void 0 !== r.index
                              ? r.index
                              : e.length),
                          (f = e.charCodeAt(c)),
                          !r)
                        ) {
                          s = e.slice(o);
                          break;
                        }
                        if (10 === f && o === c && a) p.push(-3), (a = void 0);
                        else
                          switch (
                            (a && (p.push(-5), (a = void 0)),
                            o < c && (p.push(e.slice(o, c)), (l += c - o)),
                            f)
                          ) {
                            case 0:
                              p.push(65533), l++;
                              break;
                            case 9:
                              for (
                                i = 4 * Math.ceil(l / 4), p.push(-2);
                                l++ < i;

                              )
                                p.push(-1);
                              break;
                            case 10:
                              p.push(-4), (l = 1);
                              break;
                            default:
                              (a = !0), (l = 1);
                          }
                        o = c + 1;
                      }
                      return (
                        n && (a && p.push(-5), s && p.push(s), p.push(null)), p
                      );
                    })(n, r, !0)
                  )
              )
            )
          );
        };
      }
      var eQ = n(52835);
      function normalizeUri(e) {
        let t = [],
          n = -1,
          r = 0,
          i = 0;
        for (; ++n < e.length; ) {
          let o = e.charCodeAt(n),
            a = "";
          if (
            37 === o &&
            (0, Q.H$)(e.charCodeAt(n + 1)) &&
            (0, Q.H$)(e.charCodeAt(n + 2))
          )
            i = 2;
          else if (o < 128)
            /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) ||
              (a = String.fromCharCode(o));
          else if (o > 55295 && o < 57344) {
            let t = e.charCodeAt(n + 1);
            o < 56320 && t > 56319 && t < 57344
              ? ((a = String.fromCharCode(o, t)), (i = 1))
              : (a = "�");
          } else a = String.fromCharCode(o);
          a &&
            (t.push(e.slice(r, n), encodeURIComponent(a)),
            (r = n + i + 1),
            (a = "")),
            i && ((n += i), (i = 0));
        }
        return t.join("") + e.slice(r);
      }
      function defaultFootnoteBackContent(e, t) {
        let n = [{ type: "text", value: "↩" }];
        return (
          t > 1 &&
            n.push({
              type: "element",
              tagName: "sup",
              properties: {},
              children: [{ type: "text", value: String(t) }],
            }),
          n
        );
      }
      function defaultFootnoteBackLabel(e, t) {
        return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
      }
      var eY = n(21623);
      function revert(e, t) {
        let n = t.referenceType,
          r = "]";
        if (
          ("collapsed" === n
            ? (r += "[]")
            : "full" === n && (r += "[" + (t.label || t.identifier) + "]"),
          "imageReference" === t.type)
        )
          return [{ type: "text", value: "![" + t.alt + r }];
        let i = e.all(t),
          o = i[0];
        o && "text" === o.type
          ? (o.value = "[" + o.value)
          : i.unshift({ type: "text", value: "[" });
        let a = i[i.length - 1];
        return (
          a && "text" === a.type
            ? (a.value += r)
            : i.push({ type: "text", value: r }),
          i
        );
      }
      function listItemLoose(e) {
        let t = e.spread;
        return null == t ? e.children.length > 1 : t;
      }
      function trimLine(e, t, n) {
        let r = 0,
          i = e.length;
        if (t) {
          let t = e.codePointAt(r);
          for (; 9 === t || 32 === t; ) r++, (t = e.codePointAt(r));
        }
        if (n) {
          let t = e.codePointAt(i - 1);
          for (; 9 === t || 32 === t; ) i--, (t = e.codePointAt(i - 1));
        }
        return i > r ? e.slice(r, i) : "";
      }
      let eX = {
        blockquote: function (e, t) {
          let n = {
            type: "element",
            tagName: "blockquote",
            properties: {},
            children: e.wrap(e.all(t), !0),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        break: function (e, t) {
          let n = {
            type: "element",
            tagName: "br",
            properties: {},
            children: [],
          };
          return (
            e.patch(t, n), [e.applyData(t, n), { type: "text", value: "\n" }]
          );
        },
        code: function (e, t) {
          let n = t.value ? t.value + "\n" : "",
            r = {};
          t.lang && (r.className = ["language-" + t.lang]);
          let i = {
            type: "element",
            tagName: "code",
            properties: r,
            children: [{ type: "text", value: n }],
          };
          return (
            t.meta && (i.data = { meta: t.meta }),
            e.patch(t, i),
            (i = {
              type: "element",
              tagName: "pre",
              properties: {},
              children: [(i = e.applyData(t, i))],
            }),
            e.patch(t, i),
            i
          );
        },
        delete: function (e, t) {
          let n = {
            type: "element",
            tagName: "del",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        emphasis: function (e, t) {
          let n = {
            type: "element",
            tagName: "em",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        footnoteReference: function (e, t) {
          let n;
          let r =
              "string" == typeof e.options.clobberPrefix
                ? e.options.clobberPrefix
                : "user-content-",
            i = String(t.identifier).toUpperCase(),
            o = normalizeUri(i.toLowerCase()),
            a = e.footnoteOrder.indexOf(i),
            l = e.footnoteCounts.get(i);
          void 0 === l
            ? ((l = 0), e.footnoteOrder.push(i), (n = e.footnoteOrder.length))
            : (n = a + 1),
            (l += 1),
            e.footnoteCounts.set(i, l);
          let s = {
            type: "element",
            tagName: "a",
            properties: {
              href: "#" + r + "fn-" + o,
              id: r + "fnref-" + o + (l > 1 ? "-" + l : ""),
              dataFootnoteRef: !0,
              ariaDescribedBy: ["footnote-label"],
            },
            children: [{ type: "text", value: String(n) }],
          };
          e.patch(t, s);
          let u = {
            type: "element",
            tagName: "sup",
            properties: {},
            children: [s],
          };
          return e.patch(t, u), e.applyData(t, u);
        },
        heading: function (e, t) {
          let n = {
            type: "element",
            tagName: "h" + t.depth,
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        html: function (e, t) {
          if (e.options.allowDangerousHtml) {
            let n = { type: "raw", value: t.value };
            return e.patch(t, n), e.applyData(t, n);
          }
        },
        imageReference: function (e, t) {
          let n = String(t.identifier).toUpperCase(),
            r = e.definitionById.get(n);
          if (!r) return revert(e, t);
          let i = { src: normalizeUri(r.url || ""), alt: t.alt };
          null !== r.title && void 0 !== r.title && (i.title = r.title);
          let o = {
            type: "element",
            tagName: "img",
            properties: i,
            children: [],
          };
          return e.patch(t, o), e.applyData(t, o);
        },
        image: function (e, t) {
          let n = { src: normalizeUri(t.url) };
          null !== t.alt && void 0 !== t.alt && (n.alt = t.alt),
            null !== t.title && void 0 !== t.title && (n.title = t.title);
          let r = {
            type: "element",
            tagName: "img",
            properties: n,
            children: [],
          };
          return e.patch(t, r), e.applyData(t, r);
        },
        inlineCode: function (e, t) {
          let n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
          e.patch(t, n);
          let r = {
            type: "element",
            tagName: "code",
            properties: {},
            children: [n],
          };
          return e.patch(t, r), e.applyData(t, r);
        },
        linkReference: function (e, t) {
          let n = String(t.identifier).toUpperCase(),
            r = e.definitionById.get(n);
          if (!r) return revert(e, t);
          let i = { href: normalizeUri(r.url || "") };
          null !== r.title && void 0 !== r.title && (i.title = r.title);
          let o = {
            type: "element",
            tagName: "a",
            properties: i,
            children: e.all(t),
          };
          return e.patch(t, o), e.applyData(t, o);
        },
        link: function (e, t) {
          let n = { href: normalizeUri(t.url) };
          null !== t.title && void 0 !== t.title && (n.title = t.title);
          let r = {
            type: "element",
            tagName: "a",
            properties: n,
            children: e.all(t),
          };
          return e.patch(t, r), e.applyData(t, r);
        },
        listItem: function (e, t, n) {
          let r = e.all(t),
            i = n
              ? (function (e) {
                  let t = !1;
                  if ("list" === e.type) {
                    t = e.spread || !1;
                    let n = e.children,
                      r = -1;
                    for (; !t && ++r < n.length; ) t = listItemLoose(n[r]);
                  }
                  return t;
                })(n)
              : listItemLoose(t),
            o = {},
            a = [];
          if ("boolean" == typeof t.checked) {
            let e;
            let n = r[0];
            n && "element" === n.type && "p" === n.tagName
              ? (e = n)
              : ((e = {
                  type: "element",
                  tagName: "p",
                  properties: {},
                  children: [],
                }),
                r.unshift(e)),
              e.children.length > 0 &&
                e.children.unshift({ type: "text", value: " " }),
              e.children.unshift({
                type: "element",
                tagName: "input",
                properties: {
                  type: "checkbox",
                  checked: t.checked,
                  disabled: !0,
                },
                children: [],
              }),
              (o.className = ["task-list-item"]);
          }
          let l = -1;
          for (; ++l < r.length; ) {
            let e = r[l];
            (i || 0 !== l || "element" !== e.type || "p" !== e.tagName) &&
              a.push({ type: "text", value: "\n" }),
              "element" !== e.type || "p" !== e.tagName || i
                ? a.push(e)
                : a.push(...e.children);
          }
          let s = r[r.length - 1];
          s &&
            (i || "element" !== s.type || "p" !== s.tagName) &&
            a.push({ type: "text", value: "\n" });
          let u = {
            type: "element",
            tagName: "li",
            properties: o,
            children: a,
          };
          return e.patch(t, u), e.applyData(t, u);
        },
        list: function (e, t) {
          let n = {},
            r = e.all(t),
            i = -1;
          for (
            "number" == typeof t.start && 1 !== t.start && (n.start = t.start);
            ++i < r.length;

          ) {
            let e = r[i];
            if (
              "element" === e.type &&
              "li" === e.tagName &&
              e.properties &&
              Array.isArray(e.properties.className) &&
              e.properties.className.includes("task-list-item")
            ) {
              n.className = ["contains-task-list"];
              break;
            }
          }
          let o = {
            type: "element",
            tagName: t.ordered ? "ol" : "ul",
            properties: n,
            children: e.wrap(r, !0),
          };
          return e.patch(t, o), e.applyData(t, o);
        },
        paragraph: function (e, t) {
          let n = {
            type: "element",
            tagName: "p",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        root: function (e, t) {
          let n = { type: "root", children: e.wrap(e.all(t)) };
          return e.patch(t, n), e.applyData(t, n);
        },
        strong: function (e, t) {
          let n = {
            type: "element",
            tagName: "strong",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        table: function (e, t) {
          let n = e.all(t),
            r = n.shift(),
            i = [];
          if (r) {
            let n = {
              type: "element",
              tagName: "thead",
              properties: {},
              children: e.wrap([r], !0),
            };
            e.patch(t.children[0], n), i.push(n);
          }
          if (n.length > 0) {
            let r = {
                type: "element",
                tagName: "tbody",
                properties: {},
                children: e.wrap(n, !0),
              },
              o = (0, L.Pk)(t.children[1]),
              a = (0, L.rb)(t.children[t.children.length - 1]);
            o && a && (r.position = { start: o, end: a }), i.push(r);
          }
          let o = {
            type: "element",
            tagName: "table",
            properties: {},
            children: e.wrap(i, !0),
          };
          return e.patch(t, o), e.applyData(t, o);
        },
        tableCell: function (e, t) {
          let n = {
            type: "element",
            tagName: "td",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        tableRow: function (e, t, n) {
          let r = n ? n.children : void 0,
            i = r ? r.indexOf(t) : 1,
            o = 0 === i ? "th" : "td",
            a = n && "table" === n.type ? n.align : void 0,
            l = a ? a.length : t.children.length,
            s = -1,
            u = [];
          for (; ++s < l; ) {
            let n = t.children[s],
              r = {},
              i = a ? a[s] : void 0;
            i && (r.align = i);
            let l = {
              type: "element",
              tagName: o,
              properties: r,
              children: [],
            };
            n &&
              ((l.children = e.all(n)), e.patch(n, l), (l = e.applyData(n, l))),
              u.push(l);
          }
          let c = {
            type: "element",
            tagName: "tr",
            properties: {},
            children: e.wrap(u, !0),
          };
          return e.patch(t, c), e.applyData(t, c);
        },
        text: function (e, t) {
          let n = {
            type: "text",
            value: (function (e) {
              let t = String(e),
                n = /\r?\n|\r/g,
                r = n.exec(t),
                i = 0,
                o = [];
              for (; r; )
                o.push(trimLine(t.slice(i, r.index), i > 0, !0), r[0]),
                  (i = r.index + r[0].length),
                  (r = n.exec(t));
              return o.push(trimLine(t.slice(i), i > 0, !1)), o.join("");
            })(String(t.value)),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        thematicBreak: function (e, t) {
          let n = {
            type: "element",
            tagName: "hr",
            properties: {},
            children: [],
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        toml: ignore,
        yaml: ignore,
        definition: ignore,
        footnoteDefinition: ignore,
      };
      function ignore() {}
      let eZ = {}.hasOwnProperty,
        eK = {};
      function patch(e, t) {
        e.position && (t.position = (0, L.FK)(e));
      }
      function applyData(e, t) {
        let n = t;
        if (e && e.data) {
          let t = e.data.hName,
            r = e.data.hChildren,
            i = e.data.hProperties;
          if ("string" == typeof t) {
            if ("element" === n.type) n.tagName = t;
            else {
              let e = "children" in n ? n.children : [n];
              n = { type: "element", tagName: t, properties: {}, children: e };
            }
          }
          "element" === n.type &&
            i &&
            Object.assign(n.properties, (0, eQ.ZP)(i)),
            "children" in n && n.children && null != r && (n.children = r);
        }
        return n;
      }
      function defaultUnknownHandler(e, t) {
        let n = t.data || {},
          r =
            "value" in t &&
            !(eZ.call(n, "hProperties") || eZ.call(n, "hChildren"))
              ? { type: "text", value: t.value }
              : {
                  type: "element",
                  tagName: "div",
                  properties: {},
                  children: e.all(t),
                };
        return e.patch(t, r), e.applyData(t, r);
      }
      function wrap(e, t) {
        let n = [],
          r = -1;
        for (t && n.push({ type: "text", value: "\n" }); ++r < e.length; )
          r && n.push({ type: "text", value: "\n" }), n.push(e[r]);
        return t && e.length > 0 && n.push({ type: "text", value: "\n" }), n;
      }
      function trimMarkdownSpaceStart(e) {
        let t = 0,
          n = e.charCodeAt(t);
        for (; 9 === n || 32 === n; ) t++, (n = e.charCodeAt(t));
        return e.slice(t);
      }
      function toHast(e, t) {
        let n = (function (e, t) {
            let n = t || eK,
              r = new Map(),
              i = new Map(),
              o = new Map(),
              a = { ...eX, ...n.handlers },
              l = {
                all: function (e) {
                  let t = [];
                  if ("children" in e) {
                    let n = e.children,
                      r = -1;
                    for (; ++r < n.length; ) {
                      let i = l.one(n[r], e);
                      if (i) {
                        if (
                          r &&
                          "break" === n[r - 1].type &&
                          (Array.isArray(i) ||
                            "text" !== i.type ||
                            (i.value = trimMarkdownSpaceStart(i.value)),
                          !Array.isArray(i) && "element" === i.type)
                        ) {
                          let e = i.children[0];
                          e &&
                            "text" === e.type &&
                            (e.value = trimMarkdownSpaceStart(e.value));
                        }
                        Array.isArray(i) ? t.push(...i) : t.push(i);
                      }
                    }
                  }
                  return t;
                },
                applyData,
                definitionById: r,
                footnoteById: i,
                footnoteCounts: o,
                footnoteOrder: [],
                handlers: a,
                one: function (e, t) {
                  let n = e.type,
                    r = l.handlers[n];
                  if (eZ.call(l.handlers, n) && r) return r(l, e, t);
                  if (
                    l.options.passThrough &&
                    l.options.passThrough.includes(n)
                  ) {
                    if ("children" in e) {
                      let { children: t, ...n } = e,
                        r = (0, eQ.ZP)(n);
                      return (r.children = l.all(e)), r;
                    }
                    return (0, eQ.ZP)(e);
                  }
                  let i = l.options.unknownHandler || defaultUnknownHandler;
                  return i(l, e, t);
                },
                options: n,
                patch,
                wrap,
              };
            return (
              (0, eY.Vn)(e, function (e) {
                if (
                  "definition" === e.type ||
                  "footnoteDefinition" === e.type
                ) {
                  let t = "definition" === e.type ? r : i,
                    n = String(e.identifier).toUpperCase();
                  t.has(n) || t.set(n, e);
                }
              }),
              l
            );
          })(e, t),
          r = n.one(e, void 0),
          i = (function (e) {
            let t =
                "string" == typeof e.options.clobberPrefix
                  ? e.options.clobberPrefix
                  : "user-content-",
              n = e.options.footnoteBackContent || defaultFootnoteBackContent,
              r = e.options.footnoteBackLabel || defaultFootnoteBackLabel,
              i = e.options.footnoteLabel || "Footnotes",
              o = e.options.footnoteLabelTagName || "h2",
              a = e.options.footnoteLabelProperties || {
                className: ["sr-only"],
              },
              l = [],
              s = -1;
            for (; ++s < e.footnoteOrder.length; ) {
              let i = e.footnoteById.get(e.footnoteOrder[s]);
              if (!i) continue;
              let o = e.all(i),
                a = String(i.identifier).toUpperCase(),
                u = normalizeUri(a.toLowerCase()),
                c = 0,
                f = [],
                p = e.footnoteCounts.get(a);
              for (; void 0 !== p && ++c <= p; ) {
                f.length > 0 && f.push({ type: "text", value: " " });
                let e = "string" == typeof n ? n : n(s, c);
                "string" == typeof e && (e = { type: "text", value: e }),
                  f.push({
                    type: "element",
                    tagName: "a",
                    properties: {
                      href: "#" + t + "fnref-" + u + (c > 1 ? "-" + c : ""),
                      dataFootnoteBackref: "",
                      ariaLabel: "string" == typeof r ? r : r(s, c),
                      className: ["data-footnote-backref"],
                    },
                    children: Array.isArray(e) ? e : [e],
                  });
              }
              let d = o[o.length - 1];
              if (d && "element" === d.type && "p" === d.tagName) {
                let e = d.children[d.children.length - 1];
                e && "text" === e.type
                  ? (e.value += " ")
                  : d.children.push({ type: "text", value: " " }),
                  d.children.push(...f);
              } else o.push(...f);
              let h = {
                type: "element",
                tagName: "li",
                properties: { id: t + "fn-" + u },
                children: e.wrap(o, !0),
              };
              e.patch(i, h), l.push(h);
            }
            if (0 !== l.length)
              return {
                type: "element",
                tagName: "section",
                properties: { dataFootnotes: !0, className: ["footnotes"] },
                children: [
                  {
                    type: "element",
                    tagName: o,
                    properties: { ...(0, eQ.ZP)(a), id: "footnote-label" },
                    children: [{ type: "text", value: i }],
                  },
                  { type: "text", value: "\n" },
                  {
                    type: "element",
                    tagName: "ol",
                    properties: {},
                    children: e.wrap(l, !0),
                  },
                  { type: "text", value: "\n" },
                ],
              };
          })(n),
          a = Array.isArray(r)
            ? { type: "root", children: r }
            : r || { type: "root", children: [] };
        return (
          i &&
            ((0, o.ok)("children" in a),
            a.children.push({ type: "text", value: "\n" }, i)),
          a
        );
      }
      function remarkRehype(e, t) {
        return e && "run" in e
          ? async function (n, r) {
              let i = toHast(n, { file: r, ...t });
              await e.run(i, r);
            }
          : function (n, r) {
              return toHast(n, { file: r, ...(t || e) });
            };
      }
      function bail(e) {
        if (e) throw e;
      }
      var eJ = n(94470);
      function isPlainObject(e) {
        if ("object" != typeof e || null === e) return !1;
        let t = Object.getPrototypeOf(e);
        return (
          (null === t ||
            t === Object.prototype ||
            null === Object.getPrototypeOf(t)) &&
          !(Symbol.toStringTag in e) &&
          !(Symbol.iterator in e)
        );
      }
      let e0 = {
        basename: function (e, t) {
          let n;
          if (void 0 !== t && "string" != typeof t)
            throw TypeError('"ext" argument must be a string');
          assertPath(e);
          let r = 0,
            i = -1,
            o = e.length;
          if (void 0 === t || 0 === t.length || t.length > e.length) {
            for (; o--; )
              if (47 === e.codePointAt(o)) {
                if (n) {
                  r = o + 1;
                  break;
                }
              } else i < 0 && ((n = !0), (i = o + 1));
            return i < 0 ? "" : e.slice(r, i);
          }
          if (t === e) return "";
          let a = -1,
            l = t.length - 1;
          for (; o--; )
            if (47 === e.codePointAt(o)) {
              if (n) {
                r = o + 1;
                break;
              }
            } else
              a < 0 && ((n = !0), (a = o + 1)),
                l > -1 &&
                  (e.codePointAt(o) === t.codePointAt(l--)
                    ? l < 0 && (i = o)
                    : ((l = -1), (i = a)));
          return r === i ? (i = a) : i < 0 && (i = e.length), e.slice(r, i);
        },
        dirname: function (e) {
          let t;
          if ((assertPath(e), 0 === e.length)) return ".";
          let n = -1,
            r = e.length;
          for (; --r; )
            if (47 === e.codePointAt(r)) {
              if (t) {
                n = r;
                break;
              }
            } else t || (t = !0);
          return n < 0
            ? 47 === e.codePointAt(0)
              ? "/"
              : "."
            : 1 === n && 47 === e.codePointAt(0)
            ? "//"
            : e.slice(0, n);
        },
        extname: function (e) {
          let t;
          assertPath(e);
          let n = e.length,
            r = -1,
            i = 0,
            o = -1,
            a = 0;
          for (; n--; ) {
            let l = e.codePointAt(n);
            if (47 === l) {
              if (t) {
                i = n + 1;
                break;
              }
              continue;
            }
            r < 0 && ((t = !0), (r = n + 1)),
              46 === l
                ? o < 0
                  ? (o = n)
                  : 1 !== a && (a = 1)
                : o > -1 && (a = -1);
          }
          return o < 0 ||
            r < 0 ||
            0 === a ||
            (1 === a && o === r - 1 && o === i + 1)
            ? ""
            : e.slice(o, r);
        },
        join: function (...e) {
          let t,
            n = -1;
          for (; ++n < e.length; )
            assertPath(e[n]),
              e[n] && (t = void 0 === t ? e[n] : t + "/" + e[n]);
          return void 0 === t
            ? "."
            : (function (e) {
                assertPath(e);
                let t = 47 === e.codePointAt(0),
                  n = (function (e, t) {
                    let n,
                      r,
                      i = "",
                      o = 0,
                      a = -1,
                      l = 0,
                      s = -1;
                    for (; ++s <= e.length; ) {
                      if (s < e.length) n = e.codePointAt(s);
                      else if (47 === n) break;
                      else n = 47;
                      if (47 === n) {
                        if (a === s - 1 || 1 === l);
                        else if (a !== s - 1 && 2 === l) {
                          if (
                            i.length < 2 ||
                            2 !== o ||
                            46 !== i.codePointAt(i.length - 1) ||
                            46 !== i.codePointAt(i.length - 2)
                          ) {
                            if (i.length > 2) {
                              if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                                r < 0
                                  ? ((i = ""), (o = 0))
                                  : (o =
                                      (i = i.slice(0, r)).length -
                                      1 -
                                      i.lastIndexOf("/")),
                                  (a = s),
                                  (l = 0);
                                continue;
                              }
                            } else if (i.length > 0) {
                              (i = ""), (o = 0), (a = s), (l = 0);
                              continue;
                            }
                          }
                          t && ((i = i.length > 0 ? i + "/.." : ".."), (o = 2));
                        } else
                          i.length > 0
                            ? (i += "/" + e.slice(a + 1, s))
                            : (i = e.slice(a + 1, s)),
                            (o = s - a - 1);
                        (a = s), (l = 0);
                      } else 46 === n && l > -1 ? l++ : (l = -1);
                    }
                    return i;
                  })(e, !t);
                return (
                  0 !== n.length || t || (n = "."),
                  n.length > 0 &&
                    47 === e.codePointAt(e.length - 1) &&
                    (n += "/"),
                  t ? "/" + n : n
                );
              })(t);
        },
        sep: "/",
      };
      function assertPath(e) {
        if ("string" != typeof e)
          throw TypeError(
            "Path must be a string. Received " + JSON.stringify(e)
          );
      }
      function isUrl(e) {
        return !!(
          null !== e &&
          "object" == typeof e &&
          "href" in e &&
          e.href &&
          "protocol" in e &&
          e.protocol &&
          void 0 === e.auth
        );
      }
      let e1 = ["history", "path", "basename", "stem", "extname", "dirname"];
      let VFile = class VFile {
        constructor(e) {
          let t, n;
          (t = e
            ? isUrl(e)
              ? { path: e }
              : "string" == typeof e ||
                (e &&
                  "object" == typeof e &&
                  "byteLength" in e &&
                  "byteOffset" in e)
              ? { value: e }
              : e
            : {}),
            (this.cwd = "/"),
            (this.data = {}),
            (this.history = []),
            (this.messages = []),
            this.value,
            this.map,
            this.result,
            this.stored;
          let r = -1;
          for (; ++r < e1.length; ) {
            let e = e1[r];
            e in t &&
              void 0 !== t[e] &&
              null !== t[e] &&
              (this[e] = "history" === e ? [...t[e]] : t[e]);
          }
          for (n in t) e1.includes(n) || (this[n] = t[n]);
        }
        get basename() {
          return "string" == typeof this.path ? e0.basename(this.path) : void 0;
        }
        set basename(e) {
          assertNonEmpty(e, "basename"),
            assertPart(e, "basename"),
            (this.path = e0.join(this.dirname || "", e));
        }
        get dirname() {
          return "string" == typeof this.path ? e0.dirname(this.path) : void 0;
        }
        set dirname(e) {
          lib_assertPath(this.basename, "dirname"),
            (this.path = e0.join(e || "", this.basename));
        }
        get extname() {
          return "string" == typeof this.path ? e0.extname(this.path) : void 0;
        }
        set extname(e) {
          if (
            (assertPart(e, "extname"),
            lib_assertPath(this.dirname, "extname"),
            e)
          ) {
            if (46 !== e.codePointAt(0))
              throw Error("`extname` must start with `.`");
            if (e.includes(".", 1))
              throw Error("`extname` cannot contain multiple dots");
          }
          this.path = e0.join(this.dirname, this.stem + (e || ""));
        }
        get path() {
          return this.history[this.history.length - 1];
        }
        set path(e) {
          isUrl(e) &&
            (e = (function (e) {
              if ("string" == typeof e) e = new URL(e);
              else if (!isUrl(e)) {
                let t = TypeError(
                  'The "path" argument must be of type string or an instance of URL. Received `' +
                    e +
                    "`"
                );
                throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
              }
              if ("file:" !== e.protocol) {
                let e = TypeError("The URL must be of scheme file");
                throw ((e.code = "ERR_INVALID_URL_SCHEME"), e);
              }
              return (function (e) {
                if ("" !== e.hostname) {
                  let e = TypeError(
                    'File URL host must be "localhost" or empty on darwin'
                  );
                  throw ((e.code = "ERR_INVALID_FILE_URL_HOST"), e);
                }
                let t = e.pathname,
                  n = -1;
                for (; ++n < t.length; )
                  if (37 === t.codePointAt(n) && 50 === t.codePointAt(n + 1)) {
                    let e = t.codePointAt(n + 2);
                    if (70 === e || 102 === e) {
                      let e = TypeError(
                        "File URL path must not include encoded / characters"
                      );
                      throw ((e.code = "ERR_INVALID_FILE_URL_PATH"), e);
                    }
                  }
                return decodeURIComponent(t);
              })(e);
            })(e)),
            assertNonEmpty(e, "path"),
            this.path !== e && this.history.push(e);
        }
        get stem() {
          return "string" == typeof this.path
            ? e0.basename(this.path, this.extname)
            : void 0;
        }
        set stem(e) {
          assertNonEmpty(e, "stem"),
            assertPart(e, "stem"),
            (this.path = e0.join(this.dirname || "", e + (this.extname || "")));
        }
        fail(e, t, n) {
          let r = this.message(e, t, n);
          throw ((r.fatal = !0), r);
        }
        info(e, t, n) {
          let r = this.message(e, t, n);
          return (r.fatal = void 0), r;
        }
        message(e, t, n) {
          let r = new VFileMessage(e, t, n);
          return (
            this.path &&
              ((r.name = this.path + ":" + r.name), (r.file = this.path)),
            (r.fatal = !1),
            this.messages.push(r),
            r
          );
        }
        toString(e) {
          if (void 0 === this.value) return "";
          if ("string" == typeof this.value) return this.value;
          let t = new TextDecoder(e || void 0);
          return t.decode(this.value);
        }
      };
      function assertPart(e, t) {
        if (e && e.includes(e0.sep))
          throw Error(
            "`" + t + "` cannot be a path: did not expect `" + e0.sep + "`"
          );
      }
      function assertNonEmpty(e, t) {
        if (!e) throw Error("`" + t + "` cannot be empty");
      }
      function lib_assertPath(e, t) {
        if (!e)
          throw Error("Setting `" + t + "` requires `path` to be set too");
      }
      let CallableInstance = function (e) {
          let t = this.constructor,
            n = t.prototype,
            r = n[e],
            apply = function () {
              return r.apply(apply, arguments);
            };
          Object.setPrototypeOf(apply, n);
          let i = Object.getOwnPropertyNames(r);
          for (let e of i) {
            let t = Object.getOwnPropertyDescriptor(r, e);
            t && Object.defineProperty(apply, e, t);
          }
          return apply;
        },
        e2 = {}.hasOwnProperty;
      let Processor = class Processor extends CallableInstance {
        constructor() {
          super("copy"),
            (this.Compiler = void 0),
            (this.Parser = void 0),
            (this.attachers = []),
            (this.compiler = void 0),
            (this.freezeIndex = -1),
            (this.frozen = void 0),
            (this.namespace = {}),
            (this.parser = void 0),
            (this.transformers = (function () {
              let e = [],
                t = {
                  run: function (...t) {
                    let n = -1,
                      r = t.pop();
                    if ("function" != typeof r)
                      throw TypeError(
                        "Expected function as last argument, not " + r
                      );
                    (function next(i, ...o) {
                      let a = e[++n],
                        l = -1;
                      if (i) {
                        r(i);
                        return;
                      }
                      for (; ++l < t.length; )
                        (null === o[l] || void 0 === o[l]) && (o[l] = t[l]);
                      (t = o),
                        a
                          ? (function (e, t) {
                              let n;
                              return function (...t) {
                                let r;
                                let i = e.length > t.length;
                                i && t.push(done);
                                try {
                                  r = e.apply(this, t);
                                } catch (e) {
                                  if (i && n) throw e;
                                  return done(e);
                                }
                                i ||
                                  (r && r.then && "function" == typeof r.then
                                    ? r.then(then, done)
                                    : r instanceof Error
                                    ? done(r)
                                    : then(r));
                              };
                              function done(e, ...r) {
                                n || ((n = !0), t(e, ...r));
                              }
                              function then(e) {
                                done(null, e);
                              }
                            })(
                              a,
                              next
                            )(...o)
                          : r(null, ...o);
                    })(null, ...t);
                  },
                  use: function (n) {
                    if ("function" != typeof n)
                      throw TypeError(
                        "Expected `middelware` to be a function, not " + n
                      );
                    return e.push(n), t;
                  },
                };
              return t;
            })());
        }
        copy() {
          let e = new Processor(),
            t = -1;
          for (; ++t < this.attachers.length; ) {
            let n = this.attachers[t];
            e.use(...n);
          }
          return e.data(eJ(!0, {}, this.namespace)), e;
        }
        data(e, t) {
          return "string" == typeof e
            ? 2 == arguments.length
              ? (assertUnfrozen("data", this.frozen),
                (this.namespace[e] = t),
                this)
              : (e2.call(this.namespace, e) && this.namespace[e]) || void 0
            : e
            ? (assertUnfrozen("data", this.frozen), (this.namespace = e), this)
            : this.namespace;
        }
        freeze() {
          if (this.frozen) return this;
          for (; ++this.freezeIndex < this.attachers.length; ) {
            let [e, ...t] = this.attachers[this.freezeIndex];
            if (!1 === t[0]) continue;
            !0 === t[0] && (t[0] = void 0);
            let n = e.call(this, ...t);
            "function" == typeof n && this.transformers.use(n);
          }
          return (
            (this.frozen = !0),
            (this.freezeIndex = Number.POSITIVE_INFINITY),
            this
          );
        }
        parse(e) {
          this.freeze();
          let t = vfile(e),
            n = this.parser || this.Parser;
          return assertParser("parse", n), n(String(t), t);
        }
        process(e, t) {
          let n = this;
          return (
            this.freeze(),
            assertParser("process", this.parser || this.Parser),
            assertCompiler("process", this.compiler || this.Compiler),
            t ? executor(void 0, t) : new Promise(executor)
          );
          function executor(r, i) {
            let a = vfile(e),
              l = n.parse(a);
            function realDone(e, n) {
              e || !n
                ? i(e)
                : r
                ? r(n)
                : ((0, o.ok)(t, "`done` is defined if `resolve` is not"),
                  t(void 0, n));
            }
            n.run(l, a, function (e, t, r) {
              if (e || !t || !r) return realDone(e);
              let i = n.stringify(t, r);
              "string" == typeof i ||
              (i &&
                "object" == typeof i &&
                "byteLength" in i &&
                "byteOffset" in i)
                ? (r.value = i)
                : (r.result = i),
                realDone(e, r);
            });
          }
        }
        processSync(e) {
          let t,
            n = !1;
          return (
            this.freeze(),
            assertParser("processSync", this.parser || this.Parser),
            assertCompiler("processSync", this.compiler || this.Compiler),
            this.process(e, function (e, r) {
              (n = !0), bail(e), (t = r);
            }),
            assertDone("processSync", "process", n),
            (0, o.ok)(t, "we either bailed on an error or have a tree"),
            t
          );
        }
        run(e, t, n) {
          assertNode(e), this.freeze();
          let r = this.transformers;
          return (
            n || "function" != typeof t || ((n = t), (t = void 0)),
            n ? executor(void 0, n) : new Promise(executor)
          );
          function executor(i, a) {
            (0, o.ok)(
              "function" != typeof t,
              "`file` can’t be a `done` anymore, we checked"
            );
            let l = vfile(t);
            r.run(e, l, function (t, r, l) {
              let s = r || e;
              t
                ? a(t)
                : i
                ? i(s)
                : ((0, o.ok)(n, "`done` is defined if `resolve` is not"),
                  n(void 0, s, l));
            });
          }
        }
        runSync(e, t) {
          let n,
            r = !1;
          return (
            this.run(e, t, function (e, t) {
              bail(e), (n = t), (r = !0);
            }),
            assertDone("runSync", "run", r),
            (0, o.ok)(n, "we either bailed on an error or have a tree"),
            n
          );
        }
        stringify(e, t) {
          this.freeze();
          let n = vfile(t),
            r = this.compiler || this.Compiler;
          return assertCompiler("stringify", r), assertNode(e), r(e, n);
        }
        use(e, ...t) {
          let n = this.attachers,
            r = this.namespace;
          if ((assertUnfrozen("use", this.frozen), null == e));
          else if ("function" == typeof e) addPlugin(e, t);
          else if ("object" == typeof e)
            Array.isArray(e) ? addList(e) : addPreset(e);
          else throw TypeError("Expected usable value, not `" + e + "`");
          return this;
          function addPreset(e) {
            if (!("plugins" in e) && !("settings" in e))
              throw Error(
                "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
              );
            addList(e.plugins),
              e.settings && (r.settings = eJ(!0, r.settings, e.settings));
          }
          function addList(e) {
            let t = -1;
            if (null == e);
            else if (Array.isArray(e))
              for (; ++t < e.length; ) {
                let n = e[t];
                !(function (e) {
                  if ("function" == typeof e) addPlugin(e, []);
                  else if ("object" == typeof e) {
                    if (Array.isArray(e)) {
                      let [t, ...n] = e;
                      addPlugin(t, n);
                    } else addPreset(e);
                  } else
                    throw TypeError("Expected usable value, not `" + e + "`");
                })(n);
              }
            else throw TypeError("Expected a list of plugins, not `" + e + "`");
          }
          function addPlugin(e, t) {
            let r = -1,
              i = -1;
            for (; ++r < n.length; )
              if (n[r][0] === e) {
                i = r;
                break;
              }
            if (-1 === i) n.push([e, ...t]);
            else if (t.length > 0) {
              let [r, ...o] = t,
                a = n[i][1];
              isPlainObject(a) && isPlainObject(r) && (r = eJ(!0, a, r)),
                (n[i] = [e, r, ...o]);
            }
          }
        }
      };
      let e4 = new Processor().freeze();
      function assertParser(e, t) {
        if ("function" != typeof t)
          throw TypeError("Cannot `" + e + "` without `parser`");
      }
      function assertCompiler(e, t) {
        if ("function" != typeof t)
          throw TypeError("Cannot `" + e + "` without `compiler`");
      }
      function assertUnfrozen(e, t) {
        if (t)
          throw Error(
            "Cannot call `" +
              e +
              "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
          );
      }
      function assertNode(e) {
        if (!isPlainObject(e) || "string" != typeof e.type)
          throw TypeError("Expected node, got `" + e + "`");
      }
      function assertDone(e, t, n) {
        if (!n)
          throw Error("`" + e + "` finished async. Use `" + t + "` instead");
      }
      function vfile(e) {
        return e && "object" == typeof e && "message" in e && "messages" in e
          ? e
          : new VFile(e);
      }
      let e3 = [],
        e9 = { allowDangerousHtml: !0 },
        e5 = /^(https?|ircs?|mailto|xmpp)$/i,
        e6 = [
          { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
          {
            from: "allowDangerousHtml",
            id: "remove-buggy-html-in-markdown-parser",
          },
          {
            from: "allowNode",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "allowElement",
          },
          {
            from: "allowedTypes",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "allowedElements",
          },
          {
            from: "disallowedTypes",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "disallowedElements",
          },
          { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
          { from: "includeElementIndex", id: "#remove-includeelementindex" },
          {
            from: "includeNodeIndex",
            id: "change-includenodeindex-to-includeelementindex",
          },
          { from: "linkTarget", id: "remove-linktarget" },
          {
            from: "plugins",
            id: "change-plugins-to-remarkplugins",
            to: "remarkPlugins",
          },
          { from: "rawSourcePos", id: "#remove-rawsourcepos" },
          {
            from: "renderers",
            id: "change-renderers-to-components",
            to: "components",
          },
          { from: "source", id: "change-source-to-children", to: "children" },
          { from: "sourcePos", id: "#remove-sourcepos" },
          {
            from: "transformImageUri",
            id: "#add-urltransform",
            to: "urlTransform",
          },
          {
            from: "transformLinkUri",
            id: "#add-urltransform",
            to: "urlTransform",
          },
        ];
      function Markdown(e) {
        let t = e.allowedElements,
          n = e.allowElement,
          r = e.children || "",
          i = e.className,
          a = e.components,
          l = e.disallowedElements,
          s = e.rehypePlugins || e3,
          u = e.remarkPlugins || e3,
          c = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...e9 } : e9,
          f = e.skipHtml,
          p = e.unwrapDisallowed,
          d = e.urlTransform || defaultUrlTransform,
          h = e4().use(remarkParse).use(u).use(remarkRehype, c).use(s),
          m = new VFile();
        for (let n of ("string" == typeof r
          ? (m.value = r)
          : (0, o.t1)(
              "Unexpected value `" +
                r +
                "` for `children` prop, expected `string`"
            ),
        t &&
          l &&
          (0, o.t1)(
            "Unexpected combined `allowedElements` and `disallowedElements`, expected one or the other"
          ),
        e6))
          Object.hasOwn(e, n.from) &&
            (0, o.t1)(
              "Unexpected `" +
                n.from +
                "` prop, " +
                (n.to ? "use `" + n.to + "` instead" : "remove it") +
                " (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#" +
                n.id +
                "> for more info)"
            );
        let g = h.parse(m),
          y = h.runSync(g, m);
        return (
          i &&
            (y = {
              type: "element",
              tagName: "div",
              properties: { className: i },
              children: "root" === y.type ? y.children : [y],
            }),
          (0, eY.Vn)(y, function (e, r, i) {
            if ("raw" === e.type && i && "number" == typeof r)
              return (
                f
                  ? i.children.splice(r, 1)
                  : (i.children[r] = { type: "text", value: e.value }),
                r
              );
            if ("element" === e.type) {
              let t;
              for (t in H)
                if (Object.hasOwn(H, t) && Object.hasOwn(e.properties, t)) {
                  let n = e.properties[t],
                    r = H[t];
                  (null === r || r.includes(e.tagName)) &&
                    (e.properties[t] = d(String(n || ""), t, e));
                }
            }
            if ("element" === e.type) {
              let o = t ? !t.includes(e.tagName) : !!l && l.includes(e.tagName);
              if (
                (!o && n && "number" == typeof r && (o = !n(e, r, i)),
                o && i && "number" == typeof r)
              )
                return (
                  p && e.children
                    ? i.children.splice(r, 1, ...e.children)
                    : i.children.splice(r, 1),
                  r
                );
            }
          }),
          (function (e, t) {
            var n, r, i;
            let o;
            if (!t || void 0 === t.Fragment)
              throw TypeError("Expected `Fragment` in options");
            let a = t.filePath || void 0;
            if (t.development) {
              if ("function" != typeof t.jsxDEV)
                throw TypeError(
                  "Expected `jsxDEV` in options when `development: true`"
                );
              (n = t.jsxDEV),
                (o = function (e, t, r, i) {
                  let o = Array.isArray(r.children),
                    l = (0, L.Pk)(e);
                  return n(
                    t,
                    r,
                    i,
                    o,
                    {
                      columnNumber: l ? l.column - 1 : void 0,
                      fileName: a,
                      lineNumber: l ? l.line : void 0,
                    },
                    void 0
                  );
                });
            } else {
              if ("function" != typeof t.jsx)
                throw TypeError("Expected `jsx` in production options");
              if ("function" != typeof t.jsxs)
                throw TypeError("Expected `jsxs` in production options");
              (r = t.jsx),
                (i = t.jsxs),
                (o = function (e, t, n, o) {
                  let a = Array.isArray(n.children),
                    l = a ? i : r;
                  return o ? l(t, n, o) : l(t, n);
                });
            }
            let l = {
                Fragment: t.Fragment,
                ancestors: [],
                components: t.components || {},
                create: o,
                elementAttributeNameCase: t.elementAttributeNameCase || "react",
                evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
                filePath: a,
                ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
                passKeys: !1 !== t.passKeys,
                passNode: t.passNode || !1,
                schema: "svg" === t.space ? P : E,
                stylePropertyNameCase: t.stylePropertyNameCase || "dom",
                tableCellAlignToStyle: !1 !== t.tableCellAlignToStyle,
              },
              s = one(l, e, void 0);
            return s && "string" != typeof s
              ? s
              : l.create(e, l.Fragment, { children: s || void 0 }, void 0);
          })(y, {
            Fragment: V.Fragment,
            components: a,
            ignoreInvalidStyle: !0,
            jsx: V.jsx,
            jsxs: V.jsxs,
            passKeys: !0,
            passNode: !0,
          })
        );
      }
      function defaultUrlTransform(e) {
        let t = e.indexOf(":"),
          n = e.indexOf("?"),
          r = e.indexOf("#"),
          i = e.indexOf("/");
        return t < 0 ||
          (i > -1 && t > i) ||
          (n > -1 && t > n) ||
          (r > -1 && t > r) ||
          e5.test(e.slice(0, t))
          ? e
          : "";
      }
    },
    40104: function (e, t, n) {
      "use strict";
      function ccount(e, t) {
        let n = String(e);
        if ("string" != typeof t) throw TypeError("Expected character");
        let r = 0,
          i = n.indexOf(t);
        for (; -1 !== i; ) r++, (i = n.indexOf(t, i + t.length));
        return r;
      }
      n.d(t, {
        Z: function () {
          return remarkGfm;
        },
      });
      var r = n(24345),
        i = n(15459),
        o = n(88718),
        a = n(96093);
      let l = "phrasing",
        s = ["autolink", "link", "image", "label"];
      function enterLiteralAutolink(e) {
        this.enter({ type: "link", title: null, url: "", children: [] }, e);
      }
      function enterLiteralAutolinkValue(e) {
        this.config.enter.autolinkProtocol.call(this, e);
      }
      function exitLiteralAutolinkHttp(e) {
        this.config.exit.autolinkProtocol.call(this, e);
      }
      function exitLiteralAutolinkWww(e) {
        this.config.exit.data.call(this, e);
        let t = this.stack[this.stack.length - 1];
        (0, r.ok)("link" === t.type),
          (t.url = "http://" + this.sliceSerialize(e));
      }
      function exitLiteralAutolinkEmail(e) {
        this.config.exit.autolinkEmail.call(this, e);
      }
      function exitLiteralAutolink(e) {
        this.exit(e);
      }
      function transformGfmAutolinkLiterals(e) {
        !(function (e, t, n) {
          let r = (0, a.O)((n || {}).ignore || []),
            i = (function (e) {
              let t = [];
              if (!Array.isArray(e))
                throw TypeError(
                  "Expected find and replace tuple or list of tuples"
                );
              let n = !e[0] || Array.isArray(e[0]) ? e : [e],
                r = -1;
              for (; ++r < n.length; ) {
                var i;
                let e = n[r];
                t.push([
                  "string" == typeof (i = e[0])
                    ? RegExp(
                        (function (e) {
                          if ("string" != typeof e)
                            throw TypeError("Expected a string");
                          return e
                            .replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
                            .replace(/-/g, "\\x2d");
                        })(i),
                        "g"
                      )
                    : i,
                  (function (e) {
                    return "function" == typeof e
                      ? e
                      : function () {
                          return e;
                        };
                  })(e[1]),
                ]);
              }
              return t;
            })(t),
            l = -1;
          for (; ++l < i.length; ) (0, o.S4)(e, "text", visitor);
          function visitor(e, t) {
            let n,
              o = -1;
            for (; ++o < t.length; ) {
              let e = t[o],
                i = n ? n.children : void 0;
              if (r(e, i ? i.indexOf(e) : void 0, n)) return;
              n = e;
            }
            if (n)
              return (function (e, t) {
                let n = t[t.length - 1],
                  r = i[l][0],
                  o = i[l][1],
                  a = 0,
                  s = n.children,
                  u = s.indexOf(e),
                  c = !1,
                  f = [];
                r.lastIndex = 0;
                let p = r.exec(e.value);
                for (; p; ) {
                  let n = p.index,
                    i = { index: p.index, input: p.input, stack: [...t, e] },
                    l = o(...p, i);
                  if (
                    ("string" == typeof l &&
                      (l = l.length > 0 ? { type: "text", value: l } : void 0),
                    !1 === l
                      ? (r.lastIndex = n + 1)
                      : (a !== n &&
                          f.push({ type: "text", value: e.value.slice(a, n) }),
                        Array.isArray(l) ? f.push(...l) : l && f.push(l),
                        (a = n + p[0].length),
                        (c = !0)),
                    !r.global)
                  )
                    break;
                  p = r.exec(e.value);
                }
                return (
                  c
                    ? (a < e.value.length &&
                        f.push({ type: "text", value: e.value.slice(a) }),
                      n.children.splice(u, 1, ...f))
                    : (f = [e]),
                  u + f.length
                );
              })(e, t);
          }
        })(
          e,
          [
            [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, findUrl],
            [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, findEmail],
          ],
          { ignore: ["link", "linkReference"] }
        );
      }
      function findUrl(e, t, n, r, i) {
        let o = "";
        if (
          !previous(i) ||
          (/^w/i.test(t) && ((n = t + n), (t = ""), (o = "http://")),
          !(function (e) {
            let t = e.split(".");
            return !(
              t.length < 2 ||
              (t[t.length - 1] &&
                (/_/.test(t[t.length - 1]) ||
                  !/[a-zA-Z\d]/.test(t[t.length - 1]))) ||
              (t[t.length - 2] &&
                (/_/.test(t[t.length - 2]) ||
                  !/[a-zA-Z\d]/.test(t[t.length - 2])))
            );
          })(n))
        )
          return !1;
        let a = (function (e) {
          let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
          if (!t) return [e, void 0];
          e = e.slice(0, t.index);
          let n = t[0],
            r = n.indexOf(")"),
            i = ccount(e, "("),
            o = ccount(e, ")");
          for (; -1 !== r && i > o; )
            (e += n.slice(0, r + 1)),
              (r = (n = n.slice(r + 1)).indexOf(")")),
              o++;
          return [e, n];
        })(n + r);
        if (!a[0]) return !1;
        let l = {
          type: "link",
          title: null,
          url: o + t + a[0],
          children: [{ type: "text", value: t + a[0] }],
        };
        return a[1] ? [l, { type: "text", value: a[1] }] : l;
      }
      function findEmail(e, t, n, r) {
        return (
          !(!previous(r, !0) || /[-\d_]$/.test(n)) && {
            type: "link",
            title: null,
            url: "mailto:" + t + "@" + n,
            children: [{ type: "text", value: t + "@" + n }],
          }
        );
      }
      function previous(e, t) {
        let n = e.input.charCodeAt(e.index - 1);
        return (
          (0 === e.index || (0, i.B8)(n) || (0, i.Xh)(n)) && (!t || 47 !== n)
        );
      }
      var u = n(11098);
      function enterFootnoteDefinition(e) {
        this.enter(
          {
            type: "footnoteDefinition",
            identifier: "",
            label: "",
            children: [],
          },
          e
        );
      }
      function enterFootnoteDefinitionLabelString() {
        this.buffer();
      }
      function exitFootnoteDefinitionLabelString(e) {
        let t = this.resume(),
          n = this.stack[this.stack.length - 1];
        (0, r.ok)("footnoteDefinition" === n.type),
          (n.label = t),
          (n.identifier = (0, u.d)(this.sliceSerialize(e)).toLowerCase());
      }
      function exitFootnoteDefinition(e) {
        this.exit(e);
      }
      function enterFootnoteCall(e) {
        this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
      }
      function enterFootnoteCallString() {
        this.buffer();
      }
      function exitFootnoteCallString(e) {
        let t = this.resume(),
          n = this.stack[this.stack.length - 1];
        (0, r.ok)("footnoteReference" === n.type),
          (n.label = t),
          (n.identifier = (0, u.d)(this.sliceSerialize(e)).toLowerCase());
      }
      function exitFootnoteCall(e) {
        this.exit(e);
      }
      function footnoteReference(e, t, n, r) {
        let i = n.createTracker(r),
          o = i.move("[^"),
          a = n.enter("footnoteReference"),
          l = n.enter("reference");
        return (
          (o += i.move(
            n.safe(n.associationId(e), {
              ...i.current(),
              before: o,
              after: "]",
            })
          )),
          l(),
          a(),
          (o += i.move("]"))
        );
      }
      function footnoteDefinition(e, t, n, r) {
        let i = n.createTracker(r),
          o = i.move("[^"),
          a = n.enter("footnoteDefinition"),
          l = n.enter("label");
        return (
          (o += i.move(
            n.safe(n.associationId(e), {
              ...i.current(),
              before: o,
              after: "]",
            })
          )),
          l(),
          (o += i.move(
            "]:" + (e.children && e.children.length > 0 ? " " : "")
          )),
          i.shift(4),
          (o += i.move(n.indentLines(n.containerFlow(e, i.current()), map))),
          a(),
          o
        );
      }
      function map(e, t, n) {
        return 0 === t ? e : (n ? "" : "    ") + e;
      }
      footnoteReference.peek = function () {
        return "[";
      };
      let c = [
        "autolink",
        "destinationLiteral",
        "destinationRaw",
        "reference",
        "titleQuote",
        "titleApostrophe",
      ];
      function enterStrikethrough(e) {
        this.enter({ type: "delete", children: [] }, e);
      }
      function exitStrikethrough(e) {
        this.exit(e);
      }
      function handleDelete(e, t, n, r) {
        let i = n.createTracker(r),
          o = n.enter("strikethrough"),
          a = i.move("~~");
        return (
          (a +=
            n.containerPhrasing(e, { ...i.current(), before: a, after: "~" }) +
            i.move("~~")),
          o(),
          a
        );
      }
      handleDelete.peek = function () {
        return "~";
      };
      var f = n(80235),
        p = n(34598);
      function exitCheck(e) {
        let t = this.stack[this.stack.length - 2];
        (0, r.ok)("listItem" === t.type),
          (t.checked = "taskListCheckValueChecked" === e.type);
      }
      function exitParagraphWithTaskListItem(e) {
        let t = this.stack[this.stack.length - 2];
        if (t && "listItem" === t.type && "boolean" == typeof t.checked) {
          let e = this.stack[this.stack.length - 1];
          (0, r.ok)("paragraph" === e.type);
          let n = e.children[0];
          if (n && "text" === n.type) {
            let r;
            let i = t.children,
              o = -1;
            for (; ++o < i.length; ) {
              let e = i[o];
              if ("paragraph" === e.type) {
                r = e;
                break;
              }
            }
            r === e &&
              ((n.value = n.value.slice(1)),
              0 === n.value.length
                ? e.children.shift()
                : e.position &&
                  n.position &&
                  "number" == typeof n.position.start.offset &&
                  (n.position.start.column++,
                  n.position.start.offset++,
                  (e.position.start = Object.assign({}, n.position.start))));
          }
        }
        this.exit(e);
      }
      function listItemWithTaskListItem(e, t, n, r) {
        let i = e.children[0],
          o = "boolean" == typeof e.checked && i && "paragraph" === i.type,
          a = "[" + (e.checked ? "x" : " ") + "] ",
          l = n.createTracker(r);
        o && l.move(a);
        let s = p.p.listItem(e, t, n, { ...r, ...l.current() });
        return (
          o &&
            (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, function (e) {
              return e + a;
            })),
          s
        );
      }
      var d = n(4663);
      let h = {
          tokenize: function (e, t, n) {
            let r = 0;
            return function wwwPrefixInside(t) {
              return (87 === t || 119 === t) && r < 3
                ? (r++, e.consume(t), wwwPrefixInside)
                : 46 === t && 3 === r
                ? (e.consume(t), wwwPrefixAfter)
                : n(t);
            };
            function wwwPrefixAfter(e) {
              return null === e ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        m = {
          tokenize: function (e, t, n) {
            let r, o, a;
            return domainInside;
            function domainInside(t) {
              return 46 === t || 95 === t
                ? e.check(y, domainAfter, domainAtPunctuation)(t)
                : null === t ||
                  (0, i.z3)(t) ||
                  (0, i.B8)(t) ||
                  (45 !== t && (0, i.Xh)(t))
                ? domainAfter(t)
                : ((a = !0), e.consume(t), domainInside);
            }
            function domainAtPunctuation(t) {
              return (
                95 === t ? (r = !0) : ((o = r), (r = void 0)),
                e.consume(t),
                domainInside
              );
            }
            function domainAfter(e) {
              return o || r || !a ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        g = {
          tokenize: function (e, t) {
            let n = 0,
              r = 0;
            return pathInside;
            function pathInside(o) {
              return 40 === o
                ? (n++, e.consume(o), pathInside)
                : 41 === o && r < n
                ? pathAtPunctuation(o)
                : 33 === o ||
                  34 === o ||
                  38 === o ||
                  39 === o ||
                  41 === o ||
                  42 === o ||
                  44 === o ||
                  46 === o ||
                  58 === o ||
                  59 === o ||
                  60 === o ||
                  63 === o ||
                  93 === o ||
                  95 === o ||
                  126 === o
                ? e.check(y, t, pathAtPunctuation)(o)
                : null === o || (0, i.z3)(o) || (0, i.B8)(o)
                ? t(o)
                : (e.consume(o), pathInside);
            }
            function pathAtPunctuation(t) {
              return 41 === t && r++, e.consume(t), pathInside;
            }
          },
          partial: !0,
        },
        y = {
          tokenize: function (e, t, n) {
            return trail;
            function trail(r) {
              return 33 === r ||
                34 === r ||
                39 === r ||
                41 === r ||
                42 === r ||
                44 === r ||
                46 === r ||
                58 === r ||
                59 === r ||
                63 === r ||
                95 === r ||
                126 === r
                ? (e.consume(r), trail)
                : 38 === r
                ? (e.consume(r), trailCharRefStart)
                : 93 === r
                ? (e.consume(r), trailBracketAfter)
                : 60 === r || null === r || (0, i.z3)(r) || (0, i.B8)(r)
                ? t(r)
                : n(r);
            }
            function trailBracketAfter(e) {
              return null === e ||
                40 === e ||
                91 === e ||
                (0, i.z3)(e) ||
                (0, i.B8)(e)
                ? t(e)
                : trail(e);
            }
            function trailCharRefStart(t) {
              return (0, i.jv)(t)
                ? (function trailCharRefInside(t) {
                    return 59 === t
                      ? (e.consume(t), trail)
                      : (0, i.jv)(t)
                      ? (e.consume(t), trailCharRefInside)
                      : n(t);
                  })(t)
                : n(t);
            }
          },
          partial: !0,
        },
        b = {
          tokenize: function (e, t, n) {
            return function (t) {
              return e.consume(t), after;
            };
            function after(e) {
              return (0, i.H$)(e) ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        k = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (87 !== t && 119 !== t) ||
                !previousWww.call(r, r.previous) ||
                previousUnbalanced(r.events)
                ? n(t)
                : (e.enter("literalAutolink"),
                  e.enter("literalAutolinkWww"),
                  e.check(h, e.attempt(m, e.attempt(g, wwwAfter), n), n)(t));
            };
            function wwwAfter(n) {
              return (
                e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n)
              );
            }
          },
          previous: previousWww,
        },
        _ = {
          tokenize: function (e, t, n) {
            let r = this,
              o = "",
              a = !1;
            return function (t) {
              return (72 === t || 104 === t) &&
                previousProtocol.call(r, r.previous) &&
                !previousUnbalanced(r.events)
                ? (e.enter("literalAutolink"),
                  e.enter("literalAutolinkHttp"),
                  (o += String.fromCodePoint(t)),
                  e.consume(t),
                  protocolPrefixInside)
                : n(t);
            };
            function protocolPrefixInside(t) {
              if ((0, i.jv)(t) && o.length < 5)
                return (
                  (o += String.fromCodePoint(t)),
                  e.consume(t),
                  protocolPrefixInside
                );
              if (58 === t) {
                let n = o.toLowerCase();
                if ("http" === n || "https" === n)
                  return e.consume(t), protocolSlashesInside;
              }
              return n(t);
            }
            function protocolSlashesInside(t) {
              return 47 === t
                ? (e.consume(t), a)
                  ? afterProtocol
                  : ((a = !0), protocolSlashesInside)
                : n(t);
            }
            function afterProtocol(t) {
              return null === t ||
                (0, i.Av)(t) ||
                (0, i.z3)(t) ||
                (0, i.B8)(t) ||
                (0, i.Xh)(t)
                ? n(t)
                : e.attempt(m, e.attempt(g, protocolAfter), n)(t);
            }
            function protocolAfter(n) {
              return (
                e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n)
              );
            }
          },
          previous: previousProtocol,
        },
        v = {
          tokenize: function (e, t, n) {
            let r, o;
            let a = this;
            return function (t) {
              return !gfmAtext(t) ||
                !previousEmail.call(a, a.previous) ||
                previousUnbalanced(a.events)
                ? n(t)
                : (e.enter("literalAutolink"),
                  e.enter("literalAutolinkEmail"),
                  (function atext(t) {
                    return gfmAtext(t)
                      ? (e.consume(t), atext)
                      : 64 === t
                      ? (e.consume(t), emailDomain)
                      : n(t);
                  })(t));
            };
            function emailDomain(t) {
              return 46 === t
                ? e.check(b, emailDomainAfter, emailDomainDot)(t)
                : 45 === t || 95 === t || (0, i.H$)(t)
                ? ((o = !0), e.consume(t), emailDomain)
                : emailDomainAfter(t);
            }
            function emailDomainDot(t) {
              return e.consume(t), (r = !0), emailDomain;
            }
            function emailDomainAfter(l) {
              return o && r && (0, i.jv)(a.previous)
                ? (e.exit("literalAutolinkEmail"),
                  e.exit("literalAutolink"),
                  t(l))
                : n(l);
            }
          },
          previous: previousEmail,
        },
        x = {},
        w = 48;
      for (; w < 123; ) (x[w] = v), 58 == ++w ? (w = 65) : 91 === w && (w = 97);
      function previousWww(e) {
        return (
          null === e ||
          40 === e ||
          42 === e ||
          95 === e ||
          91 === e ||
          93 === e ||
          126 === e ||
          (0, i.z3)(e)
        );
      }
      function previousProtocol(e) {
        return !(0, i.jv)(e);
      }
      function previousEmail(e) {
        return !(47 === e || gfmAtext(e));
      }
      function gfmAtext(e) {
        return 43 === e || 45 === e || 46 === e || 95 === e || (0, i.H$)(e);
      }
      function previousUnbalanced(e) {
        let t = e.length,
          n = !1;
        for (; t--; ) {
          let r = e[t][1];
          if (
            ("labelLink" === r.type || "labelImage" === r.type) &&
            !r._balanced
          ) {
            n = !0;
            break;
          }
          if (r._gfmAutolinkLiteralWalkedInto) {
            n = !1;
            break;
          }
        }
        return (
          e.length > 0 &&
            !n &&
            (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0),
          n
        );
      }
      (x[43] = v),
        (x[45] = v),
        (x[46] = v),
        (x[95] = v),
        (x[72] = [v, _]),
        (x[104] = [v, _]),
        (x[87] = [v, k]),
        (x[119] = [v, k]);
      var C = n(23402),
        S = n(42761);
      let E = {
        tokenize: function (e, t, n) {
          let r = this;
          return (0, S.f)(
            e,
            function (e) {
              let i = r.events[r.events.length - 1];
              return i &&
                "gfmFootnoteDefinitionIndent" === i[1].type &&
                4 === i[2].sliceSerialize(i[1], !0).length
                ? t(e)
                : n(e);
            },
            "gfmFootnoteDefinitionIndent",
            5
          );
        },
        partial: !0,
      };
      function tokenizePotentialGfmFootnoteCall(e, t, n) {
        let r;
        let i = this,
          o = i.events.length,
          a = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []);
        for (; o--; ) {
          let e = i.events[o][1];
          if ("labelImage" === e.type) {
            r = e;
            break;
          }
          if (
            "gfmFootnoteCall" === e.type ||
            "labelLink" === e.type ||
            "label" === e.type ||
            "image" === e.type ||
            "link" === e.type
          )
            break;
        }
        return function (o) {
          if (!r || !r._balanced) return n(o);
          let l = (0, u.d)(i.sliceSerialize({ start: r.end, end: i.now() }));
          return 94 === l.codePointAt(0) && a.includes(l.slice(1))
            ? (e.enter("gfmFootnoteCallLabelMarker"),
              e.consume(o),
              e.exit("gfmFootnoteCallLabelMarker"),
              t(o))
            : n(o);
        };
      }
      function resolveToPotentialGfmFootnoteCall(e, t) {
        let n = e.length;
        for (; n--; )
          if ("labelImage" === e[n][1].type && "enter" === e[n][0]) {
            e[n][1];
            break;
          }
        (e[n + 1][1].type = "data"),
          (e[n + 3][1].type = "gfmFootnoteCallLabelMarker");
        let r = {
            type: "gfmFootnoteCall",
            start: Object.assign({}, e[n + 3][1].start),
            end: Object.assign({}, e[e.length - 1][1].end),
          },
          i = {
            type: "gfmFootnoteCallMarker",
            start: Object.assign({}, e[n + 3][1].end),
            end: Object.assign({}, e[n + 3][1].end),
          };
        i.end.column++, i.end.offset++, i.end._bufferIndex++;
        let o = {
            type: "gfmFootnoteCallString",
            start: Object.assign({}, i.end),
            end: Object.assign({}, e[e.length - 1][1].start),
          },
          a = {
            type: "chunkString",
            contentType: "string",
            start: Object.assign({}, o.start),
            end: Object.assign({}, o.end),
          },
          l = [
            e[n + 1],
            e[n + 2],
            ["enter", r, t],
            e[n + 3],
            e[n + 4],
            ["enter", i, t],
            ["exit", i, t],
            ["enter", o, t],
            ["enter", a, t],
            ["exit", a, t],
            ["exit", o, t],
            e[e.length - 2],
            e[e.length - 1],
            ["exit", r, t],
          ];
        return e.splice(n, e.length - n + 1, ...l), e;
      }
      function tokenizeGfmFootnoteCall(e, t, n) {
        let r;
        let o = this,
          a = o.parser.gfmFootnotes || (o.parser.gfmFootnotes = []),
          l = 0;
        return function (t) {
          return (
            e.enter("gfmFootnoteCall"),
            e.enter("gfmFootnoteCallLabelMarker"),
            e.consume(t),
            e.exit("gfmFootnoteCallLabelMarker"),
            callStart
          );
        };
        function callStart(t) {
          return 94 !== t
            ? n(t)
            : (e.enter("gfmFootnoteCallMarker"),
              e.consume(t),
              e.exit("gfmFootnoteCallMarker"),
              e.enter("gfmFootnoteCallString"),
              (e.enter("chunkString").contentType = "string"),
              callData);
        }
        function callData(s) {
          if (
            l > 999 ||
            (93 === s && !r) ||
            null === s ||
            91 === s ||
            (0, i.z3)(s)
          )
            return n(s);
          if (93 === s) {
            e.exit("chunkString");
            let r = e.exit("gfmFootnoteCallString");
            return a.includes((0, u.d)(o.sliceSerialize(r)))
              ? (e.enter("gfmFootnoteCallLabelMarker"),
                e.consume(s),
                e.exit("gfmFootnoteCallLabelMarker"),
                e.exit("gfmFootnoteCall"),
                t)
              : n(s);
          }
          return (
            (0, i.z3)(s) || (r = !0),
            l++,
            e.consume(s),
            92 === s ? callEscape : callData
          );
        }
        function callEscape(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), l++, callData)
            : callData(t);
        }
      }
      function tokenizeDefinitionStart(e, t, n) {
        let r, o;
        let a = this,
          l = a.parser.gfmFootnotes || (a.parser.gfmFootnotes = []),
          s = 0;
        return function (t) {
          return (
            (e.enter("gfmFootnoteDefinition")._container = !0),
            e.enter("gfmFootnoteDefinitionLabel"),
            e.enter("gfmFootnoteDefinitionLabelMarker"),
            e.consume(t),
            e.exit("gfmFootnoteDefinitionLabelMarker"),
            labelAtMarker
          );
        };
        function labelAtMarker(t) {
          return 94 === t
            ? (e.enter("gfmFootnoteDefinitionMarker"),
              e.consume(t),
              e.exit("gfmFootnoteDefinitionMarker"),
              e.enter("gfmFootnoteDefinitionLabelString"),
              (e.enter("chunkString").contentType = "string"),
              labelInside)
            : n(t);
        }
        function labelInside(t) {
          if (
            s > 999 ||
            (93 === t && !o) ||
            null === t ||
            91 === t ||
            (0, i.z3)(t)
          )
            return n(t);
          if (93 === t) {
            e.exit("chunkString");
            let n = e.exit("gfmFootnoteDefinitionLabelString");
            return (
              (r = (0, u.d)(a.sliceSerialize(n))),
              e.enter("gfmFootnoteDefinitionLabelMarker"),
              e.consume(t),
              e.exit("gfmFootnoteDefinitionLabelMarker"),
              e.exit("gfmFootnoteDefinitionLabel"),
              labelAfter
            );
          }
          return (
            (0, i.z3)(t) || (o = !0),
            s++,
            e.consume(t),
            92 === t ? labelEscape : labelInside
          );
        }
        function labelEscape(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), s++, labelInside)
            : labelInside(t);
        }
        function labelAfter(t) {
          return 58 === t
            ? (e.enter("definitionMarker"),
              e.consume(t),
              e.exit("definitionMarker"),
              l.includes(r) || l.push(r),
              (0, S.f)(e, whitespaceAfter, "gfmFootnoteDefinitionWhitespace"))
            : n(t);
        }
        function whitespaceAfter(e) {
          return t(e);
        }
      }
      function tokenizeDefinitionContinuation(e, t, n) {
        return e.check(C.w, t, e.attempt(E, t, n));
      }
      function gfmFootnoteDefinitionEnd(e) {
        e.exit("gfmFootnoteDefinition");
      }
      var P = n(21905),
        A = n(62987),
        O = n(63233);
      let EditMap = class EditMap {
        constructor() {
          this.map = [];
        }
        add(e, t, n) {
          !(function (e, t, n, r) {
            let i = 0;
            if (0 !== n || 0 !== r.length) {
              for (; i < e.map.length; ) {
                if (e.map[i][0] === t) {
                  (e.map[i][1] += n), e.map[i][2].push(...r);
                  return;
                }
                i += 1;
              }
              e.map.push([t, n, r]);
            }
          })(this, e, t, n);
        }
        consume(e) {
          if (
            (this.map.sort(function (e, t) {
              return e[0] - t[0];
            }),
            0 === this.map.length)
          )
            return;
          let t = this.map.length,
            n = [];
          for (; t > 0; )
            (t -= 1),
              n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]),
              (e.length = this.map[t][0]);
          n.push([...e]), (e.length = 0);
          let r = n.pop();
          for (; r; ) e.push(...r), (r = n.pop());
          this.map.length = 0;
        }
      };
      function tokenizeTable(e, t, n) {
        let r;
        let o = this,
          a = 0,
          l = 0;
        return function (e) {
          let t = o.events.length - 1;
          for (; t > -1; ) {
            let e = o.events[t][1].type;
            if ("lineEnding" === e || "linePrefix" === e) t--;
            else break;
          }
          let r = t > -1 ? o.events[t][1].type : null,
            i =
              "tableHead" === r || "tableRow" === r
                ? bodyRowStart
                : headRowBefore;
          return i === bodyRowStart && o.parser.lazy[o.now().line]
            ? n(e)
            : i(e);
        };
        function headRowBefore(t) {
          return (
            e.enter("tableHead"),
            e.enter("tableRow"),
            124 === t || ((r = !0), (l += 1)),
            headRowBreak(t)
          );
        }
        function headRowBreak(t) {
          return null === t
            ? n(t)
            : (0, i.Ch)(t)
            ? l > 1
              ? ((l = 0),
                (o.interrupt = !0),
                e.exit("tableRow"),
                e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                headDelimiterStart)
              : n(t)
            : (0, i.xz)(t)
            ? (0, S.f)(e, headRowBreak, "whitespace")(t)
            : ((l += 1), r && ((r = !1), (a += 1)), 124 === t)
            ? (e.enter("tableCellDivider"),
              e.consume(t),
              e.exit("tableCellDivider"),
              (r = !0),
              headRowBreak)
            : (e.enter("data"), headRowData(t));
        }
        function headRowData(t) {
          return null === t || 124 === t || (0, i.z3)(t)
            ? (e.exit("data"), headRowBreak(t))
            : (e.consume(t), 92 === t ? headRowEscape : headRowData);
        }
        function headRowEscape(t) {
          return 92 === t || 124 === t
            ? (e.consume(t), headRowData)
            : headRowData(t);
        }
        function headDelimiterStart(t) {
          return ((o.interrupt = !1), o.parser.lazy[o.now().line])
            ? n(t)
            : (e.enter("tableDelimiterRow"), (r = !1), (0, i.xz)(t))
            ? (0, S.f)(
                e,
                headDelimiterBefore,
                "linePrefix",
                o.parser.constructs.disable.null.includes("codeIndented")
                  ? void 0
                  : 4
              )(t)
            : headDelimiterBefore(t);
        }
        function headDelimiterBefore(t) {
          return 45 === t || 58 === t
            ? headDelimiterValueBefore(t)
            : 124 === t
            ? ((r = !0),
              e.enter("tableCellDivider"),
              e.consume(t),
              e.exit("tableCellDivider"),
              headDelimiterCellBefore)
            : n(t);
        }
        function headDelimiterCellBefore(t) {
          return (0, i.xz)(t)
            ? (0, S.f)(e, headDelimiterValueBefore, "whitespace")(t)
            : headDelimiterValueBefore(t);
        }
        function headDelimiterValueBefore(t) {
          return 58 === t
            ? ((l += 1),
              (r = !0),
              e.enter("tableDelimiterMarker"),
              e.consume(t),
              e.exit("tableDelimiterMarker"),
              headDelimiterLeftAlignmentAfter)
            : 45 === t
            ? ((l += 1), headDelimiterLeftAlignmentAfter(t))
            : null === t || (0, i.Ch)(t)
            ? headDelimiterCellAfter(t)
            : n(t);
        }
        function headDelimiterLeftAlignmentAfter(t) {
          return 45 === t
            ? (e.enter("tableDelimiterFiller"),
              (function headDelimiterFiller(t) {
                return 45 === t
                  ? (e.consume(t), headDelimiterFiller)
                  : 58 === t
                  ? ((r = !0),
                    e.exit("tableDelimiterFiller"),
                    e.enter("tableDelimiterMarker"),
                    e.consume(t),
                    e.exit("tableDelimiterMarker"),
                    headDelimiterRightAlignmentAfter)
                  : (e.exit("tableDelimiterFiller"),
                    headDelimiterRightAlignmentAfter(t));
              })(t))
            : n(t);
        }
        function headDelimiterRightAlignmentAfter(t) {
          return (0, i.xz)(t)
            ? (0, S.f)(e, headDelimiterCellAfter, "whitespace")(t)
            : headDelimiterCellAfter(t);
        }
        function headDelimiterCellAfter(o) {
          return 124 === o
            ? headDelimiterBefore(o)
            : null === o || (0, i.Ch)(o)
            ? r && a === l
              ? (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(o))
              : n(o)
            : n(o);
        }
        function bodyRowStart(t) {
          return e.enter("tableRow"), bodyRowBreak(t);
        }
        function bodyRowBreak(n) {
          return 124 === n
            ? (e.enter("tableCellDivider"),
              e.consume(n),
              e.exit("tableCellDivider"),
              bodyRowBreak)
            : null === n || (0, i.Ch)(n)
            ? (e.exit("tableRow"), t(n))
            : (0, i.xz)(n)
            ? (0, S.f)(e, bodyRowBreak, "whitespace")(n)
            : (e.enter("data"), bodyRowData(n));
        }
        function bodyRowData(t) {
          return null === t || 124 === t || (0, i.z3)(t)
            ? (e.exit("data"), bodyRowBreak(t))
            : (e.consume(t), 92 === t ? bodyRowEscape : bodyRowData);
        }
        function bodyRowEscape(t) {
          return 92 === t || 124 === t
            ? (e.consume(t), bodyRowData)
            : bodyRowData(t);
        }
      }
      function resolveTable(e, t) {
        let n,
          r,
          i,
          o = -1,
          a = !0,
          l = 0,
          s = [0, 0, 0, 0],
          u = [0, 0, 0, 0],
          c = !1,
          f = 0,
          p = new EditMap();
        for (; ++o < e.length; ) {
          let d = e[o],
            h = d[1];
          "enter" === d[0]
            ? "tableHead" === h.type
              ? ((c = !1),
                0 !== f &&
                  (flushTableEnd(p, t, f, n, r), (r = void 0), (f = 0)),
                (n = {
                  type: "table",
                  start: Object.assign({}, h.start),
                  end: Object.assign({}, h.end),
                }),
                p.add(o, 0, [["enter", n, t]]))
              : "tableRow" === h.type || "tableDelimiterRow" === h.type
              ? ((a = !0),
                (i = void 0),
                (s = [0, 0, 0, 0]),
                (u = [0, o + 1, 0, 0]),
                c &&
                  ((c = !1),
                  (r = {
                    type: "tableBody",
                    start: Object.assign({}, h.start),
                    end: Object.assign({}, h.end),
                  }),
                  p.add(o, 0, [["enter", r, t]])),
                (l = "tableDelimiterRow" === h.type ? 2 : r ? 3 : 1))
              : l &&
                ("data" === h.type ||
                  "tableDelimiterMarker" === h.type ||
                  "tableDelimiterFiller" === h.type)
              ? ((a = !1),
                0 === u[2] &&
                  (0 !== s[1] &&
                    ((u[0] = u[1]),
                    (i = flushCell(p, t, s, l, void 0, i)),
                    (s = [0, 0, 0, 0])),
                  (u[2] = o)))
              : "tableCellDivider" === h.type &&
                (a
                  ? (a = !1)
                  : (0 !== s[1] &&
                      ((u[0] = u[1]), (i = flushCell(p, t, s, l, void 0, i))),
                    (u = [(s = u)[1], o, 0, 0])))
            : "tableHead" === h.type
            ? ((c = !0), (f = o))
            : "tableRow" === h.type || "tableDelimiterRow" === h.type
            ? ((f = o),
              0 !== s[1]
                ? ((u[0] = u[1]), (i = flushCell(p, t, s, l, o, i)))
                : 0 !== u[1] && (i = flushCell(p, t, u, l, o, i)),
              (l = 0))
            : l &&
              ("data" === h.type ||
                "tableDelimiterMarker" === h.type ||
                "tableDelimiterFiller" === h.type) &&
              (u[3] = o);
        }
        for (
          0 !== f && flushTableEnd(p, t, f, n, r), p.consume(t.events), o = -1;
          ++o < t.events.length;

        ) {
          let e = t.events[o];
          "enter" === e[0] &&
            "table" === e[1].type &&
            (e[1]._align = (function (e, t) {
              let n = !1,
                r = [];
              for (; t < e.length; ) {
                let i = e[t];
                if (n) {
                  if ("enter" === i[0])
                    "tableContent" === i[1].type &&
                      r.push(
                        "tableDelimiterMarker" === e[t + 1][1].type
                          ? "left"
                          : "none"
                      );
                  else if ("tableContent" === i[1].type) {
                    if ("tableDelimiterMarker" === e[t - 1][1].type) {
                      let e = r.length - 1;
                      r[e] = "left" === r[e] ? "center" : "right";
                    }
                  } else if ("tableDelimiterRow" === i[1].type) break;
                } else
                  "enter" === i[0] &&
                    "tableDelimiterRow" === i[1].type &&
                    (n = !0);
                t += 1;
              }
              return r;
            })(t.events, o));
        }
        return e;
      }
      function flushCell(e, t, n, r, i, o) {
        0 !== n[0] &&
          ((o.end = Object.assign({}, getPoint(t.events, n[0]))),
          e.add(n[0], 0, [["exit", o, t]]));
        let a = getPoint(t.events, n[1]);
        if (
          ((o = {
            type:
              1 === r
                ? "tableHeader"
                : 2 === r
                ? "tableDelimiter"
                : "tableData",
            start: Object.assign({}, a),
            end: Object.assign({}, a),
          }),
          e.add(n[1], 0, [["enter", o, t]]),
          0 !== n[2])
        ) {
          let i = getPoint(t.events, n[2]),
            o = getPoint(t.events, n[3]),
            a = {
              type: "tableContent",
              start: Object.assign({}, i),
              end: Object.assign({}, o),
            };
          if ((e.add(n[2], 0, [["enter", a, t]]), 2 !== r)) {
            let r = t.events[n[2]],
              i = t.events[n[3]];
            if (
              ((r[1].end = Object.assign({}, i[1].end)),
              (r[1].type = "chunkText"),
              (r[1].contentType = "text"),
              n[3] > n[2] + 1)
            ) {
              let t = n[2] + 1,
                r = n[3] - n[2] - 1;
              e.add(t, r, []);
            }
          }
          e.add(n[3] + 1, 0, [["exit", a, t]]);
        }
        return (
          void 0 !== i &&
            ((o.end = Object.assign({}, getPoint(t.events, i))),
            e.add(i, 0, [["exit", o, t]]),
            (o = void 0)),
          o
        );
      }
      function flushTableEnd(e, t, n, r, i) {
        let o = [],
          a = getPoint(t.events, n);
        i && ((i.end = Object.assign({}, a)), o.push(["exit", i, t])),
          (r.end = Object.assign({}, a)),
          o.push(["exit", r, t]),
          e.add(n + 1, 0, o);
      }
      function getPoint(e, t) {
        let n = e[t],
          r = "enter" === n[0] ? "start" : "end";
        return n[1][r];
      }
      let T = {
        tokenize: function (e, t, n) {
          let r = this;
          return function (t) {
            return null === r.previous && r._gfmTasklistFirstContentOfListItem
              ? (e.enter("taskListCheck"),
                e.enter("taskListCheckMarker"),
                e.consume(t),
                e.exit("taskListCheckMarker"),
                inside)
              : n(t);
          };
          function inside(t) {
            return (0, i.z3)(t)
              ? (e.enter("taskListCheckValueUnchecked"),
                e.consume(t),
                e.exit("taskListCheckValueUnchecked"),
                close)
              : 88 === t || 120 === t
              ? (e.enter("taskListCheckValueChecked"),
                e.consume(t),
                e.exit("taskListCheckValueChecked"),
                close)
              : n(t);
          }
          function close(t) {
            return 93 === t
              ? (e.enter("taskListCheckMarker"),
                e.consume(t),
                e.exit("taskListCheckMarker"),
                e.exit("taskListCheck"),
                after)
              : n(t);
          }
          function after(r) {
            return (0, i.Ch)(r)
              ? t(r)
              : (0, i.xz)(r)
              ? e.check({ tokenize: spaceThenNonSpace }, t, n)(r)
              : n(r);
          }
        },
      };
      function spaceThenNonSpace(e, t, n) {
        return (0, S.f)(
          e,
          function (e) {
            return null === e ? n(e) : t(e);
          },
          "whitespace"
        );
      }
      let I = {};
      function remarkGfm(e) {
        let t = e || I,
          n = this.data(),
          r = n.micromarkExtensions || (n.micromarkExtensions = []),
          i = n.fromMarkdownExtensions || (n.fromMarkdownExtensions = []),
          o = n.toMarkdownExtensions || (n.toMarkdownExtensions = []);
        r.push(
          (0, d.W)([
            { text: x },
            {
              document: {
                91: {
                  tokenize: tokenizeDefinitionStart,
                  continuation: { tokenize: tokenizeDefinitionContinuation },
                  exit: gfmFootnoteDefinitionEnd,
                },
              },
              text: {
                91: { tokenize: tokenizeGfmFootnoteCall },
                93: {
                  add: "after",
                  tokenize: tokenizePotentialGfmFootnoteCall,
                  resolveTo: resolveToPotentialGfmFootnoteCall,
                },
              },
            },
            (function (e) {
              let t = (e || {}).singleTilde,
                n = {
                  tokenize: function (e, n, r) {
                    let i = this.previous,
                      o = this.events,
                      a = 0;
                    return function (l) {
                      return 126 === i &&
                        "characterEscape" !== o[o.length - 1][1].type
                        ? r(l)
                        : (e.enter("strikethroughSequenceTemporary"),
                          (function more(o) {
                            let l = (0, A.r)(i);
                            if (126 === o)
                              return a > 1 ? r(o) : (e.consume(o), a++, more);
                            if (a < 2 && !t) return r(o);
                            let s = e.exit("strikethroughSequenceTemporary"),
                              u = (0, A.r)(o);
                            return (
                              (s._open = !u || (2 === u && !!l)),
                              (s._close = !l || (2 === l && !!u)),
                              n(o)
                            );
                          })(l));
                    };
                  },
                  resolveAll: function (e, t) {
                    let n = -1;
                    for (; ++n < e.length; )
                      if (
                        "enter" === e[n][0] &&
                        "strikethroughSequenceTemporary" === e[n][1].type &&
                        e[n][1]._close
                      ) {
                        let r = n;
                        for (; r--; )
                          if (
                            "exit" === e[r][0] &&
                            "strikethroughSequenceTemporary" === e[r][1].type &&
                            e[r][1]._open &&
                            e[n][1].end.offset - e[n][1].start.offset ==
                              e[r][1].end.offset - e[r][1].start.offset
                          ) {
                            (e[n][1].type = "strikethroughSequence"),
                              (e[r][1].type = "strikethroughSequence");
                            let i = {
                                type: "strikethrough",
                                start: Object.assign({}, e[r][1].start),
                                end: Object.assign({}, e[n][1].end),
                              },
                              o = {
                                type: "strikethroughText",
                                start: Object.assign({}, e[r][1].end),
                                end: Object.assign({}, e[n][1].start),
                              },
                              a = [
                                ["enter", i, t],
                                ["enter", e[r][1], t],
                                ["exit", e[r][1], t],
                                ["enter", o, t],
                              ],
                              l = t.parser.constructs.insideSpan.null;
                            l &&
                              (0, P.d)(
                                a,
                                a.length,
                                0,
                                (0, O.C)(l, e.slice(r + 1, n), t)
                              ),
                              (0, P.d)(a, a.length, 0, [
                                ["exit", o, t],
                                ["enter", e[n][1], t],
                                ["exit", e[n][1], t],
                                ["exit", i, t],
                              ]),
                              (0, P.d)(e, r - 1, n - r + 3, a),
                              (n = r + a.length - 2);
                            break;
                          }
                      }
                    for (n = -1; ++n < e.length; )
                      "strikethroughSequenceTemporary" === e[n][1].type &&
                        (e[n][1].type = "data");
                    return e;
                  },
                };
              return (
                null == t && (t = !0),
                {
                  text: { 126: n },
                  insideSpan: { null: [n] },
                  attentionMarkers: { null: [126] },
                }
              );
            })(t),
            {
              flow: {
                null: { tokenize: tokenizeTable, resolveAll: resolveTable },
              },
            },
            { text: { 91: T } },
          ])
        ),
          i.push([
            {
              transforms: [transformGfmAutolinkLiterals],
              enter: {
                literalAutolink: enterLiteralAutolink,
                literalAutolinkEmail: enterLiteralAutolinkValue,
                literalAutolinkHttp: enterLiteralAutolinkValue,
                literalAutolinkWww: enterLiteralAutolinkValue,
              },
              exit: {
                literalAutolink: exitLiteralAutolink,
                literalAutolinkEmail: exitLiteralAutolinkEmail,
                literalAutolinkHttp: exitLiteralAutolinkHttp,
                literalAutolinkWww: exitLiteralAutolinkWww,
              },
            },
            {
              enter: {
                gfmFootnoteDefinition: enterFootnoteDefinition,
                gfmFootnoteDefinitionLabelString:
                  enterFootnoteDefinitionLabelString,
                gfmFootnoteCall: enterFootnoteCall,
                gfmFootnoteCallString: enterFootnoteCallString,
              },
              exit: {
                gfmFootnoteDefinition: exitFootnoteDefinition,
                gfmFootnoteDefinitionLabelString:
                  exitFootnoteDefinitionLabelString,
                gfmFootnoteCall: exitFootnoteCall,
                gfmFootnoteCallString: exitFootnoteCallString,
              },
            },
            {
              canContainEols: ["delete"],
              enter: { strikethrough: enterStrikethrough },
              exit: { strikethrough: exitStrikethrough },
            },
            (0, f.t)(),
            {
              exit: {
                taskListCheckValueChecked: exitCheck,
                taskListCheckValueUnchecked: exitCheck,
                paragraph: exitParagraphWithTaskListItem,
              },
            },
          ]),
          o.push({
            extensions: [
              {
                unsafe: [
                  {
                    character: "@",
                    before: "[+\\-.\\w]",
                    after: "[\\-.\\w]",
                    inConstruct: l,
                    notInConstruct: s,
                  },
                  {
                    character: ".",
                    before: "[Ww]",
                    after: "[\\-.\\w]",
                    inConstruct: l,
                    notInConstruct: s,
                  },
                  {
                    character: ":",
                    before: "[ps]",
                    after: "\\/",
                    inConstruct: l,
                    notInConstruct: s,
                  },
                ],
              },
              {
                unsafe: [
                  {
                    character: "[",
                    inConstruct: ["phrasing", "label", "reference"],
                  },
                ],
                handlers: { footnoteDefinition, footnoteReference },
              },
              {
                unsafe: [
                  {
                    character: "~",
                    inConstruct: "phrasing",
                    notInConstruct: c,
                  },
                ],
                handlers: { delete: handleDelete },
              },
              (0, f.x)(t),
              {
                unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
                handlers: { listItem: listItemWithTaskListItem },
              },
            ],
          });
      }
    },
    96093: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return convert;
        },
      });
      let convert = function (e) {
        if (null == e) return ok;
        if ("function" == typeof e) return castFactory(e);
        if ("object" == typeof e)
          return Array.isArray(e)
            ? (function (e) {
                let t = [],
                  n = -1;
                for (; ++n < e.length; ) t[n] = convert(e[n]);
                return castFactory(function (...e) {
                  let n = -1;
                  for (; ++n < t.length; ) if (t[n].apply(this, e)) return !0;
                  return !1;
                });
              })(e)
            : castFactory(function (t) {
                let n;
                for (n in e) if (t[n] !== e[n]) return !1;
                return !0;
              });
        if ("string" == typeof e)
          return castFactory(function (t) {
            return t && t.type === e;
          });
        throw Error("Expected function, string, or object as test");
      };
      function castFactory(e) {
        return function (t, n, r) {
          var i;
          return !!(
            null !== (i = t) &&
            "object" == typeof i &&
            "type" in i &&
            e.call(this, t, "number" == typeof n ? n : void 0, r || void 0)
          );
        };
      }
      function ok() {
        return !0;
      }
    },
    3980: function (e, t, n) {
      "use strict";
      n.d(t, {
        FK: function () {
          return position;
        },
        Pk: function () {
          return i;
        },
        rb: function () {
          return r;
        },
      });
      let r = point("end"),
        i = point("start");
      function point(e) {
        return function (t) {
          let n = (t && t.position && t.position[e]) || {};
          if (
            "number" == typeof n.line &&
            n.line > 0 &&
            "number" == typeof n.column &&
            n.column > 0
          )
            return {
              line: n.line,
              column: n.column,
              offset:
                "number" == typeof n.offset && n.offset > -1
                  ? n.offset
                  : void 0,
            };
        };
      }
      function position(e) {
        let t = i(e),
          n = r(e);
        if (t && n) return { start: t, end: n };
      }
    },
    88718: function (e, t, n) {
      "use strict";
      n.d(t, {
        BK: function () {
          return o;
        },
        AM: function () {
          return a;
        },
        S4: function () {
          return visitParents;
        },
      });
      var r = n(96093);
      let i = [],
        o = !1,
        a = "skip";
      function visitParents(e, t, n, l) {
        let s;
        "function" == typeof t && "function" != typeof n
          ? ((l = n), (n = t))
          : (s = t);
        let u = (0, r.O)(s),
          c = l ? -1 : 1;
        (function factory(e, r, s) {
          let f = e && "object" == typeof e ? e : {};
          if ("string" == typeof f.type) {
            let t =
              "string" == typeof f.tagName
                ? f.tagName
                : "string" == typeof f.name
                ? f.name
                : void 0;
            Object.defineProperty(visit, "name", {
              value: "node (" + e.type + (t ? "<" + t + ">" : "") + ")",
            });
          }
          return visit;
          function visit() {
            var f;
            let p,
              d,
              h,
              m = i;
            if (
              (!t || u(e, r, s[s.length - 1] || void 0)) &&
              (m = Array.isArray((f = n(e, s)))
                ? f
                : "number" == typeof f
                ? [!0, f]
                : null == f
                ? i
                : [f])[0] === o
            )
              return m;
            if ("children" in e && e.children && e.children && m[0] !== a)
              for (
                d = (l ? e.children.length : -1) + c, h = s.concat(e);
                d > -1 && d < e.children.length;

              ) {
                let t = e.children[d];
                if ((p = factory(t, d, h)())[0] === o) return p;
                d = "number" == typeof p[1] ? p[1] : d + c;
              }
            return m;
          }
        })(e, void 0, [])();
      }
    },
    21623: function (e, t, n) {
      "use strict";
      n.d(t, {
        Vn: function () {
          return visit;
        },
      });
      var r = n(88718);
      function visit(e, t, n, i) {
        let o, a, l;
        "function" == typeof t && "function" != typeof n
          ? ((a = void 0), (l = t), (o = n))
          : ((a = t), (l = n), (o = i)),
          (0, r.S4)(
            e,
            a,
            function (e, t) {
              let n = t[t.length - 1],
                r = n ? n.children.indexOf(e) : void 0;
              return l(e, r, n);
            },
            o
          );
      }
    },
    82002: function (e, t, n) {
      "use strict";
      function getChainId(e) {
        return e.state.chainId;
      }
      n.d(t, {
        x: function () {
          return useChainId;
        },
      });
      var r = n(67294),
        i = n(37122);
      function useChainId(e = {}) {
        let t = (0, i.Z)(e);
        return (0, r.useSyncExternalStore)(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e.subscribe((e) => e.chainId, n);
            })(t, { onChange: e }),
          () => getChainId(t),
          () => getChainId(t)
        );
      }
    },
    37122: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return useConfig;
        },
      });
      var r = n(67294),
        i = n(99931),
        o = n(7066);
      let getVersion = () => "wagmi@2.5.7";
      let BaseError = class BaseError extends o.G {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiError",
            });
        }
        get docsBaseUrl() {
          return "https://wagmi.sh/react";
        }
        get version() {
          return getVersion();
        }
      };
      let WagmiProviderNotFoundError = class WagmiProviderNotFoundError extends BaseError {
        constructor() {
          super("`useConfig` must be used within `WagmiProvider`.", {
            docsPath: "https://wagmi.sh/react/api/WagmiProvider",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiProviderNotFoundError",
            });
        }
      };
      function useConfig(e = {}) {
        let t = e.config ?? (0, r.useContext)(i.V);
        if (!t) throw new WagmiProviderNotFoundError();
        return t;
      }
    },
    10611: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '["grinning","smiley","smile","grin","laughing","sweat_smile","joy","rofl","relaxed","blush","innocent","slightly_smiling_face","upside_down_face","wink","relieved","heart_eyes","smiling_face_with_three_hearts","kissing_heart","kissing","kissing_smiling_eyes","kissing_closed_eyes","yum","stuck_out_tongue","stuck_out_tongue_closed_eyes","stuck_out_tongue_winking_eye","zany","raised_eyebrow","monocle","nerd_face","sunglasses","star_struck","partying","smirk","unamused","disappointed","pensive","worried","confused","slightly_frowning_face","frowning_face","persevere","confounded","tired_face","weary","pleading","cry","sob","triumph","angry","rage","symbols_over_mouth","exploding_head","flushed","hot","cold","scream","fearful","cold_sweat","disappointed_relieved","sweat","hugs","thinking","hand_over_mouth","shushing","lying_face","no_mouth","neutral_face","expressionless","grimacing","roll_eyes","hushed","frowning","anguished","open_mouth","astonished","sleeping","drooling_face","sleepy","dizzy_face","zipper_mouth_face","woozy","nauseated_face","vomiting","sneezing_face","mask","face_with_thermometer","face_with_head_bandage","money_mouth_face","cowboy_hat_face","smiling_imp","imp","japanese_ogre","japanese_goblin","clown_face","poop","ghost","skull","skull_and_crossbones","alien","space_invader","robot","jack_o_lantern","smiley_cat","smile_cat","joy_cat","heart_eyes_cat","smirk_cat","kissing_cat","scream_cat","crying_cat_face","pouting_cat","palms_up","open_hands","raised_hands","clap","handshake","+1","-1","facepunch","fist","fist_left","fist_right","crossed_fingers","v","love_you","metal","ok_hand","point_left","point_right","point_up","point_down","point_up_2","raised_hand","raised_back_of_hand","raised_hand_with_fingers_splayed","vulcan_salute","wave","call_me_hand","muscle","fu","writing_hand","pray","foot","leg","ring","lipstick","kiss","lips","tooth","tongue","ear","nose","footprints","eye","eyes","brain","speaking_head","bust_in_silhouette","busts_in_silhouette","baby","girl","child","boy","woman","adult","man","blonde_woman","blonde_man","bearded_person","older_woman","older_adult","older_man","man_with_gua_pi_mao","woman_with_headscarf","woman_with_turban","man_with_turban","policewoman","policeman","construction_worker_woman","construction_worker_man","guardswoman","guardsman","female_detective","male_detective","woman_health_worker","man_health_worker","woman_farmer","man_farmer","woman_cook","man_cook","woman_student","man_student","woman_singer","man_singer","woman_teacher","man_teacher","woman_factory_worker","man_factory_worker","woman_technologist","man_technologist","woman_office_worker","man_office_worker","woman_mechanic","man_mechanic","woman_scientist","man_scientist","woman_artist","man_artist","woman_firefighter","man_firefighter","woman_pilot","man_pilot","woman_astronaut","man_astronaut","woman_judge","man_judge","bride_with_veil","man_in_tuxedo","princess","prince","woman_superhero","man_superhero","woman_supervillain","man_supervillain","mrs_claus","santa","sorceress","wizard","woman_elf","man_elf","woman_vampire","man_vampire","woman_zombie","man_zombie","woman_genie","man_genie","mermaid","merman","woman_fairy","man_fairy","angel","pregnant_woman","breastfeeding","bowing_woman","bowing_man","tipping_hand_woman","tipping_hand_man","no_good_woman","no_good_man","ok_woman","ok_man","raising_hand_woman","raising_hand_man","woman_facepalming","man_facepalming","woman_shrugging","man_shrugging","pouting_woman","pouting_man","frowning_woman","frowning_man","haircut_woman","haircut_man","massage_woman","massage_man","woman_in_steamy_room","man_in_steamy_room","nail_care","selfie","dancer","man_dancing","dancing_women","dancing_men","business_suit_levitating","walking_woman","walking_man","running_woman","running_man","couple","two_women_holding_hands","two_men_holding_hands","couple_with_heart_woman_man","couple_with_heart_woman_woman","couple_with_heart_man_man","couplekiss_man_woman","couplekiss_woman_woman","couplekiss_man_man","family_man_woman_boy","family_man_woman_girl","family_man_woman_girl_boy","family_man_woman_boy_boy","family_man_woman_girl_girl","family_woman_woman_boy","family_woman_woman_girl","family_woman_woman_girl_boy","family_woman_woman_boy_boy","family_woman_woman_girl_girl","family_man_man_boy","family_man_man_girl","family_man_man_girl_boy","family_man_man_boy_boy","family_man_man_girl_girl","family_woman_boy","family_woman_girl","family_woman_girl_boy","family_woman_boy_boy","family_woman_girl_girl","family_man_boy","family_man_girl","family_man_girl_boy","family_man_boy_boy","family_man_girl_girl","yarn","thread","coat","labcoat","womans_clothes","tshirt","jeans","necktie","dress","bikini","kimono","flat_shoe","high_heel","sandal","boot","mans_shoe","athletic_shoe","hiking_boot","socks","gloves","scarf","tophat","billed_hat","womans_hat","mortar_board","rescue_worker_helmet","crown","pouch","purse","handbag","briefcase","school_satchel","luggage","eyeglasses","dark_sunglasses","goggles","closed_umbrella","dog","cat","mouse","hamster","rabbit","fox_face","bear","panda_face","koala","tiger","lion","cow","pig","pig_nose","frog","monkey_face","see_no_evil","hear_no_evil","speak_no_evil","monkey","chicken","penguin","bird","baby_chick","hatching_chick","hatched_chick","duck","eagle","owl","bat","wolf","boar","horse","unicorn","honeybee","bug","butterfly","snail","shell","beetle","ant","mosquito","grasshopper","spider","spider_web","scorpion","turtle","snake","lizard","t-rex","sauropod","octopus","squid","shrimp","lobster","crab","blowfish","tropical_fish","fish","dolphin","whale","whale2","shark","crocodile","tiger2","leopard","zebra","gorilla","elephant","hippopotamus","rhinoceros","dromedary_camel","giraffe","kangaroo","camel","water_buffalo","ox","cow2","racehorse","pig2","ram","sheep","llama","goat","deer","dog2","poodle","cat2","rooster","turkey","peacock","parrot","swan","dove","rabbit2","raccoon","badger","rat","mouse2","chipmunk","hedgehog","paw_prints","dragon","dragon_face","cactus","christmas_tree","evergreen_tree","deciduous_tree","palm_tree","seedling","herb","shamrock","four_leaf_clover","bamboo","tanabata_tree","leaves","fallen_leaf","maple_leaf","ear_of_rice","hibiscus","sunflower","rose","wilted_flower","tulip","blossom","cherry_blossom","bouquet","mushroom","earth_americas","earth_africa","earth_asia","full_moon","waning_gibbous_moon","last_quarter_moon","waning_crescent_moon","new_moon","waxing_crescent_moon","first_quarter_moon","waxing_gibbous_moon","new_moon_with_face","full_moon_with_face","first_quarter_moon_with_face","last_quarter_moon_with_face","sun_with_face","crescent_moon","star","star2","dizzy","sparkles","comet","sunny","sun_behind_small_cloud","partly_sunny","sun_behind_large_cloud","sun_behind_rain_cloud","cloud","cloud_with_rain","cloud_with_lightning_and_rain","cloud_with_lightning","zap","fire","boom","snowflake","cloud_with_snow","snowman","snowman_with_snow","wind_face","dash","tornado","fog","open_umbrella","umbrella","droplet","sweat_drops","ocean","green_apple","apple","pear","tangerine","lemon","banana","watermelon","grapes","strawberry","melon","cherries","peach","mango","pineapple","coconut","kiwi_fruit","tomato","eggplant","avocado","broccoli","leafy_greens","cucumber","hot_pepper","corn","carrot","potato","sweet_potato","croissant","bagel","bread","baguette_bread","pretzel","cheese","egg","fried_egg","pancakes","bacon","steak","poultry_leg","meat_on_bone","bone","hotdog","hamburger","fries","pizza","sandwich","stuffed_flatbread","taco","burrito","green_salad","shallow_pan_of_food","canned_food","spaghetti","ramen","stew","curry","sushi","bento","fried_shrimp","rice_ball","rice","rice_cracker","fish_cake","fortune_cookie","moon_cake","oden","dango","shaved_ice","ice_cream","icecream","pie","cupcake","cake","birthday","custard","lollipop","candy","chocolate_bar","popcorn","doughnut","dumpling","cookie","chestnut","peanuts","honey_pot","milk_glass","baby_bottle","coffee","tea","cup_with_straw","sake","beer","beers","clinking_glasses","wine_glass","tumbler_glass","cocktail","tropical_drink","champagne","spoon","fork_and_knife","plate_with_cutlery","bowl_with_spoon","takeout_box","chopsticks","salt","soccer","basketball","football","baseball","softball","tennis","volleyball","rugby_football","flying_disc","8ball","golf","golfing_woman","golfing_man","ping_pong","badminton","goal_net","ice_hockey","field_hockey","lacrosse","cricket","ski","skier","snowboarder","person_fencing","women_wrestling","men_wrestling","woman_cartwheeling","man_cartwheeling","woman_playing_handball","man_playing_handball","ice_skate","curling_stone","skateboard","sled","bow_and_arrow","fishing_pole_and_fish","boxing_glove","martial_arts_uniform","rowing_woman","rowing_man","climbing_woman","climbing_man","swimming_woman","swimming_man","woman_playing_water_polo","man_playing_water_polo","woman_in_lotus_position","man_in_lotus_position","surfing_woman","surfing_man","basketball_woman","basketball_man","weight_lifting_woman","weight_lifting_man","biking_woman","biking_man","mountain_biking_woman","mountain_biking_man","horse_racing","trophy","running_shirt_with_sash","medal_sports","medal_military","1st_place_medal","2nd_place_medal","3rd_place_medal","reminder_ribbon","rosette","ticket","tickets","performing_arts","art","circus_tent","woman_juggling","man_juggling","microphone","headphones","musical_score","musical_keyboard","drum","saxophone","trumpet","guitar","violin","clapper","video_game","dart","game_die","chess_pawn","slot_machine","jigsaw","bowling","red_car","taxi","blue_car","bus","trolleybus","racing_car","police_car","ambulance","fire_engine","minibus","truck","articulated_lorry","tractor","kick_scooter","motorcycle","bike","motor_scooter","rotating_light","oncoming_police_car","oncoming_bus","oncoming_automobile","oncoming_taxi","aerial_tramway","mountain_cableway","suspension_railway","railway_car","train","monorail","bullettrain_side","bullettrain_front","light_rail","mountain_railway","steam_locomotive","train2","metro","tram","station","flying_saucer","helicopter","small_airplane","airplane","flight_departure","flight_arrival","sailboat","motor_boat","speedboat","ferry","passenger_ship","rocket","artificial_satellite","seat","canoe","anchor","construction","fuelpump","busstop","vertical_traffic_light","traffic_light","ship","ferris_wheel","roller_coaster","carousel_horse","building_construction","foggy","tokyo_tower","factory","fountain","rice_scene","mountain","mountain_snow","mount_fuji","volcano","japan","camping","tent","national_park","motorway","railway_track","sunrise","sunrise_over_mountains","desert","beach_umbrella","desert_island","city_sunrise","city_sunset","cityscape","night_with_stars","bridge_at_night","milky_way","stars","sparkler","fireworks","rainbow","houses","european_castle","japanese_castle","stadium","statue_of_liberty","house","house_with_garden","derelict_house","office","department_store","post_office","european_post_office","hospital","bank","hotel","convenience_store","school","love_hotel","wedding","classical_building","church","mosque","synagogue","kaaba","shinto_shrine","watch","iphone","calling","computer","keyboard","desktop_computer","printer","computer_mouse","trackball","joystick","clamp","minidisc","floppy_disk","cd","dvd","vhs","camera","camera_flash","video_camera","movie_camera","film_projector","film_strip","telephone_receiver","phone","pager","fax","tv","radio","studio_microphone","level_slider","control_knobs","compass","stopwatch","timer_clock","alarm_clock","mantelpiece_clock","hourglass_flowing_sand","hourglass","satellite","battery","electric_plug","bulb","flashlight","candle","fire_extinguisher","wastebasket","oil_drum","money_with_wings","dollar","yen","euro","pound","moneybag","credit_card","gem","balance_scale","toolbox","wrench","hammer","hammer_and_pick","hammer_and_wrench","pick","nut_and_bolt","gear","brick","chains","magnet","gun","bomb","firecracker","hocho","dagger","crossed_swords","shield","smoking","coffin","funeral_urn","amphora","crystal_ball","prayer_beads","nazar_amulet","barber","alembic","telescope","microscope","hole","pill","syringe","dna","microbe","petri_dish","test_tube","thermometer","broom","basket","toilet_paper","label","bookmark","toilet","shower","bathtub","bath","soap","sponge","lotion_bottle","key","old_key","couch_and_lamp","sleeping_bed","bed","door","bellhop_bell","teddy_bear","framed_picture","world_map","parasol_on_ground","moyai","shopping","shopping_cart","balloon","flags","ribbon","gift","confetti_ball","tada","dolls","wind_chime","crossed_flags","izakaya_lantern","red_envelope","email","envelope_with_arrow","incoming_envelope","e-mail","love_letter","postbox","mailbox_closed","mailbox","mailbox_with_mail","mailbox_with_no_mail","package","postal_horn","inbox_tray","outbox_tray","scroll","page_with_curl","bookmark_tabs","receipt","bar_chart","chart_with_upwards_trend","chart_with_downwards_trend","page_facing_up","date","calendar","spiral_calendar","card_index","card_file_box","ballot_box","file_cabinet","clipboard","spiral_notepad","file_folder","open_file_folder","card_index_dividers","newspaper_roll","newspaper","notebook","closed_book","green_book","blue_book","orange_book","notebook_with_decorative_cover","ledger","books","open_book","safety_pin","link","paperclip","paperclips","scissors","triangular_ruler","straight_ruler","abacus","pushpin","round_pushpin","closed_lock_with_key","lock","unlock","lock_with_ink_pen","pen","fountain_pen","black_nib","memo","pencil2","crayon","paintbrush","mag","mag_right","heart","orange_heart","yellow_heart","green_heart","blue_heart","purple_heart","black_heart","broken_heart","heavy_heart_exclamation","two_hearts","revolving_hearts","heartbeat","heartpulse","sparkling_heart","cupid","gift_heart","heart_decoration","peace_symbol","latin_cross","star_and_crescent","om","wheel_of_dharma","star_of_david","six_pointed_star","menorah","yin_yang","orthodox_cross","place_of_worship","ophiuchus","aries","taurus","gemini","cancer","leo","virgo","libra","scorpius","sagittarius","capricorn","aquarius","pisces","id","atom_symbol","u7a7a","u5272","radioactive","biohazard","mobile_phone_off","vibration_mode","u6709","u7121","u7533","u55b6","u6708","eight_pointed_black_star","vs","accept","white_flower","ideograph_advantage","secret","congratulations","u5408","u6e80","u7981","a","b","ab","cl","o2","sos","no_entry","name_badge","no_entry_sign","x","o","stop_sign","anger","hotsprings","no_pedestrians","do_not_litter","no_bicycles","non-potable_water","underage","no_mobile_phones","exclamation","grey_exclamation","question","grey_question","bangbang","interrobang","100","low_brightness","high_brightness","trident","fleur_de_lis","part_alternation_mark","warning","children_crossing","beginner","recycle","u6307","chart","sparkle","eight_spoked_asterisk","negative_squared_cross_mark","white_check_mark","diamond_shape_with_a_dot_inside","cyclone","loop","globe_with_meridians","m","atm","zzz","sa","passport_control","customs","baggage_claim","left_luggage","wheelchair","no_smoking","wc","parking","potable_water","mens","womens","baby_symbol","restroom","put_litter_in_its_place","cinema","signal_strength","koko","ng","ok","up","cool","new","free","zero","one","two","three","four","five","six","seven","eight","nine","keycap_ten","asterisk","1234","eject_button","arrow_forward","pause_button","next_track_button","stop_button","record_button","play_or_pause_button","previous_track_button","fast_forward","rewind","twisted_rightwards_arrows","repeat","repeat_one","arrow_backward","arrow_up_small","arrow_down_small","arrow_double_up","arrow_double_down","arrow_right","arrow_left","arrow_up","arrow_down","arrow_upper_right","arrow_lower_right","arrow_lower_left","arrow_upper_left","arrow_up_down","left_right_arrow","arrows_counterclockwise","arrow_right_hook","leftwards_arrow_with_hook","arrow_heading_up","arrow_heading_down","hash","information_source","abc","abcd","capital_abcd","symbols","musical_note","notes","wavy_dash","curly_loop","heavy_check_mark","arrows_clockwise","heavy_plus_sign","heavy_minus_sign","heavy_division_sign","heavy_multiplication_x","infinity","heavy_dollar_sign","currency_exchange","copyright","registered","tm","end","back","on","top","soon","ballot_box_with_check","radio_button","white_circle","black_circle","red_circle","large_blue_circle","small_orange_diamond","small_blue_diamond","large_orange_diamond","large_blue_diamond","small_red_triangle","black_small_square","white_small_square","black_large_square","white_large_square","small_red_triangle_down","black_medium_square","white_medium_square","black_medium_small_square","white_medium_small_square","black_square_button","white_square_button","speaker","sound","loud_sound","mute","mega","loudspeaker","bell","no_bell","black_joker","mahjong","spades","clubs","hearts","diamonds","flower_playing_cards","thought_balloon","right_anger_bubble","speech_balloon","left_speech_bubble","clock1","clock2","clock3","clock4","clock5","clock6","clock7","clock8","clock9","clock10","clock11","clock12","clock130","clock230","clock330","clock430","clock530","clock630","clock730","clock830","clock930","clock1030","clock1130","clock1230","white_flag","black_flag","pirate_flag","checkered_flag","triangular_flag_on_post","rainbow_flag","united_nations","afghanistan","aland_islands","albania","algeria","american_samoa","andorra","angola","anguilla","antarctica","antigua_barbuda","argentina","armenia","aruba","australia","austria","azerbaijan","bahamas","bahrain","bangladesh","barbados","belarus","belgium","belize","benin","bermuda","bhutan","bolivia","caribbean_netherlands","bosnia_herzegovina","botswana","brazil","british_indian_ocean_territory","british_virgin_islands","brunei","bulgaria","burkina_faso","burundi","cape_verde","cambodia","cameroon","canada","canary_islands","cayman_islands","central_african_republic","chad","chile","cn","christmas_island","cocos_islands","colombia","comoros","congo_brazzaville","congo_kinshasa","cook_islands","costa_rica","croatia","cuba","curacao","cyprus","czech_republic","denmark","djibouti","dominica","dominican_republic","ecuador","egypt","el_salvador","equatorial_guinea","eritrea","estonia","ethiopia","eu","falkland_islands","faroe_islands","fiji","finland","fr","french_guiana","french_polynesia","french_southern_territories","gabon","gambia","georgia","de","ghana","gibraltar","greece","greenland","grenada","guadeloupe","guam","guatemala","guernsey","guinea","guinea_bissau","guyana","haiti","honduras","hong_kong","hungary","iceland","india","indonesia","iran","iraq","ireland","isle_of_man","israel","it","cote_divoire","jamaica","jp","jersey","jordan","kazakhstan","kenya","kiribati","kosovo","kuwait","kyrgyzstan","laos","latvia","lebanon","lesotho","liberia","libya","liechtenstein","lithuania","luxembourg","macau","macedonia","madagascar","malawi","malaysia","maldives","mali","malta","marshall_islands","martinique","mauritania","mauritius","mayotte","mexico","micronesia","moldova","monaco","mongolia","montenegro","montserrat","morocco","mozambique","myanmar","namibia","nauru","nepal","netherlands","new_caledonia","new_zealand","nicaragua","niger","nigeria","niue","norfolk_island","northern_mariana_islands","north_korea","norway","oman","pakistan","palau","palestinian_territories","panama","papua_new_guinea","paraguay","peru","philippines","pitcairn_islands","poland","portugal","puerto_rico","qatar","reunion","romania","ru","rwanda","st_barthelemy","st_helena","st_kitts_nevis","st_lucia","st_pierre_miquelon","st_vincent_grenadines","samoa","san_marino","sao_tome_principe","saudi_arabia","senegal","serbia","seychelles","sierra_leone","singapore","sint_maarten","slovakia","slovenia","solomon_islands","somalia","south_africa","south_georgia_south_sandwich_islands","kr","south_sudan","es","sri_lanka","sudan","suriname","swaziland","sweden","switzerland","syria","taiwan","tajikistan","tanzania","thailand","timor_leste","togo","tokelau","tonga","trinidad_tobago","tunisia","tr","turkmenistan","turks_caicos_islands","tuvalu","uganda","ukraine","united_arab_emirates","uk","england","scotland","wales","us","us_virgin_islands","uruguay","uzbekistan","vanuatu","vatican_city","venezuela","vietnam","wallis_futuna","western_sahara","yemen","zambia","zimbabwe"]'
      );
    },
  },
]);
