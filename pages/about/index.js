import React from "react";
import {Text, View, Image,StatusBar } from "react-native";

import styles from './styles';
import imagemAlves from '../../assets/images/alves.jpg';


export default function About() {
    return(
        <View style={styles.container}>
        <Text>hello React Native Again, after a long time ago</Text>
        <Text> Now we are rised to build biggest apps. </Text>
        <Image source={imagemAlves} style={styles.img} /> 
        <Text> Created by Alves Hatewa </Text>
        <StatusBar style="auto" />
      </View>
    )
}