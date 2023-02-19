import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  insider: {
    paddingVertical: 10
  }
})

class Verified extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.insider}>
          <Text>SUDAH TERVERIFIKASI ✅</Text>
        </View>
      </View>
    )
  }
}
export default Verified
