(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        101: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, "default", function() {
                return d
            });
            var n = a(0),
                c = a.n(n),
                o = a(109),
                l = a(105),
                r = a(208),
                i = a(368),
                s = a.n(i);

            function d(e) {
                var t = e.copy,
                    a = e.inModal,
                    n = e.contentTabIndex,
                    i = e.selectedPrivacy,
                    d = e.updateSelectedPrivacy,
                    u = e.history,
                    m = function(e) {
                        d(e), a || u.push("/overview")
                    },
                    p = c.a.createElement("div", {
                        className: a ? s.a.modal : s.a.page
                    }, c.a.createElement("header", {
                        className: s.a.header
                    }, c.a.createElement(o.a, {
                        className: s.a.titleCopy,
                        text: t.ev,
                        tabIndex: a ? 0 : n
                    }), c.a.createElement(l.a, {
                        className: s.a.bodyCopy,
                        text: t.ew,
                        tabIndex: a ? 0 : n
                    })), c.a.createElement("div", {
                        className: s.a.body
                    }, c.a.createElement("div", {
                        className: "".concat(!0 === i && s.a.isSelected, " ").concat(s.a.choiceContainer)
                    }, c.a.createElement("div", {
                        className: s.a.choice
                    }, c.a.createElement("div", {
                        className: s.a.choiceContent
                    }, c.a.createElement(l.a, {
                        className: "hiddenMobile ".concat(s.a.privacyChoiceText1),
                        text: c.a.createElement("div", {
                            dangerouslySetInnerHTML: {
                                __html: t.ex
                            }
                        }),
                        tabIndex: a ? 0 : n
                    }), c.a.createElement(l.a, {
                        className: "hiddenMobile ".concat(s.a.privacyChoiceText2),
                        text: "".concat(t.ey, " ").concat(t.ez, " ").concat(t.fa),
                        tabIndex: a ? 0 : n
                    }), c.a.createElement(l.a, {
                        className: "hiddenDesktop hiddenTablet ".concat(s.a.privacyChoiceText2),
                        text: c.a.createElement("div", {
                            dangerouslySetInnerHTML: {
                                __html: t.fb
                            }
                        }),
                        tabIndex: a ? 0 : n
                    }), c.a.createElement("button", {
                        className: "".concat(s.a.privacyBtn, " ").concat(!1 === i && s.a.isUnselected),
                        onClick: function() {
                            return m(!0)
                        },
                        tabIndex: a ? 0 : n
                    }, !0 === i && c.a.createElement(r.a, null), c.a.createElement("span", {
                        "aria-label": "".concat(i ? t.va : t.vb, " ").concat(t.eo),
                        className: "".concat(s.a.privacyBtnCopy, " hiddenTabletDesktop")
                    }, t.eo), c.a.createElement("span", {
                        "aria-label": "".concat(i ? t.va : t.vb, " ").concat(t.ko),
                        className: "".concat(s.a.privacyBtnCopy, " hiddenMobile")
                    }, t.ko))))), c.a.createElement("div", {
                        className: "".concat(!1 === i && s.a.isSelected, " ").concat(s.a.choiceContainer)
                    }, c.a.createElement("div", {
                        className: s.a.choice
                    }, c.a.createElement("div", {
                        className: s.a.choiceContent
                    }, c.a.createElement(l.a, {
                        className: "hiddenMobile ".concat(s.a.privacyChoiceText1),
                        text: c.a.createElement("div", {
                            dangerouslySetInnerHTML: {
                                __html: t.fc
                            }
                        }),
                        tabIndex: a ? 0 : n
                    }), c.a.createElement(l.a, {
                        className: "hiddenMobile ".concat(s.a.privacyChoiceText2),
                        text: "".concat(t.fd, " ").concat(t.fe, " ").concat(t.ff),
                        tabIndex: a ? 0 : n
                    }), c.a.createElement(l.a, {
                        className: "hiddenTablet hiddenDesktop ".concat(s.a.privacyChoiceText2),
                        text: c.a.createElement("div", {
                            dangerouslySetInnerHTML: {
                                __html: t.fg
                            }
                        }),
                        tabIndex: a ? 0 : n
                    }), c.a.createElement("button", {
                        className: "".concat(s.a.privacyBtn, " ").concat(!0 === i && s.a.isUnselected),
                        onClick: function() {
                            return m(!1)
                        },
                        tabIndex: a ? 0 : n
                    }, !1 === i && c.a.createElement(r.a, null), c.a.createElement("span", {
                        "aria-label": "".concat(!1 === i ? t.va : t.vb, " ").concat(t.rb),
                        className: "".concat(s.a.privacyBtnCopy, " hiddenTabletDesktop")
                    }, t.rb), c.a.createElement("span", {
                        "aria-label": "".concat(!1 === i ? t.va : t.vb, " ").concat(t.kp),
                        className: "".concat(s.a.privacyBtnCopy, " hiddenMobile")
                    }, t.kp)))))), c.a.createElement("div", {
                        className: "hiddenDesktop hiddenTablet ".concat(s.a.textBody)
                    }, c.a.createElement("div", null, c.a.createElement(l.a, {
                        className: s.a.privacyChoiceText1,
                        text: c.a.createElement("div", {
                            dangerouslySetInnerHTML: {
                                __html: t.ex
                            }
                        }),
                        tabIndex: a ? 0 : n
                    }), c.a.createElement(l.a, {
                        className: s.a.privacyChoiceText2,
                        text: "".concat(t.ey, " ").concat(t.ez, " ").concat(t.fa),
                        tabIndex: a ? 0 : n
                    }), c.a.createElement("hr", {
                        className: "hiddenTablet hideDesktop ".concat(s.a.hr)
                    })), c.a.createElement("div", null, c.a.createElement(l.a, {
                        className: s.a.privacyChoiceText1,
                        text: c.a.createElement("div", {
                            dangerouslySetInnerHTML: {
                                __html: t.fc
                            }
                        }),
                        tabIndex: a ? 0 : n
                    }), c.a.createElement(l.a, {
                        className: s.a.privacyChoiceText2,
                        text: "".concat(t.fd, " ").concat(t.fe, " ").concat(t.ff),
                        tabIndex: a ? 0 : n
                    }))));
                return a ? p : c.a.createElement("div", {
                    className: "grid-content"
                }, p)
            }
        },
        105: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return r
            });
            var n = a(0),
                c = a.n(n),
                o = a(366),
                l = a.n(o);

            function r(e) {
                var t = e.margin,
                    a = e.text,
                    n = e.className,
                    o = e.tabIndex,
                    r = {
                        margin: t
                    };
                return a ? c.a.createElement("div", {
                    style: r,
                    className: "".concat(n, " ").concat(l.a.body),
                    tabIndex: o
                }, a) : null
            }
            r.defaultProps = {
                className: ""
            }
        },
        106: function(e, t, a) {
            "use strict";
            var n = a(0),
                c = a.n(n),
                o = a(142),
                l = a(372),
                r = a.n(l),
                i = a(207);

            function s() {
                return (s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var d = c.a.createElement("g", {
                id: "ICON/LANGUAGE",
                stroke: "none",
                strokeWidth: 1,
                fill: "none",
                fillRule: "evenodd"
            }, c.a.createElement("g", null, c.a.createElement("polygon", {
                id: "Path",
                points: "0 0 24 0 24 24 0 24"
            }), c.a.createElement("path", {
                d: "M11.99,2 C6.47,2 2,6.48 2,12 C2,17.52 6.47,22 11.99,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 11.99,2 Z M18.92,8 L15.97,8 C15.65,6.75 15.19,5.55 14.59,4.44 C16.43,5.07 17.96,6.35 18.92,8 Z M12,4.04 C12.83,5.24 13.48,6.57 13.91,8 L10.09,8 C10.52,6.57 11.17,5.24 12,4.04 Z M4.26,14 C4.1,13.36 4,12.69 4,12 C4,11.31 4.1,10.64 4.26,10 L7.64,10 C7.56,10.66 7.5,11.32 7.5,12 C7.5,12.68 7.56,13.34 7.64,14 L4.26,14 Z M5.08,16 L8.03,16 C8.35,17.25 8.81,18.45 9.41,19.56 C7.57,18.93 6.04,17.66 5.08,16 L5.08,16 Z M8.03,8 L5.08,8 C6.04,6.34 7.57,5.07 9.41,4.44 C8.81,5.55 8.35,6.75 8.03,8 L8.03,8 Z M12,19.96 C11.17,18.76 10.52,17.43 10.09,16 L13.91,16 C13.48,17.43 12.83,18.76 12,19.96 Z M14.34,14 L9.66,14 C9.57,13.34 9.5,12.68 9.5,12 C9.5,11.32 9.57,10.65 9.66,10 L14.34,10 C14.43,10.65 14.5,11.32 14.5,12 C14.5,12.68 14.43,13.34 14.34,14 Z M14.59,19.56 C15.19,18.45 15.65,17.25 15.97,16 L18.92,16 C17.96,17.65 16.43,18.93 14.59,19.56 L14.59,19.56 Z M16.36,14 C16.44,13.34 16.5,12.68 16.5,12 C16.5,11.32 16.44,10.66 16.36,10 L19.74,10 C19.9,10.64 20,11.31 20,12 C20,12.69 19.9,13.36 19.74,14 L16.36,14 Z",
                id: "Shape",
                fillRule: "nonzero"
            })));
            a.p;

            function u() {
                return (u = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var m = c.a.createElement("g", {
                id: "Symbols",
                stroke: "none",
                strokeWidth: 1,
                fill: "none",
                fillRule: "evenodd"
            }, c.a.createElement("g", {
                id: "ICON/SETTINGS",
                transform: "translate(-2.000000, -2.000000)"
            }, c.a.createElement("g", null, c.a.createElement("polygon", {
                id: "Path",
                points: "0 0 24 0 24 24 0 24"
            }), c.a.createElement("path", {
                d: "M19.14,12.936 C19.176,12.636 19.2,12.324 19.2,12 C19.2,11.676 19.176,11.364 19.128,11.064 L21.156,9.48 C21.336,9.336 21.384,9.072 21.276,8.868 L19.356,5.544 C19.236,5.328 18.984,5.256 18.768,5.328 L16.38,6.288 C15.876,5.904 15.348,5.592 14.76,5.352 L14.4,2.808 C14.364,2.568 14.16,2.4 13.92,2.4 L10.08,2.4 C9.84,2.4 9.648,2.568 9.612,2.808 L9.252,5.352 C8.664,5.592 8.124,5.916 7.632,6.288 L5.244,5.328 C5.028,5.244 4.776,5.328 4.656,5.544 L2.736,8.868 C2.616,9.084 2.664,9.336 2.856,9.48 L4.884,11.064 C4.836,11.364 4.8,11.688 4.8,12 C4.8,12.312 4.824,12.636 4.872,12.936 L2.844,14.52 C2.664,14.664 2.616,14.928 2.724,15.132 L4.644,18.456 C4.764,18.672 5.016,18.744 5.232,18.672 L7.62,17.712 C8.124,18.096 8.652,18.408 9.24,18.648 L9.6,21.192 C9.648,21.432 9.84,21.6 10.08,21.6 L13.92,21.6 C14.16,21.6 14.364,21.432 14.388,21.192 L14.748,18.648 C15.336,18.408 15.876,18.084 16.368,17.712 L18.756,18.672 C18.972,18.756 19.224,18.672 19.344,18.456 L21.264,15.132 C21.384,14.916 21.336,14.664 21.144,14.52 L19.14,12.936 L19.14,12.936 Z M12,15.6 C10.02,15.6 8.4,13.98 8.4,12 C8.4,10.02 10.02,8.4 12,8.4 C13.98,8.4 15.6,10.02 15.6,12 C15.6,13.98 13.98,15.6 12,15.6 Z",
                id: "Shape",
                fillRule: "nonzero"
            }))));
            a.p;

            function p() {
                return (p = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var h = c.a.createElement("g", {
                id: "ICON/HELP",
                stroke: "none",
                strokeWidth: 1,
                fill: "none",
                fillRule: "evenodd"
            }, c.a.createElement("g", null, c.a.createElement("polygon", {
                id: "Path",
                points: "0 0 24 0 24 24 0 24"
            }), c.a.createElement("path", {
                d: "M11,18 L13,18 L13,16 L11,16 L11,18 Z M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M12,20 C7.59,20 4,16.41 4,12 C4,7.59 7.59,4 12,4 C16.41,4 20,7.59 20,12 C20,16.41 16.41,20 12,20 Z M12,6 C9.79,6 8,7.79 8,10 L10,10 C10,8.9 10.9,8 12,8 C13.1,8 14,8.9 14,10 C14,12 11,11.75 11,15 L13,15 C13,12.75 16,12.5 16,10 C16,7.79 14.21,6 12,6 Z",
                id: "Shape",
                fillRule: "nonzero"
            })));
            a.p;

            function b() {
                return (b = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var f = c.a.createElement("g", {
                id: "ICON/REVEIW",
                stroke: "none",
                strokeWidth: 1,
                fill: "none",
                fillRule: "evenodd"
            }, c.a.createElement("g", null, c.a.createElement("polygon", {
                id: "Path",
                points: "0 0 24 0 24 24 0 24"
            }), c.a.createElement("path", {
                d: "M21,5 C19.89,4.65 18.67,4.5 17.5,4.5 C15.55,4.5 13.45,4.9 12,6 C10.55,4.9 8.45,4.5 6.5,4.5 C4.55,4.5 2.45,4.9 1,6 L1,20.65 C1,20.9 1.25,21.15 1.5,21.15 C1.6,21.15 1.65,21.1 1.75,21.1 C3.1,20.45 5.05,20 6.5,20 C8.45,20 10.55,20.4 12,21.5 C13.35,20.65 15.8,20 17.5,20 C19.15,20 20.85,20.3 22.25,21.05 C22.35,21.1 22.4,21.1 22.5,21.1 C22.75,21.1 23,20.85 23,20.6 L23,6 C22.4,5.55 21.75,5.25 21,5 Z M21,18.5 C19.9,18.15 18.7,18 17.5,18 C15.8,18 13.35,18.65 12,19.5 L12,8 C13.35,7.15 15.8,6.5 17.5,6.5 C18.7,6.5 19.9,6.65 21,7 L21,18.5 Z",
                id: "Shape",
                fillRule: "nonzero"
            })));
            a.p;
            a.d(t, "a", function() {
                return C
            });
            var v = {
                    yellow: r.a.yellow,
                    white: r.a.white,
                    gray: r.a.gray,
                    transparent: r.a.transparent,
                    black: r.a.black,
                    secondary: r.a.secondary
                },
                g = {
                    up: r.a.up,
                    left: r.a.left,
                    right: r.a.right,
                    upRight: r.a.upRight,
                    down: r.a.down,
                    center: r.a.center,
                    icon: r.a.icon,
                    iconTopMobile: r.a.iconTopMobile
                },
                y = {
                    language: function(e) {
                        return c.a.createElement("svg", s({
                            focusable: "false",
                            width: "24px",
                            height: "24px",
                            viewBox: "0 0 24 24",
                            version: 1.1,
                            xmlnsXlink: "http://www.w3.org/1999/xlink"
                        }, e), d)
                    },
                    settings: function(e) {
                        return c.a.createElement("svg", u({
                            width: "20px",
                            height: "20px",
                            viewBox: "0 0 20 20",
                            version: 1.1,
                            xmlnsXlink: "http://www.w3.org/1999/xlink"
                        }, e), m)
                    },
                    help: function(e) {
                        return c.a.createElement("svg", p({
                            focusable: "false",
                            width: "24px",
                            height: "24px",
                            viewBox: "0 0 24 24",
                            version: 1.1,
                            xmlnsXlink: "http://www.w3.org/1999/xlink"
                        }, e), h)
                    },
                    review: function(e) {
                        return c.a.createElement("svg", b({
                            focusable: "false",
                            width: "24px",
                            height: "24px",
                            viewBox: "0 0 24 24",
                            version: 1.1,
                            xmlnsXlink: "http://www.w3.org/1999/xlink"
                        }, e), f)
                    }
                },
                E = function(e) {
                    return "gray" === e ? "blackNoVar" : "black" === e ? "white" : "black"
                },
                _ = function(e) {
                    var t = y[e];
                    return c.a.createElement(t, null)
                };

            function C(e) {
                var t = e.colorOption,
                    a = e.typeOption,
                    n = e.iconOption,
                    l = e.text,
                    s = e.onClick,
                    d = e.height,
                    u = e.width,
                    m = e.margin,
                    p = e.className,
                    h = e.tabIndex,
                    b = e.children,
                    f = e.ariaLabel,
                    y = [v[t] || v.white, g[a] || v.center, r.a.navButton, p].join(" "),
                    C = {
                        height: d,
                        width: u,
                        margin: m
                    };
                return c.a.createElement("button", {
                    "aria-label": f,
                    style: C,
                    onClick: s,
                    className: "".concat(p, " ").concat(y),
                    tabIndex: h
                }, ("up" === a || "left" === a) && c.a.createElement(i.a, null), ("icon" === a || "iconTopMobile" === a) && _(n), l && c.a.createElement(o.a, {
                    className: r.a.labelCopy,
                    center: "center" === a,
                    text: l,
                    color: E(t)
                }), ("right" === a || "down" === a || "upRight" === a) && c.a.createElement(i.a, null), b)
            }
            C.defaultProps = {
                className: "",
                children: null
            }
        },
        109: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return r
            });
            var n = a(0),
                c = a.n(n),
                o = a(364),
                l = a.n(o);

            function r(e) {
                var t = e.width,
                    a = e.text,
                    n = e.margin,
                    o = e.className,
                    r = e.tabIndex,
                    i = {
                        margin: n,
                        width: t
                    };
                return a ? c.a.createElement("div", {
                    tabIndex: r,
                    style: i,
                    className: "modal-title-override ".concat(o, " ").concat(l.a.title)
                }, a) : null
            }
            r.defaultProps = {
                className: ""
            }
        },
        116: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return p
            });
            var n = a(107),
                c = a(108),
                o = a(113),
                l = a(110),
                r = a(112),
                i = a(128),
                s = a(0),
                d = a.n(s),
                u = a(358),
                m = a.n(u),
                p = function(e) {
                    function t(e) {
                        var a;
                        return Object(n.a)(this, t), (a = Object(o.a)(this, Object(l.a)(t).call(this, e))).handlePriorityModalStateChange = function(e) {
                            !a.props.isPriority && e.detail.isPriority && a.setState({
                                hide: e.detail.isOpen
                            })
                        }, a.modalRef = d.a.createRef(), a.wrapperRef = d.a.createRef(), a.state = {
                            hide: !1
                        }, a.handleClickAway = a.handleClickAway.bind(Object(i.a)(Object(i.a)(a))), a.handleKeyDown = a.handleKeyDown.bind(Object(i.a)(Object(i.a)(a))), a
                    }
                    return Object(r.a)(t, e), Object(c.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.isPriority;
                            document.addEventListener("keydown", this.handleKeyDown);
                            var t = new CustomEvent("onModalStateChange", {
                                detail: {
                                    isOpen: !0,
                                    isPriority: e
                                }
                            });
                            document.dispatchEvent(t), this.resetFocus(), document.addEventListener("onModalStateChange", this.handlePriorityModalStateChange)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this.props.isPriority;
                            document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("onModalStateChange", this.handlePriorityModalStateChange);
                            var t = new CustomEvent("onModalStateChange", {
                                detail: {
                                    isOpen: !1,
                                    isPriority: e
                                }
                            });
                            document.dispatchEvent(t)
                        }
                    }, {
                        key: "getFocusableElements",
                        value: function() {
                            return Array.from(this.modalRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(function(e) {
                                return "none" !== window.getComputedStyle(e).getPropertyValue("display")
                            })
                        }
                    }, {
                        key: "resetFocus",
                        value: function() {
                            var e = this.getFocusableElements();
                            e.sort(function(e, t) {
                                return e.tabIndex - t.tabIndex
                            }), e[0].focus()
                        }
                    }, {
                        key: "handleClickAway",
                        value: function(e) {
                            var t = this.props.handleClose;
                            this.modalRef && this.modalRef.current.contains(e.target) || t(e)
                        }
                    }, {
                        key: "handleKeyDown",
                        value: function(e) {
                            e.stopPropagation();
                            var t = this.props.handleClose;
                            27 !== e.keyCode && "Escape" !== e.key || t(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.id,
                                a = e.title,
                                n = e.body,
                                c = e.cancelButton,
                                o = e.continueButton,
                                l = e.isPriority,
                                r = e.isMedPriority,
                                i = e.hideMobileFooter,
                                u = this.state.hide,
                                p = "";
                            "statementModal" === t && (p = "content-flip");
                            var h = this.wrapperRef && this.wrapperRef.current && "root" === this.wrapperRef.current.parentElement.id;
                            return d.a.createElement(s.Fragment, null, d.a.createElement("div", {
                                id: "modal-wrapper",
                                className: "".concat(m.a.modalWrapper, " ").concat(h ? m.a.parentIsRoot : void 0, " ").concat(l ? m.a.isPriority : void 0, " ").concat(r ? m.a.isMedPriority : void 0, " ").concat(i ? m.a.hideMobileFooter : void 0, " modal-wrapper-override ").concat("warnIEML" === t ? "content-flip" : void 0),
                                role: "presentation",
                                onClick: this.handleClickAway,
                                ref: this.wrapperRef
                            }, d.a.createElement("div", {
                                id: t,
                                className: "".concat(m.a.modal, " ").concat(h ? m.a.wrapperParentIsRoot : void 0, " ").concat(h ? void 0 : p, " ").concat("warnIEML" === t ? m.a.dir : void 0),
                                ref: this.modalRef
                            }, !u && d.a.createElement("div", {
                                className: m.a.threeRowContent
                            }, a && d.a.createElement("div", {
                                className: "modal-title ".concat(m.a.top)
                            }, a), d.a.createElement("div", {
                                className: m.a.middle
                            }, n), d.a.createElement("div", {
                                className: "hiddenTablet hiddenDesktop ".concat(m.a.mobileBottom)
                            }), d.a.createElement("div", {
                                className: "hiddenMobile ".concat(m.a.bottom)
                            }, c, o)))), !u && !i && d.a.createElement("div", {
                                className: "hiddenTablet hiddenDesktop ".concat(m.a.stickyBottom, " ").concat(l ? m.a.mobileFooterIsPriority : void 0)
                            }, c, o))
                        }
                    }]), t
                }(d.a.Component)
        },
        139: function(e, t, a) {
            "use strict";
            a.d(t, "m", function() {
                return i
            }), a.d(t, "r", function() {
                return s
            }), a.d(t, "u", function() {
                return u
            }), a.d(t, "q", function() {
                return p
            }), a.d(t, "j", function() {
                return h
            }), a.d(t, "y", function() {
                return b
            }), a.d(t, "v", function() {
                return f
            }), a.d(t, "i", function() {
                return v
            }), a.d(t, "l", function() {
                return g
            }), a.d(t, "z", function() {
                return y
            }), a.d(t, "s", function() {
                return E
            }), a.d(t, "k", function() {
                return _
            }), a.d(t, "d", function() {
                return C
            }), a.d(t, "c", function() {
                return O
            }), a.d(t, "f", function() {
                return x
            }), a.d(t, "g", function() {
                return S
            }), a.d(t, "e", function() {
                return k
            }), a.d(t, "h", function() {
                return N
            }), a.d(t, "x", function() {
                return w
            }), a.d(t, "a", function() {
                return M
            }), a.d(t, "n", function() {
                return B
            }), a.d(t, "b", function() {
                return L
            }), a.d(t, "p", function() {
                return T
            }), a.d(t, "t", function() {
                return I
            }), a.d(t, "w", function() {
                return P
            }), a.d(t, "C", function() {
                return F
            }), a.d(t, "o", function() {
                return H
            }), a.d(t, "B", function() {
                return R
            }), a.d(t, "A", function() {
                return A
            });
            var n = a(27),
                c = a(7),
                o = a(193),
                l = a(24),
                r = a.n(l),
                i = function(e) {
                    return r()(e, "contests", [])
                },
                s = function(e) {
                    return Boolean(r()(e, "candidates", !1))
                },
                d = function(e, t) {
                    return (r()(t, "custom_content") || []).find(function(t) {
                        return t.id === e
                    })
                },
                u = function(e, t) {
                    return e.filter(function(e) {
                        return r()(t, "".concat(p(e)), []).length > 0
                    }).length
                },
                m = function(e) {
                    var t = B(e),
                        a = j(e),
                        n = t.map(function(e) {
                            return {
                                id: e.id,
                                content: e,
                                type: "contest"
                            }
                        }),
                        c = function(e, t, a) {
                            return e.map(function(e) {
                                return n.findIndex(function(n) {
                                    return n.type === t && r()(n, a, null) === e
                                })
                            }).filter(function(e) {
                                return -1 != e
                            })
                        },
                        o = function(e, t, a, o) {
                            for (var l = [], i = !0; i;) i = !1, e.forEach(function(e, s) {
                                if (!l.includes(s)) {
                                    var d = r()(e, t, []),
                                        u = c(d, o, a);
                                    u.length > 0 && (i = !0, l.push(s)), u.sort().forEach(function(t, a) {
                                        var c = {
                                            id: e.id,
                                            content: e,
                                            type: "custom"
                                        };
                                        0 !== a && e.displayOnlyOnce || n.splice(t + a, 0, c)
                                    })
                                }
                            })
                        },
                        l = a.filter(function(e) {
                            return "BALLOT" === e.type
                        }),
                        i = a.filter(function(e) {
                            return "DIVISION" === e.type
                        }),
                        s = a.filter(function(e) {
                            return "CONTEST" === e.type
                        }),
                        d = a.filter(function(e) {
                            return "CONTEST HEADING" === e.type
                        }),
                        u = a.filter(function(e) {
                            return "CUSTOM CONTENT" === e.type
                        });
                    return l.forEach(function(e) {
                        return n.splice(0, 0, {
                            id: e.id,
                            content: e,
                            type: "custom"
                        })
                    }), o(i, "divisions", "content.division", "contest"), o(s, "contests", "content.id", "contest"), o(d, "contests", "content.id", "contest"), o(u, "contents", "content.id", "custom"), n.map(function(e) {
                        return {
                            id: e.id,
                            type: e.type
                        }
                    })
                },
                p = function(e) {
                    return r()(e, "id", void 0)
                },
                h = function(e, t) {
                    return i(t).find(function(t) {
                        return p(t) === e
                    })
                },
                b = function(e) {
                    return r()(e, "vote_for_max", 1)
                },
                f = function(e) {
                    return r()(e, "order", -1)
                },
                v = function(e) {
                    return r()(e, "candidates", [])
                },
                g = function(e) {
                    return r()(e, "name", void 0)
                },
                y = function(e) {
                    return r()(e, "vote_for_text", void 0)
                },
                E = function(e) {
                    return r()(e, "long_description", void 0)
                },
                _ = function(e) {
                    return r()(e, "statements", void 0)
                },
                C = function(e) {
                    return r()(e, "id", void 0)
                },
                O = function(e, t) {
                    return v(t).find(function(t) {
                        return C(t) === e
                    })
                },
                x = function(e) {
                    return r()(e, "name", void 0)
                },
                S = function(e) {
                    return r()(e, "occupation", void 0)
                },
                k = function(e) {
                    return r()(e, "isWriteIn", !1)
                },
                N = function(e) {
                    return r()(e, "partyId", null)
                },
                w = function(e) {
                    return Object.values(e).reduce(function(e, t) {
                        return e + t.length
                    }, 0)
                },
                j = function(e) {
                    return r()(e, "custom_content") || []
                },
                M = function(e, t) {
                    return h(e, t) || d(e, t) || null
                },
                B = function(e) {
                    return i(e).sort(function(e, t) {
                        return f(e) - f(t)
                    })
                },
                L = function(e) {
                    var t = m(e);
                    j(e), i(e);
                    return t.map(function(t) {
                        var a = t.id;
                        return "contest" === t.type ? h(a, e) : d(a, e)
                    })
                },
                T = function(e) {
                    return L(e)[0]
                },
                I = function(e, t) {
                    m(t);
                    var a = L(t),
                        n = a.findIndex(function(t) {
                            return t.id === e.id
                        });
                    return n + 1 < a.length ? a[n + 1] : void 0
                },
                P = function(e, t) {
                    m(t);
                    var a = L(t),
                        n = a.findIndex(function(t) {
                            return t.id === e.id
                        });
                    return n - 1 >= 0 ? a[n - 1] : void 0
                },
                F = function(e, t, a, l) {
                    var i, s = h(e, l),
                        d = r()(a, e, []),
                        u = r()(d, "length", 0),
                        m = b(s);
                    if (d.includes(t)) i = d.filter(function(e) {
                        return e !== t
                    });
                    else if (m > u) i = [].concat(Object(o.a)(d), [t]);
                    else {
                        if (1 !== m) return null;
                        i = [t]
                    }
                    return Object(c.a)({}, a, Object(n.a)({}, e, i))
                };

            function H(e, t, a) {
                return "".concat(p(e), "/").concat(t, "/").concat(a)
            }

            function R(e, t, a, n, c, o) {
                return !(!(e && t && a && (o.startsWith("/ballot") || o.startsWith("/review") || o.startsWith("/pollpass"))) || (n && n.id) === a && H(e, t, a) === c)
            }

            function A(e, t, a) {
                for (var n = !1, c = 0; c < e.length; c += 1)
                    if (!t[e[c]] && a.indexOf(e[c]) < 0) {
                        n = !0;
                        break
                    }
                return n
            }
        },
        142: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return i
            });
            var n = a(0),
                c = a.n(n),
                o = a(360),
                l = a.n(o),
                r = {
                    white: l.a.white,
                    black: l.a.black,
                    blackNoVar: l.a.blackNoVar
                };

            function i(e) {
                var t = e.margin,
                    a = e.text,
                    n = e.textLabel,
                    o = e.className,
                    i = e.color,
                    s = e.center,
                    d = e.name,
                    u = e.tabIndex,
                    m = t,
                    p = [o, r[i], l.a.labelCopy, s && l.a.center].join(" ");
                return n ? c.a.createElement("label", {
                    style: m,
                    className: p,
                    htmlFor: d,
                    tabIndex: u
                }, n) : a ? c.a.createElement("span", {
                    style: m,
                    className: p,
                    tabIndex: u
                }, a) : null
            }
            i.defaultProps = {
                color: "black"
            }
        },
        143: function(e, t, a) {
            "use strict";
            a.d(t, "h", function() {
                return g
            }), a.d(t, "c", function() {
                return y
            }), a.d(t, "f", function() {
                return E
            }), a.d(t, "g", function() {
                return _
            }), a.d(t, "i", function() {
                return C
            }), a.d(t, "e", function() {
                return O
            }), a.d(t, "k", function() {
                return x
            }), a.d(t, "j", function() {
                return S
            }), a.d(t, "d", function() {
                return w
            }), a.d(t, "a", function() {
                return j
            }), a.d(t, "b", function() {
                return M
            });
            var n = a(7),
                c = a(136),
                o = a.n(c),
                l = a(138),
                r = a(386),
                i = a.n(r),
                s = a(24),
                d = a.n(s),
                u = a(144),
                m = a(412),
                p = {},
                h = {},
                b = {};

            function f(e, t, a, n) {
                return d()(e, t, null) || d()(e, a, null) || n
            }

            function v(e, t) {
                return m({
                    method: "get",
                    url: e,
                    headers: {
                        "Cache-Control": "max-age=300"
                    }
                }).then(function(e) {
                    return e.data || []
                }).catch(function(e) {
                    return console.error(e), t
                })
            }
            var g = function() {
                    var e = Object(l.a)(o.a.mark(function e(t) {
                        return o.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", v("/fonts/".concat(t), null));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                y = function() {
                    var e = Object(l.a)(o.a.mark(function e() {
                        var t, a;
                        return o.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, v("/elections/list.json", []);
                                case 2:
                                    return t = e.sent, a = t.map(function(e) {
                                        return e.id
                                    }), e.abrupt("return", _(a));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                E = function() {
                    var e = Object(l.a)(o.a.mark(function e(t) {
                        var a, n, c, l, r;
                        return o.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(a = b[t])) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", a);
                                case 3:
                                    return e.next = 5, v("/elections/list.json", []);
                                case 5:
                                    return n = e.sent, c = n.find(function(e) {
                                        return e.id === t
                                    }), e.next = 9, v("parsed/".concat(t, "/election.json"), null);
                                case 9:
                                    return l = e.sent, r = null, c && l && (r = Object.assign({}, l, c), b[t] = r), e.abrupt("return", r);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                _ = function() {
                    var e = Object(l.a)(o.a.mark(function e(t) {
                        var a;
                        return o.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Promise.all(t.map(function(e) {
                                        return E(e)
                                    }));
                                case 2:
                                    return a = e.sent, e.abrupt("return", i()(a, function(e) {
                                        return Object(u.d)(e, "ISB")
                                    }));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                C = function(e) {
                    return E(e).then(function(e) {
                        return e.parties || {}
                    }).catch(function(e) {
                        return console.error(e), []
                    })
                },
                O = function(e) {
                    return E(e).then(function(e) {
                        return e.crossover || []
                    }).catch(function(e) {
                        return console.error(e), []
                    })
                },
                x = function(e, t) {
                    var a = t.slice(0, 3).toUpperCase();
                    return v("parsed/".concat(e, "/street-segments/").concat(a, ".json"), [])
                },
                S = function(e, t) {
                    return v("parsed/".concat(e, "/precincts/").concat(t, ".json"), void 0)
                },
                k = function(e, t) {
                    var a = Object(n.a)({}, e);
                    return a.long_description = f(e, "long_description.".concat(t), "long_description.EN"), a.name = f(e, "name.".concat(t), "name.EN", "Untitled Contest"), a.short_name = f(e, "short_name.".concat(t), "short_name.EN", null), a.short_description = f(e, "short_description.".concat(t), "short_description.EN", null), a.vote_for_text = d()(e, "vote_for_text.".concat(t), "vote_for_text.EN"), a.contest_class = d()(e, "contest_class", null), a.number_of_writeins = d()(e, "number_of_writeins", null), a.vote_for_max = d()(e, "vote_for_max", 0), a.statements = d()(e, "statements", []).map(function(e) {
                        return Object(n.a)({}, e, {
                            FullHTML: f(e, "FullHTML.".concat(t), "FullHTML.EN", null)
                        })
                    }), a.candidates = e.candidates.map(function(e) {
                        return function(e, t) {
                            var a = Object(n.a)({}, e);
                            return a.short_name = e.short_name.map(function(e) {
                                return f(e, t, "EN", "")
                            }).join("\n"), a.occupation = e.occupation.map(function(e) {
                                return f(e, t, "EN", "")
                            }).join("\n"), a.name = e.name.map(function(e) {
                                return f(e, t, "EN", null)
                            }).join("\n"), a.FullHTML = f(e, "FullHTML.".concat(t), "FullHTML.EN", null), a.statements = d()(e, "statements", []).map(function(e) {
                                return Object(n.a)({}, e, {
                                    FullHTML: f(e, "FullHTML.".concat(t), "FullHTML.EN", null)
                                })
                            }), a.order = e.order, a
                        }(e, t)
                    }), a
                },
                N = function() {
                    var e = Object(l.a)(o.a.mark(function e(t, a, n) {
                        var c, l, r, i;
                        return o.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return c = "parsed/".concat(t, "/contests/").concat(n, ".json"), l = h[c], e.next = 4, l || v(c, {});
                                case 4:
                                    return r = e.sent, h[c] = r, i = k(r, a), e.abrupt("return", i);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }));
                    return function(t, a, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                w = function() {
                    var e = Object(l.a)(o.a.mark(function e(t, a, c) {
                        var l, r, i, s, d;
                        return o.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return l = "parsed/".concat(t, "/ballots/").concat(c, ".json"), r = p[l], e.next = 4, r || v(l, null);
                                case 4:
                                    return i = e.sent, p[l] = i, e.next = 8, Promise.all(i.contests.map(function(e) {
                                        return N(t, a, e.contest_id)
                                    }));
                                case 8:
                                    return s = e.sent, d = i.contests.map(function(e) {
                                        var t = s.find(function(t) {
                                                return t.id === e.contest_id
                                            }),
                                            a = e.candidates,
                                            c = t.candidates.map(function(e) {
                                                var t = a.find(function(t) {
                                                        return t.candidate_id === e.id
                                                    }),
                                                    c = t ? t.order : e.order;
                                                return Object(n.a)({}, e, {
                                                    order: c
                                                })
                                            }).sort(function(e, t) {
                                                return e.order - t.order
                                            });
                                        return Object(n.a)({}, t, {
                                            order: e.order,
                                            candidates: c
                                        })
                                    }), e.abrupt("return", Object(n.a)({}, i, {
                                        contests: d
                                    }));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }));
                    return function(t, a, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                j = function(e, t, a, n) {
                    return m.get("".concat("https://api.lavote.net/vsap", "/").concat("ReadISBBallotGroupByPrimary"), {
                        crossDomain: !0,
                        params: {
                            ElectionID: e,
                            LastName: t,
                            DateOfBirth: a,
                            HouseNumber: n
                        }
                    }).then(function(e) {
                        return e.data
                    }).catch(function(e) {
                        return console.error(e), [{
                            error: "No matches found"
                        }]
                    })
                },
                M = function(e, t, a, n, c, o) {
                    return m.get("".concat("https://api.lavote.net/vsap", "/").concat("ReadISBBallotGroupBySecondary"), {
                        params: {
                            ElectionID: e,
                            firstName: t,
                            LastName: a,
                            DateOfBirth: n,
                            HouseNumber: c,
                            uid: o
                        }
                    }).then(function(e) {
                        return e.data
                    }).catch(function(e) {
                        return console.error(e), null
                    })
                }
        },
        144: function(e, t, a) {
            "use strict";
            a.d(t, "h", function() {
                return l
            }), a.d(t, "m", function() {
                return r
            }), a.d(t, "c", function() {
                return i
            }), a.d(t, "f", function() {
                return s
            }), a.d(t, "g", function() {
                return d
            }), a.d(t, "b", function() {
                return u
            }), a.d(t, "e", function() {
                return m
            }), a.d(t, "d", function() {
                return p
            }), a.d(t, "j", function() {
                return h
            }), a.d(t, "i", function() {
                return b
            }), a.d(t, "k", function() {
                return f
            }), a.d(t, "l", function() {
                return v
            }), a.d(t, "a", function() {
                return g
            });
            var n = a(24),
                c = a.n(n),
                o = function(e, t, a, n) {
                    return c()(e, "".concat(t, ".").concat(a), c()(e, "".concat(t, ".EN"), n))
                },
                l = function(e, t) {
                    var a = c()(e, "parties", []),
                        n = {};
                    return a.forEach(function(e) {
                        n[e.id] = o(e, "display_name", t, null)
                    }), n
                },
                r = function(e, t) {
                    return Boolean(c()(e, "languages.".concat(t), !1))
                },
                i = function(e) {
                    return c()(e, "id", void 0)
                },
                s = function(e, t) {
                    return o(e, "short_title", t, void 0)
                },
                d = function(e, t) {
                    return o(e, "title", t, void 0)
                },
                u = function(e) {
                    var t = c()(e, "electionDate", void 0);
                    return t.includes("00:00:00Z") ? t.replace("00:00:00Z", "12:00:00Z") : t
                },
                m = function(e) {
                    return c()(e, "jurisdictionId", void 0)
                },
                p = function(e, t) {
                    var a = "ACTIVE" === c()(e, "status.".concat(t)),
                        n = Boolean(c()(e, "parsed", !1));
                    return a && n
                },
                h = function(e) {
                    return c()(e, "id", void 0)
                },
                b = function(e, t) {
                    if (e && t) return e.find(function(e) {
                        return h(e) === t
                    })
                },
                f = function(e, t) {
                    return o(e, "display_name", t, void 0)
                },
                v = function(e, t, a, n) {
                    var c = Object.keys(a),
                        o = function(e) {
                            return !Object.keys(e).includes("isPartisan") || e.isPartisan
                        }(n),
                        l = function(e, t) {
                            return i(t), b(e, "NP")
                        }(e, n),
                        r = h(l),
                        s = h(t);
                    return e.filter(function(e) {
                        var t = e.id;
                        return c.includes(t)
                    }).filter(function(e) {
                        var t = e.id;
                        return o ? !s || t === s : t === r
                    })
                },
                g = function(e, t, a, n) {
                    if (!(n && t && a && e)) return [];
                    var o = Object.keys(a),
                        l = t.find(function(e) {
                            return h(n) === c()(e, "party_id", void 0)
                        });
                    return l ? c()(l, "crossover_party_id", []).map(function(t) {
                        return o.includes(t) && b(e, t)
                    }).filter(function(e) {
                        return e
                    }) : []
                }
        },
        166: function(e, t, a) {
            "use strict";
            var n = a(0),
                c = a.n(n),
                o = a(374),
                l = a.n(o),
                r = c.a.forwardRef(function(e, t) {
                    var a = e.margin,
                        n = e.text,
                        o = e.className,
                        r = e.tabIndex,
                        i = {
                            margin: a
                        };
                    return n ? c.a.createElement("div", {
                        style: i,
                        className: "".concat(o, " ").concat(l.a.subtitle),
                        tabIndex: r,
                        ref: t
                    }, n) : null
                });
            r.defaultProps = {
                className: ""
            }, t.a = r
        },
        181: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return d
            });
            var n = a(0),
                c = a.n(n),
                o = a(142),
                l = a(207),
                r = a(362),
                i = a.n(r),
                s = {
                    up: i.a.up,
                    right: i.a.right,
                    down: i.a.down
                };

            function d(e) {
                var t = e.typeOption,
                    a = e.text,
                    n = e.onClick,
                    r = e.className,
                    d = e.copyClassName,
                    u = e.tabIndex,
                    m = e.asDiv,
                    p = [s[t], i.a.menuButton, r].join(" "),
                    h = [i.a.labelCopy, d].join(" "),
                    b = c.a.createElement(c.a.Fragment, null, a && c.a.createElement(o.a, {
                        className: h,
                        center: "center" === t,
                        text: a,
                        color: "black"
                    }), ("right" === t || "down" === t || "up" === t) && c.a.createElement(l.a, null));
                return m ? c.a.createElement("div", {
                    className: p
                }, b) : c.a.createElement("button", {
                    onClick: n,
                    className: p,
                    tabIndex: u
                }, b)
            }
        },
        182: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return r
            });
            var n = a(0),
                c = a.n(n);

            function o() {
                return (o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var l = c.a.createElement("g", {
                    id: "symbols",
                    stroke: "none",
                    strokeWidth: 1,
                    fill: "none",
                    fillRule: "evenodd"
                }, c.a.createElement("g", {
                    id: "BUTTON/BACK",
                    transform: "translate(0.000000, -6.000000)",
                    fillRule: "nonzero"
                }, c.a.createElement("g", {
                    id: "ICONS/CARROT/BAC"
                }, c.a.createElement("path", {
                    d: "M10.2348181,10.2689848 C10.6937083,9.85886326 11.3813273,9.92612055 11.7601231,10.4134235 C12.1257595,10.8834224 12.0673871,11.575132 11.6261023,11.9706155 L5.19617867,17.7305363 C5.00154503,17.905386 4.75465676,18 4.50020711,18 C4.24589912,18 3.99916412,17.9054906 3.80443664,17.7309542 L-2.62586502,11.9706941 C-3.06746424,11.5753218 -3.12573363,10.8831139 -2.76015662,10.413659 C-2.38205384,9.92696114 -1.69320392,9.85951405 -1.23440386,10.2689848 L4.50020711,15.4062966 L10.2348181,10.2689848 Z",
                    transform: "translate(4.500000, 14.000000) scale(-1, 1) rotate(-90.000000) translate(-4.500000, -14.000000) "
                })))),
                r = function(e) {
                    return c.a.createElement("svg", o({
                        focusable: "false",
                        width: "9px",
                        height: "16px",
                        viewBox: "0 0 9 16",
                        version: 1.1,
                        xmlnsXlink: "http://www.w3.org/1999/xlink"
                    }, e), l)
                };
            a.p
        },
        194: function(e, t, a) {
            "use strict";
            var n = a(273),
                c = {
                    EN: {
                        fontFamily: "NotoSans"
                    },
                    ES: {
                        fontFamily: "NotoSans"
                    },
                    TL: {
                        fontFamily: "NotoSans"
                    },
                    VI: {
                        fontFamily: "NotoSans"
                    },
                    RU: {
                        fontFamily: "NotoSans"
                    },
                    KO: {
                        fontFamily: "KaigenSans",
                        name: "K"
                    },
                    ZH: {
                        fontFamily: "KaigenSans",
                        name: "TC"
                    },
                    JA: {
                        fontFamily: "KaigenSans",
                        name: "J"
                    },
                    HY: {
                        fontFamily: "NotoSans",
                        name: "Armenian"
                    },
                    TH: {
                        fontFamily: "NotoSans",
                        name: "Thai"
                    },
                    KM: {
                        fontFamily: "NotoSans",
                        name: "Khmer"
                    },
                    FA: {
                        fontFamily: "NotoSans",
                        name: "Arabic"
                    },
                    HI: {
                        fontFamily: "NotoSans",
                        name: "Devanagari"
                    }
                };
            Object.keys(c).forEach(function(e) {
                var t = c[e],
                    a = "".concat(t.fontFamily).concat(t.name ? t.name : "");
                t.bold = "".concat(a, "-Bold.ttf"), t.regular = "".concat(a, "-Regular.ttf")
            }), a.d(t, "a", function() {
                return o
            }), a.d(t, "b", function() {
                return i
            }), a.d(t, "c", function() {
                return s
            });
            var o = function(e) {
                    for (var t = window.atob(e), a = t.length, n = new Uint8Array(a), c = 0; c < a; c += 1) n[c] = t.charCodeAt(c);
                    return n.buffer
                },
                l = new RegExp(/\u200B/g),
                r = ["ZH", "JA"],
                i = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return e && r.includes(t) ? e.replace(l, "") : e
                },
                s = function(e) {
                    return {
                        regular: Object(n.get)(c, "".concat(e, ".regular")),
                        bold: Object(n.get)(c, "".concat(e, ".bold"))
                    }
                }
        },
        207: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return r
            });
            var n = a(0),
                c = a.n(n);

            function o() {
                return (o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var l = c.a.createElement("g", {
                    id: "Symbols",
                    stroke: "none",
                    strokeWidth: 1,
                    fill: "none",
                    fillRule: "evenodd"
                }, c.a.createElement("g", {
                    id: "UI/Actions/Button/Primary/YellowStrokedBlack",
                    transform: "translate(-202.000000, -23.000000)",
                    fillRule: "nonzero"
                }, c.a.createElement("path", {
                    d: "M212.999473,27.80262 C213.51955,27.341234 214.298854,27.4168984 214.728157,27.9651134 C215.142546,28.4938615 215.076391,29.2720337 214.576267,29.7169519 L207.288998,36.1968538 C207.068413,36.3935594 206.788606,36.5 206.500228,36.5 C206.212012,36.5 205.932378,36.3936771 205.711686,36.1973239 L198.42399,29.7170404 C197.923509,29.2722472 197.85747,28.4935144 198.271792,27.9653783 C198.70031,27.417844 199.481009,27.3419661 200.000984,27.80262 L206.500228,33.5820878 L212.999473,27.80262 Z",
                    id: "NextArrow_black",
                    transform: "translate(206.499994, 32.000006) scale(-1, -1) rotate(-270.000000) translate(-206.499994, -32.000006) "
                }))),
                r = function(e) {
                    return c.a.createElement("svg", o({
                        focusable: "false",
                        width: 7.5,
                        height: "12px",
                        viewBox: "0 0 9 18",
                        version: 1.1,
                        xmlnsXlink: "http://www.w3.org/1999/xlink"
                    }, e), l)
                };
            a.p
        },
        208: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return r
            });
            var n = a(0),
                c = a.n(n);

            function o() {
                return (o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var l = c.a.createElement("g", {
                    id: "Symbols",
                    stroke: "none",
                    strokeWidth: 1,
                    fill: "none",
                    fillRule: "evenodd"
                }, c.a.createElement("g", {
                    id: "Module/VoteSelection/Selected",
                    transform: "translate(-32.000000, -32.000000)",
                    fill: "#234ca1",
                    fillRule: "nonzero"
                }, c.a.createElement("path", {
                    d: "M43.6491752,54.2449284 C43.8554816,54.0243883 43.9421429,53.9300665 44.0463972,53.8104136 L44.0646579,53.789831 C44.1836445,53.6588786 44.1836445,53.6588786 44.3026298,53.5279449 C45.1521992,52.5930922 46.0307461,51.6272707 47.1444244,50.4036427 C47.5302319,49.9797458 49.4473376,47.8737195 49.9844063,47.2835915 C55.148212,41.6096318 58.3041008,38.1243578 61.6173106,34.4223479 L61.6311647,34.4071413 C61.6550938,34.3813388 61.662751,34.3780795 61.6490584,34.3625312 C56.5915332,39.9674614 51.6853574,45.374699 44.0408519,53.7787508 L43.2306208,54.6694852 L42.3578452,53.8384189 C40.3414862,51.9184202 39.4765911,51.0957844 38.3754769,50.0520874 C36.9249184,48.6771679 35.6410303,47.4672326 34.3803572,46.2880686 C34.3924536,46.2746137 34.3997006,46.283261 34.3774601,46.3055508 C34.3577564,46.3252983 34.3493806,46.318036 34.3452392,46.3058246 C35.5718155,47.4357954 36.5360509,48.3480667 38.7502916,50.4472254 C40.9625859,52.5445389 41.9710573,53.4984855 43.2328195,54.6847576 C43.2318578,54.6916051 43.2251324,54.7085835 43.1954001,54.742866 C43.3243136,54.5943418 43.4293249,54.4799468 43.6491752,54.2449284 Z M51.7253373,48.8299685 C51.1881576,49.4202184 49.2710196,51.5262802 48.8853076,51.9500723 C47.7719872,53.1733069 46.893803,54.1387298 46.0446855,55.0730852 C45.9257755,55.2039361 45.9257755,55.2039361 45.8251277,55.3142199 L45.8229477,55.3167292 C45.6926443,55.4662879 45.5933934,55.574312 45.3685169,55.8147035 C45.1639546,56.0333792 45.0729801,56.1325569 44.9470878,56.2771667 C44.0665027,57.2450888 42.4818893,57.2150146 41.6001093,56.3420298 C40.3554902,55.1724034 39.3454762,54.2170006 37.1293214,52.1160272 C34.9069203,50.0091322 33.9455992,49.0996384 32.7228393,47.9500355 C31.714124,46.9967748 31.8090879,45.5849802 32.7101824,44.6818873 C33.6124052,43.7776636 35.0381842,43.6668357 36.0061367,44.624301 C37.2498473,45.7869571 38.5395186,47.0023282 39.9962947,48.3831412 C40.9254844,49.2638786 41.6863557,49.9870928 43.1096875,51.342097 C50.3176036,43.4170508 55.0597571,38.1894535 59.9615652,32.7570616 C60.9191744,31.7244807 62.3571999,31.7907823 63.2743051,32.6971653 C64.1631158,33.5755847 64.28415,34.9614899 63.3652997,35.9609593 C60.0488561,39.6665339 56.890122,43.1549331 51.7253373,48.8299685 Z",
                    id: "Checkmark_blue"
                }))),
                r = function(e) {
                    return c.a.createElement("svg", o({
                        focusable: "false",
                        width: "32px",
                        height: "25px",
                        viewBox: "0 0 32 25",
                        version: 1.1,
                        xmlnsXlink: "http://www.w3.org/1999/xlink"
                    }, e), l)
                };
            a.p
        },
        259: function(e, t, a) {
            e.exports = a.p + "static/media/crest.fe193363.svg"
        },
        260: function(e) {
            e.exports = [{
                code: "EN",
                EN: "English",
                native: "English"
            }, {
                code: "ES",
                EN: "Spanish",
                native: "Espa\xf1ol"
            }, {
                code: "ZH",
                EN: "Chinese",
                native: "\u4e2d\u6587"
            }, {
                code: "JA",
                EN: "Japanese",
                native: "\u65e5\u672c\u8a9e"
            }, {
                code: "KO",
                EN: "Korean",
                native: "\ud55c\uad6d\uc5b4"
            }, {
                code: "VI",
                EN: "Vietnamese",
                native: "Ti\u1ebfng Vi\u1ec7t"
            }, {
                code: "TL",
                EN: "Tagalog",
                native: "Tagalog"
            }, {
                code: "HI",
                EN: "Hindi",
                native: "\u0939\u093f\u0902\u0926\u0940"
            }, {
                code: "KM",
                EN: "Khmer",
                native: "\u1781\u17d2\u1798\u17c2\u179a\u17d4"
            }, {
                code: "TH",
                EN: "Thai",
                native: "\u0e44\u0e17\u0e22"
            }, {
                code: "HY",
                EN: "Armenian",
                native: "\u0570\u0561\u0575\u0565\u0580\u0565\u0576"
            }, {
                code: "FA",
                EN: "Farsi",
                native: "\u0641\u0627\u0631\u0633\u06cc"
            }, {
                code: "RU",
                EN: "Russian",
                native: "\u0440\u0443\u0441\u0441\u043a\u0438\u0439"
            }]
        },
        356: function(e, t, a) {},
        358: function(e, t, a) {
            e.exports = {
                modalWrapper: "Modal_modalWrapper__u2CsO flex-row-centered",
                hideMobileFooter: "Modal_hideMobileFooter__35T8_",
                isMedPriority: "Modal_isMedPriority__2HjXc",
                dir: "Modal_dir__w_L_S",
                isPriority: "Modal_isPriority__3keF5",
                mobileFooterIsPriority: "Modal_mobileFooterIsPriority__1Qgz_",
                parentIsRoot: "Modal_parentIsRoot__3A6if",
                modal: "Modal_modal__2CYyH centered-content-column",
                wrapperParentIsRoot: "Modal_wrapperParentIsRoot__24D1V content-flip",
                threeRowContent: "Modal_threeRowContent__1RfWr",
                top: "Modal_top__3ulNG",
                middle: "Modal_middle__2yWW5 overrideModalContentBackground",
                bottom: "Modal_bottom__1Pn7m footer",
                stickyBottom: "Modal_stickyBottom__2lXCc footer",
                mobileBottom: "Modal_mobileBottom__1IVNN",
                titleCopy: "Modal_titleCopy__xZKKp"
            }
        },
        360: function(e, t, a) {
            e.exports = {
                labelCopy: "LabelCopy_labelCopy__7lFmC inline-multilang-support",
                center: "LabelCopy_center___gYVD",
                black: "LabelCopy_black__3rxL_",
                blackNoVar: "LabelCopy_blackNoVar__1ebLX",
                white: "LabelCopy_white__2d-XF"
            }
        },
        362: function(e, t, a) {
            e.exports = {
                menuButton: "MenuButton_menuButton__1kuCh",
                labelCopy: "MenuButton_labelCopy__2QurL",
                up: "MenuButton_up__1x3NK",
                right: "MenuButton_right__22hBU",
                down: "MenuButton_down__2p3R1"
            }
        },
        364: function(e, t, a) {
            e.exports = {
                title: "TitleCopy_title__14Cm0 multilang-support"
            }
        },
        366: function(e, t, a) {
            e.exports = {
                body: "BodyCopy_body__3WYOh fs-bodyCopy multilang-support"
            }
        },
        368: function(e, t, a) {
            e.exports = {
                page: "Privacy_page__2LaQt column-page content-flip",
                hr: "Privacy_hr__1pxrt",
                modal: "Privacy_modal__OL1uc column-page",
                header: "Privacy_header__3hv1s",
                body: "Privacy_body__1MBpd",
                bodyCopy: "Privacy_bodyCopy__21F6u",
                textBody: "Privacy_textBody__QaWNW",
                choiceContainer: "Privacy_choiceContainer__3Ggl4 fwhite",
                choice: "Privacy_choice__3O4d2",
                choiceContent: "Privacy_choiceContent__3lrG0",
                isSelected: "Privacy_isSelected__224KI",
                isUnselected: "Privacy_isUnselected__3RCdX",
                privacyChoiceText1: "Privacy_privacyChoiceText1__8GtUL",
                privacyChoiceText2: "Privacy_privacyChoiceText2__3rF1m",
                privacyBtn: "Privacy_privacyBtn__WY96a yellow-centered-button",
                privacyBtnCopy: "Privacy_privacyBtnCopy__1RSx3 inline-multilang-support"
            }
        },
        370: function(e, t, a) {
            e.exports = {
                settingsTop: "Settings_settingsTop__3K91i flex-row-spaced",
                link: "Settings_link__1U_2O",
                returnButton: "Settings_returnButton__G03aA fwhite cblue fs-small multilang-support",
                settingsBottom: "Settings_settingsBottom__1O4HT flex-row-centered",
                closeButton: "Settings_closeButton__2jScd yellow-centered-button multilang-support",
                settingsMiddle: "Settings_settingsMiddle__1tVih",
                menuLink: "Settings_menuLink__1UYDF",
                middleMenu: "Settings_middleMenu__IaAfu",
                menuLabel: "Settings_menuLabel__3aGXN",
                options: "Settings_options__2Ut3O flex-column-centered flex-row-centered flex-row-centered",
                settingsOption: "Settings_settingsOption__3zd6o flex-column-spaced fwhite b1gray",
                optionButton: "Settings_optionButton__34nHM b1yellow yellow-centered-button fs-medium multilang-support",
                textSettings: "Settings_textSettings__15-Ph flex-row-spaced cblack",
                smallWrapper: "Settings_smallWrapper__1Uy1P",
                mediumWrapper: "Settings_mediumWrapper__1OASr",
                largeWrapper: "Settings_largeWrapper__1-Anr",
                textOption: "Settings_textOption__2xD8I flex-row-centered bold",
                sizeTitle: "Settings_sizeTitle__1sT9v fs-bodyCopy cblack multilang-support",
                small: "Settings_small__2GXe0",
                medium: "Settings_medium__kO2HA",
                large: "Settings_large__2Cna8",
                sampleTextWrapper: "Settings_sampleTextWrapper__3LhkJ",
                sampleTextTitle: "Settings_sampleTextTitle__L9kFE fs-bodyCopy cblack inline-multilang-support",
                sampleTextDivider: "Settings_sampleTextDivider__1nxmh",
                sampleTextSelection: "Settings_sampleTextSelection__17Vvc inline-multilang-support",
                sampleText: "Settings_sampleText__1DkRi flex-row-centered fwhite b2gray fs-bodyCopy cblack content-flip",
                spacer: "Settings_spacer__1HbVi",
                contrastSettings: "Settings_contrastSettings__17BpD flex-column-centered",
                high: "Settings_high__mEFe8",
                highBox: "Settings_highBox__3VWCP",
                low: "Settings_low__iY4lB",
                lowBox: "Settings_lowBox__1VAFE",
                lowContrast: "Settings_lowContrast__2FXJk multilang-support",
                highContrast: "Settings_highContrast__1Iny9 multilang-support",
                optionTitle: "Settings_optionTitle__1ZTFf",
                optionText: "Settings_optionText__TgwCR",
                textSettingsWrapper: "Settings_textSettingsWrapper__2JNFD"
            }
        },
        372: function(e, t, a) {
            e.exports = {
                navButton: "NavButton_navButton__1piTn",
                center: "NavButton_center__2ZbA9",
                right: "NavButton_right__OnVzt",
                labelCopy: "NavButton_labelCopy__2_Lh0",
                iconTopMobile: "NavButton_iconTopMobile__1c6Tz",
                icon: "NavButton_icon__1jNQP",
                up: "NavButton_up__3rCbc",
                left: "NavButton_left__1_Qr4",
                upRight: "NavButton_upRight__1MBF0",
                down: "NavButton_down__2LciQ",
                white: "NavButton_white__1kzdt",
                yellow: "NavButton_yellow__1kJog",
                gray: "NavButton_gray__36t1s",
                transparent: "NavButton_transparent__1APbd",
                black: "NavButton_black__1Ks4a",
                secondary: "NavButton_secondary__1vRo9"
            }
        },
        374: function(e, t, a) {
            e.exports = {
                subtitle: "SubtitleCopy_subtitle__25gL0 multilang-support"
            }
        },
        376: function(e, t, a) {
            e.exports = {
                headerButton: "HelpItem_headerButton__1DbfQ",
                down: "HelpItem_down__22hcL",
                headerCopy: "HelpItem_headerCopy__2D5py inline-multilang-support",
                body: "HelpItem_body__3ssXX"
            }
        },
        378: function(e, t, a) {
            e.exports = {
                nav: "Help_nav__BN8Gj",
                helpTop: "Help_helpTop__2D_Iu flex-row-spaced",
                title: "Help_title__YbRh6 fs-large cblack",
                desktopTitle: "Help_desktopTitle__3UhPu fs-large cblack",
                navItem: "Help_navItem__AzvGi",
                mobileSelected: "Help_mobileSelected__VUFGK",
                tabletDesktopSelected: "Help_tabletDesktopSelected__2HeZf",
                navItemLink: "Help_navItemLink__35fz5 flex-row-spaced cblack",
                returnButton: "Help_returnButton__2LLPJ fwhite cblue fs-small fwhite cblue fs-small multilang-support",
                text: "Help_text__3Jc9j",
                content: "Help_content__2jSve",
                titleContainer: "Help_titleContainer__3DcRS",
                menuLabel: "Help_menuLabel__6NwTM",
                titleButton: "Help_titleButton__1M0Az",
                selectedStyle: "Help_selectedStyle__WFCbo",
                titleButtonCopy: "Help_titleButtonCopy__1h3LM",
                footer: "Help_footer__2y9e3 footer",
                smallerFont: "Help_smallerFont__zr8hI"
            }
        },
        380: function(e, t, a) {
            e.exports = {
                buttonContainer: "Language_buttonContainer__17m8W",
                button: "Language_button__3txJ7 multilang-support",
                languageContent: "Language_languageContent__LBFhB",
                blackText: "Language_blackText__1yYa3",
                blackNativeText: "Language_blackNativeText__1wxfU",
                whiteText: "Language_whiteText__2hqXb",
                english: "Language_english__1Plct",
                settingsBottom: "Language_settingsBottom__2m7Vs flex-row-centered",
                closeButton: "Language_closeButton__4MbGG yellow-centered-button multilang-support"
            }
        },
        382: function(e, t, a) {
            e.exports = {
                header: "Header_header__313sY content-flip",
                content: "Header_content__3kwyF content",
                adjustHeaderForBallot: "Header_adjustHeaderForBallot__TijmI",
                right: "Header_right__1MDxV",
                pushContentDown: "Header_pushContentDown__y4JO3",
                left: "Header_left__1_J05",
                title: "Header_title__1tIhv",
                navButton: "Header_navButton__LySIV",
                crestLink: "Header_crestLink__32LVs",
                crest: "Header_crest__33ses multilang-support",
                siteName: "Header_siteName__1Dyed",
                hideMobileHeaderSpecial: "Header_hideMobileHeaderSpecial__2azD_"
            }
        },
        697: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(27),
                c = a(18),
                o = a(7),
                l = a(107),
                r = a(108),
                i = a(113),
                s = a(110),
                d = a(112),
                u = a(128),
                m = a(0),
                p = a.n(m),
                h = a(1),
                b = a(319),
                f = a.n(b),
                v = a(24),
                g = a.n(v),
                y = a(176),
                E = a.n(y),
                _ = a(248),
                C = a.n(_),
                O = (a(356), a(29)),
                x = a(30),
                S = a.n(x),
                k = a(259),
                N = a.n(k),
                w = a(116),
                j = a(181);

            function M() {
                return (M = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var B = p.a.createElement("g", {
                    id: "SETTINGS",
                    stroke: "none",
                    strokeWidth: 1,
                    fill: "none",
                    fillRule: "evenodd"
                }, p.a.createElement("g", {
                    id: "Settings",
                    transform: "translate(-801.000000, -318.000000)",
                    fill: "#000000",
                    fillRule: "nonzero"
                }, p.a.createElement("g", {
                    id: "Group-3",
                    transform: "translate(515.000000, 300.000000)"
                }, p.a.createElement("g", {
                    id: "Group-2",
                    transform: "translate(230.000000, 0.000000)"
                }, p.a.createElement("g", {
                    id: "baseline-brightness_medium-24px",
                    transform: "translate(54.000000, 16.000000)"
                }, p.a.createElement("path", {
                    d: "M60.0495137,45.9504863 L70,36 L60.0495137,26.0495137 L60.0495137,11.9504863 L45.9504863,11.9504863 L36,2 L26.0495137,11.9504863 L11.9504863,11.9504863 L11.9504863,26.0495137 L2,36 L11.9504863,45.9504863 L11.9504863,60.0495137 L26.0495137,60.0495137 L36,70 L45.9504863,60.0495137 L60.0495137,60.0495137 L60.0495137,45.9504863 Z M36,54.0371353 L36,17.9628647 C45.9504863,17.9628647 54.0371353,26.0495137 54.0371353,36 C54.0371353,45.9504863 45.9504863,54.0371353 36,54.0371353 Z",
                    id: "Shape"
                })))))),
                L = function(e) {
                    return p.a.createElement("svg", M({
                        focusable: "false",
                        width: "68px",
                        height: "68px",
                        viewBox: "0 0 68 68",
                        version: 1.1,
                        xmlnsXlink: "http://www.w3.org/1999/xlink"
                    }, e), B)
                };
            a.p;

            function T() {
                return (T = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var I = p.a.createElement("g", {
                    id: "SETTINGS",
                    stroke: "none",
                    strokeWidth: 1,
                    fill: "none",
                    fillRule: "evenodd"
                }, p.a.createElement("g", {
                    id: "Settings",
                    transform: "translate(-574.000000, -327.000000)",
                    fill: "#000000",
                    fillRule: "nonzero"
                }, p.a.createElement("g", {
                    id: "Group-3",
                    transform: "translate(515.000000, 300.000000)"
                }, p.a.createElement("g", {
                    id: "Group"
                }, p.a.createElement("g", {
                    id: "baseline-format_size-24px",
                    transform: "translate(48.000000, 13.000000)"
                }, p.a.createElement("path", {
                    d: "M32.1578947,14 L32.1578947,24.6 L49.7894737,24.6 L49.7894737,67 L60.3684211,67 L60.3684211,24.6 L78,24.6 L78,14 L32.1578947,14 Z M11,42.2666667 L21.5789474,42.2666667 L21.5789474,67 L32.1578947,67 L32.1578947,42.2666667 L42.7368421,42.2666667 L42.7368421,31.6666667 L11,31.6666667 L11,42.2666667 Z",
                    id: "Shape"
                })))))),
                P = function(e) {
                    return p.a.createElement("svg", T({
                        focusable: "false",
                        width: "67px",
                        height: "53px",
                        viewBox: "0 0 67 53",
                        version: 1.1,
                        xmlnsXlink: "http://www.w3.org/1999/xlink"
                    }, e), I)
                };
            a.p;

            function F() {
                return (F = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var H = p.a.createElement("g", {
                    id: "SETTINGS",
                    stroke: "none",
                    strokeWidth: 1,
                    fill: "none",
                    fillRule: "evenodd"
                }, p.a.createElement("g", {
                    id: "Settings",
                    transform: "translate(-926.000000, -318.000000)"
                }, p.a.createElement("g", {
                    id: "Group-6",
                    transform: "translate(406.000000, 300.000000)"
                }, p.a.createElement("g", {
                    id: "baseline-screen_lock_portrait-24px",
                    transform: "translate(505.000000, 14.500000)"
                }, p.a.createElement("polygon", {
                    id: "Path",
                    points: "0 0.5 70 0.5 70 70.5 0 70.5"
                }), p.a.createElement("path", {
                    d: "M29.2857143,47.8181818 L40.7142857,47.8181818 C42.2857143,47.8181818 43.5714286,46.4886364 43.5714286,44.8636364 L43.5714286,36 C43.5714286,34.375 42.2857143,33.0454545 40.7142857,33.0454545 L40.7142857,30.0909091 C40.7142857,26.8113636 38.1428571,24.1818182 35,24.1818182 C31.8285714,24.1818182 29.2857143,26.8409091 29.2857143,30.0909091 L29.2857143,33.0454545 C27.7142857,33.0454545 26.4285714,34.375 26.4285714,36 L26.4285714,44.8636364 C26.4285714,46.4886364 27.7142857,47.8181818 29.2857143,47.8181818 Z M31.5714286,30.0909091 C31.5714286,28.1409091 33.1142857,26.5454545 35,26.5454545 C36.8857143,26.5454545 38.4285714,28.1409091 38.4285714,30.0909091 L38.4285714,33.0454545 L31.5714286,33.0454545 L31.5714286,30.0909091 L31.5714286,30.0909091 Z M49.2857143,3.5 L20.7142857,3.5 C17.5714286,3.5 15,6.15909091 15,9.40909091 L15,62.5909091 C15,65.8409091 17.5714286,68.5 20.7142857,68.5 L49.2857143,68.5 C52.4285714,68.5 55,65.8409091 55,62.5909091 L55,9.40909091 C55,6.15909091 52.4285714,3.5 49.2857143,3.5 Z M49.2857143,56.6818182 L20.7142857,56.6818182 L20.7142857,15.3181818 L49.2857143,15.3181818 L49.2857143,56.6818182 Z",
                    id: "Shape",
                    fill: "#000000",
                    fillRule: "nonzero"
                }))))),
                R = function(e) {
                    return p.a.createElement("svg", F({
                        focusable: "false",
                        width: "40px",
                        height: "65px",
                        viewBox: "0 0 40 65",
                        version: 1.1,
                        xmlnsXlink: "http://www.w3.org/1999/xlink"
                    }, e), H)
                },
                A = (a.p, a(182)),
                q = a(34),
                D = {
                    HIGH_CONTRAST: "high",
                    LOW_CONTRAST: "low"
                },
                V = {
                    SMALL_TEXT: "small",
                    MEDIUM_TEXT: "medium",
                    LARGE_TEXT: "large"
                };

            function W(e) {
                switch (e) {
                    case D.HIGH_CONTRAST:
                        localStorage.setItem("contrastTheme", D.HIGH_CONTRAST), Object(q.b)();
                        break;
                    case D.LOW_CONTRAST:
                        localStorage.setItem("contrastTheme", D.LOW_CONTRAST), Object(q.c)();
                        break;
                    case V.SMALL_TEXT:
                        localStorage.setItem("textSizeTheme", V.SMALL_TEXT), Object(q.g)();
                        break;
                    case V.MEDIUM_TEXT:
                        localStorage.setItem("textSizeTheme", V.MEDIUM_TEXT), Object(q.f)();
                        break;
                    case V.LARGE_TEXT:
                        localStorage.setItem("textSizeTheme", V.LARGE_TEXT), Object(q.e)()
                }
            }
            var z = a(101),
                Z = a(25),
                G = a(109),
                X = a(370),
                U = a.n(X),
                K = function(e) {
                    function t() {
                        var e, a;
                        Object(l.a)(this, t);
                        for (var n = arguments.length, c = new Array(n), o = 0; o < n; o++) c[o] = arguments[o];
                        return (a = Object(i.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(c)))).openPrivacy = function() {
                            a.props.onClose(), a.props.history.push("/privacy")
                        }, a
                    }
                    return Object(d.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.showPrivacy,
                                a = e.onClose,
                                n = e.updateSelectedPrivacy,
                                c = e.selectedPrivacy,
                                o = e.mode,
                                l = e.language,
                                r = e.copy,
                                i = localStorage.getItem("textSizeTheme") || V.MEDIUM_TEXT,
                                s = localStorage.getItem("contrastTheme") || D.HIGH_CONTRAST;
                            return p.a.createElement(h.a, null, p.a.createElement(h.e, null, p.a.createElement(h.c, {
                                exact: !0,
                                path: "/",
                                render: function(e) {
                                    var n = e.location;
                                    return p.a.createElement(w.a, {
                                        key: 1,
                                        isPriority: !0,
                                        handleClose: a,
                                        title: p.a.createElement("div", {
                                            className: U.a.settingsTop
                                        }, p.a.createElement(G.a, {
                                            text: r.bf,
                                            tabIndex: 0
                                        })),
                                        body: p.a.createElement("div", {
                                            className: "".concat(U.a.settingsMiddle, " ").concat("/" === n.pathname && U.a.middleMenu)
                                        }, p.a.createElement("div", {
                                            className: U.a.options
                                        }, p.a.createElement(O.b, {
                                            to: "/textSize/".concat(i),
                                            className: "".concat(U.a.menuLink, " ").concat(U.a.link)
                                        }, p.a.createElement(j.a, {
                                            asDiv: !0,
                                            className: "hiddenTablet hiddenDesktop",
                                            copyClassName: U.a.menuLabel,
                                            text: r.bg,
                                            typeOption: "right"
                                        }), p.a.createElement("div", {
                                            className: "hiddenMobile ".concat(U.a.settingsOption)
                                        }, p.a.createElement(P, null), p.a.createElement("div", {
                                            className: U.a.optionButton
                                        }, r.bk))), p.a.createElement("div", {
                                            className: U.a.spacer
                                        }), p.a.createElement(O.b, {
                                            to: "/contrast/".concat(s),
                                            className: "".concat(U.a.menuLink, " ").concat(U.a.link)
                                        }, p.a.createElement(j.a, {
                                            asDiv: !0,
                                            className: "hiddenTablet hiddenDesktop",
                                            copyClassName: U.a.menuLabel,
                                            text: r.bh,
                                            typeOption: "right"
                                        }), p.a.createElement("div", {
                                            className: "hiddenMobile ".concat(U.a.settingsOption)
                                        }, p.a.createElement(L, null), p.a.createElement("div", {
                                            className: U.a.optionButton
                                        }, r.bq))), t && p.a.createElement(p.a.Fragment, null, p.a.createElement("div", {
                                            className: U.a.spacer
                                        }), p.a.createElement(O.b, {
                                            to: "/privacy",
                                            className: "".concat(U.a.menuLink, " ").concat(U.a.link)
                                        }, p.a.createElement(j.a, {
                                            asDiv: !0,
                                            className: "hiddenTablet hiddenDesktop",
                                            copyClassName: U.a.menuLabel,
                                            text: r.bi,
                                            typeOption: "right"
                                        }), p.a.createElement("div", {
                                            className: "hiddenMobile ".concat(U.a.settingsOption)
                                        }, p.a.createElement(R, null), p.a.createElement("div", {
                                            className: U.a.optionButton
                                        }, r.bi)))))),
                                        cancelButton: p.a.createElement("div", {
                                            className: U.a.settingsBottom
                                        }, p.a.createElement("button", {
                                            onClick: a,
                                            type: "button",
                                            className: U.a.closeButton
                                        }, r.be))
                                    })
                                }
                            }), p.a.createElement(h.c, {
                                path: "/contrast/:setting",
                                render: function(e) {
                                    var t = e.match.params.setting;
                                    return p.a.createElement(w.a, {
                                        key: 2,
                                        isPriority: !0,
                                        handleClose: a,
                                        title: p.a.createElement("div", {
                                            className: U.a.settingsTop
                                        }, p.a.createElement(G.a, {
                                            text: r.bq,
                                            tabIndex: 0
                                        }), p.a.createElement(O.b, {
                                            className: U.a.returnButton,
                                            to: "/"
                                        }, p.a.createElement(A.a, null), r.bp)),
                                        body: p.a.createElement("div", {
                                            className: U.a.settingsMiddle
                                        }, p.a.createElement("div", {
                                            className: U.a.contrastSettings
                                        }, p.a.createElement("div", {
                                            className: U.a[t]
                                        }, p.a.createElement("div", {
                                            className: U.a.highBox
                                        }, p.a.createElement(O.b, {
                                            "aria-label": "".concat("high" === t ? r.va : r.vb, " ").concat(r.br, " ").concat(r.bs),
                                            className: U.a.link,
                                            to: "/contrast/high",
                                            onClick: function() {
                                                return W(D.HIGH_CONTRAST)
                                            }
                                        }, p.a.createElement("div", {
                                            className: U.a.highContrast
                                        }, p.a.createElement("div", {
                                            className: U.a.optionTitle
                                        }, r.br), p.a.createElement("div", {
                                            className: U.a.optionText
                                        }, r.bs))))), p.a.createElement("div", {
                                            className: U.a.spacer
                                        }), p.a.createElement("div", {
                                            className: U.a[t]
                                        }, p.a.createElement("div", {
                                            className: U.a.lowBox
                                        }, p.a.createElement(O.b, {
                                            "aria-label": "".concat("low" === t ? r.va : r.vb, " ").concat(r.bt, " ").concat(r.bu),
                                            className: U.a.link,
                                            to: "/contrast/low",
                                            onClick: function() {
                                                return W(D.LOW_CONTRAST)
                                            }
                                        }, p.a.createElement("div", {
                                            className: U.a.lowContrast
                                        }, p.a.createElement("div", {
                                            className: U.a.optionTitle
                                        }, r.bt), p.a.createElement("div", {
                                            className: U.a.optionText
                                        }, r.bu))))))),
                                        cancelButton: p.a.createElement("div", {
                                            className: U.a.settingsBottom
                                        }, p.a.createElement("button", {
                                            onClick: a,
                                            type: "button",
                                            className: U.a.closeButton
                                        }, r.be))
                                    })
                                }
                            }), p.a.createElement(h.c, {
                                path: "/textSize/:size",
                                render: function(e) {
                                    var t = e.match.params.size;
                                    return p.a.createElement(w.a, {
                                        key: 3,
                                        isPriority: !0,
                                        handleClose: a,
                                        title: p.a.createElement("div", {
                                            className: U.a.settingsTop
                                        }, p.a.createElement(G.a, {
                                            text: r.bg,
                                            tabIndex: 0
                                        }), p.a.createElement(O.b, {
                                            to: "/",
                                            className: U.a.returnButton
                                        }, p.a.createElement(A.a, null), r.bp)),
                                        body: p.a.createElement("div", {
                                            className: U.a.settingsMiddle
                                        }, p.a.createElement("div", {
                                            className: U.a.textSettingsWrapper
                                        }, p.a.createElement("div", {
                                            className: U.a.textSettings
                                        }, p.a.createElement("div", {
                                            className: U.a[t]
                                        }, p.a.createElement("div", {
                                            className: U.a.sizeTitle,
                                            tabIndex: 0
                                        }, r.bl), p.a.createElement("div", {
                                            className: U.a.smallWrapper
                                        }, p.a.createElement(O.b, {
                                            "aria-label": "".concat("small" === t ? r.va : r.vb, " ").concat(r.bl),
                                            className: U.a.link,
                                            to: "/textSize/small",
                                            onClick: function() {
                                                return W(V.SMALL_TEXT)
                                            }
                                        }, p.a.createElement("div", {
                                            className: U.a.textOption
                                        }, p.a.createElement(P, null))))), p.a.createElement("div", {
                                            className: U.a[t]
                                        }, p.a.createElement("div", {
                                            className: U.a.sizeTitle,
                                            tabIndex: 0
                                        }, r.bm), p.a.createElement("div", {
                                            className: U.a.mediumWrapper
                                        }, p.a.createElement(O.b, {
                                            "aria-label": "".concat("medium" === t ? r.va : r.vb, " ").concat(r.bm),
                                            className: U.a.link,
                                            to: "/textSize/medium",
                                            onClick: function() {
                                                return W(V.MEDIUM_TEXT)
                                            }
                                        }, p.a.createElement("div", {
                                            className: U.a.textOption
                                        }, p.a.createElement(P, null))))), p.a.createElement("div", {
                                            className: U.a[t]
                                        }, p.a.createElement("div", {
                                            className: U.a.sizeTitle,
                                            tabIndex: 0
                                        }, r.bn), p.a.createElement("div", {
                                            className: U.a.largeWrapper
                                        }, p.a.createElement(O.b, {
                                            "aria-label": "".concat("large" === t ? r.va : r.vb, " ").concat(r.bn),
                                            className: U.a.link,
                                            to: "/textSize/large",
                                            onClick: function() {
                                                return W(V.LARGE_TEXT)
                                            }
                                        }, p.a.createElement("div", {
                                            className: U.a.textOption
                                        }, p.a.createElement(P, null)))))), p.a.createElement("div", {
                                            className: U.a.sampleTextWrapper
                                        }, p.a.createElement("div", null, p.a.createElement("span", {
                                            className: U.a.sampleTextTitle,
                                            tabIndex: 0
                                        }, r.kb), p.a.createElement("span", {
                                            className: U.a.sampleTextDivider
                                        }), p.a.createElement("span", {
                                            className: U.a.sampleTextSelection,
                                            tabIndex: 0
                                        }, "small" === t && r.bl || "medium" === t && r.bm || "large" === t && r.bn)), p.a.createElement("div", {
                                            className: U.a.sampleText,
                                            tabIndex: 0
                                        }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales pretium justo, ac molestie dolor sagittis eget. Duis feugiat risus nec dui bibendum vehicula. In hac habitasse platea dictumst.")))),
                                        cancelButton: p.a.createElement("div", {
                                            className: U.a.settingsBottom
                                        }, p.a.createElement("button", {
                                            onClick: a,
                                            type: "button",
                                            className: U.a.closeButton
                                        }, r.be))
                                    })
                                }
                            }), p.a.createElement(h.c, {
                                path: "/privacy",
                                render: function(e) {
                                    return p.a.createElement(w.a, {
                                        key: 4,
                                        isPriority: !0,
                                        handleClose: a,
                                        title: p.a.createElement("div", {
                                            className: U.a.settingsTop
                                        }, p.a.createElement(G.a, {
                                            text: r.bi,
                                            tabIndex: 0
                                        }), p.a.createElement(O.b, {
                                            to: "/",
                                            className: U.a.returnButton
                                        }, p.a.createElement(A.a, null), r.bp)),
                                        body: p.a.createElement("div", {
                                            className: U.a.settingsMiddle
                                        }, p.a.createElement(z.default, {
                                            inModal: !0,
                                            updateSelectedPrivacy: n,
                                            selectedPrivacy: c,
                                            copy: Object(Z.a)("Privacy", o, l)
                                        })),
                                        cancelButton: p.a.createElement("div", {
                                            className: U.a.settingsBottom
                                        }, p.a.createElement("button", {
                                            onClick: a,
                                            type: "button",
                                            className: U.a.closeButton
                                        }, r.be))
                                    })
                                }
                            })))
                        }
                    }]), t
                }(p.a.Component),
                J = a(106),
                Q = a(105),
                Y = a(166),
                $ = a(207),
                ee = a(376),
                te = a.n(ee),
                ae = function(e) {
                    function t(e) {
                        var a;
                        return Object(l.a)(this, t), (a = Object(i.a)(this, Object(s.a)(t).call(this, e))).toggleShowContentMobile = function() {
                            a.setState(function(e) {
                                return {
                                    showContentMobile: !e.showContentMobile
                                }
                            })
                        }, a.state = {
                            showContentMobile: !1
                        }, a
                    }
                    return Object(d.a)(t, e), Object(r.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.item,
                                t = this.state.showContentMobile;
                            return p.a.createElement("div", null, p.a.createElement(Y.a, {
                                className: "hideMobile",
                                margin: "0 0 10px 0",
                                text: e.header,
                                tabIndex: 0
                            }), p.a.createElement("button", {
                                className: "hideTabletDesktop ".concat(te.a.headerButton),
                                onClick: this.toggleShowContentMobile
                            }, p.a.createElement($.a, {
                                className: t ? te.a.down : void 0
                            }), p.a.createElement("span", {
                                className: te.a.headerCopy
                            }, e.header)), p.a.createElement(Q.a, {
                                tabIndex: 0,
                                className: "".concat(t ? void 0 : "hideMobile", " ").concat(te.a.body),
                                margin: "0 0 36px 0",
                                text: p.a.createElement("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: e.content
                                    }
                                })
                            }))
                        }
                    }]), t
                }(p.a.Component),
                ne = a(378),
                ce = a.n(ne);

            function oe(e) {
                var t, a, n, o, l = e.onClose,
                    r = e.copy,
                    i = e.mode,
                    s = Object(m.useState)(0),
                    d = Object(c.a)(s, 2),
                    u = d[0],
                    h = d[1];
                switch (i) {
                    case "ISB":
                        t = {
                            header: r.qe,
                            content: r.qf
                        }, a = {
                            header: r.qg,
                            content: r.qh
                        }, n = {
                            header: r.qi,
                            content: r.qj
                        }, o = {
                            header: r.qk,
                            content: r.ql
                        };
                        break;
                    case "RAV":
                        t = {
                            header: r.cd,
                            content: r.ho
                        }, a = {
                            header: r.il,
                            content: "".concat(r.im, "<br/><br/>").concat(r.in, "<br/><br/>").concat(r.io)
                        }, n = {
                            header: r.kt,
                            content: r.kr
                        }, o = {
                            header: r.ku,
                            content: r.ks
                        };
                        break;
                    case "UOC":
                        t = {
                            header: r.cd,
                            content: r.ho
                        }, a = {
                            header: r.il,
                            content: r.im
                        }, n = {
                            header: r.kt,
                            content: r.kr
                        }, o = {
                            header: r.ku,
                            content: r.ks
                        }
                }
                var b = [t, a, n, o];
                return p.a.createElement(w.a, {
                    id: "helpModal",
                    isPriority: !0,
                    handleClose: l,
                    title: p.a.createElement("div", {
                        className: ce.a.titleContainer
                    }, p.a.createElement(G.a, {
                        className: "hiddenTablet hiddenDesktop ".concat(ce.a.smallerFont),
                        text: r.ad,
                        tabIndex: 0
                    }), 0 !== u && p.a.createElement("button", {
                        onClick: function() {
                            return h(0)
                        },
                        className: "hiddenTablet hiddenDesktop ".concat(ce.a.returnButton)
                    }, p.a.createElement(A.a, null), r.bp), r.qt && 0 === u && p.a.createElement("button", {
                        onClick: function() {
                            return h(1)
                        },
                        className: "hiddenMobile ".concat(ce.a.titleButton, " ").concat(ce.a.selectedStyle)
                    }, p.a.createElement(Q.a, {
                        className: ce.a.titleButtonCopy,
                        text: r.qt
                    })), r.qt && 0 !== u && p.a.createElement("button", {
                        onClick: function() {
                            return h(1)
                        },
                        className: "hiddenMobile ".concat(ce.a.titleButton, " ").concat(1 === u && ce.a.selectedStyle)
                    }, p.a.createElement(Q.a, {
                        className: ce.a.titleButtonCopy,
                        text: r.qt
                    })), r.qu && p.a.createElement("button", {
                        onClick: function() {
                            return h(2)
                        },
                        className: "hiddenMobile ".concat(ce.a.titleButton, " ").concat(2 === u && ce.a.selectedStyle)
                    }, p.a.createElement(Q.a, {
                        className: ce.a.titleButtonCopy,
                        text: r.qu
                    })), r.qv && p.a.createElement("button", {
                        onClick: function() {
                            return h(3)
                        },
                        className: "hiddenMobile ".concat(ce.a.titleButton, " ").concat(3 === u && ce.a.selectedStyle)
                    }, p.a.createElement(Q.a, {
                        className: ce.a.titleButtonCopy,
                        text: r.qv
                    })), r.qw && p.a.createElement("button", {
                        onClick: function() {
                            return h(4)
                        },
                        className: "hiddenMobile ".concat(ce.a.titleButton, " ").concat(4 === u && ce.a.selectedStyle)
                    }, p.a.createElement(Q.a, {
                        className: ce.a.titleButtonCopy,
                        text: r.qw
                    })), r.qx && p.a.createElement("button", {
                        onClick: function() {
                            return h(5)
                        },
                        className: "hiddenMobile ".concat(ce.a.titleButton, " ").concat(5 === u && ce.a.selectedStyle)
                    }, p.a.createElement(Q.a, {
                        className: ce.a.titleButtonCopy,
                        text: r.qx
                    })), r.qy && p.a.createElement("button", {
                        onClick: function() {
                            return h(6)
                        },
                        className: "hiddenMobile ".concat(ce.a.titleButton, " ").concat(6 === u && ce.a.selectedStyle)
                    }, p.a.createElement(Q.a, {
                        className: ce.a.titleButtonCopy,
                        text: r.qy
                    }))),
                    body: p.a.createElement(m.Fragment, null, 0 === u && p.a.createElement("div", {
                        className: "hiddenTablet hiddenDesktop"
                    }, r.qt && p.a.createElement(j.a, {
                        onClick: function() {
                            return h(1)
                        },
                        copyClassName: ce.a.menuLabel,
                        text: r.qt,
                        typeOption: "right"
                    }), r.qu && p.a.createElement(j.a, {
                        onClick: function() {
                            return h(2)
                        },
                        copyClassName: ce.a.menuLabel,
                        text: r.qu,
                        typeOption: "right"
                    }), r.qv && p.a.createElement(j.a, {
                        onClick: function() {
                            return h(3)
                        },
                        copyClassName: ce.a.menuLabel,
                        text: r.qv,
                        typeOption: "right"
                    }), r.qw && p.a.createElement(j.a, {
                        onClick: function() {
                            return h(4)
                        },
                        copyClassName: ce.a.menuLabel,
                        text: r.qw,
                        typeOption: "right"
                    }), r.qx && p.a.createElement(j.a, {
                        onClick: function() {
                            return h(5)
                        },
                        copyClassName: ce.a.menuLabel,
                        text: r.qx,
                        typeOption: "right"
                    }), r.qy && p.a.createElement(j.a, {
                        onClick: function() {
                            return h(6)
                        },
                        copyClassName: ce.a.menuLabel,
                        text: r.qy,
                        typeOption: "right"
                    })), 0 === u && p.a.createElement("div", {
                        className: "hiddenMobile"
                    }, p.a.createElement(ae, {
                        key: r.ck,
                        item: {
                            header: r.ck,
                            content: r.cl
                        }
                    }), p.a.createElement(ae, {
                        key: r.cm,
                        item: {
                            header: r.cm,
                            content: r.cn
                        }
                    }), p.a.createElement(ae, {
                        key: r.co,
                        item: {
                            header: r.co,
                            content: r.cp
                        }
                    }), p.a.createElement(ae, {
                        key: r.cq,
                        item: {
                            header: r.cq,
                            content: r.cr
                        }
                    }), p.a.createElement(ae, {
                        key: r.cs,
                        item: {
                            header: r.cs,
                            content: r.ct
                        }
                    }), p.a.createElement(ae, {
                        key: r.cu,
                        item: {
                            header: r.cu,
                            content: r.cv
                        }
                    })), 1 === u && p.a.createElement(p.a.Fragment, null, p.a.createElement(G.a, {
                        className: "hiddenTablet hiddenDesktop ".concat(ce.a.smallerFont),
                        text: r.qt,
                        tabIndex: 0
                    }), p.a.createElement(ae, {
                        key: r.ck,
                        item: {
                            header: r.ck,
                            content: r.cl
                        }
                    }), p.a.createElement(ae, {
                        key: r.cm,
                        item: {
                            header: r.cm,
                            content: r.cn
                        }
                    }), p.a.createElement(ae, {
                        key: r.co,
                        item: {
                            header: r.co,
                            content: r.cp
                        }
                    }), p.a.createElement(ae, {
                        key: r.cq,
                        item: {
                            header: r.cq,
                            content: r.cr
                        }
                    }), p.a.createElement(ae, {
                        key: r.cs,
                        item: {
                            header: r.cs,
                            content: r.ct
                        }
                    }), p.a.createElement(ae, {
                        key: r.cu,
                        item: {
                            header: r.cu,
                            content: r.cv
                        }
                    })), 2 === u && p.a.createElement(p.a.Fragment, null, p.a.createElement(G.a, {
                        className: "hiddenTablet hiddenDesktop ".concat(ce.a.smallerFont),
                        text: r.qu,
                        tabIndex: 0
                    }), p.a.createElement(ae, {
                        key: r.lb,
                        item: {
                            header: r.lb,
                            content: r.lc
                        }
                    }), p.a.createElement(ae, {
                        key: r.ld,
                        item: {
                            header: r.ld,
                            content: r.le
                        }
                    })), 3 === u && p.a.createElement(p.a.Fragment, null, p.a.createElement(G.a, {
                        className: "hiddenTablet hiddenDesktop ".concat(ce.a.smallerFont),
                        text: r.qv,
                        tabIndex: 0
                    }), p.a.createElement(ae, {
                        key: r.lj,
                        item: {
                            header: r.lj,
                            content: r.lk
                        }
                    }), p.a.createElement(ae, {
                        key: r.ll,
                        item: {
                            header: r.ll,
                            content: r.lm
                        }
                    }), p.a.createElement(ae, {
                        key: r.ln,
                        item: {
                            header: r.ln,
                            content: r.lo
                        }
                    }), p.a.createElement(ae, {
                        key: r.lq,
                        item: {
                            header: r.lq,
                            content: r.lr
                        }
                    })), 4 === u && p.a.createElement(p.a.Fragment, null, p.a.createElement(G.a, {
                        className: "hiddenTablet hiddenDesktop ".concat(ce.a.smallerFont),
                        text: r.qw,
                        tabIndex: 0
                    }), p.a.createElement(ae, {
                        key: r.ls,
                        item: {
                            header: r.ls,
                            content: r.lt
                        }
                    }), p.a.createElement(ae, {
                        key: r.lu,
                        item: {
                            header: r.lu,
                            content: r.lv
                        }
                    }), p.a.createElement(ae, {
                        key: r.lw,
                        item: {
                            header: r.lw,
                            content: r.lx
                        }
                    }), p.a.createElement(ae, {
                        key: r.ly,
                        item: {
                            header: r.ly,
                            content: r.lz
                        }
                    }), p.a.createElement(ae, {
                        key: r.qa,
                        item: {
                            header: r.qa,
                            content: r.qb
                        }
                    }), p.a.createElement(ae, {
                        key: r.qc,
                        item: {
                            header: r.qc,
                            content: r.qd
                        }
                    })), 5 === u && p.a.createElement(p.a.Fragment, null, p.a.createElement(G.a, {
                        className: "hiddenTablet hiddenDesktop ".concat(ce.a.smallerFont),
                        text: r.qx,
                        tabIndex: 0
                    }), p.a.createElement(ae, {
                        key: b[0].header,
                        item: b[0]
                    }), p.a.createElement(ae, {
                        key: b[1].header,
                        item: b[1]
                    }), p.a.createElement(ae, {
                        key: b[2].header,
                        item: b[2]
                    }), p.a.createElement(ae, {
                        key: b[3].header,
                        item: b[3]
                    })), 6 === u && p.a.createElement(p.a.Fragment, null, p.a.createElement(G.a, {
                        className: "hiddenTablet hiddenDesktop ".concat(ce.a.smallerFont),
                        text: r.qy,
                        tabIndex: 0
                    }), r.qm && p.a.createElement(ae, {
                        key: r.qm,
                        item: {
                            header: r.qm,
                            content: r.qn
                        }
                    }), r.qo && p.a.createElement(ae, {
                        key: r.qo,
                        item: {
                            header: r.qo,
                            content: r.qp
                        }
                    }), r.qr && p.a.createElement(ae, {
                        key: r.qr,
                        item: {
                            header: r.qr,
                            content: r.qs
                        }
                    }))),
                    continueButton: p.a.createElement(J.a, {
                        width: "235px",
                        colorOption: "yellow",
                        typeOption: "center",
                        text: r.bj,
                        onClick: l
                    })
                })
            }
            var le = a(260),
                re = a(380),
                ie = a.n(re);

            function se(e) {
                var t = e.selectedLanguage,
                    a = e.updateSelectedLanguage,
                    n = e.onClose,
                    c = e.copy,
                    o = le.map(function(e) {
                        return p.a.createElement("div", {
                            className: ie.a.buttonContainer,
                            key: e.code
                        }, p.a.createElement(J.a, {
                            ariaLabel: "".concat(t === e.code ? c.va : c.vb, " ").concat("EN" === e.code ? "" : e.native, " ").concat(e.EN),
                            className: ie.a.button,
                            colorOption: t === e.code ? "black" : "white",
                            onClick: function() {
                                return a(e.code)
                            }
                        }, "EN" !== e.code && p.a.createElement("div", {
                            className: t === e.code ? ie.a.whiteText : ie.a.blackNativeText
                        }, e.native), p.a.createElement("div", {
                            className: "".concat(t === e.code ? ie.a.whiteText : ie.a.blackText, " ").concat("EN" === e.code ? ie.a.english : void 0)
                        }, e.EN)))
                    });
                return p.a.createElement(w.a, {
                    isPriority: !0,
                    handleClose: n,
                    title: p.a.createElement(G.a, {
                        text: c.ae,
                        tabIndex: 0
                    }),
                    body: p.a.createElement("div", {
                        className: ie.a.languageContent
                    }, o),
                    cancelButton: p.a.createElement("div", {
                        className: ie.a.settingsBottom
                    }, p.a.createElement("button", {
                        onClick: n,
                        type: "button",
                        className: ie.a.closeButton
                    }, c.be))
                })
            }
            se.defaultProps = {
                selectedLanguage: "EN",
                updateSelectedLanguage: function() {
                    return null
                },
                onCLose: function() {
                    return null
                }
            };
            var de = a(382),
                ue = a.n(de),
                me = function(e) {
                    function t(e) {
                        var a;
                        return Object(l.a)(this, t), (a = Object(i.a)(this, Object(s.a)(t).call(this, e))).state = {
                            renderModal: "",
                            showButtonsMobileTablet: !1
                        }, a.landingTop = void 0, a.openHelpModal = a.openHelpModal.bind(Object(u.a)(Object(u.a)(a))), a.openLanguageModal = a.openLanguageModal.bind(Object(u.a)(Object(u.a)(a))), a.openSettingsModal = a.openSettingsModal.bind(Object(u.a)(Object(u.a)(a))), a.closeModal = a.closeModal.bind(Object(u.a)(Object(u.a)(a))), a.handleShowButtonsMobileTablet = a.handleShowButtonsMobileTablet.bind(Object(u.a)(Object(u.a)(a))), a.openReview = a.openReview.bind(Object(u.a)(Object(u.a)(a))), a.selectEnglishBallotFromModal = a.selectEnglishBallotFromModal.bind(Object(u.a)(Object(u.a)(a))), a
                    }
                    return Object(d.a)(t, e), Object(r.a)(t, [{
                        key: "handleShowButtonsMobileTablet",
                        value: function() {
                            var e = this.props.location.pathname,
                                t = this.state.showButtonsMobileTablet,
                                a = "/" === e || "/landing" === e,
                                n = document.getElementById("landing") && document.getElementById("landing").getBoundingClientRect().top;
                            n && !this.firstLandingTop ? this.firstLandingTop = n : t && a && this.firstLandingTop === n ? this.setState({
                                showButtonsMobileTablet: !1
                            }) : t || a && !(this.firstLandingTop - n > 0) || this.setState({
                                showButtonsMobileTablet: !0
                            })
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.props.setRenderLanguagesModal(function() {
                                e.setState({
                                    renderModal: "language"
                                })
                            }), this.props.setCloseHeaderModals(function() {
                                e.setState({
                                    renderModal: ""
                                })
                            }), this.handleShowButtonsMobileTablet(), document.body.addEventListener("scroll", S()(this.handleShowButtonsMobileTablet, 200))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            e.location.pathname !== this.props.location.pathname && this.handleShowButtonsMobileTablet()
                        }
                    }, {
                        key: "openHelpModal",
                        value: function() {
                            this.setState({
                                renderModal: "help"
                            })
                        }
                    }, {
                        key: "openLanguageModal",
                        value: function() {
                            this.setState({
                                renderModal: "language"
                            })
                        }
                    }, {
                        key: "openSettingsModal",
                        value: function() {
                            this.setState({
                                renderModal: "settings"
                            })
                        }
                    }, {
                        key: "selectEnglishBallotFromModal",
                        value: function() {
                            this.props.updateSelectedLanguage("EN"), this.closeSecondaryModal()
                        }
                    }, {
                        key: "closeModal",
                        value: function() {
                            this.setState({
                                renderModal: ""
                            })
                        }
                    }, {
                        key: "openReview",
                        value: function() {
                            this.setState({
                                renderModal: ""
                            }), this.props.history.push("/review")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.language,
                                a = e.updateSelectedLanguage,
                                n = e.showPrivacy,
                                c = e.updateSelectedPrivacy,
                                o = e.selectedPrivacy,
                                l = e.history,
                                r = e.mode,
                                i = e.copy,
                                s = e.location,
                                d = e.statementModal,
                                u = this.state,
                                h = u.renderModal,
                                b = u.showButtonsMobileTablet,
                                f = this.props.location.pathname,
                                v = f.startsWith("/ballot") || f.startsWith("/review");
                            return p.a.createElement(m.Fragment, null, "function" === typeof d ? d(this.props.writeInValues || {}) : d, "help" === h && p.a.createElement(oe, {
                                copy: Object(Z.a)("Help", r, t),
                                mode: r,
                                onClose: this.closeModal
                            }), "settings" === h && p.a.createElement(K, {
                                showPrivacy: n,
                                updateSelectedPrivacy: c,
                                selectedPrivacy: o,
                                history: l,
                                mode: r,
                                language: t,
                                copy: Object(Z.a)("Settings", r, t),
                                onClose: this.closeModal
                            }), "language" === h && p.a.createElement(se, {
                                selectedLanguage: t,
                                updateSelectedLanguage: a,
                                onClose: this.closeModal,
                                copy: Object(Z.a)("Language", r, t)
                            }), p.a.createElement("div", {
                                className: ue.a.header
                            }, p.a.createElement("div", {
                                className: "".concat(v ? ue.a.adjustHeaderForBallot : "", " ").concat(ue.a.content)
                            }, p.a.createElement("div", {
                                className: ue.a.left
                            }, p.a.createElement(O.b, {
                                className: "".concat(v ? ue.a.hideMobileHeaderSpecial : "", " ").concat(ue.a.crestLink),
                                to: "/",
                                title: i.ti,
                                id: "Crest"
                            }, p.a.createElement("img", {
                                key: "img",
                                src: N.a,
                                alt: i.tj,
                                className: ue.a.crest
                            })), p.a.createElement(Q.a, {
                                className: "".concat(b && "hiddenMobile", " ").concat(ue.a.title, " ").concat(ue.a.siteName),
                                style: {
                                    margin: "0"
                                },
                                text: i.aa,
                                tabIndex: 0
                            })), p.a.createElement("div", {
                                className: "".concat(!b && "hiddenMobile", " ").concat(ue.a.right)
                            }, v && p.a.createElement(p.a.Fragment, null, p.a.createElement(J.a, {
                                className: "hiddenDesktop ".concat(ue.a.navButton),
                                colorOption: s.pathname.startsWith("/review") ? "black" : "white",
                                text: i.jn,
                                typeOption: "iconTopMobile",
                                iconOption: "review",
                                onClick: this.openReview
                            })), p.a.createElement(J.a, {
                                className: "".concat(!b && "hiddenMobile", " ").concat(ue.a.navButton),
                                colorOption: "language" === h ? "black" : "white",
                                text: i.ab,
                                typeOption: "iconTopMobile",
                                iconOption: "language",
                                onClick: this.openLanguageModal
                            }), p.a.createElement(J.a, {
                                className: "".concat(!b && "hiddenMobile", " ").concat(ue.a.navButton),
                                colorOption: "settings" === h ? "black" : "white",
                                text: i.ac,
                                typeOption: "iconTopMobile",
                                iconOption: "settings",
                                onClick: this.openSettingsModal
                            }), p.a.createElement(J.a, {
                                className: "".concat(!b && "hiddenMobile", " ").concat(ue.a.navButton),
                                colorOption: "help" === h ? "black" : "white",
                                typeOption: "iconTopMobile",
                                iconOption: "help",
                                text: i.ad,
                                onClick: this.openHelpModal
                            })))))
                        }
                    }]), t
                }(p.a.Component);

            function pe(e) {
                var t = e.isAllowed,
                    a = e.path,
                    n = e.render;
                return p.a.createElement(h.c, {
                    path: a,
                    render: t ? n : function() {
                        return p.a.createElement(h.b, {
                            to: "/"
                        })
                    }
                })
            }

            function he(e) {
                var t = e.selectedLanguage,
                    a = e.onTryEnglish,
                    n = e.onTryAnother,
                    c = e.copy,
                    o = function(e) {
                        var t = le.find(function(t) {
                            return t.code === e
                        });
                        return g()(t, "native", "no selected")
                    }(t);
                return p.a.createElement(w.a, {
                    handleClose: function() {
                        return null
                    },
                    title: p.a.createElement(G.a, {
                        tabIndex: 0,
                        text: "".concat(c.ta, " ").concat(o, " ").concat(c.tb)
                    }),
                    body: p.a.createElement(Q.a, {
                        tabIndex: 0,
                        text: p.a.createElement("div", {
                            dangerouslySetInnerHTML: {
                                __html: "".concat(c.tc, " ").concat(o)
                            }
                        })
                    }),
                    cancelButton: p.a.createElement(J.a, {
                        onClick: n,
                        text: c.td,
                        colorOption: "secondary"
                    }),
                    continueButton: p.a.createElement(J.a, {
                        colorOption: "yellow",
                        text: c.te,
                        onClick: a
                    })
                })
            }

            function be(e) {
                var t = e.goBack,
                    a = e.copy;
                return p.a.createElement(w.a, {
                    handleClose: t,
                    title: p.a.createElement(G.a, {
                        text: a.ty,
                        tabIndex: 0
                    }),
                    body: p.a.createElement(Q.a, {
                        tabIndex: 0,
                        text: p.a.createElement("div", {
                            dangerouslySetInnerHTML: {
                                __html: a.tz
                            }
                        })
                    }),
                    continueButton: p.a.createElement(J.a, {
                        colorOption: "yellow",
                        text: a.ua,
                        onClick: t
                    })
                })
            }
            he.defaultProps = {
                selectedLanguage: "no selected language",
                onTryEnglish: function() {
                    return null
                },
                onTryAnother: function() {
                    return null
                }
            }, be.defaultProps = {
                goBack: function() {
                    return null
                }
            };
            var fe = a(16),
                ve = a(143),
                ge = a(139),
                ye = a(144),
                Ee = function(e, t) {
                    return g()(t, e, void 0)
                },
                _e = function(e, t, a) {
                    return Object(ye.c)(e) + Ee(t, a)
                },
                Ce = a(38);

            function Oe(e) {
                var t = e.handleClose,
                    a = e.copy;
                return p.a.createElement(w.a, {
                    isMedPriority: !0,
                    handleClose: t,
                    title: p.a.createElement(G.a, {
                        tabIndex: 0,
                        text: a.ztb
                    }),
                    body: p.a.createElement(Q.a, {
                        tabIndex: 0,
                        text: p.a.createElement("div", {
                            dangerouslySetInnerHTML: {
                                __html: a.ztc
                            }
                        })
                    }),
                    continueButton: p.a.createElement(J.a, {
                        colorOption: "yellow",
                        text: a.ztd,
                        onClick: t
                    })
                })
            }
            var xe = a(194),
                Se = a(36),
                ke = Object(m.lazy)(function() {
                    return a.e(2).then(a.bind(null, 693))
                }),
                Ne = Object(m.lazy)(function() {
                    return a.e(3).then(a.bind(null, 701))
                }),
                we = Object(m.lazy)(function() {
                    return Promise.all([a.e(10), a.e(4)]).then(a.bind(null, 699))
                }),
                je = Object(m.lazy)(function() {
                    return a.e(5).then(a.bind(null, 698))
                }),
                Me = Object(m.lazy)(function() {
                    return a.e(6).then(a.bind(null, 694))
                }),
                Be = Object(m.lazy)(function() {
                    return a.e(7).then(a.bind(null, 700))
                }),
                Le = Object(m.lazy)(function() {
                    return Promise.resolve().then(a.bind(null, 101))
                }),
                Te = Object(m.lazy)(function() {
                    return a.e(8).then(a.bind(null, 695))
                });
            var Ie = function(e) {
                var t = p.a.lazy(e);
                return t.preload = e, t
            }(function() {
                return Promise.all([a.e(11), a.e(9)]).then(a.bind(null, 696))
            });
            var Pe = {
                selectedPrecincts: {},
                selectedElection: void 0,
                registeredParty: void 0,
                selectedBallotItemId: void 0,
                selectedParty: void 0,
                selectedBallot: void 0,
                selectedCandidates: {},
                selectedPartyBallotMap: void 0,
                selectedPartyBallotMapFetchPath: null,
                writeInValues: {},
                completedBallots: {},
                agreedToAttestation: !1
            };
            Object(fe.h)(Pe);
            var Fe = function(e) {
                function t(e) {
                    var a;
                    return Object(l.a)(this, t), (a = Object(i.a)(this, Object(s.a)(t).call(this, e))).updateCloseHeaderModals = function(e) {
                        a.closeHeaderModals = e
                    }, a.handleModalStateChange = function(e) {
                        e.detail.isOpen ? a.numModalsOpen += 1 : a.numModalsOpen -= 1,
                            function(e) {
                                for (var t = document.querySelectorAll("#modal-wrapper a"), a = 0; a < t.length; a += 1) t[a].classList.add("insideModal");
                                for (var n = document.querySelectorAll("a:not(.insideModal)"), c = 0; c < n.length; c++) n[c].tabIndex = e ? -1 : 0;
                                document.querySelectorAll("#Crest")[0].tabIndex = 0
                            }(a.numModalsOpen > 0), a.setState({
                                contentTabIndex: a.numModalsOpen > 0 ? -1 : 0
                            })
                    }, a.clearSelectedPrecincts = function() {
                        a.setState({
                            selectedPrecincts: {}
                        }), Object(fe.d)("selectedPrecincts", {})
                    }, a.updateCompletedBallots = function(e) {
                        a.setState(function(t) {
                            var a = t.completedBallots,
                                n = Object(o.a)({}, a);
                            return n[e] = !0, Object(fe.d)("completedBallots", n), {
                                completedBallots: n
                            }
                        })
                    }, a.clearCompletedBallots = function() {
                        a.setState({
                            completedBallots: {}
                        }), Object(fe.d)("completedBallots", {})
                    }, a.setAgreedToAttestation = function() {
                        a.setState({
                            agreedToAttestation: !0
                        }), Object(fe.d)("agreedToAttestation", !0)
                    }, a.clearCandidatesAndWriteIns = function() {
                        a.setState({
                            selectedCandidates: Pe.selectedCandidates,
                            writeInValues: Pe.writeInValues
                        }), sessionStorage.removeItem("selectedCandidates"), localStorage.removeItem("selectedCandidates"), sessionStorage.removeItem("writeInValues"), localStorage.removeItem("writeInValues")
                    }, document.addEventListener("onModalStateChange", a.handleModalStateChange), a.numModalsOpen = 0, a.closeHeaderModals = function() {
                        return null
                    }, a.state = {
                        mode: Se.b,
                        showInactivityModal: !1,
                        availableElections: [],
                        inactiveElections: [],
                        selectedPrivacy: Object(fe.b)(),
                        selectedLanguage: Object(fe.a)("selectedLanguage", "EN"),
                        renderLanguagesModal: function() {
                            return null
                        },
                        selectedPrecincts: Object(fe.a)("selectedPrecincts", {}),
                        selectedElection: Object(fe.a)("selectedElection", null),
                        registeredParty: Object(fe.a)("registeredParty"),
                        selectedBallotItemId: Object(fe.a)("selectedBallotItemId"),
                        selectedParty: Object(fe.a)("selectedParty"),
                        selectedBallot: Object(fe.a)("selectedBallot"),
                        selectedCandidates: Object(fe.a)("selectedCandidates", {}),
                        selectedPartyBallotMap: Object(fe.a)("selectedPartyBallotMap"),
                        selectedPartyBallotMapFetchPath: Object(fe.a)("selectedPartyBallotMapFetchPath", null),
                        writeInValues: Object(fe.a)("writeInValues", {}),
                        completedBallots: Object(fe.a)("completedBallots", {}),
                        agreedToAttestation: Object(fe.a)("agreedToAttestation", !1),
                        contentTabIndex: 0,
                        fetchedPath: null,
                        ballotFetchInProgress: !1,
                        loaded: !1,
                        statementModal: null
                    }, a.userHasAvailableElections = a.userHasAvailableElections.bind(Object(u.a)(Object(u.a)(a))), a.updateRenderLanguagesModal = a.updateRenderLanguagesModal.bind(Object(u.a)(Object(u.a)(a))), a.updateRegisteredParty = a.updateRegisteredParty.bind(Object(u.a)(Object(u.a)(a))), a.updateSelectedLanguage = a.updateSelectedLanguage.bind(Object(u.a)(Object(u.a)(a))), a.updateSelectedPrecinct = a.updateSelectedPrecinct.bind(Object(u.a)(Object(u.a)(a))), a.updateSelectedElection = a.updateSelectedElection.bind(Object(u.a)(Object(u.a)(a))), a.updateSelectedParty = a.updateSelectedParty.bind(Object(u.a)(Object(u.a)(a))), a.updateSelectedBallot = a.updateSelectedBallot.bind(Object(u.a)(Object(u.a)(a))), a.updateSelectedBallotItemId = a.updateSelectedBallotItemId.bind(Object(u.a)(Object(u.a)(a))), a.updateSelectedPartyBallotMap = a.updateSelectedPartyBallotMap.bind(Object(u.a)(Object(u.a)(a))), a.updateSelectedPartyBallotMapFetchPath = a.updateSelectedPartyBallotMapFetchPath.bind(Object(u.a)(Object(u.a)(a))), a.updateSelectedCandidates = a.updateSelectedCandidates.bind(Object(u.a)(Object(u.a)(a))), a.updateSelectedCandidatesForBallot = a.updateSelectedCandidatesForBallot.bind(Object(u.a)(Object(u.a)(a))), a.updateWriteInValues = a.updateWriteInValues.bind(Object(u.a)(Object(u.a)(a))), a.updateSelectedPrivacy = a.updateSelectedPrivacy.bind(Object(u.a)(Object(u.a)(a))), a.clearSelections = a.clearSelections.bind(Object(u.a)(Object(u.a)(a))), a.clearQueuedContestFocus = a.clearQueuedContestFocus.bind(Object(u.a)(Object(u.a)(a))), a
                }
                return Object(d.a)(t, e), Object(r.a)(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        console.log("ISB Client App Version: ".concat(Se.c)),
                            function() {
                                var e = localStorage.getItem("contrastTheme");
                                e && W(e);
                                var t = localStorage.getItem("textSizeTheme");
                                t && W(t)
                            }(), Object(q.d)(Object(fe.a)("selectedLanguage", "EN")), Object(ve.c)().then(function(t) {
                                var a = Object(c.a)(t, 2),
                                    n = a[0],
                                    o = a[1],
                                    l = n.map(function(e) {
                                        return g()(e, "id")
                                    }),
                                    r = o.map(function(e) {
                                        return g()(e, "id")
                                    });
                                e.setState({
                                    loaded: !0,
                                    availableElections: l,
                                    inactiveElections: r
                                })
                            });
                        var t = this.props.location;
                        this.fetchBallot(t.pathname);
                        var a = setInterval(function() {
                            "complete" === document.readyState && (Ie.preload(), clearInterval(a))
                        }, 200);
                        "RAV" === Se.b && this.handleInactivityModal(), Object(fe.f)(), this.setFontPrefetchTimeout()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this,
                            a = this.state,
                            n = a.selectedPrecincts,
                            c = a.selectedElection,
                            o = a.selectedPartyBallotMapFetchPath,
                            l = a.ballotFetchInProgress,
                            r = this.props.location;
                        r !== e.location && document.body.scrollTo(0, 0), l || this.fetchBallot(r.pathname);
                        var i = Object(ye.c)(c),
                            s = g()(n, i, void 0),
                            d = "".concat(i).concat(s);
                        i && s && d !== o && (this.updateSelectedPartyBallotMapFetchPath(d), Object(ve.j)(i, s).then(function(e) {
                            return t.updateSelectedPartyBallotMap(e)
                        }).catch(function() {
                            t.clearSelections(), t.props.history.push("/")
                        }))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        document.removeEventListener("onModalStateChange", this.handleModalStateChange)
                    }
                }, {
                    key: "hasASelection",
                    value: function() {
                        var e = this,
                            t = !1;
                        return Object.keys(Pe).forEach(function(a) {
                            e.state[a] && !E()(e.state[a]) && (t = !0)
                        }), t
                    }
                }, {
                    key: "setFontPrefetchTimeout",
                    value: function() {
                        var e = this,
                            t = this.state.selectedLanguage;
                        this.prefetchPdfFontsTimeout && clearTimeout(this.prefetchPdfFontsTimeout), this.prefetchPdfFontsTimeout = setTimeout(function() {
                            var a = e.state.selectedLanguage;
                            if (t === a) {
                                var n = Object(xe.c)(a),
                                    c = n.regular,
                                    o = n.bold;
                                Object(ve.h)(c), Object(ve.h)(o)
                            }
                        }, 1e4)
                    }
                }, {
                    key: "handleInactivityModal",
                    value: function() {
                        var e, t, a = this,
                            n = function() {
                                clearTimeout(e), clearTimeout(t), !Object(fe.b)() && a.hasASelection() && (e = setTimeout(function() {
                                    var e = a.props,
                                        t = e.history;
                                    "/" !== e.location.pathname && t.push("/"), a.clearSelections()
                                }, 3e5), t = setTimeout(function() {
                                    a.closeHeaderModals(), a.setState({
                                        showInactivityModal: !0
                                    })
                                }, 12e4))
                            };
                        n(), document.addEventListener("scroll", n, !0), document.addEventListener("keydown", n), document.addEventListener("click", n)
                    }
                }, {
                    key: "userHasAvailableElections",
                    value: function() {
                        var e = this.state,
                            t = e.selectedPrecincts,
                            a = e.availableElections,
                            n = Object.keys(t);
                        return Boolean(n.find(function(e) {
                            return a.includes(e)
                        }))
                    }
                }, {
                    key: "fetchBallot",
                    value: function(e) {
                        var t = this,
                            a = this.state,
                            n = a.selectedElection,
                            c = a.selectedLanguage,
                            o = a.selectedParty,
                            l = a.selectedPartyBallotMap,
                            r = a.selectedBallot,
                            i = a.fetchedPath,
                            s = Ee(Object(ye.j)(o), l);
                        Object(ge.B)(n, c, s, r, i, e) && (this.updateSelectedBallot(void 0), this.setState({
                            ballotFetchInProgress: !0,
                            fetchedPath: Object(ge.o)(n, c, s)
                        }), Object(ve.d)(Object(ye.c)(n), c, s).then(function(e) {
                            t.setState({
                                ballotFetchInProgress: !1
                            }), t.updateSelectedBallot(e)
                        }).catch(function() {
                            t.setState({
                                ballotFetchInProgress: !1
                            })
                        }))
                    }
                }, {
                    key: "updateRenderLanguagesModal",
                    value: function(e) {
                        this.setState({
                            renderLanguagesModal: e
                        })
                    }
                }, {
                    key: "updateSelectedPrecinct",
                    value: function(e, t) {
                        this.setState(function(a) {
                            var n = a.selectedPrecincts,
                                c = Object(o.a)({}, n);
                            return c[e] = t, Object(fe.d)("selectedPrecincts", c), {
                                selectedPrecincts: c
                            }
                        })
                    }
                }, {
                    key: "updateSelectedLanguage",
                    value: function(e) {
                        var t = this;
                        this.setState({
                            selectedLanguage: e
                        }, function() {
                            t.setFontPrefetchTimeout()
                        }), Object(fe.d)("selectedLanguage", e), Object(q.d)(e)
                    }
                }, {
                    key: "updateSelectedElection",
                    value: function(e, t) {
                        this.setState({
                            selectedElection: e,
                            selectedPartyBallotMap: null,
                            selectedPartyBallotMapFetchPath: null
                        }, t), Object(fe.d)("selectedPartyBallotMap", null), Object(fe.d)("selectedPartyBallotMapFetchPath", null), Object(fe.d)("selectedElection", e)
                    }
                }, {
                    key: "updateRegisteredParty",
                    value: function(e) {
                        this.setState({
                            registeredParty: e
                        }), Object(fe.d)("registeredParty", e)
                    }
                }, {
                    key: "updateSelectedParty",
                    value: function(e) {
                        this.setState({
                            selectedParty: e
                        }), Object(fe.d)("selectedParty", e), this.updateSelectedBallot(void 0)
                    }
                }, {
                    key: "updateSelectedCandidates",
                    value: function(e) {
                        this.setState({
                            selectedCandidates: e
                        }), Object(fe.d)("selectedCandidates", e)
                    }
                }, {
                    key: "updateSelectedCandidatesForBallot",
                    value: function(e) {
                        var t = this.state,
                            a = t.selectedElection,
                            n = t.selectedParty,
                            c = t.selectedPartyBallotMap,
                            o = C()(this.state.selectedCandidates);
                        o[_e(a, Object(ye.j)(n), c)] = e, this.updateSelectedCandidates(o)
                    }
                }, {
                    key: "updateWriteInValues",
                    value: function(e, t) {
                        var a = this.state,
                            n = a.selectedElection,
                            c = a.selectedParty,
                            l = a.selectedPartyBallotMap,
                            r = this.state.writeInValues,
                            i = Object(o.a)({}, r),
                            s = _e(n, Object(ye.j)(c), l);
                        i[s] = i[s] || {}, i[s][e] = t, this.setState({
                            writeInValues: i
                        }), Object(fe.d)("writeInValues", i)
                    }
                }, {
                    key: "updateSelectedBallot",
                    value: function(e) {
                        this.setState({
                            selectedBallot: e
                        }), Object(fe.d)("selectedBallot", e)
                    }
                }, {
                    key: "updateSelectedBallotItemId",
                    value: function(e) {
                        this.setState({
                            selectedBallotItemId: e,
                            queuedContestFocus: !0
                        }), Object(fe.d)("selectedBallotItemId", e)
                    }
                }, {
                    key: "updateSelectedPartyBallotMap",
                    value: function(e) {
                        this.setState({
                            selectedPartyBallotMap: e
                        }), Object(fe.d)("selectedPartyBallotMap", e)
                    }
                }, {
                    key: "updateSelectedPartyBallotMapFetchPath",
                    value: function(e) {
                        this.setState({
                            selectedPartyBallotMapFetchPath: e
                        }), Object(fe.d)("selectedPartyBallotMapFetchPath", e)
                    }
                }, {
                    key: "updateSelectedPrivacy",
                    value: function(e) {
                        Object(fe.e)(e), e ? (Object(fe.d)("selectedCandidates", this.state.selectedCandidates), Object(fe.d)("writeInValues", this.state.writeInValues)) : (Object(fe.d)("selectedCandidates", {}), Object(fe.d)("writeInValues", {}));
                        var t = Object(fe.a)("selectedCandidates", {}),
                            a = Object(fe.a)("writeInValues", {});
                        this.setState({
                            selectedPrivacy: e,
                            selectedCandidates: t,
                            writeInValues: a
                        })
                    }
                }, {
                    key: "clearQueuedContestFocus",
                    value: function() {
                        this.setState({
                            queuedContestFocus: !1
                        })
                    }
                }, {
                    key: "clearSelections",
                    value: function() {
                        this.setState(Pe), Object.keys(Pe).forEach(function(e) {
                            sessionStorage.removeItem(e), localStorage.removeItem(e)
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.state,
                            a = t.mode,
                            c = t.selectedPrivacy,
                            o = t.writeInValues,
                            l = t.availableElections,
                            r = t.selectedPrecincts,
                            i = t.selectedElection,
                            s = t.selectedParty,
                            d = t.selectedPartyBallotMap,
                            u = t.registeredParty,
                            b = t.selectedCandidates,
                            v = t.selectedBallot,
                            g = t.selectedBallotItemId,
                            y = t.selectedLanguage,
                            _ = t.contentTabIndex,
                            C = t.inactiveElections,
                            O = t.completedBallots,
                            x = t.agreedToAttestation,
                            S = t.showInactivityModal,
                            k = t.queuedContestFocus,
                            N = this.props,
                            w = N.history,
                            j = N.location,
                            M = b[_e(i, Object(ye.j)(s), d)] || {},
                            B = o[_e(i, Object(ye.j)(s), d)] || {};
                        return p.a.createElement(p.a.Fragment, null, p.a.createElement(me, {
                            updateSelectedLanguage: this.updateSelectedLanguage,
                            language: y,
                            showPrivacy: !E()(s) || c,
                            selectedPrivacy: c,
                            updateSelectedPrivacy: this.updateSelectedPrivacy,
                            copy: Object(Z.a)("Header", a, y),
                            setRenderLanguagesModal: this.updateRenderLanguagesModal,
                            setCloseHeaderModals: this.updateCloseHeaderModals,
                            statementModal: this.state.statementModal,
                            writeInValues: B,
                            mode: a,
                            history: w,
                            location: j
                        }), S && p.a.createElement(Oe, {
                            copy: Object(Z.a)("", a, y),
                            handleClose: function() {
                                return e.setState({
                                    showInactivityModal: !1
                                })
                            }
                        }), p.a.createElement(h.c, {
                            path: "/(elections|parties|overview|ballot|review|pollpass)",
                            render: function(t) {
                                return i ? Object(ye.m)(i, y) || p.a.createElement(he, {
                                    copy: Object(Z.a)("NoLangBallotModal", a, y),
                                    selectedLanguage: y,
                                    onTryEnglish: function() {
                                        return e.updateSelectedLanguage("EN")
                                    },
                                    onTryAnother: e.state.renderLanguagesModal
                                }) : null
                            }
                        }), p.a.createElement(h.c, {
                            path: "/(elections|parties|overview|ballot|review|pollpass)",
                            render: function(t) {
                                return e.state.loaded ? e.userHasAvailableElections(r) || p.a.createElement(be, {
                                    copy: Object(Z.a)("NoActiveBallotModal", a, y),
                                    goBack: function() {
                                        return w.goBack()
                                    }
                                }) : null
                            }
                        }), p.a.createElement(h.c, {
                            path: "/",
                            render: function(t) {
                                var a = f.a.parse(t.location.search) || {},
                                    c = a.eid,
                                    o = a.pid,
                                    l = a.rid;
                                if (!(l && o && c)) return null;
                                Object(ve.f)(c).then(function(t) {
                                    var a = Object(n.a)({}, c, l),
                                        r = "NPP" === o ? void 0 : o;
                                    Object(fe.d)("registeredParty", r), Object(fe.d)("selectedPrecincts", a), Object(fe.d)("selectedPartyBallotMap", null), Object(fe.d)("selectedPartyBallotMapFetchPath", null), Object(fe.d)("selectedElection", t), e.setState({
                                        selectedElection: t,
                                        selectedPrecincts: a,
                                        registeredParty: r
                                    }, function() {
                                        return w.replace("/parties")
                                    })
                                })
                            }
                        }), p.a.createElement(m.Suspense, {
                            fallback: Object(Ce.a)(j.pathname)
                        }, p.a.createElement(h.e, null, p.a.createElement(h.b, {
                            from: "/landing",
                            to: "/"
                        }), p.a.createElement(h.c, {
                            exact: !0,
                            path: "/",
                            render: function(t) {
                                return p.a.createElement(Ne, Object.assign({}, t, {
                                    copy: Object(Z.a)("Landing", a, y),
                                    language: y,
                                    mode: a,
                                    contentTabIndex: _,
                                    agreedToAttestation: x,
                                    setAgreedToAttestation: e.setAgreedToAttestation
                                }))
                            }
                        }), p.a.createElement(h.c, {
                            path: "/addresslookup",
                            render: function(t) {
                                return "ISB" !== a && t.history.push("/voterlookup"), p.a.createElement(we, Object.assign({}, t, {
                                    inactiveElections: C,
                                    availableElections: l,
                                    setSelectedPrecinct: e.updateSelectedPrecinct,
                                    clearSelectedPrecincts: e.clearSelectedPrecincts,
                                    clearRegisteredParty: function() {
                                        return e.updateRegisteredParty(void 0)
                                    },
                                    language: y,
                                    mode: a,
                                    contentTabIndex: _,
                                    clearCompletedBallots: e.clearCompletedBallots
                                }))
                            }
                        }), p.a.createElement(pe, {
                            isAllowed: x || "RAV" !== a,
                            path: "/voterlookup",
                            render: function(t) {
                                return p.a.createElement(je, Object.assign({}, t, {
                                    inactiveElections: C,
                                    availableElections: l,
                                    setSelectedPrecinct: e.updateSelectedPrecinct,
                                    clearSelectedPrecincts: e.clearSelectedPrecincts,
                                    setRegisteredParty: e.updateRegisteredParty,
                                    language: y,
                                    mode: a,
                                    contentTabIndex: _,
                                    clearCompletedBallots: e.clearCompletedBallots
                                }))
                            }
                        }), p.a.createElement(pe, {
                            path: "/elections",
                            isAllowed: !E()(r),
                            render: function(t) {
                                return p.a.createElement(Me, Object.assign({}, t, {
                                    onSelectElection: function(a) {
                                        e.updateSelectedElection(a, function() {
                                            return t.history.push("/parties")
                                        })
                                    },
                                    matchedElections: Object.keys(r),
                                    language: y,
                                    copy: Object(Z.a)("Elections", a, y),
                                    contentTabIndex: _,
                                    completedBallots: O,
                                    clearSelections: e.clearSelections
                                }))
                            }
                        }), p.a.createElement(pe, {
                            path: "/parties",
                            isAllowed: !E()(i),
                            render: function(t) {
                                return p.a.createElement(Be, Object.assign({}, t, {
                                    clearSelections: e.clearSelections,
                                    onSelectParty: e.updateSelectedParty,
                                    skipPrivacy: !!Object.keys(O).length,
                                    selectedElection: i,
                                    selectedPartyBallotMap: d,
                                    registeredParty: u,
                                    language: y,
                                    mode: a,
                                    contentTabIndex: _
                                }))
                            }
                        }), p.a.createElement(pe, {
                            path: "/privacy",
                            isAllowed: !E()(s) || c,
                            render: function(t) {
                                return p.a.createElement(Le, Object.assign({}, t, {
                                    selectedPrivacy: c,
                                    updateSelectedPrivacy: e.updateSelectedPrivacy,
                                    copy: Object(Z.a)("Privacy", a, y),
                                    contentTabIndex: _
                                }))
                            }
                        }), p.a.createElement(pe, {
                            isAllowed: !E()(s),
                            path: "/overview",
                            render: function(e) {
                                return p.a.createElement(Te, Object.assign({}, e, {
                                    copy: Object(Z.a)("Overview", a, y),
                                    mode: a,
                                    language: y,
                                    contentTabIndex: _
                                }))
                            }
                        }), p.a.createElement(pe, {
                            path: "/ballot",
                            isAllowed: !E()(s),
                            render: function(t) {
                                return p.a.createElement(Ie, Object.assign({
                                    component: "BallotContainer"
                                }, t, {
                                    selectedElection: i,
                                    writeInValues: B,
                                    selectedCandidates: M,
                                    selectedBallotItemId: g,
                                    selectedLanguage: y,
                                    queuedContestFocus: k,
                                    mode: a,
                                    copy: Object(Z.a)("Ballot", a, y),
                                    ballot: v,
                                    updateSelectedBallotItemId: e.updateSelectedBallotItemId,
                                    updateSelectedCandidates: e.updateSelectedCandidatesForBallot,
                                    updateWriteInValues: e.updateWriteInValues,
                                    clearQueuedContestFocus: e.clearQueuedContestFocus,
                                    clearCandidatesAndWriteIns: e.clearCandidatesAndWriteIns,
                                    contentTabIndex: _,
                                    setStatementModal: function(t) {
                                        return e.setState({
                                            statementModal: t
                                        })
                                    }
                                }))
                            }
                        }), p.a.createElement(pe, {
                            path: "/review",
                            isAllowed: !E()(s),
                            render: function(t) {
                                return p.a.createElement(Ie, Object.assign({
                                    component: "BallotReview"
                                }, t, {
                                    ballotItemsInOrder: Object(ge.b)(v),
                                    contestsInOrder: Object(ge.n)(v),
                                    selections: M,
                                    onSelectBallotItem: e.updateSelectedBallotItemId,
                                    updateSelectedCandidates: e.updateSelectedCandidatesForBallot,
                                    updateWriteInValues: e.updateWriteInValues,
                                    writeInValues: B,
                                    selectedLanguage: y,
                                    copy: Object(Z.a)("BallotReview", a, y),
                                    mode: a,
                                    selectedPrivacy: c,
                                    updateSelectedPrivacy: e.updateSelectedPrivacy,
                                    contentTabIndex: _
                                }))
                            }
                        }), p.a.createElement(pe, {
                            path: "/pollpass",
                            isAllowed: !E()(s),
                            render: function(t) {
                                return p.a.createElement(Ie, Object.assign({
                                    component: "PollPassContainer"
                                }, t, {
                                    election: i,
                                    selectedPrecincts: r,
                                    ballot: v,
                                    partyId: Object(ye.j)(s),
                                    selections: M,
                                    mode: a,
                                    writeInValues: B,
                                    language: y,
                                    contentTabIndex: _,
                                    clearSelections: e.clearSelections,
                                    hasIncompleteBallots: Object(ge.A)(Object.keys(r), O, C),
                                    updateCompletedBallots: e.updateCompletedBallots,
                                    updateSelectedLanguage: e.updateSelectedLanguage
                                }))
                            }
                        }), p.a.createElement(pe, {
                            path: "/oath",
                            isAllowed: "UOC" === a && !E()(s),
                            render: function(t) {
                                return p.a.createElement(Ie, Object.assign({
                                    component: "Oath"
                                }, t, {
                                    copy: Object(Z.a)("Valediction", a, y),
                                    mode: a,
                                    language: y,
                                    contentTabIndex: _,
                                    updateCompletedBallots: e.updateCompletedBallots,
                                    electionId: Object(ye.c)(i),
                                    clearSelections: e.clearSelections,
                                    hasIncompleteBallots: Object(ge.A)(Object.keys(r), O, C)
                                }))
                            }
                        }), p.a.createElement(h.c, {
                            path: "/valediction",
                            render: function(e) {
                                return p.a.createElement(Ie, Object.assign({
                                    component: "Valediction"
                                }, e, {
                                    copy: Object(Z.a)("Valediction", a, y),
                                    mode: a,
                                    language: y,
                                    contentTabIndex: _
                                }))
                            }
                        }))), Se.a && p.a.createElement(ke, {
                            mode: a,
                            onSwitch: function(t) {
                                e.setState({
                                    mode: t
                                })
                            }
                        }))
                    }
                }]), t
            }(p.a.Component);
            t.default = Object(h.h)(Fe)
        }
    }
]);
//# sourceMappingURL=1.4decdd62.chunk.js.map