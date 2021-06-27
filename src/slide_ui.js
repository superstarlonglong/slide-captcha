function initCaptchaUI() {
  const Wrap = document.getElementById('wrap');
   Wrap.style.display = 'block';
}

function changeCssStyle(obj, attr, value) {
  obj.style[attr] = value;
  console.log(obj.style[attr]);
}
