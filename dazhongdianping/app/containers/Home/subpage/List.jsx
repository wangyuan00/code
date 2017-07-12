import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../../fetch/home/home.js'
import ListCompoent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

import './style.less'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	data:[],//存储列表信息
        	hasMore:false,//记录当前目录下是否还有更多的数据可供加载
            page:1 //下一页的页码

        }
    }
    render() {
        return (
            <div className="list-content">
               <h2>猜你喜欢</h2>
               {
               	  this.state.data.length
               	  ?<ListCompoent data={this.state.data}/>
               	  :<div>数据加载中...</div>
               }
               {
                  this.state.hasMore
                  ?<LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                  :''
               }
            </div>
        )
    }
    //获取首页数据
    componentDidMount(){
    	this.loadFirstPageData()
    }
    //获取首屏数据
    loadFirstPageData(){
    	const cityName = this.props.cityName;
    	const result = getListData(cityName,0);
    	// console.log(result)
    	this.resultHandle(result);
    }
    // 加载更多的数据
    loadMoreData(){
        // 点击即记录状态
        this.setState({
            isLoadingMore : true
        })
        const cityName = this.props.cityName;
        const page = this.state.page;//获取下一页的页码
        const result = getListData(cityName,page)
        this.resultHandle(result);
        // 增加page的计数
        this.setState({
            page : page +1,
            isLoadingMore:false
        })

    }
    // 数据处理
    resultHandle(result){
    	result.then(res => {
    		return res.json()
    	}).then(json => {
    		// 数据拆解
    		// console.log(json)
    		const hasMore = json.hasMore;
    		const data = json.data
    		// 存储数据
    		this.setState({
    			hasMore : hasMore,
    			data : this.state.data.concat(data)//拼接数据
    		})
    	})

    }
    
    
    
}

export default List