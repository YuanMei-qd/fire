import * as echarts from '../../ec-canvas/echarts';
import geoJson from '../../data/data';

const app = getApp();
let option = {}
let cityCode = [
  {
      "name":"济南市",
      "code":370100,
      "count":0
  },
  {
      "name":"青岛市",
      "code":370200,
      "count":0
  },
  {
      "name":"淄博市",
      "code":370300,
      "count":0
  },
  {
      "name":"枣庄市",
      "code":370400,
      "count":0
  },
  {
      "name":"东营市",
      "code":370500,
      "count":0
  },
  {
      "name":"烟台市",
      "code":370600,
      "count":0
  },
  {
      "name":"潍坊市",
      "code":370700,
      "count":0
  },
  {
      "name":"济宁市",
      "code":370800,
      "count":0
  },
  {
      "name":"泰安市",
      "code":370900,
      "count":0
  },
  {
      "name":"威海市",
      "code":371000,
      "count":0
  },
  {
      "name":"日照市",
      "code":371100,
      "count":0
  },
  {
      "name":"临沂市",
      "code":371300,
      "count":0
  },
  {
      "name":"德州市",
      "code":371400,
      "count":0
  },
  {
      "name":"聊城市",
      "code":371500,
      "count":0
  },
  {
      "name":"滨州市",
      "code":371600,
      "count":0
  },
  {
      "name":"菏泽市",
      "code":371700,
      "count":0
  }
]

var geoCoordMap = {
  '济南市':[117.121225,36.66466],
  '菏泽市':[115.480656,35.23375],
  '济宁市':[116.59,35.38],
   '德州市':[116.39,37.45],
   '聊城市':[115.97,36.45],
 '泰安市':[117.13,36.18],
  '临沂市':[118.35,35.05],
  '淄博市':[118.05,36.78],
 '枣庄市':[117.57,34.86],
   '滨州市':[118.03,37.36],
  '潍坊市':[119.1,36.62],
   '东营市':[118.49,37.46],
   '青岛市':[120.3,36.62],
   '烟台市':[120.9,37.32],
   '威海市':[122.1,37.2],
   '日照市':[119.1,35.62],
   '济宁市':[116.7,35.42],
  //  '莱芜市':[117.70,36.28],
}
var data = [
  {name: '济南市', value: 390},
  {name: '菏泽市', value: 158},
  {name: '德州市', value: 252},
  {name: '聊城市', value: 99},
  {name: '泰安市', value: 189},
  {name: '临沂市', value: 52},
  {name: '淄博市', value: 158},
  {name: '枣庄市', value: 152},
  {name: '滨州市', value: 189},
  {name: '潍坊市', value: 160},
  {name: '东营市', value: 80},
  {name: '青岛市', value: 180},
  {name: '烟台市', value: 190},
  {name: '威海市', value: 290},
  {name: '日照市', value: 190},
  {name: '济宁市', value: 190},
  {name: '莱芜市', value: 290},
];
var max = 480, min = 9; // todo 
var maxSize4Pin = 100, minSize4Pin = 20;

var convertData = function (data) {
var res = [];
for (var i = 0; i < data.length; i++) {
  var geoCoord = geoCoordMap[data[i].name];
  if (geoCoord) {
      res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value)
      });
  }
}
return res;
};


echarts.registerMap('henan', geoJson);

option = {
    // backgroundColor: '#020933',
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        if(typeof(params.value)[2] == "undefined"){
          return params.name + ' : ' + params.value;
        }else{
          return params.name + ' : ' + params.value[2];
        }
      }
  },
