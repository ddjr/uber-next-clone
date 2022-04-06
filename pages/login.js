import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";

function Login() {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  });
  return (
    <Wrapper>
      <LogoImg src="https://i.ibb.co/n6LWQM4/Post.png" alt="logo" />
      <Title>Login to access your account</Title>
      <LoginImg src="https://i.ibb.co/CsV9RYZ/login-image.png" alt="login" />
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        Sign in with Google
      </SignInButton>
    </Wrapper>
  );
}

export default Login;
const Wrapper = tw.div`flex flex-col h-screen max-w-[768px] mx-auto min-w-[280px] p-3 items-center bg-gray-100`;

const LogoImg = tw.img`w-20 mt-4`;
const Title = tw.div`text-4xl my-auto text-center text-gray-500`;
const LoginImg = tw.img``;
const SignInButton = tw.button`bg-black text-white p-3 rounded-md mt-3 w-full`;
