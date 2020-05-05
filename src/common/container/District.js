import React from 'react'
import DistTableTracker from '../components/tableTracker/DistTableTracker'
import {districtData} from '../actions/const'
function District() {
    return (
        <div>
            <DistTableTracker rows={districtData}/>
        </div>
    )
}

export default District
