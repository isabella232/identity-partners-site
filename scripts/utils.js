import $ from 'jquery';

$(function() {
  // Language picker

  function languagePicker(trigger, dropdown) {
    trigger.on('click keypress', function (event) {
      event.preventDefault();
      var eventType = event.type;
      if (eventType == 'click' || (eventType == 'keypress' && event.which == 13)) {
        $(this).parent().toggleClass('focused');
        dropdown.toggle();

        $(this).attr('aria-expanded', function (i, attr) {
            return attr == 'true' ? 'false' : 'true'
        });
      }
    });
  }

  languagePicker($('.btn-lang-toggle'), $('.btn-lang-toggle + .dropdown'));
  languagePicker($('.footer .learn-more'), $('.footer .learn-more-section-container'));
});
