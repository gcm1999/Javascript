## DOM
+ #### getElementsById()
+ #### getElementsByTagName()
    document.getElementsByTagName('标签名')，返回伪数组
+ #### getElementsByClassName()
    返回伪数组对象
+ #### querySelector()
    返回选择器的第一个元素对象，需要加符号
    eg:document.querySelector('.class')
    eg:document.querySelector('#id')
+ #### querySelectorAll()
    返回所有选择器的元素对象

### 常见鼠标事件
    onclick     鼠标点击左键触发
    onmouseover 鼠标经过
    onmouseout  鼠标离开
    onfocus     获得鼠标焦点
    onblur      失去鼠标焦点
    onmousemove 鼠标移动
    onmouseup   鼠标弹起
    onmousedown 鼠标按下

### 常见键盘事件
    onkeyup     键盘某个键被松开时触发
    onkeydown   键盘某个键被按下时触发
    onkeypress  键盘某个键被按下时触发（不识别功能键 如 ctrl shift...区分大小写
    执行顺序    onkeydown > okeypress > onkeyup

### addEventListener('',function(e){})

+ #### e.target和this
        e.target返回触发事件的对象，this返回绑定事件的对象

+ #### 阻止默认行为（事件）
        e.prevenDefault()   
        e.returnValue       非标准
+ #### 阻止冒泡
        e.stopPropagation()     
        e.cancelBubble=true     非标准

## BOM

### 窗口（页面）加载事件
+   #### window.onload
        窗口（页面）加载事件，当文档内容（包括dom元素，图片，flash,css等）完全加载完触发该事件
        只能写一次，有多个以最后一个为准
        如果使用addEventListener则没有限制

+   #### DOMContenLoaded
        dom加载完毕触发事件，不包含图片，flash,css等，加载速度比load快

+ #### window.onresize()
        调整窗口大小事件,窗口大小发生像素变化时触发

### 定时器
+ #### window.setTimeout(调用函数,延迟毫秒数)
        延迟时间到了调用函数

+ #### window.clearTimeout(timer)

+ #### window.setInterval(调用函数,间隔时间)
        每隔间隔时间调用一次函数

+ #### window.clearInterval(timer)

### location对象常见属性
        location.href       url地址
        location.host       主机（域名
        location.port       端口
        location.pathname   路径
        locatio.search      返回参数
        location.hash       返回片段

### location对象常见方法
        location.assign()   和href一样，可以跳转页面（重定向页面
        location.replace()  替换当前页面，不记录历史，无法后退
        location .reload()  重新加载页面

## PC特效篇

### offset
        偏移量，动态获得元素的位置（偏移）、大小等
        返回数值，不带单位
        element.offsetParent    返回该元素带有定位的父级元素，都没有则返回body
        element.offsetTop       返回该元素带有定位的父级元素顶部的偏移量
        element.offsetLeft      返回该元素带有定位的父级元素左边的偏移量
        element.offsetWidth     返回该元素宽度，包含padding，border
        element.offsetHeight    返回该元素高度，包含padding，border

### offset和style区别
        offset可以得到任意样式表的样式值，style只能获得行内样式
        style.width获得带有单位的字符串,不包含padding和border
        style.width可以赋值，offset只能读取

### client
        element.clientWidth     返回该元素宽度，包含padding，不包含border
        element.clientHeight    返回该元素高度，包含padding，不包含border

### scroll
        element.scrollTop       返回该元素带有定位的父级元素顶部的偏移量
        element.scrollLeft      返回该元素带有定位的父级元素左边的偏移量
        element.scrollWidth     返回该元素实际宽度，包含padding，不包含border
        element.scrollHeight    返回该元素实际高度，包含padding，不包含border
        元素被卷去的头部是element.scrollTop,页面被卷去的头部是pageYOffset

### 立即执行函数
        {function(){}}()        或者    (function(){}());

### mouseover和mouseenter
        鼠标经过
        mouseover       冒泡
        mouseenter      不冒泡（搭配mouseleave使用，同样不会冒泡

## 本地存储
### window.sessionStorage
        生命周期：关闭浏览器窗口，在同一个窗口（页面）数据可以共享，键值对形式存储
        sessionStorage.setItem(key,value)       增
        sessionStorage.removeItem(key)          删
        sessionStorage.geyItem(key,value)       查
        sessionStorage.clear()                  删除所有
### window.localStorage
        生命周期：永久生效，需要手动删除，键值对形式存储
        localStorage.setItem(key,value)       增
        localStorage.removeItem(key)          删
        localStorage.geyItem(key,value)       查
        localStorage.clear()                  删除所有

# ES6
## let和const
        没有变量提升，块作用域，不会污染全局变量，不能重复声明，const声明后无法修改

## 箭头函数
        let fn = () => ();
        箭头函数没有this指向，内部this值只能通过查找作用域链来确定，不能通过new来实例化对象
