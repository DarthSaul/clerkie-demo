import NavLogoTitle from './NavLogoTitle';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdOutlineSpaceDashboard, MdCatchingPokemon } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import styles from '@/styles/Nav.module.css';

const NavDrawer = ({ close }) => {
	const router = useRouter();
	return (
		<div className={`bg-dark-blue text-white h-full`}>
			<div className={`flex flex-col ${styles.content}`}>
				{/* Logo Title */}
				<div className="px-3">
					<NavLogoTitle />
				</div>

				{/* Nav Item 1 */}
				<div
					className={`px-3 rounded-md grid content-center ${
						styles['nav-item']
					} ${
						router.pathname == '/'
							? 'bg-gray_1000'
							: ''
					}`}
				>
					<Link
						href="/"
						onClick={
							close
								? (e) => close()
								: undefined
						}
					>
						<div className="flex items-center">
							<div
								className={
									styles[
										'nav-icon'
									]
								}
							>
								<MdOutlineSpaceDashboard />
							</div>
							<div>Home</div>
						</div>
					</Link>
				</div>

				{/* Nav Item 2 */}
				<div
					className={`px-3 rounded-md grid content-center ${
						styles['nav-item']
					} ${
						router.pathname == '/friends' ||
						router.pathname ==
							'/friends/[friend]'
							? 'bg-gray_1000'
							: ''
					}`}
				>
					<Link
						href="/friends"
						onClick={
							close
								? (e) => close()
								: undefined
						}
					>
						<div className="flex items-center">
							<div
								className={
									styles[
										'nav-icon'
									]
								}
							>
								<FaUserFriends />
							</div>
							<div>Friends</div>
						</div>
					</Link>
				</div>

				{/* Nav Item 3 */}
				<div
					className={`px-3 rounded-md grid content-center ${
						styles['nav-item']
					}  ${
						router.pathname == '/pokemon'
							? 'bg-gray_1000'
							: ''
					}`}
				>
					<Link
						href="/pokemon"
						onClick={
							close
								? (e) => close()
								: undefined
						}
					>
						<div className="flex items-center">
							<div
								className={
									styles[
										'nav-icon'
									]
								}
							>
								<MdCatchingPokemon />
							</div>
							<div>Pokemon</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NavDrawer;
