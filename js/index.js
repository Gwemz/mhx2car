$(function(){
    $('.mTitle').on('click','.item',function(){
        var index=$(this).index();
        $(this).parent().find('.item').removeClass('active');
        $(this).addClass('active');
        $('.mCarList').removeClass('active');
        $('.mCarList').eq(index).addClass('active');
    })
})