import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class CityList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
           <div className="city-list">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    
                        <li onClick={this.clickHandle.bind(this, '北京')}>北京</li>
                    
                 
                        <li onClick={this.clickHandle.bind(this, '上海')}>上海</li>
                    
                  
                        <li onClick={this.clickHandle.bind(this, '广州')}>广州</li>
                 
                  
                        <li onClick={this.clickHandle.bind(this, '深圳')}>深圳</li>
                   
                  
                        <li onClick={this.clickHandle.bind(this, '武汉')}>武汉</li>
                 
                    
                        <li onClick={this.clickHandle.bind(this, '成都')}>成都</li>
                 
                 
                        <li onClick={this.clickHandle.bind(this, '南京')}>南京</li>
                
                 
                        <li onClick={this.clickHandle.bind(this, '天津')}>天津</li>
                   
                 
                        <li onClick={this.clickHandle.bind(this, '重庆')}>重庆</li>
                  
                
                        <li onClick={this.clickHandle.bind(this, '厦门')}>厦门</li>
                  
                  
                        <li onClick={this.clickHandle.bind(this, '杭州')}>杭州</li>
                
                  
                        <li onClick={this.clickHandle.bind(this, '西安')}>西安</li>
              
                </ul>
            </div>
        )
    }
    clickHandle(newCity){
    	// console.log(newCity);
    	var changeFn = this.props.changeFn;
    	changeFn(newCity);
    }
}


export default CityList
