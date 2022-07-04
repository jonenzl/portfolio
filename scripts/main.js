(function ($) {
  'use strict'; // Start of use strict
  
  // Collapse nav modal after click
  /*$(document).ready(function () {
    $('.nav-social-link').click(function (event) {
      $('.nav-modal').modal('hide');
    });
  });*/
  
  // change shadow on book hover
  $('.book').hover(
    function() {
      $(this).removeClass("shadow-sm");
      $(this).addClass("shadow");
    }, function() {
      $(this).removeClass("shadow");
      $(this).addClass("shadow-sm");
    }
  );
  
  // change shadow on podcast hover
  $('.podcast').hover(
    function() {
      $(this).removeClass("shadow-sm");
      $(this).addClass("shadow");
    }, function() {
      $(this).removeClass("shadow");
      $(this).addClass("shadow-sm");
    }
  );
     
})(jQuery); // End of use strict