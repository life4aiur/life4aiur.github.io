import { Avatar } from "primereact/avatar";
import ghMarkUrl from "../assets/gh_invertocat.png";
import ghLogoUrl from "../assets/gh_logo.png";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar__content flex-column surface-0 z-5 fixed top-0 bottom-0">
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
          <ul className="flex flex-column flex-1 list-none m-0 px-3 text-lg">
            <li>
              <ul className="list-none m-0 p-0">
                <li className="p-2">
                  <a href="/#about-section">About</a>
                </li>
                <li className="p-2">
                  <a href="/#work-section">Work</a>
                </li>
                <li className="p-2">
                  <a href="/#contact-section">Contact</a>
                </li>
              </ul>
            </li>
            <li className="mt-auto p-2 align-self-center">
              <a href="https://github.com/life4aiur" aria-label="GitHub">
                <div className="flex h-2rem">
                  <img src={ghMarkUrl} alt="GitHub logo"></img>
                  <img
                    className="pl-1"
                    src={ghLogoUrl}
                    alt="GitHub invertocat logo"
                  ></img>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
