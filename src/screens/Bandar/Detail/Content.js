import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView
} from 'react-native'
import { Text } from 'native-base'

import color from 'theme/color'
import globalStyle from 'theme/style'

import FastImage from 'react-native-fast-image'

// import CustomHeader from 'components/CustomHeader'
import NoBanner from 'components/NoBanner'
import Shared from 'components/Shared'
import BottomButton from './BottomButton'
import Rating from './Rating'
import Verified from './Verified'

const styles = StyleSheet.create({
  // container: {
  //   flex: 1
  // },
  wrapper: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconApp: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderRadius: 10
    // marginTop: 10
  },
  descApp: {
    fontSize: 14,
    textAlign: 'center'
  },
  imgPic: {
    width: '100%',
    height: 120
  },
  txtNameApp: {
    fontSize: 22,
    paddingVertical: 10,
    fontWeight: 'bold',
    color: color.smoothText
  },
  txtHead: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  separator: {
    width: '100%',
    height: 50
  },
  wrapHeadLine: {
    paddingVertical: 5,
    backgroundColor: color.dividerColor
  }
})

class Content extends Component {
  state = {
    year: ''
  }

  componentDidMount () {
    this.setYearNow()
  }

  setYearNow = () => {
    const year = new Date().getFullYear()
    this.setState({ year })
  }

  render () {
    const { data } = this.props
    const { year } = this.state

    return (
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {
            data
          && data.bannerUrl
              ? (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => Linking.openURL(data && data.homeUrl)}
                >
                  <FastImage
                    style={styles.imgPic}
                    source={{
                      uri: data && data.bannerUrl,
                      priority: FastImage.priority.high,
                      cache: FastImage.cacheControl.immutable
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                  />
                </TouchableOpacity>
              )
              : (
                <NoBanner />
              )
          }
          <View style={styles.wrapHeadLine}>
            <Text style={styles.txtHead}>
              {`Bandar Online Resmi Terpercaya ${year}`}
            </Text>
          </View>
          <View style={styles.wrapper}>
            <Image
              source={data && data.image}
              style={styles.iconApp}
            />
            <Text style={styles.txtNameApp}>
              {`${data && data.name}`}
            </Text>
            <Text style={styles.descApp}>
              Bandar Online Terpercaya yang menyediakan permainan <Text style={globalStyle.boldText}>Slot Online</Text>, <Text style={globalStyle.boldText}>Togel Online</Text> dengan banyak pasaran yang sangat lengkap dan permainan <Text style={globalStyle.boldText}>Live Casino</Text> dengan kualitas streaming yang sangat baik.
            </Text>
            <Rating />
            <Verified />
          </View>
          <View style={styles.separator} />
        </ScrollView>
        <BottomButton data={data} />
        <Shared
          title="BAGIKAN APLIKASI"
          year={year}
        />
      </>
    )
  }
}
export default Content
