import Image from 'next/image';

const NavLogoTitle = () => {
	return (
		<div className="flex items-center">
			<div className="mr-3">
				<Image
					src="/clerkie-logo-blue.png"
					alt="clerkie logo"
					width={22}
					height={22}
					priority
				/>
			</div>

			<div>Clerkie Challenge</div>
		</div>
	);
};

export default NavLogoTitle;
