import React, { Component } from 'react';
import {CHome, CHeader, CSearch, CSearchInput} from '../../components';
import {AppsHolder} from '../index';
export default class Home extends Component {

    render() {
        return (
            <CHome>
                <CHeader/>
                <CSearch>
                <CSearchInput/>
                </CSearch>
                <AppsHolder />
            </CHome>


        )
}
}