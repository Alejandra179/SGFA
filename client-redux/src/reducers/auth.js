import { REGISTER_SUCCESS, REGISTER_FAIL, 
    USER_LOADED, AUTH_ERROR,
    LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, DELETE_ACCOUNT
} from "../actions/types"; 

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,  
    user: null
}

export default function(state = initialState, action){
    
    const {type, payload} = action

    switch(type) {
        case LOGIN_SUCCESS:
           
        case AUTH_ERROR:  
        case LOGIN_FAIL:  
        case LOGOUT:  
        case USER_LOADED:
            return {
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        default:
            return state        
    }
}