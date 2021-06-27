function initCaptcha() {
    refreshImg();
}

function refreshBtnClick() { // 重置参数和图片
  isSuccess = true;
  img_wrap_slide_btn.style.cssText = '';
  cutBlock.style.cssText = '';
  move_x = 0;
    refreshImg();
}

function slideItemsDown(event) {
  if (isSuccess) {
    cutSlideimg();
  }
  // 获取当前坐标
  start_x = event.clientX;
  // 获取偏移量
  diff_x = slide_btn.offsetLeft;

  start_slide = (new Date()).valueOf();
  event.preventDefault();
  isDown = true;
  slide_btn.style.cursor = 'move';
  img_wrap_slide_btn.style.cursor = 'move';
  slide_btn.onmousemove = function (e) {
    const event = e;
    slideItemsMove(event);
  };

  slide_btn.onmouseup = function (e) {
    const event = e;
    slideItemsUp(event);
  };
}

function slideItemsMove(event) {
  if (isDown == false) {
    return;
  }
  const nx = event.clientX;// 获取移动坐标
  move_x = nx - (start_x - diff_x);
  if (move_x >= 220) {
    move_x = 220;
  } else if (move_x < 0) {
    move_x = 0;
  }
  slide_btn.style.left = `${move_x}px`;
  img_wrap_slide_btn.style.left = `${move_x}px`;
}

function slideItemsUp(event) {
  if (move_x > (init_x - 5) && move_x < (init_x + 5)) { // 如果验证正确
    console.log('success');
    end_slide = (new Date()).valueOf();
    timer = ((end_slide - start_slide) / 1000).toFixed(1);
    img_wrap_slide_btn.style.opacity = '0';
    img_wrap_slide_btn.style.transition = 'opacity 0.6s';
    cutBlock.style.opacity = '0';
    	cutBlock.style.transition = 'opacity 0.6s';
    slideType.style.display = slideContent.style.display = 'inline';
    slideType.className = 'slide-text-type greenColor';
    slideType.innerHTML = '验证通过:';
    slideContent.innerHTML = `用时${timer}s`;
    setTimeout(() => {
      isSuccess = true;
      cutBlock.style.display = 'none';
      move_x = 0;
      slide_btn.style.left = img_wrap_slide_btn.style.left = `${move_x}px`;
      refreshImg();
      Wrap.style.display = 'none';
    }, 600);
  } else { // 如果验证错误
    isSuccess = false;
    slideType.style.display = slideContent.style.display = 'inline';
    slideType.innerHTML = '验证错误:';
    slideContent.innerHTML = '请重新验证！';
    slideType.className = 'slide-text-type redColor';
    setTimeout(() => {
      move_x = 0;
      slide_btn.style.left = img_wrap_slide_btn.style.left = `${move_x}px`;
    }, 500);
  }
  isDown = false;
  slide_btn.style.cursor = 'default';
  setTimeout(() => {
    slideType.style.display = slideContent.style.display = 'none';
  }, 500);
}

function cutSlideimg() {
  const cutWidth = 50;
  const cutHeight = 50;
  init_x = (Math.floor(Math.random() * 5) * cutWidth);
  init_y = (Math.floor(Math.random() * 3) * cutHeight);
  cutBlock.style.cssText = `top:${init_y}px;` + `left:${init_x}px; display: block;`;
  img_wrap_slide_btn.style.top = `${init_y}px`;
  img_wrap_slide_btn.style.backgroundPosition = `-${init_y}${+'px -'}${init_x}px`;
  	img_wrap_slide_btn.style.opacity = '0.8';
}

function refreshImg() {
  const index = Math.round(Math.random() * 5);
  console.log(index);
  const imgSrc = `./assert/img_wrap/${imgList[index]}`;
  img_wrap_slide_bg.setAttribute('src', imgSrc);
  img_wrap_slide_btn.style.backgroundImage = `url(${imgSrc})`;
}
