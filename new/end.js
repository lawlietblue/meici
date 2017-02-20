$(function(){
    //判断有没有cookie
    console.log($.cookie('Goods'));
    if($.cookie('Goods')){
        $('.cart_none').css('display','none');
        $('.relative').css('display','none');
        $('.buylist').css('display','block');
        var buys = JSON.parse($.cookie('Goods'));
            var oDiv = $('<tr><td><a href="#"><img src="img/s-114720-1.jpg"></a></td><td><a href="#">Burberry 博柏利 牛皮 女士 钥匙包</a></td><td>1</td><td>￥1740.00</td><td><a href="#">移至收藏</a><a href="#">删除商品</a></td></tr>');
            for(var i = 0;i < buys.length;i++){
                var oP = '<tr><td><a href="#"><img src="'+ buys[i].url +'"></a></td><td><a href="#">'+ buys[i].name + buys[i].subname +'</a></td><td>1</td><td>￥'+ buys[i].price +'</td><td><a href="#">移至收藏</a><a href="#" class="del">删除商品</a></td></tr>';
                $('.ti').after(oP);
            }
            $('.buylist span').text('￥' + buys.length * buys[0].price);
            $('.del').click(function(){
                var s = confirm('确定要删除吗');
                if(s==true){
                    $(this).parent().parent().remove();
                    buys.splice($(this).index(),1);
                    if(buys.length == 0){
                        $.cookie('Goods',null);
                    } else{
                        $.cookie('Goods',JSON.stringify(buys), { path: "/", expiress: 7 });
                        $('.buylist span').text('￥' + buys.length * buys[0].price);
                    }
                }
                return false;
            });
    }

    $('.paypay').click(function(){
        location.href="pay.html";
        return false;
    });
    
});