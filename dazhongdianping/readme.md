# 启动项目
```
npm install
npm run mock
npm start

```

# 目录结构
```
首页开发
        |--app
            |--actions          #Redux - action
            |--components       #木偶组件
                |--Category     #轮播图
                |--CityList     #城市列表
                |--CurrentCity  #当前城市
                |--Header       #城市头部
                |--HomeAd       #超值特惠广告
                |--HomeHeader   #首页头部
                |--List         #猜你喜欢列表
                |--LoadMore     #滚动加载
            |--config           #localStoreKey
            |--constants        #Redux const 常量的定义
            |--containers       #智能组件
                |--City         #城市
                |--Home         #首页
            |--fetch            #get / post 数据
                |--home 
            |--reducers         #Redux reducers
            |--router           #配置路由
            |--static           #项目公用的静态文件
            |--store            #Redux store
            |--util             #工具函数
        |--mock 后台数据模拟
```
#开发准备

## fetch 获取/提交数据，以及开发环境下的数据 Mock

## 安装

用 npm 安装，执行`npm install whatwg-fetch --save`即可安装。为了兼容老版本浏览器，还需要安装`npm install es6-promise --save`

## 基本使用

### get 的基本使用

fetch`方法的第一个参数是 url ，第二个参数是配置信息。

```js
    var result = fetch('/api/1', {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });
```

以上代码的配置中，`credentials: 'include'`表示跨域请求是可以带cookie（fetch 跨域请求时默认不会带 cookie，需要时得手动指定 credentials: 'include'。这和 XHR 的 withCredentials 一样），`headers`可以设置 http 请求的头部信息。

### post 的基本使用

fetch 发起一个 post 请求（有`method: 'POST'`），第一个参数是 url，第二个参数是配置信息。

```js
    var result = fetch('/api/post', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        // 注意 post 时候参数的形式
        body: "a=100&b=200"
    });
```

fetch 提交数据之后，返回的结果也是一个 Promise 对象，跟 get 方法一样。


## 抽象`get`和`post`

如果每次获取数据，都向上面一样写好多代码，就太冗余了，我这里将 get 和 post 两个方法单独抽象出来。参见`./app/fetch/get.js`和`./app/fetch/post.js`的源码。

需要注意的是，`post.js`中，将参数做了处理。因为上面的代码中提到，`body: "a=100&b=200"`这种参数格式是有要求的，而平时在 js 中使用最多的是 JSON 格式的数据，因此需要转换一下，让它更加易用。

这两个方法抽象之后，接下来再用，就变得相当简单了。参见 `./app/fetch/data.js`

```js
    // '/api/1' 获取字符串
    var result = get('/api/1')

    result.then(res => {
        return res.text()
    }).then(text => {
        console.log(text)
    })
```

## 数据 Mock

### 安装

这里使用目前比较流行的 [koa](http://koa.bootcss.com/) 来做后端接口的模拟。因此要先安装 koa 极其相关的插件。执行`npm install koa koa-body koa-router --save-dev`

### 模拟接口

模拟接口的代码都写在`./mock`目录下，接口文件是`./mock/server.js`

然后在`./package.json`中增加如下代码，然后执行`npm run mock`即可启动模拟的接口服务。

```
  "scripts": {
    "mock": "node --harmony ./mock/server.js",
  },
```

### 使用 webpack-dev-server 的代理

koa 接口的端口是`3000`，而项目的接口是`8080`，这样不就跨域了吗？————如果默认情况下，肯定是跨域了。此时就需要 webpack-dev-server 做一个代理的转发。配置代码在`./webpack.config.js`中

```js
    devServer: {
        proxy: {
          // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
          // koa 代码在 ./mock 目录中，启动命令为 npm run mock
          '/api': {
            target: 'http://localhost:3000',
            secure: false
          }
        },
        // ...省略若干代码...
    }
```

# 模块开发
## 城市

###'City'页面

--显示当前城市
--允许修改城市
这两个功能，都需要 Redux 的支持，React 组件连接 Redux
```
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)
```

### 跳转到城市选择页

在`HomeHeader`组件中，加一个链接，点击时能跳转到城市选择页面。这里用到了`react-router`中的`<Link>`组件
```
<Link to="/city">
    <span>{this.props.cityName}</span>
    &nbsp;
    <i className="icon-angle-down"></i>
