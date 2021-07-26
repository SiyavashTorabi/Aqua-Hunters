import { useState } from "react";
import "./ProductCreate.css"

import { Redirect } from "react-router-dom";
import { postSpecie } from "../services/species";

const SpecieCreate = (props) => {
  const [specie, setSpecie] = useState({
    name: "",
    description: "",
    img_url: "",
    environment: "",
    region: ""
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...specie,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let newSpecie= specie
    if (!specie.img_url) {
        newSpecie={
        ...newSpecie,
        img_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png",
      };
    }
    const created = await createSpecie(newSpecie);
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
      >
        <input
          className="mt-5 bg-green-200"
          placeholder="name"
          value={specie.name}
          name="name"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="mt-5 bg-green-200"
          placeholder="Image Link"
          value={specie.img_url}
          name="img_url"
          onChange={handleChange}
        />
        <input
          className="mt-5 bg-green-200"
          placeholder="description"
          value={specie.description}
          name="specie"
          required
          onChange={handleChange}
        />
        <textarea
          className="mt-5 bg-green-200"
          rows={10}
          placeholder="Description"
          value={specie.environment}
          name="environment"
          required
          onChange={handleChange}
        />
        <button type="submit" className="create-button">
          Add
        </button>
      </form>
      
    </>
  );
};

export default SpecieCreate;