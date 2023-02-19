import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Share,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { Icon } from 'native-base'

import color from 'theme/color'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 5,
    backgroundColor: color.primaryText
  },
  btnShared: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10
  },
  txtTitle: {
    fontSize: 15,
    paddingLeft: 10,
    color: color.starColor,
    fontWeight: 'bold'
  },
  iconShared: {
    fontSize: 20,
    color: color.starColor
  }
})

class Shared extends Component {
  onShare = async () => {
    const { year } = this.props

    const linked = 'https://shorturl.ac/aplikasi-bandar-terpercaya'

    try {
      const result = await Share.share({
        title: `Aplikasi Rekomendasi Bandar Terpercaya ${year}`,
        message: `Hai, Coba Install Aplikasi ini karena membantu sekali untuk memberikan rekomendasi bandar online terpercaya ${year}, Download Disini => ${linked}`,
        url: linked
      })
      if (result.action === Share.sharedAction) {
        console.log('SHARED ACTION', Share.sharedAction())
        if (result.activityType) {
          console.log('RESULT ACTIVITY TYPE', result.activityType)
          // shared with activity type of result.activityType
        } else {
          console.log('SHARED !')
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('DISMISED !')
        // dismissed
      }
    } catch (error) {
      console.log('ERROR SHARED')
    }
  }

  render () {
    const { title } = this.props

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btnShared}
          onPress={() => this.onShare()}
        >
          <Icon
            name="sharealt"
            type="AntDesign"
            style={styles.iconShared}
          />
          <Text style={styles.txtTitle}>{title}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

Shared.defaultProps = {
  title: ''
}

Shared.propTypes = {
  title: PropTypes.string
}

export default Shared
