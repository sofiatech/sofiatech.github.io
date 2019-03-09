
    (function($){
        if($( window ).width() > 1212){

            $(document).ready(function() {
                $( "#primary-menu li.menu-item ul.sub-menu li ul" ).parent().find( ".megamenu-column-header" ).append( "<span class='menu-icon-btn fa fa-angle-down'></span>" );
            
                $("#primary-menu li.menu-item ul.sub-menu li .menu-icon-btn").click(function(){
                    //Hide all open dropdowns
                    // onNewDropDownOpen(this)
    
                    //change the menu icon possition
                    $(this).toggleClass("active")
    
                    //show the dropdown
                    $(this).parent().parent().children("ul").toggleClass("activeDropdown")
                });
    
                $('#primary-menu > li').hover( function(){
                    hideAllOpenDropDowns()
                })
    
    
            });
        
            function hideAllOpenDropDowns(){
                console.log("remove all classes1 ")
                $("#primary-menu li.menu-item ul.sub-menu li .menu-icon-btn").removeClass("active")
                $("#primary-menu li ul li ul").removeClass("activeDropdown")
            }
        }
        
        
        // function onNewDropDownOpen(el){
        //     var arrowDownObj = $("#primary-menu li.menu-item ul.sub-menu li .menu-icon-btn")
        //     var dropDownVisibility = $("#primary-menu li ul li ul")
        //     var dropDownCurrent = $(el).parent().parent().children("ul");

        //     // $.each( arrowDownObj, function( key, value ) {
        //     //     if(el !== value){
        //     //         $("#primary-menu li.menu-item ul.sub-menu li .menu-icon-btn").removeClass("active") 
        //     //     }
        //     //   });

            
        //     $.each( dropDownVisibility, function( key, value ) {
        //         console.log("value")
        //         console.log(value)
        //         console.log("my el")
        //         console.log($(dropDownCurrent))
        //         if(dropDownCurrent !== value){
        //             // $("#primary-menu li.menu-item ul.sub-menu li .menu-icon-btn").removeClass("active") 
        //             console.log('nee')
        //         }else{
        //             console.log('suvpadenie')
        //         }
        //     });
        // }
        
        
        })(jQuery);
    
