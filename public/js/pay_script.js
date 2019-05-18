
var paymentTracking = function() {
    var timestampYear  = new Date().getUTCFullYear();
    var timestampMonth = new Date().getUTCMonth();
    var timestampDay   = new Date().getUTCDate();
    var timestampHour  = new Date().getUTCHours();
    var timestampMin   = new Date().getUTCMinutes();
    var timestampSec   = new Date().getUTCSeconds();
    var timestampMil   = new Date().getUTCMilliseconds();
            	
    var timestamp = "" + timestampYear + timestampMonth + timestampDay + timestampHour + timestampMin + timestampSec + timestampMil;
            	
    //alert(timestamp);
    var val = $("#slider").val();
    var dollars = Math.min(Math.pow(val/5, 2) + 5, 400);
            	
    if (val == 0) dollars = 0;
    var roundTo = (dollars <= 10 ? 1 : dollars <= 150 ? 5 : 25);
	dollars = Math.floor(dollars / roundTo) * roundTo;
	            
    var amtString = dollars + ".00";
            	
    //alert(amtString);
            	
    var tracking = "FLINGERCO";
    var pageTracker = _gat._getTracker("UA-39500794-1");
    try{
  					
  		pageTracker._trackPageview();
  		pageTracker._addTrans(
    	timestamp,            // transaction ID - required
   		"Flinger.co",  // affiliation or store name
      	amtString,           // total - required
      	"0.00",            // tax
      	"0.00"//,           // shipping
      	//"San Jose",        // city
      	//"California",      // state or province
      	//"USA"              // country
    	);


   		// add item might be called for every item in the shopping cart
   		// where your ecommerce engine loops through each item in the cart and
   		// prints out _addItem for each 
   		pageTracker._addItem(
   		"1234",           // transaction ID - necessary to associate item with transaction
   		tracking,           // SKU/code - required
   		"Contribution",        // product name
   		amtString,   // category or variation
   		amtString,        // unit price - required
   		"1"               // quantity - required
   	);

   	pageTracker._trackTrans(); //submits transaction to the Analytics servers
	} catch(err) { }
    pageTracker = _gat._getTracker("UA-39500794-1");
    try{
  					
  		pageTracker._trackPageview();
  		pageTracker._addTrans(
    	timestamp,            // transaction ID - required
   		"Flinger.co",  			// affiliation or store name
      	amtString,           // total - required
      	"0.00",            // tax
      	"0.00"//,           // shipping
      	//"San Jose",        // city
      	//"California",      // state or province
      	//"USA"              // country
    	);


   		// add item might be called for every item in the shopping cart
   		// where your ecommerce engine loops through each item in the cart and
   		// prints out _addItem for each 
   		pageTracker._addItem(
   		"1234",           // transaction ID - necessary to associate item with transaction
   		tracking,           // SKU/code - required
   		"Contribution",        // product name
   		amtString,   // category or variation
   		amtString,        // unit price - required
   		"1"               // quantity - required
   	);

   	pageTracker._trackTrans(); //submits transaction to the Analytics servers
	} catch(err) { }
};


function recordTracking() {
    var tracking = "FLINGERCO";
    $('#google-form [name="shopping-cart.merchant-private-data"]').val(tracking);
    $('#paypal-form [name="item_number"]').val(tracking);
    $('#amazon-form [name="referenceId"]').val(tracking);
};
recordTracking();
            
