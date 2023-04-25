import './DogsList.module.css';

const breedOfDogs = [
	{ id: 1, name: 'Мальтезе' },
	{ id: 2, name: 'Шпиц' },
	{ id: 3, name: 'Овчарка' },
	{ id: 4, name: 'мопс' },
];

const DogsList = () => {
	return (
		<>
			{breedOfDogs.map((breed) => (
				<li key={breed.id}>{breed.name}</li>
			))}
		</>
	);
};

export default DogsList;
