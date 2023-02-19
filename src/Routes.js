import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  StatusBar,
  Platform
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import color from 'theme/color'

import Home from 'screens/Content/Home'
import BandarDetail from 'screens/Bandar/Detail'
import Splash from 'screens/Splash'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: color.primaryColor
//   },
//   button: {
//     marginVertical: 5
//   },
//   bottomBar: {},
//   btnCircleUp: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#E8E8E8',
//     bottom: 18,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 1
//     }
//   },
//   btnCircle: {
//     width: 60,
//     height: 60,
//     borderRadius: 35,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#000',
//     padding: 10,
//     shadowColor: color.darkMainColor,
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.26,
//     shadowRadius: 1.50,
//     elevation: 5,
//     bottom: 30
//   },
//   imgCircle: {
//     width: 30,
//     height: 30,
//     tintColor: 'gray'
//   },
//   img: {
//     width: 30,
//     height: 30
//   },
//   iconCircleMid: {
//     color: color.textIcons
//   },

//   // Loader
//   wrapLoad: {
//     height: 20,
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: color.textIcons
//   },
//   txtLoader: {
//     color: color.textIcons,
//     textAlign: 'center',
//     fontSize: 12
//   },
//   liquidLoader: {
//     width: '20%',
//     borderRadius: 2,
//     backgroundColor: color.successColor
//   }
// })

const Stack = createStackNavigator()
// // const Tab = createBottomTabNavigator()

// const _renderIcon = (routeName, selectedTab) => {
//   let icon = ''

//   switch (routeName) {
//     case 'Home':
//       icon = 'home-sharp'
//       break
//     case 'Info':
//       icon = 'newspaper-outline'
//       break
//     case 'Notification':
//       icon = 'ios-today-outline'
//       break
//     case 'More':
//       icon = 'menu'
//       break
//   }

//   return (
//     <Ionicons
//       name={icon}
//       size={scale(25)}
//       color={routeName === selectedTab ? color.primaryColor : color.smoothText}
//     />
//   )
// }

// const renderTabBar = ({ routeName, selectedTab, navigate }) => {
//   return (
//     <TouchableOpacity
//       style={{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//       }}
//       onPress={() => navigate(routeName)}
//     >
//       {_renderIcon(routeName, selectedTab)}
//     </TouchableOpacity>
//   )
// }

// const MainApp = () => {
//   return (
//     <CurvedBottomBar.Navigator
//       style={styles.bottomBar}
//       strokeWidth={0.5}
//       height={55}
//       circleWidth={55}
//       bgColor="white"
//       initialRouteName="Livechat"
//       borderTopLeftRight
//       renderCircle={({ selectedTab, navigate }) => (
//         <Animated.View style={styles.btnCircle}>
//           <TouchableOpacity
//             onPress={() => navigate('Tools')}
//           >
//             <Icon name="robot" type="MaterialCommunityIcons" style={styles.iconCircleMid} />
//           </TouchableOpacity>
//         </Animated.View>
//       )}
//       tabBar={renderTabBar}
//     >
//       <CurvedBottomBar.Screen
//         options={{ headerShown: false }}
//         name="Home"
//         position="LEFT"
//         component={Home}
//       />
//       <CurvedBottomBar.Screen
//         options={{ headerShown: false }}
//         name="Info"
//         position="LEFT"
//         component={Info}
//       />
//       <CurvedBottomBar.Screen
//         options={{ headerShown: false }}
//         name="Notification"
//         position="RIGHT"
//         component={Notification}
//       />
//       <CurvedBottomBar.Screen
//         options={{ headerShown: false }}
//         name="More"
//         position="RIGHT"
//         component={More}
//       />
//     </CurvedBottomBar.Navigator>
//   )
// }

class Routes extends Component {
  state = {
    isLoading: true
  }

  componentDidMount () {
    setTimeout(() => {
      // this.runningTask()
      this.setState({
        isLoading: false
      })
    }, 3000)
  }

  render () {
    const { isLoading } = this.state
    if (isLoading) {
      return (
        <View style={styles.container}>
          <StatusBar
            barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
            backgroundColor={color.primaryColor}
          />
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={color.primaryColor}
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        />

        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BandarDetail"
            component={BandarDetail}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    )
  }
}

export default Routes
