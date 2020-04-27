import React from 'react'
import {
    Category, ChartComponent, ColumnSeries, 
    DataLabel, Inject, Legend, LineSeries,SplineSeries,
    SeriesCollectionDirective, SeriesDirective, Tooltip,Zoom 
} from '@syncfusion/ej2-react-charts';
function DailyGraph({rows}) { 
  
    const tooltip = { enable: true, shared: true,width:5 };
    const primaryyAxis = { 
        title:"People",
        minimum: 0
        // labelFormat: '${value}K' 
    };
    const primarxyAxis = { valueType: 'Category',
     title: 'Date',labelIntersectAction: 'Rotate45',
    majorGridLines: { width: 0} };
    const legendSettings = { visible: true };
    const marker = { 
        visible:true,
        width:2,height:2,
        //  dataLabel: { visible: true }
     };
     const zoomsettings = {
        enableMouseWheelZooming: false, enablePinchZooming: false,
        enableSelectionZooming: false
    };
    const border = { width: 0, color: 'red' };
    const animation = { enable: true };
    const lineStyle = { width: 5};
    return (
        <div>
            <ChartComponent id="dailyChart" primaryXAxis={primarxyAxis} 
            legendSettings={legendSettings} primaryYAxis={primaryyAxis} 
            tooltip={tooltip} zoomsettings={zoomsettings} title="Daily Cases">
                <Inject services={[ ColumnSeries,DataLabel,Zoom, Tooltip,SplineSeries,Legend,LineSeries, Category]} />
                <SeriesCollectionDirective>
                    <SeriesDirective type='Spline' dataSource={rows}
                     xName='date' yName='dailyconfirmed' name='Daily Confirmed'
                      marker={marker}  border={border} animation={animation}  lineStyle={lineStyle}/>
                    <SeriesDirective type='Spline' dataSource={rows}
                     xName='date' yName='dailyrecovered' name='Daily Recovered'
                      marker={marker}  />
                      <SeriesDirective type='Spline' dataSource={rows}
                     xName='date' yName='dailydeceased' name='Daily Deceased'
                      marker={marker} />
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    )
}
export default DailyGraph
