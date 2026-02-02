"use client";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@heroui/button";
import React from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";

const CreatePost = () => {
  const methods = useForm();
  const { control, handleSubmit } = methods;
  const { append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FXInput name="title" label="Title" />
        <Button type="submit">Create Post</Button>
      </form>
    </FormProvider>
  );
};

export default CreatePost;
