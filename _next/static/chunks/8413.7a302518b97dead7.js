"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8413],
  {
    8413: function (e, t, l) {
      l.r(t),
        l.d(t, {
          default: function () {
            return Index;
          },
        });
      var n = l(85893),
        s = l(98029),
        a = l(74881),
        r = l(74305),
        c = l(14921),
        o = l(48583);
      let useProjectList = () => {
          let [e, t] = (0, o.KO)(c.Y7),
            { mutateAsync: l } = (0, s.D)({
              mutationFn: (e) => r.e.get(a.P.GET_PROJECTS, { ...e }),
              onSuccess: (l) => {
                t([...e, ...((null == l ? void 0 : l.items) || [])]);
              },
            });
          return { getProjectList: l };
        },
        useProjectSearch = () => {
          let [e, t] = (0, o.KO)(c.Y7),
            { mutateAsync: l } = (0, s.D)({
              mutationFn: (e) => r.e.get(a.P.GET_PROJECT_SEARCH, { ...e }),
              onSuccess: (l) => {
                t([...e, ...((null == l ? void 0 : l.projects) || [])]);
              },
            });
          return { searchProjectList: l };
        };
      var i = l(31929),
        u = l(51024),
        d = l(56590),
        h = l(40959),
        p = l(246),
        x = l.n(p),
        m = l(67294),
        f = l(25675),
        g = l.n(f),
        v = l(11163),
        j = l(8891);
      let w = !1;
      function Index() {
        let e = (0, v.useRouter)(),
          { getProjectList: t } = useProjectList(),
          { searchProjectList: l } = useProjectSearch(),
          [s, a] = (0, o.KO)(c.Y7),
          [r, p] = (0, m.useState)(""),
          [f, E] = (0, m.useState)(!0),
          [S, y] = (0, m.useState)(1),
          _ = (0, m.useRef)(null),
          b = (0, m.useCallback)(() => {
            let fetch = async () => {
              if (!w) {
                w = !0;
                try {
                  let e = r
                    ? await l({ q: r })
                    : await t({ page: S, size: 32 });
                  (null == e ? void 0 : e.length) === 0 && E(!1),
                    r || y((e) => e + 1),
                    (w = !1);
                } catch (e) {
                  h.ZP.error("Failed to fetch data");
                } finally {
                  w = !1;
                }
              }
            };
            fetch();
          }, [t, S, r, l]),
          P = (0, j.Z)((e) => {
            e.target.value || (E(!0), y(1), a([])), p(e.target.value);
          }, 300);
        return (
          (0, m.useEffect)(() => {
            r && (E(!1), y(1), a([])), b();
          }, [r]),
          (0, n.jsxs)("div", {
            className: "flex flex-col items-center w-full",
            children: [
              (0, n.jsx)(i.default, {
                theme: {
                  token: { colorBgContainer: "#EDEEFF" },
                  components: { Input: { activeShadow: "0 0 0 2px #EDEEFF" } },
                },
                children: (0, n.jsx)("div", {
                  className: "flex items-center justify-center w-full py-8",
                  style: { backgroundImage: "url('/img/projectInfo/bg.png')" },
                  children: (0, n.jsx)(u.default, {
                    className:
                      "mt-1 w-[800px] rounded-[999px] border-none bg-[#EDEEFF] px-6",
                    placeholder: "Search spaces here",
                    onChange: (e) => {
                      P(e);
                    },
                    size: "large",
                    prefix: (0, n.jsx)(g(), {
                      src: "/img/projects/search_icon.svg",
                      alt: "search",
                      width: "24",
                      height: "24",
                    }),
                  }),
                }),
              }),
              (0, n.jsx)("div", {
                className:
                  "mt-[40px] h-[80vh] w-[1136px] overflow-auto overflow-x-hidden",
                ref: _,
                children: (0, n.jsx)(x(), {
                  initialLoad: !1,
                  pageStart: 1,
                  loadMore: () => {
                    r || b();
                  },
                  hasMore: f,
                  useWindow: !1,
                  getScrollParent: () => _.current,
                  children: (0, n.jsx)(d.Z, {
                    grid: { gutter: 32, column: 4 },
                    dataSource: s,
                    renderItem: (t) =>
                      (0, n.jsx)(d.Z.Item, {
                        children: (0, n.jsxs)("div", {
                          className:
                            "duration-900 mb-[32px] flex h-[96px] w-[260px] items-center rounded-[8px] bg-[#fff] px-[16px] py-[24px] shadow-sm transition-all hover:cursor-pointer hover:shadow-md",
                          onClick: () => {
                            e.push(
                              "/project/info/".concat(
                                null == t ? void 0 : t.name
                              )
                            );
                          },
                          children: [
                            (0, n.jsx)("img", {
                              src: null == t ? void 0 : t.icon_url,
                              alt: null == t ? void 0 : t.display_name,
                              width: "64",
                              height: "64",
                              className: "rounded-full",
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "ms-[16px] line-clamp-3 text-[16px] font-semibold",
                              children: null == t ? void 0 : t.display_name,
                            }),
                          ],
                        }),
                      }),
                  }),
                }),
              }),
            ],
          })
        );
      }
    },
  },
]);
