import styles from '@/styles/Friends.module.css';

export default function FriendsSkeleton() {
	return (
		<div
			className={`border border-gray_400 w-full rounded-md p-6 mb-4 grid content-center ${styles['loading-item']}`}
		>
			<div className="animate-pulse flex space-x-4">
				<div className="flex-1 space-y-6 py-1">
					<div className="space-y-3">
						<div className="grid grid-cols-12 gap-4">
							<div
								className={`h-4 rounded-lg col-start-1 col-end-5 ${styles['loading-bar']}`}
							></div>
							<div
								className={`h-4 bg-slate-400 rounded-lg col-start-11 col-end-13 ${styles['loading-bar']}`}
							></div>
						</div>
						<div className="grid grid-cols-12 gap-4">
							<div
								className={`h-4 rounded-lg col-start-1 col-end-6 ${styles['loading-bar']}`}
							></div>
							<div
								className={`h-4 bg-slate-400 rounded-lg col-start-12 col-end-13 ${styles['loading-bar']}`}
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
