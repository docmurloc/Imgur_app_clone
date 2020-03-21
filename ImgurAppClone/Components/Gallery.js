import React from 'react';
import {StyleSheet ,Text , View} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        margin: 5,
        padding: 5,
        flex: 1,
        flexDirection: 'column',
        borderColor: 'black',
        borderBottomWidth: 1
    },
    title: {
        fontSize: 20,
        textAlign: 'center'
    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

function Gallery(props) {

    //console.log("gallery:\n")
    ////console.log("props:")
    ////console.log(props)
    //console.log('\n\ndata:\n')
    //console.log(props.data)

    return (
        <View style={styles.container}>
            <Text style={styles.title} >{props.data.title}</Text>
            <View style={styles.detail}>
                <Text>by {props.data.account_url}</Text>
                <Text>{props.data.views} views</Text>
                <Text>{props.data.points} points</Text>
            </View>
            <Text>description</Text>
            <Text>{props.data.description}</Text>
        </View>
    )
}

export default Gallery;