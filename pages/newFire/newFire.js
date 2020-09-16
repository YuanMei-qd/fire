Component({
  /**
   * 组件的属性列表
   */
  properties: {
    token: {          // num定义的就是点击每个按钮分别增加的数值,可以在调用组件的时候进行更改
      type: String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    counter: 0 ,     // counter定义的是每个按钮上的数值
    monitorData:[],
    constData:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 这里是一个自定义方法,每次点击按钮增加对应的数值
    // _incrementCounter (e) {
    //   let num = this.data.num
    //   this.setData({
    //     counter: this.data.counter + num
    //   })
    //  // 微信小程序中是通过triggerEvent来给父组件传递信息的
    //   this.triggerEvent('increment', {num: num})  // 将num通过参数的形式传递给父组件
    // },
    inputChange(e){
      // console.log(e.detail.value);
      // console.log(this.data.monitorData);
      let tem = [];
      // tem = this.data.monitorData.filter((item) => {
      //     return item.countyName === e.detail.value
      //   }
      // )

      var reg = new RegExp(e.detail.value);
      if(reg !== ""){
        this.data.constData.forEach((item) => {
          if(item.countyName.match(reg)){
            tem.push(item);
          } 
        });
        this.setData({
          monitorData:tem
        })
      }
      // console.log(tem)
    }
  },
  lifetimes: {
    attached: function() {
      // console.log(this.data.token)
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
    ready() {
      // 在组件在视图层布局完成后执行
      let _this = this;
      wx.request({
        url: 'http://139.199.98.175:8800/microservice/api/satellite-firepoint/get/all',
        header:{
          'Authorization':_this.data.token
        },
        success: function(res) { //请求成功
          _this.setData({
            monitorData:res.data.data,
            constData:res.data.data
          })
         },
         fail: function(res) { // 请求失败
         }
      })
    }
  }
})
