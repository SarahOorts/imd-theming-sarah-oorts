/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
 (function ($, Drupal) {
    'use strict';
    
  let hamburger = $(".hamburger-menu");
  let hamburgeritem = $(".hamburger-menu-item");

  console.log("test 1");

     //Create behavior for navigation
     Drupal.behaviors.navMenuBehavior = {
      attach: function (context, settings) {
        $('.hamburger-menu', context).once('navMenuBehavior').each(function () {
          let open = false;
          console.log("test 2");

          hamburger.click(function() {
              console.log(open);
              if(open){
                hamburgeritem.addClass("hidden");
                $(".nav-menu").css("padding-bottom", "50px");                
                $(".nav-menu").css("background-color", "rgb(0, 0, 0, 0.4");
                console.log("test 3");
                open = false;
              } else {
                hamburgeritem.removeClass("hidden");                
                $(".nav-menu").css("padding-bottom", "250px");
                $(".nav-menu").css("background-color", "rgb(0, 0, 0, 1");
                console.log("test 4");
                open = true;
              }

          });

        });
      }
    };
  
  })(jQuery, Drupal);