import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';


export default function Background() {
    return (
        <View style={styles.container}>
            <Image source={{"../assets/CalScreenShot.png"}} style={styles.image} />
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