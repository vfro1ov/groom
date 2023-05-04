import './DogsList.module.css';


const DogsList = ({dogs}) => {
	return (
		<>
			{dogs.map((breed) => (
				<li key={breed.id}>{breed.name}</li>
			))}
		</>
	);
};

export default DogsList;
