
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
      className="flex space-y-6 flex-col justify-center items-center border-8 border-black-100 mb-52 bg-green-500"
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <input
        className="mt-5 bg-green-200"
        placeholder="name"
        value={specie.name}
        name="name"
        required
      />
      <input
        className="mt-5 bg-green-200"
        placeholder="Image Link"
        value={specie.img_url}
        name="img_url"
      />
      <input
        className="mt-5 bg-green-200"
        placeholder="description"
        value={specie.description}
        name="description"
        required
      />
      {/* <textarea
        className="mt-5 bg-green-200"
        rows={10}
        placeholder="environment"
        value={specie.environment.name}
        name="environment"
        required
        onChange={handleChange}
      />
      <textarea
        className="mt-5 bg-green-200"
        rows={10}
        placeholder="region"
        value={specie.region.name}
        name="region"
        required
        onChange={handleChange}
      /> */}

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
