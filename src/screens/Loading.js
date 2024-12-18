import React from 'react'
import { Image, View } from 'react-native'

function Loading() {
  return (
    <View>
        <Image
        source={require('../assets/images/Logo.svg')}
         />
    </View>
  )
}

export default Loading