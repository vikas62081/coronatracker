import React, { useEffect } from 'react'
import { getDataFromAPI } from '../actions/dataActions'
import { useDispatch } from 'react-redux'
import Main from './Main'


function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        getDataFromAPI(dispatch);
    }, [])
    return (
        <div>
            <Main />
        </div>
    )
}

export default Home
