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
       $("#upButton").fadeIn(1000);
    }
    else{
        $("#myNav").css("backgroundColor","transparent") ;
        $(".nav-item a").css("color","white");
        // $("navbar-brand img").("images/logo-dark.png")
        console.log($(".navbar-brand img").attr("src"));
        $(".navbar-brand img").attr("src", "images/logo-light.png");
        $("#myNav").css("padding","20px") ;
        // $("#upButton").css("display","none");
        $("#upButton").fadeOut(1000);
       }
 
 })

 /* bt7ml mbt3mlsh scroll 3la tol ????????????????????????????*/ 
$("#upButton").click(function(){
    $("html,body").animate({scrollTop:0} , 1000);
        // $("html,body").animate({scrollTop:0} ,2000);
})


$(".nav-link").click(function(e){
    // alert("linkClicked");
    let linkHref= $(e.target).attr("href");
    let nextpostion= $(linkHref).offset().top;
    $("html,body").animate({scrollTop:nextpostion} , 3000);    

})

$("#colorChangerIcon").click(function(){
    let colorBoxWidth=$("#colorBox").innerWidth();
    // alert(colorBoxWidth);
    if($("#colorBoxContainer").css("left") == '0px'){   
    $("#colorBoxContainer").animate({left:`-${colorBoxWidth}`},1000)
}else
    $("#colorBoxContainer").animate({left:`0px`},1000)
})

$(".colorItem").click(function () {
    let newColor=$(this).css("backgroundColor");
    $(".changeColor").css("color",newColor);
  })


  $(document).ready(function () {
      $("#loadingScreen").fadeOut(1000,function(){  $("body").css("overflow","auto");});
     

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
      $("#upButton").fadeIn(1000);
   }
   else{
       $("#myNav").css("backgroundColor","transparent") ;
       $(".nav-item a").css("color","white");
       // $("navbar-brand img").("images/logo-dark.png")
       console.log($(".navbar-brand img").attr("src"));
       $(".navbar-brand img").attr("src", "images/logo-light.png");
       $("#myNav").css("padding","20px") ;
       // $("#upButton").css("display","none");
       $("#upButton").fadeOut(1000);
      }

})

/* bt7ml mbt3mlsh scroll 3la tol ????????????????????????????*/ 
$("#upButton").click(function(){
   $("html,body").animate({scrollTop:0} , 1000);
       // $("html,body").animate({scrollTop:0} ,2000);
})


$(".nav-link").click(function(e){
   // alert("linkClicked");
   let linkHref= $(e.target).attr("href");
   let nextpostion= $(linkHref).offset().top;
   $("html,body").animate({scrollTop:nextpostion} , 3000);    

})

$("#colorChangerIcon").click(function(){
   let colorBoxWidth=$("#colorBox").innerWidth();
   // alert(colorBoxWidth);
   if($("#colorBoxContainer").css("left") == '0px'){   
   $("#colorBoxContainer").animate({left:`-${colorBoxWidth}`},1000)
}else
   $("#colorBoxContainer").animate({left:`0px`},1000)
})

$(".colorItem").click(function () {
   let newColor=$(this).css("backgroundColor");
   $(".changeColor").css("color",newColor);
 })

  });