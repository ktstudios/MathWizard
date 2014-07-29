(function($) {
    "use strict";

    var calcArea = function() {
        var width = Number( $('#width').val() );
        var height = Number( $('#height').val() );   
        var totArea = width * height;       
        $('#totalArea').text('$' + totArea.toFixed(2));
    };

    var tipPercent = 15.0;

    var calcTip = function() {
        var billAmt = Number( $('#billAmount').val() );
        var tipAmt =  billAmt * tipPercent/100 ;
        var totalAmt = billAmt + tipAmt;
        $('#tipAmount').text('$' + tipAmt.toFixed(2));
        $('#totalAmount').text('$' + totalAmt.toFixed(2));
    };

    var saveSettings = function() {
        try {
            var tipPct = parseFloat( $('#tipPercentage').val() );
            localStorage.setItem('tipPercentage', tipPct);
            tipPercent = tipPct;
            window.history.back();
        } catch (ex) {
            alert('Tip percentage must be a decimal value');
        }
    };

    $( document ).on( "ready", function(){
        $('#calcArea').on('click', calcArea);
    });

    $( document ).on( "deviceready", function(){
        StatusBar.overlaysWebView( false );
        StatusBar.backgroundColorByName("gray");
    });

}
)(jQuery);