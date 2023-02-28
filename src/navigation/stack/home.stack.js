import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../../screens/home.screen";
import NewsDetailsScreen from "../../screens/newsDetails.screen";
import Icon  from 'react-native-vector-icons/FontAwesome';
import { colors } from "../../data/style.data";

const HomeStackOptions = {
    contentStyle : {
      backgroundColor : 'transparent'
    },
    animation : 'fade'
}

export default function HomeStack(){

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={HomeStackOptions}
        >
            <Stack.Screen
             name='HomeScreen'
             component={ HomeScreen }
             options={{
                headerShown : false
             }}
            />
            <Stack.Screen
             name='DetailsScreen'
             component={ NewsDetailsScreen }
             options={{
                headerStyle : {
                    backgroundColor : 'transparent',
                },
                headerTintColor : colors.p_SNOW,
                headerTitle : ''
             }}
            />
        </Stack.Navigator>        
    )
}