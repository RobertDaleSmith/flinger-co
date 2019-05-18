var bodyWidth  = $(window).width();
var bodyHeight = $(window).height();

var makeMainResponsive = function () {

    bodyWidth = $(window).width();
    bodyHeight = $(window).height();


    if (bodyWidth >= 1280) {

        document.getElementById("addressBarTextArea").style.width = (bodyWidth - (1280 - 178)) + "px";
        document.getElementById("controls_address_wrapper").style.width = (bodyWidth - (1280 - 320)) + "px";

        document.getElementById("controls_wrapper").style.height = 45 + "px";

        document.getElementById("controls_options_wrapper").style.width = 320 + "px";

        document.getElementById("menu_container").style.left = 415 + "px";
        document.getElementById("menu_container").style.bottom = 65 + "px";

        document.getElementById("invite_buttons_container").style.bottom = 65 + "px";
        document.getElementById("invite_buttons_container").style.left = 320 + "px";

    } else if (bodyWidth < 1280 && bodyWidth >= 1040) {

        document.getElementById("addressBarTextArea").style.width = (bodyWidth - (1281 - 178) + 241) + "px";
        document.getElementById("controls_address_wrapper").style.width = (bodyWidth - (1281 - 320) + 241) + "px";

        document.getElementById("controls_wrapper").style.height = 45 + "px";

        document.getElementById("controls_options_wrapper").style.width = 80 + "px";

        document.getElementById("menu_container").style.left = 175 + "px";
        document.getElementById("menu_container").style.bottom = 65 + "px";

        document.getElementById("invite_buttons_container").style.bottom = 65 + "px";
        document.getElementById("invite_buttons_container").style.left = 320 + "px";

    } else if (bodyWidth < 1040 && bodyWidth >= 640) {

        document.getElementById("addressBarTextArea").style.width = (bodyWidth - (641 - 178)) + "px";
        document.getElementById("controls_address_wrapper").style.width = (bodyWidth - (641 - 320)) + "px";

        document.getElementById("controls_wrapper").style.height = 90 + "px";

        document.getElementById("controls_options_wrapper").style.width = (bodyWidth - 320) + "px";

        document.getElementById("menu_container").style.left = (bodyWidth - 225) + "px";
        document.getElementById("menu_container").style.bottom = 110 + "px";

        document.getElementById("invite_buttons_container").style.bottom = 110 + "px";
        document.getElementById("invite_buttons_container").style.left = (bodyWidth - 320) + "px";

    } else if (bodyWidth < 640 && bodyWidth >= 400) {

        document.getElementById("addressBarTextArea").style.width = 178 + "px";
        document.getElementById("controls_address_wrapper").style.width = 320 + "px";

        document.getElementById("controls_wrapper").style.height = 90 + "px";

        document.getElementById("controls_options_wrapper").style.width = (bodyWidth - 320) + "px";

        document.getElementById("menu_container").style.left = (bodyWidth - 225) + "px";
        document.getElementById("menu_container").style.bottom = 110 + "px";

        document.getElementById("invite_buttons_container").style.bottom = 110 + "px";
        document.getElementById("invite_buttons_container").style.left = (bodyWidth - 320) + "px";

    } else if (bodyWidth < 400) {

        document.getElementById("addressBarTextArea").style.width = 178 + "px";
        document.getElementById("controls_address_wrapper").style.width = 320 + "px";

        document.getElementById("controls_wrapper").style.height = 90 + "px";

        document.getElementById("controls_options_wrapper").style.width = 80 + "px";

        document.getElementById("menu_container").style.left = 175 + "px";
        document.getElementById("menu_container").style.bottom = 110 + "px";

        document.getElementById("invite_buttons_container").style.bottom = 110 + "px";
        document.getElementById("invite_buttons_container").style.left = (bodyWidth - 320) + "px";

    }


    if (bodyHeight < 570) {
        $('#new_connect_details_wrapper').css('-webkit-transform', 'scale(' + ((bodyHeight / 720) * 1) + ')');
        $('#new_connect_details_wrapper').css('-ms-transform', 'scale(' + ((bodyHeight / 720) * 1) + ')');
        $('#new_connect_details_wrapper').css('transform', 'scale(' + ((bodyHeight / 720) * 1) + ')');

    } else {
        $('#new_connect_details_wrapper').css('-webkit-transform', 'scale(' + ((bodyHeight / 720) * 1.15) + ')');
        $('#new_connect_details_wrapper').css('-ms-transform', 'scale(' + ((bodyHeight / 720) * 1.15) + ')');
        $('#new_connect_details_wrapper').css('transform', 'scale(' + ((bodyHeight / 720) * 1.15) + ')');
    }







    //HUD Overlay --Start
    if (bodyWidth < 1040) {

        if (bottomControlsOpen)
            document.getElementById('cornerLogo').style.bottom = 120 + "px";
        else
            document.getElementById('cornerLogo').style.bottom = 15 + "px";

    } else {

        if (bottomControlsOpen)
            document.getElementById('cornerLogo').style.bottom = 75 + "px";
        else
            document.getElementById('cornerLogo').style.bottom = 15 + "px";

    }

    if (bodyHeight > 720)
        bodyHeight = 720;

    if (bodyHeight > bodyWidth)
        bodyHeight = bodyWidth;

    document.getElementById('hud_top_container').style.height = ((bodyHeight / 720) * 160) + "px";


    document.getElementById('video_title').style.fontSize = ((bodyHeight / 720) * 3) + "em";
    document.getElementById('video_title').style.top = ((bodyHeight / 720) * 24) + "px";
    document.getElementById('video_title').style.left = ((bodyHeight / 720) * 190) + "px";
    document.getElementById('video_title').style.height = ((bodyHeight / 720) * 62) + "px";



    document.getElementById('video_details').style.fontSize = ((bodyHeight / 720) * 1.6) + "em";
    document.getElementById('video_details').style.top = ((bodyHeight / 720) * 94) + "px";
    document.getElementById('video_details').style.left = ((bodyHeight / 720) * 194) + "px";
    document.getElementById('video_details').style.height = ((bodyHeight / 720) * 32) + "px";
    //document.getElementById('video_details').style.width = (bodyWidth - ((bodyHeight / 720) * 544)) + "px";

    document.getElementById('video_uploaded').style.marginLeft = ((bodyHeight / 720) * 35) + "px";
    document.getElementById('video_views').style.marginLeft = ((bodyHeight / 720) * 35) + "px";

    if (video_thumb_image) {
        document.getElementById('video_thumb_image').style.width = ((bodyHeight / 720) * 110) + "px";
        document.getElementById('video_thumb_image').style.height = ((bodyHeight / 720) * 110) + "px";
    }

    document.getElementById('video_thumbnail').style.top = ((bodyHeight / 720) * 28) + "px";
    document.getElementById('video_thumbnail').style.left = ((bodyHeight / 720) * 50) + "px";

    document.getElementById('video_thumbnail').style.left = ((bodyHeight / 720) * 50) + "px";




    //HUD Overlay --End




    if ($(window).height() > $(window).width())
        bodyWidth = $(window).height();
    if (bodyWidth < 320)
        bodyWidth = 320;

    //New Channel Page --Start


    if ($(window).width() < 480) {

    } else {
        document.getElementById('video_title').style.width = (bodyWidth - 200) + "px";
    }

    if ($(window).height() > $(window).width()) {
        document.getElementById('video_title').style.width = ($(window).width() - ((bodyHeight / 720) * 190) - ((bodyHeight / 720) * 25)) + "px";
    } else {

    }


    //New Channel Page --End






    if (bodyWidth < 700) {

    } else {

    }

    var landscape = false;
    var offset = 20;
    var base = 700;
    bodyWidth = $(window).width();
    bodyHeight = $(window).height();

    if (bodyWidth > bodyHeight) {
        bodyWidth = bodyHeight;
        base = 760;
        landscape = true;
    } else {
        landscape = false;
    }



    if (bodyWidth < base) {

        if (bodyWidth < 320) bodyWidth = 320;

        $('#flinger_co_text_sub2').css('display', 'none');

        $('.booms').css('top', ((bodyWidth / base) * 40 - offset) + 'px');
        $('.booms').css('width', ((bodyWidth / base) * 160) + 'px');
        $('.booms').css('height', ((bodyWidth / base) * 160) + 'px');
        $('#logo_container').css('width', ((bodyWidth / (base - 10)) * 160) + 'px');
        $('#logo_container').css('height', ((bodyWidth / (base - 10)) * 160) + 'px');


        $('#flinger_co_text_logo_wrapper').css('top', ((bodyWidth / base) * 240 - offset) + 'px');
        $('#flinger_co_text_logo').css('width', ((bodyWidth / base) * 640) + 'px');
        $('#flinger_co_text_logo').css('height', ((bodyWidth / base) * 123) + 'px');


        $('#get_remote_learn_more').css('top', ((bodyWidth / base) * 390 - offset) + 'px');


        if ( (bodyWidth >= 415 && !landscape) || (bodyWidth >= 455 && landscape) ) {
            $('#get_remote_learn_more').css('width', ((bodyWidth / base) * 640) + 'px');
            $('#get_remote_learn_more').css('margin-left', ((((bodyWidth / base) * 640) / 2) * -1) + 'px');
        } else {

            $('#get_remote_learn_more').css('width', 245 + 'px');
            $('#get_remote_learn_more').css('margin-left', (((245) / 2) * -1) + 'px');
        }
                

        $('#get_remote_apps').css('top', ((bodyWidth / base) * 450 - offset + 10) + 'px');
        $('#get_remote_apps').css('height', ((bodyWidth / base) * 71) + 'px');

        $('#splash_footer_container').css('height', 45 + 'px');
        $('#copyright_container').css('line-height', 45 + 'px');
        $('#footer_menu_container').css('line-height', 45 + 'px');

        $('#pairing_container').css('bottom', 45 + 'px');
        $('#status_container').css('bottom', 135 + 'px');

        $("#splash_container_back2").height($(window).height() - 170);
        $("#splash_main_content").height($(window).height() - 170);
        $("#logo_animation_container").height($(window).height() - 170);

        var tempWidth = bodyWidth;
        if (tempWidth < 420) tempWidth = 420;
        $(".store_img").css('width', ((tempWidth / base) * 212) + 'px');
        $(".store_img").css('height', ((tempWidth / base) * 71) + 'px');


        //$("#play_store_button").css('-webkit-border-radius', ((tempWidth / base) * 15) + 'px');
        //$("#play_store_button").css('-moz-border-radius', ((tempWidth / base) * 15) + 'px');
        //$("#play_store_button").css('border-radius', ((tempWidth / base) * 15) + 'px');

    } else {
        $('#flinger_co_text_sub2').css('display', 'inline-block');


        $('.booms').css('top', 40 + 'px');
        $('.booms').css('width', 160 + 'px');
        $('.booms').css('height', 160 + 'px');
        $('#logo_container').css('width', 160 + 'px');
        $('#logo_container').css('height', 160 + 'px');

        $('#flinger_co_text_logo_wrapper').css('top', 240 + 'px');
        $('#flinger_co_text_logo').css('width', 640 + 'px');
        $('#flinger_co_text_logo').css('height', 123 + 'px');

        $('#get_remote_learn_more').css('top', 420 + 'px');
        $('#get_remote_learn_more').css('width', 640 + 'px');
        $('#get_remote_learn_more').css('margin-left', (-320) + 'px');


        $('#get_remote_apps').css('top', 470 + 'px');
        $('#get_remote_apps').css('height', 71 + 'px');

        $('#splash_footer_container').css('height', 74 + 'px');
        $('#copyright_container').css('line-height', 74 + 'px');
        $('#footer_menu_container').css('line-height', 74 + 'px');

        $('#pairing_container').css('bottom', 74 + 'px');
        $('#status_container').css('bottom', 164 + 'px');

        $("#splash_container_back2").height($(window).height() - 199);
        $("#splash_main_content").height($(window).height() - 199);
        $("#logo_animation_container").height($(window).height() - 199);

        $(".store_img").css('width', (212) + 'px');
        $(".store_img").css('height', (71) + 'px');


        //$("#play_store_button").css('-webkit-border-radius', (15) + 'px');
        //$("#play_store_button").css('-moz-border-radius', (15) + 'px');
        //$("#play_store_button").css('border-radius', (15) + 'px');
    }


    if (bodyWidth >= base) {

        $('.booms').css('top', (((bodyWidth / base) * 240) - 200) + 'px');
        $('#flinger_co_text_logo_wrapper').css('top', ((bodyWidth / base) * 240) + 'px');
        $('#get_remote_learn_more').css('top', ((bodyWidth / base) * 420) + 'px');
        $('#get_remote_apps').css('top', ((bodyWidth / base) * 470) + 'px');

        $('#flinger_co_text_sub2').css('top', ((bodyWidth / base) * 360) + 'px');
    }


    $('#chat_conversation_container').css('width', ($(window).width() - 220) + 'px');

};