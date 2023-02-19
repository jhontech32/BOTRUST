import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { Icon } from 'native-base'

import color from 'theme/color'

import DANATOTO from 'assets/PHASE2/DANATOTO/ic_launcher.png'
import DINGDONG from 'assets/PHASE2/DINGDONG/ic_launcher.png'
import FIATOGEL from 'assets/PHASE2/FIATOGEL/ic_launcher.png'
import GENGTOTO from 'assets/PHASE2/GENGTOTO/ic_launcher.png'
import GOLTOGEL from 'assets/PHASE2/GOLTOGEL/ic_launcher.png'
import HOMETOGEL from 'assets/PHASE2/HOMETOGEL/ic_launcher.png'
import INDRATOGEL from 'assets/PHASE2/INDRATOGEL/ic_launcher.png'
import JONITOGEL from 'assets/PHASE2/JONITOGEL/ic_launcher.png'
import LINETOGEL from 'assets/PHASE2/LINETOGEL/ic_launcher.png'
import LUNATOGEL from 'assets/PHASE2/LUNATOGEL/ic_launcher.png'
import MARIATOGEL from 'assets/PHASE2/MARIATOGEL/ic_launcher.png'
import NANASTOTO from 'assets/PHASE2/NANASTOTO/ic_launcher.png'
import OPPATOTO from 'assets/PHASE2/OPPATOTO/ic_launcher.png'
import PARTAITOGEL from 'assets/PHASE2/PARTAITOGEL/ic_launcher.png'
import PROTOGEL from 'assets/PHASE2/PROTOGEL/ic_launcher.png'
import PWVIP4D from 'assets/PHASE2/PWVIP4D/ic_launcher.png'
import SITUSTOTO from 'assets/PHASE2/SITUSTOTO/ic_launcher.png'
import TOGELON from 'assets/PHASE2/TOGELON/ic_launcher.png'
import TOGELUP from 'assets/PHASE2/TOGELUP/ic_launcher.png'
import UDINTOGEL from 'assets/PHASE2/UDINTOGEL/ic_launcher.png'
import YOKTOGEL from 'assets/PHASE2/YOKTOGEL/ic_launcher.png'
import YOWESTOGEL from 'assets/PHASE2/YOWESTOGEL/ic_launcher.png'
import ZIATOGEL from 'assets/PHASE2/ZIATOGEL/ic_launcher.png'
import PATIHTOTO from 'assets/PHASE2/PATIHTOTO/ic_launcher.png'
// import WDBOS from 'assets/PHASE2/WDBOS/ic_launcher.jpeg'

const styles = StyleSheet.create({
  btnSlot: {
    width: '33.4%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: color.dividerColor
  },
  markLogo: {
    width: 55,
    height: 55,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10
  },
  name: {
    fontSize: 14,
    color: color.primaryText,
    fontWeight: 'bold'
  },
  iconStar: {
    fontSize: 10,
    paddingVertical: 2
  },
  wrapInsider: {
    borderRadius: 5,
    width: 120,
    height: 125,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: color.dividerColor
  },
  wrapNameApp: {
    flexDirection: 'row',
    alignItems: 'center',
    color: color.smoothText
  },
  iconSearch: {
    fontSize: 13,
    color: color.smoothText,
    paddingRight: 4
  }
})

