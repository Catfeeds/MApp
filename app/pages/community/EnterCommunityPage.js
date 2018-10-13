import React,{Component} from 'react';

import {View,Image,Text,TouchableOpacity,Platform} from 'react-native';


import CommunityStyles from '../../styles/community/CommunityStyles';
import CommonStyles from "../../styles/CommonStyles";

import {
    NoActionHeaderView,
} from 'Java110';

/**
 * 入驻小区 页面
 * 
 * add by wuxw 2018-10-10
 */
export default class EnterCommunityPage extends Component{

    
    constructor(props){
        super(props);
        this.state={};
        this._onBackPage = this._onBackPage.bind(this);
    }

    /**
     * 渲染页面
     */
    render(){
        return (
            <View>
                {this._renderHeader()}
            </View>
        );
    }

     /**
     * 头部信息
     * @returns {XML}
     * @private
     */
    _renderHeader() {

        return (
            <View style={((Platform.OS === 'android' && Platform.Version >= 19) || Platform.OS === 'ios') ? CommonStyles.header : CommonStyles.header_android_low}>
                <NoActionHeaderView
                    currentPageName={"入驻小区"}
                    backPageName={"返回"}
                    _onBackPage={this._onBackPage}
                />
            </View>
        );
    }


    /**
     * 返回
     * @private
     */
    _onBackPage() {
        this.props.navigation.goBack();
    }
}