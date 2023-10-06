import { Paper, IconButton } from '@mui/material';
import { colors } from '../../constants/colors';
import { Search } from '@mui/icons-material';
import { AccountCircle } from '@mui/icons-material';
const SearchBar = () => {
	return (
		<Paper component={'form'} sx={{ border: `1px solid ${colors.secondry}`, pl: 2, marginLeft: '200px', boxShadow: null }}>
			<input type='text' placeholder='Search...' className='search-bar' />
			<IconButton>
				<Search />
			</IconButton>
			<IconButton>
				<AccountCircle />
			</IconButton>
		</Paper>
	);
};

export default SearchBar;
