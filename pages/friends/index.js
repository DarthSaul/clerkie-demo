import FriendsList from '@/components/FriendsList';
import FriendsSkeleton from '@/components/FriendsSkeleton';
import { useEffect, useState } from 'react';
import getData from '@/lib/getData.js';
import { MdTune } from 'react-icons/md';
import styles from '@/styles/Friends.module.css';

export default function Friends() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			const response = await getData();
			setData(response.results);
			setLoading(false);
		}
		fetchData();
	}, []);
	return (
		<>
			<div className="flex mb-4">
				<div className="rounded-full border px-2 text-slate-700">
					<MdTune className={styles.filter} />
				</div>
			</div>
			{loading ? (
				[...Array(5)].map((e, i) => (
					<FriendsSkeleton key={i} />
				))
			) : (
				<FriendsList friends={data} />
			)}
		</>
	);
}
