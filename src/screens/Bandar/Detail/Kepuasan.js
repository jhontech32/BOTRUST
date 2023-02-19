import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10
  },
  txtRating: {
    fontSize: 16,
    textAlign: 'center'
  }
})

class Kepuasan extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.txtRating}>RATING :</Text>
        <Text style={styles.txtRating}>{`😊😊😊😊😊 (5/5)`}</Text>
      </View>
    )
  }
}
export default Kepuasan