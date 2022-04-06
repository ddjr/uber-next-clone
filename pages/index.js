import tw from "tailwind-styled-components";
import HomeOverlay from "./components/HomeOverlay";
import Map from "./components/Map";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <HomeOverlay />
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen max-w-[768px] mx-auto min-w-[280px]
`;
