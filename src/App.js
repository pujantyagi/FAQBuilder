import React, { Component } from 'react';
import Question from './Question';
import AddQuestion from './AddQuestion';
import { connect } from 'react-redux';
import logo from './assets/logo.png'

class App extends Component {
  render() {
    return (
    <div className="App">
     <div className="Appheader-wrapper" style={{height:122}}>
     <div className="App-header">
       <div className="Dashboard">
       <span className="Admin-wrapper">
          <img className="logo" src={logo}/>
           <span className="Admin">Admin Dashboard</span>
        </span>  
          <span className="profile">
             <span className="profile-item">Suhail Gupta</span><span className="profile-item"><div className="profile-pic"></div></span>
           </span>
        </div>
      
       <div className="Faq-header">
           FAQ Builder
       </div>
     </div>
    </div>
     <div className="Question ">
       <div className="container">
       Question
       </div>
     </div>

     <div>
       {this.props.questions.map((question) => <Question key={question.id} question={question} />)}
        <AddQuestion />
      </div> 

    </div>
    );
    
  }
}
  const mapStateToProps = (state) => {
    return {
        questions : state
    }
  
  }

export default connect(mapStateToProps)(App);
