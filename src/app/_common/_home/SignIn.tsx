import { postApi } from "@/_utils/api";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import BoldInput from "../BoldInput";
import Button from "../Button";
import Tabs from "../Tabs";

interface signInResponse {
  access_token: string;
  type: string;
}

interface propTypes {
  children: React.ReactNode;
}

const SignIn = ({ children }: propTypes) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      "signin username": "",
      "signin password": "",
    },
  });
  async function handleSignIn(requestData) {
    const url = "auth/login";
    await postApi(url, requestData)
      .then((res: signInResponse) => {
        console.log("🚀 ~ file: page.tsx:55 ~ .then ~ localStorage");
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
  return (
    <form
      onSubmit={handleSubmit(handleSignInSubmit)}
      className="flex flex-col items-center gap-5 w-full"
    >
      <p className="text-3xl font-bold">Welcome Back</p>
      <p className="text-md text-gray-text">
        Welcome Back!! Please Enter your details.
      </p>
      {children}
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
    </form>
  );
};

export default SignIn;
