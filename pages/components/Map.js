import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGRqciIsImEiOiJjbDEwNnBkaHAwYTd4M2NteHRrMjh2cjh3In0.LIWSv2mJCb3LTv3wiOzLGw";

const Map = ({ pickupCoordinates, dropoffCoordinates }) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/ddjr/cl1mm46lr000y14pjkzvrc53n",
      center: [-99.29011, 39.39172], // Center of USA
      zoom: 3,
    });

    // Initialize the GeolocateControl.
    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });
    // Add the control to the map.
    map.addControl(geolocate);
    // Set an event listener that fires
    // when a geolocate event occurs.
    geolocate.on("geolocate", (e) => {
      const userLocation = [e.coords.longitude, e.coords.latitude];
      // addToMap(map, userLocation);
    });

    if (pickupCoordinates && dropoffCoordinates) {
      addToMap(map, pickupCoordinates);
      addToMap(map, dropoffCoordinates);
      map.fitBounds([pickupCoordinates, dropoffCoordinates], {
        padding: {
          top: 100,
          bottom: 100,
          left: 100,
          right: 100,
        },
      });
    }
  }, [pickupCoordinates, dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`flex-1 h-1/2`;
