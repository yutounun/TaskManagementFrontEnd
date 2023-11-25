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

const SignUp = ({ children }: propTypes) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      "signup email": "",
      "signup password": "",
      "signup username": "",
    },
  });

  const router = useRouter();
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
    <form
      onSubmit={handleSubmit(handleSignUpSubmit)}
      className="flex flex-col items-center gap-5 w-full"
    >
      <p className="text-3xl font-bold">Welcome</p>
      <p className="text-md text-gray-text">
        Welcome. Start by filling the form.
      </p>
      {children}
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
      <Button continue to="/tasks/list" />
    </form>
  );
};

export default SignUp;
