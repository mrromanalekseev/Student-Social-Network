/* import { rerenderEntireTree } from "../render"; */

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, it is a great day!', likesCount: 12 },
                { id: 2, message: 'It is my first post', likesCount: 23 },
                { id: 3, message: 'Blabla', likesCount: 11 },
                { id: 4, message: 'Dada', likesCount: 11 }
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Mike' },
                { id: 2, name: 'John' },
                { id: 3, name: 'Niki' },
                { id: 4, name: 'Barbara' },
                { id: 5, name: 'Dave' },
                { id: 6, name: 'Lori' }
            ],
            messages: [
                { id: 1, message: 'Hi friends!' },
                { id: 2, message: 'How is your day?' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' },
                { id: 6, message: 'Yo' }
            ],
            newMessageBody: 'Texasvikings'
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State is changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}






export default store;
window.state = store;