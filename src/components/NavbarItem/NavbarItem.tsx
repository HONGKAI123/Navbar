import React from "react";
import "./NavbarItem.css";
interface NavbarItemProps {
  link: string;
  label: string;
  dropDownItems?: string[];
}
function NavbarItem({ link, label }: NavbarItemProps) {
  return (
    <>
      <li className="navbar-linkitems">
        <a href={link} className="navbar-link">
          {label}
        </a>
      </li>
    </>
  );
}

export default NavbarItem;
