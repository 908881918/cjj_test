//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    getColl:[
      "收藏",
      false
    ],
    collNum:0,
    shopNav:[
     {
        title: "全部商品",
        url: "../allGoods/allGoods"
     },
     {
       title: "上新",
       url:"#"
     },
     {
       title: "店铺活动",
       url: "#"
     }
   ],
   rollPart:{
     interval:4000,
     duration:500,
     images:[
       "https://gw.alicdn.com/imgextra/i4/803121383/TB2lL5GsXXXXXckXpXXXXXXXXXX_!!803121383.jpg_970x970q50s150.jpg_.webp",
       "https://gw.alicdn.com/imgextra/i4/803121383/TB2.CPIed0opuFjSZFxXXaDNVXa_!!803121383-0-shop_design.jpg_970x970q50s150.jpg_.webp",
       "https://gw.alicdn.com/imgextra/i1/803121383/TB2oKkXb9BjpuFjSsplXXa5MVXa_!!803121383-0-shop_design.jpg_970x970q50s150.jpg_.webp",
       "https://gw.alicdn.com/imgextra/i3/803121383/TB2EkcyX4Ia61BjSsziXXak4FXa_!!803121383-0-shop_design.jpg_970x970q50s150.jpg_.webp"
     ]
   },
   recommend:[
     "https://gw.alicdn.com/imgextra/i2/803121383/TB20BObor4npuFjSZFmXXXl4FXa_!!803121383-0-shop_design.jpg_970x970q50s150.jpg_.webp",
     "https://gw.alicdn.com/imgextra/i4/803121383/TB2HxMol9tkpuFjy0FhXXXQzFXa_!!803121383-0-shop_design.jpg_970x970q50s150.jpg_.webp",
     "https://gw.alicdn.com/imgextra/i2/803121383/TB2hkDuehtmpuFjSZFqXXbHFpXa_!!803121383-0-shop_design.jpg_970x970q50s150.jpg_.webp",
     "https://gw.alicdn.com/imgextra/i3/803121383/TB26GZEaB0kpuFjy1XaXXaFkVXa_!!803121383-0-shop_design.jpg_970x970q50s150.jpg_.webp",
     "https://gw.alicdn.com/imgextra/i2/803121383/TB2GI3BaCBjpuFjSsplXXa5MVXa_!!803121383-0-shop_design.jpg_970x970q50s150.jpg_.webp"
   ]
  },
  onShareAppMessage:function(){
    return {
       title:"this is Text",
       path:this.route,
    }
  },
  onClick:function(event){
    if(!this.data.getColl[1]){
      this.setData({
        "getColl[0]": "已收藏",
        "getColl[1]": true,
        collNum: this.data.collNum+1
      });
    }
    else{
      this.setData({
        "getColl[0]": "收藏",
        "getColl[1]": false,
        collNum: this.data.collNum-1
      });
    }
  }
})

