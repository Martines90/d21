import { View, StyleSheet } from 'react-native'

const MainWrapper = ({ children }) => {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default MainWrapper
