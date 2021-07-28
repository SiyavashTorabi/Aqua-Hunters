import { useState, useEffect } from "react";

import { getOneSpecie, deleteSpecie } from "../services/species";
import { useParams, Link } from "react-router-dom";
import "./SpecieDetail.css"
import { useHistory } from "react-router-dom";

///
const SpecieDetail = (props) => {
  const [specie, setSpecie] = useState(null);
  const [isLoaded, setLoaded] = useState(false);

  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    const fetchSpecie = async () => {
      const specie = await getOneSpecie(id);
      setSpecie(specie);
      setLoaded(true);
    };
    fetchSpecie();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  const handleDelete = async () => {
    const res = await deleteSpecie(id);
    console.log(res);
    history.push("/species");
  };
  console.log(specie);
  return (
    <>
      <div className="species-detail">
        <img
          className="specie-detail-image"
          src={specie.img_url}
          alt={specie.name}
        />

        <div className="details-button-container">
          <div className="detail ">
            <div className="title text-xl">{specie.name}</div>
            <div className="description text-base">{specie.description}</div>
            <div className="price text-sm">{specie.region.name}</div>
            <div className="price text-sm">{specie.environment.name}</div>
          </div>
          <div className="button-container">
            <Link className="details-button" to={`/species/${specie.id}/edit`}>
              Edit
            </Link>
            <button className="details-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecieDetail;
