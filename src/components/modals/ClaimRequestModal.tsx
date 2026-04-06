import React from "react";
import FXmodal from "./FXmodal";
import FxForm from "../form/FxForm";
import FXInput from "../form/FXInput";
import FXTextarea from "../form/FXTextArea";
import { Button } from "@heroui/button";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddClaimRequest } from "@/src/hooks/claimRequest.hook";

const ClaimRequestModal = ({
  id,
  questions,
}: {
  id: string;
  questions: string[];
}) => {
  const { mutate: handleClaimRequest, isPending } = useAddClaimRequest();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const claimRequestData = {
      item: id,
      description: data.description,
      answers: Object.keys(data)
        .filter((key) => key.startsWith("answer"))
        .map((answer) => data[answer]),
    };

    console.log("hola", claimRequestData);
    handleClaimRequest(claimRequestData);
  };
  return (
    <FXmodal
      buttonClassName="flex-1"
      buttonVariant="light"
      title="Claim Request"
      buttonText="Claim Request"
    >
      <FxForm onSubmit={onSubmit}>
        {questions?.map((question, index) => (
          <div className="mb-4" key={index}>
            <p className="mb-1">{question}</p>
            <FXInput
              label={`Answer- ${index + 1}`}
              name={`answer-${index + 1}`}
            />
          </div>
        ))}
        <FXTextarea label="Description" name="description" />
        <div className="">
          <Button className="flex-1 my-2 w-full" size="lg" type="submit">
            {isPending ? "Sending..." : "Send"}
          </Button>
        </div>
      </FxForm>
    </FXmodal>
  );
};

export default ClaimRequestModal;
