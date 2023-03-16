import React from 'react';
import { Text, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    caption:{
        fontWeight: 500,
        fontSize: 25,
        color: "#204D6C",
        lineHeight: 40,
            },
            innerCaption:{
                color:"#000000"
            },
            otherTxt:{
        marginTop: 18,
        color:"#292929",
        fontSize: 13
            },
})
export const slides = [
    {
        quote:  <Text style={styles.caption}>Find best place {"\n"}
        to stay in <Text style={styles.innerCaption}>good price</Text>  </Text>,
        otherTxt: <Text style={styles.otherTxt}>Lorem ipsum dolor sit amet, consectetur{"\n"} 
        adipiscing elit, sed.</Text>,
        src: require('../images/onbo1.png')
    },
    {
        quote:     <Text style={styles.caption}>Fast sell your property {"\n"}
        in just <Text style={styles.innerCaption}>one click </Text>  </Text>,
        otherTxt: <Text style={styles.otherTxt}>Lorem ipsum dolor sit amet, consectetur{"\n"} 
        adipiscing elit, sed.</Text>,
        src: require('../images/onbo2.png')
    },
    {
        quote:     <Text style={styles.caption}>Find <Text style={styles.innerCaption}>perfect choice</Text> for {"\n"}
        your future house </Text>,
        otherTxt: <Text style={styles.otherTxt}>Lorem ipsum dolor sit amet, consectetur{"\n"} 
        adipiscing elit, sed.</Text>,
        src: require('../images/onbo3.png')
    },
]


