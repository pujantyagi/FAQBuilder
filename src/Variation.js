import React, { Component } from 'react';
import { connect } from 'react-redux';
import del from './assets/deletehover.svg'


class Variation extends Component {
  handleBlur = (e) => {
    e.preventDefault();
    const newVariation= this.getVariation.value;
    const data = {
        newVariation
      
    }

    this.props.dispatch({ type: 'UPDATE_VARIATION', questionId: this.props.questionId,
      id:this.props.variation.id, data: data })    
  }

render() {
return (
<div className="Variation">
  <input required type="text" placeholder="+ Add Variation" ref={(input)=>this.getVariation = input }
   defaultValue={this.props.variation.subQuestion} onBlur={this.handleBlur}/>
   <img src={del} onClick={()=>this.props.dispatch({type:'DELETE_VARIATION',questionId: this.props.questionId,
      id:this.props.variation.id})}/>

</div>
);
  }
}



export default connect()(Variation);