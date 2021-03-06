import {
    StatusBar
} from 'react-native';

//屏幕宽和高
export const Dimensions = require('Dimensions');
export const ScreenWidth = Dimensions.get('window').width;
export const ScreenHeight = Dimensions.get('window').height;
//顶部状态栏高度
export const  StatusBarHeight = StatusBar.currentHeight;
export const BasicUrl = 'http://www.wxdevelop.com/we7/app/index.php';
//获取首页数据网址
export const SERVER_URL= BasicUrl + '?i=1&c=entry&m=ewei_shopv2&do=mobile&app=1';
//获取产品栏目数据网址
export const PRODUCT_URL=BasicUrl+'?i=1&c=entry&m=ewei_shopv2&do=mobile&r=shop.category&mid=0&app=1';
//图片域名
export const DOMAIN='http://www.wxdevelop.com/we7/attachment/';
//获取优惠券网址
export const COUPONS_URL=BasicUrl+'?i=1&c=entry&m=ewei_shopv2&do=mobile&r=sale.coupon.getlist&mid=0&page=1&cateid=';//搜索
export function search_url(newData={}) {
    let data = {
        keywords:"",
        isrecommand:"",
        ishot:"",
        isnew:"",
        isdiscount:"",
        issendfree:"",
        istime:"",
        cate:"",
        order:"",
        by:"",
        merchid:"",
        page:"1",
        nowtime:"",
    }
    Object.assign(data,newData);
    return BasicUrl+'?i=1&c=entry&m=ewei_shopv2&do=mobile&r=goods.get_list&mid=0&keywords='+data.keywords+'&isrecommand='+data.isrecommand+'&ishot='+data.ishot+'&isnew='+data.isnew+'&isdiscount='+data.isdiscount+'&issendfree='+data.issendfree+'&istime='+data.istime+'&cate='+data.cate+'&order='+data.order+'&by='+data.by+'&merchid='+data.merchid+'&page='+data.page+'&_='+data.nowtime;
}

//登陆请求地址
export const Login_URL = BasicUrl+'?i=1&c=entry&m=ewei_shopv2&do=mobile&r=account.login&mid=0&app=1';

//会员中心请求地址
export const USER_CENTER = BasicUrl+'?i=1&c=entry&m=ewei_shopv2&do=mobile&r=member&mid=0&app=1';

//商品详情请求网址
export const GOODSINFO = BasicUrl+'?i=1&c=entry&m=ewei_shopv2&do=mobile&r=goods.detail&mid=0&app=1';
//商品选项请求地址
export const GOODSPICKER = BasicUrl+'?i=1&c=entry&m=ewei_shopv2&do=mobile&r=goods.picker&mid=0';

//注册短信验证地址
export const VERIFY_CODE = 'http://www.wxdevelop.com/we7/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=account.verifycode'

//注册请求地址
export const REGISTER = 'http://www.wxdevelop.com/we7/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=account.register&app=1'

//购物车请求地址
export const CART_URL = 'http://www.wxdevelop.com/we7/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=member.cart&mid=0&app=1'
