import "./HeaderMenu.css";

import MenuButton from "./MenuButton";

function HeaderMenu() {
  return (
    <>
      <div className="MenuContainer">
        <MenuButton label="NEWS" link="spacenewzz/news" />
        <MenuButton label="BLOGS" link="spacenewzz/blogs" />
        <MenuButton label="REPORTS" link="spacenewzz/reports" />
        <MenuButton label="ABOUT" link="spacenewzz/about" />
      </div>
    </>
  );
}

export default HeaderMenu;
