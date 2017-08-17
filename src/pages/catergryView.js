"use strict";
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native';
import { connect } from 'react-redux';
<<<<<<< .mine
import {getCatInfo} from '../actions/catAction';
=======
import { getCatInfo } from '../actions/initAction';
>>>>>>> .theirs
import Goods from '../pages/goodsView';
import Search from '../component/search';
import Icon from 'react-native-vector-icons/FontAwesome';
<<<<<<< .mine
var {height, width} = require('Dimensions').get('window');
import Loading from '../component/loading'
 class Catergry extends Component{
    constructor(...props){
=======
var { height, width } = require('Dimensions').get('window');
class Catergry extends Component {
    constructor(...props) {

>>>>>>> .theirs
        super(...props);
        this.state = {
            selectedBar: 'isrecommand',
            selectedBarId: 'isrecommand'
        }
    }
    componentDidMount() {
        this.props.dispatch(getCatInfo());
    }
    componentWillReceiveProps(nextProps) {
        // if (this.props.data.status=="success"){
        //     this.setState({
        //         selectedBarId:this.props.data.data.parent[0][0].id
        //     }) 
        // }
    }
    render() {
        if (this.props.data.status == 'success') {
            return (
                <View style={{ flex: 1 }}>
                    {/* 顶部搜索 */}
                    <View style={{ backgroundColor: 'red', width: width, height: 40, justifyContent: 'center' }}>
                        <Search lbtn={'扫码'} search={'星空乐园系列'} h={30} rbtn={'搜索'} navigate={this.props.navigation} page={'Search'} />
                    </View>

                    <View style={{ flex: 13, flexDirection: 'row' }}>
                        {/* 左边导航 */}
                        {this._leftBar()}
                        {/* 右边列表 */}
                        {this._rightList()}
                    </View>
                </View>
            );
        } else {
            return (
                <Loading />
            )
        }
    }

    _leftBar() {
        if (this.props.data.data.parent == undefined) {
            return (
                <View><Text>loading</Text></View>
            )
        } else {
            var leftBarList = this.props.data.data.parent[0];
            var leftBarArr = [];
            for (let i = 0; i < leftBarList.length; i++) {
                leftBarArr.push(
                    <TouchableOpacity key={i} onPress={() => { this.setState({ selectedBar: i, selectedBarId: leftBarList[i].id }) }}>
                        <View style={{ flexDirection: 'row', backgroundColor: this.state.selectedBar == i ? 'white' : 'transparent' }}>
                            <View style={{ flex: 1, backgroundColor: this.state.selectedBar == i ? 'red' : 'transparent' }}></View>
                            <View style={{ flex: 50, padding: 5, alignItems: 'center' }}><Text style={{ fontSize: 18 }}>{leftBarList[i].name}</Text></View>
                        </View>
                    </TouchableOpacity>
                )
            };
            return (
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <TouchableOpacity onPress={() => { this.setState({ selectedBar: 'isrecommand', selectedBarId: 'isrecommand' }) }}>
                        <View style={{ flexDirection: 'row', backgroundColor: this.state.selectedBar == 'isrecommand' ? 'white' : 'transparent' }}>
                            <View style={{ flex: 1, backgroundColor: this.state.selectedBar == 'isrecommand' ? 'red' : 'transparent' }}></View>
                            <View style={{ flex: 50, padding: 5, alignItems: 'center' }}><Text style={{ fontSize: 18 }}>推荐分类</Text></View>
                        </View>
                    </TouchableOpacity>
                    {leftBarArr}
                </View>
            );
        }

    }
    _rightList() {
        if (this.state.selectedBarId != 'isrecommand') {
            var catid = this.state.selectedBarId;
            var GoodsList = this.props.data.data.children[catid];
            var GoodsArr = [];
            for (let i = 0; i < GoodsList.length; i++) {
                GoodsArr.push(
                    <TouchableOpacity key={i} onPress={() => { this.props.navigation.navigate('Goods', { search: { cate: GoodsList[i].id } }) }}>
                        <View style={{ flexDirection: 'column', width: width * 0.75 / 3, alignItems: 'center', marginTop: 20 }}>
                            <Image source={{ uri: GoodsList[i].thumb }} style={{ width: 80, height: 80, borderRadius: width * 0.75 / 3 }} />
                            <Text>{GoodsList[i].name}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }
            return (
                <View style={{ flex: 3, flexDirection: 'row', backgroundColor: 'white', flexWrap: 'wrap' }}>
                    {GoodsArr}
                </View>
            );
        } else {
            var GoodsList = this.props.data.data.children;
            var GoodsArr = [];
            for (let i in GoodsList) {
                for (let j = 0; j < GoodsList[i].length; j++) {
                    if (GoodsList[i][j].isrecommand == '1') {
                        GoodsArr.push(
                            <TouchableOpacity key={i + '-' + j} onPress={() => { this.props.navigation.navigate('Goods', { search: { cate: GoodsList[i][j].id } }) }}>
                                <View style={{ flexDirection: 'column', width: width * 0.75 / 3, alignItems: 'center', marginTop: 20 }}>
                                    <Image source={{ uri: GoodsList[i][j].thumb }} style={{ width: 80, height: 80, borderRadius: width * 0.75 / 3 }} />
                                    <Text>{GoodsList[i][j].name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                }
            }
            return (
                <View style={{ flex: 3, flexDirection: 'row', backgroundColor: 'white', flexWrap: 'wrap' }}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Goods', { search: {} }) }}>
                        <View style={{ flexDirection: 'column', width: width * 0.75 / 3, alignItems: 'center', marginTop: 20 }}>
                            <View style={{ width: 80, height: 80, padding: 20 }}>
                                <Icon name='list' size={40} />
                            </View>
                            <Text>所有商品</Text>
                        </View>
                    </TouchableOpacity>
                    {GoodsArr}
                </View>
            )
        }

    }

}

        data:state.ReducerCat.catList    }
}
export default connect(mapStateToProps)(Catergry);