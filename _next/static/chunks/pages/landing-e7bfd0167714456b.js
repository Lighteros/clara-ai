(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8469],
  {
    15554: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/landing",
        function () {
          return s(42613);
        },
      ]);
    },
    42613: function (e, t, s) {
      "use strict";
      let n, i, a, r, l, c;
      s.r(t),
        s.d(t, {
          __N_SSP: function () {
            return eG;
          },
          default: function () {
            return landing_Landing;
          },
        });
      var o,
        d,
        m,
        u,
        h,
        x,
        g = s(85893),
        v = s(67294),
        f = s(9008),
        j = s.n(f),
        p = s(94184),
        N = s.n(p),
        _ = s(40861),
        b = s(39036);
      function _extends() {
        return (_extends = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var n in s)
                  Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var faqs_bg = function (e) {
          return v.createElement(
            "svg",
            _extends(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 1440 1002",
              },
              e
            ),
            o ||
              (o = v.createElement(
                "g",
                { filter: "url(#faqs-bg_svg__a)" },
                v.createElement("path", {
                  fill: "url(#faqs-bg_svg__b)",
                  d: "M0-160h1440s719 833 0 925C721.001 857 659.5 510 0 765s0-925 0-925",
                })
              )),
            d ||
              (d = v.createElement(
                "defs",
                null,
                v.createElement(
                  "linearGradient",
                  {
                    id: "faqs-bg_svg__b",
                    x1: 733.223,
                    x2: 733.223,
                    y1: 0,
                    y2: 805.926,
                    gradientUnits: "userSpaceOnUse",
                  },
                  v.createElement("stop", { stopColor: "#AF93FF" }),
                  v.createElement("stop", {
                    offset: 0.796,
                    stopColor: "#D3C4FF",
                  }),
                  v.createElement("stop", { offset: 1, stopColor: "#fff" })
                ),
                v.createElement(
                  "filter",
                  {
                    id: "faqs-bg_svg__a",
                    width: 2452.67,
                    height: 1361.09,
                    x: -493.111,
                    y: -360,
                    colorInterpolationFilters: "sRGB",
                    filterUnits: "userSpaceOnUse",
                  },
                  v.createElement("feFlood", {
                    floodOpacity: 0,
                    result: "BackgroundImageFix",
                  }),
                  v.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape",
                  })
                )
              ))
          );
        },
        w = s(73752);
      s(25675), s(78947);
      var y = s(52762),
        k = s(11163),
        L = s(69260),
        S = s.n(L),
        B = s(60340),
        C = s.n(B);
      function PurpleGlowTitle(e) {
        let { children: t } = e;
        return (0, g.jsxs)("div", {
          className: C().PurpleGlowTitle,
          children: [
            (0, g.jsx)("div", {
              className: "title-content layer-front",
              children: t,
            }),
            (0, g.jsx)("div", {
              className: "title-content layer-blur",
              children: t,
            }),
          ],
        });
      }
      var E = s(45567),
        M = s(57992),
        P = s.n(M),
        I = s(56610);
      function MagicalGradButton(e) {
        let {
            children: t,
            onClick: s,
            lightBorder: n,
            purpleColor: i,
            Icon: a = I.Z,
          } = e,
          r = (0, v.useRef)(null),
          {
            docX: l,
            docY: c,
            posX: o,
            posY: d,
            elX: m,
            elY: u,
            elW: h,
            elH: x,
          } = (0, E.Z)(r, {}),
          { elX: f, elY: j } = (0, E.Z)(r, { whenHovered: !0, bound: !0 }),
          handleButtonClick = (e) => {
            s && s(e);
          };
        return (0, g.jsxs)("div", {
          className: N()(P().MagicalGradButton, {
            [P().LightBorder]: n,
            [P().PurpleColor]: i,
            [P().NoIcon]: !a,
          }),
          onClick: (e) => handleButtonClick(e),
          ref: r,
          style: {
            "--x": "".concat(m, "px"),
            "--y": "".concat(u, "px"),
            "--bound-x": "".concat(f - h / 2, "px"),
            "--bound-y": "".concat(j - x / 2, "px"),
            "--rotate": "".concat(
              Math.atan2(m - d - x / 2, u - o - h / 2),
              "rad"
            ),
          },
          children: [
            (0, g.jsxs)("div", {
              className: "button-content flex items-center gap-4",
              children: [t, a && (0, g.jsx)(a, { className: "button-icon" })],
            }),
            (0, g.jsxs)("div", {
              className: "button-background",
              children: [
                (0, g.jsx)("div", { className: "background-blur" }),
                (0, g.jsx)("div", { className: "background-angular" }),
              ],
            }),
          ],
        });
      }
      var T = s(64673),
        A = s(55074),
        D = s(95374),
        O = s.n(D);
      function LandingHero() {
        let e = (0, k.useRouter)(),
          [t, s] = (0, v.useState)(!0);
        return (0, g.jsx)("div", {
          className: O().LandingHero,
          children: (0, g.jsxs)("div", {
            className: "content-part",
            children: [
              (0, g.jsx)(y.Z, { className: "mb-[29px]" }),
              (0, g.jsx)(PurpleGlowTitle, { children: "Making Web3" }),
              (0, g.jsx)(PurpleGlowTitle, { children: "Accessible to Anyone" }),
              (0, g.jsx)("div", {
                className:
                  "relative z-10 mb-[30px] mt-[22px] text-center text-[14px] font-medium text-white",
                children: "Web2 User Today, Web3 Super-User Tomorrow",
              }),
              (0, g.jsxs)("div", {
                className: "cover-container",
                children: [
                  !t && (0, g.jsx)(T.Z, { style: { transform: "scale(0.8)" } }),
                  (0, g.jsx)(S(), {
                    animationData: A,
                    onEnterFrame: () => s(!0),
                    loop: !0,
                  }),
                ],
              }),
              (0, g.jsx)(MagicalGradButton, {
                onClick: () => {
                  e.push("/enter");
                },
                lightBorder: !0,
                children: "Chat Now",
              }),
            ],
          }),
        });
      }
      s(30434);
      var G = s(24930),
        Z = s.n(G),
        F = s(4933),
        z = s(42696),
        H = s(87209),
        W = s(27562),
        R = s(52114),
        q = s(51192),
        U = s(17237);
      let V = [
        { Icon: H.Z, link: F.m.medium },
        { Icon: W.Z, link: F.m.twitter },
        { Icon: R.Z, link: F.m.discord },
        { Icon: q.Z, link: F.m.telegram },
        { Icon: U.Z, link: F.m.youtube },
      ];
      function LandingFooter() {
        let e = new Date().getFullYear();
        return (0, g.jsx)("footer", {
          className: Z().LandingFooter,
          children: (0, g.jsx)("div", {
            className: "limit-narrow-container",
            children: (0, g.jsxs)("div", {
              className: "flex flex-col items-center",
              children: [
                (0, g.jsxs)("div", {
                  className: "flex flex-col items-center gap-6 logo-row",
                  children: [
                    (0, g.jsx)(z.Z, {}),
                    (0, g.jsxs)("div", {
                      className: "flex flex-col items-center subscribe-part",
                      children: [
                        (0, g.jsx)("div", {
                          className: "mb-2 part-title",
                          children: "STAY UP TO DATE",
                        }),
                        (0, g.jsx)("div", {
                          className: "part-desc mb-6 w-[195px] text-center",
                          children:
                            "Sign up to keep track of all things about Clara!",
                        }),
                        (0, g.jsx)("a", {
                          href: "/enter",
                          className: "orange-button",
                          target: "_blank",
                          children: "Chat Now",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, g.jsxs)("div", {
                  className: "flex flex-col justify-center copyright-row",
                  children: [
                    (0, g.jsx)("div", {
                      className: "flex justify-center gap-5 sns-links",
                      children: V.map((e) =>
                        (0, g.jsx)(
                          "a",
                          {
                            href: e.link,
                            className: "sns-item",
                            target: "_blank",
                            children: (0, g.jsx)(e.Icon, {}),
                          },
                          e.link
                        )
                      ),
                    }),
                    (0, g.jsxs)("div", {
                      className: "copyright-text",
                      children: [
                        "Copyright \xa9 ",
                        e,
                        " Delysium. All rights reserved",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      var K = s(52951),
        X = s(68099),
        Y = s.n(X),
        Q = s(13427),
        J = s(24544);
      function DotLabel(e) {
        let {
          needBackground: t = !0,
          theme: s = "green",
          className: n,
          children: i,
        } = e;
        return (0, g.jsxs)("div", {
          className: N()(Y().DotLabel, Y()[s], n, "inline-flex items-center", {
            [Y().needBackground]: t,
          }),
          children: [
            "yellow" === s ? (0, g.jsx)(J.Z, {}) : (0, g.jsx)(Q.Z, {}),
            i,
          ],
        });
      }
      var $ = s(32399),
        ee = s.n($);
      function ShimmerButton(e) {
        let { children: t, className: s } = e;
        return (0, g.jsxs)("div", {
          className: N()(ee().ShimmerButton, s),
          children: [
            (0, g.jsx)("div", { className: "shimmer-effect" }),
            (0, g.jsx)("div", { className: "stars-effect" }),
            (0, g.jsx)("div", { className: "button-content", children: t }),
          ],
        });
      }
      var et = s(66485),
        es = s.n(et);
      function CardTitle(e) {
        let { title: t } = e;
        return (0, g.jsxs)("div", {
          className: "card-title",
          children: [
            t,
            (0, g.jsx)("div", {
              className: "card-title blur-effect",
              children: t,
            }),
          ],
        });
      }
      function BentoGrid() {
        return (
          (0, k.useRouter)(),
          (0, g.jsxs)("div", {
            className: es().BentoGrid,
            children: [
              (0, g.jsxs)(K.E.div, {
                className: "bento-grid-row",
                initial: { opacity: 0, y: "6%" },
                whileInView: { opacity: 1, y: "0%" },
                transition: { duration: 0.4 },
                viewport: { margin: "-30%" },
                children: [
                  (0, g.jsxs)("div", {
                    className: "mint-card cell-main",
                    children: [
                      (0, g.jsx)(DotLabel, {
                        theme: "purple",
                        children: "Features",
                      }),
                      (0, g.jsx)("div", { className: "main-title" }),
                      (0, g.jsx)("div", {
                        className: "card-desc",
                        children:
                          "Clara uses AI, modular infrastructure, and canvas-based user interaction to power a simpler Web3 experience. With automated workflows, Clara manages your on-chain activities in the blink of an eye.",
                      }),
                      (0, g.jsx)("a", {
                        className: "know-button",
                        href: F.m.subscribeTypeForm,
                        target: "_blank",
                        children: "Know More",
                      }),
                    ],
                  }),
                  (0, g.jsx)("div", {
                    className: "mint-card cell-feature feature-nl",
                    children: (0, g.jsxs)("div", {
                      className: "card-content",
                      children: [
                        (0, g.jsxs)("div", {
                          className: "card-cover",
                          children: [
                            (0, g.jsx)("div", {
                              className: "button-container",
                              children: (0, g.jsx)(ShimmerButton, {
                                className: "primary-button",
                                children: "Swap my USDT for BNB on PancakeSwap",
                              }),
                            }),
                            (0, g.jsx)("div", { className: "card-img" }),
                          ],
                        }),
                        (0, g.jsxs)("div", {
                          className: "card-white-bg",
                          children: [
                            (0, g.jsx)(CardTitle, {
                              title: "Natural Language",
                            }),
                            (0, g.jsx)("div", {
                              className: "card-desc",
                              children:
                                "Clara, understands your requests and turns them into workflows.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, g.jsx)("div", {
                    className: "mint-card cell-feature feature-web3",
                    children: (0, g.jsxs)("div", {
                      className: "card-content",
                      children: [
                        (0, g.jsx)("div", {
                          className: "card-cover",
                          children: (0, g.jsx)("div", {
                            className: "card-img",
                          }),
                        }),
                        (0, g.jsxs)("div", {
                          className: "card-white-bg",
                          children: [
                            (0, g.jsx)(CardTitle, { title: "Automate Web3" }),
                            (0, g.jsx)("div", {
                              className: "card-desc",
                              children:
                                "Clara simplifies Web3 by managing everything from basic functions like transfer and staking to a set of complex on-chain interactions.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, g.jsx)("div", {
                    className: "mint-card cell-feature feature-canvas",
                    children: (0, g.jsxs)("div", {
                      className: "card-content",
                      children: [
                        (0, g.jsx)("div", { className: "card-cover" }),
                        (0, g.jsx)("div", { className: "canvas-space" }),
                        (0, g.jsxs)("div", {
                          className: "card-white-bg",
                          children: [
                            (0, g.jsx)("div", { className: "canvas-zoom" }),
                            (0, g.jsx)(CardTitle, { title: "Infinite Canvas" }),
                            (0, g.jsx)("div", {
                              className: "card-desc",
                              children:
                                "Canvas-based UI provides limitless flexibility for executing streamlined workflows, seamlessly integrating with natural language interactions.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, g.jsx)("div", {
                    className: "mint-card cell-feature feature-actions",
                    children: (0, g.jsxs)("div", {
                      className: "card-content",
                      children: [
                        (0, g.jsx)("div", {
                          className: "card-cover",
                          children: (0, g.jsx)("div", {
                            className: "card-img",
                          }),
                        }),
                        (0, g.jsxs)("div", {
                          className: "card-white-bg",
                          children: [
                            (0, g.jsx)(CardTitle, {
                              title: "Modular Infrastructure",
                            }),
                            (0, g.jsx)("div", {
                              className: "card-desc",
                              children:
                                "Modular architecture grants real freedom to users, enabling access to any network and application to craft customized Web3 workflows.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, g.jsx)(K.E.div, {
                className: "flex items-center bento-integration-row mint-card",
                initial: { opacity: 0, y: "5%" },
                whileInView: { opacity: 1, y: "0%" },
                transition: { duration: 0.4 },
                viewport: { margin: "-10%" },
              }),
            ],
          })
        );
      }
      var en = s(62841),
        ei = s.n(en),
        ea = s(89842),
        er = s.n(ea),
        el = s(29982),
        ec = s.n(el),
        eo = s(89619),
        ed = s(55315),
        em = s(72187);
      let eu = [
          { asset: eo.Z.src, width: 150, ratio: "326/88" },
          { asset: ed.Z.src, width: 179, ratio: "341/88" },
          { asset: em.Z.src, width: 200, ratio: "391/89" },
        ],
        eh = er(),
        ex = 0;
      function ChainPhysicalBlocks() {
        let e = (0, v.useRef)(null),
          t = (0, v.useRef)(null),
          [s, o, d] = ei()(!1),
          [m, u] = ei()(!1),
          h = (0, v.useMemo)(() => {
            let e = [];
            return (
              eu.map((t, s) => {
                e[s] = (0, v.createRef)();
              }),
              e
            );
          }, []),
          getBoxes = (e) => {
            let t = [0.5, 0.35, 0.6],
              s = h.map((s, n) => {
                if (!(s = s.current) || "block" !== getComputedStyle(s).display)
                  return null;
                {
                  let a = s.className.includes("zoom")
                    ? e.Bodies.circle(
                        i.clientWidth * Math.random() * 0.4,
                        -i.clientHeight * Math.random() * 0.5,
                        s.clientWidth / 2,
                        { friction: 1 }
                      )
                    : e.Bodies.rectangle(
                        i.clientWidth * t[n] +
                          i.clientWidth * (0.5 - Math.random()) * 0.2,
                        -i.clientHeight * (0.5 * n),
                        s.clientWidth,
                        s.clientHeight,
                        { chamfer: { radius: 16 }, friction: 1 }
                      );
                  return {
                    body: a,
                    elem: s,
                    render() {
                      if (
                        (null == s ? void 0 : s.clientHeight) &&
                        (null == s ? void 0 : s.clientWidth)
                      ) {
                        let { x: e, y: t } = this.body.position,
                          n = e - s.clientWidth / 2,
                          i = t - s.clientHeight / 2;
                        this.elem.style.transform = "translate3d("
                          .concat(n, "px, ")
                          .concat(i, "px, 0) rotate(")
                          .concat(this.body.angle, "rad)");
                      }
                    },
                  };
                }
              });
            return s;
          },
          getLimits = (e) => {
            let t = e.Bodies.rectangle(
                i.clientWidth / 2,
                -i.clientHeight,
                i.clientWidth,
                60,
                { isStatic: !0, friction: 1 }
              ),
              s = e.Bodies.rectangle(
                i.clientWidth / 2,
                i.clientHeight + 32,
                i.clientWidth,
                64,
                { isStatic: !0, friction: 1 }
              ),
              n = e.Bodies.rectangle(
                i.clientWidth + 30,
                i.clientHeight / 2,
                60,
                4 * i.clientHeight,
                { isStatic: !0, friction: 1 }
              ),
              a = e.Bodies.rectangle(
                -30,
                i.clientHeight / 2,
                60,
                4 * i.clientHeight,
                { isStatic: !0, friction: 1 }
              );
            return { ground: s, leftWall: n, rightWall: a, ceil: t };
          },
          resize = () => {
            let e = ex;
            e !==
              ((null == h
                ? void 0
                : h.filter(
                    (e) => "block" === getComputedStyle(e.current).display
                  ).length) || 0) &&
              ((ex =
                (null == h
                  ? void 0
                  : h.filter(
                      (e) => "block" === getComputedStyle(e.current).display
                    ).length) || 0),
              u(!0));
            let { ground: t, leftWall: s, rightWall: i } = getLimits(eh);
            eh.Composite.add(n.world, [t, s, i]),
              eh.Composite.remove(n.world, r),
              eh.Composite.remove(n.world, l),
              eh.Composite.remove(n.world, c),
              (r = t),
              (l = s),
              (c = i);
          },
          initialization = (t) => {
            var s;
            let o = t.Engine,
              d = t.MouseConstraint,
              m = t.Mouse,
              u = t.Composite;
            n = o.create({ gravity: { scale: 8e-4 } });
            let x = getBoxes(t);
            a = x;
            let {
              ground: g,
              leftWall: v,
              rightWall: f,
              ceil: j,
            } = getLimits(t);
            (r = g), (l = v), (c = f);
            let p = m.create(i),
              N = d.create(n, {
                mouse: p,
                constraint: { stiffness: 0.2, render: { visible: !0 } },
              });
            null === (s = e.current) ||
              void 0 === s ||
              s.addEventListener("mouseleave", () => {
                N.mouse.mouseup(event);
              }),
              N.mouse.element.removeEventListener(
                "mousewheel",
                N.mouse.mousewheel
              ),
              N.mouse.element.removeEventListener(
                "DOMMouseScroll",
                N.mouse.mousewheel
              ),
              N.mouse.element.removeEventListener(
                "touchstart",
                N.mouse.mousedown
              ),
              N.mouse.element.removeEventListener(
                "touchmove",
                N.mouse.mousemove
              ),
              N.mouse.element.removeEventListener("touchend", N.mouse.mouseup),
              u.add(n.world, [
                ...x.filter((e) => null !== e).map((e) => e.body),
                v,
                f,
                j,
                g,
                N,
              ]),
              (ex =
                (null == h
                  ? void 0
                  : h.filter(
                      (e) => "block" === getComputedStyle(e.current).display
                    ).length) || 0);
          },
          initMatter = () => {
            eh &&
              !d.current &&
              ((i = e.current), initialization(eh), resize(), o(!0));
          },
          animate = (e) => {
            d.current &&
              (a.forEach((e) => (null == e ? void 0 : e.render())),
              er().Engine.update(n, 1e3 / 60)),
              (t.current = requestAnimationFrame(animate));
          },
          setupScrollTrigger = () => {
            _.p8.to(e.current, {
              scrollTrigger: {
                trigger: e.current,
                start: "top center",
                markers: !1,
                once: !0,
                toggleActions: "play none none none",
                onEnter: () => {
                  initMatter();
                },
              },
              progress: 1,
              duration: 1,
            });
          };
        return (
          (0, v.useEffect)(() => {
            if (!m || ex <= 0) return;
            let e = getBoxes(eh);
            eh.Composite.add(n.world, [
              ...e.filter((e) => null !== e).map((e) => e.body),
            ]),
              a
                .filter((e) => null !== e)
                .forEach((e) => eh.Composite.remove(n.world, e.body)),
              (a = e),
              u(!1);
          }, [m]),
          (0, v.useEffect)(
            () => (
              setupScrollTrigger(),
              (t.current = requestAnimationFrame(animate)),
              () => cancelAnimationFrame(t.current)
            ),
            []
          ),
          (0, g.jsx)("div", {
            className: N()(ec().ChainPhysicalBlocks, { [ec().isInited]: s }),
            ref: e,
            children: eu.map((e, t) =>
              (0, g.jsx)(
                "div",
                {
                  className: N()("block-item"),
                  ref: h[t],
                  style: {
                    width: "".concat(e.width, "px"),
                    aspectRatio: e.ratio,
                  },
                  children: (0, g.jsx)("div", {
                    className: "black-image",
                    style: { backgroundImage: "url(".concat(e.asset, ")") },
                  }),
                },
                e.asset
              )
            ),
          })
        );
      }
      var eg = s(33757),
        ev = s.n(eg);
      function delysium_logo_mobile_extends() {
        return (delysium_logo_mobile_extends = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var n in s)
                  Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var delysium_logo_mobile = function (e) {
        return v.createElement(
          "svg",
          delysium_logo_mobile_extends(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 120,
              height: 59,
              fill: "none",
            },
            e
          ),
          m ||
            (m = v.createElement("path", {
              fill: "#7D5FA3",
              fillRule: "evenodd",
              d: "m5.383 11.055 11.544 5.223v24.933L5.383 46.434 1.11 43.92V13.57zm-.614 1.806-1.555.914 1.555.555zm0 2.786-2.355-.849v27.893l2.355-.85zm1.304 25.727V16.115l5.838 2.1v21.059zm-1.304 1.785-1.555.555 1.555.914zm1.304 1.61v-2.078l6.506-2.34 1.95.599-8.456 3.83zm9.55-4.777-2.409-.74V18.248l2.41-.729zm-1.095-23.43-1.95.587-6.505-2.34v-2.078l8.444 3.82z",
              clipRule: "evenodd",
            })),
          u ||
            (u = v.createElement("path", {
              fill: "#7D5FA3",
              d: "M31.64 21.693c1.576 0 2.937.295 4.084.886 1.16.577 2.045 1.407 2.653 2.492.622 1.085.933 2.362.933 3.831 0 1.47-.31 2.746-.933 3.831-.608 1.071-1.492 1.895-2.653 2.472-1.147.563-2.508.844-4.084.844h-4.498V21.693zm0 12.811c1.866 0 3.29-.487 4.27-1.462.982-.989 1.472-2.369 1.472-4.14 0-1.785-.497-3.179-1.492-4.181-.982-1.003-2.398-1.504-4.25-1.504h-2.612v11.287zM52.163 29.973c0 .357-.02.735-.062 1.133h-9.08c.07 1.112.45 1.984 1.14 2.616.705.618 1.555.926 2.55.926.816 0 1.493-.185 2.032-.556.552-.384.94-.892 1.16-1.524h2.032a4.901 4.901 0 0 1-1.824 2.657c-.912.673-2.046 1.01-3.4 1.01-1.078 0-2.045-.24-2.902-.721a5.155 5.155 0 0 1-1.99-2.04c-.484-.892-.726-1.922-.726-3.089s.235-2.19.705-3.069a4.882 4.882 0 0 1 1.97-2.018c.856-.481 1.837-.721 2.943-.721 1.078 0 2.032.233 2.86.7a4.777 4.777 0 0 1 1.908 1.936c.456.81.684 1.73.684 2.76m-1.949-.391c0-.714-.158-1.325-.476-1.833a2.994 2.994 0 0 0-1.306-1.174 3.915 3.915 0 0 0-1.804-.412c-.953 0-1.769.302-2.446.906-.663.604-1.043 1.442-1.14 2.513zM56.54 20.808v15.241h-1.887V20.808zM69.539 24.762l-6.841 16.601h-1.949l2.24-5.437-4.582-11.164H60.5l3.565 9.145 3.524-9.145zM75.456 36.235c-.87 0-1.651-.145-2.342-.433-.691-.302-1.237-.714-1.638-1.236a3.328 3.328 0 0 1-.663-1.833h1.949c.055.563.317 1.023.787 1.38.484.357 1.113.535 1.887.535.718 0 1.285-.157 1.7-.473.414-.316.621-.714.621-1.195 0-.494-.22-.858-.663-1.091-.442-.248-1.126-.488-2.052-.721-.843-.22-1.534-.44-2.073-.66A3.934 3.934 0 0 1 71.6 29.5c-.373-.453-.56-1.043-.56-1.771 0-.577.173-1.105.518-1.586.346-.48.836-.858 1.472-1.133.636-.288 1.361-.432 2.177-.432 1.257 0 2.273.316 3.047.947.774.632 1.188 1.497 1.244 2.595h-1.887c-.041-.59-.283-1.064-.725-1.42-.429-.358-1.01-.536-1.742-.536-.677 0-1.216.144-1.616.432-.401.289-.602.666-.602 1.133 0 .37.118.68.353.927.249.233.553.426.912.577.373.137.884.295 1.534.473.815.22 1.479.44 1.99.66a3.3 3.3 0 0 1 1.306.947c.373.425.566.982.58 1.668 0 .618-.172 1.174-.518 1.669-.345.494-.836.885-1.472 1.174-.622.274-1.34.411-2.156.411M83.24 22.929c-.36 0-.664-.124-.913-.37a1.229 1.229 0 0 1-.373-.907c0-.357.125-.66.373-.906.25-.247.553-.371.913-.371.345 0 .635.124.87.37.249.248.373.55.373.907s-.124.66-.373.906c-.235.247-.525.371-.87.371m.912 1.833V36.05h-1.887V24.762zM97.441 24.762V36.05h-1.886v-1.668a3.72 3.72 0 0 1-1.514 1.36 4.686 4.686 0 0 1-2.114.473c-.884 0-1.679-.179-2.384-.536a4.113 4.113 0 0 1-1.679-1.647c-.4-.728-.601-1.614-.601-2.657v-6.612h1.866v6.365c0 1.112.283 1.97.85 2.574.566.59 1.34.886 2.321.886 1.009 0 1.804-.31 2.384-.927.58-.618.87-1.517.87-2.698v-6.2zM114.287 24.556c.884 0 1.672.185 2.363.556.691.357 1.237.9 1.638 1.627.4.728.601 1.614.601 2.657v6.653h-1.866v-6.385c0-1.126-.283-1.984-.85-2.575-.553-.604-1.306-.906-2.259-.906-.981 0-1.762.316-2.343.948-.58.618-.87 1.517-.87 2.698v6.22h-1.866v-6.385c0-1.126-.283-1.984-.85-2.575-.553-.604-1.306-.906-2.259-.906-.982 0-1.762.316-2.343.948-.58.618-.87 1.517-.87 2.698v6.22h-1.887V24.762h1.887v1.627c.373-.59.87-1.043 1.492-1.36a4.641 4.641 0 0 1 2.094-.473c.953 0 1.796.213 2.529.639.732.425 1.278 1.05 1.637 1.874a3.707 3.707 0 0 1 1.576-1.854 4.663 4.663 0 0 1 2.446-.659",
            }))
        );
      };
      function PoweredBy() {
        return (0, g.jsxs)("div", {
        });
      }
      var ef = s(33537),
        ej = s.n(ef);
      function AgentId() {
        return (0, g.jsxs)("div", {
          className: N()(ej().AgentId, "mint-card flex flex-col items-center"),
          children: [
            (0, g.jsx)("div", { className: "card-cover" }),
            (0, g.jsx)("div", {
              className: "card-title flex items-center gap-4",
              children: "Agent ID",
            }),
            (0, g.jsx)("div", {
              className: "card-desc",
              children:
                "Powered by account abstraction, Agent ID serves as the agent's passport within the network, not only allowing it to interact, transact, and collaborate with other entities but also defining its purpose and role within the network.",
            }),
            (0, g.jsx)("a", {
              className: "know-button",
              href: "https://alexeys-organization-9.gitbook.io/clara-ai",
              target: "_blank",
              children: "Know More",
            }),
          ],
        });
      }
      var ep = s(83908),
        eN = s.n(ep),
        e_ = s(73414),
        eb = s(92680),
        ew = s(89809),
        ey = s(9246),
        ek = s(17611),
        eL = s(1711),
        eS = s(44228),
        eB = s(66601),
        eC = s(89900);
      let eE = [e_.Z, eb.Z, eC.Z, ew.Z, ey.Z, ek.Z, eL.Z, eS.Z, eB.Z];
      function PartnersList() {
        return (0, g.jsx)("div", {
          className: "".concat(
            eN().PartnersList,
            " flex flex-col items-center"
          ),
          children: eE.map((e) =>
            (0, g.jsx)(
              "div",
              {
                className: "partner-item",
                style: { backgroundImage: "url(".concat(e.src, ")") },
              },
              e.src
            )
          ),
        });
      }
      s(79961), s(89578), s(95610), s(33955), s(78009);
      var eM = s(8280),
        eP = s.n(eM),
        eI = s(72162);
      function StageLabel(e) {
        let { stageNum: t, status: s } = e;
        return (0, g.jsxs)("div", {
          className: "stage-label flex items-center",
          children: [
            (0, g.jsxs)("div", {
              className: "stage-num ".concat(s),
              children: ["Stage ", t],
            }),
            (0, g.jsx)("div", {
              className: "stage-status",
              children: (0, g.jsx)(DotLabel, {
                theme: "done" === s ? "green" : "yellow",
                className: "status-label",
                children: "done" === s ? "Already Done" : "Coming Soon",
              }),
            }),
          ],
        });
      }
      function ScrollStages() {
        return (0, g.jsxs)("div", {
          className: eP().ScrollStages,
          children: [
            (0, g.jsxs)("div", {
              className: "preload-images",
              children: [
                (0, g.jsx)("div", {
                  className: "area-1",
                  children: (0, g.jsx)("div", { className: "chat-cover" }),
                }),
                (0, g.jsxs)("div", {
                  className: "area-2",
                  children: [
                    (0, g.jsx)("div", { className: "action-step" }),
                    (0, g.jsx)("div", { className: "workflow-cover" }),
                  ],
                }),
                (0, g.jsxs)("div", {
                  className: "success-icon",
                  children: [
                    (0, g.jsx)("div", { className: "icon-image" }),
                    (0, g.jsx)("div", { className: "icon-image layer-2" }),
                  ],
                }),
              ],
            }),
            (0, g.jsx)("div", {
              className: "stage-card stage-1",
              children: (0, g.jsxs)("div", {
                className: "card-inner",
                children: [
                  (0, g.jsx)("div", {
                    className: "card-header",
                    children: (0, g.jsx)(StageLabel, {
                      stageNum: 1,
                      status: "done",
                    }),
                  }),
                  (0, g.jsxs)("div", {
                    className: "card-title",
                    children: [
                      "Revolutionizing Web3 ",
                      (0, g.jsx)("span", {
                        className: "muted",
                        children: "with",
                      }),
                      (0, g.jsx)("br", {}),
                      "Canvas-Based AI Workflows",
                    ],
                  }),
                  (0, g.jsx)("div", {
                    className: "card-desc",
                    children:
                      "Clara leverages an infinite canvas to streamline and automate your Web3 interactions, facilitating seamless workflows across Dapps and protocols.",
                  }),
                  (0, g.jsx)("div", {
                    className: "lottie-container",
                    children: (0, g.jsx)(S(), { loop: !0, animationData: eI }),
                  }),
                ],
              }),
            }),
            (0, g.jsx)("div", {
              className: "stage-card stage-2",
              children: (0, g.jsxs)("div", {
                className: "card-inner",
                children: [
                  (0, g.jsx)("div", {
                    className: "card-header",
                    children: (0, g.jsx)(StageLabel, {
                      stageNum: 2,
                      status: "comingSoon",
                    }),
                  }),
                  (0, g.jsxs)("div", {
                    className: "card-title",
                    children: [
                      "Effortlessly Execute On-Chain",
                      (0, g.jsx)("br", {}),
                      "Transactions ",
                      (0, g.jsx)("span", {
                        className: "muted",
                        children: "via",
                      }),
                      " Agent ID",
                    ],
                  }),
                  (0, g.jsx)("div", {
                    className: "card-desc",
                    style: { "--width": "749px" },
                    children:
                      "Clara integrates Agent ID, powered by account abstraction, for easy, secure blockchain transactions. streamlining crypto experience across platforms.",
                  }),
                  (0, g.jsx)("div", { className: "stage-2-cover" }),
                ],
              }),
            }),
            (0, g.jsx)("div", {
              className: "stage-card stage-3",
              children: (0, g.jsxs)("div", {
                className: "card-inner",
                children: [
                  (0, g.jsx)("div", {
                    className: "card-header",
                    children: (0, g.jsx)(StageLabel, {
                      stageNum: 3,
                      status: "comingSoon",
                    }),
                  }),
                  (0, g.jsxs)("div", {
                    className: "card-title",
                    children: [
                      "ClaraAI: Enabling a Network",
                      (0, g.jsx)("br", {}),
                      (0, g.jsx)("span", {
                        className: "muted",
                        children: "of",
                      }),
                      " Autonomous Agents",
                    ],
                  }),
                  (0, g.jsx)("div", {
                    className: "card-desc",
                    children:
                      "Clara evolves into an OS, allowing creation and interaction with a network of intelligent agents using natural language.",
                  }),
                  (0, g.jsx)("div", { className: "stage-3-cover" }),
                ],
              }),
            }),
          ],
        });
      }
      var eT = s(84103),
        eA = s.n(eT);
      function divider_grad_line_extends() {
        return (divider_grad_line_extends = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var s = arguments[t];
                for (var n in s)
                  Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var divider_grad_line = function (e) {
        return v.createElement(
          "svg",
          divider_grad_line_extends(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 1260,
              height: 2,
              fill: "none",
            },
            e
          ),
          h ||
            (h = v.createElement("path", {
              stroke: "url(#divider-grad-line_svg__a)",
              d: "M0 1h1260",
            })),
          x ||
            (x = v.createElement(
              "defs",
              null,
              v.createElement(
                "linearGradient",
                {
                  id: "divider-grad-line_svg__a",
                  x1: -0.5,
                  x2: 1259.5,
                  y1: 1,
                  y2: 1.001,
                  gradientUnits: "userSpaceOnUse",
                },
                v.createElement("stop", { stopColor: "#fff", stopOpacity: 0 }),
                v.createElement("stop", { offset: 0.12, stopColor: "#fff" }),
                v.createElement("stop", { offset: 0.886, stopColor: "#fff" }),
                v.createElement("stop", {
                  offset: 1,
                  stopColor: "#fff",
                  stopOpacity: 0,
                })
              )
            ))
        );
      };
      function SectionTitle(e) {
        let { children: t, className: s } = e;
        return (0, g.jsx)("div", {
          className: N()("section-mobile-title", s),
          children: t,
        });
      }
      function LandingMobile() {
        return (0, g.jsxs)("div", {
          className: N()(eA().LandingMobile, "LandingMobile"),
          children: [
            (0, g.jsx)("section", {
              className: "section section-hero",
              children: (0, g.jsx)(LandingHero, {}),
            }),
            (0, g.jsx)("section", {
              className: "section section-stages",
              children: (0, g.jsx)(ScrollStages, {}),
            }),
            (0, g.jsx)("section", {
              className: "section section-bento !mb-0",
              children: (0, g.jsx)("div", {
                className: "limit-container",
                children: (0, g.jsx)(BentoGrid, {}),
              }),
            }),
            (0, g.jsxs)("section", {
              className: "section section-supported-chains-mobile",
              children: [
                (0, g.jsxs)("div", {
                  className:
                    "limit-container flex h-full flex-col items-center",
                  children: [
                    (0, g.jsx)(SectionTitle, {
                      className: "pointer-events-none !absolute mt-[10px]",
                      children: "Supported Chains",
                    }),
                    (0, g.jsx)("div", {
                      className: "relative h-full w-full overflow-hidden",
                      children: (0, g.jsx)(ChainPhysicalBlocks, {}),
                    }),
                  ],
                }),
                (0, g.jsx)("div", {
                  className: "limit-container",
                  children: (0, g.jsx)(divider_grad_line, {
                    className: "w-full",
                  }),
                }),
              ],
            }),
            (0, g.jsx)("section", {
              className: "section section-powered-by",
              children: (0, g.jsx)("div", {
                className: "limit-container",
                children: (0, g.jsx)(PoweredBy, {}),
              }),
            }),
            (0, g.jsx)("section", {
              className: "section section-agent-id",
              children: (0, g.jsx)("div", {
                className: "limit-container",
                children: (0, g.jsx)(AgentId, {}),
              }),
            }),
            (0, g.jsx)("section", {
              className: "section section-partners",
              children: (0, g.jsxs)("div", {
                className: "limit-narrow-container flex flex-col items-center",
                children: [
                  (0, g.jsx)(SectionTitle, {
                    className: "mb-[50px] mt-[50px]",
                    children: "Partners",
                  }),
                  (0, g.jsx)(PartnersList, {}),
                ],
              }),
            }),
            (0, g.jsxs)("section", {
              className:
                "section section-faqs flex flex-col items-center gap-[32px]",
              children: [
                (0, g.jsx)("div", {
                  className: "faq-desc",
                  children:
                    "Have more questions about Clara AI? Ask in our community!",
                }),
                (0, g.jsx)("a", {
                  className: "know-button",
                  href: "http://t.me/ClaraAI_ETH",
                  target: "_blank",
                  children: "Join Community",
                }),
              ],
            }),
            (0, g.jsx)(LandingFooter, {}),
          ],
        });
      }
      var eD = s(31796),
        eO = s.n(eD);
      function landing_SectionTitle(e) {
        let { children: t, className: s } = e;
        return (0, g.jsxs)("div", {
          className: N()("section-title", s),
          children: [
            t,
            (0, g.jsx)("div", {
              className: "section-title blur-effect",
              children: t,
            }),
          ],
        });
      }
      _.p8.registerPlugin(b.i);
      var eG = !0;
      function landing_Landing(e) {
        let { deviceType: t } = e;
        return (
          (0, v.useEffect)(() => {}, []),
          (0, g.jsxs)("div", {
            className: eO().pageLanding,
            children: [
              (0, g.jsx)(j(), {
                children: (0, g.jsx)("title", { children: "Clara" }),
              }),
              "desktop" === t
                ? (0, g.jsxs)("span", {
                    className: "LandingDesktop",
                    children: [
                      (0, g.jsx)(w.Sx, {}),
                      (0, g.jsx)(w.Mn, {}),
                      (0, g.jsx)("section", {
                        className: "section section-hero",
                        children: (0, g.jsx)(w.Ks, {}),
                      }),
                      (0, g.jsx)("section", {
                        className: "section section-stages",
                        children: (0, g.jsx)(w.yp, {}),
                      }),
                      (0, g.jsx)("section", {
                        className: "section section-bento !mb-0",
                        children: (0, g.jsx)("div", {
                          className: "limit-container",
                          children: (0, g.jsx)(w.SB, {}),
                        }),
                      }),
                      (0, g.jsxs)("section", {
                        className: "section section-supported-chains",
                        children: [
                          (0, g.jsxs)("div", {
                            className:
                              "limit-container flex h-full flex-col items-center",
                            children: [
                              (0, g.jsx)(landing_SectionTitle, {
                                className:
                                  "pointer-events-none !absolute mt-32",
                                children: "Supported Chains",
                              }),
                              (0, g.jsx)("div", {
                                className:
                                  "relative h-full w-full overflow-hidden",
                                children: (0, g.jsx)(w.y$, {}),
                              }),
                            ],
                          }),
                          (0, g.jsx)("div", {
                            className: "limit-container",
                            children: (0, g.jsx)(divider_grad_line, {
                              className: "w-full",
                            }),
                          }),
                        ],
                      }),
                      (0, g.jsx)("section", {
                        className: "section section-powered-by",
                        children: (0, g.jsx)("div", {
                          className: "limit-container",
                          children: (0, g.jsx)(w.CQ, {}),
                        }),
                      }),
                      (0, g.jsx)("section", {
                        className: "section section-agent-id",
                        children: (0, g.jsx)("div", {
                          className: "limit-container",
                          children: (0, g.jsx)(w.ts, {}),
                        }),
                      }),
                      (0, g.jsx)("section", {
                        className: "section section-partners",
                        children: (0, g.jsxs)("div", {
                          className:
                            "limit-narrow-container flex flex-col items-center",
                          children: [
                            (0, g.jsx)(landing_SectionTitle, {
                              className: "mb-16 mt-11",
                              children: "Partners",
                            }),
                            (0, g.jsx)(w.sC, {}),
                          ],
                        }),
                      }),
                      (0, g.jsxs)("section", {
                        className: "section section-faqs",
                        children: [
                          (0, g.jsx)("div", {
                            className: "section-bg",
                            children: (0, g.jsx)(faqs_bg, {}),
                          }),
                          (0, g.jsxs)("div", {
                            className: "section-bg2",
                            children: [
                              (0, g.jsx)("div", {
                                className: "blur-circle circle1",
                              }),
                              (0, g.jsx)("div", {
                                className: "blur-circle circle2",
                              }),
                              (0, g.jsx)("div", {
                                className: "blur-circle circle3",
                              }),
                            ],
                          }),
                          (0, g.jsx)("div", {
                            className: "limit-container",
                            children: (0, g.jsx)(w.Kg, {}),
                          }),
                          (0, g.jsx)(w.Cf, {}),
                        ],
                      }),
                    ],
                  })
                : (0, g.jsx)(LandingMobile, {}),
            ],
          })
        );
      }
    },
    33537: function (e) {
      e.exports = { AgentId: "AgentId_AgentId__bCwAy" };
    },
    66485: function (e) {
      e.exports = { BentoGrid: "BentoGrid_BentoGrid__LwmQU" };
    },
    29982: function (e) {
      e.exports = {
        ChainPhysicalBlocks: "ChainPhysicalBlocks_ChainPhysicalBlocks__EFxsH",
        isInited: "ChainPhysicalBlocks_isInited__MwLw6",
      };
    },
    68099: function (e) {
      e.exports = {
        DotLabel: "DotLabel_DotLabel__J1UjV",
        needBackground: "DotLabel_needBackground__Eocrw",
        green: "DotLabel_green__OiPOX",
        purple: "DotLabel_purple__uWIw_",
        yellow: "DotLabel_yellow__dGeaj",
      };
    },
    24930: function (e) {
      e.exports = { LandingFooter: "LandingFooter_LandingFooter__3q_Dw" };
    },
    95374: function (e) {
      e.exports = { LandingHero: "LandingHero_LandingHero__Oxuuc" };
    },
    84103: function (e) {
      e.exports = { LandingMobile: "LandingMobile_LandingMobile__OHjJm" };
    },
    57992: function (e) {
      e.exports = {
        MagicalGradButton: "MagicalGradButton_MagicalGradButton__DmJ_Z",
        LightBorder: "MagicalGradButton_LightBorder__tyvku",
        PurpleColor: "MagicalGradButton_PurpleColor__xF3tD",
        NoIcon: "MagicalGradButton_NoIcon__hTVCf",
        colorRotate: "MagicalGradButton_colorRotate__8rqxY",
      };
    },
    83908: function (e) {
      e.exports = { PartnersList: "PartnersList_PartnersList__85jNT" };
    },
    33757: function (e) {
      e.exports = { PoweredBy: "PoweredBy_PoweredBy__xKB6v" };
    },
    60340: function (e) {
      e.exports = { PurpleGlowTitle: "PurpleGlowTitle_PurpleGlowTitle__dJH79" };
    },
    8280: function (e) {
      e.exports = {
        ScrollStages: "ScrollStages_ScrollStages__6_lIg",
        "cursor-blink": "ScrollStages_cursor-blink__9QowG",
        "success-decoration-show":
          "ScrollStages_success-decoration-show__XOsm0",
      };
    },
    32399: function (e) {
      e.exports = {
        ShimmerButton: "ShimmerButton_ShimmerButton__eXdX4",
        shimmerRotate: "ShimmerButton_shimmerRotate__QsaPD",
        shimmerTranslate: "ShimmerButton_shimmerTranslate__jqanj",
        shimmerLineOpacity: "ShimmerButton_shimmerLineOpacity__Cgecy",
        angleRotate: "ShimmerButton_angleRotate__NI6D9",
        starsSky: "ShimmerButton_starsSky__wVfHm",
      };
    },
    31796: function (e) {
      e.exports = { pageLanding: "landing_pageLanding__9Qi_X" };
    },
    76362: function (e, t, s) {
      "use strict";
      s.d(t, {
        S1: function () {
          return off;
        },
        ZT: function () {
          return noop;
        },
        jU: function () {
          return n;
        },
        on: function () {
          return on;
        },
      });
      var noop = function () {};
      function on(e) {
        for (var t = [], s = 1; s < arguments.length; s++)
          t[s - 1] = arguments[s];
        e && e.addEventListener && e.addEventListener.apply(e, t);
      }
      function off(e) {
        for (var t = [], s = 1; s < arguments.length; s++)
          t[s - 1] = arguments[s];
        e && e.removeEventListener && e.removeEventListener.apply(e, t);
      }
      var n = "undefined" != typeof window;
    },
  },
  function (e) {
    e.O(
      0,
      [296, 5611, 8802, 4653, 5904, 3982, 3752, 9774, 2888, 179],
      function () {
        return e((e.s = 15554));
      }
    ),
      (_N_E = e.O());
  },
]);
