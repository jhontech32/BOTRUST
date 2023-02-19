import React, { Component } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import color from 'theme/color'

import Content from './Content'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.textIcons
  }
})

class Container extends Component {
  render () {
    const { navigation, data } = this.props

    return (
      <SafeAreaView style={styles.container}>
        <Content
          data={data}
          navigation={navigation}
        />
      </SafeAreaView>
    )
  }
}
export default Container
