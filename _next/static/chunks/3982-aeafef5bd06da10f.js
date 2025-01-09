(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3982],
  {
    69260: function (r, a, c) {
      !(function (r, a, c) {
        "use strict";
        function _interopDefaultLegacy(r) {
          return r && "object" == typeof r && "default" in r
            ? r
            : { default: r };
        }
        var u = _interopDefaultLegacy(a),
          p = _interopDefaultLegacy(c);
        function ownKeys(r, a) {
          var c = Object.keys(r);
          if (Object.getOwnPropertySymbols) {
            var u = Object.getOwnPropertySymbols(r);
            a &&
              (u = u.filter(function (a) {
                return Object.getOwnPropertyDescriptor(r, a).enumerable;
              })),
              c.push.apply(c, u);
          }
          return c;
        }
        function _objectSpread2(r) {
          for (var a = 1; a < arguments.length; a++) {
            var c = null != arguments[a] ? arguments[a] : {};
            a % 2
              ? ownKeys(Object(c), !0).forEach(function (a) {
                  var u, p;
                  (u = a),
                    (p = c[a]),
                    (u = (function (r) {
                      var a = (function (r, a) {
                        if ("object" != typeof r || null === r) return r;
                        var c = r[Symbol.toPrimitive];
                        if (void 0 !== c) {
                          var u = c.call(r, a || "default");
                          if ("object" != typeof u) return u;
                          throw TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === a ? String : Number)(r);
                      })(r, "string");
                      return "symbol" == typeof a ? a : String(a);
                    })(u)) in r
                      ? Object.defineProperty(r, u, {
                          value: p,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (r[u] = p);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(c))
              : ownKeys(Object(c)).forEach(function (a) {
                  Object.defineProperty(
                    r,
                    a,
                    Object.getOwnPropertyDescriptor(c, a)
                  );
                });
          }
          return r;
        }
        function _objectWithoutProperties(r, a) {
          if (null == r) return {};
          var c,
            u,
            p = (function (r, a) {
              if (null == r) return {};
              var c,
                u,
                p = {},
                d = Object.keys(r);
              for (u = 0; u < d.length; u++)
                (c = d[u]), a.indexOf(c) >= 0 || (p[c] = r[c]);
              return p;
            })(r, a);
          if (Object.getOwnPropertySymbols) {
            var d = Object.getOwnPropertySymbols(r);
            for (u = 0; u < d.length; u++)
              (c = d[u]),
                !(a.indexOf(c) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(r, c) &&
                  (p[c] = r[c]);
          }
          return p;
        }
        function _arrayLikeToArray(r, a) {
          (null == a || a > r.length) && (a = r.length);
          for (var c = 0, u = Array(a); c < a; c++) u[c] = r[c];
          return u;
        }
        var d = [
            "animationData",
            "loop",
            "autoplay",
            "initialSegment",
            "onComplete",
            "onLoopComplete",
            "onEnterFrame",
            "onSegmentStart",
            "onConfigReady",
            "onDataReady",
            "onDataFailed",
            "onLoadedImages",
            "onDOMLoaded",
            "onDestroy",
            "lottieRef",
            "renderer",
            "name",
            "assetsPath",
            "rendererSettings",
          ],
          useLottie = function (r, a) {
            var h,
              f = r.animationData,
              g = r.loop,
              _ = r.autoplay,
              m = r.initialSegment,
              v = r.onComplete,
              y = r.onLoopComplete,
              S = r.onEnterFrame,
              x = r.onSegmentStart,
              T = r.onConfigReady,
              b = r.onDataReady,
              w = r.onDataFailed,
              P = r.onLoadedImages,
              C = r.onDOMLoaded,
              O = r.onDestroy;
            r.lottieRef, r.renderer, r.name, r.assetsPath, r.rendererSettings;
            var M = _objectWithoutProperties(r, d),
              k =
                (function (r) {
                  if (Array.isArray(r)) return r;
                })((h = c.useState(!1))) ||
                (function (r, a) {
                  var c =
                    null == r
                      ? null
                      : ("undefined" != typeof Symbol && r[Symbol.iterator]) ||
                        r["@@iterator"];
                  if (null != c) {
                    var u,
                      p,
                      d,
                      h,
                      f = [],
                      g = !0,
                      _ = !1;
                    try {
                      if (((d = (c = c.call(r)).next), 0 === a)) {
                        if (Object(c) !== c) return;
                        g = !1;
                      } else
                        for (
                          ;
                          !(g = (u = d.call(c)).done) &&
                          (f.push(u.value), f.length !== a);
                          g = !0
                        );
                    } catch (r) {
                      (_ = !0), (p = r);
                    } finally {
                      try {
                        if (
                          !g &&
                          null != c.return &&
                          ((h = c.return()), Object(h) !== h)
                        )
                          return;
                      } finally {
                        if (_) throw p;
                      }
                    }
                    return f;
                  }
                })(h, 2) ||
                (function (r, a) {
                  if (r) {
                    if ("string" == typeof r) return _arrayLikeToArray(r, a);
                    var c = Object.prototype.toString.call(r).slice(8, -1);
                    if (
                      ("Object" === c &&
                        r.constructor &&
                        (c = r.constructor.name),
                      "Map" === c || "Set" === c)
                    )
                      return Array.from(r);
                    if (
                      "Arguments" === c ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
                    )
                      return _arrayLikeToArray(r, a);
                  }
                })(h, 2) ||
                (function () {
                  throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })(),
              A = k[0],
              L = k[1],
              E = c.useRef(),
              R = c.useRef(null),
              loadAnimation = function () {
                var a,
                  c =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                if (R.current) {
                  null === (a = E.current) || void 0 === a || a.destroy();
                  var p = _objectSpread2(
                    _objectSpread2(_objectSpread2({}, r), c),
                    {},
                    { container: R.current }
                  );
                  return (
                    (E.current = u.default.loadAnimation(p)),
                    L(!!E.current),
                    function () {
                      var r;
                      null === (r = E.current) || void 0 === r || r.destroy(),
                        (E.current = void 0);
                    }
                  );
                }
              };
            return (
              c.useEffect(
                function () {
                  var r = loadAnimation();
                  return function () {
                    return null == r ? void 0 : r();
                  };
                },
                [f, g]
              ),
              c.useEffect(
                function () {
                  E.current && (E.current.autoplay = !!_);
                },
                [_]
              ),
              c.useEffect(
                function () {
                  if (E.current) {
                    if (!m) {
                      E.current.resetSegments(!0);
                      return;
                    }
                    Array.isArray(m) &&
                      m.length &&
                      ((E.current.currentRawFrame < m[0] ||
                        E.current.currentRawFrame > m[1]) &&
                        (E.current.currentRawFrame = m[0]),
                      E.current.setSegment(m[0], m[1]));
                  }
                },
                [m]
              ),
              c.useEffect(
                function () {
                  var r = [
                    { name: "complete", handler: v },
                    { name: "loopComplete", handler: y },
                    { name: "enterFrame", handler: S },
                    { name: "segmentStart", handler: x },
                    { name: "config_ready", handler: T },
                    { name: "data_ready", handler: b },
                    { name: "data_failed", handler: w },
                    { name: "loaded_images", handler: P },
                    { name: "DOMLoaded", handler: C },
                    { name: "destroy", handler: O },
                  ].filter(function (r) {
                    return null != r.handler;
                  });
                  if (r.length) {
                    var a = r.map(function (r) {
                      var a;
                      return (
                        null === (a = E.current) ||
                          void 0 === a ||
                          a.addEventListener(r.name, r.handler),
                        function () {
                          var a;
                          null === (a = E.current) ||
                            void 0 === a ||
                            a.removeEventListener(r.name, r.handler);
                        }
                      );
                    });
                    return function () {
                      a.forEach(function (r) {
                        return r();
                      });
                    };
                  }
                },
                [v, y, S, x, T, b, w, P, C, O]
              ),
              {
                View: p.default.createElement(
                  "div",
                  _objectSpread2({ style: a, ref: R }, M)
                ),
                play: function () {
                  var r;
                  null === (r = E.current) || void 0 === r || r.play();
                },
                stop: function () {
                  var r;
                  null === (r = E.current) || void 0 === r || r.stop();
                },
                pause: function () {
                  var r;
                  null === (r = E.current) || void 0 === r || r.pause();
                },
                setSpeed: function (r) {
                  var a;
                  null === (a = E.current) || void 0 === a || a.setSpeed(r);
                },
                goToAndStop: function (r, a) {
                  var c;
                  null === (c = E.current) ||
                    void 0 === c ||
                    c.goToAndStop(r, a);
                },
                goToAndPlay: function (r, a) {
                  var c;
                  null === (c = E.current) ||
                    void 0 === c ||
                    c.goToAndPlay(r, a);
                },
                setDirection: function (r) {
                  var a;
                  null === (a = E.current) || void 0 === a || a.setDirection(r);
                },
                playSegments: function (r, a) {
                  var c;
                  null === (c = E.current) ||
                    void 0 === c ||
                    c.playSegments(r, a);
                },
                setSubframe: function (r) {
                  var a;
                  null === (a = E.current) || void 0 === a || a.setSubframe(r);
                },
                getDuration: function (r) {
                  var a;
                  return null === (a = E.current) || void 0 === a
                    ? void 0
                    : a.getDuration(r);
                },
                destroy: function () {
                  var r;
                  null === (r = E.current) || void 0 === r || r.destroy(),
                    (E.current = void 0);
                },
                animationContainerRef: R,
                animationLoaded: A,
                animationItem: E.current,
              }
            );
          },
          useInitInteractivity = function (r) {
            var a = r.wrapperRef,
              u = r.animationItem,
              p = r.mode,
              d = r.actions;
            c.useEffect(
              function () {
                var r,
                  c,
                  h,
                  f,
                  g,
                  _ = a.current;
                if (_ && u && d.length)
                  switch ((u.stop(), p)) {
                    case "scroll":
                      return (
                        (r = null),
                        (c = function () {
                          var a,
                            c,
                            p,
                            h =
                              ((c = (a = _.getBoundingClientRect()).top),
                              (p = a.height),
                              (window.innerHeight - c) /
                                (window.innerHeight + p)),
                            f = d.find(function (r) {
                              var a = r.visibility;
                              return a && h >= a[0] && h <= a[1];
                            });
                          if (f) {
                            if (
                              "seek" === f.type &&
                              f.visibility &&
                              2 === f.frames.length
                            ) {
                              var g =
                                f.frames[0] +
                                Math.ceil(
                                  ((h - f.visibility[0]) /
                                    (f.visibility[1] - f.visibility[0])) *
                                    f.frames[1]
                                );
                              u.goToAndStop(g - u.firstFrame - 1, !0);
                            }
                            "loop" === f.type &&
                              (null === r
                                ? (u.playSegments(f.frames, !0), (r = f.frames))
                                : r !== f.frames
                                ? (u.playSegments(f.frames, !0), (r = f.frames))
                                : u.isPaused &&
                                  (u.playSegments(f.frames, !0),
                                  (r = f.frames))),
                              "play" === f.type &&
                                u.isPaused &&
                                (u.resetSegments(!0), u.play()),
                              "stop" === f.type &&
                                u.goToAndStop(
                                  f.frames[0] - u.firstFrame - 1,
                                  !0
                                );
                          }
                        }),
                        document.addEventListener("scroll", c),
                        function () {
                          document.removeEventListener("scroll", c);
                        }
                      );
                    case "cursor":
                      return (
                        (h = function (r, a) {
                          var c = r,
                            p = a;
                          if (-1 !== c && -1 !== p) {
                            var h,
                              f,
                              g,
                              m,
                              v =
                                ((h = c),
                                (f = p),
                                (m = (g = _.getBoundingClientRect()).top),
                                {
                                  x: (h - g.left) / g.width,
                                  y: (f - m) / g.height,
                                });
                            (c = v.x), (p = v.y);
                          }
                          var y = d.find(function (r) {
                            var a = r.position;
                            return a && Array.isArray(a.x) && Array.isArray(a.y)
                              ? c >= a.x[0] &&
                                  c <= a.x[1] &&
                                  p >= a.y[0] &&
                                  p <= a.y[1]
                              : !(
                                  !a ||
                                  Number.isNaN(a.x) ||
                                  Number.isNaN(a.y)
                                ) &&
                                  c === a.x &&
                                  p === a.y;
                          });
                          if (y) {
                            if (
                              "seek" === y.type &&
                              y.position &&
                              Array.isArray(y.position.x) &&
                              Array.isArray(y.position.y) &&
                              2 === y.frames.length
                            ) {
                              var S =
                                  (c - y.position.x[0]) /
                                  (y.position.x[1] - y.position.x[0]),
                                x =
                                  (p - y.position.y[0]) /
                                  (y.position.y[1] - y.position.y[0]);
                              u.playSegments(y.frames, !0),
                                u.goToAndStop(
                                  Math.ceil(
                                    ((S + x) / 2) * (y.frames[1] - y.frames[0])
                                  ),
                                  !0
                                );
                            }
                            "loop" === y.type && u.playSegments(y.frames, !0),
                              "play" === y.type &&
                                (u.isPaused && u.resetSegments(!1),
                                u.playSegments(y.frames)),
                              "stop" === y.type &&
                                u.goToAndStop(y.frames[0], !0);
                          }
                        }),
                        (f = function (r) {
                          h(r.clientX, r.clientY);
                        }),
                        (g = function () {
                          h(-1, -1);
                        }),
                        _.addEventListener("mousemove", f),
                        _.addEventListener("mouseout", g),
                        function () {
                          _.removeEventListener("mousemove", f),
                            _.removeEventListener("mouseout", g);
                        }
                      );
                  }
              },
              [p, u]
            );
          },
          useLottieInteractivity = function (r) {
            var a = r.actions,
              c = r.mode,
              u = r.lottieObj,
              p = u.animationItem,
              d = u.View;
            return (
              useInitInteractivity({
                actions: a,
                animationItem: p,
                mode: c,
                wrapperRef: u.animationContainerRef,
              }),
              d
            );
          },
          h = ["style", "interactivity"];
        Object.defineProperty(r, "LottiePlayer", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
          (r.default = function (r) {
            var a,
              u,
              p,
              d = r.style,
              f = r.interactivity,
              g = useLottie(_objectWithoutProperties(r, h), d),
              _ = g.View,
              m = g.play,
              v = g.stop,
              y = g.pause,
              S = g.setSpeed,
              x = g.goToAndStop,
              T = g.goToAndPlay,
              b = g.setDirection,
              w = g.playSegments,
              P = g.setSubframe,
              C = g.getDuration,
              O = g.destroy,
              M = g.animationContainerRef,
              k = g.animationLoaded,
              A = g.animationItem;
            return (
              c.useEffect(
                function () {
                  r.lottieRef &&
                    (r.lottieRef.current = {
                      play: m,
                      stop: v,
                      pause: y,
                      setSpeed: S,
                      goToAndPlay: T,
                      goToAndStop: x,
                      setDirection: b,
                      playSegments: w,
                      setSubframe: P,
                      getDuration: C,
                      destroy: O,
                      animationContainerRef: M,
                      animationLoaded: k,
                      animationItem: A,
                    });
                },
                [
                  null === (a = r.lottieRef) || void 0 === a
                    ? void 0
                    : a.current,
                ]
              ),
              useLottieInteractivity({
                lottieObj: {
                  View: _,
                  play: m,
                  stop: v,
                  pause: y,
                  setSpeed: S,
                  goToAndStop: x,
                  goToAndPlay: T,
                  setDirection: b,
                  playSegments: w,
                  setSubframe: P,
                  getDuration: C,
                  destroy: O,
                  animationContainerRef: M,
                  animationLoaded: k,
                  animationItem: A,
                },
                actions:
                  null !== (u = null == f ? void 0 : f.actions) && void 0 !== u
                    ? u
                    : [],
                mode:
                  null !== (p = null == f ? void 0 : f.mode) && void 0 !== p
                    ? p
                    : "scroll",
              })
            );
          }),
          (r.useLottie = useLottie),
          (r.useLottieInteractivity = useLottieInteractivity),
          Object.defineProperty(r, "__esModule", { value: !0 });
      })(a, c(11248), c(67294));
    },
    39036: function (r, a, c) {
      "use strict";
      function _defineProperties(r, a) {
        for (var c = 0; c < a.length; c++) {
          var u = a[c];
          (u.enumerable = u.enumerable || !1),
            (u.configurable = !0),
            "value" in u && (u.writable = !0),
            Object.defineProperty(r, u.key, u);
        }
      }
      c.d(a, {
        i: function () {
          return e$;
        },
      });
      /*!
       * Observer 3.12.3
       * https://gsap.com
       *
       * @license Copyright 2008-2023, GreenSock. All rights reserved.
       * Subject to the terms at https://gsap.com/standard-license or for
       * Club GSAP members, the agreement issued with that membership.
       * @author: Jack Doyle, jack@greensock.com
       */ var u,
        p,
        d,
        h,
        f,
        g,
        _,
        m,
        v,
        y,
        S,
        x,
        T,
        _getGSAP = function () {
          return u || ((u = window.gsap) && u.registerPlugin && u);
        },
        b = 1,
        w = [],
        P = [],
        C = [],
        O = Date.now,
        _bridge = function (r, a) {
          return a;
        },
        _integrate = function () {
          var r = v.core,
            a = r.bridge || {},
            c = r._scrollers,
            u = r._proxies;
          c.push.apply(c, P),
            u.push.apply(u, C),
            (P = c),
            (C = u),
            (_bridge = function (r, c) {
              return a[r](c);
            });
        },
        _getProxyProp = function (r, a) {
          return ~C.indexOf(r) && C[C.indexOf(r) + 1][a];
        },
        _isViewport = function (r) {
          return !!~y.indexOf(r);
        },
        _addListener = function (r, a, c, u, p) {
          return r.addEventListener(a, c, { passive: !u, capture: !!p });
        },
        _removeListener = function (r, a, c, u) {
          return r.removeEventListener(a, c, !!u);
        },
        M = "scrollLeft",
        k = "scrollTop",
        _onScroll = function () {
          return (S && S.isPressed) || P.cache++;
        },
        _scrollCacheFunc = function (r, a) {
          var cachingFunc = function cachingFunc(c) {
            if (c || 0 === c) {
              b && (d.history.scrollRestoration = "manual");
              var u = S && S.isPressed;
              r((c = cachingFunc.v = Math.round(c) || (S && S.iOS ? 1 : 0))),
                (cachingFunc.cacheID = P.cache),
                u && _bridge("ss", c);
            } else
              (a || P.cache !== cachingFunc.cacheID || _bridge("ref")) &&
                ((cachingFunc.cacheID = P.cache), (cachingFunc.v = r()));
            return cachingFunc.v + cachingFunc.offset;
          };
          return (cachingFunc.offset = 0), r && cachingFunc;
        },
        A = {
          s: M,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: _scrollCacheFunc(function (r) {
            return arguments.length
              ? d.scrollTo(r, L.sc())
              : d.pageXOffset || h[M] || f[M] || g[M] || 0;
          }),
        },
        L = {
          s: k,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: A,
          sc: _scrollCacheFunc(function (r) {
            return arguments.length
              ? d.scrollTo(A.sc(), r)
              : d.pageYOffset || h[k] || f[k] || g[k] || 0;
          }),
        },
        _getTarget = function (r, a) {
          return (
            ((a && a._ctx && a._ctx.selector) || u.utils.toArray)(r)[0] ||
            ("string" == typeof r && !1 !== u.config().nullTargetWarn
              ? console.warn("Element not found:", r)
              : null)
          );
        },
        _getScrollFunc = function (r, a) {
          var c = a.s,
            p = a.sc;
          _isViewport(r) && (r = h.scrollingElement || f);
          var d = P.indexOf(r),
            g = p === L.sc ? 1 : 2;
          ~d || (d = P.push(r) - 1),
            P[d + g] || _addListener(r, "scroll", _onScroll);
          var _ = P[d + g],
            m =
              _ ||
              (P[d + g] =
                _scrollCacheFunc(_getProxyProp(r, c), !0) ||
                (_isViewport(r)
                  ? p
                  : _scrollCacheFunc(function (a) {
                      return arguments.length ? (r[c] = a) : r[c];
                    })));
          return (
            (m.target = r),
            _ || (m.smooth = "smooth" === u.getProperty(r, "scrollBehavior")),
            m
          );
        },
        _getVelocityProp = function (r, a, c) {
          var u = r,
            p = r,
            d = O(),
            h = d,
            f = a || 50,
            g = Math.max(500, 3 * f),
            update = function (r, a) {
              var g = O();
              a || g - d > f
                ? ((p = u), (u = r), (h = d), (d = g))
                : c
                ? (u += r)
                : (u = p + ((r - p) / (g - h)) * (d - h));
            };
          return {
            update: update,
            reset: function () {
              (p = u = c ? 0 : u), (h = d = 0);
            },
            getVelocity: function (r) {
              var a = h,
                f = p,
                _ = O();
              return (
                (r || 0 === r) && r !== u && update(r),
                d === h || _ - h > g
                  ? 0
                  : ((u + (c ? f : -f)) / ((c ? _ : d) - a)) * 1e3
              );
            },
          };
        },
        _getEvent = function (r, a) {
          return (
            a && !r._gsapAllow && r.preventDefault(),
            r.changedTouches ? r.changedTouches[0] : r
          );
        },
        _getAbsoluteMax = function (r) {
          var a = Math.max.apply(Math, r),
            c = Math.min.apply(Math, r);
          return Math.abs(a) >= Math.abs(c) ? a : c;
        },
        _setScrollTrigger = function () {
          (v = u.core.globals().ScrollTrigger) && v.core && _integrate();
        },
        _initCore = function (r) {
          return (
            (u = r || _getGSAP()),
            !p &&
              u &&
              "undefined" != typeof document &&
              document.body &&
              ((d = window),
              (f = (h = document).documentElement),
              (g = h.body),
              (y = [d, h, f, g]),
              u.utils.clamp,
              (T = u.core.context || function () {}),
              (m = "onpointerenter" in g ? "pointer" : "mouse"),
              (_ = E.isTouch =
                d.matchMedia &&
                d.matchMedia("(hover: none), (pointer: coarse)").matches
                  ? 1
                  : "ontouchstart" in d ||
                    navigator.maxTouchPoints > 0 ||
                    navigator.msMaxTouchPoints > 0
                  ? 2
                  : 0),
              (x = E.eventTypes =
                (
                  "ontouchstart" in f
                    ? "touchstart,touchmove,touchcancel,touchend"
                    : "onpointerdown" in f
                    ? "pointerdown,pointermove,pointercancel,pointerup"
                    : "mousedown,mousemove,mouseup,mouseup"
                ).split(",")),
              setTimeout(function () {
                return (b = 0);
              }, 500),
              _setScrollTrigger(),
              (p = 1)),
            p
          );
        };
      (A.op = L), (P.cache = 0);
      var E = (function () {
        var r;
        function Observer(r) {
          this.init(r);
        }
        return (
          (Observer.prototype.init = function (r) {
            p ||
              _initCore(u) ||
              console.warn("Please gsap.registerPlugin(Observer)"),
              v || _setScrollTrigger();
            var a = r.tolerance,
              c = r.dragMinimum,
              y = r.type,
              b = r.target,
              P = r.lineHeight,
              C = r.debounce,
              M = r.preventDefault,
              k = r.onStop,
              E = r.onStopDelay,
              R = r.ignore,
              F = r.wheelSpeed,
              D = r.event,
              z = r.onDragStart,
              B = r.onDragEnd,
              N = r.onDrag,
              I = r.onPress,
              Y = r.onRelease,
              W = r.onRight,
              X = r.onLeft,
              H = r.onUp,
              V = r.onDown,
              j = r.onChangeX,
              G = r.onChangeY,
              U = r.onChange,
              q = r.onToggleX,
              K = r.onToggleY,
              Z = r.onHover,
              $ = r.onHoverEnd,
              J = r.onMove,
              Q = r.ignoreCheck,
              ee = r.isNormalizer,
              et = r.onGestureStart,
              er = r.onGestureEnd,
              en = r.onWheel,
              ei = r.onEnable,
              eo = r.onDisable,
              es = r.onClick,
              ea = r.scrollSpeed,
              el = r.capture,
              ec = r.allowClicks,
              eu = r.lockAxis,
              ep = r.onLockAxis;
            (this.target = b = _getTarget(b) || f),
              (this.vars = r),
              R && (R = u.utils.toArray(R)),
              (a = a || 1e-9),
              (c = c || 0),
              (F = F || 1),
              (ea = ea || 1),
              (y = y || "wheel,touch,pointer"),
              (C = !1 !== C),
              P || (P = parseFloat(d.getComputedStyle(g).lineHeight) || 22);
            var ed,
              eh,
              ef,
              eg,
              e_,
              em,
              ev,
              ey = this,
              eS = 0,
              ex = 0,
              eT = _getScrollFunc(b, A),
              eb = _getScrollFunc(b, L),
              ew = eT(),
              eP = eb(),
              eC =
                ~y.indexOf("touch") &&
                !~y.indexOf("pointer") &&
                "pointerdown" === x[0],
              eO = _isViewport(b),
              eM = b.ownerDocument || h,
              ek = [0, 0, 0],
              eA = [0, 0, 0],
              eL = 0,
              clickCapture = function () {
                return (eL = O());
              },
              _ignoreCheck = function (r, a) {
                return (
                  ((ey.event = r) && R && ~R.indexOf(r.target)) ||
                  (a && eC && "touch" !== r.pointerType) ||
                  (Q && Q(r, a))
                );
              },
              update = function () {
                var r = (ey.deltaX = _getAbsoluteMax(ek)),
                  c = (ey.deltaY = _getAbsoluteMax(eA)),
                  u = Math.abs(r) >= a,
                  p = Math.abs(c) >= a;
                U && (u || p) && U(ey, r, c, ek, eA),
                  u &&
                    (W && ey.deltaX > 0 && W(ey),
                    X && ey.deltaX < 0 && X(ey),
                    j && j(ey),
                    q && ey.deltaX < 0 != eS < 0 && q(ey),
                    (eS = ey.deltaX),
                    (ek[0] = ek[1] = ek[2] = 0)),
                  p &&
                    (V && ey.deltaY > 0 && V(ey),
                    H && ey.deltaY < 0 && H(ey),
                    G && G(ey),
                    K && ey.deltaY < 0 != ex < 0 && K(ey),
                    (ex = ey.deltaY),
                    (eA[0] = eA[1] = eA[2] = 0)),
                  (eg || ef) &&
                    (J && J(ey), ef && (N(ey), (ef = !1)), (eg = !1)),
                  em && ((em = !1), 1) && ep && ep(ey),
                  e_ && (en(ey), (e_ = !1)),
                  (ed = 0);
              },
              onDelta = function (r, a, c) {
                (ek[c] += r),
                  (eA[c] += a),
                  ey._vx.update(r),
                  ey._vy.update(a),
                  C ? ed || (ed = requestAnimationFrame(update)) : update();
              },
              onTouchOrPointerDelta = function (r, a) {
                eu &&
                  !ev &&
                  ((ey.axis = ev = Math.abs(r) > Math.abs(a) ? "x" : "y"),
                  (em = !0)),
                  "y" !== ev && ((ek[2] += r), ey._vx.update(r, !0)),
                  "x" !== ev && ((eA[2] += a), ey._vy.update(a, !0)),
                  C ? ed || (ed = requestAnimationFrame(update)) : update();
              },
              _onDrag = function (r) {
                if (!_ignoreCheck(r, 1)) {
                  var a = (r = _getEvent(r, M)).clientX,
                    u = r.clientY,
                    p = a - ey.x,
                    d = u - ey.y,
                    h = ey.isDragging;
                  (ey.x = a),
                    (ey.y = u),
                    (h ||
                      Math.abs(ey.startX - a) >= c ||
                      Math.abs(ey.startY - u) >= c) &&
                      (N && (ef = !0),
                      h || (ey.isDragging = !0),
                      onTouchOrPointerDelta(p, d),
                      h || (z && z(ey)));
                }
              },
              eE = (ey.onPress = function (r) {
                _ignoreCheck(r, 1) ||
                  (r && r.button) ||
                  ((ey.axis = ev = null),
                  eh.pause(),
                  (ey.isPressed = !0),
                  (r = _getEvent(r)),
                  (eS = ex = 0),
                  (ey.startX = ey.x = r.clientX),
                  (ey.startY = ey.y = r.clientY),
                  ey._vx.reset(),
                  ey._vy.reset(),
                  _addListener(ee ? b : eM, x[1], _onDrag, M, !0),
                  (ey.deltaX = ey.deltaY = 0),
                  I && I(ey));
              }),
              eR = (ey.onRelease = function (r) {
                if (!_ignoreCheck(r, 1)) {
                  _removeListener(ee ? b : eM, x[1], _onDrag, !0);
                  var a = !isNaN(ey.y - ey.startY),
                    c = ey.isDragging,
                    p =
                      c &&
                      (Math.abs(ey.x - ey.startX) > 3 ||
                        Math.abs(ey.y - ey.startY) > 3),
                    h = _getEvent(r);
                  !p &&
                    a &&
                    (ey._vx.reset(),
                    ey._vy.reset(),
                    M &&
                      ec &&
                      u.delayedCall(0.08, function () {
                        if (O() - eL > 300 && !r.defaultPrevented) {
                          if (r.target.click) r.target.click();
                          else if (eM.createEvent) {
                            var a = eM.createEvent("MouseEvents");
                            a.initMouseEvent(
                              "click",
                              !0,
                              !0,
                              d,
                              1,
                              h.screenX,
                              h.screenY,
                              h.clientX,
                              h.clientY,
                              !1,
                              !1,
                              !1,
                              !1,
                              0,
                              null
                            ),
                              r.target.dispatchEvent(a);
                          }
                        }
                      })),
                    (ey.isDragging = ey.isGesturing = ey.isPressed = !1),
                    k && c && !ee && eh.restart(!0),
                    B && c && B(ey),
                    Y && Y(ey, p);
                }
              }),
              _onGestureStart = function (r) {
                return (
                  r.touches &&
                  r.touches.length > 1 &&
                  (ey.isGesturing = !0) &&
                  et(r, ey.isDragging)
                );
              },
              _onGestureEnd = function () {
                return (ey.isGesturing = !1), er(ey);
              },
              onScroll = function (r) {
                if (!_ignoreCheck(r)) {
                  var a = eT(),
                    c = eb();
                  onDelta((a - ew) * ea, (c - eP) * ea, 1),
                    (ew = a),
                    (eP = c),
                    k && eh.restart(!0);
                }
              },
              _onWheel = function (r) {
                if (!_ignoreCheck(r)) {
                  (r = _getEvent(r, M)), en && (e_ = !0);
                  var a =
                    (1 === r.deltaMode
                      ? P
                      : 2 === r.deltaMode
                      ? d.innerHeight
                      : 1) * F;
                  onDelta(r.deltaX * a, r.deltaY * a, 0),
                    k && !ee && eh.restart(!0);
                }
              },
              _onMove = function (r) {
                if (!_ignoreCheck(r)) {
                  var a = r.clientX,
                    c = r.clientY,
                    u = a - ey.x,
                    p = c - ey.y;
                  (ey.x = a),
                    (ey.y = c),
                    (eg = !0),
                    k && eh.restart(!0),
                    (u || p) && onTouchOrPointerDelta(u, p);
                }
              },
              _onHover = function (r) {
                (ey.event = r), Z(ey);
              },
              _onHoverEnd = function (r) {
                (ey.event = r), $(ey);
              },
              _onClick = function (r) {
                return _ignoreCheck(r) || (_getEvent(r, M) && es(ey));
              };
            (eh = ey._dc =
              u
                .delayedCall(E || 0.25, function () {
                  ey._vx.reset(), ey._vy.reset(), eh.pause(), k && k(ey);
                })
                .pause()),
              (ey.deltaX = ey.deltaY = 0),
              (ey._vx = _getVelocityProp(0, 50, !0)),
              (ey._vy = _getVelocityProp(0, 50, !0)),
              (ey.scrollX = eT),
              (ey.scrollY = eb),
              (ey.isDragging = ey.isGesturing = ey.isPressed = !1),
              T(this),
              (ey.enable = function (r) {
                return (
                  !ey.isEnabled &&
                    (_addListener(eO ? eM : b, "scroll", _onScroll),
                    y.indexOf("scroll") >= 0 &&
                      _addListener(eO ? eM : b, "scroll", onScroll, M, el),
                    y.indexOf("wheel") >= 0 &&
                      _addListener(b, "wheel", _onWheel, M, el),
                    ((y.indexOf("touch") >= 0 && _) ||
                      y.indexOf("pointer") >= 0) &&
                      (_addListener(b, x[0], eE, M, el),
                      _addListener(eM, x[2], eR),
                      _addListener(eM, x[3], eR),
                      ec && _addListener(b, "click", clickCapture, !1, !0),
                      es && _addListener(b, "click", _onClick),
                      et && _addListener(eM, "gesturestart", _onGestureStart),
                      er && _addListener(eM, "gestureend", _onGestureEnd),
                      Z && _addListener(b, m + "enter", _onHover),
                      $ && _addListener(b, m + "leave", _onHoverEnd),
                      J && _addListener(b, m + "move", _onMove)),
                    (ey.isEnabled = !0),
                    r && r.type && eE(r),
                    ei && ei(ey)),
                  ey
                );
              }),
              (ey.disable = function () {
                ey.isEnabled &&
                  (w.filter(function (r) {
                    return r !== ey && _isViewport(r.target);
                  }).length ||
                    _removeListener(eO ? eM : b, "scroll", _onScroll),
                  ey.isPressed &&
                    (ey._vx.reset(),
                    ey._vy.reset(),
                    _removeListener(ee ? b : eM, x[1], _onDrag, !0)),
                  _removeListener(eO ? eM : b, "scroll", onScroll, el),
                  _removeListener(b, "wheel", _onWheel, el),
                  _removeListener(b, x[0], eE, el),
                  _removeListener(eM, x[2], eR),
                  _removeListener(eM, x[3], eR),
                  _removeListener(b, "click", clickCapture, !0),
                  _removeListener(b, "click", _onClick),
                  _removeListener(eM, "gesturestart", _onGestureStart),
                  _removeListener(eM, "gestureend", _onGestureEnd),
                  _removeListener(b, m + "enter", _onHover),
                  _removeListener(b, m + "leave", _onHoverEnd),
                  _removeListener(b, m + "move", _onMove),
                  (ey.isEnabled = ey.isPressed = ey.isDragging = !1),
                  eo && eo(ey));
              }),
              (ey.kill = ey.revert =
                function () {
                  ey.disable();
                  var r = w.indexOf(ey);
                  r >= 0 && w.splice(r, 1), S === ey && (S = 0);
                }),
              w.push(ey),
              ee && _isViewport(b) && (S = ey),
              ey.enable(D);
          }),
          _defineProperties(Observer.prototype, [
            {
              key: "velocityX",
              get: function () {
                return this._vx.getVelocity();
              },
            },
            {
              key: "velocityY",
              get: function () {
                return this._vy.getVelocity();
              },
            },
          ]),
          r && _defineProperties(Observer, r),
          Observer
        );
      })();
      (E.version = "3.12.3"),
        (E.create = function (r) {
          return new E(r);
        }),
        (E.register = _initCore),
        (E.getAll = function () {
          return w.slice();
        }),
        (E.getById = function (r) {
          return w.filter(function (a) {
            return a.vars.id === r;
          })[0];
        }),
        _getGSAP() && u.registerPlugin(E);
      /*!
       * ScrollTrigger 3.12.3
       * https://gsap.com
       *
       * @license Copyright 2008-2023, GreenSock. All rights reserved.
       * Subject to the terms at https://gsap.com/standard-license or for
       * Club GSAP members, the agreement issued with that membership.
       * @author: Jack Doyle, jack@greensock.com
       */ var R,
        F,
        D,
        z,
        B,
        N,
        I,
        Y,
        W,
        X,
        H,
        V,
        j,
        G,
        U,
        q,
        K,
        Z,
        $,
        J,
        Q,
        ee,
        et,
        er,
        en,
        ei,
        eo,
        es,
        ea,
        el,
        ec,
        eu,
        ep,
        ed,
        eh,
        ef,
        eg,
        e_,
        em = 1,
        ev = Date.now,
        ey = ev(),
        eS = 0,
        ex = 0,
        _parseClamp = function (r, a, c) {
          var u =
            _isString(r) &&
            ("clamp(" === r.substr(0, 6) || r.indexOf("max") > -1);
          return (c["_" + a + "Clamp"] = u), u ? r.substr(6, r.length - 7) : r;
        },
        _keepClamp = function (r, a) {
          return a && (!_isString(r) || "clamp(" !== r.substr(0, 6))
            ? "clamp(" + r + ")"
            : r;
        },
        _pointerDownHandler = function () {
          return (G = 1);
        },
        _pointerUpHandler = function () {
          return (G = 0);
        },
        _passThrough = function (r) {
          return r;
        },
        _round = function (r) {
          return Math.round(1e5 * r) / 1e5 || 0;
        },
        _windowExists = function () {
          return !0;
        },
        ScrollTrigger_getGSAP = function () {
          return (
            R || (_windowExists() && (R = window.gsap) && R.registerPlugin && R)
          );
        },
        ScrollTrigger_isViewport = function (r) {
          return !!~I.indexOf(r);
        },
        _getViewportDimension = function (r) {
          return (
            ("Height" === r ? ec : D["inner" + r]) ||
            B["client" + r] ||
            N["client" + r]
          );
        },
        _getBoundsFunc = function (r) {
          return (
            _getProxyProp(r, "getBoundingClientRect") ||
            (ScrollTrigger_isViewport(r)
              ? function () {
                  return (eK.width = D.innerWidth), (eK.height = ec), eK;
                }
              : function () {
                  return _getBounds(r);
                })
          );
        },
        _getSizeFunc = function (r, a, c) {
          var u = c.d,
            p = c.d2,
            d = c.a;
          return (d = _getProxyProp(r, "getBoundingClientRect"))
            ? function () {
                return d()[u];
              }
            : function () {
                return (a ? _getViewportDimension(p) : r["client" + p]) || 0;
              };
        },
        _maxScroll = function (r, a) {
          var c = a.s,
            u = a.d2,
            p = a.d,
            d = a.a;
          return Math.max(
            0,
            (d = _getProxyProp(r, (c = "scroll" + u)))
              ? d() - _getBoundsFunc(r)()[p]
              : ScrollTrigger_isViewport(r)
              ? (B[c] || N[c]) - _getViewportDimension(u)
              : r[c] - r["offset" + u]
          );
        },
        _iterateAutoRefresh = function (r, a) {
          for (var c = 0; c < $.length; c += 3)
            (!a || ~a.indexOf($[c + 1])) && r($[c], $[c + 1], $[c + 2]);
        },
        _isString = function (r) {
          return "string" == typeof r;
        },
        _isFunction = function (r) {
          return "function" == typeof r;
        },
        _isNumber = function (r) {
          return "number" == typeof r;
        },
        _isObject = function (r) {
          return "object" == typeof r;
        },
        _endAnimation = function (r, a, c) {
          return r && r.progress(a ? 0 : 1) && c && r.pause();
        },
        _callback = function (r, a) {
          if (r.enabled) {
            var c = r._ctx
              ? r._ctx.add(function () {
                  return a(r);
                })
              : a(r);
            c && c.totalTime && (r.callbackAnimation = c);
          }
        },
        eT = Math.abs,
        eb = "left",
        ew = "right",
        eP = "bottom",
        eC = "width",
        eO = "height",
        eM = "Right",
        ek = "Left",
        eA = "Bottom",
        eL = "padding",
        eE = "margin",
        eR = "Width",
        eF = "Height",
        _getComputedStyle = function (r) {
          return D.getComputedStyle(r);
        },
        _makePositionable = function (r) {
          var a = _getComputedStyle(r).position;
          r.style.position = "absolute" === a || "fixed" === a ? a : "relative";
        },
        _setDefaults = function (r, a) {
          for (var c in a) c in r || (r[c] = a[c]);
          return r;
        },
        _getBounds = function (r, a) {
          var c =
              a &&
              "matrix(1, 0, 0, 1, 0, 0)" !== _getComputedStyle(r)[U] &&
              R.to(r, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0,
              }).progress(1),
            u = r.getBoundingClientRect();
          return c && c.progress(0).kill(), u;
        },
        _getSize = function (r, a) {
          var c = a.d2;
          return r["offset" + c] || r["client" + c] || 0;
        },
        _getLabelRatioArray = function (r) {
          var a,
            c = [],
            u = r.labels,
            p = r.duration();
          for (a in u) c.push(u[a] / p);
          return c;
        },
        _snapDirectional = function (r) {
          var a = R.utils.snap(r),
            c =
              Array.isArray(r) &&
              r.slice(0).sort(function (r, a) {
                return r - a;
              });
          return c
            ? function (r, u, p) {
                var d;
                if ((void 0 === p && (p = 0.001), !u)) return a(r);
                if (u > 0) {
                  for (r -= p, d = 0; d < c.length; d++)
                    if (c[d] >= r) return c[d];
                  return c[d - 1];
                }
                for (d = c.length, r += p; d--; ) if (c[d] <= r) return c[d];
                return c[0];
              }
            : function (c, u, p) {
                void 0 === p && (p = 0.001);
                var d = a(c);
                return !u || Math.abs(d - c) < p || d - c < 0 == u < 0
                  ? d
                  : a(u < 0 ? c - r : c + r);
              };
        },
        _multiListener = function (r, a, c, u) {
          return c.split(",").forEach(function (c) {
            return r(a, c, u);
          });
        },
        ScrollTrigger_addListener = function (r, a, c, u, p) {
          return r.addEventListener(a, c, { passive: !u, capture: !!p });
        },
        ScrollTrigger_removeListener = function (r, a, c, u) {
          return r.removeEventListener(a, c, !!u);
        },
        _wheelListener = function (r, a, c) {
          (c = c && c.wheelHandler) && (r(a, "wheel", c), r(a, "touchmove", c));
        },
        eD = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal",
        },
        ez = { toggleActions: "play", anticipatePin: 0 },
        eB = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
        _offsetToPx = function (r, a) {
          if (_isString(r)) {
            var c = r.indexOf("="),
              u = ~c ? +(r.charAt(c - 1) + 1) * parseFloat(r.substr(c + 1)) : 0;
            ~c &&
              (r.indexOf("%") > c && (u *= a / 100), (r = r.substr(0, c - 1))),
              (r =
                u +
                (r in eB
                  ? eB[r] * a
                  : ~r.indexOf("%")
                  ? (parseFloat(r) * a) / 100
                  : parseFloat(r) || 0));
          }
          return r;
        },
        _createMarker = function (r, a, c, u, p, d, h, f) {
          var g = p.startColor,
            _ = p.endColor,
            m = p.fontSize,
            v = p.indent,
            y = p.fontWeight,
            S = z.createElement("div"),
            x =
              ScrollTrigger_isViewport(c) ||
              "fixed" === _getProxyProp(c, "pinType"),
            T = -1 !== r.indexOf("scroller"),
            b = x ? N : c,
            w = -1 !== r.indexOf("start"),
            P = w ? g : _,
            C =
              "border-color:" +
              P +
              ";font-size:" +
              m +
              ";color:" +
              P +
              ";font-weight:" +
              y +
              ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return (
            (C += "position:" + ((T || f) && x ? "fixed;" : "absolute;")),
            (T || f || !x) &&
              (C += (u === L ? ew : eP) + ":" + (d + parseFloat(v)) + "px;"),
            h &&
              (C +=
                "box-sizing:border-box;text-align:left;width:" +
                h.offsetWidth +
                "px;"),
            (S._isStart = w),
            S.setAttribute(
              "class",
              "gsap-marker-" + r + (a ? " marker-" + a : "")
            ),
            (S.style.cssText = C),
            (S.innerText = a || 0 === a ? r + "-" + a : r),
            b.children[0] ? b.insertBefore(S, b.children[0]) : b.appendChild(S),
            (S._offset = S["offset" + u.op.d2]),
            _positionMarker(S, 0, u, w),
            S
          );
        },
        _positionMarker = function (r, a, c, u) {
          var p = { display: "block" },
            d = c[u ? "os2" : "p2"],
            h = c[u ? "p2" : "os2"];
          (r._isFlipped = u),
            (p[c.a + "Percent"] = u ? -100 : 0),
            (p[c.a] = u ? "1px" : 0),
            (p["border" + d + eR] = 1),
            (p["border" + h + eR] = 0),
            (p[c.p] = a + "px"),
            R.set(r, p);
        },
        eN = [],
        eI = {},
        _sync = function () {
          return (
            ev() - eS > 34 && (eh || (eh = requestAnimationFrame(_updateAll)))
          );
        },
        ScrollTrigger_onScroll = function () {
          (et && et.isPressed && !(et.startX > N.clientWidth)) ||
            (P.cache++,
            et ? eh || (eh = requestAnimationFrame(_updateAll)) : _updateAll(),
            eS || _dispatch("scrollStart"),
            (eS = ev()));
        },
        _setBaseDimensions = function () {
          (ei = D.innerWidth), (en = D.innerHeight);
        },
        _onResize = function () {
          P.cache++,
            !(
              !j &&
              !ee &&
              !z.fullscreenElement &&
              !z.webkitFullscreenElement &&
              (!er ||
                ei !== D.innerWidth ||
                Math.abs(D.innerHeight - en) > 0.25 * D.innerHeight)
            ) || Y.restart(!0);
        },
        eY = {},
        eW = [],
        _softRefresh = function _softRefresh() {
          return (
            ScrollTrigger_removeListener(e$, "scrollEnd", _softRefresh) ||
            _refreshAll(!0)
          );
        },
        _dispatch = function (r) {
          return (
            (eY[r] &&
              eY[r].map(function (r) {
                return r();
              })) ||
            eW
          );
        },
        eX = [],
        _revertRecorded = function (r) {
          for (var a = 0; a < eX.length; a += 5)
            (!r || (eX[a + 4] && eX[a + 4].query === r)) &&
              ((eX[a].style.cssText = eX[a + 1]),
              eX[a].getBBox && eX[a].setAttribute("transform", eX[a + 2] || ""),
              (eX[a + 3].uncache = 1));
        },
        _revertAll = function (r, a) {
          var c;
          for (q = 0; q < eN.length; q++)
            (c = eN[q]) &&
              (!a || c._ctx === a) &&
              (r ? c.kill(1) : c.revert(!0, !0));
          (eu = !0), a && _revertRecorded(a), a || _dispatch("revert");
        },
        _clearScrollMemory = function (r, a) {
          P.cache++,
            (a || !ef) &&
              P.forEach(function (r) {
                return _isFunction(r) && r.cacheID++ && (r.rec = 0);
              }),
            _isString(r) && (D.history.scrollRestoration = ea = r);
        },
        eH = 0,
        _queueRefreshAll = function () {
          if (eg !== eH) {
            var r = (eg = eH);
            requestAnimationFrame(function () {
              return r === eH && _refreshAll(!0);
            });
          }
        },
        _refresh100vh = function () {
          N.appendChild(el),
            (ec = (!et && el.offsetHeight) || D.innerHeight),
            N.removeChild(el);
        },
        _hideAllMarkers = function (r) {
          return W(
            ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
          ).forEach(function (a) {
            return (a.style.display = r ? "none" : "block");
          });
        },
        _refreshAll = function (r, a) {
          if (eS && !r) {
            ScrollTrigger_addListener(e$, "scrollEnd", _softRefresh);
            return;
          }
          _refresh100vh(),
            (ef = e$.isRefreshing = !0),
            P.forEach(function (r) {
              return _isFunction(r) && ++r.cacheID && (r.rec = r());
            });
          var c = _dispatch("refreshInit");
          J && e$.sort(),
            a || _revertAll(),
            P.forEach(function (r) {
              _isFunction(r) &&
                (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
            }),
            eN.slice(0).forEach(function (r) {
              return r.refresh();
            }),
            (eu = !1),
            eN.forEach(function (r) {
              if (r._subPinOffset && r.pin) {
                var a = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
                  c = r.pin[a];
                r.revert(!0, 1), r.adjustPinSpacing(r.pin[a] - c), r.refresh();
              }
            }),
            (ep = 1),
            _hideAllMarkers(!0),
            eN.forEach(function (r) {
              var a = _maxScroll(r.scroller, r._dir),
                c = "max" === r.vars.end || (r._endClamp && r.end > a),
                u = r._startClamp && r.start >= a;
              (c || u) &&
                r.setPositions(
                  u ? a - 1 : r.start,
                  c ? Math.max(u ? a : r.start + 1, a) : r.end,
                  !0
                );
            }),
            _hideAllMarkers(!1),
            (ep = 0),
            c.forEach(function (r) {
              return r && r.render && r.render(-1);
            }),
            P.forEach(function (r) {
              _isFunction(r) &&
                (r.smooth &&
                  requestAnimationFrame(function () {
                    return (r.target.style.scrollBehavior = "smooth");
                  }),
                r.rec && r(r.rec));
            }),
            _clearScrollMemory(ea, 1),
            Y.pause(),
            eH++,
            (ef = 2),
            _updateAll(2),
            eN.forEach(function (r) {
              return _isFunction(r.vars.onRefresh) && r.vars.onRefresh(r);
            }),
            (ef = e$.isRefreshing = !1),
            _dispatch("refresh");
        },
        eV = 0,
        ej = 1,
        _updateAll = function (r) {
          if (2 === r || (!ef && !eu)) {
            (e$.isUpdating = !0), e_ && e_.update(0);
            var a = eN.length,
              c = ev(),
              u = c - ey >= 50,
              p = a && eN[0].scroll();
            if (
              ((ej = eV > p ? -1 : 1),
              ef || (eV = p),
              u &&
                (eS && !G && c - eS > 200 && ((eS = 0), _dispatch("scrollEnd")),
                (H = ey),
                (ey = c)),
              ej < 0)
            ) {
              for (q = a; q-- > 0; ) eN[q] && eN[q].update(0, u);
              ej = 1;
            } else for (q = 0; q < a; q++) eN[q] && eN[q].update(0, u);
            e$.isUpdating = !1;
          }
          eh = 0;
        },
        eG = [
          eb,
          "top",
          eP,
          ew,
          eE + eA,
          eE + eM,
          eE + "Top",
          eE + ek,
          "display",
          "flexShrink",
          "float",
          "zIndex",
          "gridColumnStart",
          "gridColumnEnd",
          "gridRowStart",
          "gridRowEnd",
          "gridArea",
          "justifySelf",
          "alignSelf",
          "placeSelf",
          "order",
        ],
        eU = eG.concat([
          eC,
          eO,
          "boxSizing",
          "max" + eR,
          "max" + eF,
          "position",
          eE,
          eL,
          eL + "Top",
          eL + eM,
          eL + eA,
          eL + ek,
        ]),
        _swapPinOut = function (r, a, c) {
          _setState(c);
          var u = r._gsap;
          if (u.spacerIsNative) _setState(u.spacerState);
          else if (r._gsap.swappedIn) {
            var p = a.parentNode;
            p && (p.insertBefore(r, a), p.removeChild(a));
          }
          r._gsap.swappedIn = !1;
        },
        _swapPinIn = function (r, a, c, u) {
          if (!r._gsap.swappedIn) {
            for (var p, d = eG.length, h = a.style, f = r.style; d--; )
              h[(p = eG[d])] = c[p];
            (h.position = "absolute" === c.position ? "absolute" : "relative"),
              "inline" === c.display && (h.display = "inline-block"),
              (f[eP] = f[ew] = "auto"),
              (h.flexBasis = c.flexBasis || "auto"),
              (h.overflow = "visible"),
              (h.boxSizing = "border-box"),
              (h[eC] = _getSize(r, A) + "px"),
              (h[eO] = _getSize(r, L) + "px"),
              (h[eL] = f[eE] = f.top = f[eb] = "0"),
              _setState(u),
              (f[eC] = f["max" + eR] = c[eC]),
              (f[eO] = f["max" + eF] = c[eO]),
              (f[eL] = c[eL]),
              r.parentNode !== a &&
                (r.parentNode.insertBefore(a, r), a.appendChild(r)),
              (r._gsap.swappedIn = !0);
          }
        },
        eq = /([A-Z])/g,
        _setState = function (r) {
          if (r) {
            var a,
              c,
              u = r.t.style,
              p = r.length,
              d = 0;
            for ((r.t._gsap || R.core.getCache(r.t)).uncache = 1; d < p; d += 2)
              (c = r[d + 1]),
                (a = r[d]),
                c
                  ? (u[a] = c)
                  : u[a] &&
                    u.removeProperty(a.replace(eq, "-$1").toLowerCase());
          }
        },
        _getState = function (r) {
          for (var a = eU.length, c = r.style, u = [], p = 0; p < a; p++)
            u.push(eU[p], c[eU[p]]);
          return (u.t = r), u;
        },
        _copyState = function (r, a, c) {
          for (var u, p = [], d = r.length, h = c ? 8 : 0; h < d; h += 2)
            (u = r[h]), p.push(u, u in a ? a[u] : r[h + 1]);
          return (p.t = r.t), p;
        },
        eK = { left: 0, top: 0 },
        _parsePosition = function (r, a, c, u, p, d, h, f, g, _, m, v, y, S) {
          _isFunction(r) && (r = r(f)),
            _isString(r) &&
              "max" === r.substr(0, 3) &&
              (r =
                v +
                ("=" === r.charAt(4) ? _offsetToPx("0" + r.substr(3), c) : 0));
          var x,
            T,
            b,
            w = y ? y.time() : 0;
          if ((y && y.seek(0), isNaN(r) || (r = +r), _isNumber(r)))
            y &&
              (r = R.utils.mapRange(
                y.scrollTrigger.start,
                y.scrollTrigger.end,
                0,
                v,
                r
              )),
              h && _positionMarker(h, c, u, !0);
          else {
            _isFunction(a) && (a = a(f));
            var P,
              C,
              O,
              M,
              k = (r || "0").split(" ");
            (P = _getBounds((b = _getTarget(a, f) || N)) || {}).left ||
              P.top ||
              "none" !== _getComputedStyle(b).display ||
              ((M = b.style.display),
              (b.style.display = "block"),
              (P = _getBounds(b)),
              M ? (b.style.display = M) : b.style.removeProperty("display")),
              (C = _offsetToPx(k[0], P[u.d])),
              (O = _offsetToPx(k[1] || "0", c)),
              (r = P[u.p] - g[u.p] - _ + C + p - O),
              h &&
                _positionMarker(h, O, u, c - O < 20 || (h._isStart && O > 20)),
              (c -= c - O);
          }
          if ((S && ((f[S] = r || -0.001), r < 0 && (r = 0)), d)) {
            var A = r + c,
              L = d._isStart;
            (x = "scroll" + u.d2),
              _positionMarker(
                d,
                A,
                u,
                (L && A > 20) ||
                  (!L && (m ? Math.max(N[x], B[x]) : d.parentNode[x]) <= A + 1)
              ),
              m &&
                ((g = _getBounds(h)),
                m && (d.style[u.op.p] = g[u.op.p] - u.op.m - d._offset + "px"));
          }
          return (
            y &&
              b &&
              ((x = _getBounds(b)),
              y.seek(v),
              (T = _getBounds(b)),
              (y._caScrollDist = x[u.p] - T[u.p]),
              (r = (r / y._caScrollDist) * v)),
            y && y.seek(w),
            y ? r : Math.round(r)
          );
        },
        eZ = /(webkit|moz|length|cssText|inset)/i,
        _reparent = function (r, a, c, u) {
          if (r.parentNode !== a) {
            var p,
              d,
              h = r.style;
            if (a === N) {
              for (p in ((r._stOrig = h.cssText), (d = _getComputedStyle(r))))
                +p ||
                  eZ.test(p) ||
                  !d[p] ||
                  "string" != typeof h[p] ||
                  "0" === p ||
                  (h[p] = d[p]);
              (h.top = c), (h.left = u);
            } else h.cssText = r._stOrig;
            (R.core.getCache(r).uncache = 1), a.appendChild(r);
          }
        },
        _interruptionTracker = function (r, a, c) {
          var u = a,
            p = u;
          return function (a) {
            var d = Math.round(r());
            return (
              d !== u &&
                d !== p &&
                Math.abs(d - u) > 3 &&
                Math.abs(d - p) > 3 &&
                ((a = d), c && c()),
              (p = u),
              (u = a),
              a
            );
          };
        },
        _shiftMarker = function (r, a, c) {
          var u = {};
          (u[a.p] = "+=" + c), R.set(r, u);
        },
        _getTweenCreator = function (r, a) {
          var c = _getScrollFunc(r, a),
            u = "_scroll" + a.p2,
            getTween = function getTween(a, p, d, h, f) {
              var g = getTween.tween,
                _ = p.onComplete,
                m = {};
              d = d || c();
              var v = _interruptionTracker(c, d, function () {
                g.kill(), (getTween.tween = 0);
              });
              return (
                (f = (h && f) || 0),
                (h = h || a - d),
                g && g.kill(),
                (p[u] = a),
                (p.modifiers = m),
                (m[u] = function () {
                  return v(d + h * g.ratio + f * g.ratio * g.ratio);
                }),
                (p.onUpdate = function () {
                  P.cache++, getTween.tween && _updateAll();
                }),
                (p.onComplete = function () {
                  (getTween.tween = 0), _ && _.call(g);
                }),
                (g = getTween.tween = R.to(r, p))
              );
            };
          return (
            (r[u] = c),
            (c.wheelHandler = function () {
              return (
                getTween.tween && getTween.tween.kill() && (getTween.tween = 0)
              );
            }),
            ScrollTrigger_addListener(r, "wheel", c.wheelHandler),
            e$.isTouch &&
              ScrollTrigger_addListener(r, "touchmove", c.wheelHandler),
            getTween
          );
        },
        e$ = (function () {
          function ScrollTrigger(r, a) {
            F ||
              ScrollTrigger.register(R) ||
              console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
              es(this),
              this.init(r, a);
          }
          return (
            (ScrollTrigger.prototype.init = function (r, a) {
              if (
                ((this.progress = this.start = 0),
                this.vars && this.kill(!0, !0),
                !ex)
              ) {
                this.update = this.refresh = this.kill = _passThrough;
                return;
              }
              var c,
                u,
                p,
                d,
                h,
                f,
                g,
                _,
                m,
                v,
                y,
                S,
                x,
                T,
                b,
                w,
                O,
                M,
                k,
                E,
                F,
                I,
                Y,
                V,
                U,
                K,
                Z,
                $,
                ee,
                et,
                er,
                en,
                ei,
                eo,
                es,
                ea,
                el,
                ec,
                eu,
                eh,
                eg,
                ey = (r = _setDefaults(
                  _isString(r) || _isNumber(r) || r.nodeType
                    ? { trigger: r }
                    : r,
                  ez
                )),
                eb = ey.onUpdate,
                ew = ey.toggleClass,
                eP = ey.id,
                eB = ey.onToggle,
                eY = ey.onRefresh,
                eW = ey.scrub,
                eX = ey.trigger,
                eH = ey.pin,
                eV = ey.pinSpacing,
                eG = ey.invalidateOnRefresh,
                eU = ey.anticipatePin,
                eq = ey.onScrubComplete,
                eZ = ey.onSnapComplete,
                e$ = ey.once,
                eJ = ey.snap,
                eQ = ey.pinReparent,
                e0 = ey.pinSpacer,
                e1 = ey.containerAnimation,
                e2 = ey.fastScrollEnd,
                e3 = ey.preventOverlaps,
                e5 =
                  r.horizontal || (r.containerAnimation && !1 !== r.horizontal)
                    ? A
                    : L,
                e6 = !eW && 0 !== eW,
                e8 = _getTarget(r.scroller || D),
                e4 = R.core.getCache(e8),
                e9 = ScrollTrigger_isViewport(e8),
                e7 =
                  ("pinType" in r
                    ? r.pinType
                    : _getProxyProp(e8, "pinType") || (e9 && "fixed")) ===
                  "fixed",
                te = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
                tt = e6 && r.toggleActions.split(" "),
                tr = "markers" in r ? r.markers : ez.markers,
                tn = e9
                  ? 0
                  : parseFloat(_getComputedStyle(e8)["border" + e5.p2 + eR]) ||
                    0,
                ti = this,
                to =
                  r.onRefreshInit &&
                  function () {
                    return r.onRefreshInit(ti);
                  },
                ts = _getSizeFunc(e8, e9, e5),
                ta =
                  !e9 || ~C.indexOf(e8)
                    ? _getBoundsFunc(e8)
                    : function () {
                        return eK;
                      },
                tl = 0,
                tc = 0,
                tu = 0,
                tp = _getScrollFunc(e8, e5);
              if (
                ((ti._startClamp = ti._endClamp = !1),
                (ti._dir = e5),
                (eU *= 45),
                (ti.scroller = e8),
                (ti.scroll = e1 ? e1.time.bind(e1) : tp),
                (f = tp()),
                (ti.vars = r),
                (a = a || r.animation),
                "refreshPriority" in r &&
                  ((J = 1), -9999 === r.refreshPriority && (e_ = ti)),
                (e4.tweenScroll = e4.tweenScroll || {
                  top: _getTweenCreator(e8, L),
                  left: _getTweenCreator(e8, A),
                }),
                (ti.tweenTo = p = e4.tweenScroll[e5.p]),
                (ti.scrubDuration = function (r) {
                  (es = _isNumber(r) && r)
                    ? eo
                      ? eo.duration(r)
                      : (eo = R.to(a, {
                          ease: "expo",
                          totalProgress: "+=0",
                          duration: es,
                          paused: !0,
                          onComplete: function () {
                            return eq && eq(ti);
                          },
                        }))
                    : (eo && eo.progress(1).kill(), (eo = 0));
                }),
                a &&
                  ((a.vars.lazy = !1),
                  (a._initted && !ti.isReverted) ||
                    (!1 !== a.vars.immediateRender &&
                      !1 !== r.immediateRender &&
                      a.duration() &&
                      a.render(0, !0, !0)),
                  (ti.animation = a.pause()),
                  (a.scrollTrigger = ti),
                  ti.scrubDuration(eW),
                  (en = 0),
                  eP || (eP = a.vars.id)),
                eJ &&
                  ((!_isObject(eJ) || eJ.push) && (eJ = { snapTo: eJ }),
                  "scrollBehavior" in N.style &&
                    R.set(e9 ? [N, B] : e8, { scrollBehavior: "auto" }),
                  P.forEach(function (r) {
                    return (
                      _isFunction(r) &&
                      r.target === (e9 ? z.scrollingElement || B : e8) &&
                      (r.smooth = !1)
                    );
                  }),
                  (h = _isFunction(eJ.snapTo)
                    ? eJ.snapTo
                    : "labels" === eJ.snapTo
                    ? ((c = a),
                      function (r) {
                        return R.utils.snap(_getLabelRatioArray(c), r);
                      })
                    : "labelsDirectional" === eJ.snapTo
                    ? ((u = a),
                      function (r, a) {
                        return _snapDirectional(_getLabelRatioArray(u))(
                          r,
                          a.direction
                        );
                      })
                    : !1 !== eJ.directional
                    ? function (r, a) {
                        return _snapDirectional(eJ.snapTo)(
                          r,
                          ev() - tc < 500 ? 0 : a.direction
                        );
                      }
                    : R.utils.snap(eJ.snapTo)),
                  (ea = _isObject((ea = eJ.duration || { min: 0.1, max: 2 }))
                    ? X(ea.min, ea.max)
                    : X(ea, ea)),
                  (el = R.delayedCall(eJ.delay || es / 2 || 0.1, function () {
                    var r = tp(),
                      c = ev() - tc < 500,
                      u = p.tween;
                    if (
                      (c || 10 > Math.abs(ti.getVelocity())) &&
                      !u &&
                      !G &&
                      tl !== r
                    ) {
                      var d = (r - _) / w,
                        f = a && !e6 ? a.totalProgress() : d,
                        g = c ? 0 : ((f - ei) / (ev() - H)) * 1e3 || 0,
                        v = R.utils.clamp(-d, 1 - d, (eT(g / 2) * g) / 0.185),
                        y = d + (!1 === eJ.inertia ? 0 : v),
                        S = X(0, 1, h(y, ti)),
                        x = Math.round(_ + S * w),
                        T = eJ,
                        b = T.onStart,
                        P = T.onInterrupt,
                        C = T.onComplete;
                      if (r <= m && r >= _ && x !== r) {
                        if (u && !u._initted && u.data <= eT(x - r)) return;
                        !1 === eJ.inertia && (v = S - d),
                          p(
                            x,
                            {
                              duration: ea(
                                eT(
                                  (0.185 * Math.max(eT(y - f), eT(S - f))) /
                                    g /
                                    0.05 || 0
                                )
                              ),
                              ease: eJ.ease || "power3",
                              data: eT(x - r),
                              onInterrupt: function () {
                                return el.restart(!0) && P && P(ti);
                              },
                              onComplete: function () {
                                ti.update(),
                                  (tl = tp()),
                                  eo && a && a.progress(S),
                                  (en = ei =
                                    a && !e6 ? a.totalProgress() : ti.progress),
                                  eZ && eZ(ti),
                                  C && C(ti);
                              },
                            },
                            r,
                            v * w,
                            x - r - v * w
                          ),
                          b && b(ti, p.tween);
                      }
                    } else ti.isActive && tl !== r && el.restart(!0);
                  }).pause())),
                eP && (eI[eP] = ti),
                (eg =
                  (eX = ti.trigger = _getTarget(eX || (!0 !== eH && eH))) &&
                  eX._gsap &&
                  eX._gsap.stRevert) && (eg = eg(ti)),
                (eH = !0 === eH ? eX : _getTarget(eH)),
                _isString(ew) && (ew = { targets: eX, className: ew }),
                eH &&
                  (!1 === eV ||
                    eV === eE ||
                    (eV =
                      (!!eV ||
                        !eH.parentNode ||
                        !eH.parentNode.style ||
                        "flex" !== _getComputedStyle(eH.parentNode).display) &&
                      eL),
                  (ti.pin = eH),
                  (d = R.core.getCache(eH)).spacer
                    ? (O = d.pinState)
                    : (e0 &&
                        ((e0 = _getTarget(e0)) &&
                          !e0.nodeType &&
                          (e0 = e0.current || e0.nativeElement),
                        (d.spacerIsNative = !!e0),
                        e0 && (d.spacerState = _getState(e0))),
                      (d.spacer = E = e0 || z.createElement("div")),
                      E.classList.add("pin-spacer"),
                      eP && E.classList.add("pin-spacer-" + eP),
                      (d.pinState = O = _getState(eH))),
                  !1 !== r.force3D && R.set(eH, { force3D: !0 }),
                  (ti.spacer = E = d.spacer),
                  (K = (er = _getComputedStyle(eH))[eV + e5.os2]),
                  (I = R.getProperty(eH)),
                  (Y = R.quickSetter(eH, e5.a, "px")),
                  _swapPinIn(eH, E, er),
                  (k = _getState(eH))),
                tr)
              ) {
                (T = _isObject(tr) ? _setDefaults(tr, eD) : eD),
                  (S = _createMarker("scroller-start", eP, e8, e5, T, 0)),
                  (x = _createMarker("scroller-end", eP, e8, e5, T, 0, S)),
                  (F = S["offset" + e5.op.d2]);
                var td = _getTarget(_getProxyProp(e8, "content") || e8);
                (v = this.markerStart =
                  _createMarker("start", eP, td, e5, T, F, 0, e1)),
                  (y = this.markerEnd =
                    _createMarker("end", eP, td, e5, T, F, 0, e1)),
                  e1 && (eh = R.quickSetter([v, y], e5.a, "px")),
                  e7 ||
                    (C.length && !0 === _getProxyProp(e8, "fixedMarkers")) ||
                    (_makePositionable(e9 ? N : e8),
                    R.set([S, x], { force3D: !0 }),
                    ($ = R.quickSetter(S, e5.a, "px")),
                    (et = R.quickSetter(x, e5.a, "px")));
              }
              if (e1) {
                var th = e1.vars.onUpdate,
                  tf = e1.vars.onUpdateParams;
                e1.eventCallback("onUpdate", function () {
                  ti.update(0, 0, 1), th && th.apply(e1, tf || []);
                });
              }
              if (
                ((ti.previous = function () {
                  return eN[eN.indexOf(ti) - 1];
                }),
                (ti.next = function () {
                  return eN[eN.indexOf(ti) + 1];
                }),
                (ti.revert = function (r, c) {
                  if (!c) return ti.kill(!0);
                  var u = !1 !== r || !ti.enabled,
                    p = j;
                  u !== ti.isReverted &&
                    (u &&
                      ((ec = Math.max(tp(), ti.scroll.rec || 0)),
                      (tu = ti.progress),
                      (eu = a && a.progress())),
                    v &&
                      [v, y, S, x].forEach(function (r) {
                        return (r.style.display = u ? "none" : "block");
                      }),
                    u && ((j = ti), ti.update(u)),
                    !eH ||
                      (eQ && ti.isActive) ||
                      (u
                        ? _swapPinOut(eH, E, O)
                        : _swapPinIn(eH, E, _getComputedStyle(eH), Z)),
                    u || ti.update(u),
                    (j = p),
                    (ti.isReverted = u));
                }),
                (ti.refresh = function (c, u, d, h) {
                  if ((!j && ti.enabled) || u) {
                    if (eH && c && eS) {
                      ScrollTrigger_addListener(
                        ScrollTrigger,
                        "scrollEnd",
                        _softRefresh
                      );
                      return;
                    }
                    !ef && to && to(ti),
                      (j = ti),
                      p.tween && !d && (p.tween.kill(), (p.tween = 0)),
                      eo && eo.pause(),
                      eG && a && a.revert({ kill: !1 }).invalidate(),
                      ti.isReverted || ti.revert(!0, !0),
                      (ti._subPinOffset = !1);
                    var T,
                      P,
                      C,
                      F,
                      D,
                      Y,
                      W,
                      X,
                      H,
                      G,
                      q,
                      K,
                      $,
                      J = ts(),
                      et = ta(),
                      er = e1 ? e1.duration() : _maxScroll(e8, e5),
                      en = w <= 0.01,
                      ei = 0,
                      es = h || 0,
                      ea = _isObject(d) ? d.end : r.end,
                      ed = r.endTrigger || eX,
                      eh = _isObject(d)
                        ? d.start
                        : r.start ||
                          (0 !== r.start && eX ? (eH ? "0 0" : "0 100%") : 0),
                      eg = (ti.pinnedContainer =
                        r.pinnedContainer && _getTarget(r.pinnedContainer, ti)),
                      e_ = (eX && Math.max(0, eN.indexOf(ti))) || 0,
                      em = e_;
                    for (
                      tr &&
                      _isObject(d) &&
                      ((K = R.getProperty(S, e5.p)),
                      ($ = R.getProperty(x, e5.p)));
                      em--;

                    )
                      (Y = eN[em]).end || Y.refresh(0, 1) || (j = ti),
                        (W = Y.pin) &&
                          (W === eX || W === eH || W === eg) &&
                          !Y.isReverted &&
                          (G || (G = []), G.unshift(Y), Y.revert(!0, !0)),
                        Y !== eN[em] && (e_--, em--);
                    for (
                      _isFunction(eh) && (eh = eh(ti)),
                        _ =
                          _parsePosition(
                            (eh = _parseClamp(eh, "start", ti)),
                            eX,
                            J,
                            e5,
                            tp(),
                            v,
                            S,
                            ti,
                            et,
                            tn,
                            e7,
                            er,
                            e1,
                            ti._startClamp && "_startClamp"
                          ) || (eH ? -0.001 : 0),
                        _isFunction(ea) && (ea = ea(ti)),
                        _isString(ea) &&
                          !ea.indexOf("+=") &&
                          (~ea.indexOf(" ")
                            ? (ea =
                                (_isString(eh) ? eh.split(" ")[0] : "") + ea)
                            : ((ei = _offsetToPx(ea.substr(2), J)),
                              (ea = _isString(eh)
                                ? eh
                                : (e1
                                    ? R.utils.mapRange(
                                        0,
                                        e1.duration(),
                                        e1.scrollTrigger.start,
                                        e1.scrollTrigger.end,
                                        _
                                      )
                                    : _) + ei),
                              (ed = eX))),
                        ea = _parseClamp(ea, "end", ti),
                        m =
                          Math.max(
                            _,
                            _parsePosition(
                              ea || (ed ? "100% 0" : er),
                              ed,
                              J,
                              e5,
                              tp() + ei,
                              y,
                              x,
                              ti,
                              et,
                              tn,
                              e7,
                              er,
                              e1,
                              ti._endClamp && "_endClamp"
                            )
                          ) || -0.001,
                        ei = 0,
                        em = e_;
                      em--;

                    )
                      (W = (Y = eN[em]).pin) &&
                        Y.start - Y._pinPush <= _ &&
                        !e1 &&
                        Y.end > 0 &&
                        ((T =
                          Y.end -
                          (ti._startClamp ? Math.max(0, Y.start) : Y.start)),
                        ((W === eX && Y.start - Y._pinPush < _) || W === eg) &&
                          isNaN(eh) &&
                          (ei += T * (1 - Y.progress)),
                        W === eH && (es += T));
                    if (
                      ((_ += ei),
                      (m += ei),
                      ti._startClamp && (ti._startClamp += ei),
                      ti._endClamp &&
                        !ef &&
                        ((ti._endClamp = m || -0.001),
                        (m = Math.min(m, _maxScroll(e8, e5)))),
                      (w = m - _ || ((_ -= 0.01) && 0.001)),
                      en &&
                        (tu = R.utils.clamp(0, 1, R.utils.normalize(_, m, ec))),
                      (ti._pinPush = es),
                      v &&
                        ei &&
                        (((T = {})[e5.a] = "+=" + ei),
                        eg && (T[e5.p] = "-=" + tp()),
                        R.set([v, y], T)),
                      eH && !(ep && ti.end >= _maxScroll(e8, e5)))
                    )
                      (T = _getComputedStyle(eH)),
                        (F = e5 === L),
                        (C = tp()),
                        (V = parseFloat(I(e5.a)) + es),
                        !er &&
                          m > 1 &&
                          ((q = {
                            style: (q = (e9 ? z.scrollingElement || B : e8)
                              .style),
                            value: q["overflow" + e5.a.toUpperCase()],
                          }),
                          e9 &&
                            "scroll" !==
                              _getComputedStyle(N)[
                                "overflow" + e5.a.toUpperCase()
                              ] &&
                            (q.style["overflow" + e5.a.toUpperCase()] =
                              "scroll")),
                        _swapPinIn(eH, E, T),
                        (k = _getState(eH)),
                        (P = _getBounds(eH, !0)),
                        (X = e7 && _getScrollFunc(e8, F ? A : L)()),
                        eV &&
                          (((Z = [eV + e5.os2, w + es + "px"]).t = E),
                          (em = eV === eL ? _getSize(eH, e5) + w + es : 0) &&
                            (Z.push(e5.d, em + "px"),
                            "auto" !== E.style.flexBasis &&
                              (E.style.flexBasis = em + "px")),
                          _setState(Z),
                          eg &&
                            eN.forEach(function (r) {
                              r.pin === eg &&
                                !1 !== r.vars.pinSpacing &&
                                (r._subPinOffset = !0);
                            }),
                          e7 && tp(ec)),
                        e7 &&
                          (((D = {
                            top: P.top + (F ? C - _ : X) + "px",
                            left: P.left + (F ? X : C - _) + "px",
                            boxSizing: "border-box",
                            position: "fixed",
                          })[eC] = D["max" + eR] =
                            Math.ceil(P.width) + "px"),
                          (D[eO] = D["max" + eF] = Math.ceil(P.height) + "px"),
                          (D[eE] =
                            D[eE + "Top"] =
                            D[eE + eM] =
                            D[eE + eA] =
                            D[eE + ek] =
                              "0"),
                          (D[eL] = T[eL]),
                          (D[eL + "Top"] = T[eL + "Top"]),
                          (D[eL + eM] = T[eL + eM]),
                          (D[eL + eA] = T[eL + eA]),
                          (D[eL + ek] = T[eL + ek]),
                          (M = _copyState(O, D, eQ)),
                          ef && tp(0)),
                        a
                          ? ((H = a._initted),
                            Q(1),
                            a.render(a.duration(), !0, !0),
                            (U = I(e5.a) - V + w + es),
                            (ee = Math.abs(w - U) > 1),
                            e7 && ee && M.splice(M.length - 2, 2),
                            a.render(0, !0, !0),
                            H || a.invalidate(!0),
                            a.parent || a.totalTime(a.totalTime()),
                            Q(0))
                          : (U = w),
                        q &&
                          (q.value
                            ? (q.style["overflow" + e5.a.toUpperCase()] =
                                q.value)
                            : q.style.removeProperty("overflow-" + e5.a));
                    else if (eX && tp() && !e1)
                      for (P = eX.parentNode; P && P !== N; )
                        P._pinOffset &&
                          ((_ -= P._pinOffset), (m -= P._pinOffset)),
                          (P = P.parentNode);
                    G &&
                      G.forEach(function (r) {
                        return r.revert(!1, !0);
                      }),
                      (ti.start = _),
                      (ti.end = m),
                      (f = g = ef ? ec : tp()),
                      e1 || ef || (f < ec && tp(ec), (ti.scroll.rec = 0)),
                      ti.revert(!1, !0),
                      (tc = ev()),
                      el && ((tl = -1), el.restart(!0)),
                      (j = 0),
                      a &&
                        e6 &&
                        (a._initted || eu) &&
                        a.progress() !== eu &&
                        a.progress(eu || 0, !0).render(a.time(), !0, !0),
                      (en || tu !== ti.progress || e1) &&
                        (a &&
                          !e6 &&
                          a.totalProgress(
                            e1 && _ < -0.001 && !tu
                              ? R.utils.normalize(_, m, 0)
                              : tu,
                            !0
                          ),
                        (ti.progress = en || (f - _) / w === tu ? 0 : tu)),
                      eH && eV && (E._pinOffset = Math.round(ti.progress * U)),
                      eo && eo.invalidate(),
                      isNaN(K) ||
                        ((K -= R.getProperty(S, e5.p)),
                        ($ -= R.getProperty(x, e5.p)),
                        _shiftMarker(S, e5, K),
                        _shiftMarker(v, e5, K - (h || 0)),
                        _shiftMarker(x, e5, $),
                        _shiftMarker(y, e5, $ - (h || 0))),
                      en && !ef && ti.update(),
                      !eY || ef || b || ((b = !0), eY(ti), (b = !1));
                  }
                }),
                (ti.getVelocity = function () {
                  return ((tp() - g) / (ev() - H)) * 1e3 || 0;
                }),
                (ti.endAnimation = function () {
                  _endAnimation(ti.callbackAnimation),
                    a &&
                      (eo
                        ? eo.progress(1)
                        : a.paused()
                        ? e6 || _endAnimation(a, ti.direction < 0, 1)
                        : _endAnimation(a, a.reversed()));
                }),
                (ti.labelToScroll = function (r) {
                  return (
                    (a &&
                      a.labels &&
                      (_ || ti.refresh() || _) +
                        (a.labels[r] / a.duration()) * w) ||
                    0
                  );
                }),
                (ti.getTrailing = function (r) {
                  var a = eN.indexOf(ti),
                    c =
                      ti.direction > 0
                        ? eN.slice(0, a).reverse()
                        : eN.slice(a + 1);
                  return (
                    _isString(r)
                      ? c.filter(function (a) {
                          return a.vars.preventOverlaps === r;
                        })
                      : c
                  ).filter(function (r) {
                    return ti.direction > 0 ? r.end <= _ : r.start >= m;
                  });
                }),
                (ti.update = function (r, c, u) {
                  if (!e1 || u || r) {
                    var d,
                      h,
                      v,
                      y,
                      x,
                      T,
                      b,
                      P = !0 === ef ? ec : ti.scroll(),
                      C = r ? 0 : (P - _) / w,
                      O = C < 0 ? 0 : C > 1 ? 1 : C || 0,
                      A = ti.progress;
                    if (
                      (c &&
                        ((g = f),
                        (f = e1 ? tp() : P),
                        eJ &&
                          ((ei = en), (en = a && !e6 ? a.totalProgress() : O))),
                      eU &&
                        !O &&
                        eH &&
                        !j &&
                        !em &&
                        eS &&
                        _ < P + ((P - g) / (ev() - H)) * eU &&
                        (O = 1e-4),
                      O !== A && ti.enabled)
                    ) {
                      if (
                        ((y =
                          (x =
                            (d = ti.isActive = !!O && O < 1) !=
                            (!!A && A < 1)) || !!O != !!A),
                        (ti.direction = O > A ? 1 : -1),
                        (ti.progress = O),
                        y &&
                          !j &&
                          ((h = O && !A ? 0 : 1 === O ? 1 : 1 === A ? 2 : 3),
                          e6 &&
                            ((v =
                              (!x && "none" !== tt[h + 1] && tt[h + 1]) ||
                              tt[h]),
                            (b =
                              a &&
                              ("complete" === v || "reset" === v || v in a)))),
                        e3 &&
                          (x || b) &&
                          (b || eW || !a) &&
                          (_isFunction(e3)
                            ? e3(ti)
                            : ti.getTrailing(e3).forEach(function (r) {
                                return r.endAnimation();
                              })),
                        !e6 &&
                          (!eo || j || em
                            ? a && a.totalProgress(O, !!(j && (tc || r)))
                            : (eo._dp._time - eo._start !== eo._time &&
                                eo.render(eo._dp._time - eo._start),
                              eo.resetTo
                                ? eo.resetTo(
                                    "totalProgress",
                                    O,
                                    a._tTime / a._tDur
                                  )
                                : ((eo.vars.totalProgress = O),
                                  eo.invalidate().restart()))),
                        eH)
                      ) {
                        if ((r && eV && (E.style[eV + e5.os2] = K), e7)) {
                          if (y) {
                            if (
                              ((T =
                                !r &&
                                O > A &&
                                m + 1 > P &&
                                P + 1 >= _maxScroll(e8, e5)),
                              eQ)
                            ) {
                              if (!r && (d || T)) {
                                var R = _getBounds(eH, !0),
                                  F = P - _;
                                _reparent(
                                  eH,
                                  N,
                                  R.top + (e5 === L ? F : 0) + "px",
                                  R.left + (e5 === L ? 0 : F) + "px"
                                );
                              } else _reparent(eH, E);
                            }
                            _setState(d || T ? M : k),
                              (ee && O < 1 && d) ||
                                Y(V + (1 !== O || T ? 0 : U));
                          }
                        } else Y(_round(V + U * O));
                      }
                      !eJ || p.tween || j || em || el.restart(!0),
                        ew &&
                          (x || (e$ && O && (O < 1 || !ed))) &&
                          W(ew.targets).forEach(function (r) {
                            return r.classList[d || e$ ? "add" : "remove"](
                              ew.className
                            );
                          }),
                        !eb || e6 || r || eb(ti),
                        y && !j
                          ? (e6 &&
                              (b &&
                                ("complete" === v
                                  ? a.pause().totalProgress(1)
                                  : "reset" === v
                                  ? a.restart(!0).pause()
                                  : "restart" === v
                                  ? a.restart(!0)
                                  : a[v]()),
                              eb && eb(ti)),
                            (x || !ed) &&
                              (eB && x && _callback(ti, eB),
                              te[h] && _callback(ti, te[h]),
                              e$ && (1 === O ? ti.kill(!1, 1) : (te[h] = 0)),
                              !x &&
                                te[(h = 1 === O ? 1 : 3)] &&
                                _callback(ti, te[h])),
                            e2 &&
                              !d &&
                              Math.abs(ti.getVelocity()) >
                                (_isNumber(e2) ? e2 : 2500) &&
                              (_endAnimation(ti.callbackAnimation),
                              eo
                                ? eo.progress(1)
                                : _endAnimation(
                                    a,
                                    "reverse" === v ? 1 : !O,
                                    1
                                  )))
                          : e6 && eb && !j && eb(ti);
                    }
                    if (et) {
                      var D = e1
                        ? (P / e1.duration()) * (e1._caScrollDist || 0)
                        : P;
                      $(D + (S._isFlipped ? 1 : 0)), et(D);
                    }
                    eh && eh((-P / e1.duration()) * (e1._caScrollDist || 0));
                  }
                }),
                (ti.enable = function (r, a) {
                  ti.enabled ||
                    ((ti.enabled = !0),
                    ScrollTrigger_addListener(e8, "resize", _onResize),
                    e9 ||
                      ScrollTrigger_addListener(
                        e8,
                        "scroll",
                        ScrollTrigger_onScroll
                      ),
                    to &&
                      ScrollTrigger_addListener(
                        ScrollTrigger,
                        "refreshInit",
                        to
                      ),
                    !1 !== r && ((ti.progress = tu = 0), (f = g = tl = tp())),
                    !1 !== a && ti.refresh());
                }),
                (ti.getTween = function (r) {
                  return r && p ? p.tween : eo;
                }),
                (ti.setPositions = function (r, a, c, u) {
                  if (e1) {
                    var p = e1.scrollTrigger,
                      d = e1.duration(),
                      h = p.end - p.start;
                    (r = p.start + (h * r) / d), (a = p.start + (h * a) / d);
                  }
                  ti.refresh(
                    !1,
                    !1,
                    {
                      start: _keepClamp(r, c && !!ti._startClamp),
                      end: _keepClamp(a, c && !!ti._endClamp),
                    },
                    u
                  ),
                    ti.update();
                }),
                (ti.adjustPinSpacing = function (r) {
                  if (Z && r) {
                    var a = Z.indexOf(e5.d) + 1;
                    (Z[a] = parseFloat(Z[a]) + r + "px"),
                      (Z[1] = parseFloat(Z[1]) + r + "px"),
                      _setState(Z);
                  }
                }),
                (ti.disable = function (r, a) {
                  if (
                    ti.enabled &&
                    (!1 !== r && ti.revert(!0, !0),
                    (ti.enabled = ti.isActive = !1),
                    a || (eo && eo.pause()),
                    (ec = 0),
                    d && (d.uncache = 1),
                    to &&
                      ScrollTrigger_removeListener(
                        ScrollTrigger,
                        "refreshInit",
                        to
                      ),
                    el &&
                      (el.pause(), p.tween && p.tween.kill() && (p.tween = 0)),
                    !e9)
                  ) {
                    for (var c = eN.length; c--; )
                      if (eN[c].scroller === e8 && eN[c] !== ti) return;
                    ScrollTrigger_removeListener(e8, "resize", _onResize),
                      e9 ||
                        ScrollTrigger_removeListener(
                          e8,
                          "scroll",
                          ScrollTrigger_onScroll
                        );
                  }
                }),
                (ti.kill = function (c, u) {
                  ti.disable(c, u), eo && !u && eo.kill(), eP && delete eI[eP];
                  var p = eN.indexOf(ti);
                  p >= 0 && eN.splice(p, 1),
                    p === q && ej > 0 && q--,
                    (p = 0),
                    eN.forEach(function (r) {
                      return r.scroller === ti.scroller && (p = 1);
                    }),
                    p || ef || (ti.scroll.rec = 0),
                    a &&
                      ((a.scrollTrigger = null),
                      c && a.revert({ kill: !1 }),
                      u || a.kill()),
                    v &&
                      [v, y, S, x].forEach(function (r) {
                        return r.parentNode && r.parentNode.removeChild(r);
                      }),
                    e_ === ti && (e_ = 0),
                    eH &&
                      (d && (d.uncache = 1),
                      (p = 0),
                      eN.forEach(function (r) {
                        return r.pin === eH && p++;
                      }),
                      p || (d.spacer = 0)),
                    r.onKill && r.onKill(ti);
                }),
                eN.push(ti),
                ti.enable(!1, !1),
                eg && eg(ti),
                a && a.add && !w)
              ) {
                var tg = ti.update;
                (ti.update = function () {
                  (ti.update = tg), _ || m || ti.refresh();
                }),
                  R.delayedCall(0.01, ti.update),
                  (w = 0.01),
                  (_ = m = 0);
              } else ti.refresh();
              eH && _queueRefreshAll();
            }),
            (ScrollTrigger.register = function (r) {
              return (
                F ||
                  ((R = r || ScrollTrigger_getGSAP()),
                  _windowExists() && window.document && ScrollTrigger.enable(),
                  (F = ex)),
                F
              );
            }),
            (ScrollTrigger.defaults = function (r) {
              if (r) for (var a in r) ez[a] = r[a];
              return ez;
            }),
            (ScrollTrigger.disable = function (r, a) {
              (ex = 0),
                eN.forEach(function (c) {
                  return c[a ? "kill" : "disable"](r);
                }),
                ScrollTrigger_removeListener(
                  D,
                  "wheel",
                  ScrollTrigger_onScroll
                ),
                ScrollTrigger_removeListener(
                  z,
                  "scroll",
                  ScrollTrigger_onScroll
                ),
                clearInterval(V),
                ScrollTrigger_removeListener(z, "touchcancel", _passThrough),
                ScrollTrigger_removeListener(N, "touchstart", _passThrough),
                _multiListener(
                  ScrollTrigger_removeListener,
                  z,
                  "pointerdown,touchstart,mousedown",
                  _pointerDownHandler
                ),
                _multiListener(
                  ScrollTrigger_removeListener,
                  z,
                  "pointerup,touchend,mouseup",
                  _pointerUpHandler
                ),
                Y.kill(),
                _iterateAutoRefresh(ScrollTrigger_removeListener);
              for (var c = 0; c < P.length; c += 3)
                _wheelListener(ScrollTrigger_removeListener, P[c], P[c + 1]),
                  _wheelListener(ScrollTrigger_removeListener, P[c], P[c + 2]);
            }),
            (ScrollTrigger.enable = function () {
              if (
                ((D = window),
                (B = (z = document).documentElement),
                (N = z.body),
                R &&
                  ((W = R.utils.toArray),
                  (X = R.utils.clamp),
                  (es = R.core.context || _passThrough),
                  (Q = R.core.suppressOverwrites || _passThrough),
                  (ea = D.history.scrollRestoration || "auto"),
                  (eV = D.pageYOffset),
                  R.core.globals("ScrollTrigger", ScrollTrigger),
                  N))
              ) {
                (ex = 1),
                  ((el = document.createElement("div")).style.height = "100vh"),
                  (el.style.position = "absolute"),
                  _refresh100vh(),
                  (function _rafBugFix() {
                    return ex && requestAnimationFrame(_rafBugFix);
                  })(),
                  E.register(R),
                  (ScrollTrigger.isTouch = E.isTouch),
                  (eo =
                    E.isTouch &&
                    /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                  ScrollTrigger_addListener(D, "wheel", ScrollTrigger_onScroll),
                  (I = [D, z, B, N]),
                  R.matchMedia
                    ? ((ScrollTrigger.matchMedia = function (r) {
                        var a,
                          c = R.matchMedia();
                        for (a in r) c.add(a, r[a]);
                        return c;
                      }),
                      R.addEventListener("matchMediaInit", function () {
                        return _revertAll();
                      }),
                      R.addEventListener("matchMediaRevert", function () {
                        return _revertRecorded();
                      }),
                      R.addEventListener("matchMedia", function () {
                        _refreshAll(0, 1), _dispatch("matchMedia");
                      }),
                      R.matchMedia("(orientation: portrait)", function () {
                        return _setBaseDimensions(), _setBaseDimensions;
                      }))
                    : console.warn("Requires GSAP 3.11.0 or later"),
                  _setBaseDimensions(),
                  ScrollTrigger_addListener(
                    z,
                    "scroll",
                    ScrollTrigger_onScroll
                  );
                var r,
                  a,
                  c = N.style,
                  u = c.borderTopStyle,
                  p = R.core.Animation.prototype;
                for (
                  p.revert ||
                    Object.defineProperty(p, "revert", {
                      value: function () {
                        return this.time(-0.01, !0);
                      },
                    }),
                    c.borderTopStyle = "solid",
                    r = _getBounds(N),
                    L.m = Math.round(r.top + L.sc()) || 0,
                    A.m = Math.round(r.left + A.sc()) || 0,
                    u
                      ? (c.borderTopStyle = u)
                      : c.removeProperty("border-top-style"),
                    V = setInterval(_sync, 250),
                    R.delayedCall(0.5, function () {
                      return (em = 0);
                    }),
                    ScrollTrigger_addListener(z, "touchcancel", _passThrough),
                    ScrollTrigger_addListener(N, "touchstart", _passThrough),
                    _multiListener(
                      ScrollTrigger_addListener,
                      z,
                      "pointerdown,touchstart,mousedown",
                      _pointerDownHandler
                    ),
                    _multiListener(
                      ScrollTrigger_addListener,
                      z,
                      "pointerup,touchend,mouseup",
                      _pointerUpHandler
                    ),
                    U = R.utils.checkPrefix("transform"),
                    eU.push(U),
                    F = ev(),
                    Y = R.delayedCall(0.2, _refreshAll).pause(),
                    $ = [
                      z,
                      "visibilitychange",
                      function () {
                        var r = D.innerWidth,
                          a = D.innerHeight;
                        z.hidden
                          ? ((K = r), (Z = a))
                          : (K !== r || Z !== a) && _onResize();
                      },
                      z,
                      "DOMContentLoaded",
                      _refreshAll,
                      D,
                      "load",
                      _refreshAll,
                      D,
                      "resize",
                      _onResize,
                    ],
                    _iterateAutoRefresh(ScrollTrigger_addListener),
                    eN.forEach(function (r) {
                      return r.enable(0, 1);
                    }),
                    a = 0;
                  a < P.length;
                  a += 3
                )
                  _wheelListener(ScrollTrigger_removeListener, P[a], P[a + 1]),
                    _wheelListener(
                      ScrollTrigger_removeListener,
                      P[a],
                      P[a + 2]
                    );
              }
            }),
            (ScrollTrigger.config = function (r) {
              "limitCallbacks" in r && (ed = !!r.limitCallbacks);
              var a = r.syncInterval;
              (a && clearInterval(V)) || ((V = a) && setInterval(_sync, a)),
                "ignoreMobileResize" in r &&
                  (er = 1 === ScrollTrigger.isTouch && r.ignoreMobileResize),
                "autoRefreshEvents" in r &&
                  (_iterateAutoRefresh(ScrollTrigger_removeListener) ||
                    _iterateAutoRefresh(
                      ScrollTrigger_addListener,
                      r.autoRefreshEvents || "none"
                    ),
                  (ee = -1 === (r.autoRefreshEvents + "").indexOf("resize")));
            }),
            (ScrollTrigger.scrollerProxy = function (r, a) {
              var c = _getTarget(r),
                u = P.indexOf(c),
                p = ScrollTrigger_isViewport(c);
              ~u && P.splice(u, p ? 6 : 2),
                a && (p ? C.unshift(D, a, N, a, B, a) : C.unshift(c, a));
            }),
            (ScrollTrigger.clearMatchMedia = function (r) {
              eN.forEach(function (a) {
                return a._ctx && a._ctx.query === r && a._ctx.kill(!0, !0);
              });
            }),
            (ScrollTrigger.isInViewport = function (r, a, c) {
              var u = (
                  _isString(r) ? _getTarget(r) : r
                ).getBoundingClientRect(),
                p = u[c ? eC : eO] * a || 0;
              return c
                ? u.right - p > 0 && u.left + p < D.innerWidth
                : u.bottom - p > 0 && u.top + p < D.innerHeight;
            }),
            (ScrollTrigger.positionInViewport = function (r, a, c) {
              _isString(r) && (r = _getTarget(r));
              var u = r.getBoundingClientRect(),
                p = u[c ? eC : eO],
                d =
                  null == a
                    ? p / 2
                    : a in eB
                    ? eB[a] * p
                    : ~a.indexOf("%")
                    ? (parseFloat(a) * p) / 100
                    : parseFloat(a) || 0;
              return c
                ? (u.left + d) / D.innerWidth
                : (u.top + d) / D.innerHeight;
            }),
            (ScrollTrigger.killAll = function (r) {
              if (
                (eN.slice(0).forEach(function (r) {
                  return "ScrollSmoother" !== r.vars.id && r.kill();
                }),
                !0 !== r)
              ) {
                var a = eY.killAll || [];
                (eY = {}),
                  a.forEach(function (r) {
                    return r();
                  });
              }
            }),
            ScrollTrigger
          );
        })();
      (e$.version = "3.12.3"),
        (e$.saveStyles = function (r) {
          return r
            ? W(r).forEach(function (r) {
                if (r && r.style) {
                  var a = eX.indexOf(r);
                  a >= 0 && eX.splice(a, 5),
                    eX.push(
                      r,
                      r.style.cssText,
                      r.getBBox && r.getAttribute("transform"),
                      R.core.getCache(r),
                      es()
                    );
                }
              })
            : eX;
        }),
        (e$.revert = function (r, a) {
          return _revertAll(!r, a);
        }),
        (e$.create = function (r, a) {
          return new e$(r, a);
        }),
        (e$.refresh = function (r) {
          return r ? _onResize() : (F || e$.register()) && _refreshAll(!0);
        }),
        (e$.update = function (r) {
          return ++P.cache && _updateAll(!0 === r ? 2 : 0);
        }),
        (e$.clearScrollMemory = _clearScrollMemory),
        (e$.maxScroll = function (r, a) {
          return _maxScroll(r, a ? A : L);
        }),
        (e$.getScrollFunc = function (r, a) {
          return _getScrollFunc(_getTarget(r), a ? A : L);
        }),
        (e$.getById = function (r) {
          return eI[r];
        }),
        (e$.getAll = function () {
          return eN.filter(function (r) {
            return "ScrollSmoother" !== r.vars.id;
          });
        }),
        (e$.isScrolling = function () {
          return !!eS;
        }),
        (e$.snapDirectional = _snapDirectional),
        (e$.addEventListener = function (r, a) {
          var c = eY[r] || (eY[r] = []);
          ~c.indexOf(a) || c.push(a);
        }),
        (e$.removeEventListener = function (r, a) {
          var c = eY[r],
            u = c && c.indexOf(a);
          u >= 0 && c.splice(u, 1);
        }),
        (e$.batch = function (r, a) {
          var c,
            u = [],
            p = {},
            d = a.interval || 0.016,
            h = a.batchMax || 1e9,
            proxyCallback = function (r, a) {
              var c = [],
                u = [],
                p = R.delayedCall(d, function () {
                  a(c, u), (c = []), (u = []);
                }).pause();
              return function (r) {
                c.length || p.restart(!0),
                  c.push(r.trigger),
                  u.push(r),
                  h <= c.length && p.progress(1);
              };
            };
          for (c in a)
            p[c] =
              "on" === c.substr(0, 2) &&
              _isFunction(a[c]) &&
              "onRefreshInit" !== c
                ? proxyCallback(c, a[c])
                : a[c];
          return (
            _isFunction(h) &&
              ((h = h()),
              ScrollTrigger_addListener(e$, "refresh", function () {
                return (h = a.batchMax());
              })),
            W(r).forEach(function (r) {
              var a = {};
              for (c in p) a[c] = p[c];
              (a.trigger = r), u.push(e$.create(a));
            }),
            u
          );
        });
      var eJ,
        _clampScrollAndGetDurationMultiplier = function (r, a, c, u) {
          return (
            a > u ? r(u) : a < 0 && r(0),
            c > u ? (u - a) / (c - a) : c < 0 ? a / (a - c) : 1
          );
        },
        _allowNativePanning = function _allowNativePanning(r, a) {
          !0 === a
            ? r.style.removeProperty("touch-action")
            : (r.style.touchAction =
                !0 === a
                  ? "auto"
                  : a
                  ? "pan-" + a + (E.isTouch ? " pinch-zoom" : "")
                  : "none"),
            r === B && _allowNativePanning(N, a);
        },
        eQ = { auto: 1, scroll: 1 },
        _nestedScroll = function (r) {
          var a,
            c = r.event,
            u = r.target,
            p = r.axis,
            d = (c.changedTouches ? c.changedTouches[0] : c).target,
            h = d._gsap || R.core.getCache(d),
            f = ev();
          if (!h._isScrollT || f - h._isScrollT > 2e3) {
            for (
              ;
              d &&
              d !== N &&
              ((d.scrollHeight <= d.clientHeight &&
                d.scrollWidth <= d.clientWidth) ||
                !(eQ[(a = _getComputedStyle(d)).overflowY] || eQ[a.overflowX]));

            )
              d = d.parentNode;
            (h._isScroll =
              d &&
              d !== u &&
              !ScrollTrigger_isViewport(d) &&
              (eQ[(a = _getComputedStyle(d)).overflowY] || eQ[a.overflowX])),
              (h._isScrollT = f);
          }
          (h._isScroll || "x" === p) &&
            (c.stopPropagation(), (c._gsapAllow = !0));
        },
        _inputObserver = function (r, a, c, u) {
          return E.create({
            target: r,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: a,
            onWheel: (u = u && _nestedScroll),
            onPress: u,
            onDrag: u,
            onScroll: u,
            onEnable: function () {
              return (
                c &&
                ScrollTrigger_addListener(
                  z,
                  E.eventTypes[0],
                  _captureInputs,
                  !1,
                  !0
                )
              );
            },
            onDisable: function () {
              return ScrollTrigger_removeListener(
                z,
                E.eventTypes[0],
                _captureInputs,
                !0
              );
            },
          });
        },
        e0 = /(input|label|select|textarea)/i,
        _captureInputs = function (r) {
          var a = e0.test(r.target.tagName);
          (a || eJ) && ((r._gsapAllow = !0), (eJ = a));
        },
        _getScrollNormalizer = function (r) {
          _isObject(r) || (r = {}),
            (r.preventDefault = r.isNormalizer = r.allowClicks = !0),
            r.type || (r.type = "wheel,touch"),
            (r.debounce = !!r.debounce),
            (r.id = r.id || "normalizer");
          var a,
            c,
            u,
            p,
            d,
            h,
            f,
            g,
            _ = r,
            m = _.normalizeScrollX,
            v = _.momentum,
            y = _.allowNestedScroll,
            S = _.onRelease,
            x = _getTarget(r.target) || B,
            T = R.core.globals().ScrollSmoother,
            b = T && T.get(),
            w =
              eo &&
              ((r.content && _getTarget(r.content)) ||
                (b && !1 !== r.content && !b.smooth() && b.content())),
            C = _getScrollFunc(x, L),
            O = _getScrollFunc(x, A),
            M = 1,
            k =
              (E.isTouch && D.visualViewport
                ? D.visualViewport.scale * D.visualViewport.width
                : D.outerWidth) / D.innerWidth,
            F = 0,
            z = _isFunction(v)
              ? function () {
                  return v(a);
                }
              : function () {
                  return v || 2.8;
                },
            N = _inputObserver(x, r.type, !0, y),
            resumeTouchMove = function () {
              return (p = !1);
            },
            I = _passThrough,
            Y = _passThrough,
            updateClamps = function () {
              (c = _maxScroll(x, L)),
                (Y = X(eo ? 1 : 0, c)),
                m && (I = X(0, _maxScroll(x, A))),
                (u = eH);
            },
            removeContentOffset = function () {
              (w._gsap.y = _round(parseFloat(w._gsap.y) + C.offset) + "px"),
                (w.style.transform =
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                  parseFloat(w._gsap.y) +
                  ", 0, 1)"),
                (C.offset = C.cacheID = 0);
            },
            ignoreDrag = function () {
              if (p) {
                requestAnimationFrame(resumeTouchMove);
                var r = _round(a.deltaY / 2),
                  c = Y(C.v - r);
                if (w && c !== C.v + C.offset) {
                  C.offset = c - C.v;
                  var u = _round((parseFloat(w && w._gsap.y) || 0) - C.offset);
                  (w.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    u +
                    ", 0, 1)"),
                    (w._gsap.y = u + "px"),
                    (C.cacheID = P.cache),
                    _updateAll();
                }
                return !0;
              }
              C.offset && removeContentOffset(), (p = !0);
            },
            onResize = function () {
              updateClamps(),
                d.isActive() &&
                  d.vars.scrollY > c &&
                  (C() > c ? d.progress(1) && C(c) : d.resetTo("scrollY", c));
            };
          return (
            w && R.set(w, { y: "+=0" }),
            (r.ignoreCheck = function (r) {
              return (
                (eo && "touchmove" === r.type && ignoreDrag(r)) ||
                (M > 1.05 && "touchstart" !== r.type) ||
                a.isGesturing ||
                (r.touches && r.touches.length > 1)
              );
            }),
            (r.onPress = function () {
              p = !1;
              var r = M;
              (M = _round(
                ((D.visualViewport && D.visualViewport.scale) || 1) / k
              )),
                d.pause(),
                r !== M && _allowNativePanning(x, M > 1.01 || (!m && "x")),
                (h = O()),
                (f = C()),
                updateClamps(),
                (u = eH);
            }),
            (r.onRelease = r.onGestureStart =
              function (r, a) {
                if ((C.offset && removeContentOffset(), a)) {
                  P.cache++;
                  var u,
                    p,
                    h = z();
                  m &&
                    ((p = (u = O()) + -(0.05 * h * r.velocityX) / 0.227),
                    (h *= _clampScrollAndGetDurationMultiplier(
                      O,
                      u,
                      p,
                      _maxScroll(x, A)
                    )),
                    (d.vars.scrollX = I(p))),
                    (p = (u = C()) + -(0.05 * h * r.velocityY) / 0.227),
                    (h *= _clampScrollAndGetDurationMultiplier(
                      C,
                      u,
                      p,
                      _maxScroll(x, L)
                    )),
                    (d.vars.scrollY = Y(p)),
                    d.invalidate().duration(h).play(0.01),
                    ((eo && d.vars.scrollY >= c) || u >= c - 1) &&
                      R.to({}, { onUpdate: onResize, duration: h });
                } else g.restart(!0);
                S && S(r);
              }),
            (r.onWheel = function () {
              d._ts && d.pause(), ev() - F > 1e3 && ((u = 0), (F = ev()));
            }),
            (r.onChange = function (r, a, c, p, d) {
              if (
                (eH !== u && updateClamps(),
                a &&
                  m &&
                  O(I(p[2] === a ? h + (r.startX - r.x) : O() + a - p[1])),
                c)
              ) {
                C.offset && removeContentOffset();
                var g = d[2] === c,
                  _ = g ? f + r.startY - r.y : C() + c - d[1],
                  v = Y(_);
                g && _ !== v && (f += v - _), C(v);
              }
              (c || a) && _updateAll();
            }),
            (r.onEnable = function () {
              _allowNativePanning(x, !m && "x"),
                e$.addEventListener("refresh", onResize),
                ScrollTrigger_addListener(D, "resize", onResize),
                C.smooth &&
                  ((C.target.style.scrollBehavior = "auto"),
                  (C.smooth = O.smooth = !1)),
                N.enable();
            }),
            (r.onDisable = function () {
              _allowNativePanning(x, !0),
                ScrollTrigger_removeListener(D, "resize", onResize),
                e$.removeEventListener("refresh", onResize),
                N.kill();
            }),
            (r.lockAxis = !1 !== r.lockAxis),
            ((a = new E(r)).iOS = eo),
            eo && !C() && C(1),
            eo && R.ticker.add(_passThrough),
            (g = a._dc),
            (d = R.to(a, {
              ease: "power4",
              paused: !0,
              scrollX: m ? "+=0.1" : "+=0",
              scrollY: "+=0.1",
              modifiers: {
                scrollY: _interruptionTracker(C, C(), function () {
                  return d.pause();
                }),
              },
              onUpdate: _updateAll,
              onComplete: g.vars.onComplete,
            })),
            a
          );
        };
      (e$.sort = function (r) {
        return eN.sort(
          r ||
            function (r, a) {
              return (
                -1e6 * (r.vars.refreshPriority || 0) +
                r.start -
                (a.start + -1e6 * (a.vars.refreshPriority || 0))
              );
            }
        );
      }),
        (e$.observe = function (r) {
          return new E(r);
        }),
        (e$.normalizeScroll = function (r) {
          if (void 0 === r) return et;
          if (!0 === r && et) return et.enable();
          if (!1 === r) {
            et && et.kill(), (et = r);
            return;
          }
          var a = r instanceof E ? r : _getScrollNormalizer(r);
          return (
            et && et.target === a.target && et.kill(),
            ScrollTrigger_isViewport(a.target) && (et = a),
            a
          );
        }),
        (e$.core = {
          _getVelocityProp: _getVelocityProp,
          _inputObserver: _inputObserver,
          _scrollers: P,
          _proxies: C,
          bridge: {
            ss: function () {
              eS || _dispatch("scrollStart"), (eS = ev());
            },
            ref: function () {
              return j;
            },
          },
        }),
        ScrollTrigger_getGSAP() && R.registerPlugin(e$);
    },
    40861: function (r, a, c) {
      "use strict";
      c.d(a, {
        p8: function () {
          return Y;
        },
      });
      var u,
        p,
        d,
        h,
        f,
        g,
        _,
        m,
        v,
        y,
        S = c(49630),
        x = {},
        T = 180 / Math.PI,
        b = Math.PI / 180,
        w = Math.atan2,
        P = /([A-Z])/g,
        C = /(left|right|width|margin|padding|x)/i,
        O = /[\s,\(]\S/,
        M = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        _renderCSSProp = function (r, a) {
          return a.set(
            a.t,
            a.p,
            Math.round((a.s + a.c * r) * 1e4) / 1e4 + a.u,
            a
          );
        },
        _renderPropWithEnd = function (r, a) {
          return a.set(
            a.t,
            a.p,
            1 === r ? a.e : Math.round((a.s + a.c * r) * 1e4) / 1e4 + a.u,
            a
          );
        },
        _renderCSSPropWithBeginning = function (r, a) {
          return a.set(
            a.t,
            a.p,
            r ? Math.round((a.s + a.c * r) * 1e4) / 1e4 + a.u : a.b,
            a
          );
        },
        _renderRoundedCSSProp = function (r, a) {
          var c = a.s + a.c * r;
          a.set(a.t, a.p, ~~(c + (c < 0 ? -0.5 : 0.5)) + a.u, a);
        },
        _renderNonTweeningValue = function (r, a) {
          return a.set(a.t, a.p, r ? a.e : a.b, a);
        },
        _renderNonTweeningValueOnlyAtEnd = function (r, a) {
          return a.set(a.t, a.p, 1 !== r ? a.b : a.e, a);
        },
        _setterCSSStyle = function (r, a, c) {
          return (r.style[a] = c);
        },
        _setterCSSProp = function (r, a, c) {
          return r.style.setProperty(a, c);
        },
        _setterTransform = function (r, a, c) {
          return (r._gsap[a] = c);
        },
        _setterScale = function (r, a, c) {
          return (r._gsap.scaleX = r._gsap.scaleY = c);
        },
        _setterScaleWithRender = function (r, a, c, u, p) {
          var d = r._gsap;
          (d.scaleX = d.scaleY = c), d.renderTransform(p, d);
        },
        _setterTransformWithRender = function (r, a, c, u, p) {
          var d = r._gsap;
          (d[a] = c), d.renderTransform(p, d);
        },
        k = "transform",
        A = k + "Origin",
        _saveStyle = function _saveStyle(r, a) {
          var c = this,
            u = this.target,
            p = u.style,
            d = u._gsap;
          if (r in x && p) {
            if (((this.tfm = this.tfm || {}), "transform" === r))
              return M.transform.split(",").forEach(function (r) {
                return _saveStyle.call(c, r, a);
              });
            if (
              (~(r = M[r] || r).indexOf(",")
                ? r.split(",").forEach(function (r) {
                    return (c.tfm[r] = _get(u, r));
                  })
                : (this.tfm[r] = d.x ? d[r] : _get(u, r)),
              r === A && (this.tfm.zOrigin = d.zOrigin),
              this.props.indexOf(k) >= 0)
            )
              return;
            d.svg &&
              ((this.svgo = u.getAttribute("data-svg-origin")),
              this.props.push(A, a, "")),
              (r = k);
          }
          (p || a) && this.props.push(r, a, p[r]);
        },
        _removeIndependentTransforms = function (r) {
          r.translate &&
            (r.removeProperty("translate"),
            r.removeProperty("scale"),
            r.removeProperty("rotate"));
        },
        _revertStyle = function () {
          var r,
            a,
            c = this.props,
            u = this.target,
            p = u.style,
            d = u._gsap;
          for (r = 0; r < c.length; r += 3)
            c[r + 1]
              ? (u[c[r]] = c[r + 2])
              : c[r + 2]
              ? (p[c[r]] = c[r + 2])
              : p.removeProperty(
                  "--" === c[r].substr(0, 2)
                    ? c[r]
                    : c[r].replace(P, "-$1").toLowerCase()
                );
          if (this.tfm) {
            for (a in this.tfm) d[a] = this.tfm[a];
            d.svg &&
              (d.renderTransform(),
              u.setAttribute("data-svg-origin", this.svgo || "")),
              ((r = v()) && r.isStart) ||
                p[k] ||
                (_removeIndependentTransforms(p),
                d.zOrigin &&
                  p[A] &&
                  ((p[A] += " " + d.zOrigin + "px"),
                  (d.zOrigin = 0),
                  d.renderTransform()),
                (d.uncache = 1));
          }
        },
        _getStyleSaver = function (r, a) {
          var c = {
            target: r,
            props: [],
            revert: _revertStyle,
            save: _saveStyle,
          };
          return (
            r._gsap || S.p8.core.getCache(r),
            a &&
              a.split(",").forEach(function (r) {
                return c.save(r);
              }),
            c
          );
        },
        _createElement = function (r, a) {
          var c = h.createElementNS
            ? h.createElementNS(
                (a || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                r
              )
            : h.createElement(r);
          return c && c.style ? c : h.createElement(r);
        },
        _getComputedProperty = function _getComputedProperty(r, a, c) {
          var u = getComputedStyle(r);
          return (
            u[a] ||
            u.getPropertyValue(a.replace(P, "-$1").toLowerCase()) ||
            u.getPropertyValue(a) ||
            (!c && _getComputedProperty(r, _checkPropPrefix(a) || a, 1)) ||
            ""
          );
        },
        L = "O,Moz,ms,Ms,Webkit".split(","),
        _checkPropPrefix = function (r, a, c) {
          var u = (a || _).style,
            p = 5;
          if (r in u && !c) return r;
          for (
            r = r.charAt(0).toUpperCase() + r.substr(1);
            p-- && !(L[p] + r in u);

          );
          return p < 0 ? null : (3 === p ? "ms" : p >= 0 ? L[p] : "") + r;
        },
        _initCore = function () {
          window.document &&
            ((f = (h = window.document).documentElement),
            (_ = _createElement("div") || { style: {} }),
            _createElement("div"),
            (A = (k = _checkPropPrefix(k)) + "Origin"),
            (_.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (y = !!_checkPropPrefix("perspective")),
            (v = S.p8.core.reverting),
            (g = 1));
        },
        _getBBoxHack = function _getBBoxHack(r) {
          var a,
            c = _createElement(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            u = this.parentNode,
            p = this.nextSibling,
            d = this.style.cssText;
          if (
            (f.appendChild(c),
            c.appendChild(this),
            (this.style.display = "block"),
            r)
          )
            try {
              (a = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = _getBBoxHack);
            } catch (r) {}
          else this._gsapBBox && (a = this._gsapBBox());
          return (
            u && (p ? u.insertBefore(this, p) : u.appendChild(this)),
            f.removeChild(c),
            (this.style.cssText = d),
            a
          );
        },
        _getAttributeFallbacks = function (r, a) {
          for (var c = a.length; c--; )
            if (r.hasAttribute(a[c])) return r.getAttribute(a[c]);
        },
        _getBBox = function (r) {
          var a;
          try {
            a = r.getBBox();
          } catch (c) {
            a = _getBBoxHack.call(r, !0);
          }
          return (
            (a && (a.width || a.height)) ||
              r.getBBox === _getBBoxHack ||
              (a = _getBBoxHack.call(r, !0)),
            !a || a.width || a.x || a.y
              ? a
              : {
                  x: +_getAttributeFallbacks(r, ["x", "cx", "x1"]) || 0,
                  y: +_getAttributeFallbacks(r, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        _isSVG = function (r) {
          return !!(
            r.getCTM &&
            (!r.parentNode || r.ownerSVGElement) &&
            _getBBox(r)
          );
        },
        _removeProperty = function (r, a) {
          if (a) {
            var c,
              u = r.style;
            a in x && a !== A && (a = k),
              u.removeProperty
                ? (("ms" === (c = a.substr(0, 2)) ||
                    "webkit" === a.substr(0, 6)) &&
                    (a = "-" + a),
                  u.removeProperty(
                    "--" === c ? a : a.replace(P, "-$1").toLowerCase()
                  ))
                : u.removeAttribute(a);
          }
        },
        _addNonTweeningPT = function (r, a, c, u, p, d) {
          var h = new S.Fo(
            r._pt,
            a,
            c,
            0,
            1,
            d ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue
          );
          return (r._pt = h), (h.b = u), (h.e = p), r._props.push(c), h;
        },
        E = { deg: 1, rad: 1, turn: 1 },
        R = { grid: 1, flex: 1 },
        _convertToUnit = function _convertToUnit(r, a, c, u) {
          var p,
            d,
            f,
            g,
            m = parseFloat(c) || 0,
            v = (c + "").trim().substr((m + "").length) || "px",
            y = _.style,
            T = C.test(a),
            b = "svg" === r.tagName.toLowerCase(),
            w = (b ? "client" : "offset") + (T ? "Width" : "Height"),
            P = "px" === u,
            O = "%" === u;
          if (u === v || !m || E[u] || E[v]) return m;
          if (
            ("px" === v || P || (m = _convertToUnit(r, a, c, "px")),
            (g = r.getCTM && _isSVG(r)),
            (O || "%" === v) && (x[a] || ~a.indexOf("adius")))
          )
            return (
              (p = g ? r.getBBox()[T ? "width" : "height"] : r[w]),
              (0, S.Pr)(O ? (m / p) * 100 : (m / 100) * p)
            );
          if (
            ((y[T ? "width" : "height"] = 100 + (P ? v : u)),
            (d =
              ~a.indexOf("adius") || ("em" === u && r.appendChild && !b)
                ? r
                : r.parentNode),
            g && (d = (r.ownerSVGElement || {}).parentNode),
            (d && d !== h && d.appendChild) || (d = h.body),
            (f = d._gsap) &&
              O &&
              f.width &&
              T &&
              f.time === S.xr.time &&
              !f.uncache)
          )
            return (0, S.Pr)((m / f.width) * 100);
          if (O && ("height" === a || "width" === a)) {
            var M = r.style[a];
            (r.style[a] = 100 + u),
              (p = r[w]),
              M ? (r.style[a] = M) : _removeProperty(r, a);
          } else
            (O || "%" === v) &&
              !R[_getComputedProperty(d, "display")] &&
              (y.position = _getComputedProperty(r, "position")),
              d === r && (y.position = "static"),
              d.appendChild(_),
              (p = _[w]),
              d.removeChild(_),
              (y.position = "absolute");
          return (
            T && O && (((f = (0, S.DY)(d)).time = S.xr.time), (f.width = d[w])),
            (0, S.Pr)(P ? (p * m) / 100 : p && m ? (100 / p) * m : 0)
          );
        },
        _get = function (r, a, c, u) {
          var p;
          return (
            g || _initCore(),
            a in M &&
              "transform" !== a &&
              ~(a = M[a]).indexOf(",") &&
              (a = a.split(",")[0]),
            x[a] && "transform" !== a
              ? ((p = _parseTransform(r, u)),
                (p =
                  "transformOrigin" !== a
                    ? p[a]
                    : p.svg
                    ? p.origin
                    : _firstTwoOnly(_getComputedProperty(r, A)) +
                      " " +
                      p.zOrigin +
                      "px"))
              : (!(p = r.style[a]) ||
                  "auto" === p ||
                  u ||
                  ~(p + "").indexOf("calc(")) &&
                (p =
                  (D[a] && D[a](r, a, c)) ||
                  _getComputedProperty(r, a) ||
                  (0, S.Ok)(r, a) ||
                  ("opacity" === a ? 1 : 0)),
            c && !~(p + "").trim().indexOf(" ")
              ? _convertToUnit(r, a, p, c) + c
              : p
          );
        },
        _tweenComplexCSSString = function (r, a, c, u) {
          if (!c || "none" === c) {
            var p = _checkPropPrefix(a, r, 1),
              d = p && _getComputedProperty(r, p, 1);
            d && d !== c
              ? ((a = p), (c = d))
              : "borderColor" === a &&
                (c = _getComputedProperty(r, "borderTopColor"));
          }
          var h,
            f,
            g,
            _,
            m,
            v,
            y,
            x,
            T,
            b,
            w,
            P = new S.Fo(this._pt, r.style, a, 0, 1, S.Ks),
            C = 0,
            O = 0;
          if (
            ((P.b = c),
            (P.e = u),
            (c += ""),
            "auto" == (u += "") &&
              ((v = r.style[a]),
              (r.style[a] = u),
              (u = _getComputedProperty(r, a) || u),
              v ? (r.style[a] = v) : _removeProperty(r, a)),
            (h = [c, u]),
            (0, S.kr)(h),
            (c = h[0]),
            (u = h[1]),
            (g = c.match(S.d4) || []),
            (u.match(S.d4) || []).length)
          ) {
            for (; (f = S.d4.exec(u)); )
              (y = f[0]),
                (T = u.substring(C, f.index)),
                m
                  ? (m = (m + 1) % 5)
                  : ("rgba(" === T.substr(-5) || "hsla(" === T.substr(-5)) &&
                    (m = 1),
                y !== (v = g[O++] || "") &&
                  ((_ = parseFloat(v) || 0),
                  (w = v.substr((_ + "").length)),
                  "=" === y.charAt(1) && (y = (0, S.cy)(_, y) + w),
                  (x = parseFloat(y)),
                  (b = y.substr((x + "").length)),
                  (C = S.d4.lastIndex - b.length),
                  b ||
                    ((b = b || S.Fc.units[a] || w),
                    C !== u.length || ((u += b), (P.e += b))),
                  w !== b && (_ = _convertToUnit(r, a, v, b) || 0),
                  (P._pt = {
                    _next: P._pt,
                    p: T || 1 === O ? T : ",",
                    s: _,
                    c: x - _,
                    m: (m && m < 4) || "zIndex" === a ? Math.round : 0,
                  }));
            P.c = C < u.length ? u.substring(C, u.length) : "";
          } else
            P.r =
              "display" === a && "none" === u
                ? _renderNonTweeningValueOnlyAtEnd
                : _renderNonTweeningValue;
          return S.bQ.test(u) && (P.e = 0), (this._pt = P), P;
        },
        F = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        _convertKeywordsToPercentages = function (r) {
          var a = r.split(" "),
            c = a[0],
            u = a[1] || "50%";
          return (
            ("top" === c || "bottom" === c || "left" === u || "right" === u) &&
              ((r = c), (c = u), (u = r)),
            (a[0] = F[c] || c),
            (a[1] = F[u] || u),
            a.join(" ")
          );
        },
        _renderClearProps = function (r, a) {
          if (a.tween && a.tween._time === a.tween._dur) {
            var c,
              u,
              p,
              d = a.t,
              h = d.style,
              f = a.u,
              g = d._gsap;
            if ("all" === f || !0 === f) (h.cssText = ""), (u = 1);
            else
              for (p = (f = f.split(",")).length; --p > -1; )
                x[(c = f[p])] &&
                  ((u = 1), (c = "transformOrigin" === c ? A : k)),
                  _removeProperty(d, c);
            u &&
              (_removeProperty(d, k),
              g &&
                (g.svg && d.removeAttribute("transform"),
                _parseTransform(d, 1),
                (g.uncache = 1),
                _removeIndependentTransforms(h)));
          }
        },
        D = {
          clearProps: function (r, a, c, u, p) {
            if ("isFromStart" !== p.data) {
              var d = (r._pt = new S.Fo(r._pt, a, c, 0, 0, _renderClearProps));
              return (
                (d.u = u), (d.pr = -10), (d.tween = p), r._props.push(c), 1
              );
            }
          },
        },
        z = [1, 0, 0, 1, 0, 0],
        B = {},
        _isNullTransform = function (r) {
          return "matrix(1, 0, 0, 1, 0, 0)" === r || "none" === r || !r;
        },
        _getComputedTransformMatrixAsArray = function (r) {
          var a = _getComputedProperty(r, k);
          return _isNullTransform(a) ? z : a.substr(7).match(S.SI).map(S.Pr);
        },
        _getMatrix = function (r, a) {
          var c,
            u,
            p,
            d,
            h = r._gsap || (0, S.DY)(r),
            g = r.style,
            _ = _getComputedTransformMatrixAsArray(r);
          return h.svg && r.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (_ = [
                (p = r.transform.baseVal.consolidate().matrix).a,
                p.b,
                p.c,
                p.d,
                p.e,
                p.f,
              ]).join(",")
              ? z
              : _
            : (_ !== z ||
                r.offsetParent ||
                r === f ||
                h.svg ||
                ((p = g.display),
                (g.display = "block"),
                ((c = r.parentNode) && r.offsetParent) ||
                  ((d = 1), (u = r.nextElementSibling), f.appendChild(r)),
                (_ = _getComputedTransformMatrixAsArray(r)),
                p ? (g.display = p) : _removeProperty(r, "display"),
                d &&
                  (u
                    ? c.insertBefore(r, u)
                    : c
                    ? c.appendChild(r)
                    : f.removeChild(r))),
              a && _.length > 6 ? [_[0], _[1], _[4], _[5], _[12], _[13]] : _);
        },
        _applySVGOrigin = function (r, a, c, u, p, d) {
          var h,
            f,
            g,
            _,
            m = r._gsap,
            v = p || _getMatrix(r, !0),
            y = m.xOrigin || 0,
            S = m.yOrigin || 0,
            x = m.xOffset || 0,
            T = m.yOffset || 0,
            b = v[0],
            w = v[1],
            P = v[2],
            C = v[3],
            O = v[4],
            M = v[5],
            k = a.split(" "),
            L = parseFloat(k[0]) || 0,
            E = parseFloat(k[1]) || 0;
          c
            ? v !== z &&
              (f = b * C - w * P) &&
              ((g = L * (C / f) + E * (-P / f) + (P * M - C * O) / f),
              (_ = L * (-w / f) + E * (b / f) - (b * M - w * O) / f),
              (L = g),
              (E = _))
            : ((L =
                (h = _getBBox(r)).x +
                (~k[0].indexOf("%") ? (L / 100) * h.width : L)),
              (E =
                h.y +
                (~(k[1] || k[0]).indexOf("%") ? (E / 100) * h.height : E)),
              "xOrigin" in m || (!L && !E) || ((L -= h.x), (E -= h.y))),
            u || (!1 !== u && m.smooth)
              ? ((O = L - y),
                (M = E - S),
                (m.xOffset = x + (O * b + M * P) - O),
                (m.yOffset = T + (O * w + M * C) - M))
              : (m.xOffset = m.yOffset = 0),
            (m.xOrigin = L),
            (m.yOrigin = E),
            (m.smooth = !!u),
            (m.origin = a),
            (m.originIsAbsolute = !!c),
            (r.style[A] = "0px 0px"),
            d &&
              (_addNonTweeningPT(d, m, "xOrigin", y, L),
              _addNonTweeningPT(d, m, "yOrigin", S, E),
              _addNonTweeningPT(d, m, "xOffset", x, m.xOffset),
              _addNonTweeningPT(d, m, "yOffset", T, m.yOffset)),
            r.setAttribute("data-svg-origin", L + " " + E);
        },
        _parseTransform = function (r, a) {
          var c = r._gsap || new S.l1(r);
          if ("x" in c && !a && !c.uncache) return c;
          var u,
            p,
            d,
            h,
            f,
            g,
            _,
            m,
            v,
            x,
            P,
            C,
            O,
            M,
            L,
            E,
            R,
            F,
            D,
            B,
            N,
            I,
            Y,
            W,
            X,
            H,
            V,
            j,
            G,
            U,
            q,
            K,
            Z = r.style,
            $ = c.scaleX < 0,
            J = getComputedStyle(r),
            Q = _getComputedProperty(r, A) || "0";
          return (
            (u = p = d = g = _ = m = v = x = P = 0),
            (h = f = 1),
            (c.svg = !!(r.getCTM && _isSVG(r))),
            J.translate &&
              (("none" !== J.translate ||
                "none" !== J.scale ||
                "none" !== J.rotate) &&
                (Z[k] =
                  ("none" !== J.translate
                    ? "translate3d(" +
                      (J.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                      ") "
                    : "") +
                  ("none" !== J.rotate ? "rotate(" + J.rotate + ") " : "") +
                  ("none" !== J.scale
                    ? "scale(" + J.scale.split(" ").join(",") + ") "
                    : "") +
                  ("none" !== J[k] ? J[k] : "")),
              (Z.scale = Z.rotate = Z.translate = "none")),
            (M = _getMatrix(r, c.svg)),
            c.svg &&
              (c.uncache
                ? ((X = r.getBBox()),
                  (Q = c.xOrigin - X.x + "px " + (c.yOrigin - X.y) + "px"),
                  (W = ""))
                : (W = !a && r.getAttribute("data-svg-origin")),
              _applySVGOrigin(
                r,
                W || Q,
                !!W || c.originIsAbsolute,
                !1 !== c.smooth,
                M
              )),
            (C = c.xOrigin || 0),
            (O = c.yOrigin || 0),
            M !== z &&
              ((F = M[0]),
              (D = M[1]),
              (B = M[2]),
              (N = M[3]),
              (u = I = M[4]),
              (p = Y = M[5]),
              6 === M.length
                ? ((h = Math.sqrt(F * F + D * D)),
                  (f = Math.sqrt(N * N + B * B)),
                  (g = F || D ? w(D, F) * T : 0),
                  (v = B || N ? w(B, N) * T + g : 0) &&
                    (f *= Math.abs(Math.cos(v * b))),
                  c.svg &&
                    ((u -= C - (C * F + O * B)), (p -= O - (C * D + O * N))))
                : ((K = M[6]),
                  (U = M[7]),
                  (V = M[8]),
                  (j = M[9]),
                  (G = M[10]),
                  (q = M[11]),
                  (u = M[12]),
                  (p = M[13]),
                  (d = M[14]),
                  (_ = (L = w(K, G)) * T),
                  L &&
                    ((W = I * (E = Math.cos(-L)) + V * (R = Math.sin(-L))),
                    (X = Y * E + j * R),
                    (H = K * E + G * R),
                    (V = -(I * R) + V * E),
                    (j = -(Y * R) + j * E),
                    (G = -(K * R) + G * E),
                    (q = -(U * R) + q * E),
                    (I = W),
                    (Y = X),
                    (K = H)),
                  (m = (L = w(-B, G)) * T),
                  L &&
                    ((W = F * (E = Math.cos(-L)) - V * (R = Math.sin(-L))),
                    (X = D * E - j * R),
                    (H = B * E - G * R),
                    (q = N * R + q * E),
                    (F = W),
                    (D = X),
                    (B = H)),
                  (g = (L = w(D, F)) * T),
                  L &&
                    ((W = F * (E = Math.cos(L)) + D * (R = Math.sin(L))),
                    (X = I * E + Y * R),
                    (D = D * E - F * R),
                    (Y = Y * E - I * R),
                    (F = W),
                    (I = X)),
                  _ &&
                    Math.abs(_) + Math.abs(g) > 359.9 &&
                    ((_ = g = 0), (m = 180 - m)),
                  (h = (0, S.Pr)(Math.sqrt(F * F + D * D + B * B))),
                  (f = (0, S.Pr)(Math.sqrt(Y * Y + K * K))),
                  (v = Math.abs((L = w(I, Y))) > 2e-4 ? L * T : 0),
                  (P = q ? 1 / (q < 0 ? -q : q) : 0)),
              c.svg &&
                ((W = r.getAttribute("transform")),
                (c.forceCSS =
                  r.setAttribute("transform", "") ||
                  !_isNullTransform(_getComputedProperty(r, k))),
                W && r.setAttribute("transform", W))),
            Math.abs(v) > 90 &&
              270 > Math.abs(v) &&
              ($
                ? ((h *= -1),
                  (v += g <= 0 ? 180 : -180),
                  (g += g <= 0 ? 180 : -180))
                : ((f *= -1), (v += v <= 0 ? 180 : -180))),
            (a = a || c.uncache),
            (c.x =
              u -
              ((c.xPercent =
                u &&
                ((!a && c.xPercent) ||
                  (Math.round(r.offsetWidth / 2) === Math.round(-u) ? -50 : 0)))
                ? (r.offsetWidth * c.xPercent) / 100
                : 0) +
              "px"),
            (c.y =
              p -
              ((c.yPercent =
                p &&
                ((!a && c.yPercent) ||
                  (Math.round(r.offsetHeight / 2) === Math.round(-p)
                    ? -50
                    : 0)))
                ? (r.offsetHeight * c.yPercent) / 100
                : 0) +
              "px"),
            (c.z = d + "px"),
            (c.scaleX = (0, S.Pr)(h)),
            (c.scaleY = (0, S.Pr)(f)),
            (c.rotation = (0, S.Pr)(g) + "deg"),
            (c.rotationX = (0, S.Pr)(_) + "deg"),
            (c.rotationY = (0, S.Pr)(m) + "deg"),
            (c.skewX = v + "deg"),
            (c.skewY = x + "deg"),
            (c.transformPerspective = P + "px"),
            (c.zOrigin =
              parseFloat(Q.split(" ")[2]) || (!a && c.zOrigin) || 0) &&
              (Z[A] = _firstTwoOnly(Q)),
            c.svg || (c.xOffset = c.yOffset = 0),
            (c.force3D = S.Fc.force3D),
            (c.renderTransform = c.svg
              ? _renderSVGTransforms
              : y
              ? _renderCSSTransforms
              : _renderNon3DTransforms),
            (c.uncache = 0),
            c
          );
        },
        _firstTwoOnly = function (r) {
          return (r = r.split(" "))[0] + " " + r[1];
        },
        _addPxTranslate = function (r, a, c) {
          var u = (0, S.Wy)(a);
          return (
            (0, S.Pr)(
              parseFloat(a) + parseFloat(_convertToUnit(r, "x", c + "px", u))
            ) + u
          );
        },
        _renderNon3DTransforms = function (r, a) {
          (a.z = "0px"),
            (a.rotationY = a.rotationX = "0deg"),
            (a.force3D = 0),
            _renderCSSTransforms(r, a);
        },
        N = "0deg",
        _renderCSSTransforms = function (r, a) {
          var c = a || this,
            u = c.xPercent,
            p = c.yPercent,
            d = c.x,
            h = c.y,
            f = c.z,
            g = c.rotation,
            _ = c.rotationY,
            m = c.rotationX,
            v = c.skewX,
            y = c.skewY,
            S = c.scaleX,
            x = c.scaleY,
            T = c.transformPerspective,
            w = c.force3D,
            P = c.target,
            C = c.zOrigin,
            O = "",
            M = ("auto" === w && r && 1 !== r) || !0 === w;
          if (C && (m !== N || _ !== N)) {
            var A,
              L = parseFloat(_) * b,
              E = Math.sin(L),
              R = Math.cos(L);
            (d = _addPxTranslate(
              P,
              d,
              -(E * (A = Math.cos((L = parseFloat(m) * b))) * C)
            )),
              (h = _addPxTranslate(P, h, -(-Math.sin(L) * C))),
              (f = _addPxTranslate(P, f, -(R * A * C) + C));
          }
          "0px" !== T && (O += "perspective(" + T + ") "),
            (u || p) && (O += "translate(" + u + "%, " + p + "%) "),
            (M || "0px" !== d || "0px" !== h || "0px" !== f) &&
              (O +=
                "0px" !== f || M
                  ? "translate3d(" + d + ", " + h + ", " + f + ") "
                  : "translate(" + d + ", " + h + ") "),
            g !== N && (O += "rotate(" + g + ") "),
            _ !== N && (O += "rotateY(" + _ + ") "),
            m !== N && (O += "rotateX(" + m + ") "),
            (v !== N || y !== N) && (O += "skew(" + v + ", " + y + ") "),
            (1 !== S || 1 !== x) && (O += "scale(" + S + ", " + x + ") "),
            (P.style[k] = O || "translate(0, 0)");
        },
        _renderSVGTransforms = function (r, a) {
          var c,
            u,
            p,
            d,
            h,
            f = a || this,
            g = f.xPercent,
            _ = f.yPercent,
            m = f.x,
            v = f.y,
            y = f.rotation,
            x = f.skewX,
            T = f.skewY,
            w = f.scaleX,
            P = f.scaleY,
            C = f.target,
            O = f.xOrigin,
            M = f.yOrigin,
            A = f.xOffset,
            L = f.yOffset,
            E = f.forceCSS,
            R = parseFloat(m),
            F = parseFloat(v);
          (y = parseFloat(y)),
            (x = parseFloat(x)),
            (T = parseFloat(T)) && ((x += T = parseFloat(T)), (y += T)),
            y || x
              ? ((y *= b),
                (x *= b),
                (c = Math.cos(y) * w),
                (u = Math.sin(y) * w),
                (p = -(Math.sin(y - x) * P)),
                (d = Math.cos(y - x) * P),
                x &&
                  ((T *= b),
                  (p *= h = Math.sqrt(1 + (h = Math.tan(x - T)) * h)),
                  (d *= h),
                  T &&
                    ((c *= h = Math.sqrt(1 + (h = Math.tan(T)) * h)),
                    (u *= h))),
                (c = (0, S.Pr)(c)),
                (u = (0, S.Pr)(u)),
                (p = (0, S.Pr)(p)),
                (d = (0, S.Pr)(d)))
              : ((c = w), (d = P), (u = p = 0)),
            ((R && !~(m + "").indexOf("px")) ||
              (F && !~(v + "").indexOf("px"))) &&
              ((R = _convertToUnit(C, "x", m, "px")),
              (F = _convertToUnit(C, "y", v, "px"))),
            (O || M || A || L) &&
              ((R = (0, S.Pr)(R + O - (O * c + M * p) + A)),
              (F = (0, S.Pr)(F + M - (O * u + M * d) + L))),
            (g || _) &&
              ((h = C.getBBox()),
              (R = (0, S.Pr)(R + (g / 100) * h.width)),
              (F = (0, S.Pr)(F + (_ / 100) * h.height))),
            (h =
              "matrix(" +
              c +
              "," +
              u +
              "," +
              p +
              "," +
              d +
              "," +
              R +
              "," +
              F +
              ")"),
            C.setAttribute("transform", h),
            E && (C.style[k] = h);
        },
        _addRotationalPropTween = function (r, a, c, u, p) {
          var d,
            h,
            f = (0, S.r9)(p),
            g = parseFloat(p) * (f && ~p.indexOf("rad") ? T : 1) - u,
            _ = u + g + "deg";
          return (
            f &&
              ("short" === (d = p.split("_")[1]) &&
                (g %= 360) != g % 180 &&
                (g += g < 0 ? 360 : -360),
              "cw" === d && g < 0
                ? (g = ((g + 36e9) % 360) - 360 * ~~(g / 360))
                : "ccw" === d &&
                  g > 0 &&
                  (g = ((g - 36e9) % 360) - 360 * ~~(g / 360))),
            (r._pt = h = new S.Fo(r._pt, a, c, u, g, _renderPropWithEnd)),
            (h.e = _),
            (h.u = "deg"),
            r._props.push(c),
            h
          );
        },
        _assign = function (r, a) {
          for (var c in a) r[c] = a[c];
          return r;
        },
        _addRawTransformPTs = function (r, a, c) {
          var u,
            p,
            d,
            h,
            f,
            g,
            _,
            m = _assign({}, c._gsap),
            v = c.style;
          for (p in (m.svg
            ? ((d = c.getAttribute("transform")),
              c.setAttribute("transform", ""),
              (v[k] = a),
              (u = _parseTransform(c, 1)),
              _removeProperty(c, k),
              c.setAttribute("transform", d))
            : ((d = getComputedStyle(c)[k]),
              (v[k] = a),
              (u = _parseTransform(c, 1)),
              (v[k] = d)),
          x))
            (d = m[p]) !== (h = u[p]) &&
              0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(p) &&
              ((f =
                (0, S.Wy)(d) !== (_ = (0, S.Wy)(h))
                  ? _convertToUnit(c, p, d, _)
                  : parseFloat(d)),
              (g = parseFloat(h)),
              (r._pt = new S.Fo(r._pt, u, p, f, g - f, _renderCSSProp)),
              (r._pt.u = _ || 0),
              r._props.push(p));
          _assign(u, m);
        };
      (0, S.fS)("padding,margin,Width,Radius", function (r, a) {
        var c = "Right",
          u = "Bottom",
          p = "Left",
          d = (
            a < 3 ? ["Top", c, u, p] : ["Top" + p, "Top" + c, u + c, u + p]
          ).map(function (c) {
            return a < 2 ? r + c : "border" + c + r;
          });
        D[a > 1 ? "border" + r : r] = function (r, a, c, u, p) {
          var h, f;
          if (arguments.length < 4)
            return 5 ===
              (f = (h = d.map(function (a) {
                return _get(r, a, c);
              })).join(" ")).split(h[0]).length
              ? h[0]
              : f;
          (h = (u + "").split(" ")),
            (f = {}),
            d.forEach(function (r, a) {
              return (f[r] = h[a] = h[a] || h[((a - 1) / 2) | 0]);
            }),
            r.init(a, f, p);
        };
      });
      var I = {
        name: "css",
        register: _initCore,
        targetTest: function (r) {
          return r.style && r.nodeType;
        },
        init: function (r, a, c, u, p) {
          var d,
            h,
            f,
            _,
            m,
            v,
            y,
            T,
            b,
            w,
            P,
            C,
            L,
            E,
            R,
            F,
            z = this._props,
            N = r.style,
            I = c.vars.startAt;
          for (y in (g || _initCore(),
          (this.styles = this.styles || _getStyleSaver(r)),
          (F = this.styles.props),
          (this.tween = c),
          a))
            if (
              "autoRound" !== y &&
              ((h = a[y]), !(S.$i[y] && (0, S.if)(y, a, c, u, r, p)))
            ) {
              if (
                ((m = typeof h),
                (v = D[y]),
                "function" === m && (m = typeof (h = h.call(c, u, r, p))),
                "string" === m && ~h.indexOf("random(") && (h = (0, S.UI)(h)),
                v)
              )
                v(this, r, y, h, c) && (R = 1);
              else if ("--" === y.substr(0, 2))
                (d = (getComputedStyle(r).getPropertyValue(y) + "").trim()),
                  (h += ""),
                  (S.GN.lastIndex = 0),
                  S.GN.test(d) || ((T = (0, S.Wy)(d)), (b = (0, S.Wy)(h))),
                  b
                    ? T !== b && (d = _convertToUnit(r, y, d, b) + b)
                    : T && (h += T),
                  this.add(N, "setProperty", d, h, u, p, 0, 0, y),
                  z.push(y),
                  F.push(y, 0, N[y]);
              else if ("undefined" !== m) {
                if (
                  (I && y in I
                    ? ((d =
                        "function" == typeof I[y]
                          ? I[y].call(c, u, r, p)
                          : I[y]),
                      (0, S.r9)(d) &&
                        ~d.indexOf("random(") &&
                        (d = (0, S.UI)(d)),
                      (0, S.Wy)(d + "") ||
                        "auto" === d ||
                        (d += S.Fc.units[y] || (0, S.Wy)(_get(r, y)) || ""),
                      "=" === (d + "").charAt(1) && (d = _get(r, y)))
                    : (d = _get(r, y)),
                  (_ = parseFloat(d)),
                  (w =
                    "string" === m && "=" === h.charAt(1) && h.substr(0, 2)) &&
                    (h = h.substr(2)),
                  (f = parseFloat(h)),
                  y in M &&
                    ("autoAlpha" === y &&
                      (1 === _ &&
                        "hidden" === _get(r, "visibility") &&
                        f &&
                        (_ = 0),
                      F.push("visibility", 0, N.visibility),
                      _addNonTweeningPT(
                        this,
                        N,
                        "visibility",
                        _ ? "inherit" : "hidden",
                        f ? "inherit" : "hidden",
                        !f
                      )),
                    "scale" !== y &&
                      "transform" !== y &&
                      ~(y = M[y]).indexOf(",") &&
                      (y = y.split(",")[0])),
                  (P = y in x))
                ) {
                  if (
                    (this.styles.save(y),
                    C ||
                      (((L = r._gsap).renderTransform && !a.parseTransform) ||
                        _parseTransform(r, a.parseTransform),
                      (E = !1 !== a.smoothOrigin && L.smooth),
                      ((C = this._pt =
                        new S.Fo(
                          this._pt,
                          N,
                          k,
                          0,
                          1,
                          L.renderTransform,
                          L,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === y)
                  )
                    (this._pt = new S.Fo(
                      this._pt,
                      L,
                      "scaleY",
                      L.scaleY,
                      (w ? (0, S.cy)(L.scaleY, w + f) : f) - L.scaleY || 0,
                      _renderCSSProp
                    )),
                      (this._pt.u = 0),
                      z.push("scaleY", y),
                      (y += "X");
                  else if ("transformOrigin" === y) {
                    F.push(A, 0, N[A]),
                      (h = _convertKeywordsToPercentages(h)),
                      L.svg
                        ? _applySVGOrigin(r, h, 0, E, 0, this)
                        : ((b = parseFloat(h.split(" ")[2]) || 0) !==
                            L.zOrigin &&
                            _addNonTweeningPT(this, L, "zOrigin", L.zOrigin, b),
                          _addNonTweeningPT(
                            this,
                            N,
                            y,
                            _firstTwoOnly(d),
                            _firstTwoOnly(h)
                          ));
                    continue;
                  } else if ("svgOrigin" === y) {
                    _applySVGOrigin(r, h, 1, E, 0, this);
                    continue;
                  } else if (y in B) {
                    _addRotationalPropTween(
                      this,
                      L,
                      y,
                      _,
                      w ? (0, S.cy)(_, w + h) : h
                    );
                    continue;
                  } else if ("smoothOrigin" === y) {
                    _addNonTweeningPT(this, L, "smooth", L.smooth, h);
                    continue;
                  } else if ("force3D" === y) {
                    L[y] = h;
                    continue;
                  } else if ("transform" === y) {
                    _addRawTransformPTs(this, h, r);
                    continue;
                  }
                } else y in N || (y = _checkPropPrefix(y) || y);
                if (
                  P ||
                  ((f || 0 === f) && (_ || 0 === _) && !O.test(h) && y in N)
                )
                  (T = (d + "").substr((_ + "").length)),
                    f || (f = 0),
                    (b = (0, S.Wy)(h) || (y in S.Fc.units ? S.Fc.units[y] : T)),
                    T !== b && (_ = _convertToUnit(r, y, d, b)),
                    (this._pt = new S.Fo(
                      this._pt,
                      P ? L : N,
                      y,
                      _,
                      (w ? (0, S.cy)(_, w + f) : f) - _,
                      P || ("px" !== b && "zIndex" !== y) || !1 === a.autoRound
                        ? _renderCSSProp
                        : _renderRoundedCSSProp
                    )),
                    (this._pt.u = b || 0),
                    T !== b &&
                      "%" !== b &&
                      ((this._pt.b = d),
                      (this._pt.r = _renderCSSPropWithBeginning));
                else if (y in N)
                  _tweenComplexCSSString.call(this, r, y, d, w ? w + h : h);
                else if (y in r) this.add(r, y, d || r[y], w ? w + h : h, u, p);
                else if ("parseTransform" !== y) {
                  (0, S.lC)(y, h);
                  continue;
                }
                P || (y in N ? F.push(y, 0, N[y]) : F.push(y, 1, d || r[y])),
                  z.push(y);
              }
            }
          R && (0, S.JV)(this);
        },
        render: function (r, a) {
          if (a.tween._time || !v())
            for (var c = a._pt; c; ) c.r(r, c.d), (c = c._next);
          else a.styles.revert();
        },
        get: _get,
        aliases: M,
        getSetter: function (r, a, c) {
          var u = M[a];
          return (
            u && 0 > u.indexOf(",") && (a = u),
            a in x && a !== A && (r._gsap.x || _get(r, "x"))
              ? c && m === c
                ? "scale" === a
                  ? _setterScale
                  : _setterTransform
                : ((m = c || {}),
                  "scale" === a
                    ? _setterScaleWithRender
                    : _setterTransformWithRender)
              : r.style && !(0, S.m2)(r.style[a])
              ? _setterCSSStyle
              : ~a.indexOf("-")
              ? _setterCSSProp
              : (0, S.S5)(r, a)
          );
        },
        core: { _removeProperty: _removeProperty, _getMatrix: _getMatrix },
      };
      (S.p8.utils.checkPrefix = _checkPropPrefix),
        (S.p8.core.getStyleSaver = _getStyleSaver),
        (u = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent"),
        (p = "rotation,rotationX,rotationY,skewX,skewY"),
        (d = (0, S.fS)(
          u +
            "," +
            p +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (r) {
            x[r] = 1;
          }
        )),
        (0, S.fS)(p, function (r) {
          (S.Fc.units[r] = "deg"), (B[r] = 1);
        }),
        (M[d[13]] = u + "," + p),
        (0, S.fS)(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (r) {
            var a = r.split(":");
            M[a[1]] = d[a[0]];
          }
        ),
        (0, S.fS)(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (r) {
            S.Fc.units[r] = "px";
          }
        ),
        S.p8.registerPlugin(I);
      var Y = S.p8.registerPlugin(I) || S.p8;
      Y.core.Tween;
    },
    45567: function (r, a, c) {
      "use strict";
      c.d(a, {
        Z: function () {
          return esm_useMouseHovered;
        },
      });
      var u = c(67294),
        p = c(76362),
        esm_useHoverDirty = function (r, a) {
          void 0 === a && (a = !0);
          var c = (0, u.useState)(!1),
            d = c[0],
            h = c[1];
          return (
            (0, u.useEffect)(
              function () {
                var onMouseOver = function () {
                    return h(!0);
                  },
                  onMouseOut = function () {
                    return h(!1);
                  };
                a &&
                  r &&
                  r.current &&
                  ((0, p.on)(r.current, "mouseover", onMouseOver),
                  (0, p.on)(r.current, "mouseout", onMouseOut));
                var c = r.current;
                return function () {
                  a &&
                    c &&
                    ((0, p.S1)(c, "mouseover", onMouseOver),
                    (0, p.S1)(c, "mouseout", onMouseOut));
                };
              },
              [a, r]
            ),
            d
          );
        },
        esm_useEffectOnce = function (r) {
          (0, u.useEffect)(r, []);
        },
        esm_useUnmount = function (r) {
          var a = (0, u.useRef)(r);
          (a.current = r),
            esm_useEffectOnce(function () {
              return function () {
                return a.current();
              };
            });
        },
        esm_useRafState = function (r) {
          var a = (0, u.useRef)(0),
            c = (0, u.useState)(r),
            p = c[0],
            d = c[1],
            h = (0, u.useCallback)(function (r) {
              cancelAnimationFrame(a.current),
                (a.current = requestAnimationFrame(function () {
                  d(r);
                }));
            }, []);
          return (
            esm_useUnmount(function () {
              cancelAnimationFrame(a.current);
            }),
            [p, h]
          );
        },
        esm_useMouse = function (r) {
          var a = esm_useRafState({
              docX: 0,
              docY: 0,
              posX: 0,
              posY: 0,
              elX: 0,
              elY: 0,
              elH: 0,
              elW: 0,
            }),
            c = a[0],
            d = a[1];
          return (
            (0, u.useEffect)(
              function () {
                var moveHandler = function (a) {
                  if (r && r.current) {
                    var c = r.current.getBoundingClientRect(),
                      u = c.left,
                      p = c.top,
                      h = c.width,
                      f = c.height,
                      g = u + window.pageXOffset,
                      _ = p + window.pageYOffset,
                      m = a.pageX - g,
                      v = a.pageY - _;
                    d({
                      docX: a.pageX,
                      docY: a.pageY,
                      posX: g,
                      posY: _,
                      elX: m,
                      elY: v,
                      elH: f,
                      elW: h,
                    });
                  }
                };
                return (
                  (0, p.on)(document, "mousemove", moveHandler),
                  function () {
                    (0, p.S1)(document, "mousemove", moveHandler);
                  }
                );
              },
              [r]
            ),
            c
          );
        },
        d = { current: null },
        esm_useMouseHovered = function (r, a) {
          void 0 === a && (a = {});
          var c = !!a.whenHovered,
            u = !!a.bound,
            p = esm_useHoverDirty(r, c),
            h = esm_useMouse(c && !p ? d : r);
          return (
            u &&
              ((h.elX = Math.max(0, Math.min(h.elX, h.elW))),
              (h.elY = Math.max(0, Math.min(h.elY, h.elH)))),
            h
          );
        };
    },
    79961: function (r, a, c) {
      "use strict";
      function t() {
        return (t = Object.assign
          ? Object.assign.bind()
          : function (r) {
              for (var a = 1; a < arguments.length; a++) {
                var c = arguments[a];
                for (var u in c)
                  Object.prototype.hasOwnProperty.call(c, u) && (r[u] = c[u]);
              }
              return r;
            }).apply(this, arguments);
      }
      function e(r, a, c) {
        return Math.max(r, Math.min(a, c));
      }
      c.d(a, {
        Z: function () {
          return l;
        },
      });
      let i = class i {
        advance(r) {
          var a, c, u, p;
          if (!this.isRunning) return;
          let d = !1;
          if (this.lerp)
            (this.value =
              ((c = this.value),
              (u = this.to),
              (1 - (p = 1 - Math.exp(-60 * this.lerp * r))) * c + p * u)),
              Math.round(this.value) === this.to &&
                ((this.value = this.to), (d = !0));
          else {
            this.currentTime += r;
            let a = e(0, this.currentTime / this.duration, 1);
            d = a >= 1;
            let c = d ? 1 : this.easing(a);
            this.value = this.from + (this.to - this.from) * c;
          }
          null == (a = this.onUpdate) || a.call(this, this.value, d),
            d && this.stop();
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(
          r,
          a,
          {
            lerp: c = 0.1,
            duration: u = 1,
            easing: p = (r) => r,
            onStart: d,
            onUpdate: h,
          }
        ) {
          (this.from = this.value = r),
            (this.to = a),
            (this.lerp = c),
            (this.duration = u),
            (this.easing = p),
            (this.currentTime = 0),
            (this.isRunning = !0),
            null == d || d(),
            (this.onUpdate = h);
        }
      };
      let s = class s {
        constructor({ wrapper: r, content: a, autoResize: c = !0 } = {}) {
          if (
            ((this.resize = () => {
              this.onWrapperResize(), this.onContentResize();
            }),
            (this.onWrapperResize = () => {
              this.wrapper === window
                ? ((this.width = window.innerWidth),
                  (this.height = window.innerHeight))
                : ((this.width = this.wrapper.clientWidth),
                  (this.height = this.wrapper.clientHeight));
            }),
            (this.onContentResize = () => {
              (this.scrollHeight = this.content.scrollHeight),
                (this.scrollWidth = this.content.scrollWidth);
            }),
            (this.wrapper = r),
            (this.content = a),
            c)
          ) {
            var u;
            let r;
            let a =
              ((u = this.resize),
              function () {
                let a = arguments,
                  c = this;
                clearTimeout(r),
                  (r = setTimeout(function () {
                    u.apply(c, a);
                  }, 250));
              });
            this.wrapper !== window &&
              ((this.wrapperResizeObserver = new ResizeObserver(a)),
              this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(a)),
              this.contentResizeObserver.observe(this.content);
          }
          this.resize();
        }
        destroy() {
          var r, a;
          null == (r = this.wrapperResizeObserver) || r.disconnect(),
            null == (a = this.contentResizeObserver) || a.disconnect();
        }
        get limit() {
          return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height,
          };
        }
      };
      let o = class o {
        constructor() {
          this.events = {};
        }
        emit(r, ...a) {
          let c = this.events[r] || [];
          for (let r = 0, u = c.length; r < u; r++) c[r](...a);
        }
        on(r, a) {
          var c;
          return (
            (null == (c = this.events[r]) ? void 0 : c.push(a)) ||
              (this.events[r] = [a]),
            () => {
              var c;
              this.events[r] =
                null == (c = this.events[r])
                  ? void 0
                  : c.filter((r) => a !== r);
            }
          );
        }
        off(r, a) {
          var c;
          this.events[r] =
            null == (c = this.events[r]) ? void 0 : c.filter((r) => a !== r);
        }
        destroy() {
          this.events = {};
        }
      };
      let n = class n {
        constructor(
          r,
          {
            wheelMultiplier: a = 1,
            touchMultiplier: c = 2,
            normalizeWheel: u = !1,
          }
        ) {
          (this.onTouchStart = (r) => {
            let { clientX: a, clientY: c } = r.targetTouches
              ? r.targetTouches[0]
              : r;
            (this.touchStart.x = a),
              (this.touchStart.y = c),
              (this.lastDelta = { x: 0, y: 0 });
          }),
            (this.onTouchMove = (r) => {
              let { clientX: a, clientY: c } = r.targetTouches
                  ? r.targetTouches[0]
                  : r,
                u = -(a - this.touchStart.x) * this.touchMultiplier,
                p = -(c - this.touchStart.y) * this.touchMultiplier;
              (this.touchStart.x = a),
                (this.touchStart.y = c),
                (this.lastDelta = { x: u, y: p }),
                this.emitter.emit("scroll", { deltaX: u, deltaY: p, event: r });
            }),
            (this.onTouchEnd = (r) => {
              this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: r,
              });
            }),
            (this.onWheel = (r) => {
              let { deltaX: a, deltaY: c } = r;
              this.normalizeWheel &&
                ((a = e(-100, a, 100)), (c = e(-100, c, 100))),
                (a *= this.wheelMultiplier),
                (c *= this.wheelMultiplier),
                this.emitter.emit("scroll", { deltaX: a, deltaY: c, event: r });
            }),
            (this.element = r),
            (this.wheelMultiplier = a),
            (this.touchMultiplier = c),
            (this.normalizeWheel = u),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new o()),
            this.element.addEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            this.element.addEventListener("touchstart", this.onTouchStart, {
              passive: !1,
            }),
            this.element.addEventListener("touchmove", this.onTouchMove, {
              passive: !1,
            }),
            this.element.addEventListener("touchend", this.onTouchEnd, {
              passive: !1,
            });
        }
        on(r, a) {
          return this.emitter.on(r, a);
        }
        destroy() {
          this.emitter.destroy(),
            this.element.removeEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            this.element.removeEventListener("touchstart", this.onTouchStart, {
              passive: !1,
            }),
            this.element.removeEventListener("touchmove", this.onTouchMove, {
              passive: !1,
            }),
            this.element.removeEventListener("touchend", this.onTouchEnd, {
              passive: !1,
            });
        }
      };
      let l = class l {
        constructor({
          wrapper: r = window,
          content: a = document.documentElement,
          wheelEventsTarget: c = r,
          eventsTarget: u = c,
          smoothWheel: p = !0,
          smoothTouch: d = !1,
          syncTouch: h = !1,
          syncTouchLerp: f = 0.1,
          __iosNoInertiaSyncTouchLerp: g = 0.4,
          touchInertiaMultiplier: _ = 35,
          duration: m,
          easing: v = (r) => Math.min(1, 1.001 - Math.pow(2, -10 * r)),
          lerp: y = !m && 0.1,
          infinite: S = !1,
          orientation: x = "vertical",
          gestureOrientation: T = "vertical",
          touchMultiplier: b = 1,
          wheelMultiplier: w = 1,
          normalizeWheel: P = !1,
          autoResize: C = !0,
        } = {}) {
          (this.onVirtualScroll = ({ deltaX: r, deltaY: a, event: c }) => {
            if (c.ctrlKey) return;
            let u = c.type.includes("touch"),
              p = c.type.includes("wheel");
            if (
              ("both" === this.options.gestureOrientation &&
                0 === r &&
                0 === a) ||
              ("vertical" === this.options.gestureOrientation && 0 === a) ||
              ("horizontal" === this.options.gestureOrientation && 0 === r) ||
              (u &&
                "vertical" === this.options.gestureOrientation &&
                0 === this.scroll &&
                !this.options.infinite &&
                a <= 0)
            )
              return;
            let d = c.composedPath();
            if (
              (d = d.slice(0, d.indexOf(this.rootElement))).find((r) => {
                var a;
                return (
                  (null == r.hasAttribute
                    ? void 0
                    : r.hasAttribute("data-lenis-prevent")) ||
                  (u &&
                    (null == r.hasAttribute
                      ? void 0
                      : r.hasAttribute("data-lenis-prevent-touch"))) ||
                  (p &&
                    (null == r.hasAttribute
                      ? void 0
                      : r.hasAttribute("data-lenis-prevent-wheel"))) ||
                  (null == (a = r.classList) ? void 0 : a.contains("lenis"))
                );
              })
            )
              return;
            if (this.isStopped || this.isLocked) return void c.preventDefault();
            if (
              ((this.isSmooth =
                ((this.options.smoothTouch || this.options.syncTouch) && u) ||
                (this.options.smoothWheel && p)),
              !this.isSmooth)
            )
              return (this.isScrolling = !1), void this.animate.stop();
            c.preventDefault();
            let h = a;
            "both" === this.options.gestureOrientation
              ? (h = Math.abs(a) > Math.abs(r) ? a : r)
              : "horizontal" === this.options.gestureOrientation && (h = r);
            let f = u && this.options.syncTouch,
              g = u && "touchend" === c.type && Math.abs(h) > 1;
            g && (h = this.velocity * this.options.touchInertiaMultiplier),
              this.scrollTo(
                this.targetScroll + h,
                t(
                  { programmatic: !1 },
                  f && {
                    lerp: g
                      ? this.syncTouchLerp
                      : this.options.__iosNoInertiaSyncTouchLerp,
                  }
                )
              );
          }),
            (this.onNativeScroll = () => {
              if (!this.__preventNextScrollEvent && !this.isScrolling) {
                let r = this.animatedScroll;
                (this.animatedScroll = this.targetScroll = this.actualScroll),
                  (this.velocity = 0),
                  (this.direction = Math.sign(this.animatedScroll - r)),
                  this.emit();
              }
            }),
            (window.lenisVersion = "1.0.29"),
            (r !== document.documentElement && r !== document.body) ||
              (r = window),
            (this.options = {
              wrapper: r,
              content: a,
              wheelEventsTarget: c,
              eventsTarget: u,
              smoothWheel: p,
              smoothTouch: d,
              syncTouch: h,
              syncTouchLerp: f,
              __iosNoInertiaSyncTouchLerp: g,
              touchInertiaMultiplier: _,
              duration: m,
              easing: v,
              lerp: y,
              infinite: S,
              gestureOrientation: T,
              orientation: x,
              touchMultiplier: b,
              wheelMultiplier: w,
              normalizeWheel: P,
              autoResize: C,
            }),
            (this.animate = new i()),
            (this.emitter = new o()),
            (this.dimensions = new s({
              wrapper: r,
              content: a,
              autoResize: C,
            })),
            this.toggleClass("lenis", !0),
            (this.velocity = 0),
            (this.isLocked = !1),
            (this.isStopped = !1),
            (this.isSmooth = h || p || d),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(
              "scroll",
              this.onNativeScroll,
              { passive: !1 }
            ),
            (this.virtualScroll = new n(u, {
              touchMultiplier: b,
              wheelMultiplier: w,
              normalizeWheel: P,
            })),
            this.virtualScroll.on("scroll", this.onVirtualScroll);
        }
        destroy() {
          this.emitter.destroy(),
            this.options.wrapper.removeEventListener(
              "scroll",
              this.onNativeScroll,
              { passive: !1 }
            ),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.toggleClass("lenis", !1),
            this.toggleClass("lenis-smooth", !1),
            this.toggleClass("lenis-scrolling", !1),
            this.toggleClass("lenis-stopped", !1),
            this.toggleClass("lenis-locked", !1);
        }
        on(r, a) {
          return this.emitter.on(r, a);
        }
        off(r, a) {
          return this.emitter.off(r, a);
        }
        setScroll(r) {
          this.isHorizontal
            ? (this.rootElement.scrollLeft = r)
            : (this.rootElement.scrollTop = r);
        }
        resize() {
          this.dimensions.resize();
        }
        emit() {
          this.emitter.emit("scroll", this);
        }
        reset() {
          (this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.velocity = 0),
            this.animate.stop();
        }
        start() {
          (this.isStopped = !1), this.reset();
        }
        stop() {
          (this.isStopped = !0), this.animate.stop(), this.reset();
        }
        raf(r) {
          let a = r - (this.time || r);
          (this.time = r), this.animate.advance(0.001 * a);
        }
        scrollTo(
          r,
          {
            offset: a = 0,
            immediate: c = !1,
            lock: u = !1,
            duration: p = this.options.duration,
            easing: d = this.options.easing,
            lerp: h = !p && this.options.lerp,
            onComplete: f = null,
            force: g = !1,
            programmatic: _ = !0,
          } = {}
        ) {
          if ((!this.isStopped && !this.isLocked) || g) {
            if (["top", "left", "start"].includes(r)) r = 0;
            else if (["bottom", "right", "end"].includes(r)) r = this.limit;
            else {
              var m;
              let c;
              if (
                ("string" == typeof r
                  ? (c = document.querySelector(r))
                  : null != (m = r) && m.nodeType && (c = r),
                c)
              ) {
                if (this.options.wrapper !== window) {
                  let r = this.options.wrapper.getBoundingClientRect();
                  a -= this.isHorizontal ? r.left : r.top;
                }
                let u = c.getBoundingClientRect();
                r = (this.isHorizontal ? u.left : u.top) + this.animatedScroll;
              }
            }
            if ("number" == typeof r) {
              if (
                ((r += a),
                (r = Math.round(r)),
                this.options.infinite
                  ? _ && (this.targetScroll = this.animatedScroll = this.scroll)
                  : (r = e(0, r, this.limit)),
                c)
              )
                return (
                  (this.animatedScroll = this.targetScroll = r),
                  this.setScroll(this.scroll),
                  this.reset(),
                  void (null == f || f(this))
                );
              if (!_) {
                if (r === this.targetScroll) return;
                this.targetScroll = r;
              }
              this.animate.fromTo(this.animatedScroll, r, {
                duration: p,
                easing: d,
                lerp: h,
                onStart: () => {
                  u && (this.isLocked = !0), (this.isScrolling = !0);
                },
                onUpdate: (r, a) => {
                  (this.isScrolling = !0),
                    (this.velocity = r - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = r),
                    this.setScroll(this.scroll),
                    _ && (this.targetScroll = r),
                    a || this.emit(),
                    a &&
                      (this.reset(),
                      this.emit(),
                      null == f || f(this),
                      (this.__preventNextScrollEvent = !0),
                      requestAnimationFrame(() => {
                        delete this.__preventNextScrollEvent;
                      }));
                },
              });
            }
          }
        }
        get rootElement() {
          return this.options.wrapper === window
            ? document.documentElement
            : this.options.wrapper;
        }
        get limit() {
          return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
        }
        get isHorizontal() {
          return "horizontal" === this.options.orientation;
        }
        get actualScroll() {
          return this.isHorizontal
            ? this.rootElement.scrollLeft
            : this.rootElement.scrollTop;
        }
        get scroll() {
          var r;
          return this.options.infinite
            ? ((this.animatedScroll % (r = this.limit)) + r) % r
            : this.animatedScroll;
        }
        get progress() {
          return 0 === this.limit ? 1 : this.scroll / this.limit;
        }
        get isSmooth() {
          return this.__isSmooth;
        }
        set isSmooth(r) {
          this.__isSmooth !== r &&
            ((this.__isSmooth = r), this.toggleClass("lenis-smooth", r));
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(r) {
          this.__isScrolling !== r &&
            ((this.__isScrolling = r), this.toggleClass("lenis-scrolling", r));
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(r) {
          this.__isStopped !== r &&
            ((this.__isStopped = r), this.toggleClass("lenis-stopped", r));
        }
        get isLocked() {
          return this.__isLocked;
        }
        set isLocked(r) {
          this.__isLocked !== r &&
            ((this.__isLocked = r), this.toggleClass("lenis-locked", r));
        }
        get className() {
          let r = "lenis";
          return (
            this.isStopped && (r += " lenis-stopped"),
            this.isLocked && (r += " lenis-locked"),
            this.isScrolling && (r += " lenis-scrolling"),
            this.isSmooth && (r += " lenis-smooth"),
            r
          );
        }
        toggleClass(r, a) {
          this.rootElement.classList.toggle(r, a),
            this.emitter.emit("className change", this);
        }
      };
    },
  },
]);
