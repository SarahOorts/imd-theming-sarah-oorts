/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
 (function ($, Drupal) {
    'use strict';
  
    /**
     * Example drupal behavior
     */
    Drupal.behaviors.awesome = {
      attach: function(context, settings) {
        $('main', context).once('awesome').append("<p>Hello World</p>");
      }
    };
  
  })(jQuery, Drupal);