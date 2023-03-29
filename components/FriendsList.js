import StatusBadge from './StatusBadge';
import Link from 'next/link';

export default function FriendsList({ friends }) {
	return (
		<div>
			{friends.map((el, ind) => (
				<Link href={`/friends/${ind}`} key={ind}>
					<div className="border-gray_400 w-full border rounded-md p-6 mb-4">
						<div className="flex flex-row items-center gap-2 mb-2">
							<div className="text-xl font-bold">
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
						<div className="flex flex-row items-center gap-1 text-slate-400">
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
		</div>
	);
}
