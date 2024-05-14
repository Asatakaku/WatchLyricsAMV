import React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import AMVData from '../../DummyData/AMVData';
import VideoData from '../../DummyData/VideoData';
import Youtuber from '../../DummyData/Youtuber';
const getYoutuberName = (id) => {
    const youtuber = Youtuber.find(youtuber => youtuber.id === id);
    return youtuber ? youtuber.name : 'Unknown Youtuber';
  };
  

export default function PlayListHomeScreen() { 
    return (
        <FlatList
            columnWrapperStyle={styles.container}
                data={VideoData}
                keyExtractor={(item) => item.keyvideo}
                renderItem={({ item }) => (
                    <View style={styles.items}>
                        <Image style={styles.thumbnail} source={{ uri: item.thumbnail }} />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.youtuber}>{getYoutuberName(item.idYoutuber)}</Text>
                        <Text style={styles.view}>{item.Views}</Text>
                    </View>
                )}
                numColumns={2}
            />
        
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    items: {
        borderRadius: 10,
        width: '45%',
        height: 230,
        borderWidth: 0.5,
        borderColor: '#fff',
        justifyContent:'flex-start',
        alignItems: 'center',
    },
    thumbnail: {
        width: 192,
        height: 108,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 10,
        color: '#fff',
        textAlign: 'justify',
        top: 10,
        fontWeight: '500',
        padding: 2,
    },
    youtuber: {
        marginTop: 20,
        fontSize: 10,
        color: '#fff',
        fontWeight: 'bold',
    },
    view: {
        marginTop: 20,
        fontSize: 10,
        color: '#fff',
        fontWeight: 'bold',
    }
});