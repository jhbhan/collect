import React , {Component} from 'react';
import {Link} from 'react-router-dom';

class RegularPayments extends Component{


    render (){
        return (  
            <div class="RegularPayments">
              <div class="card darken-1">
                <div class="card-content ">
                  <span class="card-title">{this.props.type}</span>
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
                <div class="card-action">
                    <Link
                    to={{pathname:`/detail/${this.props.type}`}}
                    
                    >
                        Details
                    </Link>
                    <Link
                    to={{pathname:`/request/${this.props.type}`}}
                    >
                        Request
                    </Link>
                </div>
              </div>
            </div>
        );
    }
}

export default RegularPayments;