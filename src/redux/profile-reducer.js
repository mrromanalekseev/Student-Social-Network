import {usersAPI, profileAPI} from "../api/api";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState ={
    posts: [
        { id: 1, message: 'Hi, it is a great day!', likesCount: 12 },
        { id: 2, message: 'It is my first post', likesCount: 23 },
        { id: 3, message: 'Blabla', likesCount: 11 },
        { id: 4, message: 'Dada', likesCount: 11 }
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch(action.type)  {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }    
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }       
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state; 
    }

}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId)
    //.then(response => {
        dispatch(setUserProfile(response.data));
    //});
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    //.then(response => {
        dispatch(setStatus(response.data));
    //});
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    //.then(response => {
        if (response.data.resultCode === 0) {
        dispatch(setStatus(response.data));
    }
    //});
}


export default profileReducer;