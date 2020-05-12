import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { Chart } from "react-google-charts";
import Progress from '../progress/Progress'
import { Link } from 'react-router-dom'
import BackspaceIcon from '@material-ui/icons/Backspace';
import IconButton from '@material-ui/core/IconButton';
export const WorldMap = () => {
  const [graphData, setGraphData] = useState(null);
  useEffect(() => {
    fetch('https://corona.lmao.ninja/v2/countries')
      .then(res => res.json())
      .then(res => {
        // console.log(res)
        const m = res.map(c => {
          if (c.country === 'USA') {
            c.country = 'United States'
          }
          if (c.country === 'Syrian Arab Republic') {
            c.country = 'Syria'
          }

          return [c.country, c.cases, c.deaths]
        })
        const s = ["Country ", "Confirm Cases ", "Deaths "]
        m.splice(0, 0, s)
        setGraphData(m)
      })

  }, [])
  return (
    <div className={"my-pretty-chart-container"}>
      <Paper style={{
        padding: 2,
        fontSize: '140%',
        fontWeight: 600,
        letterSpacing: '0.095em',
        textDecoration: 'underline', borderRadius: 1
      }}> <Link to='/' style={{ marginRight: 8 }} title="Go Back">
          <IconButton edge="end"
            aria-label="Developer of covid19 website"
            aria-haspopup="true"
            color="inherit" >
            <BackspaceIcon />
          </IconButton>
        </Link>GLOBLE MAP OF COVID19</Paper>
      {graphData !== null ? <Chart
        height='600px'
        chartType="GeoChart"
        data={graphData}
        options={{
          // region: 'IN',
          title: "GLOBLE MAP OF COVID19 CASES",
          colorAxis: { colors: ['#f3e0e0', 'red'] },
          backgroundColor: '#81d4fa',
          datalessRegionColor: '#fff',
          defaultColor: 'black',
        }}
        mapsApiKey="AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
        rootProps={{ 'data-testid': '1' }}
      /> : <Progress />}
    </div>
  )
}