"use strict"
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    TextInput,
    ToastAndroid,
} from 'react-native';
import { DOMAIN, ScreenWidth, ScreenHeight } from '../common/global';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { connect } from 'react-redux'
import Loading from '../component/loading';
import { getCoupons } from '../actions/couponsAction'
 class Coupons extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.dispatch(getCoupons())
    }

    coupons() {
        var result=this.props.data.data.result.list
        var list = [];
        for (var i = 0; i < result.length; i++) {
            list.push(
                <View key={i} style={{ height: 80, flexDirection: 'row', marginTop: 10, borderColor: '#ccc', borderBottomWidth: 1, borderTopWidth: 1 }}>
                    <View style={{ flex: 0.7, marginLeft: 10, justifyContent: 'center', }}>
                        <Text style={{ fontSize: 16, marginTop: 10, color: '#000' }}>{result[i].couponname}</Text>
                        <Text style={{ color: '#000' }}>永久有效</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity>
                                <Text style={{ color: '#EB6100' }}>免费领取</Text>
                            </TouchableOpacity>
                            <Text style={{ marginLeft: 10, color: '#000' }}>每人限 {result[i].getmax} 张</Text>
                        </View>
                        <Text></Text>
                    </View>
                    <View style={{ flex: 0.3 }}>
                        <Image source={require('../images/youhui.png')} style={{ width: ScreenWidth * 0.3, height: 80 }} resizeMode={'stretch'} />
                        <Text style={{ position: 'absolute', top: 20, right: 10, fontSize: 17, color: '#fff' }}>￥{result[i].deduct}</Text>
                        <Text style={{ position: 'absolute', top: 45, right: 10, fontSize: 17, color: '#fff' }}>{result[i].backstr}</Text>
                    </View>
                </View>
            )
        }
        return list
    }

    render() {
        if(this.props.data.status=='success'){
            return (
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 40, backgroundColor: 'red', opacity: 0.6 }}>
                        <View style={{ flex: 0.15, alignItems: 'flex-start', justifyContent: 'center', }}>
                            <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => this.props.navigation.goBack()}>
                                <Icon name={'chevron-left'} size={25} color={'#fff'} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.7, alignItems: 'center', justifyContent: 'center', }}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>优惠券领取中心</Text>
                        </View>
                        <View style={{ flex: 0.15, alignItems: 'flex-end', justifyContent: 'center' }}>
                            <TouchableOpacity style={{ marginRight: 10 }}
                                onPress={() => {
                                    this.props.navigation.navigate('UserIndex')
                                }
                                }>
                                <Icon name={'user'} size={25} color={'#fff'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: '#ccc', height: 50 }}>
                        <Text style={{ color: '#FF6600', fontSize: 18, padding: 10, borderColor: '#FF6600', borderBottomWidth: 2, flex: 0.25 }}>全部优惠券</Text>
                    </View>
                    <ScrollView>
                        {this.coupons()}
                    </ScrollView>
    
                </View>
            )
        }else{
            return (<Loading/>)
        }
        
    }


}


function mapStateToProps(state) {
    return {
        data: state.Coupons
    }
}

export default connect(mapStateToProps)(Coupons);