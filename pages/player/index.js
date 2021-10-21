import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'utils/axiosInstance';

import Sidebar from '@/component/Sidebar/Sidebar';
import PlayerNavbar from '@/component/PlayerNavbar/PlayerNavbar';
import Drop from '@/component/Drop/Drop';
import PlayerMain from '@/component/PlayerMain/PlayerMain';
import AudioPlayer from '@/component/AudioPlayer/AudioPlayer';

import {
	GridContainer,
	SideBarContainer,
	PlayerNavbarContainer,
	MainContainer
} from 'styles/Index.style';

const Index = () => {
	const router = useRouter();
	const code = router.query.code; // SpotifyCode

	useEffect(() => {
		if (code) {
			axios
				.post('/auth/login', {
					code
				})
				.then((data) => console.log(data))
				.catch((error) => console.log(error));
		}
		router.push('/player'); // Change url to /player
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [code]);

	// Home section or drop zone section
	const [isHome, setIsHome] = useState(true);

	const homeChangeHandler = (bool) => {
		if (bool !== isHome) {
			// don't change state is already on Home or DropZone section
			setIsHome(bool);
		}
	};

	return (
		<GridContainer>
			<SideBarContainer>
				<Sidebar changeHome={homeChangeHandler} />
			</SideBarContainer>
			{/* <PlayerNavbarContainer>
				<PlayerNavbar changeHome={homeChangeHandler} />
			</PlayerNavbarContainer> */}
			<MainContainer>{isHome ? <PlayerMain /> : <Drop />}</MainContainer>
			<AudioPlayer currentSong={'/RaataanLambiyan.mp3'} />
		</GridContainer>
	);
};

export default Index;
