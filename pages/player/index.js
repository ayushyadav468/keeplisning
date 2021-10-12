import { useState } from 'react';
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
} from './Index.style';

const Index = () => {
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
			<AudioPlayer filePath={'/RaataanLambiyan.mp3'} />
		</GridContainer>
	);
};

export default Index;
