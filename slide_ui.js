function initCaptchaUI(){
    var Wrap = document.getElementById("wrap")
    var imgWrap = document.getElementById("img_wrap")
    var slideWrap = document.getElementById("slide_wrap")
    changeCssStyle(Wrap,"display","block")
}

function changeCssStyle(obj, attr, value) {
    obj.style[attr] = value;
    console.log(obj.style[attr]);
}