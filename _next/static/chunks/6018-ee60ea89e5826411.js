(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6018],
  {
    93214: function (e, t, n) {
      "use strict";
      var o,
        a = n(67294);
      function _extends() {
        return (_extends = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(this, arguments);
      }
      t.Z = function (e) {
        return a.createElement(
          "svg",
          _extends(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              fill: "none",
            },
            e
          ),
          o ||
            (o = a.createElement("path", {
              fill: "#62C400",
              fillRule: "evenodd",
              d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m-.232-5.36 5-6-1.536-1.28-4.3 5.159-2.225-2.226-1.414 1.414 3 3 .774.774z",
              clipRule: "evenodd",
            }))
        );
      };
    },
    58413: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return SwitchNetworkModal;
        },
      });
      var o,
        a,
        c,
        l,
        s,
        r,
        i,
        u,
        d,
        m,
        h,
        f = n(85893),
        g = n(56697),
        w = n(40959),
        p = n(94184),
        v = n.n(p),
        x = n(25893),
        _ = n(98029),
        y = n(87675),
        E = n(17897);
      async function switchChain(e, t) {
        let { chainId: n } = t,
          o = e.state.connections.get(t.connector?.uid ?? e.state.current);
        if (o) {
          let e = o.connector;
          if (!e.switchChain) throw new E.O({ connector: e });
          let t = await e.switchChain({ chainId: n });
          return t;
        }
        let a = e.chains.find((e) => e.id === n);
        if (!a) throw new y.X4();
        return e.setState((e) => ({ ...e, chainId: n })), a;
      }
      var S = n(74751);
      let k = [];
      function getChains(e) {
        let t = e.chains;
        return (0, S.v)(k, t) ? k : ((k = t), t);
      }
      var b = n(67294),
        C = n(37122),
        M = n(20583),
        L = n(59598),
        N = n(8768),
        j = n(48486),
        z = n(48583),
        O = n(50994),
        P = n(15324),
        Z = n(16534),
        F = n.n(Z);
      function _extends() {
        return (_extends = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(this, arguments);
      }
      var network_evm = function (e) {
        return b.createElement(
          "svg",
          _extends(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 20,
              height: 20,
              fill: "none",
            },
            e
          ),
          o ||
            (o = b.createElement("path", {
              fill: "#627EEA",
              d: "M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10",
            })),
          a ||
            (a = b.createElement("path", {
              fill: "#fff",
              fillOpacity: 0.602,
              d: "M10.311 2.5v5.544l4.686 2.093z",
            })),
          c ||
            (c = b.createElement("path", {
              fill: "#fff",
              d: "m10.311 2.5-4.686 7.637 4.686-2.093z",
            })),
          l ||
            (l = b.createElement("path", {
              fill: "#fff",
              fillOpacity: 0.602,
              d: "M10.311 13.73v3.767L15 11.01z",
            })),
          s ||
            (s = b.createElement("path", {
              fill: "#fff",
              d: "M10.311 17.497v-3.768L5.625 11.01z",
            })),
          r ||
            (r = b.createElement("path", {
              fill: "#fff",
              fillOpacity: 0.2,
              d: "m10.311 12.858 4.686-2.72-4.686-2.093z",
            })),
          i ||
            (i = b.createElement("path", {
              fill: "#fff",
              fillOpacity: 0.602,
              d: "m5.625 10.137 4.686 2.721V8.045z",
            }))
        );
      };
      function network_bsc_extends() {
        return (network_bsc_extends = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(this, arguments);
      }
      var network_bsc = function (e) {
        return b.createElement(
          "svg",
          network_bsc_extends(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 20,
              height: 20,
              fill: "none",
            },
            e
          ),
          u ||
            (u = b.createElement("path", {
              fill: "#F3BA2F",
              d: "M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10",
            })),
          d ||
            (d = b.createElement("path", {
              fill: "#fff",
              d: "M7.573 9.003 10 6.575l2.429 2.429L13.84 7.59 10 3.75 6.16 7.59zM3.75 10l1.412-1.412L6.576 10l-1.413 1.412zm3.823.998L10 13.425l2.429-2.429 1.412 1.412L10 16.25l-3.84-3.84-.002-.002zM13.425 10l1.412-1.412L16.25 10l-1.412 1.412zm-1.993-.001h.002V10L10 11.434l-1.432-1.431L8.566 10l.002-.002.25-.251.123-.122L10 8.566z",
            }))
        );
      };
      function network_solana_extends() {
        return (network_solana_extends = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(this, arguments);
      }
      var network_solana = function (e) {
          return b.createElement(
            "svg",
            network_solana_extends(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 20,
                height: 20,
                fill: "none",
              },
              e
            ),
            m ||
              (m = b.createElement(
                "g",
                { clipPath: "url(#network-solana_svg__a)" },
                b.createElement("path", {
                  fill: "#000",
                  d: "M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10",
                }),
                b.createElement("path", {
                  fill: "url(#network-solana_svg__b)",
                  d: "M14.533 7.2a.43.43 0 0 1-.28.11H4.396c-.35 0-.526-.4-.284-.633l1.619-1.561A.412.412 0 0 1 6.01 5h9.895c.353 0 .526.403.28.638z",
                }),
                b.createElement("path", {
                  fill: "url(#network-solana_svg__c)",
                  d: "M14.533 14.893a.43.43 0 0 1-.28.107H4.396c-.35 0-.526-.396-.284-.63l1.619-1.565a.406.406 0 0 1 .28-.112h9.895c.353 0 .526.4.28.634z",
                }),
                b.createElement("path", {
                  fill: "url(#network-solana_svg__d)",
                  d: "M14.533 8.957a.43.43 0 0 0-.28-.107H4.396c-.35 0-.526.396-.284.63l1.619 1.566c.077.069.176.108.28.11h9.895c.353 0 .526-.4.28-.633z",
                })
              )),
            h ||
              (h = b.createElement(
                "defs",
                null,
                b.createElement(
                  "linearGradient",
                  {
                    id: "network-solana_svg__b",
                    x1: 4.001,
                    x2: 16.615,
                    y1: 39.415,
                    y2: 39.299,
                    gradientUnits: "userSpaceOnUse",
                  },
                  b.createElement("stop", { stopColor: "#599DB0" }),
                  b.createElement("stop", { offset: 1, stopColor: "#47F8C3" })
                ),
                b.createElement(
                  "linearGradient",
                  {
                    id: "network-solana_svg__c",
                    x1: 4.001,
                    x2: 16.535,
                    y1: 8.065,
                    y2: 7.969,
                    gradientUnits: "userSpaceOnUse",
                  },
                  b.createElement("stop", { stopColor: "#C44FE2" }),
                  b.createElement("stop", { offset: 1, stopColor: "#73B0D0" })
                ),
                b.createElement(
                  "linearGradient",
                  {
                    id: "network-solana_svg__d",
                    x1: 4.709,
                    x2: 15.825,
                    y1: 10.003,
                    y2: 10.003,
                    gradientUnits: "userSpaceOnUse",
                  },
                  b.createElement("stop", { stopColor: "#778CBF" }),
                  b.createElement("stop", { offset: 1, stopColor: "#5DCDC9" })
                ),
                b.createElement(
                  "clipPath",
                  { id: "network-solana_svg__a" },
                  b.createElement("path", { fill: "#fff", d: "M0 0h20v20H0z" })
                )
              ))
          );
        },
        A = n(93214),
        I = n(54306),
        D = n(45145);
      function SwitchNetworkModal(e) {
        let { open: t, setClose: n } = e,
          { switchChain: o } = (function (e = {}) {
            let { mutation: t } = e,
              n = (0, C.Z)(e),
              {
                mutate: o,
                mutateAsync: a,
                ...c
              } = (0, _.D)({
                ...t,
                mutationFn: (e) => switchChain(n, e),
                mutationKey: ["switchChain"],
              });
            return {
              ...c,
              chains: (function (e = {}) {
                let t = (0, C.Z)(e);
                return (0, b.useSyncExternalStore)(
                  (e) =>
                    (function (e, t) {
                      let { onChange: n } = t;
                      return e._internal.chains.subscribe((e, t) => {
                        n(e, t);
                      });
                    })(t, { onChange: e }),
                  () => getChains(t),
                  () => getChains(t)
                );
              })({ config: n }),
              switchChain: o,
              switchChainAsync: a,
            };
          })(),
          { chainId: a, address: c } = (0, M.m)(),
          { connect: l, connectors: s, connectAsync: r } = (0, L.$)(),
          [i, u] = (0, z.KO)(O.Jf),
          { login: d, isPending: m } = (0, P.f0)(),
          { challenge: h } = (0, P.Lo)(),
          { login: p } = (0, P.mo)(),
          { challenge: y } = (0, P.oT)(),
          { data: E, signMessageAsync: S, isSuccess: k } = (0, N.Q)(),
          [Z, K] = (0, b.useState)(!1),
          { disconnect: B } = (0, j.q)(),
          [H, T] = (0, b.useState)(!1),
          U = (0, I.O)(),
          {
            publicKey: G,
            signMessage: q,
            connect: Q,
            connected: R,
            connecting: W,
            select: Y,
          } = (0, I.O)();
        (0, b.useMemo)(
          () => null != U && !!U.publicKey,
          [null == U ? void 0 : U.publicKey]
        ),
          (0, b.useMemo)(() => {
            var e;
            return null == U
              ? void 0
              : null === (e = U.publicKey) || void 0 === e
              ? void 0
              : e.toString();
          }, [null == U ? void 0 : U.publicKey]),
          (0, b.useMemo)(
            () => null != U && !!U.connected,
            [null == U ? void 0 : U.connected]
          );
        let $ = { evm: 1, bsc: 56 },
          onLoginEvm = async () => {
            try {
              var e;
              let t = c,
                o = await r({ connector: s[0] });
              console.log("res", o), (t = o.accounts[0]);
              let { message: l } = await h({ wallet_address: t }),
                i = await S({ message: l });
              await d({ wallet_address: t, signature: i }),
                u(
                  null === O.sp || void 0 === O.sp
                    ? void 0
                    : null ===
                        (e = O.sp[(null == o ? void 0 : o.chainId) || a]) ||
                      void 0 === e
                    ? void 0
                    : e.toLowerCase()
                ),
                n();
            } catch (e) {
              console.log(e), w.ZP.error(null == e ? void 0 : e.message);
            }
          };
        (0, b.useEffect)(() => {
          Y(D.B);
        }, []);
        let onLoginSolana = async () => {
            try {
              console.log("onLoginSolana publicKeySolana", G, R),
                await new Promise((e) => setTimeout(e, 2e3)),
                await Q(),
                K(!0);
            } catch (e) {
              console.log("onLoginSolana", e),
                n(),
                w.ZP.error(null == e ? void 0 : e.message);
            }
          },
          J = (0, b.useCallback)(async () => {
            try {
              if (!Z || !G || H) return;
              T(!0);
              let e = null == G ? void 0 : G.toString(),
                { message: t } = await y({ wallet_address: e }),
                o = new TextEncoder().encode(t),
                a = await (null == q ? void 0 : q(o)),
                c = x.Z.encode(a);
              console.log("sign", a, c),
                await p({ wallet_address: e, signature: c }),
                u("solana"),
                K(!1),
                n();
            } catch (e) {
              console.log(e), w.ZP.error(null == e ? void 0 : e.message);
            } finally {
              T(!1);
            }
          }, [y, Z, H, p, G, n, u, q]);
        (0, b.useEffect)(() => {
          J();
        }, [Z]);
        let handleSwitchNetwork = (e) => {
          let t = !!(null == $ ? void 0 : $[e]),
            a = !!(null == $ ? void 0 : $[i]);
          if ((console.log("chainId", e, i, t, a), t && a))
            o(
              { chainId: null == $ ? void 0 : $[e] },
              {
                onSuccess: () => {
                  var t;
                  console.log("switchChain onSuccess"),
                    u(
                      null === O.sp || void 0 === O.sp
                        ? void 0
                        : null === (t = O.sp[null == $ ? void 0 : $[e]]) ||
                          void 0 === t
                        ? void 0
                        : t.toLowerCase()
                    ),
                    n();
                },
              }
            );
          else if (t && !a) {
            try {
              U.disconnect();
            } catch (e) {
              console.log("error", e);
            }
            onLoginEvm();
          } else if (!t && a) {
            try {
              B();
            } catch (e) {
              console.log("error", e);
            }
            onLoginSolana();
          }
        };
        return (0, f.jsxs)(g.Z, {
          title: "Select a Network",
          centered: !0,
          open: t,
          width: 552,
          closable: !0,
          footer: null,
          onCancel: n,
          className: F().SwitchNetworkModal,
          children: [
            (0, f.jsx)("div", {
              className: "info-desc",
              children: "to start exploring Lucy",
            }),
            (0, f.jsxs)("div", {
              className: "flex flex-col gap-[24px]",
              children: [
                (0, f.jsxs)("div", {
                  className: v()(
                    "chain-item flex items-center gap-[15px] rounded-[4px]",
                    { "is-checked": "solana" === i }
                  ),
                  onClick: () => handleSwitchNetwork("solana"),
                  children: [
                    (0, f.jsx)(network_solana, {}),
                    (0, f.jsx)("div", {
                      className: "text-[16px] font-medium text-textPrimary",
                      children: O.bY.solana,
                    }),
                    (0, f.jsx)(A.Z, { className: "checked-icon" }),
                  ],
                }),
                (0, f.jsxs)("div", {
                  className: v()(
                    "chain-item flex items-center gap-[15px] rounded-[4px]",
                    { "is-checked": "evm" === i }
                  ),
                  onClick: () => handleSwitchNetwork("evm"),
                  children: [
                    (0, f.jsx)(network_evm, {}),
                    (0, f.jsx)("div", {
                      className: "text-[16px] font-medium text-textPrimary",
                      children: O.bY.evm,
                    }),
                    (0, f.jsx)(A.Z, { className: "checked-icon" }),
                  ],
                }),
                (0, f.jsxs)("div", {
                  className: v()(
                    "chain-item flex items-center gap-[15px] rounded-[4px]",
                    { "is-checked": "bsc" === i }
                  ),
                  onClick: () => handleSwitchNetwork("bsc"),
                  children: [
                    (0, f.jsx)(network_bsc, {}),
                    (0, f.jsx)("div", {
                      className: "text-[16px] font-medium text-textPrimary",
                      children: O.bY.bsc,
                    }),
                    (0, f.jsx)(A.Z, { className: "checked-icon" }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    23697: function (e, t, n) {
      "use strict";
      n.d(t, {
        C: function () {
          return SwitchWalletModal;
        },
      });
      var o,
        a,
        c,
        l,
        s,
        r,
        i,
        u,
        d,
        m,
        h,
        f,
        g,
        w = n(85893),
        p = n(56697),
        v = n(40959),
        x = n(94184),
        _ = n.n(x),
        y = n(25893),
        E = n(20583),
        S = n(59598),
        k = n(8768),
        b = n(48486),
        C = n(48583),
        M = n(15103);
      let L = { metamask: "Metamask", phantom: "Phantom" },
        N = (0, M.cn)("");
      var j = n(15324),
        z = n(1066),
        O = n.n(z),
        P = n(67294);
      function _extends() {
        return (_extends = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(this, arguments);
      }
      var wallet_metamask = function (e) {
        return P.createElement(
          "svg",
          _extends(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 20,
              height: 20,
              fill: "none",
            },
            e
          ),
          o ||
            (o = P.createElement("path", {
              fill: "#F5841F",
              d: "m17.063 9.99.75-.86-.326-.234.52-.469-.401-.297.52-.383-.335-.255.542-2.591-.825-2.401m0 0-5.3 1.923H7.792L2.492 2.5l-.825 2.4.553 2.592-.347.255.532.384-.402.297.521.467-.325.233.748.861-1.14 3.442 1.054 3.517 3.702-.999.717.574 1.466.977h2.508l1.466-.977.716-.574 3.714.999 1.064-3.517-1.15-3.442",
            })),
          a ||
            (a = P.createElement("path", {
              fill: "#E27625",
              d: "m17.508 2.5-6.504 4.685 1.206-2.762zm-15.017 0 6.45 4.728-1.15-2.805zm12.683 10.868-1.738 2.57 3.714.999 1.064-3.517zm-13.366.053 1.053 3.517 3.702-1-1.726-2.57z",
            })),
          c ||
            (c = P.createElement("path", {
              fill: "#E27625",
              d: "m6.368 9.012-1.032 1.52 3.67.16-.119-3.847zm7.274 0-2.562-2.21-.075 3.89 3.669-.16zm-7.079 6.927 2.226-1.042-1.922-1.444zm4.658-1.041 2.215 1.041-.304-2.486z",
            })),
          l ||
            (l = P.createElement("path", {
              fill: "#D7C1B3",
              d: "m13.436 15.938-2.215-1.042.184 1.403-.021.595zm-6.873 0 2.063.956-.01-.594.173-1.403z",
            })),
          s ||
            (s = P.createElement("path", {
              fill: "#2F343B",
              d: "m8.658 12.517-1.834-.52 1.303-.585zm2.684 0 .541-1.105 1.304.585z",
            })),
          r ||
            (r = P.createElement("path", {
              fill: "#CC6228",
              d: "m6.563 15.939.326-2.571-2.052.053zm6.559-2.571.315 2.57 1.737-2.517zm1.553-2.837-3.67.16.336 1.827.543-1.105 1.303.585zm-7.85 1.467 1.302-.585.532 1.105.348-1.827-3.67-.16z",
            })),
          i ||
            (i = P.createElement("path", {
              fill: "#E27625",
              d: "m5.336 10.531 1.531 2.922-.043-1.455zm7.85 1.467-.054 1.455 1.542-2.922zm-4.18-1.307-.347 1.827.434 2.167.098-2.847zm1.998 0-.184 1.137.086 2.857.435-2.166z",
            })),
          u ||
            (u = P.createElement("path", {
              fill: "#F5841F",
              d: "m11.342 12.518-.435 2.167.315.213 1.91-1.445.055-1.455zm-4.518-.52.044 1.455 1.921 1.445.304-.213-.434-2.166z",
            })),
          d ||
            (d = P.createElement("path", {
              fill: "#C0AD9E",
              d: "m11.384 16.893.022-.594-.174-.138H8.768l-.152.138.01.594-2.062-.956.716.574 1.468.988h2.507l1.466-.988.717-.573z",
            })),
          m ||
            (m = P.createElement("path", {
              fill: "#2F343B",
              d: "m11.222 14.898-.315-.213H9.093l-.304.213-.173 1.402.151-.138h2.465l.174.139z",
            })),
          h ||
            (h = P.createElement("path", {
              fill: "#763E1A",
              d: "m17.79 7.493.543-2.593-.825-2.4-6.286 4.525 2.42 1.987 3.421.977.75-.86-.326-.233.52-.458-.401-.308.52-.383zM1.668 4.901l.553 2.592-.347.254.521.394-.402.297.521.457-.325.233.76.861 3.42-.977L8.79 7.026 2.492 2.5z",
            })),
          f ||
            (f = P.createElement("path", {
              fill: "#F5841F",
              d: "m17.063 9.989-3.42-.978 1.03 1.52-1.54 2.92 2.04-.03h3.04zM6.368 9.01l-3.42.978-1.14 3.431h3.03l2.03.032-1.532-2.922zm4.636 1.68.216-3.666.99-2.603H7.79l.999 2.603.216 3.665.088 1.147v2.847h1.813l.011-2.847z",
            }))
        );
      };
      function wallet_phantom_extends() {
        return (wallet_phantom_extends = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(this, arguments);
      }
      var wallet_phantom = function (e) {
          return P.createElement(
            "svg",
            wallet_phantom_extends(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 20,
                height: 20,
                fill: "none",
              },
              e
            ),
            g ||
              (g = P.createElement("path", {
                fill: "#000",
                d: "M3.639 16.667c2.127 0 3.725-1.776 4.678-3.18a2.667 2.667 0 0 0-.18.919c0 .82.49 1.404 1.457 1.404 1.328 0 2.745-1.119 3.48-2.324-.05.157-.076.32-.078.485 0 .571.335.932 1.019.932 2.152 0 4.318-3.667 4.318-6.872 0-2.498-1.315-4.697-4.615-4.697-5.8 0-12.051 6.81-12.051 11.208 0 1.728.966 2.125 1.972 2.125m8.082-8.91c0-.62.36-1.056.889-1.056.516 0 .877.435.877 1.056 0 .622-.361 1.07-.877 1.07-.528 0-.89-.448-.89-1.07m2.758 0c0-.62.36-1.056.89-1.056.516 0 .876.435.876 1.056 0 .622-.361 1.07-.877 1.07-.528 0-.889-.448-.889-1.07",
              }))
          );
        },
        Z = n(93214),
        F = n(54306),
        A = n(11163),
        I = n(45145),
        D = n(50994);
      function SwitchWalletModal(e) {
        let { open: t, setClose: n } = e,
          { address: o, isConnected: a, chainId: c } = (0, E.m)(),
          { connect: l, connectors: s, connectAsync: r } = (0, S.$)(),
          i = (0, A.useRouter)(),
          { login: u, isPending: d } = (0, j.f0)(),
          { challenge: m } = (0, j.Lo)(),
          { login: h } = (0, j.mo)(),
          { challenge: f } = (0, j.oT)(),
          { data: g, signMessageAsync: x, isSuccess: M } = (0, k.Q)(),
          [z, K] = (0, C.KO)(D.Jf),
          [B, H] = (0, P.useState)(!1),
          { disconnect: T } = (0, b.q)(),
          {
            publicKey: U,
            signMessage: G,
            connect: q,
            connected: Q,
            connecting: R,
            select: W,
          } = (0, F.O)(),
          [Y] = (0, C.KO)(N),
          handleSwitchNetwork = (e) => {
            console.log(e), e === L.phantom ? onLoginSolana() : onLoginEvm();
          },
          onLoginEvm = async () => {
            try {
              var e;
              console.log("onLoginEvm", o, a, c),
                console.log("onLoginEvm address", o, s);
              let t = s.find(
                (e) => "MetaMask" === e.name || "MetaMask" === e.type
              );
              if (!t) {
                console.error("MetaMask连接器未找到");
                return;
              }
              a && (await T());
              let l = o,
                d = await r({ connector: t });
              console.log("res", d), (l = d.accounts[0]);
              let { message: h } = await m({ wallet_address: l }),
                f = await x({ message: h });
              await u({ wallet_address: l, signature: f }),
                K(
                  null === D.sp || void 0 === D.sp
                    ? void 0
                    : null ===
                        (e = D.sp[(null == d ? void 0 : d.chainId) || c]) ||
                      void 0 === e
                    ? void 0
                    : e.toLowerCase()
                ),
                i.push("/"),
                n();
            } catch (e) {
              console.log(e), v.ZP.error(null == e ? void 0 : e.message);
            }
          };
        (0, P.useEffect)(() => {
          W(I.B);
        }, []);
        let onLoginSolana = async () => {
            try {
              console.log("onLoginSolana publicKeySolana", U, Q),
                await new Promise((e) => setTimeout(e, 2e3)),
                await q(),
                H(!0);
            } catch (e) {
              console.log("onLoginSolana", e),
                n(),
                v.ZP.error(null == e ? void 0 : e.message);
            }
          },
          $ = (0, P.useCallback)(async () => {
            try {
              if (!B || !U) return;
              let e = null == U ? void 0 : U.toString(),
                { message: t } = await f({ wallet_address: e }),
                o = new TextEncoder().encode(t),
                a = await (null == G ? void 0 : G(o)),
                c = y.Z.encode(a);
              console.log("sign", a, c),
                await h({ wallet_address: e, signature: c }),
                K("solana"),
                H(!1),
                i.push("/"),
                n();
            } catch (e) {
              console.log(e), v.ZP.error(null == e ? void 0 : e.message);
            }
          }, [f, B, h, U, i, n, H, K, G]);
        return (
          (0, P.useEffect)(() => {
            $();
          }, [$]),
          (0, w.jsxs)(p.Z, {
            title: "Connect Wallet",
            centered: !0,
            open: t,
            width: 552,
            closable: !0,
            footer: null,
            onCancel: n,
            className: O().SwitchNetworkModal,
            children: [
              (0, w.jsx)("div", {
                className: "info-desc",
                children:
                  "By connecting to Lucy, you agree to Terms of Service and Privacy Policy.",
              }),
              (0, w.jsxs)("div", {
                className: "flex flex-col gap-[24px]",
                children: [
                  (0, w.jsxs)("div", {
                    className: _()(
                      "chain-item flex items-center gap-[15px] rounded-[4px]",
                      { "is-checked": Y === L.metamask }
                    ),
                    onClick: () => handleSwitchNetwork(L.metamask),
                    children: [
                      (0, w.jsx)(wallet_metamask, {}),
                      (0, w.jsx)("div", {
                        className: "text-[16px] font-medium text-textPrimary",
                        children: L.metamask,
                      }),
                      (0, w.jsx)(Z.Z, { className: "checked-icon" }),
                    ],
                  }),
                  (0, w.jsxs)("div", {
                    className: _()(
                      "chain-item flex items-center gap-[15px] rounded-[4px]",
                      { "is-checked": Y === L.phantom }
                    ),
                    onClick: () => handleSwitchNetwork(L.phantom),
                    children: [
                      (0, w.jsx)(wallet_phantom, {}),
                      (0, w.jsx)("div", {
                        className: "text-[16px] font-medium text-textPrimary",
                        children: L.phantom,
                      }),
                      (0, w.jsx)(Z.Z, { className: "checked-icon" }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    15324: function (e, t, n) {
      "use strict";
      n.d(t, {
        Lo: function () {
          return useChallenge;
        },
        aU: function () {
          return useLogout;
        },
        f0: function () {
          return useLogin;
        },
        mo: function () {
          return useSolanaLogin;
        },
        oT: function () {
          return useSolanaChallenge;
        },
        sQ: function () {
          return useAuthInfo;
        },
      });
      var o = n(98029),
        a = n(74881),
        c = n(74305),
        l = n(90584),
        s = n(79362);
      let useChallenge = () => {
          let { mutateAsync: e, isPending: t } = (0, o.D)({
            mutationFn: (e) => c.e.post(a.P.GEN_ETH_CHALLENGE, e),
            onSuccess: (e) => {},
            onError: (e) => {},
          });
          return { challenge: e, isPending: t };
        },
        useLogin = () => {
          let [e, t] = (0, l.Z)(s.nd, "", { raw: !0 }),
            { mutateAsync: n, isPending: r } = (0, o.D)({
              mutationFn: (e) => c.e.post(a.P.LOGIN, e),
              onSuccess: (e) => {
                t(e.token);
              },
              onError: (e) => {},
            });
          return { login: n, isPending: r };
        },
        useSolanaChallenge = () => {
          let { mutateAsync: e, isPending: t } = (0, o.D)({
            mutationFn: (e) => c.e.post(a.P.SOLANA_CHALLENGE, e),
            onSuccess: (e) => {},
            onError: (e) => {},
          });
          return { challenge: e, isPending: t };
        },
        useSolanaLogin = () => {
          let [e, t] = (0, l.Z)(s.nd, "", { raw: !0 }),
            { mutateAsync: n, isPending: r } = (0, o.D)({
              mutationFn: (e) => c.e.post(a.P.SOLANA_LOGIN, e),
              onSuccess: (e) => {
                t(e.token);
              },
              onError: (e) => {},
            });
          return { login: n, isPending: r };
        },
        useLogout = () => {
          let [e, t, n] = (0, l.Z)(s.nd, null),
            { mutateAsync: r, isPending: i } = (0, o.D)({
              mutationFn: () => c.e.post(a.P.LOGOUT, {}),
              onSuccess: () => {
                n();
              },
              onError: (e) => {},
            });
          return { logout: r, isPending: i };
        },
        useAuthInfo = () => {
          let [e, t] = (0, l.Z)(s.Uy),
            { mutateAsync: n, isPending: r } = (0, o.D)({
              mutationFn: () => c.e.get(a.P.USER_ME, {}),
              onSuccess: (e) => {
                t(e);
              },
              onError: (e) => {},
            });
          return { getUserInfo: n, isPending: r };
        };
    },
    50994: function (e, t, n) {
      "use strict";
      n.d(t, {
        Jf: function () {
          return i;
        },
        U$: function () {
          return l;
        },
        bY: function () {
          return c;
        },
        sp: function () {
          return s;
        },
      });
      var o = n(15103),
        a = n(95495);
      let c = { evm: "Ethereum", bsc: "BSC", solana: "Solana" },
        l = { 1: "Ethereum", 56: "BSC" },
        s = { 1: "evm", 56: "bsc", solana: "solana" },
        r = (0, a.qs)((e) => localStorage.getItem("lucy/targetNetwork")),
        i = (0, o.cn)(
          (e) => e(r),
          (e, t, n) => {
            localStorage.setItem("lucy/targetNetwork", n), t(r, n);
          }
        );
    },
    16534: function (e) {
      e.exports = {
        SwitchNetworkModal: "SwitchNetworkModal_SwitchNetworkModal__t7BcL",
      };
    },
    1066: function (e) {
      e.exports = {
        SwitchNetworkModal: "SwitchWalletModal_SwitchNetworkModal__90lN0",
      };
    },
    59598: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return useConnect;
        },
      });
      var o = n(98029),
        a = n(87675);
      async function connect(e, t) {
        let n;
        if (
          (n =
            "function" == typeof t.connector
              ? e._internal.connectors.setup(t.connector)
              : t.connector).uid === e.state.current
        )
          throw new a.wi();
        try {
          e.setState((e) => ({ ...e, status: "connecting" })),
            n.emitter.emit("message", { type: "connecting" });
          let o = await n.connect({ chainId: t.chainId }),
            a = o.accounts;
          return (
            n.emitter.off("connect", e._internal.events.connect),
            n.emitter.on("change", e._internal.events.change),
            n.emitter.on("disconnect", e._internal.events.disconnect),
            await e.storage?.setItem("recentConnectorId", n.id),
            e.setState((e) => ({
              ...e,
              connections: new Map(e.connections).set(n.uid, {
                accounts: a,
                chainId: o.chainId,
                connector: n,
              }),
              current: n.uid,
              status: "connected",
            })),
            { accounts: a, chainId: o.chainId }
          );
        } catch (t) {
          throw (
            (e.setState((e) => ({
              ...e,
              status: e.current ? "connected" : "disconnected",
            })),
            t)
          );
        }
      }
      var c = n(67294),
        l = n(37122),
        s = n(74751);
      let r = [];
      function getConnectors(e) {
        let t = e.connectors;
        return (0, s.v)(r, t) ? r : ((r = t), t);
      }
      function useConnect(e = {}) {
        let { mutation: t } = e,
          n = (0, l.Z)(e),
          a = (function (e = {}) {
            let t = (0, l.Z)(e);
            return (0, c.useSyncExternalStore)(
              (e) =>
                (function (e, t) {
                  let { onChange: n } = t;
                  return e._internal.connectors.subscribe((e, t) => {
                    n(Object.values(e), t);
                  });
                })(t, { onChange: e }),
              () => getConnectors(t),
              () => getConnectors(t)
            );
          })({ config: n }),
          {
            mutate: s,
            mutateAsync: r,
            ...i
          } = (0, o.D)({
            ...t,
            mutationFn: (e) => connect(n, e),
            mutationKey: ["connect"],
          });
        return (
          (0, c.useEffect)(
            () =>
              n.subscribe(
                ({ status: e }) => e,
                (e, t) => {
                  "connected" === t && "disconnected" === e && i.reset();
                }
              ),
            [n, i]
          ),
          { ...i, connect: s, connectAsync: r, connectors: a }
        );
      }
    },
    48486: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return useDisconnect;
        },
      });
      var o = n(98029);
      async function disconnect(e, t = {}) {
        let n;
        if (t.connector) n = t.connector;
        else {
          let { connections: t, current: o } = e.state,
            a = t.get(o);
          n = a?.connector;
        }
        let o = e.state.connections;
        n &&
          (await n.disconnect(),
          n.emitter.off("change", e._internal.events.change),
          n.emitter.off("disconnect", e._internal.events.disconnect),
          n.emitter.on("connect", e._internal.events.connect),
          o.delete(n.uid)),
          e.setState((e) => {
            if (0 === o.size)
              return {
                ...e,
                connections: new Map(),
                current: void 0,
                status: "disconnected",
              };
            let t = o.values().next().value;
            return { ...e, connections: new Map(o), current: t.connector.uid };
          });
        {
          let t = e.state.current;
          if (!t) return;
          let n = e.state.connections.get(t)?.connector;
          if (!n) return;
          await e.storage?.setItem("recentConnectorId", n.id);
        }
      }
      var a = n(37122),
        c = n(74751);
      let l = [];
      function getConnections(e) {
        let t = [...e.state.connections.values()];
        return "reconnecting" === e.state.status || (0, c.v)(l, t)
          ? l
          : ((l = t), t);
      }
      var s = n(67294);
      function useDisconnect(e = {}) {
        let { mutation: t } = e,
          n = (0, a.Z)(e),
          {
            mutate: l,
            mutateAsync: r,
            ...i
          } = (0, o.D)({
            ...t,
            mutationFn: (e) => disconnect(n, e),
            mutationKey: ["disconnect"],
          });
        return {
          ...i,
          connectors: (function (e = {}) {
            let t = (0, a.Z)(e);
            return (0, s.useSyncExternalStore)(
              (e) =>
                (function (e, t) {
                  let { onChange: n } = t;
                  return e.subscribe(() => getConnections(e), n, {
                    equalityFn: c.v,
                  });
                })(t, { onChange: e }),
              () => getConnections(t),
              () => getConnections(t)
            );
          })({ config: n }).map((e) => e.connector),
          disconnect: l,
          disconnectAsync: r,
        };
      }
    },
    8768: function (e, t, n) {
      "use strict";
      n.d(t, {
        Q: function () {
          return useSignMessage;
        },
      });
      var o = n(98029),
        a = n(13146),
        c = n(81946),
        l = n(42694);
      async function signMessage_signMessage(e, t) {
        let n;
        let { account: o, connector: s, ...r } = t;
        n =
          "object" == typeof o && "local" === o.type
            ? e.getClient()
            : await (0, l.e)(e, { account: o, connector: s });
        let i = (0, c.s)(n, a.l, "signMessage");
        return i({ ...r, ...(o ? { account: o } : {}) });
      }
      var s = n(37122);
      function useSignMessage(e = {}) {
        let { mutation: t } = e,
          n = (0, s.Z)(e),
          {
            mutate: a,
            mutateAsync: c,
            ...l
          } = (0, o.D)({
            ...t,
            mutationFn: (e) => signMessage_signMessage(n, e),
            mutationKey: ["signMessage"],
          });
        return { ...l, signMessage: a, signMessageAsync: c };
      }
    },
  },
]);
