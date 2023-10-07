import { Stack } from '@mui/material';
import { category } from '../../constants';
import { colors } from '../../constants/colors';

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
	return (
		<Stack direction={'row'} sx={{ flexWrap: 'wrap', borderBottom: '1px dotted white' }}>
			{category.map(item => (
				<button
					key={item.name}
					className='category-btn'
					style={{
						borderRadius: '0',
						backgroundColor: item.name === selectedCategory && 'rgba(187, 170, 204, 0.356)',
						color: item.name === selectedCategory && 'black',
					}}
					onClick={() => selectedCategoryHandler(item.name)}
				>
					<span
						style={{
							color: colors.white,
						}}
					>
						{item.icon}
					</span>
					<span className='category-span'>{item.name}</span>
				</button>
			))}
		</Stack>
	);
};

export default Category;
