import axios from 'axios';
import {FETCH_USER, GET_LINKS, ADD_LINK, DELETE_LINK, EDIT_LINK} from './types';

const fetchUser = () => 
    async (dispatch) => {
        const res = await axios.get('/api/current_user')//asynchronous
        dispatch({type: FETCH_USER, payload: res.data});
    }

const addLink = (linkObj) =>
    async (dispatch) => {
        const res = await axios.post('/api/add_link', linkObj)//asynchronous
        dispatch({type: ADD_LINK, payload: res.data});
    }
const getLinks = (userId) =>
    async (dispatch) => {
        const res = await axios.post('/api/get_links',userId);//asynchronous
        dispatch({type: GET_LINKS, payload: res.data});
    }

const editLink = (linkObj) =>
    async (dispatch) => {
        const res = await axios.post('/api/edit_link',linkObj)//asynchronous
        dispatch({type: EDIT_LINK, payload: res.data});
    }

const deleteLink = (id) =>
    async (dispatch) => {
        const res = await axios.post('/api/delete_link',id)//asynchronous
        dispatch({type: DELETE_LINK, payload: res.data});
    }

export {getLinks,fetchUser,addLink,deleteLink,editLink}