import {useState} from 'react'
import TabDogs from '../../components/DogsPage/TabDogs/';
import SearchInputDogs from '../../components/DogsPage/SearchInputDogs';
import DogsList from '../../components/DogsPage/DogsList'
import styles from './DogsPage.module.css';



const DogsPage = () => {
	const [dogs,setDogs] = useState('')
	const [search, setSearch] = useState('');

	const getResponse = async (url) => {
		const res = await getApiResource(url)
	}
	return (
		<>
		<div className={styles.wrapper}>
			<h2>Стрижка Собак</h2>
			<div className={styles.tabs}>
				<TabDogs />
				<SearchInputDogs setSearch={setSearch} search={search}/>
			</div>
			<div>
					<h3>Породы:</h3>
				{search.length ? <DogsList dogs={dogs}/> : <h2>no</h2>}
				</div>
			dogs
			</div>
		</>
	);
};

export default DogsPage;
