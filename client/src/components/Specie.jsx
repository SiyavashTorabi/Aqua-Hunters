import { Link } from "react-router-dom";
import "./Overlay.css"
const Specie = ({ specie }) => {
  const { id, img_url, name, environment} = specie
  return (
    <div className="specie">
      <Link className="kir" to={`/species/${id}`}>
        <img className="specie-img" src={img_url} alt={name} />

        <div className="specie-overlay">
          
          <h2 className="kir" >{name}</h2>
          <h2 className="kir">{environment.name}</h2>
        
        </div>
      </Link>

    </div>
  );
};
export default Specie;