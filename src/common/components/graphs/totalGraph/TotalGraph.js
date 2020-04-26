import React from 'react'
import {
    Category, ChartComponent, ColumnSeries, 
    DataLabel, Inject, Legend, LineSeries,SplineSeries,
    SeriesCollectionDirective, SeriesDirective, Tooltip,Zoom 
} from '@syncfusion/ej2-react-charts';
function TotalGraph({rows}) { 
    const tooltip = { enable: true, shared: true,width:5 };
    const primaryyAxis = { 
        title:"People"
        // labelFormat: '${value}K' 
    };
    const primarxyAxis = { valueType: 'Category', title: 'Date' };
    const legendSettings = { visible: true };
    const marker = { 
        visible:true,
        width:2,height:2,
        //  dataLabel: { visible: true }
     };
     const zoomsettings = {
        enableMouseWheelZooming: false, enablePinchZooming: false,
        enableSelectionZooming: false,enableScrollbar: true
    };
    const border = { width: 0, color: 'red' };
    const animation = { enable: true };
    return (
        <div>
            <ChartComponent id="totalChart" primaryXAxis={primarxyAxis} 
            legendSettings={legendSettings} primaryYAxis={primaryyAxis} 
            tooltip={tooltip} zoomSettings={zoomsettings} title="Total Cases">
                <Inject services={[ ColumnSeries,DataLabel,Zoom, Tooltip,SplineSeries,Legend,LineSeries, Category]} />
                <SeriesCollectionDirective>
                    <SeriesDirective type='Spline' dataSource={rows}
                     xName='date' yName='totalconfirmed' name='Total Confirmed'
                      marker={marker}  border={border} animation={animation}/>
                    <SeriesDirective type='Spline' dataSource={rows}
                     xName='date' yName='totalrecovered' name='Total Recovered'
                      marker={marker}  />
                      <SeriesDirective type='Spline' dataSource={rows}
                     xName='date' yName='totaldeceased' name='Total Deceased'
                      marker={marker} />
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    )
}
export default TotalGraph
