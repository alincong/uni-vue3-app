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

export default {
	getpagescroll
}