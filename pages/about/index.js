import Link from 'next/link';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import {
	AboutContainer,
	Heading,
	Content,
	LinkContainer,
	ContactLink
} from './AboutStyles.style';

const Index = () => {
	return (
		<>
			<Navbar />
			<AboutContainer>
				<Heading>About KeepLisning</Heading>
				<Content>
					{
						"All I've got to do is pass as an ordinary human being. Simple. What could possibly go wrong? You hit me with a cricket bat. I'm nobody's taxi service; I'm not gonna be there to catch you every time you feel like jumping out of a spaceship. You've swallowed a planet! You know when grown-ups tell you 'everything's going to be fine' and you think they're probably lying to make you feel better? No… It's a thing; it's like a plan, but with more greatness. Stop talking, brain thinking. Hush. You hit me with a cricket bat. You've swallowed a planet! No… It's a thing; it's like a plan, but with more greatness. You know when grown-ups tell you 'everything's going to be fine' and you think they're probably lying to make you feel better? The way I see it, every life is a pile of good things and bad things.…hey.…the good things don't always soften the bad things; but vice-versa the bad things don't necessarily spoil the good things and make them unimportant."
					}
				</Content>
				<LinkContainer>
					<Link href='https://ayushy.dev' passHref>
						<ContactLink title='Contact Ayush Yadav'>
							Contact Developer
						</ContactLink>
					</Link>
					<Link href='https://github.com/ayushyadav468/keeplisning' passHref>
						<ContactLink title='Github Repository of KeepLisning'>
							See Code
						</ContactLink>
					</Link>
				</LinkContainer>
			</AboutContainer>
			<Footer />
		</>
	);
};

export default Index;
