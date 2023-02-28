import { View , Text , FlatList , StyleSheet } from "react-native";
import useNews from "../util/useNews.util";
import PreviewNews from "../components/previewNews.component";
import { useEffect, useRef, useState } from "react";
import Loading from "../components/loading.component";
import globalStyles from "../assets/style/global.style";

export default function HomeScreen(){

    const buttonHideBarRef = useRef();
    const intersectionObserverRef = useRef();
    const [ pageNo , setPageNo ] = useState(1);

    const { 
        data ,
        isLoading ,
        isError , 
        fetchMore ,
        isMoreFetching
    } = useNews({
        q : 'myanmar',
        pageNo,
        pageSize : 10
    });

    const onReachedEndList = () => {
        if( isMoreFetching ) return;
        setPageNo( prevPageNo => prevPageNo + 1 );
        fetchMore(); 
    }

    if( isLoading ) return <Loading />

    return (
        <View style={ styles.container }>
            <FlatList
             data={data}
             keyExtractor={ (item,index) => index }
             renderItem={ ({item,index}) => (
                 <PreviewNews 
                    index={index}
                    title={item.title}
                    imageUri={item.urlToImage}
                    source={item.source.name}
                    author={item.author}
                 />
             )}
             onEndReached={onReachedEndList}
             onEndReachedThreshold={0.1}
            />
            {   
               (isMoreFetching ) && 
                (
                   <View style={ { paddingVertical : 5 }}>
                    <Text style={ { ...globalStyles.smSnowText , textAlign : 'center'}}>Loading...</Text>
                   </View>
                )
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingVertical : 20
    },
    hideBar : {
        paddingVertical : 50,
        backgroundColor : 'red'
    }
})