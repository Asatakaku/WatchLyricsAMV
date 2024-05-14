import React from 'react';
import { View, Text, StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import Color from '../Colors/Color';
import HeaderHome from '../Components/ForHomeScreen/HeaderHome';
import PlayListHomeScreen from '../Components/ForHomeScreen/PlayListHomeScreen';

export default function HomeScreen() { 
        return (
            <SafeAreaView style={styles.container}>
                <HeaderHome />
                <PlayListHomeScreen />
                <StatusBar style="auto" />
            </SafeAreaView>
        );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backgroundColor,
    },
    text: {
        color: Color.textcolor,
    }
  });