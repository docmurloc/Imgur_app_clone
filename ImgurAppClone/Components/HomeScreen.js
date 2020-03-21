import React from "react";
import { Button , View} from "react-native";
import {connect} from 'react-redux';

import getGallery from '../API/getGallery'

function HomeScreen(props) {
    console.log(props);

    getGallery(props.access_token).then((answer) => {
        console.log("answer is :\n");
        console.log(answer.data[0]);
    })

    return (
        <View>
            <Button
              title="Go to Jane's profile"
              onPress={() => prop.navigation.navigate('Profile', {name: 'Jane'})}
            />
        </View>
    );
}

const mapStateToProps = (state) => {
    return state
  }  

export default connect(mapStateToProps)(HomeScreen);