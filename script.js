// G9 Recruitment page interactions.
// CTA links intentionally use mailto: URLs so applicants can contact HR directly.

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('a[href^="mailto:"]');

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Keep the browser's normal mailto behavior.
      // This handler provides a clean hook for future analytics.
      button.classList.add("clicked");
    });
  });
});
