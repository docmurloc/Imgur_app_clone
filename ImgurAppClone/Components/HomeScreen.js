import React, {useState, useEffect} from "react";
import { Button , View, FlatList} from "react-native";
import {connect} from 'react-redux';

import getGallery from '../API/getGallery'
import Gallery from './Gallery';

function HomeScreen(props) {
    //console.log(props);

    const [gallery, setGallery] = useState(null);

    useEffect(() => {
        const action = {type: 'SET_GALLERY', value : gallery}
        props.dispatch(action)

    }, [gallery])

    const [page, setPage] = useState(0);

    const [displayGallery, setDisplayGallery] = useState([]);
    
    if (!gallery) {
        getGallery(props.profil.access_token).then((answer) => {
            //console.log("answer is :\n");
            //console.log(answer.data[0]);
            setGallery(answer.data);
        })
    }

    fileDisplayGallery = (pageDisplay) => {
        const newDisplay = [...displayGallery];

        i = pageDisplay * 10;

        if (i >= gallery.length) {
            return;
        }

        for (i; i < pageDisplay * 10 + 10 && i < gallery.length; i++) {
            newDisplay.push(gallery[i])
        }
        setPage(pageDisplay);
        setDisplayGallery(newDisplay);
    }

    if (displayGallery.length < 1 && gallery) {
        fileDisplayGallery(0);
    }

    const endpage = () => {
        fileDisplayGallery(page + 1);
    }
    return (
        <View>
            <Button
              title="Go to Jane's profile"
              onPress={() => props.navigation.navigate('Profile', {name: 'Jane'})}
            />
            <FlatList
                data={displayGallery}
                renderItem={(item) => <Gallery data={item.item}/>}
                keyExtractor={item => item.id}
                onEndReached={endpage}
            />
        </View>
    );
}

const mapStateToProps = (state) => {
    return state
  }  

export default connect(mapStateToProps)(HomeScreen);