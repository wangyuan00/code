import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="load-more" ref="wrap">
                {
                    this.props.isLoadingMore
                    ?<span>缓冲中...</span>
                    :<span onClick={this.loadMoreHandle.bind(this)}>正在加载</span>
                }
            </div>
        )
    }
    loadMoreHandle(){
        // 执行传递过来的loadMoreData函数
        this.props.loadMoreFn();
    }
    componentDidMount(){
        const loadMoreFn = this.props.loadMoreFn;
        const wrap = this.refs.wrap;//拿到DOM
        // console.log(wrap);
        // 节流的好处是保证在滚动时不会连续触发，优化性能
        let timeoutId;
        function callback(){
            // console.log(1);
            // 距离页面顶部的距离
            const top = wrap.getBoundingClientRect().top;
            // console.log(top);
            const windowHeight = window.screen.height;
            if(top && top<windowHeight){
                // 当wrap被滚动到暴露在页面的可视范围之内的时候，触发
                loadMoreFn()
            }

        }
        window.addEventListener('scroll',function(){
            if(this.props.isLoadingMore){
                return 
            }
            // console.log(2);
            if(timeoutId){
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback,50);
        }.bind(this),false)
    }
   
}

export default LoadMore