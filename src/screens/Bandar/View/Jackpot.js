import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import FastImage from 'react-native-fast-image'

const styles = StyleSheet.create({
  wrapper: {
    width: '100%'
  },
  imgPic: {
    width: '100%',
    height: 100
  }
})

class Jackpot extends Component {
  render () {
    return (
      <View style={styles.wrapper}>
        <FastImage
          style={styles.imgPic}
          source={{
            uri: 'https://files.fm/thumb_show.php?i=v887swm3m',
            priority: FastImage.priority.high,
            cache: FastImage.cacheControl.immutable
          }}
          resizeMode={FastImage.resizeMode.stretch}
        />
      </View>
    )
  }
}
export default Jackpot
