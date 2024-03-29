import '@tarojs/async-await'
import Taro, {Component} from '@tarojs/taro'
import Index from './pages/index'
import {Provider} from '@tarojs/mobx'
import './app.scss'
import Counter from './pages/index/store'
import Home from './pages/home/home'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const stores = {
  counter: new Counter()
}

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/home/home'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {
  }

  componentDidShow () {
  }

  componentDidHide () {
  }

  componentDidCatchError (e) {
    console.log('App componentDidCatchError', e)
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={stores}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
