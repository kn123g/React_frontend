import { render } from 'react-dom'; 
import React from 'react';
import Child from '../child/child'
class Parent extends React.Component{

    constructor(props) {
        super(props);
        this.state = { btn: 'Submit',message:'hai' };
        this.buttonClick = this.buttonClick.bind(this);
      }

    conponentDidMount(){
        console.log('parent mount')
    }
    componentDidUpdate(){
        console.log('parent update')
        console.log(this.state)
    }

    buttonClick(){
        this.setState({btn : 'Button'});
    }
    render(){
        return <> <button onClick={this.buttonClick}>{this.state.btn}</button> 
        <Child></Child> </>
    }
}

export default Parent;