/*   legend: {
      orient: 'vertical',
      y: 'bottom',
      x: 'right',
       data:['pm2.5'],
      textStyle: {
          color: '#fff'
      }
  },*/
      legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:['pm2.5'],
        textStyle: {
            color: '#fff'
        }
      }, 

    visualMap: {
      show: false,
      min: 0,
      max: 500,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: true,
      seriesIndex: [1],
      inRange: {
          // color: ['#3B5077', '#031525'] // 蓝黑
          // color: ['#ffc0cb', '#800080'] // 红紫
          // color: ['#3C3B3F', '#605C3C'] // 黑绿
          //color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
           //color: ['#23074d', '#cc5333'] // 紫红
          // color: ['#00467F', '#A5CC82'] // 蓝绿
          // color: ['#1488CC', '#2B32B2'] // 浅蓝
          // color: ['#00467F', '#A5CC82'] // 蓝绿
          // color: ['#00467F', '#A5CC82'] // 蓝绿
          // color: ['#00467F', '#A5CC82'] // 蓝绿
          color: ['#00467F', '#A5CC82'] // 蓝绿

      }
  },
    toolbox: {
      show: false,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    geo: {
      show: true,
      map: 'henan',
      label: {
          normal: {
              show: false
          },
          emphasis: {
              show: false,
          }
      },
      roam: true,
      itemStyle: {
          normal: {
              areaColor: 'transparent',
              borderColor: '#3fdaff',
              borderWidth: 2,
              shadowColor: 'rgba(63, 218, 255, 0.5)',
              shadowBlur: 0
          },
          emphasis: {
              areaColor: '#2B91B7',
          }
      }
  },
    series: [
      {
        name: 'light',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(data),
        symbolSize: 10,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: false
            }
        },
    },
    {
      type: 'map',
      map: 'jiangxi',
      geoIndex: 0,
      aspectScale: 0.75, //长宽比
      showLegendSymbol: false, // 存在legend时显示
      label: {
          normal: {
              show: false
          },
          emphasis: {
              show: false,
              textStyle: {
                  color: '#fff'
              }
          }
      },
      roam: true,
      itemStyle: {
          normal: {
              areaColor: '#031525',
              borderColor: '#FFFFFF',
          },
          emphasis: {
              areaColor: '#2B91B7'
          }
      },
      animation: false,
      data: data
  },

    ],

  };
  let chart = null;
  let initChart = (canvas, width, height, dpr)  => {
  // console.log(option)
  // let option = options ? options : option
    chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  

  // console.log(convertData(data));
  chart.showLoading();
  chart.hideLoading();


  chart.setOption(option);

  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: initChart,
    },
    propsToken:"",
    total: 0,
  },
  handleTap(){
    // console.log("click",chart,option)
  },
  onLoad:function(options){
    this.setData({propsToken:options.token})
    wx.request({
      url: 'http://139.199.98.175:8800/microservice/api/satellite-firepoint/get/all',
      header:{
        'Authorization':options.token
      },
      success: function(res) { //请求成功
        // console.log(res.data.data);//在调试器里打印网络请求到的json数据
        let tem = [];
        res.data.data.forEach(item => {
          tem.push(
            {
              name:item.countyName,
              value:[item.longitude,item.latitude,1]
            }
          )
            cityCode.forEach(member => {
              // console.log(parseInt(Number(item.countyCode)/100)*100 )

              if(parseInt(Number(item.countyCode)/100)*100 === member.code){
                member.count++;
              }
            })

         
        })

        let tem2 = [];
        cityCode.forEach(item => {
          tem2.push({
            name:item.name,
            value:item.count
          })
        })
        // console.log(cityCode)
        option.series[0].data = tem;
        option.series[1].data = tem2;
        // console.log(option.series[1].data)
        // chart.setOption(option);
        // console.log(tem,option)
       },
       fail: function(res) { // 请求失败
       }
    })
  },
  onReady:function(){
    // console.log("ready",this.data,option)  
  },
  incrementTotal (e) {    // 定义父组件的
    console.log(e.detail)    // 通过e.detail获取点击的那个对象
    var num = e.detail.num
    this.setData({
      total: this.data.total + e.detail.num
    })
  },


});