// Update the slider UI and maybe plead with the user not to pay $0
function onSliderChange() {
    var zero = ($("#slider").val() == 0);
    $("#not-paying").toggle(zero);
    $("#payment-types").toggle(!zero);
    $("#gift").toggle(!zero);

    updateAmountFromSlider();
}
// On slider change, adjust printed dollar value and position,
// and update gift list
function updateAmountFromSlider() {
    var here = $("#main");
    var val = $("#slider").val();
    var offset = val / 100 * ($("#paySlider").width() - 25);

    // Increasing speed from $2 to $400, but allowing $0
    var dollars = Math.min(Math.pow(val/5, 2) + 5, 400);
    if (val == 0) dollars = 0;

    var roundTo = (dollars <= 10 ? 1 : dollars <= 150 ? 5 : 25);
    dollars = Math.floor(dollars / roundTo) * roundTo;
    here.find('#amt-text').css({"padding-left": offset});
    here.find('#amt-text-num').text(dollars);

    here.find(".why").each(function(el) {
    $(this).toggle($(this).attr("min") <= dollars);
    });

    var amtString = dollars + ".00";
    $('#google-form [name="item_price_1"]').val(amtString);
    $('#paypal-form [name="amount"]').val(amtString);
    $('#paypal-form2 [name="a3"]').val(amtString);
    $('#amazon-form [name="amount"]').val("USD " + dollars);
              
    var amazonSig = "";
    if(dollars == 5)
    amazonSig = "JkIUpyRzLvBgXo0ZoQudkYmmCkUR5+soJUIMhbz+h1Y=";
    else if(dollars == 6)
    amazonSig = "wvBStHoAdNAHjH/hKDM7w6AjjBPguKpCYG4l18D5qR4=";
    else if(dollars == 7)
    amazonSig = "7B6fNqHhdExqVczaq1BFwBZLmj5mNCdEjbxmkAbg+I4=";
    else if(dollars == 8)
    amazonSig = "cwdQb7i7oV/6hLpt0DlsDUj5KcPWss3kryIAFYPq6Mw=";
    else if(dollars == 9)
    amazonSig = "62lU13qdx1ER08qBZWUC4LEWR+YA/NkOoX7icXrUy0o=";
    else if(dollars == 10)
    amazonSig = "L9kc2UgRBEBGzh9rg2og5KjYuWOBp52KtetYwkg5uNw=";
    else if(dollars == 15)
    amazonSig = "xs7TWrMlSKEKuEU3nnt+LmUpKi2121mq1jP6daUlnh0=";
    else if(dollars == 20)
    amazonSig = "/VU0ouW+xJHrMCwN5nPsU9oJU/SNeCuONdB9y/AkYOA=";
    else if(dollars == 25)
    amazonSig = "t8y+ohtVxo/XkAond+21ZPOhanTUBkTxV+xp/TwSZo4=";
    else if(dollars == 30)
    amazonSig = "TUDEBU55zstHUfYxYebpLY2KC8+2EVaqNiKDDpx4U7Q=";
    else if(dollars == 35)
    amazonSig = "gzJqmOrYp5gGPFoMfne82I2RbW/NvVuq3+CTs+Xh8WI=";
    else if(dollars == 40)
    amazonSig = "COAk4jhenHXUsfAKG8yzTvaryrfCnAmzjorXy/J5yzo=";
    else if(dollars == 45)
    amazonSig = "zWT92r73y7Iawpv390xHRk6a2v1qaEqJ8O0QRk75wCQ=";
    else if(dollars == 50)
    amazonSig = "/hV1luOHEktYIRX6PWX39yYOLxMldAJwHSGRdN4J89g=";
    else if(dollars == 55)
    amazonSig = "d3fxT+t0BEkX7DkLk2bxhaW6lX+kkwl9ZyOUIXyNglk=";
    else if(dollars == 60)
    amazonSig = "Z8/mjoxOsYcVQLSDWL03GZ1Xa4HGr7/cIckpPgsZtwM=";
    else if(dollars == 65)
    amazonSig = "3C4Mk2RkjkPe6DYIJDctdq193MUoUkghKXb7AlKoN2c=";
    else if(dollars == 70)
    amazonSig = "eRiCXdPgWmuhFq4UsH6s0O09dFsWq/WkaqN6YHs2cGs=";
    else if(dollars == 75)
    amazonSig = "zBD1y59rX7xV3xwmy7jdvyW5PR8HAejtuki2EuRF270=";
    else if(dollars == 80)
    amazonSig = "ly6M835334tSyehvLZniPDnbK/oS3Pa1sxt7v4iW6As=";
    else if(dollars == 85)
    amazonSig = "uSMaJmxBQo9bTDM0VayZ8C/I+4iS3qH+kHUZ9AABIHI=";
    else if(dollars == 90)
    amazonSig = "xq0/Uqld2bEtLrUoXR30atOJzyQS0E+o6L9rk+Ir4YU=";
    else if(dollars == 95)
    amazonSig = "3n3Q4ijNZstRMY95x1WPgrgx6ApVZ8uuhMpNLEY6Mus=";
    else if(dollars == 100)
    amazonSig = "s+XOJM8VUyzOw/BTlh8dOSAySuSsakB+GTYTdfUMn+4=";
    else if(dollars == 105)
    amazonSig = "SWUgdRXB2R4Meano/1A4PbhStgjBf4xBJ7qZV18uZ/A=";
    else if(dollars == 110)
    amazonSig = "GxFwhctTpyynzkRnFZZgAzIHqGTzoNe6jQC5o2MJQ8A=";
    else if(dollars == 115)
    amazonSig = "c+HILtqIPRWipjskPTDIKPDs4ku+BBEuvvtkeSsNLzY=";
    else if(dollars == 120)
    amazonSig = "SOOYCT+SGY3/wf4ioAZFy5cipbxaAmxrN+hP9ac3fwM=";
    else if(dollars == 125)
    amazonSig = "osTdd9mmhac42tt6aTPgIVAnxBEGqvKw35SwVOSXNTI=";
    else if(dollars == 130)
    amazonSig = "bzdATX0UEIfM4Iar7BUt0iqERyoXnO60+d9Lqf4gezo=";
    else if(dollars == 135)
    amazonSig = "eEMu5gWWl6xMTm/OQ/BQHW7FcVA4qkkgNQ2kbSALdps=";
    else if(dollars == 140)
    amazonSig = "06547lh33ZgvfOcko3rV/caTyC0CeezyJMh6fH8dm6c=";
    else if(dollars == 145)
    amazonSig = "RRePkZN9qfMifswuNZslAYLCVlX4FaM/weLjjBAMXIo=";
    else if(dollars == 150)
    amazonSig = "mXdmGIZVUUBkbFFMLHQPEEiMtCD69kMaUH6MICX0t3c=";
    else if(dollars == 175)
    amazonSig = "dPd9vwlgt4LOlN5wTEwpzxBiiSkBNTGAAf1AAsjOmBQ=";
    else if(dollars == 200)
    amazonSig = "QYm2LSijwnBeT9Iulfvptu2Ub9fffmLS6rLzboSQQlY=";
    else if(dollars == 225)
    amazonSig = "o5OtJ40q6VkTgQnmBOKNHA1+PhDXaTXBXjqKl2gqk0o=";
    else if(dollars == 250)
    amazonSig = "PF95kUJiAuSk/4W3k/JGxxcDm9nYxXbxImudSMxMzx4=";
    else if(dollars == 275)
    amazonSig = "VgUV+inRQEU4rUBMg+3vDAWc4g0P8jD4cb5pwAKgp+U=";
    else if(dollars == 300)
    amazonSig = "b+eo+fA4GX8w0oFCCNULAtesN50aKv1nO99QYqYw7aA=";
    else if(dollars == 325)
    amazonSig = "sG1Plv43lg9nicDIixUlIRz7S7Z64wDlA/8VTjgxPK8=";
    else if(dollars == 350)
    amazonSig = "lc5bG6TCTxauCRxtd0JsFxNcle4So/kYIzXbP1+KOqA=";
    else if(dollars == 375)
    amazonSig = "lkdvsCywiF5GAJZZLfd4Mrz9jjLLw2rp1LvnUYQQa4Q=";
    else if(dollars == 400)
    amazonSig = "ODIojKzrIUVWBT7aTYcQkhZjAe+7qNhIsJ5VUZzmBTw=";
              	
	$('#amazon-form [name="signature"]').val(amazonSig);
			  
}
$("#main").find('input').change(onSliderChange);
onSliderChange(); // set amount from default slider position

