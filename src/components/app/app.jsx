import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Main, Chanel } from '../';
const App = () => {
	return (
		<Box>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/chanel' element={<Chanel />} />
			</Routes>
		</Box>
	);
};

export default App;
