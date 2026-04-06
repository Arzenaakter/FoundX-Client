// "use server";

import axiosInstance from "@/src/lib/AxiosIntance";
import { FieldValues } from "react-hook-form";

export const addClaimRequest = async (
  claimRequest: FieldValues,
): Promise<any> => {
  try {
    const res = await axiosInstance.post("/claim-request", claimRequest);

    return res.data;
  } catch (error: any) {
    console.log("error", error);
    throw new Error(error);
  }
};
