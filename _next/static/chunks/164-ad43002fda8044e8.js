"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [164],
  {
    20164: function (e, s, l) {
      l.r(s);
      var t = l(85893),
        i = l(15324),
        a = l(50994),
        r = l(73565),
        c = l(54306),
        d = l(48583),
        n = l(25675),
        o = l.n(n),
        f = l(11163),
        h = l(67294),
        x = l(20583),
        m = l(48486),
        u = l(58413),
        v = l(23697),
        p = l(96229),
        j = l(14921),
        g = l(45145),
        b = l(41664),
        N = l.n(b),
        w = l(31929),
        y = l(77834),
        k = l(6448);
      s.default = () => {
        var e, s, l, n;
        let b = (0, f.useRouter)(),
          { logout: K } = (0, i.aU)(),
          C = (0, c.O)(),
          { address: O, isConnected: S, chain: E } = (0, x.m)(),
          [F, q] = (0, h.useState)(""),
          [T, _] = (0, h.useState)(!1),
          [D, M] = (0, h.useState)(!1),
          [A, P] = (0, d.KO)(a.Jf),
          { chatClear: B } = (0, p.IE)(),
          [J, L] = (0, d.KO)(j.tP),
          [R, U] = (0, d.KO)(j.Mk),
          [I, $] = (0, d.KO)(j.EJ),
          [z, G] = (0, d.KO)(j.oF),
          [H, Q] = (0, d.KO)(j._j),
          [V, W] = (0, d.KO)(j.Ag),
          [X, Y] = (0, d.KO)(j.F5),
          [Z, ee] = (0, d.KO)(k.b);
        (0, h.useEffect)(() => {
          try {
            "solana" === A &&
              (C.select(g.B),
              setTimeout(async () => {
                await C.connect();
              }, 1e3));
          } catch (e) {
            console.log("error", e);
          }
        }, [A, C]);
        let es = (0, h.useMemo)(
            () => null != C && !!C.publicKey && "solana" === A,
            [A, null == C ? void 0 : C.publicKey]
          ),
          el = (0, h.useMemo)(() => {
            var e;
            return (
              "solana" === A &&
              (null == C
                ? void 0
                : null === (e = C.publicKey) || void 0 === e
                ? void 0
                : e.toString())
            );
          }, [A, null == C ? void 0 : C.publicKey]),
          et = (0, h.useMemo)(
            () => null != C && !!C.connected && "solana" === A,
            [A, null == C ? void 0 : C.connected]
          ),
          { disconnect: ei } = (0, m.q)({
            mutation: {
              onSuccess: async () => {
                await K(), b.push("/enter");
              },
            },
          });
        (0, h.useEffect)(() => {
          el
            ? q((0, r.Tg)({ start: 7, end: -5, address: el }))
            : O && q((0, r.Tg)({ start: 7, end: -5, address: O }));
        }, [O, el]);
        let ea = (0, h.useCallback)(() => {
          try {
            C.disconnect();
          } catch (e) {
            console.log("error", e);
          }
          try {
            ei();
          } catch (e) {
            console.log("error", e);
          }
          b.push("/enter");
        }, [ei, b, C]);
        return (0, t.jsxs)("div", {
          className: "fixed top-0 left-0",
          style: { width: Z ? "60px" : "200px" },
          children: [
            Z
              ? (0, t.jsx)(t.Fragment, {
                  children: (0, t.jsxs)("div", {
                    className:
                      "inline-flex h-[100vh] flex-col items-center justify-between bg-[#edeeff] px-4 pb-[20px] pt-6",
                    children: [
                      (0, t.jsxs)("div", {
                        className:
                          "flex flex-col items-start justify-start gap-[34px]",
                        children: [
                          (0, t.jsx)("div", {
                            className: "relative h-10",
                            children: (0, t.jsx)("div", {
                              className:
                                "absolute left-[5px] top-[5px] h-[29.51px] w-[26.48px]",
                              children: (0, t.jsx)("div", {
                                className:
                                  "absolute left-0 top-0 h-[29.51px] w-[26.48px]",
                                children: (0, t.jsx)(o(), {
                                  src: "/lucy-light-icon.svg",
                                  width: 80,
                                  height: 40,
                                  alt: "aside-logo",
                                  className: "",
                                }),
                              }),
                            }),
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "flex flex-col items-start self-stretch justify-start gap-3 h-9",
                            children: [
                              (0, t.jsx)(N(), {
                                href: "/chat?from=".concat(
                                  (
                                    null == b
                                      ? void 0
                                      : null === (e = b.query) || void 0 === e
                                      ? void 0
                                      : e.name
                                  )
                                    ? "/project/".concat(
                                        null == b
                                          ? void 0
                                          : null === (s = b.query) ||
                                            void 0 === s
                                          ? void 0
                                          : s.name
                                      )
                                    : null == b
                                    ? void 0
                                    : b.asPath
                                ),
                                className: "w-full",
                                children: (0, t.jsx)("div", {
                                  className:
                                    "inline-flex items-center justify-start gap-2 rounded-lg border border-[#7d5fa3]/30 bg-[#fbfbff] p-2",
                                  children: (0, t.jsx)("div", {
                                    className: "relative w-5 h-5",
                                    children: (0, t.jsx)(o(), {
                                      src: "/img/aside/chat.svg",
                                      width: 20,
                                      height: 20,
                                      alt: "chat",
                                      className: "",
                                    }),
                                  }),
                                }),
                              }),
                              (0, t.jsx)(N(), {
                                href: "/project/list",
                                className: "w-full",
                                children: (0, t.jsx)("div", {
                                  className:
                                    "inline-flex items-center justify-start gap-2 rounded-lg border border-[#7d5fa3]/30 bg-[#fbfbff] p-2",
                                  children: (0, t.jsx)("div", {
                                    className: "relative w-5 h-5",
                                    children: (0, t.jsx)(o(), {
                                      src: "/img/aside/discover.svg",
                                      width: 20,
                                      height: 20,
                                      alt: "discover",
                                      className: "",
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "flex flex-col items-start self-stretch justify-start gap-2",
                        children: (0, t.jsx)("div", {
                          className:
                            "inline-flex h-9 w-9 items-center justify-center gap-2 rounded-lg border border-[#7d5fa3]/30 bg-[#fbfbff] p-2 hover:cursor-pointer",
                          onClick: () => {
                            ee(!1);
                          },
                          children: (0, t.jsx)("div", {
                            className: "relative w-5 h-5",
                            children: (0, t.jsx)("div", {
                              className: "",
                              children: (0, t.jsx)(o(), {
                                src: "/img/aside/aside-arrow-right.svg",
                                width: 24,
                                height: 24,
                                alt: "aside-arrow-right",
                                className: "",
                              }),
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                })
              : (0, t.jsx)(t.Fragment, {
                  children: (0, t.jsxs)("div", {
                    className:
                      "flex h-[100vh] flex-col items-start justify-between bg-[#edeeff] px-4 pb-[20px] pt-6 transition-all ",
                    children: [
                      (0, t.jsxs)("div", {
                        className:
                          "flex h-[111px] flex-col items-start justify-start gap-[34px] self-stretch",
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "inline-flex items-center self-stretch justify-between",
                            children: (0, t.jsx)("div", {
                              className: "flex items-center justify-center ",
                              children: (0, t.jsx)("div", {
                                className: "relative",
                                children: (0, t.jsx)(o(), {
                                  src: "/img/aside/logo.png",
                                  width: 80,
                                  height: 40,
                                  alt: "aside-logo",
                                  className: "",
                                }),
                              }),
                            }),
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex flex-col w-full gap-3",
                            children: [
                              (0, t.jsx)(N(), {
                                href: "/chat?from=".concat(
                                  (
                                    null == b
                                      ? void 0
                                      : null === (l = b.query) || void 0 === l
                                      ? void 0
                                      : l.name
                                  )
                                    ? "/project/".concat(
                                        null == b
                                          ? void 0
                                          : null === (n = b.query) ||
                                            void 0 === n
                                          ? void 0
                                          : n.name
                                      )
                                    : null == b
                                    ? void 0
                                    : b.asPath
                                ),
                                className: "w-full",
                                children: (0, t.jsx)("div", {
                                  className:
                                    "flex h-[37px] flex-col items-start justify-start gap-3 self-stretch hover:cursor-pointer",
                                  children: (0, t.jsxs)("div", {
                                    className:
                                      "inline-flex items-center justify-between self-stretch rounded-lg border border-[#7d5fa3]/30 bg-[#fbfbff] px-3 py-2",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className:
                                          " text-sm font-medium text-[#7d5fa3]",
                                        children: "Talk to Clara",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "relative w-5 h-5",
                                        children: (0, t.jsx)(o(), {
                                          src: "/img/aside/chat.svg",
                                          width: 20,
                                          height: 20,
                                          alt: "chat",
                                          className: "",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              (0, t.jsx)(N(), {
                                href: "/project/list",
                                className: "w-full",
                                children: (0, t.jsx)("div", {
                                  className:
                                    "flex h-[37px] flex-col items-start justify-start gap-3 self-stretch hover:cursor-pointer",
                                  children: (0, t.jsxs)("div", {
                                    className:
                                      "inline-flex items-center justify-between self-stretch rounded-lg border border-[#7d5fa3]/30 bg-[#fbfbff] px-3 py-2",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className:
                                          " text-sm font-medium text-[#7d5fa3]",
                                        children: "Discover",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "relative w-5 h-5",
                                        children: (0, t.jsx)(o(), {
                                          src: "/img/aside/discover.svg",
                                          width: 20,
                                          height: 20,
                                          alt: "discover",
                                          className: "",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "flex flex-col items-center self-stretch justify-start gap-2",
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "h-[1px] w-full bg-[#7D5FA3] opacity-[0.1]",
                          }),
                          (0, t.jsx)(w.default, {
                            theme: {
                              components: {
                                Dropdown: { padding: 0, paddingBlock: 0 },
                              },
                            },
                            children: (0, t.jsx)(y.default, {
                              overlayStyle: { padding: "0" },
                              dropdownRender: () =>
                                (0, t.jsx)("div", {
                                  onClick: () => ea(),
                                  className:
                                    "inline-flex h-7 w-[168px] items-center justify-center gap-2.5 rounded border border-[#ff6a6a] bg-[#fff1f1] px-3 hover:cursor-pointer",
                                  children: (0, t.jsx)("div", {
                                    className:
                                      "text-center  text-sm font-normal text-[#ff6a6a]",
                                    children: "Log Out",
                                  }),
                                }),
                              placement: "top",
                              children: (0, t.jsx)("div", {
                                className:
                                  "inline-flex h-8 items-center justify-center gap-2.5 self-stretch rounded bg-white px-3 hover:cursor-pointer",
                                children: (0, t.jsx)("div", {
                                  className:
                                    "text-sm font-normal text-center text-black",
                                  children: F,
                                }),
                              }),
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "inline-flex h-8 items-center justify-center gap-2.5 self-stretch rounded bg-[#7d5fa3] px-3 hover:cursor-pointer",
                            onClick: () => _(!0),
                            children: (0, t.jsxs)("div", {
                              className:
                                "text-sm font-normal text-center text-white",
                              children: [
                                S && !et
                                  ? (0, t.jsx)("div", {
                                      children: (null == E ? void 0 : E.id)
                                        ? a.U$[null == E ? void 0 : E.id]
                                        : "",
                                    })
                                  : null,
                                et && es
                                  ? (0, t.jsx)("div", {
                                      children: es ? "Solana" : "",
                                    })
                                  : null,
                              ],
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "h-[1px] w-full bg-[#7D5FA3] opacity-[0.1]",
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "inline-flex h-9 w-full items-center justify-center gap-2 rounded-lg border border-[#7d5fa3]/30 bg-[#fbfbff] p-2 hover:cursor-pointer",
                            onClick: () => {
                              ee(!0);
                            },
                            children: [
                              (0, t.jsx)("div", {
                                className: "relative w-5 h-5",
                                children: (0, t.jsx)(o(), {
                                  src: "/img/aside/aside-arrow-left.svg",
                                  width: 24,
                                  height: 24,
                                  alt: "aside-arrow-left",
                                  className: "hover:cursor-pointer",
                                }),
                              }),
                              (0, t.jsx)("div", {
                                className:
                                  "text-center text-sm font-normal text-[#7d5fa3]",
                                children: "Collapse",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            (0, t.jsx)(u.T, { open: T, setClose: () => _(!1) }),
            (0, t.jsx)(v.C, { open: D, setClose: () => M(!1) }),
          ],
        });
      };
    },
  },
]);
