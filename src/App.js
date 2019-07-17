import React, {Component} from 'react';
import './App.css';
import DynamicTable from './table/DynamicTable'

class App extends Component{

  state = {
    clients : [
      {
        name: 'name01',
        age: 23,
        phone: 9992292983
      },
      {
        name: 'name02',
        age: 23,
        phone: 9992292983
      },
      {
        name: 'name03',
        age: 23,
        phone: 9992292983
      }
    ]
  };

  render() {

    const heads = ['Name', 'Age','Phone'];
    const tags = ['name','age','phone'];
    const clients = [...this.state.clients];

    return (
        <div className="App">
          <DynamicTable heads={heads} data={clients} tags={tags}/>
        </div>
    );
  }

}

export default App;
