// classMenu.js
Page({
  data: {
    classification: [
      {
        title: "拍立得",
        classItem: [
          "全自动拍立得（3寸）",
          "宽幅拍立得（5寸）",
          "手动拍立得（3寸)",
          "胶卷机改装拍立得"
        ]
      },
      {
        title: "胶卷相机",
        classItem: [
          "LC-A",
          "戴安娜F+",
          "戴安娜mini",
          "鱼眼相机",
          "DIY相机",
          "双反相机",
          "风琴相机",
          "全景相机",
          "其他相机"
        ]
      },
      {
        title: "配件",
        classItem: [
          "相机配件",
          "相机包/挂绳",
          "胶卷",
          "拍立得相纸",
          "生活精品",
          "相册/书籍/印刷品"
        ]
      }
    ]
  },
  backToIndex:function(){
    wx.redirectTo({
      url: '../index/index',
    })
  }
})