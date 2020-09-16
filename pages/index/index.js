//index.js
//获取应用实例
const app = getApp();
wx.cloud.init();
const db = wx.cloud.database({});

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tip:{
      show:false,
      data:"请输入正确的账号密码"
    },
    formData:{
      userName:"",
      password:""
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../main/main'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    // wx.request({
    //   url: 'http://139.199.98.175:8800/microservice/api/satellite-firepoint/get/all',
    //   success: function(res) { //请求成功
    //     console.log(res);//在调试器里打印网络请求到的json数据
    //    },
    //    fail: function(res) { // 请求失败
    //    }
    // })
  

  
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  formSubmit: function (e) {
    // console.log(e.detail.value);
    var that = this
    let judge = false;

    var _this = this;

    wx.request({
      url: 'http://139.199.98.175:8800/microservice/api/login',
      header: { "content-type": "application/x-www-form-urlencoded" },
      method:"POST",
      data: {
        userName: e.detail.value.userName ,
        password: e.detail.value.password
      },
      success: function (res) {
        if(res.data.status === 0){
          wx.navigateTo({
            url: '../main/main?token=' + res.data.data,
          });
          _this.setData({
            tip:{
              show:false,
              data:"请输入正确的账号密码"
            }
          });
          _this.setData({
            formData:{
              userName:"",
              password:""
            }
          })
        } else{

          _this.setData({
            formData:{
              userName:"",
              password:""
            }
          })

          _this.setData({
            tip:{
              show:true,
              data:"请输入正确的账号密码"
            }
          })
        }
     
      },
      fail: function(res) { // 请求失败
        console.log(res)
      }
    })

    // db.collection('userInfo').get().then(res => {
    //    res.data.forEach(item => {
    //      if(item.userName === e.detail.value.userName && item.password === e.detail.value.password){
    //         wx.navigateTo({
    //           url: '../main/main'
    //         });
    //         judge = true;
    //      } 
    //    })
    // }).then(() => {
    //   this.setData({
    //     formData:{
    //       userName:"",
    //       password:""
    //     }
    //   })
    //   if(!judge){
    //     this.setData({
    //       tip:{
    //         show:true,
    //         data:"请输入正确的账号密码"
    //       }
    //     })
    //   }
    // })
   
    
  }

})
