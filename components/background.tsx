import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';

const imgSrc = require("../assets/CalScreenShot.png");

export default function Background() {
    return (
        <View style={styles.container}>
            <Image source={imgSrc} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
    }
});