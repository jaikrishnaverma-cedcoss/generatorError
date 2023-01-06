import React, { Component } from 'react'

export default class Main extends Component {
    constructor(props) {
      super(props)
    this.state = {

      }
    }


  render() {
    if(this.props.num<5){
        throw new Error("Less Than 5")
    }
    return (
      <button onClick={()=>this.props.setNum(parseInt(Math.random() * (20 - 1) + 1))}>Number is :{this.props.num}</button>
    )
  }
}
