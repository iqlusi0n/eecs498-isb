(window.webpackJsonp = window.webpackJsonp || []).push([
    [6], {
        122: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var a = n(0),
                c = n.n(a),
                o = n(133),
                i = n.n(o);

            function l(e) {
                var t = e.children,
                    n = e.className,
                    a = e.contentClassName;
                return c.a.createElement("div", {
                    className: "grid-content"
                }, c.a.createElement("div", {
                    className: "".concat(n, " ").concat(i.a.page)
                }, c.a.createElement("div", {
                    className: "".concat(a, " ").concat(i.a.content)
                }, t)))
            }
            l.defaultProps = {
                className: "",
                contentClassName: ""
            }
        },
        125: function(e, t, n) {
            "use strict";
            var a = n(0),
                c = n.n(a),
                o = n(140),
                i = n.n(o);

            function l(e) {
                var t = e.children,
                    n = e.contentClassName,
                    a = e.inMainBody;
                return c.a.createElement("div", {
                    className: "".concat(i.a.footer, " ").concat(a ? "" : "content-flip")
                }, c.a.createElement("div", {
                    className: i.a.contentContainer
                }, c.a.createElement("div", {
                    className: "".concat(n, " ").concat(i.a.content)
                }, t)))
            }
            l.defaultProps = {
                contentClassName: ""
            }, t.a = l
        },
        133: function(e, t, n) {
            e.exports = {
                page: "DefaultColumnLayout_page__3bHKG content-flip",
                content: "DefaultColumnLayout_content__3r8BA content"
            }
        },
        140: function(e, t, n) {
            e.exports = {
                footer: "DefaultStickyFooter_footer__3MYJ9 footer",
                contentContainer: "DefaultStickyFooter_contentContainer__1Z1zn",
                content: "DefaultStickyFooter_content__3_7Uf content"
            }
        },
        238: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var a = n(0),
                c = n.n(a),
                o = n(239),
                i = n.n(o);

            function l(e) {
                var t = e.children;
                return c.a.createElement("div", {
                    className: "".concat(i.a.optionList, " ").concat(e.className)
                }, t)
            }
        },
        239: function(e, t, n) {
            e.exports = {
                optionList: "OptionList_optionList__1YJCh"
            }
        },
        241: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var a = n(0),
                c = n.n(a),
                o = n(106);

            function i(e) {
                var t = e.text,
                    n = e.onClick,
                    a = e.contentTabIndex,
                    i = e.className;
                return c.a.createElement(o.a, {
                    text: t,
                    onClick: n,
                    colorOption: "yellow",
                    typeOption: "center",
                    tabIndex: a,
                    className: "".concat(i)
                })
            }
        },
        573: function(e, t, n) {
            e.exports = {
                copy: "Elections_copy__ekbec",
                optionItemContainer: "Elections_optionItemContainer__2JsbS",
                check: "Elections_check__1GJlq",
                viewedContainer: "Elections_viewedContainer__17Q9G",
                hidden: "Elections_hidden__2Oczt",
                viewed: "Elections_viewed__2UJNv",
                skip: "Elections_skip__2xPwN",
                optionList: "Elections_optionList__3-opq",
                electionOption: "Elections_electionOption__2B9OH",
                bodyCopy: "Elections_bodyCopy__3Pfun"
            }
        },
        694: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", function() {
                return g
            });
            var a = n(18),
                c = n(107),
                o = n(108),
                i = n(113),
                l = n(110),
                s = n(112),
                r = n(0),
                u = n.n(r),
                m = n(176),
                d = n.n(m),
                p = n(122),
                _ = n(109),
                E = n(105),
                f = n(238),
                v = n(241),
                y = n(144),
                h = n(143),
                N = n(208),
                b = n(573),
                C = n.n(b),
                x = n(125),
                k = n(106),
                g = function(e) {
                    function t(e) {
                        var n;
                        return Object(c.a)(this, t), (n = Object(i.a)(this, Object(l.a)(t).call(this, e))).state = {
                            activeElections: []
                        }, n
                    }
                    return Object(s.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props.matchedElections;
                            Object(h.g)(t).then(function(t) {
                                var n = Object(a.a)(t, 1)[0];
                                e.setState({
                                    activeElections: n
                                })
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.onSelectElection,
                                n = e.copy,
                                a = e.language,
                                c = e.contentTabIndex,
                                o = e.completedBallots,
                                i = e.history,
                                l = e.clearSelections,
                                s = this.state.activeElections;
                            return s.length ? (1 === s.length && (t(s[0]), i.replace("/parties")), u.a.createElement(u.a.Fragment, null, u.a.createElement(p.a, null, u.a.createElement("div", {
                                className: C.a.copy
                            }, u.a.createElement(_.a, {
                                text: n.ep,
                                tabIndex: c
                            }), u.a.createElement(E.a, {
                                text: n.kf,
                                className: C.a.bodyCopy,
                                tabIndex: c
                            }), u.a.createElement(E.a, {
                                text: u.a.createElement("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: n.es
                                    }
                                }),
                                className: C.a.bodyCopy,
                                tabIndex: c
                            })), !d()(o) && u.a.createElement(E.a, {
                                className: C.a.bodyCopy,
                                text: u.a.createElement("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: n.uk
                                    }
                                })
                            }), u.a.createElement(f.a, {
                                className: C.a.optionList
                            }, s.map(function(e) {
                                return u.a.createElement("div", {
                                    key: e.id,
                                    className: C.a.optionItemContainer
                                }, u.a.createElement(v.a, {
                                    className: C.a.electionOption,
                                    text: Object(y.g)(e, a),
                                    onClick: function() {
                                        return t(e)
                                    },
                                    contentTabIndex: c
                                }), u.a.createElement("div", {
                                    className: "".concat(C.a.viewedContainer, " ").concat(o[e.id] ? "" : C.a.hidden)
                                }, u.a.createElement(N.a, {
                                    className: C.a.check
                                }), u.a.createElement(E.a, {
                                    className: C.a.viewed,
                                    text: n.tg,
                                    tabIndex: c
                                })))
                            }))), !d()(o) && u.a.createElement(x.a, null, u.a.createElement(k.a, {
                                className: C.a.skip,
                                colorOption: "yellow",
                                typeOption: "right",
                                onClick: function() {
                                    i.push("/valediction"), l()
                                },
                                text: n.th,
                                tabIndex: c
                            })))) : u.a.createElement("div", {
                                style: {
                                    width: "50px",
                                    textAlign: "center",
                                    margin: "50vh auto"
                                }
                            }, n.tf, "...")
                        }
                    }]), t
                }(u.a.Component);
            g.defaultProps = {
                copy: {},
                mode: "ISB",
                language: "EN",
                onSelectElection: function() {
                    return console.warn("No onSelectElection passed to Elections")
                },
                matchedElections: []
            }
        }
    }
]);