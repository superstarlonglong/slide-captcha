function initCaptcha (){
	refreshImg();
}

function refreshBtnClick (){
	isSuccess = true;
	img_wrap_slide_btn.style.cssText = "";
	cutBlock.style.cssText = "";
	refreshImg();
}

function slideItemsDown (event){
	cutSlideimg()
	//获取当前坐标
	start_x = event.clientX
	//获取偏移量
	diff_x = slide_btn.offsetLeft
	start_slide = (new Date()).valueOf()
	event.preventDefault()
	isDown = true
	slide_btn.style.cursor = 'move'
	img_wrap_slide_btn.style.cursor = 'move'
	document.onmousemove = function(e){
		var event = e
		slideItemsMove(event)
	}

	document.onmouseup = function(e){
		var event = e
		slideItemsUp(event)
	}
}


function slideItemsMove (event){
	if(isDown == false){
		return
	}
	var nx = event.clientX
	move_x = nx - (start_x - diff_x)
	if(move_x >= 220){
		move_x = 220
	}else if(move_x < 0){
		move_x = 0
	}
	slide_btn.style.left = move_x + 'px'
	img_wrap_slide_btn.style.left = move_x + 'px'

}

function slideItemsUp(event){
	console.log(typeof(move_x));
	console.log(typeof(init_x));
	if(move_x > (init_x - 5) && move_x < (init_x + 5)){
		console.log("success")
		end_slide = (new Date()).valueOf()
		timer = ((end_slide - start_slide) / 1000).toFixed(1)
		img_wrap_slide_btn.style.opacity = "0"
		img_wrap_slide_btn.style.transition = "opacity 0.6s"
		cutBlock.style.opacity = "0"
    cutBlock.style.transition = "opacity 0.6s"
		slideType.className = "slide-text-type greenColor";
		slideType.innerHTML = "验证通过:";
		slideContent.innerHTML = "用时" + timer + "s";
		setTimeout(function(){
			cutBlock.style.display = "none";
			move_x = 0 
			slide_btn.style.left = img_wrap_slide_btn.style.left = move_x + "px"
			
			refreshImg();
	}, 600);
	}
	isDown = false
	slide_btn.style.cursor = 'default'
}

function cutSlideimg(){
	var cutWidth = 50
	var cutHeight = 50
	init_x = Math.floor(Math.random() * (220 - cutWidth * 2 - 4) + cutWidth)
	init_y = Math.floor(Math.random() * (200 - cutHeight * 2 - 4) + cutHeight)
	cutBlock.style.cssText = "top:" + init_y + "px;" + "left:" + init_x +  "px; display: block;"
	img_wrap_slide_btn.style.top = init_y + "px"
	img_wrap_slide_btn.style.backgroundPosition = "-" + init_y + "px -" + init_x + "px"
  img_wrap_slide_btn.style.opacity = "1"
	console.log(init_x);
	console.log(init_y);
}

function refreshImg(){
	var index = Math.round(Math.random() * 5);         // 该方法有等于0 的情况
	var imgSrc = "./assert/img_wrap/" + imgList[index] + "";
	img_wrap_slide_bg.setAttribute("src", imgSrc);
	img_wrap_slide_btn.style.backgroundImage = "url("+ imgSrc +")";
}