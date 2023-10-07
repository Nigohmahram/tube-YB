import { Paper, IconButton } from '@mui/material';
import { colors } from '../../constants/colors';
import { Search } from '@mui/icons-material';
import { AccountCircle } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
	const navigate = useNavigate();
	const [value, setValue] = useState('');
	const submitHandler = e => {
		e.preventDefault();
		if (value) {
			navigate(`/search/${value}`);
		}
	};
	return (
		<Paper
			component={'form'}
			onSubmit={submitHandler}
			sx={{ border: `1px solid ${colors.secondry}`, pl: 2, flexWrap: 'wrap', marginLeft: '200px', boxShadow: null }}
		>
			<input type='text' placeholder='Search...' className='search-bar' onChange={e => setValue(e.target.value)} value={value} />
			<IconButton type='submit'>
				<Search />
			</IconButton>
			<IconButton>
				<AccountCircle />
			</IconButton>
		</Paper>
	);
};

export default SearchBar;
