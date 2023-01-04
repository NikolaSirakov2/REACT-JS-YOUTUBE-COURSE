const page = (
    <nav>
        <h1>Dragon Fitness</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);

ReactDOM.render(
  page,
  document.getElementById("root")
);

ReactDOM.render(
  <ul>
    <li>Gym</li>
    <li>Protein</li>
  </ul>,
  document.getElementById("hood") 
);

// function MainContent() {
//     return (
//         <h1>Navbar testing!</h1>
//     )
// };

// ReactDOM.render(
//     <div>
//         <Navbar />
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// );