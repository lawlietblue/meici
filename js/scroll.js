$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 177){
            $('#search_top').css('display','block');
        } else {
           $('#search_top').css('display','none'); 
        }
    });
    var Timer;
    $('.lawliet_kira').hover(function(){
        clearTimeout(Timer);
        $('.lawliet_box').css('display','block');
    },function(){
        Timer = setTimeout(function(){
            $('.lawliet_box').css('display','none');
        },500);
    });
    $('.lawliet_box').hover(function(){
        clearTimeout(Timer);
    },function(){
        Timer = setTimeout(function(){
            $('.lawliet_box').css('display','none');
        },500);
    });

    //搜索框
    var 
        inputSs = $('.sR');
    inputSs.focus(function(){
        if (inputSs.val() === '请输入您的关键词'){
            inputSs.val('');
        }
    });
    inputSs.blur(function(){
        if(inputSs.val() === ''){
            inputSs.val('请输入您的关键词');
        }
    });

    //跨域
    inputSs.bind('input',function(){
        if($(this).val() !== ''){
            $('.ul_b').css('display','block');
            $.getJSON('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+ $(this).val() +'&json=1&p=3&sid=1442_21087_17001_21931_22036&csor=1&pwd=%E8%B0%81a%27s%27da&cb=?',function (data) {
                $('.ul_b').html('');
                data.g.forEach(function(v){
                    var oLi = $('<li>' + v.q + '</li>');
                    $('.ul_b').append(oLi);
               });
               $('.ul_b li').click(function(){
                     inputSs.val($(this).html());
                     $('.ul_b').css('display','none');
               });
            });
        } else {
            $('.ul_b').css('display','none');
        }
    });
});