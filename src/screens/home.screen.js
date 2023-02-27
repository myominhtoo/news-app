import { View , Text , FlatList , StyleSheet } from "react-native";
import useNews from "../util/useNews.util";
import PreviewNews from "../components/previewNews.component";
import { useState } from "react";
import Loading from "../components/loading.component";


export default function HomeScreen(){

    const { data , isLoading , isError , fetchMore } = useNews({
        q : 'myanmar',
        pageNo : 1,
        pageSize : 10
    });

    if( isLoading ) return <Loading />

    return (
        <View style={ styles.container }>
            <FlatList
             data={data}
             keyExtractor={ item => item.title}
             renderItem={ ({item}) => (
                <PreviewNews 
                  title={item.title}
                  imageUri={item.urlToImage}
                  source={item.source.name}
                  author={item.author}
                />
             )}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingVertical : 20
    }
})