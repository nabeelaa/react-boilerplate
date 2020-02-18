import React, { Component, Suspense } from 'react';
import style from '../../styles/App.css';
import hello from '../../images/hello.gif';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.app}>
        <Suspense fallback={<div>Loading...</div>}>
          <img src={hello} alt="hello-world" />
        </Suspense>
      </div>
    );
  }
}

export default App;
