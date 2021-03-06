//封装cookie
//参数有name、value、expires、path

function setCookie(name,value,expires,path) {
	//获取过期时间
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + expires);
	
	//给path设置默认值
	path = path || '/';
	
	//设置cookie
	document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + oDate + ';path=' + path;
	
	return true;
}

//查询cookie
//参数name
function getCookie(name) {
	var sCookie = document.cookie;
	
	//根据'; '切割cookie
	var aCookie = sCookie.split('; ');

	//再次遍历数组进行切割
	for (var i = 0;i < aCookie.length;i++){
		var one = aCookie[i].split('=');
		if (one[0] === name) {
			return decodeURIComponent(one[1]);
		}
	}
}

//删除cookie
//参数name
function removeCookie(name) {
	document.cookie = name + '=;expires=-1';
	return true;
}

//这里两个问题 ，为什么return true；
//为什么最后name = 空，expires = -1？(刷新之后才会没有?还是对话关闭之后没有?会把原来的覆盖掉？)
//forEach 没有返回值