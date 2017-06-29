import * as React from 'react';
import './App.css';
import Jeanne from './components/Jeanne';
import { store } from './store';
import { clothsActions } from './reducers/cloths';

class App extends React.Component<any, any> {
  click = () => {
    console.log('dispatch');

    const a: any = clothsActions.addCloth('echarpe');
    store.dispatch(a);
  }
  render() {
    return (
      <div className="App">
        <a href="#" onClick={this.click}>click</a>
        <Jeanne clothes={['bob']} />
      </div>
    );
  }
}

export default App;
