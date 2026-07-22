// Site behaviour: random script showcase + contact-form confirmation.
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    // Randomly reveal one script rendering of the name in the lockup.
    var lock = document.querySelector("[data-name-lock]");
    if (lock) {
      var picks = Array.prototype.slice.call(lock.querySelectorAll("[data-name-pick]"));
      if (picks.length) {
        var chosen = picks[Math.floor(Math.random() * picks.length)];
        picks.forEach(function (p) { p.classList.toggle("is-shown", p === chosen); });
      }
    }

    // Contact form: silent post to the hidden Google Form iframe, then confirm.
    var form = document.querySelector(".cform");
    if (form) {
      form.addEventListener("submit", function () {
        setTimeout(function () {
          var status = form.querySelector(".form-status");
          if (status) status.classList.add("is-visible");
          form.reset();
        }, 500);
      });
    }
  });
})();
