import { useState } from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { colors } from '../../constants/colors.js';
import { Category } from '../';

const Main = () => {
	const [selectedCategory, setSelectedCategory] = useState('New ');
	return (
		<Stack className='main-bg'>
			<Category />
			<Box p={2} sx={{ height: '90vh' }}>
				<Container maxWidth={'90%'}>
					<Typography variant='h4' fontWeight={'bold'} marginBottom={'2'}>
						{selectedCategory}
						<span style={{ color: colors.mainselected }}>vidios</span>
					</Typography>
					vidios
				</Container>
			</Box>
		</Stack>
	);
};

export default Main;
