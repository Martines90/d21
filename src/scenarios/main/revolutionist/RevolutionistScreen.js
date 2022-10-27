import * as React from 'react'
import { View, Text, useWindowDimensions, StyleSheet } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'

import IdeologyScreen from '../profile/IdeologyScreen'

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import ScenarioScreen from '../profile/ScenarioScreen'
import TEXTS from '../../../translation'

const renderScene = SceneMap({
  ideology: IdeologyScreen,
  practice: ScenarioScreen,
})

const RevolutionistScreen = ({ navigation, route }) => {
  const layout = useWindowDimensions()

  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([{ key: 'ideology' }, { key: 'practice' }])

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'red' }}
          renderIcon={(props) => {
            const { route } = props
            if (route.key === 'ideology') {
              return (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ marginRight: 10 }}>
                    {TEXTS.navBar.ourPhilosophy}
                  </Text>
                  <FontAwesome name="graduation-cap" size={24} color="black" />
                </View>
              )
            } else {
              return (
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ marginRight: 10 }}>
                    {TEXTS.navBar.scenario}
                  </Text>
                  <FontAwesome5 name="crosshairs" size={24} color="black" />
                </View>
              )
            }
          }}
        />
      )}
    />
  )
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  noLabel: {
    display: 'none',
    height: 0,
  },
  bubble: {
    backgroundColor: 'lime',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 10,
  },
})

export default RevolutionistScreen