var forcedAmount = parseFloat((document.location.search.match(/(?:[?&])amt=([0-9.]*)/) || {})[1]);
if (forcedAmount > 400) {
    $("#slider").val(100);
    onSliderChange();
    var dollars = forcedAmount + ".00";
    $("#amt-text-num").text(forcedAmount);
    $('#google-form [name="item_price_1"]').val(dollars);
    $('#paypal-form [name="amount"]').val(dollars);
    $('#paypal-form2 [name="a3"]').val(dollars);
    $('#amazon-form [name="amount"]').val("USD " + forcedAmount);
}


// Safari bug: click a button to submit a form, close the newly opened window
// using your mouse (not keyboard), try to click the button again: nothing happens.
// Any button submitting a form to the same URL won't work.  Workaround: modify the
// URL harmlessly after onclick, so any later clicks are to a new URL.
$('form input[type="image"]').click(function() {
var that = this;
window.setTimeout(function() {
    var theForm = $(that).closest("form")[0];
    if (!/\?/.test(theForm.action))
    theForm.action += "?";
    theForm.action += "&";
}, 0);
});

// Confirm if they leave without paying
GLOBAL_haveClickedPayButton = false;
window.onbeforeunload = function() { 
// TODO temporarily disable this while CatBlock question may be derailing users early in install process
//return;
// TODO only do this upon install.
//var zeroSelected = $("#not-paying:visible").length > 0;
//if (!GLOBAL_haveClickedPayButton && !zeroSelected)
//  return "You haven't paid yet.  If you can't afford to, no problem.  But if you can, please stay on the page to pay!"; 
};
$('form input[type="image"]').click(function() {
GLOBAL_haveClickedPayButton = true;
paymentTracking();
});




$(function () {
    $("#paySlider").on("change", function (e, val) {
        // e is event
        // val is current value

        //percentTime = val;
        //console.log(val);

        document.getElementById("slider").value = val;
        updateAmountFromSlider();
        onSliderChange();
    });

    $("#paySlider").on("changed", function (e, val) {
        // e is event
        // val is current value
        //consoleLog(val);
    });

    // for retrieve a current value you can call
    $("#paySlider").data('value');
})
