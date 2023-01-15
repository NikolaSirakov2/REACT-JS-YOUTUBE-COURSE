function HeaderEle() {
  return (
    <header>
      <nav>
        <img src="fitnessLogo.jpg" width="190px" />
        <h1>FITNESS SAIT</h1>
      </nav>
    </header>
  );
}

function Body() {
  return (
    <div>
      <h5>FITNESS ITEMS</h5>
      <ul>
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
      <HeaderEle />
      <Body />
      <Foot />
    </div>
  );
}

// ReactDOM.createRoot(document.getElementById("root")).render(<HeaderEle />);
ReactDOM.createRoot(document.getElementById("hood")).render(<MainContent />);
// ReactDOM.createRoot(document.getElementById("para")).render(<Foot />);
