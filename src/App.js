import React, { Component } from 'react';

class App extends Component {
  a = () => {
    console.log('a');
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.a}>
          abbb
        </button>
      </>
    );
  }
}

export default App;
