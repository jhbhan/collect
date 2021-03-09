import React from 'react';
import RegularPayments from './RegularPayments';


const Landing = () => {
    return (
        //two curly braces here. 1 to indicate we're using js
        //the other to indicate the object we're passing throug
        <div className="Landing">
           <RegularPayments type="Rent" />

           <RegularPayments type="Utilities" />

           <RegularPayments type="Internet" />
           

        </div>
    )
}

export default Landing;