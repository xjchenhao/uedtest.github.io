window.onload = function () {
    //--------------------------------------------------------【判断设备修改样式】
    var userAgent = navigator.userAgent,
        regMobileDevice = /(phone|pod|iPhone|iPod|ios|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;
    if (!userAgent.match(regMobileDevice)) {
        document.getElementsByTagName('body')[0].classList.remove('mobile');
    }

    //--------------------------------------------------------【隐藏加载动画】
    document.getElementById('pageLoading').classList.add('js_hide');
};