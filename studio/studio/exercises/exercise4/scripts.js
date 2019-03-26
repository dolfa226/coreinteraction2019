//check if document is ready
$(document).ready(function(){
 
    //Declare some stuff
    var name = "AIRA DOLFO";
    var time = new Date(); 
    var ticker = 0;
    var ticker2 = 0;
    var colors = ["#7c889b", "#93b1c4", "#93bac4", "#93c4c2", "#93c4b9", "#93c4a7", "#93c497", "#acc493", "#bbc493", "#c4bf93", "#c4b693", "#c4ad93", "#c49d93", "#c49393"]

    //Change some html
    $("#name").text(name)    
    $("#time").text(time)    
    $("#ticker").text(ticker)    
 
    //Change some css
    $("#ticker").css("font-size", "200px")  
    $("#ticker").css("position", "absolute")  
    $("#ticker").css("margin-right", "15vw")  
    $("#ticker2").css("font-size", "50vh")   
    $("#ticker2").css("opacity", ".4")  
 
    //Create your own function
    function getTime() {
        time = new Date();    
        //change html   
        $("#time").text("Date: " + time)  
        $("#ticker").text(" " + ticker)    
        $("#ticker2").text(" " + ticker2) 
        $("#ticker2").text(" " + ticker2) 
 
 
        //change css
        var rotate = "rotate(" + ticker + "deg)";
        console.log(rotate);
        $("#clock").css("transform", rotate) 
        $("#clock").css("background-color", colors[ticker2]) 

        var rotate = "rotate(" + time + "deg)";
        console.log(rotate);
        $("#ticker2").css("color", colors[ticker2]) 
    
        

        
        //update variables  
        ticker+=29; 
        ticker2+=1; 
 
        //check if ticker2 is over 4  
        if(ticker2 >= 14){
            ticker2 =0;
        }
    //end function
    }  
 
    //call function initially
    getTime()  
 
    //call function every second
    setInterval(function(){
      getTime()
    },1000)
 
  
//end document ready function
})