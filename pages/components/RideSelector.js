import React from "react";
import tw from "tailwind-styled-components";
import Ride from "./Ride";
import { carList } from "../data";

const RideSelector = () => {
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
