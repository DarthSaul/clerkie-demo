import Image from 'next/image';
import styles from '@/styles/Nav.module.css';

const NavLogoTitle = () => {
	return (
		<div className={`flex items-center ${styles['logo-wrapper']}`}>
			<div className={styles['logo']}>
				<Image
					src="/clerkie-logo-blue.png"
					alt="clerkie logo"
					width={20}
					height={20}
				/>
			</div>

			<div className="font-semibold">Clerkie Challenge</div>
		</div>
	);
};

export default NavLogoTitle;
