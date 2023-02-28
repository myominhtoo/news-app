import {
    View ,
    Text ,
    StyleSheet ,
    TouchableOpacity ,
    Image 
} from 'react-native';
import { colors } from '../data/style.data';
import globalStyles from '../assets/style/global.style';
import {  useMemo } from 'react';

export default function PreviewNews({
    title = 'Title',
    imageUri = '',
    category = 'Category',
    source = 'Source' ,
    author = 'Lio',
    index = 0
}){

    if( imageUri == null) return null;
    const currentComponent = useMemo(() => {
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
                        <Text style={ { ...globalStyles.smSnowText , width : '80%' }}>
                            {
                                author 
                                ? author.length > 40 ? author.substring(0,40) + '...' : author
                                : 'Anonymous'
                            }
                        </Text>
                    </View>
                    <Text style={ styles.titleContainer } >
                        <Text style={ globalStyles.smTitle } >Source  </Text> 
                        <Text style={ { ...globalStyles.smSnowText , width : '80%' , fontWeight : 'bold' } }>{source}</Text>
                    </Text>
                </View>
            </TouchableOpacity>
        )
    } , [ index ]);

    return currentComponent;
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