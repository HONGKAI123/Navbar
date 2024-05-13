import "./DropdownMenu.css";
interface DropDownMenuProps {
  dropdownItems?: string[];
  isDropDownActive: boolean;
}

function DropdownMenu({ dropdownItems, isDropDownActive }: DropDownMenuProps) {
  //dropdownMenu will show only when current NavbarItem has DropdownData
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
