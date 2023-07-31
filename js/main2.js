$(function(){
    // $('.btn_menu').click(function(){
    //     $('.m_gnb').animate({'left':0},300)
    //     $('.cover').fadeIn();
    // })
    // $('.m_close').click(function(){
    //     $('.cover').fadeOut();
    //     $('.m_gnb').animate({'left':'-274'},300)
    // })

    // onClass
    // $('.btn_menu').click(function(){
    //     $('.btn_menu').toggleClass('on')
    // })

    // switch program 기법

    let sw = true
    $('.btn_menu').click(function(){
           
    if( sw == true ){
        $('.m_gnb').animate({'left':0})
        $('.wrap').animate({"left":274})
        $('.btn_menu').addClass('on')      
        $('.cover').fadeIn()  
        sw = false

    }else{
        $('.m_gnb').animate({'left':"-274"})
         $('.wrap').animate({"left":0})
        $('.btn_menu').removeClass('on')    
        $('.cover').fadeOut()     
        sw = true
    }
  })
});