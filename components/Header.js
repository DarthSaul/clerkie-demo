import { useRouter } from 'next/router';

export default function Header() {
	const router = useRouter();
	const title = router.pathname === '/' ? 'Home' : 'Friends';
	return <div className="w-full p-4 shadow">{title}</div>;
}
