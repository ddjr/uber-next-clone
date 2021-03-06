/* eslint-disable no-console, no-control-regex*/
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

export default function Confirm() {
  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  function getPickupCoordinates(pickup) {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiZGRqciIsImEiOiJjbDEwNnBkaHAwYTd4M2NteHRrMjh2cjh3In0.LIWSv2mJCb3LTv3wiOzLGw",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  }

  const getDropoffCorrdinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiZGRqciIsImEiOiJjbDEwNnBkaHAwYTd4M2NteHRrMjh2cjh3In0.LIWSv2mJCb3LTv3wiOzLGw",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCorrdinates(dropoff);
  }, []);

  return (
    <Wrapper>
      <Link href="/search" passHref>
        <ArrowIcon>
          <ArrowBackIcon style={{ fontSize: "40px" }} />
        </ArrowIcon>
      </Link>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
        />
        <ConfirmButton>Confirm UberX</ConfirmButton>
      </RideContainer>
    </Wrapper>
  );
}
const Wrapper = tw.div`flex flex-col h-screen max-w-[768px] mx-auto min-w-[280px]`;
const ArrowIcon = tw.div`fixed top-3 left-3 z-10 bg-gray-200 rounded-full cursor-pointer`;
const RideContainer = tw.div`flex-1 flex flex-col h-1/2 text-sm`;
const ConfirmButton = tw.div`bg-black text-white flex justify-center p-3 font-bold m-3 rounded-md`;
