import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar'
import Counters from './components/counters'
import React, { Component } from 'react';

class App extends Component {

state = { 
  counters : [
      {id: 1 , value: 0},
      {id: 2 , value: 0},
      {id: 3 , value: 0},
      {id: 4 , value: 0}
  ]
}

handleIncreament= (counter)=>{
    const counters = this.state.counters.map((c)=> {if(c.id === counter.id){ c.value += 1} return c});
    this.setState({counters})
}

handleReset = () =>{
    const counters = this.state.counters.map(c => { c.value = 0; return c})
    this.setState({counters})
}

handleDelete = (counterId)=>{
    const counters =  this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
}


  render() { 
    return ( 
      <React.Fragment>
      <Navbar tottalCounters={this.state.counters.filter(c => c.value > 0).length}/>
      <main className='container text-center'>
        <Counters  onDelete={this.handleDelete} onIncreament={this.handleIncreament} onReset={this.handleReset} counters={this.state.counters}/>
      </main>
      </React.Fragment>
    );
  }
} 
export default App;

