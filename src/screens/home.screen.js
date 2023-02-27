import { View , Text , FlatList , StyleSheet } from "react-native";
import useNews from "../util/useNews.util";
import PreviewNews from "../components/previewNews.component";
import { useState } from "react";


export default function HomeScreen(){

    const { data , isLoading , isError } = useNews({
        q : 'myanmar',
        pageNo : 1,
        pageSize : 10
    });

    return (
        <View style={ styles.container }>
            {/* <Text style={ { color : 'red' }} >
            { !isLoading && JSON.stringify(data.articles)}
            </Text> */}
            <FlatList
             data={data.articles}
             keyExtractor={ item => item.title}
             renderItem={ ({item}) => (
                <PreviewNews 
                 title={item.title}
                 imageUri={item.urlToImage}
                 source={item.source.name}
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