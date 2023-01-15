// ReactDOM.render(<h1>FITNESS SAIT</h1>, document.getElementById("root"));

function MainContent() {
  return (
    <div>
        <img src="fitnessLogo.jpg" width="190px"/>
      <h1>FITNESS SAIT</h1>
      <h3>FITNESS ITEMS</h3>
      <ul>
        <li>Food</li>
        <li>Suplements</li>
        <li>Clothes</li>
      </ul>
      <p>This is React fitness sait</p>
    </div>
  );
}



ReactDOM.createRoot(document.getElementById("root")).render(<MainContent />);