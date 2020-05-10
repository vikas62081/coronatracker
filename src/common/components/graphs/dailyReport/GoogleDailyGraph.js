import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import Progress from '../../progress/Progress'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
export const GoogleDailyGraph = ({rows}) => {
  // const graphData = useSelector((state) => state.dailyReport);
  const [isBar, setIsBar] = useState(1)
  const [data, setData] = useState(null)
  useEffect(() => {
    const a = rows.map(d => {
      return [d.date, d.dailydeceased, d.dailyrecovered, d.dailyconfirmed]
    })

    const s = ['Date', 'Death', 'Recovered', 'Confirm']
    a.splice(0, 0, s)
    setData(a)
  }, [rows])
  const handleChange = (event, newValue) => {
    setIsBar(newValue);
  };
  return (
    <div className={"my-pretty-chart-container"}>
      <Tabs
        value={isBar}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}>
        <Tab label="Line" />
        <Tab label="Combo chart" />
      </Tabs>
      <Chart
        height={'400px'}
        chartType="ComboChart"
        loader={<Progress />}
        data={data}
        options={{
          title: 'Daily Coronavirus cases in India',
          seriesType: isBar ? 'bars' : '',
          colors: ['red', 'green', 'orange'],
          legend: 'bottom',
          chartArea: { width: '80%' },
          isStacked: true,
          hAxis: { title: 'Date' },
          vAxis: { title: 'Daily cases' },
        }}
      // For tests
      // rootProps={{ 'data-testid': '3' }}
      />
    </div>
  )
}