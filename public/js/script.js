/*         Developed by @RobertDaleSmith founder of @MoteLabs.           
           ____    ___  @FlingerCo / robert@motelabs.com
          /\  _`\ /\_ \    __                                                             
          \ \ \L\_\//\ \  /\_\    ___      __      __   _ __      ___    ___   
           \ \  _\/ \ \ \ \/\ \ /' _ `\  /'_ `\  /'__`\/\`'__\   /'___\ / __`\ 
            \ \ \/   \_\ \_\ \ \/\ \/\ \/\ \L\ \/\  __/\ \ \/ __/\ \__//\ \L\ \
             \ \_\   /\____\\ \_\ \_\ \_\ \____ \ \____\\ \_\/\_\ \____\ \____/
              \/_/   \/____/ \/_/\/_/\/_/\/___L\ \/____/ \/_/\/_/\/____/\/___/ 
                                           /\____/                             
                                           \_/__/                  (C)(TM)2013
*/
var consoleLog = function (logMsg) {
    console.log(logMsg);
}
consoleLog("Hey!");
var ytHTML5ModeEnabled = false;
var flingUrlFound = false;
var flingUrl = "";
var $state = null;
var flingCount = 0;
var sessionActive = false;
var prevConnection = false;
var volumeMute = false;
var prevHasTag = "000000";
var prevVolume = 0;
var currentVolume = 0;
var seekToTime, newPlayerState, tempVolume = -1;
var isFullScreen = false,
    iframeEnabled = false,
    slidesEnabled = false,
    ytPlayerEnabled = false,
    vimeoPlayerEnabled = false,
    html5PlayerEnabled = false;
var topControlsOpen = true,
    bottomControlsOpen = true;
var html5VideoPlayer = null;
var ytplayer;
var playerState = 0;
var ytDone = false;
var markerWidth = 0;
var prevCurrentTime = 0,
    prevDuration = 0,
    currentTime = 0,
    totalTime = 0,
    totalSlides = 0;
var tempCurrentTime = 0,
    tempDuration = 0,
    seekBarWidth, completedWidth, fractionLoaded, fractionLoadedWidth;
var timeSeeking = false,
    volSeeking = false,
    durationTimeOutput = 0,
    currentTimeOutput = 0;
var iframe = null,
    froogaloop = null;
var currentUrl = "";
var prevKeyCode = "";
var startVidTime = 0;
var firstVideoLoad = true;
var url = "";
var keycode = "";
var volume = 0;
var seekTime = 0;
var video_id = 0,
    vimeo_id = 0;
var params = {
    allowScriptAccess: "always"
};
var atts = {
    id: "slidePlayer"
};
var flashvars = {
    doc: ""
};
var flashSlides;
var playerObj = null;
var newUrl = "";
var keyCodeToSend = "";
var firstMouseUp = true;
var lastPrime = 0;
var adDetailsEnabled = false;
var menuIsOpen = false,
    inviteIsOpen = false;
var tempUrlStr = document.getElementById("data");
var timeout = null;
var mouseIsMoving = false,
    addressBarIsFocused = false,
    mouseIsOverControls = false;
var prevX = 0,
    prevY = 0,
    currentX = 0,
    currentY = 0;
var data = document.getElementById("data");
var docname = document.location.hash.substring(1, 7);
var activityCheckTimer = null;
var viewerCount = 0,
    listCounted = false;
var screensObject = [];
var remoteCount = 0,
    remoteListCounted = false;
var remotesObject = [];
var checkingProgressTimer = null;
var prevPlayerState = 0;
var foundIndex;
var viewerName = "";
var checkOthersForActivityTimer;
var textArea = null;
var textAreaPrevText = "";
var tempUpdateVolume, prevUpdateVolume, completedVolWidth, prevMuteVolume = 0;
var volOsdShowing = false;
var timeOutVolOSD = null;
var prevChatLog = "",
    chatLog = "",
    chatLogCount = 0,
    justJoinedChat = true;
var isMainScreen = false;
var connectAniActive = false;
var animationInterval = null;
var YT_API_KEY = "AIzaSyCdzF0CeKuj-_G70SjcFmO62A7i1RNK_ao";

function connectAniLoop() {
    if (!connectAniActive) {
        connectAniActive = true;
        $('#boom_1').animate({
            rotate: '+=1080deg',
            scale: '3',
            top: "-=950px",
            left: "-=950px"
        }, 1200);
        $('#boom_2').animate({
            rotate: '+=1080deg',
            scale: '3',
            top: "-=0px",
            left: "+=1050px"
        }, 1200);
        $('#boom_3').animate({
            rotate: '+=1080deg',
            scale: '3',
            top: "+=950px",
            left: "-=950px"
        }, 1200);
        $('#boom_1').animate({
            rotate: '+=1080deg',
            scale: '1',
            top: "+=950px",
            left: "+=950px"
        }, 2400);
        $('#boom_2').animate({
            rotate: '+=1080deg',
            scale: '1',
            top: "+=0px",
            left: "-=1050px"
        }, 2400);
        $('#boom_3').animate({
            rotate: '+=1080deg',
            scale: '1',
            top: "-=950px",
            left: "+=950px"
        }, 2400, function () {
            connectAniActive = false;
        });
    }
}
window.onload = function () {
    onPageLoad();
    $("#connect_button").click(function () {
        if (animationInterval == null && !connectAniActive) {
            connectToHash();
        } else {
            clearTimeout(animationInterval);
            animationInterval = null;
            document.getElementById("connect_button").textContent = "CONNECT";
            disconnectFromHash();
        }
    });
    $("#play_store_button").click(function () {
        window.open("https://play.google.com/store/apps/details?id=flinger.co.remote", "_blank")
    });
    $("#chrome_web_store_button").click(function () {
        window.open("https://chrome.google.com/webstore/detail/flingerco-remote/pnapfnfcbmjghcdklebipebankjhmdcc", "_blank")
    });
    $("#html_web_app_button").click(function () {
        window.open("http://remote.flinger.motelabs.com/", "_blank")
    });
    $("#get_the_remote_btn").click(function () {
        var objDiv = document.getElementById("splash_main_content");
        objDiv.scrollTop = objDiv.scrollHeight;
    });
    $("#learn_more_btn").click(function () {
        flingUrl = "http://www.youtube.com/watch?v=ZfP9Jwr61yE";
        flingUrlFound = true;
        startNewChannel();
    });
}
$(window).resize(function () {
    makeMainResponsive();
    resizePlayer($(window).width(), $(window).height());
});
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-39500794-1']);
_gaq.push(['_trackPageview']);
(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

function youtube_parser(url) {
    url = url.replace("player_embedded&v=", "watch?v=");
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[7].length == 11) {
        return match[7];
    } else {
        return 0;
    }
}

function vimeo_parser(url) {
    url = url.replace("https://", "http://");
    url = url.replace("vimeo.com/m/", "vimeo.com/");
    url = url.replace("channels/staffpicks/", "");
    var regExp = /http:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;
    var match = url.match(regExp);
    if (match) {
        return (match[2]);
    } else {
        return 0;
    };
}

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function alphaFilterKeypress(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    return /[a-z0-9_]/i.test(charStr);
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    } else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}
var hasFlash = false;
try {
    var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
    if (fo) hasFlash = true;
} catch (e) {
    if (navigator.mimeTypes["application/x-shockwave-flash"] != undefined) hasFlash = true;
}
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var ytplayer;
var params = { allowScriptAccess: "always" };
var atts = { id: "ytplayer" };

if(!ytHTML5ModeEnabled) 
    swfobject.embedSWF("http://www.youtube.com/v/ZfP9Jwr61yE?enablejsapi=1&controls=0&playerapiid=ytplayer&version=3&showinfo=0&iv_load_policy=3&rel=0&modestbranding=1&autoplay=0", "ytplayer", "425", "356", "8", null, null, params, atts);
function onYouTubePlayerReady(playerId) {
    ytplayer = document.getElementById("ytplayer");
    onPlayerReady();
    ytplayer.addEventListener("onStateChange", "onPlayerStateChange");
}

//HTML5 - broken :(
function onYouTubeIframeAPIReady() {
   ytplayer = new YT.Player('ytplayer', {
       height: $(window).height(),
       width: $(window).width(),
       //videoId: 'u1zgFlCw8Aw',
       playerVars: {
           controls: '0',
           enablejsapi: '1',
           showinfo: '0',
           iv_load_policy: '3',
           rel: '0',
           modestbranding: '1',
           autoplay: '0'
       },
       events:
                   {
                       'onReady': onPlayerReady,
                       'onStateChange': onPlayerStateChange
                   }
   });
   ytHTML5ModeEnabled = true;
}

function onPlayerReady(event) {
    setInterval(updatePlayerInfo, 1000);
}

function onPlayerStateChange(event) {
    if (ytHTML5ModeEnabled) newState = event.data;
    else newState = event;

    if (ytPlayerEnabled) {
        if (newState == YT.PlayerState.PLAYING && !ytDone) {
            ytDone = true;
        }
        if (sessionActive && getViewerIndex(viewerName) != -1) {
            $state.submitOp([{
                p: ['screens', getViewerIndex(viewerName), 'state'],
                od: null,
                oi: newState
            }]);
        }
        playerState = newState;
    }
}

function stopVideo() {
    ytplayer.stopVideo();
}

function setVideoVolume() {
    var volume = parseInt(document.getElementById("volumeSetting").value);
    if (isNaN(volume) || volume < 0 || volume > 100) {
        alert("Please enter a valid volume between 0 and 100.");
    } else if (ytplayer) {
        ytplayer.setVolume(volume);
    }
}

