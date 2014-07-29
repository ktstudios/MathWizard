(function($) {
    "use strict";
    
    var pie = 3.141592653589793;    

    var calcArea1 = function() {
        var width = Number( $('#width').val() );
        var height = Number( $('#height').val() );   
        var totArea = width * height;       
        $('#totalArea1').text(totArea.toFixed(2));
    };
    
    var calcArea2 = function() {
        var radius = Number( $('#radius').val() ); 
        var totArea = pie * (radius * radius);       
        $('#totalArea2').text(totArea.toFixed(2));
    };    

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
        $('#calcArea1').on('click', calcArea1);
        $('#calcArea2').on('click', calcArea2);        
    });

    $( document ).on( "deviceready", function(){
        StatusBar.overlaysWebView( false );
        StatusBar.backgroundColorByName("gray");
    });

}
)(jQuery);