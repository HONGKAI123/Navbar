import React from "react";
interface DropDownMenuProps {
  dropdownItems: string[];
  isDropDownActive: boolean;
}

function DropdownMenu({ dropdownItems, isDropDownActive }: DropDownMenuProps) {
  if (!dropdownItems) return null;

  return (
    <div className="dropdown-container">
      <div className={`dropdown-menu ${isDropDownActive ? "active" : ""}`}>
        {dropdownItems.map((item, index) => {
          return (
            <a className="dropdown-link" href="#dropDown" key={index}>
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default DropdownMenu;