function setVideoVolumeInt(volume) {
    if (isNaN(volume) || volume < 0 || volume > 100) {
        alert("Please enter a valid volume between 0 and 100.");
    } else if (ytplayer && ytPlayerEnabled) {
        ytplayer.setVolume(volume);
    } else if (vimeoPlayerEnabled) {
        volume = parseFloat(volume / 100);
        volume = volume.toFixed(3);
        froogaloop.api('setVolume', volume);
    }
}

function playVideo() {
    if (ytplayer && ytPlayerEnabled) {
        if (playerState == 0)
            ytplayer.seekTo(0, true);
        ytplayer.playVideo();
        showHideHUD(prevX + randomNum(), 0, 5000);
    } else if (vimeoPlayerEnabled) {
        froogaloop.api('play');
        playerState = 1;
        showHideHUD(prevX + randomNum(), 0, 5000);
    } else if (html5PlayerEnabled) {
        html5VideoPlayer.play();
        playerState = 1;
        $state.submitOp([{
            p: ['screens', getViewerIndex(viewerName), 'state'],
            od: null,
            oi: playerState
        }]);
        showHideHUD(prevX + randomNum(), 0, 5000);
    }
}

function pauseVideo() {
    if (ytplayer && ytPlayerEnabled) {
        ytplayer.pauseVideo();
        showHideHUD(prevX + randomNum(), 0, 5000);
    } else if (vimeoPlayerEnabled) {
        froogaloop.api('pause');
        playerState = 2;
        showHideHUD(prevX + randomNum(), 0, 5000);
    } else if (html5PlayerEnabled) {
        html5VideoPlayer.pause();
        playerState = 2;
        $state.submitOp([{
            p: ['screens', getViewerIndex(viewerName), 'state'],
            od: null,
            oi: playerState
        }]);
        showHideHUD(prevX + randomNum(), 0, 5000);
    }
}

function muteVideo() {
    if (ytplayer) {
        ytplayer.mute();
    }
}

function unMuteVideo() {
    if (ytplayer) {
        ytplayer.unMute();
    }
}

function seekToVideo(seconds) {
    if (ytplayer && ytPlayerEnabled) {
        ytplayer.seekTo(seconds, true);
    } else if (vimeoPlayerEnabled) {
        froogaloop.api('seekTo', seconds);
    }
}

function updatePlayerInfo() {
    if (ytplayer && ytplayer.getDuration() && ytPlayerEnabled) {
        try {
            tempCurrentTime = parseInt(ytplayer.getCurrentTime().toFixed(0));
            tempDuration = parseInt(ytplayer.getDuration().toFixed(0));
        } catch (e) {};

        if (sessionActive && playerState == 1) {
            $('#new_channel_overlay').fadeOut('slow', function () {
                document.getElementById('new_channel_overlay').style.display = "none";
            });
            seekBarWidth = document.getElementById("timeSlider").clientWidth;
            completedWidth = ((tempCurrentTime * (seekBarWidth - markerWidth)) / tempDuration).toFixed(1);
            fractionLoaded = ytplayer.getVideoLoadedFraction();
            fractionLoadedWidth = ((fractionLoaded * (seekBarWidth)));


            if (prevCurrentTime != tempCurrentTime && getViewerIndex(viewerName) == 0)
                $state.submitOp([{
                    p: ['screens', getViewerIndex(viewerName), 'currentTime'],
                    od: null,
                    oi: tempCurrentTime
                }]);
            if (prevDuration != tempDuration)
                $state.submitOp([{
                    p: ['screens', getViewerIndex(viewerName), 'totalTime'],
                    od: null,
                    oi: tempDuration
                }]);
            if (!timeSeeking) {
                document.getElementById("timeSlider").getElementsByClassName('complete')[0].style.width = completedWidth + "px";
                document.getElementById("timeSlider").getElementsByClassName('marker')[0].style.left = completedWidth + "px";
                currentTimeOutput = secondsToTime(tempCurrentTime);
                document.getElementById("timer_current").innerHTML = currentTimeOutput;
                document.getElementById("fractionLoaded").style.width = fractionLoadedWidth + "px";
            }
            durationTimeOutput = secondsToTime(tempDuration);
            document.getElementById("timer_duration").innerHTML = durationTimeOutput;
            updateVolumeUIFromPlayer();
            prevCurrentTime = tempCurrentTime;
            prevDuration = tempDuration;
            if (isAdUrl(currentUrl) && !adDetailsEnabled) {
                document.getElementById("corner_ad_more_details").style.display = "block";
                adDetailsEnabled = true;
            } else if (!isAdUrl(currentUrl) && adDetailsEnabled) {
                document.getElementById("corner_ad_more_details").style.display = "none";
                adDetailsEnabled = false;
            }
        } else if (sessionActive && playerState == 0) {
            videoEnded();
        }
    } else if (slidesEnabled) {
        $('#new_channel_overlay').fadeOut('slow', function () {
            document.getElementById('new_channel_overlay').style.display = "none";
        });
        tempCurrentTime = getCurrentSlide();
        tempDuration = totalSlides;
        seekBarWidth = document.getElementById("timeSlider").clientWidth;
        completedWidth = ((tempCurrentTime * (seekBarWidth - markerWidth)) / tempDuration).toFixed(1);
        if (!timeSeeking) {
            document.getElementById("timeSlider").getElementsByClassName('complete')[0].style.width = completedWidth + "px";
            document.getElementById("timeSlider").getElementsByClassName('marker')[0].style.left = completedWidth + "px";
            currentTimeOutput = secondsToTime(tempCurrentTime);
            document.getElementById("timer_current").innerHTML = currentTimeOutput;
            durationTimeOutput = secondsToTime(tempDuration);
            document.getElementById("timer_duration").innerHTML = durationTimeOutput;
            fractionLoadedWidth = seekBarWidth;
            document.getElementById("fractionLoaded").style.width = fractionLoadedWidth + "px";
        }
        if (prevCurrentTime != tempCurrentTime)
            $state.submitOp([{
                p: ['screens', getViewerIndex(viewerName), 'currentTime'],
                od: null,
                oi: tempCurrentTime
            }]);
        prevCurrentTime = tempCurrentTime;
    }
    if (flingCount <= 0 && sessionActive && !ytPlayerEnabled) {
        videoEnded();
    }
}

function loadVimeoEvents() {
    iframe = $('#vimeoPlayer')[0], froogaloop = $f(iframe), froogaloop.addEvent('ready', function () {
        consoleLog('Vimeo: ready');
        froogaloop.api('play');
        playerState = 1;
        togglePlayButton();
        if (startVidTime != 0)
            froogaloop.api('seekTo', startVidTime);
        froogaloop.api('setVolume', parseFloat(volume / 100));
        froogaloop.api('setColor', '00828b');
        froogaloop.addEvent('pause', onPause);
        froogaloop.addEvent('play', onPlay);
        froogaloop.addEvent('finish', onFinish);
        froogaloop.addEvent('playProgress', onPlayProgress);
        froogaloop.addEvent('loadProgress', onLoadProgress);
    });
}

function onPlay(id) {
    consoleLog("Vimeo: play");
    playerState = 1;
    togglePlayButton();
    $state.submitOp([{
        p: ['screens', getViewerIndex(viewerName), 'state'],
        od: null,
        oi: playerState
    }]);
    $('#new_channel_overlay').fadeOut('slow', function () {
        document.getElementById('new_channel_overlay').style.display = "none";
    });
}

function onPause(id) {
    consoleLog("Vimeo: paused");
    playerState = 2;
    togglePlayButton();
    $state.submitOp([{
        p: ['screens', getViewerIndex(viewerName), 'state'],
        od: null,
        oi: playerState
    }]);
}

function onFinish(id) {
    consoleLog("Vimeo: finished");
    playerState = 0;
    $state.submitOp([{
        p: ['screens', getViewerIndex(viewerName), 'state'],
        od: null,
        oi: playerState
    }]);
    videoEnded();
}

function onPlayProgress(data, id) {
    tempCurrentTime = parseFloat(data.seconds);
    tempDuration = parseFloat(data.duration);
    if (tempCurrentTime > tempDuration)
        tempCurrentTime = tempDuration;
    seekBarWidth = document.getElementById("timeSlider").clientWidth;
    completedWidth = ((tempCurrentTime * (seekBarWidth - markerWidth)) / tempDuration).toFixed(1);
    if (prevCurrentTime != tempCurrentTime.toFixed(0) && getViewerIndex(viewerName) == 0) {
        $state.submitOp([{
            p: ['screens', getViewerIndex(viewerName), 'currentTime'],
            od: null,
            oi: parseInt(tempCurrentTime.toFixed(0))
        }]);
    }
    if (prevDuration != tempDuration) {
        $state.submitOp([{
            p: ['screens', getViewerIndex(viewerName), 'totalTime'],
            od: null,
            oi: tempDuration
        }]);
        durationTimeOutput = secondsToTime(tempDuration);
        document.getElementById("timer_duration").innerHTML = durationTimeOutput;
    }
    if (!timeSeeking) {
        document.getElementById("timeSlider").getElementsByClassName('complete')[0].style.width = completedWidth + "px";
        document.getElementById("timeSlider").getElementsByClassName('marker')[0].style.left = completedWidth + "px";
        currentTimeOutput = secondsToTime(tempCurrentTime);
        document.getElementById("timer_current").innerHTML = currentTimeOutput;
    }
    prevCurrentTime = tempCurrentTime.toFixed(0);
    prevDuration = tempDuration;
}

