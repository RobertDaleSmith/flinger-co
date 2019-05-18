function makePageResponsive() {
    var bodyWidth = $(window).width();
    var bodyHeight = $(window).height();
    if (bodyWidth < 320) bodyWidth = 320;
    
    if (bodyWidth <= 745) {  //Small screen sizes
        $('#side_bar_container').css("height", 300);
        $('#side_bar_container').css("width", '100%');

        $('#side_bar_dot_co_proud').css("display", "none");

        $('#main_content_container').css("padding-left", 0);
        $('#main_content_container').css("padding-top", 300);
        $('#main_content_container').css("width", '100%');


        $('.blog_post_date').css("padding-left", (bodyWidth / 745) * 100);
        $('.blog_post_title').css("padding-left", (bodyWidth / 745) * 100);
        $('.blog_post_title').css("margin-right", (bodyWidth / 745) * 80);
        $('.blog_post_body').css("padding-left", (bodyWidth / 745) * 100);
        $('.blog_post_body').css("padding-right", (bodyWidth / 745) * 100);

        $('.blog_post_tags').css("padding-left", (bodyWidth / 745) * 100);
        $('.blog_post_tags').css("margin-right", (bodyWidth / 745) * 80);

        $('.blog_post_tags_line_sep').css("padding-left", (bodyWidth / 745) * 100);
        $('.blog_post_tags_line_sep').css("margin-right", (bodyWidth / 745) * 80);

        if (bodyWidth > 420) {
            $('#latest_twitter_Tweet').css("font-size", (bodyWidth / 745) * 1.188 + "em");
        } else if ((bodyWidth <= 420) && bodyWidth > 320) {
            $('#latest_twitter_Tweet').css("font-size", (420 / 745) * 1.588 + "em");
        }

        document.getElementById("main_menu").className = "phone_menu";

        $('#main_menu').css("display", "none");
        $('#main_menu_button').css("display", "block");

        //$('#flinger_pages_logo').css("left", "50%");
        //$('#flinger_pages_logo').css("margin-left", -97);

    } else {            //Everything else

        $('#side_bar_container').css("height", '100%');
        $('#side_bar_container').css("width", 240);

        $('#side_bar_dot_co_proud').css("display", "inline-block");

        $('#main_content_container').css("padding-left", 240);
        $('#main_content_container').css("padding-top", 209);
        $('#main_content_container').css("width", bodyWidth - 240);


        $('.blog_post_date').css("padding-left", 100);
        $('.blog_post_title').css("padding-left", 100);
        $('.blog_post_title').css("margin-right", 80);
        $('.blog_post_body').css("padding-left", 100);
        $('.blog_post_body').css("padding-right", 100);

        $('.blog_post_tags').css("padding-left", 100);
        $('.blog_post_tags').css("margin-right", 80);

        $('.blog_post_tags_line_sep').css("padding-left", 100);
        $('.blog_post_tags_line_sep').css("margin-right", 80);

        $('#latest_twitter_Tweet').css("font-size", 1.188 + "em");

        document.getElementById("main_menu").className = "header_menu";

        $('#main_menu').css("display", "block");
        $('#main_menu_button').css("display", "none");

        //$('#flinger_pages_logo').css("left", 24);
        //$('#flinger_pages_logo').css("margin-left", 0);

    }


    if (bodyWidth <= 420) {
        $('#social_container').css("background-image", "none");
        $('#latest_twitter_Tweet').css("left", 20);
        $('#latest_twitter_Tweet').css("width", bodyWidth - 60);
        $('#twitter_username_link').css("bottom", 10);

        $('#facebook_social_link').css("top", 12);
        $('#facebook_social_link').css("right", 0);

        $('#googleplus_social_link').css("top", 47);
        $('#googleplus_social_link').css("right", 0);

        $('#twitter_social_link').css("top", 82);
        $('#twitter_social_link').css("right", 0);

    } else {
        $('#social_container').css("background-image", "url('https://flinger.motelabs.com/images_pages/social_quote_bg.png')");
        $('#latest_twitter_Tweet').css("left", 102);
        $('#latest_twitter_Tweet').css("width", bodyWidth - 275);
        $('#twitter_username_link').css("bottom", 20);

        $('#facebook_social_link').css("top", 0);
        $('#facebook_social_link').css("right", 100);

        $('#googleplus_social_link').css("top", 0);
        $('#googleplus_social_link').css("right", 60);

        $('#twitter_social_link').css("top", 0);
        $('#twitter_social_link').css("right", 20);
    }

    $('#latest_twitter_Tweet').css("margin-top", '-' + $('#latest_twitter_Tweet').height() / 2 + 'px');
}
makePageResponsive();
$(window).resize(function () { makePageResponsive(); scrollChanged(); });
window.onload = function () { makePageResponsive(); addFooterFollowButtons();};
            
$(window).scroll(function () {
    scrollChanged();
});
function scrollChanged() {
    var bodyWidth = $(window).width();
    var scrollDistanceFromTop = document.getElementById("body_wrapper").scrollTop;
    if (scrollDistanceFromTop >= 124 && bodyWidth > 720) {
        $('#side_bar_page_title').css("position", "fixed");
        $('#side_bar_page_title').css("top", "116px");
    } else {
        $('#side_bar_page_title').css("position", "absolute");
        $('#side_bar_page_title').css("top", "240px");
    }
}



$('#main_menu_button').click(function () {

    if ($('#main_menu').css("display") == "block")
        $('#main_menu').css("display", "none");
    else
        $('#main_menu').css("display", "block");
});



var addFooterFollowButtons = function () {

    var angelco = "<a href='https://angel.co/mote-labs-1?follow=1&type=Startup&id=88607'></a><script src='https://angel.co/javascripts/embed.js' type='text/javascript'></script>";

    var facebook = "<div class='fb-like' style='display: inline-block;position: relative;' data-href='http://facebook.com/flingerco' data-send='false' data-layout='button_count' data-width='450' data-show-faces='true' data-colorscheme='light'></div>";

    var googlep = "<div class='g-follow' data-annotation='bubble' data-height='20' data-href='//plus.google.com/107129845099957054722' data-rel='publisher'></div><script type='text/javascript'> (function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://apis.google.com/js/plusone.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s); })(); </script>";

    var twitter = "<div id='twitter_follow_container'><a href='https://twitter.com/FlingerCo' class='twitter-follow-button' data-show-count='true'>Follow @FlingerCo</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script></div>";

    var followButtons = angelco + facebook + "&nbsp;&nbsp;&nbsp;&nbsp;" + googlep + "&nbsp;&nbsp;" + twitter;

    $('#footer_follow_inner').html(followButtons);

}