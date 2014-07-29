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
    
    var calcArea3 = function() {
        var radius = Number( $('#radius').val() ); 
        var slant = Number( $('#slant').val() );               
        var totArea = pie * radius * (radius + slant);       
        $('#totalArea3').text(totArea.toFixed(2));
    };   
    
    var calcArea4 = function() {
        var side = Number( $('#side').val() );               
        var totArea = 6*(side*side);       
        $('#totalArea4').text(totArea.toFixed(2));
    };   
    
    var calcArea5 = function() {
        var radius = Number( $('#radius').val() );
        var height = Number( $('#height').val() );                       
        var totArea = (2 * pie * (radius * radius)) + (2 * pie * radius * height);       
        $('#totalArea5').text(totArea.toFixed(2));
    };   
    
    var calcArea6 = function() {
        var radius1 = Number( $('#radius1').val() );
        var radius2 = Number( $('#radius2').val() );                       
        var totArea = pie * radius1 * radius2;       
        $('#totalArea6').text(totArea.toFixed(2));
    };             

    var calcArea7 = function() {
        var side = Number( $('#side').val() );                     
        var totArea = side * side;       
        $('#totalArea7').text(totArea.toFixed(2));
    }; 
    
    var calcArea8 = function() {
        var height = Number( $('#height').val() );        
        var base1 = Number( $('#base1').val() ); 
        var base2 = Number( $('#base2').val() );                              
        var totArea = height * ((base1 + base2)/2);       
        $('#totalArea8').text(totArea.toFixed(2));
    };    
    
    var calcArea9 = function() {
        var base = Number( $('#base').val() );    
        var height = Number( $('#height').val() );                                     
        var totArea = (base * height)/2;       
        $('#totalArea9').text(totArea.toFixed(2));
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
        $('#calcArea3').on('click', calcArea3);  
        $('#calcArea4').on('click', calcArea4);     
        $('#calcArea5').on('click', calcArea5); 
        $('#calcArea6').on('click', calcArea6);    
        $('#calcArea7').on('click', calcArea7); 
        $('#calcArea8').on('click', calcArea8);  
        $('#calcArea9').on('click', calcArea9);                                      
    });

    $( document ).on( "deviceready", function(){
        StatusBar.overlaysWebView( false );
        StatusBar.backgroundColorByName("gray");
    });

}
)(jQuery);