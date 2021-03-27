import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as actions from '../action'
import {connect} from 'react-redux';
//link tag vs a tag
//link navite gto different route rendered by react router
//a navigate to completely differntly html doc

class Header extends Component{

    renderContent(){
        switch (this.props.auth){
            case null:
                return (
                    <li>
                        <a>Loggin in....</a>
                    </li>);
            case false:
                return(
                    <li>
                        <a href="/auth/google">Log in with Google</a>
                    </li>
                );
            default:
                return(
                    <li>
                        <a href="/api/logout">Log Out</a>
                    </li>
                );
        }
    }

    render (){
        return (  
        <nav className="nav-extended">
            <div className="nav-wrapper">
                <ul className="left"><Link
                to={'/newlink'}
                className ="left">
                    New Link
                </Link>

                </ul>
                <Link
                to={'/'}
                className ="brand-logo center">
                    Hi
                </Link>

                <ul className="right">
                    {this.renderContent()}
                </ul>
            </div>
          </nav>
        );
    }
}
//maps the ststate to prop.___
function mapStatetoProps({auth}){
    return {auth};
}
//this sets up the connect from react to redux
//provides the connected component with pieces of data it needs from the store
export default connect(mapStatetoProps) (Header);