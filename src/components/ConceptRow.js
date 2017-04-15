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
	render(){
		const type = this.props.type; //index - ID
		const rowType = this.props.rowType;
		var row = null;
		if(rowType === 'concept'){
			let {description, quantity, num, price} = this.props;
			price = price.toFixed(2);
			let total = (quantity * price).toFixed(2);
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
		}else{
			let {title} = this.props;
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
					<td>$10000</td>
					<td>
					</td>
				</tr>
		}
		return(
			row
		);
	}
}

export default ConceptRow;