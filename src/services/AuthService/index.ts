"use client";

import axiosInstance from "@/src/lib/AxiosIntance";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const res = await axiosInstance.post("/auth/register", userData);
    console.log("Registration Response:", res);
  } catch (error: any) {
    throw new Error(error);
  }
};
