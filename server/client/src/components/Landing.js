import React, { Component } from 'react';


import {connect} from 'react-redux';
import * as actions from '../action';
import NewRoom from './NewRoom';

import Room from './Room';

class Landing extends Component {

    componentDidMount(){
        this.props.getLinks({userId: this.props.auth._id});
    }
    renderContent(){

        if(this.props.link != null){
            const zoomlist = this.props.link.map((link, i) =>
                <Room key={i} link={link}></Room>
            );
        return(
                <>
                {zoomlist}
                </>
            )
        }
    }

    render(){

        return (
            //two curly braces here. 1 to indicate we're using js
            //the other to indicate the object we're passing throug
            <div className="Landing row">
                {this.renderContent()}
                <NewRoom></NewRoom>
            </div>
        )
    }
}
function mapStatetoProps({auth,link}){
    return {auth, link};
}

export default connect(mapStatetoProps,actions) (Landing);