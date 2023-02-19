import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  View, StyleSheet, TouchableWithoutFeedback
} from 'react-native'
import {
  Text,
  Right,
  Icon
} from 'native-base'

import color from 'theme/color'

// import logoBoss from 'assets/app/boss.png'

const styles = StyleSheet.create({
  wrapHeaderBar: {
    backgroundColor: color.primaryColor
  },
  headTitle: {
    fontSize: 16,
    alignSelf: 'flex-start',
    color: color.textIcons,
    fontFamily: 'Poppins-Medium'
  },
  wrapHeadNav: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftSide: {
    width: '15%',
    alignItems: 'flex-start'
  },
  bodySide: {
    width: '60%'
  },
  rightSide: {
    width: '30%',
    position: 'absolute',
    right: 0
  },
  // separatorHide: {
  //   backgroundColor: color.primaryColor
  // },
  rightNativeSide: {
    alignSelf: 'flex-end'
  },
  // wrap: {
  //   flexDirection: 'row',
  //   width: '100%'
  // },
  // imgLogo: {
  //   width: 35,
  //   height: 35
  // },
  // txtSubtitle: {
  //   fontSize: 10,
  //   paddingLeft: 10,
  //   color: color.textIcons
  // },
  headBar: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: color.primaryColor,
    alignItems: 'center'
  }
})

class CustomHeader extends PureComponent {
  backFunc = () => {
    const { navigation } = this.props
    navigation.goBack()
  }

  render () {
    const {
      title,
      statusBarColor,
      rightMenu,
      backButton,
      uppercase,
      // rightIconName,
      // rightIconType,
      // goTo,
      // logo,
      // brandDesc,
      component,
      backFromReport,
      navigation
    } = this.props

    return (
      <View style={styles.wrapHeaderBar}>
        <View
          androidStatusBarColor={color.primaryColor}
          style={styles.headBar}
        >
          <View style={styles.wrapHeadNav}>

            {
              backButton ? (
                <View style={styles.leftSide}>
                  <TouchableWithoutFeedback transparent
                    onPress={() => (
                      backFromReport ? this.backFunc() : navigation.goBack()
                    )}
                  >
                    <Icon name="arrowleft" type="AntDesign" style={{ color: color.textIcons }} />
                  </TouchableWithoutFeedback>
                </View>
              ) : null
            }

            <View style={styles.bodySide}>
              <Text numberOfLines={1} uppercase={uppercase} style={styles.headTitle}>{title}</Text>
            </View>

            <View style={styles.rightSide}>
              {
                rightMenu ? (
                  <Right style={styles.rightNativeSide}>
                    {component}
                  </Right>
                ) : null
              }
            </View>

          </View>

        </View>
      </View>
    )
  }
}

CustomHeader.defaultProps = {
  backButton: true,
  rightMenu: false,
  uppercase: true,
  backFromReport: false
  // rightIconType: 'AntDesign'
}

CustomHeader.propTypes = {
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string,
  statusBarColor: PropTypes.string,
  rightMenu: PropTypes.bool,
  // rightIconName: PropTypes.string,
  // rightIconType: PropTypes.string,
  backButton: PropTypes.bool,
  uppercase: PropTypes.bool,
  backFromReport: PropTypes.bool
}

export default CustomHeader
