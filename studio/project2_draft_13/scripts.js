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
    
    if($(".rec1").length > 100 ){
    
        $('.rec1').last().remove();
    
    }
    }

    
    //do it ever x
    setInterval(function(){
        
        randomStuff();
    
    },100)

    var colors1 = ["#CE8054", "#B35340", "#6F3637", "#23342" ];
    var colors2 = ["black", "red", "blue", "yellow" ];
    var colors3 = ["#CE8054", "#B35340", "#6F3637", "#23342" ];
        
        var randomColors1 = colors1[Math.floor(Math.random()*colors1.length)];
        var randomColors2 = colors2[Math.floor(Math.random()*colors2.length)];
        var randomColors3 = colors3[Math.floor(Math.random()*colors3.length)];
        var randomRotate = 'rotate(' + Math.random() * 40 + 'deg)';
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
    
    if($(".rec2").length > 100 ){
    
        $('.rec2').last().remove();
    
    }
    }
    
    //do it ever x
    setInterval(function(){
        
    randomStuff();
    
    },10)
    if($(".rec2").length > 100 ){
    
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
    
    if($(".white").length > 100 ){
    
        $('.white').last().remove();
    
    }
    }
    
    //do it ever x
    setInterval(function(){
        
    randomStuff();
    
    }, 100)
    
    
    // end document ready function
    })

    $(document).ready(function(){

        var shapes =  $(".layer2rec1");   
        var width = doc.width() - 100;
        var height = doc.height() - 100;
    
        //create a random shape and position it randomly
        function randomStuff(){
        var randomShape = shapes
        var clone = randomShape.clone().appendTo('body');
        
        
        clone.last().css('left', Math.random()* width )
        clone.last().css('top', Math.random()* height )
        console.log($(".layer2rec1").length)
        
        if($(".layer2rec1").length > 100 ){
        
            $('.layer2rec1').last().remove();
        
        }
        }
    

        //do it ever x
        setInterval(function(){
            
            randomStuff();
        
        },100)


    })