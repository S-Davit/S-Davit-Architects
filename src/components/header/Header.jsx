import HeaderNav from "./header-nav/HeaderNav";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="/">
          <span>BR</span>
          <p>Architects</p>
        </a>
      </div>
      <HeaderNav />
    </header>
  );
};

export default Header;
