export default (state = {}, action) => {
    switch (action.type) {
        case 'GET_APPS_ACTION':
            return {
                result: action.payload
            };
        case 'GET_APP_DETAIL_ACTION':
            return {
                result: action.payload
            };
        default:
            return state
    }
}