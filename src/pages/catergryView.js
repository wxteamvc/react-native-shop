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
import {getCatInfo} from '../actions/catAction';
import Goods from '../pages/goodsView';
import Search from '../component/search';
import Icon from 'react-native-vector-icons/FontAwesome';
var {height, width} = require('Dimensions').get('window');
import Loading from '../component/loading'
 class Catergry extends Component{
    constructor(...props){
        super(...props);
        this.state={
            selectedBar:0,
            selectedBarId:null
        }
    }
    componentDidMount(){
        this.props.dispatch(getCatInfo());
        
    }
    componentWillReceiveProps(nextProps){
        if (this.props.data.status=="success"){
            this.setState({
                selectedBarId:this.props.data.data.parent[0][0].id
            }) 
        }
    }
    render(){               
        if(this.props.data.status=='success'){
            return (
                <View style={{flex:1}}>
                    {/* 顶部搜索 */}
                    <View style={{ backgroundColor:'red', width: width, height: 40, justifyContent: 'center' }}>
                        <Search lbtn={'扫码'} search={'星空乐园系列'} h={30} rbtn={'搜索'} navigate={this.props.navigation} page={'Search'}/>
                    </View>

                    <View style={{flex:13,flexDirection:'row'}}>
                        {/* 左边导航 */}
                        {this._leftBar()}  
                        {/* 右边列表 */}
                         {this._rightList()}  
                    </View>
                </View>
            );
        }else{
            return(
                <Loading />
            )
        }
       
    }

    _search(){
        return(
            <View style={{flex:1,flexDirection:'row',marginTop:5,marginBottom:5}}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Home")}}>
                    <Icon name='angle-left' size={40} />
                </TouchableOpacity>
                </View>
                <View style={{flex:8,paddingRight:10,flexDirection:'row',alignItems:'center',borderRadius:10,backgroundColor:'#ccc',paddingLeft:10,marginRight:10}}>
                    <View style={{flex:1}}><Icon name='search' size={25}/></View>
                    <View style={{flex:12}}>
                        <TextInput
                            style={{height: 40,color:'#666'}}
                            //onChangeText={(text) => this.setState({text})}
                            value='输入关键字'
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>
            </View>
        )
    }

    _leftBar(){
        if(this.props.data.data.parent==undefined){
            return(
                <View><Text>loading</Text></View>
            )
        }else{
            // this.setState({
            //     selectedBarId:this.props.data.selectedBarId
            // });
            var leftBarList = this.props.data.data.parent[0];
            var leftBarArr=[];
            for(let i=0;i<leftBarList.length;i++){
                leftBarArr.push(
                    <TouchableOpacity key={i} onPress={()=>{this.setState({selectedBar:i,selectedBarId:leftBarList[i].id})}}>
                        <View style={{flexDirection:'row',backgroundColor:this.state.selectedBar==i?'white':'transparent'}}>
                            <View style={{flex:1,backgroundColor:this.state.selectedBar==i?'red':'transparent'}}></View>
                            <View style={{flex:50,padding:5,alignItems:'center'}}><Text style={{fontSize:18}}>{leftBarList[i].name}</Text></View>
                        </View>
                    </TouchableOpacity>
                )
            };
            return(
                <View style={{flex:1,flexDirection:'column'}}>
                    {leftBarArr}
                </View>
            );
        }
        
    }
    _rightList(){
        if(this.state.selectedBarId){
            var catid = this.state.selectedBarId;
            var GoodsList = this.props.data.data.children[catid];
            var GoodsArr = [];
            for(let i = 0;i<GoodsList.length;i++){
                GoodsArr.push(
                    <TouchableOpacity key={i} onPress={()=>{this.props.navigation.navigate('Goods',{search:{cate:GoodsList[i].id}})}}>
                        <View style={{flexDirection:'column',width:width*0.75/3,alignItems:'center',marginTop:20}}>
                            <Image source={{uri:GoodsList[i].thumb}} style={{width:80,height:80,borderRadius:width*0.75/3}}/>
                            <Text>{GoodsList[i].name}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }
            return(
                <View style={{flex:3,flexDirection:'row',backgroundColor:'white'}}>
                    {GoodsArr} 
                </View>
            );
        }else{
            return(
                <View style={{flex:3,flexDirection:'row',backgroundColor:'white'}}>
                    <Text>loading</Text>
                </View>
            )
        }
         
    }
    
}


const style = StyleSheet.create({

});
 function  mapStateToProps(state){
    return{
        data:state.ReducerCat.catList
    }
}
export default  connect(mapStateToProps)(Catergry);