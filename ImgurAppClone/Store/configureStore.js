import { createStore } from 'redux';
import profileReducer from './Reducers/profileReducer'

const initialState = { 
    access_token: null,
    refresh_token: null,
    expires_in: null,
    account_username: null,
    account_id: null
};

export default createStore(profileReducer, initialState)