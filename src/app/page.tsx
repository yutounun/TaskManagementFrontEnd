"use client";

import React, { useEffect } from "react";
import Logo from "@/_common/icons/Logo";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, []);
  return (
    <div>
      <Logo color="#7BB147" />
    </div>
  );
};

export default Home;
