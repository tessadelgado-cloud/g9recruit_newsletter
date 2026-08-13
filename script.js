document.addEventListener("DOMContentLoaded", function () {
  // All application buttons use mailto links to HR.
  // This file is intentionally lightweight so the page works reliably on GitHub Pages.
  document.querySelectorAll('a[href^="mailto:"]').forEach(function (link) {
    link.addEventListener("click", function () {
      link.blur();
    });
  });
});
