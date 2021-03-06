export default {
  pages: [
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用于小程序定位"
    },
  },
  "plugins": {
    "citySelector": {
      "version": "1.0.0",
      "provider": "wx63ffb7b7894e99ae"
    },
  },
}
