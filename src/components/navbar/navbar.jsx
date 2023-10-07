import { Stack, Box } from '@mui/material';
import { logo } from '../../constants';
import { colors } from '../../constants/colors';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { SearchBar } from '../';
import { Home } from '@mui/icons-material';
import { NightsStay, NotificationsNone } from '@mui/icons-material';

const Navbar = () => {
	return (
		<Stack
			direction={'row'}
			alignItems={'center'}
			justifyContent={'space-between'}
			p={3}
			sx={{ position: 'sticky', top: 0, zIndex: 999, background: colors.primary }}
		>
			<Link to={'/'}>
				<img src={logo} alt='logo' height={50} width={50} />
			</Link>
			<SearchBar />
			<Box />
			<Box>
				<NightsStay sx={{ width: '35px', height: '35px', mr: '5px', color: 'aqua' }} />
				<NotificationsNone sx={{ width: '35px', height: '35px', mr: '5px', color: '#80a5f5' }} />
				<Link to={'/'}>
					<Home sx={{ width: '35px', height: '35px', color: 'white' }} />
				</Link>
			</Box>
		</Stack>
	);
};

export default Navbar;
