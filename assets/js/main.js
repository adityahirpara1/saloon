! function(e) {
    "use strict";
    e(window).on("load", (function() {
        e(".preloader").fadeOut()
    })), e(".preloader").length > 0 && e(".preloaderCls").each((function() {
        e(this).on("click", (function(t) {
            t.preventDefault(), e(".preloader").css("display", "none")
        }))
    })), e.fn.vsmobilemenu = function(t) {
        var s = e.extend({
            menuToggleBtn: ".vs-menu-toggle",
            bodyToggleClass: "vs-body-visible",
            subMenuClass: "vs-submenu",
            subMenuParent: "vs-item-has-children",
            subMenuParentToggle: "vs-active",
            meanExpandClass: "vs-mean-expand",
            subMenuToggleClass: "vs-open",
            toggleSpeed: 400
        }, t);
        return this.each((function() {
            var t = e(this);

            function n() {
                t.toggleClass(s.bodyToggleClass);
                var n = "." + s.subMenuClass;
                e(n).each((function() {
                    e(this).hasClass(s.subMenuToggleClass) && (e(this).removeClass(s.subMenuToggleClass), e(this).css("display", "none"), e(this).parent().removeClass(s.subMenuParentToggle))
                }))
            }
            t.find("li").each((function() {
                var t = e(this).find("ul");
                t.addClass(s.subMenuClass), t.css("display", "none"), t.parent().addClass(s.subMenuParent), t.prev("a").addClass(s.meanExpandClass), t.next("a").addClass(s.meanExpandClass)
            }));
            var a = "." + s.meanExpandClass;
            e(a).each((function() {
                e(this).on("click", (function(t) {
                    var n;
                    t.preventDefault(), e(n = this).next("ul").length > 0 ? (e(n).parent().toggleClass(s.subMenuParentToggle), e(n).next("ul").slideToggle(s.toggleSpeed), e(n).next("ul").toggleClass(s.subMenuToggleClass)) : e(n).prev("ul").length > 0 && (e(n).parent().toggleClass(s.subMenuParentToggle), e(n).prev("ul").slideToggle(s.toggleSpeed), e(n).prev("ul").toggleClass(s.subMenuToggleClass))
                }))
            })), e(s.menuToggleBtn).each((function() {
                e(this).on("click", (function() {
                    n()
                }))
            })), t.on("click", (function(e) {
                e.stopPropagation(), n()
            })), t.find("div").on("click", (function(e) {
                e.stopPropagation()
            }))
        }))
    }, e(".vs-menu-wrapper").vsmobilemenu();
    var t = "",
        s = ".scrollToTop";

    function n(e) {
        return parseInt(e, 10)
    }
    e(window).on("scroll", (function() {
        var n, a, o, i, r;
        n = e(".sticky-active"), a = "active", o = "will-sticky", i = e(window).scrollTop(), r = n.css("height"), n.parent().css("min-height", r), e(window).scrollTop() > 800 ? (n.parent().addClass(o), i > t ? n.removeClass(a) : n.addClass(a)) : (n.parent().css("min-height", "").removeClass(o), n.removeClass(a)), t = i, e(this).scrollTop() > 500 ? e(s).addClass("show") : e(s).removeClass("show")
    })), e(s).each((function() {
        e(this).on("click", (function(s) {
            return s.preventDefault(), e("html, body").animate({
                scrollTop: 0
            }, t / 3), !1
        }))
    })), e("[data-bg-src]").length > 0 && e("[data-bg-src]").each((function() {
        var t = e(this).attr("data-bg-src");
        e(this).css("background-image", "url(" + t + ")"), e(this).removeAttr("data-bg-src").addClass("background-image")
    })), e("[data-bg-color]").length > 0 && e("[data-bg-color]").each((function() {
        var t = e(this).attr("data-bg-color");
        e(this).css("background-color", t), e(this).removeAttr("data-bg-color")
    })), e("[data-mask-src]").length > 0 && e("[data-mask-src]").each((function() {
        var t = e(this).attr("data-mask-src");
        e(this).css({
            "mask-image": "url(" + t + ")",
            "-webkit-mask-image": "url(" + t + ")"
        }), e(this).removeAttr("data-mask-src")
    })), e(".vs-hero-carousel").each((function() {
        var t = e(this);

        function s(e) {
            return t.data(e)
        }
        t.find("[data-ls-go]").each((function() {
            e(this).on("click", (function(s) {
                s.preventDefault();
                var n = e(this).data("ls-go");
                t.layerSlider(n)
            }))
        })), t.layerSlider({
            allowRestartOnResize: !0,
            maxRatio: s("maxratio") ? s("maxratio") : 1,
            type: s("slidertype") ? s("slidertype") : "responsive",
            pauseOnHover: !!s("pauseonhover"),
            navPrevNext: !!s("navprevnext"),
            hoverPrevNext: !!s("hoverprevnext"),
            hoverBottomNav: !!s("hoverbottomnav"),
            navStartStop: !!s("navstartstop"),
            navButtons: !!s("navbuttons"),
            loop: !1 !== s("loop"),
            autostart: !!s("autostart"),
            height: s("height") ? s("height") : 1080,
            responsiveUnder: s("responsiveunder") ? s("responsiveunder") : 1220,
            layersContainer: s("container") ? s("container") : 1220,
            showCircleTimer: !!s("showcircletimer"),
            skinsPath: "layerslider/skins/",
            thumbnailNavigation: !1 !== s("thumbnailnavigation")
        })
    })), e(".popup-image").magnificPopup({
        type: "image",
        gallery: {
            enabled: !0
        }
    }), e(".popup-video").magnificPopup({
        type: "iframe"
    }), e(".price-plan-slide").slick({
        dots: !1,
        infinite: !0,
        arrows: !1,
        autoplay: !1,
        fade: !1,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: !0,
        centerMode: !0,
        centerPadding: "555px",
        prevArrow: '<button type="button" class="slick-prev"><i class="long-arrow"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="long-arrow"></i></button>',
        responsive: [{
            breakpoint: 1700,
            settings: {
                centerPadding: "300px",
                slidesToShow: 1
            }
        }, {
            breakpoint: 1450,
            settings: {
                centerPadding: "200px"
            }
        }, {
            breakpoint: 1199,
            settings: {
                centerPadding: "100px",
                arrows: !1
            }
        }, {
            breakpoint: 992,
            settings: {
                centerPadding: "50px",
                arrows: !1
            }
        }, {
            breakpoint: 767,
            settings: {
                centerPadding: "0",
                arrows: !1
            }
        }]
    }), e(".footer-subscribe input, .subscribe-box input").each((function() {
        e(this).on("focus", (function() {
            e(this).parent().addClass("focus")
        })).on("focusout", (function() {
            e(this).parent().removeClass("focus")
        }))
    })), e.fn.sectionPosition = function(t, s) {
        e(this).each((function() {
            var a, o, i, r, l, c = e(this);
            a = Math.floor(c.height() / 2), o = c.attr(t), i = c.attr(s), r = n(e(i).css("padding-top")), l = n(e(i).css("padding-bottom")), "top-half" === o ? (e(i).css("padding-bottom", l + a + "px"), c.css("margin-top", "-" + a + "px")) : "bottom-half" === o && (e(i).css("padding-top", r + a + "px"), c.css("margin-bottom", "-" + a + "px"))
        }))
    };
    var a, o, i, r = "[data-sec-pos]";
    e(r).length && e(r).imagesLoaded((function() {
            e(r).sectionPosition("data-sec-pos", "data-pos-for")
        })), e(".offers-slide").slick({
            dots: !1,
            infinite: !0,
            arrows: !1,
            autoplay: !1,
            fade: !1,
            speed: 1e3,
            slidesToShow: 1,
            slidesToScroll: 1,
            focusOnSelect: !0,
            centerMode: !0,
            centerPadding: "378px",
            responsive: [{
                breakpoint: 1800,
                settings: {
                    centerPadding: "260px"
                }
            }, {
                breakpoint: 1350,
                settings: {
                    centerPadding: "150px"
                }
            }, {
                breakpoint: 992,
                settings: {
                    centerPadding: "100px"
                }
            }, {
                breakpoint: 767,
                settings: {
                    centerPadding: "60px"
                }
            }, {
                breakpoint: 576,
                settings: {
                    centerPadding: "0"
                }
            }]
        }), e(".team-toggler-btn").length > 0 && e(".team-toggler-btn").each((function() {
            e(this).on("click", (function(t) {
                t.preventDefault(), e(this).hasClass("active") ? (e(this).removeClass("active"), e(this).parent().parent().removeClass("toggled"), e(this).siblings(".team-social").removeClass("show")) : (e(".team-toggler-btn.active").parent().parent().removeClass("toggled"), e(".team-toggler-btn.active").removeClass("active"), e(".team-social.show").removeClass("show"), e(this).addClass("active"), e(this).parent().parent().addClass("toggled"), e(this).siblings(".team-social").addClass("show"))
            }))
        })), e(".filter-active").imagesLoaded((function() {
            var t = ".filter-active",
                s = ".filter-menu-active";
            if (e(t).length > 0) {
                var n = e(t).isotope({
                    itemSelector: ".filter-item",
                    filter: "*",
                    masonry: {
                        columnWidth: 1
                    }
                });
                e(s).on("click", "button", (function() {
                    var t = e(this).attr("data-filter");
                    n.isotope({
                        filter: t
                    })
                })), e(s).on("click", "button", (function(t) {
                    t.preventDefault(), e(this).addClass("active"), e(this).siblings(".active").removeClass("active")
                }))
            }
        })), e(".gallery-cutted-slide").slick({
            dots: !1,
            infinite: !0,
            arrows: !1,
            autoplay: !1,
            fade: !1,
            speed: 1e3,
            slidesToShow: 1,
            slidesToScroll: 1,
            focusOnSelect: !0,
            centerMode: !0,
            centerPadding: "365px",
            responsive: [{
                breakpoint: 1800,
                settings: {
                    centerPadding: "260px"
                }
            }, {
                breakpoint: 1350,
                settings: {
                    centerPadding: "150px"
                }
            }, {
                breakpoint: 992,
                settings: {
                    centerPadding: "100px"
                }
            }, {
                breakpoint: 767,
                settings: {
                    centerPadding: "60px"
                }
            }, {
                breakpoint: 576,
                settings: {
                    centerPadding: "0"
                }
            }]
        }), e("#ship-to-different-address-checkbox").on("change", (function() {
            e(this).is(":checked") ? e("#ship-to-different-address").next(".shipping_address").slideDown() : e("#ship-to-different-address").next(".shipping_address").slideUp()
        })), e(".woocommerce-form-login-toggle a").on("click", (function(t) {
            t.preventDefault(), e(".woocommerce-form-login").slideToggle()
        })), e(".woocommerce-form-coupon-toggle a").on("click", (function(t) {
            t.preventDefault(), e(".woocommerce-form-coupon").slideToggle()
        })), e(".shipping-calculator-button").on("click", (function(t) {
            t.preventDefault(), e(this).next(".shipping-calculator-form").slideToggle()
        })), e('.wc_payment_methods input[type="radio"]:checked').siblings(".payment_box").show(), e('.wc_payment_methods input[type="radio"]').each((function() {
            e(this).on("change", (function() {
                e(".payment_box").slideUp(), e(this).siblings(".payment_box").slideDown()
            }))
        })), e(".rating-select .stars a").each((function() {
            e(this).on("click", (function(t) {
                t.preventDefault(), e(this).siblings().removeClass("active"), e(this).parent().parent().addClass("selected"), e(this).addClass("active")
            }))
        })), a = ".sidemenu-wrapper", o = ".sideMenuCls", i = "show", e(".sideMenuToggler").on("click", (function(t) {
            t.preventDefault(), e(a).addClass(i)
        })), e(a).on("click", (function(t) {
            t.stopPropagation(), e(a).removeClass(i)
        })), e(a + " > div").on("click", (function(t) {
            t.stopPropagation(), e(a).addClass(i)
        })), e(o).on("click", (function(t) {
            t.preventDefault(), t.stopPropagation(), e(a).removeClass(i)
        })),
        function(t, s, n, a) {
            e(s).on("click", (function(s) {
                s.preventDefault(), e(t).addClass(a)
            })), e(t).on("click", (function(s) {
                s.stopPropagation(), e(t).removeClass(a)
            })), e(t).find("form").on("click", (function(s) {
                s.stopPropagation(), e(t).addClass(a)
            })), e(n).on("click", (function(s) {
                s.preventDefault(), s.stopPropagation(), e(t).removeClass(a)
            }))
        }(".popup-search-box", ".searchBoxTggler", ".searchClose", "show")
}(jQuery);