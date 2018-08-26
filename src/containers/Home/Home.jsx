import React, { Component } from 'react';
import {CHome, CHeader, CSearch,
    CSearchInput, CFrequentlyUsedApps,
    CFAppItems, CAppItem,
    CFooter, CFooterItem, CFooterItems, CGridView, CGridViewItem} from '../../components';
import { SwatchesPicker  } from 'react-color';
import {AppsHolder} from '../index';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            freqUsedApps: [
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
                }],
            footerIcons: ['Frequently Used', 'Category View', 'Grid Layouts', 'Color Picker'],
            gridViewList: ['4 x 4 Mode', '4 x 5 Mode'],
            background: '#7eb0d6',
            colorPicker: false,
            categoryView: false,
            gridView: false
        }
    }

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
        this.setState({colorPicker: false})
    };

    handleGridView = (e, item) => {
        console.log('new one--', item);
    }
    footerItemClick(e, value) {
        if(value === 'Color Picker'){
            this.setState({colorPicker: true})
        }else if(value === 'Category View'){
            this.setState({categoryView: !this.state.categoryView})
        }else if(value === 'Grid Layouts'){
            this.setState({gridView: !this.state.gridView})
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
                <CGridView mode={this.state.gridView}>
                {this.state.gridView ?
                    this.state.gridViewList.map(function(item, i){
                        return <CGridViewItem name={item} handleClick={(e) => self.handleGridView(e, item)} key={i}  />
                    })
                    : ''

                }
            </CGridView>
                <CHeader/>
                <CSearch>
                <CSearchInput/>
                </CSearch>
                <CFrequentlyUsedApps>
                    <CFAppItems>
                    {this.state.freqUsedApps.map(function(item, i){
                        return <CAppItem {...item} key={i}  />
                    })}
                    </CFAppItems>
                </CFrequentlyUsedApps>
                <AppsHolder categoryView={this.state.categoryView} />
                <CFooter>
                    <CFooterItems>
                        {this.state.footerIcons.map(function(item, i){
                            return <CFooterItem name={item} handleClick={(e) => self.footerItemClick(e, item)} key={i}  />
                        })}
                    </CFooterItems>
                </CFooter>
            </CHome>


        )
}
}