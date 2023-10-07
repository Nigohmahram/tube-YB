import { Stack } from '@mui/material';
import { category } from '../../constants';
import { colors } from '../../constants/colors';

const Category = () => {
	return (
		<Stack direction={'row'} sx={{ flexWrap: 'wrap' }}>
			{category.map(item => (
				<button key={item.name} className='category-btn' style={{ borderRadius: '0' }}>
					<span style={{ color: colors.white }}>{item.icon}</span>
					<span className='category-span'>{item.name}</span>
				</button>
			))}
		</Stack>
	);
};

export default Category;
