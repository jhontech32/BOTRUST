import React, { Component } from 'react'

import Container from './Container'

class Detail extends Component {
  render () {
    const { navigation, route } = this.props
    const { item } = route.params || ''

    console.log('DATA DETAIL BANDAR', item)

    return (
      <Container
        data={item}
        navigation={navigation}
      />
    )
  }
}
export default Detail
