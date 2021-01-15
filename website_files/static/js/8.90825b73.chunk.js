(window.webpackJsonp = window.webpackJsonp || []).push([
    [8], {
        122: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return i
            });
            var n = a(0),
                c = a.n(n),
                r = a(133),
                o = a.n(r);

            function i(e) {
                var t = e.children,
                    a = e.className,
                    n = e.contentClassName;
                return c.a.createElement("div", {
                    className: "grid-content"
                }, c.a.createElement("div", {
                    className: "".concat(a, " ").concat(o.a.page)
                }, c.a.createElement("div", {
                    className: "".concat(n, " ").concat(o.a.content)
                }, t)))
            }
            i.defaultProps = {
                className: "",
                contentClassName: ""
            }
        },
        125: function(e, t, a) {
            "use strict";
            var n = a(0),
                c = a.n(n),
                r = a(140),
                o = a.n(r);

            function i(e) {
                var t = e.children,
                    a = e.contentClassName,
                    n = e.inMainBody;
                return c.a.createElement("div", {
                    className: "".concat(o.a.footer, " ").concat(n ? "" : "content-flip")
                }, c.a.createElement("div", {
                    className: o.a.contentContainer
                }, c.a.createElement("div", {
                    className: "".concat(a, " ").concat(o.a.content)
                }, t)))
            }
            i.defaultProps = {
                contentClassName: ""
            }, t.a = i
        },
        133: function(e, t, a) {
            e.exports = {
                page: "DefaultColumnLayout_page__3bHKG content-flip",
                content: "DefaultColumnLayout_content__3r8BA content"
            }
        },
        140: function(e, t, a) {
            e.exports = {
                footer: "DefaultStickyFooter_footer__3MYJ9 footer",
                contentContainer: "DefaultStickyFooter_contentContainer__1Z1zn",
                content: "DefaultStickyFooter_content__3_7Uf content"
            }
        },
        153: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return p
            });
            var n = a(9),
                c = a.n(n),
                r = c.a.shape,
                o = c.a.oneOf,
                i = c.a.oneOfType,
                l = c.a.func,
                s = c.a.number,
                u = c.a.string,
                d = r({
                    hash: u,
                    key: u,
                    pathname: u,
                    search: u,
                    state: i([c.a.array, c.a.bool, s, c.a.object, u])
                }),
                p = r({
                    action: o(["PUSH", "REPLACE", "POP"]),
                    block: l,
                    createHref: l,
                    go: l,
                    goBack: l,
                    goForward: l,
                    length: s,
                    listen: l,
                    location: d,
                    push: l,
                    replace: l
                })
        },
        154: function(e, t, a) {
            "use strict";
            var n = a(0),
                c = a.n(n);

            function r() {
                return (r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var o = c.a.createElement("g", {
                    id: "Symbols",
                    stroke: "none",
                    strokeWidth: 1,
                    fill: "none",
                    fillRule: "evenodd"
                }, c.a.createElement("g", {
                    id: "Module/VoteSelection/Selected",
                    transform: "translate(-32.000000, -32.000000)",
                    fill: "#FFFFFF",
                    fillRule: "nonzero"
                }, c.a.createElement("path", {
                    d: "M43.6491752,54.2449284 C43.8554816,54.0243883 43.9421429,53.9300665 44.0463972,53.8104136 L44.0646579,53.789831 C44.1836445,53.6588786 44.1836445,53.6588786 44.3026298,53.5279449 C45.1521992,52.5930922 46.0307461,51.6272707 47.1444244,50.4036427 C47.5302319,49.9797458 49.4473376,47.8737195 49.9844063,47.2835915 C55.148212,41.6096318 58.3041008,38.1243578 61.6173106,34.4223479 L61.6311647,34.4071413 C61.6550938,34.3813388 61.662751,34.3780795 61.6490584,34.3625312 C56.5915332,39.9674614 51.6853574,45.374699 44.0408519,53.7787508 L43.2306208,54.6694852 L42.3578452,53.8384189 C40.3414862,51.9184202 39.4765911,51.0957844 38.3754769,50.0520874 C36.9249184,48.6771679 35.6410303,47.4672326 34.3803572,46.2880686 C34.3924536,46.2746137 34.3997006,46.283261 34.3774601,46.3055508 C34.3577564,46.3252983 34.3493806,46.318036 34.3452392,46.3058246 C35.5718155,47.4357954 36.5360509,48.3480667 38.7502916,50.4472254 C40.9625859,52.5445389 41.9710573,53.4984855 43.2328195,54.6847576 C43.2318578,54.6916051 43.2251324,54.7085835 43.1954001,54.742866 C43.3243136,54.5943418 43.4293249,54.4799468 43.6491752,54.2449284 Z M51.7253373,48.8299685 C51.1881576,49.4202184 49.2710196,51.5262802 48.8853076,51.9500723 C47.7719872,53.1733069 46.893803,54.1387298 46.0446855,55.0730852 C45.9257755,55.2039361 45.9257755,55.2039361 45.8251277,55.3142199 L45.8229477,55.3167292 C45.6926443,55.4662879 45.5933934,55.574312 45.3685169,55.8147035 C45.1639546,56.0333792 45.0729801,56.1325569 44.9470878,56.2771667 C44.0665027,57.2450888 42.4818893,57.2150146 41.6001093,56.3420298 C40.3554902,55.1724034 39.3454762,54.2170006 37.1293214,52.1160272 C34.9069203,50.0091322 33.9455992,49.0996384 32.7228393,47.9500355 C31.714124,46.9967748 31.8090879,45.5849802 32.7101824,44.6818873 C33.6124052,43.7776636 35.0381842,43.6668357 36.0061367,44.624301 C37.2498473,45.7869571 38.5395186,47.0023282 39.9962947,48.3831412 C40.9254844,49.2638786 41.6863557,49.9870928 43.1096875,51.342097 C50.3176036,43.4170508 55.0597571,38.1894535 59.9615652,32.7570616 C60.9191744,31.7244807 62.3571999,31.7907823 63.2743051,32.6971653 C64.1631158,33.5755847 64.28415,34.9614899 63.3652997,35.9609593 C60.0488561,39.6665339 56.890122,43.1549331 51.7253373,48.8299685 Z",
                    id: "Checkmark_white"
                }))),
                i = function(e) {
                    return c.a.createElement("svg", r({
                        focusable: "false",
                        width: "32px",
                        height: "25px",
                        viewBox: "0 0 32 25",
                        version: 1.1,
                        xmlnsXlink: "http://www.w3.org/1999/xlink"
                    }, e), o)
                },
                l = (a.p, a(168)),
                s = a.n(l);

            function u(e) {
                var t = function(t, a, r, u) {
                        var d = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : u,
                            p = e.currentStep,
                            m = e.landingOverride,
                            _ = e.contentTabIndex;
                        return c.a.createElement("div", {
                            className: "\n          ".concat(s.a.stepWrap, "\n          ").concat(t === p && s.a.current, "\n          ").concat(t < p && s.a.previous, "\n          ").concat("ISB" === l && s.a.isbStepWrap, "\n          ").concat("UOC" === l && s.a.uocStepWrap, "\n          ").concat("RAV" === l && s.a.ravStepWrap, "\n          ")
                        }, c.a.createElement("div", {
                            className: "".concat(s.a.step, " ").concat(t === p && s.a.currentStep)
                        }, c.a.createElement("div", {
                            className: s.a.top
                        }, c.a.createElement("div", {
                            tabIndex: _,
                            className: "\n              ".concat(s.a.stepNum, "\n              ").concat(t < p && s.a.previousStepNum, "\n              ")
                        }, t < p ? c.a.createElement(i, {
                            className: s.a.check
                        }) : t), c.a.createElement("div", {
                            className: s.a.header
                        }, c.a.createElement("div", {
                            className: s.a.title,
                            tabIndex: _
                        }, a), c.a.createElement("div", {
                            className: s.a.status,
                            tabIndex: _
                        }, t < p ? o.hv : r))), p === t || m ? c.a.createElement(n.Fragment, null, c.a.createElement("div", {
                            className: s.a.expander
                        }), c.a.createElement("div", {
                            className: "".concat(s.a.bottom, " hideMobileTablet"),
                            tabIndex: _
                        }, u), c.a.createElement("div", {
                            className: "".concat(s.a.bottom, " hideDesktop"),
                            tabIndex: _
                        }, d)) : null), c.a.createElement("div", {
                            className: s.a.pointyWrap
                        }, c.a.createElement("div", {
                            className: "".concat(s.a.pointy, " ").concat(t === p && s.a.currentPointy)
                        })))
                    },
                    a = e.landingOverride,
                    r = e.currentStep,
                    o = e.copy,
                    l = e.mode;
                return c.a.createElement("div", {
                    className: function(e) {
                        return e ? [s.a.horizontal, s.a.landingOverride].join(" ") : s.a.vertical
                    }(a)
                }, t(1, o.ca, {
                    1: o.cb,
                    2: o.cb,
                    3: o.cb
                }[r], o.cc), t(2, o.cd, {
                    1: o.ce,
                    2: o.ce,
                    3: o.ce
                }[r], o.ho, o.cf), t(3, o.cg, o.ch, o.ci), "UOC" === l && t(4, o.tk, "", o.tl))
            }
            a.d(t, "a", function() {
                return u
            })
        },
        168: function(e, t, a) {
            e.exports = {
                horizontal: "Wayfinding_horizontal__Bd3wi",
                vertical: "Wayfinding_vertical__vfSaf",
                step: "Wayfinding_step__2MWmi flblue cblack",
                pointy: "Wayfinding_pointy__3ZZpC",
                ravStepWrap: "Wayfinding_ravStepWrap__1b0Dw",
                pointyWrap: "Wayfinding_pointyWrap__2iUXY",
                newPointy: "Wayfinding_newPointy__2igDi",
                newPointyInner: "Wayfinding_newPointyInner__286XD",
                current: "Wayfinding_current__2xyW1",
                top: "Wayfinding_top__3LqiN",
                stepNum: "Wayfinding_stepNum__2Zjxa flex-row-centered cwhite fblue multilang-support",
                header: "Wayfinding_header__30dAs",
                title: "Wayfinding_title__2ZPpx multilang-support",
                status: "Wayfinding_status__iWrKq multilang-support",
                check: "Wayfinding_check__2tUZh multilang-support",
                expander: "Wayfinding_expander__2aaSo",
                bottom: "Wayfinding_bottom__2ZghS fs-bodyCopy multilang-support",
                landingOverride: "Wayfinding_landingOverride__a1BCW",
                stepWrap: "Wayfinding_stepWrap__2Orln",
                currentStep: "Wayfinding_currentStep__azbVb",
                currentPointy: "Wayfinding_currentPointy__2tWUw",
                previousStepNum: "Wayfinding_previousStepNum__1xKhC"
            }
        },
        577: function(e, t, a) {
            e.exports = {
                row: "Overview_row__1zUBj",
                column: "Overview_column__3Yn6n",
                getStarted: "Overview_getStarted__2r_c7",
                continue: "Overview_continue__GoDn7",
                bodyCopy: "Overview_bodyCopy__Ka_fA fs-bodyCopyLarge"
            }
        },
        695: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                c = a.n(n),
                r = a(122),
                o = a(125),
                i = a(109),
                l = a(105),
                s = a(106),
                u = a(154),
                d = (a(153), a(25)),
                p = a(577),
                m = a.n(p);

            function _(e) {
                var t = e.copy,
                    a = e.history,
                    p = e.mode,
                    _ = e.language,
                    f = e.contentTabIndex;
                return c.a.createElement(n.Fragment, null, c.a.createElement(r.a, null, c.a.createElement("div", {
                    className: m.a.row
                }, c.a.createElement("div", {
                    className: m.a.column
                }, c.a.createElement(i.a, {
                    text: t.fh,
                    tabIndex: f
                }), c.a.createElement(l.a, {
                    className: m.a.bodyCopy,
                    text: t.fi,
                    tabIndex: f
                })), c.a.createElement("div", {
                    className: m.a.column
                }, c.a.createElement(u.a, {
                    currentStep: 1,
                    copy: Object(d.a)("Wayfinding", p, _),
                    mode: p,
                    contentTabIndex: f
                })))), c.a.createElement(o.a, null, c.a.createElement("div", {
                    className: m.a.continue
                }, c.a.createElement(s.a, {
                    className: m.a.getStarted,
                    width: "243px",
                    text: t.bz,
                    colorOption: "yellow",
                    typeOption: "right",
                    onClick: function() {
                        return a.push("/ballot")
                    },
                    tabIndex: f
                }))))
            }
            t.default = _, _.defaultProps = {
                history: {
                    push: function() {
                        return null
                    }
                },
                copy: {}
            }
        }
    }
]);