export function addWord(payload: any) {
    return { type: "ADD_WORD", payload }
}

export function addRestaurantCode(payload: any) {
    // console.log("action add restaurant called");

    // console.log(payload);

    return { type: "ADD_RESTAURANT_CODE", payload }
}

export function switchToDark(payload: any) {
    return { type: "SWITCH_TO_DARK", payload }
}

export function changeFontSize(payload: any) {
    return { type: "CHANGE_FONT_SIZE", payload }
}

export function changeLanguage(payload: any) {
    return { type: "CHANGE_LANGUAGE", payload }
}


// export default add;