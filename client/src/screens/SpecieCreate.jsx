import { useState, useEffect } from "react";

import { getAllRegions } from "../services/region";
import { getAllEnvironments } from "../services/environments";
import { Redirect } from "react-router-dom";
import { postSpecie } from "../services/species";

const SpecieCreate = (props) => {
  const [isCreated, setCreated] = useState(false);
  const [regions, setRegions] = useState([]);
  const [environments, setEnvironments] = useState([]);
  const [specie, setSpecie] = useState({
    name: "",
    description: "",
    img_url: ""
  });

  useEffect(() => {
    const fetchDropDowns = async () => {
      const regions = await getAllRegions();
      const environments = await getAllEnvironments();
      setRegions(regions);
      setEnvironments(environments);
    };
    fetchDropDowns();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSpecie({
      ...specie,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let newSpecie = specie;
    if (!specie.img_url) {
      newSpecie = {
        ...newSpecie,
        img_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",
      };
    }
    const created = await postSpecie(newSpecie);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/species`} />;
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
          Add
        </button>
      </form>
    </>
  );
};

export default SpecieCreate;
