"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4055],
  {
    45471: function (t, e, o) {
      var r = o(85269).default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.PresetStatusColorTypes = void 0),
        (e.isPresetColor = function (t) {
          let e =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return e
            ? []
                .concat((0, a.default)(l), (0, a.default)(n.PresetColors))
                .includes(t)
            : n.PresetColors.includes(t);
        }),
        (e.isPresetStatusColor = function (t) {
          return i.includes(t);
        });
      var a = r(o(84992)),
        n = o(36496);
      let l = n.PresetColors.map((t) => `${t}-inverse`),
        i = (e.PresetStatusColorTypes = [
          "success",
          "processing",
          "error",
          "default",
          "warning",
        ]);
    },
    74132: function (t, e, o) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (t) {
          let {
              arrowWidth: e,
              autoAdjustOverflow: o,
              arrowPointAtCenter: i,
              offset: s,
              borderRadius: f,
              visibleFirst: p,
            } = t,
            c = e / 2,
            u = {};
          return (
            Object.keys(a).forEach((t) => {
              let d = (i && n[t]) || a[t],
                m = Object.assign(Object.assign({}, d), {
                  offset: [0, 0],
                  dynamicInset: !0,
                });
              switch (((u[t] = m), l.has(t) && (m.autoArrow = !1), t)) {
                case "top":
                case "topLeft":
                case "topRight":
                  m.offset[1] = -c - s;
                  break;
                case "bottom":
                case "bottomLeft":
                case "bottomRight":
                  m.offset[1] = c + s;
                  break;
                case "left":
                case "leftTop":
                case "leftBottom":
                  m.offset[0] = -c - s;
                  break;
                case "right":
                case "rightTop":
                case "rightBottom":
                  m.offset[0] = c + s;
              }
              let g = (0, r.getArrowOffsetToken)({
                contentRadius: f,
                limitVerticalRadius: !0,
              });
              if (i)
                switch (t) {
                  case "topLeft":
                  case "bottomLeft":
                    m.offset[0] = -g.arrowOffsetHorizontal - c;
                    break;
                  case "topRight":
                  case "bottomRight":
                    m.offset[0] = g.arrowOffsetHorizontal + c;
                    break;
                  case "leftTop":
                  case "rightTop":
                    m.offset[1] = -(2 * g.arrowOffsetHorizontal) + c;
                    break;
                  case "leftBottom":
                  case "rightBottom":
                    m.offset[1] = 2 * g.arrowOffsetHorizontal - c;
                }
              (m.overflow = getOverflowOptions(t, g, e, o)),
                p && (m.htmlRegion = "visibleFirst");
            }),
            u
          );
        }),
        (e.getOverflowOptions = getOverflowOptions);
      var r = o(9064);
      function getOverflowOptions(t, e, o, r) {
        if (!1 === r) return { adjustX: !1, adjustY: !1 };
        let a = r && "object" == typeof r ? r : {},
          n = {};
        switch (t) {
          case "top":
          case "bottom":
            (n.shiftX = 2 * e.arrowOffsetHorizontal + o),
              (n.shiftY = !0),
              (n.adjustY = !0);
            break;
          case "left":
          case "right":
            (n.shiftY = 2 * e.arrowOffsetVertical + o),
              (n.shiftX = !0),
              (n.adjustX = !0);
        }
        let l = Object.assign(Object.assign({}, n), a);
        return l.shiftX || (l.adjustX = !0), l.shiftY || (l.adjustY = !0), l;
      }
      let a = {
          left: { points: ["cr", "cl"] },
          right: { points: ["cl", "cr"] },
          top: { points: ["bc", "tc"] },
          bottom: { points: ["tc", "bc"] },
          topLeft: { points: ["bl", "tl"] },
          leftTop: { points: ["tr", "tl"] },
          topRight: { points: ["br", "tr"] },
          rightTop: { points: ["tl", "tr"] },
          bottomRight: { points: ["tr", "br"] },
          rightBottom: { points: ["bl", "br"] },
          bottomLeft: { points: ["tl", "bl"] },
          leftBottom: { points: ["br", "bl"] },
        },
        n = {
          topLeft: { points: ["bl", "tc"] },
          leftTop: { points: ["tr", "cl"] },
          topRight: { points: ["br", "tc"] },
          rightTop: { points: ["tl", "cr"] },
          bottomRight: { points: ["tr", "bc"] },
          rightBottom: { points: ["bl", "cr"] },
          bottomLeft: { points: ["tl", "bc"] },
          leftBottom: { points: ["br", "cl"] },
        },
        l = new Set([
          "topLeft",
          "topRight",
          "bottomLeft",
          "bottomRight",
          "leftTop",
          "leftBottom",
          "rightTop",
          "rightBottom",
        ]);
    },
    9064: function (t, e, o) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.MAX_VERTICAL_CONTENT_RADIUS = void 0),
        (e.default = function (t, e, o) {
          var n, l, i, s, f, p, c, u;
          let {
              componentCls: d,
              boxShadowPopoverArrow: m,
              arrowOffsetVertical: g,
              arrowOffsetHorizontal: b,
            } = t,
            {
              arrowDistance: v = 0,
              arrowPlacement: h = { left: !0, right: !0, top: !0, bottom: !0 },
            } = o || {};
          return {
            [d]: Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {
                      [`${d}-arrow`]: [
                        Object.assign(
                          Object.assign(
                            {
                              position: "absolute",
                              zIndex: 1,
                              display: "block",
                            },
                            (0, a.genRoundedArrow)(t, e, m)
                          ),
                          { "&:before": { background: e } }
                        ),
                      ],
                    },
                    ((n = !!h.top),
                    (l = {
                      [`&-placement-top > ${d}-arrow,&-placement-topLeft > ${d}-arrow,&-placement-topRight > ${d}-arrow`]:
                        {
                          bottom: v,
                          transform: "translateY(100%) rotate(180deg)",
                        },
                      [`&-placement-top > ${d}-arrow`]: {
                        left: { _skip_check_: !0, value: "50%" },
                        transform:
                          "translateX(-50%) translateY(100%) rotate(180deg)",
                      },
                      "&-placement-topLeft": {
                        "--arrow-offset-horizontal": b,
                        [`> ${d}-arrow`]: {
                          left: { _skip_check_: !0, value: b },
                        },
                      },
                      "&-placement-topRight": {
                        "--arrow-offset-horizontal": `calc(100% - ${(0, r.unit)(
                          b
                        )})`,
                        [`> ${d}-arrow`]: {
                          right: { _skip_check_: !0, value: b },
                        },
                      },
                    }),
                    n ? l : {})
                  ),
                  ((i = !!h.bottom),
                  (s = {
                    [`&-placement-bottom > ${d}-arrow,&-placement-bottomLeft > ${d}-arrow,&-placement-bottomRight > ${d}-arrow`]:
                      { top: v, transform: "translateY(-100%)" },
                    [`&-placement-bottom > ${d}-arrow`]: {
                      left: { _skip_check_: !0, value: "50%" },
                      transform: "translateX(-50%) translateY(-100%)",
                    },
                    "&-placement-bottomLeft": {
                      "--arrow-offset-horizontal": b,
                      [`> ${d}-arrow`]: {
                        left: { _skip_check_: !0, value: b },
                      },
                    },
                    "&-placement-bottomRight": {
                      "--arrow-offset-horizontal": `calc(100% - ${(0, r.unit)(
                        b
                      )})`,
                      [`> ${d}-arrow`]: {
                        right: { _skip_check_: !0, value: b },
                      },
                    },
                  }),
                  i ? s : {})
                ),
                ((f = !!h.left),
                (p = {
                  [`&-placement-left > ${d}-arrow,&-placement-leftTop > ${d}-arrow,&-placement-leftBottom > ${d}-arrow`]:
                    {
                      right: { _skip_check_: !0, value: v },
                      transform: "translateX(100%) rotate(90deg)",
                    },
                  [`&-placement-left > ${d}-arrow`]: {
                    top: { _skip_check_: !0, value: "50%" },
                    transform:
                      "translateY(-50%) translateX(100%) rotate(90deg)",
                  },
                  [`&-placement-leftTop > ${d}-arrow`]: { top: g },
                  [`&-placement-leftBottom > ${d}-arrow`]: { bottom: g },
                }),
                f ? p : {})
              ),
              ((c = !!h.right),
              (u = {
                [`&-placement-right > ${d}-arrow,&-placement-rightTop > ${d}-arrow,&-placement-rightBottom > ${d}-arrow`]:
                  {
                    left: { _skip_check_: !0, value: v },
                    transform: "translateX(-100%) rotate(-90deg)",
                  },
                [`&-placement-right > ${d}-arrow`]: {
                  top: { _skip_check_: !0, value: "50%" },
                  transform:
                    "translateY(-50%) translateX(-100%) rotate(-90deg)",
                },
                [`&-placement-rightTop > ${d}-arrow`]: { top: g },
                [`&-placement-rightBottom > ${d}-arrow`]: { bottom: g },
              }),
              c ? u : {})
            ),
          };
        }),
        (e.getArrowOffsetToken = function (t) {
          let { contentRadius: e, limitVerticalRadius: o } = t,
            r = e > 12 ? e + 2 : 12;
          return { arrowOffsetHorizontal: r, arrowOffsetVertical: o ? n : r };
        });
      var r = o(12084),
        a = o(51337);
      let n = (e.MAX_VERTICAL_CONTENT_RADIUS = 8);
    },
    51337: function (t, e, o) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.genRoundedArrow = void 0),
        (e.getArrowToken = function (t) {
          let {
              sizePopupArrow: e,
              borderRadiusXS: o,
              borderRadiusOuter: r,
            } = t,
            a = e / 2,
            n = (1 * r) / Math.sqrt(2),
            l = a - r * (1 - 1 / Math.sqrt(2)),
            i = a - o * (1 / Math.sqrt(2)),
            s = r * (Math.sqrt(2) - 1) + o * (1 / Math.sqrt(2)),
            f = r * (Math.sqrt(2) - 1),
            p = `polygon(${f}px 100%, 50% ${f}px, ${
              2 * a - f
            }px 100%, ${f}px 100%)`,
            c = `path('M 0 ${a} A ${r} ${r} 0 0 0 ${n} ${l} L ${i} ${s} A ${o} ${o} 0 0 1 ${
              2 * a - i
            } ${s} L ${2 * a - n} ${l} A ${r} ${r} 0 0 0 ${2 * a - 0} ${a} Z')`;
          return {
            arrowShadowWidth: a * Math.sqrt(2) + r * (Math.sqrt(2) - 2),
            arrowPath: c,
            arrowPolygon: p,
          };
        });
      var r = o(12084);
      e.genRoundedArrow = (t, e, o) => {
        let {
          sizePopupArrow: a,
          arrowPolygon: n,
          arrowPath: l,
          arrowShadowWidth: i,
          borderRadiusXS: s,
          calc: f,
        } = t;
        return {
          pointerEvents: "none",
          width: a,
          height: a,
          overflow: "hidden",
          "&::before": {
            position: "absolute",
            bottom: 0,
            insetInlineStart: 0,
            width: a,
            height: f(a).div(2).equal(),
            background: e,
            clipPath: { _multi_value_: !0, value: [n, l] },
            content: '""',
          },
          "&::after": {
            content: '""',
            position: "absolute",
            width: i,
            height: i,
            bottom: 0,
            insetInline: 0,
            margin: "auto",
            borderRadius: {
              _skip_check_: !0,
              value: `0 0 ${(0, r.unit)(s)} 0`,
            },
            transform: "translateY(50%) rotate(-135deg)",
            boxShadow: o,
            zIndex: 0,
            background: "transparent",
          },
        };
      };
    },
    92125: function (t, e, o) {
      var r = o(85269).default,
        a = o(49932).default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = a(o(67294)),
        l = r(o(13144)),
        i = o(92419),
        s = o(31929),
        f = r(o(15086)),
        p = o(48125);
      e.default = (t) => {
        let {
            prefixCls: e,
            className: o,
            placement: r = "top",
            title: a,
            color: c,
            overlayInnerStyle: u,
          } = t,
          { getPrefixCls: d } = n.useContext(s.ConfigContext),
          m = d("tooltip", e),
          [g, b, v] = (0, f.default)(m),
          h = (0, p.parseColor)(m, c),
          w = h.arrowStyle,
          y = Object.assign(Object.assign({}, u), h.overlayStyle),
          O = (0, l.default)(
            b,
            v,
            m,
            `${m}-pure`,
            `${m}-placement-${r}`,
            o,
            h.className
          );
        return g(
          n.createElement(
            "div",
            { className: O, style: w },
            n.createElement("div", { className: `${m}-arrow` }),
            n.createElement(
              i.Popup,
              Object.assign({}, t, {
                className: b,
                prefixCls: m,
                overlayInnerStyle: y,
              }),
              a
            )
          )
        );
      };
    },
    94055: function (t, e, o) {
      var r = o(85269).default,
        a = o(49932).default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = a(o(67294)),
        l = r(o(13144)),
        i = r(o(92419)),
        s = r(o(52904)),
        f = r(o(85549)),
        p = o(56333),
        c = o(53683),
        u = r(o(74132)),
        d = o(47419),
        m = o(13594),
        g = r(o(96877)),
        b = o(31929),
        v = o(3184),
        h = r(o(92125)),
        w = r(o(15086)),
        y = o(48125),
        __rest = function (t, e) {
          var o = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
              0 > e.indexOf(r) &&
              (o[r] = t[r]);
          if (null != t && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var a = 0, r = Object.getOwnPropertySymbols(t);
              a < r.length;
              a++
            )
              0 > e.indexOf(r[a]) &&
                Object.prototype.propertyIsEnumerable.call(t, r[a]) &&
                (o[r[a]] = t[r[a]]);
          return o;
        };
      let O = n.forwardRef((t, e) => {
        var o, r;
        let {
            prefixCls: a,
            openClassName: h,
            getTooltipContainer: O,
            overlayClassName: C,
            color: _,
            overlayInnerStyle: $,
            children: k,
            afterOpenChange: T,
            afterVisibleChange: j,
            destroyTooltipOnHide: P,
            arrow: R = !0,
            title: x,
            overlay: A,
            builtinPlacements: N,
            arrowPointAtCenter: S = !1,
            autoAdjustOverflow: E = !0,
          } = t,
          I = !!R,
          [, L] = (0, v.useToken)(),
          {
            getPopupContainer: M,
            getPrefixCls: z,
            direction: V,
          } = n.useContext(b.ConfigContext),
          B = (0, m.devUseWarning)("Tooltip"),
          X = n.useRef(null),
          forceAlign = () => {
            var t;
            null === (t = X.current) || void 0 === t || t.forceAlign();
          };
        n.useImperativeHandle(e, () => {
          var t;
          return {
            forceAlign,
            forcePopupAlign: () => {
              B.deprecated(!1, "forcePopupAlign", "forceAlign"), forceAlign();
            },
            nativeElement:
              null === (t = X.current) || void 0 === t
                ? void 0
                : t.nativeElement,
          };
        });
        let [D, Y] = (0, s.default)(!1, {
            value: null !== (o = t.open) && void 0 !== o ? o : t.visible,
            defaultValue:
              null !== (r = t.defaultOpen) && void 0 !== r
                ? r
                : t.defaultVisible,
          }),
          H = !x && !A && 0 !== x,
          q = n.useMemo(() => {
            var t, e;
            let o = S;
            return (
              "object" == typeof R &&
                (o =
                  null !==
                    (e =
                      null !== (t = R.pointAtCenter) && void 0 !== t
                        ? t
                        : R.arrowPointAtCenter) && void 0 !== e
                    ? e
                    : S),
              N ||
                (0, u.default)({
                  arrowPointAtCenter: o,
                  autoAdjustOverflow: E,
                  arrowWidth: I ? L.sizePopupArrow : 0,
                  borderRadius: L.borderRadius,
                  offset: L.marginXXS,
                  visibleFirst: !0,
                })
            );
          }, [S, R, N, L]),
          W = n.useMemo(() => (0 === x ? x : A || x || ""), [A, x]),
          Z = n.createElement(
            f.default,
            { space: !0 },
            "function" == typeof W ? W() : W
          ),
          {
            getPopupContainer: U,
            placement: F = "top",
            mouseEnterDelay: G = 0.1,
            mouseLeaveDelay: J = 0.1,
            overlayStyle: K,
            rootClassName: Q,
          } = t,
          tt = __rest(t, [
            "getPopupContainer",
            "placement",
            "mouseEnterDelay",
            "mouseLeaveDelay",
            "overlayStyle",
            "rootClassName",
          ]),
          te = z("tooltip", a),
          to = z(),
          tr = t["data-popover-inject"],
          ta = D;
        "open" in t || "visible" in t || !H || (ta = !1);
        let tn =
            n.isValidElement(k) && !(0, d.isFragment)(k)
              ? k
              : n.createElement("span", null, k),
          tl = tn.props,
          ti =
            tl.className && "string" != typeof tl.className
              ? tl.className
              : (0, l.default)(tl.className, h || `${te}-open`),
          [ts, tf, tp] = (0, w.default)(te, !tr),
          tc = (0, y.parseColor)(te, _),
          tu = tc.arrowStyle,
          td = Object.assign(Object.assign({}, $), tc.overlayStyle),
          tm = (0, l.default)(
            C,
            { [`${te}-rtl`]: "rtl" === V },
            tc.className,
            Q,
            tf,
            tp
          ),
          [tg, tb] = (0, p.useZIndex)("Tooltip", tt.zIndex),
          tv = n.createElement(
            i.default,
            Object.assign({}, tt, {
              zIndex: tg,
              showArrow: I,
              placement: F,
              mouseEnterDelay: G,
              mouseLeaveDelay: J,
              prefixCls: te,
              overlayClassName: tm,
              overlayStyle: Object.assign(Object.assign({}, tu), K),
              getTooltipContainer: U || O || M,
              ref: X,
              builtinPlacements: q,
              overlay: Z,
              visible: ta,
              onVisibleChange: (e) => {
                var o, r;
                Y(!H && e),
                  H ||
                    (null === (o = t.onOpenChange) ||
                      void 0 === o ||
                      o.call(t, e),
                    null === (r = t.onVisibleChange) ||
                      void 0 === r ||
                      r.call(t, e));
              },
              afterVisibleChange: null != T ? T : j,
              overlayInnerStyle: td,
              arrowContent: n.createElement("span", {
                className: `${te}-arrow-content`,
              }),
              motion: {
                motionName: (0, c.getTransitionName)(
                  to,
                  "zoom-big-fast",
                  t.transitionName
                ),
                motionDeadline: 1e3,
              },
              destroyTooltipOnHide: !!P,
            }),
            ta ? (0, d.cloneElement)(tn, { className: ti }) : tn
          );
        return ts(n.createElement(g.default.Provider, { value: tb }, tv));
      });
      (O._InternalPanelDoNotUseOrYouWillBeFired = h.default), (e.default = O);
    },
    15086: function (t, e, o) {
      var r = o(49932).default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.prepareComponentToken = e.default = void 0);
      var a = o(12084),
        n = o(98078),
        l = o(42836),
        i = r(o(9064)),
        s = o(51337),
        f = o(3184);
      let genTooltipStyle = (t) => {
          let {
            componentCls: e,
            tooltipMaxWidth: o,
            tooltipColor: r,
            tooltipBg: l,
            tooltipBorderRadius: s,
            zIndexPopup: p,
            controlHeight: c,
            boxShadowSecondary: u,
            paddingSM: d,
            paddingXS: m,
          } = t;
          return [
            {
              [e]: Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, (0, n.resetComponent)(t)), {
                    position: "absolute",
                    zIndex: p,
                    display: "block",
                    width: "max-content",
                    maxWidth: o,
                    visibility: "visible",
                    "--valid-offset-x":
                      "var(--arrow-offset-horizontal, var(--arrow-x))",
                    transformOrigin:
                      "var(--valid-offset-x, 50%) var(--arrow-y, 50%)",
                    "&-hidden": { display: "none" },
                    "--antd-arrow-background-color": l,
                    [`${e}-inner`]: {
                      minWidth: "1em",
                      minHeight: c,
                      padding: `${(0, a.unit)(t.calc(d).div(2).equal())} ${(0,
                      a.unit)(m)}`,
                      color: r,
                      textAlign: "start",
                      textDecoration: "none",
                      wordWrap: "break-word",
                      backgroundColor: l,
                      borderRadius: s,
                      boxShadow: u,
                      boxSizing: "border-box",
                    },
                    "&-placement-left,&-placement-leftTop,&-placement-leftBottom,&-placement-right,&-placement-rightTop,&-placement-rightBottom":
                      {
                        [`${e}-inner`]: {
                          borderRadius: t.min(s, i.MAX_VERTICAL_CONTENT_RADIUS),
                        },
                      },
                    [`${e}-content`]: { position: "relative" },
                  }),
                  (0, f.genPresetColor)(t, (t, o) => {
                    let { darkColor: r } = o;
                    return {
                      [`&${e}-${t}`]: {
                        [`${e}-inner`]: { backgroundColor: r },
                        [`${e}-arrow`]: { "--antd-arrow-background-color": r },
                      },
                    };
                  })
                ),
                { "&-rtl": { direction: "rtl" } }
              ),
            },
            (0, i.default)(t, "var(--antd-arrow-background-color)"),
            {
              [`${e}-pure`]: {
                position: "relative",
                maxWidth: "none",
                margin: t.sizePopupArrow,
              },
            },
          ];
        },
        prepareComponentToken = (t) =>
          Object.assign(
            Object.assign(
              { zIndexPopup: t.zIndexPopupBase + 70 },
              (0, i.getArrowOffsetToken)({
                contentRadius: t.borderRadius,
                limitVerticalRadius: !0,
              })
            ),
            (0, s.getArrowToken)(
              (0, f.mergeToken)(t, {
                borderRadiusOuter: Math.min(t.borderRadiusOuter, 4),
              })
            )
          );
      (e.prepareComponentToken = prepareComponentToken),
        (e.default = function (t) {
          let e =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1],
            o = (0, f.genStyleHooks)(
              "Tooltip",
              (t) => {
                let {
                    borderRadius: e,
                    colorTextLightSolid: o,
                    colorBgSpotlight: r,
                  } = t,
                  a = (0, f.mergeToken)(t, {
                    tooltipMaxWidth: 250,
                    tooltipColor: o,
                    tooltipBorderRadius: e,
                    tooltipBg: r,
                  });
                return [
                  genTooltipStyle(a),
                  (0, l.initZoomMotion)(t, "zoom-big-fast"),
                ];
              },
              prepareComponentToken,
              { resetStyle: !1, injectStyle: e }
            );
          return o(t);
        });
    },
    48125: function (t, e, o) {
      var r = o(85269).default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.parseColor = function (t, e) {
          let o = (0, n.isPresetColor)(e),
            r = (0, a.default)({ [`${t}-${e}`]: e && o }),
            l = {},
            i = {};
          return (
            e &&
              !o &&
              ((l.background = e), (i["--antd-arrow-background-color"] = e)),
            { className: r, overlayStyle: l, arrowStyle: i }
          );
        });
      var a = r(o(13144)),
        n = o(45471);
    },
    92419: function (t, e, o) {
      o.r(e),
        o.d(e, {
          Popup: function () {
            return Popup;
          },
          default: function () {
            return g;
          },
        });
      var r = o(94184),
        a = o.n(r),
        n = o(67294);
      function Popup(t) {
        var e = t.children,
          o = t.prefixCls,
          r = t.id,
          l = t.overlayInnerStyle,
          i = t.className,
          s = t.style;
        return n.createElement(
          "div",
          { className: a()("".concat(o, "-content"), i), style: s },
          n.createElement(
            "div",
            {
              className: "".concat(o, "-inner"),
              id: r,
              role: "tooltip",
              style: l,
            },
            "function" == typeof e ? e() : e
          )
        );
      }
      var l = o(87462),
        i = o(1413),
        s = o(91),
        f = o(50811),
        p = { shiftX: 64, adjustY: 1 },
        c = { adjustX: 1, shiftY: !0 },
        u = [0, 0],
        d = {
          left: {
            points: ["cr", "cl"],
            overflow: c,
            offset: [-4, 0],
            targetOffset: u,
          },
          right: {
            points: ["cl", "cr"],
            overflow: c,
            offset: [4, 0],
            targetOffset: u,
          },
          top: {
            points: ["bc", "tc"],
            overflow: p,
            offset: [0, -4],
            targetOffset: u,
          },
          bottom: {
            points: ["tc", "bc"],
            overflow: p,
            offset: [0, 4],
            targetOffset: u,
          },
          topLeft: {
            points: ["bl", "tl"],
            overflow: p,
            offset: [0, -4],
            targetOffset: u,
          },
          leftTop: {
            points: ["tr", "tl"],
            overflow: c,
            offset: [-4, 0],
            targetOffset: u,
          },
          topRight: {
            points: ["br", "tr"],
            overflow: p,
            offset: [0, -4],
            targetOffset: u,
          },
          rightTop: {
            points: ["tl", "tr"],
            overflow: c,
            offset: [4, 0],
            targetOffset: u,
          },
          bottomRight: {
            points: ["tr", "br"],
            overflow: p,
            offset: [0, 4],
            targetOffset: u,
          },
          rightBottom: {
            points: ["bl", "br"],
            overflow: c,
            offset: [4, 0],
            targetOffset: u,
          },
          bottomLeft: {
            points: ["tl", "bl"],
            overflow: p,
            offset: [0, 4],
            targetOffset: u,
          },
          leftBottom: {
            points: ["br", "bl"],
            overflow: c,
            offset: [-4, 0],
            targetOffset: u,
          },
        },
        m = [
          "overlayClassName",
          "trigger",
          "mouseEnterDelay",
          "mouseLeaveDelay",
          "overlayStyle",
          "prefixCls",
          "children",
          "onVisibleChange",
          "afterVisibleChange",
          "transitionName",
          "animation",
          "motion",
          "placement",
          "align",
          "destroyTooltipOnHide",
          "defaultVisible",
          "getTooltipContainer",
          "overlayInnerStyle",
          "arrowContent",
          "overlay",
          "id",
          "showArrow",
        ],
        g = (0, n.forwardRef)(function (t, e) {
          var o = t.overlayClassName,
            r = t.trigger,
            a = t.mouseEnterDelay,
            p = t.mouseLeaveDelay,
            c = t.overlayStyle,
            u = t.prefixCls,
            g = void 0 === u ? "rc-tooltip" : u,
            b = t.children,
            v = t.onVisibleChange,
            h = t.afterVisibleChange,
            w = t.transitionName,
            y = t.animation,
            O = t.motion,
            C = t.placement,
            _ = t.align,
            $ = t.destroyTooltipOnHide,
            k = t.defaultVisible,
            T = t.getTooltipContainer,
            j = t.overlayInnerStyle,
            P = (t.arrowContent, t.overlay),
            R = t.id,
            x = t.showArrow,
            A = (0, s.Z)(t, m),
            N = (0, n.useRef)(null);
          (0, n.useImperativeHandle)(e, function () {
            return N.current;
          });
          var S = (0, i.Z)({}, A);
          return (
            "visible" in t && (S.popupVisible = t.visible),
            n.createElement(
              f.Z,
              (0, l.Z)(
                {
                  popupClassName: o,
                  prefixCls: g,
                  popup: function () {
                    return n.createElement(
                      Popup,
                      {
                        key: "content",
                        prefixCls: g,
                        id: R,
                        overlayInnerStyle: j,
                      },
                      P
                    );
                  },
                  action: void 0 === r ? ["hover"] : r,
                  builtinPlacements: d,
                  popupPlacement: void 0 === C ? "right" : C,
                  ref: N,
                  popupAlign: void 0 === _ ? {} : _,
                  getPopupContainer: T,
                  onPopupVisibleChange: v,
                  afterPopupVisibleChange: h,
                  popupTransitionName: w,
                  popupAnimation: y,
                  popupMotion: O,
                  defaultPopupVisible: k,
                  autoDestroy: void 0 !== $ && $,
                  mouseLeaveDelay: void 0 === p ? 0.1 : p,
                  popupStyle: c,
                  mouseEnterDelay: void 0 === a ? 0 : a,
                  arrow: void 0 === x || x,
                },
                S
              ),
              b
            )
          );
        });
    },
  },
]);
