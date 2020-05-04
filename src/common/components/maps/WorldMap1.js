import React, { useRef, useEffect, useState } from "react";
import { select, geoPath, geoMercator,map,
   json,geoNaturalEarth1,zoom,event,scaleOrdinal,schemeCategory10,
   zoomIdentity,min,max
   } from "d3";
   import NumberFormat from 'react-number-format';
import { feature } from 'topojson';
/**
 * Component that renders a map of Germany.
 */

function WorldMap() {
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    const projection = geoMercator();
    const pathGenerator = geoPath().projection(projection);

     const g=svg.append('g')
g.append('path')
.attr('class','sphere')
.attr('d',pathGenerator({type:'Sphere'}))

svg.call(zoom().on('zoom',()=>{
  g.attr('transform',event.transform);
}))
Promise.all([
  json('https://api.covid19api.com/summary'),
  json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json')
]).then(([coronaData,toopJsonData])=>{
  const minProp = min(coronaData.Countries, feature => feature.TotalConfirmed);
  const maxProp = max(coronaData.Countries, feature => feature.TotalConfirmed);
    // const maxProp = max(data.features, feature => feature.properties[property]);
  console.log(minProp,maxProp)
  const colorScale=scaleOrdinal(schemeCategory10)
  
  // const colorScale=scaleLinear()
  // .domain([minProp, maxProp])
  // .range(["#ccc", "red"]);

  const countries = feature(toopJsonData, toopJsonData.objects.countries);
        g.selectAll('path').data(countries.features)
          .enter().append('path')
          .attr('class','country')
          .attr('d', pathGenerator)
          .attr('fill',d=>colorScale(d.id))
          .append('title').text((d)=>{
            const name=d.properties.name
            const selectedCountry=coronaData.Countries.filter(c=>c.Country===name)
            return tooltipFormatter(name,selectedCountry)
          })
})
  }, []);
  const tooltipFormatter=(name,d)=>{
    const unknown='Unknown'
    const totalConfirmed=d[0]===undefined?unknown:d[0].TotalConfirmed
    const totalDeaths=d[0]===undefined?unknown:d[0].TotalDeaths
    const totalRecovered=d[0]===undefined?unknown:d[0].TotalRecovered
    const newConfirmed=d[0]===undefined?unknown:d[0].NewConfirmed
    const newDeaths=d[0]===undefined?unknown:d[0].NewDeaths
    const newRecovered=d[0]===undefined?unknown:d[0].NewRecovered
    const display=
    `Country : ${name}
    Total Confirmed : ${totalConfirmed}
    Total Deaths : ${totalDeaths}
    Total Recovered : ${totalRecovered}
    Today Confirm : ${newConfirmed}
    Today Deaths : ${newDeaths}
    Today Recovred : ${newRecovered}`
    return (display)
  }
  return (
    <div className='worldMap' style={{ marginBottom: "2rem" }}>
      <svg ref={svgRef} width='100%' height='500'></svg>
      <button>Reset</button>
    </div>
  );
}

export default WorldMap;