$('.hambuger').click(function(){
    $(this).toggleClass('on');
    $('.modal').stop().fadeToggle('on');
    $('.navbox').toggleClass('on');
});

$(window).scroll(function(){
    let scrT = $(window).scrollTop();
    console.log(scrT);
})