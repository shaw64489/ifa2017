/*! mwc-events-2017 2017-02-02 */
function onYouTubeIframeAPIReady() {
    playerMoto = new YT.Player("banner-player", {
        height: "1080",
        width: "1920",
        videoId: "NwD3t_mlRbU",
        autoPlay: 0,
        playerVars: {
            enablejsapi: 1,
            modestbranding: 1,
            controls: 0,
            showinfo: 0,
            wmode: "opaque",
            rel: 0
        },
        events: {
            onReadyStop: onPlayerReadyStop,
            onStateChange: onPlayerStateChange
        }
    }), player = new YT.Player("event-yt-player", {
        height: "1080",
        width: "1920",
        muted: "true",
        videoId: "crVjsJnPntw",
        playerVars: {
            playlist: ["crVjsJnPntw"],
            autoplay: 1,
            loop: 1,
            controls: 0,
            disablekb: 1,
            fs: 0,
            modestbranding: 1,
            showinfo: 0,
            wmode: "opaque"

        },
        events: {
            onReady: onPlayerReady,
            onReadyMute: onPlayerReady
        }
    })
}




function onPlayerReadyStop(a) {
    a.target.stopVideo()
}

function onPlayerReady(a) {
    a.target.playVideo()
    a.target.mute()
}


function onPlayerStateChange(a) {
    a.data != YT.PlayerState.ENDED || done || (player.stopVideo(), $("div.banner-player-wrapper").removeClass("video-modal"), done = !0)
}
var $modalGalleryLeft = $("div.event-modal-nav-left"),
    $modalGalleryRight = $("div.event-modal-nav-right"),
    /*test code for two images*/
    $modalGalleryLeft2 = $("div.event-modal-nav-left2"),
    $modalGalleryRight2 = $("div.event-modal-nav-right2"),
    F = 1,
    /*2 img condition*/
    T = 2,
    J = 3;


