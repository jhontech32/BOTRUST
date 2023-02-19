import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  ScrollView
} from 'react-native'

import Shared from 'components/Shared'
import Jackpot from './Jackpot'
import TopHeader from './TopHeader'
import List from './List'

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    const { navigation } = this.props
    const { year } = this.state

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.screen}
          stickyHeaderIndices={[1]}
          ref={(c) => { this.scroll = c }}
          onScroll={this.handleScroll}
          removeClippedSubviews
          showsVerticalScrollIndicator={false}
          // refreshControl={(
          //   <RefreshControl
          //     refreshing={refreshing}
          //     onRefresh={() => this._refresh()}
          //   />
          // )}
        >
          <Jackpot />
          <TopHeader year={year} />
          <List
            navigation={navigation}
          />
        </ScrollView>
        <Shared
          title="BAGIKAN APLIKASI"
          year={year}
        />
      </View>
    )
  }
}

export default Content
