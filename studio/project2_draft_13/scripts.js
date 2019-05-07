// check if document is ready 
$(document).ready(function() {

    //get our doc size
    var doc = $(document);
    
    var width = doc.width() - 100;
    var height = doc.height() - 100;
    
    //target our shapes
    var shapes =  $(".rec1") 
    
    //create a random shape and position it randomly
    function randomStuff(){
    var randomShape = shapes
    var clone = randomShape.clone().appendTo('body');
    
    clone.last().css('left', Math.random()* width )
    clone.last().css('top', Math.random()* height )
    console.log($(".rec1").length)
    
    if($(".rec1").length > 5 ){
    
        $('.rec1').last().remove();
    
    }
    }

    
    //do it ever x
    setInterval(function(){
        
        randomStuff();
    
    },100)

    var colors1 = ["#e5fcf2", "#ededff"];
    
    var colors2 = ["#fcfc67", "#f29c13", "#022af4" ];

    var colors3 = [ "#FAE39C", "#5e6782", "#07332e", "#09099b" ];
        
        var randomColors1 = colors1[Math.floor(Math.random()*colors1.length)];
        var randomColors2 = colors2[Math.floor(Math.random()*colors2.length)];
        var randomColors3 = colors3[Math.floor(Math.random()*colors3.length)];
        var randomRotate = 'rotate(' + Math.random() * 45 + 'deg)';
        var randomSkew = 'skew(' + Math.random() * 30 + 'deg)';
        
        $('.white').css('background-color', randomColors1)
        $('body').css('background-color', randomColors2)
        $('.rec2').css('background-color', randomColors3)
        $('body').css('transform', randomRotate)
        $('.rec2').css('transform', randomSkew)
    })

        
    
    
    // end document ready function

    // check if document is ready 

// check if document is ready 
$(document).ready(function() {

    //get our doc size
    var doc = $(document);
    
    var width = doc.width() - 100;
    var height = doc.height() - 100;
    
    //target our shapes
    var shapes =  $(".rec2") 
    
    //create a random shape and position it randomly
    function randomStuff(){
    var randomShape = shapes
    var clone = randomShape.clone().appendTo('body');
    
    clone.last().css('left', Math.random()* width )
    clone.last().css('top', Math.random()* height )
    console.log($(".rec2").length)
    
    if($(".rec2").length > 50 ){
    
        $('.rec2').last().remove();
    
    }
    }
    
    //do it ever x
    setInterval(function(){
        
    randomStuff();
    
    },10)
    if($(".rec2").length > 20 ){
    
        $('.rec2').last().remove();
    
    }
    
    
    // end document ready function
    })


    // check if document is ready 

$(document).ready(function() {

    //get our doc size
    var doc = $(document);
    
    var width = doc.width() - 100;
    var height = doc.height() - 100;
    
    //target our shapes
    var shapes =  $(".white") 
    
    //create a random shape and position it randomly
    function randomStuff(){
    var randomShape = shapes
    var clone = randomShape.clone().appendTo('body');
    
    clone.last().css('left', Math.random()* width )
    clone.last().css('top', Math.random()* height )
    console.log($(".white").length)
    
    if($(".white").length > 20 ){
    
        $('.white').last().remove();
    
    }
    }
    
    //do it ever x
    setInterval(function(){
        
    randomStuff();
    
    }, 100)
    
    
    // end document ready function 
 

    })

