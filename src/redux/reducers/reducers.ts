const initialState = {
    words: [],
    restaurant_id: 0,
    darkTheme: false,
    fontSize: "small",
    selectedLanguage: "en"
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

    if (action.type === "CHANGE_FONT_SIZE") {

        console.log("Font size changed");
        console.log(action.payload);

        return {
            ...state,
            fontSize: action.payload
        }
    }

    if (action.type === "CHANGE_LANGUAGE") {

        console.log("language changed");
        console.log(action.payload);

        return {
            ...state,
            selectedLanguage: action.payload
        }
    }

    console.log(state);

    return state;
};

export default rootReducer;