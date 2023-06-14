## Ajax

Ajax = Asynchronous Javascript And XML “ 异步的js和xml”![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/24/167e05bddfd8dce9~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image)

在浏览器和服务器之间扮演秘书的角色

浏览器让xhr和服务器要数据，在数据没回来之前继续处理别的事情。xhr去向服务器要数据，服务器返回数据给xhr，xhr再通知浏览器，浏览器拿到数据开始渲染页面。

## 使用

### 1.创建Ajax核心对象XMLHttpRequest(记得考虑兼容性)

```
const xhr = null;
if(window.XMLHttpRequest){
	xhr = new XMLHttpRequest();
}else{
	xhr = new ActiveObject("Microsoft.XMLHttp")
}
```

### 2.向服务器发送请求

```

```

