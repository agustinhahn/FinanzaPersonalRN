import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Super from '../views/Super'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const SuperStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="Super"
        screenOptions={({route})=>{
          return {
            header:()=><Header />
          }
        }}
        >

        <Stack.Screen name="Super" component={Super} />    
    </Stack.Navigator>
  )
}



export default SuperStack