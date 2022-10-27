/*Example of Expandable ListView in React Native*/
import React, { useEffect, useState } from 'react'
//import react in our project
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  Platform,
} from 'react-native'

import { AntDesign } from '@expo/vector-icons'

const CustomListView = ({ listItems }) => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        {listItems.map((listItem) => {
          return (<ListItem listItem={listItem} />)
        })}
      </ScrollView>
    </View>
  )
}

export const ListItem = ({ listItem }) => {
  const [isOpen, setIsOpen] = useState(!!listItem.opened)

  const closeOpenClick = () => {
    setIsOpen(!isOpen)
  }
  let icon
  if (listItem.listItems && listItem.listItems.length > 0) {
    icon = isOpen ? (
      <AntDesign onPress={closeOpenClick} name="caretup" size={24} color="black" />
    ) : (
      <AntDesign onPress={closeOpenClick} name="caretdown" size={24} color="black" />
    )
  }

  if (!listItem.status || listItem.status === 'open') {
    return (
      <>
        <View style={styles.itemOpen}>

          <Text style={{ fontWeight: 'bold' }}>{listItem.title}</Text>
          {listItem.subTitle && (<Text>{listItem.subTitle}</Text>)}
          {listItem.content &&
            (<View style={styles.itemContent}>
              {listItem.content}
            </View>)}
          {icon}
        </View>
        {isOpen && listItem.listItems.length && <CustomListView listItems={listItem.listItems} />}
      </>
    )
  } else if (listItem.status === 'completed') {
    return (
      <>
        <View style={styles.itemCompleted}>
          <Text>{listItem.title}</Text>
          {listItem.content}
          {icon}
        </View>
        {isOpen && listItem.listItems.length && <CustomListView listItems={listItem.listItems} />}
      </>
    )
  } else if (listItem.status === 'locked') {
    return (
      <View style={styles.itemLocked}>
        <Text>{listItem.title}</Text>
        <AntDesign name="lock1" size={24} color="black" />
      </View>
    )
  }
  return <></>
}

const itemDefaultStyle = {
  padding: 16,
  flexDirection: 'row',
  justifyContent: 'space-between',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  itemOpen: {
    ...itemDefaultStyle,
    backgroundColor: '#F5FCFF',
  },
  itemLocked: {
    ...itemDefaultStyle,
    backgroundColor: '#b9bdba',
  },
  itemCompleted: {
    ...itemDefaultStyle,
    backgroundColor: '#28c752'
  },
  itemContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  }
})

export default CustomListView