import {FETCH_USER} from '../action/types'

//is logged in vs is not logged in?
//changes the header content
//different component showing depending on access

//if loading, return null
//if logged in return user model
//if not logged in
const authReducer = (state = null, action) => {
    switch(action.type){
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}

export default authReducer