import {
	MainContainer,
	RenderContainer,
	RenderImage,
	RenderShadow,
	ContentContainer,
	ContentWrapper,
	Heading,
	SubHeading,
	TagLine,
	ActionBtn
} from './HeroSection.style';

const HeroSection = () => {
	return (
		<MainContainer>
			<RenderContainer>
				<RenderImage src='/Mockup.png' alt='Mockup' />
				<RenderShadow></RenderShadow>
			</RenderContainer>
			<ContentContainer>
				<ContentWrapper>
					<Heading>Listening is everything</Heading>
					<SubHeading>A place only for music</SubHeading>
					<TagLine>No Ads, No Disturbance</TagLine>
					<ActionBtn>Player</ActionBtn>
				</ContentWrapper>
			</ContentContainer>
		</MainContainer>
	);
};

export default HeroSection;
