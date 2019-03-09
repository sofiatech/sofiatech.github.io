(function($){
    $(document).ready(function() {
        // Optimalisation: Store the references outside the event handler:
        var $window = $(window);
        
        // function checkWidth() {
        // var windowsize = $window.width();
        // var height= $window.height();
        // var header = $("#site-header").height() / 2 + 552;
        // var videoHeight = $("#home-video").height();

      

        //     if ($("#home-video").width() > 1000) {
        //         $(".program-logo").parent().parent().css("top",  552 - videoHeight );
        //     }
        //     else{
        //         $(".program-logo").css("display", "none")
        //     }
        // }
        // // Execute on load
        // checkWidth();
        // // Bind event listener
        // $(window).resize(checkWidth);
        });

    })(jQuery);