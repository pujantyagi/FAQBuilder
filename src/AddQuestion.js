import React, { Component } from 'react';
import { connect } from 'react-redux';
import add from './assets/add.svg';

class AddQuestion extends Component {
    handleClick = (e) => {
        e.preventDefault();
        const questionHead= "";
        const variations=  [];
        const data = {
          id: new Date(),
          questionHead,
          variations
        }
        this.props.dispatch({
            type:'ADD_QUESTION',
            data});
      }
render() {
return (
<div>
  
   <button onClick={this.handleClick}><img src={add}/><span> Add question</span></button>
 
</div>
);
}
}
export default connect()(AddQuestion); 