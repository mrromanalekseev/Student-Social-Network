const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState =  {
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
    newMessageBody: 'Texasvikings!'
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messages.push({ id: 7, message: body });
            state.newMessageBody = '';
            return state;
        default:
            return state; 
    } 
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;