import React from 'react';
import ConceptRow from './ConceptRow';
//import StatsRow from './StatsRow';

class ConceptTable extends React.Component{
	render(){
		const title = ['Subtotal', 'IVA (16%)', 'Total'];
		const { concepts } = this.props;
		const Concepts = concepts.map((concept, index) => 
			<ConceptRow key={index} {...concept} 
						type = {index} 
						onAddQuantity = {this.props.onAddQuantity.bind(this)}
						onRemoveQuantity = {this.props.onRemoveQuantity.bind(this)}
						onDeleteConcept = {this.props.onDeleteConcept.bind(this)}
						rowType = {'concept'}/>
		);

		title.forEach((titleType, index) =>{
			Concepts.push(<ConceptRow key={Concepts.length} 
									  type = {Concepts.length} 
									  title = {titleType} 
									  rowType = {'stats'}/>);
		});
		console.log(Concepts);
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
				<tbody>
					{Concepts}
				</tbody>
			</table>
		);
	}
}

export default ConceptTable;