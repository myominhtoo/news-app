import {
    View ,
    Text ,
    StyleSheet ,
    TouchableOpacity ,
    Image 
} from 'react-native';
import { colors } from '../data/style.data';
import CapsuleItem from './capsule.component';
import globalStyles from '../assets/style/global.style';

export default function PreviewNews({
    title = 'Title',
    imageUri = '',
    category = 'Category',
    source = 'Source' ,
    author = 'Lio'
}){


    if( imageUri == null) return null;

    return (
        <TouchableOpacity
            style={[styles.container,styles.shadow]}
        >
            <View style={styles.imageContainer} >
                <Image
                 style={styles.image}
                 source={ { uri : imageUri }}
                />
            </View>
            <View style={styles.contentContainer} >
                <View style={ styles.titleContainer } >
                    <Text style={ globalStyles.smTitle } >Title  </Text>
                    <Text style={ { ...globalStyles.smSnowText , width : '80%' }}>
                        { title.length > 60 ? title.substring(0,60) + '...' : title }
                    </Text>
                </View>
                <View style={ styles.titleContainer }>
                    <Text style={ globalStyles.smTitle }>Author  </Text> 
                    <Text style={ { ...globalStyles.smSnowText , width : '80%' }}>{author}</Text>
                </View>
                <Text style={ styles.titleContainer } >
                    <Text style={ globalStyles.smTitle } >Source  </Text> 
                    <Text style={ { ...globalStyles.smSnowText , width : '80%' , fontWeight : 'bold' } }>{source}</Text>
                </Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container : {
        width : '100%',
        marginVertical : 10,
        padding : 5,
        borderRadius :  5,
    },
    shadow : {
        shadowColor: colors.p_SNOW,
        elevation : 1
    },
    imageContainer : {
        width : '100%',
        height : 200,
    },
    image : {
        width : '100%',
        height : '100%'
    },
    contentContainer : {
        padding : 5,
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
        rowGap : 5,
        marginTop : 10
    },
    titleContainer : {
        display : 'flex',
        flexDirection : 'row'
    }
})