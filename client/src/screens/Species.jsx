
import React from "react";
import { useState, useEffect } from "react"; ////
import Specie from '../components/Specie'
import {getSpecies} from '../services/species'
import "./SpecieList.css"

export default function Species(props) {
  const { specieList, handleDelete } = props;
  console.log(specieList)
  console.log(handleDelete)
  const [species, setSpecies] = useState([]); 
  useEffect(() => {
    const fetchSpecies = async () => {
      const allSpecies = await getSpecies();
      setSpecies(allSpecies);
    };
    fetchSpecies();
  }, []);

  
	return (
    <>
      <div className="species">
        {species.map((specie, index) => {
          
          return (
            <div key={index}>
              <Specie
                
                // id={id}
                // img_url={img_url}
                // environment={environment.name}
                // name={name}
                // key={index}
                specie = {specie}
              />
            </div>
          );
        })}
      </div>
      
    </>
  );
}
