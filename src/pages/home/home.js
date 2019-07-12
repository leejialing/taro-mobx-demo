/**
 * Created by jialing on 2019-07-11.
 */

import Taro from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import {inject, observer} from '@tarojs/mobx'

@inject('counter') @observer
export default class Home extends Taro.Component {

  /**
   * 从home页面返回时，生命成箭头函数，发生错误
   * Cannot read property 'dispose' of undefined; [Component] Lifetime Method Error @ pages/home/home#detached
   */
  componentWillMount = () => {
    console.log('Home componentWillMount')
  }

  componentDidCatchError (e) {
    console.log('Home componentDidCatchError', e)
  }


  render () {
    const {counter} = this.props.counter
    return (
      <View>
        <Text>Home page</Text>
        <View>
          <Text>counter = {counter}</Text>
        </View>
      </View>
    )
  }
}
