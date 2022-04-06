import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Ride from "./Ride";
import { carList } from "../data";

const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState();
  // get right duration from Mapbox API
  useEffect(() => {
    rideDuration = fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiZGRqciIsImEiOiJjbDEwNnBkaHAwYTd4M2NteHRrMjh2cjh3In0.LIWSv2mJCb3LTv3wiOzLGw`
    )
      .then((res) => res.json())
      .then((data) => {
        setRideDuration(data.routes[0]?.duration / 100);
        console.log(data.routes[0]);
      });
  }, [pickupCoordinates, dropoffCoordinates]);
  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map(({ imgUrl, service, multiplier }, idx) => {
          return (
            <Ride
              id={idx}
              imgUrl={imgUrl}
              service={service}
              multiplier={multiplier}
              duration={rideDuration}
            />
          );
        })}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const Wrapper = tw.div`flex-1 flex flex-col overflow-y-scroll`;
const Title = tw.div`flex justify-center text-gray-400`;
const CarList = tw.div`flex-1  border-y border-y-gray-100 overflow-y-scroll`;