function onLoadProgress(data) {
    seekBarWidth = document.getElementById("timeSlider").clientWidth;
    fractionLoaded = data.percent;
    fractionLoadedWidth = ((fractionLoaded * (seekBarWidth)));
    document.getElementById("fractionLoaded").style.width = fractionLoadedWidth + "px";
}

function getUrlParam(param, url) {
    url = url.replace("feature=player_embedded&", "");
    param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
    var regex = new RegExp("[?&]" + param + "=([^&#]*)");
    url = url || decodeURIComponent(window.location.href);
    var match = regex.exec(url);
    return match ? match[1] : "";
}

function loadVideo() {
    url = $state.at('url').get();
    keycode = $state.at('keyCode').get();
    volume = $state.at('volume').get();
    if (url.indexOf("youtube.com") !== -1 && getUrlParam("v", url) != "") {
        url = "http://youtube.com/watch?v=" + getUrlParam("v", url);
    }
    if (currentUrl != url)
        document.getElementById('addressBarTextArea').value = url;
    if (currentUrl != url) {
        video_id = youtube_parser(url);
        vimeo_id = 0;
        if (url.indexOf("vimeo.com") !== -1) {
            vimeo_id = vimeo_parser(url);
        }
        if (video_id != 0) {
            if (ytplayer) {
                startVidTime = 0;
                if (firstVideoLoad) {
                    startVidTime = JSON.stringify($state.at('screens').get()[0].currentTime);
                    firstVideoLoad = false;
                    $('#new_channel_overlay').fadeOut('slow', function () {
                        document.getElementById('new_channel_overlay').style.display = "none";
                    });
                }
                ytplayer.loadVideoById(video_id, startVidTime, "default");
                loadVideoInfo(video_id);
            }
            if (document.getElementById("vimeoPlayer"))
                removeElement("vimeoPlayer");
            if (document.getElementById("html5VideoPlayer"))
                removeElement("html5VideoPlayer");
            iframeEnabled = false;
            slidesEnabled = false;
            ytPlayerEnabled = true;
            vimeoPlayerEnabled = false;
            html5PlayerEnabled = false;
            document.getElementById('iframeContainer').src = "";
            document.getElementById('iframeContainer').style.display = 'none';
            document.getElementById('videoOverLay').style.display = 'block';
            document.getElementById("slideContainer").style.display = 'none';
            document.getElementById("ytplayer").style.display = 'block';
            showHideHUD(prevX + randomNum(), 0, 5000);
            document.getElementById("slide_controls").style.display = 'none';
            document.getElementById("controls_playback_wrapper").style.display = 'inline-block';
        } else if (url.indexOf("slideshare.net") !== -1 && hasFlash) {
            if (firstVideoLoad) {
                startVidTime = parseInt(JSON.stringify($state.at('screens').get()[0].currentTime));
                firstVideoLoad = false;
                $('#new_channel_overlay').fadeOut('slow', function () {
                    document.getElementById('new_channel_overlay').style.display = "none";
                });
            }
            if (document.getElementById("vimeoPlayer"))
                removeElement("vimeoPlayer");
            if (document.getElementById("html5VideoPlayer"))
                removeElement("html5VideoPlayer");
            stopVideo();
            iframeEnabled = false;
            slidesEnabled = true;
            ytPlayerEnabled = false;
            vimeoPlayerEnabled = false;
            html5PlayerEnabled = false;
            loadSlideInfo(url);
            document.getElementById('iframeContainer').src = "";
            document.getElementById('iframeContainer').style.display = 'none';
            document.getElementById('videoOverLay').style.display = 'none';
            document.getElementById("slideContainer").style.display = 'block';
            document.getElementById("ytplayer").style.display = 'none';
            document.getElementById("slide_controls").style.display = 'inline-block';
            document.getElementById("controls_playback_wrapper").style.display = 'none';
        } else if (vimeo_id != 0 && hasFlash) {
            startVidTime = 0;
            if (firstVideoLoad) {
                startVidTime = JSON.stringify($state.at('screens').get()[0].currentTime);
                firstVideoLoad = false;
                $('#new_channel_overlay').fadeOut('slow', function () {
                    document.getElementById('new_channel_overlay').style.display = "none";
                });
            }
            if (document.getElementById("vimeoPlayer"))
                removeElement("vimeoPlayer");
            if (document.getElementById("html5VideoPlayer"))
                removeElement("html5VideoPlayer");
            stopVideo();
            consoleLog(vimeo_id);
            var vimeoEmbedHTML = "<iframe id=\"vimeoPlayer\" src=\"http://player.vimeo.com/video/" + vimeo_id + "?api=1&player_id=vimeoPlayer\" width=\"" + $(window).width() + "\" height=\"" + $(window).height() + "\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>";
            document.getElementById("vimeoPlayerContainer").innerHTML = vimeoEmbedHTML;
            loadVimeoEvents();
            iframeEnabled = false;
            slidesEnabled = false;
            ytPlayerEnabled = false;
            vimeoPlayerEnabled = true;
            html5PlayerEnabled = false;
            loadVimeoInfo(vimeo_id);
            document.getElementById('iframeContainer').src = "";
            document.getElementById('iframeContainer').style.display = 'none';
            document.getElementById('videoOverLay').style.display = 'block';
            document.getElementById("slideContainer").style.display = 'none';
            document.getElementById("ytplayer").style.display = 'none';
            showHideHUD(prevX + randomNum(), 0, 5000);
            document.getElementById("slide_controls").style.display = 'none';
            document.getElementById("controls_playback_wrapper").style.display = 'inline-block';
        } else if (url.indexOf(".mp4") !== -1) {
            stopVideo();
            firstVideoLoad = false;
            $('#new_channel_overlay').fadeOut('slow', function () {
                document.getElementById('new_channel_overlay').style.display = "none";
            });
            if (document.getElementById("vimeoPlayer"))
                removeElement("vimeoPlayer");
            if (document.getElementById("html5VideoPlayer"))
                removeElement("html5VideoPlayer");
            var html5VideoHTML = "<video id=\"html5VideoPlayer\" width=\"" + $(window).width() + "\" height=\"" + $(window).height() + "\"><source src=\"" + url + "\" type=\"video/mp4\">Your browser does not support the HTML5 video tag.</video>";
            document.getElementById("vimeoPlayerContainer").innerHTML = html5VideoHTML;
            html5VideoPlayer = document.getElementById("html5VideoPlayer");
            iframeEnabled = false;
            slidesEnabled = false;
            ytPlayerEnabled = false;
            vimeoPlayerEnabled = false;
            html5PlayerEnabled = true;
            html5VideoPlayer.play();
            playerState = 1;
            showHideHUD(prevX + randomNum(), 0, 5000);
            document.getElementById('iframeContainer').src = "";
            document.getElementById('iframeContainer').style.display = 'none';
            document.getElementById('videoOverLay').style.display = 'block';
            document.getElementById("slideContainer").style.display = 'none';
            document.getElementById("ytplayer").style.display = 'none';
            document.getElementById("video_provider").textContent = "MP4 File";
            document.getElementById("slide_controls").style.display = 'none';
            document.getElementById("controls_playback_wrapper").style.display = 'inline-block';
        } else {
            stopVideo();
            firstVideoLoad = false;
            $('#new_channel_overlay').fadeOut('slow', function () {
                document.getElementById('new_channel_overlay').style.display = "none";
            });
            if (document.getElementById("vimeoPlayer"))
                removeElement("vimeoPlayer");
            if (document.getElementById("html5VideoPlayer"))
                removeElement("html5VideoPlayer");
            iframeEnabled = true;
            slidesEnabled = false;
            ytPlayerEnabled = false;
            vimeoPlayerEnabled = false;
            html5PlayerEnabled = false;
            document.getElementById('iframeContainer').src = url;
            hideTopHUD();
            showBottomHUD();
            document.getElementById('iframeContainer').style.display = 'block';
            document.getElementById('videoOverLay').style.display = 'none';
            document.getElementById("slideContainer").style.display = 'none';
            document.getElementById("ytplayer").style.display = 'none';
            document.getElementById("video_provider").textContent = "";
            document.getElementById("slide_controls").style.display = 'none';
            document.getElementById("controls_playback_wrapper").style.display = 'inline-block';
        }
        document.getElementById("address_fav_icon").src = "https://plus.google.com/_/favicon?domain=" + url;
        currentUrl = url;
        flingCount++;
        consoleLog("Video count: " + flingCount);
    }
    if (prevKeyCode != keycode) {
        if (ytPlayerEnabled || vimeoPlayerEnabled) {
            if (keycode.indexOf("VIDEO_PLAY") !== -1 || keycode.indexOf("VIDEO_NEW") !== -1) {
                playVideo();
            }
            if (keycode.indexOf("VIDEO_PAUSE") !== -1) {
                pauseVideo();
            }
            if (keycode.indexOf("VIDEO_STOP") !== -1) {
                stopVideo();
            }
            if (keycode.indexOf("VIDEO_MUTE") !== -1) {
                muteVideo();
            }
            if (keycode.indexOf("VIDEO_VOLMAX") !== -1) {
                setVideoVolumeInt(100);
            }
            if (keycode.indexOf("VIDEO_VOL_CHANGE") !== -1) {
                completedVolWidth = ((volume * 300) / 100);
                if (completedVolWidth > 300) completedVolWidth = 300;
                document.getElementById("volumeOSDSlider").getElementsByClassName('complete')[0].style.width = completedVolWidth + "px";
                document.getElementById("volumeOSDSlider").getElementsByClassName('marker')[0].style.left = completedVolWidth + "px";
                document.getElementById("volume_percent").innerHTML = volume;
                if (!volOsdShowing) {
                    $("#volume_osd_container").stop().slideToggle(500);
                    volOsdShowing = true;
                }
                clearTimeout(timeOutVolOSD);
                timeOutVolOSD = window.setTimeout(function () {
                    $("#volume_osd_container").stop().slideToggle(500);
                    volOsdShowing = false;
                }, 3000);
            }
            if (keycode.indexOf("VIDEO_SEEKTO") !== -1) {
                if (sessionActive && getViewerCount() > 0) {
                    seekTime = $state.at('seekTo').get();
                    seekToVideo(seekTime);
                }
            }
        }
        if (sessionActive && slidesEnabled) {
            if (keycode.indexOf("SLIDE_NEXT") !== -1) {
                nextSlide();
            }
            if (keycode.indexOf("SLIDE_PREV") !== -1) {
                prevSlide();
            }
            if (keycode.indexOf("SLIDE_FIRST") !== -1) {
                firstSlide();
            }
            if (keycode.indexOf("SLIDE_LAST") !== -1) {
                lastSlide();
            }
            if (keycode.indexOf("SLIDE_SEEKTO") !== -1) {
                seekTime = $state.at('seekTo').get();
                seekTime = parseInt(seekTime).toFixed(0);
                if (seekTime == 0)
                    seekTime = 1;
                jumpToSlide(seekTime);
            }
        }
    }
    prevKeyCode = keycode;
    if (prevVolume != volume) {
        if (!volSeeking) {
            setVideoVolumeInt(volume);
        }
    }
    prevVolume = volume;
}

