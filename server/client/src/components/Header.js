import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
//link tag vs a tag
//link navite gto different route rendered by react router
//a navigate to completely differntly html doc

class Header extends Component{

    renderContent(){
        return(
            <li>
                <a href="/auth/google">Log Out</a>
            </li>
        );
    }

    render (){
        console.log(this.props);
        return (  
        <nav>
            <div className="nav-wrapper">
                <Link
                to={this.props.auth ? '/surveys' : '/'}
                className ="left brand-logo">
                    Collect
                </Link>

                <ul className="right">
                    {this.renderContent()}
                </ul>
            </div>
          </nav>
        );
    }
}

function mapStatetoProps({auth}){
    return {auth};
}

//this sets up the connect from react to redux
//provides the connected component with pieces of data it needs from the store
export default Header;