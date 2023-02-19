import React, { Component } from 'react'
import { View, StyleSheet, Linking } from 'react-native'
import { Button, Text } from 'native-base'

import color from 'theme/color'

const styles = StyleSheet.create({
  wrapper: {
    borderTopWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderColor: color.dividerColor,
    backgroundColor: color.textIcons,
    shadowColor: color.successColor,
    shadowOpacity: 0.8,
    elevation: 8,
    shadowRadius: 15,
    shadowOffset: {
      width: 2,
      height: 15
    }
  },
  btnDaftar: {
    borderRadius: 5
  },
  wrapDaftar: {
    width: '50%',
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  insider: {
    flexDirection: 'row'
  },
  hexTele: {
    backgroundColor: '#0088cc'
  },
  hexWhatsapp: {
    backgroundColor: '#28A745'
  }
})

class BottomButton extends Component {
  render () {
    const { data } = this.props
    const params = {
      text: `Hallo ${data && data.name}, Minta Prediksi untuk Hari ini dong 😊`,
      phone: '85599787041'
    }

    const telegram = 'https://t.me/+aBB2vSpG5t1hY2I9/'
    const whatsapp = `https://api.whatsapp.com/send?text=${params.text}&phone=${params.phone}`

    return (
      <View style={styles.wrapper}>
        <View style={styles.insider}>
          <View style={styles.wrapDaftar}>
            <Button
              full
              style={[styles.btnDaftar, styles.hexTele]}
              onPress={() => Linking.openURL(telegram)}
            >
              <Text>Cara Daftar</Text>
            </Button>
          </View>

          <View style={styles.wrapDaftar}>
            <Button
              full
              style={[styles.btnDaftar, styles.hexWhatsapp]}
              onPress={() => Linking.openURL(whatsapp)}
            >
              <Text>Daftar Sekarang</Text>
            </Button>
          </View>
        </View>
      </View>
    )
  }
}
export default BottomButton
