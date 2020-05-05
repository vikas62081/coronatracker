import Axios from 'axios'
import { v4 as uuid } from 'uuid';
import * as moment from "moment/moment.js"
import {DATE_FORMATTER,STATE_OF_INDIA} from './const'
import {
    ADD_STATE_WISE,
    ADD_DAILY_CASES,
    TOTAL_CASES,ADD_ZONE_DATA,ADD_DISTRICT_WISE
} from './actionTypes'
export const getDataFromAPI = (dispatch) => {
    console.log("API called")
    const getHistory = localStorage.getItem('userFav')
    const userData = getHistory === null ? [] : JSON.parse(getHistory);
    const isExist = {
        status: false
    }
    Promise.all([
        Axios.get('https://api.covid19india.org/data.json'),
        Axios.get('https://api.covid19india.org/zones.json'),
        Axios.get('https://api.covid19india.org/v2/state_district_wise.json')
      ]).then(([response,zoneData,districtData])=>{
        const { cases_time_series, statewise } = response.data
        const { zones } = zoneData.data

        const dailyCases = cases_time_series.map(data => {
            return {
                ...data,
                id: uuid(),
                date: moment(`${data.date}2020`).format(DATE_FORMATTER),
                dailyconfirmed: parseInt(data.dailyconfirmed, 10),
                dailydeceased: parseInt(data.dailydeceased, 10),
                dailyrecovered: parseInt(data.dailyrecovered, 10),
                totalconfirmed: parseInt(data.totalconfirmed, 10),
                totaldeceased: parseInt(data.totaldeceased, 10),
                totalrecovered: parseInt(data.totalrecovered, 10)
            }
        })
        dispatch({ type: ADD_DAILY_CASES, payload: dailyCases })
        const stateWiseCases = statewise.filter(dt => dt.confirmed !== "0").map(data => {
            isExist.status = false
            if (userData.includes(data.statecode)) {
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
        dispatch({type:ADD_ZONE_DATA,payload:zones})
        dispatch({type:ADD_DISTRICT_WISE,payload:districtData.data})
        // const aa=zoneInfo.Jharkhand.reduce((ddd,dd)=>{
        //     const {zone}=dd
        //     ddd[zone]=ddd[zone]?[...ddd[zone],dd]:[dd]
        //     return ddd;
        // },{})
        // console.log(aa)
      })
    
}
// This URL can be used for total district details
// https://api.covid19india.org/districts_daily.json

// const zoneInfo=zones.reduce((zones,zone)=>{
//     const {state}=zone
//     zones[state]=zones[state]?[...zones[state],zone] : [zone]
//     return zones;
// },[])