function jumpToSlide(slideNum) {
    flashSlides.jumpTo(slideNum);
}

function nextSlide() {
    if (getCurrentSlide() < totalSlides)
        flashSlides.next();
}

function prevSlide() {
    flashSlides.previous();
}

function firstSlide() {
    flashSlides.first();
}

function lastSlide() {
    flashSlides.last();
}

function getCurrentSlide() {
    return flashSlides.getCurrentSlide();
}

function onPageLoad() {
    resizePlayer($(window).width(), $(window).height());
    document.getElementById("channel_code_total").textContent = docname;
    document.getElementById("phone_code_hash").textContent = docname;
    document.getElementById("phone_code_url").textContent = "flinger.motelabs.com/#" + docname;
    document.getElementById("hash_input").onkeypress = alphaFilterKeypress;
    $('#addressBar_favicon').hover(function () {
        if (!$("#addressBarTextArea").is(":focus")) {
            $('#addressBarTextArea').css('background-color', 'rgba(33, 33, 33, 0.80)');
        }
    }, function () {
        $('#addressBarTextArea').css('background-color', '');
    });
    document.getElementById('addressBar_favicon').addEventListener('click', function () {
        if (!$("#addressBarTextArea").is(":focus")) {
            $('#addressBarTextArea').focus();
            $('#addressBarTextArea').css('background-color', '');
        }
    });
    textArea = document.getElementById("data");
    textAreaPrevText = textArea.value;
    makeMainResponsive();
    $("#volume_osd_container").stop().slideToggle(1);
    $("#menu_container").stop().slideToggle(1);
    $('#controls_wrapper').hover(function (evt) {
        mouseIsOverControls = true;
    });
    $('#videoOverLay').hover(function (evt) {
        mouseIsOverControls = false;
    });
    $('#slideContainer').hover(function (evt) {
        mouseIsOverControls = false;
        showHideHUD(prevX + randomNum(), 0, 3000);
    });
    document.onmousemove = function (event) {
        showHideHUD(event.pageX, event.pageY, 3000);
    }
    if (docname) {
        consoleLog("Document Hash found, tryin to open " + docname);
        document.getElementById('status_container').textContent = "Connecting to " + docname + "...";
        openDocument(docname);
        connectAniLoop();
        animationInterval = setInterval(function () {
            connectAniLoop();
        }, 5000);
        document.getElementById("connect_button").textContent = "CANCEL";
        document.getElementById("hash_input").blur();
        document.getElementById("hash_input").value = docname;
    } else {
        if (getCookie("flinger_prev_hash"))
            document.getElementById("hash_input").value = getCookie("flinger_prev_hash");
    }
    $(function () {
        $("#timeSlider").on("change", function (e, val) {
            seekBarWidth = document.getElementById("timeSlider").clientWidth;
            if (sessionActive && getViewerCount() > 0) {
                totalTime = JSON.stringify($state.at('screens').get()[0].totalTime);
                completedWidth = document.getElementById("timeSlider").getElementsByClassName('complete')[0].style.width;
                completedWidth = parseFloat(completedWidth).toFixed(3);
                var markerWidth = 0;
                if (completedWidth > (seekBarWidth - markerWidth)) completedWidth = (seekBarWidth - markerWidth);
                seekToTime = parseFloat((totalTime * completedWidth) / (seekBarWidth - markerWidth)).toFixed(3);
            }
            if (slidesEnabled)
                jumpToSlide(parseInt(seekToTime).toFixed(0));
            timeSeeking = true;
        })
        $("#timeSlider").on("changed", function (e, val) {
            if (ytPlayerEnabled || vimeoPlayerEnabled) {
                seekToVideo(seekToTime);
                $state.submitOp([{
                    p: ['seekTo'],
                    od: null,
                    oi: seekToTime
                }]);
                keyCodeToSend = "VIDEO_SEEKTO_" + keyCodeUid();
                $state.submitOp([{
                    p: ['keyCode'],
                    od: null,
                    oi: keyCodeToSend
                }]);
            } else if (slidesEnabled) {
                keyCodeToSend = "SLIDE_SEEKTO_" + keyCodeUid();
                $state.submitOp([{
                    p: ['keyCode'],
                    od: null,
                    oi: keyCodeToSend
                }]);
            }
            window.setTimeout(function () {
                timeSeeking = false;
            }, 500);
        })
        $("#timeSlider").data('value');
    })
    $(function () {
        $("#volumeSlider").on("change", function (e, volumeVal) {
            $state.submitOp([{
                p: ['volume'],
                od: null,
                oi: volumeVal
            }]);
            setVideoVolumeInt(volumeVal);
            toggleVolumeUiIcon(volumeVal);
            volSeeking = true;
        })
        $("#volumeSlider").on("changed", function (e, volumeVal) {
            window.setTimeout(function () {
                volSeeking = false;
            }, 250);
            trackGAEvent('volume', 'changed', volumeVal);
        })
        $("#volumeSlider").data('value');
    })
    $(function () {
        var screenFullElem = null;
        $('#supported').text('Supported: ' + !!screenfull);
        if (!screenfull) {
            return false;
        }
        screenfull.onchange = function (e) {
            if (screenfull.isFullscreen) {
                isFullScreen = true;
            } else {
                isFullScreen = false;
            }
            if (isFullScreen) {
                $("#fullScreenBtn").attr("class", "full_Exit_Btn");
            } else {
                $("#fullScreenBtn").attr("class", "full_Screen_Btn");
            }
            screenFullElem = screenfull.element;
            if (screenFullElem) {
                $('#element').text('Element: ' + screenFullElem.localName + (screenFullElem.id ? '#' + screenFullElem.id : ''));
            }
        };
        screenfull.onchange();
    });
    $('#fullScreenBtn').click(function () {
        screenfull.toggle(document.body);
    })
    $('#fullScrMenuBtn').click(function () {
        screenfull.toggle(document.body);
        $("#menu_container").stop().slideToggle(100);
        menuIsOpen = false;
    })
    $('#makeMainMenuBtn').click(function () {
        var index = getViewerIndex(viewerName);
        if (index != 0) {
            $state.submitOp([{
                p: ['screens', index],
                lm: 0
            }]);
        } else if (index != -1) {
            $state.submitOp([{
                p: ['screens', index],
                lm: 1
            }]);
        }
        $("#menu_container").stop().slideToggle(100);
        menuIsOpen = false;
    })
    $('#feedbackMenuBtn').click(function () {
        showClassicWidget();
        $("#menu_container").stop().slideToggle(100);
        menuIsOpen = false;
    })
    $('#feedbackBtn').click(function () {
        showClassicWidget();
    })
    $('#inviteMenuBtn').click(function () {
        $("#invite_buttons_container").stop().slideToggle(100);
        $("#menu_container").stop().slideToggle(100);
        menuIsOpen = false;
        inviteIsOpen = true;
    })
    $('#powerOffMenuBtn').click(function () {
        $state.close(function (position, text) {
            consoleLog("Document Closed!")
        });
        window.location.href = window.location.href.split('#')[0];
        $("#menu_container").stop().slideToggle(100);
        menuIsOpen = false;
    })
    $('#menuBtn').click(function () {
        $("#menu_container").stop().slideToggle(100);
        if (menuIsOpen)
            menuIsOpen = false;
        else
            menuIsOpen = true; if (inviteIsOpen) {
            $("#invite_buttons_container").stop().slideToggle(100);
            inviteIsOpen = false;
        }
    })
    $('#inviteShareBtn').click(function () {
        $("#invite_buttons_container").stop().slideToggle(100);
        if (menuIsOpen) {
            $("#menu_container").stop().slideToggle(100);
            menuIsOpen = false;
        }
        if (inviteIsOpen)
            inviteIsOpen = false;
        else
            inviteIsOpen = true;
    })
    $('#invite_close_button').click(function () {
        $("#invite_buttons_container").stop().slideToggle(100);
        inviteIsOpen = false;
    })
    document.getElementById('muteVideoBtn').addEventListener('click', toggleMute);
    var buttons = document.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', trackButtonClick);
    }
    var as = document.querySelectorAll('a');
    for (var i = 0; i < as.length; i++) {
        as[i].addEventListener('click', trackButtonClick);
    }
    document.getElementById('hash_input').addEventListener('keydown', pinInputChangeListener);
    document.getElementById('start_new_button').addEventListener('click', startNewChannel);
    document.getElementById('reconnect_button').addEventListener('click', refreshConnection);
    document.getElementById('next_Video_btn').addEventListener('click', playNextInQue);
    document.getElementById('next_Video_btn_2').addEventListener('click', playNextInQue);
    document.getElementById('first_slide_btn').addEventListener('click', firstSlideBtn);
    document.getElementById('prev_slide_btn').addEventListener('click', prevSlideBtn);
    document.getElementById('next_slide_btn').addEventListener('click', nextSlideBtn);
    document.getElementById('last_slide_btn').addEventListener('click', lastSlideBtn);
    document.getElementById('invite_button_fb').addEventListener('click', inviteFacebookButton);
    document.getElementById('invite_button_tw').addEventListener('click', inviteTwitterButton);
    document.getElementById('invite_button_gp').addEventListener('click', inviteGooPlusButton);
};
window.onbeforeunload = function (e) {};

