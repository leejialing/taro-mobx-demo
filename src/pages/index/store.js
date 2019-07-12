/**
 * Created by jialing on 2019-07-11.
 */


import {observable, action} from 'mobx'

export default class {
  @observable counter = 0

  @action
  increment = () => {
    this.counter++
  }

  @action
  decrement = () => {
    this.counter--
  }

  @action
  incrementAsync = () => {
    setTimeout(() => this.counter++, 1000)
  }

  @action
  asyncInc = async () => {
    this.counter++
  }
}
