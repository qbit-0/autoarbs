import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

type Props = { name: string; to: string };

const NavLink: FC<Props> = ({ name, to }) => {
  const location = useLocation();

  return (
    <li className={`${location.pathname === to ? "active" : ""}`}>
      <Link to={to}>{name}</Link>
    </li>
  );
};

export default NavLink;
