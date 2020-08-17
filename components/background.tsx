import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const imageSrc = require("../assets/CalScreenShot.png");

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
        justifyContent: "center",
        alignItems: "center",
        elevation: -2,
        zIndex: -2
    },
    calApptComponentContainer: {

    },
    image: {
        resizeMode: "contain",
    }
});