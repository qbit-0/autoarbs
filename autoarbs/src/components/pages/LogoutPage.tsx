import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LOGGED_OUT_REDIRECT } from "../../App";
import { useAppDispatch } from "../../app/hooks";
import { accountActions } from "../../features/account/accountSlice";

type Props = {};

const LogoutPage = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(accountActions.logout());
    navigate(LOGGED_OUT_REDIRECT);
  }, [dispatch, navigate]);

  return null;
};

export default LogoutPage;
