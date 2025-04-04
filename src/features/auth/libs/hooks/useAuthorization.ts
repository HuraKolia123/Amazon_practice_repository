import { usePostAuthMutation } from "../../api/authAPI";
import { useDispatch } from "react-redux";
import { userActions } from "@/entities/user";
import { PostAuthRequest } from "../../model/types/authAPI";
import { useNavigate } from "react-router-dom";
import { getProductsRoute } from "@/shared/libs/constants/routes";

export const useAuthorization = () => {
  const [authorizeUser, result] = usePostAuthMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authorize = ({ email, password }: PostAuthRequest) => {
    authorizeUser({ email, password })
      .unwrap()
      .then((data) => {
        dispatch(userActions.setLoggedInTrue());
        dispatch(userActions.setUser(data.data));
        navigate(getProductsRoute(), { replace: true });
      });
  };

  return { authorize, result };
};
