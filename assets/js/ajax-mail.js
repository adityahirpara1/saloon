! function(e) {
    "use strict";
    var a = ".ajax-contact",
        s = "is-invalid",
        n = '[name="email"]',
        t = '[name="name"],[name="email"],[name="number"],[name="subject"],[name="message"]',
        r = e(".form-messages");

    function o() {
        var o, l = e(a).serialize();
        o = function() {
            var r, o = !0;

            function l(n) {
                n = n.split(",");
                for (var t = 0; t < n.length; t++) r = a + " " + n[t], e(r).val() ? (e(r).removeClass(s), o = !0) : (e(r).addClass(s), o = !1)
            }
            l(t), e(n).val() && e(n).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) ? (e(n).removeClass(s), o = !0) : (e(n).addClass(s), o = !1);
            return o
        }(), o && jQuery.ajax({
            url: e(a).attr("action"),
            data: l,
            type: "POST"
        }).done((function(s) {
            r.removeClass("error"), r.addClass("success"), r.text(s), e(a + ' input:not([type="submit"]),' + a + " textarea").val("")
        })).fail((function(e) {
            r.removeClass("success"), r.addClass("error"), "" !== e.responseText ? r.html(e.responseText) : r.html("Oops! An error occured and your message could not be sent.")
        }))
    }
    e(a).on("submit", (function(e) {
        e.preventDefault(), o()
    }))
}(jQuery);