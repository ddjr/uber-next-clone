import React from "react";
import tw from "tailwind-styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Link from "next/link";
import FavoriteLocation from "./FavoriteLocation";
const HomeOverlay = () => {
  return (
    <Wrapper>
      <WrapperTop>
        <MenuIcon />
        <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" alt="logo" />
        <UserImg src="https://us.123rf.com/450wm/fizkes/fizkes2010/fizkes201001384/157765614-profile-picture-of-smiling-indian-female-isolated-on-grey-studio-background-show-optimism-and-positi.jpg?ver=6" />
      </WrapperTop>
      <WrapperBottom>
        <Greeting>Howdy David!</Greeting>
        <Link href="/search">
          <SearchWrapper>
            <SearchIcon>
              <SearchOutlinedIcon style={{ fill: "#fff" }} />
            </SearchIcon>
            <Input placeholder="Where to?" />
          </SearchWrapper>
        </Link>
        <Link href="/search">
          <FavoriteLocationWrapper>
            <FavoriteLocation />
          </FavoriteLocationWrapper>
        </Link>
      </WrapperBottom>
    </Wrapper>
  );
};

export default HomeOverlay;
const Wrapper = tw.div``;

// TOP
const WrapperTop = tw.div`fixed top-0 left-0 right-0 flex justify-between items-center z-10 mx-5 my-3 md:max-w-[768px] md:p-3 md:mx-auto`;
const UberLogo = tw.img`h-7 mt-1`;
const Profile = tw.div``;
const UserImg = tw.img`h-12 w-12 rounded-full object-cover border border-gray-200 p-px`;
const HamburgerIcon = tw.img``;

// BOTTOM
const WrapperBottom = tw.div`fixed right-0 left-0 bottom-0 bg-white mx-5 mb-10 p-2 z-10 flex flex-col rounded-md md:max-w-[700px] md:mx-auto`;

const Greeting = tw.div`py-3 font-bold text-lg`;

const SearchWrapper = tw.div`bg-black flex rounded-md my-2 p-2`;
const SearchIcon = tw.div`mx-1 pr-1`;
const Input = tw.input`bg-black flex-1 outline-none border-none text-white`;

const FavoriteLocationWrapper = tw.a``;
