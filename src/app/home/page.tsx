"use client";

import React, { useState } from "react";
import Logo from "@/_common/icons/Logo";
import Image from "next/image";
import Tabs from "@/_common/Tabs";
import BoldInput from "@/_common/BoldInput";
import Button from "@/_common/Button";

const Home = () => {
  const [signIn, setSignIn] = useState(true);
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");

  /**
   * Handles the sign-in process.
   *
   * @return {void}
   */
  async function handleSignIn() {
    const requestData = {
      username: signInUsername,
      password: signInPassword,
    };
    const url = `${process.env.NEXT_PUBLIC_API_URL}auth/login`;
    const options = {
      method: "POST", // request method
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    };
    try {
      const response = await fetch(url, options);
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Handles the sign up process.
   *
   * @param {type} paramName - description of parameter
   * @return {type} description of return value
   */
  async function handleSignUp() {
    console.log("data");
  }

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
                title="Username"
                onChange={(username) => setSignInUsername(username)}
                className="w-6/12"
                placeholder="Enter your Username"
              />
              <BoldInput
                title="Password"
                onChange={(password) => setSignInPassword(password)}
                className="w-6/12"
                placeholder="Enter your Password"
              />
              <Button continue to="/tasks/list" onClick={handleSignIn} />
            </div>
          ) : (
            // Sign Up
            <div className="flex flex-col items-center gap-5 w-full">
              <p className="text-3xl font-bold">Welcome</p>
              <p className="text-md text-gray-text">
                Welcome. Start by filling the form.
              </p>
              <Tabs left={signIn} setLeft={setSignIn} className="w-6/12" />
              <BoldInput
                title="Email"
                onChange={(email) => setSignUpEmail(email)}
                className="w-6/12"
                placeholder="Enter your Email"
              />
              <BoldInput
                title="Password"
                onChange={(password) => setSignUpPassword(password)}
                className="w-6/12"
                placeholder="Enter your Password"
              />
              <BoldInput
                title="Username"
                onChange={(username) => setSignUpUsername(username)}
                className="w-6/12"
                placeholder="Enter your Username"
              />
              <Button continue to="/tasks/list" onClick={handleSignUp} />
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
