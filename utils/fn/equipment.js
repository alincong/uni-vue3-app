/*
  网页滚动距离
  //用法：let{width,height}=getpagescroll();
  如：拿到网页的高
  let bodyHeight=getpagescroll().y;
*/
export function getpagescroll() {
  let x, y;
  if (window.pageXOffset) {
    x = document.documentElement.scrollLeft;
    y = document.documentElement.scrollTop;
  } else if (document.compatMode === "BackCompat") {
    x = document.body.scrollLeft;
    y = document.body.scrollTop;
  } else {
    x = document.documentElement.scrollLeft;
    y = document.documentElement.scrollTop;
  }
  return {
    x: x,
    y: y,
  };
}

/*
	获取网页宽高
	//用法：let{width,height}=getScreen();
	如：拿到网页的高
	let bodyHeight=getScreen().height;
	* */
 export function getScreen() {
	let width, height;
	if (window.innerWidth) {
		width = window.innerWidth;
		height = window.innerHeight;
	} else if (document.compatMode === "BackCompat") {
		width = document.body.clientWidth;
		height = document.body.clientHeight;
	} else {
		width = document.documentElement.clientWidth;
		height = document.documentElement.clientHeight;
	}
	return {
		width: width,
		height: height,
	};
}