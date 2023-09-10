import DivContainer from "../animation components/DivContainer";
import InlineLink from "../components/InlineLink";
import SocialLinks from "../components/SocialLinks";

const Footer = () => {
	return (
		<footer className="p-[15px] flex flex-col items-center text-center">
			<DivContainer className="md:hidden">
				<SocialLinks />
			</DivContainer>
			<DivContainer className="space-y-1 text-[13px] tracking-wide">
				<a
					href="https://hanifdev.com"
					target="_blank"
					rel="noreferrer"
					className="transition-normal hover:text-green"
				>
					Built by Hanif Adeyemi
				</a>
				<p>
					Design inspired by{" "}
					<InlineLink
						href="https://v4.brittanychiang.com/"
						text="Brittany Chiang"
					/>
				</p>
			</DivContainer>
		</footer>
	);
};

export default Footer;
