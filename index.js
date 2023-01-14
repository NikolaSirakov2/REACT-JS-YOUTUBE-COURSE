// ReactDOM.render(<h1>FITNESS SAIT</h1>, document.getElementById("root"));

function MainContent() {
  return <h1>FITNESS SAIT</h1>;
}

function FitnessStuff() {
  return <h3>FITNESS ITEMS</h3>;
}

ReactDOM.render(
  <MainContent />,
//   <FitnessStuff />,

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

// const hola = document.createElement("h1");
// hola.textContent = "THIS IS A TEST";
// hola.className = "header";
// document.getElementById("bar").append(hola);