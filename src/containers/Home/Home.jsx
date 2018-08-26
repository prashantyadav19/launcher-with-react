import React, { Component } from 'react';
import {CHome, CHeader, CSearch, CSearchInput} from '../../components';
export default class Home extends Component {

    render() {
        return (
            <CHome>
                <CHeader/>
                <CSearch>
                <CSearchInput/>
                </CSearch>
            </CHome>


        )
}
}