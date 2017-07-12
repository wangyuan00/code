import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'

import './style.less'

class Category extends React.Component {
    /*
    轮播图需要用到一个第三方插件 https://github.com/voronianski/react-swipe 根据其文档要求需要安装插件，
    即`npm install react swipe-js-iso react-swipe --save`，这个插件的日常使用我已经验证过，大家可放心使用
    */
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }
    render() {
        const opt = {
            auto: 2500,
            callback: function (index) {
                // 更新当前轮播图的index
                this.setState({index: index});
            }.bind(this)
        }

        return (
            <div id="home-category">
                <ReactSwipe swipeOptions={opt}>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <li className="fl meishi">
                                <span></span>    
                                <p>美食</p>
                            </li>
                            <li className="fl maoyan">
                                <span></span> 
                                <p>猫眼电影</p>
                            </li>
                            <li className="fl jiudian">
                                <span></span> 
                                <p>酒店</p>
                            </li>
                            <li className="fl xiuxian">
                                <span></span> 
                                <p>休闲娱乐</p>
                            </li>
                            <li className="fl waimai">
                                <span></span> 
                                <p>外卖</p>
                            </li>
                            <li className="fl huoguo">
                                <span></span> 
                                <p>火锅</p>
                            </li>
                            <li className="fl liren">
                                <span></span> 
                                <p>丽人</p>
                            </li>
                            <li className="fl zhoubian">
                                <span></span> 
                                <p>周边游</p>
                            </li>
                            <li className="fl KTV">
                                <span></span> 
                                <p>KTV</p>
                            </li>
                            <li className="fl hunsha">
                                <span></span> 
                                <p>婚纱摄影</p>
                            </li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <li className="fl shenghuo">
                                <span></span> 
                                <p>生活服务</p>
                            </li>
                            <li className="fl jingdian">
                                <span></span> 
                                <p>经景点</p>
                            </li>
                            <li className="fl aiche">
                                <span></span> 
                                <p>爱车</p>
                            </li>
                            <li className="fl yundong">
                                <span></span> 
                                <p>运动健身</p>
                            </li>
                            <li className="fl gouwu">
                                <span></span> 
                                <p>购物</p>
                            </li>
                            <li className="fl qinzi">
                                <span></span> 
                                <p>亲子</p>
                            </li>
                            <li className="fl jiazhuang">
                                <span></span> 
                                <p>家装</p>
                            </li>
                            <li className="fl xuexi">
                                <span></span> 
                                <p>学习培训</p>
                            </li>
                            <li className="fl yiliao">
                                <span></span> 
                                <p>医疗健康</p>
                            </li>
                            <li className="fl daojia">
                                <span></span> 
                                <p>到家</p>
                            </li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <li className="fl xiaochi">
                                <span></span> 
                                <p>小吃快餐</p>
                            </li>
                            <li className="fl zizhucan">
                                <span></span> 
                                <p>自助餐</p>
                            </li>
                            <li className="fl rben">
                                <span></span> 
                                <p>日本菜</p>
                            </li>
                            <li className="fl meifa">
                                <span></span> 
                                <p>美发</p>
                            </li>
                            <li className="fl meijia">
                                <span></span> 
                                <p>美甲美睫</p>
                            </li>
                            <li className="fl SPA">
                                <span></span> 
                                <p>美容SPA</p>
                            </li>
                            <li className="fl shoushen">
                                <span></span> 
                                <p>瘦身纤体</p>
                            </li>
                            <li className="fl sheying">
                                <span></span> 
                                <p>亲子摄影</p>
                            </li>
                            <li className="fl youle">
                                <span></span> 
                                <p>亲子游乐</p>
                            </li>
                            <li className="fl quanbufenlei">
                                <span></span> 
                                <p>全部分类</p>
                            </li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Category