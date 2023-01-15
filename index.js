// ReactDOM.render(<h1>FITNESS SAIT</h1>, document.getElementById("root"));

function MainContent() {
  return (
    <div>
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

// ReactDOM.createRoot(document.getElementById("bar")).render(<FitnessStuff />);

// const page = (
//   <nav>
//     <ul>
//       <li>Food</li>
//       <li>Suplements</li>
//       <li>Clothes</li>
//     </ul>
//   </nav>
// );

// const paragraf = (
//   <nav>
//     <p>This is React fitness sait</p>
//   </nav>
// );

// ReactDOM.createRoot(document.getElementById("hood")).render(page);

// ReactDOM.createRoot(document.getElementById("para")).render(paragraf);
