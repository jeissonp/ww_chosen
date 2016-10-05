/**
 * @file
 * Archive javascript function to call the general chosen
 * @param {type} $
 * @returns {undefined}
 */
(function ($) {
  Drupal.behaviors.attachChosen = {
    attach: function (context, settings) {
      $('.attach-chosen').once('attach-chosen', function () {
        $(this).chosen({
          no_results_text: Drupal.t('Oops, nothing found!'),
          max_shown_results: 5
        });
      });
    }
  }
})(jQuery);