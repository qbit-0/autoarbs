import useAutoUpdateUserData from "../../hooks/useAutoUpdateUserData";
import AccountInfoCard from "../cards/AccountInfoCard";
import AccountSettingsCard from "../cards/AccountSettingsCard";

type Props = {};

const ProfilePage = (props: Props) => {
  const userData = useAutoUpdateUserData();

  if (!userData) return null;

  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>
            {userData.firstName} {userData.lastName}
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
