const boardReducer = (state = 0, action) => {
    switch (action.type){
        case 'CREATE_BOARD':
            return state + action.payload
        default:
            return state
    }
}

export default boardReducer

//payload will be determined by user input for board type