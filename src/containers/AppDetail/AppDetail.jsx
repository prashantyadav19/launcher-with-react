import React, { Component } from 'react';
import {CAppDetail} from '../../components';
import { connect } from 'react-redux';
import { getAppDetail } from '../../actions/getAppDetail'

class AppDetail extends Component {

    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.getAppDetail(this.props.match.params.id);
    }

    render() {
        return (
            this.props.apps && this.props.apps.result && this.props.apps.result.length === 1 ? <CAppDetail {...this.props.apps.result[0]} /> : ''
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getAppDetail: (id) => dispatch(getAppDetail(id))
})
const mapStateToProps = state => ({
    ...state
})
export default connect(mapStateToProps, mapDispatchToProps)(AppDetail);