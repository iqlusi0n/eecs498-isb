(window.webpackJsonp = window.webpackJsonp || []).push([
    [5], {
        122: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return c
            });
            var n = a(0),
                o = a.n(n),
                r = a(133),
                l = a.n(r);

            function c(e) {
                var t = e.children,
                    a = e.className,
                    n = e.contentClassName;
                return o.a.createElement("div", {
                    className: "grid-content"
                }, o.a.createElement("div", {
                    className: "".concat(a, " ").concat(l.a.page)
                }, o.a.createElement("div", {
                    className: "".concat(n, " ").concat(l.a.content)
                }, t)))
            }
            c.defaultProps = {
                className: "",
                contentClassName: ""
            }
        },
        125: function(e, t, a) {
            "use strict";
            var n = a(0),
                o = a.n(n),
                r = a(140),
                l = a.n(r);

            function c(e) {
                var t = e.children,
                    a = e.contentClassName,
                    n = e.inMainBody;
                return o.a.createElement("div", {
                    className: "".concat(l.a.footer, " ").concat(n ? "" : "content-flip")
                }, o.a.createElement("div", {
                    className: l.a.contentContainer
                }, o.a.createElement("div", {
                    className: "".concat(a, " ").concat(l.a.content)
                }, t)))
            }
            c.defaultProps = {
                contentClassName: ""
            }, t.a = c
        },
        132: function(e, t) {
            e.exports = function() {}
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
        162: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return i
            });
            var n = a(0),
                o = a.n(n),
                r = a(142),
                l = a(173),
                c = a.n(l);

            function i(e) {
                var t = e.label,
                    a = e.id,
                    n = e.placeholder,
                    l = e.value,
                    i = e.onChange,
                    d = e.onKeyDown,
                    s = e.autoComplete,
                    u = e.className,
                    m = e.redOutline,
                    p = e.redText,
                    b = e.tabIndex,
                    y = e.maxLength,
                    f = e.pattern;
                return o.a.createElement("div", {
                    className: "".concat(u, " ").concat(c.a.textInput)
                }, o.a.createElement(r.a, {
                    className: c.a.labelCopy,
                    textLabel: t,
                    name: a
                }), o.a.createElement("input", {
                    className: "".concat(m ? c.a.redOutline : "", " ").concat(c.a.input),
                    type: "text",
                    name: a,
                    id: a,
                    placeholder: n,
                    value: l,
                    onChange: i,
                    onKeyDown: d,
                    autoComplete: s,
                    tabIndex: b,
                    maxLength: y,
                    pattern: f
                }), p && o.a.createElement(r.a, {
                    className: c.a.redText,
                    text: p,
                    tabIndex: b
                }))
            }
            i.defaultProps = {
                autoComplete: "on",
                className: "",
                redOutline: !1
            }
        },
        173: function(e, t, a) {
            e.exports = {
                textInput: "TextInput_textInput__3IVuM",
                labelCopy: "TextInput_labelCopy__3QdyM",
                input: "TextInput_input__3U6LA content-flip",
                redOutline: "TextInput_redOutline__1pmsK",
                redText: "TextInput_redText__2PLGU"
            }
        },
        191: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return h
            });
            var n = a(107),
                o = a(108),
                r = a(113),
                l = a(110),
                c = a(112),
                i = a(0),
                d = a.n(i),
                s = a(132),
                u = a.n(s),
                m = a(122),
                p = a(109),
                b = a(166),
                y = a(236),
                f = a.n(y),
                h = function(e) {
                    function t(e) {
                        var a;
                        return Object(n.a)(this, t), (a = Object(r.a)(this, Object(l.a)(t).call(this, e))).formRef = d.a.createRef(), a
                    }
                    return Object(c.a)(t, e), Object(o.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.formRef.current.addEventListener("keydown", function(t) {
                                var a = e.props,
                                    n = a.onSubmit,
                                    o = a.overrideEnter;
                                13 !== t.keyCode && "Enter" !== t.key || (t.preventDefault(), o ? o(t) : n(t))
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.title,
                                a = e.subtitle,
                                n = e.children,
                                o = e.className,
                                r = e.tabIndex;
                            return d.a.createElement(m.a, {
                                className: o
                            }, d.a.createElement("div", {
                                className: f.a.formContainer
                            }, d.a.createElement(p.a, {
                                text: t,
                                tabIndex: r
                            }), d.a.createElement(b.a, {
                                text: a,
                                tabIndex: r
                            }), d.a.createElement("form", {
                                ref: this.formRef
                            }, n)))
                        }
                    }]), t
                }(d.a.Component);
            h.defaultProps = {
                className: "",
                onSubmit: u.a
            }
        },
        236: function(e, t, a) {
            e.exports = {
                formContainer: "TitleForm_formContainer__3Q1HB"
            }
        },
        563: function(e, t, a) {
            e.exports = {
                bodyCopy: "VoterLookupFooter_bodyCopy__bPLx-",
                voterLookupFooterButton: "VoterLookupFooter_voterLookupFooterButton__2J94T"
            }
        },
        565: function(e, t, a) {
            e.exports = {
                selectField: "SelectField_selectField__3uhnK",
                labelCopy: "SelectField_labelCopy__1oIbQ",
                select: "SelectField_select__1G_Y9 multilang-support",
                redOutline: "SelectField_redOutline__r9kQU",
                redText: "SelectField_redText__J3rS-"
            }
        },
        567: function(e, t, a) {
            e.exports = {
                form: "VoterLookupPrimary_form__48L-7",
                bodyCopy: "VoterLookupPrimary_bodyCopy__17yQv",
                addressBodyCopy: "VoterLookupPrimary_addressBodyCopy__o4U8m",
                labelCopy: "VoterLookupPrimary_labelCopy__2sEuP",
                nameField: "VoterLookupPrimary_nameField__gLhnz",
                monthField: "VoterLookupPrimary_monthField__2Gl2a",
                dayField: "VoterLookupPrimary_dayField__3o39E",
                yearField: "VoterLookupPrimary_yearField__1jsDO",
                dobInputs: "VoterLookupPrimary_dobInputs__1G2RG",
                twoColumnDOBField: "VoterLookupPrimary_twoColumnDOBField__2RE3r",
                houseNumField: "VoterLookupPrimary_houseNumField__34LOQ",
                preferLine: "VoterLookupPrimary_preferLine__xJ12V",
                addressButton: "VoterLookupPrimary_addressButton__3yqyb",
                sampleDob: "VoterLookupPrimary_sampleDob__EUlP9"
            }
        },
        569: function(e, t, a) {
            e.exports = {
                bodyCopy: "VoterLookupWarningModal_bodyCopy__27WS_",
                navButton: "VoterLookupWarningModal_navButton__lUXoa"
            }
        },
        571: function(e, t, a) {
            e.exports = {
                accommodateLongText: "VoterLookupAskForMoreModal_accommodateLongText__qangR"
            }
        },
        698: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(18),
                o = a(136),
                r = a.n(o),
                l = a(138),
                c = a(27),
                i = a(107),
                d = a(108),
                s = a(113),
                u = a(110),
                m = a(112),
                p = a(128),
                b = a(0),
                y = a.n(b),
                f = a(24),
                h = a.n(f),
                x = a(143),
                v = a(25),
                _ = a(162),
                k = a(105),
                C = a(106),
                O = a(125),
                N = a(563),
                E = a.n(N);

            function g(e) {
                var t = e.onSubmit,
                    a = e.mode,
                    n = e.history,
                    o = e.contentTabIndex,
                    r = e.copy;
                return y.a.createElement(O.a, null, "ISB" === a && y.a.createElement(k.a, {
                    className: [E.a.bodyCopy, "hiddenMobileTablet"].join(" "),
                    style: {
                        margin: "0"
                    },
                    text: r.di,
                    tabIndex: o
                }), "ISB" === a && y.a.createElement(C.a, {
                    className: "hiddenMobileTablet",
                    colorOption: "secondary",
                    onClick: function() {
                        return n.push("/addresslookup")
                    },
                    text: r.dj,
                    tabIndex: o
                }), y.a.createElement(C.a, {
                    margin: "0 0 0 auto",
                    className: E.a.voterLookupFooterButton,
                    colorOption: "yellow",
                    typeOption: "right",
                    text: r.dk,
                    onClick: t,
                    tabIndex: o
                }))
            }
            var L = a(191),
                I = a(142),
                F = a(565),
                S = a.n(F);

            function M(e) {
                var t = e.label,
                    a = e.id,
                    n = e.value,
                    o = e.onChange,
                    r = e.options,
                    l = e.className,
                    c = e.redOutline,
                    i = e.redText,
                    d = e.tabIndex;
                return y.a.createElement("div", {
                    className: "".concat(l, " ").concat(S.a.selectField)
                }, y.a.createElement(I.a, {
                    className: S.a.labelCopy,
                    textLabel: t,
                    name: a
                }), y.a.createElement("select", {
                    className: "".concat(c ? S.a.redOutline : "", " ").concat(S.a.select),
                    type: "text",
                    name: a,
                    id: a,
                    defaultValue: n,
                    onChange: o,
                    tabIndex: d
                }, r.map(function(e) {
                    return y.a.createElement("option", {
                        key: e.value,
                        value: e.value
                    }, e.displayName)
                })), i && y.a.createElement(I.a, {
                    className: S.a.redText,
                    text: i,
                    tabIndex: d
                }))
            }
            M.defaultProps = {
                options: [],
                redOutline: !1
            };
            var j = a(567),
                B = a.n(j),
                D = function() {
                    var e = (new Date).getFullYear(),
                        t = Math.floor(e / 100 % 10),
                        a = Math.floor(e / 10 % 10),
                        n = Math.floor(e % 10),
                        o = "";
                    t > 0 && (o = "2[0-".concat(t - 1, "][0-9][0-9]|"));
                    var r = "";
                    a > 0 && (r = "2".concat(t, "[0-").concat(a - 1, "][0-9]|"));
                    var l = "2".concat(t).concat(a, "[0-").concat(n, "]|");
                    return "^([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1][0-9][0-9][0-9]|".concat(o + r + l, ")$")
                };

            function T(e) {
                var t = e.lastname,
                    a = e.monthDOB,
                    n = e.dayDOB,
                    o = e.yearDOB,
                    r = e.houseNumber,
                    l = e.failedValidation,
                    c = e.mode,
                    i = e.onChange,
                    d = e.onSubmit,
                    s = e.copy,
                    u = e.history,
                    m = e.contentTabIndex,
                    p = e.language,
                    f = [{
                        displayName: "",
                        value: ""
                    }, {
                        displayName: s.jp,
                        value: "01"
                    }, {
                        displayName: s.jq,
                        value: "02"
                    }, {
                        displayName: s.jr,
                        value: "03"
                    }, {
                        displayName: s.js,
                        value: "04"
                    }, {
                        displayName: s.jt,
                        value: "05"
                    }, {
                        displayName: s.ju,
                        value: "06"
                    }, {
                        displayName: s.jv,
                        value: "07"
                    }, {
                        displayName: s.jw,
                        value: "08"
                    }, {
                        displayName: s.jx,
                        value: "09"
                    }, {
                        displayName: s.jy,
                        value: "10"
                    }, {
                        displayName: s.jz,
                        value: "11"
                    }, {
                        displayName: s.ka,
                        value: "12"
                    }],
                    h = D();
                return y.a.createElement(b.Fragment, null, y.a.createElement(L.a, {
                    className: B.a.form,
                    title: s.cx,
                    onSubmit: d,
                    tabIndex: m
                }, y.a.createElement(k.a, {
                    className: B.a.bodyCopy,
                    text: "".concat(s.cy, " ").concat(s.cz),
                    tabIndex: m
                }), y.a.createElement(_.a, {
                    id: "lastname",
                    className: B.a.nameField,
                    label: s.da,
                    value: t,
                    onChange: i,
                    redOutline: l && !t,
                    redText: l && !t && s.kk,
                    tabIndex: m
                }), y.a.createElement(I.a, {
                    textLabel: s.db,
                    className: B.a.labelCopy,
                    tabIndex: m
                }), y.a.createElement(k.a, {
                    tabIndex: m,
                    className: B.a.sampleDob,
                    text: s.vc
                }), y.a.createElement("div", {
                    className: B.a.dobInputs
                }, y.a.createElement(M, {
                    id: "monthDOB",
                    className: B.a.monthField,
                    value: a,
                    options: f,
                    onChange: i,
                    label: s.dc,
                    redOutline: l && !a,
                    redText: l && !a && s.kk,
                    tabIndex: m
                }), y.a.createElement(_.a, {
                    id: "dayDOB",
                    className: B.a.dayField,
                    label: s.dd,
                    value: n,
                    onChange: i,
                    redOutline: l && !n,
                    redText: l && !n && s.kk,
                    tabIndex: m,
                    pattern: "^(|[1-9]|[1-2][0-9]|[3][0-1])$"
                }), y.a.createElement(_.a, {
                    id: "yearDOB",
                    className: B.a.yearField,
                    label: s.de,
                    value: o,
                    onChange: i,
                    redOutline: l && !o,
                    redText: l && !o && s.kk,
                    tabIndex: m,
                    pattern: h
                })), y.a.createElement(I.a, {
                    className: B.a.labelCopy,
                    textLabel: s.df,
                    name: "houseNumber"
                }), y.a.createElement(k.a, {
                    tabIndex: m,
                    className: B.a.addressBodyCopy,
                    text: s.ec
                }), y.a.createElement(k.a, {
                    tabIndex: m,
                    className: B.a.addressBodyCopy,
                    text: s.ed
                }), y.a.createElement(_.a, {
                    className: B.a.houseNumField,
                    id: "houseNumber",
                    value: r,
                    redOutline: l && !r,
                    redText: l && !r && s.kk,
                    onChange: i,
                    tabIndex: m,
                    pattern: "^[0-9]{0,50}$"
                }), "ISB" === c && y.a.createElement(k.a, {
                    className: "hiddenDesktop ".concat(B.a.preferLine),
                    style: {
                        margin: "0"
                    },
                    text: s.di,
                    tabIndex: m
                }), "ISB" === c && y.a.createElement(C.a, {
                    className: "hiddenDesktop ".concat(B.a.addressButton),
                    colorOption: "secondary",
                    onClick: function() {
                        return u.push("/addresslookup")
                    },
                    text: s.dj,
                    tabIndex: m
                })), y.a.createElement(g, {
                    mode: c,
                    copy: Object(v.a)("VoterLookupFooter", c, p),
                    onSubmit: d,
                    history: u,
                    contentTabIndex: m
                }))
            }

            function V(e) {
                var t = e.firstname,
                    a = e.driversLicense,
                    n = e.onChange,
                    o = e.onSubmit,
                    r = e.copy,
                    l = e.mode,
                    c = e.history,
                    i = e.failedValidation,
                    d = e.contentTabIndex;
                return y.a.createElement(b.Fragment, null, y.a.createElement(L.a, {
                    title: r.dw,
                    onSubmit: o,
                    tabIndex: d
                }, y.a.createElement(_.a, {
                    id: "firstname",
                    label: r.tx,
                    value: t,
                    onChange: n,
                    redOutline: i && !t,
                    redText: i && !t && r.kk,
                    tabIndex: d
                }), y.a.createElement(_.a, {
                    id: "driversLicense",
                    label: r.dx,
                    value: a,
                    onChange: n,
                    redOutline: i && !a,
                    redText: i && !a && r.kk,
                    tabIndex: d
                })), y.a.createElement(g, {
                    onSubmit: o,
                    mode: l,
                    history: c,
                    copy: r,
                    contentTabIndex: d
                }))
            }
            var P = a(116),
                w = a(109),
                A = a(569),
                W = a.n(A);

            function R(e) {
                var t = e.onCancel,
                    a = e.copy,
                    n = a.dp,
                    o = y.a.createElement(k.a, {
                        tabIndex: 0,
                        className: W.a.bodyCopy,
                        text: y.a.createElement("div", {
                            dangerouslySetInnerHTML: {
                                __html: a.dq
                            }
                        })
                    }),
                    r = a.dv;
                return y.a.createElement(P.a, {
                    handleClose: t,
                    title: y.a.createElement(w.a, {
                        tabIndex: 0,
                        text: n
                    }),
                    body: o,
                    cancelButton: y.a.createElement(C.a, {
                        className: W.a.navButton,
                        colorOption: "yellow",
                        typeOption: "center",
                        text: r,
                        onClick: t
                    })
                })
            }
            var U = a(571),
                G = a.n(U);

            function J(e) {
                var t = e.onCancel,
                    a = e.onContinue,
                    n = e.copy,
                    o = n.dl,
                    r = n.dm,
                    l = n.dn,
                    c = n.do;
                return y.a.createElement(P.a, {
                    handleClose: t,
                    title: y.a.createElement(w.a, {
                        tabIndex: 0,
                        text: o
                    }),
                    body: y.a.createElement(k.a, {
                        tabIndex: 0,
                        text: r
                    }),
                    cancelButton: y.a.createElement(C.a, {
                        className: G.a.accommodateLongText,
                        text: l,
                        onClick: t,
                        colorOption: "secondary"
                    }),
                    continueButton: y.a.createElement(C.a, {
                        className: G.a.accommodateLongText,
                        colorOption: "yellow",
                        text: c,
                        onClick: a
                    })
                })
            }

            function Q(e) {
                return e && !e.error
            }

            function K(e) {
                return e && e.error && e.error.message && /Multiple matches/.test(e.error.message)
            }
            a.d(t, "default", function() {
                return q
            });
            var q = function(e) {
                function t(e) {
                    var a;
                    return Object(i.a)(this, t), (a = Object(s.a)(this, Object(u.a)(t).call(this, e))).state = {
                        electionId: 3861,
                        firstname: "",
                        lastname: "",
                        driversLicense: "",
                        monthDOB: "",
                        dayDOB: "",
                        yearDOB: "",
                        houseNumber: "",
                        doSecondaryLookup: !1,
                        renderWarningModal: !1,
                        renderAskForMoreModal: !1,
                        primarySubmitValidated: !0,
                        secondarySubmitValidated: !0
                    }, a.handleChange = a.handleChange.bind(Object(p.a)(Object(p.a)(a))), a.handleSubmit = a.handleSubmit.bind(Object(p.a)(Object(p.a)(a))), a.onWarningModalClose = a.onWarningModalClose.bind(Object(p.a)(Object(p.a)(a))), a.onAskForMoreModalClose = a.onAskForMoreModalClose.bind(Object(p.a)(Object(p.a)(a))), a.onAskForMoreContinue = a.onAskForMoreContinue.bind(Object(p.a)(Object(p.a)(a))), a
                }
                return Object(m.a)(t, e), Object(d.a)(t, [{
                    key: "handleChange",
                    value: function(e) {
                        e.preventDefault();
                        var t = e.target,
                            a = t.name,
                            n = t.value,
                            o = t.pattern;
                        o && !RegExp(o).test(n) || this.setState(function() {
                            return Object(c.a)({}, a, n)
                        })
                    }
                }, {
                    key: "handleSubmit",
                    value: function() {
                        var e = Object(l.a)(r.a.mark(function e() {
                            return r.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        this.validateFields() && this.continueSubmit();
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "validateFields",
                    value: function() {
                        var e = this.state,
                            t = e.firstname,
                            a = e.lastname,
                            n = e.monthDOB,
                            o = e.dayDOB,
                            r = e.yearDOB,
                            l = e.houseNumber,
                            c = e.driversLicense,
                            i = !0;
                        return e.doSecondaryLookup ? (c && t || (i = !1), this.setState({
                            secondarySubmitValidated: i
                        })) : (a && n && o && r && l || (i = !1), this.setState({
                            primarySubmitValidated: i
                        })), i
                    }
                }, {
                    key: "continueSubmit",
                    value: function() {
                        var e = Object(l.a)(r.a.mark(function e() {
                            var t, a, o, l, c, i, d, s, u, m, p, b, y, f, v, _, k, C, O, N, E;
                            return r.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = this.props, a = t.history, o = t.setRegisteredParty, l = t.setSelectedPrecinct, c = t.clearSelectedPrecincts, i = t.clearCompletedBallots, d = t.availableElections, s = t.inactiveElections, u = this.state, m = u.firstname, p = u.lastname, b = u.monthDOB, y = u.dayDOB, f = u.yearDOB, v = u.houseNumber, _ = u.driversLicense, k = u.doSecondaryLookup, C = b + "-" + y + "-" + f, O = d.concat(s), e.next = 6, Promise.all(O.map(function(e) {
                                            return (k ? Object(x.b)(e, m, p, C, v, _) : Object(x.a)(e, p, C, v)).then(function(e) {
                                                return e[0] || e
                                            }).then(function(t) {
                                                return [e, t]
                                            })
                                        }));
                                    case 6:
                                        if (N = e.sent, !Boolean(N.find(function(e) {
                                                var t = Object(n.a)(e, 2);
                                                t[0];
                                                return K(t[1])
                                            }))) {
                                            e.next = 11;
                                            break
                                        }
                                        return this.setState({
                                            renderAskForMoreModal: !0
                                        }), e.abrupt("return");
                                    case 11:
                                        if (Boolean(N.find(function(e) {
                                                var t = Object(n.a)(e, 2),
                                                    a = (t[0], t[1]);
                                                return Q(a) || K(a)
                                            }))) {
                                            e.next = 15;
                                            break
                                        }
                                        return this.setState({
                                            renderWarningModal: !0
                                        }), e.abrupt("return");
                                    case 15:
                                        return E = N.filter(function(e) {
                                            var t = Object(n.a)(e, 2);
                                            t[0];
                                            return Q(t[1])
                                        }), e.next = 18, c();
                                    case 18:
                                        i(), E.forEach(function(e) {
                                            var t = Object(n.a)(e, 2),
                                                a = t[0],
                                                r = t[1],
                                                c = h()(r, "ReportingUnit", null),
                                                i = h()(r, "PartyID", null);
                                            o("NPP" === i ? void 0 : i), l(a, c)
                                        }), a.push("/elections");
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "onAskForMoreModalClose",
                    value: function() {
                        this.setState({
                            renderAskForMoreModal: !1
                        })
                    }
                }, {
                    key: "onAskForMoreContinue",
                    value: function() {
                        this.setState({
                            doSecondaryLookup: !0,
                            renderAskForMoreModal: !1
                        })
                    }
                }, {
                    key: "onWarningModalClose",
                    value: function() {
                        this.setState({
                            renderWarningModal: !1
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.mode,
                            a = e.language,
                            n = e.history,
                            o = e.contentTabIndex,
                            r = this.state,
                            l = r.renderWarningModal,
                            c = r.renderAskForMoreModal,
                            i = r.doSecondaryLookup,
                            d = r.firstname,
                            s = r.lastname,
                            u = r.monthDOB,
                            m = r.dayDOB,
                            p = r.yearDOB,
                            f = r.houseNumber,
                            h = r.driversLicense,
                            x = r.primarySubmitValidated,
                            _ = r.secondarySubmitValidated;
                        return y.a.createElement(b.Fragment, null, l && y.a.createElement(R, {
                            onCancel: this.onWarningModalClose,
                            onContinue: this.onWarningModalClose,
                            copy: Object(v.a)("VoterLookupWarningModal", t, a)
                        }), c && y.a.createElement(J, {
                            onCancel: this.onAskForMoreModalClose,
                            onContinue: this.onAskForMoreContinue,
                            copy: Object(v.a)("VoterLookupAskForMoreModal", t, a)
                        }), i ? y.a.createElement(V, {
                            history: n,
                            firstname: d,
                            driversLicense: h,
                            failedValidation: !_,
                            onChange: this.handleChange,
                            onSubmit: this.handleSubmit,
                            mode: t,
                            copy: Object(v.a)("VoterLookupSecondary", t, a),
                            contentTabIndex: o
                        }) : y.a.createElement(T, {
                            history: n,
                            lastname: s,
                            monthDOB: u,
                            dayDOB: m,
                            yearDOB: p,
                            houseNumber: f,
                            failedValidation: !x,
                            onChange: this.handleChange,
                            onSubmit: this.handleSubmit,
                            mode: t,
                            language: a,
                            copy: Object(v.a)("VoterLookupPrimary", t, a),
                            contentTabIndex: o
                        }))
                    }
                }]), t
            }(b.Component)
        }
    }
]);