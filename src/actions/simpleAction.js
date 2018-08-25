const axios = require('axios');
export const simpleAction = () => dispatch => {
    /*dispatch({
        type: 'SIMPLE_ACTION',
        payload: 'result_of_simple_action'
    })*/
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                // handle success
                dispatch( {
                    type: 'SIMPLE_ACTION',
                    payload: response.data
                });
            })
            .catch(function (error) {
                // handle error
                dispatch({
                    type: 'SIMPLE_ACTION',
                    payload: []
                });
            })

}