import React, { Component } from 'react'
import { LogBox } from 'react-native'

import CodePush from 'react-native-code-push'

import { StyleProvider, Root } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'

import getTheme from './node_modules/native-base/src/theme/components'
import material from './native-base-theme/variables/material.js'
import Routes from './src/Routes'

const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME
}

class App extends Component {
  state = {
    syncMessage: '',
    progress: false
  }

  codePushSync = () => {
    CodePush.sync({
      installMode: CodePush.InstallMode.IMMEDIATE
    }, this.syncWithCodePush)
  }

  syncWithCodePush = (syncStatus) => {
    console.log('SYNCSTATUS NYA!', syncStatus)
    if (syncStatus === 5) {
      this.setState({ syncMessage: 'Pengecekan update ..', progress: true })
    } else if (syncStatus === 0) {
      this.setState({ syncMessage: 'Aplikasi sudah terbaru !', progress: false })
    } else if (syncStatus === 7) {
      this.setState({ syncMessage: 'Sedang mendownload terbaru..', progress: true })
    } else if (syncStatus === 1) {
      this.setState({ syncMessage: 'Sedang install dan lakukan restart untuk versi terbaru.', progress: false })
    } else {
      console.log('Uknown status !')
    }

    // switch (syncStatus) {
    //   case syncStatus === 5:
    //     this.setState({ syncMessage: 'Checking for update...', progress: true })
    //     break
    //   case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
    //     this.setState({ syncMessage: 'Downloading package...', progress: true })
    //     break
    //   case CodePush.SyncStatus.AWAITING_USER_ACTION:
    //     this.setState({ syncMessage: 'Awaiting user action.' })
    //     break
    //   case CodePush.SyncStatus.INSTALLING_UPDATE:
    //     this.setState({ syncMessage: 'Installing update.', progress: true })
    //     break
    //   case CodePush.SyncStatus.UP_TO_DATE:
    //     this.setState({ syncMessage: 'Application up to date !', progress: false })
    //     break
    //   case CodePush.SyncStatus.UPDATE_IGNORED:
    //     this.setState({ syncMessage: 'Update cancelled by user.', progress: false })
    //     break
    //   case CodePush.SyncStatus.UPDATE_INSTALLED:
    //     this.setState({ syncMessage: 'Update installed and will be applied on restart.', progress: false })
    //     break
    //   case CodePush.SyncStatus.UNKNOWN_ERROR:
    //     this.setState({ syncMessage: 'An unknown error occurred.', progress: false })
    //     break
    // }
  }

  render () {
    const { syncMessage, progress } = this.state

    LogBox.ignoreLogs(['Warning: ...'])
    // Ignore log notification by message
    LogBox.ignoreAllLogs()
    // Ignore all log notifications

    return (
      <Root>
        <StyleProvider style={getTheme(material)}>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </StyleProvider>
      </Root>
    )
  }
}

export default CodePush(codePushOptions)(App)
