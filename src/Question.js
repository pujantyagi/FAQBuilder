import React, { Component } from 'react';
import Variation from './Variation';
import { connect } from 'react-redux';
import AddVariation from './AddVariation';
import del from './assets/delete.svg';

class Question extends Component {
    handleBlur = (e) => {
        e.preventDefault();
        const newQuestionHead= this.getQuestion.value;
        const data = {
            newQuestionHead
          
        }

        this.props.dispatch({ type: 'UPDATE', id: this.props.question.id, data: data })    
      }

render() {
return (
  <div className="Question-wrapper">
<div className="Question-area container">

<input required type="text" placeholder="Add Question" ref={(input)=>this.getQuestion = input }
   defaultValue={this.props.question.questionHead} onBlur={this.handleBlur}/>
   <img src={del} onClick={()=>this.props.dispatch({type:'DELETE_QUESTION',id:this.props.question.id})}/>
   { this.props.question.variations.length> 0 && <div className="Var-head">Variations:</div>}
    {this.props.question.variations.map((variation) => <Variation  variation={variation} questionId={this.props.question.id}/>)}
      <AddVariation questionId={this.props.question.id}/>
   
</div>
</div>
);
  }
}

export default connect()(Question);