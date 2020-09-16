

wx.cloud.init()

Page({

  data: {
    butJson:"lllll",
    token:""
  },

  handleTap(e) {
    let _this = this;
    console.log(this.data)
    wx.navigateTo({
      url: `../${e.currentTarget.id}/${e.currentTarget.id}?token=`+_this.data.token
    })
  },
  onLoad:function(option){
    this.setData({
      token:option.token
    })
    wx.cloud.callFunction(
      {
        name: 'add',
        success: function(res) {
          // console.log(res) // 3
        },
        fail: console.error
      }
    )

    const db = wx.cloud.database({});
    const cont = db.collection('cityNum');
    // db.collection('cityNum').where({
    //   id:1
    // }).get({
    //   success: function (res) {
    //     console.log(res)
    //   }
    // }) 
    //  db.collection('cityNum').where({
    //     muId:"1"
    //   }).get().then(res => { console.log(res.data) });

    //   db.collection('cityNum').add({
    //     data:{
    //         id:2,
    //         place:'西区'
    //     },
    //     success(res){
    //         console.log(res)
    //     },
    //     fail:console.error
    // });
    // db.collection('cityNum').where({
    //   id:"2"
    // }).remove({
    //   success(res){
    //     console.log(res)
    //   },
    // fail:console.error
    // })
      // db.collection('cityNum').where({
      //   muId:"1"
      // }).remove()

    //  db.collection('todos').doc('XINLOt7E7L4wnKCE').remove()
  },


}); 