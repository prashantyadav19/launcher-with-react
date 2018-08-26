import React, { Component } from 'react';
import {CAppHolder, CApp, CCategoryView} from '../../components';
import { connect } from 'react-redux';
import { getApps } from '../../actions/getApps'

 class AppsHolder extends Component {

    constructor(props) {
        super(props);
        this.state = {apps: []};
    }
    componentWillMount() {
        this.props.getApps();
    }
     componentWillReceiveProps(nextProps) {
         if (this.props.searchValue === nextProps.searchValue && this.props.apps && this.props.apps.result && this.props.apps.result.length) {
             this.setState({apps: this.props.apps.result});
         }
         else if (this.props.searchValue !== nextProps.searchValue && nextProps.searchValue !== '' && this.props.apps && this.props.apps.result && this.props.apps.result.length) {
             let result = this.props.apps.result.filter(item => item.name.toLowerCase().indexOf(nextProps.searchValue.toLowerCase()) !== -1);
             this.setState({apps: result});
         } else if(nextProps.searchValue === '' && this.props.apps && this.props.apps.result && this.props.apps.result.length) {
             this.setState({apps: this.props.apps.result});
         }
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
                renderItems.push(<CCategoryView category={key} key={key}>{this.renderApps(items[key])}</CCategoryView>);
            }
        }
        return renderItems;
    }

     render() {
        if (this.props && this.props.categoryView) {
            let items = this.categorizedApps(this.state.apps);
            return (
                <CAppHolder gridType = {this.props.gridType}>
                    {
                       this.renderCategoryView(items)

                    }
                </CAppHolder>
            )
        }
        return (
            <CAppHolder gridType = {this.props.gridType}>
                {
                    this.state.apps.map((item, index) => {
                        return <CApp {...item} key={index} />;
                    })
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