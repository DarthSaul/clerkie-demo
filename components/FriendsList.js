import StatusBadge from './StatusBadge';
import Link from 'next/link';
import styles from '@/styles/Friends.module.css';

export default function FriendsList({ friends }) {
	return (
		<>
			{friends.map((el, ind) => (
				<Link href={`/friends/${ind}`} key={ind}>
					<div
						className={`border border-gray_400 w-full rounded-md p-6 mb-4 grid content-center ${styles['friend-item']}`}
					>
						<div className="flex flex-row items-center gap-2 mb-3">
							<div className="text-base font-bold">
								{el.name}
							</div>
							<div>
								<StatusBadge
									type={
										el.friend_type
									}
								/>
							</div>
						</div>
						<div className="flex flex-row items-center gap-1 text-gray_600 font-medium">
							<div>{el.email}</div>
							<div>•</div>
							<div>
								{
									el.phone_number
								}
							</div>
						</div>
					</div>
				</Link>
			))}
		</>
	);
}
