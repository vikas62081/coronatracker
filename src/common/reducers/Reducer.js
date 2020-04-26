const initialState={
    stateWise:[],
    dailyCases:[]
}


const Reducer=(state=initialState,action)=> {
    const [type,payload]=action
    switch(type){
        case ADD_STATE_WISE:
            return {...state,stateWise:payload}
        case ADD_DAILY_CASES:
            return {...state,dailyCases:payload}
        default:
            return state;
    
  }
    
}

export default Reducer
