(function ($) {
  'use strict';

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });

  $.syotimerLang.ara =  {
    second: ['ثانية', 'ثانية'],
    minute: ['دقيقة', 'دقيقة'],
    hour: ['ساعة', 'ساعة'],
    day: ['يوم', 'يوم']
  };
  $.syotimerLang.fre =  {
    second: ['seconde', 'secondes'],
    minute: ['minute', 'minutes'],
    hour: ['heure', 'heures'],
    day: ['jour', 'jours']
  };
  // Count Down JS
  var Year = $('#simple-timer').attr('data-year');
  var Month = $('#simple-timer').attr('data-month');
  var Day = $('#simple-timer').attr('data-day');
  var Hour = $('#simple-timer').attr('data-hour');
  var Minute = $('#simple-timer').attr('data-minute');
  var Lang = $('#simple-timer').attr('data-language');
  $('#simple-timer').syotimer({
    year: Year,
    month: Month,
    day: Day,
    hour: Hour,
    minute: Minute, 
    lang: Lang
  });

  /* contact form */
  $(document).ready(function () {

    $('#contact-form').validate({
      rules: {
        user_name: {
          required: true,
          minlength: 4
        },
        user_email: {
          required: true,
          email: true
        },
        user_phone: {
          required: true
        },
        user_message: {
          required: true
        }
      },
      messages: {
        user_name: {
          required: 'Come on, you have a name don\'t you?',
          minlength: 'Your name must consist of at least 2 characters'
        },
        user_email: {
          required: 'Please put your email address'
        },

        user_phone: {
          required: 'Please put your Phone Number'
        },

        user_message: {
          required: 'Put some messages here?',
          minlength: 'Your name must consist of at least 2 characters'
        }

      },
      submitHandler: function (form) {
        $(form).ajaxSubmit({
          type: 'POST',
          data: $(form).serialize(),
          url: 'sendmail.php',
          success: function () {
            $('#contact-form #success').fadeIn();
          },
          error: function () {

            $('#contact-form #error').fadeIn();
          }
        });
      }
    });

  });

})(jQuery);