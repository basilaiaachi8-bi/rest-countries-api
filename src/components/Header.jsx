import "./Header.css";

function Header({ theme, toggleTheme }) {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Where in the world?</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-5.4-5.4c0-1.81.89-3.42 2.26-4.4C12.92 3.04 12.46 3 12 3z" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
          <span>Dark Mode</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
