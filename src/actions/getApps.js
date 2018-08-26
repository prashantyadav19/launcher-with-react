/**
 * getApps action use axios for fetching all apps
 */

const axios = require('axios');
export const getApps = () => dispatch => {
    axios.get('../installed-apps/apps.json')
        .then((response) => {
            dispatch({type:'GET_APPS_ACTION', payload:response.data});
        })
        .catch((err) => {
            dispatch({type:'GET_APPS_ACTION', payload:err});
        })
};