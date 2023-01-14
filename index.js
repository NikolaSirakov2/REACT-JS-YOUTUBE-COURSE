// ReactDOM.render(<h1>FITNESS SAIT</h1>, document.getElementById("root"));

function MainContent() {
  return <h1>FITNESS SAIT</h1>;
}

function FitnessStuff() {
  return <h3>FITNESS ITEMS</h3>;
}

ReactDOM.render(
  <MainContent />,

  document.getElementById("root")
);

ReactDOM.render(
  <FitnessStuff />,

  document.getElementById("bar")
);

const page = (
  <nav>
    <ul>
      <li>Food</li>
      <li>Suplements</li>
      <li>Clothes</li>
    </ul>
  </nav>
);

ReactDOM.render(page, document.getElementById("hood"));

