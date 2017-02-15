$(function(){

    //提交
    $('form').submit(function(){
		if($('.register_name').val() === ''){
			$('.register_name').css('border-color','#8e0c3a');
			$('.warn').html('请输入注册时的手机/邮箱');
            $('.register_name')[0].focus();
			return
		}
		if($('.password').val() === ''){
			$('.password').css('border-color','#8e0c3a');
			$('.warn').html('请输入您的密码~~');
            $('.password')[0].focus();
			return
		}
		alert('恭喜你登陆成功~');
        var
            oCookie = {
                name : $('.register_name').val(),
                password:$('.password').val()
            };
        setCookie('login',oCookie,7);
        location.href = '../index.html';
	});


    //set cookie
    if(getCookie('login')){
        console.log(getCookie('login'));
        alert(1);
        $('.register_name').val(getCookie('login').name);
        $('.password').val(getCookie('login').password);
    }
});