import React, { Component } from 'react';
import {CHome, CHeader, CSearch,
    CSearchInput, CFrequentlyUsedApps,
    CFAppItems, CAppItem,
    CFooter, CFooterItem, CFooterItems} from '../../components';
import { SwatchesPicker  } from 'react-color';
import {AppsHolder} from '../index';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messageDetails: [
                {
                    "id": "1",
                    "name": "Facebook",
                    "description" : "This app is for social networking",
                    "category": "Social Media",
                    "icon" : "/installed-apps/facebook.svg"
                },
                {
                    "id": "2",
                    "name": "Instagram",
                    "description" : "This app is for social networking",
                    "category": "Social Media",
                    "icon" : "/installed-apps/instagram.svg"
                },
                {
                    "id": "3",
                    "name": "Twitter",
                    "description" : "This app is for social networking",
                    "category": "Social Media",
                    "icon" : "/installed-apps/twitter.svg"
                },
                {
                    "id": "4",
                    "name": "Google +",
                    "description" : "This app is for social networking",
                    "category": "Social Media",
                    "icon" : "/installed-apps/google-plus.svg"
                },
                {
                    "id": "5",
                    "name": "Books",
                    "description" : "This app is for educational purpose",
                    "category": "Education",
                    "icon" : "/installed-apps/books.svg"
                }],
            footerIcon: ['FA', 'CV', 'GL', 'cc'],
            background: '#7eb0d6',
            colorPicker: false
        }
    }

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
        this.setState({colorPicker: false})
    };

    footerItemClick(e, value) {
        if(value === 'cc'){
            this.setState({colorPicker: true})
        }
    }

    render() {
        const self = this;
        return (
            <CHome color={this.state.background}>
                {this.state.colorPicker ?
                    <SwatchesPicker
                        color={ this.state.background }
                        onChangeComplete={ this.handleChangeComplete }
                    />
                    : ''
                }
                <CHeader/>
                <CSearch>
                <CSearchInput/>
                </CSearch>
                <CFrequentlyUsedApps>
                    <CFAppItems>
                    {this.state.messageDetails.map(function(item, i){
                        return <CAppItem {...item} key={i}  />
                    })}
                    </CFAppItems>
                </CFrequentlyUsedApps>
                <AppsHolder />
                <CFooter>
                    <CFooterItems>
                        {this.state.footerIcon.map(function(item, i){
                            return <CFooterItem name={item} handleClick={(e) => self.footerItemClick(e, item)} key={i}  />
                        })}
                    </CFooterItems>
                </CFooter>
            </CHome>


        )
}
}