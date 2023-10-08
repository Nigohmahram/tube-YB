import { Box, LinearProgress, Stack } from '@mui/material';

const Loader = () => {
	return (
		<Box minHeight={'90vh'}>
			<Stack width={'100%'}>
				{' '}
				<LinearProgress />
			</Stack>
		</Box>
	);
};

export default Loader;
