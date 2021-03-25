import {GET_LINKS,ADD_LINK,DELETE_LINK,EDIT_LINK} from '../action/types'

//is logged in vs is not logged in?
//changes the header content
//different component showing depending on access

//if loading, return null
//if logged in return user model
//if not logged in

const initialState = []

const linkReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_LINKS:
            return  action.payload || false;
        case ADD_LINK:
            console.log(`currentstate: ${state}, payload: ${action.payload}`)
            return [...state, action.payload] || false;
        case DELETE_LINK:
            console.log(`currentstate: ${state}, payload: ${action.payload}`)
            return [...state, action.payload] || false;
        case EDIT_LINK:
            console.log(`currentstate: ${state}, payload: ${action.payload}`)
            return [...state, action.payload] || false;
        default:
            return state;
    }
}

export default linkReducer