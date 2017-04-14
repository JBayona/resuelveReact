import React from 'react';
import ConceptRow from './ConceptRow';

class ConceptTable extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const { concepts } = this.props;
		const Concepts = concepts.map(
			(concept, index) => <ConceptRow key={index} {...concept} type = {index} 
			onAddingQuantity = {this.props.onAddingQuantity.bind(this)}/>
		);
		return(
			<table className = "tableGrid">
				<thead>
					<tr>
						<th>Descripción</th>
						<th>Cantidad</th>
						<th>Unidades</th>
						<th>Precio Unitario</th>
						<th>Total</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>{Concepts}</tbody>
			</table>
		);
	}
}

export default ConceptTable;