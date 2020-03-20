import React from "react";
import { Button , View} from "react-native";
import {connect} from 'react-redux';



function HomeScreen(prop) {
    console.log(prop);

    //console.log(prop.navigation);
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