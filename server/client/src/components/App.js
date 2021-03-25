import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {connect} from 'react-redux';
import * as actions from '../action';

import Header from './Header';
import Landing from './Landing';
import LinkDetail from './LinkDetail';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return(
            <div className ="container">
                <BrowserRouter>
                <div>
                    {/* <Sidebar /> */}
                    <Header />
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/surveys" component={Dashboard}/>
                    <Route path="/newlink" component={LinkDetail}/>
                    <Route path="/surveys/new" component={SurveyNew}/>
                    <Route path="/edit" component={LinkDetail}/>
                </div>
                </BrowserRouter>
            </div>
        )
    }
}

//sets all the actions as this.props._____
export default connect(null,actions) (App);