### DOM
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