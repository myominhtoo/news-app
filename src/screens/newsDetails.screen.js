import { View , Text, StyleSheet, Image } from 'react-native';
import { colors } from '../data/style.data';
import useNews from '../util/useNews.util';
import Loading from '../components/loading.component';
import globalStyles from '../assets/style/global.style';
import HomeScreen from './home.screen';

export default function NewsDetailsScreen({
    route ,
    navigation
}){

    const {
        data , 
        isLoading ,
        isError
    } = useNews({
        q : route.params['title'],
        pageNo : route.params['page'],
        pageSize : 1
    });

    if( isLoading ) return <Loading />
    if( !data[0] ) return <HomeScreen />;

    return (
        <View style={ styles.container } >
            <View style={ styles.imageContainer }>
                <Image
                 source={ { uri : data[0].urlToImage } }
                 style={ styles.image }
                />
            </View>
            <View style={ styles.headerContainer }>
                <Text style={globalStyles.thmTitle} >
                    {data[0].title}
                </Text>
                <View style={ { width : '100%' , color : colors.p_SNOW , display : 'flex' , flexDirection : 'row'  } }>
                  <Text style={globalStyles.smSnowText}>Author :</Text>
                  <Text style={globalStyles.smSnowText}>{data[0].author}</Text>            
                </View>
            </View>
            <View style={ styles.contentContainer } >
                <Text style={globalStyles.mdSnowText}>{data[0].content}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    imageContainer : {
        width : '100%',
        height : 200,
        marginVertical : 10
    },
    image : {
        width : '100%',
        height : '100%'
    },
    headerContainer : {
        width : '100%'
    },
    contentContainer : {
        marginVertical : 10
    }
})