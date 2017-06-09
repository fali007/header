(function($) {
         $(document).ready(function(){
             $(window).scroll(function(){
                if ($(this).scrollTop() > 500) {
                    $('.icon2').show(500);
                    $('.header').hide();
                    $('.closebutton2').hide();
                    $('.scoll_sym').fadeOut(1000);
                }
                else
                {
                    $('.icon2').css("display","none");
                    $('.header').css("background-color","transparent");
                    $('.icon2').hide(function(){
                    $('.header').show();
                    });
                    $('.closebutton2').hide();
                }
            });
        }

  );

        $('.icon2').click(function(){
			      $('.header').css("background-color","rgba(30,30,30,0.7)");
            // $('.nav').fadeIn(1000);
            $('.header').css("height","0px");
            $('.header').css("display","block");
            var div = $('.header');
            div.animate({height: '125px'},400);
            // $('.nav').fadeIn(1000);
            $('.icon2').fadeOut(800);
            $('.closebutton2').fadeIn(1000);

        });
          $('.closebutton2').click(function(){
            $('.header').fadeOut(1000);
            $('.closebutton2').fadeOut(1000);
            $('.icon2').fadeIn(1300);

          });

    }
    )(jQuery);
