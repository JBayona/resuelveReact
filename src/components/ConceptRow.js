import React from 'react';
import classNames from 'classnames';

import MdAdd from 'react-icons/lib/md/add';
import MdRemove from 'react-icons/lib/md/remove';
import MdDelete from 'react-icons/lib/md/delete';

class ConceptRow extends React.Component{
	handleAddQuantity(e){
		this.props.onAddQuantity(this.props.type);
	}
	handleRemoveQuantity(e){
		this.props.onRemoveQuantity(this.props.type);
	}
	handleDeleteConcept(e){
		this.props.onDeleteConcept(this.props.type);
	}
	handleInputChange(event) {
		var item = {}
	    const target = event.target;
	    const value = target.value;
	    const name = target.name;
	    this.props.onUpdateAddConcept(name, value);
  	}
	render(){
		const type = this.props.type; //index - ID
		const rowType = this.props.rowType;
		var row = null;
		if(rowType === 'concept'){
			let {description, quantity, num, price, total} = this.props;
			price = price.toFixed(2);
			total = total.toFixed(2);
			row = <tr className = {type % 2 == 0 && "zebra"}>
					<td>{description}</td>
					<td>{quantity}</td>
					<td>{num}</td>
					<td>$ {price}</td>
					<td>$ {total}</td>
					<td>
						<a onClick = {this.handleAddQuantity.bind(this)} 
						   href="javascript:void(0);"><MdAdd className = "icon-style"/></a>
						<a onClick = {this.handleRemoveQuantity.bind(this)} 
						   href="javascript:void(0);"><MdRemove className = "icon-style"/></a>
						<a onClick = {this.handleDeleteConcept.bind(this)}
						   href="javascript:void(0);"><MdDelete className = "icon-style"/></a>
					</td>
				 </tr> 
		}else if(rowType === 'stats'){
			let {title, amount} = this.props;
			amount = amount ? amount.toFixed(2) : amount;
			let trClasses = classNames({
				"zebra": type % 2 == 0,
				"top-border" : title == 'Subtotal',
				"bottom-border" : title == 'IVA (16%)'
			});
			row = <tr className = {trClasses}>
					<td></td>
					<td></td>
					<td></td>
					<td>{title}</td>
					<td>$ {amount}</td>
					<td>
					</td>
				</tr>
		}else{
			row = <tr className = {type % 2 == 0 && "zebra"}>
					<td className="noPadding">
						<input type="text" 
							   name="concept" 
							   placeholder="Concepto"
							   onChange={this.handleInputChange.bind(this)}/>
					</td>
					<td className="noPadding">
						<input type="text" 
							   name="quantity" 
							   placeholder="Cantidad"
							   onChange={this.handleInputChange.bind(this)}/>
					</td>
					<td className="noPadding">
						<input type="text" 
						   	   name="num" 
						   	   placeholder="Unidades"
						   	   onChange={this.handleInputChange.bind(this)}/>
					</td>
					<td className="noPadding">
						<input type="text" 
							   name="price" 
							   placeholder="Precio Unitario"
							   onChange={this.handleInputChange.bind(this)}/>
						</td>
					<td className="noPadding"></td>
					<td className="noPadding"></td>
				</tr>
		}
		return(
			row
		);
	}
}

export default ConceptRow;