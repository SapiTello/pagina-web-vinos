import { Link } from "react-router-dom";
import "../App.css";
function Home() {
  return (
    <div className="form_container">
      <div className="form_header">
        <h1 className="form_title">Pagina de Inicio</h1>
      </div>
      <div className="form_body">
        <li>
          <Link to={"/about/macbook"}>Estas en hola mundo mensaje</Link>
        </li> 
      </div>
    </div>
  );
}

export default Home;
