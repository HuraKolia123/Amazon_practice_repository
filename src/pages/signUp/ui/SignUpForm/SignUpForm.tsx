// react
import { FC } from "react";
//types
import { signUpPageValidationSchema } from "../../libs/validation/signUpPageValidationSchema";
//validation
import { useRegistration } from "@/features/registration/libs/hooks/useRegistration";
//constants
import { signUpFields } from "../../libs/constants/signUpFields";
//ui
import { Form } from "@/widgets/form";

interface SignUpFormProps {}

export const SignUpForm: FC<SignUpFormProps> = ({}) => {
  const { register } = useRegistration();

  const onSubmit = (data: {
    email: string;
    fullName: string;
    password: string;
    // repeatPassword: string;
  }) => {
    register({
      email: data.email,
      fullName: data.fullName,
      password: data.password,
    });
  };

  return (
    <Form
      fields={signUpFields}
      onSubmit={onSubmit}
      schema={signUpPageValidationSchema}
      submitButtonText="Sign up"
    ></Form>
  );
};
