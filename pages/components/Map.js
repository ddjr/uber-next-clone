import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGRqciIsImEiOiJjbDEwNnBkaHAwYTd4M2NteHRrMjh2cjh3In0.LIWSv2mJCb3LTv3wiOzLGw";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/ddjr/cl1mm46lr000y14pjkzvrc53n",
      center: [-87.623177, 41.881832], // Center of USA
      zoom: 12,
    });
    addToMap(map);
  }, []);

  const addToMap = (map) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat([12.554729, 55.70651])
      .addTo(map);
  };
  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`flex-1`;
