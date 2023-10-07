import {
	AddBusiness,
	AddShoppingCart,
	DeveloperMode,
	FaceRetouchingNatural,
	FilterDrama,
	FitnessCenter,
	GraphicEq,
	Home,
	LiveTv,
	MusicNote,
	OndemandVideo,
	School,
	SportsEsports,
	TheaterComedy,
} from '@mui/icons-material';

export const logo = 'https://cdn.iconscout.com/icon/free/png-256/free-video-play-button-461759.png?f=webp';

export const category = [
	{ name: 'New', icon: <Home /> },
	{ name: 'Movie', icon: <OndemandVideo /> },
	{ name: 'Live', icon: <LiveTv /> },
	{ name: 'Gaming', icon: <SportsEsports /> },
	{ name: 'Education', icon: <School /> },
	{ name: 'Sport', icon: <FitnessCenter /> },
	{ name: 'Comedy', icon: <TheaterComedy /> },
	{ name: 'Podcast', icon: <GraphicEq /> },
	{ name: 'Crypto', icon: <DeveloperMode /> },
	{ name: 'Gym', icon: <FitnessCenter /> },
	{ name: 'Beauty', icon: <FaceRetouchingNatural /> },
	{ name: 'Music', icon: <MusicNote /> },
	{ name: 'Dramy', icon: <FilterDrama /> },
	{ name: 'Shopping', icon: <AddShoppingCart /> },
	{ name: 'Business', icon: <AddBusiness /> },
];
