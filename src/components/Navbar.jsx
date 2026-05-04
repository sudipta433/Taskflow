export const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <div className="navbar__inner">
        {/* Brand */}
        <div className="navbar__brand">Taskflow</div>

        {/* Active page indicator */}
        <div className="navbar__links">
          <a className="navbar__link navbar__link--active" href="#" id="nav-tasks">
            Tasks
          </a>
        </div>

        {/* Empty right side for balance */}
        <div className="navbar__actions"></div>
      </div>
    </nav>
  );
};
