window.addEventListener("wheel", function(evt) {
    var factor = 6;
    var isVerticalScroll, isHorizontalScroll, scrollTarget;
    
    if (evt.target.tagName === "HTML") {
        // ページ全体のスクロールバー
        // clientX, clientY: ブラウザウィンドウの左上を(0, 0)とした座標
        isVerticalScroll = evt.clientX > document.documentElement.clientWidth;
        // （doctypeなどの影響？）document.documentElement.clientHeightが使えない（bodyのheightを返す）場合に誤作動することを防ぐ
        isHorizontalScroll = evt.clientY > Math.min(document.documentElement.clientHeight, window.innerHeight);
        scrollTarget = document.body;
    } else if (evt.target.tagName !== "BODY") {
        var target = evt.target;
        // offsetX, offsetY: target左上を(0, 0)とした座標
        // スクロールバーが出ているか && 領域外か（＝スクロールバー上か）
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