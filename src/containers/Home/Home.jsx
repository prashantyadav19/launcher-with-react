/**
 * Home container component is a main component of app
 * this component use for contain all component for this app
 *
 */

import React, { Component } from 'react';
import {CHome, CHeader, CSearch,
    CSearchInput, CFrequentlyUsedApps,
    CFAppItems, CAppItem,
    CFooter, CFooterItem, CFooterItems, CGridView, CGridViewItem} from '../../components';
import { SwatchesPicker  } from 'react-color';
import {AppsHolder} from '../index';
import { connect } from 'react-redux';
import { getApps } from '../../actions/getApps'

class Home extends Component {

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
            gridView: false,
            searchValue: '',
            gridType: 'four'
        }
    }

    /**
     * this method is use for calling getApp method
     */
    componentWillMount() {
        this.props.getApps();
    }

    /**
     * handleChangeComplete is use for color picker
     * @param color
     */
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
        this.setState({colorPicker: false})
    };

    /**
     * this method use for handle grid view
     * @param e
     * @param item
     */
    handleGridView = (e, item) => {
        if(item === '4 x 4 Mode'){
            this.setState({gridType: 'four'})
        }else {
            this.setState({gridType: 'five'})
        }
        this.setState({gridView: false})
    };

    /**
     * this method is use for manage footer items action
     * @param e
     * @param value
     */
    footerItemClick(e, value) {
        if(value === 'Color Picker'){
            this.setState({colorPicker: true})
        }else if(value === 'Category View'){
            this.setState({categoryView: !this.state.categoryView})
        }else if(value === 'Grid Layouts'){
            this.setState({gridView: !this.state.gridView})
        }
    }

    /**
     * this method is use for handle text value of search box
     * @param e
     */
    onTextChange(e) {
        this.setState({searchValue: e.target.value})
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
                <CSearchInput handleChange={(e) => this.onTextChange(e)}/>
                </CSearch>
                <CFrequentlyUsedApps>
                    <CFAppItems gridType={this.state.gridType}>
                    {this.state.freqUsedApps.map(function(item, i){
                        return <CAppItem {...item} key={i}  />
                    })}
                    </CFAppItems>
                </CFrequentlyUsedApps>
                <AppsHolder categoryView={this.state.categoryView} searchValue={this.state.searchValue} gridType= {this.state.gridType} />
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

/**
 * this method is use for map dispatch to props
 * @param dispatch
 */
const mapDispatchToProps = dispatch => ({
    getApps: () => dispatch(getApps())
})
/**
 * this method is use for map state value to props
 * @param state
 */
const mapStateToProps = state => ({
    ...state
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);