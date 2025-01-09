"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1443],
  {
    73565: function (n, t, e) {
      e.d(t, {
        Tg: function () {
          return formatAddress;
        },
        uf: function () {
          return formatNumber;
        },
      });
      let formatAddress = (n) => {
          let { start: t = 0, end: e = -4, address: c = "" } = n;
          return c ? c.slice(0, t) + "..." + c.slice(e) : "";
        },
        formatNumber = function (n) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5;
          if (void 0 === n) return "--";
          if (0 === n) return "0";
          let e = n.toFixed(t),
            [c, o] = e.split(".");
          return parseInt(c) + parseInt(o) === 0
            ? n.toExponential(t)
            : n < 1
            ? n.toFixed(t)
            : n >= 1
            ? n.toLocaleString(void 0, { maximumFractionDigits: t })
            : void 0;
        };
    },
    53250: function (n, t, e) {
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var c = e(67294),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (n, t) {
                return (
                  (n === t && (0 !== n || 1 / n == 1 / t)) || (n != n && t != t)
                );
              },
        i = c.useState,
        u = c.useEffect,
        s = c.useLayoutEffect,
        f = c.useDebugValue;
      function r(n) {
        var t = n.getSnapshot;
        n = n.value;
        try {
          var e = t();
          return !o(n, e);
        } catch (n) {
          return !0;
        }
      }
      var l =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (n, t) {
              return t();
            }
          : function (n, t) {
              var e = t(),
                c = i({ inst: { value: e, getSnapshot: t } }),
                o = c[0].inst,
                l = c[1];
              return (
                s(
                  function () {
                    (o.value = e), (o.getSnapshot = t), r(o) && l({ inst: o });
                  },
                  [n, e, t]
                ),
                u(
                  function () {
                    return (
                      r(o) && l({ inst: o }),
                      n(function () {
                        r(o) && l({ inst: o });
                      })
                    );
                  },
                  [n]
                ),
                f(e),
                e
              );
            };
      t.useSyncExternalStore =
        void 0 !== c.useSyncExternalStore ? c.useSyncExternalStore : l;
    },
    50139: function (n, t, e) {
      /**
       * @license React
       * use-sync-external-store-shim/with-selector.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var c = e(67294),
        o = e(61688),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (n, t) {
                return (
                  (n === t && (0 !== n || 1 / n == 1 / t)) || (n != n && t != t)
                );
              },
        u = o.useSyncExternalStore,
        s = c.useRef,
        f = c.useEffect,
        l = c.useMemo,
        d = c.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (n, t, e, c, o) {
        var g = s(null);
        if (null === g.current) {
          var v = { hasValue: !1, value: null };
          g.current = v;
        } else v = g.current;
        var h = u(
          n,
          (g = l(
            function () {
              function a(t) {
                if (!s) {
                  if (
                    ((s = !0), (n = t), (t = c(t)), void 0 !== o && v.hasValue)
                  ) {
                    var e = v.value;
                    if (o(e, t)) return (u = e);
                  }
                  return (u = t);
                }
                if (((e = u), i(n, t))) return e;
                var f = c(t);
                return void 0 !== o && o(e, f) ? e : ((n = t), (u = f));
              }
              var n,
                u,
                s = !1,
                f = void 0 === e ? null : e;
              return [
                function () {
                  return a(t());
                },
                null === f
                  ? void 0
                  : function () {
                      return a(f());
                    },
              ];
            },
            [t, e, c, o]
          ))[0],
          g[1]
        );
        return (
          f(
            function () {
              (v.hasValue = !0), (v.value = h);
            },
            [h]
          ),
          d(h),
          h
        );
      };
    },
    61688: function (n, t, e) {
      n.exports = e(53250);
    },
    52798: function (n, t, e) {
      n.exports = e(50139);
    },
    42694: function (n, t, e) {
      e.d(t, {
        e: function () {
          return getConnectorClient;
        },
      });
      var c = e(41164),
        o = e(48307),
        i = e(24381),
        u = e(87675);
      async function getConnectorClient(n, t = {}) {
        let e;
        if (t.connector) {
          let { connector: n } = t,
            [c, o] = await Promise.all([n.getAccounts(), n.getChainId()]);
          e = { accounts: c, chainId: o, connector: n };
        } else e = n.state.connections.get(n.state.current);
        if (!e) throw new u.aH();
        let s = t.chainId ?? e.chainId,
          f = e.connector;
        if (f.getClient) return f.getClient({ chainId: s });
        let l = (0, i.T)(t.account ?? e.accounts[0]),
          d = n.chains.find((n) => n.id === s),
          g = await e.connector.getProvider({ chainId: s });
        if (t.account && !e.accounts.includes(l.address))
          throw new u.JK({ address: l.address, connector: f });
        return (0, c.e)({
          account: l,
          chain: d,
          name: "Connector Client",
          transport: (n) =>
            (function (n, t = {}) {
              let {
                key: e = "custom",
                name: c = "Custom Provider",
                retryDelay: i,
              } = t;
              return ({ retryCount: u }) =>
                (0, o.q)({
                  key: e,
                  name: c,
                  request: n.request.bind(n),
                  retryCount: t.retryCount ?? u,
                  retryDelay: i,
                  type: "custom",
                });
            })(g)({ ...n, retryCount: 0 }),
        });
      }
    },
    74751: function (n, t, e) {
      e.d(t, {
        v: function () {
          return function deepEqual(n, t) {
            if (n === t) return !0;
            if (n && t && "object" == typeof n && "object" == typeof t) {
              let e, c;
              if (n.constructor !== t.constructor) return !1;
              if (Array.isArray(n) && Array.isArray(t)) {
                if ((e = n.length) !== t.length) return !1;
                for (c = e; 0 != c--; ) if (!deepEqual(n[c], t[c])) return !1;
                return !0;
              }
              if (n.valueOf !== Object.prototype.valueOf)
                return n.valueOf() === t.valueOf();
              if (n.toString !== Object.prototype.toString)
                return n.toString() === t.toString();
              let o = Object.keys(n);
              if ((e = o.length) !== Object.keys(t).length) return !1;
              for (c = e; 0 != c--; )
                if (!Object.prototype.hasOwnProperty.call(t, o[c])) return !1;
              for (c = e; 0 != c--; ) {
                let e = o[c];
                if (e && !deepEqual(n[e], t[e])) return !1;
              }
              return !0;
            }
            return n != n && t != t;
          };
        },
      });
    },
    81946: function (n, t, e) {
      e.d(t, {
        s: function () {
          return getAction;
        },
      });
      function getAction(n, t, e) {
        let c = n[t.name ?? e];
        return "function" == typeof c ? c : (e) => t(n, e);
      }
    },
    13146: function (n, t, e) {
      e.d(t, {
        l: function () {
          return signMessage;
        },
      });
      var c = e(24381),
        o = e(16128),
        i = e(9362);
      async function signMessage(n, { account: t = n.account, message: e }) {
        if (!t) throw new o.o({ docsPath: "/docs/actions/wallet/signMessage" });
        let u = (0, c.T)(t);
        if ("local" === u.type) return u.signMessage({ message: e });
        let s =
          "string" == typeof e
            ? (0, i.$G)(e)
            : e.raw instanceof Uint8Array
            ? (0, i.NC)(e.raw)
            : e.raw;
        return n.request(
          { method: "personal_sign", params: [s, u.address] },
          { retryCount: 0 }
        );
      }
    },
    16128: function (n, t, e) {
      e.d(t, {
        o: function () {
          return AccountNotFoundError;
        },
      });
      var c = e(31273);
      let AccountNotFoundError = class AccountNotFoundError extends c.G {
        constructor({ docsPath: n } = {}) {
          super(
            "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.",
            { docsPath: n, docsSlug: "account" }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AccountNotFoundError",
            });
        }
      };
    },
    20583: function (n, t, e) {
      e.d(t, {
        m: function () {
          return useAccount;
        },
      });
      var c = e(74751);
      function getAccount(n) {
        let t = n.state.current,
          e = n.state.connections.get(t),
          c = e?.accounts,
          o = c?.[0],
          i = n.chains.find((n) => n.id === e?.chainId),
          u = n.state.status;
        switch (u) {
          case "connected":
            return {
              address: o,
              addresses: c,
              chain: i,
              chainId: e?.chainId,
              connector: e?.connector,
              isConnected: !0,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !1,
              status: u,
            };
          case "reconnecting":
            return {
              address: o,
              addresses: c,
              chain: i,
              chainId: e?.chainId,
              connector: e?.connector,
              isConnected: !!o,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !0,
              status: u,
            };
          case "connecting":
            return {
              address: o,
              addresses: c,
              chain: i,
              chainId: e?.chainId,
              connector: e?.connector,
              isConnected: !1,
              isConnecting: !0,
              isDisconnected: !1,
              isReconnecting: !1,
              status: u,
            };
          case "disconnected":
            return {
              address: void 0,
              addresses: void 0,
              chain: void 0,
              chainId: void 0,
              connector: void 0,
              isConnected: !1,
              isConnecting: !1,
              isDisconnected: !0,
              isReconnecting: !1,
              status: u,
            };
        }
      }
      var o = e(37122),
        i = e(67294),
        u = e(52798);
      let isPlainObject = (n) => "object" == typeof n && !Array.isArray(n);
      function useAccount(n = {}) {
        let t = (0, o.Z)(n);
        return (function (n, t, e = t, o = c.v) {
          let s = (0, i.useRef)([]),
            f = (0, u.useSyncExternalStoreWithSelector)(
              n,
              t,
              e,
              (n) => n,
              (n, t) => {
                if (isPlainObject(n) && isPlainObject(t) && s.current.length) {
                  for (let e of s.current) {
                    let c = o(n[e], t[e]);
                    if (!c) return !1;
                  }
                  return !0;
                }
                return o(n, t);
              }
            );
          if (isPlainObject(f)) {
            let n = { ...f };
            return (
              Object.defineProperties(
                n,
                Object.entries(n).reduce(
                  (n, [t, e]) => ({
                    ...n,
                    [t]: {
                      configurable: !1,
                      enumerable: !0,
                      get: () => (
                        s.current.includes(t) || s.current.push(t), e
                      ),
                    },
                  }),
                  {}
                )
              ),
              n
            );
          }
          return f;
        })(
          (n) =>
            (function (n, t) {
              let { onChange: e } = t;
              return n.subscribe(() => getAccount(n), e, {
                equalityFn(n, t) {
                  let { connector: e, ...o } = n,
                    { connector: i, ...u } = t;
                  return (0, c.v)(o, u) && e?.id === i?.id && e?.uid === i?.uid;
                },
              });
            })(t, { onChange: n }),
          () => getAccount(t)
        );
      }
    },
  },
]);
