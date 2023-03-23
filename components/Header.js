import { useRouter } from 'next/router';
import styles from '@/styles/Nav.module.css';
import { MdMenu } from 'react-icons/md';

export default function Header({ open }) {
	const router = useRouter();
	const title = router.pathname === '/' ? 'Home' : 'Friends';
	return (
		<div className="w-full p-4 shadow">
			<div className="flex items-center">
				<div
					className={`mr-3 ${styles.open}`}
					onClick={(e) => open()}
				>
					<MdMenu />
				</div>
				<div>{title}</div>
			</div>
		</div>
	);
}
