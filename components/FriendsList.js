import StatusBadge from './StatusBadge';

export default function FriendsList({ friends }) {
	return (
		<div>
			{friends.map((el, ind) => (
				<div
					key={ind}
					className="border-slate-200 w-full border rounded-md p-6 mb-4"
				>
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
						<div>{el.phone_number}</div>
					</div>
				</div>
			))}
		</div>
	);
}