if ($modalGalleryLeft.click(function () {
        F > 1 && (F -= 1, $("div.event-modal-slider img").removeClass("view-modal-img"), $("div.event-modal-slider img:nth-child(" + F + ")").addClass("view-modal-img"), $modalGalleryLeft.css("visibility", "visible"), $modalGalleryRight.css("visibility", "visible")), F < 2 && $modalGalleryLeft.css("visibility", "hidden")
    }), $modalGalleryRight.click(function () {
        F < J && (F += 1, $("div.event-modal-slider img").removeClass("view-modal-img"), $("div.event-modal-slider img:nth-child(" + F + ")").addClass("view-modal-img"), $modalGalleryRight.css("visibility", "visible"), $modalGalleryLeft.css("visibility", "visible")), F > 2 && $modalGalleryRight.css("visibility", "hidden")
    }),
    $modalGalleryLeft2.click(function () {
        F > 1 && (F -= 1, $("div.event-modal-slider img").removeClass("view-modal-img"), $("div.event-modal-slider img:nth-child(" + F + ")").addClass("view-modal-img"), $modalGalleryLeft2.css("visibility", "visible"), $modalGalleryRight2.css("visibility", "visible")), F < 2 && $modalGalleryLeft2.css("visibility", "hidden")
    }), $modalGalleryRight2.click(function () {
        F < T && (F += 1, $("div.event-modal-slider img").removeClass("view-modal-img"), $("div.event-modal-slider img:nth-child(" + F + ")").addClass("view-modal-img"), $modalGalleryRight2.css("visibility", "visible"), $modalGalleryLeft2.css("visibility", "visible")), F > 1 && $modalGalleryRight2.css("visibility", "hidden")
    }), $("a.product-pop").click(function () {
        var a = $("a.product-pop").index(this);
        $("div.event-product-modal-wrapper").addClass("view-modal"), $("div.event-modal-slider img:nth-child(1)").addClass("view-modal-img"), $("div.event-product-modal-wrapper section").removeClass("modal-product-pop"), $("div.event-product-modal-wrapper section:nth-child(" + (a + 2) + ")").addClass("modal-product-pop"), 100 !== a ? $("div.event-product-modal-wrapper section.event-product-modal div.event-product-modal-half div.event-modal-nav").css("display", "block") : $("div.event-product-modal-wrapper section.event-product-modal div.event-product-modal-half div.event-modal-nav").css("display", "none"), $modalGalleryRight.css("visibility", "visible"), $modalGalleryRight2.css("visibility", "visible")
    }), $("a.event-modal-close").click(function () {
        F = 1, $("div.event-product-modal-wrapper").removeClass("view-modal"), $("div.event-product-modal-wrapper section").removeClass("modal-product-pop"), $("div.event-modal-slider img").removeClass("view-modal-img"), $modalGalleryLeft.css("visibility", "hidden"), $modalGalleryRight.css("visibility", "hidden")
    }), !window.YT) var YT = {
    loading: 0,
    loaded: 0
};
if (!window.YTConfig) var YTConfig = {
    host: "http://www.youtube.com"
};
YT.loading || (YT.loading = 1, function () {
    var a = [];
    YT.ready = function (b) {
        YT.loaded ? b() : a.push(b)
    }, window.onYTReady = function () {
        YT.loaded = 1;
        for (var b = 0; b < a.length; b++) try {
            a[b]()
        } catch (a) {}
    }, YT.setConfig = function (a) {
        for (var b in a) a.hasOwnProperty(b) && (YTConfig[b] = a[b])
    };
    var b = document.createElement("script");
    b.type = "text/javascript", b.id = "www-widgetapi-script", b.src = "https://s.ytimg.com/yts/jsbin/www-widgetapi-vfloIowwk/www-widgetapi.js", b.async = !0;
    var c = document.getElementsByTagName("script")[0];
    c.parentNode.insertBefore(b, c)
}());
var player, playerMoto, done = !1;
$("a.banner-video-close").click(function () {
    $("div.banner-player-wrapper").removeClass("video-modal"), playerMoto.stopVideo()
}), $("a.bannerVideo").click(function () {
    $("div.banner-player-wrapper").addClass("video-modal"), playerMoto.playVideo()
}), $("a.event-YT-video-close").click(function (a) {
    window.history.pushState({}, "", "index"), $("div.yt-event-playlist-overlay").empty(), $("a.event-YT-video-close").css("display", "none"), $("div.yt-event-playlist-overlay").css("height", "auto")
}), $(function () {
    $("#event-nav-mobile").before(""), $("#event-mobile-nav-trigger").click(function () {
        $("#event-nav-mobile ul").hasClass("expandedEventNav") ? ($("#event-nav-mobile ul.expandedEventNav").removeClass("expandedEventNav").slideUp(300), $("i.fa-caret-up").removeClass("menu_state"), $("i.fa-caret-down").addClass("menu_state"), $(this).removeClass("open")) : ($("#event-nav-mobile ul").addClass("expandedEventNav").slideDown(300), $("i.fa-caret-down").removeClass("menu_state"), $("i.fa-caret-up").addClass("menu_state"), $(this).addClass("open"))
    }), $("nav#event-nav-mobile a").click(function () {
        $("#event-nav-mobile ul.expandedEventNav").removeClass("expandedEventNav").slideUp(300), $("i.fa-caret-up").removeClass("menu_state"), $("i.fa-caret-down").addClass("menu_state"), $(this).removeClass("open")
    })
});
var $eventNavDropOne = $("ul.event-nav-links li:nth-child(1) a"),
    $eventNavDropTwoBanner = $("a.scrollerMomma"),
    $eventNavDropThree = $("ul.event-nav-links li:nth-child(3) a"),
    $eventNavDropFour = $("ul.event-nav-links li:nth-child(4) a"),
    $eventNavDropThreeM = $("#event-nav-mobile ul li:nth-child(2) a"),
    $eventNavDropFourM = $("#event-nav-mobile ul li:nth-child(3) a"),
    $eventNavDropOneDiv = $("div.event-yt-player-wrapper"),
    $eventNavDropTwoDiv = $("div.drop-nav-two"),
    $eventNavDropThreeDiv = $("div.drop-nav-three"),
    $eventNavDropFourDiv = $("div.drop-nav-four");
