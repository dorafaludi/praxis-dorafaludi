/* Praxis Dora Faludi — kleines Progressive-Enhancement-Skript.
 * Ohne JavaScript bleibt die Seite vollständig lesbar und bedienbar:
 * das Menü ist dann permanent sichtbar, das FAQ nutzt natives <details>,
 * und das Kontaktformular fällt auf einen mailto-Link zurück.
 */
(function () {
  'use strict';

  /* ---- Mobile Navigation ---- */
  var toggle = document.querySelector('.nav__toggle');
  var links  = document.getElementById('nav-links');

  if (toggle && links) {
    var setOpen = function (open) {
      links.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    };

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* ---- Kontaktformular -> E-Mail-Programm ---- */
  var form = document.getElementById('contact-form');
  if (!form) return;

  var EMAIL = 'praxis@dorafaludi.de';

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name  = form.elements.name.value.trim();
    var email = form.elements.email.value.trim();
    var msg   = form.elements.message.value.trim();

    if (!name || !msg) {
      (name ? form.elements.message : form.elements.name).focus();
      return;
    }

    var body = msg + '\n\n' + name + (email ? '\n' + email : '');
    window.location.href = 'mailto:' + EMAIL +
      '?subject=' + encodeURIComponent('Anfrage Erstgespräch — ' + name) +
      '&body='    + encodeURIComponent(body);
  });
})();
