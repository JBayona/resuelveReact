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
    let tmp = this.state.concepts[id];
    tmp.quantity++;
    let tmpArray = this.state.concepts;
    tmpArray[id] = tmp;
    this.setState({
        concepts : tmpArray
    });
  }
  handleRemoveQuantity(id){
    let tmp = this.state.concepts[id];
    tmp.quantity--;
    let tmpArray = this.state.concepts;
    tmpArray[id] = tmp;
    this.setState({
        concepts : tmpArray
    });
  }
  handleDeleteConcept(id){
    this.state.concepts.splice(id,1);
    this.setState({
      concepts: this.state.concepts
    });
  }
  render() {
    return (
      <div>
          <h3>Resuelve Test</h3>
          <ConceptTable concepts = {this.state.concepts}  
                        onAddQuantity = {this.handleAddQuantity.bind(this)}
                        onRemoveQuantity = {this.handleRemoveQuantity.bind(this)}
                        onDeleteConcept = {this.handleDeleteConcept.bind(this)}/>
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