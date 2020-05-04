import Axios from 'axios'
import { v4 as uuid } from 'uuid';
import * as moment from "moment/moment.js"
import {
    ADD_STATE_WISE,
    ADD_DAILY_CASES,
    TOTAL_CASES
} from './actionTypes'
export const getDataFromAPI = (dispatch) => {
    const getHistory=localStorage.getItem('userFav')
    const userData = getHistory===null?[]:JSON.parse(getHistory);
    const isExist = {
        status: false
    }
    const dateFormatter='D MMM YYYY'
    Axios.get('https://api.covid19india.org/data.json')
        .then(response => {
            const { cases_time_series, statewise } = response.data


            const dailyCases = cases_time_series.map(data => {
                return {
                    ...data,
                    id: uuid(),
                    date:moment(`${data.date}2020`).format(dateFormatter),
                    dailyconfirmed: parseInt(data.dailyconfirmed, 10),
                    dailydeceased: parseInt(data.dailydeceased, 10),
                    dailyrecovered: parseInt(data.dailyrecovered, 10),
                    totalconfirmed: parseInt(data.totalconfirmed, 10),
                    totaldeceased: parseInt(data.totaldeceased, 10),
                    totalrecovered: parseInt(data.totalrecovered, 10)
                }
            })
            dispatch({ type: ADD_DAILY_CASES, payload: dailyCases })
            const stateWiseCases = statewise.filter(dt=>dt.confirmed!=="0").map(data => {
                isExist.status = false
                // userData.map(statecode => {
                //     if (statecode === data.statecode) {
                //         return isExist.status = true
                //     }
                // })
                if(userData.includes(data.statecode)){
                    isExist.status = true
                }
                return {
                    ...data,
                    id: uuid(),
                    active: parseInt(data.active, 10),
                    confirmed: parseInt(data.confirmed, 10),
                    deaths: parseInt(data.deaths, 10),
                    deltarecovered: parseInt(data.deltarecovered, 10),
                    deltaconfirmed: parseInt(data.deltaconfirmed, 10),
                    deltadeaths: parseInt(data.deltadeaths, 10),
                    recovered: parseInt(data.recovered, 10),
                    status: isExist.status
                }
            })
            dispatch({ type: ADD_STATE_WISE, payload: stateWiseCases })
            dispatch({ type: TOTAL_CASES, payload: stateWiseCases[0] })

        })
}
