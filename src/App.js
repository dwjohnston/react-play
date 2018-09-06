import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Foo = ({ value }) => {
  console.log("render foo");
  return <div className="Foo"> Foo: {value} </div>;
};


const Bar = ({ onClick }) => {

  console.log("render bar");


  const handleClick = () => {
    onClick(Math.random());
  };

  return <div className="Bar">

    Bar

    <button onClick={handleClick} > click me!</button>

  </div>;
};

const Other = ({ }) => {
  console.log("render other");
  return <div className="Other"> Other </div>;
};


class App extends Component {


  constructor() {
    super();

    this.state = {
      value: "initial"
    };
  }

  handleBarChange = (value) => {
    this.setState({
      value: value
    });
  }

  render() {
    return (
      <div className="App">

        <Foo value={this.state.value} />

        <Bar onClick={this.handleBarChange} />

        <Other />

      </div>
    );
  }
}

export default App;
