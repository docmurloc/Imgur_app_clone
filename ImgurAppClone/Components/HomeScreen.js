import React, {useState} from "react";
import { Button , View, FlatList} from "react-native";
import {connect} from 'react-redux';

import getGallery from '../API/getGallery'
import Gallery from './Gallery';

function HomeScreen(props) {
    console.log(props);

    const [gallery, setGallery] = useState([]);
    
    if (gallery.length < 1) {
        getGallery(props.access_token).then((answer) => {
            //console.log("answer is :\n");
            //console.log(answer.data[0]);
            setGallery(answer.data);
        })
    }

    return (
        <View>
            <Button
              title="Go to Jane's profile"
              onPress={() => props.navigation.navigate('Profile', {name: 'Jane'})}
            />
            <FlatList
                data={gallery}
                renderItem={(item) => <Gallery data={item.item}/>}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const mapStateToProps = (state) => {
    return state
  }  

export default connect(mapStateToProps)(HomeScreen);