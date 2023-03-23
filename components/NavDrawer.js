import NavLogoTitle from './NavLogoTitle';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';

const NavDrawer = () => {
	const router = useRouter();
	console.log(router);
	return (
		<div className="flex flex-col bg-dark-blue text-white h-full p-5">
			<div className="mb-5 p-1">
				<NavLogoTitle />
			</div>

			<div
				className={`mb-4 p-2 rounded-md ${
					router.pathname == '/'
						? 'bg-neutral-700/50'
						: ''
				}`}
			>
				<Link href="/">
					<div className="flex items-center">
						<div className="mr-2">
							<MdOutlineSpaceDashboard />
						</div>
						<div>Home</div>
					</div>
				</Link>
			</div>

			<div
				className={`mb-4 p-2 rounded-md ${
					router.pathname == '/friends' ||
					router.pathname == '/friends/[friend]'
						? 'bg-neutral-700/50'
						: ''
				}`}
			>
				<Link href="/friends">
					<div className="flex items-center">
						<div className="mr-2">
							<FaUserFriends />
						</div>
						<div>Friends</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default NavDrawer;
