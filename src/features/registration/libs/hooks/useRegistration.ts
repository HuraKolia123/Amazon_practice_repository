import { usePostRegistrationMutation } from "../../api/registrationAPI";
import { PostRegistrationRequest } from "../../model/types/registrationAPI";
import { useNavigate } from "react-router-dom";
import { getProductsRoute } from "@/shared/libs/constants/routes";

export const useRegistration = () => {
  const [registerUser, result] = usePostRegistrationMutation();
  const navigate = useNavigate();

  const register = ({ email, fullName, password }: PostRegistrationRequest) => {
    registerUser({ email, fullName, password })
      .unwrap()
      .then(() => {
        navigate(getProductsRoute(), { replace: true });
      });
  };

  return { register, result };
};
