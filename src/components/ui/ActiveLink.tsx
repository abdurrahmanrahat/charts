import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type TActiveLinkProps = {
  to: string;
  children: ReactNode;
};

const ActiveLink = ({ to, children }: TActiveLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-primary" : "")}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
