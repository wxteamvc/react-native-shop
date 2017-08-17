//屏幕宽和高
export const Dimensions = require('Dimensions');
export const ScreenWidth = Dimensions.get('window').width;
export const ScreenHeight = Dimensions.get('window').height;


//获取首页数据网址
export const SERVER_URL='http://www.wxdevelop.com/we7/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&app=1';
//获取产品栏目数据网址
export const PRODUCT_URL='http://www.wxdevelop.com/we7/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=shop.category&mid=0&app=1';
//图片域名
export const DOMAIN='http://www.wxdevelop.com/we7/attachment/';
//获取优惠券网址
export const COUPONS_URL='http://www.wxdevelop.com/we7/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=sale.coupon.getlist&mid=0&page=1&cateid=&_=1502956849968 ' ;                  
//搜索
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
    return 'http://www.wxdevelop.com/we7/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=goods.get_list&mid=0&keywords='+data.keywords+'&isrecommand='+data.isrecommand+'&ishot='+data.ishot+'&isnew='+data.isnew+'&isdiscount='+data.isdiscount+'&issendfree='+data.issendfree+'&istime='+data.istime+'&cate='+data.cate+'&order='+data.order+'&by='+data.by+'&merchid='+data.merchid+'&page='+data.page+'&_='+data.nowtime;
}
