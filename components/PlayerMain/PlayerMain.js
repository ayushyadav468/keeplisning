import React from 'react';
import {
	Container,
	Welcome,
	ContentWrapper,
	Heading,
	SubHeading,
	Logo,
	MainContent,
	Card,
	ActiveCard,
	SongImage,
	SongDetail,
	SongName,
	SongBy,
	SongDuration
} from './PlayerMain.style';

const PlayerMain = () => {
	return (
		<Container>
			<Welcome>
				<ContentWrapper>
					<Heading>Welcome to Keeplisning</Heading>
					<SubHeading>No ads, No worries, Only music</SubHeading>
				</ContentWrapper>
				<Logo src='/logo.svg' />
			</Welcome>
			<Heading>Files</Heading>
			<MainContent>
				<ActiveCard>
					<SongImage src='/DefaultSongImage.png' alt='Song Image' />
					<SongDetail>
						<SongName>Kaun Tujhe</SongName>
						<SongBy>Arijit Singh</SongBy>
					</SongDetail>
					<SongDuration>03:42</SongDuration>
				</ActiveCard>
				<Card>
					<SongImage src='/DefaultSongImage.svg' alt='Song Image' />
					<SongDetail>
						<SongName>Kaun Tujhe</SongName>
						<SongBy>Arijit Singh</SongBy>
					</SongDetail>
					<SongDuration>03:42</SongDuration>
				</Card>
				<Card>
					<SongImage src='/DefaultSongImage.svg' alt='Song Image' />
					<SongDetail>
						<SongName>Kaun Tujhe</SongName>
						<SongBy>Arijit Singh</SongBy>
					</SongDetail>
					<SongDuration>03:42</SongDuration>
				</Card>
				<Card>
					<SongImage src='/DefaultSongImage.svg' alt='Song Image' />
					<SongDetail>
						<SongName>Kaun Tujhe</SongName>
						<SongBy>Arijit Singh</SongBy>
					</SongDetail>
					<SongDuration>03:42</SongDuration>
				</Card>
				<Card>
					<SongImage src='/DefaultSongImage.svg' alt='Song Image' />
					<SongDetail>
						<SongName>Kaun Tujhe</SongName>
						<SongBy>Arijit Singh</SongBy>
					</SongDetail>
					<SongDuration>03:42</SongDuration>
				</Card>
				<Card>
					<SongImage src='/DefaultSongImage.svg' alt='Song Image' />
					<SongDetail>
						<SongName>Kaun Tujhe</SongName>
						<SongBy>Arijit Singh</SongBy>
					</SongDetail>
					<SongDuration>03:42</SongDuration>
				</Card>
				<Card>
					<SongImage src='/DefaultSongImage.svg' alt='Song Image' />
					<SongDetail>
						<SongName>Kaun Tujhe</SongName>
						<SongBy>Arijit Singh</SongBy>
					</SongDetail>
					<SongDuration>03:42</SongDuration>
				</Card>
				<Card>
					<SongImage src='/DefaultSongImage.svg' alt='Song Image' />
					<SongDetail>
						<SongName>Kaun Tujhe</SongName>
						<SongBy>Arijit Singh</SongBy>
					</SongDetail>
					<SongDuration>03:42</SongDuration>
				</Card>
				<Card>
					<SongImage src='/DefaultSongImage.svg' alt='Song Image' />
					<SongDetail>
						<SongName>Kaun Tujhe</SongName>
						<SongBy>Arijit Singh</SongBy>
					</SongDetail>
					<SongDuration>03:42</SongDuration>
				</Card>
				<Card>
					<SongImage src='/DefaultSongImage.svg' alt='Song Image' />
					<SongDetail>
						<SongName>Kaun Tujhe</SongName>
						<SongBy>Arijit Singh</SongBy>
					</SongDetail>
					<SongDuration>03:42</SongDuration>
				</Card>
				<Card>
					<SongImage src='/DefaultSongImage.svg' alt='Song Image' />
					<SongDetail>
						<SongName>Kaun Tujhe</SongName>
						<SongBy>Arijit Singh</SongBy>
					</SongDetail>
					<SongDuration>03:42</SongDuration>
				</Card>
				<Card>
					<SongImage src='/DefaultSongImage.svg' alt='Song Image' />
					<SongDetail>
						<SongName>Kaun Tujhe</SongName>
						<SongBy>Arijit Singh</SongBy>
					</SongDetail>
					<SongDuration>03:42</SongDuration>
				</Card>
				<Card>
					<SongImage src='/DefaultSongImage.svg' alt='Song Image' />
					<SongDetail>
						<SongName>Kaun Tujhe</SongName>
						<SongBy>Arijit Singh</SongBy>
					</SongDetail>
					<SongDuration>03:42</SongDuration>
				</Card>
				<Card>
					<SongImage src='/DefaultSongImage.svg' alt='Song Image' />
					<SongDetail>
						<SongName>Kaun Tujhe</SongName>
						<SongBy>Arijit Singh</SongBy>
					</SongDetail>
					<SongDuration>03:42</SongDuration>
				</Card>
				<Card>
					<SongImage src='/DefaultSongImage.svg' alt='Song Image' />
					<SongDetail>
						<SongName>Kaun Tujhe</SongName>
						<SongBy>Arijit Singh</SongBy>
					</SongDetail>
					<SongDuration>03:42</SongDuration>
				</Card>
				<Card>
					<SongImage src='/DefaultSongImage.svg' alt='Song Image' />
					<SongDetail>
						<SongName>Kaun Tujhe</SongName>
						<SongBy>Arijit Singh</SongBy>
					</SongDetail>
					<SongDuration>03:42</SongDuration>
				</Card>
			</MainContent>
		</Container>
	);
};

export default PlayerMain;
