//轮播图
//遇见的问题  
//坑1：函数声明和var声明不能重复否则报错  
//坑2：document.getElementsByClassName拿到的是一个数组，所以必须给[0]
//坑3：document.getElementsByClassName里面不能加.
//巨坑：最后点击小圆点切换图片时的调用函数的this指向和闭包的问题
var wrap = document.getElementsByClassName("wrap")[0];
var left = document.getElementsByClassName("arrow_left")[0];
var right = document.getElementsByClassName("arrow_right")[0];
var index = 0;
//左点击轮播
function left1() {
    var newleft = parseInt(wrap.style.left) + 600;
    
    if(parseInt(wrap.style.left) == 0){
        wrap.style.left = -2400 +"px"
    }else{
        wrap.style.left = newleft + "px";
    }
    index--;
    if(index < 0) {
        index = 4
    }
    show();
}
//右点击轮播
function right1() {
    var newright = parseInt(wrap.style.left) - 600;
    if(parseInt(wrap.style.left) == -3600){
        wrap.style.left = -1200 +"px"
    }else{
        wrap.style.left = newright + "px";
    }
    index = index + 1;
    if(index > 4) {
        index = 0
    }
    // console.log(this.index);
    show();//调用小圆点
    return index;
}

left.onclick = function() {
    left1();
}
right.onclick = function() {
    right1();
}

//添加定时器setInterVal
var timer = null;
function time() {
    timer = setInterval(function(){
        right1()
    },1000)
}
time();

//鼠标放上去清除定时器
let box = document.getElementsByClassName("container")[0];
box.onmouseenter = function() {
    //  console.log(index);
    clearInterval(timer);
}
//鼠标移除加载定时器
box.onmouseleave = function() {
    time();
}

//控制小圆点
var showspan = document.getElementsByTagName("span");
// console.log(showspan);
function show() {
    for(var i = 0;i<showspan.length;i++) {
        showspan[i].className = ""
    }
    showspan[index].className = "on"
}
//index指的是当前图片下标的索引 ,i指当前准备点击的图片的索引 ，dis指的是当前图片的下标减去准备点击图片的索引

for(var i = 0;i<showspan.length;i++) {
    (function (i) {
        showspan[i].onclick = function() {
            var dis = index - i;
            // console.log(this);
            // console.log(dis + "=" + index + "-" + i);
            if(index == 4 && parseInt(wrap.style.left)!==-3000) {//当轮播图轮到第五张时
                dis = dis - 5;
            }
            if(index == 0 && parseInt(wrap.style.left) !== -600) {
                dis = dis + 5;
            }
            wrap.style.left = parseInt(wrap.style.left) + dis*600 + "px";
            index = i;
            
            // console.log(wrap.style.left + "=" + wrap.style.left + dis + '*' + 600);
            show();
           
        }
    })(i)
}
