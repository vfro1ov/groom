import TextField from '@mui/material/TextField'
import './SearchInputDogs.module.css';

const SearchInputDogs = ({search,setSearch}) => {
	const onChangeDogs = (event) => {
		const value = event.target.value
		setSearch(value)
	}
	return (
		<>
		<input type="text" value={search} onChange={onChangeDogs}/>

		{/* <TextField id="outlined-basic" label="Порода" variant="outlined" value={search} onChange={onChangeDogs} /> */}
		</>
	);
}

export default SearchInputDogs;