// 引入css
require('../../css/lib/reset.css')
require('../../css/common/global.css')
require('../../css/common/grid.css')
require('../../css/page/index.less')
require('bootstrap/dist/css/bootstrap.min.css')
require('bootstrap/dist/js/bootstrap.min.js')

/* eslint-disable no-undef */
$('.g-bd').append('<p class="text">这是由js生成的一句话</p>')

// 增加事件
$('.btn').click(function () {
  require.ensure(['../components/dialog/index.js'], function (require) {
    var Dialog = require('../components/dialog/index.js')
    new Dialog()
  })
})

const Hello = str => {
  alert(str)
}

Hello("能不能解析es")
