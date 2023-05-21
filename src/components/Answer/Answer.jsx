import React from 'react';
import './Answer.css'

const Answer = () => {
    return (
        <div className='ans'>
            <div>
                <h3>1. what is difference between props and state</h3>
                <p> <h4>Ans:</h4>Difference between props and Atate in below: <br />
                 ...State <br />
                 1. State is the local state of the component where it cannot be accessed and modified by outside components. <br />
                 2. State changes can be asynchronous. <br />
                 3. States can be used for rendering dynamic changes with the component. <br />
                 4. Stateless components cannot have State <br />
                
                ..props <br />
                 1. Props on the other hand make components reusable by giving them the ability to receive data from their parent component in the form of props. <br />
                 2. Props are read-only. <br />
                 3. Props are used to communicate between components. <br />
                 4. Stateless component can have Props.	<br />
                </p>
            </div> <hr />
            <div>
                <h3>2. How do use state work</h3> <br />
                <p> <h4>Ans:</h4> useState is the React hook that allows you to add state to a functional component. It returns an array with two values the current state and a function to update it. <br /> 
                The hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called. </p>
            </div>
            <div>
                <h3>3. What can useEffect do other then data load</h3>
                <p> <h4>Ans:</h4> useEffect in React js allows you to perform side effects on your components. <br />
                 Side Effects React Use Effect examples include data retrieval, direct DOM updates, and timers. </p>
            </div>
            <div>
                <h3>4. How Does React Work</h3>
                <p> <h4>Ans:</h4>React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM. <br />
                 React only changes what needs to be changed! </p>
            </div>
            
           
        </div>
    );
};

export default Answer;