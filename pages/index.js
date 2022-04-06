import tw from "tailwind-styled-components";
import HomeOverlay from "./components/HomeOverlay";
import Map from "./components/Map";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
export default function Home() {
  const [user, setUser] = useState();
  const [map, setMap] = useState();
  const router = useRouter();
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        });
      } else {
        setUser(null);
        router.push("/login");
      }
    });
  });
  return (
    <Wrapper>
      <Map />
      <HomeOverlay name={user?.name} photoUrl={user?.photoUrl} />
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen max-w-[768px] mx-auto min-w-[280px]
`;
