export default (state = {}, action) => {
    switch (action.type) {
        case 'GET_APPS_ACTION':
            return {
                result: action.payload
            };
        default:
            return state
    }
}