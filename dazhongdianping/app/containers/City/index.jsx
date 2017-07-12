import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'
import { CITYNAME } from '../../config/localStoreKey'
import localStore from '../../util/localStore'


class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
        )
    }
    componentDidMount() {
        // console.log(localStore);
        // console.log(CITYNAME);
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
}

// -------------------redux react 绑定--------------------

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