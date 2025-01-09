(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    48312: function (n, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return r(47925);
        },
      ]);
    },
    47925: function (n, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return Index;
          },
        });
      var e = r(85893),
        o = r(4298),
        i = r.n(o),
        u = r(90584),
        c = r(79362);
      function Index() {
        let [n] = (0, u.Z)(c.nd, "", { raw: !0 });
        return (0, e.jsx)("div", {
          className: "h-full w-full",
          children: (0, e.jsx)(i(), {
            id: "init-script",
            strategy: "beforeInteractive",
            children: "\n        const token = localStorage.getItem('".concat(
              c.nd,
              "');\n        if (token) {\n          location.href = '/chat';\n        } else {\n          location.href = '/landing';\n        }\n      "
            ),
          }),
        });
      }
    },
    79362: function (n, t, r) {
      "use strict";
      r.d(t, {
        $M: function () {
          return c;
        },
        Uy: function () {
          return i;
        },
        _T: function () {
          return e;
        },
        dh: function () {
          return l;
        },
        nd: function () {
          return o;
        },
        r7: function () {
          return s;
        },
        v9: function () {
          return u;
        },
        wQ: function () {
          return a;
        },
        ws: function () {
          return f;
        },
      });
      let e = 1,
        o = "auth_token",
        i = "auth_user_info",
        u = "user",
        c = "create_monitor_workflow",
        f = "check_my_workflows",
        a = "delysium-agi-staking-pool",
        s = "pancake-v3-liquidity-pool",
        l = "bridge";
    },
    4298: function (n, t, r) {
      n.exports = r(85354);
    },
    76362: function (n, t, r) {
      "use strict";
      r.d(t, {
        S1: function () {
          return off;
        },
        ZT: function () {
          return noop;
        },
        jU: function () {
          return e;
        },
        on: function () {
          return on;
        },
      });
      var noop = function () {};
      function on(n) {
        for (var t = [], r = 1; r < arguments.length; r++)
          t[r - 1] = arguments[r];
        n && n.addEventListener && n.addEventListener.apply(n, t);
      }
      function off(n) {
        for (var t = [], r = 1; r < arguments.length; r++)
          t[r - 1] = arguments[r];
        n && n.removeEventListener && n.removeEventListener.apply(n, t);
      }
      var e = "undefined" != typeof window;
    },
    90584: function (n, t, r) {
      "use strict";
      var e = r(67294),
        o = r(76362);
      t.Z = function (n, t, r) {
        if (!o.jU) return [t, o.ZT, o.ZT];
        if (!n) throw Error("useLocalStorage key may not be falsy");
        var i = r
            ? r.raw
              ? function (n) {
                  return n;
                }
              : r.deserializer
            : JSON.parse,
          u = (0, e.useRef)(function (n) {
            try {
              var e = r ? (r.raw ? String : r.serializer) : JSON.stringify,
                o = localStorage.getItem(n);
              if (null !== o) return i(o);
              return t && localStorage.setItem(n, e(t)), t;
            } catch (n) {
              return t;
            }
          }),
          c = (0, e.useState)(function () {
            return u.current(n);
          }),
          f = c[0],
          a = c[1];
        (0, e.useLayoutEffect)(
          function () {
            return a(u.current(n));
          },
          [n]
        );
        var s = (0, e.useCallback)(
          function (t) {
            try {
              var e = "function" == typeof t ? t(f) : t;
              if (void 0 === e) return;
              var o = void 0;
              (o = r
                ? r.raw
                  ? "string" == typeof e
                    ? e
                    : JSON.stringify(e)
                  : r.serializer
                  ? r.serializer(e)
                  : JSON.stringify(e)
                : JSON.stringify(e)),
                localStorage.setItem(n, o),
                a(i(o));
            } catch (n) {}
          },
          [n, a]
        );
        return [
          f,
          s,
          (0, e.useCallback)(
            function () {
              try {
                localStorage.removeItem(n), a(void 0);
              } catch (n) {}
            },
            [n, a]
          ),
        ];
      };
    },
  },
  function (n) {
    n.O(0, [9774, 2888, 179], function () {
      return n((n.s = 48312));
    }),
      (_N_E = n.O());
  },
]);
