"use client";

import React, { useState, useContext } from "react";
import Logo from "@/_common/icons/Logo";
import Image from "next/image";
import Tabs from "@/_common/Tabs";
import BoldInput from "@/_common/BoldInput";
import Button from "@/_common/Button";
import { postApi } from "@/_utils/api";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface signInResponse {
  access_token: string;
  type: string;
}

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      "signup email": "",
      "signup password": "",
      "signup username": "",
      "signin username": "",
      "signin password": "",
    },
  });

  const [signIn, setSignIn] = useState(true);
  const router = useRouter();

  /**
   * Handles the sign-in process.
   *
   * @return {void}
   */
  async function handleSignInSubmit(data) {
    const requestData = {
      username: data["signin username"],
      password: data["signin password"],
    };
    handleSignIn(requestData);
  }

  async function handleSignIn(requestData) {
    const url = "auth/login";
    await postApi(url, requestData)
      .then((res: signInResponse) => {
        localStorage.setItem("accessToken", res.access_token);
      })
      .then(() => {
        router.push("/tasks/list");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /**
   * Handles the sign up process.
   *
   * @param {type} paramName - description of parameter
   * @return {type} description of return value
   */
  async function handleSignUpSubmit(data) {
    const requestData = {
      username: data["signup username"],
      password: data["signup password"],
      email: data["signup email"],
    };
    const signInRequestData = {
      username: data["signup username"],
      password: data["signup password"],
    };
    const url = "auth";
    await postApi(url, requestData)
      .then((res: signInResponse) => {
        localStorage.setItem("accessToken", res.access_token);
      })
      .then(() => {
        handleSignIn(signInRequestData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="flex w-screen h-screen">
      {/* left */}
      <div className="w-1/2 flex px-10 py-20">
        {/* container */}
        <div className="flex justify-center items-center flex-col gap-5 w-full">
          <Logo color="#7BB147" />
          {/* Sign In */}
          <form
            onSubmit={
              signIn
                ? handleSubmit(handleSignInSubmit)
                : handleSubmit(handleSignUpSubmit)
            }
            className="flex flex-col items-center gap-5 w-full"
          >
            {signIn ? (
              <>
                <p className="text-3xl font-bold">Welcome Back!!</p>
                <p className="text-md text-gray-text">
                  Welcome Back. Please Enter your details.
                </p>
                <Tabs left={signIn} setLeft={setSignIn} className="w-6/12" />
                <BoldInput
                  title="Username"
                  label="signin username"
                  register={register}
                  className="w-6/12"
                  error={errors["signin username"]?.message}
                  placeholder="Enter your Username"
                />
                <BoldInput
                  title="Password"
                  label="signin password"
                  register={register}
                  error={errors["signin password"]?.message}
                  className="w-6/12"
                  placeholder="Enter your Password"
                />
                <Button continue to="/tasks/list" />
              </>
            ) : (
              <>
                {/* signup */}
                <p className="text-3xl font-bold">Welcome</p>
                <p className="text-md text-gray-text">
                  Welcome. Start by filling the form.
                </p>
                <Tabs left={signIn} setLeft={setSignIn} className="w-6/12" />
                <BoldInput
                  title="Username"
                  label="signup username"
                  register={register}
                  required
                  error={errors["signup username"]?.message}
                  className="w-6/12"
                  placeholder="Enter your Username"
                />
                {/* エラー表示 */}
                <BoldInput
                  title="Password"
                  label="signup password"
                  register={register}
                  error={errors["signup password"]?.message}
                  required
                  className="w-6/12"
                  placeholder="Enter your Password"
                />
                <BoldInput
                  title="Email"
                  label="signup email"
                  error={errors["signup email"]?.message}
                  register={register}
                  required
                  className="w-6/12"
                  placeholder="Enter your Email"
                />
                <Button type="submit" continue to="/tasks/list" />
              </>
            )}
          </form>
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
