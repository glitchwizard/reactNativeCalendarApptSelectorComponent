import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const imageSrc = require("../assets/Screen Shot 2020-08-12 at 2.19.48 PM.png");

export default function Background() {
    return (
        <View style={styles.container}>
            <ScrollView/>
            <Image source={imageSrc} style={styles.image} />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "column",
    },
    calApptComponentContainer: {

    },
    image: {
        resizeMode: "contain",
        height: 318,
    }
});