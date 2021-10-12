import Link from 'next/link';
import {
	FooterContainer,
	FooterWrapper,
	FooterHeading,
	FooterContent,
	FooterLink
} from './Footer.style';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrapper>
				<FooterHeading>Keeplisning</FooterHeading>
				<FooterContent>
					{
						"Keeplisning is a player for listening music without ads. You can drop your music '*/.mp3' files into the drop zone of player. If you have any suggestion regarding this player and website feel free to contact the developer. Links are given in Footer's Contacts section. Thank You"
					}
				</FooterContent>
			</FooterWrapper>
			<FooterWrapper paddingLeft={5}>
				<FooterHeading>Contact</FooterHeading>
				<Link href='/' passHref>
					<FooterLink>Linkedin</FooterLink>
				</Link>
				<Link href='/' passHref>
					<FooterLink>Twitter</FooterLink>
				</Link>
			</FooterWrapper>
			<FooterWrapper paddingLeft={5}>
				<FooterHeading>Links</FooterHeading>
				<Link href='/player' passHref>
					<FooterLink>Player</FooterLink>
				</Link>
				<Link href='/login' passHref>
					<FooterLink>Login | Sign Up</FooterLink>
				</Link>
				<Link href='/about' passHref>
					<FooterLink>About</FooterLink>
				</Link>
			</FooterWrapper>
		</FooterContainer>
	);
};

export default Footer;
