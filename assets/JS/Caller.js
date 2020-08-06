$(document).ready(function ()
{

    // Smooth scroll.

    var $root = $('html, body');

    $('a[href^="#"]').click(function ()
    {

        $root.animate(
        {

            scrollTop: $( $.attr(this, 'href') ).offset().top


        }, 200);

        return false;

    });

    // Toggle menu.

    let _hold_Visible_Or_Not = false;

    $("._toggle").click(function ()
    { 
        
        if(_hold_Visible_Or_Not == true)
        {

            $("._side_Bar_Menu").css("transform", "translateX(-200px)");
            _hold_Visible_Or_Not = false;

            $("nav").css("width", "95px");

            // Hamburger

            $("nav ._toggle").children().eq(0).animate(
            {
    
                marginLeft : "0%"
    
            }, "slow");

            $("nav ._toggle").children().eq(1).animate(
            {
    
                marginLeft : "0px"
    
            }, "slow");

            $("nav ._toggle").children().eq(2).animate(
            {
    
                marginLeft : "0%"
    
            }, "fast", function () 
            {

                $("nav ._toggle").children().filter("h3").remove();
                    
            });

        }
        else
        {

            $("._side_Bar_Menu").css("transform", "translateX(0px)");
            _hold_Visible_Or_Not = true;

            $("nav").css("width", "200px");

            // Hamburger

            $("nav ._toggle").children().eq(0).animate(
            {
    
                marginLeft : "-92%"
    
            }, "fast");

            $("nav ._toggle").children().eq(1).animate(
            {
    
                marginLeft : "100%"
    
            }, "fast");

            $("nav ._toggle").children().eq(2).animate(
            {
    
                marginLeft : "100%"
    
            }, "fast", function () {

                $("nav ._toggle").append('<h3>CLOSE</h3>');

                let _menu = $("nav ._toggle h3");

                _menu.animate({color : "#fff"});

            });
    
        }
        
    });

    // Slider.

    let _slider_Container = $("._slider_Container");
    let _images = _slider_Container.children();
    let _images_Position = 1;
    let _movement = 0;

    $(window).resize(function ()
    { 

        _images.css(
        {

            "transform" : "translateX(0px)",
            "width" : "100%"

        });
        _images_Position = 1;
        _images_Position = 1;
        
    });

    $("#_move_Left").click(function ()
    {

        if(_images_Position < _images.length)
        {

            _movement = _movement - _slider_Container.children().last().width() - 4;

            _images.css("transform", `translateX(${_movement}px)`);


            _images_Position++;

        }
        else if(_images_Position == _images.length)
        {

            _slider_Container.children().last().css("margin-left", `${-(_slider_Container.children().last().width() / 3)}px`);

            setTimeout(() => 
            {

                _slider_Container.children().last().css("margin-left", "0px");
                
            }, 100);
            
        }
        
    });

    $("#_move_Right").on("click", function ()
    {

        if(_images_Position > 1)
        {

            _movement = _movement + _slider_Container.children().last().width() + 4;

            console.log(_movement);

            _images.css("transform", `translateX(${_movement}px)`);

            _images_Position--;
            
        }
        else if(_images_Position == 1)
        {
            
            _slider_Container.children().first().css("margin-left", `${(_slider_Container.children().last().width() / 3)}px`);
            
            setTimeout(() => 
            {

                _slider_Container.children().first().css("margin-left", "0px");
                
            }, 100);
            
        }
        
    });

    // Project gallery.

    let _img = $("._project_Card ._test");

    let _metadata = $("._metadata");

    setTimeout(() =>
    {
        
        _img = $("._project_Card ._test");

        _metadata = $("._metadata");

        _metadata.css("width", `${_img.width()}px`).css("left", `${_img.width()}px`);
        
    }, 2000);

    $(window).resize(function ()
    {

        _metadata.css("width", `${_img.width()}px`).css("left", `${_img.width()}px`);
        
    });
    
});