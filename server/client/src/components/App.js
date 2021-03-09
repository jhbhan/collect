import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import Sidebar from './Sidebar';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component {
    render(){
        return(
            <div className ="container">
                <BrowserRouter>
                <div>
                    <Sidebar />
                    <Header />
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/surveys" component={Dashboard}/>
                    <Route path="/surveys/new" component={SurveyNew}/>
                </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App