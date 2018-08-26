import React, { Component } from 'react';
import {CAppHolder, CApp, CCategoryView} from '../../components';
import { connect } from 'react-redux';
import { getApps } from '../../actions/getApps'

 class AppsHolder extends Component {

    constructor(props) {
        super(props);
        this.state = {categoryView: true};
    }
    componentWillMount() {
        this.props.getApps();
    }

    categorizedApps(items) {
        return items.reduce(function (r, a) {
            r[a.category] = r[a.category] || [];
            r[a.category].push(a);
            return r;
        }, Object.create(null));
    }

    renderApps(items) {
        return items.map((item, index) => {
            return <CApp {...item} key={index} />;
        })
    }

    renderCategoryView(items) {
        let renderItems = [];
        for (let key in items) {
            if (key) {
                console.log(key, items[key]);
                renderItems.push(<CCategoryView category={key}>{this.renderApps(items[key])}</CCategoryView>);
            }
        }
        return renderItems;
    }

     render() {
        if (this.state.categoryView) {
            let items = this.categorizedApps(this.props.apps && this.props.apps.result && this.props.apps.result.length ? this.props.apps.result: []);
            return (
                <CAppHolder>
                    {
                       this.renderCategoryView(items)

                    }
                </CAppHolder>
            )
        }
        return (
            <CAppHolder>
                {
                    this.props.apps && this.props.apps.result && this.props.apps.result.length ? this.props.apps.result.map((item, index) => {
                        return <CApp {...item} key={index} />;
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