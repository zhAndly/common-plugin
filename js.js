//bind 若在ie浏览器中不兼容，处理方法
if(!function(){}.bind){
    Function.prototype.bind = function (context) {
        var self = this;
        var args = Array.prototype.slice.call(context,arguments);
        return function () {
            return self.apply(context,args.slice(1));
        }
    };
}

//call,apply,bind的用法
//对象
var aaa = {name:123}
//方法
function abc() {
    alert(this.name);
}
//将方法的this指向该对象
abc.call(aaa,arr1,arr2)//123
abc.apply(aaa,[arr1,arr2])//123
//apply第二个参数必须是数组，call第二部分的直接跟参数

function apply1(num1,num2) {
    return sum.apply(this,[num1,num2]);
}
function call1(num1,num2) {
    return sum.call(this,num1,num2);
}

var text = document.getElementById("text");
button.onclick = function(){
    alert(this.id);
}.bind(text);