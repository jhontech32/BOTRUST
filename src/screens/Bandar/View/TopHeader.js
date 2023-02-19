import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import color from 'theme/color'

const styles = StyleSheet.create({
  container: {
    // paddingVertical: 10,
    // paddingHorizontal: 10,
    // backgroundColor: color.bgColor
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderColor: color.dividerColor,
    backgroundColor: color.primaryText,
    shadowColor: color.successColor,
    shadowOpacity: 0.8,
    elevation: 8,
    shadowRadius: 15,
    shadowOffset: {
      width: 2,
      height: 15
    }
  },
  txtHeader: {
    fontSize: 13,
    textAlign: 'center',
    color: color.starColor,
    fontWeight: 'bold'
  }
})

class TopHeader extends Component {
  render () {
    const { year } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.txtHeader}>
          {`DAFTAR BANDAR ONLINE RESMI TERPERCAYA ${year}`}
        </Text>
      </View>
    )
  }
}
export default TopHeader
