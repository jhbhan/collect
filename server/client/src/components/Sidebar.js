import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends Component{
    
    render (){
        return (  
            <div className="Sidebar">
                <Link className = "waves-effect waves-light btn-large orange darken-1" to="/History" href=""><i class="material-icons left">assignment</i>History</Link>
                <br></br>
                <Link className = "waves-effect waves-light btn-large orange darken-1" to="/Profiles" href=""><i class="material-icons left">accessibility</i>Profiles</Link>
                <br></br>
                <Link className = "waves-effect waves-light btn-large orange darken-1" to="/Payments" href=""><i class="material-icons left">attach_money</i>Payments</Link>
            </div>
        );
    }
}
    export default Sidebar