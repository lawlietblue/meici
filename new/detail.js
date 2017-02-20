$(function(){
    $('.tab2 li').click(function(){
        $(this).siblings().removeClass('current');
        $(this).addClass('current');
        if($(this).index() === 0){
            $('.proCon1').show();
            $('.proCon2').hide();
            $('.proCon3').hide();
        }
        if($(this).index() === 1){
            $('.proCon1').hide();
            $('.proCon2').show();
            $('.proCon3').hide();
        }
        if($(this).index() === 2){
            $('.proCon1').hide();
            $('.proCon2').hide();
            $('.proCon3').show();
        }
        var iT = $(this).offset().top;
        //$(document).scrollTop(iT,5000);
        $("html,body").animate({scrollTop:iT},500,function(){
            $('.tab2 input').css('display','block');
        });
    });

    //滚动事件
    var iFT = $('.tab2').offset().top;
    $(window).scroll(function(){
        if($(window).scrollTop() >= iFT){
            $('.tab2').css({
                position : 'fixed',
                top : '0',
                marginTop : -20
            });
            $('.tab2 input').css('display','block');
        } else {
            $('.tab2').css({
                position : 'static',
                top : '0',
                marginTop : 0
            });
            $('.tab2 input').css('display','none');
        }
    });

    //图片事件
    $('.d_top_l li').mouseover(function(){
        $(this).children('img').addClass('cur');
        $(this).siblings().children('img').removeClass('cur');
        $('.d_top_m li').removeClass('showP');
        $('.d_top_m li').eq($(this).index()).addClass('showP');
        $('.dt img').removeClass('showI');
        $('.dt img').eq($(this).index()).addClass('showI');
    });

    //放大镜事件 
    $('.d_top_m').mouseenter(function(){
        $('.fdj').css('display','block');
        $('.dt').css('display','block');
        $(document).mousemove(function(e){
            var 
                W = e.pageX - $('.fdj').width() / 2 - $('.d_top_m').offset().left;
                T = e.pageY - $('.fdj').height() / 2 - $('.d_top_m').offset().top;
            if(W < 0){
                W = 0;
            }
            if(T < 0){
                T = 0;
            }
            if(W > ($('.d_top_m').width() - $('.fdj').width())){
                W = $('.d_top_m').width() - $('.fdj').width();
            }
            if(T > ($('.d_top_m').height() - $('.fdj').height())){
                T = $('.d_top_m').height() - $('.fdj').height();
            }
            $('.fdj').css({
                top : T,
                left : W
            });
            $('.dt img').css({
                top : -2 * T,
                left : -2 * W
            });
        });
    });
    $('.d_top_m').mouseleave(function(){
        $('.fdj').css('display','none');
        $('.dt').css('display','none');
    });


    //加入购物车
    var A = [];
    $('.add').click(function(){
        $('.buy').trigger('mouseover');
        var oGoods = {
            url : $('.d_top_l img').attr('src'),
            name : $('.d_top_r h1').text(),
            subname : $('.d_top_r > span').text(),
            price : $('.hdj').text().slice(5)
        }
        console.log(oGoods);
        A.push(oGoods);
        $.cookie('Goods',JSON.stringify(A), { path: "/", expiress: 7 });
        return false;
    });

});