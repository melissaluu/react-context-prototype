import React, { Component } from 'react';
import merge from 'lodash.merge';
import AppContextState from './AppContextState';

const AppContext = React.createContext();



class AppContextProvider extends Component {

    state = merge({}, AppContextState.state);

    generateUpdaters = function() {
        return Object.keys(AppContextState.updaters).reduce((acc, key) => {
            acc[key] = (propName, value) => {
                this.setState(AppContextState.updaters[key](this.state, propName, value));
            };
            return acc;
        }, {});
    }.bind(this);

    updaters = this.generateUpdaters();

    render () {
        return (
            <AppContext.Provider value={{
                state: this.state,
                updaters: this.generateUpdaters(),
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppContext;
export {AppContextProvider};