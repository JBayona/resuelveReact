import React from 'react';
import MdAdd from 'react-icons/lib/md/add';
import MdDelete from 'react-icons/lib/md/delete';

class ConceptRow extends React.Component{
	render(){
		const description = this.props.description;
		const quantity = this.props.quantity;
		const num = this.props.num;
		const price = this.props.price;
		const total = quantity * price;
		return(
			<tr>
				<td>{description}</td>
				<td>{quantity}</td>
				<td>{num}</td>
				<td>{price}</td>
				<td>{total}</td>
				<td>
					<a href="javascript:void(0);"><MdAdd className = "icon-style"/></a>
					<a href="javascript:void(0);"><MdDelete className = "icon-style"/></a>
				</td>
			</tr>
		);
	}
}

export default ConceptRow;