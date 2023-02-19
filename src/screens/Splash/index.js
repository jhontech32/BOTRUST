import React, { Component } from 'react'
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ActivityIndicator
} from 'react-native'
import { Text } from 'native-base'

import color from 'theme/color'

import SlotGacor from 'assets/splash-newest.png'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryText
  },
  txtIntro: {
    fontSize: 20,
    color: color.starColor,
    textAlign: 'center'
  },
  imgGacor: {
    width: 280,
    height: 280,
    marginTop: 50
  },
  wrapTop: {
    paddingTop: 60,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapBottom: {
    width: '100%',
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0
  },
  txtLabel: {
    fontSize: 12,
    color: color.textIcons,
    paddingVertical: 15
  },
  txtVersion: {
    fontSize: 11,
    color: color.textIcons
  },
  nameApp: {
    fontSize: 11,
    fontWeight: 'bold',
    color: color.starColor,
    textAlign: 'center'
  }
})

class Splash extends Component {
  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapTop}>
          <Text style={styles.txtIntro}>
            Kumpulan Rekomendasi Bandar Online Resmi dan Terpercaya.
          </Text>
          <Image
            source={SlotGacor}
            style={styles.imgGacor}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.wrapBottom}>
          <ActivityIndicator
            size="large"
            color={color.successColor}
          />
          <Text style={styles.txtLabel}>Sedang Memuat..</Text>
          <Text style={styles.txtVersion}>
            <Text style={styles.nameApp}>BANDAR TERPERCAYA!</Text>
            {' '}
- version 1.0.0
          </Text>
        </View>
      </SafeAreaView>
    )
  }
}

export default Splash
