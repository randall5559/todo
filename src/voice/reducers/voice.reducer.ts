const initialState = {
   isVoiceCmd: null
};


export const voiceReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'VOICE_ON_OFF':
            console.log(!state.isVoiceCmd);
            return Object.assign({}, state, { isVoiceCmd: !state.isVoiceCmd });

        default:
            return state;
    }
};
