import { Link } from "react-router-dom";

const Specie = ({ specie }) => {
  const { id, img_url, name, environment, region } = specie
  return (
    <div className="specie">
      <Link to={`/species/${id}`}>
        <img className="specie-img" src={img_url} alt={name} />

        <div className="specie-overlay">
          {/* <div className="">{name}</div> */}
          <h1>{name}</h1>
          <h2>{environment.name}</h2>
        
          {/* <p className="">{description}</p> */}
        </div>
      </Link>

    </div>
  );
};
export default Specie;