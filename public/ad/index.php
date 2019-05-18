<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Flinger Remote Ad1 Space</title>
        <meta name="robots" content="noindex" />
        <link rel="stylesheet" type="text/css" href="../style_ad.css">

        <script type="text/javascript">
             
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-39500794-7']);
            _gaq.push(['_trackPageview']);
            (function () {
                var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                ga.src = 'https://ssl.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();

            var adCycleTime = 50000;

            function getUrlParam(param, url) {
                url = url.replace("feature=player_embedded&", "");
                param = param.replace(/([\[\](){}*?+^$.\\|])/g, "\\$1");
                var regex = new RegExp("[?&]" + param + "=([^&#]*)");
                url = url || decodeURIComponent(window.location.href);
                var match = regex.exec(url);
                return match ? match[1] : "";
            }
            var flingUrl = getUrlParam("fling_url", document.location.href);
            var flingUrlFound = false;
            if (flingUrl != "") {
                console.log("Fling URL found in href: " + flingUrl);
                flingUrlFound = true;
            }

            var min = 0, max = 0, random = 0;
            //This code can be run both in the head and body.

            //Global variable that stores advertising banners.
            var ads = new Array();

            //Function that starts when the page finished loading.
            window.onload = function () {
                //Adds information about the new banners.
                ads.push(["https://zm4c63ce7.ting.com/", "http://flinger.co/ad/ad_ting_3.png", "Ting: Mobile That Make Sense", "ad_ting_3"]);
                ads.push(["http://secure.hostgator.com/~affiliat/cgi-bin/affiliates/clickthru.cgi?id=flinger", "http://flinger.co/ad/ad_hostgator_4_250x60.gif", "HostGator: Host Unlimited Websites", "ad_hostgator_4"]);
                ads.push(["http://chromemote.com/", "http://flinger.co/ad/ad_chromemote_2.png", "Chromemote: Google TV Remote for Chrome", "ad_chromemote_2"]);
                ads.push(["http://secure.hostgator.com/~affiliat/cgi-bin/affiliates/clickthru.cgi?id=flinger", "http://flinger.co/ad/ad_hostgator_3_234x60.gif", "HostGator: Host Unlimited Websites", "ad_hostgator_3"]);
                ads.push(["https://whimseybox.com/?r=g8b0c7m2", "http://flinger.co/ad/ad_whimsey_box.png", "Whimseybox: Monthly DIY", "ad_whimsey_box"]);
                ads.push(["https://www.startupthreadsmonthly.com/?ref_id=etW3j", "http://flinger.co/ad/ad_startup_threads.png", "StartupThreads: Monthly Startup Swag", "ad_startup_threads"]);
                ads.push(["http://flinger.co/advertise-on-flinger/", "http://flinger.co/ad/ad_vert_here.gif", "Advertise on Flinger.co", "ad_vert_here"]);

                //Starting rotation with the first banner.
                min = 0;
                max = ads.length + 2;
                random = Math.floor(Math.random() * (max - min + 1)) + min;
                //random = 6;



                if (flingUrlFound && flingUrl.indexOf("www.youtube.com/watch?v=pZt-j9EgMPc") !== -1) {
                    adCycleTime = 500000;
                    ad_rotate(0);
                } else if (flingUrlFound && flingUrl.indexOf("www.youtube.com/watch?v=niIhlSomTOQ") !== -1) {
                    adCycleTime = 500000;
                    ad_rotate(1);
                } else if (flingUrlFound && flingUrl.indexOf("www.youtube.com/watch?v=mPMtvg0rDAA") !== -1) {
                    adCycleTime = 500000;
                    ad_rotate(4);
                } else if(flingUrlFound) {
                    //ad_rotate(random);
                    flingUrlFound = false;
                }

            }

            function ad_rotate(active) {
                //Gets the div that will display banners.
                var ad_element = document.getElementById("ad");
                var label = "";

                if (flingUrlFound && active < ads.length)
                    ads[active][3] = ads[active][3] + "_SYNC";

                if (active < ads.length) {
                    //Prints a new link with image in advertising box.
                    ad_element.innerHTML = "<a href=\"" + ads[active][0] + "\" target=\"_blank\"><img src=\"" + ads[active][1] + "\" alt=\"" + ads[active][2] + "\" title=\"" + ads[active][2] + "\" id=\"" + ads[active][3] + "\" class=\"ad_image\" /></a>";
                    label = ads[active][3];
                } else if (active == ads.length) {
                    ad_element.innerHTML = "<iframe src='http://flinger.co/gad/' id='google_adsense' class='adblock_iframe'></iframe>";
                    label = "google_adsense";
                } else if (active == ads.length + 1) {
                    ad_element.innerHTML = "<iframe src='http://flinger.co/gad/' id='google_adsense' class='adblock_iframe'></iframe>";
                    label = "google_adsense";
                } else if (active == max) {
                    ad_element.innerHTML = "<iframe src='http://rcm.amazon.com/e/cm?t=fliflitheweb-20&o=1&p=48&l=ur1&category=amazonvideoondemand&banner=0NV7S8PAP1Y8DYFGJC82&f=ifr' id='amazon_video' width='320' height='50' scrolling='no' border='0' marginwidth='0' style='border:none;' frameborder='0'></iframe>";
                    label = "amazon_video";
                }

                if (flingUrlFound)
                    label = label + "_SYNC";
                trackGAEvent("ad", "displayed", label);
                setAdTracker();

                //Switches to the next banner.
                //active++;
                console.log("Ad index: " + active);
                active = Math.floor(Math.random() * (max - min + 1)) + min;

                //If the counter has reached the end, it shall start again from zero.
                if (active > max) {
                    active = 0;
                }

                if (adCycleTime >= 50000)
                    flingUrlFound = false;

                //Run the function in 5000 milliseconds (5 seconds).
                setTimeout("ad_rotate(" + active + ")", adCycleTime);
                adCycleTime = 50000;

            }


            function trackGAEvent(id, action, label) {
                _gaq.push(['_trackEvent', id, action, label]);
            };

            function trackAdClick(e) {
                trackGAEvent('ad', 'clicked', e.target.id);
            };

            function setAdTracker() {
                var as = document.querySelectorAll('a');
                for (var i = 0; i < as.length; i++) {
                    as[i].addEventListener('click', trackAdClick);
                }
                var iframes = document.querySelectorAll('iframe');
                for (var i = 0; i < iframes.length; i++) {
                    iframes[i].addEventListener('click', trackAdClick);
                }
            };

            setAdTracker();


        </script>

    </head>
    <body>
        <!-- This code is placed where the advertising banner will be -->
        <div id="ad"> </div>
    </body>
</html>
