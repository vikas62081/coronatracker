import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';
import ReactTooltip from 'react-tooltip';

import LinearGradient from './LinearGradient.js';
// import './App.css';

/** 
* Courtesy: https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json
* Looking topojson for other countries/world? 
* Visit: https://github.com/markmarkoh/datamaps
*/
const INDIA_TOPO_JSON = require('./india.topo.json');

const PROJECTION_CONFIG = {
    scale: 400,
    center: [78.9629, 22.5937] // always in [East Latitude, North Longitude]
};

// Red Variants
const COLOR_RANGE = [
    '#c8e6c9',
    '#a5d6a7',
    '#81c784',
    '#66bb6a',
    '#4caf50',
    '#43a047',
    '#388e3c',
    '#2e7d32',
    '#1b5e20'
];

const DEFAULT_COLOR = '#EEE';

const geographyStyle = {
    default: {
        outline: 'none'
    },
    hover: {
        fill: '#ccc',
        transition: 'all 250ms',
        outline: 'none'
    },
    pressed: {
        outline: 'none'
    }
};
const convertToLocal = (number) => {
    return Number(number).toLocaleString();
}

function VaccineReport(props) {
    const [tooltipContent, setTooltipContent] = useState('');
    const [data] = useState(props.data.vacc_st_data);
    const [gSize, setGSize] = useState(600)
    useEffect(() => {
        setGSize(window.outerWidth > 500 ? 600 : 300)
    }, [window.outerWidth])
    const gradientData = {
        fromColor: COLOR_RANGE[0],
        toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
        min: 0,
        max: data.reduce((max, item) => (item.total_doses > max ? item.total_doses : max), 0)
    };


    const colorScale = scaleQuantile()
        .domain(data.map(d => d.total_doses))
        .range(COLOR_RANGE);

    const onMouseEnter = (geo, current = { value: 'NA' }) => {
        return () => {
            setTooltipContent(<div>
                <b>{geo.properties.name}</b>
                <ul>
                    <li>1st Dose: {convertToLocal(current.dose1)}</li>
                    <li>2st Dose: {convertToLocal(current.dose2)}</li>
                    <li>Total Dose: {convertToLocal(current.total_doses)}</li>
                </ul>
            </div>)
        };
    };

    const onMouseLeave = () => {
        setTooltipContent('');
    };


    return (
        <div className="full-width-height container">
            <h2 className="no-margin center">States and UTs Vaccination Report</h2>
            <ReactTooltip>{tooltipContent}</ReactTooltip>
            <ComposableMap
                projectionConfig={PROJECTION_CONFIG}
                projection="geoMercator"
                width={gSize}
                height={220}
                data-tip=""
            >
                <Geographies geography={INDIA_TOPO_JSON}>
                    {({ geographies }) =>
                        geographies.map(geo => {
                            const current = data.find(s => s.st_name === geo.properties.name);
                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={current ? colorScale(current.total_doses) : DEFAULT_COLOR}
                                    style={geographyStyle}
                                    onMouseEnter={onMouseEnter(geo, current)}
                                    onMouseLeave={onMouseLeave}
                                />
                            );
                        })
                    }
                </Geographies>
            </ComposableMap>
            <LinearGradient data={gradientData} />

        </div>
    );
}

export default VaccineReport;