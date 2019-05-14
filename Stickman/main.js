$(document).ready(function() {
    $( ".rl" ).click(function() {
    $( "div" ).animate({left:'+=50px'});
    $( "div" ).animate({top:'+=50px'});
   
   });
   $( ".ll" ).click(function() {
    $( "div" ).animate({left:'+=-50px'});
    $( "div" ).animate({top:'+=50px'});
   });
   $( ".la" ).click(function() {
    $( "div" ).animate({left:'+=-50px'});
   
   });
   $( ".ra" ).click(function() {
    $( "div" ).animate({left:'+=50px'});
   
   });
   $( ".h" ).click(function() {
    $( "div" ).animate({top:'+=-50px'});
   });
   $( ".bdy" ).click(function() {
    $( "div" ).animate({top:'+=50px'});
   });
    
   });