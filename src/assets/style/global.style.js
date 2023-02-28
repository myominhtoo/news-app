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
    },
    title : {
        color : colors.p_SNOW,
        fontSize : sizes.MD,
        opacity : 1
    },
    thmTitle : {
        color : colors.THM,
        fontSize : sizes.LG,
        fontWeight : 'bold',
        letterSpacing : 1,
        marginVertical : 10
    },
    mdSnowText : {
        color : colors.p_SNOW,
        fontSize : sizes.SM,
        letterSpacing : 0.9,
    }
});

export default globalStyles;