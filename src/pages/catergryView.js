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
import {getCatInfo} from '../actions/initAction';
import Goods from '../pages/goodsView';
import Icon from 'react-native-vector-icons/FontAwesome';
 class Catergry extends Component{
    constructor(...props){
        super(...props);
        // this.state={
        //     leftBarList:{},
        //     selectedBar:0,
        //     selectedBarId:null,
        //     goodsList:{}
        // }
    }
    componentDidMount(){
        this.props.dispatch(getCatInfo());
    }
    render(){
        alert(this.props.data.data)
        if(this.props.data.status=='success'){
              return (
            <View style={{flex:1}}>
                {/* 顶部搜索 */}
                {this._search()}

                <View style={{flex:13,flexDirection:'row'}}>
                    {/* 左边导航 */}
                    {/* {this._leftBar()} */}
                    {/* 右边列表 */}
                     {/* {this._rightList()}  */}
                </View>
            </View>
        );
        }else{
            return(
            <View><Text>loading</Text></View>
            )
        }
       
    }

    
    _getCatList(){
         fetch('http://www.wxdevelop.com/we7/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=shop.category&mid=0&app=1')
        .then((response) => response.json())
        .then((responseJson) => {
           this.setState({
               leftBarList:responseJson.parent[0],
               leftBarListId:responseJson.parent[0][0].id,
               goodsList:responseJson.children
            })
        })
        .catch((error) => {
            console.error(error);
        });
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
        var leftBarList = this.state.leftBarList;
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
    _rightList(){
         var catid = this.state.selectedBarId;
        //  var GoodsList = this.state.goodsList[catid];
        //  var GoodsArr = [];
        //  for(let i = 0;i<GoodsList.length;i++){
        //     GoodsArr.push(
        //         <TouchableOpacity key={i}>
        //             <View style={{flexDirection:'column'}}>
        //                 <Image source={{uri:GoodsList[i].thumb}} style={{width:80,height:80}}/>
        //                 <Text>{GoodsList[i].name}</Text>
        //             </View>
        //         </TouchableOpacity>
        //     )
        //  }
        return(
            <View style={{flex:3,flexDirection:'row',backgroundColor:'white'}}>
                {/* {GoodsArr} */}
            </View>
        );
    }
    
}


const style = StyleSheet.create({

});
 function  mapStateToProps(state){
    return{
        data:state.Init.catList
    }
}
export default  connect(mapStateToProps)(Catergry);