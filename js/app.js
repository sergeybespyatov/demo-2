(() => {
  "use strict";
  let e = (e, t = 500, o = 0) => {
      e.classList.contains("_slide") ||
        (e.classList.add("_slide"),
        (e.style.transitionProperty = "height, margin, padding"),
        (e.style.transitionDuration = t + "ms"),
        (e.style.height = `${e.offsetHeight}px`),
        e.offsetHeight,
        (e.style.overflow = "hidden"),
        (e.style.height = o ? `${o}px` : "0px"),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        window.setTimeout(() => {
          (e.hidden = !o),
            !o && e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            !o && e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("_slide");
        }, t));
    },
    t = (e, t = 500, o = 0) => {
      if (!e.classList.contains("_slide")) {
        e.classList.add("_slide"),
          (e.hidden = !e.hidden && null),
          o && e.style.removeProperty("height");
        let n = e.offsetHeight;
        (e.style.overflow = "hidden"),
          (e.style.height = o ? `${o}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          e.offsetHeight,
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = n + "px"),
          e.style.removeProperty("padding-top"),
          e.style.removeProperty("padding-bottom"),
          e.style.removeProperty("margin-top"),
          e.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            e.style.removeProperty("height"),
              e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t);
      }
    };
  let o = !1;
  setTimeout(() => {
    if (o) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    document.addEventListener("click", function (e) {
      const t = document.querySelectorAll("a");
      for (let o = 0; o < t.length; o++) e.preventDefault();
    });
  const n = document.querySelectorAll("[data-anim-scroll]");
  if (n.length > 0) {
    function e() {
      for (let e = 0; e < n.length; e++) {
        const o = n[e],
          i = o.offsetHeight,
          s = t(o).top,
          l = 4;
        let r = window.innerHeight - i / l;
        i > window.innerHeight &&
          (r = window.innerHeight - window.innerHeight / l),
          pageYOffset > s - r && pageYOffset < s + i
            ? o.classList.add("_active")
            : o.classList.contains("_anin-no-hide") ||
              o.classList.remove("_active");
      }
    }
    function t(e) {
      const t = e.getBoundingClientRect(),
        o = pageXOffset || document.documentElement.scrollLeft,
        n = pageYOffset || document.documentElement.scrollTop;
      return { top: t.top + n, left: t.left + o };
    }
    window.addEventListener("scroll", e),
      setTimeout(() => {
        e();
      }, 300);
  }
  (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    window.addEventListener("load", function () {
      setTimeout(function () {
        document.documentElement.classList.add("loaded");
      }, 0);
    }),
    (function () {
      const o = document.querySelectorAll("[data-spollers]");
      if (o.length > 0) {
        const n = Array.from(o).filter(function (e, t, o) {
          return !e.dataset.spollers.split(",")[0];
        });
        n.length > 0 && s(n);
        const i = Array.from(o).filter(function (e, t, o) {
          return e.dataset.spollers.split(",")[0];
        });
        if (i.length > 0) {
          const e = [];
          i.forEach((t) => {
            const o = {},
              n = t.dataset.spollers.split(",");
            (o.value = n[0]),
              (o.type = n[1] ? n[1].trim() : "max"),
              (o.item = t),
              e.push(o);
          });
          let t = e.map(function (e) {
            return (
              "(" +
              e.type +
              "-width: " +
              e.value +
              "px)," +
              e.value +
              "," +
              e.type
            );
          });
          (t = t.filter(function (e, t, o) {
            return o.indexOf(e) === t;
          })),
            t.forEach((t) => {
              const o = t.split(","),
                n = o[1],
                i = o[2],
                l = window.matchMedia(o[0]),
                r = e.filter(function (e) {
                  if (e.value === n && e.type === i) return !0;
                });
              l.addEventListener("change", function () {
                s(r, l);
              }),
                s(r, l);
            });
        }
        function s(e, t = !1) {
          e.forEach((e) => {
            (e = t ? e.item : e),
              t.matches || !t
                ? (e.classList.add("_spoller-init"),
                  l(e),
                  e.addEventListener("click", r))
                : (e.classList.remove("_spoller-init"),
                  l(e, !1),
                  e.removeEventListener("click", r));
          });
        }
        function l(e, t = !0) {
          const o = e.querySelectorAll("[data-spoller]");
          o.length > 0 &&
            o.forEach((e) => {
              t
                ? (e.removeAttribute("tabindex"),
                  e.classList.contains("_spoller-active") ||
                    (e.nextElementSibling.hidden = !0))
                : (e.setAttribute("tabindex", "-1"),
                  (e.nextElementSibling.hidden = !1));
            });
        }
        function r(o) {
          const n = o.target;
          if (n.hasAttribute("data-spoller") || n.closest("[data-spoller]")) {
            const i = n.hasAttribute("data-spoller")
                ? n
                : n.closest("[data-spoller]"),
              s = i.closest("[data-spollers]"),
              l = !!s.hasAttribute("data-one-spoller");
            s.querySelectorAll("._slide").length ||
              (l && !i.classList.contains("_spoller-active") && a(s),
              i.classList.toggle("_spoller-active"),
              ((o, n = 500) => {
                o.hidden ? t(o, n) : e(o, n);
              })(i.nextElementSibling, 500)),
              o.preventDefault();
          }
        }
        function a(t) {
          const o = t.querySelector("[data-spoller]._spoller-active");
          o &&
            (o.classList.remove("_spoller-active"),
            e(o.nextElementSibling, 500));
        }
      }
    })();
})();
