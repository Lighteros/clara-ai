"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2891],
  {
    25413: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z",
                },
              },
            ],
          },
          name: "bars",
          theme: "outlined",
        });
    },
    6594: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z",
                },
              },
            ],
          },
          name: "left",
          theme: "outlined",
        });
    },
    54067: function (e, t, o) {
      var n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      let l = (n = o(45799)) && n.__esModule ? n : { default: n };
      (t.default = l), (e.exports = l);
    },
    68229: function (e, t, o) {
      var n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      let l = (n = o(7500)) && n.__esModule ? n : { default: n };
      (t.default = l), (e.exports = l);
    },
    45799: function (e, t, o) {
      var n = o(95868).default,
        l = o(72093).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = l(o(98041)),
        i = n(o(67294)),
        a = l(o(25413)),
        d = l(o(92074)),
        u = i.forwardRef(function (e, t) {
          return i.createElement(
            d.default,
            (0, r.default)({}, e, { ref: t, icon: a.default })
          );
        });
      t.default = u;
    },
    7500: function (e, t, o) {
      var n = o(95868).default,
        l = o(72093).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = l(o(98041)),
        i = n(o(67294)),
        a = l(o(6594)),
        d = l(o(92074)),
        u = i.forwardRef(function (e, t) {
          return i.createElement(
            d.default,
            (0, r.default)({}, e, { ref: t, icon: a.default })
          );
        });
      t.default = u;
    },
    74440: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isPresetSize = function (e) {
          return ["small", "middle", "large"].includes(e);
        }),
        (t.isValidGapNumber = function (e) {
          return !!e && "number" == typeof e && !Number.isNaN(e);
        });
    },
    63406: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (t.default = (e) => !isNaN(parseFloat(e)) && isFinite(e));
    },
    33398: function (e, t, o) {
      var n = o(85269).default,
        l = o(49932).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = l(o(67294)),
        i = n(o(26937)),
        a = n(o(13144)),
        d = n(o(65400)),
        u = o(31929),
        s = n(o(74048)),
        c = o(46549),
        m = n(o(48301)),
        __rest = function (e, t) {
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              0 > t.indexOf(n) &&
              (o[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var l = 0, n = Object.getOwnPropertySymbols(e);
              l < n.length;
              l++
            )
              0 > t.indexOf(n[l]) &&
                Object.prototype.propertyIsEnumerable.call(e, n[l]) &&
                (o[n[l]] = e[n[l]]);
          return o;
        };
      let DropdownButton = (e) => {
        let {
            getPopupContainer: t,
            getPrefixCls: o,
            direction: n,
          } = r.useContext(u.ConfigContext),
          {
            prefixCls: l,
            type: p = "default",
            danger: g,
            disabled: f,
            loading: b,
            onClick: $,
            htmlType: v,
            children: h,
            className: y,
            menu: C,
            arrow: S,
            autoFocus: x,
            overlay: I,
            trigger: O,
            align: w,
            open: B,
            onOpenChange: k,
            placement: j,
            getPopupContainer: E,
            href: _,
            icon: P = r.createElement(i.default, null),
            title: T,
            buttonsRender: M = (e) => e,
            mouseEnterDelay: z,
            mouseLeaveDelay: H,
            overlayClassName: N,
            overlayStyle: R,
            destroyPopupOnHide: D,
            dropdownRender: A,
          } = e,
          L = __rest(e, [
            "prefixCls",
            "type",
            "danger",
            "disabled",
            "loading",
            "onClick",
            "htmlType",
            "children",
            "className",
            "menu",
            "arrow",
            "autoFocus",
            "overlay",
            "trigger",
            "align",
            "open",
            "onOpenChange",
            "placement",
            "getPopupContainer",
            "href",
            "icon",
            "title",
            "buttonsRender",
            "mouseEnterDelay",
            "mouseLeaveDelay",
            "overlayClassName",
            "overlayStyle",
            "destroyPopupOnHide",
            "dropdownRender",
          ]),
          W = o("dropdown", l),
          q = `${W}-button`,
          X = {
            menu: C,
            arrow: S,
            autoFocus: x,
            align: w,
            disabled: f,
            trigger: f ? [] : O,
            onOpenChange: k,
            getPopupContainer: E || t,
            mouseEnterDelay: z,
            mouseLeaveDelay: H,
            overlayClassName: N,
            overlayStyle: R,
            destroyPopupOnHide: D,
            dropdownRender: A,
          },
          { compactSize: F, compactItemClassnames: G } = (0,
          c.useCompactItemContext)(W, n),
          V = (0, a.default)(q, G, y);
        "overlay" in e && (X.overlay = I),
          "open" in e && (X.open = B),
          "placement" in e
            ? (X.placement = j)
            : (X.placement = "rtl" === n ? "bottomLeft" : "bottomRight");
        let Y = r.createElement(
            d.default,
            {
              type: p,
              danger: g,
              disabled: f,
              loading: b,
              onClick: $,
              htmlType: v,
              href: _,
              title: T,
            },
            h
          ),
          U = r.createElement(d.default, { type: p, danger: g, icon: P }),
          [Z, K] = M([Y, U]);
        return r.createElement(
          s.default.Compact,
          Object.assign({ className: V, size: F, block: !0 }, L),
          Z,
          r.createElement(m.default, Object.assign({}, X), K)
        );
      };
      (DropdownButton.__ANT_BUTTON = !0), (t.default = DropdownButton);
    },
    48301: function (e, t, o) {
      var n = o(85269).default,
        l = o(49932).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = l(o(67294)),
        i = n(o(67638)),
        a = n(o(13144)),
        d = n(o(29171)),
        u = n(o(90703)),
        s = n(o(52904)),
        c = n(o(54406)),
        m = o(56333),
        p = n(o(74132)),
        g = n(o(91351)),
        f = o(47419),
        b = o(13594),
        $ = n(o(96877)),
        v = o(31929),
        h = n(o(14893)),
        y = n(o(12386)),
        C = o(2639),
        S = o(3184),
        x = n(o(6373));
      let Dropdown = (e) => {
          var t;
          let {
              menu: o,
              arrow: n,
              prefixCls: l,
              children: g,
              trigger: I,
              disabled: O,
              dropdownRender: w,
              getPopupContainer: B,
              overlayClassName: k,
              rootClassName: j,
              overlayStyle: E,
              open: _,
              onOpenChange: P,
              visible: T,
              onVisibleChange: M,
              mouseEnterDelay: z = 0.15,
              mouseLeaveDelay: H = 0.1,
              autoAdjustOverflow: N = !0,
              placement: R = "",
              overlay: D,
              transitionName: A,
            } = e,
            {
              getPopupContainer: L,
              getPrefixCls: W,
              direction: q,
              dropdown: X,
            } = r.useContext(v.ConfigContext);
          (0, b.devUseWarning)("Dropdown");
          let F = r.useMemo(() => {
              let e = W();
              return void 0 !== A
                ? A
                : R.includes("top")
                ? `${e}-slide-down`
                : `${e}-slide-up`;
            }, [W, R, A]),
            G = r.useMemo(
              () =>
                R
                  ? R.includes("Center")
                    ? R.slice(0, R.indexOf("Center"))
                    : R
                  : "rtl" === q
                  ? "bottomRight"
                  : "bottomLeft",
              [R, q]
            ),
            V = W("dropdown", l),
            Y = (0, h.default)(V),
            [U, Z, K] = (0, x.default)(V, Y),
            [, J] = (0, S.useToken)(),
            Q = r.Children.only(g),
            ee = (0, f.cloneElement)(Q, {
              className: (0, a.default)(
                `${V}-trigger`,
                { [`${V}-rtl`]: "rtl" === q },
                Q.props.className
              ),
              disabled: null !== (t = Q.props.disabled) && void 0 !== t ? t : O,
            }),
            et = O ? [] : I,
            eo = !!(null == et ? void 0 : et.includes("contextMenu")),
            [en, el] = (0, s.default)(!1, { value: null != _ ? _ : T }),
            er = (0, u.default)((e) => {
              null == P || P(e, { source: "trigger" }),
                null == M || M(e),
                el(e);
            }),
            ei = (0, a.default)(
              k,
              j,
              Z,
              K,
              Y,
              null == X ? void 0 : X.className,
              { [`${V}-rtl`]: "rtl" === q }
            ),
            ea = (0, p.default)({
              arrowPointAtCenter: "object" == typeof n && n.pointAtCenter,
              autoAdjustOverflow: N,
              offset: J.marginXXS,
              arrowWidth: n ? J.sizePopupArrow : 0,
              borderRadius: J.borderRadius,
            }),
            ed = r.useCallback(() => {
              (null != o && o.selectable && null != o && o.multiple) ||
                (null == P || P(!1, { source: "menu" }), el(!1));
            }, [
              null == o ? void 0 : o.selectable,
              null == o ? void 0 : o.multiple,
            ]),
            [eu, es] = (0, m.useZIndex)(
              "Dropdown",
              null == E ? void 0 : E.zIndex
            ),
            ec = r.createElement(
              d.default,
              Object.assign(
                { alignPoint: eo },
                (0, c.default)(e, ["rootClassName"]),
                {
                  mouseEnterDelay: z,
                  mouseLeaveDelay: H,
                  visible: en,
                  builtinPlacements: ea,
                  arrow: !!n,
                  overlayClassName: ei,
                  prefixCls: V,
                  getPopupContainer: B || L,
                  transitionName: F,
                  trigger: et,
                  overlay: () => {
                    let e;
                    return (
                      (e = (null == o ? void 0 : o.items)
                        ? r.createElement(y.default, Object.assign({}, o))
                        : "function" == typeof D
                        ? D()
                        : D),
                      w && (e = w(e)),
                      (e = r.Children.only(
                        "string" == typeof e
                          ? r.createElement("span", null, e)
                          : e
                      )),
                      r.createElement(
                        C.OverrideProvider,
                        {
                          prefixCls: `${V}-menu`,
                          rootClassName: (0, a.default)(K, Y),
                          expandIcon: r.createElement(
                            "span",
                            { className: `${V}-menu-submenu-arrow` },
                            r.createElement(i.default, {
                              className: `${V}-menu-submenu-arrow-icon`,
                            })
                          ),
                          mode: "vertical",
                          selectable: !1,
                          onClick: ed,
                          validator: (e) => {
                            let { mode: t } = e;
                          },
                        },
                        e
                      )
                    );
                  },
                  placement: G,
                  onVisibleChange: er,
                  overlayStyle: Object.assign(
                    Object.assign(
                      Object.assign({}, null == X ? void 0 : X.style),
                      E
                    ),
                    { zIndex: eu }
                  ),
                }
              ),
              ee
            );
          return (
            eu && (ec = r.createElement($.default.Provider, { value: es }, ec)),
            U(ec)
          );
        },
        I = (0, g.default)(
          Dropdown,
          "dropdown",
          (e) => e,
          function (e) {
            return Object.assign(Object.assign({}, e), {
              align: { overflow: { adjustX: !1, adjustY: !1 } },
            });
          }
        );
      (Dropdown._InternalPanelDoNotUseOrYouWillBeFired = (e) =>
        r.createElement(
          I,
          Object.assign({}, e),
          r.createElement("span", null)
        )),
        (t.default = Dropdown);
    },
    77834: function (e, t, o) {
      var n = o(85269).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var l = n(o(48301)),
        r = n(o(33398));
      let i = l.default;
      (i.Button = r.default), (t.default = i);
    },
    6373: function (e, t, o) {
      var n = o(85269).default,
        l = o(49932).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.prepareComponentToken = t.default = void 0);
      var r = o(12084),
        i = o(98078),
        a = o(42836),
        d = l(o(9064)),
        u = o(51337),
        s = o(3184),
        c = n(o(38203));
      let genBaseStyle = (e) => {
          let {
            componentCls: t,
            menuCls: o,
            zIndexPopup: n,
            dropdownArrowDistance: l,
            sizePopupArrow: u,
            antCls: s,
            iconCls: c,
            motionDurationMid: m,
            paddingBlock: p,
            fontSize: g,
            dropdownEdgeChildPadding: f,
            colorTextDisabled: b,
            fontSizeIcon: $,
            controlPaddingHorizontal: v,
            colorBgElevated: h,
          } = e;
          return [
            {
              [t]: {
                position: "absolute",
                top: -9999,
                left: { _skip_check_: !0, value: -9999 },
                zIndex: n,
                display: "block",
                "&::before": {
                  position: "absolute",
                  insetBlock: e.calc(u).div(2).sub(l).equal(),
                  zIndex: -9999,
                  opacity: 1e-4,
                  content: '""',
                },
                "&-menu-vertical": { maxHeight: "100vh", overflowY: "auto" },
                [`&-trigger${s}-btn`]: {
                  [`& > ${c}-down, & > ${s}-btn-icon > ${c}-down`]: {
                    fontSize: $,
                  },
                },
                [`${t}-wrap`]: {
                  position: "relative",
                  [`${s}-btn > ${c}-down`]: { fontSize: $ },
                  [`${c}-down::before`]: { transition: `transform ${m}` },
                },
                [`${t}-wrap-open`]: {
                  [`${c}-down::before`]: { transform: "rotate(180deg)" },
                },
                [`
        &-hidden,
        &-menu-hidden,
        &-menu-submenu-hidden
      `]: { display: "none" },
                [`&${s}-slide-down-enter${s}-slide-down-enter-active${t}-placement-bottomLeft,
          &${s}-slide-down-appear${s}-slide-down-appear-active${t}-placement-bottomLeft,
          &${s}-slide-down-enter${s}-slide-down-enter-active${t}-placement-bottom,
          &${s}-slide-down-appear${s}-slide-down-appear-active${t}-placement-bottom,
          &${s}-slide-down-enter${s}-slide-down-enter-active${t}-placement-bottomRight,
          &${s}-slide-down-appear${s}-slide-down-appear-active${t}-placement-bottomRight`]:
                  { animationName: a.slideUpIn },
                [`&${s}-slide-up-enter${s}-slide-up-enter-active${t}-placement-topLeft,
          &${s}-slide-up-appear${s}-slide-up-appear-active${t}-placement-topLeft,
          &${s}-slide-up-enter${s}-slide-up-enter-active${t}-placement-top,
          &${s}-slide-up-appear${s}-slide-up-appear-active${t}-placement-top,
          &${s}-slide-up-enter${s}-slide-up-enter-active${t}-placement-topRight,
          &${s}-slide-up-appear${s}-slide-up-appear-active${t}-placement-topRight`]:
                  { animationName: a.slideDownIn },
                [`&${s}-slide-down-leave${s}-slide-down-leave-active${t}-placement-bottomLeft,
          &${s}-slide-down-leave${s}-slide-down-leave-active${t}-placement-bottom,
          &${s}-slide-down-leave${s}-slide-down-leave-active${t}-placement-bottomRight`]:
                  { animationName: a.slideUpOut },
                [`&${s}-slide-up-leave${s}-slide-up-leave-active${t}-placement-topLeft,
          &${s}-slide-up-leave${s}-slide-up-leave-active${t}-placement-top,
          &${s}-slide-up-leave${s}-slide-up-leave-active${t}-placement-topRight`]:
                  { animationName: a.slideDownOut },
              },
            },
            (0, d.default)(e, h, { arrowPlacement: { top: !0, bottom: !0 } }),
            {
              [`${t} ${o}`]: { position: "relative", margin: 0 },
              [`${o}-submenu-popup`]: {
                position: "absolute",
                zIndex: n,
                background: "transparent",
                boxShadow: "none",
                transformOrigin: "0 0",
                "ul, li": { listStyle: "none", margin: 0 },
              },
              [`${t}, ${t}-menu-submenu`]: Object.assign(
                Object.assign({}, (0, i.resetComponent)(e)),
                {
                  [o]: Object.assign(
                    Object.assign(
                      {
                        padding: f,
                        listStyleType: "none",
                        backgroundColor: h,
                        backgroundClip: "padding-box",
                        borderRadius: e.borderRadiusLG,
                        outline: "none",
                        boxShadow: e.boxShadowSecondary,
                      },
                      (0, i.genFocusStyle)(e)
                    ),
                    {
                      "&:empty": { padding: 0, boxShadow: "none" },
                      [`${o}-item-group-title`]: {
                        padding: `${(0, r.unit)(p)} ${(0, r.unit)(v)}`,
                        color: e.colorTextDescription,
                        transition: `all ${m}`,
                      },
                      [`${o}-item`]: {
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                      },
                      [`${o}-item-icon`]: {
                        minWidth: g,
                        marginInlineEnd: e.marginXS,
                        fontSize: e.fontSizeSM,
                      },
                      [`${o}-title-content`]: {
                        display: "flex",
                        alignItems: "center",
                        flex: "auto",
                        "> a": {
                          color: "inherit",
                          transition: `all ${m}`,
                          "&:hover": { color: "inherit" },
                          "&::after": {
                            position: "absolute",
                            inset: 0,
                            content: '""',
                          },
                        },
                        [`${o}-item-extra`]: {
                          paddingInlineStart: e.padding,
                          marginInlineStart: "auto",
                          fontSize: e.fontSizeSM,
                          color: e.colorTextDescription,
                        },
                      },
                      [`${o}-item, ${o}-submenu-title`]: Object.assign(
                        Object.assign(
                          {
                            display: "flex",
                            margin: 0,
                            padding: `${(0, r.unit)(p)} ${(0, r.unit)(v)}`,
                            color: e.colorText,
                            fontWeight: "normal",
                            fontSize: g,
                            lineHeight: e.lineHeight,
                            cursor: "pointer",
                            transition: `all ${m}`,
                            borderRadius: e.borderRadiusSM,
                            "&:hover, &-active": {
                              backgroundColor: e.controlItemBgHover,
                            },
                          },
                          (0, i.genFocusStyle)(e)
                        ),
                        {
                          "&-selected": {
                            color: e.colorPrimary,
                            backgroundColor: e.controlItemBgActive,
                            "&:hover, &-active": {
                              backgroundColor: e.controlItemBgActiveHover,
                            },
                          },
                          "&-disabled": {
                            color: b,
                            cursor: "not-allowed",
                            "&:hover": {
                              color: b,
                              backgroundColor: h,
                              cursor: "not-allowed",
                            },
                            a: { pointerEvents: "none" },
                          },
                          "&-divider": {
                            height: 1,
                            margin: `${(0, r.unit)(e.marginXXS)} 0`,
                            overflow: "hidden",
                            lineHeight: 0,
                            backgroundColor: e.colorSplit,
                          },
                          [`${t}-menu-submenu-expand-icon`]: {
                            position: "absolute",
                            insetInlineEnd: e.paddingXS,
                            [`${t}-menu-submenu-arrow-icon`]: {
                              marginInlineEnd: "0 !important",
                              color: e.colorTextDescription,
                              fontSize: $,
                              fontStyle: "normal",
                            },
                          },
                        }
                      ),
                      [`${o}-item-group-list`]: {
                        margin: `0 ${(0, r.unit)(e.marginXS)}`,
                        padding: 0,
                        listStyle: "none",
                      },
                      [`${o}-submenu-title`]: {
                        paddingInlineEnd: e.calc(v).add(e.fontSizeSM).equal(),
                      },
                      [`${o}-submenu-vertical`]: { position: "relative" },
                      [`${o}-submenu${o}-submenu-disabled ${t}-menu-submenu-title`]:
                        {
                          [`&, ${t}-menu-submenu-arrow-icon`]: {
                            color: b,
                            backgroundColor: h,
                            cursor: "not-allowed",
                          },
                        },
                      [`${o}-submenu-selected ${t}-menu-submenu-title`]: {
                        color: e.colorPrimary,
                      },
                    }
                  ),
                }
              ),
            },
            [
              (0, a.initSlideMotion)(e, "slide-up"),
              (0, a.initSlideMotion)(e, "slide-down"),
              (0, a.initMoveMotion)(e, "move-up"),
              (0, a.initMoveMotion)(e, "move-down"),
              (0, a.initZoomMotion)(e, "zoom-big"),
            ],
          ];
        },
        prepareComponentToken = (e) =>
          Object.assign(
            Object.assign(
              {
                zIndexPopup: e.zIndexPopupBase + 50,
                paddingBlock: (e.controlHeight - e.fontSize * e.lineHeight) / 2,
              },
              (0, d.getArrowOffsetToken)({
                contentRadius: e.borderRadiusLG,
                limitVerticalRadius: !0,
              })
            ),
            (0, u.getArrowToken)(e)
          );
      (t.prepareComponentToken = prepareComponentToken),
        (t.default = (0, s.genStyleHooks)(
          "Dropdown",
          (e) => {
            let {
                marginXXS: t,
                sizePopupArrow: o,
                paddingXXS: n,
                componentCls: l,
              } = e,
              r = (0, s.mergeToken)(e, {
                menuCls: `${l}-menu`,
                dropdownArrowDistance: e.calc(o).div(2).add(t).equal(),
                dropdownEdgeChildPadding: n,
              });
            return [genBaseStyle(r), (0, c.default)(r)];
          },
          prepareComponentToken,
          { resetStyle: !1 }
        ));
    },
    38203: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (t.default = (e) => {
          let {
              componentCls: t,
              menuCls: o,
              colorError: n,
              colorTextLightSolid: l,
            } = e,
            r = `${o}-item`;
          return {
            [`${t}, ${t}-menu-submenu`]: {
              [`${o} ${r}`]: {
                [`&${r}-danger:not(${r}-disabled)`]: {
                  color: n,
                  "&:hover": { color: l, backgroundColor: n },
                },
              },
            },
          };
        });
    },
    87412: function (e, t, o) {
      let n;
      var l = o(85269).default,
        r = o(49932).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.SiderContext = void 0);
      var i = r(o(67294)),
        a = l(o(54067)),
        d = l(o(68229)),
        u = l(o(67638)),
        s = l(o(13144)),
        c = l(o(54406)),
        m = l(o(63406)),
        p = o(31929),
        g = o(56369),
        f = l(o(96331)),
        __rest = function (e, t) {
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              0 > t.indexOf(n) &&
              (o[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var l = 0, n = Object.getOwnPropertySymbols(e);
              l < n.length;
              l++
            )
              0 > t.indexOf(n[l]) &&
                Object.prototype.propertyIsEnumerable.call(e, n[l]) &&
                (o[n[l]] = e[n[l]]);
          return o;
        };
      let b = {
          xs: "479.98px",
          sm: "575.98px",
          md: "767.98px",
          lg: "991.98px",
          xl: "1199.98px",
          xxl: "1599.98px",
        },
        $ = (t.SiderContext = i.createContext({})),
        v =
          ((n = 0),
          function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return (n += 1), `${e}${n}`;
          }),
        h = i.forwardRef((e, t) => {
          let {
              prefixCls: o,
              className: n,
              trigger: l,
              children: r,
              defaultCollapsed: h = !1,
              theme: y = "dark",
              style: C = {},
              collapsible: S = !1,
              reverseArrow: x = !1,
              width: I = 200,
              collapsedWidth: O = 80,
              zeroWidthTriggerStyle: w,
              breakpoint: B,
              onCollapse: k,
              onBreakpoint: j,
            } = e,
            E = __rest(e, [
              "prefixCls",
              "className",
              "trigger",
              "children",
              "defaultCollapsed",
              "theme",
              "style",
              "collapsible",
              "reverseArrow",
              "width",
              "collapsedWidth",
              "zeroWidthTriggerStyle",
              "breakpoint",
              "onCollapse",
              "onBreakpoint",
            ]),
            { siderHook: _ } = (0, i.useContext)(g.LayoutContext),
            [P, T] = (0, i.useState)("collapsed" in e ? e.collapsed : h),
            [M, z] = (0, i.useState)(!1);
          (0, i.useEffect)(() => {
            "collapsed" in e && T(e.collapsed);
          }, [e.collapsed]);
          let handleSetCollapsed = (t, o) => {
              "collapsed" in e || T(t), null == k || k(t, o);
            },
            { getPrefixCls: H } = (0, i.useContext)(p.ConfigContext),
            N = H("layout-sider", o),
            [R, D, A] = (0, f.default)(N),
            L = (0, i.useRef)();
          (L.current = (e) => {
            z(e.matches),
              null == j || j(e.matches),
              P !== e.matches && handleSetCollapsed(e.matches, "responsive");
          }),
            (0, i.useEffect)(() => {
              let e;
              function responsiveHandler(e) {
                return L.current(e);
              }
              if ("undefined" != typeof window) {
                let { matchMedia: t } = window;
                if (t && B && B in b) {
                  e = t(`screen and (max-width: ${b[B]})`);
                  try {
                    e.addEventListener("change", responsiveHandler);
                  } catch (t) {
                    e.addListener(responsiveHandler);
                  }
                  responsiveHandler(e);
                }
              }
              return () => {
                try {
                  null == e ||
                    e.removeEventListener("change", responsiveHandler);
                } catch (t) {
                  null == e || e.removeListener(responsiveHandler);
                }
              };
            }, [B]),
            (0, i.useEffect)(() => {
              let e = v("ant-sider-");
              return _.addSider(e), () => _.removeSider(e);
            }, []);
          let toggle = () => {
              handleSetCollapsed(!P, "clickTrigger");
            },
            W = i.useMemo(() => ({ siderCollapsed: P }), [P]);
          return R(
            i.createElement(
              $.Provider,
              { value: W },
              (() => {
                let e = (0, c.default)(E, ["collapsed"]),
                  o = P ? O : I,
                  p = (0, m.default)(o) ? `${o}px` : String(o),
                  g =
                    0 === parseFloat(String(O || 0))
                      ? i.createElement(
                          "span",
                          {
                            onClick: toggle,
                            className: (0, s.default)(
                              `${N}-zero-width-trigger`,
                              `${N}-zero-width-trigger-${x ? "right" : "left"}`
                            ),
                            style: w,
                          },
                          l || i.createElement(a.default, null)
                        )
                      : null,
                  f = {
                    expanded: x
                      ? i.createElement(u.default, null)
                      : i.createElement(d.default, null),
                    collapsed: x
                      ? i.createElement(d.default, null)
                      : i.createElement(u.default, null),
                  },
                  b = P ? "collapsed" : "expanded",
                  $ = f[b],
                  v =
                    null !== l
                      ? g ||
                        i.createElement(
                          "div",
                          {
                            className: `${N}-trigger`,
                            onClick: toggle,
                            style: { width: p },
                          },
                          l || $
                        )
                      : null,
                  h = Object.assign(Object.assign({}, C), {
                    flex: `0 0 ${p}`,
                    maxWidth: p,
                    minWidth: p,
                    width: p,
                  }),
                  B = (0, s.default)(
                    N,
                    `${N}-${y}`,
                    {
                      [`${N}-collapsed`]: !!P,
                      [`${N}-has-trigger`]: S && null !== l && !g,
                      [`${N}-below`]: !!M,
                      [`${N}-zero-width`]: 0 === parseFloat(p),
                    },
                    n,
                    D,
                    A
                  );
                return i.createElement(
                  "aside",
                  Object.assign({ className: B }, e, { style: h, ref: t }),
                  i.createElement("div", { className: `${N}-children` }, r),
                  S || (M && g) ? v : null
                );
              })()
            )
          );
        });
      t.default = h;
    },
    56369: function (e, t, o) {
      var n = o(49932).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LayoutContext = void 0);
      var l = n(o(67294));
      t.LayoutContext = l.createContext({
        siderHook: { addSider: () => null, removeSider: () => null },
      });
    },
    73431: function (e, t, o) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.prepareComponentToken = t.default = t.DEPRECATED_TOKENS = void 0);
      var n = o(12084),
        l = o(3184);
      let genLayoutStyle = (e) => {
          let {
            antCls: t,
            componentCls: o,
            colorText: l,
            footerBg: r,
            headerHeight: i,
            headerPadding: a,
            headerColor: d,
            footerPadding: u,
            fontSize: s,
            bodyBg: c,
            headerBg: m,
          } = e;
          return {
            [o]: {
              display: "flex",
              flex: "auto",
              flexDirection: "column",
              minHeight: 0,
              background: c,
              "&, *": { boxSizing: "border-box" },
              [`&${o}-has-sider`]: {
                flexDirection: "row",
                [`> ${o}, > ${o}-content`]: { width: 0 },
              },
              [`${o}-header, &${o}-footer`]: { flex: "0 0 auto" },
              "&-rtl": { direction: "rtl" },
            },
            [`${o}-header`]: {
              height: i,
              padding: a,
              color: d,
              lineHeight: (0, n.unit)(i),
              background: m,
              [`${t}-menu`]: { lineHeight: "inherit" },
            },
            [`${o}-footer`]: {
              padding: u,
              color: l,
              fontSize: s,
              background: r,
            },
            [`${o}-content`]: { flex: "auto", color: l, minHeight: 0 },
          };
        },
        prepareComponentToken = (e) => {
          let {
              colorBgLayout: t,
              controlHeight: o,
              controlHeightLG: n,
              colorText: l,
              controlHeightSM: r,
              marginXXS: i,
              colorTextLightSolid: a,
              colorBgContainer: d,
            } = e,
            u = 1.25 * n;
          return {
            colorBgHeader: "#001529",
            colorBgBody: t,
            colorBgTrigger: "#002140",
            bodyBg: t,
            headerBg: "#001529",
            headerHeight: 2 * o,
            headerPadding: `0 ${u}px`,
            headerColor: l,
            footerPadding: `${r}px ${u}px`,
            footerBg: t,
            siderBg: "#001529",
            triggerHeight: n + 2 * i,
            triggerBg: "#002140",
            triggerColor: a,
            zeroTriggerWidth: n,
            zeroTriggerHeight: n,
            lightSiderBg: d,
            lightTriggerBg: d,
            lightTriggerColor: l,
          };
        };
      t.prepareComponentToken = prepareComponentToken;
      let r = (t.DEPRECATED_TOKENS = [
        ["colorBgBody", "bodyBg"],
        ["colorBgHeader", "headerBg"],
        ["colorBgTrigger", "triggerBg"],
      ]);
      t.default = (0, l.genStyleHooks)(
        "Layout",
        (e) => [genLayoutStyle(e)],
        prepareComponentToken,
        { deprecatedTokens: r }
      );
    },
    96331: function (e, t, o) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = o(12084),
        l = o(73431),
        r = o(3184);
      let genSiderStyle = (e) => {
        let {
          componentCls: t,
          siderBg: o,
          motionDurationMid: l,
          motionDurationSlow: r,
          antCls: i,
          triggerHeight: a,
          triggerColor: d,
          triggerBg: u,
          headerHeight: s,
          zeroTriggerWidth: c,
          zeroTriggerHeight: m,
          borderRadius: p,
          lightSiderBg: g,
          lightTriggerColor: f,
          lightTriggerBg: b,
          bodyBg: $,
        } = e;
        return {
          [t]: {
            position: "relative",
            minWidth: 0,
            background: o,
            transition: `all ${l}, background 0s`,
            "&-has-trigger": { paddingBottom: a },
            "&-right": { order: 1 },
            [`${t}-children`]: {
              height: "100%",
              marginTop: -0.1,
              paddingTop: 0.1,
              [`${i}-menu${i}-menu-inline-collapsed`]: { width: "auto" },
            },
            [`${t}-trigger`]: {
              position: "fixed",
              bottom: 0,
              zIndex: 1,
              height: a,
              color: d,
              lineHeight: (0, n.unit)(a),
              textAlign: "center",
              background: u,
              cursor: "pointer",
              transition: `all ${l}`,
            },
            "&-zero-width": {
              "> *": { overflow: "hidden" },
              "&-trigger": {
                position: "absolute",
                top: s,
                insetInlineEnd: e.calc(c).mul(-1).equal(),
                zIndex: 1,
                width: c,
                height: m,
                color: d,
                fontSize: e.fontSizeXL,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: o,
                borderStartStartRadius: 0,
                borderStartEndRadius: p,
                borderEndEndRadius: p,
                borderEndStartRadius: 0,
                cursor: "pointer",
                transition: `background ${r} ease`,
                "&::after": {
                  position: "absolute",
                  inset: 0,
                  background: "transparent",
                  transition: `all ${r}`,
                  content: '""',
                },
                "&:hover::after": { background: "rgba(255, 255, 255, 0.2)" },
                "&-right": {
                  insetInlineStart: e.calc(c).mul(-1).equal(),
                  borderStartStartRadius: p,
                  borderStartEndRadius: 0,
                  borderEndEndRadius: 0,
                  borderEndStartRadius: p,
                },
              },
            },
            "&-light": {
              background: g,
              [`${t}-trigger`]: { color: f, background: b },
              [`${t}-zero-width-trigger`]: {
                color: f,
                background: b,
                border: `1px solid ${$}`,
                borderInlineStart: 0,
              },
            },
          },
        };
      };
      t.default = (0, r.genStyleHooks)(
        ["Layout", "Sider"],
        (e) => [genSiderStyle(e)],
        l.prepareComponentToken,
        { deprecatedTokens: l.DEPRECATED_TOKENS }
      );
    },
    22493: function (e, t, o) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = o(67294);
      let l = (0, n.createContext)({
        prefixCls: "",
        firstLevel: !0,
        inlineCollapsed: !1,
      });
      t.default = l;
    },
    24421: function (e, t, o) {
      var n = o(85269).default,
        l = o(49932).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = l(o(67294)),
        i = n(o(13144)),
        a = o(72512),
        d = o(31929),
        __rest = function (e, t) {
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              0 > t.indexOf(n) &&
              (o[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var l = 0, n = Object.getOwnPropertySymbols(e);
              l < n.length;
              l++
            )
              0 > t.indexOf(n[l]) &&
                Object.prototype.propertyIsEnumerable.call(e, n[l]) &&
                (o[n[l]] = e[n[l]]);
          return o;
        };
      t.default = (e) => {
        let { prefixCls: t, className: o, dashed: n } = e,
          l = __rest(e, ["prefixCls", "className", "dashed"]),
          { getPrefixCls: u } = r.useContext(d.ConfigContext),
          s = u("menu", t),
          c = (0, i.default)({ [`${s}-item-divider-dashed`]: !!n }, o);
        return r.createElement(a.Divider, Object.assign({ className: c }, l));
      };
    },
    51005: function (e, t, o) {
      var n = o(85269).default,
        l = o(49932).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = l(o(67294)),
        i = n(o(13144)),
        a = o(72512),
        d = n(o(98959)),
        u = n(o(54406)),
        s = o(47419),
        c = o(87412),
        m = n(o(94055)),
        p = n(o(22493));
      t.default = (e) => {
        var t;
        let { className: o, children: n, icon: l, title: g, danger: f } = e,
          {
            prefixCls: b,
            firstLevel: $,
            direction: v,
            disableMenuItemTitleTooltip: h,
            inlineCollapsed: y,
          } = r.useContext(p.default),
          { siderCollapsed: C } = r.useContext(c.SiderContext),
          S = g;
        void 0 === g ? (S = $ ? n : "") : !1 === g && (S = "");
        let x = { title: S };
        C || y || ((x.title = null), (x.open = !1));
        let I = (0, d.default)(n).length,
          O = r.createElement(
            a.Item,
            Object.assign({}, (0, u.default)(e, ["title", "icon", "danger"]), {
              className: (0, i.default)(
                {
                  [`${b}-item-danger`]: f,
                  [`${b}-item-only-child`]: (l ? I + 1 : I) === 1,
                },
                o
              ),
              title: "string" == typeof g ? g : void 0,
            }),
            (0, s.cloneElement)(l, {
              className: (0, i.default)(
                r.isValidElement(l)
                  ? null === (t = l.props) || void 0 === t
                    ? void 0
                    : t.className
                  : "",
                `${b}-item-icon`
              ),
            }),
            ((e) => {
              let t = null == n ? void 0 : n[0],
                o = r.createElement(
                  "span",
                  { className: `${b}-title-content` },
                  n
                );
              return (!l || (r.isValidElement(n) && "span" === n.type)) &&
                n &&
                e &&
                $ &&
                "string" == typeof t
                ? r.createElement(
                    "div",
                    { className: `${b}-inline-collapsed-noicon` },
                    t.charAt(0)
                  )
                : o;
            })(y)
          );
        return (
          h ||
            (O = r.createElement(
              m.default,
              Object.assign({}, x, {
                placement: "rtl" === v ? "left" : "right",
                overlayClassName: `${b}-inline-collapsed-tooltip`,
              }),
              O
            )),
          O
        );
      };
    },
    2639: function (e, t, o) {
      var n = o(85269).default,
        l = o(49932).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.OverrideProvider = void 0);
      var r = l(o(67294)),
        i = o(55608),
        a = n(o(85549)),
        __rest = function (e, t) {
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              0 > t.indexOf(n) &&
              (o[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var l = 0, n = Object.getOwnPropertySymbols(e);
              l < n.length;
              l++
            )
              0 > t.indexOf(n[l]) &&
                Object.prototype.propertyIsEnumerable.call(e, n[l]) &&
                (o[n[l]] = e[n[l]]);
          return o;
        };
      let d = r.createContext(null);
      (t.OverrideProvider = r.forwardRef((e, t) => {
        let { children: o } = e,
          n = __rest(e, ["children"]),
          l = r.useContext(d),
          u = r.useMemo(
            () => Object.assign(Object.assign({}, l), n),
            [l, n.prefixCls, n.mode, n.selectable, n.rootClassName]
          ),
          s = (0, i.supportNodeRef)(o),
          c = (0, i.useComposeRef)(t, s ? o.ref : null);
        return r.createElement(
          d.Provider,
          { value: u },
          r.createElement(
            a.default,
            { space: !0 },
            s ? r.cloneElement(o, { ref: c }) : o
          )
        );
      })),
        (t.default = d);
    },
    78966: function (e, t, o) {
      var n = o(85269).default,
        l = o(49932).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = l(o(67294)),
        i = n(o(13144)),
        a = o(72512),
        d = n(o(54406)),
        u = o(56333),
        s = o(47419),
        c = n(o(22493));
      t.default = (e) => {
        var t;
        let o;
        let { popupClassName: n, icon: l, title: m, theme: p } = e,
          g = r.useContext(c.default),
          { prefixCls: f, inlineCollapsed: b, theme: $ } = g,
          v = (0, a.useFullPath)();
        if (l) {
          let e = r.isValidElement(m) && "span" === m.type;
          o = r.createElement(
            r.Fragment,
            null,
            (0, s.cloneElement)(l, {
              className: (0, i.default)(
                r.isValidElement(l)
                  ? null === (t = l.props) || void 0 === t
                    ? void 0
                    : t.className
                  : "",
                `${f}-item-icon`
              ),
            }),
            e
              ? m
              : r.createElement("span", { className: `${f}-title-content` }, m)
          );
        } else
          o =
            b && !v.length && m && "string" == typeof m
              ? r.createElement(
                  "div",
                  { className: `${f}-inline-collapsed-noicon` },
                  m.charAt(0)
                )
              : r.createElement("span", { className: `${f}-title-content` }, m);
        let h = r.useMemo(
            () => Object.assign(Object.assign({}, g), { firstLevel: !1 }),
            [g]
          ),
          [y] = (0, u.useZIndex)("Menu");
        return r.createElement(
          c.default.Provider,
          { value: h },
          r.createElement(
            a.SubMenu,
            Object.assign({}, (0, d.default)(e, ["icon"]), {
              title: o,
              popupClassName: (0, i.default)(f, n, `${f}-${p || $}`),
              popupStyle: Object.assign({ zIndex: y }, e.popupStyle),
            })
          )
        );
      };
    },
    12386: function (e, t, o) {
      var n = o(85269).default,
        l = o(49932).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = l(o(67294)),
        i = o(72512),
        a = o(87412),
        d = n(o(2812)),
        u = n(o(24421)),
        s = n(o(51005)),
        c = n(o(78966));
      let m = (0, r.forwardRef)((e, t) => {
        let o = (0, r.useRef)(null),
          n = r.useContext(a.SiderContext);
        return (
          (0, r.useImperativeHandle)(t, () => ({
            menu: o.current,
            focus: (e) => {
              var t;
              null === (t = o.current) || void 0 === t || t.focus(e);
            },
          })),
          r.createElement(d.default, Object.assign({ ref: o }, e, n))
        );
      });
      (m.Item = s.default),
        (m.SubMenu = c.default),
        (m.Divider = u.default),
        (m.ItemGroup = i.ItemGroup),
        (t.default = m);
    },
    2812: function (e, t, o) {
      var n = o(85269).default,
        l = o(49932).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = l(o(67294)),
        i = n(o(26937)),
        a = n(o(13144)),
        d = n(o(72512)),
        u = n(o(90703)),
        s = n(o(54406)),
        c = n(o(53683)),
        m = o(47419);
      o(13594);
      var p = o(31929),
        g = n(o(14893)),
        f = n(o(22493)),
        b = n(o(24421)),
        $ = n(o(51005)),
        v = n(o(2639)),
        h = n(o(54214)),
        y = n(o(78966)),
        __rest = function (e, t) {
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              0 > t.indexOf(n) &&
              (o[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var l = 0, n = Object.getOwnPropertySymbols(e);
              l < n.length;
              l++
            )
              0 > t.indexOf(n[l]) &&
                Object.prototype.propertyIsEnumerable.call(e, n[l]) &&
                (o[n[l]] = e[n[l]]);
          return o;
        };
      function isEmptyIcon(e) {
        return null === e || !1 === e;
      }
      let C = { item: $.default, submenu: y.default, divider: b.default },
        S = (0, r.forwardRef)((e, t) => {
          var o;
          let n = r.useContext(v.default),
            l = n || {},
            {
              getPrefixCls: b,
              getPopupContainer: $,
              direction: y,
              menu: S,
            } = r.useContext(p.ConfigContext),
            x = b(),
            {
              prefixCls: I,
              className: O,
              style: w,
              theme: B = "light",
              expandIcon: k,
              _internalDisableMenuItemTitleTooltip: j,
              inlineCollapsed: E,
              siderCollapsed: _,
              rootClassName: P,
              mode: T,
              selectable: M,
              onClick: z,
              overflowedIndicatorPopupClassName: H,
            } = e,
            N = __rest(e, [
              "prefixCls",
              "className",
              "style",
              "theme",
              "expandIcon",
              "_internalDisableMenuItemTitleTooltip",
              "inlineCollapsed",
              "siderCollapsed",
              "rootClassName",
              "mode",
              "selectable",
              "onClick",
              "overflowedIndicatorPopupClassName",
            ]),
            R = (0, s.default)(N, ["collapsedWidth"]);
          null === (o = l.validator) || void 0 === o || o.call(l, { mode: T });
          let D = (0, u.default)(function () {
              var e;
              null == z || z.apply(void 0, arguments),
                null === (e = l.onClick) || void 0 === e || e.call(l);
            }),
            A = l.mode || T,
            L = null != M ? M : l.selectable,
            W = r.useMemo(() => (void 0 !== _ ? _ : E), [E, _]),
            q = {
              horizontal: { motionName: `${x}-slide-up` },
              inline: (0, c.default)(x),
              other: { motionName: `${x}-zoom-big` },
            },
            X = b("menu", I || l.prefixCls),
            F = (0, g.default)(X),
            [G, V, Y] = (0, h.default)(X, F, !n),
            U = (0, a.default)(
              `${X}-${B}`,
              null == S ? void 0 : S.className,
              O
            ),
            Z = r.useMemo(() => {
              var e, t;
              if ("function" == typeof k || isEmptyIcon(k)) return k || null;
              if (
                "function" == typeof l.expandIcon ||
                isEmptyIcon(l.expandIcon)
              )
                return l.expandIcon || null;
              if (
                "function" == typeof (null == S ? void 0 : S.expandIcon) ||
                isEmptyIcon(null == S ? void 0 : S.expandIcon)
              )
                return (null == S ? void 0 : S.expandIcon) || null;
              let o =
                null !==
                  (e = null != k ? k : null == l ? void 0 : l.expandIcon) &&
                void 0 !== e
                  ? e
                  : null == S
                  ? void 0
                  : S.expandIcon;
              return (0, m.cloneElement)(o, {
                className: (0, a.default)(
                  `${X}-submenu-expand-icon`,
                  r.isValidElement(o)
                    ? null === (t = o.props) || void 0 === t
                      ? void 0
                      : t.className
                    : void 0
                ),
              });
            }, [
              k,
              null == l ? void 0 : l.expandIcon,
              null == S ? void 0 : S.expandIcon,
              X,
            ]),
            K = r.useMemo(
              () => ({
                prefixCls: X,
                inlineCollapsed: W || !1,
                direction: y,
                firstLevel: !0,
                theme: B,
                mode: A,
                disableMenuItemTitleTooltip: j,
              }),
              [X, W, y, j, B]
            );
          return G(
            r.createElement(
              v.default.Provider,
              { value: null },
              r.createElement(
                f.default.Provider,
                { value: K },
                r.createElement(
                  d.default,
                  Object.assign(
                    {
                      getPopupContainer: $,
                      overflowedIndicator: r.createElement(i.default, null),
                      overflowedIndicatorPopupClassName: (0, a.default)(
                        X,
                        `${X}-${B}`,
                        H
                      ),
                      mode: A,
                      selectable: L,
                      onClick: D,
                    },
                    R,
                    {
                      inlineCollapsed: W,
                      style: Object.assign(
                        Object.assign({}, null == S ? void 0 : S.style),
                        w
                      ),
                      className: U,
                      prefixCls: X,
                      direction: y,
                      defaultMotions: q,
                      expandIcon: Z,
                      ref: t,
                      rootClassName: (0, a.default)(
                        P,
                        V,
                        l.rootClassName,
                        Y,
                        F
                      ),
                      _internalComponents: C,
                    }
                  )
                )
              )
            )
          );
        });
      t.default = S;
    },
    39890: function (e, t, o) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = o(12084);
      t.default = (e) => {
        let {
          componentCls: t,
          motionDurationSlow: o,
          horizontalLineHeight: l,
          colorSplit: r,
          lineWidth: i,
          lineType: a,
          itemPaddingInline: d,
        } = e;
        return {
          [`${t}-horizontal`]: {
            lineHeight: l,
            border: 0,
            borderBottom: `${(0, n.unit)(i)} ${a} ${r}`,
            boxShadow: "none",
            "&::after": {
              display: "block",
              clear: "both",
              height: 0,
              content: '"\\20"',
            },
            [`${t}-item, ${t}-submenu`]: {
              position: "relative",
              display: "inline-block",
              verticalAlign: "bottom",
              paddingInline: d,
            },
            [`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]: {
              backgroundColor: "transparent",
            },
            [`${t}-item, ${t}-submenu-title`]: {
              transition: `border-color ${o},background ${o}`,
            },
            [`${t}-submenu-arrow`]: { display: "none" },
          },
        };
      };
    },
    54214: function (e, t, o) {
      var n = o(85269).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.prepareComponentToken = t.default = void 0);
      var l = o(12084),
        r = o(4699),
        i = o(98078),
        a = o(42836),
        d = o(3184),
        u = n(o(39890)),
        s = n(o(73967)),
        c = n(o(85366)),
        m = n(o(24858));
      let genMenuItemStyle = (e) => {
          let {
            componentCls: t,
            motionDurationSlow: o,
            motionDurationMid: n,
            motionEaseInOut: l,
            motionEaseOut: r,
            iconCls: a,
            iconSize: d,
            iconMarginInlineEnd: u,
          } = e;
          return {
            [`${t}-item, ${t}-submenu-title`]: {
              position: "relative",
              display: "block",
              margin: 0,
              whiteSpace: "nowrap",
              cursor: "pointer",
              transition: `border-color ${o},background ${o},padding calc(${o} + 0.1s) ${l}`,
              [`${t}-item-icon, ${a}`]: {
                minWidth: d,
                fontSize: d,
                transition: `font-size ${n} ${r},margin ${o} ${l},color ${o}`,
                "+ span": {
                  marginInlineStart: u,
                  opacity: 1,
                  transition: `opacity ${o} ${l},margin ${o},color ${o}`,
                },
              },
              [`${t}-item-icon`]: Object.assign({}, (0, i.resetIcon)()),
              [`&${t}-item-only-child`]: {
                [`> ${a}, > ${t}-item-icon`]: { marginInlineEnd: 0 },
              },
            },
            [`${t}-item-disabled, ${t}-submenu-disabled`]: {
              background: "none !important",
              cursor: "not-allowed",
              "&::after": { borderColor: "transparent !important" },
              a: { color: "inherit !important" },
              [`> ${t}-submenu-title`]: {
                color: "inherit !important",
                cursor: "not-allowed",
              },
            },
          };
        },
        genSubMenuArrowStyle = (e) => {
          let {
            componentCls: t,
            motionDurationSlow: o,
            motionEaseInOut: n,
            borderRadius: r,
            menuArrowSize: i,
            menuArrowOffset: a,
          } = e;
          return {
            [`${t}-submenu`]: {
              "&-expand-icon, &-arrow": {
                position: "absolute",
                top: "50%",
                insetInlineEnd: e.margin,
                width: i,
                color: "currentcolor",
                transform: "translateY(-50%)",
                transition: `transform ${o} ${n}, opacity ${o}`,
              },
              "&-arrow": {
                "&::before, &::after": {
                  position: "absolute",
                  width: e.calc(i).mul(0.6).equal(),
                  height: e.calc(i).mul(0.15).equal(),
                  backgroundColor: "currentcolor",
                  borderRadius: r,
                  transition: `background ${o} ${n},transform ${o} ${n},top ${o} ${n},color ${o} ${n}`,
                  content: '""',
                },
                "&::before": {
                  transform: `rotate(45deg) translateY(${(0, l.unit)(
                    e.calc(a).mul(-1).equal()
                  )})`,
                },
                "&::after": {
                  transform: `rotate(-45deg) translateY(${(0, l.unit)(a)})`,
                },
              },
            },
          };
        },
        getBaseStyle = (e) => {
          let {
            antCls: t,
            componentCls: o,
            fontSize: n,
            motionDurationSlow: r,
            motionDurationMid: a,
            motionEaseInOut: d,
            paddingXS: u,
            padding: s,
            colorSplit: c,
            lineWidth: m,
            zIndexPopup: p,
            borderRadiusLG: g,
            subMenuItemBorderRadius: f,
            menuArrowSize: b,
            menuArrowOffset: $,
            lineType: v,
            groupTitleLineHeight: h,
            groupTitleFontSize: y,
          } = e;
          return [
            {
              "": {
                [o]: Object.assign(Object.assign({}, (0, i.clearFix)()), {
                  "&-hidden": { display: "none" },
                }),
              },
              [`${o}-submenu-hidden`]: { display: "none" },
            },
            {
              [o]: Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign({}, (0, i.resetComponent)(e)),
                          (0, i.clearFix)()
                        ),
                        {
                          marginBottom: 0,
                          paddingInlineStart: 0,
                          fontSize: n,
                          lineHeight: 0,
                          listStyle: "none",
                          outline: "none",
                          transition: `width ${r} cubic-bezier(0.2, 0, 0, 1) 0s`,
                          "ul, ol": {
                            margin: 0,
                            padding: 0,
                            listStyle: "none",
                          },
                          "&-overflow": {
                            display: "flex",
                            [`${o}-item`]: { flex: "none" },
                          },
                          [`${o}-item, ${o}-submenu, ${o}-submenu-title`]: {
                            borderRadius: e.itemBorderRadius,
                          },
                          [`${o}-item-group-title`]: {
                            padding: `${(0, l.unit)(u)} ${(0, l.unit)(s)}`,
                            fontSize: y,
                            lineHeight: h,
                            transition: `all ${r}`,
                          },
                          [`&-horizontal ${o}-submenu`]: {
                            transition: `border-color ${r} ${d},background ${r} ${d}`,
                          },
                          [`${o}-submenu, ${o}-submenu-inline`]: {
                            transition: `border-color ${r} ${d},background ${r} ${d},padding ${a} ${d}`,
                          },
                          [`${o}-submenu ${o}-sub`]: {
                            cursor: "initial",
                            transition: `background ${r} ${d},padding ${r} ${d}`,
                          },
                          [`${o}-title-content`]: {
                            display: "inline-flex",
                            alignItems: "center",
                            transition: `color ${r}`,
                            "> a:first-child": { flexGrow: 1 },
                            [`> ${t}-typography-ellipsis-single-line`]: {
                              display: "inline",
                              verticalAlign: "unset",
                            },
                            [`${o}-item-extra`]: {
                              marginInlineStart: "auto",
                              paddingInlineStart: e.padding,
                              fontSize: e.fontSizeSM,
                              color: e.colorTextDescription,
                            },
                          },
                          [`${o}-item a`]: {
                            "&::before": {
                              position: "absolute",
                              inset: 0,
                              backgroundColor: "transparent",
                              content: '""',
                            },
                          },
                          [`${o}-item-divider`]: {
                            overflow: "hidden",
                            lineHeight: 0,
                            borderColor: c,
                            borderStyle: v,
                            borderWidth: 0,
                            borderTopWidth: m,
                            marginBlock: m,
                            padding: 0,
                            "&-dashed": { borderStyle: "dashed" },
                          },
                        }
                      ),
                      genMenuItemStyle(e)
                    ),
                    {
                      [`${o}-item-group`]: {
                        [`${o}-item-group-list`]: {
                          margin: 0,
                          padding: 0,
                          [`${o}-item, ${o}-submenu-title`]: {
                            paddingInline: `${(0, l.unit)(
                              e.calc(n).mul(2).equal()
                            )} ${(0, l.unit)(s)}`,
                          },
                        },
                      },
                      "&-submenu": {
                        "&-popup": {
                          position: "absolute",
                          zIndex: p,
                          borderRadius: g,
                          boxShadow: "none",
                          transformOrigin: "0 0",
                          [`&${o}-submenu`]: { background: "transparent" },
                          "&::before": {
                            position: "absolute",
                            inset: 0,
                            zIndex: -1,
                            width: "100%",
                            height: "100%",
                            opacity: 0,
                            content: '""',
                          },
                          [`> ${o}`]: Object.assign(
                            Object.assign(
                              Object.assign(
                                { borderRadius: g },
                                genMenuItemStyle(e)
                              ),
                              genSubMenuArrowStyle(e)
                            ),
                            {
                              [`${o}-item, ${o}-submenu > ${o}-submenu-title`]:
                                { borderRadius: f },
                              [`${o}-submenu-title::after`]: {
                                transition: `transform ${r} ${d}`,
                              },
                            }
                          ),
                        },
                        [`
          &-placement-leftTop,
          &-placement-bottomRight,
          `]: { transformOrigin: "100% 0" },
                        [`
          &-placement-leftBottom,
          &-placement-topRight,
          `]: { transformOrigin: "100% 100%" },
                        [`
          &-placement-rightBottom,
          &-placement-topLeft,
          `]: { transformOrigin: "0 100%" },
                        [`
          &-placement-bottomLeft,
          &-placement-rightTop,
          `]: { transformOrigin: "0 0" },
                        [`
          &-placement-leftTop,
          &-placement-leftBottom
          `]: { paddingInlineEnd: e.paddingXS },
                        [`
          &-placement-rightTop,
          &-placement-rightBottom
          `]: { paddingInlineStart: e.paddingXS },
                        [`
          &-placement-topRight,
          &-placement-topLeft
          `]: { paddingBottom: e.paddingXS },
                        [`
          &-placement-bottomRight,
          &-placement-bottomLeft
          `]: { paddingTop: e.paddingXS },
                      },
                    }
                  ),
                  genSubMenuArrowStyle(e)
                ),
                {
                  [`&-inline-collapsed ${o}-submenu-arrow,
        &-inline ${o}-submenu-arrow`]: {
                    "&::before": {
                      transform: `rotate(-45deg) translateX(${(0, l.unit)($)})`,
                    },
                    "&::after": {
                      transform: `rotate(45deg) translateX(${(0, l.unit)(
                        e.calc($).mul(-1).equal()
                      )})`,
                    },
                  },
                  [`${o}-submenu-open${o}-submenu-inline > ${o}-submenu-title > ${o}-submenu-arrow`]:
                    {
                      transform: `translateY(${(0, l.unit)(
                        e.calc(b).mul(0.2).mul(-1).equal()
                      )})`,
                      "&::after": {
                        transform: `rotate(-45deg) translateX(${(0, l.unit)(
                          e.calc($).mul(-1).equal()
                        )})`,
                      },
                      "&::before": {
                        transform: `rotate(45deg) translateX(${(0, l.unit)(
                          $
                        )})`,
                      },
                    },
                }
              ),
            },
            { [`${t}-layout-header`]: { [o]: { lineHeight: "inherit" } } },
          ];
        },
        prepareComponentToken = (e) => {
          var t, o, n;
          let {
              colorPrimary: l,
              colorError: i,
              colorTextDisabled: a,
              colorErrorBg: d,
              colorText: u,
              colorTextDescription: s,
              colorBgContainer: c,
              colorFillAlter: m,
              colorFillContent: p,
              lineWidth: g,
              lineWidthBold: f,
              controlItemBgActive: b,
              colorBgTextHover: $,
              controlHeightLG: v,
              lineHeight: h,
              colorBgElevated: y,
              marginXXS: C,
              padding: S,
              fontSize: x,
              controlHeightSM: I,
              fontSizeLG: O,
              colorTextLightSolid: w,
              colorErrorHover: B,
            } = e,
            k = null !== (t = e.activeBarWidth) && void 0 !== t ? t : 0,
            j = null !== (o = e.activeBarBorderWidth) && void 0 !== o ? o : g,
            E =
              null !== (n = e.itemMarginInline) && void 0 !== n
                ? n
                : e.marginXXS,
            _ = new r.TinyColor(w).setAlpha(0.65).toRgbString();
          return {
            dropdownWidth: 160,
            zIndexPopup: e.zIndexPopupBase + 50,
            radiusItem: e.borderRadiusLG,
            itemBorderRadius: e.borderRadiusLG,
            radiusSubMenuItem: e.borderRadiusSM,
            subMenuItemBorderRadius: e.borderRadiusSM,
            colorItemText: u,
            itemColor: u,
            colorItemTextHover: u,
            itemHoverColor: u,
            colorItemTextHoverHorizontal: l,
            horizontalItemHoverColor: l,
            colorGroupTitle: s,
            groupTitleColor: s,
            colorItemTextSelected: l,
            itemSelectedColor: l,
            colorItemTextSelectedHorizontal: l,
            horizontalItemSelectedColor: l,
            colorItemBg: c,
            itemBg: c,
            colorItemBgHover: $,
            itemHoverBg: $,
            colorItemBgActive: p,
            itemActiveBg: b,
            colorSubItemBg: m,
            subMenuItemBg: m,
            colorItemBgSelected: b,
            itemSelectedBg: b,
            colorItemBgSelectedHorizontal: "transparent",
            horizontalItemSelectedBg: "transparent",
            colorActiveBarWidth: 0,
            activeBarWidth: k,
            colorActiveBarHeight: f,
            activeBarHeight: f,
            colorActiveBarBorderSize: g,
            activeBarBorderWidth: j,
            colorItemTextDisabled: a,
            itemDisabledColor: a,
            colorDangerItemText: i,
            dangerItemColor: i,
            colorDangerItemTextHover: i,
            dangerItemHoverColor: i,
            colorDangerItemTextSelected: i,
            dangerItemSelectedColor: i,
            colorDangerItemBgActive: d,
            dangerItemActiveBg: d,
            colorDangerItemBgSelected: d,
            dangerItemSelectedBg: d,
            itemMarginInline: E,
            horizontalItemBorderRadius: 0,
            horizontalItemHoverBg: "transparent",
            itemHeight: v,
            groupTitleLineHeight: h,
            collapsedWidth: 2 * v,
            popupBg: y,
            itemMarginBlock: C,
            itemPaddingInline: S,
            horizontalLineHeight: `${1.15 * v}px`,
            iconSize: x,
            iconMarginInlineEnd: I - x,
            collapsedIconSize: O,
            groupTitleFontSize: x,
            darkItemDisabledColor: new r.TinyColor(w)
              .setAlpha(0.25)
              .toRgbString(),
            darkItemColor: _,
            darkDangerItemColor: i,
            darkItemBg: "#001529",
            darkPopupBg: "#001529",
            darkSubMenuItemBg: "#000c17",
            darkItemSelectedColor: w,
            darkItemSelectedBg: l,
            darkDangerItemSelectedBg: i,
            darkItemHoverBg: "transparent",
            darkGroupTitleColor: _,
            darkItemHoverColor: w,
            darkDangerItemHoverColor: B,
            darkDangerItemSelectedColor: w,
            darkDangerItemActiveBg: i,
            itemWidth: k ? `calc(100% + ${j}px)` : `calc(100% - ${2 * E}px)`,
          };
        };
      (t.prepareComponentToken = prepareComponentToken),
        (t.default = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : e,
            o =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            n = (0, d.genStyleHooks)(
              "Menu",
              (e) => {
                let {
                    colorBgElevated: t,
                    controlHeightLG: o,
                    fontSize: n,
                    darkItemColor: l,
                    darkDangerItemColor: r,
                    darkItemBg: i,
                    darkSubMenuItemBg: p,
                    darkItemSelectedColor: g,
                    darkItemSelectedBg: f,
                    darkDangerItemSelectedBg: b,
                    darkItemHoverBg: $,
                    darkGroupTitleColor: v,
                    darkItemHoverColor: h,
                    darkItemDisabledColor: y,
                    darkDangerItemHoverColor: C,
                    darkDangerItemSelectedColor: S,
                    darkDangerItemActiveBg: x,
                    popupBg: I,
                    darkPopupBg: O,
                  } = e,
                  w = e.calc(n).div(7).mul(5).equal(),
                  B = (0, d.mergeToken)(e, {
                    menuArrowSize: w,
                    menuHorizontalHeight: e.calc(o).mul(1.15).equal(),
                    menuArrowOffset: e.calc(w).mul(0.25).equal(),
                    menuSubMenuBg: t,
                    calc: e.calc,
                    popupBg: I,
                  }),
                  k = (0, d.mergeToken)(B, {
                    itemColor: l,
                    itemHoverColor: h,
                    groupTitleColor: v,
                    itemSelectedColor: g,
                    itemBg: i,
                    popupBg: O,
                    subMenuItemBg: p,
                    itemActiveBg: "transparent",
                    itemSelectedBg: f,
                    activeBarHeight: 0,
                    activeBarBorderWidth: 0,
                    itemHoverBg: $,
                    itemDisabledColor: y,
                    dangerItemColor: r,
                    dangerItemHoverColor: C,
                    dangerItemSelectedColor: S,
                    dangerItemActiveBg: x,
                    dangerItemSelectedBg: b,
                    menuSubMenuBg: p,
                    horizontalItemSelectedColor: g,
                    horizontalItemSelectedBg: f,
                  });
                return [
                  getBaseStyle(B),
                  (0, u.default)(B),
                  (0, m.default)(B),
                  (0, c.default)(B, "light"),
                  (0, c.default)(k, "dark"),
                  (0, s.default)(B),
                  (0, a.genCollapseMotion)(B),
                  (0, a.initSlideMotion)(B, "slide-up"),
                  (0, a.initSlideMotion)(B, "slide-down"),
                  (0, a.initZoomMotion)(B, "zoom-big"),
                ];
              },
              prepareComponentToken,
              {
                deprecatedTokens: [
                  ["colorGroupTitle", "groupTitleColor"],
                  ["radiusItem", "itemBorderRadius"],
                  ["radiusSubMenuItem", "subMenuItemBorderRadius"],
                  ["colorItemText", "itemColor"],
                  ["colorItemTextHover", "itemHoverColor"],
                  ["colorItemTextHoverHorizontal", "horizontalItemHoverColor"],
                  ["colorItemTextSelected", "itemSelectedColor"],
                  [
                    "colorItemTextSelectedHorizontal",
                    "horizontalItemSelectedColor",
                  ],
                  ["colorItemTextDisabled", "itemDisabledColor"],
                  ["colorDangerItemText", "dangerItemColor"],
                  ["colorDangerItemTextHover", "dangerItemHoverColor"],
                  ["colorDangerItemTextSelected", "dangerItemSelectedColor"],
                  ["colorDangerItemBgActive", "dangerItemActiveBg"],
                  ["colorDangerItemBgSelected", "dangerItemSelectedBg"],
                  ["colorItemBg", "itemBg"],
                  ["colorItemBgHover", "itemHoverBg"],
                  ["colorSubItemBg", "subMenuItemBg"],
                  ["colorItemBgActive", "itemActiveBg"],
                  ["colorItemBgSelectedHorizontal", "horizontalItemSelectedBg"],
                  ["colorActiveBarWidth", "activeBarWidth"],
                  ["colorActiveBarHeight", "activeBarHeight"],
                  ["colorActiveBarBorderSize", "activeBarBorderWidth"],
                  ["colorItemBgSelected", "itemSelectedBg"],
                ],
                injectStyle: o,
                unitless: { groupTitleLineHeight: !0 },
              }
            );
          return n(e, t);
        });
    },
    73967: function (e, t, o) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = o(12084);
      t.default = (e) => {
        let { componentCls: t, menuArrowOffset: o, calc: l } = e;
        return {
          [`${t}-rtl`]: { direction: "rtl" },
          [`${t}-submenu-rtl`]: { transformOrigin: "100% 0" },
          [`${t}-rtl${t}-vertical,
    ${t}-submenu-rtl ${t}-vertical`]: {
            [`${t}-submenu-arrow`]: {
              "&::before": {
                transform: `rotate(-45deg) translateY(${(0, n.unit)(
                  l(o).mul(-1).equal()
                )})`,
              },
              "&::after": {
                transform: `rotate(45deg) translateY(${(0, n.unit)(o)})`,
              },
            },
          },
        };
      };
    },
    85366: function (e, t, o) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = o(12084),
        l = o(98078);
      let accessibilityFocus = (e) =>
        Object.assign({}, (0, l.genFocusOutline)(e));
      t.default = (e, t) => {
        let {
          componentCls: o,
          itemColor: l,
          itemSelectedColor: r,
          groupTitleColor: i,
          itemBg: a,
          subMenuItemBg: d,
          itemSelectedBg: u,
          activeBarHeight: s,
          activeBarWidth: c,
          activeBarBorderWidth: m,
          motionDurationSlow: p,
          motionEaseInOut: g,
          motionEaseOut: f,
          itemPaddingInline: b,
          motionDurationMid: $,
          itemHoverColor: v,
          lineType: h,
          colorSplit: y,
          itemDisabledColor: C,
          dangerItemColor: S,
          dangerItemHoverColor: x,
          dangerItemSelectedColor: I,
          dangerItemActiveBg: O,
          dangerItemSelectedBg: w,
          popupBg: B,
          itemHoverBg: k,
          itemActiveBg: j,
          menuSubMenuBg: E,
          horizontalItemSelectedColor: _,
          horizontalItemSelectedBg: P,
          horizontalItemBorderRadius: T,
          horizontalItemHoverBg: M,
        } = e;
        return {
          [`${o}-${t}, ${o}-${t} > ${o}`]: {
            color: l,
            background: a,
            [`&${o}-root:focus-visible`]: Object.assign(
              {},
              accessibilityFocus(e)
            ),
            [`${o}-item-group-title`]: { color: i },
            [`${o}-submenu-selected`]: {
              [`> ${o}-submenu-title`]: { color: r },
            },
            [`${o}-item, ${o}-submenu-title`]: {
              color: l,
              [`&:not(${o}-item-disabled):focus-visible`]: Object.assign(
                {},
                accessibilityFocus(e)
              ),
            },
            [`${o}-item-disabled, ${o}-submenu-disabled`]: {
              color: `${C} !important`,
            },
            [`${o}-item:not(${o}-item-selected):not(${o}-submenu-selected)`]: {
              [`&:hover, > ${o}-submenu-title:hover`]: { color: v },
            },
            [`&:not(${o}-horizontal)`]: {
              [`${o}-item:not(${o}-item-selected)`]: {
                "&:hover": { backgroundColor: k },
                "&:active": { backgroundColor: j },
              },
              [`${o}-submenu-title`]: {
                "&:hover": { backgroundColor: k },
                "&:active": { backgroundColor: j },
              },
            },
            [`${o}-item-danger`]: {
              color: S,
              [`&${o}-item:hover`]: {
                [`&:not(${o}-item-selected):not(${o}-submenu-selected)`]: {
                  color: x,
                },
              },
              [`&${o}-item:active`]: { background: O },
            },
            [`${o}-item a`]: { "&, &:hover": { color: "inherit" } },
            [`${o}-item-selected`]: {
              color: r,
              [`&${o}-item-danger`]: { color: I },
              "a, a:hover": { color: "inherit" },
            },
            [`& ${o}-item-selected`]: {
              backgroundColor: u,
              [`&${o}-item-danger`]: { backgroundColor: w },
            },
            [`&${o}-submenu > ${o}`]: { backgroundColor: E },
            [`&${o}-popup > ${o}`]: { backgroundColor: B },
            [`&${o}-submenu-popup > ${o}`]: { backgroundColor: B },
            [`&${o}-horizontal`]: Object.assign(
              Object.assign({}, "dark" === t ? { borderBottom: 0 } : {}),
              {
                [`> ${o}-item, > ${o}-submenu`]: {
                  top: m,
                  marginTop: e.calc(m).mul(-1).equal(),
                  marginBottom: 0,
                  borderRadius: T,
                  "&::after": {
                    position: "absolute",
                    insetInline: b,
                    bottom: 0,
                    borderBottom: `${(0, n.unit)(s)} solid transparent`,
                    transition: `border-color ${p} ${g}`,
                    content: '""',
                  },
                  "&:hover, &-active, &-open": {
                    background: M,
                    "&::after": { borderBottomWidth: s, borderBottomColor: _ },
                  },
                  "&-selected": {
                    color: _,
                    backgroundColor: P,
                    "&:hover": { backgroundColor: P },
                    "&::after": { borderBottomWidth: s, borderBottomColor: _ },
                  },
                },
              }
            ),
            [`&${o}-root`]: {
              [`&${o}-inline, &${o}-vertical`]: {
                borderInlineEnd: `${(0, n.unit)(m)} ${h} ${y}`,
              },
            },
            [`&${o}-inline`]: {
              [`${o}-sub${o}-inline`]: { background: d },
              [`${o}-item`]: {
                position: "relative",
                "&::after": {
                  position: "absolute",
                  insetBlock: 0,
                  insetInlineEnd: 0,
                  borderInlineEnd: `${(0, n.unit)(c)} solid ${r}`,
                  transform: "scaleY(0.0001)",
                  opacity: 0,
                  transition: `transform ${$} ${f},opacity ${$} ${f}`,
                  content: '""',
                },
                [`&${o}-item-danger`]: {
                  "&::after": { borderInlineEndColor: I },
                },
              },
              [`${o}-selected, ${o}-item-selected`]: {
                "&::after": {
                  transform: "scaleY(1)",
                  opacity: 1,
                  transition: `transform ${$} ${g},opacity ${$} ${g}`,
                },
              },
            },
          },
        };
      };
    },
    24858: function (e, t, o) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = o(12084),
        l = o(98078);
      let getVerticalInlineStyle = (e) => {
        let {
            componentCls: t,
            itemHeight: o,
            itemMarginInline: l,
            padding: r,
            menuArrowSize: i,
            marginXS: a,
            itemMarginBlock: d,
            itemWidth: u,
            itemPaddingInline: s,
          } = e,
          c = e.calc(i).add(r).add(a).equal();
        return {
          [`${t}-item`]: { position: "relative", overflow: "hidden" },
          [`${t}-item, ${t}-submenu-title`]: {
            height: o,
            lineHeight: (0, n.unit)(o),
            paddingInline: s,
            overflow: "hidden",
            textOverflow: "ellipsis",
            marginInline: l,
            marginBlock: d,
            width: u,
          },
          [`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]: {
            height: o,
            lineHeight: (0, n.unit)(o),
          },
          [`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]: { paddingInlineEnd: c },
        };
      };
      t.default = (e) => {
        let {
            componentCls: t,
            iconCls: o,
            itemHeight: r,
            colorTextLightSolid: i,
            dropdownWidth: a,
            controlHeightLG: d,
            motionEaseOut: u,
            paddingXL: s,
            itemMarginInline: c,
            fontSizeLG: m,
            motionDurationFast: p,
            motionDurationSlow: g,
            paddingXS: f,
            boxShadowSecondary: b,
            collapsedWidth: $,
            collapsedIconSize: v,
          } = e,
          h = {
            height: r,
            lineHeight: (0, n.unit)(r),
            listStylePosition: "inside",
            listStyleType: "disc",
          };
        return [
          {
            [t]: {
              "&-inline, &-vertical": Object.assign(
                { [`&${t}-root`]: { boxShadow: "none" } },
                getVerticalInlineStyle(e)
              ),
            },
            [`${t}-submenu-popup`]: {
              [`${t}-vertical`]: Object.assign(
                Object.assign({}, getVerticalInlineStyle(e)),
                { boxShadow: b }
              ),
            },
          },
          {
            [`${t}-submenu-popup ${t}-vertical${t}-sub`]: {
              minWidth: a,
              maxHeight: `calc(100vh - ${(0, n.unit)(
                e.calc(d).mul(2.5).equal()
              )})`,
              padding: "0",
              overflow: "hidden",
              borderInlineEnd: 0,
              "&:not([class*='-active'])": {
                overflowX: "hidden",
                overflowY: "auto",
              },
            },
          },
          {
            [`${t}-inline`]: {
              width: "100%",
              [`&${t}-root`]: {
                [`${t}-item, ${t}-submenu-title`]: {
                  display: "flex",
                  alignItems: "center",
                  transition: `border-color ${g},background ${g},padding ${p} ${u}`,
                  [`> ${t}-title-content`]: {
                    flex: "auto",
                    minWidth: 0,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  },
                  "> *": { flex: "none" },
                },
              },
              [`${t}-sub${t}-inline`]: {
                padding: 0,
                border: 0,
                borderRadius: 0,
                boxShadow: "none",
                [`& > ${t}-submenu > ${t}-submenu-title`]: h,
                [`& ${t}-item-group-title`]: { paddingInlineStart: s },
              },
              [`${t}-item`]: h,
            },
          },
          {
            [`${t}-inline-collapsed`]: {
              width: $,
              [`&${t}-root`]: {
                [`${t}-item, ${t}-submenu ${t}-submenu-title`]: {
                  [`> ${t}-inline-collapsed-noicon`]: {
                    fontSize: m,
                    textAlign: "center",
                  },
                },
              },
              [`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]: {
                insetInlineStart: 0,
                paddingInline: `calc(50% - ${(0, n.unit)(
                  e.calc(m).div(2).equal()
                )} - ${(0, n.unit)(c)})`,
                textOverflow: "clip",
                [`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]: { opacity: 0 },
                [`${t}-item-icon, ${o}`]: {
                  margin: 0,
                  fontSize: v,
                  lineHeight: (0, n.unit)(r),
                  "+ span": { display: "inline-block", opacity: 0 },
                },
              },
              [`${t}-item-icon, ${o}`]: { display: "inline-block" },
              "&-tooltip": {
                pointerEvents: "none",
                [`${t}-item-icon, ${o}`]: { display: "none" },
                "a, a:hover": { color: i },
              },
              [`${t}-item-group-title`]: Object.assign(
                Object.assign({}, l.textEllipsis),
                { paddingInline: f }
              ),
            },
          },
        ];
      };
    },
    98919: function (e, t, o) {
      var n = o(49932).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var l = n(o(67294)),
        r = o(11280);
      t.default = (e) => {
        let { className: t, index: o, children: n, split: i, style: a } = e,
          { latestIndex: d } = l.useContext(r.SpaceContext);
        return null == n
          ? null
          : l.createElement(
              l.Fragment,
              null,
              l.createElement("div", { className: t, style: a }, n),
              o < d &&
                i &&
                l.createElement("span", { className: `${t}-split` }, i)
            );
      };
    },
    11280: function (e, t, o) {
      var n = o(85269).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SpaceContextProvider = t.SpaceContext = void 0);
      var l = n(o(67294));
      let r = (t.SpaceContext = l.default.createContext({ latestIndex: 0 }));
      t.SpaceContextProvider = r.Provider;
    },
    74048: function (e, t, o) {
      var n = o(85269).default,
        l = o(49932).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "SpaceContext", {
          enumerable: !0,
          get: function () {
            return c.SpaceContext;
          },
        }),
        (t.default = void 0);
      var r = l(o(67294)),
        i = n(o(13144)),
        a = n(o(98959)),
        d = o(74440),
        u = o(31929),
        s = n(o(46549)),
        c = o(11280),
        m = n(o(98919)),
        p = n(o(54277)),
        __rest = function (e, t) {
          var o = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              0 > t.indexOf(n) &&
              (o[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var l = 0, n = Object.getOwnPropertySymbols(e);
              l < n.length;
              l++
            )
              0 > t.indexOf(n[l]) &&
                Object.prototype.propertyIsEnumerable.call(e, n[l]) &&
                (o[n[l]] = e[n[l]]);
          return o;
        };
      let g = r.forwardRef((e, t) => {
        var o, n, l;
        let {
            getPrefixCls: s,
            space: g,
            direction: f,
          } = r.useContext(u.ConfigContext),
          {
            size: b = null !== (o = null == g ? void 0 : g.size) && void 0 !== o
              ? o
              : "small",
            align: $,
            className: v,
            rootClassName: h,
            children: y,
            direction: C = "horizontal",
            prefixCls: S,
            split: x,
            style: I,
            wrap: O = !1,
            classNames: w,
            styles: B,
          } = e,
          k = __rest(e, [
            "size",
            "align",
            "className",
            "rootClassName",
            "children",
            "direction",
            "prefixCls",
            "split",
            "style",
            "wrap",
            "classNames",
            "styles",
          ]),
          [j, E] = Array.isArray(b) ? b : [b, b],
          _ = (0, d.isPresetSize)(E),
          P = (0, d.isPresetSize)(j),
          T = (0, d.isValidGapNumber)(E),
          M = (0, d.isValidGapNumber)(j),
          z = (0, a.default)(y, { keepEmpty: !0 }),
          H = void 0 === $ && "horizontal" === C ? "center" : $,
          N = s("space", S),
          [R, D, A] = (0, p.default)(N),
          L = (0, i.default)(
            N,
            null == g ? void 0 : g.className,
            D,
            `${N}-${C}`,
            {
              [`${N}-rtl`]: "rtl" === f,
              [`${N}-align-${H}`]: H,
              [`${N}-gap-row-${E}`]: _,
              [`${N}-gap-col-${j}`]: P,
            },
            v,
            h,
            A
          ),
          W = (0, i.default)(
            `${N}-item`,
            null !== (n = null == w ? void 0 : w.item) && void 0 !== n
              ? n
              : null === (l = null == g ? void 0 : g.classNames) || void 0 === l
              ? void 0
              : l.item
          ),
          q = 0,
          X = z.map((e, t) => {
            var o, n;
            null != e && (q = t);
            let l = (null == e ? void 0 : e.key) || `${W}-${t}`;
            return r.createElement(
              m.default,
              {
                className: W,
                key: l,
                index: t,
                split: x,
                style:
                  null !== (o = null == B ? void 0 : B.item) && void 0 !== o
                    ? o
                    : null === (n = null == g ? void 0 : g.styles) ||
                      void 0 === n
                    ? void 0
                    : n.item,
              },
              e
            );
          }),
          F = r.useMemo(() => ({ latestIndex: q }), [q]);
        if (0 === z.length) return null;
        let G = {};
        return (
          O && (G.flexWrap = "wrap"),
          !P && M && (G.columnGap = j),
          !_ && T && (G.rowGap = E),
          R(
            r.createElement(
              "div",
              Object.assign(
                {
                  ref: t,
                  className: L,
                  style: Object.assign(
                    Object.assign(
                      Object.assign({}, G),
                      null == g ? void 0 : g.style
                    ),
                    I
                  ),
                },
                k
              ),
              r.createElement(c.SpaceContextProvider, { value: F }, X)
            )
          )
        );
      });
      (g.Compact = s.default), (t.default = g);
    },
  },
]);
