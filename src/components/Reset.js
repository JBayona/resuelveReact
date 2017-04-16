import React from 'react';

class Reset extends React.Component{
	handleClickReset(event){
		this.props.onClickReset();
		event.preventDefault();
	}
	handleClickPrint(event){
		this.props.onClickPrint();
	}
	render(){
		return(
			<div className = "divFlex reset-div">
				<button type="button" 
						className ="greenButton margin-btn"
						onClick={this.handleClickPrint.bind(this)}>
					Print In Console
				</button>
				<button type="button" 
						className ="greenButton margin-btn"
						onClick={this.handleClickReset.bind(this)}>
					Reset
				</button>
			</div>
		);
	}
}

export default Reset;