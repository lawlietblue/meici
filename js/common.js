$(function(){
    //搜索框
    var 
        inputS = $('.header_top :text');
    inputS.focus(function(){
        if (inputS.val() === '请输入您的关键词'){
            inputS.val('');
        }
    });
    inputS.blur(function(){
        if(inputS.val() === ''){
            inputS.val('请输入您的关键词');
        }
    });
    //菜单
    var mainNav = $('.main_nav .clearfix > ul > li').not(':last');
    mainNav.hover(function(){
        $(this).css('background','#8E0C3A');
        $(this).children('a').css('color','#FFF');
        if($(this).index() != 0 && $(this).index() != 2){
            $('.menu_m').css('display','block');
        }
    },function(){
        $(this).css('background','#FFF');
        $(this).children('a').css('color','#7A7A7A');
        $('.menu_m').css('display','none');
    });
    //banner,有bug点的快之后会出现空白
    $('#main div').hover(function(){
        $(this).children('span').css('display','block');
        clearInterval(iTimer);
    },function(){
        $(this).children('span').css('display','none');
        iTimer = setInterval(function(){
            iIndex++;
            $('#main ul').stop().animate({
                'left':-960 * iIndex,
             },function(){
             if(iIndex === 6){
                $('#main ul').css('left','-960px');
                iIndex = 1;
                }
             });
            },3000);
    });
    var iIndex = 1;
    $('.left_l').click(function(){
        iIndex--;
        $('#main ul').stop().animate({
            'left':-960 * iIndex
        },function(){
            if(iIndex === 0){
                $('#main ul').css('left','-4800px');
                iIndex = 5;
            }
        });
    });
    $('.right_r').click(function(){
        iIndex++;
        $('#main ul').stop().animate({
            'left':-960 * iIndex,
        },function(){
            if(iIndex === 6){
                $('#main ul').css('left','-960px');
                iIndex = 1;
            }
        });
    });
    var iTimer = setInterval(function(){
        iIndex++;
        $('#main ul').stop().animate({
            'left':-960 * iIndex,
        },function(){
            if(iIndex === 6){
                $('#main ul').css('left','-960px');
                iIndex = 1;
            }
        });
    },3000);

    //正被选购
    var iIindex = 5;
    $('.cart_prew').click(function(){
        iIindex--;
        $('.m_hot_pro ul').stop().animate({
            'left':-192 * iIindex
        },function(){
            if(iIindex === 0){
                $('.m_hot_pro ul').css('left','-2112px');
                iIindex = 11;
            }
        });
    });
    $('.cart_next').click(function(){
        iIindex++;
        $('.m_hot_pro ul').stop().animate({
            'left':-192 * iIindex
        },function(){
            if(iIindex === 16){
                $('.m_hot_pro ul').css('left','-960px');
                iIindex = 5;
            }
        });
    });

    var iTimer2 = setInterval(function(){
        iIindex++;
        $('.m_hot_pro ul').stop().animate({
            'left':-192 * iIindex
        },function(){
            if(iIindex === 16){
                $('.m_hot_pro ul').css('left','-960px');
                iIindex = 5;
            }
        });
    },3000);

    //订阅
    var oInput = $('.nb_m input');
    oInput.focus(function(){
        if (oInput.val() === '请填写您的E-mail'){
            oInput.val('');
        }
    });
    oInput.blur(function(){
        if(oInput.val() === ''){
            oInput.val('请填写您的E-mail');
        }
    });
    $('.nb_m button').click(function(){
        if(oInput.val() === '请填写您的E-mail'){
            alert('请填写您的E-mail~');
        }
    });

    //最后的导航了
    $('.subnav li').hover(function(){
        $(this).css('background','#7A7A7A');
        $(this).children('a').css('color','#FFF');
    },function(){
        $(this).css('background','#eee');
        $(this).children('a').css('color','#7A7A7A');
    });
});