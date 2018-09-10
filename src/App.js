import React, { Component, PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

const Foo = ({ value }) => {
  console.log("render foo");
  return <div className="Foo"> Foo: {value} </div>;
};



// class Bar extends Component {

//   constructor() {
//     super();
//     this.state = {
//       ownValue: "initial-own-value"
//     };
//   }

// }

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


const ThrowsError = ({ }) => {

  const handleClick = () => {
    throw Error("I'm an error!");
  };

  return <button onClick={handleClick}> Click me for an error!</button>


};


class ThrowsErrorClass extends Component {

  handleClick = () => {
    throw Error("I'm an error!");
  }

  render() {
    throw new Error("Render error");
    return <button onClick={this.handleClick}> Click me for an error! Class</button>
  }


};


class Pure extends PureComponent {

  render() {

    const { v } = this.props;
    console.log("render pure", v);
    return <div className="Pure">
      Pure {v}
    </div>
  }
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

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

  componentDidCatch(error, info) {

    console.log(error, info);
    this.setState({
      hasError: true,
      errorMessage: error
    });
  }

  dismissError = () => {
    this.setState({
      hasError: false
    });
  }

  render() {
    return (
      <div className="App">

        {this.state.hasError && <div className="error-message">
          {this.state.error} <button onClick={this.dismissError}> dismiss error</button>
        </div>}

        <Foo value={this.state.value} />

        <Bar onClick={this.handleBarChange} />

        <Other />
        <Other />
        <Other />

        <ErrorBoundary>
          <ThrowsError />
          <ThrowsErrorClass />
        </ErrorBoundary>

        <Pure v="static" />

        <Pure v={this.state.value} />



      </div>
    );
  }
}

export default App;
