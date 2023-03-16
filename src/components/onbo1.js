import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');
export default function Onbo1({ data }) {
    const { quote, src, otherTxt } = data?.item
    return (
        <View style={styles.container}>
            <View style={styles.txt}>
                {quote}
                {otherTxt}
            </View>
            <View style={styles.imageCon}>
                <Image source={src} style={styles.img} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width
    },
    txt: {
        paddingHorizontal: 15
    },
    imageCon: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    img: {
        // flex: 1,
        width: width - 30,
    }
})
