"use client";

import React, { useState } from "react";
import Logo from "@/common/icons/Logo";
import Image from "next/image";
import Tabs from "@/common/Tabs";
import BoldInput from "@/common/BoldInput";
import Button from "@/common/Button";

const Home = () => {
  const [signIn, setSignIn] = useState(true);
  const [signInEmail, setSignInEmail] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");

  return (
    <div className="flex w-screen h-screen">
      {/* left */}
      <div className="w-1/2 flex px-10 py-20">
        {/* container */}
        <div className="flex justify-center items-center flex-col gap-5 w-full">
          <Logo color="#7BB147" />
          {/* Sign In */}
          {signIn ? (
            <div className="flex flex-col items-center gap-5 w-full">
              <p className="text-3xl font-bold">Welcome Back</p>
              <p className="text-md text-gray-text">
                Welcome Back. Please Enter your details.
              </p>
              <Tabs left={signIn} setLeft={setSignIn} className="w-6/12" />
              <BoldInput
                title="Email"
                onChange={(email) => setSignInEmail(email)}
                className="w-6/12"
              />
              <Button continue />
            </div>
          ) : (
            // Sign Up
            <div className="flex flex-col items-center gap-5 w-full">
              <p className="text-3xl font-bold">Welcome Back</p>
              <p className="text-md text-gray-text">
                Welcome Back. Please Enter your details.
              </p>
              <Tabs left={signIn} setLeft={setSignIn} className="w-6/12" />
              <BoldInput
                title="Email"
                onChange={(email) => setSignUpEmail(email)}
                className="w-6/12"
              />
              <BoldInput
                title="Password"
                onChange={(password) => setSignUpPassword(password)}
                className="w-6/12"
              />
              <BoldInput
                title="Username"
                onChange={(username) => setSignUpUsername(username)}
                className="w-6/12"
              />
              <Button continue />
            </div>
          )}
        </div>
      </div>

      {/* right */}
      <div className="w-1/2 relative">
        <Image src="/watch.jpeg" alt="watch" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Home;
