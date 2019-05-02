// check if document is ready 
$(document).ready(function() {

    //get our doc size
    var doc = $(document);
    
    var width = doc.width() - 100;
    var height = doc.height() - 100;
    
    //target our shapes
    var shapes =  $(".circle2") 
    
    //create a random shape and position it randomly
    function randomStuff(){
    var randomShape = shapes
    var clone = randomShape.clone().appendTo('body');
    
    clone.last().css('left', Math.random()* width )
    clone.last().css('top', Math.random()* height )
    console.log($(".circle2").length)
    
    if($(".circle2").length > 100 ){
    
        $('.circle2').last().remove();
    
    }
    }
    
    //do it ever x
    setInterval(function(){
        
    randomStuff();
    
    },100)
    
    
    
    // end document ready function
    })

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
        
        if($(".rec1").length > 100 ){
        
            $('.rec1').last().remove();
        
        }
        }
        
        //do it ever x
        setInterval(function(){
            
        randomStuff();
        
        },10)
        
        
        // end document ready function
        })