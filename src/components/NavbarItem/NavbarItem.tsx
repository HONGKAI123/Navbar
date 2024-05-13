import React, { useState } from "react";
import "./NavbarItem.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

interface NavbarItemProps {
  link: string;
  label: string;
  dropDownitems?: string[];
}
function NavbarItem({ link, label, dropDownitems }: NavbarItemProps) {
  const [showDropDown, setShowDropdown] = useState(false);
  const dropDownHandler = () => {
    setShowDropdown(true);
  };
  const hideDropDownHandler = () => {
    setShowDropdown(false);
  };
  return (
    <>
      <li
        className="navbar-linkitems"
        onMouseOver={dropDownHandler}
        onMouseLeave={hideDropDownHandler}
      >
        <a href={link} className="navbar-link">
          {label}
        </a>
        <DropdownMenu
          dropdownItems={dropDownitems}
          isDropDownActive={showDropDown}
        />
      </li>
    </>
  );
}

export default NavbarItem;