function resizePlayer(width, height) {
    playerObj = document.getElementById("ytplayer");
    playerObj.height = height + 3;
    playerObj.width = width + 2;
    document.getElementById("timeSlider").style.width = (width + 2) + "px";
    if (document.getElementById("slidePlayer")) {
        document.getElementById("slidePlayer").width = width + 2;
        document.getElementById("slidePlayer").height = height + 2 + 36;
    }
    if (document.getElementById("vimeoPlayer")) {
        document.getElementById("vimeoPlayer").width = width;
        document.getElementById("vimeoPlayer").height = height;
    }
    if (document.getElementById("html5VideoPlayer")) {
        document.getElementById("html5VideoPlayer").width = width;
        document.getElementById("html5VideoPlayer").height = height;
    }
};

function flingURI() {
    newUrl = document.getElementById('addressBarTextArea').value;
    if (youtube_parser(newUrl) != 0)
        keyCodeToSend = "VIDEO_NEW_" + keyCodeUid();
    else
        keyCodeToSend = "URL_NEW_" + keyCodeUid(); if (!(newUrl.indexOf('http://') !== -1) && !(newUrl.indexOf('https://') !== -1))
        newUrl = "http://" + newUrl;
    $state.submitOp([{
        p: ['url'],
        od: null,
        oi: newUrl
    }, {
        p: ['keyCode'],
        od: null,
        oi: keyCodeToSend
    }]);
    trackGAEvent('fling', 'sent', newUrl);
};

function flingURIAddress(newUrl) {
    document.getElementById('addressBarTextArea').value = newUrl;
    if (youtube_parser(newUrl) != 0)
        keyCodeToSend = "VIDEO_NEW_" + keyCodeUid();
    else
        keyCodeToSend = "URL_NEW_" + keyCodeUid(); if (!(newUrl.indexOf('http://') !== -1) && !(newUrl.indexOf('https://') !== -1))
        newUrl = "http://" + newUrl;
    $state.submitOp([{
        p: ['url'],
        od: null,
        oi: newUrl
    }, {
        p: ['keyCode'],
        od: null,
        oi: keyCodeToSend
    }]);
    trackGAEvent('fling', 'sent', newUrl);
};

function addressBarTakesFocus() {
    addressBarIsFocused = true;
};

function addressBarLoosesFocus() {
    addressBarIsFocused = false;
    firstMouseUp = true;
};

function addressBarMouseUp() {
    if (firstMouseUp) {
        document.getElementById('addressBarTextArea').select();
        firstMouseUp = false;
    }
};

function videoEnded() {
    if (adDetailsEnabled) {
        document.getElementById("corner_ad_more_details").style.display = "none";
        adDetailsEnabled = false;
    }
    if (flingCount % 7 == 0 && flingCount >= 7 && getViewerIndex(viewerName) == 0) {
        var max = 2;
        var min = 0;
        var random = Math.floor(Math.random() * (max - min + 1)) + min;
        if (random <= 0)
            flingURIAddress("http://www.youtube.com/watch?v=pZt-j9EgMPc");
        else if (random == 1)
            flingURIAddress("http://www.youtube.com/watch?v=niIhlSomTOQ");
        else
            flingURIAddress("http://www.youtube.com/watch?v=mPMtvg0rDAA");
        playerState = 7;
        $state.submitOp([{
            p: ['screens', getViewerIndex(viewerName), 'state'],
            od: null,
            oi: playerState
        }]);
        adDetailsEnabled = true;
    } else {
        var que = null;
        try {
            que = JSON.stringify($state.at('que').get());
        } catch (e) {}
        if (que != null) {
            var queObject = JSON.parse(que);
            if (queObject.length >= 1) {
                document.getElementById('addressBarTextArea').value = queObject[0].url;
                removeFromQue(queObject[0].time);
                flingURIAddress(queObject[0].url);
                playerState = 6;
                $state.submitOp([{
                    p: ['screens', getViewerIndex(viewerName), 'state'],
                    od: null,
                    oi: playerState
                }]);
            } else {
                $('#new_channel_overlay').fadeIn('slow', function () {});
                showHideHUD(prevX + randomNum(), 0, 3000);
            }
        } else {
            $('#new_channel_overlay').fadeIn('slow', function () {});
            showHideHUD(prevX + randomNum(), 0, 3000);
        }
    }
};
var queCount;
var removeFromQue = function (timeStamp) {
    var queObject;
    try {
        queObject = $state.at('que').get();
    } catch (e) {
        consoleLog("Warning: Que object not found.");
    }
    queCount = queObject.length;
    for (var i = 0; i < queObject.length; i++) {
        if (queObject[i].time == timeStamp) {
            $state.submitOp([{
                p: ['que', i],
                ld: {
                    url: queObject[i].url,
                    time: queObject[i].time,
                    username: queObject[i].username
                }
            }]);
            break;
        }
    }
}

function isPrime(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    if (n == leastFactor(n)) return true;
    return false;
}

function leastFactor(n) {
    if (isNaN(n) || !isFinite(n)) return NaN;
    if (n == 0) return 0;
    if (n % 1 || n * n < 2) return 1;
    if (n % 2 == 0) return 2;
    if (n % 3 == 0) return 3;
    if (n % 5 == 0) return 5;
    var m = Math.sqrt(n);
    for (var i = 7; i <= m; i += 30) {
        if (n % i == 0) return i;
        if (n % (i + 4) == 0) return i + 4;
        if (n % (i + 6) == 0) return i + 6;
        if (n % (i + 10) == 0) return i + 10;
        if (n % (i + 12) == 0) return i + 12;
        if (n % (i + 16) == 0) return i + 16;
        if (n % (i + 22) == 0) return i + 22;
        if (n % (i + 24) == 0) return i + 24;
    }
    return n;
}

function is2ndTwinPrime(current, last) {
    if (!isPrime(current))
        return false;
    if (current - last <= 2)
        return true;
    return false;
}

function playNextInQue() {
    if (document.getElementsByClassName('up_next_que_item').length > 0) {
        var url = document.getElementsByClassName('up_next_que_item')[0].getElementsByClassName('up_next_que_item_url')[0].innerHTML;
        var timeStamp = document.getElementsByClassName('up_next_que_item')[0].getAttribute("timeStamp");
        flingURIAddress(url);
        queCount--;
        removeFromQue(timeStamp);
    } else {
        consoleLog("Nothing was found in the que.");
    }
    var que = null;
    try {
        que = JSON.stringify($state.at('que').get());
    } catch (e) {}
    if (que != null) {
        var queObject = JSON.parse(que);
        if (queObject.length >= 1) {
            document.getElementById('addressBarTextArea').value = queObject[0].url;
            removeFromQue(queObject[0].time);
            flingURIAddress(queObject[0].url);
            playerState = 6;
            $state.submitOp([{
                p: ['screens', getViewerIndex(viewerName), 'state'],
                od: null,
                oi: playerState
            }]);
        } else {
            consoleLog("Nothing found up next.");
            addToChatUI("The que is empty. Fling something!", "_Flinger", "800");
        }
    } else {
        consoleLog("Nothing found up next.");
        addToChatUI("The que is empty. Fling something!", "_Flinger", "800");
    }
}

function isAdUrl(url) {
    if (url.indexOf("youtube.com/watch?v=pZt-j9EgMPc") !== -1)
        return true;
    else if (url.indexOf("youtube.com/watch?v=niIhlSomTOQ") !== -1)
        return true;
    else if (url.indexOf("youtube.com/watch?v=mPMtvg0rDAA") !== -1)
        return true;
    else
        return false;
}

function hideBottomHUD() {
    var bodyWidth = $(window).width();
    if (bodyWidth < 1040) {
        $('#controls_wrapper').stop().animate({
            bottom: '-110px'
        }, 250);
    } else {
        $('#controls_wrapper').stop().animate({
            bottom: '-110px'
        }, 250);
    }
    $('#timeSlider_holder').stop().animate({
        bottom: '-16px'
    }, 250);
    $('#cornerLogo').stop().animate({
        bottom: '15px'
    }, 250);
    bottomControlsOpen = false;
};

