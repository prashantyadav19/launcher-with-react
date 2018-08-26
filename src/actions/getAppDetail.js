/**
 * getAppDetail action use axios for fetching app details
 *
 */

const axios = require('axios');

export const getAppDetail = (id) => dispatch => {
    axios.get('../installed-apps/apps.json')
        .then((response) => {
            let data = response.data.filter((item) => {
                return item.id === id;
            });
            dispatch({type:'GET_APP_DETAIL_ACTION', payload: data});
        })
        .catch((err) => {
            dispatch({type:'GET_APP_DETAIL_ACTION', payload: err});
        })
};