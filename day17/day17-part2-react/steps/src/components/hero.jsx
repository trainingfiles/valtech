import { Component } from "react";

class Hero extends Component{
    render(){
       return <h1>{this.props.children}</h1>
        //  return <h1>{this.props.valtechTitle}</h1>
    }
}

export default Hero