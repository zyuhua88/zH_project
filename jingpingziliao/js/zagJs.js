Function.prototype.before=function(callback){
	var _self = this;
	callback();
	return function(){
		_self.apply(this,arguments)
	}
}
/**
 * function aa(){
		console.log("aaa")
	}
	aa.before(function(){
		console.log("before")
	})();
	输出结果   
	before
	aaa
			
 */
///使用前请先引用jquery
function http(url,method,data,func) {
    $.ajax({
        url: url,
        type: method,
        contentType: "application/json",
        data: data,
        success: function (res) {
            return typeof func === 'function' && func(res);
        }
    })
}



////遍历JSON数据
function fors(target, json) {
    var t = document.getElementById(target);
    
    var html = "";
    var html2 = "";
    for (var i = 0; i < json.length; i++){
        var html1 = t.innerHTML;
        for (var item in json[i]) {
            var reg = new RegExp("{{" + item + "}}","g");
            html = html1.replace(reg, json[i][item]);
            html1 = html;
//          console.log(item+" === "+json[i][item]);
        }
        
        html2 += html;
    }
    t.innerHTML = html2;
    
}

//时间戳转换成日期
function timestampToTime(timestamp) {
    var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return Y + M + D + h + m + s;
}
function timestampToTime2(timestamp) {
    var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate()<10?'0'+date.getDate():date.getDate();
    return Y + M + D;
}

///获取url参数的方法
function getParameter(name) {

    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");

    var r = window.location.search.substr(1).match(reg);

    if (r !== null) return unescape(r[2]);
    return "";

} 

function bindForm(data) {
    
    for (var i in data) {
        for (var item in data[i]) {
            $("input:text").each(function (index, items) {
                if ($(this).attr('name') === item) {
                    $(this).val(data[i][item]);
                }
            })
//            $("input:radio").each(function (index, items) {
//                if ($(this).attr('name') === item && $(this).val() === data[i][item]) {
//                    $(this).attr("checked", true);
//                } else {
//                    $(this).attr("checked", false)
//                }
//            })
            //$(":radio[name='" + item + "'][value='" + data[i][item] + "']").attr("checked", true);

            $("textarea").each(function (index, items) {
                if ($(this).attr('name') === item) {
                    $(this).val(data[i][item]);
                }
            })
            $("select").each(function (index, items) {
                if ($(this).attr('name') === item) {
                    $(this).val(data[i][item]);
                }
            })
        }
    }
    
}
function bindDateForm(data,id) {
    
    for (var i in data) {
        for (var item in data[i]) {
            $("#"+id+" input:text").each(function (index, items) {
                if ($(this).attr('name') === item) {
                    $(this).val(data[i][item]);
                }
            })
//            $("input:radio").each(function (index, items) {
//                if ($(this).attr('name') === item && $(this).val() === data[i][item]) {
//                    $(this).attr("checked", true);
//                } else {
//                    $(this).attr("checked", false)
//                }
//            })
            //$(":radio[name='" + item + "'][value='" + data[i][item] + "']").attr("checked", true);

            $("textarea").each(function (index, items) {
                if ($(this).attr('name') === item) {
                    $(this).val(data[i][item]);
                }
            })
            $("select").each(function (index, items) {
                if ($(this).attr('name') === item) {
                    $(this).val(data[i][item]);
                }
            })
        }
    }
    
}
function setData() {
    var d = {};
    $("input").each(function (index, items) {
        if ($(this).attr("type") === 'radio') {
            d[$(this).attr("name")] = $('input:radio[name="' + $(this).attr("name") + '"]:checked').val()
        } else {
            d[$(this).attr("name")] = $(this).val();
        }
    })
    $("select").each(function (index, items) {
        d[$(this).attr("name")] = $(this).val()
    })
    
    $("textarea").each(function (index, items) {
        d[$(this).attr("name")] = $(this).val()
    })



    return d;
}

function setDataFrom(id) {
    var d = {};
    $("#"+id+" input").each(function (index, items) {
        if ($(this).attr("type") === 'radio') {
            d[$(this).attr("name")] = $('input:radio[name="' + $(this).attr("name") + '"]:checked').val()
        } else {
            d[$(this).attr("name")] = $(this).val();
        }
    })
    $("select").each(function (index, items) {
        d[$(this).attr("name")] = $(this).val()
    })
    
    $("textarea").each(function (index, items) {
        d[$(this).attr("name")] = $(this).val()
    })



    return d;
}

function getcookie(values)
{
	return values.substring(values.indexOf("=")+1,values.length);
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}


function getUrl(myUrl,data){
	var _str = "";
	for(var key in data){
		_str += key +"=" +data[key]+"&";
	}
	_str = _str.slice(0,-1);
	var _find = myUrl.indexOf("?");
	if(_find === -1){
		myUrl +="?";
		myUrl += _str;
	}else{
		myUrl += _str;
	}
	return myUrl;
}

function objectClone(obj){
	return JSON.parse(JSON.stringify(obj));
}
