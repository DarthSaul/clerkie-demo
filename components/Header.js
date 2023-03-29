import { useRouter } from 'next/router';
import styles from '@/styles/Nav.module.css';
import { MdMenu, MdOutlineArrowForwardIos } from 'react-icons/md';
import Link from 'next/link';

export default function Header({ open }) {
	const router = useRouter();

	// Would need to be improved for scalability
	const title =
		router.pathname === '/'
			? 'Home'
			: router.pathname === '/pokemon'
			? 'Pokemon'
			: 'Friends';

	const { friend } = router.query;

	return (
		<div className={`w-full grid content-center ${styles.header}`}>
			<div className="flex items-center">
				<div
					className={`mr-3 ${styles.open}`}
					onClick={(e) => open()}
				>
					<MdMenu />
				</div>
				<div className="mr-2 font-bold text-lg">
					<Link
						href={`/${
							title === 'Home'
								? ''
								: 'friends'
						}`}
					>
						{title}
					</Link>
				</div>
				{friend && (
					<>
						<div className="mr-2 text-slate-400 text-sm">
							<MdOutlineArrowForwardIos />
						</div>
						<div>
							Friend ID:{' '}
							<strong>
								{friend}
							</strong>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
