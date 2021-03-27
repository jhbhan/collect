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

    renderContent(){
        switch (this.props.auth){
            case null:
                return (
                    <div>Loading</div>
                    
                    );
            case false:
                return(
                    <div>Log In Page</div>
                );
            default:
                return(
                    <>
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/surveys" component={Dashboard}/>
                        <Route path="/newlink" component={LinkDetail}/>
                        <Route path="/surveys/new" component={SurveyNew}/>
                        <Route path="/edit" component={LinkDetail}/>
                    </>
                );
        }
    }

    render(){
        return(
            <div className ="container">
                <BrowserRouter>
                <div>
                    <Header />
                    {this.renderContent()}
                </div>
                </BrowserRouter>
            </div>
        )
    }
}
function mapStatetoProps({auth}){
    return {auth};
}
//sets all the actions as this.props._____
export default connect(mapStatetoProps,actions) (App);