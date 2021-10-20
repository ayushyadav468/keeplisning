import Link from 'next/link';
import {
	MainContainer,
	Heading,
	TagLine,
	ImageContainer,
	BannerImage,
	ActionBtn
} from './SecondaryBanner.style';

const SecondaryBanner = () => {
	return (
		<MainContainer>
			<Heading>Listen to your favourite songs</Heading>
			<TagLine>
				Just drop your music file (*/.mp3 & */.mp4) into the player
			</TagLine>
			<ImageContainer>
				<BannerImage src='/SecondaryBanner.png' alt='Banner' />
				<Link href='/player' passHref>
					<ActionBtn>Player</ActionBtn>
				</Link>
			</ImageContainer>
		</MainContainer>
	);
};

export default SecondaryBanner;
