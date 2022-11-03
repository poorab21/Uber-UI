import { Text, View } from 'react-native'
import React from 'react'

const Template = (props) => {
  return (
    <View style = {{ display : 'flex' , flex : 1 ,justifyContent : 'center' , alignItems : 'center' }}>
      <Text>{props.screenName}</Text>
    </View>
  )
}

export default Template;