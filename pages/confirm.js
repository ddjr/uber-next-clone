import React from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";

export default function confirm() {
  return (
    <Wrapper>
      <Map />
      <RideContainer>
        <RideSelector>RideSelector</RideSelector>
        <ConfirmButton>Confirm button</ConfirmButton>
      </RideContainer>
    </Wrapper>
  );
}
const Wrapper = tw.div`flex flex-col h-screen max-w-[768px] mx-auto min-w-[280px]`;
const RideContainer = tw.div`flex-1`;
const RideSelector = tw.div``;
const ConfirmButton = tw.div``;
