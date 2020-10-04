import React, { Component, lazy, Suspense } from 'react';
import style from '../../styles/App.css';

const HomeComponent = lazy(() => import('./Home.js'));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.app}>
        <Suspense fallback={<div>Loading...</div>}>
          <HomeComponent />
        </Suspense>
      </div>
    );
  }
}

export default App;
