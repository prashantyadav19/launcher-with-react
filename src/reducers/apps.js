/**
 * app reducer use for getting action and return new state based on that action
 * @param state
 * @param action
 * @returns {*}
 */
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