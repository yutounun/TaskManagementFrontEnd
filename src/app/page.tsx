"use client";

import React, { useState, useContext } from "react";
import Logo from "@/_common/icons/Logo";
import Image from "next/image";
import Tabs from "@/_common/Tabs";
import SignUp from "./_common/_home/SignUp";
import SignIn from "./_common/_home/SignIn";

const Home = () => {
  const [signIn, setSignIn] = useState(true);

  return (
    <div className="flex w-screen h-screen">
      {/* left */}
      <div className="w-1/2 flex px-10 py-20">
        {/* container */}
        <div className="flex justify-center items-center flex-col gap-5 w-full">
          <Logo color="#7BB147" />
          {signIn ? (
            <SignIn>
              <Tabs left={signIn} setLeft={setSignIn} className="w-6/12" />
            </SignIn>
          ) : (
            <SignUp>
              <Tabs left={signIn} setLeft={setSignIn} className="w-6/12" />
            </SignUp>
          )}
        </div>
      </div>

      {/* right */}
      <div className="w-1/2 relative">
        <Image
          src="/login.png"
          alt="login"
          layout="fill"
          objectFit="cover"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default Home;
