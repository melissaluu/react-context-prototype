import React, { Component } from 'react';
import merge from 'lodash.merge';
import AppContextState from './AppContextState';

const AppContext = React.createContext();

class AppContextProvider extends Component {


    state = merge({}, AppContextState.state);
    
    updatePerson = function(propName, value) {
        this.setState(AppContextState.updaters.person(this.state, propName, value));
    }.bind(this)
    
    updateOffice = function(propName, value) {
        this.setState(AppContextState.updaters.office(this.state, propName, value));
    }.bind(this)

    render () {
        return (
        <AppContext.Provider value={{
            state: this.state,
            updatePerson: this.updatePerson, 
            updateOffice: this.updateOffice, 
        }}>
            {this.props.children}
        </AppContext.Provider>
        )
    }
}

export default AppContext;
export {AppContextProvider};