import "./HeaderMenu.css";

import MenuButton from "./MenuButton";

function HeaderMenu() {
  return (
    <>
      <div className="MenuContainer">
        <MenuButton label="NEWS" link="/news" />
        <MenuButton label="BLOGS" link="/blogs" />
        <MenuButton label="REPORTS" link="/reports" />
        <MenuButton label="ABOUT" link="/about" />
      </div>
    </>
  );
}

export default HeaderMenu;
