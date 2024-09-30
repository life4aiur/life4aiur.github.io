import { Avatar } from "primereact/avatar";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar__content flex-column bg-blue-900 z-5 fixed top-0 bottom-0">
      <div className="flex flex-column flex-grow-1 p-2 gap-3 overflow-y-auto">
        <Avatar
          className="flex flex-shrink-0 align-self-center m-2 w-7 h-auto"
          size="xlarge"
          shape="circle"
          image="https://avatars.githubusercontent.com/u/17767531"
        />
        <p className="flex flex-column px-2">
          <h3 className="align-self-center">Hello there!</h3>
          My name is Andrew. I'm a software developer with a passion for
          front-end development, Star Wars, and generally silly things.
        </p>
        <nav className="flex flex-column flex-1">
          <ul className="flex flex-column flex-1">
            <li>
              <ul>
                <li>About</li>
                <li>Work</li>
                <li>Contact</li>
              </ul>
            </li>
            <li className="mt-auto">Github</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
