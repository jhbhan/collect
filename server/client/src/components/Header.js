import React, {Component} from 'react';
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
                to={this.props.auth ? '/surveys' : '/'}
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

//this sets up the connect from react to redux
//provides the connected component with pieces of data it needs from the store
export default Header;