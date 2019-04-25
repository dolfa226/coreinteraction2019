// check if document is ready 
$(document).ready(function() {

//get our doc size
var doc = $(document);

var width = doc.width() - 20;
var height = doc.height() - 20;

//target our shapes
var shapes = [ $(".rec1") , (".rec2")  ]

//create a random shape and position it randomly
function randomStuff(){
var randomShape = shapes[ Math.floor (Math.random() * shapes.length) ]
var clone = randomShape.clone().appendTo('body');

clone.last().css('left', Math.random()* width )
clone.last().css('top', Math.random()* height )
}

//do it ever x
setInterval(function(){
    
randomStuff();

},100)


// end document ready function
})