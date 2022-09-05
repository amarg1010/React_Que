import React, { Component } from "react";

class Greet extends Component{

    constructor(){
        super()
        this.state={
            mess:'Welcome'
        }
    }

    changeMess(){
        this.setState({
            mess:'thank you'
        })

    }

    render(){
        return(
            <div>
                <h1>{this.state.mess}</h1>
                <button onClick={() => this.changeMess()}>Subscribe</button>
            </div>
        )
    }
}

export default Greet
