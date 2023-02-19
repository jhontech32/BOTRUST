import React, { Component } from 'react'

import Bandars from '../../Bandar/View'

class Content extends Component {
  render () {
    const { navigation } = this.props

    return (
      <>
        <Bandars
          navigation={navigation}
        />
      </>
    )
  }
}

export default Content