function showBottomHUD() {
    var bodyWidth = $(window).width();
    if (!iframeEnabled) {
        $('#timeSlider_holder').stop().animate({
            bottom: '0px'
        }, 250);
        $('#controls_wrapper').stop().animate({
            bottom: '20px'
        }, 250);
        if (bodyWidth < 1040) {
            $('#cornerLogo').stop().animate({
                bottom: '120px'
            }, 250);
        } else {
            $('#cornerLogo').stop().animate({
                bottom: '75px'
            }, 250);
        }
        document.getElementById("menu_container").style.bottom = "65px";
    } else {
        $('#timeSlider_holder').stop().animate({
            bottom: '-20px'
        }, 250);
        $('#controls_wrapper').stop().animate({
            bottom: '0px'
        }, 250);
        if (bodyWidth < 1040) {
            $('#cornerLogo').stop().animate({
                bottom: '138px'
            }, 250);
        } else {
            $('#cornerLogo').stop().animate({
                bottom: '90px'
            }, 250);
        }
        document.getElementById("menu_container").style.bottom = "45px";
    }
    bottomControlsOpen = true;
};

function hideTopHUD() {
    $('#hud_top_container').stop().animate({
        top: '-160px'
    }, 250);
    topControlsOpen = false;
};

function showTopHUD() {
    $('#hud_top_container').stop().animate({
        top: '0px'
    }, 250);
    topControlsOpen = true;
};

function showHideHUD(pageX, pageY, seconds) {
    currentX = pageX;
    currentY = pageY;
    if (currentX != prevX || currentY != prevY) {
        mouseIsMoving = true;
    } else {
        mouseIsMoving = false;
    }
    clearTimeout(timeout);
    if (mouseIsMoving && (!topControlsOpen || !bottomControlsOpen)) {
        if (!iframeEnabled && !topControlsOpen) {
            showTopHUD();
        }
        showBottomHUD();
        document.getElementById("videoOverLay").style.cursor = "default";
    }
    timeout = setTimeout(function () {
        currentX = pageX;
        currentY = pageY;
        if (currentX != prevX || currentY != prevY) {
            mouseIsMoving = true;
        } else {
            mouseIsMoving = false;
        }
        if (!addressBarIsFocused && !mouseIsOverControls && !mouseIsMoving && (playerState == 1 || iframeEnabled || slidesEnabled)) {
            hideTopHUD();
            if (!iframeEnabled) {
                hideBottomHUD();
            }
            document.getElementById("videoOverLay").style.cursor = "none";
            if (menuIsOpen) {
                $("#menu_container").stop().slideToggle(100);
                menuIsOpen = false;
            }
        }
        clearTimeout(timeout);
    }, seconds);
    prevX = pageX;
    prevY = pageY;
}

function uid() {
    return ("" + (Math.random() * Math.pow(36, 6) << 0).toString(36)).substr(-6)
};

function keyCodeUid() {
    return ("" + (Math.random() * Math.pow(36, 8) << 0)).substr(-8);
};

function viewerUid() {
    return ("" + (Math.random() * Math.pow(36, 4) << 0)).substr(-4);
};

function randomNum() {
    return parseInt(("" + (Math.random() * Math.pow(36, 3) << 0)).substr(-3));
};

function getRemoteCount() {
    remoteCount = 0;
    remoteListCounted = false;
    try {
        remotesObject = $state.at('remotes').get();
    } catch (e) {
        consoleLog("Warning: Remotes object not found.");
    }
    remoteCount = remotesObject.length;
    document.getElementById("remote_count_total").innerHTML = remoteCount;
    return remoteCount;
};

function getRemoteIndex(name) {
    foundIndex = -1;
    var remotes = getRemoteCount();
    for (var i = 0; i < remotes; i++) {
        try {
            if (JSON.stringify($state.at('remotes').get()[i].name).indexOf("\"" + name + "\"") !== -1) {
                foundIndex = i;
                break;
            }
        } catch (e) {}
    }
    return foundIndex;
};

function checkRemoveInactiveScreensRemotes() {
    consoleLog("Checking and removing inactive screens. " + getViewerCount());
    var checkStatus = $state.at('checking').get();
    if (checkStatus >= 1) {
        isChecking = true;
        checkStatus--;
        $state.submitOp([{
            p: ['checking'],
            od: checkStatus,
            oi: checkStatus
        }]);
    } else if (checkStatus == 0 || checkStatus == null)
        isChecking = false;
    if (getViewerCount() > 0 && !isChecking) {
        var tempCnt = getViewerCount() + 1;
        $state.submitOp([{
            p: ['checking'],
            od: tempCnt,
            oi: tempCnt
        }]);
        viewerCount = 0, listCounted = false;
        var currentIndex = getViewerIndex(viewerName);
        for (var x = 0; x < getViewerCount(); x++) {
            try {
                if (x != currentIndex)
                    $state.submitOp([{
                        p: ['screens', x, 'active'],
                        od: 0,
                        oi: 0
                    }]);
            } catch (e) {}
        }
        if (getRemoteCount() > 0) {
            remoteCount = 0, remoteListCounted = false;
            var remotes = getRemoteCount();
            for (var x = 0; x < remotes; x++) {
                try {
                    $state.submitOp([{
                        p: ['remotes', x, 'active'],
                        od: 0,
                        oi: 0
                    }]);
                } catch (e) {}
            }
        }
        activityCheckTimer = setTimeout(function () {
            for (var i = 0; i < getViewerCount(); i++) {
                try {
                    var currentScreenAct = JSON.stringify($state.at('screens').get()[i].active);
                    if (currentScreenAct == 0 && (i != currentIndex)) {
                        $state.submitOp([{
                            p: ['screens', i],
                            ld: null
                        }]);
                        consoleLog("Removing Screen Index: " + i);
                        i--;
                    }
                    if ($state.at('screens').get()[i].active == null) {
                        consoleLog("Poop!! null error detected  " + currentScreenAct);
                    }
                } catch (e) {}
            }
            for (var i = 0; i < getRemoteCount() > 0; i++) {
                try {
                    if (JSON.stringify($state.at('remotes').get()[i].active) == 0) {
                        $state.submitOp([{
                            p: ['remotes', i],
                            ld: null
                        }]);
                        consoleLog("Removing Remote Index: " + i);
                        i--;
                    }
                } catch (e) {}
            }
            window.clearInterval(checkingProgressTimer);
            $state.submitOp([{
                p: ['checking'],
                od: 0,
                oi: 0
            }]);
        }, 10000);
    }
    consoleLog("Checking and removing inactive remotes. " + getRemoteCount());
};

function playPauseVideo() {
    if (ytPlayerEnabled || vimeoPlayerEnabled || html5PlayerEnabled) {
        if (playerState == 1) {
            pauseVideo();
            keyCodeToSend = "VIDEO_PAUSE_" + keyCodeUid();
        } else {
            playVideo();
            keyCodeToSend = "VIDEO_PLAY_" + keyCodeUid();
        }
        $state.submitOp([{
            p: ['keyCode'],
            od: null,
            oi: keyCodeToSend
        }]);
    } else if (slidesEnabled) {
        nextSlide();
    }
}

function togglePlayButton() {
    if (prevPlayerState != playerState) {
        if (playerState == 1 || playerState == 3) {
            $("#playVideoBtn").attr("class", "pause_Video_Btn");
        } else {
            $("#playVideoBtn").attr("class", "play_Video_Btn");
        }
    }
    prevPlayerState = playerState;
}

function getViewerCount() {
    viewerCount = 0;
    listCounted = false;
    try {
        screensObject = $state.at('screens').get();
    } catch (e) {
        consoleLog("Warning: Screens object not found.");
    }
    viewerCount = screensObject.length;
    document.getElementById("viewer_count_total").innerHTML = viewerCount;
    return viewerCount;
};

function getActiveViewerCount() {
    var activeViewerCount = 0;
    try {
        screensObject = $state.at('screens').get();
    } catch (e) {
        consoleLog("Warning: Screens object not found.");
    }
    for (var i = 0; i < getViewerCount(); i++) {
        try {
            var currentScreenAct = JSON.stringify($state.at('screens').get()[i].active);
            if (currentScreenAct == 1) {
                activeViewerCount++;
            }
        } catch (e) {}
    }
    return activeViewerCount;
};

function getViewerIndex(name) {
    foundIndex = -1;
    var viewers = getViewerCount();
    for (var i = 0; i < viewers; i++) {
        try {
            if (JSON.stringify($state.at('screens').get()[i].name).indexOf("\"" + name + "\"") !== -1) {
                foundIndex = i;
                break;
            }
        } catch (e) {}
    }
    if (foundIndex == -1) {
        try {
            $state.submitOp([{
                p: ['screens', viewers],
                li: {
                    name: name,
                    state: playerState,
                    currentTime: 0,
                    totalTime: totalTime,
                    active: 1
                }
            }]);
        } catch (e) {
            consoleLog("No screens found yet.");
        }
        consoleLog(viewerName + " was re-added to the list of viewers.  " + viewers);
        return viewers;
    }
    return foundIndex;
};

