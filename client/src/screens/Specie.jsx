import { Link } from 'react-router-dom';
import React from "react";


export default function Species(props) {
	const { specieList, handleDelete } = props;

	return (
		<div>
			<h3>Species</h3>
			{specieList.map((specie) => (
				<div key={specie.id}>
					<p>{specie.name}</p>
          <Link to={`/specie/${specie.id}/edit`}><button>Edit</button></Link>
					<button onClick={() => handleDelete(specie.id)}>Delete</button>
				</div>
			))}
			<Link to='/species/new'>
				<button>Create</button>
			</Link>
		</div>
	);
}
