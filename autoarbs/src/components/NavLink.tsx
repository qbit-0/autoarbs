import { FC, MouseEventHandler } from "react";
import { Link, useLocation } from "react-router-dom";

type Props = { name: string; to: string; onClick?: MouseEventHandler };

const NavLink: FC<Props> = ({ name, to, onClick }) => {
  const location = useLocation();

  return (
    <li className={`${location.pathname === to ? "active" : ""}`}>
      <Link to={to} onClick={onClick}>
        {name}
      </Link>
    </li>
  );
};

export default NavLink;
