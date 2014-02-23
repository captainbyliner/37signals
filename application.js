

$(document).ready(function(){

   
});


$(".panelDeck").fadeIn("slow");
$("#playButton").fadeIn("slow");
$("#playButton").css("display" , "block");

$("#playButton").click(function(){
    $(".panel").remove();
    $(".panel1").show();
});

$("#addAnswer").click(function() {
    $(".panel1").remove();
    $(".panel2").show();
});


 

