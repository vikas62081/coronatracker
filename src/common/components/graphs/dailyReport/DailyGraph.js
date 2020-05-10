import React,{useState,useEffect} from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import * as moment from "moment/moment.js" 
import {width,marker,palette,margin,tooltip,
    zoomsettings,animation,primarxyAxis,
legendSettings,border} from '../GraphCSS'
import {
    Category, ChartComponent, ColumnSeries, 
    DataLabel, Inject, Legend, LineSeries,SplineSeries,
    SeriesCollectionDirective, SeriesDirective, Tooltip,Zoom 
} from '@syncfusion/ej2-react-charts';
function DailyGraph({rows}) { 
    const [graphData, setGraphData] = useState(null)
    const [isLogarithmic, seIsLogarithmic] = useState(0);
    const [dataToShow, setDataToShow] = useState(1);
    const primaryyAxis = {
        title: "Daily Coronavirus cases",
        valueType: isLogarithmic === 1 ? 'Logarithmic' : 'Double',
        // majorGridLines: { width: 0 },
        // labelPlacement:'OnTicks'
        // labelFormat: '${value}K'
    };
    useEffect(() => {
        setTimeout(() => {
            setGraphData(rows)
        handleChangeDataToShow('',1)
        }, 50);
        
    }, [rows])
    const handleChange = (event, newValue) => {
        seIsLogarithmic(newValue);
    };
    const handleChangeDataToShow = (event, newValue) => {
        setDataToShow(newValue);
        if (newValue === 2) {
            const weekBefore = moment().subtract(2, 'weeks').format('D MMM YYYY')
            const week = rows.filter(row => moment(weekBefore).isBefore(row.date)
                || moment(weekBefore).isSame(row.date))
            setGraphData(week)
        }
        else if (newValue == 1) {
            const monthBefore = moment().subtract(1, 'months').format('D MMM YYYY')
            const month = rows.filter(row => moment(monthBefore).isBefore(row.date)
                || moment(monthBefore).isSame(row.date))
            setGraphData(month)
        }
        else {
            setGraphData(rows)
        }
        // console.log(graphData)
    };
    return (
        <div>
           <Tabs
                value={isLogarithmic}
                indicatorColor="primary"
                textColor="primary"
                // scrollButtons="off"
                onChange={handleChange}>
                <Tab label="linear" />
                <Tab label="logarithmic" disabled />
            </Tabs>
            <ChartComponent id="dailyChart" primaryXAxis={primarxyAxis}
                legendSettings={legendSettings} primaryYAxis={primaryyAxis}
                tooltip={tooltip} zoomSettings={zoomsettings}
                palettes={palette} margin={margin} border={border}  animation={animation}
            title="Daily Cases">
                <Inject services={[ ColumnSeries,DataLabel,Zoom, Tooltip,SplineSeries,Legend,LineSeries, Category]} />
                <SeriesCollectionDirective style={{padding:5}}>
                    <SeriesDirective type='Spline' dataSource={graphData}
                     xName='date' yName='dailyconfirmed' name='Daily Confirmed'
                      marker={marker} width={width} />
                    <SeriesDirective type='Spline' dataSource={graphData}
                     xName='date' yName='dailyrecovered' name='Daily Recovered'
                      marker={marker}  width={width} />
                      <SeriesDirective type='Spline' dataSource={graphData}
                     xName='date' yName='dailydeceased' name='Daily Deceased'
                      marker={marker} width={width} />
                </SeriesCollectionDirective>
            </ChartComponent>
            <Tabs
                value={dataToShow}
                indicatorColor="primary"
                textColor="primary"
                // scrollButtons="off"
                onChange={handleChangeDataToShow}>
                <Tab label="all" />
                <Tab label="Last month" />
                <Tab label='Last 2 Weeks' />
            </Tabs>
        </div>
    )
}
export default DailyGraph
