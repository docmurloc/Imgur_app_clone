import React from "react";
import { Button , View} from "react-native";
import {connect} from 'react-redux';

import environement from '../env/Environement'
import { WebView } from 'react-native-webview';

import { CommonActions } from '@react-navigation/native';


function ConnectionScreen(prop) {
    console.log("ConnectionScreen log:");
    console.log(prop);

    if (prop.access_token) {
        //prop.navigation.navigate('Home');
        prop.navigation.dispatch(
            CommonActions.reset({
                index:1,
                routes: [
                    {name: 'Home'}
                ]
            })
        )
    }

    const SetConnection = url => {
        const regex = '.*access_token=(.*)&expires_in=(.*)&token.*refresh_token=(.*)&account_username=(.*)&account_id=(.*).*';
        const found = url.match(regex);
        const action = {type: 'CONNECTION', accessToken: found[1], refreshToken: found[2], expiresIn: found[3], username: found[4], accountId: found[5]}
        prop.dispatch(action)
    }

    const handleWebViewNavigationStateChange = newNavState => {
        //console.log(newNavState);
        const {url} = newNavState;

        if (!url) return;

        if (url.includes('access_token')) {
            SetConnection(url)
        }
    }
    return (
            <WebView
                source={{uri: environement.Base_Auth}}
                onNavigationStateChange = {handleWebViewNavigationStateChange}
            />
    );
}

const mapStateToProps = (state) => {
    return state
  }  
export default connect(mapStateToProps)(ConnectionScreen);