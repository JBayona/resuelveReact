import React, { Component } from 'react';
import {Router} from 'react-router';

import ConceptTable from './components/ConceptTable';
import AddConcept from './components/AddConcept.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      concepts: CONCEPTS,
      'concept': '',
      'quantity' : 0,
      'num' : 0,
      'price': 0
    };
  }
  componentDidMount(){
    this.setState({
      subtotal: this.getSubTotal(),
      iva: this.getIVA(),
      total: this.getTotal()
    });
  }
  handleAddQuantity(id){
    let tmp = this.state.concepts[id];
    tmp.quantity++;
    tmp.total = tmp.quantity * tmp.price;
    let tmpArray = this.state.concepts;
    tmpArray[id] = tmp;
    this.setState({
        concepts : tmpArray,
        subtotal: this.getSubTotal(),
        iva: this.getIVA(),
        total: this.getTotal()
    });
  }
  handleRemoveQuantity(id){
    let tmp = this.state.concepts[id];
    tmp.quantity--;
    tmp.total = tmp.quantity * tmp.price;
    let tmpArray = this.state.concepts;
    tmpArray[id] = tmp;
    this.setState({
        concepts : tmpArray,
        subtotal: this.getSubTotal(),
        iva: this.getIVA(),
        total: this.getTotal()
    });
  }
  handleDeleteConcept(id){
    this.state.concepts.splice(id,1);
    this.setState({
      concepts: this.state.concepts,
      subtotal: this.getSubTotal(),
      iva: this.getIVA(),
      total: this.getTotal()
    });
  }
  getSubTotal(){
    return this.state.concepts.reduce((prev, curr) => prev+=curr.total, 0);
  }
  getIVA(){
    return this.getSubTotal() * 0.16;
  }
  getTotal(){
    return this.getSubTotal() + this.getIVA()
  }
  UpdateAddConcept(name, value){
      this.setState({
        [name]: value
      });
  }
  handleClickConcept(){
    let req = {
      description: this.state.concept,
      quantity: parseInt(this.state.quantity),
      num: parseInt(this.state.num),
      price: parseInt(this.state.price),
      total : parseInt(this.state.quantity * this.state.price)
    }
    let tmp = this.state.concepts;
    tmp.push(req);
    this.setState({
      concepts:tmp,
      subtotal: this.getSubTotal(),
      iva: this.getIVA(),
      total: this.getTotal()
    });
  }
  render() {
    return (
      <div>
          <h2>Resuelve Test</h2>
          <AddConcept onClickConcept = {this.handleClickConcept.bind(this)}/>
          <ConceptTable concepts = {this.state.concepts}  
                        onAddQuantity = {this.handleAddQuantity.bind(this)}
                        onRemoveQuantity = {this.handleRemoveQuantity.bind(this)}
                        onDeleteConcept = {this.handleDeleteConcept.bind(this)}
                        onUpdateAddConcept = {this.UpdateAddConcept.bind(this)}
                        subtotal = {this.state.subtotal}
                        iva = {this.state.iva}
                        total = {this.state.total}/>
      </div>
    );
  }
}

export default App;

var CONCEPTS = [
  {description: 'Control Xbox', quantity: 1, num: 1, price: 999, total: 999},
  {description: 'Tabcin', quantity: 1, num: 12, price: 44, total: 44},
  {description: 'Control Xbox', quantity: 1, num: 1, price: 999, total: 999},
  {description: 'Control Xbox', quantity: 1, num: 1, price: 999, total: 999},
  {description: 'Tabcin', quantity: 1, num: 12, price: 44, total: 44},
];