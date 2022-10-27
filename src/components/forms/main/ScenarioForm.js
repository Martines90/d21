import * as React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import StepIndicator from 'react-native-step-indicator'
import { S_TEXTS } from '../../../translation'

const config = [
  {
    id: 'firstProtest',
    title: S_TEXTS.firstProtest.title,
    date: '2023-04-14',
  },
  {
    id: 'secondProtest',
    title: S_TEXTS.secondProtest.title,
    date: '2023-06-23',
  },
  {
    id: 'oneDayStrike',
    title: S_TEXTS.oneDayStrike.title,
    date: '2023-10-01',
  },
  {
    id: 'threeDayStrike',
    title: S_TEXTS.threeDayStrike.title,
    date: '2023-12-10',
  },
  {
    id: 'oneWeekStrikeAndBlockade',
    title: S_TEXTS.oneWeekStrikeAndBlockade.title,
    date: '2024-03-14',
  },
  {
    id: 'endless0_24ProtestAtAllGovBuilding',
    title: S_TEXTS.endless0_24ProtestAtAllGovBuilding.title,
    date: '2024-05-31 - 2025.05.31',
  },
]

const stepIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: '#fe7013',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#aaaaaa',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 15,
  currentStepLabelColor: '#fe7013',
}

const ScenarioForm = () => {
  const today = Date.now()
  const [currentPage, setCurrentPage] = React.useState(
    config.filter((el) => {
      let dateCheck = el.date
      if (el.date.includes(' - ')) {
        dateCheck = el.date.split(' - ')[0]
      }
      return Date.parse(dateCheck) < today
    }).length,
  )
  const viewabilityConfig = React.useRef({ itemVisiblePercentThreshold: 40 })
    .current

  const renderPage = (rowData) => {
    /*const item = rowData.item
    return (
      <View key={item.id} style={styles.rowItem}>
        <Text style={styles.title}>{item.title}test</Text>
        <Text style={styles.body}>{item.body}tt</Text>
      </View>
    )*/
    return <></>
  }

  /*const onViewableItemsChanged = React.useCallback(({ viewableItems }) => {
    const visibleItemsCount = viewableItems.length
    if (visibleItemsCount !== 0) {
      setCurrentPage(viewableItems[visibleItemsCount - 1].index)
    }
  }, [])*/

  return (
    <View style={styles.container}>
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={stepIndicatorStyles}
          stepCount={config.length}
          direction="vertical"
          currentPosition={currentPage}
          labels={config.map((item) => {
            return (
              <View key={item.id} style={styles.rowItem}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            )
          })}
        />
      </View>
      <FlatList
        style={{ flexGrow: 1 }}
        data={config}
        renderItem={renderPage}
        //onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  rowItem: {
    flex: 1,
    paddingVertical: 0,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 14,
    color: '#333333',
    paddingVertical: 0,
    fontWeight: '600',
  },
  date: {
    flex: 1,
    fontSize: 12,
    color: '#333333',
    paddingVertical: 0,
    fontWeight: '600',
  },
  body: {
    flex: 1,
    fontSize: 15,
    color: '#606060',
    lineHeight: 24,
    marginRight: 8,
  },
})

export default ScenarioForm
