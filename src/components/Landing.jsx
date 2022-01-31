import React from 'react';
import { increment, decrement } from '../actions/validate'
import { useDispatch } from 'react-redux';
 function LandingPage(props) {
    const dispatch = useDispatch();
    console.log("Under LandingPage...!!!");
    console.log("Dispatch :"+dispatch );
    console.log(props.counter);
    return (
        <div>
            <h1>Welcome to React-Redux</h1>
            <h3>Counter :{props.counter} </h3>
            
        </div>
    )
}

export default LandingPage