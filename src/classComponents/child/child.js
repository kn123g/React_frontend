import { render } from 'react-dom'; 
import React from 'react';
class Child extends React.Component{

    constructor(props) {
        super(props);
        this.state = { change: true };
      }

    conponentDidMount(){
        console.log('child mount')
    }
    componentDidUpdate(){
        console.log('child update')
    }
    render(){
        return <> <h1>Parent</h1>
        <button onClick={this.props.updateButton}>Child button to update parent button</button></>
    }
}


export default Child;