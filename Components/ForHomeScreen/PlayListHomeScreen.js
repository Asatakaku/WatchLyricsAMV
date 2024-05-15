import React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import { useState, useEffect } from 'react';

 

export default function PlayListHomeScreen() { 
    const [videos, setVideos] = useState([]);
    const playlistId = 'PLDeBMQQfQmVJQiMgHg1xyw-mv1o4HqtoX';
    const apiKey = 'AIzaSyBzWLhuhytW8l-bqOGa9mg3V1dJy1Q5oFM';
    //api key
    useEffect(() => {
        const fetchVideos = async (pageToken = '') => {
            try {
                const res = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}&pageToken=${pageToken}`);
                const data = await res.json();
                const videoDetailsPromises = data.items.map(async (item) => {
                    const videoRes = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${item.snippet.resourceId.videoId}&key=${apiKey}`);
                    const videoData = await videoRes.json();
                    const channelId = videoData.items[0].snippet.channelId;
                    const channelRes = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`);
                    const channelData = await channelRes.json();
                    return { ...item, channelIcon: channelData.items[0].snippet.thumbnails.default.url };
                });
                const videoDetails = await Promise.all(videoDetailsPromises);
                setVideos(prevVideos => [...prevVideos, ...videoDetails]);
                if (data.nextPageToken) {
                    fetchVideos(data.nextPageToken); // Fetch next page
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchVideos();
    }, []);
    return (
        <FlatList
            columnWrapperStyle={styles.container}
                data={videos}
                keyExtractor={(item) => item.snippet.resourceId.videoId}
                renderItem={({ item }) => (
                    <View style={styles.items}>
                        <Image style={styles.thumbnail} source={{ uri: `https://i.ytimg.com/vi/${item.snippet.resourceId.videoId}/maxresdefault.jpg` }} />
                        <Text style={styles.title}>{item.snippet.title}</Text>
                        <View style={{ flexDirection: 'row', top: 20 }}>
                        <Image source={{ uri: item.channelIcon }} style={styles.icon} />
                        <Text style={styles.youtuber}>{ item.snippet.channelTitle}</Text>
                        
                        </View>
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
        justifyContent: 'space-between',
        padding: 20,
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
        textAlignVertical: 'center',
        fontSize: 10,
        color: '#fff',
        fontWeight: 'bold',
    },
    view: {
        marginTop: 20,
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
    },
    icon: {
        width: 30,
        height: 30,
        borderRadius: 50,
        right:20,
    }
});