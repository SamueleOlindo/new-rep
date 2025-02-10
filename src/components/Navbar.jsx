import "./Navbar.css";

function Navbar() {
  const listaMenu = ["Home", "Chi siamo", "Consulenza", "Contatti"];
  return (
    <nav>
      <ul style={{color:'white'}}>
        {listaMenu.map((elemento, index) => (
          <li key={index}>{elemento}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
