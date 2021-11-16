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
//  $(document).ready(function () {
//     $(' img ').on('click', function(){
//         $(this).animate({
//             width: '70%' ,
//             marginLeft : "0px",
            
//         }, 2000)   
//         $(this).animate({
//            width: '100%' ,
//            marginRight : "0px",
           
//        }, 2000)   
//         setInterval(100)
      
//     })
// });