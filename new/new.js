$(function(){
    $('.brand > a').stop().toggle(function(){
        $('.brand ul').hide(500);
        $('.brand > a').css({
            background : 'url(img/pic_arrow_r.gif) no-repeat 173px 12px'
        });
    },function(){
        $('.brand ul').show(500);
        $('.brand > a').css({
            background : 'url(img/pic_arrow_u.gif) no-repeat 173px 12px'
        });
    });
    $('.price > a').stop().toggle(function(){
        $('.price ul').hide(500);
        $('.price > a').css({
            background : 'url(img/pic_arrow_r.gif) no-repeat 173px 12px'
        });
    },function(){
        $('.price ul').show(500);
        $('.price > a').css({
            background : 'url(img/pic_arrow_u.gif) no-repeat 173px 12px'
        });
    });

    $('.color a').stop().hover(function(){
        $(this).css('borderColor','#8e0c3a');
    },function(){
        $(this).css('borderColor','#fff');
    });

     $('.main_category > li> a').stop().toggle(function(e){
        $(this).next('ul').show(500);
        $(this).css({
            background : 'url(img/pic_arrow_u.gif) no-repeat 173px 4px'
        });
        e.stopPropagation();
    },function(e){
        $(this).next('ul').hide(500);
        $(this).css({
            background : 'url(img/pic_arrow_r.gif) no-repeat 173px 4px'
        });
        e.stopPropagation();
    });


    //价格排序
    var oGoods = $('.product_list li');
    var aPrice = [];
    var b = {};
    oGoods.each(function(){
        var a = $(this).find('span:eq(0)').html().slice(1);
        aPrice.push(a);
    });
    
    //console.log(aPrice);

    //从高到低排序
    $('.topToDown').click(function(){
        $(this).addClass('act');
        $(this).parent().siblings().children('a').removeClass('act');
        aPrice.sort(function(a,b){return b - a});
        for (var i = 0;i < aPrice.length;i++) {
            oGoods.each(function(){
                if($(this).find('span:eq(0)').html().slice(1) === aPrice[i]){
                    $(this).appendTo($('.product_list > ul'));
                }
            });
        }
    });

    //从低到高排序
    $('.downToTop').click(function(){
        $(this).addClass('act');
        $(this).parent().siblings().children('a').removeClass('act');
        aPrice.sort(function(a,b){return a - b});
        for (var i = 0;i < aPrice.length;i++) {
            oGoods.each(function(){
                if($(this).find('span:eq(0)').html().slice(1) === aPrice[i]){
                    $(this).appendTo($('.product_list > ul'));
                }
            });
        }
    });


    //筛选10000-20000
    $('.selectP').click(function(){
        $(this).addClass('act');
        oGoods.each(function(){
                if($(this).find('span:eq(0)').html().slice(1) <= 10000 || $(this).find('span:eq(0)').html().slice(1) >= 20000){
                    $(this).remove();
                }
            });
        return false;
    });
});