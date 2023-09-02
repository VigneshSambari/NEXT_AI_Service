"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("8e527f33-018b-41e3-97b8-f49ae05f37ad");
  }, []);

  return null;
};