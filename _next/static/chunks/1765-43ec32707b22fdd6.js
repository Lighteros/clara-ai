"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1765],
  {
    53250: function (n, e, t) {
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var c = t(67294),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (n, e) {
                return (
                  (n === e && (0 !== n || 1 / n == 1 / e)) || (n != n && e != e)
                );
              },
        i = c.useState,
        s = c.useEffect,
        u = c.useLayoutEffect,
        l = c.useDebugValue;
      function r(n) {
        var e = n.getSnapshot;
        n = n.value;
        try {
          var t = e();
          return !o(n, t);
        } catch (n) {
          return !0;
        }
      }
      var d =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (n, e) {
              return e();
            }
          : function (n, e) {
              var t = e(),
                c = i({ inst: { value: t, getSnapshot: e } }),
                o = c[0].inst,
                d = c[1];
              return (
                u(
                  function () {
                    (o.value = t), (o.getSnapshot = e), r(o) && d({ inst: o });
                  },
                  [n, t, e]
                ),
                s(
                  function () {
                    return (
                      r(o) && d({ inst: o }),
                      n(function () {
                        r(o) && d({ inst: o });
                      })
                    );
                  },
                  [n]
                ),
                l(t),
                t
              );
            };
      e.useSyncExternalStore =
        void 0 !== c.useSyncExternalStore ? c.useSyncExternalStore : d;
    },
    50139: function (n, e, t) {
      /**
       * @license React
       * use-sync-external-store-shim/with-selector.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var c = t(67294),
        o = t(61688),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (n, e) {
                return (
                  (n === e && (0 !== n || 1 / n == 1 / e)) || (n != n && e != e)
                );
              },
        s = o.useSyncExternalStore,
        u = c.useRef,
        l = c.useEffect,
        d = c.useMemo,
        f = c.useDebugValue;
      e.useSyncExternalStoreWithSelector = function (n, e, t, c, o) {
        var g = u(null);
        if (null === g.current) {
          var v = { hasValue: !1, value: null };
          g.current = v;
        } else v = g.current;
        var h = s(
          n,
          (g = d(
            function () {
              function a(e) {
                if (!u) {
                  if (
                    ((u = !0), (n = e), (e = c(e)), void 0 !== o && v.hasValue)
                  ) {
                    var t = v.value;
                    if (o(t, e)) return (s = t);
                  }
                  return (s = e);
                }
                if (((t = s), i(n, e))) return t;
                var l = c(e);
                return void 0 !== o && o(t, l) ? t : ((n = e), (s = l));
              }
              var n,
                s,
                u = !1,
                l = void 0 === t ? null : t;
              return [
                function () {
                  return a(e());
                },
                null === l
                  ? void 0
                  : function () {
                      return a(l());
                    },
              ];
            },
            [e, t, c, o]
          ))[0],
          g[1]
        );
        return (
          l(
            function () {
              (v.hasValue = !0), (v.value = h);
            },
            [h]
          ),
          f(h),
          h
        );
      };
    },
    61688: function (n, e, t) {
      n.exports = t(53250);
    },
    52798: function (n, e, t) {
      n.exports = t(50139);
    },
    42694: function (n, e, t) {
      t.d(e, {
        e: function () {
          return getConnectorClient;
        },
      });
      var c = t(41164),
        o = t(48307),
        i = t(24381),
        s = t(87675);
      async function getConnectorClient(n, e = {}) {
        let t;
        if (e.connector) {
          let { connector: n } = e,
            [c, o] = await Promise.all([n.getAccounts(), n.getChainId()]);
          t = { accounts: c, chainId: o, connector: n };
        } else t = n.state.connections.get(n.state.current);
        if (!t) throw new s.aH();
        let u = e.chainId ?? t.chainId,
          l = t.connector;
        if (l.getClient) return l.getClient({ chainId: u });
        let d = (0, i.T)(e.account ?? t.accounts[0]),
          f = n.chains.find((n) => n.id === u),
          g = await t.connector.getProvider({ chainId: u });
        if (e.account && !t.accounts.includes(d.address))
          throw new s.JK({ address: d.address, connector: l });
        return (0, c.e)({
          account: d,
          chain: f,
          name: "Connector Client",
          transport: (n) =>
            (function (n, e = {}) {
              let {
                key: t = "custom",
                name: c = "Custom Provider",
                retryDelay: i,
              } = e;
              return ({ retryCount: s }) =>
                (0, o.q)({
                  key: t,
                  name: c,
                  request: n.request.bind(n),
                  retryCount: e.retryCount ?? s,
                  retryDelay: i,
                  type: "custom",
                });
            })(g)({ ...n, retryCount: 0 }),
        });
      }
    },
    74751: function (n, e, t) {
      t.d(e, {
        v: function () {
          return function deepEqual(n, e) {
            if (n === e) return !0;
            if (n && e && "object" == typeof n && "object" == typeof e) {
              let t, c;
              if (n.constructor !== e.constructor) return !1;
              if (Array.isArray(n) && Array.isArray(e)) {
                if ((t = n.length) !== e.length) return !1;
                for (c = t; 0 != c--; ) if (!deepEqual(n[c], e[c])) return !1;
                return !0;
              }
              if (n.valueOf !== Object.prototype.valueOf)
                return n.valueOf() === e.valueOf();
              if (n.toString !== Object.prototype.toString)
                return n.toString() === e.toString();
              let o = Object.keys(n);
              if ((t = o.length) !== Object.keys(e).length) return !1;
              for (c = t; 0 != c--; )
                if (!Object.prototype.hasOwnProperty.call(e, o[c])) return !1;
              for (c = t; 0 != c--; ) {
                let t = o[c];
                if (t && !deepEqual(n[t], e[t])) return !1;
              }
              return !0;
            }
            return n != n && e != e;
          };
        },
      });
    },
    81946: function (n, e, t) {
      t.d(e, {
        s: function () {
          return getAction;
        },
      });
      function getAction(n, e, t) {
        let c = n[e.name ?? t];
        return "function" == typeof c ? c : (t) => e(n, t);
      }
    },
    13146: function (n, e, t) {
      t.d(e, {
        l: function () {
          return signMessage;
        },
      });
      var c = t(24381),
        o = t(16128),
        i = t(9362);
      async function signMessage(n, { account: e = n.account, message: t }) {
        if (!e) throw new o.o({ docsPath: "/docs/actions/wallet/signMessage" });
        let s = (0, c.T)(e);
        if ("local" === s.type) return s.signMessage({ message: t });
        let u =
          "string" == typeof t
            ? (0, i.$G)(t)
            : t.raw instanceof Uint8Array
            ? (0, i.NC)(t.raw)
            : t.raw;
        return n.request(
          { method: "personal_sign", params: [u, s.address] },
          { retryCount: 0 }
        );
      }
    },
    16128: function (n, e, t) {
      t.d(e, {
        o: function () {
          return AccountNotFoundError;
        },
      });
      var c = t(31273);
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
    20583: function (n, e, t) {
      t.d(e, {
        m: function () {
          return useAccount;
        },
      });
      var c = t(74751);
      function getAccount(n) {
        let e = n.state.current,
          t = n.state.connections.get(e),
          c = t?.accounts,
          o = c?.[0],
          i = n.chains.find((n) => n.id === t?.chainId),
          s = n.state.status;
        switch (s) {
          case "connected":
            return {
              address: o,
              addresses: c,
              chain: i,
              chainId: t?.chainId,
              connector: t?.connector,
              isConnected: !0,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !1,
              status: s,
            };
          case "reconnecting":
            return {
              address: o,
              addresses: c,
              chain: i,
              chainId: t?.chainId,
              connector: t?.connector,
              isConnected: !!o,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !0,
              status: s,
            };
          case "connecting":
            return {
              address: o,
              addresses: c,
              chain: i,
              chainId: t?.chainId,
              connector: t?.connector,
              isConnected: !1,
              isConnecting: !0,
              isDisconnected: !1,
              isReconnecting: !1,
              status: s,
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
              status: s,
            };
        }
      }
      var o = t(37122),
        i = t(67294),
        s = t(52798);
      let isPlainObject = (n) => "object" == typeof n && !Array.isArray(n);
      function useAccount(n = {}) {
        let e = (0, o.Z)(n);
        return (function (n, e, t = e, o = c.v) {
          let u = (0, i.useRef)([]),
            l = (0, s.useSyncExternalStoreWithSelector)(
              n,
              e,
              t,
              (n) => n,
              (n, e) => {
                if (isPlainObject(n) && isPlainObject(e) && u.current.length) {
                  for (let t of u.current) {
                    let c = o(n[t], e[t]);
                    if (!c) return !1;
                  }
                  return !0;
                }
                return o(n, e);
              }
            );
          if (isPlainObject(l)) {
            let n = { ...l };
            return (
              Object.defineProperties(
                n,
                Object.entries(n).reduce(
                  (n, [e, t]) => ({
                    ...n,
                    [e]: {
                      configurable: !1,
                      enumerable: !0,
                      get: () => (
                        u.current.includes(e) || u.current.push(e), t
                      ),
                    },
                  }),
                  {}
                )
              ),
              n
            );
          }
          return l;
        })(
          (n) =>
            (function (n, e) {
              let { onChange: t } = e;
              return n.subscribe(() => getAccount(n), t, {
                equalityFn(n, e) {
                  let { connector: t, ...o } = n,
                    { connector: i, ...s } = e;
                  return (0, c.v)(o, s) && t?.id === i?.id && t?.uid === i?.uid;
                },
              });
            })(e, { onChange: n }),
          () => getAccount(e)
        );
      }
    },
    37122: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return useConfig;
        },
      });
      var c = t(67294),
        o = t(99931),
        i = t(7066);
      let getVersion = () => "wagmi@2.5.7";
      let BaseError = class BaseError extends i.G {
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
      function useConfig(n = {}) {
        let e = n.config ?? (0, c.useContext)(o.V);
        if (!e) throw new WagmiProviderNotFoundError();
        return e;
      }
    },
    59598: function (n, e, t) {
      t.d(e, {
        $: function () {
          return useConnect;
        },
      });
      var c = t(98029),
        o = t(87675);
      async function connect(n, e) {
        let t;
        if (
          (t =
            "function" == typeof e.connector
              ? n._internal.connectors.setup(e.connector)
              : e.connector).uid === n.state.current
        )
          throw new o.wi();
        try {
          n.setState((n) => ({ ...n, status: "connecting" })),
            t.emitter.emit("message", { type: "connecting" });
          let c = await t.connect({ chainId: e.chainId }),
            o = c.accounts;
          return (
            t.emitter.off("connect", n._internal.events.connect),
            t.emitter.on("change", n._internal.events.change),
            t.emitter.on("disconnect", n._internal.events.disconnect),
            await n.storage?.setItem("recentConnectorId", t.id),
            n.setState((n) => ({
              ...n,
              connections: new Map(n.connections).set(t.uid, {
                accounts: o,
                chainId: c.chainId,
                connector: t,
              }),
              current: t.uid,
              status: "connected",
            })),
            { accounts: o, chainId: c.chainId }
          );
        } catch (e) {
          throw (
            (n.setState((n) => ({
              ...n,
              status: n.current ? "connected" : "disconnected",
            })),
            e)
          );
        }
      }
      var i = t(67294),
        s = t(37122),
        u = t(74751);
      let l = [];
      function getConnectors(n) {
        let e = n.connectors;
        return (0, u.v)(l, e) ? l : ((l = e), e);
      }
      function useConnect(n = {}) {
        let { mutation: e } = n,
          t = (0, s.Z)(n),
          o = (function (n = {}) {
            let e = (0, s.Z)(n);
            return (0, i.useSyncExternalStore)(
              (n) =>
                (function (n, e) {
                  let { onChange: t } = e;
                  return n._internal.connectors.subscribe((n, e) => {
                    t(Object.values(n), e);
                  });
                })(e, { onChange: n }),
              () => getConnectors(e),
              () => getConnectors(e)
            );
          })({ config: t }),
          {
            mutate: u,
            mutateAsync: l,
            ...d
          } = (0, c.D)({
            ...e,
            mutationFn: (n) => connect(t, n),
            mutationKey: ["connect"],
          });
        return (
          (0, i.useEffect)(
            () =>
              t.subscribe(
                ({ status: n }) => n,
                (n, e) => {
                  "connected" === e && "disconnected" === n && d.reset();
                }
              ),
            [t, d]
          ),
          { ...d, connect: u, connectAsync: l, connectors: o }
        );
      }
    },
    48486: function (n, e, t) {
      t.d(e, {
        q: function () {
          return useDisconnect;
        },
      });
      var c = t(98029);
      async function disconnect(n, e = {}) {
        let t;
        if (e.connector) t = e.connector;
        else {
          let { connections: e, current: c } = n.state,
            o = e.get(c);
          t = o?.connector;
        }
        let c = n.state.connections;
        t &&
          (await t.disconnect(),
          t.emitter.off("change", n._internal.events.change),
          t.emitter.off("disconnect", n._internal.events.disconnect),
          t.emitter.on("connect", n._internal.events.connect),
          c.delete(t.uid)),
          n.setState((n) => {
            if (0 === c.size)
              return {
                ...n,
                connections: new Map(),
                current: void 0,
                status: "disconnected",
              };
            let e = c.values().next().value;
            return { ...n, connections: new Map(c), current: e.connector.uid };
          });
        {
          let e = n.state.current;
          if (!e) return;
          let t = n.state.connections.get(e)?.connector;
          if (!t) return;
          await n.storage?.setItem("recentConnectorId", t.id);
        }
      }
      var o = t(37122),
        i = t(74751);
      let s = [];
      function getConnections(n) {
        let e = [...n.state.connections.values()];
        return "reconnecting" === n.state.status || (0, i.v)(s, e)
          ? s
          : ((s = e), e);
      }
      var u = t(67294);
      function useDisconnect(n = {}) {
        let { mutation: e } = n,
          t = (0, o.Z)(n),
          {
            mutate: s,
            mutateAsync: l,
            ...d
          } = (0, c.D)({
            ...e,
            mutationFn: (n) => disconnect(t, n),
            mutationKey: ["disconnect"],
          });
        return {
          ...d,
          connectors: (function (n = {}) {
            let e = (0, o.Z)(n);
            return (0, u.useSyncExternalStore)(
              (n) =>
                (function (n, e) {
                  let { onChange: t } = e;
                  return n.subscribe(() => getConnections(n), t, {
                    equalityFn: i.v,
                  });
                })(e, { onChange: n }),
              () => getConnections(e),
              () => getConnections(e)
            );
          })({ config: t }).map((n) => n.connector),
          disconnect: s,
          disconnectAsync: l,
        };
      }
    },
    8768: function (n, e, t) {
      t.d(e, {
        Q: function () {
          return useSignMessage;
        },
      });
      var c = t(98029),
        o = t(13146),
        i = t(81946),
        s = t(42694);
      async function signMessage_signMessage(n, e) {
        let t;
        let { account: c, connector: u, ...l } = e;
        t =
          "object" == typeof c && "local" === c.type
            ? n.getClient()
            : await (0, s.e)(n, { account: c, connector: u });
        let d = (0, i.s)(t, o.l, "signMessage");
        return d({ ...l, ...(c ? { account: c } : {}) });
      }
      var u = t(37122);
      function useSignMessage(n = {}) {
        let { mutation: e } = n,
          t = (0, u.Z)(n),
          {
            mutate: o,
            mutateAsync: i,
            ...s
          } = (0, c.D)({
            ...e,
            mutationFn: (n) => signMessage_signMessage(t, n),
            mutationKey: ["signMessage"],
          });
        return { ...s, signMessage: o, signMessageAsync: i };
      }
    },
  },
]);
