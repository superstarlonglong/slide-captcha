(()=>{function e(){const e=Math.round(5*Math.random());console.log(e);const t=`../assert/img_wrap/${imgList[e]}`;img_wrap_slide_bg.setAttribute("src",t),img_wrap_slide_btn.style.backgroundImage=`url(${t})`}sub.onclick=function(){e(),document.getElementById("wrap").style.display="block"},slide_btn.onmousedown=function(t){var s;s=t,isSuccess&&(init_x=50*Math.floor(5*Math.random()),init_y=50*Math.floor(3*Math.random()),cutBlock.style.cssText=`top:${init_y}px;left:${init_x}px; display: block;`,img_wrap_slide_btn.style.top=`${init_y}px`,img_wrap_slide_btn.style.backgroundPosition=`-${init_y}NaN${init_x}px`,img_wrap_slide_btn.style.opacity="0.8"),start_x=s.clientX,diff_x=slide_btn.offsetLeft,start_slide=(new Date).valueOf(),s.preventDefault(),isDown=!0,slide_btn.style.cursor="move",img_wrap_slide_btn.style.cursor="move",slide_btn.onmousemove=function(e){!function(e){if(!1===isDown)return;const t=e.clientX;move_x=t-(start_x-diff_x),move_x>=220?move_x=220:move_x<0&&(move_x=0),slide_btn.style.left=`${move_x}px`,img_wrap_slide_btn.style.left=`${move_x}px`}(e)},slide_btn.onmouseup=function(t){move_x>init_x-5&&move_x<init_x+5?(console.log("success"),end_slide=(new Date).valueOf(),timer=((end_slide-start_slide)/1e3).toFixed(1),img_wrap_slide_btn.style.opacity="0",img_wrap_slide_btn.style.transition="opacity 0.6s",cutBlock.style.opacity="0",cutBlock.style.transition="opacity 0.6s",slideType.style.display=slideContent.style.display="inline",slideType.className="slide-text-type greenColor",slideType.innerHTML="验证通过:",slideContent.innerHTML=`用时${timer}s`,setTimeout((()=>{isSuccess=!0,cutBlock.style.display="none",move_x=0,slide_btn.style.left=img_wrap_slide_btn.style.left=`${move_x}px`,e(),Wrap.style.display="none"}),600)):(isSuccess=!1,slideType.style.display=slideContent.style.display="inline",slideType.innerHTML="验证错误:",slideContent.innerHTML="请重新验证！",slideType.className="slide-text-type redColor",setTimeout((()=>{move_x=0,slide_btn.style.left=img_wrap_slide_btn.style.left=`${move_x}px`}),500)),isDown=!1,slide_btn.style.cursor="default",setTimeout((()=>{slideType.style.display=slideContent.style.display="none"}),500)}},refreshBtn.onclick=function(){isSuccess=!0,img_wrap_slide_btn.style.cssText="",cutBlock.style.cssText="",move_x=0,e()}})();