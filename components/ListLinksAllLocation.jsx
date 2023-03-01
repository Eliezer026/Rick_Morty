import {Text, View} from 'react-native'
import React from 'react'

const ListLinksAllLocation = ({item}) => {
  return (
    <View>
      <Text style={{ color:'#fff' }}>{item.id}-{item.url}</Text>
    </View>
  )
}

export default ListLinksAllLocation

