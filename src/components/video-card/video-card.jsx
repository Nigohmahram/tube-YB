import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { colors } from '../../constants/colors';
import moment from 'moment/moment';
import { CheckCircle } from '@mui/icons-material';

const VideoCard = ({ video }) => {
	console.log(video);
	return (
		<Card sx={{ width: '320px', boxShadow: 'none', borderRadius: '0' }}>
			<CardMedia
				image={video?.snippet?.thumbnails?.high?.url}
				alt={video?.snippet?.title}
				sx={{ width: '450px', height: '250px' }}
			/>
			<CardContent sx={{ background: colors.background, height: '200px', position: 'relative' }}>
				<>
					<Typography my={'-8px'} sx={{ color: 'white', fontWeight: '200', fontSize: '13px' }}>
						{moment(video?.snippet?.publishedAt).fromNow()}
					</Typography>
					<Typography variant='subtitle1' fontWeight={'bold'} sx={{ color: 'white', marginTop: '8px' }}>
						{video?.snippet?.title.slice(0, 30)}
					</Typography>
					<Typography variant='subtitle2' sx={{ color: 'white', opacity: '.4', fontSize: '13px' }}>
						{video?.snippet?.description.slice(0, 70)}
					</Typography>
				</>
				<>
					<Stack direction={'row'} position={'absolute'} bottom={'10px'} alignItems={'center'} gap={'5px'}>
						<Avatar src={video?.snippet?.thumbnails?.high?.url} />
						<Typography variant={'subtitle2'} color={'gray'}>
							{video?.snippet?.channelTitle}
							<CheckCircle sx={{ fontSize: '15px', color: 'gray', ml: '5px', mt: '2px' }} />
						</Typography>
					</Stack>
				</>
			</CardContent>
		</Card>
	);
};

export default VideoCard;
