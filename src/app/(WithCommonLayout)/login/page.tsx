"use client";
import FxForm from "@/src/components/form/FxForm";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@heroui/button";
import Link from "next/link";
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import loginValidationSchema from "@/src/schema/login.schema";
import { useUserLogin } from "@/src/hooks/auth.hook";
import Loading from "@/src/components/UI/Loading";

const Login = () => {
  const {
    mutate: handleUserLogin,
    data,
    isSuccess,
    isError,
    isPending,
  } = useUserLogin();

  console.log({ data, isSuccess, isError, isPending });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleUserLogin(data);
  };
  return (
    <>
      {isPending && <Loading />}
      <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
        <h3 className="my-2 text-2xl font-bold">Login with FoundX</h3>
        <p className="mb-4">Welcome back! Let&lsquo;s Get started</p>
        <div className="lg:w-[35%] w-[80%]">
          <FxForm
            onSubmit={onSubmit}
            resolver={zodResolver(loginValidationSchema)}
          >
            <div className="py-3">
              <FXInput type="email" name="email" label="Email" />
            </div>
            <div>
              <FXInput type="password" name="password" label="Password" />
            </div>
            <Button
              type="submit"
              className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
            >
              Login
            </Button>
          </FxForm>
          <div>
            Don&lsquo;t have account ? <Link href={"/register"}>Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
