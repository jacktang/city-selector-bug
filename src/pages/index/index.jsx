import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onSelectCity() { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <selector-component
          show={true}
          key="W2CBZ-R4XE3-AAJ36-YXCLK-YNS5Z-MMF5H"
          referer="SmartTravel"
          hotCitys="北京"
          bindselect={this.onSelectCity.bind(this)}
        ></selector-component>
      </View>
    )
  }
}
