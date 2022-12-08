import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import {
  selectFirstname,
  selectIsLoggedIn,
  selectLastname,
  selectUsername,
} from "../../features/account/accountSlice";
import AccountInfoCard from "../cards/AccountInfoCard";
import AccountSettingsCard from "../cards/AccountSettingsCard";

type Props = {};

const ProfilePage = (props: Props) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const username = useAppSelector(selectUsername);
  const firstname = useAppSelector(selectFirstname);
  const lastname = useAppSelector(selectLastname);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate("/");
  }, [navigate, isLoggedIn]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>
            {username}({firstname} {lastname})
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
