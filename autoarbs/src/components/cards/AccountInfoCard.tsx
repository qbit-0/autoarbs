import useAutoUpdateUserData from "../../hooks/useAutoUpdateUserData";

type Props = {};

const AccountInfoCard = (props: Props) => {
  const userData = useAutoUpdateUserData();

  if (!userData) return null;

  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">Info</span>
        <p>Email: {userData.email}</p>
      </div>
    </div>
  );
};

export default AccountInfoCard;
