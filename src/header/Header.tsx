import "./Header.scss";

import { Avatar } from "primereact/avatar";

function Header() {
  return (
    <header className="flex justify-content-between flex-wrap bg-blue-900">
      <h3 className="flex align-items-center justify-content-center m-2">Always under construction</h3>
      <Avatar className="flex align-items-center justify-content-center m-2" size="large" shape="circle" image="https://avatars.githubusercontent.com/u/17767531"/>
    </header>
  );
}

export default Header;