function openDocument(docName) {
    consoleLog("Connecting to " + docName);
    if (docname == "0debug") {
        document.getElementById('data').style.zIndex = 5;
        document.getElementById('data').style.opacity = 1;
    } else {
        document.getElementById('data').style.zIndex = -1;
        document.getElementById('data').style.opacity = 0;
    }
    isChecking = true;
    var serverUrl = window.location.protocol + '//' + window.location.host;
    if (window.location.host.indexOf('localhost') === -1)  {
        serverUrl = window.location.protocol + '//flinger-co.herokuapp.com';
    }
    sharejs.open(docname, 'json', serverUrl + '/channel', function (error, shareDocument) {
        $state = shareDocument;
        shareDocument.on('change', function (op) {
            $('#data').text(JSON.stringify($state.snapshot));
            stateUpdated();
        });
        shareDocument.on('closed', function () {
            consoleLog("Connection Lost or Document Closed.");
            sessionActive = false;
            stopVideo();
            document.getElementById('timeoutMessage').style.display = 'block';
        });
        viewerName = "Viewer" + viewerUid();
        consoleLog("Screen name set to: " + viewerName);
        if (shareDocument.created) {
            $state.submitOp([{
                p: [],
                od: null,
                oi: {
                    url: "",
                    keyCode: "",
                    volume: 100,
                    seekTo: 0,
                    checking: 0,
                    screens: [{
                        name: viewerName,
                        state: 0,
                        currentTime: 0,
                        totalTime: 0,
                        active: 1
                    }],
                    remotes: [],
                    que: [],
                    chat: []
                }
            }]);
            consoleLog("Document" + " " + docName + " " + "Created!");
        } else {
            $state.submitOp([{
                p: ['screens', getViewerCount()],
                li: {
                    name: viewerName,
                    state: 0,
                    currentTime: 0,
                    totalTime: 0,
                    active: 1
                }
            }]);
            consoleLog("Document" + " " + docName + " " + "Opened!");
        }
        if (error) {
            data.content = error;
            consoleLog("Connecting error " + error);
        } else {
            sessionActive = true;
            $('#data').text(JSON.stringify($state.snapshot));
            checkOthersForActivityTimer = setInterval(function () {
                checkRemoveInactiveScreensRemotes();
            }, 45000);
            stateUpdated();
            consoleLog("Connected to " + docName);
            trackGAEvent("successful", "connect", docName);
            document.getElementById("status_container").textContent = "Successfully connected to " + docname + "!";
            document.getElementById('invite_buttons_url').innerHTML = '<a href="https://flinger.motelabs.com/#' + docname + '" target="_blank">flinger.motelabs.com/#' + docname + '</a>';
            document.getElementById('invite_buttons_url2').innerHTML = '<a href="https://remote.flinger.motelabs.com/#' + docname + '" target="_blank">remote.flinger.motelabs.com/#' + docname + '</a>';
            prevConnection = true;
            prevHasTag = docName;
            $('#splash_container').fadeOut('slow', function () {
                document.getElementById('splash_container').style.display = "none";
            });
            checkRemoveInactiveScreensRemotes();
            setCookie("flinger_prev_hash", docName, 365);
            if (flingUrlFound) flingURIAddress(flingUrl);
        }
    });
};

function toggleVolumeUiIcon(val) {
    if (val >= 66) {
        volumeMute = false;
        $("#muteVideoBtn").attr("class", "volmax_Video_Btn");
    } else if (val < 66 && val >= 33) {
        $("#muteVideoBtn").attr("class", "volmid_Video_Btn");
    } else if (val < 33 && val > 0) {
        $("#muteVideoBtn").attr("class", "vollow_Video_Btn");
    } else {
        volumeMute = true;
        $("#muteVideoBtn").attr("class", "mute_Video_Btn");
    }
}

function toggleMute() {
    currentVolume = ytplayer.getVolume();
    if (volumeMute) {
        currentVolume = prevMuteVolume;
        $state.submitOp([{
            p: ['volume'],
            od: null,
            oi: currentVolume
        }]);
        if (!volSeeking)
            setVideoVolumeInt(currentVolume);
        completedVolWidth = ((currentVolume * 130) / 100);
        if (completedVolWidth > 130) completedVolWidth = 130;
        document.getElementsByClassName('complete')[0].style.width = completedVolWidth + "px";
        document.getElementsByClassName('marker')[0].style.left = completedVolWidth + "px";
        toggleVolumeUiIcon(currentVolume);
        volumeMute = false;
    } else {
        prevMuteVolume = currentVolume;
        currentVolume = 0;
        $state.submitOp([{
            p: ['volume'],
            od: null,
            oi: 0
        }]);
        if (!volSeeking)
            setVideoVolumeInt(currentVolume);
        document.getElementsByClassName('complete')[0].style.width = "0px";
        document.getElementsByClassName('marker')[0].style.left = "0px";
        toggleVolumeUiIcon(0);
        volumeMute = true;
    }
}

function updateVolumeUIFromPlayer() {
    if (ytPlayerEnabled)
        tempUpdateVolume = ytplayer.getVolume();
    else if (vimeoPlayerEnabled) {
        froogaloop.api('getVolume', function (value, player_id) {
            tempUpdateVolume = value * 100;
            tempUpdateVolume = parseInt(tempUpdateVolume);
        });
    }
    if (prevUpdateVolume != tempUpdateVolume) {
        if (!volSeeking) {
            completedVolWidth = ((tempUpdateVolume * 130) / 100);
            if (completedVolWidth > 130) completedVolWidth = 130;
            document.getElementById("volumeSlider").getElementsByClassName('complete')[0].style.width = completedVolWidth + "px";
            document.getElementById("volumeSlider").getElementsByClassName('marker')[0].style.left = completedVolWidth + "px";
            prevUpdateVolume = tempUpdateVolume;
        }
    }
    toggleVolumeUiIcon(tempUpdateVolume);
}

function stateUpdated() {
    if (textAreaPrevText != textArea.value) {
        loadVideo();
        textAreaPrevText = textArea.value;
    }
    updateVolumeUIFromPlayer();
    var currentScreenAct = JSON.stringify($state.at('screens').get()[getViewerIndex(viewerName)].active);
    if (currentScreenAct == 0)
        $state.submitOp([{
            p: ['screens', getViewerIndex(viewerName), 'active'],
            od: 1,
            oi: 1
        }]);
    if (getViewerIndex(viewerName) == 0) {
        $('#makeMainMenuBtn').removeClass('makeMainMenuBtn');
        $('#makeMainMenuBtn').addClass('makeMainMenuBtn_checked');
        isMainScreen = true;
    } else {
        $('#makeMainMenuBtn').removeClass('makeMainMenuBtn_checked');
        $('#makeMainMenuBtn').addClass('makeMainMenuBtn');
        isMainScreen = false;
    }

    newPlayerState = JSON.stringify($state.at('screens').get()[getViewerIndex(viewerName)].state);

    if (playerState != newPlayerState) {
        playerState = newPlayerState;
        togglePlayButton();
    }
    getRemoteCount();
    try {
        chatLog = JSON.stringify($state.at('chat').get());
    } catch (e) {
        consoleLog("Couldn't get chat log!!");
    }
    if (prevChatLog != chatLog) {
        if (prevChatLog.length > chatLog.length) {
            $('#chat_conversation_container').empty();
            chatLogCount = 0;
        }
        var chatObject = JSON.parse(chatLog);
        for (chatLogCount; chatLogCount < chatObject.length; chatLogCount++) {
            addToChatUI(chatObject[chatLogCount].message, chatObject[chatLogCount].username, chatLogCount);
        }
        justJoinedChat = false;
    }
    prevChatLog = chatLog;
}

function addToChatUI(message, username, count) {
    var isQueueAlert = false,
        isFlingAlert = false;
    if (username.indexOf("ALERT_QUEUE_") !== -1) isQueueAlert = true;
    if (username.indexOf("ALERT_FLING_") !== -1) isFlingAlert = true;
    username = username.replace("ALERT_QUEUE_", "");
    username = username.replace("ALERT_FLING_", "");
    var nameStyle = "chat_entry_user";
    if (username == "_Flinger") {
        nameStyle = "chat_entry_user_system";
        username = "Flinger.co";
    }
    var alertType = "";
    if (isQueueAlert) nameStyle = "chat_entry_user_queued";
    if (isFlingAlert) nameStyle = "chat_entry_user_flung";
    var $cont = $('#chat_conversation_container');
    if (!justJoinedChat)
        $cont.append('<div class="chat_entry" id="chat_entry_' + count + '"><div class="' + nameStyle + '">' + username + ' </div>  ' + message + '</div>');
    toBottom("chat_conversation_container");
    setTimeout(function () {
        $('#chat_entry_' + count).fadeOut('slow', function () {
            removeElement("chat_entry_" + count);
        });
    }, 10000);
}

function toBottom(id) {
    document.getElementById(id).scrollTop = document.getElementById(id).scrollHeight
}

function loadVideoInfo(videoId) {
    if (document.getElementById("videoData"))
        removeElement("videoData");
    var gdata = document.createElement("script");
    gdata.src = "https://www.googleapis.com/youtube/v3/videos?id=" + videoId + "&key=" + YT_API_KEY + "&part=snippet,statistics&callback=storeVideoInfoTitle";
    gdata.id = "videoData";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(gdata);
};

function storeVideoInfoTitle(info) {
    if (!(info && info.items && info.items.length)) return;

    var result = info.items[0];
    var snippet = result.snippet;
    var statistics = result.statistics;

    var uploadedDate = snippet.publishedAt;
    uploadedDate = uploadedDate.substring(0, 10).replace(/-/g, "/");
    document.getElementById("video_uploaded").innerHTML = uploadedDate;
    document.getElementById("video_title").innerHTML = snippet.title;
    var videoViewCount = statistics.viewCount + "";
    videoViewCount = videoViewCount.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    document.getElementById("video_views").innerHTML = videoViewCount + " views";
    document.getElementById("video_provider").innerHTML = "YouTube";
    document.getElementById("video_uploader").innerHTML = snippet.channelTitle;
    if (document.getElementById("channelData"))
        removeElement("channelData");
    var gdata2 = document.createElement("script");
    gdata2.src = "https://www.googleapis.com/youtube/v3/channels?id=" + snippet.channelId + "&key=" + YT_API_KEY + "&part=snippet&callback=storeVidInfoChannelThumb";
    gdata2.id = "channelData";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(gdata2);
};

