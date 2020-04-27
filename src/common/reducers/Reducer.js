import {ADD_DAILY_CASES,ADD_STATE_WISE} from '../actions/actionTypes'
const initialState={
    stateWiseReport:[],
    dailyReport:[],
    totalReport:{active: "20570",
    confirmed: "27977",
    deaths: "884",
    deltaconfirmed: "87",
    deltadeaths: "3",
    deltarecovered: "0",
    lastupdatedtime: "26/04/2020 19:37:37",
    recovered: "6523",
    state: "Total",
    statecode: "TT",
    statenotes: ""}
}


const Reducer=(state=initialState,action)=> {
    // const [type,payload]=action
    switch(action.type){
        case ADD_STATE_WISE:
            return state;
        case ADD_DAILY_CASES:
            return state;
        default:
            return state;
    
  }
    
}

export default Reducer
