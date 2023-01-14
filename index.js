// ReactDOM.render(<h1>FITNESS SAIT</h1>, document.getElementById("root"));

function MainContent() {
    return <h1>Hello</h1>
} 

ReactDOM.render(
    <div>
    <MainContent />
    </div>,
    document.getElementById("root")
    
)

ReactDOM.render(
  <nav>
    <ul>
      <li>Food</li>
      <li>Suplements</li>
      <li>Clothes</li>
    </ul>
  </nav>,
  document.getElementById("hood"));

const hola = document.createElement("h1");
hola.textContent = "THIS IS A TEST";
hola.className = "header";
document.getElementById("bar").append(hola);