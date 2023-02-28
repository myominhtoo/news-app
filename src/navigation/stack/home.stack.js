import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../../screens/home.screen";
import NewsDetailsScreen from "../../screens/newsDetails.screen";

const HomeStackOptions = {
    headerShown : false,
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
            />
            <Stack.Screen
             name='DetailsScreen'
             component={ NewsDetailsScreen }
            />
        </Stack.Navigator>        
    )
}