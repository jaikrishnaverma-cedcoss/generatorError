import React, { Component } from 'react'
  
  export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo);
    }
    render() {
      if (this.state.hasError) {
        return <><h1>Something went wrong.</h1> <button onClick={()=>{this.props.setNum(parseInt(Math.random() * (20 - 1) + 1));this.state.hasError=false}}>Try Again</button></>;
      }
  
      return this.props.children; 
    }
    }
  