import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "../views/Home"
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({route})=>{
          return {
            header:()=><Header />
          }
        }}
        >

        <Stack.Screen name="Home" component={Home} />    
    </Stack.Navigator>
  )
}



export default HomeStack