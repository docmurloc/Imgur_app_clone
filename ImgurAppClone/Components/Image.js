import React, {useState} from 'react';
import {Image , View, ActivityIndicator, Dimensions, StyleSheet} from "react-native";

import Video from 'react-native-video'

const styles = StyleSheet.create({
    viewImage: {
        alignSelf: 'center',
        margin: 5
    },
    image: {
        width: Dimensions.get('window').width * 70 / 100,
        height: Dimensions.get('window').height * 30 / 100,
        resizeMode: 'contain'
    }
})

function DisplayImage(props) {
    console.log("\n\nDisplay image:\n")
    console.log(props.data)

    if (!props.data) {
        return (
            <ActivityIndicator/>
        )
    }

    let type = props.data.type

    if (type == 'video/mp4') {
        return (
            <View style={styles.viewImage}>
                <Video
                    source={{uri: props.data.link}}
                    style={{
                        height :100,
                        width: 100
                    }}
                />
            </View>
        )
    }
    if (type != 'image/jpeg') {
        return (
            <View style={styles.viewImage}>
                <Image
                    style={{
                        width: Dimensions.get('window').width * 70 / 100,
                        height: Dimensions.get('window').height * 30 / 100,
                        resizeMode: 'contain'
                    }}
                    source={{
                        uri: 'https://www.tux-usb.com/images/404.png'
                    }}
                />
            </View>
        )
    }
    return (
        <View style={styles.viewImage}>
            <Image
                style={{
                    width: Dimensions.get('window').width * 80 / 100,
                    height: props.data.height * ( (Dimensions.get('window').height * 45 / 100) / props.data.width),
                    resizeMode: 'contain'
                }}
                source={{
                    uri: (type == 'image/jpeg' ? props.data.link: 'https://www.tux-usb.com/images/404.png')
                }}
            />
        </View>
    )
}

export default DisplayImage;