class List extends Component {
  render () {
    const { navigation } = this.props

    const ref = 'demigod168'
    // const ref2 = 'kingwd'

    const data = [
      {
        name: 'DANATOTO',
        image: DANATOTO,
        bannerUrl: 'https://files.fm/thumb_show.php?i=53hzmruzz',
        homeUrl: `https://danatoto176.com/link.php?member=${ref}`
      },
      {
        name: 'DINGDONG',
        image: DINGDONG,
        bannerUrl: 'https://files.fm/thumb_show.php?i=esc222rzu',
        homeUrl: `https://dingdongtogel176.com/link.php?member=${ref}`
      },
      {
        name: 'FIATOGEL',
        image: FIATOGEL,
        bannerUrl: 'https://files.fm/thumb_show.php?i=2yzuz67jb',
        homeUrl: `https://fiatogel176.com/link.php?member=${ref}`
      },
      {
        name: 'GENGTOTO',
        image: GENGTOTO,
        bannerUrl: 'https://files.fm/thumb_show.php?i=nr332c59a',
        homeUrl: `https://gengtogel176.com/link.php?member=${ref}`
      },
      {
        name: 'GOLTOGEL',
        image: GOLTOGEL,
        bannerUrl: 'https://files.fm/thumb_show.php?i=dy8w6m3h9',
        homeUrl: `ttps://goltogel176.com/link.php?member=${ref}`
      },
      {
        name: 'HOMETOGEL',
        image: HOMETOGEL,
        bannerUrl: 'https://files.fm/thumb_show.php?i=2s7zzydh8',
        homeUrl: `https://togelhome176.com/link.php?member=${ref}`
      },
      {
        name: 'INDRATOGEL',
        image: INDRATOGEL,
        bannerUrl: 'https://files.fm/thumb_show.php?i=6tvvx5h3m',
        homeUrl: `https://indratogel176.com/link.php?member=${ref}`
      },
      {
        name: 'JONITOGEL',
        image: JONITOGEL,
        bannerUrl: 'https://files.fm/thumb_show.php?i=3vdzwhpbg',
        homeUrl: `https://jonitogel176.com/link.php?member=${ref}`
      },
      {
        name: 'LINETOGEL',
        image: LINETOGEL,
        bannerUrl: 'https://files.fm/thumb_show.php?i=r54bnywxm',
        homeUrl: `https://linetogel176.com/link.php?member=${ref}`
      },
      {
        name: 'LUNATOGEL',
        image: LUNATOGEL,
        bannerUrl: 'https://files.fm/thumb_show.php?i=9hkdxwwnd',
        homeUrl: `https://lunatogel176.com/link.php?member=${ref}`
      },
      {
        name: 'MARIATOGEL',
        image: MARIATOGEL,
        bannerUrl: 'https://files.fm/thumb_show.php?i=t8xwyy7qf',
        homeUrl: `https://mariatogel176.com/link.php?member=${ref}`
      },
      {
        name: 'NANASTOTO',
        image: NANASTOTO,
        bannerUrl: 'https://files.fm/thumb_show.php?i=ghcp3fvgs',
        homeUrl: `https://nanastoto168.com/link.php?member=${ref}`
      },
      {
        name: 'OPPATOTO',
        image: OPPATOTO,
        bannerUrl: 'https://files.fm/thumb_show.php?i=64m42jqw5',
        homeUrl: `https://oppatoto176.com/link.php?member=${ref}`
      },
      {
        name: 'PARTAITOGEL',
        image: PARTAITOGEL,
        bannerUrl: 'https://files.fm/thumb_show.php?i=y8tumcq9y',
        homeUrl: `https://www.partaitogel176.com/link.php?member=${ref}`
      },
      {
        name: 'PATIHTOTO',
        image: PATIHTOTO,
        bannerUrl: 'https://files.fm/thumb_show.php?i=u29fe8zrr',
        homeUrl: `https://patihtogel.org/link.php?member=${ref}`
      },
      {
        name: 'PROTOGEL',
        image: PROTOGEL,
        bannerUrl: 'https://files.fm/thumb_show.php?i=93rmqhuyr',
        homeUrl: `https://protogel176.com/link.php?member=${ref}`
      },
      {
        name: 'PWVIP4D',
        image: PWVIP4D,
        bannerUrl: 'https://files.fm/thumb_show.php?i=he3wc3gkp',
        homeUrl: `https://pwvip4d176.com/link.php?member=${ref}`
      },
      {
        name: 'SITUSTOTO',
        image: SITUSTOTO,
        bannerUrl: 'https://files.fm/thumb_show.php?i=57a9dxz9y',
        homeUrl: `https://situstoto176.com/link.php?member=${ref}`
      },
      {
        name: 'TOGELON',
        image: TOGELON,
        bannerUrl: 'https://files.fm/thumb_show.php?i=w4fvuj8sx',
        homeUrl: `https://togelon176.com/link.php?member=${ref}`
      },
      {
        name: 'TOGELUP',
        image: TOGELUP,
        bannerUrl: 'https://files.fm/thumb_show.php?i=uc4wfjnsh',
        homeUrl: `https://togelup176.com/link.php?member=${ref}`
      },
      {
        name: 'UDINTOGEL',
        image: UDINTOGEL,
        bannerUrl: 'https://files.fm/thumb_show.php?i=kk4xquvjp',
        homeUrl: `https://udintogel176.com/link.php?member=${ref}`
      },
      {
        name: 'YOKTOGEL',
        image: YOKTOGEL,
        bannerUrl: 'https://files.fm/thumb_show.php?i=xad359v74',
        homeUrl: `https://togelyok176.com/link.php?member=${ref}`
      },
      {
        name: 'YOWESTOGEL',
        image: YOWESTOGEL,
        bannerUrl: 'https://files.fm/thumb_show.php?i=8q7e84g3a',
        homeUrl: `https://yowestogel176.com/link.php?member=${ref}`
      },
      {
        name: 'ZIATOGEL',
        image: ZIATOGEL,
        bannerUrl: 'https://files.fm/thumb_show.php?i=we42ujce8',
        homeUrl: `https://ziatogel176.com/link.php?member=${ref}`
      }
      // {
      //   name: 'WDBOS',
      //   image: WDBOS,
      //   bannerUrl: 'https://files.fm/thumb_show.php?i=8j9g8uejy',
      //   homeUrl: `https://wdbos.com/?referralid=${ref2}`
      // }
    ]

    return (
      <FlatList
        numColumns={3}
        data={data}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            style={styles.btnSlot}
            onPress={() => navigation.navigate('BandarDetail', { item })}
          >
            <View style={styles.wrapInsider}>
              <Image
                source={item.image}
                resizeMode="center"
                style={styles.markLogo}
              />
              <View style={styles.wrapNameApp}>
                <Icon
                  name="search-plus"
                  type="FontAwesome5"
                  style={styles.iconSearch}
                />
                <Text style={styles.name}>{item && item.name}</Text>
              </View>
              <Text style={styles.iconStar}>⭐⭐⭐⭐⭐</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    )
  }
}
export default List
