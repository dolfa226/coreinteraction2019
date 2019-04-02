//check if document is ready
$(document).ready(function(){
 
    var width = $(document).width() - 100;
    var height = $(document).height() - 100;
    var colors = ["orange", "pink", "green", "blue", "brown"]
    
//random color and position every 2 second
    setInterval(function(){
    var positionLeft1 = Math.random() * width + "px";
    var positionLeft2 = Math.random() * width + "px";
    var positionTop1 = Math.random() * height + "px";
    var positionTop2 = Math.random() * height + "px";

    var randomNumber = Math.random()*colors.length;
    var randomColor = colors[Math.floor(randomNumber)];

    $('#squareleft1').css("top", positionTop1)
    $('#squarebottom1').css("left", positionLeft2)
    $('#squareright1').css("top", positionTop1)
    $('#squaretop1').css("left", positionLeft2)
    $('#squareleft5').css("top", positionTop2)
    $('#squaretop1').css("left", positionLeft1)
    $('#squaretop6').css("left", positionLeft2)
    $('#squareleft7').css("top", positionTop1)
    $('#squaretop9').css("left", positionLeft1)

 
    },2000)

    setInterval(function(){
        var positionLeft1 = Math.random() * width + "px";
        var positionLeft2 = Math.random() * width + "px";
        var positionTop1 = Math.random() * height + "px";
        var positionTop2 = Math.random() * height + "px";
    
        var randomNumber = Math.random()*colors.length;
        var randomColor = colors[Math.floor(randomNumber)];
    
        $('#squareleft1').css("top", positionTop1)
        $('#squarebottom1').css("left", positionLeft2)
        $('#squareright1').css("top", positionTop1)
    
     
        },400)

    setInterval(function(){
        var positionLeft1 = Math.random() * width + "px";
        var positionLeft2 = Math.random() * width + "px";
        var positionTop1 = Math.random() * height + "px";
        var positionTop2 = Math.random() * height + "px";

    $('#squareleft5').css("top", positionTop2)
    $('#squaretop1').css("left", positionLeft1)


 
    },800)       

setInterval(function(){

    var positionLeft1 = Math.random() * width + "px";
    var positionLeft2 = Math.random() * width + "px";
    var positionTop1 = Math.random() * height + "px";
    var positionTop2 = Math.random() * height + "px";


    $('#squaretop6').css("left", positionLeft2)
    $('#squareleft7').css("top", positionTop1)
    $('#squareleft8').css("left", positionLeft1)
    $('#squaretop9').css("left", positionLeft1)
    $('#squaretop10').css("left", positionLeft1)
    $('#squaretop1').css("left", positionLeft2)

 
    },800)  

setInterval(function(){

    var positionLeft1 = Math.random() * width + "px";
    var positionLeft2 = Math.random() * width + "px";
    var positionTop1 = Math.random() * height + "px";
    var positionTop2 = Math.random() * height + "px";


    $('#squareleft11').css("top", positionTop1)
   

 
    },1100)  
    
    


    
    // $('#square1').css("background-color", randomColor)
    // $('#square3').css("background-color", randomColor)

//end document ready function
})
