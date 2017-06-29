import * as React from 'react';
import './App.css';
import Jeanne from './components/Jeanne';
import { store } from './store';
import { clothsActions } from './reducers/cloths';

interface State {
  value: string;
}

class App extends React.Component<any, State> {
  click = () => {
    const a: any = clothsActions.addCloth(this.state.value);
    store.dispatch(a);
  }

  update = (e: any) => {
    const value = e.target.value;
    this.setState({ value });
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.update} />
        <button onClick={this.click}>add</button>
        <Jeanne clothes={['bob']} />
      </div>
    );
  }
}

export default App;
