import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddVariation extends Component {
    handleBlur = (e) => {
      if(this.addVariation.value !=="")
       { const addedVariation= this.addVariation.value;
        const varId= new Date();
        const data = {
            id:varId,
            subQuestion:addedVariation
          
        }

        this.props.dispatch({ type: 'ADD_VARIATION', id: this.props.questionId, data: data }) 

        this.addVariation.value="";  
      }
    }
      handleOnKeyPress = (e) => {
        
        if((e.keyCode == 13 || e.which == 13) && this.addVariation.value !=="")
        {
          const addedVariation= this.addVariation.value;
          const varId= new Date();
          const data = {
            id:varId,
            subQuestion:addedVariation
          }
            

         this.props.dispatch({ type: 'ADD_VARIATION', id: this.props.questionId, data: data }) 

          this.addVariation.value="";  
        }
      }

render() {
return (
<div>
   <input required type="text" placeholder="+ Add a New Variation" ref={(input)=>this.addVariation = input }
    onBlur={this.handleBlur} onKeyPress={ this.handleOnKeyPress}/>

</div>
);
  }
}

export default connect()(AddVariation);