import {
    ADD_DAILY_CASES,
    ADD_STATE_WISE,
    TOTAL_CASES,
    ADD_ROW_TO_SAVE_USER,
    TOGGLE_HEART, ADD_DISTRICT_WISE,
    ADD_ZONE_DATA, WORLD_TOTAL_CASES
} from '../actions/actionTypes'
const initialState = {
    stateWiseReport: [],
    dailyReport: [],
    totalReport: {},
    savedByUser: [],
    districtWiseReport: null,
    worldTotalReport: {},
    vaccine: null
}


const Reducer = (state = initialState, action) => {
    const { type, payload } = action
    console.log(type)
    switch (type) {
        case ADD_STATE_WISE:
            return { ...state, stateWiseReport: payload };
        case ADD_DAILY_CASES:
            return { ...state, dailyReport: payload };
        case TOTAL_CASES:
            return { ...state, totalReport: payload }
        case TOGGLE_HEART:
            return {
                ...state,
                stateWiseReport: state.stateWiseReport
                    .map(st => {
                        if (st.id === payload) {
                            return { ...st, status: !st.status }
                        }
                        else {
                            return st
                        }
                    })
            }
        case ADD_ROW_TO_SAVE_USER:
            return { ...state, savedByUser: payload }
        case ADD_ZONE_DATA:
            return { ...state, stateZone: payload }
        case ADD_DISTRICT_WISE:
            return { ...state, districtWiseReport: payload }
        case WORLD_TOTAL_CASES:
            return { ...state, worldTotalReport: payload }
        case "VACCINE":
            return { ...state, vaccine: payload }
        default:
            return state;

    }

}

export default Reducer
