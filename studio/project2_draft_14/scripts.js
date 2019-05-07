// check if document is ready 
$(document).ready(function() {

    //get our doc size
    var doc = $(document);
    
    var width = doc.width() - 100;
    var height = doc.height() - 100;
    
    //target our shapes
    var shapes =  $(".thickrec1") 
    
    //create a random shape and position it randomly
    function randomStuff(){
    var randomShape = shapes
    var clone = randomShape.clone().appendTo('body');
    
    clone.last().css('left', Math.random()* width )
    clone.last().css('top', Math.random()* height )
    console.log($(".thickrec1").length)
    
    if($(".thickrec1").length > 100 ){
    
        $('.thickrec1').last().remove();
    
    }
    }

    
    //do it ever x
    setInterval(function(){
        
        randomStuff();
    
    }, 20)

    var colors1 = ["black", "blue", "yellow" ];
    var colors2 = ["black", "blue", "yellow" ];
        
        var randomColors1 = colors1[Math.floor(Math.random()*colors1.length)];
        var randomColors2 = colors2[Math.floor(Math.random()*colors2.length)];
        var randomColors3 = colors3[Math.floor(Math.random()*colors3.length)];
        var randomRotate = 'rotate(' + Math.random() * 40 + 'deg)';
        var randomSkew = 'skew(' + Math.random() * 50 + 'deg)';
        
        $('.thickrec1').css('background-color', randomColors2)
        // $('.rec2').css('background-color', randomColors3)
        $('.rec2').css('transform', randomRotate)
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
    
    if($(".rec2").length > 100 ){
    
        $('.rec2').last().remove();
    
    }
    }
    
    //do it ever x
    setInterval(function(){
        
    randomStuff();
    
    }, 50 )
    if($(".rec2").length > 100 ){
    
        $('.rec2').last().remove();
    
    }
    
    
    // end document ready function

    
   
    
    
    // end document ready function
    })

   


   