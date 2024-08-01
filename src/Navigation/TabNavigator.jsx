import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//stacks
import HomeStack from '../stacks/HomeStack'
import GastosStack from '../stacks/GastosStack'
import SuperStack from '../stacks/SuperStack'

//componentes
import TabIcon from '../components/TabIcon'



const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar
        }}>
        <Tab.Screen
            name='HomeTab'
            component={HomeStack}
            options={{
                tabBarIcon: ({ focused }) => <TabIcon icon="bell" label="" focused={focused} />
            }}
        />
        <Tab.Screen
            name="GastosTab"
            component={GastosStack}
            options={{
                tabBarIcon: ({ focused }) => <TabIcon icon="bell" label="" focused={focused} />
            }}
        />
        <Tab.Screen
            name="SuperTab"
            component={SuperStack}
            options={{
                tabBarIcon: ({ focused }) => <TabIcon icon="bell" label="" focused={focused} />
            }}
        />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: "red",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 4,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 55,
        paddingTop: 15,
        paddingHorizontal: 20,
    }
});