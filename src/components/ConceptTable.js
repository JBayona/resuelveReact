import React from 'react';
import ConceptRow from './ConceptRow';
//import StatsRow from './StatsRow';

class ConceptTable extends React.Component{
	//The key in this Component is that we add a new style depending the section in the table
	render(){
		const title = ['Subtotal', 'IVA (16%)', 'Total'];
		const { concepts, subtotal, iva, total, concept, quantity, num, price } = this.props;
		const Concepts = concepts.map((concept, index) => 
			<ConceptRow key={index} {...concept} 
						type = {index} 
						onAddQuantity = {this.props.onAddQuantity}
						onRemoveQuantity = {this.props.onRemoveQuantity}
						onDeleteConcept = {this.props.onDeleteConcept}
						rowType = {'concept'}/>
		);
		//Adding new concept
		Concepts.push(<ConceptRow key={Concepts.length}
						onUpdateAddConcept = {this.props.onUpdateAddConcept} 
						type = {Concepts.length} 
						rowType = {'newConcept'}/>);
		//Stats info
		title.forEach((titleType, index) =>{
			let amountType;
			if(titleType === 'Subtotal'){
				amountType = subtotal;
			}else if(titleType === 'IVA (16%)'){
				amountType = iva;
			}else{
				amountType = total;
			}
			Concepts.push(<ConceptRow key={Concepts.length} 
									  type = {Concepts.length} 
									  title = {titleType} 
									  rowType = {'stats'}
									  amount = {amountType}/>);
		});
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