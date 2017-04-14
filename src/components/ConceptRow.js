import React from 'react';

import MdAdd from 'react-icons/lib/md/add';
import MdRemove from 'react-icons/lib/md/remove';
import MdDelete from 'react-icons/lib/md/delete';

class ConceptRow extends React.Component{
	constructor(props){
		super(props);
	}
	handleAddingQuantity(e){
		this.props.onAddingQuantity(this.props.type);
	}
	render(){
		const description = this.props.description;
		const quantity = this.props.quantity;
		const num = this.props.num;
		const price = this.props.price;
		const total = quantity * price;
		const type = this.props.type;
		return(
			<tr className = { type % 2 == 0 && "zebra" }>
				<td>{description}</td>
				<td>{quantity}</td>
				<td>{num}</td>
				<td>{price}</td>
				<td>{total}</td>
				<td>
					<a onClick = {this.handleAddingQuantity.bind(this)} 
					   href="javascript:void(0);"><MdAdd className = "icon-style"/></a>
					<a href="javascript:void(0);"><MdRemove className = "icon-style"/></a>
					<a href="javascript:void(0);"><MdDelete className = "icon-style"/></a>
				</td>
			</tr>
		);
	}
}

export default ConceptRow;