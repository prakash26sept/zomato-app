const initialState = {
    words: [],
    restaurant_id: 0,
    darkTheme: false
};

function rootReducer(state = initialState, action: any) {


    console.log(state);

    if (action.type === "ADD_WORD") {
        console.log("add word reducer called");
        return {
            ...state,
            words: state.words.concat(action.payload)
        }
    }

    if (action.type === "ADD_RESTAURANT_CODE") {

        console.log("add restaurant code reducer called");

        console.log(action.payload);
        return {
            ...state,
            restaurant_id: action.payload
        }
    }

    if (action.type === "SWITCH_TO_DARK") {

        console.log("Switch to dark code called");
        console.log(action.payload);

        return {
            ...state,
            darkTheme: action.payload
        }
    }

    console.log(state);

    return state;
};

export default rootReducer;