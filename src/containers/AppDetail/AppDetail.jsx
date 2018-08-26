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

    componentWillUpdate(nextProps) {
        if (nextProps.apps && nextProps.apps.result && nextProps.apps.result.length === 1) {
            let freqUsedApps = localStorage.getItem('freqUsedApps');
            if (freqUsedApps !== '' && freqUsedApps !== null) {
                let apps = JSON.parse(freqUsedApps);
                apps = apps.filter((item, index) => {
                    return item.id !== this.props.match.params.id;
                });
                apps.unshift(nextProps.apps.result[0]);
                localStorage.setItem('freqUsedApps', JSON.stringify(apps));
            } else {
                localStorage.setItem('freqUsedApps', JSON.stringify([nextProps.apps.result[0]]));
            }
        }
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