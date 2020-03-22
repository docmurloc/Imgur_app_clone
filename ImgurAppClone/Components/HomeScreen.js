import React, {useState, useEffect} from "react";
import { Button , View, FlatList, ActivityIndicator} from "react-native";
import {connect} from 'react-redux';

import getGallery from '../API/getGallery'
import Gallery from './Gallery';


const defaultPage = {
    section: '/hot',
    sort: '',
    pageRequest: 0,
    //pageDisplay: 0,
    window: '',
    showViral: null,
    mature: null,
    album_previews: null
}

function HomeScreen(props) {

    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        console.log("\n\nnewGallery:\n")
        console.log(gallery.length)
        const action = {type: 'SET_GALLERY', value : gallery}
        props.dispatch(action)

    }, [gallery])

    const [page, setPage] = useState(defaultPage);

    useEffect(() => {
        console.log("\n\nnewPage:\n")
        console.log(page)
        getGallery(props.profil.access_token, page).then((answer) => {
            setGallery(
                [
                    ...gallery,
                    ...answer.data
                ]
                //answer.data
                );
        })
    }, [page])

    const endpage = () => {
        let newPage = {
            ...page,
            pageRequest : page.pageRequest + 1,
        }
        setPage(newPage);
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
                onEndReached={endpage}
            />
        </View>
    );
}

const mapStateToProps = (state) => {
    return state
  }  

export default connect(mapStateToProps)(HomeScreen);