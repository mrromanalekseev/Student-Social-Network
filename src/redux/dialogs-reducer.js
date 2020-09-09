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
    ]
    
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
       
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}]
            };
        default:
            return state; 
    } 
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;