import React , {Component} from 'react';
import {Link} from 'react-router-dom';

class Room extends Component{


    render (){
        return (  
            <div className="Room col s4">
              <div className="card darken-1">
                <div className="card-content ">
                  <span className="card-title">{this.props.link.title}</span>
                  <p>{this.props.link.description}</p>
                </div>
                <div className="card-action">
                  <div style={{display:'flex', justifyContent: 'space-between'}}>
                  <Link
                    className="btn"
                    to={{
                      pathname:`/edit/`,
                      state: this.props.link
                    }}
                    >
                        <i class="material-icons">edit</i>
                    </Link>
                    <a className="waves-effect btn" target="blank" href={`${this.props.link.url}`}>
                        <i class="material-icons">open_in_new</i></a>
                    <a class="waves-effect waves-light btn"><i class="material-icons">delete</i></a>
    
                  </div>
                    
                </div>
              </div>
            </div>
        );
    }
}

export default Room;