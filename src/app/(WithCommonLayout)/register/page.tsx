"use client";
import FxForm from "@/src/components/form/FxForm";
import FXInput from "@/src/components/form/FXInput";
import registerValidationSchema from "@/src/schema/register.schema";
import { registerUser } from "@/src/services/AuthService";
import { Button } from "@heroui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Register = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const userData = {
      ...data,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };
    console.log("Register Form Data:", userData);
    registerUser(userData);
  };
  return (
    <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
      <h3 className="my-2 text-2xl font-bold">Register with FoundX</h3>
      <p className="mb-4">Help Lost Items Find Their Way Hom</p>
      <div className="lg:w-[35%] w-[80%]">
        <FxForm
          onSubmit={onSubmit}
          resolver={zodResolver(registerValidationSchema)}
          //! Only for development
          defaultValues={{
            name: "Arzena Akter",
            email: "arzena@gmail.com",
            mobileNumber: "01766179470",
            password: "123456",
          }}
        >
          <div className="py-3">
            <FXInput type="text" name="name" label="User Name" size="lg" />
          </div>
          <div className="py-3">
            <FXInput type="email" name="email" label="Email" size="lg" />
          </div>
          <div className="py-3">
            <FXInput
              type="tel"
              name="mobileNumber"
              label="Phone Number"
              size="lg"
            />
          </div>
          <div>
            <FXInput
              type="password"
              name="password"
              label="Password"
              size="lg"
            />
          </div>
          <Button
            type="submit"
            className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
          >
            Register
          </Button>
        </FxForm>
        <div>
          Already have an account ? <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
