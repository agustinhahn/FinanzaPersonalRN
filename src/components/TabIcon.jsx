import { View, Text } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

const TabIcon = ({icon, label, focused}) => {
    return (
        <View>
            <FontAwesome5 name={icon} size={30} color={focused ? "blue" : "#EEE"} />
            <Text>{label}</Text>
        </View>
    )
}

export default TabIcon