function storeVidInfoChannelThumb(info) {
    if (!(info && info.items && info.items.length)) return;

    var result = info.items[0];
    var snippet = result.snippet;

    document.getElementById("video_thumb_image").src = snippet.thumbnails.default.url;
};

function loadSlideInfo(slideUrl) {
    if (document.getElementById("slideData"))
        removeElement("slideData");
    var ssdata = document.createElement("script");
    ssdata.src = "https://www.slideshare.net/api/oembed/2?url=" + slideUrl + "&format=jsonp&callback=storeSlideInfo";
    ssdata.id = "slideData";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(ssdata);
};

function storeSlideInfo(info) {
    var ssEmbedHTML = info.slide_image_baseurl;
    ssEmbedHTML = ssEmbedHTML.replace("//image.slidesharecdn.com/", "");
    ssEmbedHTML = ssEmbedHTML.replace("/95/slide-", "");
    flashvars = {
        doc: ssEmbedHTML
    };
    swfobject.embedSWF("http://static.slidesharecdn.com/swf/ssplayer2.swf", "slidePlayer", $(window).width() + 2, $(window).height() + 2 + 36, "8", null, flashvars, params, atts);
    flashSlides = document.getElementById("slidePlayer");
    showHideHUD(prevX + randomNum(), 0, 5000);
    document.getElementById("video_thumb_image").src = "http:" + info.thumbnail;
    document.getElementById("video_uploader").innerHTML = info.author_name;
    document.getElementById("video_uploaded").innerHTML = info.provider_name;
    document.getElementById("video_title").innerHTML = info.title;
    document.getElementById("video_views").innerHTML = info.total_slides + " slides";
    document.getElementById("video_provider").innerHTML = "SlideShare";
    totalSlides = info.total_slides;
    tempCurrentTime = 1;
    if (prevDuration != totalSlides)
        $state.submitOp([{
            p: ['screens', getViewerIndex(viewerName), 'totalTime'],
            od: null,
            oi: totalSlides
        }]);
    if (prevCurrentTime != tempCurrentTime)
        $state.submitOp([{
            p: ['screens', getViewerIndex(viewerName), 'currentTime'],
            od: null,
            oi: tempCurrentTime
        }]);
    prevDuration = totalSlides;
    prevCurrentTime = tempCurrentTime;
    window.setTimeout(function () {
        jumpToSlide(startVidTime);
        $state.submitOp([{
            p: ['screens', getViewerIndex(viewerName), 'currentTime'],
            od: null,
            oi: startVidTime
        }]);
    }, 500);
}

function loadVimeoInfo(vimeo_id) {
    if (document.getElementById("vimeoData"))
        removeElement("vimeoData");
    var vmdata = document.createElement("script");
    vmdata.src = "https://vimeo.com/api/v2/video/" + vimeo_id + ".json?callback=storeVimeoInfo";
    consoleLog("https://vimeo.com/api/v2/video/" + vimeo_id + ".json?callback=storeVimeoInfo");
    vmdata.id = "vimeoData";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(vmdata);
};

function storeVimeoInfo(info) {
    consoleLog(info[0].title);
    document.getElementById("video_title").innerHTML = info[0].title;
    document.getElementById("video_thumb_image").src = info[0].thumbnail_medium;
    document.getElementById("video_uploader").innerHTML = info[0].user_name;
    var uploadedDate = info[0].upload_date;
    uploadedDate = uploadedDate.substring(0, 10).replace(/-/g, "/");
    document.getElementById("video_uploaded").innerHTML = uploadedDate;
    var videoViewCount = info[0].stats_number_of_plays + "";
    videoViewCount = videoViewCount.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    document.getElementById("video_views").innerHTML = videoViewCount + " plays";
    document.getElementById("video_provider").innerHTML = "Vimeo";
}

function secondsToTime(string) {
    var totalSeconds = parseInt(string);
    if (!slidesEnabled) {
        if (isNaN(totalSeconds)) {
            totalSeconds = 0;
        }
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = totalSeconds % 60;
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes < 60) {
            return minutes + ":" + seconds;
        } else {
            var hours = Math.floor(minutes / 60);
            minutes = minutes % 60;
            if (minutes < 10 && hours > 0) {
                minutes = "0" + minutes;
            }
            return hours + ":" + minutes + ":" + seconds;
        }
    } else {
        return totalSeconds;
    }
}

function removeElement(id) {
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
}

function nextSlideBtn() {
    keyCodeToSend = "SLIDE_NEXT" + keyCodeUid();
    $state.submitOp([{
        p: ['keyCode'],
        od: null,
        oi: keyCodeToSend
    }]);
}

function prevSlideBtn() {
    keyCodeToSend = "SLIDE_PREV" + keyCodeUid();
    $state.submitOp([{
        p: ['keyCode'],
        od: null,
        oi: keyCodeToSend
    }]);
}

function firstSlideBtn() {
    keyCodeToSend = "SLIDE_FIRST" + keyCodeUid();
    $state.submitOp([{
        p: ['keyCode'],
        od: null,
        oi: keyCodeToSend
    }]);
}

function lastSlideBtn() {
    keyCodeToSend = "SLIDE_LAST" + keyCodeUid();
    $state.submitOp([{
        p: ['keyCode'],
        od: null,
        oi: keyCodeToSend
    }]);
}

function inviteFacebookButton() {
    open('http://www.facebook.com/share.php?u=https://flinger.motelabs.com/%23' + docname, 'facebook', 'toolbar=no,width=700,height=300');
}

function inviteTwitterButton() {
    open('http://twitter.com/share?text=Join%20Flinger%20Channel%20%23' + docname + '%20to%20watch%20and%20Fling%20videos%20with%20me%20%40flingerco&url=https://flinger.motelabs.com/%23' + docname, 'twitter', 'toolbar=no,width=700,height=300');
}

function inviteGooPlusButton() {
    open('https://plus.google.com/share?url=https://flinger.motelabs.com/%23' + docname, 'g-plus', 'toolbar=no,width=500,height=500');
}
UserVoice = window.UserVoice || [];

function showClassicWidget() {
    UserVoice.push(['showLightbox', 'classic_widget', {
        mode: 'full',
        primary_color: '#e66054',
        link_color: '#e66054',
        default_mode: 'feedback',
        forum_id: 206987
    }]);
}

function toggleMainScrUI() {
    if (isMainScreen) {
        $('#makeMainMenuBtn').removeClass('makeMainMenuBtn_checked');
        $('#makeMainMenuBtn').addClass('makeMainMenuBtn');
        isMainScreen = false;
    } else {
        $('#makeMainMenuBtn').removeClass('makeMainMenuBtn');
        $('#makeMainMenuBtn').addClass('makeMainMenuBtn_checked');
        isMainScreen = true;
    }
}

function pinInputChangeListener() {
    if (event.keyCode == 13) document.getElementById('connect_button').click();
}

function startNewChannel() {
    docname = uid();
    document.location.hash = docname;
    consoleLog("Opening new random document Hash " + docname);
    openDocument(docname);
    connectAniLoop();
    animationInterval = setInterval(function () {
        connectAniLoop();
    }, 5000);
    document.getElementById("connect_button").textContent = "CANCEL";
    document.getElementById("hash_input").value = docname;
    document.getElementById('status_container').style.color = "#fff";
    document.getElementById('status_container').textContent = "Connecting to " + docname + "...";
    document.getElementById("phone_code_hash").textContent = docname;
    document.getElementById("phone_code_url").textContent = "flinger.motelabs.com/#" + docname;
    document.getElementById("channel_code_total").textContent = docname;
}

function connectToHash() {
    docname = document.getElementById("hash_input").value;
    if (docname.length != 6) {
        document.getElementById('status_container').textContent = "6 digit alphanumeric code only";
        setTimeout(function () {
            document.getElementById('status_container').textContent = "START A CHANNEL";
        }, 5000)
    } else {
        connectAniLoop();
        animationInterval = setInterval(function () {
            connectAniLoop();
        }, 5000);
        document.getElementById("connect_button").textContent = "CANCEL";
        document.getElementById('status_container').style.color = "#fff";
        document.getElementById('status_container').textContent = "Connecting to " + docname + "...";
        document.location.hash = docname;
        consoleLog("Opening user entered existing document Hash " + docname);
        openDocument(docname);
        document.getElementById("phone_code_hash").textContent = docname;
        document.getElementById("phone_code_url").textContent = "flinger.motelabs.com/#" + docname;
        document.getElementById("channel_code_total").textContent = docname;
    }
}

function disconnectFromHash() {
    sessionActive = false;
    consoleLog("Disconnecting from " + prevHasTag);
    consoleLog("Disconnected from " + prevHasTag);
    document.location.hash = "";
    var s = document.location.href;
    var n = s.indexOf('?');
    s = s.substring(0, n != -1 ? n : s.length);
    n = s.indexOf('#');
    s = s.substring(0, n != -1 ? n : s.length);
    window.open(s, "_self");
    prevConnection = false;
    document.getElementById("hash_input").value = "";
    localStorage.removeItem('saved-hash-id');
    window.location.href = window.location.href.split('#')[0];
};

function refreshConnection() {
    document.location.reload(true);
}

function trackGAEvent(id, action, label) {
    _gaq.push(['_trackEvent', id, action, label]);
};

function trackButtonClick(e) {
    trackGAEvent('button', 'clicked', e.target.id);
};