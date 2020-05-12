import * as React from "react";
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
    let d;
try {
    const OZoneLength=zoneInfo.Orange?zoneInfo.Orange.length:0;
    const RZoneLength=zoneInfo.Red?zoneInfo.Red.length:0;
    const GZoneLength=zoneInfo.Green?zoneInfo.Green.length:0;
    // console.log(OZoneLength)
    d = [
        { 
        zone: ORANGE,
         value:((OZoneLength / jharlen) * 100).toFixed(0),
         text: ((OZoneLength / jharlen) * 100).toFixed(0)+'%',
        numberOfDist:`District :  ${OZoneLength}`},
        { zone: RED,
        value: ((RZoneLength / jharlen) * 100).toFixed(0),
        text: ((RZoneLength / jharlen) * 100).toFixed(0)+'%',
        numberOfDist:`District :  ${RZoneLength}`},
        { zone: GREEN,
        value: ((GZoneLength / jharlen) * 100).toFixed(0),
        text: ((GZoneLength / jharlen) * 100).toFixed(0)+'%',
        numberOfDist: `District :  ${GZoneLength}`}
    ]
} catch (error) {
    console.log(error)
}

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