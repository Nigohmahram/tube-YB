import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Main, Chanel, Navbar, VideoDetail, Search } from '../';
const App = () => {
	return (
		<Box>
			<Navbar />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/chanel/:id' element={<Chanel />} />
				<Route path='/vidio/:id' element={<VideoDetail />} />
				<Route path='/search/:id' element={<Search />} />
			</Routes>
		</Box>
	);
};

export default App;