$eventNavDropOne.click(function () {
        $eventNavDropOneDiv.velocity("scroll", {
            duration: 500,
            easing: "easeOutSine"
        })
    }), $eventNavDropTwoBanner.click(function () {
        $eventNavDropTwoDiv.velocity("scroll", {
            duration: 500,
            easing: "easeOutSine",
            offset: -50
        })
    }), $eventNavDropThree.click(function () {
        $eventNavDropThreeDiv.velocity("scroll", {
            duration: 500,
            easing: "easeOutSine",
            offset: -50
        })
    }), $eventNavDropFour.click(function () {
        $eventNavDropFourDiv.velocity("scroll", {
            duration: 500,
            easing: "easeOutSine",
            offset: -50
        })
    }), $eventNavDropThreeM.click(function () {
        $eventNavDropThreeDiv.velocity("scroll", {
            duration: 500,
            easing: "easeOutSine",
            offset: -50
        })
    }), $eventNavDropFourM.click(function () {
        $eventNavDropFourDiv.velocity("scroll", {
            duration: 500,
            easing: "easeOutSine",
            offset: -50
        })
    }), ! function (a, b, c, d) {
        var e = a(b);
        a.fn.lazyload = function (f) {
            function g() {
                var b = 0;
                i.each(function () {
                    var c = a(this);
                    if (!j.skip_invisible || c.is(":visible"))
                        if (a.abovethetop(this, j) || a.leftofbegin(this, j));
                        else if (a.belowthefold(this, j) || a.rightoffold(this, j)) {
                        if (++b > j.failure_limit) return !1
                    } else c.trigger("appear"), b = 0
                })
            }
            var h, i = this,
                j = {
                    threshold: 0,
                    failure_limit: 0,
                    event: "scroll",
                    effect: "show",
                    container: b,
                    data_attribute: "original",
                    skip_invisible: !1,
                    appear: null,
                    load: null,
                    placeholder: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                };
            return f && (d !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), d !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), a.extend(j, f)), h = j.container === d || j.container === b ? e : a(j.container), 0 === j.event.indexOf("scroll") && h.bind(j.event, function () {
                return g()
            }), this.each(function () {
                var b = this,
                    c = a(b);
                b.loaded = !1, (c.attr("src") === d || c.attr("src") === !1) && c.is("img") && c.attr("src", j.placeholder), c.one("appear", function () {
                    if (!this.loaded) {
                        if (j.appear) {
                            var d = i.length;
                            j.appear.call(b, d, j)
                        }
                        a("<img />").bind("load", function () {
                            var d = c.attr("data-" + j.data_attribute);
                            c.hide(), c.is("img") ? c.attr("src", d) : c.css("background-image", "url('" + d + "')"), c[j.effect](j.effect_speed), b.loaded = !0;
                            var e = a.grep(i, function (a) {
                                return !a.loaded
                            });
                            if (i = a(e), j.load) {
                                var f = i.length;
                                j.load.call(b, f, j)
                            }
                        }).attr("src", c.attr("data-" + j.data_attribute))
                    }
                }), 0 !== j.event.indexOf("scroll") && c.bind(j.event, function () {
                    b.loaded || c.trigger("appear")
                })
            }), e.bind("resize", function () {
                g()
            }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && e.bind("pageshow", function (b) {
                b.originalEvent && b.originalEvent.persisted && i.each(function () {
                    a(this).trigger("appear")
                })
            }), a(c).ready(function () {
                g()
            }), this
        }, a.belowthefold = function (c, f) {
            var g;
            return g = f.container === d || f.container === b ? (b.innerHeight ? b.innerHeight : e.height()) + e.scrollTop() : a(f.container).offset().top + a(f.container).height(), g <= a(c).offset().top - f.threshold
        }, a.rightoffold = function (c, f) {
            var g;
            return g = f.container === d || f.container === b ? e.width() + e.scrollLeft() : a(f.container).offset().left + a(f.container).width(), g <= a(c).offset().left - f.threshold
        }, a.abovethetop = function (c, f) {
            var g;
            return g = f.container === d || f.container === b ? e.scrollTop() : a(f.container).offset().top, g >= a(c).offset().top + f.threshold + a(c).height()
        }, a.leftofbegin = function (c, f) {
            var g;
            return g = f.container === d || f.container === b ? e.scrollLeft() : a(f.container).offset().left, g >= a(c).offset().left + f.threshold + a(c).width()
        }, a.inviewport = function (b, c) {
            return !(a.rightoffold(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c))
        }, a.extend(a.expr[":"], {
            "below-the-fold": function (b) {
                return a.belowthefold(b, {
                    threshold: 0
                })
            },
            "above-the-top": function (b) {
                return !a.belowthefold(b, {
                    threshold: 0
                })
            },
            "right-of-screen": function (b) {
                return a.rightoffold(b, {
                    threshold: 0
                })
            },
            "left-of-screen": function (b) {
                return !a.rightoffold(b, {
                    threshold: 0
                })
            },
            "in-viewport": function (b) {
                return a.inviewport(b, {
                    threshold: 0
                })
            },
            "above-the-fold": function (b) {
                return !a.belowthefold(b, {
                    threshold: 0
                })
            },
            "right-of-fold": function (b) {
                return a.rightoffold(b, {
                    threshold: 0
                })
            },
            "left-of-fold": function (b) {
                return !a.rightoffold(b, {
                    threshold: 0
                })
            }
        })
    }(jQuery, window, document), $("img.lazy").lazyload({
        threshold: 5e3,
        effect: "fadeIn",
        effect_speed: 200
    }),
    function (a, b) {
        if (!a.getElementById(b)) {
            var c = a.createElement("script");
            c.type = "text/javascript", c.src = "//assetscdn.stackla.com/media/js/widget/fluid-embed.js", c.id = b, (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(c)
        }
    }(document, "stackla-widget-js"), $(function () {
        $(document).ready(function () {
            ParallaxScroll.init()
        })
    });
var ParallaxScroll = {
    showLogs: !1,
    round: 1e3,
    init: function () {
        if (this._log("init"), this._inited) return this._log("Already Inited"), void(this._inited = !0);
        this._requestAnimationFrame = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a, b) {
                window.setTimeout(a, 1e3 / 60)
            }
        }();
        var a = this;
        $(window).on("load", function () {
            a._items.each($.proxy(function (b, c) {
                a._calcCenterPos(c)
            })), a._onScroll(!0)
        })
    },
    _items: $("[data-parallax]"),
    _inited: !1,
    _properties: ["x", "y", "z", "rotateX", "rotateY", "rotateZ", "scaleX", "scaleY", "scaleZ", "scale"],
    _requestAnimationFrame: null,
    _centerPosCss: null,
    _calcCenterPos: function (a) {
        var b = $(a).parent(),
            c = $(a).data("parallax").y,
            d = $(a).data("parallax").x;
        c && (parentHeight = b.height(), fullHeight = Math.abs(c) + parentHeight, $(a).css("left", "50%"), $(a).css("min-height", fullHeight), elWidth = $(a).width(), offsetLeft = elWidth / 2, c > 0 ? $(a).css("bottom", 0) : $(a).css("top", 0), $(a).css("margin-left", -offsetLeft)), d && (parentWidth = b.width(), fullWidth = Math.abs(d) + parentWidth, $(a).css("top", "50%"), $(a).css("min-width", fullWidth), elHeight = $(a).height(), offsetTop = elHeight / 2, d < 0 ? $(a).css("left", 0) : $(a).css("right", 0), $(a).css("margin-top", -offsetTop))
    },
    _log: function (a) {
        this.showLogs && console.log("Parallax Scroll / " + a)
    },
    _onScroll: function (a) {
        var b = $(document).scrollTop(),
            c = $(window).height();
        this._log("onScroll " + b), this._items.each($.proxy(function (d, e) {
            var f = $(e),
                g = [],
                h = !1,
                i = f.data("style");
            void 0 == i && (i = f.attr("style") || "", f.data("style", i));
            var j, k = [f.data("parallax")];
            for (j = 2; f.data("parallax" + j); j++) k.push(f.data("parallax-" + j));
            var l = k.length;
            for (j = 0; j < l; j++) {
                var m = k[j],
                    n = m["from-scroll"];
                void 0 == n && (n = Math.max(0, $(e).offset().top - c)), n |= 0;
                var o = m.distance,
                    p = m["to-scroll"];
                void 0 == o && void 0 == p && (o = c), o = Math.max(0 | o, 1);
                var q = m.easing,
                    r = m["easing-return"];
                if (void 0 != q && $.easing && $.easing[q] || (q = null), void 0 != r && $.easing && $.easing[r] || (r = q), q) {
                    var s = m.duration;
                    void 0 == s && (s = o), s = Math.max(0 | s, 1);
                    var t = m["duration-return"];
                    void 0 == t && (t = s), o = 1;
                    var u = f.data("current-time");
                    void 0 == u && (u = 0)
                }
                void 0 == p && (p = n + o), p |= 0;
                var v = 15;
                void 0 == v && (v = 30), v |= 0, (a || 0 == v) && (v = 1), v |= 0;
                var w = b;
                w = Math.max(w, n), w = Math.min(w, p), q && (void 0 == f.data("sens") && f.data("sens", "back"), w > n && ("back" == f.data("sens") ? (u = 1, f.data("sens", "go")) : u++), w < p && ("go" == f.data("sens") ? (u = 1, f.data("sens", "back")) : u++), a && (u = s), f.data("current-time", u)), this._properties.map($.proxy(function (a) {
                    var b = 0,
                        c = 1.12;
                    if (void 0 != c) {
                        "scale" == a || "scaleX" == a || "scaleY" == a || "scaleZ" == a ? b = 1 : c |= 0;
                        var d = f.data("_" + a);
                        void 0 == d && (d = b);
                        var e = (c - b) * ((w - n) / (p - n)) + b,
                            i = d + (e - d) / v;
                        if (q && u > 0 && u <= s) {
                            var j = b;
                            "back" == f.data("sens") && (j = c, c = -c, q = r, s = t), i = $.easing[q](null, u, j, c, s)
                        }
                        i = Math.ceil(i * this.round) / this.round, i == d && e == c && (i = c), g[a] || (g[a] = 0), g[a] += i, d != g[a] && (f.data("_" + a, g[a]), h = !0)
                    }
                }, this))
            }
            if (h) {
                var x = f.parent();
                if (void 0 != g.z) {
                    var y = m.perspective;
                    void 0 == y && (y = 800);
                    var x = f.parent();
                    x.data("style") || x.data("style", x.attr("style") || ""), x.attr("style", "perspective:" + y + "px; -webkit-perspective:" + y + "px; " + x.data("style"))
                }
                void 0 == g.scaleX && (g.scaleX = 1), void 0 == g.scaleY && (g.scaleY = 1), void 0 == g.scaleZ && (g.scaleZ = 1), void 0 != g.scale && (g.scaleX *= g.scale, g.scaleY *= g.scale, g.scaleZ *= g.scale);
                var z = "translate3d(" + (g.x ? g.x : 0) + "px, " + (g.y ? g.y : 0) + "px, " + (g.z ? g.z : 0) + "px)",
                    A = "rotateX(" + (g.rotateX ? g.rotateX : 0) + "deg) rotateY(" + (g.rotateY ? g.rotateY : 0) + "deg) rotateZ(" + (g.rotateZ ? g.rotateZ : 0) + "deg)",
                    B = "scaleX(" + g.scaleX + ") scaleY(" + g.scaleY + ") scaleZ(" + g.scaleZ + ")",
                    C = z + " " + A + " " + B + ";";
                this._log(C), f.attr("style", "transform:" + C + " -webkit-transform:" + C + " " + i)
            }
        }, this)), window.requestAnimationFrame ? window.requestAnimationFrame($.proxy(this._onScroll, this, !1)) : this._requestAnimationFrame($.proxy(this._onScroll, this, !1))
    }
};
$(document).ready(function () {
    var a = "<script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1854097258143426');fbq('track','PageView');</script><noscript><img height='1' width='1' style='display:none'src='https://www.facebook.com/tr?id=1854097258143426&ev=PageView&noscript=1'/></noscript>";
    $(a).appendTo("head");
    var b = "<script>!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');twq('init','nw4ju');twq('track','PageView');</script>";
    $(b).appendTo("body"), $modalGalleryRight.css("visibility", "visible")
}), $("a.product-pop").click(function (a) {
    a.preventDefault()
}), $("a.event-modal-close").click(function (a) {
    a.preventDefault()
}), $("a.event-YT-video-close").click(function (a) {
    a.preventDefault()
}), $("a.eventYTplaylist").click(function (a) {
    a.preventDefault()
}), $("a.eventytplaylistselected").click(function (a) {
    a.preventDefault()
}), console.log("MWC 2017 event extras");