import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { colors } from '../../constants/colors';
import moment from 'moment/moment';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
	return (
		<Card
			sx={{
				width: { xs: '100%', sm: '360px', md: '320px' },
				justifyContent: 'center',
				alignContent: 'center',
				alignItems: 'center',
				boxShadow: 'none',
				borderRadius: '0',
				cursor: 'pointer',
			}}
		>
			<Link to={`/video/${video.id.videoId}`}>
				<CardMedia
					image={video?.snippet?.thumbnails?.high?.url}
					alt={video?.snippet?.title}
					sx={{ width: { xs: '100%', sm: '100%' }, height: '180px' }}
				/>
			</Link>
			<CardContent sx={{ background: colors.background, height: '160px', position: 'relative' }}>
				<Link to={`/video/${video.id.videoId}`}>
					<Typography my={'-8px'} sx={{ color: 'white', fontWeight: '200', fontSize: '13px' }}>
						{moment(video?.snippet?.publishedAt).fromNow()}
					</Typography>
					<Typography variant='subtitle1' fontWeight={'bold'} sx={{ color: 'white', marginTop: '8px' }}>
						{video?.snippet?.title.slice(0, 30)}
					</Typography>
					<Typography variant='subtitle2' sx={{ color: 'white', opacity: '.4', fontSize: '13px' }}>
						{video?.snippet?.description.slice(0, 70)}
					</Typography>
				</Link>
				<Link to={`/channel/${video?.snippet?.channelId}`}>
					<Stack direction={'row'} position={'absolute'} bottom={'10px'} alignItems={'center'} gap={'5px'}>
						<Avatar src={video?.snippet?.thumbnails?.high?.url} />
						<Typography variant={'subtitle2'} color={'gray'}>
							{video?.snippet?.channelTitle}
							<CheckCircle sx={{ fontSize: '15px', color: 'gray', ml: '5px', mt: '2px' }} />
						</Typography>
					</Stack>
				</Link>
			</CardContent>
		</Card>
	);
};

export default VideoCard;
