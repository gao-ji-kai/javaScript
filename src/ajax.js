function ajax(url, callback) {
    //1.创建XMLHttpRequest对象
    var xmlhttp
    if (window.XMLHttpRequest) {//如果有XMLHttpRequest  说明是IE7以后的版本
        xmlhttp = new XMLHttpRequest()
    } else {
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');//兼容早期浏览器
    }

    //2.发送请求  
    xmlhttp.open('GET', url, true)
    xmlhttp.send()

    //3.接受服务端响应
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var obj = JSON.parse(xmlhttp.responseText)
            // console.log(obj);
            callback(obj)
        }
    }
}

export default ajax