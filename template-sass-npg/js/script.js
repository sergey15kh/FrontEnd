
/*
 Custom
 */

(function($) {
    $(function(){
        /*This area for init Function*/

        pageEntryAnimation();
        gridFunc();
        slideInAsUScollDown();

        $("select.custom").each(function() {
            var sb = new SelectBox({
                selectbox: $(this),
                height: 480,
                width: '100%'
            });
        });
        mobileCustomEdit();
    });

    /*This area for declaration Functions*/
    function mobileCustomEdit(){
        setTimeout(function(){
            if(('.customSelect').length>0){

                function selectsActivate(){
                    $('.selectValueWrap').on('click', function(){
                        var holder = ($(this).closest('.customSelect'));
                        if(holder.hasClass('select-open')){
                            holder.removeClass('select-open');
                            holder.css('z-index', '100');
                        } else {
                            $('.customSelect').removeClass('select-open');
                            $('.customSelect').css('z-index', '30');
                            holder.addClass('select-open');
                            holder.css('z-index', '31');
                        }
                    });
                }
                // selectsActivate();
                if (Modernizr.touch) {
                    selectsActivate();
                }
            }
        },1000);
    }

    function  pageEntryAnimation(){
        TweenMax.to("html", 0.5, {delay:0.5, opacity: 1, ease:Cubic.easeInOut});
    }


    function gridFunc(){

        // for turn on grid

        $(document).bind('keydown',function(e){
            var gridon = "on";
            if(e.keyCode == 88) {
                if ($('.dev-grid').hasClass(gridon)) {
                    $('.dev-grid').removeClass(gridon);
                }
                else {
                    $('.dev-grid').addClass(gridon);
                }
            }
        });
    }

    function slideInAsUScollDown(){
        $.fn.visible = function(partial) {

            var $t            = $(this),
                $w            = $(window),
                viewTop       = $w.scrollTop(),
                viewBottom    = viewTop + $w.height(),
                _top          = $t.offset().top,
                _bottom       = _top + $t.height(),
                compareTop    = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;

            return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

        };

        var win = $(window);
        var allMods = $(".display");

        allMods.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("animate");
                el.removeClass("fade-in");
            } else {
                el.addClass("fade-in");
            }

        });

        win.scroll(function (event) {
            allMods.each(function (i, el) {
                var el = $(el);
                if (el.visible(true)) {
                    el.addClass("animate");
                    el.removeClass("fade-in");
                }
            });
        });

        win.resize(function (event) {
            allMods.each(function (i, el) {
                var el = $(el);
                if (el.visible(true)) {
                    el.addClass("animate");
                    el.removeClass("fade-in");
                }
            });
        });

        allMods.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("animate");
                el.removeClass("fade-in");
            }
        });
    }

})(jQuery);

