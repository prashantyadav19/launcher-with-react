import React, { Component } from 'react';
import {CAppHolder, CApp} from '../../components';
import { connect } from 'react-redux';
import { getApps } from '../../actions/getApps'

 class AppsHolder extends Component {

    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.getApps();
    }

    render() {
        console.log('apps', this.props);
        return (
            <CAppHolder>
                {
                    this.props.apps && this.props.apps.result && this.props.apps.result.length ? this.props.apps.result.map((item, index) => {
                        return <CApp {...item} />;
                    }) : ''
                }
            </CAppHolder>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getApps: () => dispatch(getApps())
})
const mapStateToProps = state => ({
    ...state
})
export default connect(mapStateToProps, mapDispatchToProps)(AppsHolder);