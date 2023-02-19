import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Icon, Text } from 'native-base'

import color from 'theme/color'

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: color.secondaryText,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.primaryText
  },
  txtEmptyPic: {
    fontSize: 14,
    paddingLeft: 10,
    color: color.textIcons
  },
  iconEmptyPic: {
    color: color.textIcons
  }
})

class NoBanner extends Component {
  render () {
    return (
      <View style={styles.wrapper}>
        <Icon
          name="images"
          type="Ionicons"
          style={styles.iconEmptyPic}
        />
        <Text style={styles.txtEmptyPic}>No Banner Available now !</Text>
      </View>
    )
  }
}
export default NoBanner
