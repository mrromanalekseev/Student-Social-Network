import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE IS FATCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState ={
    users: [
        /*{ id: 1, photoUrl: 'data:image/jpeg;base64,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',
            followed: false, fullName: 'Dmitry', status: 'I am Boss', location: {city: 'Los Angelos', country: 'US'} },
        { id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_bHAJHnCI8FWblTKUFKvFIrJUrqaanw7Pgg&usqp=CAU', followed: true, fullName: 'Paul', status: 'I am Boss too', location: {city: 'London', country: 'GB'} },
        { id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNAYfEZa-JkgzFjTyALSKvr6gzkQuny9BDZQ&usqp=CAU', followed: false, fullName: 'Donald', status: 'I am Boss too', location: {city: 'Dallas', country: 'US'} },*/
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress:[]
};

const usersReducer = (state = initialState, action) => {
    switch(action.type)  {
        case FOLLOW:
            return {
                ...state,
                //users: [...state.users],
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u; 
                })
             }
        case UNFOLLOW:
            return {
                ...state,
                //users: [...state.users],
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u; 
                })
             }

        case SET_USERS: {
            return { ...state, users: action.users}
        }

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count}
        }

        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return { ...state, 
                followingInProgress: action.isFetching
                 ? [...state.followingInProgress, action.userId]
                 : state.followingInProgress.filter(id => id !=action.userId)
           }

        }

        default:
            return state; 
    }

}

export const followSuccess = (userId) => ({type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId })
export const setUsers =  (users) => ({type: SET_USERS, users })  
export const setCurrentPage =  (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount =  (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching =  (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress =  (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const requestUsers = (page, pageSize) => {

    return async (dispatch) => {

        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize)
        //.then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        //});       
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true,userId));
    let response = await apiMethod(userId)

    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    } 
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}


export default usersReducer;