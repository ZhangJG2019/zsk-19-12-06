var echarts = require('echarts')
// let echarts = require("echarts/lib/echarts");
// require("echarts/lib/chart/bar"); // 引入柱状图组件
// require("echarts/lib/chart/pie"); // 引入饼状图组件
// require("echarts/map/js/china.js"); // 引入中国地图组件
// // 引入提示框和title组件
// require("echarts/lib/component/tooltip");
// require("echarts/lib/component/title");
// require("echarts/theme/macarons"); //引入主题
// require("echarts/theme/shine");
let echartFun = {}

echartFun.pie = function (el, opt) {
  var myChart = echarts.init(document.getElementById(el))
  var color = [
    '#22cccc', '#3ea3d8', '#a1e5b9', '#feda67', '#e6bef2', '#3dc6e7', '#6de0e2',
    '#fd9f83', '#f97494', '#de65ad', '#e592d0', '#9d99f2',
    '#847ce7', '#98c0fd'
  ]
  console.log(opt)
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        var res = params.name
        res += '<br />总数：' + Number(params.value)
        return res
      }
    },
    series: [{
      name: '各应用总览',
      type: 'pie',
      radius: ['0', '55%'],
      center: ['50%', '50%'],
      clockwise: true,
      color: color,

      data: opt.data,
      label: {
        normal: {
          formatter: '{b}\n{d}%',
          textStyle: {
            color: '#555',
            fontSize: 15
          }
        }
      },
      labelLine: {
        normal: {
          show: true
        }
      },
      itemStyle: {
        normal: {
          borderWidth: 1,
          borderColor: '#ffffff'
        },
        emphasis: {
          borderWidth: 0,
          shadowBlur: 5,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  }
  myChart.setOption(option)
  window.onresize = myChart.resize
}
echartFun.map = function (data) {

  return {
    // backgroundColor: '#FFFFFF',
    title: {
      text: '全国地图大数据',
      // subtext: '虚构数据',
      x: 'center'
    },
    tooltip: {
      trigger: 'item'
    },

    // 左侧小导航图标
    visualMap: {
      show: true,
      x: 'left',
      y: 'center',
      splitList: [{
          start: 5000,
          end: 10000
        }, {
          start: 4000,
          end: 5000
        },
        {
          start: 3000,
          end: 4000
        }, {
          start: 1000,
          end: 3000
        },
        {
          start: 300,
          end: 1000
        }, {
          start: 0,
          end: 300
        }
      ],
      color: ['#5475f5', '#9feaa5', '#85daef', '#74e2ca', '#e6ac53', '#9fb5ea']
    },

    // 配置属性
    series: [{
      name: '数据',
      type: 'map',
      map: 'china',
      roam: false,
      label: {
        normal: {
          show: true // 省份名称
        },
        emphasis: {
          show: false
        }
      },
      data: data
    }]
  }
}
export default echartFun
