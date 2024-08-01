import { View, Text } from 'react-native'
import React from 'react'
import ModalNuevoGasto from "../components/ModalNuevoGasto"

const Gastos = () => {
  return (
    <View>
      <Text>Gastos</Text>
      <ModalNuevoGasto />
    </View>
  )
}

export default Gastos