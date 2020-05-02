import React, { useRef, useEffect, useState } from "react";
import { select, geoPath, geoMercator, min, max, scaleLinear } from "d3";
import { makeStyles } from '@material-ui/core/styles';
// import data from './GeoChart.world.geo.json'
import data from './GeoChart.india.geo.json'
import useResizeObserver from "./useResizeObserver";

/**
 * Component that renders a map of Germany.
 */
const useStyles = makeStyles((theme) => ({
  label:{
color:'red'
  },
}));
function IndiaMap() {
  const classes = useStyles();
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  const [selectedCountry, setSelectedCountry] = useState(null);
const property='NAME_1'
  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);

    const minProp = min(data.features, feature => feature.properties['ID_1']);
    const maxProp = max(data.features, feature => feature.properties['ID_1']);
    const colorScale = scaleLinear()
      // .domain([minProp, maxProp])
      .domain([minProp, maxProp])
      .range(["#ccc", "red"]);

    // use resized dimensions
    // but fall back to getBoundingClientRect, if no dimensions yet.
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    // projects geo-coordinates on a 2D plane
    const projection = geoMercator()
      .precision(100);

    // takes geojson data,
    // transforms that into the d attribute of a path element
    const pathGenerator = geoPath().projection(projection);

    // render each country
    svg
      .selectAll(".State")
      .data(data.features)
      .join("path")
      .on("click", feature => {
        setSelectedCountry(selectedCountry === feature ? null : feature);
      })
      .attr("class", "country")
      .transition()
      .duration(1000)
      .attr("fill", feature => colorScale(feature.properties['ID_1']))
      .attr("d", feature => pathGenerator(feature));

    // render text
    // svg
    //   .selectAll(".label")
    //   .data([selectedCountry])
    //   .join("text")
    //   .attr("class", classes.label)
    //   .text(
    //     feature =>
    //       feature &&
    //       feature.properties.ID_1 +
    //         ": " +
    //         feature.properties[property].toLocaleString()
    //   )
    //   .attr("x", 10)
    //   .attr("y", 25);
  }, [ dimensions, selectedCountry]);

  return (
    <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default IndiaMap;