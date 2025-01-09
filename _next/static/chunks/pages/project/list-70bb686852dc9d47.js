(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2868, 9752, 2578, 1443],
  {
    50365: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/project/list",
        function () {
          return n(99873);
        },
      ]);
    },
    74881: function (t, e, n) {
      "use strict";
      n.d(e, {
        P: function () {
          return c;
        },
      });
      let c = {
        LOGIN: "/api/auth/eth/login",
        USER_ME: "/api/auth/me",
        LOGOUT: "/api/auth/logout",
        GEN_ETH_CHALLENGE: "/api/auth/eth/challenge",
        SOLANA_LOGIN: "/api/auth/solana/login",
        SOLANA_CHALLENGE: "/api/auth/solana/challenge",
        CHAT: "/api/chat",
        CHAT_GREETING: "/api/chat/greeting_messages",
        CHAT_HISTORY: "/api/chat/history",
        CHAT_CLEAR: "/api/chat/clear",
        CHAT_EVALUATE: "/api/chat/evaluate_response",
        ACTION_HISTORY: "/api/action/history",
        WORKFLOW: "/api/workflow/",
        WORKFLOW_UPDATE: "/api/workflow/",
        WORKFLOW_CREATE: "/api/workflow/",
        WORKFLOW_DELETE: "/api/workflow/",
        HEALTH_CHECK: "/api/health",
        SUPPORTED_TOKENS: "/api/workflow/token_price/tokens",
        GET_BLOCKS_BY_FILTER: "/api/projects/blocks/",
        GET_PROJECTS: "/api/projects",
        GET_PROJECT_SEARCH: "/api/projects/search/",
        GET_PROJECT_BY_NAME: "/api/projects/",
        GET_TOKEN_BALANCE_WITH_PRICE: "/api/web3_data/token_balance",
        GET_TOKEN_MARKET_INFO: "/api/web3_data/token_market_info",
        GET_TOKEN_MARKET_CHART: "/api/web3_data/token_market_chart",
        GET_USER_ASSETS: "/api/web3_data/assets/",
        GET_STAKE_RESULT: "/api/oauth_data/stake_result",
        GET_TOKEN_PRICE_SIMPLE: "/api/web3_data/token_price_simple",
        GET_SWAP_TOKENS: "/api/web3_data/swap/tokens",
        GET_CAMPAIGN_LIST: "/api/projects/galxe_campaign/list/",
        GET_CAMPAIGN_DETAIL: "/api/projects/galxe_campaign/details/",
        GET_GALEX_USER_INFO: "/api/projects/galxe_campaign/user_info",
        VERIFY_GALEX_CREDENTIALS:
          "/api/projects/galxe_campaign/verify_credentials",
        CLAIM_GALEX_REWARDS: "/api/projects/galxe_campaign/claim/",
      };
    },
    65679: function (t, e, n) {
      "use strict";
      var c = n(85893),
        i = n(6448),
        o = n(48583);
      n(67294),
        (e.Z = (t) => {
          let { children: e } = t,
            [n, u] = (0, o.KO)(i.b);
          return (0, c.jsx)("div", {
            className:
              "relative mt-[20px] overflow-hidden overflow-y-auto rounded-2xl bg-[#fbfbff] transition-all",
            style: {
              height: "calc(100vh - 40px)",
              width: n ? "calc(100vw - 80px)" : "calc(100vw - 220px)",
              marginLeft: n ? "60px" : "200px",
            },
            children: e,
          });
        });
    },
    96229: function (t, e, n) {
      "use strict";
      n.d(e, {
        IE: function () {
          return useChatClear;
        },
        RJ: function () {
          return useChat;
        },
        v2: function () {
          return useChatHistory;
        },
        xY: function () {
          return evaluateChatReq;
        },
      });
      var c = n(98029),
        i = n(74881),
        o = n(74305),
        u = n(79362),
        s = n(14921),
        l = n(48583);
      let useChatHistory = () => {
          let [t, e] = (0, l.KO)(s.tP),
            {
              mutateAsync: n,
              isPending: u,
              isPending: f,
            } = (0, c.D)({
              mutationFn: (t) => o.e.get(i.P.CHAT_HISTORY, t),
              onSuccess: (n) => {
                let c = new Map();
                [...t, ...n.items].forEach((t) => {
                  c.has(t.id) || c.set(t.id, t);
                }),
                  e(
                    Array.from(c.values())
                      .sort((t, e) => t.id - e.id)
                      .filter((t) => !t.erased)
                  );
              },
              onError: (t) => {},
            });
          return { getChatHistory: n, isPending: u, isLoading: f };
        },
        useChat = () => {
          let [, t] = (0, l.KO)(s.oF),
            [, e] = (0, l.KO)(s.WQ),
            [, n] = (0, l.KO)(s.$c),
            [, f] = (0, l.KO)(s.q_),
            [, d] = (0, l.KO)(s.Ag),
            [, p] = (0, l.KO)(s._j),
            [, _] = (0, l.KO)(s.F5),
            [, h] = (0, l.KO)(s.mt),
            [, g] = (0, l.KO)(s.n4),
            [, E] = (0, l.KO)(s.DE),
            { mutateAsync: m, isPending: v } = (0, c.D)({
              mutationFn: (t) => o.e.post(i.P.CHAT, t),
              onSuccess: (c) => {
                c.intent === u.$M
                  ? (d(!1),
                    _(!1),
                    h(1),
                    g(1),
                    E(""),
                    n(c.intent_details),
                    t(!0),
                    e(u._T))
                  : c.intent === u.ws &&
                    (t(!1), e(u._T), p(!1), h(1), g(1), E(""), _(!1), d(!0));
              },
              onError: (t) => {},
            });
          return { sendMessage: m, isLoading: v };
        },
        useChatClear = () => {
          let { mutateAsync: t, isPending: e } = (0, c.D)({
            mutationFn: () => o.e.post(i.P.CHAT_CLEAR, {}),
            onSuccess: (t) => {},
            onError: (t) => {},
          });
          return { chatClear: t, isLoading: e };
        },
        evaluateChatReq = async (t, e) => {
          o.e.post(
            i.P.CHAT_EVALUATE,
            {},
            { params: { message_uuid: t, evaluation: e } }
          );
        };
    },
    99873: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return Index;
          },
        });
      var c = n(85893),
        i = n(11163),
        o = n(70748),
        u = n(9008),
        s = n.n(u),
        l = n(20164),
        f = n(65679);
      let d = (0, o.ZP)(() =>
        Promise.all([n.e(6760), n.e(945), n.e(8592), n.e(8413)]).then(
          n.bind(n, 8413)
        )
      );
      function Index() {
        return (
          (0, i.useRouter)(),
          (0, c.jsxs)("div", {
            className: "w-full h-full",
            children: [
              (0, c.jsx)(s(), {
                children: (0, c.jsx)("title", { children: "Clara" }),
              }),
              (0, c.jsx)(l.default, {}),
              (0, c.jsx)(f.Z, {
                children: (0, c.jsx)("div", {
                  className: "flex justify-center w-full",
                  children: (0, c.jsx)(d, {}),
                }),
              }),
            ],
          })
        );
      }
    },
    6448: function (t, e, n) {
      "use strict";
      n.d(e, {
        b: function () {
          return i;
        },
      });
      var c = n(15103);
      let i = (0, c.cn)(!1);
    },
    14921: function (t, e, n) {
      "use strict";
      n.d(e, {
        $1: function () {
          return J;
        },
        $c: function () {
          return w;
        },
        Ag: function () {
          return l;
        },
        BY: function () {
          return j;
        },
        DE: function () {
          return f;
        },
        DT: function () {
          return x;
        },
        EJ: function () {
          return E;
        },
        F5: function () {
          return d;
        },
        FH: function () {
          return m;
        },
        Hh: function () {
          return L;
        },
        Ie: function () {
          return S;
        },
        Jb: function () {
          return P;
        },
        LK: function () {
          return C;
        },
        Lg: function () {
          return A;
        },
        Mk: function () {
          return v;
        },
        NU: function () {
          return q;
        },
        P1: function () {
          return N;
        },
        QL: function () {
          return O;
        },
        Uj: function () {
          return k;
        },
        VV: function () {
          return B;
        },
        WQ: function () {
          return o;
        },
        WS: function () {
          return G;
        },
        Y7: function () {
          return K;
        },
        Yj: function () {
          return T;
        },
        Zs: function () {
          return M;
        },
        _j: function () {
          return s;
        },
        dv: function () {
          return U;
        },
        hz: function () {
          return F;
        },
        mc: function () {
          return y;
        },
        mt: function () {
          return h;
        },
        n4: function () {
          return _;
        },
        oF: function () {
          return u;
        },
        q_: function () {
          return p;
        },
        r4: function () {
          return W;
        },
        sH: function () {
          return D;
        },
        sm: function () {
          return R;
        },
        tP: function () {
          return g;
        },
        vA: function () {
          return V;
        },
        vr: function () {
          return Y;
        },
        w7: function () {
          return I;
        },
        xg: function () {
          return b;
        },
        yU: function () {
          return H;
        },
      });
      var c = n(15103),
        i = n(79362);
      (0, c.cn)(0);
      let o = (0, c.cn)(i._T),
        u = (0, c.cn)(!1),
        s = (0, c.cn)(!1),
        l = (0, c.cn)(!1),
        f = (0, c.cn)(""),
        d = (0, c.cn)(!1),
        p = (0, c.cn)({}),
        _ = (0, c.cn)(1);
      (0, c.cn)({});
      let h = (0, c.cn)(1),
        g = (0, c.cn)([]),
        E = (0, c.cn)(1),
        m = (0, c.cn)(!0),
        v = (0, c.cn)(!1),
        w = (0, c.cn)({
          datafeed_config: {
            name: "token_price",
            parameters_map: { token_name: "eth" },
          },
          filter_config: {
            name: "greater_than",
            parameters_map: { comparator: "" },
          },
          action_config: [
            { name: "send_email", parameters_map: { receiver: "" } },
          ],
          title: "",
        });
      (0, c.cn)(""), (0, c.cn)([]);
      let A = (0, c.cn)({}),
        C = (0, c.cn)({}),
        y = (0, c.cn)({}),
        O = (0, c.cn)({}),
        T = (0, c.cn)({}),
        b = (0, c.cn)({}),
        k = (0, c.cn)(""),
        S = (0, c.cn)(""),
        P = (0, c.cn)({}),
        j = (0, c.cn)({}),
        x = (0, c.cn)({
          single_stake: !1,
          asset_check: !0,
          gas_check: !0,
          button_block: !0,
          oauth: !0,
          stake_result: !0,
          swap: !0,
        }),
        I = (0, c.cn)({
          single_stake: !1,
          asset_check: !0,
          gas_check: !0,
          button_block: !0,
          oauth: !0,
          stake_result: !0,
          swap: !0,
          completed: !0,
        }),
        R = (0, c.cn)([]),
        N = (0, c.cn)([]),
        L = (0, c.cn)({}),
        G = (0, c.cn)({}),
        H = (0, c.cn)({});
      (0, c.cn)([]);
      let K = (0, c.cn)([]),
        F = (0, c.cn)({ currencyA: "1", currencyB: "1" }),
        W = (0, c.cn)({ currencyAUsd: "0", currencyBUsd: "" }),
        D = (0, c.cn)({
          single_stake: !1,
          asset_check_1: !0,
          asset_check_2: !0,
          gas_check: !0,
          oauth: !1,
          stake_result: !1,
          button_block: !0,
          swap: !0,
          completed: !0,
        }),
        U = (0, c.cn)({
          pancake_pair_single_input: !1,
          asset_check_pancake_pair: !0,
          gas_check: !0,
          oauth: !1,
          pancake_lp_stake: !0,
          completed: !0,
        }),
        M = (0, c.cn)({
          pancake_pair_single_input: !1,
          asset_check_pancake_pair: !0,
          gas_check: !0,
          oauth: !1,
          pancake_lp_stake: !0,
          completed: !0,
        }),
        q = (0, c.cn)([]),
        V = (0, c.cn)(null),
        B = (0, c.cn)(null),
        Y = (0, c.cn)(100),
        J = (0, c.cn)({});
    },
    73565: function (t, e, n) {
      "use strict";
      n.d(e, {
        Tg: function () {
          return formatAddress;
        },
        uf: function () {
          return formatNumber;
        },
      });
      let formatAddress = (t) => {
          let { start: e = 0, end: n = -4, address: c = "" } = t;
          return c ? c.slice(0, e) + "..." + c.slice(n) : "";
        },
        formatNumber = function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5;
          if (void 0 === t) return "--";
          if (0 === t) return "0";
          let n = t.toFixed(e),
            [c, i] = n.split(".");
          return parseInt(c) + parseInt(i) === 0
            ? t.toExponential(e)
            : t < 1
            ? t.toFixed(e)
            : t >= 1
            ? t.toLocaleString(void 0, { maximumFractionDigits: e })
            : void 0;
        };
    },
    79362: function (t, e, n) {
      "use strict";
      n.d(e, {
        $M: function () {
          return s;
        },
        Uy: function () {
          return o;
        },
        _T: function () {
          return c;
        },
        dh: function () {
          return p;
        },
        nd: function () {
          return i;
        },
        r7: function () {
          return d;
        },
        v9: function () {
          return u;
        },
        wQ: function () {
          return f;
        },
        ws: function () {
          return l;
        },
      });
      let c = 1,
        i = "auth_token",
        o = "auth_user_info",
        u = "user",
        s = "create_monitor_workflow",
        l = "check_my_workflows",
        f = "delysium-agi-staking-pool",
        d = "pancake-v3-liquidity-pool",
        p = "bridge";
    },
    74305: function (t, e, n) {
      "use strict";
      n.d(e, {
        e: function () {
          return HttpClient;
        },
      });
      var c = n(79362),
        i = n(5121),
        o = n(11163),
        u = n.n(o);
      let s = i.Z.create({
        baseURL: "https://entry-api.lucyos.ai/",
        withCredentials: !0,
        timeout: 5e6,
        headers: { "Content-Type": "application/json" },
      });
      s.interceptors.request.use((t) => {
        let e = window.localStorage.getItem(c.nd);
        return (
          (t.headers = {
            ...t.headers,
            Authorization: "Bearer ".concat(e || ""),
          }),
          t
        );
      }),
        s.interceptors.response.use(
          (t) => t,
          (t) => (
            ((t.response && 401 === t.response.status) ||
              (t.response && 403 === t.response.status)) &&
              (localStorage.removeItem(c.nd), u().replace("/enter")),
            Promise.reject(t)
          )
        );
      let HttpClient = class HttpClient {
        static async get(t, e) {
          let n = await s.get(t, { params: e });
          return n.data;
        }
        static async post(t, e, n) {
          let c = await s.post(t, e, n);
          return c.data;
        }
        static async put(t, e) {
          let n = await s.put(t, e);
          return n.data;
        }
        static async delete(t, e) {
          let n = await s.delete(t, { params: e });
          return n.data;
        }
      };
    },
    53250: function (t, e, n) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var c = n(67294),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        o = c.useState,
        u = c.useEffect,
        s = c.useLayoutEffect,
        l = c.useDebugValue;
      function r(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
          var n = e();
          return !i(t, n);
        } catch (t) {
          return !0;
        }
      }
      var f =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (t, e) {
              return e();
            }
          : function (t, e) {
              var n = e(),
                c = o({ inst: { value: n, getSnapshot: e } }),
                i = c[0].inst,
                f = c[1];
              return (
                s(
                  function () {
                    (i.value = n), (i.getSnapshot = e), r(i) && f({ inst: i });
                  },
                  [t, n, e]
                ),
                u(
                  function () {
                    return (
                      r(i) && f({ inst: i }),
                      t(function () {
                        r(i) && f({ inst: i });
                      })
                    );
                  },
                  [t]
                ),
                l(n),
                n
              );
            };
      e.useSyncExternalStore =
        void 0 !== c.useSyncExternalStore ? c.useSyncExternalStore : f;
    },
    50139: function (t, e, n) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim/with-selector.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var c = n(67294),
        i = n(61688),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        u = i.useSyncExternalStore,
        s = c.useRef,
        l = c.useEffect,
        f = c.useMemo,
        d = c.useDebugValue;
      e.useSyncExternalStoreWithSelector = function (t, e, n, c, i) {
        var p = s(null);
        if (null === p.current) {
          var _ = { hasValue: !1, value: null };
          p.current = _;
        } else _ = p.current;
        var h = u(
          t,
          (p = f(
            function () {
              function a(e) {
                if (!s) {
                  if (
                    ((s = !0), (t = e), (e = c(e)), void 0 !== i && _.hasValue)
                  ) {
                    var n = _.value;
                    if (i(n, e)) return (u = n);
                  }
                  return (u = e);
                }
                if (((n = u), o(t, e))) return n;
                var l = c(e);
                return void 0 !== i && i(n, l) ? n : ((t = e), (u = l));
              }
              var t,
                u,
                s = !1,
                l = void 0 === n ? null : n;
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
            [e, n, c, i]
          ))[0],
          p[1]
        );
        return (
          l(
            function () {
              (_.hasValue = !0), (_.value = h);
            },
            [h]
          ),
          d(h),
          h
        );
      };
    },
    61688: function (t, e, n) {
      "use strict";
      t.exports = n(53250);
    },
    52798: function (t, e, n) {
      "use strict";
      t.exports = n(50139);
    },
    42694: function (t, e, n) {
      "use strict";
      n.d(e, {
        e: function () {
          return getConnectorClient;
        },
      });
      var c = n(41164),
        i = n(48307),
        o = n(24381),
        u = n(87675);
      async function getConnectorClient(t, e = {}) {
        let n;
        if (e.connector) {
          let { connector: t } = e,
            [c, i] = await Promise.all([t.getAccounts(), t.getChainId()]);
          n = { accounts: c, chainId: i, connector: t };
        } else n = t.state.connections.get(t.state.current);
        if (!n) throw new u.aH();
        let s = e.chainId ?? n.chainId,
          l = n.connector;
        if (l.getClient) return l.getClient({ chainId: s });
        let f = (0, o.T)(e.account ?? n.accounts[0]),
          d = t.chains.find((t) => t.id === s),
          p = await n.connector.getProvider({ chainId: s });
        if (e.account && !n.accounts.includes(f.address))
          throw new u.JK({ address: f.address, connector: l });
        return (0, c.e)({
          account: f,
          chain: d,
          name: "Connector Client",
          transport: (t) =>
            (function (t, e = {}) {
              let {
                key: n = "custom",
                name: c = "Custom Provider",
                retryDelay: o,
              } = e;
              return ({ retryCount: u }) =>
                (0, i.q)({
                  key: n,
                  name: c,
                  request: t.request.bind(t),
                  retryCount: e.retryCount ?? u,
                  retryDelay: o,
                  type: "custom",
                });
            })(p)({ ...t, retryCount: 0 }),
        });
      }
    },
    74751: function (t, e, n) {
      "use strict";
      n.d(e, {
        v: function () {
          return function deepEqual(t, e) {
            if (t === e) return !0;
            if (t && e && "object" == typeof t && "object" == typeof e) {
              let n, c;
              if (t.constructor !== e.constructor) return !1;
              if (Array.isArray(t) && Array.isArray(e)) {
                if ((n = t.length) !== e.length) return !1;
                for (c = n; 0 != c--; ) if (!deepEqual(t[c], e[c])) return !1;
                return !0;
              }
              if (t.valueOf !== Object.prototype.valueOf)
                return t.valueOf() === e.valueOf();
              if (t.toString !== Object.prototype.toString)
                return t.toString() === e.toString();
              let i = Object.keys(t);
              if ((n = i.length) !== Object.keys(e).length) return !1;
              for (c = n; 0 != c--; )
                if (!Object.prototype.hasOwnProperty.call(e, i[c])) return !1;
              for (c = n; 0 != c--; ) {
                let n = i[c];
                if (n && !deepEqual(t[n], e[n])) return !1;
              }
              return !0;
            }
            return t != t && e != e;
          };
        },
      });
    },
    81946: function (t, e, n) {
      "use strict";
      function getAction(t, e, n) {
        let c = t[e.name ?? n];
        return "function" == typeof c ? c : (n) => e(t, n);
      }
      n.d(e, {
        s: function () {
          return getAction;
        },
      });
    },
    13146: function (t, e, n) {
      "use strict";
      n.d(e, {
        l: function () {
          return signMessage;
        },
      });
      var c = n(24381),
        i = n(16128),
        o = n(9362);
      async function signMessage(t, { account: e = t.account, message: n }) {
        if (!e) throw new i.o({ docsPath: "/docs/actions/wallet/signMessage" });
        let u = (0, c.T)(e);
        if ("local" === u.type) return u.signMessage({ message: n });
        let s =
          "string" == typeof n
            ? (0, o.$G)(n)
            : n.raw instanceof Uint8Array
            ? (0, o.NC)(n.raw)
            : n.raw;
        return t.request(
          { method: "personal_sign", params: [s, u.address] },
          { retryCount: 0 }
        );
      }
    },
    16128: function (t, e, n) {
      "use strict";
      n.d(e, {
        o: function () {
          return AccountNotFoundError;
        },
      });
      var c = n(31273);
      let AccountNotFoundError = class AccountNotFoundError extends c.G {
        constructor({ docsPath: t } = {}) {
          super(
            "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.",
            { docsPath: t, docsSlug: "account" }
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
    20583: function (t, e, n) {
      "use strict";
      n.d(e, {
        m: function () {
          return useAccount;
        },
      });
      var c = n(74751);
      function getAccount(t) {
        let e = t.state.current,
          n = t.state.connections.get(e),
          c = n?.accounts,
          i = c?.[0],
          o = t.chains.find((t) => t.id === n?.chainId),
          u = t.state.status;
        switch (u) {
          case "connected":
            return {
              address: i,
              addresses: c,
              chain: o,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !0,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !1,
              status: u,
            };
          case "reconnecting":
            return {
              address: i,
              addresses: c,
              chain: o,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !!i,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !0,
              status: u,
            };
          case "connecting":
            return {
              address: i,
              addresses: c,
              chain: o,
              chainId: n?.chainId,
              connector: n?.connector,
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
      var i = n(37122),
        o = n(67294),
        u = n(52798);
      let isPlainObject = (t) => "object" == typeof t && !Array.isArray(t);
      function useAccount(t = {}) {
        let e = (0, i.Z)(t);
        return (function (t, e, n = e, i = c.v) {
          let s = (0, o.useRef)([]),
            l = (0, u.useSyncExternalStoreWithSelector)(
              t,
              e,
              n,
              (t) => t,
              (t, e) => {
                if (isPlainObject(t) && isPlainObject(e) && s.current.length) {
                  for (let n of s.current) {
                    let c = i(t[n], e[n]);
                    if (!c) return !1;
                  }
                  return !0;
                }
                return i(t, e);
              }
            );
          if (isPlainObject(l)) {
            let t = { ...l };
            return (
              Object.defineProperties(
                t,
                Object.entries(t).reduce(
                  (t, [e, n]) => ({
                    ...t,
                    [e]: {
                      configurable: !1,
                      enumerable: !0,
                      get: () => (
                        s.current.includes(e) || s.current.push(e), n
                      ),
                    },
                  }),
                  {}
                )
              ),
              t
            );
          }
          return l;
        })(
          (t) =>
            (function (t, e) {
              let { onChange: n } = e;
              return t.subscribe(() => getAccount(t), n, {
                equalityFn(t, e) {
                  let { connector: n, ...i } = t,
                    { connector: o, ...u } = e;
                  return (0, c.v)(i, u) && n?.id === o?.id && n?.uid === o?.uid;
                },
              });
            })(e, { onChange: t }),
          () => getAccount(e)
        );
      }
    },
    37122: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return useConfig;
        },
      });
      var c = n(67294),
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
      function useConfig(t = {}) {
        let e = t.config ?? (0, c.useContext)(i.V);
        if (!e) throw new WagmiProviderNotFoundError();
        return e;
      }
    },
  },
  function (t) {
    t.O(
      0,
      [
        3325, 1823, 4653, 1664, 2844, 4055, 792, 2891, 6018, 164, 9774, 2888,
        179,
      ],
      function () {
        return t((t.s = 50365));
      }
    ),
      (_N_E = t.O());
  },
]);
