window.addEventListener("wheel", function(evt) {
    if (evt.target.tagName === "HTML") {
        var isVerticalScroll = evt.clientX > document.documentElement.clientWidth;
        var isHorizontalScroll = evt.clientY > document.documentElement.clientHeight;
        
        var factor = 6;
        if (isVerticalScroll && !isHorizontalScroll) {
            document.body.scrollTop += evt.deltaY * factor;
            evt.returnValue = false;
        } else if (!isVerticalScroll && isHorizontalScroll) {
            document.body.scrollLeft += evt.deltaY * factor;
            evt.returnValue = false;
        }
    }
});