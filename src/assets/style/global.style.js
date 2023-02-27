import {
    StyleSheet
} from 'react-native';
import { colors, sizes } from '../../data/style.data';

const globalStyles = StyleSheet.create({
    smText : {
        color : colors.THM,
        fontSize : sizes.SM
    },
    smTitle : {
        color : colors.THM,
        fontSize : sizes.SM,
        fontWeight : 'bold',
        letterSpacing : 1,
        width : '20%'
    },
    smSnowText : {
        color : colors.p_SNOW,
        fontSize : sizes.SM,
        letterSpacing : 1,
    }
});

export default globalStyles;