"use client";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import React from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";

const CreatePost = () => {
  const methods = useForm();
  const { control, handleSubmit } = methods;
  const { append, remove, fields } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleFieldAppend = () => {
    append({ name: "questions" });
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FXInput name="title" label="Title" />
        <Divider className="my-5" />
        <div className="flex justify-between items-center">
          <h5 className="text-xl">Owner verification questions</h5>
          <Button onClick={() => handleFieldAppend()}>Append</Button>
        </div>
        {fields.map((field, index) => (
          <div key={field.id} className="my-3">
            <FXInput name={`questions.${index}.value`} label="Question" />
          </div>
        ))}
        <Divider className="my-5" />
        <Button type="submit">Create Post</Button>
      </form>
    </FormProvider>
  );
};

export default CreatePost;
