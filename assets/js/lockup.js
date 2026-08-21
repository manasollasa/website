// Randomly reveal one script rendering of the name in the hero lockup.
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var lock = document.querySelector("[data-name-lock]");
    if (!lock) return;
    var picks = Array.prototype.slice.call(lock.querySelectorAll("[data-name-pick]"));
    if (!picks.length) return;
    var chosen = picks[Math.floor(Math.random() * picks.length)];
    picks.forEach(function (p) { p.classList.toggle("is-shown", p === chosen); });
  });
})();
