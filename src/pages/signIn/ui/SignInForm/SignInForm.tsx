// react
import { FC } from "react";
//types
import { signInPageValidationSchema } from "../../libs/validation/signInPageValidationSchema";
//hooks
import { useAuthorization } from "@/features/auth/libs/hooks/useAuthorization";
//constants
import { signInFields } from "../../libs/constants/signInFields";
//ui
import { Form } from "@/widgets/form";

interface SignInFormProps {}

export const SignInForm: FC<SignInFormProps> = ({}) => {
  const { authorize } = useAuthorization();

  const onSubmit = (data: { email: string; password: string }) => {
    authorize({
      email: data?.email,
      password: data?.password,
    });
  };

  return (
    <Form
      fields={signInFields}
      onSubmit={onSubmit}
      schema={signInPageValidationSchema}
      submitButtonText="Sign in"
    />
  );
};
