import React from 'react';
import { Text , View} from "react-native";

function Gallery(props) {

    console.log("gallery:\n")
    //console.log("props:")
    //console.log(props)
    console.log('\n\ndata:\n')
    console.log(props.data)

    return (
        <View>
            <Text>{props.data.title}</Text>
        </View>
    )
}

export default Gallery;