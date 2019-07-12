import Taro from '@tarojs/taro'
import {Button, Text, View} from '@tarojs/components'
import {inject, observer} from '@tarojs/mobx'
import './index.scss'


@inject('counter') @observer
export default class Index extends Taro.Component {

  _go = () => {
    Taro.navigateTo({
      url: '/pages/home/home'
    })
  }

  componentDidCatchError (e) {
    console.log('Index componentDidCatchError', e)
  }

  /**
   * 写成箭头函数，页面mobx刷新失效
   */
  componentWillMount = () => {
    console.log('Index componentWillMount')
  }

  render () {
    const {counter, increment, decrement, incrementAsync, asyncInc} = this.props.counter
    return (
      <View>
        <Text>Index page</Text>
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>
        <Button onClick={asyncInc}>Add Async</Button>
        <Text>{counter}</Text>
        <Button onClick={this._go}>go</Button>
      </View>
    )
  }
}
