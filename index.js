/*页面切换*/
var mySwiper = new Swiper(".swiper-container",{
    direction:'vertical',/*horizontal 横向  vertical 纵向*/
    effect:'coverflow',/*切换效果*/
    onTransitionEnd:function(swiper){
        //滑块滑动结束时会触发这个函数，到了当前显示的这个滑块，给当前显示的滑块增加相应的id名
        //1.先获取所有滑块
        var slides = swiper.slides;
        //2.获取当前显示的滑块
        var curIndex = swiper.activeIndex;//获得当前滑块的索引
        for(var i = 0;i<slides.length;i++){
            slides[i].id = "";//把所有滑块的id名去掉
        }
        //给当前显示的滑块增加id名
        slides[curIndex].id = "page"+(curIndex+1);
    }
});

var oDh = document.getElementById("daohang");
var oNav = document.getElementById("nav");
console.log(oDh,oNav);
console.log(oNav.style);
var navStyle = oNav.style;
oDh.onclick = function () {
    if (navStyle.display == "none"){
        navStyle.display = "block";
        navStyle.opacity = "1";
        console.log(navStyle.display);
    }else {
        navStyle.display = "none";
        navStyle.opacity = "0";
        console.log(navStyle.display);
    }
};
