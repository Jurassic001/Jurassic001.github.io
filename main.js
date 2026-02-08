(function() {
  // Ensure headshot loads only after the GitHub profile image has loaded (or errored)
  function startHeadshotLoad() {
    var headshot = document.getElementById('headshot');
    if (!headshot) return;
    var src = headshot.getAttribute('data-src');
    if (src && !headshot.getAttribute('src')) {
      headshot.setAttribute('loading', 'lazy');
      headshot.setAttribute('decoding', 'async');
      headshot.src = src;
    }
  }

  function onReady(fn) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    }
  }

  onReady(function() {
    var logo = document.getElementById('profile-logo');
    if (!logo) {
      startHeadshotLoad();
      return;
    }

    var done = false;
    function onceStart() {
      if (done) return;
      done = true;
      startHeadshotLoad();
    }

    if (logo.complete) {
      // If it's already done (load or error) by the time this runs, start now.
      onceStart();
    } else {
      logo.addEventListener('load', onceStart, { once: true });
      logo.addEventListener('error', onceStart, { once: true });
    }
  });
})();
