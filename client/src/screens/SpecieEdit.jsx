
import { useParams, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllRegions } from "../services/region";
import { getAllEnvironments } from "../services/environments";

import { getOneSpecie, putSpecie } from "../services/species";

const SpecieEdit = (props) => {

  const [regions, setRegions] = useState([]);
  const [environments, setEnvironments] = useState([]);

  const [specie, setSpecie] = useState({
    name: "",
    description: "",
    img_url: ""
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchSpecie = async () => {
      const specie= await getOneSpecie(id);
      setSpecie(specie);
    };
    fetchSpecie();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSpecie({
      ...specie,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchDropDowns = async () => {
      const regions = await getAllRegions();
      const environments = await getAllEnvironments();
      setRegions(regions);
      setEnvironments(environments);
    };
    fetchDropDowns();
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await putSpecie(id, specie);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/species/${id}`} />;
  }

  



  return (
    <>
    <form
      className="flex "
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <input
        className="mt"
        placeholder="name"
        value={specie.name}
        name="name"
        required
      />
      <input
        className="mt"
        placeholder="Image Link"
        value={specie.img_url}
        name="img_url"
      />
      <input
        className="mt-d"
        placeholder="description"
        value={specie.description}
        name="description"
        required
      />

      <select name="region_id">
        <option default hidden required>
          select the region
        </option>
        {regions &&
          regions.map((region) => (
            <option value={region.id}>{region.name}</option>
          ))}
      </select>

      <select name="environment_id">
        <option default hidden required>
          select the environment
        </option>
        {environments &&
          environments.map((environment) => (
            <option value={environment.id}>{environment.name}</option>
          ))}
      </select>

      <button type="submit" className="create-button">
        Edit
      </button>
    </form>
  </>
  );
};

export default SpecieEdit;
