(function($){
    $(document).ready(function() {
        var pages = ["inc", "form", "mus","lab"]
        pages.forEach(function(page) {
            var parentClass = `.sft-${page}-link`
            var hrefLink = $(parentClass +" .vc_icon_element-link").attr('href'); 
            $( parentClass ).wrap( `<a href="${hrefLink}" ></a>` );
           
          });
        });
    })(jQuery);