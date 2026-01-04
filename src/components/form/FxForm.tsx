import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface FxFormProps {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

interface IProps extends FxFormProps {
  children: React.ReactNode;
  onsubmit: SubmitHandler<any>;
}

const FxForm = ({ children, onsubmit, defaultValues, resolver }: IProps) => {
  const formConfig: FxFormProps = {};
  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);
  const submitHandler = methods.handleSubmit;
  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHandler(onsubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FxForm;
