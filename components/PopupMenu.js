import styles from '@/styles/Popup.module.css';
import { SmallCloseIcon } from '@chakra-ui/icons';

export default function PopupMenu({
	setPopup,
	clearFilters,
	handleChange,
	selections,
	applyFilters,
	filterQty,
}) {
	function clear() {
		setPopup(false);
		clearFilters();
	}
	return (
		<div className={styles['popup-container']}>
			<div
				className={`grid grid-cols-3 items-center ${styles.top}`}
			>
				<div className="text-gray_400 text-sm font-semibold">
					<span
						className={`${styles.clear} ${
							filterQty() > 0
								? styles[
										'clear-active'
								  ]
								: ''
						}`}
						onClick={
							filterQty() > 0
								? (e) => clear()
								: undefined
						}
					>
						Clear All
					</span>
				</div>
				<div className="text-center font-semibold text-lg text-gray_1000">
					Filter
				</div>
				<div className="text-right">
					<SmallCloseIcon
						onClick={(e) => setPopup(false)}
						className={styles.close}
					/>
				</div>
			</div>
			<div className="px-4">
				<div className="px-2">
					<p className="text-gray_800 font-medium text-sm mb-5">
						Friend Status
					</p>
					<div className="flex justify-between items-center text-base font-semibold text-gray_1000 mb-5">
						Close Friends
						<input
							name="close"
							type="checkbox"
							checked={
								selections.close
							}
							onChange={(e) =>
								handleChange(e)
							}
							className={
								styles.checkbox
							}
						/>
					</div>
					<div className="flex justify-between items-center text-base font-semibold text-gray_1000">
						Super Close Friends
						<input
							name="super"
							type="checkbox"
							checked={
								selections.super
							}
							onChange={handleChange}
							className={
								styles.checkbox
							}
						/>
					</div>
				</div>
			</div>
			<div className="px-4 pb-3">
				<div onClick={(e) => applyFilters()}>
					<button
						onClick={(e) => setPopup(false)}
						className="w-full rounded-md bg-gray_1000 text-white font-semibold py-2"
					>
						Apply
					</button>
				</div>
			</div>
		</div>
	);
}
