import {
    View ,
    Text, 
    StyleSheet ,
    Animated
} from 'react-native';
import globalStyles from '../assets/style/global.style';
import { colors } from '../data/style.data';
import { useEffect, useRef } from 'react';

export default function Loading(){

    const fadeAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing( fadeAnimation , {
                toValue : 1,
                duration : 1000,
                useNativeDriver : true,
            }),
        ).start();
    } , [fadeAnimation]);

    return (
        <View style={styles.container} >
            <Animated.Text style={ { ...globalStyles.title , opacity : fadeAnimation }} >
                Loading...
            </Animated.Text>
        </View>
    )
};

const styles= StyleSheet.create({
    container : {
        position : 'absolute',
        flex : 1,
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : colors.GREY,
        opacity : 0.7
    }
})