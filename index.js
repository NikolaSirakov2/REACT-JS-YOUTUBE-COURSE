function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="fitnessLogo.jpg" className="image" />
        <ul className="head-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Body() {
  return (
    <div>
      <h1>FITNESS SAIT</h1>
      <h5>FITNESS ITEMS</h5>
      <ul className="fit-items">
        <li>Food</li>
        <li>Suplements</li>
        <li>Clothes</li>
      </ul>
      <p>This is React fitness sait</p>
    </div>
  );
}

function Foot() {
  return (
    <footer>
      <small>© 2023 Nikola development. All rights reserved.</small>
    </footer>
  );
}

function MainContent() {
  return (
    <div>
      <Header />
      <Body />
      <Foot />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("hood")).render(<MainContent />);