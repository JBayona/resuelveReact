import React, { Component } from 'react';
import {Router} from 'react-router';

import ConceptTable from './ConceptTable';
import AddConcept from './AddConcept';
import Reset from './Reset';

class Table extends Component {
  constructor(){
    super();
    //Initial data
    this.state = {
      concepts: CONCEPTS,
      'concept': '',
      'quantity' : 0,
      'num' : 0,
      'price': 0
    };
  }
  //When the component is mount, we can get some important data
  componentDidMount(){
    this.setState({
      subtotal: this.getSubTotal(),
      iva: this.getIVA(),
      total: this.getTotal()
    });
  }
  /*Everytime we add an additional quantity, we need to update some important data, for this
  we use setState to update the DOM*/
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
  /*Same idea as add quantity feature*/
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
  /*We store the reference of the element we are going to delete from our concepts*/
  handleDeleteConcept(id){
    this.state.concepts.splice(id,1);
    this.setState({
      concepts: this.state.concepts,
      subtotal: this.getSubTotal(),
      iva: this.getIVA(),
      total: this.getTotal()
    });
  }
  //Function that will compute the subtotal (sum of the prices)
  getSubTotal(){
    return this.state.concepts.reduce((prev, curr) => prev+=curr.total, 0);
  }
  //This function returns the subtotal plus IVA.
  getIVA(){
    return this.getSubTotal() * 0.16;
  }
  //Basically compute the total quantity
  getTotal(){
    return this.getSubTotal() + this.getIVA()
  }
  //We use the state in order to conpute the new concepts
  UpdateAddConcept(name, value){
      this.setState({
        [name]: value
      });
  }
  //Once we have added the elements, we can confirm and add the elements into our concepts
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
  //Reset al concepts
  handleResetConcept(){
    this.setState({
      concepts: [],
      concept: '',
      quantity: 0,
      num: 0,
      price: 0,
      subtotal: 0,
      iva: 0,
      total: 0
    });
  }
  //Print our concepts in the browser console
  handlePrintConsole(){
    this.state.concepts.forEach((item,index) =>{
      console.log(`${index+1}. Concepto: ${item.description}, Cantidad: ${item.quantity}, Unidades: ${item.num}, Precio: ${item.price}, Total: ${item.total}`);
    });
  }
  render() {
    return (
      <div className = "margin-btn">
          <AddConcept onClickConcept = {this.handleClickConcept.bind(this)}/>
          <ConceptTable concepts = {this.state.concepts}  
                        onAddQuantity = {this.handleAddQuantity.bind(this)}
                        onRemoveQuantity = {this.handleRemoveQuantity.bind(this)}
                        onDeleteConcept = {this.handleDeleteConcept.bind(this)}
                        onUpdateAddConcept = {this.UpdateAddConcept.bind(this)}
                        subtotal = {this.state.subtotal}
                        iva = {this.state.iva}
                        total = {this.state.total}/>
          <Reset onClickReset = {this.handleResetConcept.bind(this)}
                 onClickPrint = {this.handlePrintConsole.bind(this)}/>
      </div>
    );
  }
}

export default Table;

var CONCEPTS = [
  {description: 'Control Xbox', quantity: 1, num: 1, price: 999, total: 999},
  {description: 'Tabcin', quantity: 1, num: 12, price: 44, total: 44},
  {description: 'Book', quantity: 1, num: 1, price: 12, total: 12},
  {description: 'Computer', quantity: 1, num: 1, price: 6000, total: 6000},
  {description: 'Shoes', quantity: 1, num: 12, price: 27, total: 27},
];