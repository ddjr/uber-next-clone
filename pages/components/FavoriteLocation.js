import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import tw from "tailwind-styled-components";
const FavoriteLocation = () => {
  return (
    <Wrapper>
      <HomeIcon>
        <HomeOutlinedIcon />
      </HomeIcon>
      <AddressWrapper>
        <LocationName>Home</LocationName>
        <Address>450 W Melrose Street Chicago, IL</Address>
      </AddressWrapper>
    </Wrapper>
  );
};

export default FavoriteLocation;
const Wrapper = tw.div`flex items-center bg-gray-100 rounded-md cursor-pointer w-full p-1`;
const HomeIcon = tw.div`p-2 mx-1`;
const AddressWrapper = tw.div`rounded-md`;
const LocationName = tw.div`font-bold text-lg`;
const Address = tw.div`text-gray-400`;
