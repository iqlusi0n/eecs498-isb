(window.webpackJsonp = window.webpackJsonp || []).push([
    [4], {
        122: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var a = n(0),
                r = n.n(a),
                o = n(133),
                c = n.n(o);

            function s(e) {
                var t = e.children,
                    n = e.className,
                    a = e.contentClassName;
                return r.a.createElement("div", {
                    className: "grid-content"
                }, r.a.createElement("div", {
                    className: "".concat(n, " ").concat(c.a.page)
                }, r.a.createElement("div", {
                    className: "".concat(a, " ").concat(c.a.content)
                }, t)))
            }
            s.defaultProps = {
                className: "",
                contentClassName: ""
            }
        },
        125: function(e, t, n) {
            "use strict";
            var a = n(0),
                r = n.n(a),
                o = n(140),
                c = n.n(o);

            function s(e) {
                var t = e.children,
                    n = e.contentClassName,
                    a = e.inMainBody;
                return r.a.createElement("div", {
                    className: "".concat(c.a.footer, " ").concat(a ? "" : "content-flip")
                }, r.a.createElement("div", {
                    className: c.a.contentContainer
                }, r.a.createElement("div", {
                    className: "".concat(n, " ").concat(c.a.content)
                }, t)))
            }
            s.defaultProps = {
                contentClassName: ""
            }, t.a = s
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
        153: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return m
            });
            var a = n(9),
                r = n.n(a),
                o = r.a.shape,
                c = r.a.oneOf,
                s = r.a.oneOfType,
                i = r.a.func,
                u = r.a.number,
                l = r.a.string,
                d = o({
                    hash: l,
                    key: l,
                    pathname: l,
                    search: l,
                    state: s([r.a.array, r.a.bool, u, r.a.object, l])
                }),
                m = o({
                    action: c(["PUSH", "REPLACE", "POP"]),
                    block: i,
                    createHref: i,
                    go: i,
                    goBack: i,
                    goForward: i,
                    length: u,
                    listen: i,
                    location: d,
                    push: i,
                    replace: i
                })
        },
        162: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            });
            var a = n(0),
                r = n.n(a),
                o = n(142),
                c = n(173),
                s = n.n(c);

            function i(e) {
                var t = e.label,
                    n = e.id,
                    a = e.placeholder,
                    c = e.value,
                    i = e.onChange,
                    u = e.onKeyDown,
                    l = e.autoComplete,
                    d = e.className,
                    m = e.redOutline,
                    p = e.redText,
                    f = e.tabIndex,
                    h = e.maxLength,
                    b = e.pattern;
                return r.a.createElement("div", {
                    className: "".concat(d, " ").concat(s.a.textInput)
                }, r.a.createElement(o.a, {
                    className: s.a.labelCopy,
                    textLabel: t,
                    name: n
                }), r.a.createElement("input", {
                    className: "".concat(m ? s.a.redOutline : "", " ").concat(s.a.input),
                    type: "text",
                    name: n,
                    id: n,
                    placeholder: a,
                    value: c,
                    onChange: i,
                    onKeyDown: u,
                    autoComplete: l,
                    tabIndex: f,
                    maxLength: h,
                    pattern: b
                }), p && r.a.createElement(o.a, {
                    className: s.a.redText,
                    text: p,
                    tabIndex: f
                }))
            }
            i.defaultProps = {
                autoComplete: "on",
                className: "",
                redOutline: !1
            }
        },
        173: function(e, t, n) {
            e.exports = {
                textInput: "TextInput_textInput__3IVuM",
                labelCopy: "TextInput_labelCopy__3QdyM",
                input: "TextInput_input__3U6LA content-flip",
                redOutline: "TextInput_redOutline__1pmsK",
                redText: "TextInput_redText__2PLGU"
            }
        },
        191: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return v
            });
            var a = n(107),
                r = n(108),
                o = n(113),
                c = n(110),
                s = n(112),
                i = n(0),
                u = n.n(i),
                l = n(132),
                d = n.n(l),
                m = n(122),
                p = n(109),
                f = n(166),
                h = n(236),
                b = n.n(h),
                v = function(e) {
                    function t(e) {
                        var n;
                        return Object(a.a)(this, t), (n = Object(o.a)(this, Object(c.a)(t).call(this, e))).formRef = u.a.createRef(), n
                    }
                    return Object(s.a)(t, e), Object(r.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.formRef.current.addEventListener("keydown", function(t) {
                                var n = e.props,
                                    a = n.onSubmit,
                                    r = n.overrideEnter;
                                13 !== t.keyCode && "Enter" !== t.key || (t.preventDefault(), r ? r(t) : a(t))
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.title,
                                n = e.subtitle,
                                a = e.children,
                                r = e.className,
                                o = e.tabIndex;
                            return u.a.createElement(m.a, {
                                className: r
                            }, u.a.createElement("div", {
                                className: b.a.formContainer
                            }, u.a.createElement(p.a, {
                                text: t,
                                tabIndex: o
                            }), u.a.createElement(f.a, {
                                text: n,
                                tabIndex: o
                            }), u.a.createElement("form", {
                                ref: this.formRef
                            }, a)))
                        }
                    }]), t
                }(u.a.Component);
            v.defaultProps = {
                className: "",
                onSubmit: d.a
            }
        },
        232: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return l
            });
            var a = n(0),
                r = n.n(a),
                o = n(233),
                c = n.n(o),
                s = n(235),
                i = n.n(s),
                u = {
                    normal: "3px",
                    thick: "5px"
                };

            function l(e) {
                var t = e.size,
                    n = e.thickness,
                    a = e.margin,
                    o = {
                        "--spinnerSize": t,
                        "--spinnerThickness": u[n] || u.normal,
                        "--spinnerMargin": a || 0
                    };
                return r.a.createElement("div", {
                    className: c.a.container,
                    style: o
                }, r.a.createElement("img", {
                    className: c.a.spinner,
                    src: i.a,
                    alt: "loading spinner"
                }))
            }
            l.defaultProps = {
                size: "24px",
                thickness: "normal"
            }
        },
        233: function(e, t, n) {
            e.exports = {
                container: "LoadingSpinner_container__2gj64",
                spinner: "LoadingSpinner_spinner__3vCeX"
            }
        },
        235: function(e, t, n) {
            e.exports = n.p + "static/media/loading.2598cefc.svg"
        },
        236: function(e, t, n) {
            e.exports = {
                formContainer: "TitleForm_formContainer__3Q1HB"
            }
        },
        557: function(e, t, n) {
            e.exports = {
                row: "AddressConfirmation_row__17Nvt",
                right: "AddressConfirmation_right__jXRzt",
                mapLoad: "AddressConfirmation_mapLoad__wXpx4",
                mapContainer: "AddressConfirmation_mapContainer__BaGXM b4black content-flip",
                mapElement: "AddressConfirmation_mapElement__3KxgA",
                addressCopy: "AddressConfirmation_addressCopy__1AdmO content-flip",
                left: "AddressConfirmation_left__CuDN1"
            }
        },
        559: function(e, t, n) {
            e.exports = {
                match: "AddressMatch_match__16U1r content-flip",
                matchInner: "AddressMatch_matchInner__3UBVH",
                active: "AddressMatch_active__NYJCf"
            }
        },
        561: function(e, t, n) {
            e.exports = {
                addressLookup: "AddressLookup_addressLookup__8Xpn-",
                bodyCopy: "AddressLookup_bodyCopy__3zwdJ",
                searchContainer: "AddressLookup_searchContainer__FWegw",
                searchInput: "AddressLookup_searchInput__1-CGj",
                content: "AddressLookup_content__1oQf3 content",
                matches: "AddressLookup_matches__1-tef",
                voterLookupLinkButton: "AddressLookup_voterLookupLinkButton__gS7l9",
                helpText: "AddressLookup_helpText__yFC0t multilang-support"
            }
        },
        699: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(136),
                r = n.n(a),
                o = n(138),
                c = n(107),
                s = n(108),
                i = n(113),
                u = n(110),
                l = n(112),
                d = n(128),
                m = n(0),
                p = n.n(m),
                f = n(440),
                h = n.n(f),
                b = n(122),
                v = n(109),
                g = n(105),
                x = n(106),
                y = n(125),
                C = n(441),
                k = function(e) {
                    function t(e) {
                        var n;
                        return Object(c.a)(this, t), (n = Object(i.a)(this, Object(u.a)(t).call(this, e))).setFocusableElements = function() {
                            var e = n.props,
                                t = e.contentTabIndex,
                                a = e.mapElementId;
                            n.focusableElements.length || (n.focusableElements = Array.from(document.getElementById(a).querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(function(e) {
                                return "none" !== window.getComputedStyle(e).getPropertyValue("display")
                            })), n.focusableElements.forEach(function(e) {
                                return e.tabIndex = t
                            })
                        }, n.state = {
                            latLng: null
                        }, n.focusableElements = [], n
                    }
                    return Object(l.a)(t, e), Object(s.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.props.address;
                            (new window.google.maps.Geocoder).geocode({
                                address: t
                            }, function(t, n) {
                                if ("OK" === n) {
                                    var a = t[0];
                                    e.setState({
                                        latLng: a.geometry.location
                                    })
                                } else console.log("Geocode was not successful for the following reason: ".concat(n))
                            })
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props.contentTabIndex;
                            e.contentTabIndex !== t && this.setFocusableElements()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state.latLng;
                            return e && p.a.createElement(C.GoogleMap, {
                                defaultZoom: 16,
                                defaultCenter: e
                            }, p.a.createElement(C.Marker, {
                                position: e
                            }))
                        }
                    }]), t
                }(p.a.Component),
                E = Object(C.withScriptjs)(Object(C.withGoogleMap)(k)),
                _ = n(557),
                S = n.n(_),
                O = "AIzaSyBpMjG5HROI78BnzovbKTczzco0q8NN6Oc";

            function I(e) {
                var t = e.address,
                    n = e.onConfirm,
                    a = e.onDeny,
                    r = e.copy,
                    o = e.contentTabIndex,
                    c = e.language;
                return p.a.createElement(m.Fragment, null, p.a.createElement(b.a, null, p.a.createElement("div", {
                    className: S.a.row
                }, p.a.createElement("div", {
                    className: S.a.left
                }, p.a.createElement(v.a, {
                    text: r.em,
                    tabIndex: o
                }), p.a.createElement(g.a, {
                    text: t,
                    className: S.a.addressCopy,
                    tabIndex: o
                })), p.a.createElement("div", {
                    className: S.a.right
                }, p.a.createElement(E, {
                    key: c,
                    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=".concat(O, "&language=").concat(c.toLowerCase(), "&v=3.exp&libraries=geometry,drawing,places&cacheBust=").concat(Date.now().toString()),
                    address: t,
                    loadingElement: p.a.createElement("div", {
                        className: S.a.mapLoad
                    }),
                    containerElement: p.a.createElement("div", {
                        className: S.a.mapContainer
                    }),
                    mapElement: p.a.createElement("div", {
                        id: "mapElement",
                        className: S.a.mapElement
                    }),
                    mapElementId: "mapElement",
                    contentTabIndex: o
                }))), p.a.createElement(x.a, {
                    className: "hideTabletDesktop",
                    colorOption: "secondary",
                    text: r.en,
                    onClick: a,
                    tabIndex: o
                })), p.a.createElement(y.a, null, p.a.createElement(x.a, {
                    className: "hideMobile",
                    colorOption: "secondary",
                    text: r.en,
                    onClick: a,
                    tabIndex: o
                }), p.a.createElement(x.a, {
                    margin: "0 0 0 auto",
                    colorOption: "yellow",
                    typeOption: "right",
                    text: r.eo,
                    onClick: n,
                    tabIndex: o
                })))
            }
            I.defaultProps = {
                address: "7400 Boelter Hall, Los Angeles, CA 90095",
                onConfirm: function() {
                    return null
                },
                onDeny: function() {
                    return null
                },
                copy: {}
            };
            var N = n(162),
                L = n(232),
                j = n(559),
                A = n.n(j);

            function w(e) {
                var t = e.address,
                    n = e.onClick,
                    a = e.contentTabIndex,
                    r = e.active;
                return p.a.createElement("li", {
                    className: "".concat(A.a.match, " ").concat(r ? A.a.active : ""),
                    onClick: n
                }, p.a.createElement("button", {
                    className: A.a.matchInner,
                    tabIndex: a
                }, p.a.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: t
                    }
                })))
            }
            w.defaultProps = {
                address: "Problem with address, please try again later.",
                onClick: function() {
                    return null
                }
            };
            n(153);
            var M = n(191),
                T = n(561),
                D = n.n(T),
                B = n(7),
                P = n(24),
                F = n.n(P),
                G = n(143),
                H = {},
                z = {},
                U = function(e, t) {
                    return Object(B.a)({}, t, {
                        electionId: e
                    })
                },
                R = function(e) {
                    var t = e.trim().match(/^[0-9]+(?= )/),
                        n = {
                            houseNum: null,
                            street: null,
                            streetGuesses: []
                        };
                    t && (n.houseNum = t[0].trim());
                    var a = n.houseNum ? e.slice(t[0].length).trim() : e.trim();
                    n.street = a, n.streetGuesses.push(a);
                    var r = a.split(" ").slice(1).join(" ");
                    return n.streetGuesses.push(r), n
                },
                W = function(e) {
                    return e.slice(0, 3).toUpperCase()
                };
            var K = function(e, t) {
                    var n = W(t);
                    H[e] || (H[e] = {}), H[e][n] = !0
                },
                V = function(e, t) {
                    var n = W(t);
                    return Boolean(F()(H, "".concat(e, ".").concat(n), !1))
                },
                J = function(e) {
                    var t = e.StreetDirection,
                        n = e.StreetName,
                        a = e.StreetSuffix,
                        r = e.City,
                        o = e.Zip;
                    return "".concat((t ? "".concat(t, " ") : "") + n, " ").concat(a ? "".concat(a, " ") : "").concat(r, " ").concat(o)
                },
                X = function(e) {
                    return e.replace(/<b>|<\/b>/g, "")
                },
                Z = function(e) {
                    return e.toLowerCase().replace(/(^\w)|(\b\w(?!\s))|(\s\w)/g, function(e) {
                        return e.toUpperCase()
                    })
                },
                Q = function(e, t, n) {
                    return z[e] || (z[e] = {
                        matches: []
                    }), q(t, n, z[e])
                },
                q = function e(t, n, a) {
                    if (a.matches.push(t), 0 === n.length) return a;
                    var r = n[0];
                    a[r] || (a[r] = {
                        matches: []
                    });
                    var o = a[r];
                    return e(t, n.slice(1), o)
                },
                Y = function(e, t) {
                    return $(t, z[e])
                },
                $ = function e(t, n) {
                    if (!n) return {
                        matches: []
                    };
                    if (0 === t.length) return n;
                    var a = t[0].toUpperCase();
                    return e(t.slice(1), n[a])
                },
                ee = function() {
                    var e = Object(o.a)(r.a.mark(function e(t, n) {
                        var a, o, c, s, i, u, l;
                        return r.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    a = R(n), o = a.street, c = a.streetGuesses, s = 0;
                                case 2:
                                    if (!(s < c.length)) {
                                        e.next = 11;
                                        break
                                    }
                                    if (i = c[s], V(t, i)) {
                                        e.next = 8;
                                        break
                                    }
                                    return K(t, i), e.next = 8, te(t, i);
                                case 8:
                                    s++, e.next = 2;
                                    break;
                                case 11:
                                    return u = Y(t, o), l = u.matches, e.abrupt("return", l);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                te = function() {
                    var e = Object(o.a)(r.a.mark(function e(t, n) {
                        return r.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(G.k)(t, n);
                                case 2:
                                    e.sent.forEach(function(e) {
                                        return Q(t, U(t, e), J(e))
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }();

            function ne(e) {
                var t = e.exactMatches,
                    n = e.address,
                    a = e.hideMatches,
                    r = e.isLookupLoading,
                    o = e.onSelectAddress,
                    c = e.contentTabIndex,
                    s = e.cursor;
                return a || !n || n.length < 3 ? null : t.length && r ? p.a.createElement("div", {
                    className: D.a.lookupLoading
                }, p.a.createElement(L.a, {
                    size: "24px"
                })) : t[0] && X(t[0].toLowerCase()) === n.toLowerCase() ? null : Boolean(t.length) && p.a.createElement("ul", {
                    className: D.a.matches
                }, t.map(function(e, t) {
                    return p.a.createElement(w, {
                        key: e,
                        address: e,
                        active: s === t,
                        onClick: function(t) {
                            t.preventDefault(), o(e)
                        },
                        contentTabIndex: c
                    })
                }))
            }
            var ae = function(e) {
                function t(e) {
                    var n;
                    return Object(c.a)(this, t), (n = Object(i.a)(this, Object(u.a)(t).call(this, e))).handleInputChange = function(e) {
                        n.props.onChange(e), n.setState({
                            cursor: -1
                        })
                    }, n.goToNextMatch = function(e) {
                        var t = n.state.cursor,
                            a = n.props.matches;
                        38 === e.keyCode || "ArrowUp" === e.key ? t > 0 ? n.setState(function(e) {
                            return {
                                cursor: e.cursor - 1
                            }
                        }) : n.setState({
                            cursor: a.length - 1
                        }) : 40 !== e.keyCode && "ArrowDown" !== e.key || (t < a.length - 1 ? n.setState(function(e) {
                            return {
                                cursor: e.cursor + 1
                            }
                        }) : n.setState({
                            cursor: 0
                        }))
                    }, n.overrideEnter = function() {
                        var e = n.props;
                        (0, e.onSelect)(e.matches[n.state.cursor]), n.setState({
                            cursor: -1
                        })
                    }, n.state = {
                        cursor: -1
                    }, n
                }
                return Object(l.a)(t, e), Object(s.a)(t, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.history,
                            n = e.address,
                            a = e.matches,
                            r = e.hideMatches,
                            o = e.isLookupLoading,
                            c = e.onSelect,
                            s = e.onSubmit,
                            i = e.copy,
                            u = e.failedValidation,
                            l = e.contentTabIndex,
                            d = this.state.cursor;
                        return p.a.createElement(m.Fragment, null, p.a.createElement(M.a, {
                            title: i.dz,
                            className: D.a.content,
                            onSubmit: s,
                            tabIndex: l,
                            overrideEnter: d > -1 ? this.overrideEnter : null
                        }, p.a.createElement(g.a, {
                            text: "".concat(i.ea, " ").concat(i.eb),
                            className: D.a.bodyCopy,
                            tabIndex: l
                        }), p.a.createElement("div", {
                            className: D.a.helpText,
                            tabIndex: l
                        }, i.dh), p.a.createElement("div", {
                            className: D.a.searchContainer
                        }, p.a.createElement(N.a, {
                            className: D.a.searchInput,
                            id: "address",
                            value: n,
                            onChange: this.handleInputChange,
                            onKeyDown: this.goToNextMatch,
                            autoComplete: "off",
                            redOutline: u && !n,
                            redText: u && !n && i.kk,
                            tabIndex: l
                        }), p.a.createElement(ne, {
                            exactMatches: a,
                            address: n,
                            hideMatches: r,
                            isLookupLoading: o,
                            onSelectAddress: c,
                            contentTabIndex: l,
                            cursor: d
                        })), p.a.createElement(x.a, {
                            className: "hiddenDesktop ".concat(D.a.voterLookupLinkButton),
                            colorOption: "secondary",
                            text: i.ee,
                            onClick: function() {
                                return t.push("/voterlookup")
                            },
                            tabIndex: l
                        })), p.a.createElement(y.a, null, p.a.createElement(x.a, {
                            className: "hiddenMobile hiddenTablet",
                            colorOption: "secondary",
                            text: i.ee,
                            onClick: function() {
                                return t.push("/voterlookup")
                            },
                            tabIndex: l
                        }), p.a.createElement(x.a, {
                            margin: "0 0 0 auto",
                            colorOption: "yellow",
                            typeOption: "right",
                            text: i.ef,
                            onClick: s,
                            tabIndex: l
                        })))
                    }
                }]), t
            }(p.a.Component);
            ae.defaultProps = {
                history: {
                    push: function() {
                        return null
                    }
                },
                matches: [],
                hideMatches: !1,
                onChange: function() {
                    return null
                },
                onSelect: function() {
                    return null
                },
                onSubmit: function() {
                    return null
                },
                copy: {}
            };
            var re = n(116);

            function oe(e) {
                var t = e.onCancel,
                    n = e.onContinue,
                    a = e.copy,
                    r = a.eg,
                    o = p.a.createElement(g.a, {
                        tabIndex: 0,
                        text: p.a.createElement("div", {
                            dangerouslySetInnerHTML: {
                                __html: a.eh
                            }
                        })
                    }),
                    c = a.ei;
                return p.a.createElement(re.a, {
                    handleClose: t,
                    title: p.a.createElement(v.a, {
                        text: r,
                        tabIndex: 0
                    }),
                    body: o,
                    continueButton: p.a.createElement(x.a, {
                        colorOption: "yellow",
                        text: c,
                        onClick: n
                    })
                })
            }
            oe.defaultProps = {
                onCancel: function() {
                    return null
                },
                onContinue: function() {
                    return null
                }
            };
            var ce = n(25);

            function se(e) {
                return e ? "".concat(e, " ") : ""
            }
            n.d(t, "default", function() {
                return ie
            });
            var ie = function(e) {
                function t(e) {
                    var n;
                    return Object(c.a)(this, t), (n = Object(i.a)(this, Object(u.a)(t).call(this, e))).state = {
                        address: "",
                        exactMatches: {},
                        renderWarning: !1,
                        renderConfirm: !1,
                        submitValidated: !0
                    }, n.handleAddressChange = n.handleAddressChange.bind(Object(d.a)(Object(d.a)(n))), n.handleAddressSelect = n.handleAddressSelect.bind(Object(d.a)(Object(d.a)(n))), n.handleSubmit = n.handleSubmit.bind(Object(d.a)(Object(d.a)(n))), n.addressLookup = n.addressLookup.bind(Object(d.a)(Object(d.a)(n))), n.onConfirmAddress = n.onConfirmAddress.bind(Object(d.a)(Object(d.a)(n))), n.onDenyAddress = n.onDenyAddress.bind(Object(d.a)(Object(d.a)(n))), n
                }
                return Object(l.a)(t, e), Object(s.a)(t, [{
                    key: "handleAddressSelect",
                    value: function(e) {
                        var t = X(e);
                        this.setState({
                            address: t
                        }), this.addressLookup(t)
                    }
                }, {
                    key: "handleAddressChange",
                    value: function(e) {
                        e.preventDefault();
                        var t = e.target.value;
                        this.setState({
                            address: t
                        }), this.addressLookup(t)
                    }
                }, {
                    key: "addressLookup",
                    value: function(e) {
                        var t = this,
                            n = this.props,
                            a = n.availableElections,
                            r = n.inactiveElections,
                            o = a.concat(r).map(function(t) {
                                return ee(t, e)
                            });
                        Promise.all(o.map(function(e) {
                            return e.catch(function() {
                                return []
                            })
                        })).then(function(n) {
                            var a = [].concat.apply([], n);
                            if (function(e) {
                                    var t = {};
                                    return e.forEach(function(e) {
                                        var n = [e.AddressDirection, e.City, e.OddEvenBoth, e.StartHouseNumber, e.EndHouseNumber, e.StreetDirection, e.State, e.StreetName, e.StreetSuffix, e.Zip].join(" ");
                                        t[n] = e
                                    }), Object.values(t)
                                }(a).length < 750) {
                                var r = R(e),
                                    o = r.houseNum,
                                    c = r.street,
                                    s = a.filter(function(e) {
                                        return function(e, t) {
                                            if (!e) return !1;
                                            if (!t) return !1;
                                            if (t < e.StartHouseNumber) return !1;
                                            if (t > e.EndHouseNumber) return !1;
                                            if (t) switch (e.OddEvenBoth) {
                                                case "both":
                                                    return !0;
                                                case "odd":
                                                    return t % 2 === 1;
                                                case "even":
                                                    return t % 2 === 0;
                                                default:
                                                    console.error("Encountered unknown match type: ".concat(e.OddEvenBOth))
                                            }
                                            return !0
                                        }(e, o)
                                    }),
                                    i = h()(s, function(e) {
                                        return function(e, t, n) {
                                            var a = e.StreetDirection,
                                                r = e.StreetName,
                                                o = e.StreetSuffix,
                                                c = e.City,
                                                s = e.Zip;
                                            t && (t = "<b>" + t + "</b>");
                                            var i = se(a) + se(r) + se(o) + se(c) + s,
                                                u = Z(i),
                                                l = Z(n).trim();
                                            return u && (u = u.replace(l, "<b>" + l + "</b>")), se(t) + u
                                        }(e, o, c)
                                    });
                                t.setState({
                                    exactMatches: i
                                })
                            } else t.setState({
                                exactMatches: {}
                            })
                        })
                    }
                }, {
                    key: "onConfirmAddress",
                    value: function() {
                        var e = Object(o.a)(r.a.mark(function e() {
                            var t, n, a, o, c, s, i;
                            return r.a.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = this.props, n = t.history, a = t.setSelectedPrecinct, o = t.clearSelectedPrecincts, c = t.clearCompletedBallots, s = t.clearRegisteredParty, i = this.state.exactMatches, 1 === Object.keys(i).length) {
                                            e.next = 6;
                                            break
                                        }
                                        return this.setState({
                                            renderWarning: !0
                                        }), e.abrupt("return");
                                    case 6:
                                        return e.next = 8, s();
                                    case 8:
                                        return e.next = 10, o();
                                    case 10:
                                        c(), Object.values(i)[0].forEach(function(e) {
                                            var t = e.PrecinctID,
                                                n = e.electionId;
                                            a(n, t)
                                        }), n.push("/elections");
                                    case 14:
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
                    key: "onDenyAddress",
                    value: function() {
                        this.setState({
                            renderConfirm: !1
                        })
                    }
                }, {
                    key: "handleSubmit",
                    value: function(e) {
                        e.preventDefault(), this.validateFields() && this.continueSubmit()
                    }
                }, {
                    key: "validateFields",
                    value: function() {
                        var e = !1;
                        return this.state.address && (e = !0), this.setState({
                            submitValidated: e
                        }), e
                    }
                }, {
                    key: "continueSubmit",
                    value: function() {
                        var e = this.state.exactMatches,
                            t = Object.keys(e).length;
                        0 === t ? this.setState({
                            renderWarning: !0
                        }) : t > 1 ? this.setState({
                            renderWarning: !0
                        }) : this.setState({
                            renderConfirm: !0
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.mode,
                            a = t.language,
                            r = t.contentTabIndex,
                            o = this.state,
                            c = o.renderWarning,
                            s = o.address,
                            i = o.exactMatches,
                            u = o.hideMatches,
                            l = o.hasSelectedMatch,
                            d = o.isLookupLoading,
                            f = o.renderConfirm,
                            h = o.submitValidated;
                        return p.a.createElement(m.Fragment, null, c && p.a.createElement(oe, {
                            onCancel: function() {
                                e.setState({
                                    renderWarning: !1
                                })
                            },
                            onContinue: function() {
                                e.setState({
                                    renderWarning: !1
                                })
                            },
                            copy: Object(ce.a)("AddressLookupWarningModal", n, a)
                        }), f ? p.a.createElement(I, {
                            address: X(Object.keys(i)[0]),
                            onConfirm: this.onConfirmAddress,
                            onDeny: this.onDenyAddress,
                            copy: Object(ce.a)("AddressConfirmation", n, a),
                            contentTabIndex: r,
                            language: a
                        }) : p.a.createElement(ae, {
                            history: this.props.history,
                            address: s,
                            matches: Object.keys(i),
                            hideMatches: u,
                            hasSelectedMatch: l,
                            isLookupLoading: d,
                            failedValidation: !h,
                            onChange: this.handleAddressChange,
                            onSubmit: this.handleSubmit,
                            onSelect: this.handleAddressSelect,
                            copy: Object(ce.a)("AddressLookup", n, a),
                            contentTabIndex: r
                        }))
                    }
                }]), t
            }(m.Component)
        }
    }
]);