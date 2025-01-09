(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8180],
  {
    80022: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/chat",
        function () {
          return a(69164);
        },
      ]);
    },
    69164: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return ChatPage;
          },
        });
      var n,
        s,
        l,
        i,
        r,
        c = a(85893),
        o = a(9008),
        d = a.n(o),
        h = a(70748),
        u = a(67294),
        x = a(89552),
        m = a(15103),
        p = a(48583),
        g = a(51526),
        j = a(52951),
        f = a(41562),
        b = a.n(f),
        v = a(97719),
        w = a.n(v);
      function _extends() {
        return (_extends = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a)
                  Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var hero_light_icon = function (e) {
        return u.createElement(
          "svg",
          _extends(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 212,
              height: 212,
              fill: "none",
            },
            e
          ),
          n ||
            (n = u.createElement("circle", {
              cx: 106,
              cy: 106,
              r: 63.6,
              fill: "#9656FF",
              fillOpacity: 0.1,
            })),
          s ||
            (s = u.createElement("circle", {
              cx: 106,
              cy: 106,
              r: 84.8,
              fill: "#9656FF",
              fillOpacity: 0.1,
            })),
          l ||
            (l = u.createElement("circle", {
              cx: 106,
              cy: 106,
              r: 106,
              fill: "#9656FF",
              fillOpacity: 0.1,
            })),
          i ||
            (i = u.createElement("path", {
              fill: "#7D5FA3",
              fillRule: "evenodd",
              d: "M90.125 62.752c-5.644 0-10.222 4.543-10.222 10.152v33.63a15.845 15.845 0 0 0-6.374 17.453l1.041 3.672c3.82 13.471 18.38 20.767 31.467 15.769l13.384-5.111a13.712 13.712 0 0 0 2.558-1.297h14.51c5.651 0 10.244-4.473 10.244-10.006 0-5.532-4.593-10.006-10.244-10.006h-10.018l1.084-1.079a8.665 8.665 0 0 0 0-12.29l-2.113-2.103a8.727 8.727 0 0 0-7.028-2.503 8.658 8.658 0 0 0-2.452-7.488l-2.113-2.103c-3.407-3.393-8.93-3.393-12.338 0l-1.165 1.16V72.904c0-5.609-4.578-10.152-10.221-10.152M83.78 72.904c0-3.477 2.839-6.298 6.345-6.298s6.345 2.821 6.345 6.298v21.558l-2.26 2.25a10.13 10.13 0 0 0-2.96 8.023l-7.47 2.706zm-.85 38.947-.587.224-3.8 1.377a11.973 11.973 0 0 0-1.285 9.479l1.041 3.672c3.2 11.282 15.393 17.393 26.355 13.206l13.384-5.111a9.851 9.851 0 0 0 2.527-1.421l.076-.059h2.034l.002-.003h13.812c3.519 0 6.36-2.783 6.36-6.201 0-3.418-2.841-6.201-6.36-6.201h-11.964c-.284 0-.564-.067-.818-.195l-.558-.282-.141.155-.014-.021-2.741 2.73c-3.828 3.811-9.935 3.967-13.949.468l-10.448 3.706-.003-.01-.024.009-1.293-3.635 11.498-4.078c4.165-1.477 6.199-6.171 4.428-10.213a7.621 7.621 0 0 0-9.576-4.1zm21.126-10.805a11.527 11.527 0 0 1 6.675 2.538l2.491-2.481a4.812 4.812 0 0 0 0-6.826l-2.112-2.104a4.865 4.865 0 0 0-6.859 0l-7.302 7.271a6.276 6.276 0 0 0-1.831 3.89l4.451-1.613c1.48-.536 3.002-.75 4.487-.675m11.788 3.221a4.864 4.864 0 0 1 6.858 0l2.113 2.104a4.812 4.812 0 0 1 0 6.826l-7.302 7.271a6.369 6.369 0 0 1-7.184 1.253c4.195-3.088 5.903-8.788 3.698-13.819a11.57 11.57 0 0 0-.618-1.211z",
              clipRule: "evenodd",
            }))
        );
      };
      function ChatOnboarding() {
        return (0, c.jsxs)("div", {
          className: w().ChatOnboarding,
          children: [
            (0, c.jsx)("div", {
              className: "hero-icon-wrapper",
              children: (0, c.jsx)(hero_light_icon, {}),
            }),
            (0, c.jsx)("div", {
              className: "hello-text",
              children: "I'm Clara. How can I help you today?",
            }),
          ],
        });
      }
      let k = [
        {
          name: "Delysium",
          slug: "delysium",
          icon: "https://cdn.galxe.com/galaxy/avatar/b2b3861c-81e3-4025-9ffc-71ea7a71a022.png",
        },
        {
          name: "Galxe",
          slug: "galxe",
          icon: "https://d257b89266utxb.cloudfront.net/galaxy/images/avatar/0x0b495174e4baabe771c6660be65054d2672ee577-1662470151406825713.png",
        },
        {
          name: "SPACE ID",
          slug: "spaceid",
          icon: "https://d257b89266utxb.cloudfront.net/galaxy/images/1650422482/1650422482-logo-1650422481.png",
        },
        {
          name: "Polygon",
          slug: "polygon",
          icon: "https://cdn.galxe.com/galaxy/avatar/340b88e3-d344-42df-9a4d-e9bde8026e65.png",
        },
        {
          name: "Injective",
          slug: "injective",
          icon: "https://d257b89266utxb.cloudfront.net/galaxy/images/logo/injective-logo.png",
        },
      ];
      var _ = a(14921),
        y = a(96229),
        N = a(62841),
        C = a.n(N),
        S = a(3070),
        T = a(87836),
        I = a.n(T),
        E = a(77834),
        O = a(51024),
        A = a(82002),
        B = a(94184),
        M = a.n(B),
        P = a(25675),
        L = a.n(P),
        F = a(66261),
        K = a(4851),
        Q = a(58166),
        R = a(47962),
        Z = a(42633);
      function magic_clear_extends() {
        return (magic_clear_extends = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a)
                  Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var magic_clear = function (e) {
          return u.createElement(
            "svg",
            magic_clear_extends(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: 18,
                height: 19,
                fill: "none",
              },
              e
            ),
            r ||
              (r = u.createElement("path", {
                fill: "#7D5FA3",
                fillRule: "evenodd",
                d: "m3.316.5.767 2.048 2.075.757-2.075.758-.767 2.047-.768-2.047-2.074-.758 2.074-.757zm10.687 6.228 3.583-3.54A1.294 1.294 0 0 0 18 2.268a1.28 1.28 0 0 0-.382-.935 1.313 1.313 0 0 0-.945-.381 1.326 1.326 0 0 0-.936.403l-3.602 3.52a.384.384 0 0 1-.135.018c-1.387-.776-2.986-.776-4.219.379a.09.09 0 0 0-.021.102.09.09 0 0 0 .021.03l5.683 5.603a.095.095 0 0 0 .104.02.095.095 0 0 0 .03-.02c1.175-1.212 1.195-2.783.385-4.145 0-.029.005-.048.01-.067a.24.24 0 0 0 .01-.066m-7.382-.45 5.811 5.638c-1.667 2.544-2.274 6.584-2.274 6.584l-3.537-1.995s1.01-2.644 2.577-3.791c-1.87.598-3.74 2.943-3.74 2.943S2.881 13.66 1.92 11.915l2.123-2.294c-1.162.1-2.982.898-2.982.898S.27 9.205 0 8.573c1.769-.399 4.447-1.197 6.62-2.294m9.177 7.15-.64-1.707-.64 1.706-1.729.632 1.73.631.639 1.706.64-1.706 1.728-.631z",
                clipRule: "evenodd",
              }))
          );
        },
        z = a(94663),
        D = a(11163);
      let { TextArea: G } = O.default,
        H = [
          {
            name: "Clara",
            desc: "AI-Powered Web3 Operating System.",
            icon: "/img/lucy-light-icon.svg",
            path: "/chat",
          },
          {
            name: "AI Jerry",
            desc: "Ask me anything about Delysium.",
            icon: "/img/ai-jerry-icon.png",
            path: "/ai-jerry",
          },
        ];
      function PromptInput(e) {
        let { onFocus: t, isShowPromptTips: a, isShowKeyboardTips: n } = e,
          s = (0, D.useRouter)(),
          l = H.find((e) => e.path === s.pathname) || H[0],
          [i, r, o] = C()(""),
          { sendMessage: d, isLoading: h } = (0, y.RJ)(),
          { chatClear: u } = (0, y.IE)(),
          { getChatHistory: m } = (0, y.v2)(),
          f = (0, A.x)(),
          [b, v] = (0, p.KO)(_.tP),
          [w, k] = (0, p.KO)(_.Mk),
          [N, T] = (0, p.KO)(_.EJ),
          [O, B] = (0, p.KO)(_.oF),
          [P, q] = (0, p.KO)(_._j),
          [J, W] = (0, p.KO)(_.Ag),
          [V, X] = (0, p.KO)(_.F5),
          onSendMessage = async () => {
            h ||
              (await d({
                message: o.current,
                message_type: "user",
                evm_chain_id: f,
              }),
              r(""),
              await m({ page: 1, size: 10 }),
              F.NY.scrollToBottom());
          },
          onClearHistory = async () => {
            await u(), T(1), k(!0), v([]), B(!1), q(!1), W(!1), X(!1);
          };
        return (0, c.jsxs)("div", {
          className: "relative w-full rounded-full bg-pageBg ".concat(
            I().customTextareaWrapper
          ),
          children: [
            (0, c.jsx)(() => {
              if (!a) return null;
              (0, S.v)("newQuestion", (e) => {
                handleTipClick(e);
              });
              let handleTipClick = (e) => {
                h || (r(e), onSendMessage());
              };
              return (0, c.jsx)("div", {
                className: "prompt-tips absolute flex",
                children: [
                  "Summarize the information for the AGI token on Ethereum",
                  "Summarize the information of project Delysium",
                ].map((e) =>
                  (0, c.jsxs)(
                    "div",
                    {
                      className: "tip-item flex gap-2 truncate",
                      onClick: () => handleTipClick(e),
                      children: [(0, c.jsx)(R.Z, {}), e],
                    },
                    e
                  )
                ),
              });
            }, {}),
            (0, c.jsx)(x.default, {
              indicator: (0, c.jsx)(K.default, { style: { fontSize: 24 } }),
              spinning: h,
              children: (0, c.jsxs)("div", {
                className: "relative w-full",
                children: [
                  (0, c.jsx)(E.default, {
                    trigger: ["click", "hover"],
                    dropdownRender: () =>
                      (0, c.jsx)("div", {
                        className: I().switchChatModelDropdown,
                        children: H.map((e) =>
                          (0, c.jsxs)(
                            "div",
                            {
                              className:
                                "chatModel flex items-center justify-between gap-2",
                              onClick: () => s.push(e.path),
                              children: [
                                (0, c.jsxs)("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    (0, c.jsx)("div", {
                                      className: "h-[30px] w-[30px]",
                                      style: {
                                        backgroundSize: "contain",
                                        backgroundImage: "url(".concat(
                                          e.icon,
                                          ")"
                                        ),
                                      },
                                    }),
                                    (0, c.jsxs)("div", {
                                      children: [
                                        (0, c.jsx)("div", { children: e.name }),
                                        (0, c.jsx)("div", {
                                          className: "itemDesc",
                                          children: e.desc,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                l.path === e.path &&
                                  (0, c.jsx)("div", {
                                    children: (0, c.jsx)(z.Z, {}),
                                  }),
                              ],
                            },
                            e.path
                          )
                        ),
                      }),
                    children: (0, c.jsx)("div", {
                      className: I().switchChatModel,
                      children: (0, c.jsx)(L(), {
                        src: l.icon,
                        width: 24,
                        height: 24,
                        alt: "",
                        className:
                          "absolute left-[24px] top-[50%] z-10 -translate-y-1/2 transform hover:cursor-pointer",
                      }),
                    }),
                  }),
                  (0, c.jsx)(G, {
                    className: ""
                      .concat(I().customScrollbar, " ")
                      .concat(
                        I().customTextarea,
                        "\n            w-full\n        bg-textareaBg text-[16px] text-inputText\n        placeholder:text-placeholderText focus-within:shadow-none focus-within:outline-none focus:shadow-none focus:outline-none"
                      ),
                    value: i,
                    onChange: (e) => r(e.target.value),
                    placeholder:
                      "Ask Clara anything about Web3, the latest projects and new workflows",
                    autoSize: { minRows: 1, maxRows: 4 },
                    onFocus: () => {
                      t && t();
                    },
                    onKeyDown: (e) => {
                      13 !== e.keyCode ||
                        e.shiftKey ||
                        (e.preventDefault(), onSendMessage());
                    },
                  }),
                ],
              }),
            }),
            (0, c.jsx)("div", {
              className: M()("clear-text-handler", {
                "is-show": i.length > 0 && !h,
              }),
              onClick: () => r(""),
              children: (0, c.jsx)(Q.Z, {}),
            }),
            (0, c.jsx)(g.M, {
              children:
                n &&
                (0, c.jsxs)(c.Fragment, {
                  children: [
                    b.length > 0 &&
                      (0, c.jsxs)(j.E.div, {
                        className: "new-session absolute flex",
                        initial: { opacity: 0 },
                        animate: { opacity: 0.6 },
                        exit: { opacity: 0 },
                        transition: { duration: 0.2, ease: "easeIn" },
                        onClick: () => onClearHistory(),
                        children: [(0, c.jsx)(magic_clear, {}), "New Session"],
                      }),
                    (0, c.jsxs)(j.E.div, {
                      className: "keyboard-tips absolute flex",
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      transition: { duration: 0.2, ease: "easeIn" },
                      children: ["Press Enter to send", (0, c.jsx)(Z.Z, {})],
                    }),
                  ],
                }),
            }),
            (0, c.jsxs)("div", {
              className:
                "item-center invisible absolute bottom-[30px] right-[0px] flex items-center opacity-70 transition-all hover:cursor-pointer hover:opacity-100",
              onClick: () => onClearHistory(),
              children: [
                (0, c.jsx)(L(), {
                  src: "/img/workarea/clear.svg",
                  width: 24,
                  height: 24,
                  alt: "close",
                  className: "",
                }),
                (0, c.jsx)("div", {
                  className: "text-xs font-normal text-white underline",
                  children: "New Session",
                }),
              ],
            }),
          ],
        });
      }
      var q = a(18144),
        J = a(63361),
        W = a(40104),
        V = a(85922),
        X = a(80235),
        Y = a(16064),
        U = a(43790),
        $ = a.n(U),
        ee = a(62329),
        et = a.n(ee);
      function formatMarkdownString(e) {
        var t;
        return ('"' === (t = e).charAt(0) && (t = t.substring(1)),
        '"' === t.charAt(t.length - 1) && (t = t.substring(0, t.length - 1)),
        t)
          .replace(/\\n\\n/g, "\n")
          .replace(/\\n/g, "\n")
          .replace(/:\w+:/gi, (e) => "".concat($().getUnicode(e) || "", " "))
          .replaceAll(
            "[more details]",
            "[![more details](/img/more-details.svg)]"
          );
      }
      function LinkRenderer(e) {
        return (0, c.jsx)("a", {
          href: e.href,
          target: "_blank",
          rel: "noreferrer",
          children: e.children,
        });
      }
      function TableRender(e) {
        let { node: t, intent_details: a } = e,
          n = (0, Y.C)(t),
          s = (0, V.x)(n, { extensions: [(0, X.x)()] });
        return (0, c.jsx)(c.Fragment, {
          children: (0, c.jsx)(ChatTableIntentBlock, {
            tableMarkdown: formatMarkdownString(s),
            type: null == a ? void 0 : a.tool_name,
          }),
        });
      }
      function ChatResponse(e) {
        let { message: t } = e,
          a = e.recommend_questions,
          n = "ask_web3_info" === e.intent,
          s = "get_token_top_holders" === e.intent_details.tool_name,
          l = n && s;
        return (0, c.jsxs)("div", {
          className: "".concat(
            et().ChatResponse,
            " box-content w-[768px] rounded-[16px] bg-cardBg p-[32px]"
          ),
          children: [
            (0, c.jsxs)("div", {
              className: "inline-flex items-center justify-start w-full ",
              children: [
                (0, c.jsx)("div", {
                  className: "",
                  children: (0, c.jsx)(L(), {
                    src: "/img/lucy-icon.svg",
                    width: 40,
                    height: 40,
                    alt: "Clara",
                  }),
                }),
                (0, c.jsx)("div", {
                  className:
                    "ms-[16px] h-[19px] w-[672px] text-base font-bold ",
                  children: "Clara",
                }),
              ],
            }),
            (0, c.jsxs)("div", {
              className: "w-fill mt-[24px] px-[56px]",
              children: [
                !l &&
                  (0, c.jsx)("div", {
                    className: M()("text-[16px] leading-[24px]", {
                      "whitespace-pre-wrap": !n,
                      readable: n,
                    }),
                    children: n
                      ? (0, c.jsx)(J.U, {
                          remarkPlugins: [W.Z],
                          components: {
                            a: LinkRenderer,
                            table: (t) =>
                              (0, c.jsx)(TableRender, {
                                node: t.node,
                                intent_details: e.intent_details,
                              }),
                          },
                          children: formatMarkdownString(t),
                        })
                      : t,
                  }),
                l &&
                  (0, c.jsx)(ChatTableIntentBlock, {
                    tableMarkdown: formatMarkdownString(t),
                    type: e.intent_details.tool_name,
                  }),
                "open_project_galxe_campaigns" === e.intent &&
                  (0, c.jsx)(ChatSpaceCampaignIntentBlock, {
                    className: "mt-6",
                    name: e.intent_details.id,
                  }),
                "open_project_token_staking" === e.intent &&
                  (0, c.jsx)(ChatSpacePancakeIntentBlock, {
                    className: "mt-6",
                    name: e.intent_details.id,
                  }),
                "open_project_token_bridge" === e.intent &&
                  (0, c.jsx)(ChatSpaceBridgeIntentBlock, {
                    className: "mt-6",
                    name: e.intent_details.id,
                  }),
                "open_project" === e.intent &&
                  (0, c.jsx)(ChatSpaceIntentBlock, {
                    className: "mt-6",
                    name: e.intent_details.id,
                  }),
                "open_workflow_group" === e.intent &&
                  (0, c.jsx)(ChatSpaceIntentBlock, {
                    className: "mt-6",
                    name:
                      e.intent_details.projectName ||
                      e.intent_details.id.split("-")[0],
                    group: e.intent_details.id,
                  }),
                a && (0, c.jsx)(MoreQuestions, { questions: a }),
                (0, c.jsx)(ChatEvaluate, {
                  id: e.message_uuid,
                  user_evaluation: e.user_evaluation,
                }),
              ],
            }),
          ],
        });
      }
      function Greeting() {
        return (0, c.jsxs)("div", {
          className: "box-content w-[768px] rounded-[16px] bg-cardBg p-[32px]",
          children: [
            (0, c.jsxs)("div", {
              className: "inline-flex w-full items-center justify-start ",
              children: [
                (0, c.jsx)("div", {
                  className: "",
                  children: (0, c.jsx)(L(), {
                    src: "/img/greeting/chat.svg",
                    width: 40,
                    height: 40,
                    alt: "Clara",
                  }),
                }),
                (0, c.jsx)("div", {
                  className: "ms-[16px] h-[19px] w-[672px] text-base font-bold",
                  children: "Clara",
                }),
              ],
            }),
            (0, c.jsxs)("div", {
              className: "mt-[24px] px-[56px]",
              children: [
                (0, c.jsxs)("span", {
                  className:
                    "mb-[10px] inline-block text-base font-normal leading-normal",
                  children: [
                    "Hey there! This is Clara, the 1st AI-Powered Web3 Operating System. (Beta Now)",
                    (0, c.jsx)("br", {}),
                    "I’m here to make it easier for you to access the crypto world.",
                  ],
                }),
                (0, c.jsx)("br", {}),
                (0, c.jsx)("span", {
                  className:
                    "mb-[10px] inline-block text-base font-normal leading-normal",
                  children: "Start talking to me now!",
                }),
                (0, c.jsx)("br", {}),
                (0, c.jsx)("span", {
                  className:
                    "mb-[12px] inline-block text-base font-normal leading-normal",
                  children:
                    "Not sure what to ask? Try the following categories!",
                }),
                (0, c.jsx)(QuestionsCollapse, {}),
              ],
            }),
          ],
        });
      }
      var ea = a(97133),
        en = a.n(ea),
        es = a(79362);
      function Index() {
        let { getChatHistory: e, isLoading: t } = (0, y.v2)(),
          [a, n] = (0, p.KO)(_.FH),
          [s, l] = (0, p.KO)(_.tP),
          [i, r] = (0, p.KO)(_.EJ),
          [o, d] = (0, p.KO)(_.Mk),
          [h, m] = (0, p.KO)(_.oF),
          [g, j] = (0, p.KO)(_._j),
          [f, b] = (0, p.KO)(_.Ag),
          [v, w] = (0, p.KO)(_.F5);
        (0, u.useEffect)(() => {}, [e]),
          (0, u.useEffect)(() => {
            let e = setTimeout(
              () => {
                F.NY.scrollToBottom({
                  duration: i > 1 ? 800 : 0,
                  smooth: !0,
                  containerId: "chatListArea",
                });
              },
              i > 1 ? 400 : 0
            );
            return () => clearTimeout(e);
          }, [s]),
          (0, u.useEffect)(() => {
            let handleScroll = () => {
              if (!a || t) return !0;
              let s =
                document.documentElement.scrollTop || document.body.scrollTop;
              if (s < window.innerHeight / 2 && !o) {
                let t = i + 1;
                e(
                  { page: t, size: 10 },
                  {
                    onSuccess: (e) => {
                      (e.items.length < e.size || e.page >= e.pages) && n(!1);
                    },
                  }
                ),
                  r(t),
                  d(!1);
              }
            };
            return (
              window.addEventListener("scroll", handleScroll),
              () => {
                window.removeEventListener("scroll", handleScroll);
              }
            );
          }, [e, o, i, d, r, a, t, n]);
        let k = (0, u.useMemo)(() => h || g || f || v, [v, f, g, h]);
        return (0, c.jsx)("div", {
          className: "".concat(en().chatListArea, " h-[80vh] overflow-auto"),
          id: "chatListArea",
          children: (0, c.jsxs)(x.default, {
            indicator: (0, c.jsx)(K.default, { style: { fontSize: 24 } }),
            spinning: !s.length && t,
            children: [
              (0, c.jsxs)("div", {
                className: "mt-[0px]",
                children: [
                  (0, c.jsx)("div", {
                    className: "header-placeholder",
                    children: (0, c.jsx)(x.default, {
                      spinning: s.length > 0 && t,
                      indicator: (0, c.jsx)(K.default, {
                        style: { fontSize: 24 },
                        spin: !0,
                      }),
                    }),
                  }),
                  o &&
                    (0, c.jsxs)("div", {
                      className:
                        "mb-[32px] inline-flex h-[52px] w-[832px] flex-col items-start justify-start gap-1 px-[88px]",
                      children: [
                        (0, c.jsx)("div", {
                          className:
                            "w-[656px] text-lg font-normal leading-[27px] text-textPrimary",
                          children: "New chat session started",
                        }),
                        (0, c.jsx)("div", {
                          className:
                            "w-[656px] text-sm font-normal leading-[21px] text-textPrimary opacity-60",
                          children:
                            "Clara setup has been updated. Previous messages won't be used as context for new queries.",
                        }),
                      ],
                    }),
                  (!a || !s.length) && (0, c.jsx)(Greeting, {}),
                ],
              }),
              s
                .filter((e) => e.message)
                .map((e) =>
                  e.role === es.v9
                    ? (0, c.jsx)(
                        "div",
                        {
                          className: "mt-[24px]",
                          children: (0, c.jsx)(q.Z, { text: e.message }),
                        },
                        e.message_uuid
                      )
                    : (0, c.jsx)(
                        "div",
                        {
                          className: "mt-[24px]",
                          children: (0, c.jsx)(ChatResponse, { ...e }),
                        },
                        e.message_uuid
                      )
                ),
              k && (0, c.jsx)("div", { className: "h-[468px]" }),
            ],
          }),
        });
      }
      let el = (0, h.ZP)(() =>
          Promise.all([
            a.e(3325),
            a.e(1664),
            a.e(6018),
            a.e(164),
            a.e(1443),
          ]).then(a.bind(a, 20164))
        ),
        ei = (0, m.cn)(!0);
      function ChatMain() {
        let [e, t] = (0, p.KO)(ei);
        return e
          ? (0, c.jsx)(ChatOnboarding, {})
          : (0, c.jsx)(c.Fragment, {
              children: (0, c.jsx)(g.M, {
                children: (0, c.jsx)(j.E.div, {
                  className: "chat-list-container flex",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.2, ease: "easeIn" },
                  children: (0, c.jsx)(Index, {}),
                }),
              }),
            });
      }
      function ChatLayout() {
        let [e, t] = (0, u.useState)(!0),
          [a, n] = (0, u.useState)([]),
          [s, l] = (0, p.KO)(ei),
          [i, r] = (0, p.KO)(_.FH),
          [o, d] = (0, p.KO)(_.tP),
          { getChatHistory: h } = (0, y.v2)(),
          loadData = async () => {
            t(!0);
            try {
              try {
                await h({ page: 1, size: 10 });
              } catch (e) {}
              o.length < 10 && r(!1), n(k);
            } catch (e) {}
            t(!1);
          };
        return (
          (0, u.useEffect)(() => {
            loadData();
          }, []),
          (0, u.useEffect)(() => {
            o.length && l(!1);
          }, [o]),
          (0, c.jsx)(x.default, {
            spinning: e,
            style: {},
            children: (0, c.jsxs)("div", {
              className: b().Chat,
              children: [
                (0, c.jsx)(el, {}),
                (0, c.jsxs)("div", {
                  className: "limit-container",
                  children: [
                    (0, c.jsx)(ChatMain, {}),
                    !e &&
                      (0, c.jsxs)("div", {
                        className: "prompt-input-container",
                        children: [
                          (0, c.jsx)(PromptInput, {
                            onFocus: () => l(!1),
                            isShowPromptTips: s,
                            isShowKeyboardTips: !s,
                          }),
                          (0, c.jsx)("div", { className: "prompt-input-mask" }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var er = a(40959),
        ec = a(53954),
        eo = a.n(ec),
        ed = a(81010),
        eh = a(55207),
        eu = a(77792),
        ex = a(4933);
      function ChatEvaluate(e) {
        let { id: t, user_evaluation: a } = e,
          [n, s] = (0, u.useState)(!1),
          [l, i] = (0, u.useState)(void 0 !== a ? a : 0),
          handleThumbClick = async (e) => {
            if (!n && e !== l) {
              s(!0);
              try {
                await (0, y.xY)(t, e),
                  i(e),
                  er.ZP.success("Successfully Feedback");
              } catch (e) {}
              s(!1);
            }
          };
        return (0, c.jsx)("div", {
          className: eo().ChatEvaluate,
          children: (0, c.jsxs)("div", {
            className: "flex items-center justify-between",
            children: [
              (0, c.jsxs)("div", {
                className: "-ml-[3px] flex items-center gap-[8px]",
                children: [
                  (0, c.jsx)(ed.Z, {}),
                  "This response is generated from third-party data sources.",
                  " ",
                  (0, c.jsx)("a", {
                    href: ex.m.discord,
                    target: "_blank",
                    children: "Report discrepancies",
                  }),
                ],
              }),
              (0, c.jsxs)("div", {
                className: "-ml-[6px] flex gap-[8px]",
                children: [
                  (0, c.jsx)("div", {
                    className: M()("handler", { "is-active": 1 === l }),
                    onClick: () => handleThumbClick(1),
                    children: (0, c.jsx)(eh.Z, {}),
                  }),
                  (0, c.jsx)("div", {
                    className: M()("handler", { "is-active": 2 === l }),
                    onClick: () => handleThumbClick(2),
                    children: (0, c.jsx)(eu.Z, {}),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var em = a(88281),
        ep = a.n(em),
        eg = a(29221);
      let getBlockTitleByNameAndGroup = (e, t) =>
        "agi-staking" === t
          ? "AGI Staking"
          : "delysium" === e
          ? "Delysium Space"
          : "".concat(e.charAt(0).toUpperCase() + e.slice(1), " Space");
      function ChatSpaceIntentBlock(e) {
        let { name: t, group: a, className: n } = e,
          s = getBlockTitleByNameAndGroup(t, a),
          l = "/project/".concat(t),
          i = "".concat(l, "?from=chat&groupId=").concat(a);
        return (0, c.jsx)("a", {
          className: M()(ep().ChatSpaceIntentBlock, n),
          href: l,
          children: (0, c.jsxs)("div", {
            className: "block-wrapper",
            children: [
              (0, c.jsxs)("div", {
                className: "block-title",
                children: [s, (0, c.jsx)(eg.Z, {})],
              }),
              (0, c.jsx)("div", {
                className: "scrollable",
                children: (0, c.jsx)("iframe", {
                  className: "block-frame",
                  src: "".concat(i),
                }),
              }),
            ],
          }),
        });
      }
      function ChatSpaceCampaignIntentBlock(e) {
        let { name: t, campaign: a, className: n } = e,
          s = "/project/".concat(t);
        return (0, c.jsx)("a", {
          className: M()(ep().ChatSpaceIntentBlock, n),
          href: s,
          children: (0, c.jsxs)("div", {
            className: "block-wrapper",
            children: [
              (0, c.jsxs)("div", {
                className: "block-title",
                children: ["Galxe ongoing campaigns", (0, c.jsx)(eg.Z, {})],
              }),
              (0, c.jsx)("div", {
                className: "scrollable",
                children: (0, c.jsx)("iframe", {
                  className: "block-frame",
                  src: "".concat("".concat(s, "?from=chat&t=campaign")),
                }),
              }),
            ],
          }),
        });
      }
      var ej = a(14365),
        ef = a.n(ej),
        eb = a(2307),
        ev = a(85997);
      let Extractor = class Extractor extends ev.Th {
        get tables() {
          return this.extractedTables;
        }
        get objects() {
          return this.extractedTables.map((e) =>
            Extractor.tableToObject(e, this.lowercaseKeys)
          );
        }
        reset() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "rows";
          (this.mode = e),
            (this.currentRow = []),
            (this.currentTable = []),
            (this.extractedTables = []);
        }
        table(e, t) {
          return (
            this.extractedTables.push(
              "rows" === this.mode
                ? this.currentTable
                : Extractor.transposeTable(this.currentTable)
            ),
            (this.currentTable = []),
            super.table(e, t)
          );
        }
        tablerow(e) {
          return (
            this.currentTable.push(this.currentRow),
            (this.currentRow = []),
            super.tablerow(e)
          );
        }
        tablecell(e, t) {
          return this.currentRow.push(e), super.tablecell(e, t);
        }
        static transposeTable(e) {
          let t = [],
            a = e.length,
            n = e[0].length;
          for (let s = 0; s < n; s++) {
            t.push([]);
            for (let n = 0; n < a; n++) t[s].push(e[n][s]);
          }
          return t;
        }
        static tableToObject(e, t) {
          let a = e.shift().slice(1),
            n = {};
          return (
            e.forEach((e) => {
              let s = e.shift(),
                l = {};
              e.forEach((e, n) => {
                l[t ? a[n].toLowerCase() : a[n]] = e;
              }),
                (n[t ? s.toLowerCase() : s] = l);
            }),
            n
          );
        }
        static createExtractor(e, t, a) {
          let n = new Extractor(t, a);
          return ev.M2.setOptions({ renderer: n }), ev.M2.parse(e), n;
        }
        static extractObject(e, t, a) {
          let n = Extractor.extractAllObjects(e, t, a);
          return n.length > 0 ? n[0] : null;
        }
        static extractAllObjects(e, t, a) {
          return Extractor.createExtractor(e, t, a).objects;
        }
        static extractTable(e, t, a) {
          let n = Extractor.extractAllTables(e, t, a);
          return n.length > 0 ? n[0] : null;
        }
        static extractAllTables(e, t, a) {
          return Extractor.createExtractor(e, t, a).tables;
        }
        static extract(e, t, a) {
          let n = Extractor.createExtractor(e, t, a);
          return n.objects.length > 0 ? JSON.stringify(n.objects[0]) : null;
        }
        static extractAll(e, t, a) {
          return Extractor.createExtractor(e, t, a).objects.map((e) =>
            JSON.stringify(e)
          );
        }
        constructor(e, t) {
          super(), (this.lowercaseKeys = null != t && t), this.reset(e);
        }
      };
      function ChatTableIntentBlock(e) {
        let { tableMarkdown: t, type: a } = e,
          n = Extractor.extractTable(t, "rows", !1);
        if (!n || (null == n ? void 0 : n.length) < 2) return null;
        let s = [],
          l = n[0].map((e) => ({
            title: (0, c.jsx)("span", {
              dangerouslySetInnerHTML: { __html: e },
            }),
            dataIndex: e,
            key: e,
          }));
        return (
          n.map((e, t) => {
            if (0 === t) return;
            let a = n[0],
              l = { key: t };
            e.map((e, t) => {
              l[a[t]] = (0, c.jsx)("span", {
                dangerouslySetInnerHTML: { __html: e },
              });
            }),
              s.push(l);
          }),
          (0, c.jsx)("div", {
            className: ef().ChatTableIntentBlock,
            children: (0, c.jsx)(eb.Z, {
              dataSource: s,
              columns: l,
              scroll: { x: 200 },
            }),
          })
        );
      }
      var ew = a(68469),
        ek = a(18167),
        e_ = a.n(ek),
        ey = a(27759),
        eN = a(96164),
        eC = a(51424);
      let eS = [
        {
          title: "Token",
          Icon: eN.Z,
          description: "Ask about the token name, ticker symbol, or address",
          questions: [
            "Summarize the information for the AGI token on Ethereum",
            "Show the trading signal for the AGI token",
            "Provide the token holder distribution for the AGI token on Ethereum",
            "List the top token holders for the AGI token on BNB Smart Chain",
          ],
        },
        {
          title: "Project",
          Icon: eC.Z,
          description: "Ask about a project, company or organization",
          questions: [
            "Summarize the information of project Delysium",
            "Introduce the token of project Delysium",
          ],
        },
      ];
      function QuestionsCollapseItem(e) {
        let { collapseItem: t } = e,
          { emit: a } = (0, S.OF)(),
          [n, s] = (0, u.useState)(-1),
          handleQuestionClick = (e) => {
            a("newQuestion", e);
          },
          l = [
            {
              key: "1",
              label: t.title,
              children: (0, c.jsxs)(c.Fragment, {
                children: [
                  (0, c.jsx)("p", {
                    className: "mb-6",
                    children: t.description,
                  }),
                  t.questions.map((e, t) =>
                    (0, c.jsxs)(
                      "div",
                      {
                        className: "question-item flex gap-2 truncate",
                        onClick: () => handleQuestionClick(e),
                        children: [
                          (0, c.jsx)(R.Z, { className: "text-[20px]" }),
                          e,
                        ],
                      },
                      e
                    )
                  ),
                ],
              }),
              extra: (0, c.jsx)(t.Icon, {}),
            },
          ];
        return (0, c.jsx)(ew.default, {
          items: l,
          expandIcon: (e) => (0, c.jsx)(ey.Z, {}),
          expandIconPosition: "end",
        });
      }
      function QuestionsCollapse() {
        return (0, c.jsx)("div", {
          className: e_().QuestionsCollapse,
          children: eS.map((e, t) =>
            (0, c.jsx)(QuestionsCollapseItem, { collapseItem: e }, t)
          ),
        });
      }
      var eT = a(86211),
        eI = a.n(eT);
      function MoreQuestions_QuestionsCollapseItem(e) {
        let { question: t } = e,
          { emit: a } = (0, S.OF)(),
          handleQuestionClick = (e) => {
            a("newQuestion", e);
          };
        return (0, c.jsx)(c.Fragment, {
          children: (0, c.jsxs)("div", {
            className: "question-item flex gap-2 truncate",
            onClick: () => handleQuestionClick(t.prompt),
            children: [
              (0, c.jsx)(R.Z, { className: "text-[20px]" }),
              t.display_text,
            ],
          }),
        });
      }
      function MoreQuestions(e) {
        let { questions: t } = e;
        return (0, c.jsx)("div", {
          className: eI().MoreQuestions,
          children:
            null == t
              ? void 0
              : t.map((e) =>
                  (0, c.jsx)(
                    MoreQuestions_QuestionsCollapseItem,
                    { question: e },
                    e.display_text
                  )
                ),
        });
      }
      function ChatSpacePancakeIntentBlock(e) {
        let { name: t, className: a } = e,
          n = "/project/".concat(t);
        return (0, c.jsx)("a", {
          className: M()(ep().ChatSpaceIntentBlock, a),
          href: n,
          children: (0, c.jsxs)("div", {
            className: "block-wrapper",
            children: [
              (0, c.jsxs)("div", {
                className: "block-title",
                children: ["LP Stake", (0, c.jsx)(eg.Z, {})],
              }),
              (0, c.jsx)("div", {
                className: "scrollable",
                children: (0, c.jsx)("iframe", {
                  className: "block-frame",
                  src: "".concat(
                    "".concat(n, "?from=chat&t=pancake-farms-stake")
                  ),
                }),
              }),
            ],
          }),
        });
      }
      function ChatSpaceBridgeIntentBlock(e) {
        let { name: t, className: a } = e,
          n = "/project/".concat(t);
        return (0, c.jsx)("a", {
          className: M()(ep().ChatSpaceIntentBlock, a),
          href: n,
          children: (0, c.jsxs)("div", {
            className: "block-wrapper",
            children: [
              (0, c.jsxs)("div", {
                className: "block-title",
                children: ["Bridge", (0, c.jsx)(eg.Z, {})],
              }),
              (0, c.jsx)("div", {
                className: "scrollable",
                children: (0, c.jsx)("iframe", {
                  className: "block-frame",
                  src: "".concat("".concat(n, "?from=chat&t=bridge")),
                }),
              }),
            ],
          }),
        });
      }
      var eE = a(65679);
      function ChatPage() {
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(d(), {
              children: (0, c.jsx)("title", { children: "Clara" }),
            }),
            (0, c.jsx)(eE.Z, { children: (0, c.jsx)(ChatLayout, {}) }),
          ],
        });
      }
      (0, h.ZP)(() =>
        Promise.all([
          a.e(3325),
          a.e(1664),
          a.e(6018),
          a.e(8685),
          a.e(8466),
        ]).then(a.bind(a, 78685))
      );
    },
    53954: function (e) {
      e.exports = { ChatEvaluate: "ChatEvaluate_ChatEvaluate__oow42" };
    },
    41562: function (e) {
      e.exports = { Chat: "ChatLayout_Chat__kQMLB" };
    },
    97719: function (e) {
      e.exports = { ChatOnboarding: "ChatOnboarding_ChatOnboarding__j08aV" };
    },
    88281: function (e) {
      e.exports = {
        ChatSpaceIntentBlock:
          "ChatSpaceIntentBlock_ChatSpaceIntentBlock__LdVKj",
      };
    },
    14365: function (e) {
      e.exports = {
        ChatTableIntentBlock:
          "ChatTableIntentBlock_ChatTableIntentBlock__cKkXo",
      };
    },
    86211: function (e) {
      e.exports = { MoreQuestions: "MoreQuestions_MoreQuestions__wXC0x" };
    },
    18167: function (e) {
      e.exports = {
        QuestionsCollapse: "QuestionsCollapse_QuestionsCollapse__zD_lF",
      };
    },
    97133: function (e) {
      e.exports = { chatListArea: "ChatListArea_chatListArea__LYyaS" };
    },
    62329: function (e) {
      e.exports = { ChatResponse: "ChatResponse_ChatResponse__7LltF" };
    },
    87836: function (e) {
      e.exports = {
        customScrollbar: "TextArea_customScrollbar__P5fkH",
        customTextarea: "TextArea_customTextarea__ZTtIo",
        customTextareaWrapper: "TextArea_customTextareaWrapper__sPgky",
        switchChatModelDropdown: "TextArea_switchChatModelDropdown__aVPLq",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        9658, 1823, 4653, 2844, 4055, 6760, 792, 2891, 5904, 945, 2307, 5841,
        6659, 9774, 2888, 179,
      ],
      function () {
        return e((e.s = 80022));
      }
    ),
      (_N_E = e.O());
  },
]);
