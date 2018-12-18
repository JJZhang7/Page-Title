$(".S1").click(function(){
    $(".A").show();
    $(".S1").hide();
    $(".C").hide();
    $(".S2").show();
    
    
});
$(".S2").click(function(){
    $(".A").fadeOut();
    $(".S2").hide();
    $(".B").show();
     $(".S3").show();
});
$(".B").click(function(){
    $(".B").fadeOut();
    $(".S3").hide();
    $(".C").show();
    $(".S4").show();
});
$(".C").click(function(){
    $(".C").hide();
    $(".S4").hide();
    $(".D").show(); 
    $(".S4").hide();
    $(".S7").show();
});
$(".S7").click(function(){
    $(".E").show();
    $(".D").hide();
});
     
    
    
    