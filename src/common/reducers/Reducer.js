import {ADD_DAILY_CASES,
    ADD_STATE_WISE,
    TOTAL_CASES,
ADD_ROW_TO_SAVE_USER} from '../actions/actionTypes'
const initialState={
    stateWiseReport:[],
    dailyReport:[],
    totalReport:{},
    savedByUser:[],
}


const Reducer=(state=initialState,action)=> {
    const {type,payload}=action
    console.log(type)
    switch(type){
        case ADD_STATE_WISE:
            return {...state,stateWiseReport:payload};
        case ADD_DAILY_CASES:
            return {...state,dailyReport:payload};
        case TOTAL_CASES:
            return{...state,totalReport:payload}
        case ADD_ROW_TO_SAVE_USER:
            return{...state,savedByUser:[...state.savedByUser,payload]}
        default:
            return state;
    
  }
    
}

export default Reducer
