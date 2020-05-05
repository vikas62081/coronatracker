import React from 'react'
import DistTableTracker from '../components/tableTracker/DistTableTracker'
import { useSelector } from 'react-redux'
function District(props) {
    const { state } = props.match.params
    const allStateDistrict = useSelector((state) => state.districtWiseReport)
    const requestedState = allStateDistrict.filter(st => st.state === state)
    
    return (
        <div>
            <DistTableTracker rows={requestedState[0]} />
        </div>
    )
}

export default District
