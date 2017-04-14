import React, { Component } from 'react';

import ConceptTable from './components/ConceptTable';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      concepts: CONCEPTS
    };
  }
  handleAddQuantity(id){
    //this.state.
  }
  render() {
    return (
      <div>
          <h3>Resuelve Test</h3>
          <ConceptTable concepts = {this.state.concepts}  onAddingQuantity = {this.handleAddQuantity.bind(this)}/>
      </div>
    );
  }
}

export default App;

var CONCEPTS = [
  {description: 'Control Xbox', quantity: 1, num: 1, price: 999, total: 0},
  {description: 'Tabcin', quantity: 1, num: 12, price: 44, total: 0},
  {description: 'Control Xbox', quantity: 1, num: 1, price: 999, total: 0},
  {description: 'Tabcin', quantity: 1, num: 12, price: 44, total: 0},
  {description: 'Control Xbox', quantity: 1, num: 1, price: 999, total: 0},
  {description: 'Tabcin', quantity: 1, num: 12, price: 44, total: 0},
  {description: 'Control Xbox', quantity: 1, num: 1, price: 999, total: 0},
  {description: 'Tabcin', quantity: 1, num: 12, price: 44, total: 0},
  {description: 'Control Xbox', quantity: 1, num: 1, price: 999, total: 0},
  {description: 'Tabcin', quantity: 1, num: 12, price: 44, total: 0},
];