export default function FriendsSkeleton() {
	return (
		<div className="border-slate-200 w-full border rounded-md p-6 mb-4">
			<div className="animate-pulse flex space-x-4">
				<div className="flex-1 space-y-6 py-1">
					<div className="h-2 bg-slate-400 rounded"></div>
					<div className="space-y-3">
						<div className="grid grid-cols-3 gap-4">
							<div className="h-2 bg-slate-400 rounded col-span-2"></div>
							<div className="h-2 bg-slate-400 rounded col-span-1"></div>
						</div>
						<div className="h-2 bg-slate-400 rounded"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
