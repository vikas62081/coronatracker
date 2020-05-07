import * as React from "react";
import * as ReactDOM from "react-dom";
import {ORANGE,RED,GREEN} from '../../../actions/const'
import {
    AccumulationChartComponent, AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationTooltip,
    AccumulationDataLabel
} from '@syncfusion/ej2-react-charts';
export const ZoneGraph = ({state,stateName}) => {
    const jharlen = state.length
    const zoneInfo = state.reduce((ddd, dd) => {
        const { zone } = dd
        ddd[zone] = ddd[zone] ? [...ddd[zone], dd] : [dd]
        return ddd;
    }, {})

    const d = [
        { 
        zone: ORANGE,
         value: ((zoneInfo.Orange.length / jharlen) * 100).toFixed(0),
         text: ((zoneInfo.Orange.length / jharlen) * 100).toFixed(0)+'%',
        numberOfDist:`District :  ${zoneInfo.Orange.length}`},
        { zone: RED,
        value: ((zoneInfo.Red.length / jharlen) * 100).toFixed(0),
        text: ((zoneInfo.Red.length / jharlen) * 100).toFixed(0)+'%',
        numberOfDist:`District :  ${zoneInfo.Red.length}`},
        { zone: GREEN,
        value: ((zoneInfo.Green.length / jharlen) * 100).toFixed(0),
        text: ((zoneInfo.Green.length / jharlen) * 100).toFixed(0)+'%',
        numberOfDist: `District :  ${zoneInfo.Green.length}`}
    ]
    const datalabel = { visible: true,
        position: 'Inside', 
        name:'numberOfDist',

        font: {
            fontWeight: '600',
            fontSize:20
        }};
        const title=`District Zones Of ${stateName}`
    const tooltip={ enable: true,
         format: '${point.x} : <b>${point.y}%</b>' }
    const legendSettings = { position: 'Bottom', visible: false };
    const palette = [ "#ff9900", "#E94649","#8fda1f",]
        return (
        <AccumulationChartComponent id='charts' title={title}  legendSettings={legendSettings} enableSmartLabels={true} tooltip={tooltip}>
        <Inject services={[AccumulationLegend,AccumulationDataLabel,AccumulationTooltip]}/>
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective palettes={palette}
           dataSource={d} xName='zone' yName='value' dataLabel={datalabel}
            legendShape='Circle'>
            </AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    )
}