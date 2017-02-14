$(function(){
    var 
        rName = $('.register_name');
    rName.focus(function(){
        $(this).val('');
    });
    rName.blur(function(){
        var reg = /.{3}\@.{3}\.com$/,
            reg1 = /^[0-9]{11}$/;
		if($(this).val().match(reg) === null && $(this).val().match(reg1) === null){
            $(this).css('border-color','#8e0c3a');
			$('.warn').html('请输入正确的手机/邮箱');
		} else {
			$('.warn').html('');
            $(this).css('border-color','rgb(238,238,238)');
		}
    });

    //密码
    $('.password').blur(function(){
        var reg = /^[\w\.]{8,20}$/;
		if($(this).val().match(reg) === null){
            $(this).css('border-color','#8e0c3a');
			$('.warn').html('密码只能是8-20位数字、字母、下划线、点');
		} else {
			$('.warn').html('');
            $(this).css('border-color','rgb(238,238,238)');
		}
    });

    //确认
    $('.confirm').blur(function(){
        if($(this).val() != $('.password').val()){
            $(this).css('border-color','#8e0c3a');
			$('.warn').html('与刚刚输入的密码不对哦~');
		} else if($(this).val() === ''){
			$('.warn').html('');
		} else{
            $(this).css('border-color','rgb(238,238,238)');
			$('.warn').html('');
		}
    });

    //提交
    $('form').submit(function(){
		if($('.register_name').val() === '手机注册更享好礼'){
			$('.register_name').css('border-color','#8e0c3a');
			$('.warn').html('请输入正确的手机/邮箱');
            $('.register_name')[0].focus();
			return
		}
		if($('.password').val() === ''){
			$('.password').css('border-color','#8e0c3a');
			$('.warn').html('密码只能是8-20位数字、字母、下划线、点');
            $('.password')[0].focus();
			return
		}
		if($('.confirm').val() != $('.password').val()){
			$('.confirm').css('border-color','#8e0c3a');
			$('.warn').html('与刚刚输入的密码不对哦~');
            $('.confirm')[0].focus();
			return
		}
		alert('恭喜你注册成功~');
        location.href = '../index.html';
	});
});