import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import color from 'theme/color'

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10
  },
  txtRating: {
    fontSize: 16,
    textAlign: 'center'
  },
  upperCount: {
    fontSize: 26,
    fontWeight: 'bold',
    color: color.successColor
  },
  rightRate: {
    fontWeight: 'bold',
    color: color.smoothText
  }
})

class Rating extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.txtRating}>RATING :</Text>
        <Text style={styles.txtRating}>⭐⭐⭐⭐⭐ <Text style={styles.upperCount}> 5.0</Text><Text style={styles.rightRate}> / 5.0</Text></Text>
      </View>
    )
  }
}
export default Rating