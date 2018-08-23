const postReducer = (state = [{id:1,questionHead:"What is the accumulation limit of casual leaves?",
    variations:[]},{id:2,questionHead:"What is the accumulation limit of Earned leaves?",
    variations:[{id:1,subQuestion:"What is Current Year Quota for Earned leaves? "},{id:2,subQuestion:"Can I utilise Earned leaves fromm Accumulated quota? "}]}], action) => {
    switch(action.type) {
      case 'ADD_QUESTION':                                                                                                                                                                                                  
        return state.concat([action.data]);
        case 'DELETE_QUESTION':
      return state.filter((question)=>question.id !== action.id);
        case 'UPDATE':
      return state.map((question)=>{
        if(question.id === action.id) {
          return {
             ...question,
             questionHead:action.data.newQuestionHead,
             
          }
        } else return question;
      })
      case 'ADD_VARIATION':                                                                                                                                                                                                  
         return state.map((question)=>{
          if(question.id === action.id) {
            
             const addVar = question.variations.concat([action.data]);
             return{...question,
                    variations : addVar
             }
          }
          else return question;

          }
         )
          
       case 'UPDATE_VARIATION':
        return state.map((question)=>{
          if(question.id === action.questionId) {
            const updatedVar = question.variations.map((variation)=>{
              if(variation.id === action.id ){
               return{ ...variation,
                   subQuestion : action.data.newVariation,
                  }
              }else return variation;
            });
            
          return {...question,
                  variations : updatedVar
                  }   
          
        }
        else return question;
      })
      case 'DELETE_VARIATION':
      return state.map((question)=>{
        if(question.id === action.questionId) {
          const result = question.variations.filter((variation)=>variation.id !== action.id);
           
        return {...question,
                 variations : result
           }
          }
          return question;
      })
    
      default:
        return state;
    }
  }

  export default postReducer;