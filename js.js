// window.addEventListener('load', function (e) {
//    var prev = document.querySelector('.fa-chevron-left');
//    var next = document.querySelector('.fa-chevron-right');

// });

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items : 1,
        margin : 12,
        loop : true, 
        autoplayTimeout: 2000,
        responsive:{
            0 : {
                items : 1
            },
            768: {
                items : 1
            },
            992: {
                items : 1
            },
            
        }
    });
 });

 $(document).ready(function () {
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.fa-arrow-circle-up').fadeIn(200)
        }
        else{
            $('.fa-arrow-circle-up').fadeOut(200)
        }
    }) 
    $('.fa-arrow-circle-up').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })
 });
 $(document).ready(function () {
    $('.bor-der img ').on('click', function(){
        $(this).animate({
            width: '70%' ,
            marginLeft : "0px",
            
        }, 2000)   
        $(this).animate({
           width: '100%' ,
           marginRight : "0px",
           
       }, 2000)   
        setInterval('.bor-der img ')
      
    })
});
 $(document).ready(function () {
    $('.ustun1 img ').on('click', function(){
        $(this).animate({
            width: '70%' ,
            marginLeft : "0px",
            
        }, 2000)   
        $(this).animate({
           width: '100%' ,
           marginRight : "0px",
           
       }, 2000)   
        setInterval('.ustun img ')
      
    })
});
$(document).ready(function () {
    $('.tak img ').on('click', function(){
        $(this).animate({
            width: '70%' ,
            marginLeft : "0px",
            
        }, 2000)   
        $(this).animate({
           width: '100%' ,
           marginRight : "0px",
           
       }, 2000)   
        setInterval(100)
      
    })
});
// window.addEventListener('load', function (e) {
//     var text = document.querySelector('.section_top h2');
//     var word = text.innerHTML
//     text.innerHTML =''
//     var i = 0
//     var f = function(){
//         text.innerHTML = text.innerHTML + word.charAt(i)
//         i++
//     } 
//     setInterval(f, 200)
// });
$(document).ready(function () {
    $('.section_bottom .karta1 ').on('click', function(){
        $(this).animate({
           
            marginTop : "100px",
            
        }, 2000)   
        $(this).animate({
        
           marginTop : "-30px",
           
       }, 2000)   
        setInterval('.section_bottom .karta1 ', 100)
      
    })
});



