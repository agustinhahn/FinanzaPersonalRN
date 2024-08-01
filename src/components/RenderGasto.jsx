import { View, Text ,StyleSheet } from 'react-native'
import React from 'react'

const RenderGasto = ({gasto}) => {
  return (
    <View style={styles.container}>
      <Text>titulo</Text>
      <Text>importe</Text>
      <Text>categoria</Text>
    </View>
  )
}

export default RenderGasto

const styles = StyleSheet.create({
    container:{
        width: 200,
        height: 100,
        backgroundColor: "yellow"
    }
})