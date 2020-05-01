import {ADD_ROW_TO_SAVE_USER} from './actionTypes'

export const addRowToSaveUser=(dispatch,row)=>{
    return dispatch({type:ADD_ROW_TO_SAVE_USER,payload:row})
    
    
}