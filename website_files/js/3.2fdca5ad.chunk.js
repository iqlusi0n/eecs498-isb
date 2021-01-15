(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        132: function(e, t) {
            e.exports = function() {}
        },
        154: function(e, t, a) {
            "use strict";
            var n = a(0),
                o = a.n(n);

            function c() {
                return (c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var r = o.a.createElement("g", {
                    id: "Symbols",
                    stroke: "none",
                    strokeWidth: 1,
                    fill: "none",
                    fillRule: "evenodd"
                }, o.a.createElement("g", {
                    id: "Module/VoteSelection/Selected",
                    transform: "translate(-32.000000, -32.000000)",
                    fill: "#FFFFFF",
                    fillRule: "nonzero"
                }, o.a.createElement("path", {
                    d: "M43.6491752,54.2449284 C43.8554816,54.0243883 43.9421429,53.9300665 44.0463972,53.8104136 L44.0646579,53.789831 C44.1836445,53.6588786 44.1836445,53.6588786 44.3026298,53.5279449 C45.1521992,52.5930922 46.0307461,51.6272707 47.1444244,50.4036427 C47.5302319,49.9797458 49.4473376,47.8737195 49.9844063,47.2835915 C55.148212,41.6096318 58.3041008,38.1243578 61.6173106,34.4223479 L61.6311647,34.4071413 C61.6550938,34.3813388 61.662751,34.3780795 61.6490584,34.3625312 C56.5915332,39.9674614 51.6853574,45.374699 44.0408519,53.7787508 L43.2306208,54.6694852 L42.3578452,53.8384189 C40.3414862,51.9184202 39.4765911,51.0957844 38.3754769,50.0520874 C36.9249184,48.6771679 35.6410303,47.4672326 34.3803572,46.2880686 C34.3924536,46.2746137 34.3997006,46.283261 34.3774601,46.3055508 C34.3577564,46.3252983 34.3493806,46.318036 34.3452392,46.3058246 C35.5718155,47.4357954 36.5360509,48.3480667 38.7502916,50.4472254 C40.9625859,52.5445389 41.9710573,53.4984855 43.2328195,54.6847576 C43.2318578,54.6916051 43.2251324,54.7085835 43.1954001,54.742866 C43.3243136,54.5943418 43.4293249,54.4799468 43.6491752,54.2449284 Z M51.7253373,48.8299685 C51.1881576,49.4202184 49.2710196,51.5262802 48.8853076,51.9500723 C47.7719872,53.1733069 46.893803,54.1387298 46.0446855,55.0730852 C45.9257755,55.2039361 45.9257755,55.2039361 45.8251277,55.3142199 L45.8229477,55.3167292 C45.6926443,55.4662879 45.5933934,55.574312 45.3685169,55.8147035 C45.1639546,56.0333792 45.0729801,56.1325569 44.9470878,56.2771667 C44.0665027,57.2450888 42.4818893,57.2150146 41.6001093,56.3420298 C40.3554902,55.1724034 39.3454762,54.2170006 37.1293214,52.1160272 C34.9069203,50.0091322 33.9455992,49.0996384 32.7228393,47.9500355 C31.714124,46.9967748 31.8090879,45.5849802 32.7101824,44.6818873 C33.6124052,43.7776636 35.0381842,43.6668357 36.0061367,44.624301 C37.2498473,45.7869571 38.5395186,47.0023282 39.9962947,48.3831412 C40.9254844,49.2638786 41.6863557,49.9870928 43.1096875,51.342097 C50.3176036,43.4170508 55.0597571,38.1894535 59.9615652,32.7570616 C60.9191744,31.7244807 62.3571999,31.7907823 63.2743051,32.6971653 C64.1631158,33.5755847 64.28415,34.9614899 63.3652997,35.9609593 C60.0488561,39.6665339 56.890122,43.1549331 51.7253373,48.8299685 Z",
                    id: "Checkmark_white"
                }))),
                i = function(e) {
                    return o.a.createElement("svg", c({
                        focusable: "false",
                        width: "32px",
                        height: "25px",
                        viewBox: "0 0 32 25",
                        version: 1.1,
                        xmlnsXlink: "http://www.w3.org/1999/xlink"
                    }, e), r)
                },
                l = (a.p, a(168)),
                s = a.n(l);

            function d(e) {
                var t = function(t, a, c, d) {
                        var u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : d,
                            m = e.currentStep,
                            p = e.landingOverride,
                            _ = e.contentTabIndex;
                        return o.a.createElement("div", {
                            className: "\n          ".concat(s.a.stepWrap, "\n          ").concat(t === m && s.a.current, "\n          ").concat(t < m && s.a.previous, "\n          ").concat("ISB" === l && s.a.isbStepWrap, "\n          ").concat("UOC" === l && s.a.uocStepWrap, "\n          ").concat("RAV" === l && s.a.ravStepWrap, "\n          ")
                        }, o.a.createElement("div", {
                            className: "".concat(s.a.step, " ").concat(t === m && s.a.currentStep)
                        }, o.a.createElement("div", {
                            className: s.a.top
                        }, o.a.createElement("div", {
                            tabIndex: _,
                            className: "\n              ".concat(s.a.stepNum, "\n              ").concat(t < m && s.a.previousStepNum, "\n              ")
                        }, t < m ? o.a.createElement(i, {
                            className: s.a.check
                        }) : t), o.a.createElement("div", {
                            className: s.a.header
                        }, o.a.createElement("div", {
                            className: s.a.title,
                            tabIndex: _
                        }, a), o.a.createElement("div", {
                            className: s.a.status,
                            tabIndex: _
                        }, t < m ? r.hv : c))), m === t || p ? o.a.createElement(n.Fragment, null, o.a.createElement("div", {
                            className: s.a.expander
                        }), o.a.createElement("div", {
                            className: "".concat(s.a.bottom, " hideMobileTablet"),
                            tabIndex: _
                        }, d), o.a.createElement("div", {
                            className: "".concat(s.a.bottom, " hideDesktop"),
                            tabIndex: _
                        }, u)) : null), o.a.createElement("div", {
                            className: s.a.pointyWrap
                        }, o.a.createElement("div", {
                            className: "".concat(s.a.pointy, " ").concat(t === m && s.a.currentPointy)
                        })))
                    },
                    a = e.landingOverride,
                    c = e.currentStep,
                    r = e.copy,
                    l = e.mode;
                return o.a.createElement("div", {
                    className: function(e) {
                        return e ? [s.a.horizontal, s.a.landingOverride].join(" ") : s.a.vertical
                    }(a)
                }, t(1, r.ca, {
                    1: r.cb,
                    2: r.cb,
                    3: r.cb
                }[c], r.cc), t(2, r.cd, {
                    1: r.ce,
                    2: r.ce,
                    3: r.ce
                }[c], r.ho, r.cf), t(3, r.cg, r.ch, r.ci), "UOC" === l && t(4, r.tk, "", r.tl))
            }
            a.d(t, "a", function() {
                return d
            })
        },
        155: function(e, t, a) {
            "use strict";

            function n() {
                var e = document.getElementsByClassName("grid-content");
                return e[0] ? e[0] : (console.warn("No grid scrolling node found"), {})
            }

            function o() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.toTop,
                    a = void 0 === t || t,
                    o = e.smooth,
                    c = void 0 === o || o,
                    r = e.factor,
                    i = n(),
                    l = i.clientHeight,
                    s = {
                        top: a ? 0 : l * r + i.scrollTop
                    };
                c && (s.behavior = "smooth"), i.scroll && i.scroll(s)
            }
            a.d(t, "a", function() {
                return n
            }), a.d(t, "b", function() {
                return o
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
        432: function(e, t, a) {
            e.exports = a.p + "static/media/V1.3c125565.png"
        },
        433: function(e, t, a) {
            e.exports = a.p + "static/media/V5.71248719.png"
        },
        434: function(e, t, a) {
            e.exports = {
                checkContainer: "AttestationModal_checkContainer__mxP7e",
                body: "AttestationModal_body__irniu",
                list: "AttestationModal_list__125E7",
                align: "AttestationModal_align__3R1kE",
                label: "AttestationModal_label__2w7K6",
                labelText: "AttestationModal_labelText__1HbNG inline-multilang-support",
                continueMobile: "AttestationModal_continueMobile__3sXqv",
                cancelMobile: "AttestationModal_cancelMobile__374Xt",
                desktopButton: "AttestationModal_desktopButton__o0Uqk"
            }
        },
        436: function(e, t, a) {
            e.exports = {
                page: "NoFooterColumnLayout_page__3kCcu content-flip"
            }
        },
        438: function(e, t, a) {
            e.exports = {
                content: "Landing_content__2Tkw5 content",
                ravUocContent: "Landing_ravUocContent__yGjNn",
                scroller: "Landing_scroller__2wDD5 content-flip",
                scrollWrapper: "Landing_scrollWrapper__3s36Z",
                whiteBackground: "Landing_whiteBackground__2Cawt",
                blueBackground: "Landing_blueBackground__3MEny",
                greyBackground: "Landing_greyBackground__3mviW",
                footerLink: "Landing_footerLink__2r0be",
                crest: "Landing_crest__3vIH5 multilang-support multilang-support",
                footer: "Landing_footer__2pFzX",
                footerContent: "Landing_footerContent__2Nyjk content",
                welcome: "Landing_welcome__2RoU3",
                titleCopy: "Landing_titleCopy__2BmB9",
                bodyCopy: "Landing_bodyCopy__1_dVz fs-bodyCopyLarge",
                getStarted: "Landing_getStarted__1UTjr",
                heros: "Landing_heros__1FA2w multilang-support",
                hero1: "Landing_hero1__1fa2y",
                hero2: "Landing_hero2__uu1Wl",
                fadein1: "Landing_fadein1__2Q-gq",
                fadein2: "Landing_fadein2__b9bIA",
                wayfinding: "Landing_wayfinding__eI1UI",
                wayfindingWrapper: "Landing_wayfindingWrapper__2v2LJ",
                faqTitleCopy: "Landing_faqTitleCopy__1FS1I",
                faq: "Landing_faq__13Lmx fwhite",
                question: "Landing_question__3atIJ cblack",
                answer: "Landing_answer__2fXyo cblack",
                footerNavButton: "Landing_footerNavButton__26Q95"
            }
        },
        701: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(107),
                o = a(108),
                c = a(113),
                r = a(110),
                i = a(112),
                l = a(0),
                s = a.n(l),
                d = a(30),
                u = a.n(d),
                m = a(259),
                p = a.n(m),
                _ = a(432),
                y = a.n(_),
                g = a(433),
                f = a.n(g),
                h = a(18),
                b = a(132),
                v = a.n(b),
                E = a(116),
                k = a(109),
                x = a(106),
                C = a(105),
                w = a(434),
                N = a.n(w),
                I = {
                    body: "BODY",
                    list: "LIST",
                    checkbox: "CHECKBOX"
                },
                L = [{
                    key: "ui",
                    type: I.body
                }, {
                    key: "uia",
                    type: I.body
                }, {
                    key: "uib",
                    type: I.body
                }, {
                    key: "uic",
                    type: I.body
                }, {
                    key: I.list,
                    type: I.list,
                    items: [{
                        key: "uid"
                    }, {
                        key: "uie"
                    }, {
                        key: "uif"
                    }, {
                        key: "uii"
                    }]
                }, {
                    key: "uig",
                    type: I.body
                }, {
                    key: "uih",
                    type: I.checkbox
                }];

            function W(e) {
                for (var t = e.copy, a = e.onClose, n = e.onContinue, o = e.language, c = Object(l.useState)(!1), r = Object(h.a)(c, 2), i = r[0], d = r[1], u = [], m = 0; m < L.length; m += 1) {
                    var p = L[m];
                    if (p.type === I.body) u.push(s.a.createElement(C.a, {
                        key: p.key,
                        tabIndex: 0,
                        className: N.a.bodyCopy,
                        text: t[p.key]
                    }));
                    else if (p.type === I.checkbox) u.push(s.a.createElement("div", {
                        key: p.key,
                        className: N.a.checkContainer
                    }, s.a.createElement("input", {
                        type: "checkbox",
                        name: "attestation",
                        id: "attestation",
                        checked: i,
                        onChange: function(e) {
                            return d(e.target.checked)
                        }
                    }), s.a.createElement("label", {
                        className: N.a.label,
                        htmlFor: "attestation"
                    }, s.a.createElement("p", {
                        className: N.a.labelText
                    }, t[p.key]))));
                    else if (p.type === I.list) {
                        for (var _ = [], y = 0; y < p.items.length; y += 1) {
                            var g = p.items[y];
                            _.push(s.a.createElement("li", {
                                key: g.key,
                                tabIndex: 0
                            }, s.a.createElement(C.a, {
                                className: N.a.bodyCopy,
                                text: s.a.createElement("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: t[g.key]
                                    }
                                })
                            })))
                        }
                        u.push(s.a.createElement("ul", {
                            key: p.key,
                            className: "".concat(N.a.list, " ").concat("FA" === o ? N.a.align : "")
                        }, _))
                    }
                }
                return s.a.createElement(E.a, {
                    hideMobileFooter: !0,
                    handleClose: a,
                    title: s.a.createElement(k.a, {
                        tabIndex: 0,
                        text: t.uf
                    }),
                    body: s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
                        className: N.a.body
                    }, u, s.a.createElement(x.a, {
                        className: "hiddenTablet hiddenDesktop ".concat(N.a.continueMobile),
                        colorOption: i ? "yellow" : "gray",
                        text: t.uh,
                        onClick: i ? n : v.a,
                        typeOption: "center"
                    }), s.a.createElement(x.a, {
                        className: "hiddenTablet hiddenDesktop ".concat(N.a.cancelMobile),
                        onClick: a,
                        text: t.ug,
                        typeOption: "center",
                        colorOption: "secondary"
                    }))),
                    cancelButton: s.a.createElement(x.a, {
                        className: N.a.desktopButton,
                        onClick: a,
                        text: t.ug,
                        typeOption: "center",
                        colorOption: "secondary"
                    }),
                    continueButton: s.a.createElement(x.a, {
                        className: N.a.desktopButton,
                        colorOption: i ? "yellow" : "gray",
                        text: t.uh,
                        onClick: i ? n : v.a,
                        typeOption: "center"
                    })
                })
            }
            W.defaultProps = {
                onClose: function() {
                    return null
                },
                onContinue: function() {
                    return null
                }
            };
            var S = a(154),
                M = a(436),
                O = a.n(M);
            var B = function(e) {
                    var t = e.children,
                        a = e.id;
                    return s.a.createElement("div", {
                        className: "grid-content"
                    }, s.a.createElement("div", {
                        className: O.a.page,
                        id: a
                    }, t))
                },
                T = a(25),
                q = a(438),
                A = a.n(q),
                j = a(155),
                H = a(20);

            function F() {
                var e = Object(j.a)(),
                    t = e.clientHeight;
                return e.scrollTop + t + 50 < e.scrollHeight
            }
            a.d(t, "default", function() {
                return U
            });
            var U = function(e) {
                function t(e) {
                    var a;
                    return Object(n.a)(this, t), (a = Object(c.a)(this, Object(r.a)(t).call(this, e))).handleShowMoreButton = function() {
                        a.setState({
                            showMoreButton: F()
                        })
                    }, a.handleGetStarted = function() {
                        var e = a.props,
                            t = e.mode,
                            n = e.agreedToAttestation,
                            o = e.history;
                        H.b ? a.setState({
                            showWarnIE: !0
                        }) : "RAV" !== t || n ? o.push("/voterlookup") : a.setState({
                            showAttestationModal: !0
                        })
                    }, a.handleContinueAttestation = function() {
                        var e = a.props,
                            t = e.setAgreedToAttestation,
                            n = e.history;
                        t(), n.push("/voterLookup")
                    }, a.scrollDown = function() {
                        Object(j.b)({
                            toTop: !1,
                            smooth: !0,
                            factor: .75
                        })
                    }, a.scrollUp = function() {
                        Object(j.b)()
                    }, a.state = {
                        showMoreButton: !1,
                        showAttestationModal: !1,
                        showWarnIE: !1
                    }, a.scrollRef = s.a.createRef(), a.throttledHandleShowMoreButton = u()(a.handleShowMoreButton, 200), a
                }
                return Object(i.a)(t, e), Object(o.a)(t, [{
                    key: "componentDidMount",
                    value: function() {
                        Object(j.a)().addEventListener("scroll", this.throttledHandleShowMoreButton), this.setState({
                            showMoreButton: F()
                        })
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        Object(j.a)().removeEventListener("scroll", this.throttledHandleShowMoreButton)
                    }
                }, {
                    key: "renderHeroes",
                    value: function() {
                        return s.a.createElement("div", {
                            className: A.a.heros
                        }, s.a.createElement("img", {
                            alt: "",
                            src: y.a,
                            className: A.a.hero1
                        }), s.a.createElement("img", {
                            alt: "",
                            src: f.a,
                            className: A.a.hero2
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            a = t.copy,
                            n = t.language,
                            o = t.mode,
                            c = t.contentTabIndex,
                            r = this.state,
                            i = r.showMoreButton,
                            l = r.showAttestationModal,
                            d = r.showWarnIE;
                        return s.a.createElement(s.a.Fragment, null, d && s.a.createElement(E.a, {
                            id: "".concat("FA" === n ? "warnIEML" : "warnIE"),
                            handleClose: function() {
                                return e.setState({
                                    showWarnIE: !1
                                })
                            },
                            title: "This Browser is not supported",
                            body: a.zuc,
                            cancelButton: s.a.createElement(x.a, {
                                className: "".concat("FA" === n ? "content-flip" : ""),
                                text: "Close",
                                onClick: function() {
                                    return e.setState({
                                        showWarnIE: !1
                                    })
                                },
                                colorOption: "secondary"
                            })
                        }), l && s.a.createElement(W, {
                            copy: a,
                            onClose: function() {
                                e.setState({
                                    showAttestationModal: !1
                                })
                            },
                            onContinue: this.handleContinueAttestation,
                            language: n
                        }), s.a.createElement(B, {
                            id: "landing"
                        }, s.a.createElement("div", {
                            ref: this.scrollRef,
                            className: A.a.scrollWrapper
                        }, s.a.createElement("div", {
                            className: "".concat("ISB" === o && A.a.whiteBackground, " ").concat("UOC" === o && A.a.greyBackground, " ").concat("RAV" === o && A.a.blueBackground)
                        }), s.a.createElement("div", {
                            className: "".concat(A.a.content, " ").concat("ISB" !== o && A.a.ravUocContent)
                        }, this.renderHeroes(), s.a.createElement("div", {
                            className: A.a.welcome
                        }, s.a.createElement(k.a, {
                            className: A.a.titleCopy,
                            text: a.bx,
                            width: "12em",
                            tabIndex: c
                        }), s.a.createElement(C.a, {
                            className: A.a.bodyCopy,
                            text: a.by,
                            tabIndex: c
                        }), s.a.createElement(x.a, {
                            className: A.a.getStarted,
                            colorOption: "yellow",
                            typeOption: "right",
                            onClick: this.handleGetStarted,
                            text: a.fq,
                            tabIndex: c
                        })), s.a.createElement(S.a, {
                            copy: Object(T.a)("Wayfinding", o, n),
                            mode: o,
                            currentStep: 1,
                            landingOverride: !0,
                            contentTabIndex: c
                        }), s.a.createElement(k.a, {
                            className: A.a.faqTitleCopy,
                            text: a.cj,
                            tabIndex: c
                        }), a.ck && a.cl && s.a.createElement("div", {
                            className: A.a.faq
                        }, s.a.createElement(C.a, {
                            className: A.a.question,
                            text: a.ck,
                            tabIndex: c
                        }), s.a.createElement(C.a, {
                            className: A.a.answer,
                            tabIndex: c,
                            text: s.a.createElement("div", {
                                dangerouslySetInnerHTML: {
                                    __html: a.cl
                                }
                            })
                        })), a.cm && a.cn && s.a.createElement("div", {
                            className: A.a.faq
                        }, s.a.createElement(C.a, {
                            className: A.a.question,
                            text: a.cm,
                            tabIndex: c
                        }), s.a.createElement(C.a, {
                            className: A.a.answer,
                            tabIndex: c,
                            text: s.a.createElement("div", {
                                dangerouslySetInnerHTML: {
                                    __html: a.cn
                                }
                            })
                        })), a.co && a.cp && s.a.createElement("div", {
                            className: A.a.faq
                        }, s.a.createElement(C.a, {
                            className: A.a.question,
                            text: a.co,
                            tabIndex: c
                        }), s.a.createElement(C.a, {
                            className: A.a.answer,
                            tabIndex: c,
                            text: s.a.createElement("div", {
                                dangerouslySetInnerHTML: {
                                    __html: a.cp
                                }
                            })
                        })), a.cq && a.cr && s.a.createElement("div", {
                            className: A.a.faq
                        }, s.a.createElement(C.a, {
                            className: A.a.question,
                            text: a.cq,
                            tabIndex: c
                        }), s.a.createElement(C.a, {
                            className: A.a.answer,
                            tabIndex: c,
                            text: s.a.createElement("div", {
                                dangerouslySetInnerHTML: {
                                    __html: a.cr
                                }
                            })
                        })), a.cs && a.ct && s.a.createElement("div", {
                            className: A.a.faq
                        }, s.a.createElement(C.a, {
                            className: A.a.question,
                            text: a.cs,
                            tabIndex: c
                        }), s.a.createElement(C.a, {
                            className: A.a.answer,
                            tabIndex: c,
                            text: s.a.createElement("div", {
                                dangerouslySetInnerHTML: {
                                    __html: a.ct
                                }
                            })
                        })), a.cu && a.cv && s.a.createElement("div", {
                            className: A.a.faq
                        }, s.a.createElement(C.a, {
                            className: A.a.question,
                            text: a.cu,
                            tabIndex: c
                        }), s.a.createElement(C.a, {
                            tabIndex: c,
                            className: A.a.answer,
                            text: s.a.createElement("div", {
                                dangerouslySetInnerHTML: {
                                    __html: a.cv
                                }
                            })
                        }))), s.a.createElement("footer", {
                            className: A.a.footer
                        }, s.a.createElement("div", {
                            className: A.a.footerContent
                        }, s.a.createElement("img", {
                            key: "img",
                            src: p.a,
                            alt: a.tj,
                            className: A.a.crest
                        }), s.a.createElement(C.a, {
                            className: A.a.footerLink,
                            text: s.a.createElement("div", {
                                dangerouslySetInnerHTML: {
                                    __html: a.re
                                }
                            }),
                            tabIndex: c
                        }), s.a.createElement(x.a, {
                            className: A.a.footerNavButton,
                            colorOption: "white",
                            typeOption: "up",
                            onClick: this.scrollUp,
                            text: a.cw,
                            tabIndex: c
                        }))))), i && s.a.createElement(x.a, {
                            className: A.a.scroller,
                            colorOption: "gray",
                            typeOption: "down",
                            width: "12em",
                            onClick: this.scrollDown,
                            text: a.fw,
                            tabIndex: c
                        }))
                    }
                }]), t
            }(s.a.Component)
        }
    }
]);