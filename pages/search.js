import React, { useState } from "react";
import { useRouter } from "next/router";
import tw from "tailwind-styled-components";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteLocation from "./components/FavoriteLocation";

function Search() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  return (
    <Wrapper>
      <Link href="/" passHref>
        <BackButtonContainer>
          <ArrowBackIcon
            style={{ fill: "#FFF", position: "fixed", top: "9", left: "12" }}
          />
          <Trip>Trip</Trip>
        </BackButtonContainer>
      </Link>
      <InputContainer>
        <FromToIcons>
          <Circle
            src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"
            alt="circle"
          />
          <Line
            src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"
            alt="line"
          />
          <Square
            src="https://img.icons8.com/windows/50/000000/square-full.png"
            alt="square"
          />
        </FromToIcons>
        <InputBoxes>
          <Input
            placeholder="Enter pickup Location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
          <Input
            placeholder="Where to?"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />
        </InputBoxes>
      </InputContainer>
      <SavedPlaces>
        <ContainerFavoriteLocation
          onClick={() => setDropoff("450 W Melrose Street Chicacgo, IL")}
        >
          <FavoriteLocation />
        </ContainerFavoriteLocation>
        <Link
          href={{
            pathname: "/confirm",
            query: {
              pickup: pickup,
              dropoff: dropoff,
            },
          }}
          passHref
        >
          <ConfirmLocations>Confirm Locations</ConfirmLocations>
        </Link>
      </SavedPlaces>
    </Wrapper>
  );
}

export default Search;

const Wrapper = tw.div` h-screen w-full bg-black flex flex-col`;
const BackButtonContainer = tw.div`flex justify-center cursor-pointer`;
const Trip = tw.div`text-white pt-2`;

const InputContainer = tw.div`bg-white flex items-center rounded-md m-4 mb-8 p-1`;
const FromToIcons = tw.div`w-5 flex  flex-col items-center m-2`;
const Circle = tw.img`mt-1 h-4`;
const Line = tw.img`h-8 mt-1`;
const Square = tw.img`h-4`;
const InputBoxes = tw.div`flex flex-col flex-1`;
const Input = tw.input`bg-gray-200 h-10 p-2 my-2 rounded-sm outline-none border-none mr-3`;

const SavedPlaces = tw.div`flex flex-col items-center bg-white p-4 rounded-t-lg flex-1 h-fit justify-between`;
const ContainerFavoriteLocation = tw.div`w-full`;
const ConfirmLocations = tw.div`flex bg-black text-white p-2 justify-center m-2 cursor-pointer w-full rounded-md`;

const SuggestionWrapper = tw.div`
  background: white;
  position: absolute;
  width: 400px;
  padding: 10px 20px;
  border-radius: 0px 0px 10px 10px;
`;

const Suggestion = tw.p`
  cursor: pointer;
  max-width: 400px;
`;
