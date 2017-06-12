//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
   shopNav:[
     {
       title: "全部商品"
     },
     {
       title: "上新"
     },
     {
       title: "店铺活动"
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
  classification:function(){
    wx.redirectTo({
      url: '../classMenu/classMenu',
    })
  },
  onShareAppMessage:function(){
    return {
       title:"this is Text",
       path:this.route,
    }
  }
})

