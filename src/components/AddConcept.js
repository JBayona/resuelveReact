import React from 'react';

import MdAdd from 'react-icons/lib/md/add';

class AddConcept extends React.Component{
	handleClickBtn(event){
		this.props.onClickConcept();
		event.preventDefault();
	}
	render(){
		return(
			<div className = "divFlex">
				<div><h2>Conceptos</h2></div>
				<div className = "buttonContainer">
					<button onClick={this.handleClickBtn.bind(this)} type="button" className ="buttonAdd">
						<MdAdd className = "icon-style"/>
						<span>Agregar Concepto</span>
					</button>
				</div>
			</div>
		);
	}
}

export default AddConcept;