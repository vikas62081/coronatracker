import {ADD_ROW_TO_SAVE_USER,
    TOGGLE_HEART} from './actionTypes'

export const addRowToSaveUser=(dispatch,row)=>{
    return dispatch({type:ADD_ROW_TO_SAVE_USER,payload:row}) 
}

export const toggleHeart=(dispatch,id)=>{
    return dispatch({type:TOGGLE_HEART,payload:id})
}