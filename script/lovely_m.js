$('.hambuger').click(function(){
    $('.modal').stop().fadeToggle()
    $('nav').toggleClass('on')
    $('.hambuger').toggleClass('on')
})

// show(), hide(), toggle(숫자) 괄호안에 숫자가 오면 animation 효과가 생긴다!
// fadeIn(),fadeOut(),fadeToggle()
// slideDown(), slideUp(), slideToggle()
// addClass(), removeClass(), toggleClass()


$('.gnb li').click(function(){
    $('.lnb').slideUp()
    $(this).children('.lnb').stop().slideToggle()
    // $('.lnb').slideDown();
});