</Link>
```

### `Header`组件

页面最上部是一个橙色的 Header，显示页面标题，左侧有一个返回icon。不仅仅是这个页面，其他页面也会有这样的标题。多个页面公用的东西，我就抽离成一个组件。

在`./app/components`中创建`Header`组件，然后引用到`City`页面中，并传入页面标题

```
<Header title="选择城市"/>
```

`Header`组件显示标题，然后支持返回功能

```
render() {
        return (
            <div className="header">
                <span className="back-icon" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
    clickHandle(){
        window.history.back()
    }
```

### 显示当前城市

创建一个`CurrentCity`组件，并引用到`City`页面，然后将当前城市传递给它来显示

```
<CurrentCity cityName={this.props.userinfo.cityName}/>
```

`CurrentCity`组件只需要显示出当前城市即可。

```render() {
        return (
            <div className="current-city">
                <h2>{this.props.cityName}</h2>
            </div>
        )
    }
```

### 可选城市列表

创建一个`CityList`组件来显示可选城市的列表，点击每个城市，都需要将这个城市设置为当前城市，而这个设置的方法，我在`City`页面定义。代码结构如下：

```render() {
        return (
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
        )
    }
    changeCity(newCity){
        if(newCity == null){
            return
        }
        // 1.修改城市(redux)
        const userinfo = this.props.userinfo;
        userinfo.cityName = newCity;
        this.props.userInfoActions.update(userinfo)
        
        //2.修改localstorage
        localStore.setItem(CITYNAME,newCity)

        //3.跳转到首页
        hashHistory.push('/')

    }
```

在`CityList`组件中，要使用刚才定义的`changeCity`方法，即

```
 render() {
        return (
           <div className="city-list">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    <li onClick={this.clickHandle.bind(this, '北京')}>北京</li>
                    ...
                </ul>
            </div>
        )
    }
    clickHandle(newCity){
        var changeFn = this.props.changeFn;
        changeFn(newCity);
    }
```


## 轮播图

需要用到`react-swipe`这个插件，根据https://github.com/voronianski/react-swipe文档提示需要`npm install swipe-js-iso whatwg-fetch --save`即可。

## 超值特惠

该模块比较简单，就是从后台获取数据展示到前台

```
 return (
            <div id="home-ad">
                <h2>超值特惠</h2>
                <div className="ad-container clear-fix">
                    {this.props.data.map((item, index) => {
                        return <div key={index} className="ad-item fl">
                            <a href={item.link} target="_blank">
                                <img src={item.img} alt={item.title}/>
                            </a>
                        </div>
                    })}
                </div>
            </div>
        )
```

`./app/fetch/home/home.js`找到获取广告数据的函数。

```
export function getAdData() {
    const result = get('/api/homead')
    return result
}
```

## 猜你喜欢

在`./app/containers/Home/subpage`中创建`List.jsx`文件，并初始化一个基本的 React 
组件的代码。

开始之前，先交代一下后端数据的接口。打开`./app/fetch/home/home.js`，找到获取列表数据的函数

```
export function getListData(city, page) {
    const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page)
    return result
}
```


## 滚动加载

首先准备四个状态

```
this.state = {
    data: [], // 存储数据，上面的代码中已经使用了
    hasMore: false, // 记录当前状态下，是否还有更多数据，这个需要后端返回。true 即还有，false 即没了
    isLoadingMore: false, // 记录当前状态下，是否正在加载中。true 即正在加载中，false 即不是加载中状态
    page: 1 // 记录下一页的页码，首页的页码是 0
}
```

然后，还需要加一个`loadMoreData`的方法，即在点击“加载更多”时会触发的方法。加载首页数据和加载更多数据，这两个函数可以提取一些公共代码，具体的写法可以是

```
loadFirstPageData() {
    // 加载首页数据，result

    // 处理数据
    this.resultHandle(result)
}

loadMoreData() {
    // 加载下一页的数据，result

    // 处理
    this.resultHandle(result)
}

resultHandle() {
    // 解析数据，更改 state
}

```

接下来在`./app/components/`中创建`LoadMore`组件，并用上面传递过来的数据。

实现上拉加载更多：监控 window 的`scroll`方法，然后获取`ref="wrapper"`的DOM，利用`getBoundingClientRect()`方法获得距离底部的高度，然后看是否触发 loadMore 方法。

```
 return (
            <div className="load-more" ref="wrap">
                {
                    this.props.isLoadingMore
                    ?<span>缓冲中...</span>
                    :<span onClick={this.loadMoreHandle.bind(this)}>正在加载</span>
                }
            </div>
        )
loadMoreHandle() {
    this.props.loadMoreFn()
}
```
