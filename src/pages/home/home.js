/**
 * Created by jialing on 2019-07-11.
 */

import Taro from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import {inject, observer} from '@tarojs/mobx'

@inject('counter') @observer
export default class Home extends Taro.Component {
  render () {
    const {counter} = this.props.counter
    return (
      <View>
        <Text>{counter}</Text>
      </View>
    )
  }
}
