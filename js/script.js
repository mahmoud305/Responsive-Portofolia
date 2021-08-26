/*  
 $
 */
let aboutDistance= $("#About").offset().top; 
 $(window).scroll(function(){ 
     console.log("hello");
   let currentPostion= $(window).scrollTop();
   console.log(currentPostion+"   "+aboutDistance);
   if(currentPostion > aboutDistance-50){
       console.log("what");
       $("#myNav").css("backgroundColor","rgb(255,255,255)");
       $(".nav-item a").css("color","black");
       $(".navbar-brand img").attr("src", "images/logo-dark.png");
       $("#myNav").css("padding","5px") ;

    }
    else{
        $("#myNav").css("backgroundColor","transparent") ;
        $(".nav-item a").css("color","white");
        // $("navbar-brand img").("images/logo-dark.png")
        console.log($(".navbar-brand img").attr("src"));
        $(".navbar-brand img").attr("src", "images/logo-light.png");
        $("#myNav").css("padding","20px") ;
       }
 
 })