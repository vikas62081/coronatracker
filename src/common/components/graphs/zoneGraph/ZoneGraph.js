import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    AccumulationChartComponent, AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationTooltip,
    AccumulationDataLabel
} from '@syncfusion/ej2-react-charts';
import { JHAR, ZONES } from '../../../actions/const'
export const ZoneGraph = () => {
    // const dataSource = [
    //         { x: 'Jan', y: 3, text: 'Jan: 3' }, { x: 'Feb', y: 3.5, text: 'Feb: 3.5' },
    //         { x: 'Mar', y: 7, text: 'Mar: 7' }, { x: 'Apr', y: 13.5, text: 'Apr: 13.5' },
    //         { x: 'May', y: 19, text: 'May: 19' }, { x: 'Jun', y: 23.5, text: 'Jun: 23.5' },
    //         { x: 'Jul', y: 26, text: 'Jul: 26' }, { x: 'Aug', y: 25, text: 'Aug: 25' },
    //         { x: 'Sep', y: 21, text: 'Sep: 21' }, { x: 'Oct', y: 15, text: 'Oct: 15' },
    //         { x: 'Nov', y: 9, text: 'Nov: 9' }, { x: 'Dec', y: 3.5, text: 'Dec: 3.5' }
    //     ];
    const jharlen = JHAR.length
    console.log(jharlen)
    const zoneInfo = JHAR.reduce((ddd, dd) => {
        const { zone } = dd
        ddd[zone] = ddd[zone] ? [...ddd[zone], dd] : [dd]
        return ddd;
    }, {})
    const d = [{ zone: 'Orange', value: ((zoneInfo.Orange.length / jharlen) * 100).toFixed(0) },
    { zone: 'Red', value: ((zoneInfo.Red.length / jharlen) * 100).toFixed(0) },
    { zone: 'Green', value: ((zoneInfo.Green.length / jharlen) * 100).toFixed(0) }]
    const datalabel = { visible: true,
        position: 'Inside', 
        // name: 'text',
        font: {
            fontWeight: '600'
        }};
    const tooltip = { enable: true }
    const legendSettings = { position: 'Bottom', visible: true };
        return (
        <AccumulationChartComponent id='charts' legendSettings={legendSettings}>
        <Inject services={[AccumulationLegend]}/>
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective dataSource={d} xName='zone' yName='value' legendShape='Circle'></AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    )
}