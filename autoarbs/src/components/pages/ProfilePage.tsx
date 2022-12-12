import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import {
  selectIsLoggedIn,
  selectUserData,
} from "../../features/account/accountSlice";
import AccountInfoCard from "../cards/AccountInfoCard";
import AccountSettingsCard from "../cards/AccountSettingsCard";

type Props = {};

const ProfilePage = (props: Props) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const userData = useAppSelector(selectUserData);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate("/");
  }, [navigate, isLoggedIn]);

  if (!userData) return null;

  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>
            {userData.userName} ({userData.firstName} {userData.lastName})
          </h1>
        </div>
        <div className="row">
          <div className="col s12">
            <AccountInfoCard />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <AccountSettingsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
