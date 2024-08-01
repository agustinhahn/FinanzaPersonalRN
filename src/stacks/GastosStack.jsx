import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Gastos from '../views/Gastos'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const GastosStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="Gastos"
        screenOptions={({route})=>{
          return {
            header:()=><Header />
          }
        }}
        >

        <Stack.Screen name="Gastos" component={Gastos} />    
    </Stack.Navigator>
  )
}



export default GastosStack