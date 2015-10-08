window.addEventListener("wheel", function(evt) {
    var factor = 6;
    var isVerticalScroll, isHorizontalScroll, scrollTarget;
    
    if (evt.target.tagName === "HTML") {
        // ページ全体のスクロールバー
        isVerticalScroll = evt.clientX > document.documentElement.clientWidth;
        isHorizontalScroll = evt.clientY > document.documentElement.clientHeight;
        scrollTarget = document.body;
    } else {
        var target = evt.target;
        // offsetX, offsetY: target左上を(0, 0)とした座標
        isVerticalScroll = target.scrollHeight > target.clientHeight && evt.offsetX > target.clientWidth;
        isHorizontalScroll = target.scrollWidth > target.clientWidth && evt.offsetY > target.clientHeight;
        scrollTarget = target;
    }
    
    if (isVerticalScroll && !isHorizontalScroll) {
        scrollTarget.scrollTop += evt.deltaY * factor;
        evt.returnValue = false;
    } else if (!isVerticalScroll && isHorizontalScroll) {
        scrollTarget.scrollLeft += evt.deltaY * factor;
        evt.returnValue = false;
    }
});