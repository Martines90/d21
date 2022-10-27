import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RevolutionistScreen from './src/scenarios/main/revolutionist/RevolutionistScreen'
import Toast from 'react-native-toast-message'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'SRevolutionist'}
          screenOptions={{
            headerShown: true,
          }}
        >
          <Stack.Screen name="SRevolutionist" component={RevolutionistScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  )
}

export default App
