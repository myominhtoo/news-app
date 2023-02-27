import { 
    View ,
    Text ,
    StyleSheet
} from 'react-native';
import globalStyles from '../assets/style/global.style';
import { colors } from '../data/style.data';

export default function CapsuleItem({
    text = 'Item'
}){
    return (
        <View style={styles.container} >
            <Text style={{ ... globalStyles.smText , alignSelf : 'center'} } >{text}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container : {
        paddingVertical : 3,
        paddingHorizontal : 5,
        borderRadius : 3,
        backgroundColor : colors.GREY,
        minWidth : 100,
        maxWidth : 200
    }
})