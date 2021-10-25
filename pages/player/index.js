import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'utils/axiosInstance';

import Sidebar from '@/component/Sidebar/Sidebar';
import PlayerNavbar from '@/component/PlayerNavbar/PlayerNavbar';
import Drop from '@/component/Drop/Drop';
import PlayerMain from '@/component/PlayerMain/PlayerMain';
import AudioPlayer from '@/component/AudioPlayer/AudioPlayer';

// import isAuth from 'utils/HOC/isAuth';
import useAuth from 'utils/Hooks/useAuth';

import {
	GridContainer,
	SideBarContainer,
	PlayerNavbarContainer,
	MainContainer
} from 'styles/Index.style';

const Index = () => {
	const [verifed, setVerifed] = useState(false);
	const router = useRouter();
	const code = router.query.code; // SpotifyCode
	const accessToken = useAuth(code);

	useEffect(() => {
		if (!accessToken) {
			router.push('/login'); // Change url to /player
		} else {
			setVerifed(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [accessToken]);

	return (
		<GridContainer>
			<SideBarContainer>
				<Sidebar />
			</SideBarContainer>
			{/* <PlayerNavbarContainer>
				<PlayerNavbar changeHome={homeChangeHandler} />
			</PlayerNavbarContainer> */}
			<MainContainer>
				{verifed ? <PlayerMain /> : <h2>Please Login</h2>}
			</MainContainer>
			<AudioPlayer currentSong={''} />
		</GridContainer>
	);
};

export default Index;
